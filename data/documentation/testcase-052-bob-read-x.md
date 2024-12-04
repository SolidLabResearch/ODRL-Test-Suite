# Read request from people in party collection to resource X returns into yes (Bob Request Read X).
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
@prefix report: <http://example.com/report/temp/>.

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
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0> a odrl:Request;
    odrl:uid <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0>;
    dct:description "Requesting Party BOB requests to READ resource X.";
    odrl:permission <urn:uuid:0c997117-eefc-474e-9049-c4e3b8defbc7>.
<urn:uuid:0c997117-eefc-474e-9049-c4e3b8defbc7> a odrl:Permission;
    odrl:assignee ex:bob;
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

<urn:uuid:a1e8cb10-1a4e-45fd-a5d6-56b6b8eb09db> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:7c0f8805-384b-4306-9736-382dfe89c0cd>;
    report:policyRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0>;
    report:ruleReport <urn:uuid:0ca78ab9-4f0a-4c88-84d9-d114e8179583>.
<urn:uuid:0ca78ab9-4f0a-4c88-84d9-d114e8179583> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:b2b7acd4-496c-4f47-ae2d-50e2a5e3be08>;
    report:ruleRequest <urn:uuid:0c997117-eefc-474e-9049-c4e3b8defbc7>;
    report:premiseReport <urn:uuid:c053ae7c-1548-4d2b-afeb-46b191955ee1>, <urn:uuid:92c1b89f-f281-4583-859d-8267f01f7fbd>, <urn:uuid:b6b3f56a-c440-4aba-b953-7a04fba39081>;
    report:activationState report:Inactive.
<urn:uuid:c053ae7c-1548-4d2b-afeb-46b191955ee1> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:92c1b89f-f281-4583-859d-8267f01f7fbd> a report:PartyReport;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b6b3f56a-c440-4aba-b953-7a04fba39081> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
