# Read request from Alice to resource X returns into yes (Alice Request Write X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Alice can only read x.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:f42a700b-3314-4cf0-8b8d-1581f203cfa1> a odrl:Set;
    odrl:uid <urn:uuid:f42a700b-3314-4cf0-8b8d-1581f203cfa1>;
    dct:description "Alice can only read x.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e>.
<urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x.
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

<urn:uuid:5b323bdb-7b4d-4431-8548-de2d021b673d> a odrl:Request;
    odrl:uid <urn:uuid:5b323bdb-7b4d-4431-8548-de2d021b673d>;
    dct:description "Requesting Party ALICE requests to WRITE resource X.";
    odrl:permission <urn:uuid:6045248b-571c-4f90-a5bc-c980bbe776e8>.
<urn:uuid:6045248b-571c-4f90-a5bc-c980bbe776e8> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:write;
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

<urn:uuid:34fd6de1-5f4d-4743-ab5e-856766eb9396> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:f42a700b-3314-4cf0-8b8d-1581f203cfa1>;
    report:policyRequest <urn:uuid:5b323bdb-7b4d-4431-8548-de2d021b673d>;
    report:ruleReport <urn:uuid:6bd3a324-0095-4455-b6e7-7d51924e2643>.
<urn:uuid:6bd3a324-0095-4455-b6e7-7d51924e2643> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e>;
    report:ruleRequest <urn:uuid:6045248b-571c-4f90-a5bc-c980bbe776e8>;
    report:premiseReport <urn:uuid:77ec6e77-59aa-4b2a-8e6e-4f6409a9a593>, <urn:uuid:93a0af5d-bd95-4412-9ba7-adb9694ac722>, <urn:uuid:bb6250ee-d291-43d4-8131-2341bc128d21>;
    report:activationState report:Inactive.
<urn:uuid:77ec6e77-59aa-4b2a-8e6e-4f6409a9a593> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:93a0af5d-bd95-4412-9ba7-adb9694ac722> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:bb6250ee-d291-43d4-8131-2341bc128d21> a report:ActionReport;
    report:satisfactionState report:Unsatisfied.
```
