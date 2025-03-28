# Read request from Alice to resource X returns into yes (temporal + And (year 2024)) (Alice Request Read X - future).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> ALICE may READ resource X between 2024-01-01T00:00:00Z and 2024-12-31T23:59:59Z.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:3d48cff7-9266-4c6c-9069-418e8d8775da> a odrl:Set;
    odrl:uid <urn:uuid:3d48cff7-9266-4c6c-9069-418e8d8775da>;
    dct:description "ALICE may READ resource X between 2024-01-01T00:00:00Z and 2024-12-31T23:59:59Z.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:0a12c9d5-8f0d-40bd-88f2-baa456117a22>.
<urn:uuid:0a12c9d5-8f0d-40bd-88f2-baa456117a22> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:constraint <urn:uuid:c9359a6f-06bf-4a99-afb0-62996ca78100>.
<urn:uuid:c9359a6f-06bf-4a99-afb0-62996ca78100> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c1a4d116-2777-4598-847d-8fbebf8eb535>, <urn:uuid:49e4be66-54ef-45e0-8fac-5d5eb58c23fd>.
<urn:uuid:c1a4d116-2777-4598-847d-8fbebf8eb535> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-01T00:00:00Z"^^xsd:dateTime.
<urn:uuid:49e4be66-54ef-45e0-8fac-5d5eb58c23fd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-31T23:59:59Z"^^xsd:dateTime.
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

<urn:uuid:9c908aff-1a7d-4965-adf1-49bf0fefa670> a report:PolicyReport;
    dct:created "2025-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:3d48cff7-9266-4c6c-9069-418e8d8775da>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:9ef138c2-15fb-4121-b9e9-7e3cd441f4d0>.
<urn:uuid:9ef138c2-15fb-4121-b9e9-7e3cd441f4d0> a report:PermissionReport;
    report:premiseReport <urn:uuid:984f86ec-8d63-4140-9fbe-4e31093ec974>, <urn:uuid:690dff72-f9a1-46ed-b3ed-b80444450c7a>, <urn:uuid:eb884313-dd0c-4def-8dff-7461a703baa9>, <urn:uuid:c6411837-810a-4249-abd4-f779ee9b7a4d>;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:0a12c9d5-8f0d-40bd-88f2-baa456117a22>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:activationState report:Inactive.
<urn:uuid:984f86ec-8d63-4140-9fbe-4e31093ec974> a report:ConstraintReport;
    report:constraint <urn:uuid:c9359a6f-06bf-4a99-afb0-62996ca78100>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:57adafda-7dc2-4902-8209-abf35334d07e>, <urn:uuid:6b4c31b8-a143-4610-91f1-fa051a644b7c>.
<urn:uuid:57adafda-7dc2-4902-8209-abf35334d07e> a report:ConstraintReport;
    report:constraint <urn:uuid:c1a4d116-2777-4598-847d-8fbebf8eb535>;
    report:constraintLeftOperand "2025-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-01T00:00:00Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6b4c31b8-a143-4610-91f1-fa051a644b7c> a report:ConstraintReport;
    report:constraint <urn:uuid:49e4be66-54ef-45e0-8fac-5d5eb58c23fd>;
    report:constraintLeftOperand "2025-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:690dff72-f9a1-46ed-b3ed-b80444450c7a> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:eb884313-dd0c-4def-8dff-7461a703baa9> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:c6411837-810a-4249-abd4-f779ee9b7a4d> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
