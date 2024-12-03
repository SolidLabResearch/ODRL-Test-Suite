import { Evaluator } from "odrl-evaluator";
import {
    ComplianceReport,
    ConstraintReportProperties,
    TestCase,
    TestCaseEvaluation
} from "./Interfaces";
import { Quad } from "n3";
import {
    getActivationState,
    getAttemptState, getPolicyRuleIdentifier,
    getReportIdentifier,
    getConstraintPropertiesFromType,
    getRequestedRuleIdentifier,
    getRuleReportIdentifier,
    getConstraintReportIdentifiers,
    getConstraintReportProperties
} from "./test_cases/ComplianceReportUtil";
import { blanknodeify } from "./RDFUtil";
import { isomorphic } from "rdf-isomorphic";
import { REPORT } from "./Vocabularies";

/**
 * Mechanisms to compare two Policy Compliance Reports with each other.
 */
export enum ComplianceReportComparator {
    /** Does full RDF isomorphism of the two reports */
    isomorphism= "RDF-Isomorphism",
    /** Comparison based on whether the rule reports refer to the same policy and requests and have the same state  */
    activation="Rule-Activation-similarity",
    /** Comparison based on whether the Policy Compliance Reports have the same explanation everywhere */
    explanation="Matching-explanation",
    /** Comparison based on all the states of the two Policy Compliance Reports    */
    simple="Rule-Activation-Constraint-satisfaction-similarity",
}

/**
 * Evaluate a Test Case using an Evaluator.
 * Furthermore, compares the generated Compliance Report with the Expected Compliance Report (part of the Test Case).
 *
 * Multiple comparison strategies are supported, see {@link ComplianceReportComparator}
 * The default strategy is RDF isomorphism
 */
export class TestCaseEvaluator {
    private readonly evaluator: Evaluator;
    private readonly comparator: ComplianceReportComparator;

    public constructor(evaluator: Evaluator, comparator?: ComplianceReportComparator) {
        this.evaluator = evaluator;
        this.comparator = comparator ?? ComplianceReportComparator.isomorphism;
    }

    public async evaluateAndCompare(testCase: TestCase): Promise<TestCaseEvaluation> {
        let odrlEvaluation: ComplianceReport = {
            identifier: "",
            quads: [],
            source: "None"
        }

        let testCaseEvaluation: TestCaseEvaluation = {
            comparisonStatus: false,
            evaluation: odrlEvaluation,
            evaluationStatus: false,
            testCase: testCase
        }


        try {
            // TODO: deal with typings
            // @ts-ignore
            const evaluationReport: Quad[] = await this.evaluator.evaluate(testCase.policy.quads, testCase.request.quads, testCase.stateOfTheWorld.quads)
            odrlEvaluation.identifier = getReportIdentifier(evaluationReport);
            odrlEvaluation.quads = evaluationReport;
            testCaseEvaluation.evaluationStatus = true;
        } catch (e) {
            if (e instanceof Error) {
                console.log("No evaluation happened:", e.message);
            }
        }

        if (testCaseEvaluation.evaluationStatus === false) return testCaseEvaluation;


        return await this.compare(testCase, odrlEvaluation);
    }

    public async compare(testCase: TestCase, complianceReport: ComplianceReport): Promise<TestCaseEvaluation> {
        let testCaseEvaluation: TestCaseEvaluation = {
            comparisonStatus: false,
            evaluation: complianceReport,
            evaluationStatus: true,
            testCase: testCase
        }
        switch (this.comparator) {
            case ComplianceReportComparator.isomorphism:
                testCaseEvaluation.comparisonStatus = this.isIsomorph(testCase.expectedReport, complianceReport);
                break;
            case ComplianceReportComparator.activation:
                try {
                    testCaseEvaluation.comparisonStatus = this.ruleActivationStateEquality(testCase.expectedReport, complianceReport);
                } catch (e) {
                    console.log(`Test case [${testCaseEvaluation.testCase.identifier}] could not be compared to evaluated report:`);

                    if (e instanceof Error) {
                        console.log("Reason:", e.message);
                    }
                }
                break;
            case ComplianceReportComparator.explanation:
                throw new Error("Not implemented")
            case ComplianceReportComparator.simple:
                try {
                    testCaseEvaluation.comparisonStatus = this.ruleActivationStateEquality(testCase.expectedReport, complianceReport) &&
                        this.constraintStateEquality(testCase.expectedReport, complianceReport);
                } catch (e) {
                    console.log(`Test case [${testCaseEvaluation.testCase.identifier}] could not be compared to evaluated report:`);

                    if (e instanceof Error) {
                        console.log("Reason:", e.message);
                    }
                }
                break;
            default:
                throw new Error("Not implemented")

        }
        return testCaseEvaluation
    }
    /**
     * Compares the expected compliance report from a given test case with an evaluated compliance report using RDF isomorphism
     *
     * To do the comparison, a translation of subject nodes to blank nodes is executed on both reports.
     * After that {@link isomorphic} is used that compares the two graphs.
     * @param expectedReport
     * @param evaluatedReport
     * @private
     */
    private isIsomorph(expectedReport: ComplianceReport, evaluatedReport: ComplianceReport): boolean {
        const cleanReport: Quad[] = blanknodeify(evaluatedReport.quads);
        const cleanExpectedResult: Quad[] = blanknodeify(expectedReport.quads);

        const equality = isomorphic(cleanReport, cleanExpectedResult);
        return equality;
    }

    /**
     * Compares the expected compliance report from a given test case with an evaluated compliance report by
     * checking whether the activation state, attempted state, rule request and policy request is equal between the two reports.
     *
     * This might be a bad strategy as the test case might contain several constraints that must be satisfied correctly,
     * which is not verified here.
     * @param expectedReport
     * @param evaluatedReport
     * @private
     */
    private ruleActivationStateEquality(expectedReport: ComplianceReport, evaluatedReport: ComplianceReport): boolean {
        // Note: An assumption is that there is only one rule reports in the expected and evaluated policy compliance report
        let equality = {
            activationState: false,
            attemptState: false,
            requestedRule: false,
            policyRule: false,
        }
        if (getActivationState(expectedReport) === getActivationState(evaluatedReport)) {
            equality.activationState = true;
        }

        if (getAttemptState(expectedReport) === getAttemptState(evaluatedReport)) {
            equality.attemptState = true;
        }

        if (getRequestedRuleIdentifier(expectedReport) === getRequestedRuleIdentifier(evaluatedReport)) {
            equality.requestedRule = true;
        }

        if (getPolicyRuleIdentifier(expectedReport) === getPolicyRuleIdentifier(evaluatedReport)) {
            equality.policyRule = true;
        }

        return Object.values(equality).every(value => value === true);
    }
    /**
     * Compares the expected compliance report from a given test case with an evaluated compliance report by doing by 
     * checking whether all the constraints of the expected Report are present in the evaluated Report 
     * and all their satisfaction states are the same.
     *
     * @param expectedReport
     * @param evaluatedReport
     * @private
     */
    private constraintStateEquality(expectedReport: ComplianceReport, evaluatedReport: ComplianceReport): boolean {
        // note: maybe this should be split up in multiple steps such that the individual components can more easily be debugged?
        // assumptions:
        // in one rule report: max 1 party, target, action report
        // constraint report also refers to original constraint

        // 1. get all constraint report identifiers from the expected report
        //    a. also get all constrain report identifiers from evaluated report and compare length
        // 2. loop over all of them and extract the satisfaction state of the expected and evaluated report
        // 3. Compare the `expectedConstraintState` and `evaluatedConstraintState`
        type ConstraintReportComparisonInput = {
            expectedConstraintState: ConstraintReportProperties,
            evaluatedConstraintState: ConstraintReportProperties | undefined,
        }

        const expectedReportConstraintReportIDs = getConstraintReportIdentifiers(expectedReport.quads);
        const evaluatedReportConstraintReportIDs = getConstraintReportIdentifiers(evaluatedReport.quads);
        if (expectedReportConstraintReportIDs.length !== evaluatedReportConstraintReportIDs.length) {
            return false;
        }

        const premiseReportComparsionInputs: ConstraintReportComparisonInput[] = [];

        for (const premiseReportIdentifier of expectedReportConstraintReportIDs) {
            const expectedConstraintState = getConstraintReportProperties(expectedReport, premiseReportIdentifier);
            let evaluatedConstraintState: ConstraintReportProperties | undefined;
            if (expectedConstraintState.type === REPORT.ConstraintReport) {
                evaluatedConstraintState = getConstraintPropertiesFromType(evaluatedReport, expectedConstraintState.type, expectedConstraintState.refencedConstraint);

            } else {
                evaluatedConstraintState = getConstraintPropertiesFromType(evaluatedReport, expectedConstraintState.type);
            }

            premiseReportComparsionInputs.push({
                expectedConstraintState: expectedConstraintState,
                evaluatedConstraintState: evaluatedConstraintState
            })
        }
        let comparison = true;
        for (const item of premiseReportComparsionInputs) {
            if (item.expectedConstraintState.satisfactionState !== item.evaluatedConstraintState?.satisfactionState) {
                comparison = false;
            }

        }
        return comparison
    }
}

