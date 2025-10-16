# Read request from Alice returns into yes (Alice Request Sell).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Alice can only read everything.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:d30381e3-2c24-4197-a5b4-1e9767575141> a odrl:Set;
    odrl:uid <urn:uuid:d30381e3-2c24-4197-a5b4-1e9767575141>;
    dct:description "Alice can only read everything.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:8d6927a2-6c5b-4df7-9aa8-4cba7387db61>.
<urn:uuid:8d6927a2-6c5b-4df7-9aa8-4cba7387db61> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read.
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

<urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749> a <https://w3id.org/force/sotw#EvaluationRequest>;
    dct:issued "2016-01-01T00:00:00.000Z"^^xsd:dateTime;
    <https://w3id.org/force/sotw#requestedAction> odrl:sell;
    <https://w3id.org/force/sotw#requestingParty> ex:alice;
    <https://w3id.org/force/sotw#requestedTarget> ex:x;
    dct:description "Requesting Party ALICE requests to SELL resource X.".
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

<urn:uuid:ecdcf3cf-8043-4dfd-8303-c3d8cfc0ed65> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:d30381e3-2c24-4197-a5b4-1e9767575141>;
    report:policyRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749>;
    report:ruleReport <urn:uuid:79bf6556-b6fd-42f0-a4f2-f841065a2caf>.
<urn:uuid:79bf6556-b6fd-42f0-a4f2-f841065a2caf> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:8d6927a2-6c5b-4df7-9aa8-4cba7387db61>;
    report:ruleRequest <urn:uuid:4089cf37-8cb0-49e9-a5a4-022cc1b2b749>;
    report:premiseReport <urn:uuid:6e36b032-9a9e-4f54-b2ab-b6bf15417c02>, <urn:uuid:aee016fd-8277-4d1c-b0bd-899862a9d4e6>;
    report:activationState report:Inactive.
<urn:uuid:6e36b032-9a9e-4f54-b2ab-b6bf15417c02> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:aee016fd-8277-4d1c-b0bd-899862a9d4e6> a report:ActionReport;
    report:satisfactionState report:Unsatisfied.
```
