# Read request from Alice to resource X returns into yes (temporal + And (year 2024)) (Alice Request Read X - past).
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
@prefix report: <http://example.com/report/temp/>.

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

temp:currentTime dct:issued "2017-02-12T11:20:10.999Z"^^xsd:dateTime.
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

<urn:uuid:4827fb9f-88a2-484e-9f49-5c7fab58f04e> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:3d48cff7-9266-4c6c-9069-418e8d8775da>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:b9841622-2ed9-4c2b-8308-b3c5ee29122d>.
<urn:uuid:b9841622-2ed9-4c2b-8308-b3c5ee29122d> a report:PermissionReport;
    report:premiseReport <urn:uuid:2056bb62-9581-4b6c-a9ee-c1e73c431483>, <urn:uuid:c42e305e-8031-4aa3-b847-6f6500383143>, <urn:uuid:2ab33439-8536-4b10-8757-35992bd2a950>, <urn:uuid:d18eb3da-7816-46b8-957f-a03e949e18f5>;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:0a12c9d5-8f0d-40bd-88f2-baa456117a22>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:activationState report:Inactive.
<urn:uuid:2056bb62-9581-4b6c-a9ee-c1e73c431483> a report:ConstraintReport;
    report:constraint <urn:uuid:c9359a6f-06bf-4a99-afb0-62996ca78100>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:aa1c46f1-3db6-4ff4-b6be-ef2322f850ec>, <urn:uuid:e56af108-1944-4dc3-95aa-9ced57137180>.
<urn:uuid:aa1c46f1-3db6-4ff4-b6be-ef2322f850ec> a report:ConstraintReport;
    report:constraint <urn:uuid:c1a4d116-2777-4598-847d-8fbebf8eb535>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e56af108-1944-4dc3-95aa-9ced57137180> a report:ConstraintReport;
    report:constraint <urn:uuid:49e4be66-54ef-45e0-8fac-5d5eb58c23fd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-31T23:59:59Z"^^xsd:dateTime.
<urn:uuid:c42e305e-8031-4aa3-b847-6f6500383143> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:2ab33439-8536-4b10-8757-35992bd2a950> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:d18eb3da-7816-46b8-957f-a03e949e18f5> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
