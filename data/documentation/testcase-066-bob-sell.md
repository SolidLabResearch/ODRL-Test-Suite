# Read request from people in party collection to resource X in 2024 returns into yes (Alice Request Read X - past).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> A party collection can only read X, during 2024, given that eventually the duty is fulfilled.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:cc4995de-9c5e-4e12-9039-698506f6ab1c> a odrl:Set;
    odrl:uid <urn:uuid:cc4995de-9c5e-4e12-9039-698506f6ab1c>;
    dct:description "A party collection can only read X, during 2024, given that eventually the duty is fulfilled.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:38578227-70b7-4649-980d-661a57e91b72>.
<urn:uuid:38578227-70b7-4649-980d-661a57e91b72> a odrl:Permission;
    odrl:assignee ex:partyCollection;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:duty <urn:uuid:4129123f-d8a8-481e-87fc-aba6dda5b6a5>;
    odrl:constraint <urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750>.
<urn:uuid:4129123f-d8a8-481e-87fc-aba6dda5b6a5> a odrl:Duty;
    odrl:action odrl:compensate.
<urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:6e8d7da2-0c51-4fab-a863-5e885a4b0f64>, <urn:uuid:c946aac6-dac5-4450-8bd5-fae5f235b6e9>.
<urn:uuid:c946aac6-dac5-4450-8bd5-fae5f235b6e9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-01T00:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6e8d7da2-0c51-4fab-a863-5e885a4b0f64> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-31T23:59:59.000Z"^^xsd:dateTime.
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

<urn:uuid:b7306adc-3f51-4ed4-b9fb-1864c2f1bdc9> a <https://w3id.org/force/sotw#EvaluationRequest>;
    dct:issued "2016-01-01T00:00:00.000Z"^^xsd:dateTime;
    <https://w3id.org/force/sotw#requestedAction> odrl:sell;
    <https://w3id.org/force/sotw#requestingParty> ex:bob;
    <https://w3id.org/force/sotw#requestedTarget> ex:x;
    dct:description "Requesting Party BOB requests to SELL resource X.".
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

<urn:uuid:da98666e-e80d-429a-a839-1575f85a9b3c> a <https://w3id.org/force/sotw#SotW>;
    <https://w3id.org/force/sotw#currentTime> ex:currentTime;
    <https://w3id.org/force/sotw#partyCollection> ex:partyCollection;
    <https://w3id.org/force/sotw#existingReport> <urn:uuid:17ced35e-39ff-427d-a9c8-cfa4c5f44d1b>.
ex:currentTime dct:issued "2024-02-12T11:20:10.999Z"^^xsd:dateTime.
<urn:uuid:17ced35e-39ff-427d-a9c8-cfa4c5f44d1b> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:5aa7f98c-65e0-4ff2-9846-40203203a58a>;
    report:ruleReport <urn:uuid:ef7b885c-3322-4f79-90d6-aeb6c7e682ec>.
<urn:uuid:ef7b885c-3322-4f79-90d6-aeb6c7e682ec> a report:DutyReport;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:a0b12cb7-d3a1-4953-86da-f59a597615d2>;
    report:performanceState report:Performed;
    report:deonticState report:Fulfilled.
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

<urn:uuid:26f4885f-fa29-4fef-8b3d-848f64ca85a9> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:cc4995de-9c5e-4e12-9039-698506f6ab1c>;
    report:policyRequest <urn:uuid:b7306adc-3f51-4ed4-b9fb-1864c2f1bdc9>;
    report:ruleReport <urn:uuid:154219ca-71a2-43c0-99e6-3e3cebbf5939>.
<urn:uuid:154219ca-71a2-43c0-99e6-3e3cebbf5939> a report:PermissionReport;
    report:premiseReport <urn:uuid:17d2bdcf-8890-4ec4-95b1-30313fb92068>, <urn:uuid:e486537e-0656-4f10-a218-050c7b4b509e>, <urn:uuid:e950f382-f0f2-4ffd-ab55-b46d12a46c21>, <urn:uuid:6effdc2e-d26e-4c7b-ac6a-19b7c0ffa709>;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:38578227-70b7-4649-980d-661a57e91b72>;
    report:ruleRequest <urn:uuid:b7306adc-3f51-4ed4-b9fb-1864c2f1bdc9>;
    report:conditionReport <urn:uuid:ef7b885c-3322-4f79-90d6-aeb6c7e682ec>;
    report:activationState report:Inactive.
<urn:uuid:17d2bdcf-8890-4ec4-95b1-30313fb92068> a report:ConstraintReport;
    report:constraint <urn:uuid:553d2546-a1bb-4e05-af99-95cef8c3b750>;
    report:satisfactionState report:Satisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8c5b00bc-6d23-4222-bab6-8fe587443c9b>, <urn:uuid:af8066cf-72e2-4591-9fc9-2bc69c93d339>.
<urn:uuid:8c5b00bc-6d23-4222-bab6-8fe587443c9b> a report:ConstraintReport;
    report:constraint <urn:uuid:6e8d7da2-0c51-4fab-a863-5e885a4b0f64>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-31T23:59:59.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:af8066cf-72e2-4591-9fc9-2bc69c93d339> a report:ConstraintReport;
    report:constraint <urn:uuid:c946aac6-dac5-4450-8bd5-fae5f235b6e9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-01T00:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e486537e-0656-4f10-a218-050c7b4b509e> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:e950f382-f0f2-4ffd-ab55-b46d12a46c21> a report:PartyReport;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6effdc2e-d26e-4c7b-ac6a-19b7c0ffa709> a report:ActionReport;
    report:satisfactionState report:Unsatisfied.
```
