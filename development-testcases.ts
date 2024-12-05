import { Quad } from "n3";
import { ODRLEngineMultipleSteps, ODRLEvaluator, turtleStringToStore, resourceToOptimisedTurtle, EyeReasoner } from "odrl-evaluator";
import { getPolicyIdentifier, getReportIdentifier, getRequestIdentifier, getStateOfTheWorldIdentifier, parsePolicies, parseRequests, parseStateOfTheWorld, Policy, StateOfTheWorld, TestCase, testCaseAsQuads } from "./src/index"
import { v4 } from "uuid";
import * as path from "path";
enum CONFIG {
    NEW,
    REUSE
}

const config = { policy: CONFIG.REUSE, request: CONFIG.REUSE, sotw: CONFIG.REUSE }

const testCaseText = "Read request from Alice to resource X on weekdays from 9-17 in 2024 returns into yes (Alice Request Read X - past)."

// new POLICY
// const policyText = "Alice can only read X, given that eventually the duty is fulfilled."
// const policyID = `urn:uuid:${v4()}`
// const policyPermissionID = `urn:uuid:${v4()}`

// reuse POLICY
const policyText = "Nobody can do anything."
const policyID = "urn:uuid:29b08c0a-97ea-41b1-b8e9-88400b1230cf" // if you want to keep constant
const policyPermissionID = "urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e" // if you want to keep constant


// new REQUEST
// const requestText = "Requesting Party ALICE requests to READ resource X."
// const requestID = `urn:uuid:${v4()}` //request new
// const requestPermissionID = `urn:uuid:${v4()}`

// reuse REQUEST
const requestText = "Requesting Party ALICE requests to READ resource X."
const requestID = "urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364" // request alice read X
const requestPermissionID = "urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59" // request alice read X

// const requestText = "Requesting Party BOB requests to READ resource X."
// const requestID = "urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0" // request bob write X
// const requestPermissionID = "urn:uuid:0c997117-eefc-474e-9049-c4e3b8defbc7" // request bob write X

// const requestText = "Requesting Party BOB requests to WRITE resource Y."
// const requestID = "urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46" // request bob write Y
// const requestPermissionID = "urn:uuid:68ae9b26-69d2-48cf-83e6-ef77c4a9cda9" // request bob write Y

// const requestText = "Requesting Party ALICE requests to SELL resource X."
// const requestID = "urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749" // request Alice sell X
// const requestPermissionID = "urn:uuid:918e0608-59cd-4f69-8614-679f23f0bb7e" // request Alice sell X

// const requestText = "Requesting Party BOB requests to SELL resource X."
// const requestID = "urn:uuid:b7306adc-3f51-4ed4-b9fb-1864c2f1bdc9" // request bob sell X
// const requestPermissionID = "urn:uuid:057e7c34-57e7-473c-972c-d80a2a7b32b1" // request bob sell X

// const requestText = "Requesting Party ALICE requests to READ resource Y."
// const requestID = "urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed" // request alice read Y
// const requestPermissionID = "urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed" // request alice read Y

// const requestText = "Requesting Party ALICE requests to WRITE resource X."
// const requestID = "urn:uuid:5b323bdb-7b4d-4431-8548-de2d021b673d" // request alice write x
// const requestPermissionID = "urn:uuid:6045248b-571c-4f90-a5bc-c980bbe776e8" // request alice write x

// const requestText = "Requesting Party BOB requests to READ resource X."
// const requestID = "urn:uuid:df1566c9-a18b-444f-a1fa-98b976d411eb" // request bob read X
// const requestPermissionID = "urn:uuid:abaf6782-4094-4010-a8b4-8cd70f008039"// request bob read X

// STATE OF THE WORLD
// const sotwID = `urn:uuid:${v4()}` // sotw new
// const sotwID = "urn:uuid:d63ea76e-0aed-4e4e-9a8c-0b7083ebc6e2" // sotw temporal - current
const sotwID = "urn:uuid:192620fa-06d9-447b-adbd-bd1ece4f9b12" // sotw temporal - past
// const sotwID = "urn:uuid:14ddb075-8be9-4014-acbb-58dabd93d5ee" // sotw temporal - future
// const sotwID = "urn:uuid:2e6995b1-1b7e-4463-9c18-fde444523fef" // sotw alice party membership
// const sotwID = "urn:uuid:f048231b-b932-4248-a47d-8653a390247b" // sotw X asset membership
// const sotwID = "urn:uuid:116a8435-a356-45f5-a20f-a1e593d4a55d" // sotw X asset membership and alice party membership
// const sotwID = "urn:uuid:8a6c8315-7a08-4f65-af4f-2bec2fd2f21d" // nonset
// const sotwID = "urn:uuid:8a6c8315-7a08-4f65-af4f-2bec2fd2f21d" // violated
// const sotwID = "urn:uuid:8a6c8315-7a08-4f65-af4f-2bec2fd2f21d" // fulfilled
// const sotwID = "urn:uuid:da98666e-e80d-429a-a839-1575f85a9b3c" // all
// const sotwID = "urn:uuid:69ba5872-de47-40d3-bf36-a33b7d44f5bc" // all - past
// const sotwID = "urn:uuid:88fcb9ab-2216-49df-860f-3f2a1ac5c397" // out of office


const policyReport = `urn:uuid:${v4()}`
const dutyReport = `urn:uuid:${v4()}`
const dutyID = `urn:uuid:${v4()}`
const odrlPolicyText = `
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<${policyID}> a odrl:Set;
    odrl:uid <${policyID}> ;
    dct:description "${policyText}";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <${policyPermissionID}>.
<${policyPermissionID}> a odrl:Permission;
    odrl:assignee ex:partyCollection;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:duty <${dutyID}> ;
    odrl:constraint <urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750> .

<${dutyID}> a odrl:Duty ;
    odrl:action odrl:compensate .

<urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750> odrl:and <urn:uuid:6e8d7da2-0c51-4fab-a863-5e885a4b0f64>, <urn:uuid:c946aac6-dac5-4450-8bd5-fae5f235b6e9> .

<urn:uuid:c946aac6-dac5-4450-8bd5-fae5f235b6e9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-01T00:00:00.000Z"^^xsd:dateTime.

<urn:uuid:6e8d7da2-0c51-4fab-a863-5e885a4b0f64> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-31T23:59:59.000Z"^^xsd:dateTime.

ex:partyCollection a odrl:PartyCollection;
    odrl:source ex:partyIdentifier.    
`;
const odrlRequestText = `
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<${requestID}> a odrl:Request;
    odrl:uid <${requestID}> ;
    dct:description "${requestText}";
    odrl:permission <${requestPermissionID}>.
<${requestPermissionID}> a odrl:Permission;
    odrl:assignee ex:bob;
    odrl:action odrl:read;
    odrl:target ex:x .
`;
const stateOfTheWorldText = `
@prefix ex: <http://example.org/> .
@prefix temp: <http://example.com/request/> .
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix report: <http://example.com/report/temp/>.

<${sotwID}> a ex:Sotw ;
    ex:includes temp:currentTime, <${policyReport}>, ex:alice .

temp:currentTime dct:issued "2024-02-12T11:20:10.999Z"^^xsd:dateTime.

ex:alice a foaf:Person;
    odrl:partOf ex:partyIdentifier.

<${policyReport}> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a>; # policy
    report:ruleReport <${dutyReport}>.
<${dutyReport}> a report:DutyReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:a0b12cb7-d3a1-4953-86da-f59a597615d2>; # duty
    report:performanceState report:Unperformed ;
    report:deonticState report:Violated .
`;

async function main() {
    // parse input
    const odrlPolicyStore = await turtleStringToStore(odrlPolicyText);
    const odrlRequestStore = await turtleStringToStore(odrlRequestText);
    const stateOfTheWorldStore = await turtleStringToStore(stateOfTheWorldText);

    const rootDir = path.join(__dirname, "data");
    const policiesDir = path.join(rootDir, "policies");
    const requestsDir = path.join(rootDir, "requests");
    const testCasesDir = path.join(rootDir, "test_cases");
    const stateOfTheWorldDir = path.join(rootDir, "sotw");
    const policies: Map<string, Policy> = await parsePolicies(policiesDir);
    const requests: Map<string, Policy> = await parseRequests(requestsDir);
    const stateOfTheWorldMap: Map<string, StateOfTheWorld> = await parseStateOfTheWorld(stateOfTheWorldDir);    
    
    // decide wheter to re use local or new
    const policyQuads = config.policy === CONFIG.NEW ? odrlPolicyStore.getQuads(null, null, null, null) : policies.get(policyID)!.quads;
    const requestQuads = config.request === CONFIG.NEW ? odrlRequestStore.getQuads(null, null, null, null) : requests.get(requestID)!.quads;
    const sotwQuads = config.sotw === CONFIG.NEW ? stateOfTheWorldStore.getQuads(null, null, null, null) : stateOfTheWorldMap.get(sotwID)!.quads;
    
    // evaluator (assumes proper policies, requests and sotw)
    // const engine = new ODRLEngineMultipleSteps(); // EYE JS engine
    const engine = new ODRLEngineMultipleSteps(new EyeReasoner('/usr/local/bin/eye', ["--quiet", "--nope", "--pass-only-new"])); // EYE local
    const evaluator = new ODRLEvaluator(engine);

    const reasoningResult = await evaluator.evaluate(
        policyQuads,
        requestQuads,
        sotwQuads)
    // printing report nicely
    const prefixes = {
        'odrl': 'http://www.w3.org/ns/odrl/2/',
        'ex': 'http://example.org/',
        'temp': 'http://example.com/request/',
        'dct': 'http://purl.org/dc/terms/',
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
        'foaf': 'http://xmlns.com/foaf/0.1/',
        'report': 'http://example.com/report/temp/'
    }


    console.log("# Policy");
    console.log(resourceToOptimisedTurtle(policyQuads, prefixes));
    console.log("# Request");
    console.log(resourceToOptimisedTurtle(requestQuads, prefixes));
    console.log("# State of the World");
    console.log(resourceToOptimisedTurtle(sotwQuads, prefixes));

    console.log("# Compliance Report + test case");

    // @ts-ignore
    const compliance_test_case = [...generateTestCase(policyQuads, requestQuads, sotwQuads, reasoningResult), ...reasoningResult]
    // @ts-ignore
    console.log(resourceToOptimisedTurtle(compliance_test_case, prefixes));
}
main()


function generateTestCase(policy: Quad[], request: Quad[], sotw: Quad[], report: Quad[]): Quad[] {
    const testCase: TestCase = {
        identifier: `urn:uuid:${v4()}`,
        policy: {
            identifier: getPolicyIdentifier(policy),
            quads: policy,
            source: ''
        },
        request: {
            identifier: getRequestIdentifier(request),
            quads: request,
            source: ''
        },
        stateOfTheWorld: {
            identifier: sotwID, // otherwise reusing crashes
            quads: sotw,
            source: ''
        },
        expectedReport: {
            identifier: getReportIdentifier(report),
            quads: report,
            source: ''
        },
        title: testCaseText
    }
    return testCaseAsQuads(testCase)
}