# Any request from Alice to use returns into yes (Alice Request).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Only Alice can use everything.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <http://example.com/report/temp/>.

<urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7> a odrl:Set;
    odrl:uid <urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7>;
    dct:description "Only Alice can use everything.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90>.
<urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90> a odrl:Permission;
    odrl:assignee ex:alice;
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

<urn:uuid:9b5bb511-9729-48f0-8dd1-09f4cb395101> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:715d33b9-5222-4a73-a2ad-9899066b4fd7>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:95df7483-d3af-41df-8c02-80a1fff848ee>.
<urn:uuid:95df7483-d3af-41df-8c02-80a1fff848ee> a report:PermissionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:cb04c08b-e956-4f74-b89a-f87b6f658a90>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:premiseReport <urn:uuid:ef9132bd-a400-4f27-acff-f00b19e37c47>, <urn:uuid:3ca13acb-ebe6-4020-97f6-9daf0b4295c5>;
    report:activationState report:Active.
<urn:uuid:ef9132bd-a400-4f27-acff-f00b19e37c47> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:3ca13acb-ebe6-4020-97f6-9daf0b4295c5> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
