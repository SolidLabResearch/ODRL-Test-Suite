# Read request from Alice to resource X returns into yes (temporal lteq - future) (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X when it is before or equal to 2024-02-12T11:20:10.999Z.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:55214ab0-2e30-46c4-be13-c63997fa4272> a odrl:Set;
    odrl:uid <urn:uuid:55214ab0-2e30-46c4-be13-c63997fa4272>;
    dct:description "ALICE may READ resource X when it is before or equal to 2024-02-12T11:20:10.999Z.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:b3222ad2-60b5-4aef-b928-fdef873717cd>.
<urn:uuid:b3222ad2-60b5-4aef-b928-fdef873717cd> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>.
<urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1> odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lteq;
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

<urn:uuid:05f331a0-6cad-4e5d-8204-1410702f42c1> a report:PolicyReport;
    dct:created "2025-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:55214ab0-2e30-46c4-be13-c63997fa4272>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:4ea67309-cb23-48c4-b240-5951145ee2bc>.
<urn:uuid:4ea67309-cb23-48c4-b240-5951145ee2bc> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:b3222ad2-60b5-4aef-b928-fdef873717cd>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:premiseReport <urn:uuid:ab5bc7b9-d0f8-4911-9c8c-8adf9ad26624>, <urn:uuid:28d0dfd7-a184-4e79-b58b-072bed3fd9d2>, <urn:uuid:9d68ae2a-facb-49f0-b2ec-81c64a682160>, <urn:uuid:8b656da5-2a71-4152-b90d-31d169e7f72d>;
    report:activationState report:Inactive.
<urn:uuid:ab5bc7b9-d0f8-4911-9c8c-8adf9ad26624> a report:ConstraintReport;
    report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>;
    report:constraintLeftOperand "2025-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:28d0dfd7-a184-4e79-b58b-072bed3fd9d2> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:9d68ae2a-facb-49f0-b2ec-81c64a682160> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:8b656da5-2a71-4152-b90d-31d169e7f72d> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
