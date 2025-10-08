import {
    ComplianceReportComparator,
    loadTestSuite, parseRequests, Policy, resourceToOptimisedTurtle,
    runComparisonTestSuite,
    runTestSuite,
    SOTW,
    storeTestCase,
    TestCase,
    TestCaseEvaluation,
    TestCaseEvaluator,
    testSuiteDocumentation, testSuiteResult
} from "./src";
import { writeFileSync } from "fs";
import { Quad, Store, Writer } from "n3";
import { EyeJsReasoner, RDF } from "odrl-evaluator";
import * as path from "path";

import { write } from "@jeswr/pretty-turtle/dist"

const originalDataRootDir = path.join(__dirname, "data");
const newDataRootDir = path.join(__dirname, "datav2");
const documentationDir = path.join(newDataRootDir, "documentation");

async function main() {
    console.log(`Loading all original test cases: policies, requests and test case (state of the world, expected compliance report and test case)`);

    const testCaseMap = await loadTestSuite(originalDataRootDir);
    const testCases: TestCase[] = [];
    testCaseMap.forEach((testCase) => testCases.push(testCase));
    console.log(`Test cases loaded.`);

    console.log(`Loading all new test cases: policies, requests and test case (state of the world, expected compliance report and test case)`);
    const newTestCaseMap = await loadTestSuite(newDataRootDir);
    const newTestCases: TestCase[] = [];
    newTestCaseMap.forEach((testCase) => newTestCases.push(testCase));
    console.log(`New cases loaded.`);

    console.log(`Transform all state of the world and requests to the new version agreed upon within the ODRL FS CG:`)
    console.log(`See: https://w3id.org/force/sotw`)
    console.log(`See paper: https://w3id.org/force/papers/WOP2025`)
    console.log();
    console.log('NOTE: Conversion for state of the world done manually');

    console.log('check that the identifiers and amount are equal');
    const originalSotwIds = testCases.map(testcase => testcase.stateOfTheWorld.identifier)
    const newSotwIds: string[] = []
    newTestCases.forEach(testcase => {
        const sotwStore = new Store(testcase.stateOfTheWorld.quads)
        const sotwSubjects = sotwStore.getSubjects(RDF.terms.type, "https://w3id.org/force/sotw#Sotw", null)
        if (sotwSubjects.length === 1) {
            const sotwSubject = sotwSubjects[0].value
            newSotwIds.push(sotwSubject)
        } else {
            console.log(testcase.title);
            console.log(new Writer().quadsToString(testcase.stateOfTheWorld.quads))
        }
    }
    )

    // checking whether they are equal
    function areListsEqual(list1: string[], list2: string[]): boolean {
        if (list1.length !== list2.length) return false;

        const sorted1 = [...list1].sort();
        const sorted2 = [...list2].sort();

        return sorted1.every((value, index) => value === sorted2[index]);
    }
    console.log(newSotwIds);

    console.log('Equality: ' + areListsEqual(originalSotwIds, newSotwIds));





}
// main()

async function convertRequests(){
    const requestDir = 'requests'
    const oldRequestDir = path.join(originalDataRootDir, requestDir)
    const newRequestDir = path.join(newDataRootDir, requestDir)

    const oldRequestMap = await parseRequests(oldRequestDir)
    const oldRequests: Policy[] = [];
    oldRequestMap.forEach((req) => oldRequests.push(req));
    const date = new Date('2016-01-01T00:00:00.000Z') // Date older than oldest
    for (const oldRequest of oldRequests) {
        const fileName = path.relative(oldRequestDir, oldRequest.source)
        const newSourcePath = path.join(newRequestDir, fileName)
        
        const newRequest = await transformRequest(oldRequest.quads, date);

        writeFileSync(newSourcePath, await write(newRequest, {prefixes: {
                cr: "https://w3id.org/force/compliance-report#",
    dct: "http://purl.org/dc/terms/created",
    ex: "http://example.org/",
    foaf: "http://xmlns.com/foaf/0.1/",
    odrl: "http://www.w3.org/ns/odrl/2/",
    schema: "https://schema.org/",
    xsd: "http://www.w3.org/2001/XMLSchema#",
    sotw: "https://w3id.org/force/sotw#"
        }}))
        
    }
}
convertRequests()

/**
 * Transforms the evaluation request (quads) (old version*) 
 * to the new version using Notation3 and EyeJs
 * 
 * Note: as the new request requires time, this is added as well.
 * 
 * old version: see `Interoperable Interpretation and Evaluation of ODRL Policies`, https://link.springer.com/chapter/10.1007/978-3-031-94578-6_11
 * new version: https://spec.knows.idlab.ugent.be/sotw/latest/ (15 august)
 */
async function transformRequest(oldRequest: Quad[], date = new Date()): Promise<Quad[]> {
    const notation3Rule =
        `@prefix odrl: <http://www.w3.org/ns/odrl/2/> .
@prefix sotw: <https://w3id.org/force/sotw#> .
@prefix faqir: <https://faqir.org/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ex: <http://example.org/> .
@prefix string: <http://www.w3.org/2000/10/swap/string#> .
@prefix log: <http://www.w3.org/2000/10/swap/log#> .

{
    ?policy a odrl:Request ;
        odrl:permission ?perm .
    ?perm a odrl:Permission ;
        odrl:action ?action ;
        odrl:target ?target ;
        odrl:assignee ?assignee .
}
=>
{
    ?policy a sotw:EvaluationRequest ;
        dcterms:issued "${date.toISOString()}"^^xsd:dateTime ;
        sotw:requestedAction ?action ;
        sotw:requestingParty ?assignee ;
        sotw:requestedTarget ?target .
} .`

const eye = new EyeJsReasoner();
const newSotwStore = await eye.reason(new Store([...oldRequest]), [notation3Rule])
// Note: as description is already part of the policy triples, no new is put out. So this is done manually
    const description = new Store(oldRequest).getQuads(null, "http://purl.org/dc/terms/description", null, null)
    if (description.length === 1) {
        newSotwStore.addQuads(description)
    }
    return newSotwStore.getQuads(null, null, null, null)
}