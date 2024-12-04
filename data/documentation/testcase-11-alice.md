# Any request to use results into no (Alice Request).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Nobody can do use.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:b0d32e25-f642-4afa-9098-0e23750f7ad6> a odrl:Set;
    odrl:uid <urn:uuid:b0d32e25-f642-4afa-9098-0e23750f7ad6>;
    dct:description "Nobody can do use.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:prohibition <urn:uuid:bdc2727b-d28d-4d8b-a9df-bff9546242fe>.
<urn:uuid:bdc2727b-d28d-4d8b-a9df-bff9546242fe> a odrl:Prohibition;
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
@prefix report: <http://example.com/report/temp/>.

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

<urn:uuid:6094d6c2-99bb-4c07-a257-19e61b0256e8> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:b0d32e25-f642-4afa-9098-0e23750f7ad6>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:cb6ef7c7-8447-4e9c-bdb4-c4f5dd93a16b>.
<urn:uuid:cb6ef7c7-8447-4e9c-bdb4-c4f5dd93a16b> a report:ProhibitionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:bdc2727b-d28d-4d8b-a9df-bff9546242fe>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:premiseReport <urn:uuid:432df964-11f9-4329-88f6-f9fae42fa433>;
    report:activationState report:Active.
<urn:uuid:432df964-11f9-4329-88f6-f9fae42fa433> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
