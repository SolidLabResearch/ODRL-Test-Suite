# Read request from Alice to resource X returns into yes (temporal lteq) (Alice Request Read X).
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
@prefix report: <http://example.com/report/temp/>.

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
@prefix report: <http://example.com/report/temp/>.

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
@prefix report: <http://example.com/report/temp/>.

temp:currentTime dct:issued "2024-02-12T11:20:10.999Z"^^xsd:dateTime.
```
## Evaluation result: Compliance Report
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:00c6070b-ef3e-487f-9fbe-6b817f67f2bc> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:55214ab0-2e30-46c4-be13-c63997fa4272>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:e5c74d9f-20b5-48ab-baed-bcd74981ccd6>.
<urn:uuid:e5c74d9f-20b5-48ab-baed-bcd74981ccd6> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:b3222ad2-60b5-4aef-b928-fdef873717cd>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:premiseReport <urn:uuid:cb840f5b-9b71-4b03-b562-1cab4f9f60d5>, <urn:uuid:44d02a09-17df-4c9e-b9fa-b7e6af9cd799>, <urn:uuid:36054e1a-ec1c-4b88-9888-6608492598dc>, <urn:uuid:80678596-c5b9-4b30-9cbd-9e76c42e4426>;
    report:activationState report:Active.
<urn:uuid:cb840f5b-9b71-4b03-b562-1cab4f9f60d5> a report:ConstraintReport;
    report:constraint <urn:uuid:constraint:86526f9b-57c2-4c94-b079-9762fec562f1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lteq;
    report:constraintRightOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:44d02a09-17df-4c9e-b9fa-b7e6af9cd799> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:36054e1a-ec1c-4b88-9888-6608492598dc> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:80678596-c5b9-4b30-9cbd-9e76c42e4426> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
