# Any request results into yes (Bob Request).
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

<urn:uuid:06be7c95-1771-43e8-83d9-18899440c42d> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:4cbd8f38-348b-4b09-8e1a-04b47c97ad78>;
    report:policyRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0>;
    report:ruleReport <urn:uuid:41b4b672-6f17-42e1-8fa5-cdac4f231cf0>.
<urn:uuid:41b4b672-6f17-42e1-8fa5-cdac4f231cf0> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:72e248bf-5f4f-472f-af76-8beca297415c>;
    report:ruleRequest <urn:uuid:0c997117-eefc-474e-9049-c4e3b8defbc7>;
    report:activationState report:Active.
```
