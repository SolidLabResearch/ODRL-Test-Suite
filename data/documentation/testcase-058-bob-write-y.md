# Read request from people in party collection to resource in asset collection returns into yes (Bob Request Write Y).
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
@prefix report: <https://w3id.org/force/compliance-report#>.

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
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46> a odrl:Request;
    odrl:uid <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46>;
    dct:description "Requesting Party BOB requests to WRITE resource Y.";
    odrl:permission <urn:uuid:68ae9b26-69d2-48cf-83e6-ef77c4a9cda9>.
<urn:uuid:68ae9b26-69d2-48cf-83e6-ef77c4a9cda9> a odrl:Permission;
    odrl:assignee ex:bob;
    odrl:action odrl:write;
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
@prefix report: <https://w3id.org/force/compliance-report#>.

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
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:d954cc20-64d4-4db3-b5a7-a84527676788> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:2dd7d09e-aff1-49bf-bdc5-d50f2a3b5013>;
    report:policyRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46>;
    report:ruleReport <urn:uuid:0c826a59-f4ed-4f69-ad79-50752092c11d>.
<urn:uuid:0c826a59-f4ed-4f69-ad79-50752092c11d> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:f5d8113b-dd1b-44bd-b95d-76198f346609>;
    report:ruleRequest <urn:uuid:68ae9b26-69d2-48cf-83e6-ef77c4a9cda9>;
    report:premiseReport <urn:uuid:30f391cc-d0f6-4a31-bee2-ea5bb51f5832>, <urn:uuid:51677934-ea48-455b-8727-79f680a6434d>, <urn:uuid:b2fa623b-4ad5-4596-a6f4-bc5f84ad42be>;
    report:activationState report:Inactive.
<urn:uuid:30f391cc-d0f6-4a31-bee2-ea5bb51f5832> a report:TargetReport;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:51677934-ea48-455b-8727-79f680a6434d> a report:PartyReport;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b2fa623b-4ad5-4596-a6f4-bc5f84ad42be> a report:ActionReport;
    report:satisfactionState report:Unsatisfied.
```
