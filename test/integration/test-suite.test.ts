import * as path from "path";
import {isomorphic} from "rdf-isomorphic";
import {ODRLEngineMultipleSteps, ODRLEvaluator} from "odrl-evaluator";
import {
    blanknodeify,
    ComplianceReportComparator,
    fileAsStore,
    loadTestCases,
    runComparisonTestSuite,
    runTestSuite,
    TestCase,
    TestCaseEvaluation,
    TestCaseEvaluator,
    testSuiteResult
} from "../../src";

describe('The test suite for the ODRL evaluator', () => {

    const rootDir = path.join(__dirname, "..", "data", "ODRL");
    const policiesDir = path.join(rootDir, "policies");
    const requestsDir = path.join(rootDir, "requests");
    const testCasesDir = path.join(rootDir, "test_cases");
    const stateOfTheWorldDir = path.join(rootDir, "sotw");

    const odrlEvaluator = new ODRLEvaluator(new ODRLEngineMultipleSteps());
    let testCaseEvaluator: TestCaseEvaluator;
    let testCaseMap: Map<string, TestCase> = new Map();
    let testCases: TestCase[] = [];

    let evaluations : TestCaseEvaluation[] = [];

    beforeAll(async () => {
        testCaseEvaluator =  new TestCaseEvaluator(odrlEvaluator, ComplianceReportComparator.activation);
        testCaseMap = await loadTestCases(policiesDir, requestsDir, testCasesDir, stateOfTheWorldDir);
        testCaseMap.forEach((testCase)=> testCases.push(testCase));

        evaluations = await runTestSuite(testCases, testCaseEvaluator);
    })

    it('can successfully evaluate all the test cases.', async () => {
        const evaluations = await runTestSuite(testCases, testCaseEvaluator);
        expect(evaluations.length).toEqual(testCaseMap.size)
    })

    it('its output is the same as the last stable run with the previous ODRL Evaluator while comparing on activation status.', async () => {
        const lastRunFilePath = path.join(__dirname, "..", "assets", "test-suite", "Reports-activation.ttl");
        const expectedTestSuiteResult = await fileAsStore(lastRunFilePath);

        const testSuiteComparisons = await runComparisonTestSuite(evaluations, ComplianceReportComparator.activation);
        const testSuiteGraph = testSuiteResult(testSuiteComparisons);

        expect(isomorphic(blanknodeify(testSuiteGraph), blanknodeify(expectedTestSuiteResult.getQuads(null, null, null, null)))).toBeTruthy();
    })

    it('its output is the same as the last stable run with the previous ODRL Evaluator while comparing on activation and constraint status.', async () => {
        const lastRunFilePath = path.join(__dirname, "..", "assets", "test-suite", "Reports-simple.ttl");
        const expectedTestSuiteResult = await fileAsStore(lastRunFilePath);

        const testSuiteComparisons = await runComparisonTestSuite(evaluations, ComplianceReportComparator.simple);
        const testSuiteGraph = testSuiteResult(testSuiteComparisons);

        expect(isomorphic(blanknodeify(testSuiteGraph), blanknodeify(expectedTestSuiteResult.getQuads(null, null, null, null)))).toBeTruthy();
    })

    it('its output is the same as the last stable run with the previous ODRL Evaluator while comparing on isomorphism status.', async () => {
        const lastRunFilePath = path.join(__dirname, "..", "assets", "test-suite", "Reports-isomorphism.ttl");
        const expectedTestSuiteResult = await fileAsStore(lastRunFilePath);

        const testSuiteComparisons = await runComparisonTestSuite(evaluations, ComplianceReportComparator.isomorphism);
        const testSuiteGraph = testSuiteResult(testSuiteComparisons);

        expect(isomorphic(blanknodeify(testSuiteGraph), blanknodeify(expectedTestSuiteResult.getQuads(null, null, null, null)))).toBeTruthy();
    })
})
