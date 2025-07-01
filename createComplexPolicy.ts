// creating a policy that during weekdays 9-17 of 2024 you have access to resource x
import { EyeReasoner, fileAsStore, ODRLEngineMultipleSteps, ODRLEvaluator, turtleStringToStore , resourceToOptimisedTurtle} from "odrl-evaluator";
import { v4 } from "uuid";
import 'dotenv/config';

const policyText = "During 9-17 on weekdays of 2024 ALICE has READ access to resource X."
const policyID = `urn:uuid:${v4()}`
const policyPermissionID = `urn:uuid:${v4()}`
const bigConstraint = `urn:uuid:${v4()}`
const odrlPolicy = `
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.

<${policyID}> a odrl:Set;
    odrl:uid <${policyID}> ;
    dct:description "${policyText}";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <${policyPermissionID}>.
<${policyPermissionID}> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:constraint <${bigConstraint}> .
<${bigConstraint}> a odrl:LogicalConstraint .

`


function main() {
    const begin2024 = new Date("2024-01-01")

    let timestamp = begin2024.valueOf()
    let msDay = 24 * 60 * 60 * 1000;
    let msHour = 60 * 60 * 1000
    console.log(odrlPolicy);
    while (new Date(timestamp).getFullYear() !== 2025) {
        const currentDay = new Date(timestamp);
        // no weekends
        if (currentDay.getDay() !== 0 && currentDay.getDay() !== 6) {
            const connectingConstraintID = `urn:uuid:${v4()}`
            const smallBoundID = `urn:uuid:${v4()}`
            const smallBound = `
<${smallBoundID}> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "${new Date(timestamp + 9 * msHour).toISOString()}"^^xsd:dateTime.`

            const bigBoundID = `urn:uuid:${v4()}`
            const bigBound = `
<${bigBoundID}> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "${new Date(timestamp + 17 * msHour).toISOString()}"^^xsd:dateTime.`
            const connectingConstraintAnd =`
<${bigConstraint}> odrl:or <${connectingConstraintID}>.
<${connectingConstraintID}> a odrl:LogicalConstraint.
<${connectingConstraintID}> odrl:and <${bigBoundID}>, <${smallBoundID}> .`
            console.log(connectingConstraintAnd);
            console.log(smallBound);
            console.log(bigBound);
        }

        timestamp += msDay
    }
    // console.log(timestamp);
    // console.log(new Date(timestamp + msDay));

}
main()


const odrlRequestText = `
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> a odrl:Request;
    dct:description "Requesting Party ALICE requests to READ resource X.";
    odrl:permission <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>.
<urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x.
`;
const stateOfTheWorldText = `
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:f580eb45-e8bf-4bf0-b85f-f3d37774e2d4> a ex:Sotw ;
    ex:includes temp:currentTime, ex:alice, ex:zeno.
    
temp:currentTime dct:issued "2024-02-12T5:20:10.999Z"^^xsd:dateTime. # monday
ex:alice a foaf:Person.
ex:zeno a foaf:Person.
`;
async function test(){
    const eye_bin = process.env.EYE_BIN;

    const odrlPolicyStore = await fileAsStore('./bigPolicy.ttl')
    const odrlRequestStore = await turtleStringToStore(odrlRequestText);
    const stateOfTheWorldStore = await turtleStringToStore(stateOfTheWorldText);
    const start = performance.now();

    // evaluator (assumes proper policies, requests and sotw)
    let engine;

    if (eye_bin) {
        engine = new ODRLEngineMultipleSteps({reasoner: new EyeReasoner(eye_bin, ["--quiet", "--nope", "--pass-only-new"])}); // EYE local
    }
    else {
        engine = new ODRLEngineMultipleSteps(); // EYE JS engine 
    }
    const evaluator = new ODRLEvaluator(engine);
    const reasoningResult = await evaluator.evaluate(
        odrlPolicyStore.getQuads(null, null, null, null),
        odrlRequestStore.getQuads(null, null, null, null),
        stateOfTheWorldStore.getQuads(null, null, null, null))
    // printing report nicely
    const prefixes = {
        'odrl': 'http://www.w3.org/ns/odrl/2/',
        'ex': 'http://example.org/',
        'temp': 'http://example.com/request/',
        'dct': 'http://purl.org/dc/terms/',
        'xsd': 'http://www.w3.org/2001/XMLSchema#',
        'foaf': 'http://xmlns.com/foaf/0.1/',
        'report': 'https://w3id.org/force/compliance-report#'
    }

    // created report with N3
    // @ts-ignore
    console.log(resourceToOptimisedTurtle(reasoningResult, prefixes));    

    const end = performance.now();

    console.log(`Total execution time: ${end - start} ms`);

}
// test()