# Any request to use results into yes (Alice Request).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Everybody can do use.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:a2ada399-48a3-4860-b44d-fa35516fdac2> a odrl:Set;
    odrl:uid <urn:uuid:a2ada399-48a3-4860-b44d-fa35516fdac2>;
    dct:description "Everybody can do use.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:a40b1d34-02ae-4af6-b31f-2296443a726b>.
<urn:uuid:a40b1d34-02ae-4af6-b31f-2296443a726b> a odrl:Permission;
    odrl:action odrl:use.
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
@prefix report: <https://w3id.org/force/compliance-report#>.

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
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:895ccdd2-b693-4ac1-809e-2656fd5f0a1b> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:a2ada399-48a3-4860-b44d-fa35516fdac2>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:c83c8ec8-a7d6-41d8-b970-6dc2b0aeecc0>.
<urn:uuid:c83c8ec8-a7d6-41d8-b970-6dc2b0aeecc0> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:a40b1d34-02ae-4af6-b31f-2296443a726b>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:premiseReport <urn:uuid:fa79756a-4f2c-4945-a7d9-e8aeb6b55df7>;
    report:activationState report:Active.
<urn:uuid:fa79756a-4f2c-4945-a7d9-e8aeb6b55df7> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
