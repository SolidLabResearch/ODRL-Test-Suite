# Read request from Alice to resource X returns into yes (temporal neq - future) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may NOT READ resource X at 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:16aa64e3-1495-486d-a5ad-81211961e915> a odrl:Set;
    odrl:uid <urn:uuid:16aa64e3-1495-486d-a5ad-81211961e915>;
    dct:description "ALICE may NOT READ resource X at 2024-02-12T11:20:10.999Z.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:512ad75a-22da-4142-ba42-0a39a217ba29>.
<urn:uuid:512ad75a-22da-4142-ba42-0a39a217ba29> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>.
<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:neq;
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

<urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> a odrl:Request;
    odrl:uid <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    dct:description "Requesting Party ALICE requests to READ resource X.";
    odrl:permission <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>.
<urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x.
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

temp:currentTime dct:issued "2025-02-12T11:20:10.999Z"^^xsd:dateTime.
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

<urn:uuid:29d41ebb-bd94-4460-b01b-19b2c7accb98> a report:PolicyReport;
    dct:created "2025-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:16aa64e3-1495-486d-a5ad-81211961e915>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:efb5ace2-c639-43b8-9afd-e5cd996214a4>.
<urn:uuid:efb5ace2-c639-43b8-9afd-e5cd996214a4> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:512ad75a-22da-4142-ba42-0a39a217ba29>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:premiseReport <urn:uuid:8797b76e-512e-4c2f-a00d-73a11ae043f4>, <urn:uuid:7c205902-f7e2-40d4-a0bf-ff4de3bbfc4b>, <urn:uuid:f8c118c4-b55d-4b05-9982-eb887f27666b>, <urn:uuid:a1dfafa3-4cfb-4634-90fe-b2e3cf7a26c4>;
    report:activationState report:Active.
<urn:uuid:8797b76e-512e-4c2f-a00d-73a11ae043f4> a report:ConstraintReport;
    report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>;
    report:constraintLeftOperand "2025-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:neq;
    report:constraintRightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7c205902-f7e2-40d4-a0bf-ff4de3bbfc4b> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:f8c118c4-b55d-4b05-9982-eb887f27666b> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:a1dfafa3-4cfb-4634-90fe-b2e3cf7a26c4> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
