# Read request from people in party collection to resource in asset collection returns into yes (Alice Request Read Y).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> A party collection may READ any resource from the Asset Collection.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013> a odrl:Set;
    odrl:uid <urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013>;
    dct:description "A party collection may READ any resource from the Asset Collection.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609>.
<urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609> a odrl:Permission;
    odrl:assignee ex:partyCollection;
    odrl:action odrl:read;
    odrl:target ex:assetCollection.
ex:assetCollection a odrl:AssetCollection;
    odrl:source ex:assetIdentifier.
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
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed> a odrl:Request;
    odrl:uid <urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed>;
    dct:description "Requesting Party Alice requests to READ resource Y.";
    odrl:permission <urn:uuid:35d4666e-8fbd-4677-8671-2875eee26a1b>.
<urn:uuid:35d4666e-8fbd-4677-8671-2875eee26a1b> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:y.
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
ex:x odrl:partOf ex:assetIdentifier.
ex:alice a foaf:Person;
    odrl:partOf ex:partyIdentifier.
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

<urn:uuid:9561f7d4-d183-4508-8f82-9c6fcc737f38> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013>;
    report:policyRequest <urn:uuid:b384ec45-0f24-4be6-86ba-91a749c698ed>;
    report:ruleReport <urn:uuid:6bf89816-6ea4-48b9-be7e-4ef896b188ea>.
<urn:uuid:6bf89816-6ea4-48b9-be7e-4ef896b188ea> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609>;
    report:ruleRequest <urn:uuid:35d4666e-8fbd-4677-8671-2875eee26a1b>;
    report:premiseReport <urn:uuid:0677d800-0bd8-4839-9175-33d8039105f1>, <urn:uuid:12e79b26-0ca6-4ada-9dd0-1faf0a952921>, <urn:uuid:44f71303-b6c2-4330-b790-5628b6778ee1>;
    report:activationState report:Inactive.
<urn:uuid:0677d800-0bd8-4839-9175-33d8039105f1> a report:TargetReport;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:12e79b26-0ca6-4ada-9dd0-1faf0a952921> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:44f71303-b6c2-4330-b790-5628b6778ee1> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
