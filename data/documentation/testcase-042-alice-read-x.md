# Read request from Alice to resource X returns into yes (temporal gt) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X when it is later than 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:9fcff55b-33bd-4c8f-bcd7-9e206e4dbbbe> a odrl:Set;
    odrl:uid <urn:uuid:9fcff55b-33bd-4c8f-bcd7-9e206e4dbbbe>;
    dct:description "ALICE may READ resource X when it is later than 2024-02-12T11:20:10.999Z.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:641a79e0-0633-46c5-afe8-616e36701404>.
<urn:uuid:641a79e0-0633-46c5-afe8-616e36701404> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>.
<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
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

<urn:uuid:d63ea76e-0aed-4e4e-9a8c-0b7083ebc6e2> a <https://w3id.org/force/sotw#SotW>;
    <https://w3id.org/force/sotw#currentTime> ex:currentTime.
ex:currentTime dct:issued "2024-02-12T11:20:10.999Z"^^xsd:dateTime.
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

<urn:uuid:0d1ac1d0-61f3-4fa2-8ba7-26a1d98898df> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:9fcff55b-33bd-4c8f-bcd7-9e206e4dbbbe>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:92c0ba3b-70d8-4fa2-a232-420c64d27d74>.
<urn:uuid:92c0ba3b-70d8-4fa2-a232-420c64d27d74> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:641a79e0-0633-46c5-afe8-616e36701404>;
    report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:premiseReport <urn:uuid:3f3bf465-49e3-4bba-addd-fcebeefe39fb>, <urn:uuid:4a124d9a-92ec-45af-87c2-3d0175e24b9b>, <urn:uuid:fb827552-7110-42a4-875c-f09faf0eed58>, <urn:uuid:d53b2824-1cc7-48e6-a625-502ea2d0c6e5>;
    report:activationState report:Inactive.
<urn:uuid:3f3bf465-49e3-4bba-addd-fcebeefe39fb> a report:ConstraintReport;
    report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4a124d9a-92ec-45af-87c2-3d0175e24b9b> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:fb827552-7110-42a4-875c-f09faf0eed58> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:d53b2824-1cc7-48e6-a625-502ea2d0c6e5> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
