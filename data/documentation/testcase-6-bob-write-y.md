# Any request results into no (Bob Request Write).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Nobody can do anything.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:fe737228-8ead-4771-af2c-d6c9de1bdc05> a odrl:Set;
    odrl:uid <urn:uuid:fe737228-8ead-4771-af2c-d6c9de1bdc05>;
    dct:description "Nobody can do anything.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:prohibition <urn:uuid:f3bdc260-5194-4a8a-a99e-91f9b3b710ee>.
<urn:uuid:f3bdc260-5194-4a8a-a99e-91f9b3b710ee> a odrl:Prohibition.
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

<urn:uuid:a8d22539-246e-4818-b9e3-b0bb07f41bd0> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:fe737228-8ead-4771-af2c-d6c9de1bdc05>;
    report:policyRequest <urn:uuid:73904e56-0fa9-43b8-8fd7-a45bb9d98c46>;
    report:ruleReport <urn:uuid:9552f918-2d2b-4b51-85ea-c4003f689ca0>.
<urn:uuid:9552f918-2d2b-4b51-85ea-c4003f689ca0> a report:ProhibitionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:f3bdc260-5194-4a8a-a99e-91f9b3b710ee>;
    report:ruleRequest <urn:uuid:68ae9b26-69d2-48cf-83e6-ef77c4a9cda9>;
    report:activationState report:Active.
```
