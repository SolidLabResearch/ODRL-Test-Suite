# Any request from Bob to use returns into no (Bob Request).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> Bob explicitely use nothing.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:e4b538e6-2613-4de4-8930-48fee524aa40> a odrl:Set;
    odrl:uid <urn:uuid:e4b538e6-2613-4de4-8930-48fee524aa40>;
    dct:description "Bob explicitely use nothing.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:prohibition <urn:uuid:9477c997-adc1-4d64-a12c-fa9e0f6b80f0>.
<urn:uuid:9477c997-adc1-4d64-a12c-fa9e0f6b80f0> a odrl:Prohibition;
    odrl:assignee ex:bob;
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

<urn:uuid:011bbf22-2039-4f65-bf9b-2e581fcbc0a8> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:e4b538e6-2613-4de4-8930-48fee524aa40>;
    report:policyRequest <urn:uuid:5be7b7d5-bc05-4168-8b31-81ebc32cfaa0>;
    report:ruleReport <urn:uuid:42b203d0-90c8-479f-b127-f04e56cdbd75>.
<urn:uuid:42b203d0-90c8-479f-b127-f04e56cdbd75> a report:ProhibitionReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:9477c997-adc1-4d64-a12c-fa9e0f6b80f0>;
    report:ruleRequest <urn:uuid:0c997117-eefc-474e-9049-c4e3b8defbc7>;
    report:premiseReport <urn:uuid:55d0c400-f07e-466e-868d-7216a5770123>, <urn:uuid:24e09513-53a0-4e73-b942-4b35d170cbfd>;
    report:activationState report:Active.
<urn:uuid:55d0c400-f07e-466e-868d-7216a5770123> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:24e09513-53a0-4e73-b942-4b35d170cbfd> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
