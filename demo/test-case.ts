import * as path from "path";
import { ODRLEngineMultipleSteps, ODRLEvaluator, EyeReasoner, resourceToOptimisedTurtle } from "odrl-evaluator";
import {
    ComplianceReportComparator,
    loadTestSuite,
    TestCase,
    TestCaseEvaluator
} from "../src";
import 'dotenv/config';

const DEMO_TEST_CASE = 'urn:uuid:1c47df55-a53d-4740-93a8-614fc3ea9a1b'; // testcase-059
const rootDir = path.join(__dirname, "..", "data");

let TEST_CASE_ID;

if (process.argv.length != 3) {
    console.error(`usage: ${process.argv[1]} id`);
    console.error(`e.g. id = ${DEMO_TEST_CASE}`);
    console.error(`\n👉 No id provided, using ${DEMO_TEST_CASE}\n`);
    TEST_CASE_ID = DEMO_TEST_CASE;
}
else {
    TEST_CASE_ID = process.argv[2];
}

async function main() {
    const eye_bin = process.env.EYE_BIN;
    
    console.log(`Loading all test cases: policies, requests and test case (state of the world, expected compliance report and test case)`);

    const testCaseMap = await loadTestSuite(rootDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase)=> testCases.push(testCase));

    // evaluate function -> loop over test cases and evaluate
    let engine;

    if (eye_bin) {
        engine = new ODRLEngineMultipleSteps({reasoner:new EyeReasoner(eye_bin, ["--quiet", "--nope", "--pass-only-new"])}); // EYE local
    }
    else {
        engine = new ODRLEngineMultipleSteps(); // EYE JS engine 
    }
    
    const odrlEvaluator = new ODRLEvaluator(engine);
    const comparison = ComplianceReportComparator.simple;
    const testCaseEvaluator = new TestCaseEvaluator(odrlEvaluator, comparison);

    const testCase = testCaseMap.get(TEST_CASE_ID);

    if (! testCase) {
        console.error(`no such testCase ${TEST_CASE_ID}`);
        process.exit(2);
    }

    const result1 =await testCaseEvaluator.evaluateAndCompare(testCase);

    console.log(resourceToOptimisedTurtle(result1.evaluation.quads,{}));
    
}
main()