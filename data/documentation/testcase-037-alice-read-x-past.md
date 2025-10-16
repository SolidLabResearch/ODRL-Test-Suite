# Read request from Alice to resource X returns into yes (temporal lt - past) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X when it is before 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:32127a3f-5296-4cc6-b9d6-ef6c647a721d> a odrl:Set;
    odrl:uid <urn:uuid:32127a3f-5296-4cc6-b9d6-ef6c647a721d>;
    dct:description "ALICE may READ resource X when it is before 2024-02-12T11:20:10.999Z.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:d6ab4a38-68fb-418e-8af5-e77649a2187a>.
<urn:uuid:d6ab4a38-68fb-418e-8af5-e77649a2187a> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>.
<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime.
```
## ODRL Request
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> a <https://w3id.org/force/sotw#EvaluationRequest>;
    dct:issued "2016-01-01T00:00:00.000Z"^^xsd:dateTime;
    <https://w3id.org/force/sotw#requestedAction> odrl:read;
    <https://w3id.org/force/sotw#requestingParty> ex:alice;
    <https://w3id.org/force/sotw#requestedTarget> ex:x;
    dct:description "Requesting Party ALICE requests to READ resource X.".
```
## State of the world
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:192620fa-06d9-447b-adbd-bd1ece4f9b12> a <https://w3id.org/force/sotw#SotW>;
    <https://w3id.org/force/sotw#currentTime> ex:currentTime.
ex:currentTime dct:issued "2017-02-12T11:20:10.999Z"^^xsd:dateTime.
```
## Evaluation result: Compliance Report
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:94fedebb-9b3b-4aae-b94a-d3649c7898cc> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:32127a3f-5296-4cc6-b9d6-ef6c647a721d>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:bb0a27e0-3963-4f78-a215-9ef1d585a472>.
<urn:uuid:bb0a27e0-3963-4f78-a215-9ef1d585a472> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:d6ab4a38-68fb-418e-8af5-e77649a2187a>;
    report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:premiseReport <urn:uuid:9b1b7cef-01ad-4d3f-b8dd-e7f762a4da33>, <urn:uuid:661035b0-2d40-43fa-8667-f18ef04d42b4>, <urn:uuid:dcb46902-8284-4912-b2b0-546a82a2c853>, <urn:uuid:05a48436-1d60-46ed-bbc2-d74227c38ab7>;
    report:activationState report:Active.
<urn:uuid:9b1b7cef-01ad-4d3f-b8dd-e7f762a4da33> a report:ConstraintReport;
    report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:661035b0-2d40-43fa-8667-f18ef04d42b4> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:dcb46902-8284-4912-b2b0-546a82a2c853> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:05a48436-1d60-46ed-bbc2-d74227c38ab7> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
