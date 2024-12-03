import {Quad} from "n3";

export type Policy = { identifier: string, quads: Quad[], source: string }
export type StateOfTheWorld = { identifier: string, quads: Quad[], source: string }
export type ComplianceReport = { identifier: string, quads: Quad[], source: string } // TODO: does this need a source?
export type RawTestCase = { identifier: string, quads: Quad[], source: string }
export type TestCase = {
    identifier: string,
    policy: Policy,
    request: Policy,
    stateOfTheWorld: StateOfTheWorld,
    expectedReport: ComplianceReport,
    title: string
}
/**
 * evaluationStatus: Did the evaluator create a report, that is did the evaluator achieve evaluation of the policy, state of the world and the request?
 * comparisonStatus: Are the expected and actual report equal?
 */
export type TestCaseEvaluation = { testCase: TestCase; evaluation: ComplianceReport; evaluationStatus: boolean; comparisonStatus: boolean; };
export type TestCaseProperties = { testCaseIdentifier: string; title: string; policyIdentifier: string; requestIdentifier: string; expectedReportIdentifier: string; stateOfTheWorldIdentifier: string}; // Note: horrible name, I know

export type ConstraintReportProperties = {
    /**
     * The type of constraint report as defined in the Compliance Report model:
     * Target, Action, Party or Constraint report.
     */
    type: string,
    /**
     * The identifier of the constraint the report is pointing to.
     * Note: Only in the case of a report of the type ConstraintReport.
     */
    refencedConstraint: string | undefined,
    /**
     * The identifier of the Constraint Report as defined in the Compliance Report model.
     */
    premiseReportIdentifier: string,
    /**
     * The satisfaction state
     */
    satisfactionState: string | undefined
}
