# Test Suite

The test suite is software that can execute, validate and measure the compliance of an evaluator over a set of test cases.

A test case consists of the following:
- A Policy
- The state of the world
- The expected compliance report
- Description of the test case
- (optional) A Request (in case of an Access Control Scenario)


## How does it work

First, it loads in the test cases.
A test case has a description in RDF which instantiated looks like the following:

```ttl
<urn:uuid:68023514-bfd3-435f-bf2b-e1ef93e3015e> a ex:TestCase;
    dct:title "Title of the test case.";
    ex:policy <PolicyIdentifier> ;
    ex:request <RequestIdentifier> ;
    ex:sotw <StateOfTheWorldIdentifier> ;
    ex:expectedReport <ReportIdentifier> .
```

I001 |n [`data/test_cases/`](./data/test_cases/) examples can be found of an [instantiated test case](./data/test_cases/testcase-001-alice.ttl).

The function `loadTestCases` is responsible for this task.

Next, each test case is evaluated using an Evaluator. That is the evaluator is given a *policy*, a *request* and the *state of the world*.
The result (a compliance report) is then compared against the *expected compliance report*. 

During this process, count is tracked of (i) the amount of test cases, (ii) the total amount of successful validations and (iii) the total amount of expected vs evaluated compliance report equality.

Note: currently, the state of the world and the expected compliance report are added in the serialization of a test case.

## How to run the test-suite

The [`test-suite.ts`](./demo/test-suite.ts) contains the code that runs the test suite.

The directories for the `loadTestCases` are hardcoded constants which expect the following structure:

```sh
data/
└── ODRL
    ├── policies
    ├── requests
    ├── sotw
    └── test_cases
```

First, the packages need to be installed
```sh
npm install
```

Then, run the test suite:
```sh
npx ts-node demo/test-suite.ts
```

Note: only [Nodejs](https://nodejs.org/en) `v18.18.2` and [npm](https://www.npmjs.com/) `9.8.1` is tested

Following code shows how to run the test suite.

```ts
import { ComplianceReportComparator, runTestSuite, TestCase, TestCaseEvaluation, TestCaseEvaluator} from "./src";
import { ODRLEvaluator } from "./ODRL-Evaluator";

async function main() {

    const testCases: TestCase[] = []; // a list of Test Cases conforming to the TestCase interface
    const odrlEvaluator = new ODRLEvaluator();
    const comparison = ComplianceReportComparator.simple; // A comparison metric used to compare an expected and evaluated compliance report
    const testCaseEvaluator = new TestCaseEvaluator(odrlEvaluator, comparison); 

    // running the test suite, which does both the evaluations on all test cases and the comparison
    const evaluations: TestCaseEvaluation[] = await runTestSuite(testCases, testCaseEvaluator);
}
main()
```

## Result of the test suite

Engine: ODRLEngineMultipleSteps <br>
Evaluator: ODRLEvaluator <br>
Comparison metric: Rule-Activation-similarity <br>
There were 67 ODRL evaluations correct compared to the Expected Compliance Report. <br>
| Number | Test case ID                                                                                            | Scenario                                                                                                                     | Comparison status | ODRL Evaluator Support |
| ------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------- |
| 001    | [urn:uuid:e2123eb7-0707-4f24-bcc0-9d61dd9088a9](./data/test_cases/testcase-001-alice.ttl)               | Any request results into yes (Alice Request).                                                                                | true              | true                   |
| 002    | [urn:uuid:bffd9ee8-63a6-4b50-ab68-26709ce95bdc](./data/test_cases/testcase-002-bob.ttl)                 | Any request results into yes (Bob Request).                                                                                  | true              | true                   |
| 003    | [urn:uuid:debea3a5-056b-464c-bcca-95ab4678a27b](./data/test_cases/testcase-003-bob-write-y.ttl)         | Any request results into yes (Bob Request Write).                                                                            | true              | true                   |
| 004    | [urn:uuid:00a20e06-50db-4ae4-a53e-18ffeccde8c8](./data/test_cases/testcase-004-alice.ttl)               | Any request results into no (Alice Request).                                                                                 | true              | true                   |
| 005    | [urn:uuid:a1c58c22-c170-483f-b05a-5b6ae4e632f5](./data/test_cases/testcase-005-bob.ttl)                 | Any request results into no (Bob Request).                                                                                   | true              | true                   |
| 006    | [urn:uuid:f588a33b-9346-4ea5-9d3a-22fd215e50a6](./data/test_cases/testcase-006-bob-write-y.ttl)         | Any request results into no (Bob Request Write).                                                                             | true              | true                   |
| 007    | [urn:uuid:b68298ee-f9d5-4f1c-a856-7a011cc2af69](./data/test_cases/testcase-007-alice.ttl)               | Any request to use results into yes (Alice Request).                                                                         | true              | true                   |
| 008    | [urn:uuid:dfe139c2-02c9-40b1-a8ae-e61cc82a768a](./data/test_cases/testcase-008-bob.ttl)                 | Any request to use results into yes (Bob Request).                                                                           | true              | true                   |
| 009    | [urn:uuid:f2e067fb-c1df-4266-9b23-6c60ccdbfcb0](./data/test_cases/testcase-009-bob-write-y.ttl)         | Any request to use results into yes (Bob Request Write).                                                                     | true              | true                   |
| 010    | [urn:uuid:5e23604d-f6a0-464f-a6b3-eb04fe97b908](./data/test_cases/testcase-010-alice-sell.ttl)          | Any request to use results into yes (Alice Request Sell).                                                                    | true              | true                   |
| 011    | [urn:uuid:f152953e-c7c6-4a47-a7e5-2522210d5627](./data/test_cases/testcase-011-alice.ttl)               | Any request to use results into no (Alice Request).                                                                          | true              | true                   |
| 012    | [urn:uuid:d9c381f3-76db-4e1e-801b-380c8e47722d](./data/test_cases/testcase-012-bob.ttl)                 | Any request to use results into no (Bob Request).                                                                            | true              | true                   |
| 013    | [urn:uuid:eed06a7c-055e-4789-bdbc-40365b2a26d4](./data/test_cases/testcase-013-bob-write-y.ttl)         | Any request to use results into no (Bob Request Write).                                                                      | true              | true                   |
| 014    | [urn:uuid:687781a9-409d-4ae6-89e5-3a64bdb5bda7](./data/test_cases/testcase-014-alice-sell.ttl)          | Any request to use results into no (Alice Request Sell).                                                                     | true              | true                   |
| 015    | [urn:uuid:a03acb38-73b3-4b09-a1f9-d9dd21bae0ef](./data/test_cases/testcase-015-alice.ttl)               | Any request from Alice to use returns into yes (Alice Request).                                                              | true              | true                   |
| 016    | [urn:uuid:296a3e9d-af68-4d1c-8acd-f2958c3d7a8a](./data/test_cases/testcase-016-bob.ttl)                 | Any request from Alice to use returns into yes (Bob Request).                                                                | true              | true                   |
| 017    | [urn:uuid:ab740e02-2f2c-4f50-bccd-9884e96b679e](./data/test_cases/testcase-017-alice-sell.ttl)          | Any request from Alice to use returns into yes (Alice Request Sell).                                                         | true              | true                   |
| 018    | [urn:uuid:95dd195c-0e5e-440f-8517-f4298a64a019](./data/test_cases/testcase-018-alice.ttl)               | Any request from Bob to use returns into no (Alice Request).                                                                 | true              | true                   |
| 019    | [urn:uuid:790f07c5-2dc2-4782-abcc-410340abad94](./data/test_cases/testcase-019-bob.ttl)                 | Any request from Bob to use returns into no (Bob Request).                                                                   | true              | true                   |
| 020    | [urn:uuid:c309ff91-5c6e-427a-bee4-4923f5f38844](./data/test_cases/testcase-020-bob-sell.ttl)            | Any request from Bob to use returns into no (Bob Request Sell).                                                              | true              | true                   |
| 021    | [urn:uuid:84cdbf46-afc2-42f2-9ed5-b9e87063292c](./data/test_cases/testcase-021-alice.ttl)               | Read request from Alice returns into yes (Alice Request).                                                                    | true              | true                   |
| 022    | [urn:uuid:9cbe9ea0-61aa-4e92-a711-65d677b54f55](./data/test_cases/testcase-022-alice-sell.ttl)          | Read request from Alice returns into yes (Alice Request Sell).                                                               | true              | true                   |
| 023    | [urn:uuid:0b40edb2-8d1c-4c0e-91a0-1c19486686bd](./data/test_cases/testcase-023-alice-read-y.ttl)        | Read request from Alice returns into yes (Alice Request Read Y).                                                             | true              | true                   |
| 024    | [urn:uuid:623d29bc-f4e2-4f2a-80ec-2cbb2e8c6a2a](./data/test_cases/testcase-024-alice-write-x.ttl)       | Read request from Alice returns into yes (Alice Request Write X).                                                            | true              | true                   |
| 025    | [urn:uuid:c6cc07c2-7c97-44d2-a85d-578710efefca](./data/test_cases/testcase-025-bob-read-x.ttl)          | Read request from Alice returns into yes (Bob Request Read X).                                                               | true              | true                   |
| 026    | [urn:uuid:3ce32312-1c36-4839-b12d-e3d6884d89f0](./data/test_cases/testcase-026-alice-read-x.ttl)        | Read request from Alice to resource X returns into yes (Alice Request Read X).                                               | true              | true                   |
| 027    | [urn:uuid:113d9a92-fee3-42b2-b347-e8bbc8316b6f](./data/test_cases/testcase-027-alice-write-x.ttl)       | Read request from Alice to resource X returns into yes (Alice Request Write X).                                              | true              | true                   |
| 028    | [urn:uuid:97e3adc5-16f1-45d2-87b9-e8e50b5a61d8](./data/test_cases/testcase-028-alice-read-y.ttl)        | Read request from Alice to resource X returns into yes (Alice Request Read Y).                                               | true              | true                   |
| 029    | [urn:uuid:2e5cac06-0f27-4265-884c-9a60d5a64a61](./data/test_cases/testcase-029-bob-write-y.ttl)         | Read request from Alice to resource X returns into yes (Bob Request Write Y).                                                | true              | true                   |
| 030    | [urn:uuid:dde40097-f237-40cf-bb1e-03f632f6fd62](./data/test_cases/testcase-030-alice-read-x.ttl)        | Read request from Alice to resource X returns into yes (temporal eq) (Alice Request Read X).                                 | true              | true                   |
| 031    | [urn:uuid:f86ae64f-a207-4f5e-824d-c71253419232](./data/test_cases/testcase-031-alice-read-x-past.ttl)   | Read request from Alice to resource X returns into yes (temporal eq - past) (Alice Request Read X).                          | true              | true                   |
| 032    | [urn:uuid:ea199623-277b-4976-9cf5-1bbccb334da3](./data/test_cases/testcase-032-alice-read-x-future.ttl) | Read request from Alice to resource X returns into yes (temporal eq - future) (Alice Request Read X).                        | true              | true                   |
| 033    | [urn:uuid:b55e6773-1149-4149-86c2-d5133885f99e](./data/test_cases/testcase-033-alice-read-x.ttl)        | Read request from Alice to resource X returns into yes (temporal neq) (Alice Request Read X).                                | true              | true                   |
| 034    | [urn:uuid:c58bab8c-a0a7-400b-9f28-1f753482a041](./data/test_cases/testcase-034-alice-read-x-past.ttl)   | Read request from Alice to resource X returns into yes (temporal neq - past) (Alice Request Read X).                         | true              | true                   |
| 035    | [urn:uuid:420152ac-946b-4187-9b0d-f1facebc983e](./data/test_cases/testcase-035-alice-read-x-future.ttl) | Read request from Alice to resource X returns into yes (temporal neq - future) (Alice Request Read X).                       | true              | true                   |
| 036    | [urn:uuid:e0cbcbbd-00de-4fb1-b4c0-fc86a1b7ec9d](./data/test_cases/testcase-036-alice-read-x.ttl)        | Read request from Alice to resource X returns into yes (temporal lt) (Alice Request Read X).                                 | true              | true                   |
| 037    | [urn:uuid:22ee88e3-a923-4ee0-b690-65710cf9480f](./data/test_cases/testcase-037-alice-read-x-past.ttl)   | Read request from Alice to resource X returns into yes (temporal lt - past) (Alice Request Read X).                          | true              | true                   |
| 038    | [urn:uuid:d8c0aec1-a8d1-41dc-8847-775669a264e3](./data/test_cases/testcase-038-alice-read-x-future.ttl) | Read request from Alice to resource X returns into yes (temporal lt - future) (Alice Request Read X).                        | true              | true                   |
| 039    | [urn:uuid:251ab936-e085-44f1-aca6-ecbd704d1128](./data/test_cases/testcase-039-alice-read-x.ttl)        | Read request from Alice to resource X returns into yes (temporal lteq) (Alice Request Read X).                               | true              | true                   |
| 040    | [urn:uuid:778fb3a6-aefe-4fd5-91e8-6455b6409707](./data/test_cases/testcase-040-alice-read-x-past.ttl)   | Read request from Alice to resource X returns into yes (temporal lteq - past) (Alice Request Read X).                        | true              | true                   |
| 041    | [urn:uuid:44b34091-7f68-43b2-8a1b-529da71e2237](./data/test_cases/testcase-041-alice-read-x-future.ttl) | Read request from Alice to resource X returns into yes (temporal lteq - future) (Alice Request Read X).                      | true              | true                   |
| 042    | [urn:uuid:55606dca-592f-49da-95c3-8795e99cafca](./data/test_cases/testcase-042-alice-read-x.ttl)        | Read request from Alice to resource X returns into yes (temporal gt) (Alice Request Read X).                                 | true              | true                   |
| 043    | [urn:uuid:8a50fa6b-468a-4959-94d3-33458ec30cc9](./data/test_cases/testcase-043-alice-read-x-past.ttl)   | Read request from Alice to resource X returns into yes (temporal gt - past) (Alice Request Read X).                          | true              | true                   |
| 044    | [urn:uuid:431d8e84-236b-4045-a3f2-cc36bf5a21c2](./data/test_cases/testcase-044-alice-read-x-future.ttl) | Read request from Alice to resource X returns into yes (temporal gt - future) (Alice Request Read X).                        | true              | true                   |
| 045    | [urn:uuid:0cf68c7f-97ba-4bc5-8f57-53e99dc7e989](./data/test_cases/testcase-045-alice-read-x.ttl)        | Read request from Alice to resource X returns into yes (temporal gteq) (Alice Request Read X).                               | true              | true                   |
| 046    | [urn:uuid:2535a606-e982-49d4-b6a0-b35b81ec518d](./data/test_cases/testcase-046-alice-read-x-past.ttl)   | Read request from Alice to resource X returns into yes (temporal gteq - past) (Alice Request Read X).                        | true              | true                   |
| 047    | [urn:uuid:43a06637-af8a-4db3-a29d-1ac8916d3291](./data/test_cases/testcase-047-alice-read-x-future.ttl) | Read request from Alice to resource X returns into yes (temporal gteq - future) (Alice Request Read X).                      | true              | true                   |
| 048    | [urn:uuid:1f435d44-1ba1-477c-b07e-79ee56abee34](./data/test_cases/testcase-048-alice-read-x.ttl)        | Read request from Alice to resource X returns into yes (temporal + And (year 2024)) (Alice Request Read X).                  | true              | true                   |
| 049    | [urn:uuid:f7e559c1-e9e2-403a-a335-aa0ec71d2531](./data/test_cases/testcase-049-alice-read-x-past.ttl)   | Read request from Alice to resource X returns into yes (temporal + And (year 2024)) (Alice Request Read X - past).           | true              | true                   |
| 050    | [urn:uuid:7a7afb6f-f4f8-4bb7-90e0-4b913e58cc94](./data/test_cases/testcase-050-alice-read-x-future.ttl) | Read request from Alice to resource X returns into yes (temporal + And (year 2024)) (Alice Request Read X - future).         | true              | true                   |
| 051    | [urn:uuid:11a9dfb5-a3a9-43a5-9c18-e92df3057e76](./data/test_cases/testcase-051-alice.ttl)               | Read request from people in party collection to resource X returns into yes (Alice Request Read X).                          | true              | true                   |
| 052    | [urn:uuid:57856edb-2ff9-4ff8-a2b2-f56ceb8d5825](./data/test_cases/testcase-052-bob-read-x.ttl)          | Read request from people in party collection to resource X returns into yes (Bob Request Read X).                            | true              | true                   |
| 053    | [urn:uuid:459e47f0-fcb8-4880-9225-5f6a3b4c155f](./data/test_cases/testcase-053-alice-read-x.ttl)        | Read request from Alice to resource in asset collection returns into yes (Alice Request Read X).                             | true              | true                   |
| 054    | [urn:uuid:1e735c45-0c7a-41fc-a267-784894e6fddd](./data/test_cases/testcase-054-alice-read-y.ttl)        | Read request from Alice to resource in asset collection returns into yes (Alice Request Read Y).                             | true              | true                   |
| 055    | [urn:uuid:ada99890-79ab-4893-9969-69678fe3756c](./data/test_cases/testcase-055-alice-read-x.ttl)        | Read request from people in party collection to resource in asset collection returns into yes (Alice Request Read X).        | true              | true                   |
| 056    | [urn:uuid:8c94c52e-76e4-4b36-96e5-b2782fcbf767](./data/test_cases/testcase-056-alice-read-y.ttl)        | Read request from people in party collection to resource in asset collection returns into yes (Alice Request Read Y).        | true              | true                   |
| 057    | [urn:uuid:9f6b34db-8bee-4de4-a313-afdae6f8cc3b](./data/test_cases/testcase-057-bob-read-x.ttl)          | Read request from people in party collection to resource in asset collection returns into yes (Bob Request Read X).          | true              | true                   |
| 058    | [urn:uuid:94703acc-1dfd-4689-87d2-607c81974a4c](./data/test_cases/testcase-058-bob-write-y.ttl)         | Read request from people in party collection to resource in asset collection returns into yes (Bob Request Write Y).         | true              | true                   |
| 059    | [urn:uuid:1c47df55-a53d-4740-93a8-614fc3ea9a1b](./data/test_cases/testcase-059-nonset.ttl)              | Read request from Alice to resource X returns into yes, if duty is not violated (Alice Request Read X - duty unknown).       | true              | false                  |
| 060    | [urn:uuid:211654bf-86e1-42f6-8f20-cd08e3c3992e](./data/test_cases/testcase-060-fulfilled.ttl)           | Read request from Alice to resource X returns into yes, if duty is not violated (Alice Request Read X- duty fulfilled).      | true              | false                  |
| 061    | [urn:uuid:5b372c04-ceb8-48bd-b4b8-cb6380683374](./data/test_cases/testcase-061-violated.ttl)            | Read request from Alice to resource X returns into yes, if duty is not violated (Alice Request Read X - duty violated).      | false             | false                  |
| 062    | [urn:uuid:9c052f5d-0788-4352-b957-322b432b1bfa](./data/test_cases/testcase-062-big-policy.ttl)          | Read request from Alice to resource X on weekdays from 9-17 in 2024 returns into yes (Alice Request Read X).                 | true              | true                   |
| 063    | [urn:uuid:8677b86e-4a09-421c-a75b-f50874c8ec58](./data/test_cases/testcase-063-big-policy-OoO.ttl)      | Read request from Alice to resource X on weekdays from 9-17 in 2024 returns into yes (Alice Request Read X - out of office). | true              | true                   |
| 064    | [urn:uuid:32ac9d9d-dddf-434a-a309-14bb9224ef2e](./data/test_cases/testcase-064-big-policy-past.ttl)     | Read request from Alice to resource X on weekdays from 9-17 in 2024 returns into yes (Alice Request Read X - past).          | true              | true                   |
| 065    | [urn:uuid:5ab9d056-dcb8-47f6-a4af-dd5d9320f958](./data/test_cases/testcase-065-alice.ttl)               | Read request from people in party collection to resource X in 2024 returns into yes (Alice Request Read X).                  | true              | false                  |
| 066    | [urn:uuid:f9648615-bb2f-4d74-8f87-e2da0d327932](./data/test_cases/testcase-066-bob-sell.ttl)            | Read request from people in party collection to resource X in 2024 returns into yes (Alice Request Read X - past).           | true              | false                  |
| 067    | [urn:uuid:2c997aef-a337-4503-aec7-3a93675f7b1a](./data/test_cases/testcase-067-alice-past.ttl)          | Read request from people in party collection to resource X in 2024 returns into yes (Alice Request Read X - past).           | true              | false                  |
| 068    | [urn:uuid:7844a3ce-40ec-4d6d-90f4-d0be27bba69c](./data/test_cases/testcase-068-bob-write-y-past.ttl)    | Read request from people in party collection to resource X in 2024 returns into yes (Bob Request Write Y - past).            | true              | false                  |
