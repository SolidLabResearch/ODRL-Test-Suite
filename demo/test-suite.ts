import * as path from "path";
import { ODRLEngineMultipleSteps, ODRLEvaluator, EyeReasoner } from "odrl-evaluator";
import {
    ComplianceReportComparator,
    loadTestCases,
    runTestSuite,
    TestCase,
    TestCaseEvaluation,
    TestCaseEvaluator
} from "../src";


// Note: this can give problems -> need proper cli functionality with default current rootDir
const rootDir = path.join(__dirname, "..", "data");
const policiesDir = path.join(rootDir, "policies");
const requestsDir = path.join(rootDir, "requests");
const testCasesDir = path.join(rootDir, "test_cases");
const stateOfTheWorldDir = path.join(rootDir, "sotw");


async function main() {
    console.log(`Loading all test cases: policies, requests and test case (state of the world, expected compliance report and test case)`);

    const testCaseMap = await loadTestCases(policiesDir, requestsDir, testCasesDir, stateOfTheWorldDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase)=> testCases.push(testCase));
    console.log(`Test cases loaded.`);

    // evaluate function -> loop over test cases and evaluate
    // const engine = new ODRLEngineMultipleSteps(); // EYE JS engine
    const engine = new ODRLEngineMultipleSteps({reasoner: new EyeReasoner('/usr/local/bin/eye', ["--quiet", "--nope", "--pass-only-new"])}); // EYE local
    const odrlEvaluator = new ODRLEvaluator(engine);
    const comparison = ComplianceReportComparator.simple;
    const testCaseEvaluator = new TestCaseEvaluator(odrlEvaluator, comparison);

    console.log(`Evaluator: ${odrlEvaluator.constructor.name}`);
    console.log(`Engine: ${engine.constructor.name}`);
    console.log(`Comparison metric: ${comparison}`);

    const start = performance.now();
    const evaluations: TestCaseEvaluation[] = await runTestSuite(testCases, testCaseEvaluator)

    for (const testCaseEvaluation of evaluations){
        console.log(`Status of test case [${testCaseEvaluation.testCase.identifier}]: ${testCaseEvaluation.testCase.title}:`);
        console.log(`Evaluation status: ${testCaseEvaluation.evaluationStatus}`);
        console.log(`Comparison with Test Case: ${testCaseEvaluation.comparisonStatus}`);
    }

    const end = performance.now();
    console.log(`Test suite report:`);
    console.log(`${testCaseMap.size} ODRL evaluations attempted.`);
    console.log(`${evaluations.filter(evaluation => evaluation.evaluationStatus).length} ODRL evaluations succeeded.`);
    console.log(`${evaluations.filter(evaluation => evaluation.comparisonStatus).length} ODRL evaluations correct.`);
    console.log(`Total execution time: ${end - start} ms`);
}
main()

