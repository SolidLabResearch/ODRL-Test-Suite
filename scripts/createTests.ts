import * as path from "path";
import {
    loadTestSuite,
    TestCase
} from "../src";
import { prefixes } from "odrl-evaluator";
import { write } from "@jeswr/pretty-turtle/dist"

const rootDir = path.join(__dirname,"..", "data");
// create tests that can be used within the ODRL Evaluator
// RDF JEST tests using the testcases

// created here as the tools are here
// tested at the odrl evaluator as we want to ensure odrl evaluator correctness

async function main(){
    // load test cases
    const testCaseMap = await loadTestSuite(rootDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase) => testCases.push(testCase));

    // Long running tests: 62-64
    // unsupported tests (Duties): 59-61 and 65-68
    const unresolvedTestcases = ["urn:uuid:9c052f5d-0788-4352-b957-322b432b1bfa","urn:uuid:8677b86e-4a09-421c-a75b-f50874c8ec58","urn:uuid:32ac9d9d-dddf-434a-a309-14bb9224ef2e","urn:uuid:1c47df55-a53d-4740-93a8-614fc3ea9a1b","urn:uuid:211654bf-86e1-42f6-8f20-cd08e3c3992e","urn:uuid:5b372c04-ceb8-48bd-b4b8-cb6380683374","urn:uuid:5ab9d056-dcb8-47f6-a4af-dd5d9320f958","urn:uuid:f9648615-bb2f-4d74-8f87-e2da0d327932","urn:uuid:2c997aef-a337-4503-aec7-3a93675f7b1a","urn:uuid:7844a3ce-40ec-4d6d-90f4-d0be27bba69c"]

    const jestTests: string[] = []
    
    for (const testCase of testCases) {
        if (unresolvedTestcases.includes(testCase.identifier)){
            continue;
        }
        jestTests.push(await jestTest(testCase));
    }

    const jestString =
`import { ODRLEngineMultipleSteps, ODRLEvaluator, blanknodeify } from "../../src";
import { Parser, Quad } from "n3";
import "jest-rdf";

describe('The ODRL evaluator succeeds following test case ', () => {
    const parser = new Parser();
    const odrlEvaluator = new ODRLEvaluator(new ODRLEngineMultipleSteps());

    ${jestTests.join('\n')}
          
})
`    
    console.log(jestString);
    
}
main()

async function jestTest(testCase: TestCase): Promise<string>{
    return `    it('${testCase.identifier}: ${testCase.title}', async () => {
        
    const odrlPolicy = \`${await write(testCase.policy.quads, {prefixes})}\`;
    const odrlRequest = \`${await write(testCase.request.quads, {prefixes})}\`;
    const sotw = \`${await write(testCase.stateOfTheWorld.quads, {prefixes})}\`;
    const expectedReport = \`${await write(testCase.expectedReport.quads, {prefixes})}\`;
    const report = await odrlEvaluator.evaluate(parser.parse(odrlPolicy), parser.parse(odrlRequest), parser.parse(sotw));

    expect(blanknodeify(report as any as Quad[])).toBeRdfIsomorphic(blanknodeify(parser.parse(expectedReport)));
    });
`
}