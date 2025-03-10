import { writeFileSync } from "fs";
import { Store, Writer } from "n3";
import { ODRLEngineMultipleSteps, ODRLEvaluator } from "odrl-evaluator";
import * as path from "path";
import {
    createIndex,
    loadTestCases,
    loadWebTestCase,
    TestCase
} from "../src";


// Note: this can give problems -> need proper cli functionality with default current rootDir
const rootDir = path.join(__dirname,"..", "data");
const policiesDir = path.join(rootDir, "policies");
const requestsDir = path.join(rootDir, "requests");
const testCasesDir = path.join(rootDir, "test_cases");
const stateOfTheWorldDir = path.join(rootDir, "sotw");

const online = "https://raw.githubusercontent.com/SolidLabResearch/ODRL-Test-Suite/refs/heads/main/"

async function main() {
    console.log(`Loading all test cases: policies, requests and test case (state of the world, expected compliance report and test case)`);

    const testCaseMap = await loadTestCases(policiesDir, requestsDir, testCasesDir, stateOfTheWorldDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase) => testCases.push(testCase));
    console.log(`Test cases loaded.`);


    console.log("Create Index over all test cases");

    // creating the index -> store and publish
    const index = createIndex([testCases[0]], {baseIRI:online, projectDirectory: path.join(__dirname,"..")});

    const indexPath = path.join(rootDir, 'index.ttl')
    console.log(`Store index at '${indexPath}'`);
    writeFileSync(indexPath, new Writer().quadsToString(index));
    console.log(`When pushing code, this will be at ${online}data/index.ttl`);
    console.log();

    // testing the index that we just created
    console.log("Test Fetching using index:");
    const testCaseID = 'urn:uuid:e2123eb7-0707-4f24-bcc0-9d61dd9088a9' // test case 1
    // const testCaseID = 'urn:uuid:296a3e9d-af68-4d1c-8acd-f2958c3d7a8a' // test case 16
    console.log(`Test case ID: ${testCaseID}`);
    console.log(new Writer().quadsToString(new Store(index).getQuads(testCaseID, null, null, null)));
    console.log();

    console.log("Fetch test case from web");
    const onlineTestCase = await loadWebTestCase(testCaseID, index);
    const { policy, request, stateOfTheWorld, title } = onlineTestCase;
    console.log("Successful");

    console.log("Evaluate");

    const odrlEvaluator = new ODRLEvaluator(new ODRLEngineMultipleSteps());
    const evaluation = await odrlEvaluator.evaluate(policy.quads, request.quads, stateOfTheWorld.quads);

    console.log(new Writer().quadsToString(evaluation));
}
main()

