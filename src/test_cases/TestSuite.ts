import { ComplianceReport, TestCase, TestCaseEvaluation } from "../Interfaces";
import { ComplianceReportComparator, TestCaseEvaluator } from "../TestCaseEvaluator";
import path from "path";
import { Quad, DataFactory } from "n3";
import { DCT, RDF, TEST, XSD } from "../Vocabularies";
import { v4 } from "uuid";
import { ODRLEvaluator } from "odrl-evaluator";

const { quad, namedNode, literal } = DataFactory;

/**
 * Evaluate a test case with an ODRL Evaluator and compare the compliance report of the test case with the evaluated one.
 *
 * @param testCases
 * @param testCaseEvaluator
 */
export async function runTestSuite(testCases: TestCase[], testCaseEvaluator: TestCaseEvaluator): Promise<TestCaseEvaluation[]> {
    const evaluations: TestCaseEvaluation[] = []

    for (const testCase of testCases) {
        const testCaseEvaluation = await testCaseEvaluator.evaluateAndCompare(testCase);
        evaluations.push(testCaseEvaluation);
    }
    return evaluations;
}

/**
 * Compare test cases expected compliance report with compliance report using the appropriate {@link ComplianceReportComparator}
 * This function does not evaluate anything.
 * @param input
 * @param comparator
 */
export async function runComparisonTestSuite(input: { testCase: TestCase; evaluation: ComplianceReport }[], comparator: ComplianceReportComparator): Promise<TestCaseEvaluation[]> {
    const evaluations: TestCaseEvaluation[] = []

    const odrlEvaluator = new ODRLEvaluator();
    const testCaseEvaluator = new TestCaseEvaluator(odrlEvaluator, comparator)
    for (const { testCase, evaluation } of input) {
        const testCaseEvaluation = await testCaseEvaluator.compare(testCase, evaluation);
        evaluations.push(testCaseEvaluation);
    }
    return evaluations;
}

/**
 * Creates human-readable table of all the test cases.
 *
 * @param evaluatedTestCases A list of evaluated test cases
 * @param executionTime The total time it took to evaluate all of them
 * @param directory The directory to which this output should be written to
 * @param comparator The way comparison has been made in the {@link TestCaseEvaluator }
 * @returns
 */
export function testSuiteDocumentation(evaluatedTestCases: TestCaseEvaluation[], directory: string,
    extra?: { comparator?: string, executionTime?: number, evaluator?: string, engine?: string }): string {
    let overview = `# Test Suite Evaluation Overview
Engine: ${extra?.engine ? `${extra.engine}` : "UNKOWN"} <br>
Evaluator: ${extra?.evaluator ? `${extra.evaluator}` : "UNKOWN"} <br>
Comparison metric: ${extra?.comparator ? `${extra.comparator}` : "UNKOWN"} <br>
The total Evaluation took ${extra?.executionTime} ms. <br>
There were ${evaluatedTestCases.filter(evaluation => evaluation.evaluationStatus).length} ODRL evaluations that succeeded. <br>
There were ${evaluatedTestCases.filter(evaluation => evaluation.comparisonStatus).length} ODRL evaluations correct compared to the Expected Compliance Report. <br>
| Test case ID | Scenario | Evaluation status | Comparison status |\n`
    overview += `|-|-|-|-|\n`
    for (const evaluatedTestCase of evaluatedTestCases) {
        const testCaseColumn = `[${evaluatedTestCase.testCase.identifier}](${path.relative(directory, evaluatedTestCase.testCase.expectedReport.source)})`
        const scenarioColumn = `${evaluatedTestCase.testCase.title}`
        const evaluationStatusColumn = `${evaluatedTestCase.evaluationStatus}`
        const comparisonStatusColumn = `${evaluatedTestCase.comparisonStatus}`
        overview += `|${testCaseColumn}|${scenarioColumn}|${evaluationStatusColumn}|${comparisonStatusColumn}|\n`
    }
    return overview
}

/**
 * Creates machine readable output of the output of a set of test case evaluations, i.e. a test-suite.
 * The test-suite graph contains:
 *  - http://example.org/numberTestCases: The total amount of test cases.
 *  - http://example.org/succesfullEvaluations: The total amount of ODRL evaluations that did not throw an error.
 *  - http://example.org/sucessfullTestCases: The total amount of test cases where the expected compliance report is equal to the evaluated compliance report.
 * @param evaluatedTestCases
 */
export function testSuiteResult(evaluatedTestCases: TestCaseEvaluation[]): Quad[] {
    const quads: Quad[] = [];
    const testSuiteNode = namedNode(`urn:uuid:${v4()}`);
    quads.push(quad(testSuiteNode, namedNode('http://example.org/numberTestCases'), literal(evaluatedTestCases.length)));
    quads.push(quad(testSuiteNode, namedNode('http://example.org/succesfullEvaluations'), literal(evaluatedTestCases.filter(evaluation => evaluation.evaluationStatus).length)));
    quads.push(quad(testSuiteNode, namedNode('http://example.org/sucessfullTestCases'), literal(evaluatedTestCases.filter(evaluation => evaluation.comparisonStatus).length)));

    for (const evaluatedTestCase of evaluatedTestCases) {
        quads.push(quad(testSuiteNode, namedNode("http://example.org/testCase"), namedNode(evaluatedTestCase.testCase.identifier)));
        quads.push(...evaluatedTestCaseAsQuads(evaluatedTestCase));
    }
    return quads;
}

/**
 * Creates machine readable output of one test case evaluation.
 * @param evaluatedTestCase 
 * @returns 
 */
export function evaluatedTestCaseAsQuads(evaluatedTestCase: TestCaseEvaluation): Quad[] {
    const quads: Quad[] = [];

    quads.push(quad(namedNode(evaluatedTestCase.testCase.identifier), TEST.terms.policy, namedNode(evaluatedTestCase.testCase.policy.identifier)));
    quads.push(quad(namedNode(evaluatedTestCase.testCase.identifier), TEST.terms.request, namedNode(evaluatedTestCase.testCase.request.identifier)));
    quads.push(quad(namedNode(evaluatedTestCase.testCase.identifier), TEST.terms.sotw, namedNode(evaluatedTestCase.testCase.stateOfTheWorld.identifier)));
    quads.push(quad(namedNode(evaluatedTestCase.testCase.identifier), TEST.terms.expectedReport, namedNode(evaluatedTestCase.testCase.expectedReport.identifier)));
    quads.push(quad(namedNode(evaluatedTestCase.testCase.identifier), namedNode(TEST.namespace + "succesfullEvaluation"), literal(evaluatedTestCase.evaluationStatus + "", XSD.terms.boolean)));
    quads.push(quad(namedNode(evaluatedTestCase.testCase.identifier), namedNode(TEST.namespace + "succesfullComparison"), literal(evaluatedTestCase.comparisonStatus + "", XSD.terms.boolean)));

    if (evaluatedTestCase.evaluationStatus) {
        quads.push(quad(namedNode(evaluatedTestCase.testCase.identifier), namedNode(TEST.namespace + "report"), namedNode(evaluatedTestCase.evaluation.identifier)));
        quads.push(...evaluatedTestCase.evaluation.quads);
    }
    return quads;
}

export function testCaseAsQuads(testCase: TestCase): Quad[] {
    const quads: Quad[] = [];

    quads.push(quad(namedNode(testCase.identifier), RDF.terms.type, TEST.terms.TestCase));
    quads.push(quad(namedNode(testCase.identifier), DCT.terms.title, literal(testCase.title)));
    quads.push(quad(namedNode(testCase.identifier), TEST.terms.policy, namedNode(testCase.policy.identifier)));
    quads.push(quad(namedNode(testCase.identifier), TEST.terms.request, namedNode(testCase.request.identifier)));
    quads.push(quad(namedNode(testCase.identifier), TEST.terms.sotw, namedNode(testCase.stateOfTheWorld.identifier)));
    quads.push(quad(namedNode(testCase.identifier), TEST.terms.expectedReport, namedNode(testCase.expectedReport.identifier)));

    return quads;
}
