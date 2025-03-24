import * as path from "path";
import { ODRLEngineMultipleSteps, ODRLEvaluator, EyeReasoner, resourceToOptimisedTurtle } from "odrl-evaluator";
import {
    ComplianceReportComparator,
    loadTestSuite,
    TestCase,
    TestCaseEvaluator
} from "../src";


const rootDir = path.join(__dirname, "..", "data");


async function main() {
    console.log(`Loading all test cases: policies, requests and test case (state of the world, expected compliance report and test case)`);

    const testCaseMap = await loadTestSuite(rootDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase)=> testCases.push(testCase));

    // evaluate function -> loop over test cases and evaluate
    // const engine = new ODRLEngineMultipleSteps(); // EYE JS engine
    const engine = new ODRLEngineMultipleSteps({reasoner:new EyeReasoner('/usr/local/bin/eye', ["--quiet", "--nope", "--pass-only-new"])}); // EYE local
    const odrlEvaluator = new ODRLEvaluator(engine);
    const comparison = ComplianceReportComparator.simple;
    const testCaseEvaluator = new TestCaseEvaluator(odrlEvaluator, comparison);

    const result1 =await testCaseEvaluator.evaluateAndCompare(testCaseMap.get("urn:uuid:1c47df55-a53d-4740-93a8-614fc3ea9a1b")!) //test case 59

    console.log(resourceToOptimisedTurtle(result1.evaluation.quads,{}));
    
}
main()