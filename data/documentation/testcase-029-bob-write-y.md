# Read request from Alice to resource X returns into yes (Bob Request Write Y).
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
@prefix report: <https://w3id.org/force/compliance-report#>.

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
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> a <https://w3id.org/force/sotw#EvaluationRequest>;
    dct:issued "2016-01-01T00:00:00.000Z"^^xsd:dateTime;
    <https://w3id.org/force/sotw#requestedAction> odrl:write;
    <https://w3id.org/force/sotw#requestingParty> ex:bob;
    <https://w3id.org/force/sotw#requestedTarget> ex:y;
    dct:description "Requesting Party BOB requests to WRITE resource Y.".
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

<urn:uuid:c3dcf705-8b6e-4fc8-b336-19a67097e130> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:f42a700b-3314-4cf0-8b8d-1581f203cfa1>;
    report:policyRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46>;
    report:ruleReport <urn:uuid:4296e1b2-9737-413c-8780-ab0434569fb9>.
<urn:uuid:4296e1b2-9737-413c-8780-ab0434569fb9> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:69d57d36-74e5-443c-bae5-30159b0cbd3e>;
    report:ruleRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46>;
    report:premiseReport <urn:uuid:0187fbd6-f8a9-4e31-be96-26278bf35165>, <urn:uuid:7130c1c2-bd09-4e2c-94d1-bf5ff149a711>, <urn:uuid:3e6aefbe-6379-4dce-b24e-c6910481858b>;
    report:activationState report:Inactive.
<urn:uuid:0187fbd6-f8a9-4e31-be96-26278bf35165> a report:TargetReport;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7130c1c2-bd09-4e2c-94d1-bf5ff149a711> a report:PartyReport;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3e6aefbe-6379-4dce-b24e-c6910481858b> a report:ActionReport;
    report:satisfactionState report:Unsatisfied.
```
