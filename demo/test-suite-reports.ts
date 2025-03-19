import { writeFileSync } from "fs";
import * as path from "path";
import { ODRLEngineMultipleSteps, ODRLEvaluator, EyeReasoner} from "odrl-evaluator";
import {
    ComplianceReportComparator,
    loadTestCases, resourceToOptimisedTurtle,
    runComparisonTestSuite,
    runTestSuite,
    storeTestCase,
    TestCase,
    TestCaseEvaluation,
    TestCaseEvaluator,
    testSuiteDocumentation, testSuiteResult
} from "../src";


// Note: this can give problems -> need proper cli functionality with default current rootDir
const rootDir = path.join(__dirname, "..", "data");
const policiesDir = path.join(rootDir, "policies");
const requestsDir = path.join(rootDir, "requests");
const testCasesDir = path.join(rootDir, "test_cases");
const stateOfTheWorldDir = path.join(rootDir, "sotw");
const documentationDir = path.join(rootDir, "documentation");
const resultsDir = path.join(rootDir, "results");

// const engine = new ODRLEngineMultipleSteps(); // EYE JS engine
const engine = new ODRLEngineMultipleSteps({reasoner:new EyeReasoner('/usr/local/bin/eye', ["--quiet", "--nope", "--pass-only-new"])}); // EYE local
const odrlEvaluator = new ODRLEvaluator(engine);
const comparison = ComplianceReportComparator.simple;
const testCaseEvaluator = new TestCaseEvaluator(odrlEvaluator, comparison);

async function main() {
    console.log(`Loading all test cases: policies, requests and test case (state of the world, expected compliance report and test case)`);

    const testCaseMap = await loadTestCases(policiesDir, requestsDir, testCasesDir, stateOfTheWorldDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase) => testCases.push(testCase));
    console.log(`Test cases loaded.`);

    console.log(`Creating documentation of test cases (${testCaseMap.size}) in: ${documentationDir}`);

    // create documentation for all test cases
    for (const testCase of testCases) {
        // I deliberately run these. If they make changes in the documentation (which should always be correct), then it means either a policy, request state of the world or expected compliance report has changed.
        // If this was not desireable action MUST be undertaken by the repository owner(s)!!
        storeTestCase(testCase, documentationDir);
    }
    console.log(`Documentation created.`);

    console.log(`Evaluator: ${odrlEvaluator.constructor.name}`);
    console.log(`Engine: ${engine.constructor.name}`);
    
    // evaluate function -> loop over test cases and evaluate
    const start = performance.now();
    const evaluations: TestCaseEvaluation[] = await runTestSuite(testCases, testCaseEvaluator);
    const end = performance.now();

    // log general results of test suite
    console.log(`Test suite report:`);
    console.log(`${testCaseMap.size} ODRL evaluations attempted.`);
    console.log(`${evaluations.filter(evaluation => evaluation.evaluationStatus).length} ODRL evaluations succeeded.`);
    console.log(`Total execution time: ${end - start} ms`);

    // store results away
    await storeTestSuiteOutput(evaluations, resultsDir, ComplianceReportComparator.isomorphism);
    await storeTestSuiteOutput(evaluations, resultsDir, ComplianceReportComparator.activation);
    await storeTestSuiteOutput(evaluations, resultsDir, ComplianceReportComparator.simple);
}
main()

/**
 * Compares the test cases with the evaluated compliance report following the given metric.
 * Stores the output of a test suite run in a human and machine readable way in a directory.
 * 
 * Evaluate with metric
 * Store documentation at `outputDirectory`/`date`_`metric`_test-suite-report.md
 * Store output at `outputDirectory`/`date`_`metric`_test-suite-report.ttl
 * 
 * @param testCaseEvaluations - Test Cases which are already evaluated with an ODRL Evaluator.
 * @param outputDirectory - The directory to which the output should be stored
 * @param metric - The metric to compare the test case (expected compliance report) with the evaluated compliance report.
 */
async function storeTestSuiteOutput(testCaseEvaluations: TestCaseEvaluation[], outputDirectory: string, metric: ComplianceReportComparator): Promise<void> {
    const testSuiteComparisons = await runComparisonTestSuite(testCaseEvaluations, metric);
    const overview = testSuiteDocumentation(testSuiteComparisons, outputDirectory, {
        engine: engine.constructor.name, // NOTE: this is dangerous as this takes the engine in the file here, DON'T re-use this function without rewriting
        evaluator: odrlEvaluator.constructor.name, // NOTE: this is dangerous as this takes the evaluator in the file here, DON'T re-use this function without rewriting
        comparator: metric
    });
    const testSuiteGraph = testSuiteResult(testSuiteComparisons);

    const absoluteFilePath = path.join(outputDirectory, `${metric}_test-suite-report`);
    const prefixes = {
        'odrl': 'http://www.w3.org/ns/odrl/2/',
        'ex': 'http://example.org/',
        'temp': 'http://example.com/request/',
        'dct': 'http://purl.org/dc/terms/',
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
        'foaf': 'http://xmlns.com/foaf/0.1/',
        'report': 'https://w3id.org/force/compliance-report#'
    }
    const absoluteFilePathOverview = absoluteFilePath + '.md';
    const absoluteFilePathGraph = absoluteFilePath + '.ttl';
    writeFileSync(absoluteFilePathOverview, overview);
    writeFileSync(absoluteFilePathGraph, resourceToOptimisedTurtle(testSuiteGraph, prefixes));

    console.log(metric);
    console.log(`Human readable Test Suite overview: ${absoluteFilePathOverview}`);
    console.log(`Machine readable Test Suite overview: ${absoluteFilePathGraph}`);
}