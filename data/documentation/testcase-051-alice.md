# Read request from people in party collection to resource X returns into yes (Alice Request Read X).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> A party collection may READ resource X.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:7c0f8805-384b-4306-9736-382dfe89c0cd> a odrl:Set;
    odrl:uid <urn:uuid:7c0f8805-384b-4306-9736-382dfe89c0cd>;
    dct:description "A party collection may READ resource X.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:b2b7acd4-496c-4f47-ae2d-50e2a5e3be08>.
<urn:uuid:b2b7acd4-496c-4f47-ae2d-50e2a5e3be08> a odrl:Permission;
    odrl:assignee ex:partyCollection;
    odrl:action odrl:read;
    odrl:target ex:x.
ex:partyCollection a odrl:PartyCollection;
    odrl:source ex:partyIdentifier.
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

<urn:uuid:2e6995b1-1b7e-4463-9c18-fde444523fef> a <https://w3id.org/force/sotw#SotW>;
    <https://w3id.org/force/sotw#currentTime> ex:currentTime;
    <https://w3id.org/force/sotw#partyCollection> ex:partyCollection.
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

<urn:uuid:d2f7c622-8915-44f9-aa28-0ac73f067334> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:7c0f8805-384b-4306-9736-382dfe89c0cd>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:8f8f6417-11df-4405-813b-211198f8d79d>.
<urn:uuid:8f8f6417-11df-4405-813b-211198f8d79d> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:b2b7acd4-496c-4f47-ae2d-50e2a5e3be08>;
    report:ruleRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:premiseReport <urn:uuid:be999f22-dce9-4963-9d28-1ea8c899a2a7>, <urn:uuid:5d20380f-bce6-4fc0-992f-d400874ebae7>, <urn:uuid:270429db-1947-4ef8-86f1-c562e8ecc769>;
    report:activationState report:Active.
<urn:uuid:be999f22-dce9-4963-9d28-1ea8c899a2a7> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:5d20380f-bce6-4fc0-992f-d400874ebae7> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:270429db-1947-4ef8-86f1-c562e8ecc769> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
