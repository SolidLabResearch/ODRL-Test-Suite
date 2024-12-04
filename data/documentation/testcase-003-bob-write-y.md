# Any request results into yes (Bob Request Write).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Everybody can do everything.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78> a odrl:Set;
    odrl:uid <urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78>;
    dct:description "Everybody can do everything.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:72e248bf-5f4f-472f-af76-8beca297415c>.
<urn:uuid:72e248bf-5f4f-472f-af76-8beca297415c> a odrl:Permission.
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

<urn:uuid:00f32161-8dcf-470c-b419-681e7344697b> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78>;
    report:policyRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46>;
    report:ruleReport <urn:uuid:e1116cdc-bbc4-4f9a-8287-b6a6e878bf70>.
<urn:uuid:e1116cdc-bbc4-4f9a-8287-b6a6e878bf70> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:72e248bf-5f4f-472f-af76-8beca297415c>;
    report:ruleRequest <urn:uuid:68ae9b26-69d2-48cf-83e6-ef77c4a9cda9>;
    report:activationState report:Active.
```
