# Read request from Alice to resource X on weekdays from 9-17 in 2024 returns into yes (Alice Request Read X - out of office).
**Source**: https://github.com/SolidLabResearch/ODRL-Test-Suite/
> During 9-17 on weekdays of 2024 ALICE has READ access to resource X.
## ODRL Policy
```ttl
@prefix odrl: <http://www.w3.org/ns/odrl/2/>.
@prefix ex: <http://example.org/>.
@prefix temp: <http://example.com/request/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix report: <https://w3id.org/force/compliance-report#>.

<urn:uuid:29b08c0a-97ea-41b1-b8e9-88400b1230cf> a odrl:Set;
    odrl:uid <urn:uuid:29b08c0a-97ea-41b1-b8e9-88400b1230cf>;
    dct:description "During 9-17 on weekdays of 2024 ALICE has READ access to resource X.";
    dct:source <https://github.com/SolidLabResearch/ODRL-Test-Suite/>;
    odrl:permission <urn:uuid:f5d5f6d7-ef4b-43bc-9838-b79aef793883>.
<urn:uuid:f5d5f6d7-ef4b-43bc-9838-b79aef793883> a odrl:Permission;
    odrl:assignee ex:alice;
    odrl:action odrl:read;
    odrl:target ex:x;
    odrl:constraint <urn:uuid:fe3f0a29-307d-409d-ac71-f0f88c220cb7>.
<urn:uuid:fe3f0a29-307d-409d-ac71-f0f88c220cb7> a odrl:LogicalConstraint;
    odrl:or <urn:uuid:3e55a9e0-a368-495c-b378-ef1fc7d28423>, <urn:uuid:3a0b7e60-201d-4fc8-b1f7-4f5dd6df5acd>, <urn:uuid:4040ebf0-21ae-4d2f-b0d0-c94bd10500b4>, <urn:uuid:4549fbe1-ea71-4b56-983d-52ce9f494d9d>, <urn:uuid:f2c2a215-4758-4b95-8a72-d780c955340a>, <urn:uuid:6bf766d8-9bc9-4d02-8e4f-7d27c52ae51c>, <urn:uuid:e4bbfc36-01eb-438d-82d5-764eaf6f4b38>, <urn:uuid:ae5d7d97-5e92-461a-a3ca-5653a7e87292>, <urn:uuid:027b62aa-1ecc-475b-a5d0-fe358d8bd175>, <urn:uuid:66138113-683f-420e-ad70-d3d17d234773>, <urn:uuid:5f6bab6e-bf48-44c3-84fe-ccbc610d7d5e>, <urn:uuid:cc4e7745-6e96-4d7a-b1af-38499fdd6cad>, <urn:uuid:d5f55ddb-27ae-479e-a376-b8fe2e38e1ed>, <urn:uuid:42e65efc-e205-490a-ba22-f7e5daa11eb2>, <urn:uuid:e60f11c7-561f-4459-9e9e-4e5f037006c0>, <urn:uuid:4d8d327a-4d3c-4b09-856b-39b67261bec6>, <urn:uuid:3fc45405-5ebb-41b1-a8d6-ab0bbb0d7857>, <urn:uuid:925027e7-3d8f-4b79-9558-e7ec0087c87f>, <urn:uuid:63936891-0ef5-48eb-9d64-9bf5b2778502>, <urn:uuid:9f77c162-b09e-4b3d-9c70-52e4f7fae8f4>, <urn:uuid:fd5037f5-3660-4382-b5c5-c29af7d01e58>, <urn:uuid:668c4199-db43-4336-9edf-82eb3a87f336>, <urn:uuid:99b59b86-e907-4eb3-b6e2-2eb826d8f887>, <urn:uuid:b074c5d1-ec4b-49b6-8404-3454c20c5fee>, <urn:uuid:93760dc7-3009-45c0-ac6a-093b6ed9ae31>, <urn:uuid:93780389-290c-4574-8814-7da01c1de167>, <urn:uuid:502793e8-9aa3-4c1b-8566-f3310fcf84cd>, <urn:uuid:9ecc0a82-8017-4b1f-87e2-10f326f7fe03>, <urn:uuid:86330f57-8d3b-4305-8b28-7757bf0913a7>, <urn:uuid:aa961acb-59e1-404b-abf8-db7b2da9ffd9>, <urn:uuid:f40cc880-e1ff-4401-8d48-087cf5bb1ba6>, <urn:uuid:59b07fb2-5acc-4f4b-83a7-36569246fde9>, <urn:uuid:4d46f200-3390-4b59-bc09-ed4b50729e50>, <urn:uuid:7655c3fd-75e1-4da1-9cfd-2e9cd230ae8f>, <urn:uuid:2abc17af-ec27-4334-81ec-eddba73cba51>, <urn:uuid:97e7e460-8655-4b64-b3f1-1d89f6e0c4a0>, <urn:uuid:7e2c2746-5afb-444f-a09f-73af2b79e702>, <urn:uuid:0eb27dd6-ebfd-41e1-bee1-ccf4f9567a61>, <urn:uuid:29df4b6d-1b30-4619-9736-9910241d9c0c>, <urn:uuid:e0b803b3-e897-4aad-843d-ef986e32dc64>, <urn:uuid:5f91aee4-9ac7-41ed-abdd-c11df12d361b>, <urn:uuid:6dc5739c-5b2f-4d80-8336-3af8987cf193>, <urn:uuid:2aa878e6-76d0-4bb8-96ea-3be7d735a3ac>, <urn:uuid:4f2a4f2e-67a9-4b56-9e5d-3a7ec58ad9a5>, <urn:uuid:2206cd56-4786-445c-aa3a-08e840d6e640>, <urn:uuid:ec78c7d3-66b7-4d54-9aac-2b198c1f02dc>, <urn:uuid:b8bf92b6-748c-4178-b192-5b2b3c6db4a0>, <urn:uuid:246ce49c-f71e-4801-b69a-d964d0bd115d>, <urn:uuid:29120bf0-065f-4622-b514-2b911a431c20>, <urn:uuid:4a59f4f2-aff3-4517-a411-d2e510bf8c96>, <urn:uuid:b2f555d9-9210-44c1-81fe-edc8991ffd56>, <urn:uuid:f0f5ad97-b87d-4279-a867-866578fe19f0>, <urn:uuid:1150ffd0-17c2-4ae5-bfd5-cd36a0363a1b>, <urn:uuid:8b4fa82c-c1ef-4115-b314-a1e40eaed545>, <urn:uuid:2c95e2cf-979a-4f36-8070-44ab64ef4a52>, <urn:uuid:091b7cd1-3c5d-4872-ac1f-ea4013ecfe3a>, <urn:uuid:eb10643c-9448-493e-a898-5c30b281d81a>, <urn:uuid:34f70158-fe31-4ca1-85d0-c4957382a876>, <urn:uuid:08a6a691-f695-40f9-8ef0-cd929a71cd80>, <urn:uuid:605cff08-6f85-47c4-a3fc-e4ccfdf4272b>, <urn:uuid:d9ee2558-651c-478e-8b36-b554c988bee6>, <urn:uuid:0cbbaa09-776e-4273-8e5d-8d7cfa08b215>, <urn:uuid:7fa67880-ab1d-437f-9cf0-5983985cde80>, <urn:uuid:d56b1ab6-1061-4698-a7b1-6d1fb928b712>, <urn:uuid:351f0fe6-a2c8-4a67-9220-979055330e25>, <urn:uuid:2df3010b-c218-4522-aa01-95b27101dfbb>, <urn:uuid:61325691-ebaf-4599-a045-c6fff992505f>, <urn:uuid:d0c698e7-911f-4f4b-bc87-286686632871>, <urn:uuid:053e3c7c-6888-43c9-a9f0-4cb24ca6d09d>, <urn:uuid:08c7c40a-15a1-4348-a285-c14e1936f7cc>, <urn:uuid:8ea0d34a-c216-4aca-a3c9-0142b96bae5e>, <urn:uuid:7a3b0622-c6ce-4428-a617-2ddee777f29e>, <urn:uuid:e26c2df3-ff61-4c45-aea6-39c13f074c5d>, <urn:uuid:038e3c19-fd3f-4c7d-baaf-66cbf1395a80>, <urn:uuid:6cd96404-8106-43fb-a03c-c9afe481afef>, <urn:uuid:f6493d80-8cc2-4d9f-a692-f5bf273411ee>, <urn:uuid:e595520b-dd39-4c39-983f-bc428c8ab6ab>, <urn:uuid:b1320422-f589-44e6-9a7f-d4e740cf680f>, <urn:uuid:78d86c6f-307d-4c5d-be68-5739bd746223>, <urn:uuid:3012fdaf-534e-49af-9708-9a7a48c66e26>, <urn:uuid:4654b01f-328d-4a6f-bed7-6aa0b549661b>, <urn:uuid:7e6108e3-fcc2-4d3b-b6e1-ad0fcbe738e1>, <urn:uuid:835d8bc5-afbc-4329-9c8e-8b6dafd593b5>, <urn:uuid:46fc7cfa-126f-4d3e-99ba-4d8d0f42e6d7>, <urn:uuid:fc2a256c-19b3-47e3-9ecc-b0a6ac3e1aae>, <urn:uuid:9d1c2e80-4ff1-456c-a176-efd8a2ab94e5>, <urn:uuid:75f2c124-8774-4109-a764-98a1cc489c0d>, <urn:uuid:55f0f646-9797-4aa9-858f-51ca41f67aba>, <urn:uuid:50d61890-18a5-492a-8b37-1eddf79c7f6f>, <urn:uuid:9a3c57e4-cfb8-4c6e-a476-d764a2600bb7>, <urn:uuid:a684702d-9579-4edd-9766-0b7ce904b8f0>, <urn:uuid:cd32f3a4-24ee-4820-a5e4-da3731568953>, <urn:uuid:7d67465e-ed4f-4caa-8b85-ddc35d754d0b>, <urn:uuid:c2e4c4d2-faa2-4cd8-b6d1-1e5e49fb36fb>, <urn:uuid:cc5dd610-24a4-42c5-94aa-010dffc0a302>, <urn:uuid:188b83b5-ab83-4421-8238-3c04815b5f14>, <urn:uuid:fcb349da-54b9-4d93-b2f7-b8f9d0ec2d10>, <urn:uuid:2c4e3415-4958-46a7-b439-6a89d8d20f25>, <urn:uuid:c7b3cea6-c00e-461a-b5f9-c09a9ab28b32>, <urn:uuid:91eb91b7-3979-4cd9-b5aa-724ebf454baf>, <urn:uuid:c4dd2395-c34e-4035-a94b-dc153fa88c47>, <urn:uuid:024614b2-366f-43cf-918e-84c60bfacbcf>, <urn:uuid:b9f96351-34a1-425b-8b10-62bed2ea5f4e>, <urn:uuid:659710f4-8ddb-47ed-a9c9-38cfbf5010f4>, <urn:uuid:8578de8e-366e-4fd4-abe5-204db416e541>, <urn:uuid:37993806-e7c3-48ab-b31b-db56c93982b8>, <urn:uuid:f9ea2e45-0726-4b79-856f-0c283a02d999>, <urn:uuid:22e92d31-09da-4648-bc8f-f7445536cc4c>, <urn:uuid:ce990d0d-2cf8-4481-94e1-db9b2d863b11>, <urn:uuid:bb565bc1-5b00-4df3-8ca6-9ce8e9884fb7>, <urn:uuid:c8b4a8bf-e9a5-43fe-863c-99a45736a741>, <urn:uuid:0ffa4d37-e577-45f8-b2f8-a52a1310e39f>, <urn:uuid:70055daa-2732-4649-b94d-dd6099404c1b>, <urn:uuid:de591672-9b17-4917-862f-03e7bcbb43a4>, <urn:uuid:74b7368c-77f1-48ef-9849-2d2cbf5fa012>, <urn:uuid:cf644502-f44c-4306-9495-fca5c6310563>, <urn:uuid:1f2dcfd1-95a0-4d72-9be7-731bca82dd65>, <urn:uuid:c7593329-2fd1-4321-944a-c22938751a32>, <urn:uuid:e7dfca32-6777-4766-99be-5bd5a84f96f1>, <urn:uuid:d0c5b490-d975-479f-9eb8-65c24df82b7d>, <urn:uuid:793cd305-1103-40ea-9e31-a10ab143d8c1>, <urn:uuid:5cdf20be-8fad-4c68-9240-ad7c30283180>, <urn:uuid:74dc97f4-1225-4650-bd8a-3f7068433378>, <urn:uuid:0ea2f621-6e96-4f3b-94b9-e08e6d535154>, <urn:uuid:3d63f1c2-83c0-4baa-affe-cb056970291b>, <urn:uuid:d611d6ce-52a0-4ea0-89b9-96bef60b5cd8>, <urn:uuid:a7eb3b30-484d-4089-84b5-2d32e9b304de>, <urn:uuid:eb39968c-ad7f-4cc1-8587-5b586fb9f1da>, <urn:uuid:93741838-d8f3-488a-8eaa-2593e98d4b85>, <urn:uuid:9357eff0-74ad-4ef2-b7cd-b711773f361b>, <urn:uuid:e01c1d4f-b798-4898-bd37-ae8984e0895e>, <urn:uuid:6c3f0a06-99cf-42a8-9ae1-2e22a1fec935>, <urn:uuid:b4ba21e3-c660-4d48-b2ad-8a84b2e49eb7>, <urn:uuid:a39e7e6e-fa9a-4e39-80cb-c8ffed1352e9>, <urn:uuid:5dbda234-1c7b-46fd-bdcd-9f56591a98ab>, <urn:uuid:1f33abb2-fdb2-4529-8eec-3f697c2f61db>, <urn:uuid:f3228127-06d6-4a78-bd6d-a6aefd50045d>, <urn:uuid:0c421a36-31a8-4cc6-9387-655cbece11d9>, <urn:uuid:8df48bc7-37a6-463e-8600-944f84ccb6be>, <urn:uuid:f2284c0e-d8cc-470b-8d66-cc186b19533f>, <urn:uuid:b50718c6-2b45-4e05-9f0e-35352168177e>, <urn:uuid:524fb88e-3c3e-4296-8b14-9254caa38d43>, <urn:uuid:e24d42a3-23dc-4f6d-930c-b2f95fec0ad9>, <urn:uuid:efd32427-0878-4da6-840b-2cd88b36c229>, <urn:uuid:8238c0e7-4e25-4f42-b293-66221cf2cadd>, <urn:uuid:69cc4707-3662-4ee7-a597-37ce601435e2>, <urn:uuid:44a11646-feed-4e00-ad9f-ff087a9753bf>, <urn:uuid:f9117877-e0a1-4ce2-87b9-b9ef6e33baa9>, <urn:uuid:38f11df6-dbfc-415a-a7df-fc05d82c3061>, <urn:uuid:20497829-b46a-4328-a651-b38428b12192>, <urn:uuid:bf3f94cc-70da-4f6b-bd39-8f16892198f0>, <urn:uuid:c60e0ec8-902f-4e6e-a412-fa7d05c834ad>, <urn:uuid:e0ac9c09-e2d0-492e-8ce6-2bf419cbd71e>, <urn:uuid:f66f7a5c-58fd-4fb9-ac2a-847f7dc48a55>, <urn:uuid:ec84c86e-89c5-4a84-9b3c-5f6ea87859c6>, <urn:uuid:2581ca84-38bf-4716-a954-6ad2f779a1c6>, <urn:uuid:cc3ee7b5-34b1-4630-81e2-ac37b8274e9e>, <urn:uuid:f3d10c6b-c3c9-4b32-b3ed-1eb40ae2004e>, <urn:uuid:ecbe9aa1-a9d8-419f-9675-2c158a5919a7>, <urn:uuid:629997aa-cd95-433c-8b3c-b9aad2c6aa3e>, <urn:uuid:e4735358-f475-492c-b080-9b9b369fbd38>, <urn:uuid:8e7ca55b-5a1f-4444-9337-ee4f2f9025c7>, <urn:uuid:759a8766-a480-4c20-9a62-3092af654182>, <urn:uuid:e9e4a6cc-4c5c-4a23-8181-009a02c7aa7d>, <urn:uuid:9429299d-a355-491e-a34a-ba490a9f1bea>, <urn:uuid:6ffe395c-28bb-4a5b-8b46-423970f03867>, <urn:uuid:40fa925a-712e-4f2a-a737-ab9fbcf3319a>, <urn:uuid:6154c58e-869f-454b-876b-d400bfa0770e>, <urn:uuid:8c84d6f9-c83c-49d9-b988-e571c6493e21>, <urn:uuid:4eea153f-9a27-44da-8432-40aea5bdfc5d>, <urn:uuid:fe175296-5b32-4174-ad5b-9227a44c3615>, <urn:uuid:20a309ef-154e-4a93-82df-a7d1c633b8e7>, <urn:uuid:d6d4f8b2-82e7-4e4f-8949-94f5b5175654>, <urn:uuid:99489667-c4e5-405e-a108-ecdd3413e89b>, <urn:uuid:36a81698-68dc-4276-930b-5faea86191a2>, <urn:uuid:a79cbb6a-c51d-46c3-9abd-0f58b7d96220>, <urn:uuid:f8ecc917-b0a1-49de-b763-b2fa1084454c>, <urn:uuid:8d6e9a21-8ce8-47f3-826f-6c1ed990251b>, <urn:uuid:025579ca-9595-47c6-ae79-9d31d26f72ad>, <urn:uuid:b2335484-2193-43d5-952d-0eaa78b4d228>, <urn:uuid:20a8ed90-e5f2-47a9-8420-bc3365ef15e3>, <urn:uuid:f1e9e740-386d-41df-b308-f55f64cba6dc>, <urn:uuid:74a74712-2516-45e2-a784-80773c55d465>, <urn:uuid:8d19eb5d-ccc8-4b19-87c3-94f838e96639>, <urn:uuid:7edae164-7a1d-4e39-a6ff-5496ebd833cd>, <urn:uuid:45a8feaf-d112-4336-a432-b8cf99a6ad09>, <urn:uuid:df0a77f7-1d54-484a-afaf-4826ad4fcba1>, <urn:uuid:a5438dee-3584-40f2-b589-5f59bd64253e>, <urn:uuid:da363350-32e5-4e5d-8295-56f8fcdd8ffd>, <urn:uuid:652fdfd1-0c51-4bd5-a795-37770d4d9ac1>, <urn:uuid:5c11aec8-6640-4ec2-89bb-69660f9f3d4d>, <urn:uuid:26e133fc-cc58-44cd-8ff1-ee1ffbe5db36>, <urn:uuid:63a26522-ab0d-4f6f-b08b-0120b8a361a9>, <urn:uuid:330b8ea5-f382-457b-bfbf-47e5784ac046>, <urn:uuid:14031796-fb1d-4dbe-b0ef-1a8f43c9783c>, <urn:uuid:fc689a79-666b-4dfd-9c32-1f0eca9fd2db>, <urn:uuid:e0091d42-42f2-4a35-b90c-0ac144abd292>, <urn:uuid:e7d20235-7437-44b0-a4c8-0ff4215064c0>, <urn:uuid:02aa8f94-1b0a-4fa2-b55a-5901c1cbfc67>, <urn:uuid:fb999066-2b8c-4be0-8e08-7080709b1ef9>, <urn:uuid:3cb893f3-c716-4ac1-9ee0-78c63cffcd58>, <urn:uuid:8174c09d-2d7d-42df-99ce-d3a1fccd60a4>, <urn:uuid:f2f109b4-d9ac-4e41-9500-1303e5a942bb>, <urn:uuid:1eba4859-707e-44c6-84ab-615d120c7418>, <urn:uuid:87f8a293-6222-4d6f-9c35-bb996684d814>, <urn:uuid:dfc9b867-fc0d-41d4-898d-a68077cfd165>, <urn:uuid:7eeee0e5-4ffb-4514-b7c5-085a9cbb3e4f>, <urn:uuid:2a2bc816-ce9e-4b41-959d-5a2bcf3f6b01>, <urn:uuid:a48b06b7-de3b-4fa9-93c6-2bdc856b1391>, <urn:uuid:69be343c-30f3-441e-92da-4414c7263ebb>, <urn:uuid:219f1191-9d15-4061-9007-68e0be24b6b1>, <urn:uuid:b45f9ed9-383e-4580-aa46-33bbdcb49eaf>, <urn:uuid:93fe924e-d433-4680-993c-1dd6aadd8406>, <urn:uuid:26bca22d-c7f7-45cf-965a-cb25b18f5e12>, <urn:uuid:5b437f68-c233-4340-9d68-bd8f90938c28>, <urn:uuid:701a1f06-f867-4edb-a3b9-d471b0b8265c>, <urn:uuid:068de183-3d3b-4f38-9769-1007f978524e>, <urn:uuid:134563e3-0314-44ce-bd44-7c9796d8dcc2>, <urn:uuid:9d3d4dbb-46eb-4d0a-8ae6-a44c703e04fc>, <urn:uuid:778cf6cb-3945-41d1-9d65-8476c2efce85>, <urn:uuid:a2b733a3-89e8-4f81-a954-fefc0e29072e>, <urn:uuid:9ef3e970-701b-4f7e-a7cb-c6aa5a2efaef>, <urn:uuid:eaa436c6-0904-452a-b0e1-41bc185a0a71>, <urn:uuid:bc44fecb-3934-4fff-8ae3-6b04fb45f7f5>, <urn:uuid:957bfa67-4996-4fc9-95a9-636a4f2b743f>, <urn:uuid:9c6ec92b-4df8-4996-b92f-e1bd63a7f5b1>, <urn:uuid:f0d083f6-499c-4ec6-b50f-cf494abfb2f3>, <urn:uuid:b41c49b3-26f3-4560-934c-0e80d21632ec>, <urn:uuid:7a225779-fcf2-4897-9286-bd999e707822>, <urn:uuid:a8cca86c-e932-47a7-85fa-e7befcb3c6e0>, <urn:uuid:50ef2f36-3080-4473-81d5-ebaf466720fd>, <urn:uuid:fdd857e3-4be4-44fb-8fd1-8b7ac89209e3>, <urn:uuid:fc60793d-9d4c-4a96-b432-2467049085aa>, <urn:uuid:c562d65c-598f-4802-afec-1d4b9da76053>, <urn:uuid:636fd4c9-f929-4d9f-8cb9-9aa7c4dd0c23>, <urn:uuid:662d1f4f-bf9d-4a80-ae6b-c3eb2584c344>, <urn:uuid:d9453fa8-8c91-492d-ae9b-2d008d6670a2>, <urn:uuid:64e4b11b-2c26-46a9-88db-347b386c1999>, <urn:uuid:38413bf0-11f3-4877-914a-96ccf6c59aab>, <urn:uuid:7be61257-458a-4fb6-b0f2-b52d3f577c83>, <urn:uuid:3baee5f7-6433-4381-9106-4af816a512fd>, <urn:uuid:44ae9166-531c-4415-a62f-655a6cea9d01>, <urn:uuid:b8c7fbfe-4b16-4dea-b08c-1268cc7e1eb1>, <urn:uuid:ef4fdae7-207b-45ec-a4db-b6fbf69e809f>, <urn:uuid:e7a41771-8364-43e1-8647-401f37f8e886>, <urn:uuid:e27de4ad-8809-470a-864e-6956eab9067f>, <urn:uuid:3ec09e77-b91a-4217-b789-00f1c6051816>, <urn:uuid:653449a3-b32e-43ce-bad2-4ca7b8b43674>, <urn:uuid:5609f832-97cf-4932-9120-7a5d698e8b61>, <urn:uuid:99f1ec97-f070-4860-bff3-f23fa5f55946>, <urn:uuid:df2456bb-3a47-4c13-9a42-443c163a861b>, <urn:uuid:212e9f84-4485-4fbd-a63a-f22ae5d65c45>, <urn:uuid:1f10b2d8-0fc8-4dd9-b0cf-c07e1080a7df>, <urn:uuid:3c4108b3-5cfc-45ee-af03-f01c2cb86c9f>, <urn:uuid:f9e0ce4a-7246-47ae-b251-b620a276b3ad>, <urn:uuid:9e95cad6-95bf-4497-a3bc-9a4d54576226>, <urn:uuid:88c0a344-a509-4140-a039-691fe86311d1>, <urn:uuid:cdc19240-6380-423e-a367-5dc1fa7d8358>, <urn:uuid:a7622a4e-402c-4c9b-90a7-f48c07287ea0>, <urn:uuid:b70d3865-fc6e-49e7-9b2c-6850843d5a90>, <urn:uuid:bcb639ac-7236-4770-b4a3-6209d0e8bf55>, <urn:uuid:3ff4714c-8c80-4f72-8ab5-72013400fda4>.
<urn:uuid:3e55a9e0-a368-495c-b378-ef1fc7d28423> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ef1995be-0881-4d8b-b268-728b5478983f>, <urn:uuid:6419ce9e-6e46-4d73-a30e-4683f1f29c73>.
<urn:uuid:6419ce9e-6e46-4d73-a30e-4683f1f29c73> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ef1995be-0881-4d8b-b268-728b5478983f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3a0b7e60-201d-4fc8-b1f7-4f5dd6df5acd> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:89691371-6a64-460e-8459-627c7eb0a822>, <urn:uuid:19203254-c14c-4072-ad00-a0f5b643967d>.
<urn:uuid:19203254-c14c-4072-ad00-a0f5b643967d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:89691371-6a64-460e-8459-627c7eb0a822> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4040ebf0-21ae-4d2f-b0d0-c94bd10500b4> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2ef91923-c928-4094-8952-de72b1624344>, <urn:uuid:b3e06292-fe42-411e-81e5-ac4a27849341>.
<urn:uuid:b3e06292-fe42-411e-81e5-ac4a27849341> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2ef91923-c928-4094-8952-de72b1624344> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4549fbe1-ea71-4b56-983d-52ce9f494d9d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c14144f3-1bb7-4cb1-aaac-a9fd7cb202dd>, <urn:uuid:2d2ebd43-f310-496a-ada9-5fc7b0e9651e>.
<urn:uuid:2d2ebd43-f310-496a-ada9-5fc7b0e9651e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c14144f3-1bb7-4cb1-aaac-a9fd7cb202dd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f2c2a215-4758-4b95-8a72-d780c955340a> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:776c51ed-bcea-48ac-858c-da60e55aa4e0>, <urn:uuid:fa5f1424-9d9a-43d4-8d0c-0be2be49d3c6>.
<urn:uuid:fa5f1424-9d9a-43d4-8d0c-0be2be49d3c6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:776c51ed-bcea-48ac-858c-da60e55aa4e0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6bf766d8-9bc9-4d02-8e4f-7d27c52ae51c> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:08b3d898-c618-41ca-b513-c2be9d02849c>, <urn:uuid:78e3c6b4-9733-426c-8757-6ea237ce105a>.
<urn:uuid:78e3c6b4-9733-426c-8757-6ea237ce105a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:08b3d898-c618-41ca-b513-c2be9d02849c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e4bbfc36-01eb-438d-82d5-764eaf6f4b38> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:487e135e-b283-4173-9c03-c734da041b90>, <urn:uuid:847f28b3-0529-4cf7-8c4e-ec4128c1d01d>.
<urn:uuid:847f28b3-0529-4cf7-8c4e-ec4128c1d01d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:487e135e-b283-4173-9c03-c734da041b90> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ae5d7d97-5e92-461a-a3ca-5653a7e87292> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5cd34117-bffc-4774-a7a7-4e037840aaf2>, <urn:uuid:0353e399-556d-45d2-b3ec-9568ded4b6a3>.
<urn:uuid:0353e399-556d-45d2-b3ec-9568ded4b6a3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5cd34117-bffc-4774-a7a7-4e037840aaf2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:027b62aa-1ecc-475b-a5d0-fe358d8bd175> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:43fabba8-3c95-442e-83d9-f713a81f9400>, <urn:uuid:a763d179-99e0-416c-8533-b8e762ca5e49>.
<urn:uuid:a763d179-99e0-416c-8533-b8e762ca5e49> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:43fabba8-3c95-442e-83d9-f713a81f9400> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:66138113-683f-420e-ad70-d3d17d234773> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:47d65afd-514d-489a-b7ef-17b545de66cf>, <urn:uuid:12481c7b-2b7d-4215-87bf-864c9d45bfff>.
<urn:uuid:12481c7b-2b7d-4215-87bf-864c9d45bfff> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:47d65afd-514d-489a-b7ef-17b545de66cf> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5f6bab6e-bf48-44c3-84fe-ccbc610d7d5e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:10e7d6bc-a15d-4f5b-ad72-43815be8a42f>, <urn:uuid:4cf20076-3dc5-4d99-ab65-209cb7daf4b8>.
<urn:uuid:4cf20076-3dc5-4d99-ab65-209cb7daf4b8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:10e7d6bc-a15d-4f5b-ad72-43815be8a42f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cc4e7745-6e96-4d7a-b1af-38499fdd6cad> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:56584822-db86-4a89-8d1e-4f7f58c5e163>, <urn:uuid:4938531d-6a55-481b-9925-d0870c9386df>.
<urn:uuid:4938531d-6a55-481b-9925-d0870c9386df> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:56584822-db86-4a89-8d1e-4f7f58c5e163> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d5f55ddb-27ae-479e-a376-b8fe2e38e1ed> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d5d40525-4638-4c8a-804d-16e0e175feb8>, <urn:uuid:80d8392e-509f-447d-815a-a7f469b14e8a>.
<urn:uuid:80d8392e-509f-447d-815a-a7f469b14e8a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d5d40525-4638-4c8a-804d-16e0e175feb8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:42e65efc-e205-490a-ba22-f7e5daa11eb2> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:78191c34-5bcf-48ac-8ae2-93c726051f91>, <urn:uuid:80aa9457-257e-47f7-918b-c7bc5d1ab3f7>.
<urn:uuid:80aa9457-257e-47f7-918b-c7bc5d1ab3f7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:78191c34-5bcf-48ac-8ae2-93c726051f91> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e60f11c7-561f-4459-9e9e-4e5f037006c0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0596f841-97e1-4aa5-be25-4e7a7695563b>, <urn:uuid:163ffffb-be82-42cb-ac47-cbefe9de6b5a>.
<urn:uuid:163ffffb-be82-42cb-ac47-cbefe9de6b5a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0596f841-97e1-4aa5-be25-4e7a7695563b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4d8d327a-4d3c-4b09-856b-39b67261bec6> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a0268f4b-c1f1-4db8-a5ef-85ac40c3592a>, <urn:uuid:908dc400-efdd-44f2-a4b0-428abf72a88f>.
<urn:uuid:908dc400-efdd-44f2-a4b0-428abf72a88f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a0268f4b-c1f1-4db8-a5ef-85ac40c3592a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3fc45405-5ebb-41b1-a8d6-ab0bbb0d7857> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:dffa26e4-c85f-4dfa-81e0-c52024dffb1e>, <urn:uuid:41d602b1-a246-4b40-9086-40edd44ab0c3>.
<urn:uuid:41d602b1-a246-4b40-9086-40edd44ab0c3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dffa26e4-c85f-4dfa-81e0-c52024dffb1e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:925027e7-3d8f-4b79-9558-e7ec0087c87f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0a8a0e76-128b-4856-8606-3750573717cc>, <urn:uuid:29faea6e-0504-42b0-9751-2a2d87667ced>.
<urn:uuid:29faea6e-0504-42b0-9751-2a2d87667ced> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0a8a0e76-128b-4856-8606-3750573717cc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:63936891-0ef5-48eb-9d64-9bf5b2778502> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:9c9a514a-5247-44d8-b5d4-98b4b44a2e19>, <urn:uuid:b07ea640-d092-4051-83d6-4c60f49360d9>.
<urn:uuid:b07ea640-d092-4051-83d6-4c60f49360d9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9c9a514a-5247-44d8-b5d4-98b4b44a2e19> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9f77c162-b09e-4b3d-9c70-52e4f7fae8f4> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2869ac16-3e1a-49cd-aa7b-a72da02f3c79>, <urn:uuid:343f01a8-53a6-41b6-91d3-e2d717a52f7e>.
<urn:uuid:343f01a8-53a6-41b6-91d3-e2d717a52f7e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2869ac16-3e1a-49cd-aa7b-a72da02f3c79> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fd5037f5-3660-4382-b5c5-c29af7d01e58> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ed665aa5-cd4e-46c7-9dbe-1e3cf1ec9452>, <urn:uuid:74a4eb82-43a2-4c77-bc68-78e9814f060b>.
<urn:uuid:74a4eb82-43a2-4c77-bc68-78e9814f060b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ed665aa5-cd4e-46c7-9dbe-1e3cf1ec9452> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:668c4199-db43-4336-9edf-82eb3a87f336> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:b72560f8-09f8-4331-a676-ab7bc3ea27ab>, <urn:uuid:f65192ac-9654-457f-9657-dd875c4f3ac4>.
<urn:uuid:f65192ac-9654-457f-9657-dd875c4f3ac4> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b72560f8-09f8-4331-a676-ab7bc3ea27ab> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:99b59b86-e907-4eb3-b6e2-2eb826d8f887> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:6073e4d7-d66d-4bb0-9ac9-66f8d27781f3>, <urn:uuid:791a6428-bd9b-45a7-a4b3-77b5d1da2c09>.
<urn:uuid:791a6428-bd9b-45a7-a4b3-77b5d1da2c09> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-01-31T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6073e4d7-d66d-4bb0-9ac9-66f8d27781f3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-01-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b074c5d1-ec4b-49b6-8404-3454c20c5fee> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:4640a2df-1852-40a1-a6ca-356cbc2c10b0>, <urn:uuid:94ac7531-23c3-42aa-a0d1-7fdb790b3e94>.
<urn:uuid:94ac7531-23c3-42aa-a0d1-7fdb790b3e94> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4640a2df-1852-40a1-a6ca-356cbc2c10b0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:93760dc7-3009-45c0-ac6a-093b6ed9ae31> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:72b33877-3fdb-450c-911b-1c0d233d53d9>, <urn:uuid:b24af580-eed9-44e4-bd2b-a4577169d1a5>.
<urn:uuid:b24af580-eed9-44e4-bd2b-a4577169d1a5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:72b33877-3fdb-450c-911b-1c0d233d53d9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:93780389-290c-4574-8814-7da01c1de167> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:dc1a7d14-3a99-4651-bcf0-5cf40b498b26>, <urn:uuid:b4843a83-39df-4cf0-892f-f04a6da1f8e8>.
<urn:uuid:b4843a83-39df-4cf0-892f-f04a6da1f8e8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dc1a7d14-3a99-4651-bcf0-5cf40b498b26> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:502793e8-9aa3-4c1b-8566-f3310fcf84cd> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2c77d2fb-37ec-4338-94ec-cc1dc84ab103>, <urn:uuid:79360e32-f92b-4ab7-9655-1cb750852c9a>.
<urn:uuid:79360e32-f92b-4ab7-9655-1cb750852c9a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2c77d2fb-37ec-4338-94ec-cc1dc84ab103> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9ecc0a82-8017-4b1f-87e2-10f326f7fe03> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:cbed4529-9c7e-4bd7-af19-1274fad6968f>, <urn:uuid:8ae88552-d4ac-4cde-8f82-3dd1718b398a>.
<urn:uuid:8ae88552-d4ac-4cde-8f82-3dd1718b398a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cbed4529-9c7e-4bd7-af19-1274fad6968f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:86330f57-8d3b-4305-8b28-7757bf0913a7> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:eb8c09ec-ed48-4014-88cc-d29a2f148bbf>, <urn:uuid:a1fa3b90-08b4-4c48-8217-ba1b8f3bd261>.
<urn:uuid:a1fa3b90-08b4-4c48-8217-ba1b8f3bd261> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eb8c09ec-ed48-4014-88cc-d29a2f148bbf> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:aa961acb-59e1-404b-abf8-db7b2da9ffd9> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:e58ebe3e-93de-47a4-929a-b84070c50329>, <urn:uuid:adf26737-3ead-4382-b9fe-6d30792a792e>.
<urn:uuid:adf26737-3ead-4382-b9fe-6d30792a792e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e58ebe3e-93de-47a4-929a-b84070c50329> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f40cc880-e1ff-4401-8d48-087cf5bb1ba6> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:598a801b-62a9-40ec-bdf0-15e8bb78cd3f>, <urn:uuid:cca97230-a84c-4eb7-b09f-68acab42a773>.
<urn:uuid:cca97230-a84c-4eb7-b09f-68acab42a773> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:598a801b-62a9-40ec-bdf0-15e8bb78cd3f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:59b07fb2-5acc-4f4b-83a7-36569246fde9> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:6dc086d4-fcdc-4f5f-895f-82a69223d526>, <urn:uuid:c7ea6260-d8c6-4219-ab0e-5a5c988b7e08>.
<urn:uuid:c7ea6260-d8c6-4219-ab0e-5a5c988b7e08> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-13T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6dc086d4-fcdc-4f5f-895f-82a69223d526> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4d46f200-3390-4b59-bc09-ed4b50729e50> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:87344fad-e07f-4d6a-9f96-274248f7c49f>, <urn:uuid:f8244460-02f4-4768-8066-39f8edda6653>.
<urn:uuid:f8244460-02f4-4768-8066-39f8edda6653> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-14T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:87344fad-e07f-4d6a-9f96-274248f7c49f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7655c3fd-75e1-4da1-9cfd-2e9cd230ae8f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:41231ddb-58b0-4cb3-997b-b6e54dcf24cb>, <urn:uuid:bfca2595-5a81-4e54-89e1-cc0b2caf602a>.
<urn:uuid:bfca2595-5a81-4e54-89e1-cc0b2caf602a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:41231ddb-58b0-4cb3-997b-b6e54dcf24cb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2abc17af-ec27-4334-81ec-eddba73cba51> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:28dc8bd5-ace0-4ae2-9e8a-b9a787b0fb02>, <urn:uuid:cf11b614-0228-4363-9748-b235b38ae30f>.
<urn:uuid:cf11b614-0228-4363-9748-b235b38ae30f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:28dc8bd5-ace0-4ae2-9e8a-b9a787b0fb02> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:97e7e460-8655-4b64-b3f1-1d89f6e0c4a0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a295e7a2-11d4-443d-b0fc-27b5475692b3>, <urn:uuid:c2ed777e-d6d3-45ef-9449-038241f6eaa1>.
<urn:uuid:c2ed777e-d6d3-45ef-9449-038241f6eaa1> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a295e7a2-11d4-443d-b0fc-27b5475692b3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7e2c2746-5afb-444f-a09f-73af2b79e702> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d2622e26-c235-4154-802f-1cc43cce0e9c>, <urn:uuid:afdd3398-8867-49c8-adb9-8c58591d38da>.
<urn:uuid:afdd3398-8867-49c8-adb9-8c58591d38da> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-20T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d2622e26-c235-4154-802f-1cc43cce0e9c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0eb27dd6-ebfd-41e1-bee1-ccf4f9567a61> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:86aa8499-9037-417f-8715-75222b9ebe30>, <urn:uuid:b2758ead-13a0-41c4-add8-252524e9f8a0>.
<urn:uuid:b2758ead-13a0-41c4-add8-252524e9f8a0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-21T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:86aa8499-9037-417f-8715-75222b9ebe30> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:29df4b6d-1b30-4619-9736-9910241d9c0c> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:cf9bbdcc-8d0f-4c57-9f1d-95c74a559c00>, <urn:uuid:8dcd9741-0979-46ce-80b1-43c0a1dc1fad>.
<urn:uuid:8dcd9741-0979-46ce-80b1-43c0a1dc1fad> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cf9bbdcc-8d0f-4c57-9f1d-95c74a559c00> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e0b803b3-e897-4aad-843d-ef986e32dc64> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:cf647d6f-bea3-4d45-823c-fae5b63dd008>, <urn:uuid:b6de3f00-5094-4979-b409-aa474e26e055>.
<urn:uuid:b6de3f00-5094-4979-b409-aa474e26e055> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cf647d6f-bea3-4d45-823c-fae5b63dd008> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5f91aee4-9ac7-41ed-abdd-c11df12d361b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:036d0c94-4a07-4286-94ac-1116eef0cc52>, <urn:uuid:10bfe567-4ead-4ce3-89e2-42df9f22aea9>.
<urn:uuid:10bfe567-4ead-4ce3-89e2-42df9f22aea9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:036d0c94-4a07-4286-94ac-1116eef0cc52> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6dc5739c-5b2f-4d80-8336-3af8987cf193> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:fdf6c6bd-e646-4c17-b9e7-062d2dce954b>, <urn:uuid:682412e3-ed3a-4939-a34f-32dd660424a6>.
<urn:uuid:682412e3-ed3a-4939-a34f-32dd660424a6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-27T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fdf6c6bd-e646-4c17-b9e7-062d2dce954b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2aa878e6-76d0-4bb8-96ea-3be7d735a3ac> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:86d4a7d1-f293-4a39-b34e-eb3baf9a0056>, <urn:uuid:8a89dd13-3c04-408c-939c-b11ec3652ec8>.
<urn:uuid:8a89dd13-3c04-408c-939c-b11ec3652ec8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-28T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:86d4a7d1-f293-4a39-b34e-eb3baf9a0056> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4f2a4f2e-67a9-4b56-9e5d-3a7ec58ad9a5> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:12ff5e1a-5369-4a48-8a68-d2e1b5d7dc13>, <urn:uuid:c78b788a-0eb7-4a4a-9e63-3127ec49505c>.
<urn:uuid:c78b788a-0eb7-4a4a-9e63-3127ec49505c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-02-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:12ff5e1a-5369-4a48-8a68-d2e1b5d7dc13> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-02-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2206cd56-4786-445c-aa3a-08e840d6e640> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c59aa3f0-93ef-46d4-8df3-6c6c61277d0d>, <urn:uuid:c98ed27d-d93f-4ec8-9310-7b5a71388340>.
<urn:uuid:c98ed27d-d93f-4ec8-9310-7b5a71388340> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c59aa3f0-93ef-46d4-8df3-6c6c61277d0d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ec78c7d3-66b7-4d54-9aac-2b198c1f02dc> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:232613ed-19cd-4dd7-9c72-3e21620f4add>, <urn:uuid:a3669cbc-2aba-4bd6-91b4-9449ee57e85a>.
<urn:uuid:a3669cbc-2aba-4bd6-91b4-9449ee57e85a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:232613ed-19cd-4dd7-9c72-3e21620f4add> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b8bf92b6-748c-4178-b192-5b2b3c6db4a0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0d212516-df92-4b4f-bed6-7d89ef1845d7>, <urn:uuid:2ef117f2-58c5-4a16-ba19-f929db02c97b>.
<urn:uuid:2ef117f2-58c5-4a16-ba19-f929db02c97b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0d212516-df92-4b4f-bed6-7d89ef1845d7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:246ce49c-f71e-4801-b69a-d964d0bd115d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5c73a362-7f09-4787-9bca-2fc277c2f049>, <urn:uuid:ae293447-5e2a-4d93-9ca2-10953a0d9768>.
<urn:uuid:ae293447-5e2a-4d93-9ca2-10953a0d9768> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5c73a362-7f09-4787-9bca-2fc277c2f049> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:29120bf0-065f-4622-b514-2b911a431c20> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f8779597-3a2c-4f26-9a2f-2e5bffac343f>, <urn:uuid:7c223c6a-8190-4c5a-8877-87edeac8606d>.
<urn:uuid:7c223c6a-8190-4c5a-8877-87edeac8606d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f8779597-3a2c-4f26-9a2f-2e5bffac343f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4a59f4f2-aff3-4517-a411-d2e510bf8c96> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f663d7eb-0c52-4feb-9482-a504a47e1c6e>, <urn:uuid:62be9fc6-5ca1-403d-8a82-38ff3d0e74eb>.
<urn:uuid:62be9fc6-5ca1-403d-8a82-38ff3d0e74eb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f663d7eb-0c52-4feb-9482-a504a47e1c6e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b2f555d9-9210-44c1-81fe-edc8991ffd56> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d5d9525f-2594-4d84-ae2f-60e8b1c79dd7>, <urn:uuid:b4032ba4-2cdb-41e7-bdd2-bfcb10f35578>.
<urn:uuid:b4032ba4-2cdb-41e7-bdd2-bfcb10f35578> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d5d9525f-2594-4d84-ae2f-60e8b1c79dd7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f0f5ad97-b87d-4279-a867-866578fe19f0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:caeaf79a-a8b1-4974-884c-d026510540ef>, <urn:uuid:a7700171-4036-4fcf-a5f2-7cb3cc31de25>.
<urn:uuid:a7700171-4036-4fcf-a5f2-7cb3cc31de25> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:caeaf79a-a8b1-4974-884c-d026510540ef> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1150ffd0-17c2-4ae5-bfd5-cd36a0363a1b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:11ec29fd-5465-4a7f-85b7-591370cd9411>, <urn:uuid:acba8216-ebfc-48c5-ac0b-18907f47e2fd>.
<urn:uuid:acba8216-ebfc-48c5-ac0b-18907f47e2fd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-13T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:11ec29fd-5465-4a7f-85b7-591370cd9411> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8b4fa82c-c1ef-4115-b314-a1e40eaed545> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:e0a01914-78fa-4af1-936d-9969b3248333>, <urn:uuid:12bc0dcb-a27b-4d38-9942-35dd66a91a57>.
<urn:uuid:12bc0dcb-a27b-4d38-9942-35dd66a91a57> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-14T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e0a01914-78fa-4af1-936d-9969b3248333> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2c95e2cf-979a-4f36-8070-44ab64ef4a52> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:90da3e68-6622-409f-8dd4-d91c37a3dc14>, <urn:uuid:c05488fe-3204-42ba-b223-ec91f4bfacd3>.
<urn:uuid:c05488fe-3204-42ba-b223-ec91f4bfacd3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:90da3e68-6622-409f-8dd4-d91c37a3dc14> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:091b7cd1-3c5d-4872-ac1f-ea4013ecfe3a> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:7cc22b5b-9903-40b9-a70e-a30db7bc9a49>, <urn:uuid:3e80b2c2-f0d6-40b8-a27d-f54e77746750>.
<urn:uuid:3e80b2c2-f0d6-40b8-a27d-f54e77746750> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7cc22b5b-9903-40b9-a70e-a30db7bc9a49> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eb10643c-9448-493e-a898-5c30b281d81a> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:eec64efb-fce2-4fa3-9e33-f886bd33a5dc>, <urn:uuid:5dfffd4f-1ae0-4ff1-adf8-aec9529b612d>.
<urn:uuid:5dfffd4f-1ae0-4ff1-adf8-aec9529b612d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eec64efb-fce2-4fa3-9e33-f886bd33a5dc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:34f70158-fe31-4ca1-85d0-c4957382a876> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a175ab20-2cca-4cdb-aee8-f8783f2db5cc>, <urn:uuid:047c53f9-aa36-432f-ad82-84a550c20329>.
<urn:uuid:047c53f9-aa36-432f-ad82-84a550c20329> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-20T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a175ab20-2cca-4cdb-aee8-f8783f2db5cc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:08a6a691-f695-40f9-8ef0-cd929a71cd80> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:357cf85a-d947-4537-9c93-3bd3039ff9d3>, <urn:uuid:a2e7cadb-f3ea-4457-823f-30b2b3e7c6bb>.
<urn:uuid:a2e7cadb-f3ea-4457-823f-30b2b3e7c6bb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-21T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:357cf85a-d947-4537-9c93-3bd3039ff9d3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:605cff08-6f85-47c4-a3fc-e4ccfdf4272b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c96176c5-f3d2-4fb7-9083-41460a033ad6>, <urn:uuid:9f46330c-a19f-4d32-a821-d4d36b33e862>.
<urn:uuid:9f46330c-a19f-4d32-a821-d4d36b33e862> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c96176c5-f3d2-4fb7-9083-41460a033ad6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d9ee2558-651c-478e-8b36-b554c988bee6> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:52376ec6-1dcf-41a6-814a-625e38c4abd6>, <urn:uuid:e5acc7a3-c847-4191-a67f-4deeddeee9e2>.
<urn:uuid:e5acc7a3-c847-4191-a67f-4deeddeee9e2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:52376ec6-1dcf-41a6-814a-625e38c4abd6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0cbbaa09-776e-4273-8e5d-8d7cfa08b215> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d6e369b2-946c-448c-86a2-3b371cf694c7>, <urn:uuid:34718c82-a7ad-4aaf-90b6-3c10bc75fc72>.
<urn:uuid:34718c82-a7ad-4aaf-90b6-3c10bc75fc72> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d6e369b2-946c-448c-86a2-3b371cf694c7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7fa67880-ab1d-437f-9cf0-5983985cde80> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:33cfa5e3-b633-481a-92ba-f113cd957a57>, <urn:uuid:5eef2704-2230-4e7d-a463-eba0383ad4d3>.
<urn:uuid:5eef2704-2230-4e7d-a463-eba0383ad4d3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-27T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:33cfa5e3-b633-481a-92ba-f113cd957a57> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d56b1ab6-1061-4698-a7b1-6d1fb928b712> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ad7a1e60-a6b7-4903-a1f1-863b7bc4399e>, <urn:uuid:a3667f7c-30a5-4535-8d8f-2e390aa2d612>.
<urn:uuid:a3667f7c-30a5-4535-8d8f-2e390aa2d612> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-28T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ad7a1e60-a6b7-4903-a1f1-863b7bc4399e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:351f0fe6-a2c8-4a67-9220-979055330e25> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:54f544df-39ae-4b88-8e47-37c28e780efd>, <urn:uuid:ede4d7ba-367f-4e5b-9b77-7aaeff89e714>.
<urn:uuid:ede4d7ba-367f-4e5b-9b77-7aaeff89e714> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-03-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:54f544df-39ae-4b88-8e47-37c28e780efd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-03-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2df3010b-c218-4522-aa01-95b27101dfbb> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:1d594078-60e7-403c-b000-2ea020fbbed0>, <urn:uuid:34ae08cd-7c1e-4860-a4d0-fbfa848b39af>.
<urn:uuid:34ae08cd-7c1e-4860-a4d0-fbfa848b39af> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1d594078-60e7-403c-b000-2ea020fbbed0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:61325691-ebaf-4599-a045-c6fff992505f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c9970dce-15f9-48b0-8f56-d21aae32d395>, <urn:uuid:3bcd9556-b8d4-4855-8539-8dacd89ec8a4>.
<urn:uuid:3bcd9556-b8d4-4855-8539-8dacd89ec8a4> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c9970dce-15f9-48b0-8f56-d21aae32d395> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d0c698e7-911f-4f4b-bc87-286686632871> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:6a26e7eb-02a9-4ab5-a42a-3bb0798d7840>, <urn:uuid:2be5be5e-f823-4637-b957-8a9ed49392f6>.
<urn:uuid:2be5be5e-f823-4637-b957-8a9ed49392f6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6a26e7eb-02a9-4ab5-a42a-3bb0798d7840> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:053e3c7c-6888-43c9-a9f0-4cb24ca6d09d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2c8bb9d7-feb8-443a-9a1e-c8c9ced231aa>, <urn:uuid:9ca4744b-a2a1-4cf5-969e-f70c9025e6a3>.
<urn:uuid:9ca4744b-a2a1-4cf5-969e-f70c9025e6a3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2c8bb9d7-feb8-443a-9a1e-c8c9ced231aa> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:08c7c40a-15a1-4348-a285-c14e1936f7cc> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ca4e3622-8fdf-4b04-879a-286bd3a5e7e5>, <urn:uuid:158f426f-fe7d-4105-ae02-fab3f6821a23>.
<urn:uuid:158f426f-fe7d-4105-ae02-fab3f6821a23> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ca4e3622-8fdf-4b04-879a-286bd3a5e7e5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8ea0d34a-c216-4aca-a3c9-0142b96bae5e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:4bef72cd-1ada-40fc-97e1-c079b91e6d19>, <urn:uuid:fcad40a5-d827-4a01-945b-22f4a3a3d52a>.
<urn:uuid:fcad40a5-d827-4a01-945b-22f4a3a3d52a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4bef72cd-1ada-40fc-97e1-c079b91e6d19> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7a3b0622-c6ce-4428-a617-2ddee777f29e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ef047f01-6e88-4e65-bc31-3ba9975f20eb>, <urn:uuid:6afcc055-a528-499a-9ea6-659e94940f69>.
<urn:uuid:6afcc055-a528-499a-9ea6-659e94940f69> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ef047f01-6e88-4e65-bc31-3ba9975f20eb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e26c2df3-ff61-4c45-aea6-39c13f074c5d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0d49ed46-690e-4030-864a-eb827ee99d3e>, <urn:uuid:f44e8ebe-7464-434d-b0f9-477e83ef959a>.
<urn:uuid:f44e8ebe-7464-434d-b0f9-477e83ef959a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0d49ed46-690e-4030-864a-eb827ee99d3e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:038e3c19-fd3f-4c7d-baaf-66cbf1395a80> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0f3605d0-954f-4130-897b-b7f1bd20cb6c>, <urn:uuid:dfcc026a-e0e2-4f01-b5e9-f5bc64097841>.
<urn:uuid:dfcc026a-e0e2-4f01-b5e9-f5bc64097841> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0f3605d0-954f-4130-897b-b7f1bd20cb6c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6cd96404-8106-43fb-a03c-c9afe481afef> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c7117e0f-74e6-4d62-a7b0-02c83ffedbe1>, <urn:uuid:d1b4e1e8-3033-4894-b6af-3b2387489e43>.
<urn:uuid:d1b4e1e8-3033-4894-b6af-3b2387489e43> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c7117e0f-74e6-4d62-a7b0-02c83ffedbe1> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f6493d80-8cc2-4d9f-a692-f5bf273411ee> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3d4efecd-6caa-4df0-b748-f49eeb4b42c0>, <urn:uuid:0f055da1-61cc-47b8-8c41-fa26a37d690e>.
<urn:uuid:0f055da1-61cc-47b8-8c41-fa26a37d690e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3d4efecd-6caa-4df0-b748-f49eeb4b42c0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e595520b-dd39-4c39-983f-bc428c8ab6ab> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0f1dc7cb-c623-43c5-9275-41f34cdf1a46>, <urn:uuid:f2a3b2c8-9347-40df-86fa-ef9449b5fdfd>.
<urn:uuid:f2a3b2c8-9347-40df-86fa-ef9449b5fdfd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0f1dc7cb-c623-43c5-9275-41f34cdf1a46> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b1320422-f589-44e6-9a7f-d4e740cf680f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:40072600-1bb3-4475-bdc0-bc77e7643546>, <urn:uuid:0e29518c-5000-4805-8919-f02486adaed7>.
<urn:uuid:0e29518c-5000-4805-8919-f02486adaed7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:40072600-1bb3-4475-bdc0-bc77e7643546> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:78d86c6f-307d-4c5d-be68-5739bd746223> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:4951e768-690d-41af-bb2b-68df479b52e1>, <urn:uuid:916a531f-2d4c-471a-b8d7-64baa4fda3ca>.
<urn:uuid:916a531f-2d4c-471a-b8d7-64baa4fda3ca> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4951e768-690d-41af-bb2b-68df479b52e1> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3012fdaf-534e-49af-9708-9a7a48c66e26> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:96d4825b-18b5-4e12-b0f2-23f9483b8c17>, <urn:uuid:739ac050-ddff-4333-8af4-4f4a29b45a6e>.
<urn:uuid:739ac050-ddff-4333-8af4-4f4a29b45a6e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:96d4825b-18b5-4e12-b0f2-23f9483b8c17> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4654b01f-328d-4a6f-bed7-6aa0b549661b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a40605b6-6b23-4b4e-a280-2edf3f384831>, <urn:uuid:f251b506-69d8-4d92-bc56-32be35549828>.
<urn:uuid:f251b506-69d8-4d92-bc56-32be35549828> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a40605b6-6b23-4b4e-a280-2edf3f384831> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7e6108e3-fcc2-4d3b-b6e1-ad0fcbe738e1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2cdb2a9b-42be-4c8f-b100-cad708025246>, <urn:uuid:7242b5bf-7879-44c1-9fcb-346ca6933443>.
<urn:uuid:7242b5bf-7879-44c1-9fcb-346ca6933443> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2cdb2a9b-42be-4c8f-b100-cad708025246> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:835d8bc5-afbc-4329-9c8e-8b6dafd593b5> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3c0807b9-65fb-43df-a211-2b2d2d6f4e37>, <urn:uuid:7403d382-c5b2-427c-b812-929ecae8debc>.
<urn:uuid:7403d382-c5b2-427c-b812-929ecae8debc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3c0807b9-65fb-43df-a211-2b2d2d6f4e37> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:46fc7cfa-126f-4d3e-99ba-4d8d0f42e6d7> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:7dab70b7-4cae-41f2-8759-fa6f0192bdb1>, <urn:uuid:fe00dcab-80f6-4064-b26c-dd220a6cb40c>.
<urn:uuid:fe00dcab-80f6-4064-b26c-dd220a6cb40c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7dab70b7-4cae-41f2-8759-fa6f0192bdb1> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fc2a256c-19b3-47e3-9ecc-b0a6ac3e1aae> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:70612abb-4018-4dc9-8d9d-99c1c5ace31a>, <urn:uuid:952d2bfd-6b2f-4a3a-b682-f6b3c68a6380>.
<urn:uuid:952d2bfd-6b2f-4a3a-b682-f6b3c68a6380> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:70612abb-4018-4dc9-8d9d-99c1c5ace31a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9d1c2e80-4ff1-456c-a176-efd8a2ab94e5> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3de86d07-80ca-48fb-901f-095401660a69>, <urn:uuid:2502afa2-fb5a-427c-bdf7-506f0a203d02>.
<urn:uuid:2502afa2-fb5a-427c-bdf7-506f0a203d02> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3de86d07-80ca-48fb-901f-095401660a69> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:75f2c124-8774-4109-a764-98a1cc489c0d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:b30da122-a3c2-427a-98d1-54c7a6d3e7e3>, <urn:uuid:735aa44d-88b1-4bff-9e76-ef0d12ad3bb2>.
<urn:uuid:735aa44d-88b1-4bff-9e76-ef0d12ad3bb2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-04-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b30da122-a3c2-427a-98d1-54c7a6d3e7e3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-04-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:55f0f646-9797-4aa9-858f-51ca41f67aba> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2aa3199a-9027-45d6-9a1f-6f80da4aebc7>, <urn:uuid:9d8a95ba-25d3-44ee-8d80-fa4273e8ae08>.
<urn:uuid:9d8a95ba-25d3-44ee-8d80-fa4273e8ae08> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2aa3199a-9027-45d6-9a1f-6f80da4aebc7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:50d61890-18a5-492a-8b37-1eddf79c7f6f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:49175f1f-72e5-4cb3-9188-2d3d60125ca7>, <urn:uuid:1378ab3c-6c26-450c-b79a-2acb4379a6e3>.
<urn:uuid:1378ab3c-6c26-450c-b79a-2acb4379a6e3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:49175f1f-72e5-4cb3-9188-2d3d60125ca7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9a3c57e4-cfb8-4c6e-a476-d764a2600bb7> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:fc6a79f4-3b41-4be8-897f-9b6b950dfeb9>, <urn:uuid:0a178d9b-e27e-432f-8483-cd9834947d97>.
<urn:uuid:0a178d9b-e27e-432f-8483-cd9834947d97> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fc6a79f4-3b41-4be8-897f-9b6b950dfeb9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a684702d-9579-4edd-9766-0b7ce904b8f0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:8f7fbde8-0d12-4532-b51a-abfeb05f09dc>, <urn:uuid:a3f7d124-0c43-4322-90ca-37501a015c05>.
<urn:uuid:a3f7d124-0c43-4322-90ca-37501a015c05> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8f7fbde8-0d12-4532-b51a-abfeb05f09dc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cd32f3a4-24ee-4820-a5e4-da3731568953> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:9a22c068-6c47-475e-910f-3e4a03d71663>, <urn:uuid:bfe93937-9467-4148-b6a7-04660b15e151>.
<urn:uuid:bfe93937-9467-4148-b6a7-04660b15e151> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9a22c068-6c47-475e-910f-3e4a03d71663> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7d67465e-ed4f-4caa-8b85-ddc35d754d0b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:846ff921-eac4-4e8d-8d9d-0659c8259c5c>, <urn:uuid:6cf4fcff-d602-47b1-8b80-801f47a9f086>.
<urn:uuid:6cf4fcff-d602-47b1-8b80-801f47a9f086> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:846ff921-eac4-4e8d-8d9d-0659c8259c5c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c2e4c4d2-faa2-4cd8-b6d1-1e5e49fb36fb> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:dce773b2-0cee-47aa-9132-bc05eef58975>, <urn:uuid:0039e402-294e-4ac0-88b0-5a5879749e05>.
<urn:uuid:0039e402-294e-4ac0-88b0-5a5879749e05> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dce773b2-0cee-47aa-9132-bc05eef58975> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cc5dd610-24a4-42c5-94aa-010dffc0a302> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a02c629c-9053-434c-80e7-686aff9fcc4c>, <urn:uuid:bc48b9ac-22cf-4606-a607-37f108cfae63>.
<urn:uuid:bc48b9ac-22cf-4606-a607-37f108cfae63> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a02c629c-9053-434c-80e7-686aff9fcc4c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:188b83b5-ab83-4421-8238-3c04815b5f14> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:edc46467-d0c7-45e5-83d3-71a6fdb03b4f>, <urn:uuid:a8e3a909-df18-488e-826d-56f15ad379bd>.
<urn:uuid:a8e3a909-df18-488e-826d-56f15ad379bd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-13T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:edc46467-d0c7-45e5-83d3-71a6fdb03b4f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fcb349da-54b9-4d93-b2f7-b8f9d0ec2d10> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d2d8d14d-d84d-4d0a-9833-d8bbe88c1e78>, <urn:uuid:30261223-0ee7-469b-a383-0c1975a5176d>.
<urn:uuid:30261223-0ee7-469b-a383-0c1975a5176d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-14T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d2d8d14d-d84d-4d0a-9833-d8bbe88c1e78> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2c4e3415-4958-46a7-b439-6a89d8d20f25> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c889c26c-bae6-4b5d-8c14-c419179bbd88>, <urn:uuid:7bfcd441-9935-4842-a675-92b3dcfc04ab>.
<urn:uuid:7bfcd441-9935-4842-a675-92b3dcfc04ab> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c889c26c-bae6-4b5d-8c14-c419179bbd88> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c7b3cea6-c00e-461a-b5f9-c09a9ab28b32> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:bdd0f1a7-694f-4f17-b2bb-b2206b05303f>, <urn:uuid:19aff331-aa2d-49e1-a3c1-b57cf720ff43>.
<urn:uuid:19aff331-aa2d-49e1-a3c1-b57cf720ff43> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bdd0f1a7-694f-4f17-b2bb-b2206b05303f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:91eb91b7-3979-4cd9-b5aa-724ebf454baf> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:1a649046-7f69-4210-a64c-03a405ad3530>, <urn:uuid:a2ef1882-6281-46f7-bff2-ba9f813edce3>.
<urn:uuid:a2ef1882-6281-46f7-bff2-ba9f813edce3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1a649046-7f69-4210-a64c-03a405ad3530> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c4dd2395-c34e-4035-a94b-dc153fa88c47> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:8497d0bc-0ed5-46fd-93cd-a141cee6041e>, <urn:uuid:dafadfdb-aae0-4daa-9195-f85fae232d92>.
<urn:uuid:dafadfdb-aae0-4daa-9195-f85fae232d92> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-20T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8497d0bc-0ed5-46fd-93cd-a141cee6041e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:024614b2-366f-43cf-918e-84c60bfacbcf> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:79794ee3-20b4-48bf-9d23-8a7dd7e39483>, <urn:uuid:3e6925c3-00a3-4cd1-8ad6-5e5339d885e5>.
<urn:uuid:3e6925c3-00a3-4cd1-8ad6-5e5339d885e5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-21T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:79794ee3-20b4-48bf-9d23-8a7dd7e39483> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b9f96351-34a1-425b-8b10-62bed2ea5f4e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:97dd979b-42b5-4576-8e7e-664137495723>, <urn:uuid:fe99da5f-f784-415c-b45d-ad6c98ba023f>.
<urn:uuid:fe99da5f-f784-415c-b45d-ad6c98ba023f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:97dd979b-42b5-4576-8e7e-664137495723> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:659710f4-8ddb-47ed-a9c9-38cfbf5010f4> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:8198d802-de7a-4cfc-9dea-0bf135a8421e>, <urn:uuid:957f7e2d-9de8-4e28-b36c-7b78823fb2e5>.
<urn:uuid:957f7e2d-9de8-4e28-b36c-7b78823fb2e5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8198d802-de7a-4cfc-9dea-0bf135a8421e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8578de8e-366e-4fd4-abe5-204db416e541> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a24558d0-25af-4a12-9a93-1525bcd9a50d>, <urn:uuid:5b7c0c04-1ea2-4f43-9871-427ca50472fa>.
<urn:uuid:5b7c0c04-1ea2-4f43-9871-427ca50472fa> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a24558d0-25af-4a12-9a93-1525bcd9a50d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:37993806-e7c3-48ab-b31b-db56c93982b8> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:867ff6e8-54fe-4431-8d3f-3b4960fb082b>, <urn:uuid:7eae60dc-da60-4d88-8ea0-aa0556bc7295>.
<urn:uuid:7eae60dc-da60-4d88-8ea0-aa0556bc7295> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-27T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:867ff6e8-54fe-4431-8d3f-3b4960fb082b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f9ea2e45-0726-4b79-856f-0c283a02d999> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0df822f6-f678-4489-bd98-5b4e23d0fe28>, <urn:uuid:3ebe8bdc-387f-41ac-aa10-319976aa9297>.
<urn:uuid:3ebe8bdc-387f-41ac-aa10-319976aa9297> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-28T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0df822f6-f678-4489-bd98-5b4e23d0fe28> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:22e92d31-09da-4648-bc8f-f7445536cc4c> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:654dcd03-9ad5-4991-b258-f0b5103352aa>, <urn:uuid:d5d9d20f-8e00-4778-a850-9fad9ff0e916>.
<urn:uuid:d5d9d20f-8e00-4778-a850-9fad9ff0e916> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:654dcd03-9ad5-4991-b258-f0b5103352aa> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ce990d0d-2cf8-4481-94e1-db9b2d863b11> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a5007b67-532b-4b42-8be8-2004cd4e1217>, <urn:uuid:34648d20-a5b8-4ee7-9586-40efafb43f50>.
<urn:uuid:34648d20-a5b8-4ee7-9586-40efafb43f50> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a5007b67-532b-4b42-8be8-2004cd4e1217> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bb565bc1-5b00-4df3-8ca6-9ce8e9884fb7> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:287a4904-fff5-4607-97fb-05c84cb6dd53>, <urn:uuid:e9842aa9-97da-4546-9c0f-211219f59b52>.
<urn:uuid:e9842aa9-97da-4546-9c0f-211219f59b52> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-05-31T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:287a4904-fff5-4607-97fb-05c84cb6dd53> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-05-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c8b4a8bf-e9a5-43fe-863c-99a45736a741> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:66442849-fbf7-4146-a750-e6b00eab015b>, <urn:uuid:84657d13-9735-483c-b726-cb4e5e7b46e4>.
<urn:uuid:84657d13-9735-483c-b726-cb4e5e7b46e4> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:66442849-fbf7-4146-a750-e6b00eab015b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0ffa4d37-e577-45f8-b2f8-a52a1310e39f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c9b80536-64b2-463a-811c-283225833fa9>, <urn:uuid:2d6e4afc-3705-41f6-81cf-d24666119347>.
<urn:uuid:2d6e4afc-3705-41f6-81cf-d24666119347> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c9b80536-64b2-463a-811c-283225833fa9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:70055daa-2732-4649-b94d-dd6099404c1b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:83fa9fb6-d029-4088-be7e-4d1cd4cd396e>, <urn:uuid:f41a681e-cbf6-47d4-a025-99be9a2443d6>.
<urn:uuid:f41a681e-cbf6-47d4-a025-99be9a2443d6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:83fa9fb6-d029-4088-be7e-4d1cd4cd396e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:de591672-9b17-4917-862f-03e7bcbb43a4> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:6b572701-1bf4-474e-b164-0dbd291fc2b4>, <urn:uuid:ebb3ba93-d189-44e3-ba89-02c69ba14f40>.
<urn:uuid:ebb3ba93-d189-44e3-ba89-02c69ba14f40> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6b572701-1bf4-474e-b164-0dbd291fc2b4> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:74b7368c-77f1-48ef-9849-2d2cbf5fa012> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a1cb611c-b9ed-4154-b5e6-8bc789809230>, <urn:uuid:d59f2c20-4538-45ef-a943-c55019d0ded1>.
<urn:uuid:d59f2c20-4538-45ef-a943-c55019d0ded1> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a1cb611c-b9ed-4154-b5e6-8bc789809230> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cf644502-f44c-4306-9495-fca5c6310563> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:211d29e0-436b-4c8a-a7fc-09960ff2bf6f>, <urn:uuid:79305e6b-baeb-44e8-b485-829bc6090091>.
<urn:uuid:79305e6b-baeb-44e8-b485-829bc6090091> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:211d29e0-436b-4c8a-a7fc-09960ff2bf6f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1f2dcfd1-95a0-4d72-9be7-731bca82dd65> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c9f03a8a-4e8f-42c4-8bae-3f1235041f0b>, <urn:uuid:7074d13f-5640-4de5-9a87-e6578747da10>.
<urn:uuid:7074d13f-5640-4de5-9a87-e6578747da10> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c9f03a8a-4e8f-42c4-8bae-3f1235041f0b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c7593329-2fd1-4321-944a-c22938751a32> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3356fcd2-aa25-453d-8614-aeade91b1808>, <urn:uuid:43831461-fe4f-4abf-a8e3-e74573f9949f>.
<urn:uuid:43831461-fe4f-4abf-a8e3-e74573f9949f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3356fcd2-aa25-453d-8614-aeade91b1808> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e7dfca32-6777-4766-99be-5bd5a84f96f1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ac584ec9-5fcd-492a-9678-b994b3b98bfe>, <urn:uuid:8e18aea4-4892-4e4c-a460-9db6fe062888>.
<urn:uuid:8e18aea4-4892-4e4c-a460-9db6fe062888> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-13T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ac584ec9-5fcd-492a-9678-b994b3b98bfe> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d0c5b490-d975-479f-9eb8-65c24df82b7d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:34c89188-bda0-4fe6-a77e-28190079cb2f>, <urn:uuid:110c798d-8331-4424-a348-09e84408835d>.
<urn:uuid:110c798d-8331-4424-a348-09e84408835d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-14T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:34c89188-bda0-4fe6-a77e-28190079cb2f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:793cd305-1103-40ea-9e31-a10ab143d8c1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:4121c33b-3a09-4cdc-81cb-b54487f3cc50>, <urn:uuid:5bd2c802-97d3-4cb7-8e4e-85c713b64330>.
<urn:uuid:5bd2c802-97d3-4cb7-8e4e-85c713b64330> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4121c33b-3a09-4cdc-81cb-b54487f3cc50> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5cdf20be-8fad-4c68-9240-ad7c30283180> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:afb27e52-84d0-445a-a6f6-714f67df7a6f>, <urn:uuid:1012dbfe-60a2-4866-9778-f368a85a5726>.
<urn:uuid:1012dbfe-60a2-4866-9778-f368a85a5726> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:afb27e52-84d0-445a-a6f6-714f67df7a6f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:74dc97f4-1225-4650-bd8a-3f7068433378> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:e3ed954b-9703-4492-a6f8-72fd2c25c48c>, <urn:uuid:7105b292-edb9-43b8-90bd-a4e8eb8ac95a>.
<urn:uuid:7105b292-edb9-43b8-90bd-a4e8eb8ac95a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e3ed954b-9703-4492-a6f8-72fd2c25c48c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0ea2f621-6e96-4f3b-94b9-e08e6d535154> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ec23ba17-d8e5-41c6-a6af-0593a18f0f24>, <urn:uuid:5f724fe1-bc81-4b7c-b1df-1e9b04e5a6f5>.
<urn:uuid:5f724fe1-bc81-4b7c-b1df-1e9b04e5a6f5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-20T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ec23ba17-d8e5-41c6-a6af-0593a18f0f24> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3d63f1c2-83c0-4baa-affe-cb056970291b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:27f1e504-7d9e-44a6-b11a-ebf5b5fe1e2d>, <urn:uuid:46dac938-22a8-4948-8e5f-32f9b3bb6794>.
<urn:uuid:46dac938-22a8-4948-8e5f-32f9b3bb6794> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-21T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:27f1e504-7d9e-44a6-b11a-ebf5b5fe1e2d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d611d6ce-52a0-4ea0-89b9-96bef60b5cd8> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f2827c25-a171-4ec6-ab2e-3388e6b76b69>, <urn:uuid:e3188a51-750a-4063-abcf-e2ccc80179f5>.
<urn:uuid:e3188a51-750a-4063-abcf-e2ccc80179f5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f2827c25-a171-4ec6-ab2e-3388e6b76b69> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a7eb3b30-484d-4089-84b5-2d32e9b304de> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0a13dcd6-4018-4787-adfd-c8259823c058>, <urn:uuid:905e628f-fa47-4b72-9f76-9cbe171a4da9>.
<urn:uuid:905e628f-fa47-4b72-9f76-9cbe171a4da9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0a13dcd6-4018-4787-adfd-c8259823c058> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eb39968c-ad7f-4cc1-8587-5b586fb9f1da> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c3a7820c-7131-4b88-aef3-b81598dd598a>, <urn:uuid:b200d898-2d15-45b1-9577-aa029ef7bc02>.
<urn:uuid:b200d898-2d15-45b1-9577-aa029ef7bc02> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c3a7820c-7131-4b88-aef3-b81598dd598a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:93741838-d8f3-488a-8eaa-2593e98d4b85> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3877fc7d-7dcc-444e-bce5-5096271850b2>, <urn:uuid:f37334cb-788d-4365-9265-db7267819a01>.
<urn:uuid:f37334cb-788d-4365-9265-db7267819a01> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-27T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3877fc7d-7dcc-444e-bce5-5096271850b2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9357eff0-74ad-4ef2-b7cd-b711773f361b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:1bcb5f68-157a-4393-bdb1-db0a0cbece74>, <urn:uuid:ac209935-9ca7-4257-bad9-e0e2e2be31b4>.
<urn:uuid:ac209935-9ca7-4257-bad9-e0e2e2be31b4> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-06-28T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1bcb5f68-157a-4393-bdb1-db0a0cbece74> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-06-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e01c1d4f-b798-4898-bd37-ae8984e0895e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:23112f76-3f5f-4d2e-9cc7-f12772926991>, <urn:uuid:618046b6-fc4b-472a-9a4a-af22112eeb60>.
<urn:uuid:618046b6-fc4b-472a-9a4a-af22112eeb60> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:23112f76-3f5f-4d2e-9cc7-f12772926991> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6c3f0a06-99cf-42a8-9ae1-2e22a1fec935> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a3b8be99-4511-4e13-9e90-8907a7f3853a>, <urn:uuid:245ceef0-260f-4d4a-878a-b947aff1f976>.
<urn:uuid:245ceef0-260f-4d4a-878a-b947aff1f976> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a3b8be99-4511-4e13-9e90-8907a7f3853a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b4ba21e3-c660-4d48-b2ad-8a84b2e49eb7> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ca57a8d4-d07a-4132-b10a-9a6bd8e0d458>, <urn:uuid:ffa7fc26-5ca1-4847-9714-d2c9648a9aad>.
<urn:uuid:ffa7fc26-5ca1-4847-9714-d2c9648a9aad> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ca57a8d4-d07a-4132-b10a-9a6bd8e0d458> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a39e7e6e-fa9a-4e39-80cb-c8ffed1352e9> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f3f83377-1efa-4ada-abba-0762360f11d7>, <urn:uuid:a026744a-4ffd-4efa-ae02-4ea290920e9e>.
<urn:uuid:a026744a-4ffd-4efa-ae02-4ea290920e9e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f3f83377-1efa-4ada-abba-0762360f11d7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5dbda234-1c7b-46fd-bdcd-9f56591a98ab> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f8db2a21-e27e-4cda-aa44-6b9a0f0dda67>, <urn:uuid:abf18596-8372-4c44-96f5-e3652e85e3e6>.
<urn:uuid:abf18596-8372-4c44-96f5-e3652e85e3e6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f8db2a21-e27e-4cda-aa44-6b9a0f0dda67> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1f33abb2-fdb2-4529-8eec-3f697c2f61db> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a68891ad-9127-4c7d-b2b6-9bda152a4d79>, <urn:uuid:a74e77a9-0621-44df-bbb1-216ea0608b5f>.
<urn:uuid:a74e77a9-0621-44df-bbb1-216ea0608b5f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a68891ad-9127-4c7d-b2b6-9bda152a4d79> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f3228127-06d6-4a78-bd6d-a6aefd50045d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:9a131d45-a57c-433d-ae95-cb3b7d676458>, <urn:uuid:da2b4864-d261-4d32-974a-a18b7b0ad457>.
<urn:uuid:da2b4864-d261-4d32-974a-a18b7b0ad457> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9a131d45-a57c-433d-ae95-cb3b7d676458> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0c421a36-31a8-4cc6-9387-655cbece11d9> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:51db01c1-81f0-4b60-8391-30af29b7f815>, <urn:uuid:cbf798d8-4c19-412a-8507-8b40c9f8483f>.
<urn:uuid:cbf798d8-4c19-412a-8507-8b40c9f8483f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:51db01c1-81f0-4b60-8391-30af29b7f815> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8df48bc7-37a6-463e-8600-944f84ccb6be> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:b65c9404-0fdb-42a8-b3ef-081f253341a6>, <urn:uuid:74dbf591-ec41-42fd-9b4e-0b0b12c6aa1a>.
<urn:uuid:74dbf591-ec41-42fd-9b4e-0b0b12c6aa1a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b65c9404-0fdb-42a8-b3ef-081f253341a6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f2284c0e-d8cc-470b-8d66-cc186b19533f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d4d15c9c-c99a-4bf8-a518-275c9f98f3d0>, <urn:uuid:37036221-dbfa-436b-b6e8-22e9a4912042>.
<urn:uuid:37036221-dbfa-436b-b6e8-22e9a4912042> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d4d15c9c-c99a-4bf8-a518-275c9f98f3d0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b50718c6-2b45-4e05-9f0e-35352168177e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:37520bb1-e228-4b2d-af87-70a124f9f509>, <urn:uuid:17af2da2-0d6e-4305-9f20-af582f28e69f>.
<urn:uuid:17af2da2-0d6e-4305-9f20-af582f28e69f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:37520bb1-e228-4b2d-af87-70a124f9f509> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:524fb88e-3c3e-4296-8b14-9254caa38d43> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5727cb4d-637e-424a-886a-a92e8a68792e>, <urn:uuid:946b77ef-d4ba-43c3-a536-9fd168f7cb15>.
<urn:uuid:946b77ef-d4ba-43c3-a536-9fd168f7cb15> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5727cb4d-637e-424a-886a-a92e8a68792e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e24d42a3-23dc-4f6d-930c-b2f95fec0ad9> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:e05a11c3-2df6-4657-9696-4edb57656ca3>, <urn:uuid:bdbb3f61-36a7-4f99-9b56-5c4104117421>.
<urn:uuid:bdbb3f61-36a7-4f99-9b56-5c4104117421> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e05a11c3-2df6-4657-9696-4edb57656ca3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:efd32427-0878-4da6-840b-2cd88b36c229> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5ff79eae-7d0a-4ab0-b0c1-74c523d460a8>, <urn:uuid:cd637661-71d1-4925-b4fd-bb81f35b1834>.
<urn:uuid:cd637661-71d1-4925-b4fd-bb81f35b1834> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5ff79eae-7d0a-4ab0-b0c1-74c523d460a8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8238c0e7-4e25-4f42-b293-66221cf2cadd> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f900a6e2-1227-42cc-a735-6268ed2976a2>, <urn:uuid:b76c4668-5409-4b7b-b609-c251f04f9fc0>.
<urn:uuid:b76c4668-5409-4b7b-b609-c251f04f9fc0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f900a6e2-1227-42cc-a735-6268ed2976a2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:69cc4707-3662-4ee7-a597-37ce601435e2> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2a5640a1-46ba-4595-8b77-1a91007a2420>, <urn:uuid:aa57f57d-11d0-4248-ad8c-36b554498708>.
<urn:uuid:aa57f57d-11d0-4248-ad8c-36b554498708> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2a5640a1-46ba-4595-8b77-1a91007a2420> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:44a11646-feed-4e00-ad9f-ff087a9753bf> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d9e3e6fe-05db-4bff-ba28-ec37ef313df5>, <urn:uuid:a59a52c6-8dd2-4302-a863-7d213ff17830>.
<urn:uuid:a59a52c6-8dd2-4302-a863-7d213ff17830> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d9e3e6fe-05db-4bff-ba28-ec37ef313df5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f9117877-e0a1-4ce2-87b9-b9ef6e33baa9> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:9d24e455-7082-4d39-8a19-d7aef1e9222c>, <urn:uuid:419290e2-7984-42d6-8f29-d2ec68063815>.
<urn:uuid:419290e2-7984-42d6-8f29-d2ec68063815> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9d24e455-7082-4d39-8a19-d7aef1e9222c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:38f11df6-dbfc-415a-a7df-fc05d82c3061> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:fc158863-3bb8-45b4-8257-a0e1d854806e>, <urn:uuid:1f7287e9-71a6-4ff7-9768-346a331e80fd>.
<urn:uuid:1f7287e9-71a6-4ff7-9768-346a331e80fd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fc158863-3bb8-45b4-8257-a0e1d854806e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:20497829-b46a-4328-a651-b38428b12192> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:eff46f32-949d-4f3d-9a56-01a7bf6a53a8>, <urn:uuid:e6a48e62-befb-4738-ab0e-b3a22d1dde61>.
<urn:uuid:e6a48e62-befb-4738-ab0e-b3a22d1dde61> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eff46f32-949d-4f3d-9a56-01a7bf6a53a8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bf3f94cc-70da-4f6b-bd39-8f16892198f0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d8a4c948-73b2-4789-8dc7-500f6d752fe8>, <urn:uuid:60c28b6b-e36f-4796-a994-74b993368ed2>.
<urn:uuid:60c28b6b-e36f-4796-a994-74b993368ed2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d8a4c948-73b2-4789-8dc7-500f6d752fe8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c60e0ec8-902f-4e6e-a412-fa7d05c834ad> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2e3d1a4d-43d5-4e35-81b0-20497b73a8f2>, <urn:uuid:c413ec7a-e39a-4739-b6c9-87ace5a05a16>.
<urn:uuid:c413ec7a-e39a-4739-b6c9-87ace5a05a16> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2e3d1a4d-43d5-4e35-81b0-20497b73a8f2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e0ac9c09-e2d0-492e-8ce6-2bf419cbd71e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a782236f-7af5-4f82-a154-da1a9194b9ea>, <urn:uuid:9ca17b3b-86f1-476d-981d-b308d335d885>.
<urn:uuid:9ca17b3b-86f1-476d-981d-b308d335d885> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-07-31T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a782236f-7af5-4f82-a154-da1a9194b9ea> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-07-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f66f7a5c-58fd-4fb9-ac2a-847f7dc48a55> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:8794f6f8-f1e0-49d4-aa88-18daf5c4aa22>, <urn:uuid:d3fbae36-fc42-4040-8d38-de522d5276ee>.
<urn:uuid:d3fbae36-fc42-4040-8d38-de522d5276ee> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8794f6f8-f1e0-49d4-aa88-18daf5c4aa22> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ec84c86e-89c5-4a84-9b3c-5f6ea87859c6> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c7b692c7-fc26-433e-a130-3997e1187bbd>, <urn:uuid:3fe3d04d-e964-4a7d-8949-9a1c7fee8d80>.
<urn:uuid:3fe3d04d-e964-4a7d-8949-9a1c7fee8d80> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c7b692c7-fc26-433e-a130-3997e1187bbd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2581ca84-38bf-4716-a954-6ad2f779a1c6> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a8dbdf25-82ce-4169-a191-f206d3a3f6d2>, <urn:uuid:58569b9a-3db1-4bf9-884a-136db633ab9e>.
<urn:uuid:58569b9a-3db1-4bf9-884a-136db633ab9e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a8dbdf25-82ce-4169-a191-f206d3a3f6d2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cc3ee7b5-34b1-4630-81e2-ac37b8274e9e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a5759a20-2138-4dd5-8bc8-3aa25cae17bc>, <urn:uuid:cc29cd17-c96e-4146-b845-e4b4b13f0310>.
<urn:uuid:cc29cd17-c96e-4146-b845-e4b4b13f0310> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a5759a20-2138-4dd5-8bc8-3aa25cae17bc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f3d10c6b-c3c9-4b32-b3ed-1eb40ae2004e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:e9a8ea8d-8735-4d6c-ad7d-c03db4c4a063>, <urn:uuid:f58b9a7c-2c12-4ef4-8187-a94b148e3371>.
<urn:uuid:f58b9a7c-2c12-4ef4-8187-a94b148e3371> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e9a8ea8d-8735-4d6c-ad7d-c03db4c4a063> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ecbe9aa1-a9d8-419f-9675-2c158a5919a7> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0cc1512d-9fa0-498a-8391-b0fe27700ae4>, <urn:uuid:5026529f-5715-413e-a117-e4cdcabd0bde>.
<urn:uuid:5026529f-5715-413e-a117-e4cdcabd0bde> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0cc1512d-9fa0-498a-8391-b0fe27700ae4> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:629997aa-cd95-433c-8b3c-b9aad2c6aa3e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2c738aba-d13f-429e-8d48-87e132bb3f53>, <urn:uuid:ed8574f6-f123-438c-9116-b05fc4094151>.
<urn:uuid:ed8574f6-f123-438c-9116-b05fc4094151> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2c738aba-d13f-429e-8d48-87e132bb3f53> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e4735358-f475-492c-b080-9b9b369fbd38> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ce99b4c5-8f0d-435e-b6de-0e01f16263d9>, <urn:uuid:796dbb29-e79f-495c-8ba3-2c91884e0b22>.
<urn:uuid:796dbb29-e79f-495c-8ba3-2c91884e0b22> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ce99b4c5-8f0d-435e-b6de-0e01f16263d9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8e7ca55b-5a1f-4444-9337-ee4f2f9025c7> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:1a1f352f-c2bb-4d81-8dca-0c213f6da148>, <urn:uuid:e51c2a9a-716e-4a6f-9e43-169dacd0169d>.
<urn:uuid:e51c2a9a-716e-4a6f-9e43-169dacd0169d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-13T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1a1f352f-c2bb-4d81-8dca-0c213f6da148> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:759a8766-a480-4c20-9a62-3092af654182> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d781a87e-06dd-41c3-bb4c-1cef8133835a>, <urn:uuid:42a89d23-c815-4bc0-98b0-35bab1f36b4d>.
<urn:uuid:42a89d23-c815-4bc0-98b0-35bab1f36b4d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-14T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d781a87e-06dd-41c3-bb4c-1cef8133835a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e9e4a6cc-4c5c-4a23-8181-009a02c7aa7d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:7288eb0a-3ad6-4b36-b1e1-7dec59d6625a>, <urn:uuid:244df4e1-cfd3-4c00-ac26-4d781bbd880e>.
<urn:uuid:244df4e1-cfd3-4c00-ac26-4d781bbd880e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7288eb0a-3ad6-4b36-b1e1-7dec59d6625a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9429299d-a355-491e-a34a-ba490a9f1bea> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:7617f4a3-05d3-4418-9909-fddcac55db5f>, <urn:uuid:0d23d75e-2fe8-4d31-b31d-5f4f01808a7b>.
<urn:uuid:0d23d75e-2fe8-4d31-b31d-5f4f01808a7b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7617f4a3-05d3-4418-9909-fddcac55db5f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6ffe395c-28bb-4a5b-8b46-423970f03867> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:8402ebf0-1db1-4710-a8d8-ec248cb7b64c>, <urn:uuid:39d431e4-8742-4dd0-aa7e-f780d413b613>.
<urn:uuid:39d431e4-8742-4dd0-aa7e-f780d413b613> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8402ebf0-1db1-4710-a8d8-ec248cb7b64c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:40fa925a-712e-4f2a-a737-ab9fbcf3319a> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3c55fbf2-1323-45ab-a1d0-1580b9fa34e9>, <urn:uuid:0d1698a6-4aec-423b-84fb-44d600cb69ca>.
<urn:uuid:0d1698a6-4aec-423b-84fb-44d600cb69ca> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-20T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3c55fbf2-1323-45ab-a1d0-1580b9fa34e9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6154c58e-869f-454b-876b-d400bfa0770e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ad6a73a4-9a3a-4154-b445-447f097d8d51>, <urn:uuid:e28f2764-4717-48d1-af4d-a025a262c75b>.
<urn:uuid:e28f2764-4717-48d1-af4d-a025a262c75b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-21T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ad6a73a4-9a3a-4154-b445-447f097d8d51> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8c84d6f9-c83c-49d9-b988-e571c6493e21> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:e1b7390f-b3ee-4a62-9b84-958cd7205503>, <urn:uuid:a0c4e370-8eb7-4533-960c-18edc1347606>.
<urn:uuid:a0c4e370-8eb7-4533-960c-18edc1347606> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e1b7390f-b3ee-4a62-9b84-958cd7205503> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4eea153f-9a27-44da-8432-40aea5bdfc5d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a07bd66a-264c-49de-b61b-52eb4900e7c5>, <urn:uuid:794229d2-8312-4e36-a44e-5cd86dcd5e9f>.
<urn:uuid:794229d2-8312-4e36-a44e-5cd86dcd5e9f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a07bd66a-264c-49de-b61b-52eb4900e7c5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fe175296-5b32-4174-ad5b-9227a44c3615> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:851265bd-c336-49b1-80de-07ddd58cbf0e>, <urn:uuid:aa62a8c6-b42e-4776-abb9-eaf7b9b32630>.
<urn:uuid:aa62a8c6-b42e-4776-abb9-eaf7b9b32630> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:851265bd-c336-49b1-80de-07ddd58cbf0e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:20a309ef-154e-4a93-82df-a7d1c633b8e7> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:25ad60f5-db0c-4c1f-bf7a-cdd121e3413f>, <urn:uuid:d3fb977b-c2fb-4822-82f2-eec957086742>.
<urn:uuid:d3fb977b-c2fb-4822-82f2-eec957086742> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-27T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:25ad60f5-db0c-4c1f-bf7a-cdd121e3413f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d6d4f8b2-82e7-4e4f-8949-94f5b5175654> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:7251a15a-cc69-4977-a8d5-d85e8acde17f>, <urn:uuid:3682efaa-846f-46b6-a557-e3a13c7ba88c>.
<urn:uuid:3682efaa-846f-46b6-a557-e3a13c7ba88c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-28T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7251a15a-cc69-4977-a8d5-d85e8acde17f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:99489667-c4e5-405e-a108-ecdd3413e89b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c3d68483-7988-44af-82c9-82771a7401fb>, <urn:uuid:77f83627-128e-4a96-84f7-ff2d0073161c>.
<urn:uuid:77f83627-128e-4a96-84f7-ff2d0073161c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c3d68483-7988-44af-82c9-82771a7401fb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:36a81698-68dc-4276-930b-5faea86191a2> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:087a31cb-9634-42fa-9797-642cb5d19789>, <urn:uuid:2e04982c-f04b-4fce-9942-72a65f47cb55>.
<urn:uuid:2e04982c-f04b-4fce-9942-72a65f47cb55> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-08-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:087a31cb-9634-42fa-9797-642cb5d19789> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-08-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a79cbb6a-c51d-46c3-9abd-0f58b7d96220> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d8d3dabd-51f8-481a-a55e-b08723ccc328>, <urn:uuid:4554f885-28eb-461d-8475-084cfbe3c43c>.
<urn:uuid:4554f885-28eb-461d-8475-084cfbe3c43c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d8d3dabd-51f8-481a-a55e-b08723ccc328> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f8ecc917-b0a1-49de-b763-b2fa1084454c> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:bb11ab45-377c-415f-8b4a-8fdc12f5a94e>, <urn:uuid:3e913bd3-caf8-486c-9e39-6159bfee839a>.
<urn:uuid:3e913bd3-caf8-486c-9e39-6159bfee839a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bb11ab45-377c-415f-8b4a-8fdc12f5a94e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8d6e9a21-8ce8-47f3-826f-6c1ed990251b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3987d626-8481-4800-80df-ed1336914c35>, <urn:uuid:d1cf7dd3-de8f-41f3-8806-15460d723a51>.
<urn:uuid:d1cf7dd3-de8f-41f3-8806-15460d723a51> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3987d626-8481-4800-80df-ed1336914c35> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:025579ca-9595-47c6-ae79-9d31d26f72ad> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:dc34a600-547c-4000-a19d-88bb4eb1d860>, <urn:uuid:7791ed09-f751-4452-b10f-fad443cee896>.
<urn:uuid:7791ed09-f751-4452-b10f-fad443cee896> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dc34a600-547c-4000-a19d-88bb4eb1d860> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b2335484-2193-43d5-952d-0eaa78b4d228> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:fb78ee8b-dce9-4c2e-a171-7cad399c0378>, <urn:uuid:46e9b9f4-74ee-476a-b68e-24fe6b624672>.
<urn:uuid:46e9b9f4-74ee-476a-b68e-24fe6b624672> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fb78ee8b-dce9-4c2e-a171-7cad399c0378> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:20a8ed90-e5f2-47a9-8420-bc3365ef15e3> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ed54ec4b-a1d9-47a9-a225-41ffbdb02c9b>, <urn:uuid:2510ad4a-bac1-4958-b6f8-9bd261738531>.
<urn:uuid:2510ad4a-bac1-4958-b6f8-9bd261738531> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ed54ec4b-a1d9-47a9-a225-41ffbdb02c9b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f1e9e740-386d-41df-b308-f55f64cba6dc> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5adca922-de27-4ca9-a2a6-55f0ba9635c8>, <urn:uuid:787113f2-55df-462e-84fa-cb658c50d8fb>.
<urn:uuid:787113f2-55df-462e-84fa-cb658c50d8fb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5adca922-de27-4ca9-a2a6-55f0ba9635c8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:74a74712-2516-45e2-a784-80773c55d465> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a2c81302-1a5c-4ebe-9fa0-cec8ceebd576>, <urn:uuid:8f122756-faf5-47c1-91ca-2a22b12052dc>.
<urn:uuid:8f122756-faf5-47c1-91ca-2a22b12052dc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a2c81302-1a5c-4ebe-9fa0-cec8ceebd576> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8d19eb5d-ccc8-4b19-87c3-94f838e96639> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d961840a-dd39-4d00-b90d-c4096ae0e49c>, <urn:uuid:b33afa3b-d928-43e0-b03f-d3642fcf4065>.
<urn:uuid:b33afa3b-d928-43e0-b03f-d3642fcf4065> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d961840a-dd39-4d00-b90d-c4096ae0e49c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7edae164-7a1d-4e39-a6ff-5496ebd833cd> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2fa84ecc-ab3a-4e6e-a397-2aa12d76ad6b>, <urn:uuid:ecf2fc3d-d925-4156-8e14-63adbf18674c>.
<urn:uuid:ecf2fc3d-d925-4156-8e14-63adbf18674c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-13T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2fa84ecc-ab3a-4e6e-a397-2aa12d76ad6b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:45a8feaf-d112-4336-a432-b8cf99a6ad09> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f1678757-894d-4525-b892-956f3f665072>, <urn:uuid:9792608d-cac5-4659-a9d4-edc45714af19>.
<urn:uuid:9792608d-cac5-4659-a9d4-edc45714af19> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f1678757-894d-4525-b892-956f3f665072> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:df0a77f7-1d54-484a-afaf-4826ad4fcba1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:22e36e1b-f376-4454-a21f-69b1320a468b>, <urn:uuid:00637563-7e3b-405b-a3b7-b6be21c48433>.
<urn:uuid:00637563-7e3b-405b-a3b7-b6be21c48433> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:22e36e1b-f376-4454-a21f-69b1320a468b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a5438dee-3584-40f2-b589-5f59bd64253e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:8e39f6ff-6fcd-4d57-a1ff-9caae5bcfb96>, <urn:uuid:557d07f0-dbec-4e09-a7d5-53e3f6a5ac70>.
<urn:uuid:557d07f0-dbec-4e09-a7d5-53e3f6a5ac70> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8e39f6ff-6fcd-4d57-a1ff-9caae5bcfb96> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:da363350-32e5-4e5d-8295-56f8fcdd8ffd> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:89b7d92a-99c6-4b7a-8533-4448713e7d3a>, <urn:uuid:63866b29-a379-4841-95df-72d9148359be>.
<urn:uuid:63866b29-a379-4841-95df-72d9148359be> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:89b7d92a-99c6-4b7a-8533-4448713e7d3a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:652fdfd1-0c51-4bd5-a795-37770d4d9ac1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:33230260-0328-4d17-a0f4-54fd5df1681e>, <urn:uuid:589aeee8-a2ce-4866-9541-82362b517815>.
<urn:uuid:589aeee8-a2ce-4866-9541-82362b517815> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-20T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:33230260-0328-4d17-a0f4-54fd5df1681e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5c11aec8-6640-4ec2-89bb-69660f9f3d4d> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3db2b497-6ba7-4a0f-8fe8-5c65a647d54a>, <urn:uuid:c4df223e-6ce3-420d-8c56-771e616de650>.
<urn:uuid:c4df223e-6ce3-420d-8c56-771e616de650> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3db2b497-6ba7-4a0f-8fe8-5c65a647d54a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:26e133fc-cc58-44cd-8ff1-ee1ffbe5db36> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:fc83f764-d140-4e5a-93ca-bbe2bc522e34>, <urn:uuid:17461c3f-c284-4b6d-91af-08d8a5bb03f8>.
<urn:uuid:17461c3f-c284-4b6d-91af-08d8a5bb03f8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fc83f764-d140-4e5a-93ca-bbe2bc522e34> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:63a26522-ab0d-4f6f-b08b-0120b8a361a9> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:4455d6d4-5a0b-4e72-891b-a755c1d60988>, <urn:uuid:c1925145-1357-4fc3-85e4-1967ecee94a0>.
<urn:uuid:c1925145-1357-4fc3-85e4-1967ecee94a0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4455d6d4-5a0b-4e72-891b-a755c1d60988> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:330b8ea5-f382-457b-bfbf-47e5784ac046> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d541d869-b628-4e9a-a490-d123c5d60e8f>, <urn:uuid:8974a686-95f3-448b-9eb0-8e028ff263fb>.
<urn:uuid:8974a686-95f3-448b-9eb0-8e028ff263fb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d541d869-b628-4e9a-a490-d123c5d60e8f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:14031796-fb1d-4dbe-b0ef-1a8f43c9783c> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:1184aee3-3c71-474e-8ef8-9f035af140a2>, <urn:uuid:3a2c22ef-c82f-4085-a9f5-ccfed8f446ad>.
<urn:uuid:3a2c22ef-c82f-4085-a9f5-ccfed8f446ad> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-27T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1184aee3-3c71-474e-8ef8-9f035af140a2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fc689a79-666b-4dfd-9c32-1f0eca9fd2db> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a054e9ce-12c0-4bfe-8228-918eb34ebdbc>, <urn:uuid:504b7ee6-b364-432a-8b6c-779ab4c5c4cb>.
<urn:uuid:504b7ee6-b364-432a-8b6c-779ab4c5c4cb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-09-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a054e9ce-12c0-4bfe-8228-918eb34ebdbc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-09-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e0091d42-42f2-4a35-b90c-0ac144abd292> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:6ee232fe-e534-409a-9499-15cae055f596>, <urn:uuid:1f7f4586-afe8-4bb8-8719-930fac9f4755>.
<urn:uuid:1f7f4586-afe8-4bb8-8719-930fac9f4755> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6ee232fe-e534-409a-9499-15cae055f596> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e7d20235-7437-44b0-a4c8-0ff4215064c0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5c4833a5-b394-4add-888a-82e52b30d6d3>, <urn:uuid:8b9f5dee-c5a3-43d3-b8b4-444f428b0205>.
<urn:uuid:8b9f5dee-c5a3-43d3-b8b4-444f428b0205> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5c4833a5-b394-4add-888a-82e52b30d6d3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:02aa8f94-1b0a-4fa2-b55a-5901c1cbfc67> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:02e532c9-8ff4-4432-9c86-feecc24826b1>, <urn:uuid:15416af8-e23d-4b00-b559-5443b93a00d7>.
<urn:uuid:15416af8-e23d-4b00-b559-5443b93a00d7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:02e532c9-8ff4-4432-9c86-feecc24826b1> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fb999066-2b8c-4be0-8e08-7080709b1ef9> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:39c23371-7f53-4706-a3da-efbd3efcbeb5>, <urn:uuid:9ce0cefe-092d-4c9e-a88e-7ac80b8c7d9e>.
<urn:uuid:9ce0cefe-092d-4c9e-a88e-7ac80b8c7d9e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:39c23371-7f53-4706-a3da-efbd3efcbeb5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3cb893f3-c716-4ac1-9ee0-78c63cffcd58> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:96441b96-045c-45b7-920a-e34d93392352>, <urn:uuid:697b25e5-1444-4002-9222-23145113b2a0>.
<urn:uuid:697b25e5-1444-4002-9222-23145113b2a0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:96441b96-045c-45b7-920a-e34d93392352> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8174c09d-2d7d-42df-99ce-d3a1fccd60a4> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ad04bdc5-d6e0-4144-acb3-7722f60fbc45>, <urn:uuid:1cb9c410-3a0a-436f-809c-99e939ad8e6a>.
<urn:uuid:1cb9c410-3a0a-436f-809c-99e939ad8e6a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ad04bdc5-d6e0-4144-acb3-7722f60fbc45> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f2f109b4-d9ac-4e41-9500-1303e5a942bb> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:61078643-f180-4217-81a9-dff46ce9c398>, <urn:uuid:6095fd94-dc0a-4e11-af3b-7d40c6fcd8cd>.
<urn:uuid:6095fd94-dc0a-4e11-af3b-7d40c6fcd8cd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:61078643-f180-4217-81a9-dff46ce9c398> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1eba4859-707e-44c6-84ab-615d120c7418> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f557b6de-e0df-496e-837f-0edeae557100>, <urn:uuid:6c55ca78-ef0b-40c2-b045-4359531a9aeb>.
<urn:uuid:6c55ca78-ef0b-40c2-b045-4359531a9aeb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f557b6de-e0df-496e-837f-0edeae557100> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:87f8a293-6222-4d6f-9c35-bb996684d814> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:049fd2ff-08d9-47d7-9213-db28d798922e>, <urn:uuid:459a32f2-8873-46c8-b620-c320325d1608>.
<urn:uuid:459a32f2-8873-46c8-b620-c320325d1608> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:049fd2ff-08d9-47d7-9213-db28d798922e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dfc9b867-fc0d-41d4-898d-a68077cfd165> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:501ead2b-7704-41ba-accb-1a33a6d8df15>, <urn:uuid:af238321-6de8-4636-8843-e349752f2935>.
<urn:uuid:af238321-6de8-4636-8843-e349752f2935> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-14T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:501ead2b-7704-41ba-accb-1a33a6d8df15> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7eeee0e5-4ffb-4514-b7c5-085a9cbb3e4f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:377d4dc3-0b41-4787-a13d-5ff239da8c12>, <urn:uuid:fcd3ce98-af2a-461d-8911-979898498544>.
<urn:uuid:fcd3ce98-af2a-461d-8911-979898498544> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:377d4dc3-0b41-4787-a13d-5ff239da8c12> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2a2bc816-ce9e-4b41-959d-5a2bcf3f6b01> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:cf4d1090-0132-4f74-a6fa-25e5719ae276>, <urn:uuid:4d824ade-4af1-4f6d-9069-348c4075f2f5>.
<urn:uuid:4d824ade-4af1-4f6d-9069-348c4075f2f5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cf4d1090-0132-4f74-a6fa-25e5719ae276> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a48b06b7-de3b-4fa9-93c6-2bdc856b1391> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:eb64dfcf-dda3-4367-a50d-3ca9280cbb7c>, <urn:uuid:434018fe-bf8d-4452-b84f-2462d08a6226>.
<urn:uuid:434018fe-bf8d-4452-b84f-2462d08a6226> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eb64dfcf-dda3-4367-a50d-3ca9280cbb7c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:69be343c-30f3-441e-92da-4414c7263ebb> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:31099c2e-4d85-49c0-baa7-54aff8d050cc>, <urn:uuid:0bf1929d-30f0-4833-bbd1-4dd46dcb4d98>.
<urn:uuid:0bf1929d-30f0-4833-bbd1-4dd46dcb4d98> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:31099c2e-4d85-49c0-baa7-54aff8d050cc> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:219f1191-9d15-4061-9007-68e0be24b6b1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:26497974-3474-443b-bf50-0ef678821bbf>, <urn:uuid:850c4b5d-3aa2-47b7-9432-206dae6ba724>.
<urn:uuid:850c4b5d-3aa2-47b7-9432-206dae6ba724> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-21T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:26497974-3474-443b-bf50-0ef678821bbf> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b45f9ed9-383e-4580-aa46-33bbdcb49eaf> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d257d830-9171-46d6-9b8d-c10d6ebb815d>, <urn:uuid:f4487552-4790-4bf3-99c7-3d2fdc0730f8>.
<urn:uuid:f4487552-4790-4bf3-99c7-3d2fdc0730f8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d257d830-9171-46d6-9b8d-c10d6ebb815d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:93fe924e-d433-4680-993c-1dd6aadd8406> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:2f762c7e-52ac-4434-ab9c-9c36978d5b19>, <urn:uuid:616fdc6b-8e56-4130-b347-a99e046c6309>.
<urn:uuid:616fdc6b-8e56-4130-b347-a99e046c6309> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2f762c7e-52ac-4434-ab9c-9c36978d5b19> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:26bca22d-c7f7-45cf-965a-cb25b18f5e12> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:4d33a62c-0fd9-4935-bc02-ebaddd948343>, <urn:uuid:89f23515-ce5f-404c-a25a-7bf4b1683187>.
<urn:uuid:89f23515-ce5f-404c-a25a-7bf4b1683187> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4d33a62c-0fd9-4935-bc02-ebaddd948343> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5b437f68-c233-4340-9d68-bd8f90938c28> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5701655a-fcc2-4b55-8362-5713fa280857>, <urn:uuid:50ac39a9-4262-4e66-a8f3-1829b1ebbc7a>.
<urn:uuid:50ac39a9-4262-4e66-a8f3-1829b1ebbc7a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5701655a-fcc2-4b55-8362-5713fa280857> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:701a1f06-f867-4edb-a3b9-d471b0b8265c> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:9d79f5f4-bb7d-4218-a96c-6d52347ae95f>, <urn:uuid:e8a02c26-e562-42f8-89cc-0d2459507ad6>.
<urn:uuid:e8a02c26-e562-42f8-89cc-0d2459507ad6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-28T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9d79f5f4-bb7d-4218-a96c-6d52347ae95f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:068de183-3d3b-4f38-9769-1007f978524e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:806a4725-31ab-461e-b17d-692abf48bcce>, <urn:uuid:53b4acb6-b122-4344-9c93-631c71e7a27e>.
<urn:uuid:53b4acb6-b122-4344-9c93-631c71e7a27e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:806a4725-31ab-461e-b17d-692abf48bcce> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:134563e3-0314-44ce-bd44-7c9796d8dcc2> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:bb49138d-5033-475a-b53c-c009e0709a86>, <urn:uuid:c779cf86-014a-42b6-bd8f-9223e4041e4e>.
<urn:uuid:c779cf86-014a-42b6-bd8f-9223e4041e4e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bb49138d-5033-475a-b53c-c009e0709a86> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9d3d4dbb-46eb-4d0a-8ae6-a44c703e04fc> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:73a013e2-a88d-44d0-be21-d69bc67230a3>, <urn:uuid:4cbc0742-fbda-4d1a-802b-ffe96a2c2d41>.
<urn:uuid:4cbc0742-fbda-4d1a-802b-ffe96a2c2d41> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-10-31T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:73a013e2-a88d-44d0-be21-d69bc67230a3> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-10-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:778cf6cb-3945-41d1-9d65-8476c2efce85> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f813167b-73e8-4a08-8642-40b87a8b1140>, <urn:uuid:d6a96d8a-5d2f-4abd-aec2-ecc17b1d2b19>.
<urn:uuid:d6a96d8a-5d2f-4abd-aec2-ecc17b1d2b19> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f813167b-73e8-4a08-8642-40b87a8b1140> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a2b733a3-89e8-4f81-a954-fefc0e29072e> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:7119129c-ea4c-4c95-9aed-df0527bb1dcf>, <urn:uuid:c9fe1107-48ef-4bb1-ae69-c16a66736208>.
<urn:uuid:c9fe1107-48ef-4bb1-ae69-c16a66736208> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7119129c-ea4c-4c95-9aed-df0527bb1dcf> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9ef3e970-701b-4f7e-a7cb-c6aa5a2efaef> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:fde8c379-f0c5-4bb7-97ef-1d700c7bb7ba>, <urn:uuid:9183147a-f8dc-4dea-b67a-82e74267c474>.
<urn:uuid:9183147a-f8dc-4dea-b67a-82e74267c474> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fde8c379-f0c5-4bb7-97ef-1d700c7bb7ba> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eaa436c6-0904-452a-b0e1-41bc185a0a71> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:53d930f3-a334-4e95-a3f9-b2adda37aa3e>, <urn:uuid:df78cb77-e3d3-4a4e-aa8f-effa9e158eb9>.
<urn:uuid:df78cb77-e3d3-4a4e-aa8f-effa9e158eb9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:53d930f3-a334-4e95-a3f9-b2adda37aa3e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bc44fecb-3934-4fff-8ae3-6b04fb45f7f5> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:501cd48e-77ae-4f09-8746-3bde8af045f9>, <urn:uuid:adf4e46b-8f23-4dda-b85b-146b4a059e01>.
<urn:uuid:adf4e46b-8f23-4dda-b85b-146b4a059e01> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:501cd48e-77ae-4f09-8746-3bde8af045f9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:957bfa67-4996-4fc9-95a9-636a4f2b743f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ea28d837-3993-4166-ab3d-aceed0611354>, <urn:uuid:92eb8064-54de-498e-b32f-3509247e99b1>.
<urn:uuid:92eb8064-54de-498e-b32f-3509247e99b1> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ea28d837-3993-4166-ab3d-aceed0611354> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9c6ec92b-4df8-4996-b92f-e1bd63a7f5b1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:958b73bf-9c7b-46e5-9547-3828cac85ad1>, <urn:uuid:488ca938-e5ef-4b2b-97c5-8c47ef66d24e>.
<urn:uuid:488ca938-e5ef-4b2b-97c5-8c47ef66d24e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:958b73bf-9c7b-46e5-9547-3828cac85ad1> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f0d083f6-499c-4ec6-b50f-cf494abfb2f3> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:7aa662e7-7e90-42c8-96e9-284ac25dc35c>, <urn:uuid:502816a9-b6f4-4d10-b37f-14443de6654f>.
<urn:uuid:502816a9-b6f4-4d10-b37f-14443de6654f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7aa662e7-7e90-42c8-96e9-284ac25dc35c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b41c49b3-26f3-4560-934c-0e80d21632ec> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d7b704f6-e8f1-4aec-8f39-bf8638f3fcf2>, <urn:uuid:6f7a8878-21b4-488b-b0a8-7709ccfdea84>.
<urn:uuid:6f7a8878-21b4-488b-b0a8-7709ccfdea84> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-13T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d7b704f6-e8f1-4aec-8f39-bf8638f3fcf2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7a225779-fcf2-4897-9286-bd999e707822> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5c9b1927-28a0-4da3-a207-9fbad71d189f>, <urn:uuid:4f51eb43-5b15-4b9a-8a73-a08f7c1edf2e>.
<urn:uuid:4f51eb43-5b15-4b9a-8a73-a08f7c1edf2e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-14T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5c9b1927-28a0-4da3-a207-9fbad71d189f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a8cca86c-e932-47a7-85fa-e7befcb3c6e0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0d45f580-1eaa-4459-a991-d91ef0f36d5a>, <urn:uuid:0243300e-8615-40c3-905a-ec16f3268ca8>.
<urn:uuid:0243300e-8615-40c3-905a-ec16f3268ca8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0d45f580-1eaa-4459-a991-d91ef0f36d5a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:50ef2f36-3080-4473-81d5-ebaf466720fd> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:59c52fba-af5c-4f28-bb50-869dafd499f7>, <urn:uuid:3fe6455e-32fc-4663-be7a-f7168cda838a>.
<urn:uuid:3fe6455e-32fc-4663-be7a-f7168cda838a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:59c52fba-af5c-4f28-bb50-869dafd499f7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fdd857e3-4be4-44fb-8fd1-8b7ac89209e3> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:ea9e70c0-9aa0-4fc3-9edd-6beaab2cf602>, <urn:uuid:8c361160-41c3-4129-8596-08ba0363a89b>.
<urn:uuid:8c361160-41c3-4129-8596-08ba0363a89b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ea9e70c0-9aa0-4fc3-9edd-6beaab2cf602> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fc60793d-9d4c-4a96-b432-2467049085aa> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:eae63486-6ad8-414e-a547-04ea466d4b93>, <urn:uuid:c3b23283-e054-4cb4-95bb-947d001d5ff4>.
<urn:uuid:c3b23283-e054-4cb4-95bb-947d001d5ff4> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-20T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eae63486-6ad8-414e-a547-04ea466d4b93> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c562d65c-598f-4802-afec-1d4b9da76053> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:48ee8f69-ab79-4b21-8f90-975f42c08633>, <urn:uuid:9ad2d407-b289-4e79-94d8-d53ae7a36b47>.
<urn:uuid:9ad2d407-b289-4e79-94d8-d53ae7a36b47> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-21T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:48ee8f69-ab79-4b21-8f90-975f42c08633> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:636fd4c9-f929-4d9f-8cb9-9aa7c4dd0c23> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:220e4eac-99e4-45b0-a96c-e5b0583d36be>, <urn:uuid:a841f80e-e4e3-4e70-b631-fb8188250058>.
<urn:uuid:a841f80e-e4e3-4e70-b631-fb8188250058> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:220e4eac-99e4-45b0-a96c-e5b0583d36be> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:662d1f4f-bf9d-4a80-ae6b-c3eb2584c344> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:99dc7e13-0335-436d-a879-150d0525cbdf>, <urn:uuid:1eb99780-6dd7-4e0e-84d7-cf3055bff7d0>.
<urn:uuid:1eb99780-6dd7-4e0e-84d7-cf3055bff7d0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:99dc7e13-0335-436d-a879-150d0525cbdf> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d9453fa8-8c91-492d-ae9b-2d008d6670a2> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:37263a47-af3d-4d27-aa83-43fb8e059197>, <urn:uuid:724350fb-cfa8-4a0c-9ea4-bc1563d50a76>.
<urn:uuid:724350fb-cfa8-4a0c-9ea4-bc1563d50a76> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:37263a47-af3d-4d27-aa83-43fb8e059197> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:64e4b11b-2c26-46a9-88db-347b386c1999> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c2fc04e3-52fe-43ac-b0ed-5a40818ab3e6>, <urn:uuid:8aae4288-f074-4382-ada4-c113b96476f9>.
<urn:uuid:8aae4288-f074-4382-ada4-c113b96476f9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-27T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c2fc04e3-52fe-43ac-b0ed-5a40818ab3e6> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:38413bf0-11f3-4877-914a-96ccf6c59aab> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:07cf50ff-5ac8-43d2-b045-402b50f817e5>, <urn:uuid:141f8880-ca7f-4b1f-8ddc-8dc4b077cc9f>.
<urn:uuid:141f8880-ca7f-4b1f-8ddc-8dc4b077cc9f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-28T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:07cf50ff-5ac8-43d2-b045-402b50f817e5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7be61257-458a-4fb6-b0f2-b52d3f577c83> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:e33ccd56-6f79-425d-acd7-cf76007dbca7>, <urn:uuid:fee20948-6492-411c-9539-2d55581b7e56>.
<urn:uuid:fee20948-6492-411c-9539-2d55581b7e56> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-11-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e33ccd56-6f79-425d-acd7-cf76007dbca7> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-11-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3baee5f7-6433-4381-9106-4af816a512fd> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:7ec5b3e0-53ec-4adc-a353-64752da31234>, <urn:uuid:f409a24f-863b-4fbe-8877-9b1baba517f8>.
<urn:uuid:f409a24f-863b-4fbe-8877-9b1baba517f8> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7ec5b3e0-53ec-4adc-a353-64752da31234> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:44ae9166-531c-4415-a62f-655a6cea9d01> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:79e2e81c-d3dc-40b0-9e7d-86e1e4a8ab81>, <urn:uuid:b08fe21a-d41d-4deb-a46e-3ab4add6ea12>.
<urn:uuid:b08fe21a-d41d-4deb-a46e-3ab4add6ea12> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:79e2e81c-d3dc-40b0-9e7d-86e1e4a8ab81> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b8c7fbfe-4b16-4dea-b08c-1268cc7e1eb1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:0edbe8b8-2f48-4a6d-b15a-16676e12362e>, <urn:uuid:b0dda4fa-ad32-433e-a183-1f5ed338af6a>.
<urn:uuid:b0dda4fa-ad32-433e-a183-1f5ed338af6a> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0edbe8b8-2f48-4a6d-b15a-16676e12362e> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ef4fdae7-207b-45ec-a4db-b6fbf69e809f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:002a2fa7-bc84-4072-9c49-a765d7edfcc2>, <urn:uuid:c6dcb1fa-4f55-4992-a450-7f1f1b2db837>.
<urn:uuid:c6dcb1fa-4f55-4992-a450-7f1f1b2db837> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:002a2fa7-bc84-4072-9c49-a765d7edfcc2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e7a41771-8364-43e1-8647-401f37f8e886> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:1e573bdd-0219-4302-bf44-f41d797037d5>, <urn:uuid:d4285515-94b9-4930-b5d1-78ef3f37de64>.
<urn:uuid:d4285515-94b9-4930-b5d1-78ef3f37de64> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1e573bdd-0219-4302-bf44-f41d797037d5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e27de4ad-8809-470a-864e-6956eab9067f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:f4a97fed-5e4b-4bff-834e-3fa82050e931>, <urn:uuid:01d631bd-2109-4379-80e1-e12ac64f2dff>.
<urn:uuid:01d631bd-2109-4379-80e1-e12ac64f2dff> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f4a97fed-5e4b-4bff-834e-3fa82050e931> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3ec09e77-b91a-4217-b789-00f1c6051816> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:159a13f2-79eb-425c-a0a8-5a387182cd80>, <urn:uuid:0882154b-3822-4fe0-8a0e-81b0fb8cac6c>.
<urn:uuid:0882154b-3822-4fe0-8a0e-81b0fb8cac6c> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:159a13f2-79eb-425c-a0a8-5a387182cd80> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:653449a3-b32e-43ce-bad2-4ca7b8b43674> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:5a7b0cee-18f9-4d96-b7fc-aa0680aab6a4>, <urn:uuid:566da207-be3e-45f1-8e60-18a51f0c7e02>.
<urn:uuid:566da207-be3e-45f1-8e60-18a51f0c7e02> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5a7b0cee-18f9-4d96-b7fc-aa0680aab6a4> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5609f832-97cf-4932-9120-7a5d698e8b61> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:c98be63a-643d-4030-bd32-f4cd1f8e0c99>, <urn:uuid:3d74d678-dc20-4dc9-aa21-dd669d32bfff>.
<urn:uuid:3d74d678-dc20-4dc9-aa21-dd669d32bfff> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c98be63a-643d-4030-bd32-f4cd1f8e0c99> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:99f1ec97-f070-4860-bff3-f23fa5f55946> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:e81cf59b-106e-452b-96ea-7a062ebdd712>, <urn:uuid:db535878-c0b4-41d4-9a0f-80eaabee31bd>.
<urn:uuid:db535878-c0b4-41d4-9a0f-80eaabee31bd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-13T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e81cf59b-106e-452b-96ea-7a062ebdd712> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:df2456bb-3a47-4c13-9a42-443c163a861b> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:4a354999-d4af-4372-8cc7-bea0689a790f>, <urn:uuid:8023654a-1f38-46e2-a67b-7e53d378d401>.
<urn:uuid:8023654a-1f38-46e2-a67b-7e53d378d401> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4a354999-d4af-4372-8cc7-bea0689a790f> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:212e9f84-4485-4fbd-a63a-f22ae5d65c45> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d47551d1-f940-4885-8afa-25848f54b401>, <urn:uuid:d6fc72f1-2399-4c19-b283-f3a5c92c6a8b>.
<urn:uuid:d6fc72f1-2399-4c19-b283-f3a5c92c6a8b> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d47551d1-f940-4885-8afa-25848f54b401> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1f10b2d8-0fc8-4dd9-b0cf-c07e1080a7df> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d53d4ad1-ba1a-4bb1-93e4-6d0e69b8b0d0>, <urn:uuid:5c9b57e8-1a8a-44ca-8080-848cc6fed6d9>.
<urn:uuid:5c9b57e8-1a8a-44ca-8080-848cc6fed6d9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d53d4ad1-ba1a-4bb1-93e4-6d0e69b8b0d0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3c4108b3-5cfc-45ee-af03-f01c2cb86c9f> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:04376193-751a-4988-9990-869e4f6ba277>, <urn:uuid:0b77dd6d-7760-4474-a6ab-76d0a748dc34>.
<urn:uuid:0b77dd6d-7760-4474-a6ab-76d0a748dc34> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:04376193-751a-4988-9990-869e4f6ba277> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f9e0ce4a-7246-47ae-b251-b620a276b3ad> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:3a792116-6d64-4a5d-b24e-e52281d6e1dd>, <urn:uuid:7bfc1bd8-df75-48fa-a696-c33621f90de2>.
<urn:uuid:7bfc1bd8-df75-48fa-a696-c33621f90de2> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-20T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3a792116-6d64-4a5d-b24e-e52281d6e1dd> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9e95cad6-95bf-4497-a3bc-9a4d54576226> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:6d2eb216-41d1-4a75-899a-3315959ce4c0>, <urn:uuid:4165a9f3-8548-443e-b7ef-c3bdce7aa407>.
<urn:uuid:4165a9f3-8548-443e-b7ef-c3bdce7aa407> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6d2eb216-41d1-4a75-899a-3315959ce4c0> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:88c0a344-a509-4140-a039-691fe86311d1> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:be96abcd-fdba-4a4e-83c3-684b23143c88>, <urn:uuid:d72d5d7f-072c-49d9-94a4-43e0a722a721>.
<urn:uuid:d72d5d7f-072c-49d9-94a4-43e0a722a721> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:be96abcd-fdba-4a4e-83c3-684b23143c88> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cdc19240-6380-423e-a367-5dc1fa7d8358> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:84d1432d-4215-4d48-85c1-eae07de564ae>, <urn:uuid:07166646-98d3-43c2-92e9-62efbb3c93ac>.
<urn:uuid:07166646-98d3-43c2-92e9-62efbb3c93ac> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:84d1432d-4215-4d48-85c1-eae07de564ae> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a7622a4e-402c-4c9b-90a7-f48c07287ea0> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:83bed457-d0bc-43ba-ba3e-0223439d8023>, <urn:uuid:a228d0c0-1ae8-4bd3-9ad6-c833751f57c9>.
<urn:uuid:a228d0c0-1ae8-4bd3-9ad6-c833751f57c9> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:83bed457-d0bc-43ba-ba3e-0223439d8023> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b70d3865-fc6e-49e7-9b2c-6850843d5a90> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:a6848bc3-9f96-4bee-871d-f2c3fc344e67>, <urn:uuid:9a24b81b-6f1c-4ae3-a91d-a854aad569cb>.
<urn:uuid:9a24b81b-6f1c-4ae3-a91d-a854aad569cb> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-27T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a6848bc3-9f96-4bee-871d-f2c3fc344e67> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bcb639ac-7236-4770-b4a3-6209d0e8bf55> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:cfd7711d-73f6-4c49-a893-f0de95ed805d>, <urn:uuid:7786bdc0-6540-445d-b1fe-297fcc8676b5>.
<urn:uuid:7786bdc0-6540-445d-b1fe-297fcc8676b5> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cfd7711d-73f6-4c49-a893-f0de95ed805d> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3ff4714c-8c80-4f72-8ab5-72013400fda4> a odrl:LogicalConstraint;
    odrl:and <urn:uuid:d57a6c6d-5c29-472b-803c-2bbebdb7ba71>, <urn:uuid:2e783af2-1f8a-4bd8-be7a-771c27436b55>.
<urn:uuid:2e783af2-1f8a-4bd8-be7a-771c27436b55> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:gt;
    odrl:rightOperand "2024-12-31T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d57a6c6d-5c29-472b-803c-2bbebdb7ba71> a odrl:Constraint;
    odrl:leftOperand odrl:dateTime;
    odrl:operator odrl:lt;
    odrl:rightOperand "2024-12-31T17:00:00.000Z"^^xsd:dateTime.
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

<urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364> a <https://w3id.org/force/sotw#EvaluationRequest>;
    dct:issued "2016-01-01T00:00:00.000Z"^^xsd:dateTime;
    <https://w3id.org/force/sotw#requestedAction> odrl:read;
    <https://w3id.org/force/sotw#requestingParty> ex:alice;
    <https://w3id.org/force/sotw#requestedTarget> ex:x;
    dct:description "Requesting Party ALICE requests to READ resource X.".
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

<urn:uuid:88fcb9ab-2216-49df-860f-3f2a1ac5c397> a <https://w3id.org/force/sotw#SotW>;
    <https://w3id.org/force/sotw#currentTime> ex:currentTime.
ex:currentTime dct:issued "2024-02-12T05:20:10.999Z"^^xsd:dateTime.
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

<urn:uuid:36a2d233-8f9f-487b-bfe3-d4af158d7bc6> a report:PolicyReport;
    dct:created "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:29b08c0a-97ea-41b1-b8e9-88400b1230cf>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:ee31eb6e-655c-4523-ae43-e506ac6aa9da>.
<urn:uuid:ee31eb6e-655c-4523-ae43-e506ac6aa9da> a report:PermissionReport;
    report:premiseReport <urn:uuid:b6ed980e-85dd-4cf5-bca0-c1249ce4e53a>, <urn:uuid:8d729197-2624-434f-ab1e-83f5cd5ffa38>, <urn:uuid:011ad3e3-316d-4b6d-8407-e349546ac6c2>, <urn:uuid:d48df096-e4b3-4980-bfe4-abd285934fb8>;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:f5d5f6d7-ef4b-43bc-9838-b79aef793883>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:activationState report:Inactive.
<urn:uuid:b6ed980e-85dd-4cf5-bca0-c1249ce4e53a> a report:ConstraintReport;
    report:constraint <urn:uuid:fe3f0a29-307d-409d-ac71-f0f88c220cb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:or;
    report:premiseReport <urn:uuid:3a36d865-7e38-44cc-afc4-61dfa34f2ad2>, <urn:uuid:c9d001b8-4405-41fa-bf04-3d305330b285>, <urn:uuid:8d3f09b8-9dc2-45a9-b879-f56a2e3b168f>, <urn:uuid:cc03dfc0-d345-40ef-b20e-52cbc138d671>, <urn:uuid:0caf2186-47b6-46c9-a349-6ea048904d5c>, <urn:uuid:185f4bb5-e453-49f1-b950-de9cc6ac231f>, <urn:uuid:f9cbf18b-7bc3-404e-9226-b65292f3dda5>, <urn:uuid:e64c8570-a1d5-4280-843d-f24d53715ee1>, <urn:uuid:98625fd8-8816-4e65-ba82-c68e956abb11>, <urn:uuid:68c9e536-7d73-4c05-918c-823e75f97609>, <urn:uuid:60645f71-974f-4fa5-9526-b468356a6019>, <urn:uuid:370c0034-072b-4df8-a4c8-636fa9c81736>, <urn:uuid:5c439677-0b43-4986-a6ae-f01eca32d196>, <urn:uuid:67c5a34b-6198-4e4f-84ab-0af355415428>, <urn:uuid:9cb7aee3-6bf9-446a-b2b6-17de5422244e>, <urn:uuid:3ec97dbb-b372-49c3-975c-da203fe2558a>, <urn:uuid:c2b74fe9-f361-4972-a542-5f25bda6d690>, <urn:uuid:e1c0a4ba-6e00-41a2-8d37-c0fe1a7aea8a>, <urn:uuid:8be905b9-32e5-434f-a0ef-6b4a73e60283>, <urn:uuid:331383e8-0de9-4cea-b5f0-1d53ca3f1c28>, <urn:uuid:156c6ec5-db33-49c5-a2cf-5810ef9ed5de>, <urn:uuid:62f9bbe1-8c0e-4ea0-ada3-d3d67309b331>, <urn:uuid:a754c956-7d86-4643-b82d-3b02df8eaba0>, <urn:uuid:fda848b9-e03a-4760-a0c7-62138ad76d73>, <urn:uuid:6b15277d-49b6-4be5-852b-5ab3e6af33d6>, <urn:uuid:ec7035e7-6586-47ec-9782-207a6b94f499>, <urn:uuid:830f6a5f-589b-4e97-ae29-d1f0bc72b3b0>, <urn:uuid:d328b34d-a149-4d33-9b67-e265163d2c31>, <urn:uuid:60268f54-46a4-4715-a0a7-f9206f541344>, <urn:uuid:03b214b7-2964-4217-9311-b9c133d0795b>, <urn:uuid:f71670d3-3571-4119-8184-628c202d21dc>, <urn:uuid:40129df1-5c1e-4869-abc6-7882dc9500ae>, <urn:uuid:8d42e248-e2b9-4b51-9866-aa900c4d98a2>, <urn:uuid:83c365de-1ec4-42e2-beda-670bb3f383dd>, <urn:uuid:161fb780-3129-49ac-9fb2-d733d1bc5868>, <urn:uuid:23709fc5-3ed8-40ac-bf27-b42ac45f0cd9>, <urn:uuid:30a58bee-8ded-43e1-89c9-234972b9a5b7>, <urn:uuid:ec8f7dea-4b1f-4ebf-9cc7-188fef497f00>, <urn:uuid:fc368037-a798-427a-a97f-4cd56ca73553>, <urn:uuid:64a43667-578c-4136-8abc-ea19c9b8f66e>, <urn:uuid:5ec0a980-d7bb-49e7-b85d-79262bb8c519>, <urn:uuid:faa09a12-fb24-4251-8616-321ce5908079>, <urn:uuid:bfd7c9a7-c35b-4396-add1-e9b07d4f7145>, <urn:uuid:52aca75f-e1d4-4bfb-832b-3a346ba00454>, <urn:uuid:41669676-9741-4571-83b0-b3dc18bf58f5>, <urn:uuid:fd910e3c-a7ed-45bd-88e7-79337f47d7c4>, <urn:uuid:d3e7a51a-ebf0-4ae5-b09b-ce469663b47a>, <urn:uuid:c9ab2c23-58b9-46b5-8794-15ba830906fb>, <urn:uuid:51c6697d-7293-49d7-9d69-88c4ba9ea9a9>, <urn:uuid:b0e41619-0ec9-4ff7-8fcb-f71b8c9632d4>, <urn:uuid:32473e15-7809-4446-8af5-4c28f8d3850e>, <urn:uuid:cf1bbb05-24ee-4c77-93b3-cb35dabe86f0>, <urn:uuid:61c7d84c-0f53-4b52-a857-002c6cb879e7>, <urn:uuid:07c5baf2-994c-45ce-88bd-59eeb7213132>, <urn:uuid:5993b954-d5b7-4b39-8602-4560e556b0d6>, <urn:uuid:7265f087-2cf1-48f4-bb19-387e6ee2d853>, <urn:uuid:cb8a9618-671b-43ee-8daf-2ba9b2faf88c>, <urn:uuid:ffecfcff-6811-4c12-b5d0-af93958ea32d>, <urn:uuid:c20e72e0-b086-42a4-887a-26869c96b881>, <urn:uuid:a46a636a-7cdd-456e-9332-60cd1ad0eb03>, <urn:uuid:050137ea-c1d4-45ec-b068-c3395dcb6639>, <urn:uuid:9ecaed78-ce2d-4ac1-beb5-8be43de3c032>, <urn:uuid:9acbd839-04cb-4978-bab3-fc7c9806262f>, <urn:uuid:11e9a06e-a3fd-4e71-85c1-1730506952ed>, <urn:uuid:6d39a8eb-aca5-4077-989b-a6419c2c4a96>, <urn:uuid:e52998e3-35d5-4d25-9266-281c54c4d5f0>, <urn:uuid:6b794ba1-c36f-427c-8686-44176c86b59b>, <urn:uuid:77768170-c06f-45c7-9a7b-dff306b0eb9d>, <urn:uuid:b6e81d0e-870d-492e-9504-e0bda3975c9b>, <urn:uuid:4d820249-5732-47c7-af94-ab6afbd4dcce>, <urn:uuid:d2c22520-e13a-46eb-bb55-632be79c0b36>, <urn:uuid:aebe5494-c1be-4741-aeb8-d922d224d720>, <urn:uuid:2205649b-d666-4012-812e-a0e04f4700ae>, <urn:uuid:9e39bfc2-af6c-45d9-815b-05929f2ad9b3>, <urn:uuid:2572a660-0c36-4f1c-a41c-4d9a0e5dd104>, <urn:uuid:e83a27ff-5d90-4de4-a300-5f1dcfb4119f>, <urn:uuid:78ce45f1-cf52-4717-91be-a911a852da0e>, <urn:uuid:2a4f014c-3d89-4f25-b009-590dd124ebe3>, <urn:uuid:9ebf28f8-25fb-45f9-ac21-c9703601d514>, <urn:uuid:83481465-963d-4b20-a570-fdbea3426920>, <urn:uuid:03fc4c3f-b94f-4723-89bb-530fc35e8788>, <urn:uuid:a7fa0568-5059-40ba-88db-c2541ead24ae>, <urn:uuid:0a961a45-5f4e-44e6-9c08-6625af6986f0>, <urn:uuid:a859e4c2-270c-4295-8040-dfb6e13cea7d>, <urn:uuid:bbcf1b59-6c9b-4e0b-adc8-e827f38510c9>, <urn:uuid:fbc59636-5e41-4b22-a75b-f5abbba79ad9>, <urn:uuid:8f3cbc94-b645-474e-96c8-6b8496fcd545>, <urn:uuid:806c7706-a52b-491f-9a93-69f231fe8226>, <urn:uuid:d96126b8-c24f-469b-9d27-3ba6d12c3aba>, <urn:uuid:f15af99d-fd6a-4c2d-9012-9d6fba23abc5>, <urn:uuid:d9a35985-883f-40ae-a521-4cf6d0b0e465>, <urn:uuid:904dbb77-abe1-4549-8aa4-525df447ac1e>, <urn:uuid:bbb7074a-7b0d-4312-a1f3-9033e050e101>, <urn:uuid:ae5e4822-465e-4d71-87ee-c9a6fe518170>, <urn:uuid:63895e85-333e-4e0f-a507-a6f97d599b64>, <urn:uuid:2cc679b4-517c-4a02-af63-87d97cb63ca4>, <urn:uuid:c571904e-6666-40b7-8cfe-c84aaee03e11>, <urn:uuid:07e06cda-f6f8-4749-8111-973ecb476bdd>, <urn:uuid:b2836b29-183f-47ab-ba96-dd50d33ed49f>, <urn:uuid:669f96dd-48eb-4550-ba5b-98b149683acc>, <urn:uuid:1d2ec8b8-1973-41b4-ad63-4006e9e15b31>, <urn:uuid:4dba638d-39e7-456d-87b6-33bac9d42c4b>, <urn:uuid:6c928f4e-e5ad-481a-8d3b-d9096a9cbeb5>, <urn:uuid:4038a459-0428-42ef-86f7-c75d5ed1f167>, <urn:uuid:20351527-b10f-452a-9456-c86207af5937>, <urn:uuid:502b5ac3-4176-4a80-a83d-7a471176a2d6>, <urn:uuid:66e9bed8-3905-4bb4-9efa-cdcb5c36e71b>, <urn:uuid:17e271a9-8456-467b-b603-ab8922896d60>, <urn:uuid:019e1a53-7a55-43da-a4f1-7f180dd54356>, <urn:uuid:e199d025-8fcd-4eda-950c-dfbbe07fbda9>, <urn:uuid:91f6ef67-d2da-4b8f-abf9-f52a22ac4fa7>, <urn:uuid:57ef2e93-33df-480e-a06e-3e888ef71f25>, <urn:uuid:99a8bd73-9c0c-4165-919e-9e2a483639f6>, <urn:uuid:e74fbf3c-357f-4c13-9566-f22399b744ce>, <urn:uuid:e8b53e76-4268-48e1-a9de-99e3c60ecaef>, <urn:uuid:c53b4dee-49db-4ed3-ac38-95bf96e9e3fb>, <urn:uuid:8c4a5126-b300-42f4-b7a0-207b6da49123>, <urn:uuid:ad575e43-afa8-47aa-bf9f-f5b8606ec22f>, <urn:uuid:0564525d-1b98-4e3d-9d9f-b8b529cf8093>, <urn:uuid:49e6ad5e-d88d-4824-811e-1afbee61557b>, <urn:uuid:0d70d22f-0877-4cf8-a3f1-4f6530ca2259>, <urn:uuid:e5c0e7d2-260b-42d4-8955-f4d1264970b2>, <urn:uuid:4752ab5d-577e-4e62-abfb-fd8670277b77>, <urn:uuid:ee6bc3dd-3921-43b0-a0db-3ac19dd165dc>, <urn:uuid:17a4e276-e9b7-42ea-a401-c26b0406ad59>, <urn:uuid:f59511b0-03ff-441c-b143-9e69eb8ca96a>, <urn:uuid:855b671b-182f-463e-bd96-b09c1848cc48>, <urn:uuid:241c2239-d979-4d24-892a-b9f4c38097bd>, <urn:uuid:4c625c1a-709b-4696-a229-9f5f1fec43de>, <urn:uuid:60f04af4-3f6c-4b32-85f3-a60e3112c1e2>, <urn:uuid:fa9a91c0-0b07-45b1-8b13-7dd6d49251fe>, <urn:uuid:b16fc1b8-31bf-42c9-b435-bcae50eca07c>, <urn:uuid:0640f423-e849-410e-b70d-8fb603262f1f>, <urn:uuid:f964dfea-9574-430c-9d79-0afc7192940a>, <urn:uuid:b0ea24c6-62f5-4427-adc8-abed8f5846fa>, <urn:uuid:a3856d94-530d-4a69-84d2-9c0cc125f43d>, <urn:uuid:da7957ae-2371-424e-9c8d-8fa85f90dc1c>, <urn:uuid:2ef05b86-bc0d-49c1-8660-fb28b31fd098>, <urn:uuid:3fdbf6aa-a5bd-42f3-8155-44624de2b832>, <urn:uuid:f7ab09ce-c7b5-4b89-8837-1529056d9a4f>, <urn:uuid:07f867e5-d6a7-45df-a2a1-1942f67d1465>, <urn:uuid:fad33323-1bee-4812-bd7c-f8ab4e3f2ad0>, <urn:uuid:5d66ae56-5db8-4693-a583-e3cc277d9b04>, <urn:uuid:a54b47b4-c03d-4536-bc6f-f1d3bfecae34>, <urn:uuid:dc793da2-6462-49b2-986c-ec998855b97f>, <urn:uuid:9c77bd3a-4517-4d45-a213-301320640734>, <urn:uuid:8e78e4e4-d65f-4b01-9c43-192151728465>, <urn:uuid:e2e27ef2-0960-4262-a70e-a820278436fb>, <urn:uuid:d8023a3e-1d8f-48da-95a4-e5ce9f2134ea>, <urn:uuid:9c067f03-a3f5-447a-9ac0-d6a222cf3704>, <urn:uuid:50aa1640-5a26-4993-807f-0b4941366740>, <urn:uuid:e61256a7-b645-4bf7-82d8-602c56321ae0>, <urn:uuid:9b74dcc5-351a-4fa0-9601-59e044ebf8b9>, <urn:uuid:4fe2ed7e-4adf-4fa1-883a-ccc06d5c7447>, <urn:uuid:e7f9beab-9ca4-4a8a-b09f-6e1f6f6254ca>, <urn:uuid:db352bf4-7795-49ea-bec4-9310848e3586>, <urn:uuid:6e1ec871-1b44-4935-adec-c5977856b2bf>, <urn:uuid:2a3c1d59-9e1e-4730-b7fd-b3024e32ac76>, <urn:uuid:fcd6b77f-3648-4965-92c2-28ce9e21963c>, <urn:uuid:84f3b81e-9e22-4759-b041-02c8556f059f>, <urn:uuid:8728b587-f112-4fcb-9060-1f8075e72cf9>, <urn:uuid:1d8e92ea-bae9-4990-8772-1f58358d9033>, <urn:uuid:4130e759-b43c-4a16-a53d-0ee2d1f0c5cf>, <urn:uuid:017a67f7-dcaf-461b-bf7e-08def9f9a26a>, <urn:uuid:b430f887-4150-4778-b6e4-995b8c4c9b77>, <urn:uuid:7ce5a707-c444-472d-bd18-96f0e6fe64d0>, <urn:uuid:7e633ef9-e3fd-43e8-98f9-6226e9af112e>, <urn:uuid:4458dfb0-91c7-41b7-8927-3377d08f8b65>, <urn:uuid:b32e169c-0294-4aa4-8156-4bc91e24fc2c>, <urn:uuid:b86739c3-bfa9-4a69-b66c-2762be8a45e2>, <urn:uuid:55c91f84-248b-4488-8f27-9670681688c7>, <urn:uuid:764a4688-608f-4116-bacf-054cd56ea828>, <urn:uuid:d3233b32-8a92-4cfd-a080-d67a7a29ac22>, <urn:uuid:536188cf-bd04-4181-9581-3913c482d795>, <urn:uuid:6fdb11b5-6954-42eb-a90c-327fac10cd39>, <urn:uuid:b5033115-64e3-4186-88ce-ac5c9da74243>, <urn:uuid:2201c101-6b45-450a-bb12-2ec96a1697c6>, <urn:uuid:4b5240ac-c8af-4cca-aeff-47fcd3483738>, <urn:uuid:63f4c228-12e0-48f8-b71c-89196c3c73bc>, <urn:uuid:472cac68-dfc5-4a11-8ece-38fac7cdf9b1>, <urn:uuid:aa5ac641-9da7-45a2-bb12-a8ab6992cb6f>, <urn:uuid:8b98f1f2-d103-4f09-8b17-d729dda4cd90>, <urn:uuid:f96caf91-c909-4577-b7b6-623dba4946bb>, <urn:uuid:4e19ab06-f057-4869-808d-0e9f4110d780>, <urn:uuid:f103ddce-97cb-4ec4-afdc-b0573487b470>, <urn:uuid:2abcd5a8-2815-4531-a5c6-0932ad6f123e>, <urn:uuid:749a0288-735c-4d00-b10a-54cf820aa4f2>, <urn:uuid:aa653972-8502-412f-9ae5-d8d2c920b65b>, <urn:uuid:b2be9eb5-16f3-4638-9e0a-8c6e19b705cd>, <urn:uuid:15b4336e-6283-43d5-b867-fc929fe7d286>, <urn:uuid:9bdf6a3a-c7ab-411c-9a8a-bb3cd2b0982f>, <urn:uuid:df575cdc-7920-409d-ac97-17f989221fc8>, <urn:uuid:1b330baa-15c9-42ae-98b2-f2e02a64522b>, <urn:uuid:5f5d999a-4e0b-41c8-a0a6-efb3b085cf75>, <urn:uuid:b0dd2c20-1322-4545-8deb-966a45341c86>, <urn:uuid:166a7957-a019-4cbc-9705-b94e71a8198e>, <urn:uuid:7e55df4f-8dc9-443a-805b-154e7ce7d9e3>, <urn:uuid:53129dee-3a6c-4b6b-a68f-fef964e1d7ca>, <urn:uuid:e3bdeab1-3971-4f7b-b2be-53722d2e9bb8>, <urn:uuid:54d58fa5-c986-427f-b109-9f8984b9b26a>, <urn:uuid:2e4abd82-8933-4cbc-a021-02cc14ca7a52>, <urn:uuid:d4d260a0-2bdf-4aea-bf62-253fca733216>, <urn:uuid:18298747-8ef7-4a64-b055-f1fc11cd982b>, <urn:uuid:52d28fd9-e206-41c0-9485-f73c1755ba27>, <urn:uuid:8e53660a-80d5-4e24-85b6-c60af867d531>, <urn:uuid:0df05757-647c-4494-8511-5ac3c374b5fe>, <urn:uuid:1c49a094-07ec-462b-b4af-b55e56f618be>, <urn:uuid:21ecd3d4-6c23-4313-97ea-0f29296044fc>, <urn:uuid:7655e82c-b9af-4691-a3b5-13e95370add5>, <urn:uuid:745a2e5f-1e38-445a-905f-5a2a83e42f35>, <urn:uuid:ee345f21-00d4-47e8-8d52-a47828f8b47b>, <urn:uuid:34fc1086-d472-4700-a2d1-fa5121e920c1>, <urn:uuid:d45d98e9-9dfc-4dd0-9582-ec1f7f5f0661>, <urn:uuid:d2403b03-8a5e-4f95-89e0-dbcd6ae28673>, <urn:uuid:b44215bd-e946-4117-9d91-830584baef5b>, <urn:uuid:c373d269-4353-4fb0-8429-f05ccae7857f>, <urn:uuid:0235d5da-b849-45c0-a512-83ea42313793>, <urn:uuid:e4eac228-9b31-46d3-b1ea-b4c186a087d0>, <urn:uuid:2bc6dd50-5438-4c4a-b118-6ded101e3158>, <urn:uuid:c3bbf868-4730-420d-9ea5-62cb59f0e9f0>, <urn:uuid:645c8064-cf03-46e1-b61e-803e1f40fff4>, <urn:uuid:9a4d94b2-3c5c-472e-bbb8-67c8cd560215>, <urn:uuid:3d07bcf7-a82b-4292-84f3-2f1595fb7e96>, <urn:uuid:c12f4d13-4801-46ca-b59d-1dc44b43dbdb>, <urn:uuid:c0c2e87c-9115-4c61-a2c4-ada76503fd94>, <urn:uuid:3d8a7d58-5fc5-4964-adc4-c8fb44cfcfe0>, <urn:uuid:4f615727-84f5-4a90-89c3-38d4d724778c>, <urn:uuid:9fc597e2-02c3-4636-9ca2-755490a5087b>, <urn:uuid:f6ea1040-1732-4e1c-a084-3e21d608f5ba>, <urn:uuid:cd7334e9-c87c-4372-b63f-ab877dd33ac5>, <urn:uuid:e1220290-2ead-45fc-b292-153b2d6749b4>, <urn:uuid:f8dd0f1d-5b17-44c3-b2ca-4ad9f1d676a4>, <urn:uuid:0be5916b-3f41-4800-a46b-6be7b2b07be4>, <urn:uuid:a2462251-e081-42d3-a90f-2cbb31abd587>, <urn:uuid:e075c533-3d48-4f04-ae89-28c43c4537f2>, <urn:uuid:621a2880-8293-4988-b368-281945fcec68>, <urn:uuid:419c38ac-6b25-4acd-b508-592bcb48bb89>, <urn:uuid:1c48b8d1-c014-4566-98bb-6aa270a6f5d4>, <urn:uuid:8d747ac5-717c-48bd-8087-6e87a53b6017>, <urn:uuid:df2c6a97-c6e0-49c7-8347-b0f91f60fbf1>, <urn:uuid:116b4842-88d7-4cd5-b026-65a30feae422>, <urn:uuid:dcdfbbed-c6a0-490b-b350-f0f052b216c1>, <urn:uuid:7cfd91ba-66f2-4386-a592-d8106725b189>, <urn:uuid:915598e4-2af4-4769-9052-a4f7ddc839bd>, <urn:uuid:215c3fc6-e3af-486e-ad3f-167e25265b48>, <urn:uuid:8c2440db-e065-4283-9da1-3bd7f65a9403>, <urn:uuid:7d0c8ab4-8a93-4976-bcea-7b934a6059b5>, <urn:uuid:1c1d374a-fb7b-4edc-8993-2791b7079afe>, <urn:uuid:66ad0eaf-c51c-48ea-af1c-180bc5b71db0>, <urn:uuid:bdd9d941-fd61-42bc-bc31-5628303cf275>, <urn:uuid:0fb10ac8-0fce-4acd-8dfe-cd60c3aecdee>, <urn:uuid:fa27b64f-9d44-45cd-b931-dffdeed7d29f>, <urn:uuid:47425ca9-86aa-46eb-94be-3330692cd22c>, <urn:uuid:cb5b2bf6-cbd8-4ed0-8806-e50a02b2a4c5>, <urn:uuid:f2107630-15b1-47b5-a13d-bf4ba5a41278>, <urn:uuid:0d0e0382-99f2-49d9-b3ee-847fec1e5cda>, <urn:uuid:c16dad9d-5410-4e40-b332-4349813f689a>, <urn:uuid:a6cb2bd4-5df7-41d9-acd6-057e4b501af6>, <urn:uuid:2ef3ee9a-84b6-40e6-b8e6-65cf8241e0e4>, <urn:uuid:bab97cf4-34cd-4661-a57c-74d240d3c295>, <urn:uuid:450ab0ad-85a4-4f63-a751-e30ccc328d46>, <urn:uuid:0bfdf364-d784-44f0-8dd5-953b745c3191>.
<urn:uuid:3a36d865-7e38-44cc-afc4-61dfa34f2ad2> a report:ConstraintReport;
    report:constraint <urn:uuid:3e55a9e0-a368-495c-b378-ef1fc7d28423>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:55d070f8-f2d6-42e4-b055-7edd49cc5eb0>, <urn:uuid:6cab887b-a7d3-4717-a740-ca17a83d0e7c>.
<urn:uuid:55d070f8-f2d6-42e4-b055-7edd49cc5eb0> a report:ConstraintReport;
    report:constraint <urn:uuid:ef1995be-0881-4d8b-b268-728b5478983f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6cab887b-a7d3-4717-a740-ca17a83d0e7c> a report:ConstraintReport;
    report:constraint <urn:uuid:6419ce9e-6e46-4d73-a30e-4683f1f29c73>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c9d001b8-4405-41fa-bf04-3d305330b285> a report:ConstraintReport;
    report:constraint <urn:uuid:3a0b7e60-201d-4fc8-b1f7-4f5dd6df5acd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3a0e36d1-0b44-4acb-8c4d-4a943f6215ce>, <urn:uuid:6e9137fa-27c0-4338-85bb-c0f8389f90fa>.
<urn:uuid:3a0e36d1-0b44-4acb-8c4d-4a943f6215ce> a report:ConstraintReport;
    report:constraint <urn:uuid:89691371-6a64-460e-8459-627c7eb0a822>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6e9137fa-27c0-4338-85bb-c0f8389f90fa> a report:ConstraintReport;
    report:constraint <urn:uuid:19203254-c14c-4072-ad00-a0f5b643967d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8d3f09b8-9dc2-45a9-b879-f56a2e3b168f> a report:ConstraintReport;
    report:constraint <urn:uuid:4040ebf0-21ae-4d2f-b0d0-c94bd10500b4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:13f4aee2-7d5e-473d-88a8-f5de765cc574>, <urn:uuid:d7e97628-c3f0-4612-bdf4-430cc28372a6>.
<urn:uuid:13f4aee2-7d5e-473d-88a8-f5de765cc574> a report:ConstraintReport;
    report:constraint <urn:uuid:2ef91923-c928-4094-8952-de72b1624344>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d7e97628-c3f0-4612-bdf4-430cc28372a6> a report:ConstraintReport;
    report:constraint <urn:uuid:b3e06292-fe42-411e-81e5-ac4a27849341>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cc03dfc0-d345-40ef-b20e-52cbc138d671> a report:ConstraintReport;
    report:constraint <urn:uuid:4549fbe1-ea71-4b56-983d-52ce9f494d9d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8fce354f-72d3-4e73-b04c-71400628e17d>, <urn:uuid:aeeb8939-57c0-42aa-b0b1-2ed9aec643ab>.
<urn:uuid:8fce354f-72d3-4e73-b04c-71400628e17d> a report:ConstraintReport;
    report:constraint <urn:uuid:c14144f3-1bb7-4cb1-aaac-a9fd7cb202dd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:aeeb8939-57c0-42aa-b0b1-2ed9aec643ab> a report:ConstraintReport;
    report:constraint <urn:uuid:2d2ebd43-f310-496a-ada9-5fc7b0e9651e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0caf2186-47b6-46c9-a349-6ea048904d5c> a report:ConstraintReport;
    report:constraint <urn:uuid:f2c2a215-4758-4b95-8a72-d780c955340a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:678f98b2-e44d-4500-ba81-2803f0e1d3c2>, <urn:uuid:a8c13256-f736-494d-823f-d5066b9ebfa7>.
<urn:uuid:678f98b2-e44d-4500-ba81-2803f0e1d3c2> a report:ConstraintReport;
    report:constraint <urn:uuid:776c51ed-bcea-48ac-858c-da60e55aa4e0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a8c13256-f736-494d-823f-d5066b9ebfa7> a report:ConstraintReport;
    report:constraint <urn:uuid:fa5f1424-9d9a-43d4-8d0c-0be2be49d3c6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:185f4bb5-e453-49f1-b950-de9cc6ac231f> a report:ConstraintReport;
    report:constraint <urn:uuid:6bf766d8-9bc9-4d02-8e4f-7d27c52ae51c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fe11af91-3f85-4488-8493-adc21f2d6cfa>, <urn:uuid:ee78ca69-086f-47f0-a682-ae84761c460b>.
<urn:uuid:fe11af91-3f85-4488-8493-adc21f2d6cfa> a report:ConstraintReport;
    report:constraint <urn:uuid:08b3d898-c618-41ca-b513-c2be9d02849c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ee78ca69-086f-47f0-a682-ae84761c460b> a report:ConstraintReport;
    report:constraint <urn:uuid:78e3c6b4-9733-426c-8757-6ea237ce105a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f9cbf18b-7bc3-404e-9226-b65292f3dda5> a report:ConstraintReport;
    report:constraint <urn:uuid:e4bbfc36-01eb-438d-82d5-764eaf6f4b38>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c9a27d6d-715e-4562-833b-a188196c72ed>, <urn:uuid:e43917f6-c76d-4884-8ffe-e708f0bcc215>.
<urn:uuid:c9a27d6d-715e-4562-833b-a188196c72ed> a report:ConstraintReport;
    report:constraint <urn:uuid:487e135e-b283-4173-9c03-c734da041b90>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e43917f6-c76d-4884-8ffe-e708f0bcc215> a report:ConstraintReport;
    report:constraint <urn:uuid:847f28b3-0529-4cf7-8c4e-ec4128c1d01d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e64c8570-a1d5-4280-843d-f24d53715ee1> a report:ConstraintReport;
    report:constraint <urn:uuid:ae5d7d97-5e92-461a-a3ca-5653a7e87292>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8b7e4b90-49bb-44cf-857b-62a874f0f91a>, <urn:uuid:9819f0e4-24a0-4fe9-a3df-b1f8e03528e9>.
<urn:uuid:8b7e4b90-49bb-44cf-857b-62a874f0f91a> a report:ConstraintReport;
    report:constraint <urn:uuid:5cd34117-bffc-4774-a7a7-4e037840aaf2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9819f0e4-24a0-4fe9-a3df-b1f8e03528e9> a report:ConstraintReport;
    report:constraint <urn:uuid:0353e399-556d-45d2-b3ec-9568ded4b6a3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:98625fd8-8816-4e65-ba82-c68e956abb11> a report:ConstraintReport;
    report:constraint <urn:uuid:027b62aa-1ecc-475b-a5d0-fe358d8bd175>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0c6894bb-b621-444e-99aa-09ffe5363945>, <urn:uuid:5d62cee8-6718-40c7-add6-4a7fd4da3327>.
<urn:uuid:0c6894bb-b621-444e-99aa-09ffe5363945> a report:ConstraintReport;
    report:constraint <urn:uuid:43fabba8-3c95-442e-83d9-f713a81f9400>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5d62cee8-6718-40c7-add6-4a7fd4da3327> a report:ConstraintReport;
    report:constraint <urn:uuid:a763d179-99e0-416c-8533-b8e762ca5e49>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:68c9e536-7d73-4c05-918c-823e75f97609> a report:ConstraintReport;
    report:constraint <urn:uuid:66138113-683f-420e-ad70-d3d17d234773>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:15df86fc-fd19-4bd4-a03e-592fbd3c63fa>, <urn:uuid:5891bc87-41be-4396-941e-ed01084a7227>.
<urn:uuid:15df86fc-fd19-4bd4-a03e-592fbd3c63fa> a report:ConstraintReport;
    report:constraint <urn:uuid:47d65afd-514d-489a-b7ef-17b545de66cf>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5891bc87-41be-4396-941e-ed01084a7227> a report:ConstraintReport;
    report:constraint <urn:uuid:12481c7b-2b7d-4215-87bf-864c9d45bfff>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:60645f71-974f-4fa5-9526-b468356a6019> a report:ConstraintReport;
    report:constraint <urn:uuid:5f6bab6e-bf48-44c3-84fe-ccbc610d7d5e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6f74cbfd-273d-4222-a1f6-0fb73ccb5f8f>, <urn:uuid:70a752ca-6b77-4fb7-ad62-408a161f4287>.
<urn:uuid:6f74cbfd-273d-4222-a1f6-0fb73ccb5f8f> a report:ConstraintReport;
    report:constraint <urn:uuid:10e7d6bc-a15d-4f5b-ad72-43815be8a42f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:70a752ca-6b77-4fb7-ad62-408a161f4287> a report:ConstraintReport;
    report:constraint <urn:uuid:4cf20076-3dc5-4d99-ab65-209cb7daf4b8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:370c0034-072b-4df8-a4c8-636fa9c81736> a report:ConstraintReport;
    report:constraint <urn:uuid:cc4e7745-6e96-4d7a-b1af-38499fdd6cad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d2db65d2-a897-428e-b2a9-b6063a4f6b63>, <urn:uuid:373bf4c3-bbf5-47d0-a0ba-039f49a19c47>.
<urn:uuid:d2db65d2-a897-428e-b2a9-b6063a4f6b63> a report:ConstraintReport;
    report:constraint <urn:uuid:56584822-db86-4a89-8d1e-4f7f58c5e163>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:373bf4c3-bbf5-47d0-a0ba-039f49a19c47> a report:ConstraintReport;
    report:constraint <urn:uuid:4938531d-6a55-481b-9925-d0870c9386df>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5c439677-0b43-4986-a6ae-f01eca32d196> a report:ConstraintReport;
    report:constraint <urn:uuid:d5f55ddb-27ae-479e-a376-b8fe2e38e1ed>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fa565d6b-cdc0-494b-83a7-b9599baaf7a4>, <urn:uuid:bf9ac53d-0462-4e20-a54a-38d016e986e1>.
<urn:uuid:fa565d6b-cdc0-494b-83a7-b9599baaf7a4> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d40525-4638-4c8a-804d-16e0e175feb8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bf9ac53d-0462-4e20-a54a-38d016e986e1> a report:ConstraintReport;
    report:constraint <urn:uuid:80d8392e-509f-447d-815a-a7f469b14e8a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:67c5a34b-6198-4e4f-84ab-0af355415428> a report:ConstraintReport;
    report:constraint <urn:uuid:42e65efc-e205-490a-ba22-f7e5daa11eb2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:420c7d40-cd51-4d09-9147-9ac49b320872>, <urn:uuid:70c507cc-49eb-47d6-8931-6041cdc4f9c7>.
<urn:uuid:420c7d40-cd51-4d09-9147-9ac49b320872> a report:ConstraintReport;
    report:constraint <urn:uuid:78191c34-5bcf-48ac-8ae2-93c726051f91>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:70c507cc-49eb-47d6-8931-6041cdc4f9c7> a report:ConstraintReport;
    report:constraint <urn:uuid:80aa9457-257e-47f7-918b-c7bc5d1ab3f7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9cb7aee3-6bf9-446a-b2b6-17de5422244e> a report:ConstraintReport;
    report:constraint <urn:uuid:e60f11c7-561f-4459-9e9e-4e5f037006c0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:90cf3d6c-68bb-4df4-8c60-ccf82995ca5d>, <urn:uuid:c1ea259f-03e2-45f5-b8ea-720ccd5375f9>.
<urn:uuid:90cf3d6c-68bb-4df4-8c60-ccf82995ca5d> a report:ConstraintReport;
    report:constraint <urn:uuid:0596f841-97e1-4aa5-be25-4e7a7695563b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c1ea259f-03e2-45f5-b8ea-720ccd5375f9> a report:ConstraintReport;
    report:constraint <urn:uuid:163ffffb-be82-42cb-ac47-cbefe9de6b5a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3ec97dbb-b372-49c3-975c-da203fe2558a> a report:ConstraintReport;
    report:constraint <urn:uuid:4d8d327a-4d3c-4b09-856b-39b67261bec6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:38d41e56-d7e2-4dc1-9b0a-01c8e1a11fb6>, <urn:uuid:977d2f4f-08df-4763-b469-2f9027414cc8>.
<urn:uuid:38d41e56-d7e2-4dc1-9b0a-01c8e1a11fb6> a report:ConstraintReport;
    report:constraint <urn:uuid:a0268f4b-c1f1-4db8-a5ef-85ac40c3592a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:977d2f4f-08df-4763-b469-2f9027414cc8> a report:ConstraintReport;
    report:constraint <urn:uuid:908dc400-efdd-44f2-a4b0-428abf72a88f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c2b74fe9-f361-4972-a542-5f25bda6d690> a report:ConstraintReport;
    report:constraint <urn:uuid:3fc45405-5ebb-41b1-a8d6-ab0bbb0d7857>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3d5cb9f7-fb83-4520-af42-2232ecc8dd62>, <urn:uuid:2d49215e-6145-483b-8f86-a69a48334ef4>.
<urn:uuid:3d5cb9f7-fb83-4520-af42-2232ecc8dd62> a report:ConstraintReport;
    report:constraint <urn:uuid:dffa26e4-c85f-4dfa-81e0-c52024dffb1e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2d49215e-6145-483b-8f86-a69a48334ef4> a report:ConstraintReport;
    report:constraint <urn:uuid:41d602b1-a246-4b40-9086-40edd44ab0c3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e1c0a4ba-6e00-41a2-8d37-c0fe1a7aea8a> a report:ConstraintReport;
    report:constraint <urn:uuid:925027e7-3d8f-4b79-9558-e7ec0087c87f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cfb096a3-ff3c-4fc2-9813-c9466c3e6a27>, <urn:uuid:a60ffe1e-e04d-43c2-8cf1-96566acc0ee5>.
<urn:uuid:cfb096a3-ff3c-4fc2-9813-c9466c3e6a27> a report:ConstraintReport;
    report:constraint <urn:uuid:0a8a0e76-128b-4856-8606-3750573717cc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a60ffe1e-e04d-43c2-8cf1-96566acc0ee5> a report:ConstraintReport;
    report:constraint <urn:uuid:29faea6e-0504-42b0-9751-2a2d87667ced>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8be905b9-32e5-434f-a0ef-6b4a73e60283> a report:ConstraintReport;
    report:constraint <urn:uuid:63936891-0ef5-48eb-9d64-9bf5b2778502>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0235677e-b16e-4ba3-869a-d52af098a90e>, <urn:uuid:6f07a78e-cffa-4a84-8591-d53090945db8>.
<urn:uuid:0235677e-b16e-4ba3-869a-d52af098a90e> a report:ConstraintReport;
    report:constraint <urn:uuid:9c9a514a-5247-44d8-b5d4-98b4b44a2e19>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6f07a78e-cffa-4a84-8591-d53090945db8> a report:ConstraintReport;
    report:constraint <urn:uuid:b07ea640-d092-4051-83d6-4c60f49360d9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:331383e8-0de9-4cea-b5f0-1d53ca3f1c28> a report:ConstraintReport;
    report:constraint <urn:uuid:9f77c162-b09e-4b3d-9c70-52e4f7fae8f4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3ad35920-96be-4695-8667-2ceb26597d05>, <urn:uuid:c6e8e20f-6c30-463d-b225-995e0a6a1557>.
<urn:uuid:3ad35920-96be-4695-8667-2ceb26597d05> a report:ConstraintReport;
    report:constraint <urn:uuid:2869ac16-3e1a-49cd-aa7b-a72da02f3c79>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c6e8e20f-6c30-463d-b225-995e0a6a1557> a report:ConstraintReport;
    report:constraint <urn:uuid:343f01a8-53a6-41b6-91d3-e2d717a52f7e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:156c6ec5-db33-49c5-a2cf-5810ef9ed5de> a report:ConstraintReport;
    report:constraint <urn:uuid:fd5037f5-3660-4382-b5c5-c29af7d01e58>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:32046ec8-c9aa-4e7c-a8dd-624124bea2d1>, <urn:uuid:deedf3d4-a6be-4cf6-80b5-dffdb15875e3>.
<urn:uuid:32046ec8-c9aa-4e7c-a8dd-624124bea2d1> a report:ConstraintReport;
    report:constraint <urn:uuid:ed665aa5-cd4e-46c7-9dbe-1e3cf1ec9452>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:deedf3d4-a6be-4cf6-80b5-dffdb15875e3> a report:ConstraintReport;
    report:constraint <urn:uuid:74a4eb82-43a2-4c77-bc68-78e9814f060b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:62f9bbe1-8c0e-4ea0-ada3-d3d67309b331> a report:ConstraintReport;
    report:constraint <urn:uuid:668c4199-db43-4336-9edf-82eb3a87f336>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:49e7297b-1a85-4a44-b9a7-34cf560216c6>, <urn:uuid:0472ba57-a7aa-4180-97a3-ee46ab9c95bc>.
<urn:uuid:49e7297b-1a85-4a44-b9a7-34cf560216c6> a report:ConstraintReport;
    report:constraint <urn:uuid:b72560f8-09f8-4331-a676-ab7bc3ea27ab>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0472ba57-a7aa-4180-97a3-ee46ab9c95bc> a report:ConstraintReport;
    report:constraint <urn:uuid:f65192ac-9654-457f-9657-dd875c4f3ac4>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a754c956-7d86-4643-b82d-3b02df8eaba0> a report:ConstraintReport;
    report:constraint <urn:uuid:99b59b86-e907-4eb3-b6e2-2eb826d8f887>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6d59537a-263e-4f35-929d-7b57f03ea301>, <urn:uuid:9ebd3f82-5d4a-4836-88f4-8a170ab77ccf>.
<urn:uuid:6d59537a-263e-4f35-929d-7b57f03ea301> a report:ConstraintReport;
    report:constraint <urn:uuid:6073e4d7-d66d-4bb0-9ac9-66f8d27781f3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9ebd3f82-5d4a-4836-88f4-8a170ab77ccf> a report:ConstraintReport;
    report:constraint <urn:uuid:791a6428-bd9b-45a7-a4b3-77b5d1da2c09>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-31T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fda848b9-e03a-4760-a0c7-62138ad76d73> a report:ConstraintReport;
    report:constraint <urn:uuid:b074c5d1-ec4b-49b6-8404-3454c20c5fee>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2cd717f0-3503-4fc7-9e13-55671cd165c5>, <urn:uuid:ea9cc279-d0e7-4957-9b58-750cb2834d2e>.
<urn:uuid:2cd717f0-3503-4fc7-9e13-55671cd165c5> a report:ConstraintReport;
    report:constraint <urn:uuid:4640a2df-1852-40a1-a6ca-356cbc2c10b0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ea9cc279-d0e7-4957-9b58-750cb2834d2e> a report:ConstraintReport;
    report:constraint <urn:uuid:94ac7531-23c3-42aa-a0d1-7fdb790b3e94>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6b15277d-49b6-4be5-852b-5ab3e6af33d6> a report:ConstraintReport;
    report:constraint <urn:uuid:93760dc7-3009-45c0-ac6a-093b6ed9ae31>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:88ebda3f-0d02-420b-9243-e53f6ca29da7>, <urn:uuid:0737967b-8970-4161-abdc-9181a890e887>.
<urn:uuid:88ebda3f-0d02-420b-9243-e53f6ca29da7> a report:ConstraintReport;
    report:constraint <urn:uuid:72b33877-3fdb-450c-911b-1c0d233d53d9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0737967b-8970-4161-abdc-9181a890e887> a report:ConstraintReport;
    report:constraint <urn:uuid:b24af580-eed9-44e4-bd2b-a4577169d1a5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ec7035e7-6586-47ec-9782-207a6b94f499> a report:ConstraintReport;
    report:constraint <urn:uuid:93780389-290c-4574-8814-7da01c1de167>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5ffb5e47-2f09-440e-9828-7dbd64b9c933>, <urn:uuid:df08af2b-0289-41cd-8445-0417ab309a79>.
<urn:uuid:5ffb5e47-2f09-440e-9828-7dbd64b9c933> a report:ConstraintReport;
    report:constraint <urn:uuid:dc1a7d14-3a99-4651-bcf0-5cf40b498b26>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:df08af2b-0289-41cd-8445-0417ab309a79> a report:ConstraintReport;
    report:constraint <urn:uuid:b4843a83-39df-4cf0-892f-f04a6da1f8e8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:830f6a5f-589b-4e97-ae29-d1f0bc72b3b0> a report:ConstraintReport;
    report:constraint <urn:uuid:502793e8-9aa3-4c1b-8566-f3310fcf84cd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bd95fa67-2a84-4763-9d7b-420ed5dc4c1b>, <urn:uuid:527636aa-9da7-436e-b8ec-a009d3c8a723>.
<urn:uuid:bd95fa67-2a84-4763-9d7b-420ed5dc4c1b> a report:ConstraintReport;
    report:constraint <urn:uuid:2c77d2fb-37ec-4338-94ec-cc1dc84ab103>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:527636aa-9da7-436e-b8ec-a009d3c8a723> a report:ConstraintReport;
    report:constraint <urn:uuid:79360e32-f92b-4ab7-9655-1cb750852c9a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d328b34d-a149-4d33-9b67-e265163d2c31> a report:ConstraintReport;
    report:constraint <urn:uuid:9ecc0a82-8017-4b1f-87e2-10f326f7fe03>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a0c17ec1-5695-4e43-b7eb-c00875c5460f>, <urn:uuid:42238d88-5f2d-4674-ade8-a8572b8e3df9>.
<urn:uuid:a0c17ec1-5695-4e43-b7eb-c00875c5460f> a report:ConstraintReport;
    report:constraint <urn:uuid:cbed4529-9c7e-4bd7-af19-1274fad6968f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:42238d88-5f2d-4674-ade8-a8572b8e3df9> a report:ConstraintReport;
    report:constraint <urn:uuid:8ae88552-d4ac-4cde-8f82-3dd1718b398a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:60268f54-46a4-4715-a0a7-f9206f541344> a report:ConstraintReport;
    report:constraint <urn:uuid:86330f57-8d3b-4305-8b28-7757bf0913a7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3760b5a5-f4af-48bd-ae3c-8a9f3accfb15>, <urn:uuid:cd5a38c5-bcf8-4a71-9c62-3557589d338a>.
<urn:uuid:3760b5a5-f4af-48bd-ae3c-8a9f3accfb15> a report:ConstraintReport;
    report:constraint <urn:uuid:eb8c09ec-ed48-4014-88cc-d29a2f148bbf>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cd5a38c5-bcf8-4a71-9c62-3557589d338a> a report:ConstraintReport;
    report:constraint <urn:uuid:a1fa3b90-08b4-4c48-8217-ba1b8f3bd261>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:03b214b7-2964-4217-9311-b9c133d0795b> a report:ConstraintReport;
    report:constraint <urn:uuid:aa961acb-59e1-404b-abf8-db7b2da9ffd9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bf27eb97-5b59-45d1-81c1-dc332a568efa>, <urn:uuid:5f35bf28-58ba-4e13-8306-2c7784c5594f>.
<urn:uuid:bf27eb97-5b59-45d1-81c1-dc332a568efa> a report:ConstraintReport;
    report:constraint <urn:uuid:e58ebe3e-93de-47a4-929a-b84070c50329>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5f35bf28-58ba-4e13-8306-2c7784c5594f> a report:ConstraintReport;
    report:constraint <urn:uuid:adf26737-3ead-4382-b9fe-6d30792a792e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f71670d3-3571-4119-8184-628c202d21dc> a report:ConstraintReport;
    report:constraint <urn:uuid:f40cc880-e1ff-4401-8d48-087cf5bb1ba6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3991cfee-9920-43f1-b513-2f95968e3ded>, <urn:uuid:92974993-f9ba-4cf1-bc7b-3edebdfbb299>.
<urn:uuid:3991cfee-9920-43f1-b513-2f95968e3ded> a report:ConstraintReport;
    report:constraint <urn:uuid:598a801b-62a9-40ec-bdf0-15e8bb78cd3f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:92974993-f9ba-4cf1-bc7b-3edebdfbb299> a report:ConstraintReport;
    report:constraint <urn:uuid:cca97230-a84c-4eb7-b09f-68acab42a773>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:40129df1-5c1e-4869-abc6-7882dc9500ae> a report:ConstraintReport;
    report:constraint <urn:uuid:59b07fb2-5acc-4f4b-83a7-36569246fde9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f8107eda-41c6-40e6-b7af-6674d1051f5a>, <urn:uuid:718b79be-e869-40ec-9394-49f6b3d9c312>.
<urn:uuid:f8107eda-41c6-40e6-b7af-6674d1051f5a> a report:ConstraintReport;
    report:constraint <urn:uuid:6dc086d4-fcdc-4f5f-895f-82a69223d526>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:718b79be-e869-40ec-9394-49f6b3d9c312> a report:ConstraintReport;
    report:constraint <urn:uuid:c7ea6260-d8c6-4219-ab0e-5a5c988b7e08>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8d42e248-e2b9-4b51-9866-aa900c4d98a2> a report:ConstraintReport;
    report:constraint <urn:uuid:4d46f200-3390-4b59-bc09-ed4b50729e50>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:139adbc4-8918-4852-acf2-1d7f80e089d5>, <urn:uuid:4c830e6e-7f72-4fc1-a069-c85db8d2b338>.
<urn:uuid:139adbc4-8918-4852-acf2-1d7f80e089d5> a report:ConstraintReport;
    report:constraint <urn:uuid:87344fad-e07f-4d6a-9f96-274248f7c49f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4c830e6e-7f72-4fc1-a069-c85db8d2b338> a report:ConstraintReport;
    report:constraint <urn:uuid:f8244460-02f4-4768-8066-39f8edda6653>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:83c365de-1ec4-42e2-beda-670bb3f383dd> a report:ConstraintReport;
    report:constraint <urn:uuid:7655c3fd-75e1-4da1-9cfd-2e9cd230ae8f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d29babe4-ea0a-4060-8a2a-82651d6f1410>, <urn:uuid:0db58c32-5465-4858-89b0-195e6f0457f0>.
<urn:uuid:d29babe4-ea0a-4060-8a2a-82651d6f1410> a report:ConstraintReport;
    report:constraint <urn:uuid:41231ddb-58b0-4cb3-997b-b6e54dcf24cb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0db58c32-5465-4858-89b0-195e6f0457f0> a report:ConstraintReport;
    report:constraint <urn:uuid:bfca2595-5a81-4e54-89e1-cc0b2caf602a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:161fb780-3129-49ac-9fb2-d733d1bc5868> a report:ConstraintReport;
    report:constraint <urn:uuid:2abc17af-ec27-4334-81ec-eddba73cba51>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:eeb67f89-0cf8-4aa9-8312-bc4c8ae9cbe7>, <urn:uuid:6237479c-6b99-4332-bb47-7b52fcd19755>.
<urn:uuid:eeb67f89-0cf8-4aa9-8312-bc4c8ae9cbe7> a report:ConstraintReport;
    report:constraint <urn:uuid:28dc8bd5-ace0-4ae2-9e8a-b9a787b0fb02>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6237479c-6b99-4332-bb47-7b52fcd19755> a report:ConstraintReport;
    report:constraint <urn:uuid:cf11b614-0228-4363-9748-b235b38ae30f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:23709fc5-3ed8-40ac-bf27-b42ac45f0cd9> a report:ConstraintReport;
    report:constraint <urn:uuid:97e7e460-8655-4b64-b3f1-1d89f6e0c4a0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8d906bd1-6ccb-404f-ac91-a494a45e5f1d>, <urn:uuid:4b5bbb4f-b86b-418a-a55c-3624a8c11467>.
<urn:uuid:8d906bd1-6ccb-404f-ac91-a494a45e5f1d> a report:ConstraintReport;
    report:constraint <urn:uuid:a295e7a2-11d4-443d-b0fc-27b5475692b3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4b5bbb4f-b86b-418a-a55c-3624a8c11467> a report:ConstraintReport;
    report:constraint <urn:uuid:c2ed777e-d6d3-45ef-9449-038241f6eaa1>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:30a58bee-8ded-43e1-89c9-234972b9a5b7> a report:ConstraintReport;
    report:constraint <urn:uuid:7e2c2746-5afb-444f-a09f-73af2b79e702>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bf00103c-d6c3-4b8a-891e-a9e3d2ac27db>, <urn:uuid:7af42d41-b848-4ec7-9e6f-1e385bc3d0c0>.
<urn:uuid:bf00103c-d6c3-4b8a-891e-a9e3d2ac27db> a report:ConstraintReport;
    report:constraint <urn:uuid:d2622e26-c235-4154-802f-1cc43cce0e9c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7af42d41-b848-4ec7-9e6f-1e385bc3d0c0> a report:ConstraintReport;
    report:constraint <urn:uuid:afdd3398-8867-49c8-adb9-8c58591d38da>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ec8f7dea-4b1f-4ebf-9cc7-188fef497f00> a report:ConstraintReport;
    report:constraint <urn:uuid:0eb27dd6-ebfd-41e1-bee1-ccf4f9567a61>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1bf71cd8-a1a0-4561-a562-e63739fb8316>, <urn:uuid:a6e9902d-9d6d-4dfd-bc83-c04ffab28f38>.
<urn:uuid:1bf71cd8-a1a0-4561-a562-e63739fb8316> a report:ConstraintReport;
    report:constraint <urn:uuid:86aa8499-9037-417f-8715-75222b9ebe30>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a6e9902d-9d6d-4dfd-bc83-c04ffab28f38> a report:ConstraintReport;
    report:constraint <urn:uuid:b2758ead-13a0-41c4-add8-252524e9f8a0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fc368037-a798-427a-a97f-4cd56ca73553> a report:ConstraintReport;
    report:constraint <urn:uuid:29df4b6d-1b30-4619-9736-9910241d9c0c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f0f59fde-1e2f-4aef-8a44-56a368b82936>, <urn:uuid:fc288f11-d129-465c-a005-9278df43d33b>.
<urn:uuid:f0f59fde-1e2f-4aef-8a44-56a368b82936> a report:ConstraintReport;
    report:constraint <urn:uuid:cf9bbdcc-8d0f-4c57-9f1d-95c74a559c00>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fc288f11-d129-465c-a005-9278df43d33b> a report:ConstraintReport;
    report:constraint <urn:uuid:8dcd9741-0979-46ce-80b1-43c0a1dc1fad>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:64a43667-578c-4136-8abc-ea19c9b8f66e> a report:ConstraintReport;
    report:constraint <urn:uuid:e0b803b3-e897-4aad-843d-ef986e32dc64>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ebcc02b5-177f-4a4e-845b-dde3bf15a6b6>, <urn:uuid:ef767294-5df6-4dd4-9d43-55b30caa655a>.
<urn:uuid:ebcc02b5-177f-4a4e-845b-dde3bf15a6b6> a report:ConstraintReport;
    report:constraint <urn:uuid:cf647d6f-bea3-4d45-823c-fae5b63dd008>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ef767294-5df6-4dd4-9d43-55b30caa655a> a report:ConstraintReport;
    report:constraint <urn:uuid:b6de3f00-5094-4979-b409-aa474e26e055>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5ec0a980-d7bb-49e7-b85d-79262bb8c519> a report:ConstraintReport;
    report:constraint <urn:uuid:5f91aee4-9ac7-41ed-abdd-c11df12d361b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b10b429d-0317-46ae-b1d6-cd7d4ad7f1e9>, <urn:uuid:d5bad1a7-9f36-43e1-aba7-398e005e218a>.
<urn:uuid:b10b429d-0317-46ae-b1d6-cd7d4ad7f1e9> a report:ConstraintReport;
    report:constraint <urn:uuid:036d0c94-4a07-4286-94ac-1116eef0cc52>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d5bad1a7-9f36-43e1-aba7-398e005e218a> a report:ConstraintReport;
    report:constraint <urn:uuid:10bfe567-4ead-4ce3-89e2-42df9f22aea9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:faa09a12-fb24-4251-8616-321ce5908079> a report:ConstraintReport;
    report:constraint <urn:uuid:6dc5739c-5b2f-4d80-8336-3af8987cf193>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:35459a2b-3336-4f66-9fcb-33aa5b88f8d1>, <urn:uuid:e73fdce6-2959-4088-ad72-d8b47df37701>.
<urn:uuid:35459a2b-3336-4f66-9fcb-33aa5b88f8d1> a report:ConstraintReport;
    report:constraint <urn:uuid:fdf6c6bd-e646-4c17-b9e7-062d2dce954b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e73fdce6-2959-4088-ad72-d8b47df37701> a report:ConstraintReport;
    report:constraint <urn:uuid:682412e3-ed3a-4939-a34f-32dd660424a6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bfd7c9a7-c35b-4396-add1-e9b07d4f7145> a report:ConstraintReport;
    report:constraint <urn:uuid:2aa878e6-76d0-4bb8-96ea-3be7d735a3ac>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:72b586d7-f3ba-4c3b-a2d1-6af53f81061f>, <urn:uuid:7a8b3e4f-db22-44a3-bbf0-88d282202297>.
<urn:uuid:72b586d7-f3ba-4c3b-a2d1-6af53f81061f> a report:ConstraintReport;
    report:constraint <urn:uuid:86d4a7d1-f293-4a39-b34e-eb3baf9a0056>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7a8b3e4f-db22-44a3-bbf0-88d282202297> a report:ConstraintReport;
    report:constraint <urn:uuid:8a89dd13-3c04-408c-939c-b11ec3652ec8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:52aca75f-e1d4-4bfb-832b-3a346ba00454> a report:ConstraintReport;
    report:constraint <urn:uuid:4f2a4f2e-67a9-4b56-9e5d-3a7ec58ad9a5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3ab9c284-d84b-467c-b40e-5c47ee238457>, <urn:uuid:39d13df5-8f0b-4d04-a9dd-7db1d72c3594>.
<urn:uuid:3ab9c284-d84b-467c-b40e-5c47ee238457> a report:ConstraintReport;
    report:constraint <urn:uuid:12ff5e1a-5369-4a48-8a68-d2e1b5d7dc13>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:39d13df5-8f0b-4d04-a9dd-7db1d72c3594> a report:ConstraintReport;
    report:constraint <urn:uuid:c78b788a-0eb7-4a4a-9e63-3127ec49505c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:41669676-9741-4571-83b0-b3dc18bf58f5> a report:ConstraintReport;
    report:constraint <urn:uuid:2206cd56-4786-445c-aa3a-08e840d6e640>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4246f258-300c-42a7-b471-8d19adf01076>, <urn:uuid:a66d415c-3912-4221-96b8-c01626d7b0c2>.
<urn:uuid:4246f258-300c-42a7-b471-8d19adf01076> a report:ConstraintReport;
    report:constraint <urn:uuid:c59aa3f0-93ef-46d4-8df3-6c6c61277d0d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a66d415c-3912-4221-96b8-c01626d7b0c2> a report:ConstraintReport;
    report:constraint <urn:uuid:c98ed27d-d93f-4ec8-9310-7b5a71388340>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fd910e3c-a7ed-45bd-88e7-79337f47d7c4> a report:ConstraintReport;
    report:constraint <urn:uuid:ec78c7d3-66b7-4d54-9aac-2b198c1f02dc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1b89fc25-4851-4fd8-8fb4-aa60d12cbbb7>, <urn:uuid:9c5f13fa-ce9b-43cf-8ce7-d05337d28b6f>.
<urn:uuid:1b89fc25-4851-4fd8-8fb4-aa60d12cbbb7> a report:ConstraintReport;
    report:constraint <urn:uuid:232613ed-19cd-4dd7-9c72-3e21620f4add>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9c5f13fa-ce9b-43cf-8ce7-d05337d28b6f> a report:ConstraintReport;
    report:constraint <urn:uuid:a3669cbc-2aba-4bd6-91b4-9449ee57e85a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d3e7a51a-ebf0-4ae5-b09b-ce469663b47a> a report:ConstraintReport;
    report:constraint <urn:uuid:b8bf92b6-748c-4178-b192-5b2b3c6db4a0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:43e0153d-e815-4b81-9594-e4ea642a87e7>, <urn:uuid:c535b8f1-5a42-4d9c-98d8-0cc25aae42f1>.
<urn:uuid:43e0153d-e815-4b81-9594-e4ea642a87e7> a report:ConstraintReport;
    report:constraint <urn:uuid:0d212516-df92-4b4f-bed6-7d89ef1845d7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c535b8f1-5a42-4d9c-98d8-0cc25aae42f1> a report:ConstraintReport;
    report:constraint <urn:uuid:2ef117f2-58c5-4a16-ba19-f929db02c97b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c9ab2c23-58b9-46b5-8794-15ba830906fb> a report:ConstraintReport;
    report:constraint <urn:uuid:246ce49c-f71e-4801-b69a-d964d0bd115d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b5ea5bf1-1205-4619-b2c7-4ce5bf60c342>, <urn:uuid:beb7e1eb-029b-4d6a-8de1-eedb9d7eafd4>.
<urn:uuid:b5ea5bf1-1205-4619-b2c7-4ce5bf60c342> a report:ConstraintReport;
    report:constraint <urn:uuid:5c73a362-7f09-4787-9bca-2fc277c2f049>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:beb7e1eb-029b-4d6a-8de1-eedb9d7eafd4> a report:ConstraintReport;
    report:constraint <urn:uuid:ae293447-5e2a-4d93-9ca2-10953a0d9768>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:51c6697d-7293-49d7-9d69-88c4ba9ea9a9> a report:ConstraintReport;
    report:constraint <urn:uuid:29120bf0-065f-4622-b514-2b911a431c20>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bd1a0930-2ed3-40b5-b0c1-6178beaa73aa>, <urn:uuid:a16787e3-7cc1-48f1-9681-d17009607735>.
<urn:uuid:bd1a0930-2ed3-40b5-b0c1-6178beaa73aa> a report:ConstraintReport;
    report:constraint <urn:uuid:f8779597-3a2c-4f26-9a2f-2e5bffac343f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a16787e3-7cc1-48f1-9681-d17009607735> a report:ConstraintReport;
    report:constraint <urn:uuid:7c223c6a-8190-4c5a-8877-87edeac8606d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b0e41619-0ec9-4ff7-8fcb-f71b8c9632d4> a report:ConstraintReport;
    report:constraint <urn:uuid:4a59f4f2-aff3-4517-a411-d2e510bf8c96>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f1d6d73e-1a19-4f8c-ae68-15eaef432a9d>, <urn:uuid:b50c2336-caa1-42a3-aa3e-52ee45574eaa>.
<urn:uuid:f1d6d73e-1a19-4f8c-ae68-15eaef432a9d> a report:ConstraintReport;
    report:constraint <urn:uuid:f663d7eb-0c52-4feb-9482-a504a47e1c6e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b50c2336-caa1-42a3-aa3e-52ee45574eaa> a report:ConstraintReport;
    report:constraint <urn:uuid:62be9fc6-5ca1-403d-8a82-38ff3d0e74eb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:32473e15-7809-4446-8af5-4c28f8d3850e> a report:ConstraintReport;
    report:constraint <urn:uuid:b2f555d9-9210-44c1-81fe-edc8991ffd56>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8aa4c428-9371-42cb-b02b-00a0e7614186>, <urn:uuid:2739ad2e-60cd-488b-87fb-7d4692b4fa3d>.
<urn:uuid:8aa4c428-9371-42cb-b02b-00a0e7614186> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d9525f-2594-4d84-ae2f-60e8b1c79dd7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2739ad2e-60cd-488b-87fb-7d4692b4fa3d> a report:ConstraintReport;
    report:constraint <urn:uuid:b4032ba4-2cdb-41e7-bdd2-bfcb10f35578>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cf1bbb05-24ee-4c77-93b3-cb35dabe86f0> a report:ConstraintReport;
    report:constraint <urn:uuid:f0f5ad97-b87d-4279-a867-866578fe19f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:267fbe92-8934-4318-8769-30955fe9c030>, <urn:uuid:df537a9d-b6ee-418a-8114-d9bed5c99f6b>.
<urn:uuid:267fbe92-8934-4318-8769-30955fe9c030> a report:ConstraintReport;
    report:constraint <urn:uuid:caeaf79a-a8b1-4974-884c-d026510540ef>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:df537a9d-b6ee-418a-8114-d9bed5c99f6b> a report:ConstraintReport;
    report:constraint <urn:uuid:a7700171-4036-4fcf-a5f2-7cb3cc31de25>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:61c7d84c-0f53-4b52-a857-002c6cb879e7> a report:ConstraintReport;
    report:constraint <urn:uuid:1150ffd0-17c2-4ae5-bfd5-cd36a0363a1b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b8404aa8-72d0-432e-92c2-14095b21f259>, <urn:uuid:864fa511-8df7-4975-bb3f-deeef3d5fdeb>.
<urn:uuid:b8404aa8-72d0-432e-92c2-14095b21f259> a report:ConstraintReport;
    report:constraint <urn:uuid:11ec29fd-5465-4a7f-85b7-591370cd9411>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:864fa511-8df7-4975-bb3f-deeef3d5fdeb> a report:ConstraintReport;
    report:constraint <urn:uuid:acba8216-ebfc-48c5-ac0b-18907f47e2fd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:07c5baf2-994c-45ce-88bd-59eeb7213132> a report:ConstraintReport;
    report:constraint <urn:uuid:8b4fa82c-c1ef-4115-b314-a1e40eaed545>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:65301792-295c-4906-98c2-0947b030f94c>, <urn:uuid:1080c8cb-ab63-4b75-a2c3-10e74972e4d2>.
<urn:uuid:65301792-295c-4906-98c2-0947b030f94c> a report:ConstraintReport;
    report:constraint <urn:uuid:e0a01914-78fa-4af1-936d-9969b3248333>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1080c8cb-ab63-4b75-a2c3-10e74972e4d2> a report:ConstraintReport;
    report:constraint <urn:uuid:12bc0dcb-a27b-4d38-9942-35dd66a91a57>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5993b954-d5b7-4b39-8602-4560e556b0d6> a report:ConstraintReport;
    report:constraint <urn:uuid:2c95e2cf-979a-4f36-8070-44ab64ef4a52>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9a3ffebd-a61b-407d-8074-67c1ab9a4519>, <urn:uuid:82b9c794-c018-49bb-b352-7a339c4b11ac>.
<urn:uuid:9a3ffebd-a61b-407d-8074-67c1ab9a4519> a report:ConstraintReport;
    report:constraint <urn:uuid:90da3e68-6622-409f-8dd4-d91c37a3dc14>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:82b9c794-c018-49bb-b352-7a339c4b11ac> a report:ConstraintReport;
    report:constraint <urn:uuid:c05488fe-3204-42ba-b223-ec91f4bfacd3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7265f087-2cf1-48f4-bb19-387e6ee2d853> a report:ConstraintReport;
    report:constraint <urn:uuid:091b7cd1-3c5d-4872-ac1f-ea4013ecfe3a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:18b00bf8-1cf0-45f7-a3c0-348defc894e3>, <urn:uuid:5de62f8c-b6de-49cd-ba2a-a8a2c14b46a0>.
<urn:uuid:18b00bf8-1cf0-45f7-a3c0-348defc894e3> a report:ConstraintReport;
    report:constraint <urn:uuid:7cc22b5b-9903-40b9-a70e-a30db7bc9a49>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5de62f8c-b6de-49cd-ba2a-a8a2c14b46a0> a report:ConstraintReport;
    report:constraint <urn:uuid:3e80b2c2-f0d6-40b8-a27d-f54e77746750>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cb8a9618-671b-43ee-8daf-2ba9b2faf88c> a report:ConstraintReport;
    report:constraint <urn:uuid:eb10643c-9448-493e-a898-5c30b281d81a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cb06d224-5a75-47fc-b76a-e2b05af340ce>, <urn:uuid:551161dd-5077-4ab8-b5a1-34f41a88d924>.
<urn:uuid:cb06d224-5a75-47fc-b76a-e2b05af340ce> a report:ConstraintReport;
    report:constraint <urn:uuid:eec64efb-fce2-4fa3-9e33-f886bd33a5dc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:551161dd-5077-4ab8-b5a1-34f41a88d924> a report:ConstraintReport;
    report:constraint <urn:uuid:5dfffd4f-1ae0-4ff1-adf8-aec9529b612d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ffecfcff-6811-4c12-b5d0-af93958ea32d> a report:ConstraintReport;
    report:constraint <urn:uuid:34f70158-fe31-4ca1-85d0-c4957382a876>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8f767f8d-9562-4ffa-a183-8e25db6699ac>, <urn:uuid:2e11781b-487b-405f-8874-71230e12d0d5>.
<urn:uuid:8f767f8d-9562-4ffa-a183-8e25db6699ac> a report:ConstraintReport;
    report:constraint <urn:uuid:a175ab20-2cca-4cdb-aee8-f8783f2db5cc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2e11781b-487b-405f-8874-71230e12d0d5> a report:ConstraintReport;
    report:constraint <urn:uuid:047c53f9-aa36-432f-ad82-84a550c20329>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c20e72e0-b086-42a4-887a-26869c96b881> a report:ConstraintReport;
    report:constraint <urn:uuid:08a6a691-f695-40f9-8ef0-cd929a71cd80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cc1cbe02-5936-4d35-a419-f0e0b4ed1ad3>, <urn:uuid:2e4edbf8-e57c-4d4d-9563-d5899f136dd8>.
<urn:uuid:cc1cbe02-5936-4d35-a419-f0e0b4ed1ad3> a report:ConstraintReport;
    report:constraint <urn:uuid:357cf85a-d947-4537-9c93-3bd3039ff9d3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2e4edbf8-e57c-4d4d-9563-d5899f136dd8> a report:ConstraintReport;
    report:constraint <urn:uuid:a2e7cadb-f3ea-4457-823f-30b2b3e7c6bb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a46a636a-7cdd-456e-9332-60cd1ad0eb03> a report:ConstraintReport;
    report:constraint <urn:uuid:605cff08-6f85-47c4-a3fc-e4ccfdf4272b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ac57de46-281a-4234-bd96-d92bb6b8d854>, <urn:uuid:737ac968-f775-4c78-805c-4b5a6041c37d>.
<urn:uuid:ac57de46-281a-4234-bd96-d92bb6b8d854> a report:ConstraintReport;
    report:constraint <urn:uuid:c96176c5-f3d2-4fb7-9083-41460a033ad6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:737ac968-f775-4c78-805c-4b5a6041c37d> a report:ConstraintReport;
    report:constraint <urn:uuid:9f46330c-a19f-4d32-a821-d4d36b33e862>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:050137ea-c1d4-45ec-b068-c3395dcb6639> a report:ConstraintReport;
    report:constraint <urn:uuid:d9ee2558-651c-478e-8b36-b554c988bee6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:66c4f1d2-02d5-4e42-8453-109f390cd227>, <urn:uuid:79b58473-f2c9-40de-8ef7-d73590b56b81>.
<urn:uuid:66c4f1d2-02d5-4e42-8453-109f390cd227> a report:ConstraintReport;
    report:constraint <urn:uuid:52376ec6-1dcf-41a6-814a-625e38c4abd6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:79b58473-f2c9-40de-8ef7-d73590b56b81> a report:ConstraintReport;
    report:constraint <urn:uuid:e5acc7a3-c847-4191-a67f-4deeddeee9e2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9ecaed78-ce2d-4ac1-beb5-8be43de3c032> a report:ConstraintReport;
    report:constraint <urn:uuid:0cbbaa09-776e-4273-8e5d-8d7cfa08b215>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e7656483-ce2d-4ec5-80c1-15f2073f5284>, <urn:uuid:bf82e96a-9bcb-4825-b5e7-65d88776e78d>.
<urn:uuid:e7656483-ce2d-4ec5-80c1-15f2073f5284> a report:ConstraintReport;
    report:constraint <urn:uuid:d6e369b2-946c-448c-86a2-3b371cf694c7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bf82e96a-9bcb-4825-b5e7-65d88776e78d> a report:ConstraintReport;
    report:constraint <urn:uuid:34718c82-a7ad-4aaf-90b6-3c10bc75fc72>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9acbd839-04cb-4978-bab3-fc7c9806262f> a report:ConstraintReport;
    report:constraint <urn:uuid:7fa67880-ab1d-437f-9cf0-5983985cde80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:827064f4-d163-43af-8951-7402a4818c5a>, <urn:uuid:1ef123b4-9444-413f-a931-c9fb9374ae2d>.
<urn:uuid:827064f4-d163-43af-8951-7402a4818c5a> a report:ConstraintReport;
    report:constraint <urn:uuid:33cfa5e3-b633-481a-92ba-f113cd957a57>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1ef123b4-9444-413f-a931-c9fb9374ae2d> a report:ConstraintReport;
    report:constraint <urn:uuid:5eef2704-2230-4e7d-a463-eba0383ad4d3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:11e9a06e-a3fd-4e71-85c1-1730506952ed> a report:ConstraintReport;
    report:constraint <urn:uuid:d56b1ab6-1061-4698-a7b1-6d1fb928b712>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:df1f59aa-b207-45ab-b52e-e4571e0925c3>, <urn:uuid:0c959b33-5aba-45b7-86bd-922bbab15c7a>.
<urn:uuid:df1f59aa-b207-45ab-b52e-e4571e0925c3> a report:ConstraintReport;
    report:constraint <urn:uuid:ad7a1e60-a6b7-4903-a1f1-863b7bc4399e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0c959b33-5aba-45b7-86bd-922bbab15c7a> a report:ConstraintReport;
    report:constraint <urn:uuid:a3667f7c-30a5-4535-8d8f-2e390aa2d612>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6d39a8eb-aca5-4077-989b-a6419c2c4a96> a report:ConstraintReport;
    report:constraint <urn:uuid:351f0fe6-a2c8-4a67-9220-979055330e25>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:acb5fa30-51e8-4bc6-be9b-8e7ddead0089>, <urn:uuid:4ed07c28-6844-4f8a-8282-992fb6111b6a>.
<urn:uuid:acb5fa30-51e8-4bc6-be9b-8e7ddead0089> a report:ConstraintReport;
    report:constraint <urn:uuid:54f544df-39ae-4b88-8e47-37c28e780efd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4ed07c28-6844-4f8a-8282-992fb6111b6a> a report:ConstraintReport;
    report:constraint <urn:uuid:ede4d7ba-367f-4e5b-9b77-7aaeff89e714>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e52998e3-35d5-4d25-9266-281c54c4d5f0> a report:ConstraintReport;
    report:constraint <urn:uuid:2df3010b-c218-4522-aa01-95b27101dfbb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:357069ae-09da-462c-b863-4d9e35df3233>, <urn:uuid:8b1b51a9-84e1-4900-9d6d-549e5313f9d1>.
<urn:uuid:357069ae-09da-462c-b863-4d9e35df3233> a report:ConstraintReport;
    report:constraint <urn:uuid:1d594078-60e7-403c-b000-2ea020fbbed0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8b1b51a9-84e1-4900-9d6d-549e5313f9d1> a report:ConstraintReport;
    report:constraint <urn:uuid:34ae08cd-7c1e-4860-a4d0-fbfa848b39af>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6b794ba1-c36f-427c-8686-44176c86b59b> a report:ConstraintReport;
    report:constraint <urn:uuid:61325691-ebaf-4599-a045-c6fff992505f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9162407b-cae4-4ef4-ae63-6a22bc39555d>, <urn:uuid:73bfd76a-690c-41e7-826a-398f75ed7b9a>.
<urn:uuid:9162407b-cae4-4ef4-ae63-6a22bc39555d> a report:ConstraintReport;
    report:constraint <urn:uuid:c9970dce-15f9-48b0-8f56-d21aae32d395>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:73bfd76a-690c-41e7-826a-398f75ed7b9a> a report:ConstraintReport;
    report:constraint <urn:uuid:3bcd9556-b8d4-4855-8539-8dacd89ec8a4>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:77768170-c06f-45c7-9a7b-dff306b0eb9d> a report:ConstraintReport;
    report:constraint <urn:uuid:d0c698e7-911f-4f4b-bc87-286686632871>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a6e1b843-17f5-4e3e-aec0-fea5a5d05d9e>, <urn:uuid:9ea681c2-a35a-4638-a778-8003d2d9063a>.
<urn:uuid:a6e1b843-17f5-4e3e-aec0-fea5a5d05d9e> a report:ConstraintReport;
    report:constraint <urn:uuid:6a26e7eb-02a9-4ab5-a42a-3bb0798d7840>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9ea681c2-a35a-4638-a778-8003d2d9063a> a report:ConstraintReport;
    report:constraint <urn:uuid:2be5be5e-f823-4637-b957-8a9ed49392f6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b6e81d0e-870d-492e-9504-e0bda3975c9b> a report:ConstraintReport;
    report:constraint <urn:uuid:053e3c7c-6888-43c9-a9f0-4cb24ca6d09d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4be4a647-aabf-495a-9bcd-951985fafbd5>, <urn:uuid:fa9b98db-dc8e-4a3f-977b-2d095ad67900>.
<urn:uuid:4be4a647-aabf-495a-9bcd-951985fafbd5> a report:ConstraintReport;
    report:constraint <urn:uuid:2c8bb9d7-feb8-443a-9a1e-c8c9ced231aa>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fa9b98db-dc8e-4a3f-977b-2d095ad67900> a report:ConstraintReport;
    report:constraint <urn:uuid:9ca4744b-a2a1-4cf5-969e-f70c9025e6a3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4d820249-5732-47c7-af94-ab6afbd4dcce> a report:ConstraintReport;
    report:constraint <urn:uuid:08c7c40a-15a1-4348-a285-c14e1936f7cc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5375bbb8-e52d-46a2-8333-1ec67696747c>, <urn:uuid:69907464-3fea-43ee-b4f2-59b08d3b921c>.
<urn:uuid:5375bbb8-e52d-46a2-8333-1ec67696747c> a report:ConstraintReport;
    report:constraint <urn:uuid:ca4e3622-8fdf-4b04-879a-286bd3a5e7e5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:69907464-3fea-43ee-b4f2-59b08d3b921c> a report:ConstraintReport;
    report:constraint <urn:uuid:158f426f-fe7d-4105-ae02-fab3f6821a23>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d2c22520-e13a-46eb-bb55-632be79c0b36> a report:ConstraintReport;
    report:constraint <urn:uuid:8ea0d34a-c216-4aca-a3c9-0142b96bae5e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2bbb38d2-f97b-4048-b57f-99661e182269>, <urn:uuid:e3bc0579-2d2b-4ed5-b556-9f11e502ed9c>.
<urn:uuid:2bbb38d2-f97b-4048-b57f-99661e182269> a report:ConstraintReport;
    report:constraint <urn:uuid:4bef72cd-1ada-40fc-97e1-c079b91e6d19>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e3bc0579-2d2b-4ed5-b556-9f11e502ed9c> a report:ConstraintReport;
    report:constraint <urn:uuid:fcad40a5-d827-4a01-945b-22f4a3a3d52a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:aebe5494-c1be-4741-aeb8-d922d224d720> a report:ConstraintReport;
    report:constraint <urn:uuid:7a3b0622-c6ce-4428-a617-2ddee777f29e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a446c092-2c4c-412d-a468-6fbdfae351f7>, <urn:uuid:8fcabf98-7104-4f85-9684-ce58bcacbc5b>.
<urn:uuid:a446c092-2c4c-412d-a468-6fbdfae351f7> a report:ConstraintReport;
    report:constraint <urn:uuid:ef047f01-6e88-4e65-bc31-3ba9975f20eb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8fcabf98-7104-4f85-9684-ce58bcacbc5b> a report:ConstraintReport;
    report:constraint <urn:uuid:6afcc055-a528-499a-9ea6-659e94940f69>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2205649b-d666-4012-812e-a0e04f4700ae> a report:ConstraintReport;
    report:constraint <urn:uuid:e26c2df3-ff61-4c45-aea6-39c13f074c5d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0754c06f-6fd2-4193-9951-3bf992e535bb>, <urn:uuid:0f8fddc5-9c76-437f-be2e-1432f07f89cc>.
<urn:uuid:0754c06f-6fd2-4193-9951-3bf992e535bb> a report:ConstraintReport;
    report:constraint <urn:uuid:0d49ed46-690e-4030-864a-eb827ee99d3e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0f8fddc5-9c76-437f-be2e-1432f07f89cc> a report:ConstraintReport;
    report:constraint <urn:uuid:f44e8ebe-7464-434d-b0f9-477e83ef959a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9e39bfc2-af6c-45d9-815b-05929f2ad9b3> a report:ConstraintReport;
    report:constraint <urn:uuid:038e3c19-fd3f-4c7d-baaf-66cbf1395a80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c3b5ea3e-eed4-4e47-b4c8-2c2dfef9783d>, <urn:uuid:942b3b8d-25c5-448e-a76d-9b4386000982>.
<urn:uuid:c3b5ea3e-eed4-4e47-b4c8-2c2dfef9783d> a report:ConstraintReport;
    report:constraint <urn:uuid:0f3605d0-954f-4130-897b-b7f1bd20cb6c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:942b3b8d-25c5-448e-a76d-9b4386000982> a report:ConstraintReport;
    report:constraint <urn:uuid:dfcc026a-e0e2-4f01-b5e9-f5bc64097841>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2572a660-0c36-4f1c-a41c-4d9a0e5dd104> a report:ConstraintReport;
    report:constraint <urn:uuid:6cd96404-8106-43fb-a03c-c9afe481afef>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6c5fa461-8a46-43a3-8775-99cbc0c12a69>, <urn:uuid:14044bf6-c8e8-47ab-be9f-7b362cc53e38>.
<urn:uuid:6c5fa461-8a46-43a3-8775-99cbc0c12a69> a report:ConstraintReport;
    report:constraint <urn:uuid:c7117e0f-74e6-4d62-a7b0-02c83ffedbe1>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:14044bf6-c8e8-47ab-be9f-7b362cc53e38> a report:ConstraintReport;
    report:constraint <urn:uuid:d1b4e1e8-3033-4894-b6af-3b2387489e43>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e83a27ff-5d90-4de4-a300-5f1dcfb4119f> a report:ConstraintReport;
    report:constraint <urn:uuid:f6493d80-8cc2-4d9f-a692-f5bf273411ee>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:addcb066-a986-4d22-918f-34b007824b01>, <urn:uuid:ef38daf5-5221-4f74-9ea5-5b54b195b471>.
<urn:uuid:addcb066-a986-4d22-918f-34b007824b01> a report:ConstraintReport;
    report:constraint <urn:uuid:3d4efecd-6caa-4df0-b748-f49eeb4b42c0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ef38daf5-5221-4f74-9ea5-5b54b195b471> a report:ConstraintReport;
    report:constraint <urn:uuid:0f055da1-61cc-47b8-8c41-fa26a37d690e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:78ce45f1-cf52-4717-91be-a911a852da0e> a report:ConstraintReport;
    report:constraint <urn:uuid:e595520b-dd39-4c39-983f-bc428c8ab6ab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:646b3956-169c-4f3f-a2cf-39bfbc6ff985>, <urn:uuid:42705191-daf9-4193-bdc2-41ce02685823>.
<urn:uuid:646b3956-169c-4f3f-a2cf-39bfbc6ff985> a report:ConstraintReport;
    report:constraint <urn:uuid:0f1dc7cb-c623-43c5-9275-41f34cdf1a46>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:42705191-daf9-4193-bdc2-41ce02685823> a report:ConstraintReport;
    report:constraint <urn:uuid:f2a3b2c8-9347-40df-86fa-ef9449b5fdfd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2a4f014c-3d89-4f25-b009-590dd124ebe3> a report:ConstraintReport;
    report:constraint <urn:uuid:b1320422-f589-44e6-9a7f-d4e740cf680f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1d585413-db8c-47bb-942d-49411c9b3d83>, <urn:uuid:96b814f5-4770-4daa-bb25-4e2bfb6e8fa8>.
<urn:uuid:1d585413-db8c-47bb-942d-49411c9b3d83> a report:ConstraintReport;
    report:constraint <urn:uuid:40072600-1bb3-4475-bdc0-bc77e7643546>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:96b814f5-4770-4daa-bb25-4e2bfb6e8fa8> a report:ConstraintReport;
    report:constraint <urn:uuid:0e29518c-5000-4805-8919-f02486adaed7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9ebf28f8-25fb-45f9-ac21-c9703601d514> a report:ConstraintReport;
    report:constraint <urn:uuid:78d86c6f-307d-4c5d-be68-5739bd746223>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6c4f4fba-717e-4683-8e9f-d988ddd34a8a>, <urn:uuid:e594f37a-6258-4db6-95c3-8f9383c49cf5>.
<urn:uuid:6c4f4fba-717e-4683-8e9f-d988ddd34a8a> a report:ConstraintReport;
    report:constraint <urn:uuid:4951e768-690d-41af-bb2b-68df479b52e1>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e594f37a-6258-4db6-95c3-8f9383c49cf5> a report:ConstraintReport;
    report:constraint <urn:uuid:916a531f-2d4c-471a-b8d7-64baa4fda3ca>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:83481465-963d-4b20-a570-fdbea3426920> a report:ConstraintReport;
    report:constraint <urn:uuid:3012fdaf-534e-49af-9708-9a7a48c66e26>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:adebc4c7-d99e-408d-8677-c1b122eb5060>, <urn:uuid:72ce9002-02cf-4b9f-8b4e-ec72a501e26d>.
<urn:uuid:adebc4c7-d99e-408d-8677-c1b122eb5060> a report:ConstraintReport;
    report:constraint <urn:uuid:96d4825b-18b5-4e12-b0f2-23f9483b8c17>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:72ce9002-02cf-4b9f-8b4e-ec72a501e26d> a report:ConstraintReport;
    report:constraint <urn:uuid:739ac050-ddff-4333-8af4-4f4a29b45a6e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:03fc4c3f-b94f-4723-89bb-530fc35e8788> a report:ConstraintReport;
    report:constraint <urn:uuid:4654b01f-328d-4a6f-bed7-6aa0b549661b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3765474b-6f2a-44b2-b95c-98b3bb0f097c>, <urn:uuid:c427a2da-7c1b-49e2-a802-9202cb7b6318>.
<urn:uuid:3765474b-6f2a-44b2-b95c-98b3bb0f097c> a report:ConstraintReport;
    report:constraint <urn:uuid:a40605b6-6b23-4b4e-a280-2edf3f384831>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c427a2da-7c1b-49e2-a802-9202cb7b6318> a report:ConstraintReport;
    report:constraint <urn:uuid:f251b506-69d8-4d92-bc56-32be35549828>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a7fa0568-5059-40ba-88db-c2541ead24ae> a report:ConstraintReport;
    report:constraint <urn:uuid:7e6108e3-fcc2-4d3b-b6e1-ad0fcbe738e1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c6a650cf-7ed7-4029-a459-0a0ef176bd24>, <urn:uuid:73b0bf5f-e2b1-402a-aedd-3d63ef85f20e>.
<urn:uuid:c6a650cf-7ed7-4029-a459-0a0ef176bd24> a report:ConstraintReport;
    report:constraint <urn:uuid:2cdb2a9b-42be-4c8f-b100-cad708025246>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:73b0bf5f-e2b1-402a-aedd-3d63ef85f20e> a report:ConstraintReport;
    report:constraint <urn:uuid:7242b5bf-7879-44c1-9fcb-346ca6933443>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0a961a45-5f4e-44e6-9c08-6625af6986f0> a report:ConstraintReport;
    report:constraint <urn:uuid:835d8bc5-afbc-4329-9c8e-8b6dafd593b5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e994e136-a8cd-4060-a229-86a380efd316>, <urn:uuid:c6e4f1ce-6555-456e-b604-28e82bd73119>.
<urn:uuid:e994e136-a8cd-4060-a229-86a380efd316> a report:ConstraintReport;
    report:constraint <urn:uuid:3c0807b9-65fb-43df-a211-2b2d2d6f4e37>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c6e4f1ce-6555-456e-b604-28e82bd73119> a report:ConstraintReport;
    report:constraint <urn:uuid:7403d382-c5b2-427c-b812-929ecae8debc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a859e4c2-270c-4295-8040-dfb6e13cea7d> a report:ConstraintReport;
    report:constraint <urn:uuid:46fc7cfa-126f-4d3e-99ba-4d8d0f42e6d7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e50afedc-78a0-4af1-b031-7672ec9f6203>, <urn:uuid:9ee444b1-39b8-4233-944d-9bdca1bc4648>.
<urn:uuid:e50afedc-78a0-4af1-b031-7672ec9f6203> a report:ConstraintReport;
    report:constraint <urn:uuid:7dab70b7-4cae-41f2-8759-fa6f0192bdb1>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9ee444b1-39b8-4233-944d-9bdca1bc4648> a report:ConstraintReport;
    report:constraint <urn:uuid:fe00dcab-80f6-4064-b26c-dd220a6cb40c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bbcf1b59-6c9b-4e0b-adc8-e827f38510c9> a report:ConstraintReport;
    report:constraint <urn:uuid:fc2a256c-19b3-47e3-9ecc-b0a6ac3e1aae>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:abbbdbd5-795c-4a5d-961b-474255f63448>, <urn:uuid:07ba2e36-ad48-4ab8-9ce7-059d83098609>.
<urn:uuid:abbbdbd5-795c-4a5d-961b-474255f63448> a report:ConstraintReport;
    report:constraint <urn:uuid:70612abb-4018-4dc9-8d9d-99c1c5ace31a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:07ba2e36-ad48-4ab8-9ce7-059d83098609> a report:ConstraintReport;
    report:constraint <urn:uuid:952d2bfd-6b2f-4a3a-b682-f6b3c68a6380>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fbc59636-5e41-4b22-a75b-f5abbba79ad9> a report:ConstraintReport;
    report:constraint <urn:uuid:9d1c2e80-4ff1-456c-a176-efd8a2ab94e5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:52394179-526e-466d-91a1-6f6cc679b33b>, <urn:uuid:c8bfe8d7-e824-46d5-b821-8b63a9968f1d>.
<urn:uuid:52394179-526e-466d-91a1-6f6cc679b33b> a report:ConstraintReport;
    report:constraint <urn:uuid:3de86d07-80ca-48fb-901f-095401660a69>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c8bfe8d7-e824-46d5-b821-8b63a9968f1d> a report:ConstraintReport;
    report:constraint <urn:uuid:2502afa2-fb5a-427c-bdf7-506f0a203d02>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8f3cbc94-b645-474e-96c8-6b8496fcd545> a report:ConstraintReport;
    report:constraint <urn:uuid:75f2c124-8774-4109-a764-98a1cc489c0d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f239bdb2-f54f-47a2-bfca-7b6f25622ff9>, <urn:uuid:26e86a9f-8f6a-4cf1-8bf0-554eab5b0e00>.
<urn:uuid:f239bdb2-f54f-47a2-bfca-7b6f25622ff9> a report:ConstraintReport;
    report:constraint <urn:uuid:b30da122-a3c2-427a-98d1-54c7a6d3e7e3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:26e86a9f-8f6a-4cf1-8bf0-554eab5b0e00> a report:ConstraintReport;
    report:constraint <urn:uuid:735aa44d-88b1-4bff-9e76-ef0d12ad3bb2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:806c7706-a52b-491f-9a93-69f231fe8226> a report:ConstraintReport;
    report:constraint <urn:uuid:55f0f646-9797-4aa9-858f-51ca41f67aba>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d63d6dce-08fd-410a-bc01-0b1f5a71f424>, <urn:uuid:9aaaa1fb-dbf6-4b03-b94a-e22bddbd42f9>.
<urn:uuid:d63d6dce-08fd-410a-bc01-0b1f5a71f424> a report:ConstraintReport;
    report:constraint <urn:uuid:2aa3199a-9027-45d6-9a1f-6f80da4aebc7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9aaaa1fb-dbf6-4b03-b94a-e22bddbd42f9> a report:ConstraintReport;
    report:constraint <urn:uuid:9d8a95ba-25d3-44ee-8d80-fa4273e8ae08>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d96126b8-c24f-469b-9d27-3ba6d12c3aba> a report:ConstraintReport;
    report:constraint <urn:uuid:50d61890-18a5-492a-8b37-1eddf79c7f6f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:61bbfd56-e72c-48a8-80d0-164bf6583654>, <urn:uuid:c11bf43f-d6ba-4041-bcbf-413481855275>.
<urn:uuid:61bbfd56-e72c-48a8-80d0-164bf6583654> a report:ConstraintReport;
    report:constraint <urn:uuid:49175f1f-72e5-4cb3-9188-2d3d60125ca7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c11bf43f-d6ba-4041-bcbf-413481855275> a report:ConstraintReport;
    report:constraint <urn:uuid:1378ab3c-6c26-450c-b79a-2acb4379a6e3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f15af99d-fd6a-4c2d-9012-9d6fba23abc5> a report:ConstraintReport;
    report:constraint <urn:uuid:9a3c57e4-cfb8-4c6e-a476-d764a2600bb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bafeec2d-0f47-4498-b4ca-927ce0487e55>, <urn:uuid:510def47-dcce-4493-8bcb-a483b080b4d0>.
<urn:uuid:bafeec2d-0f47-4498-b4ca-927ce0487e55> a report:ConstraintReport;
    report:constraint <urn:uuid:fc6a79f4-3b41-4be8-897f-9b6b950dfeb9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:510def47-dcce-4493-8bcb-a483b080b4d0> a report:ConstraintReport;
    report:constraint <urn:uuid:0a178d9b-e27e-432f-8483-cd9834947d97>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d9a35985-883f-40ae-a521-4cf6d0b0e465> a report:ConstraintReport;
    report:constraint <urn:uuid:a684702d-9579-4edd-9766-0b7ce904b8f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8c8f3ea0-c3de-4208-8aad-25e18fb218fe>, <urn:uuid:f49865bc-03fb-426b-821c-d4a714a23f83>.
<urn:uuid:8c8f3ea0-c3de-4208-8aad-25e18fb218fe> a report:ConstraintReport;
    report:constraint <urn:uuid:8f7fbde8-0d12-4532-b51a-abfeb05f09dc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f49865bc-03fb-426b-821c-d4a714a23f83> a report:ConstraintReport;
    report:constraint <urn:uuid:a3f7d124-0c43-4322-90ca-37501a015c05>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:904dbb77-abe1-4549-8aa4-525df447ac1e> a report:ConstraintReport;
    report:constraint <urn:uuid:cd32f3a4-24ee-4820-a5e4-da3731568953>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:faa05cbf-4eaa-4005-b03f-7443c8a06860>, <urn:uuid:7c4ed174-53d0-40b3-a2c6-85612e48d5a4>.
<urn:uuid:faa05cbf-4eaa-4005-b03f-7443c8a06860> a report:ConstraintReport;
    report:constraint <urn:uuid:9a22c068-6c47-475e-910f-3e4a03d71663>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7c4ed174-53d0-40b3-a2c6-85612e48d5a4> a report:ConstraintReport;
    report:constraint <urn:uuid:bfe93937-9467-4148-b6a7-04660b15e151>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bbb7074a-7b0d-4312-a1f3-9033e050e101> a report:ConstraintReport;
    report:constraint <urn:uuid:7d67465e-ed4f-4caa-8b85-ddc35d754d0b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c60af840-43d4-4108-878a-52faa9f4e4dc>, <urn:uuid:9f4a4cb8-5d1a-43cb-adc2-e18316b10228>.
<urn:uuid:c60af840-43d4-4108-878a-52faa9f4e4dc> a report:ConstraintReport;
    report:constraint <urn:uuid:846ff921-eac4-4e8d-8d9d-0659c8259c5c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9f4a4cb8-5d1a-43cb-adc2-e18316b10228> a report:ConstraintReport;
    report:constraint <urn:uuid:6cf4fcff-d602-47b1-8b80-801f47a9f086>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ae5e4822-465e-4d71-87ee-c9a6fe518170> a report:ConstraintReport;
    report:constraint <urn:uuid:c2e4c4d2-faa2-4cd8-b6d1-1e5e49fb36fb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a529c47a-9fff-44df-ac18-0803ab45c30b>, <urn:uuid:71da55ce-e6cc-4d77-9235-b6b812fb219c>.
<urn:uuid:a529c47a-9fff-44df-ac18-0803ab45c30b> a report:ConstraintReport;
    report:constraint <urn:uuid:dce773b2-0cee-47aa-9132-bc05eef58975>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:71da55ce-e6cc-4d77-9235-b6b812fb219c> a report:ConstraintReport;
    report:constraint <urn:uuid:0039e402-294e-4ac0-88b0-5a5879749e05>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:63895e85-333e-4e0f-a507-a6f97d599b64> a report:ConstraintReport;
    report:constraint <urn:uuid:cc5dd610-24a4-42c5-94aa-010dffc0a302>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7cff5446-20ef-4d7d-b03b-68fa9160904a>, <urn:uuid:0444a158-c09f-435c-aac3-3f64c03971f5>.
<urn:uuid:7cff5446-20ef-4d7d-b03b-68fa9160904a> a report:ConstraintReport;
    report:constraint <urn:uuid:a02c629c-9053-434c-80e7-686aff9fcc4c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0444a158-c09f-435c-aac3-3f64c03971f5> a report:ConstraintReport;
    report:constraint <urn:uuid:bc48b9ac-22cf-4606-a607-37f108cfae63>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2cc679b4-517c-4a02-af63-87d97cb63ca4> a report:ConstraintReport;
    report:constraint <urn:uuid:188b83b5-ab83-4421-8238-3c04815b5f14>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e2477484-1d5d-4dd0-89b3-7e4f69e9847a>, <urn:uuid:dde91d35-fe7a-45ed-9fd0-c2b70881d876>.
<urn:uuid:e2477484-1d5d-4dd0-89b3-7e4f69e9847a> a report:ConstraintReport;
    report:constraint <urn:uuid:edc46467-d0c7-45e5-83d3-71a6fdb03b4f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dde91d35-fe7a-45ed-9fd0-c2b70881d876> a report:ConstraintReport;
    report:constraint <urn:uuid:a8e3a909-df18-488e-826d-56f15ad379bd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c571904e-6666-40b7-8cfe-c84aaee03e11> a report:ConstraintReport;
    report:constraint <urn:uuid:fcb349da-54b9-4d93-b2f7-b8f9d0ec2d10>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:04f5da8f-115c-4a5d-bbaa-a00714ad01c8>, <urn:uuid:1e188e4e-80f7-4d55-bc58-5ad25649d87c>.
<urn:uuid:04f5da8f-115c-4a5d-bbaa-a00714ad01c8> a report:ConstraintReport;
    report:constraint <urn:uuid:d2d8d14d-d84d-4d0a-9833-d8bbe88c1e78>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1e188e4e-80f7-4d55-bc58-5ad25649d87c> a report:ConstraintReport;
    report:constraint <urn:uuid:30261223-0ee7-469b-a383-0c1975a5176d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:07e06cda-f6f8-4749-8111-973ecb476bdd> a report:ConstraintReport;
    report:constraint <urn:uuid:2c4e3415-4958-46a7-b439-6a89d8d20f25>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:25da3420-cca0-4e90-b594-a881060f0c07>, <urn:uuid:52fc73d6-f522-4494-969d-5ffd5ec6a843>.
<urn:uuid:25da3420-cca0-4e90-b594-a881060f0c07> a report:ConstraintReport;
    report:constraint <urn:uuid:c889c26c-bae6-4b5d-8c14-c419179bbd88>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:52fc73d6-f522-4494-969d-5ffd5ec6a843> a report:ConstraintReport;
    report:constraint <urn:uuid:7bfcd441-9935-4842-a675-92b3dcfc04ab>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b2836b29-183f-47ab-ba96-dd50d33ed49f> a report:ConstraintReport;
    report:constraint <urn:uuid:c7b3cea6-c00e-461a-b5f9-c09a9ab28b32>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7accebc0-44ab-4d18-979f-1d3dc4e193c3>, <urn:uuid:c73b9bff-3a6b-4733-b022-96e16ea8ba73>.
<urn:uuid:7accebc0-44ab-4d18-979f-1d3dc4e193c3> a report:ConstraintReport;
    report:constraint <urn:uuid:bdd0f1a7-694f-4f17-b2bb-b2206b05303f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c73b9bff-3a6b-4733-b022-96e16ea8ba73> a report:ConstraintReport;
    report:constraint <urn:uuid:19aff331-aa2d-49e1-a3c1-b57cf720ff43>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:669f96dd-48eb-4550-ba5b-98b149683acc> a report:ConstraintReport;
    report:constraint <urn:uuid:91eb91b7-3979-4cd9-b5aa-724ebf454baf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:01abec99-6261-4b02-b022-bf7f6c46bff2>, <urn:uuid:a395ee1b-843c-49c0-85c0-6864335619f6>.
<urn:uuid:01abec99-6261-4b02-b022-bf7f6c46bff2> a report:ConstraintReport;
    report:constraint <urn:uuid:1a649046-7f69-4210-a64c-03a405ad3530>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a395ee1b-843c-49c0-85c0-6864335619f6> a report:ConstraintReport;
    report:constraint <urn:uuid:a2ef1882-6281-46f7-bff2-ba9f813edce3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1d2ec8b8-1973-41b4-ad63-4006e9e15b31> a report:ConstraintReport;
    report:constraint <urn:uuid:c4dd2395-c34e-4035-a94b-dc153fa88c47>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:39a3eb51-99d7-45cf-9a79-e1b5d76750c1>, <urn:uuid:5b958661-9aa2-4bfb-b996-39fd189b51cc>.
<urn:uuid:39a3eb51-99d7-45cf-9a79-e1b5d76750c1> a report:ConstraintReport;
    report:constraint <urn:uuid:8497d0bc-0ed5-46fd-93cd-a141cee6041e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5b958661-9aa2-4bfb-b996-39fd189b51cc> a report:ConstraintReport;
    report:constraint <urn:uuid:dafadfdb-aae0-4daa-9195-f85fae232d92>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4dba638d-39e7-456d-87b6-33bac9d42c4b> a report:ConstraintReport;
    report:constraint <urn:uuid:024614b2-366f-43cf-918e-84c60bfacbcf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1dc7a08d-e326-4a68-89fc-ce90b01baf6e>, <urn:uuid:d70db515-c2e7-4983-a471-9fcceea4fedc>.
<urn:uuid:1dc7a08d-e326-4a68-89fc-ce90b01baf6e> a report:ConstraintReport;
    report:constraint <urn:uuid:79794ee3-20b4-48bf-9d23-8a7dd7e39483>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d70db515-c2e7-4983-a471-9fcceea4fedc> a report:ConstraintReport;
    report:constraint <urn:uuid:3e6925c3-00a3-4cd1-8ad6-5e5339d885e5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6c928f4e-e5ad-481a-8d3b-d9096a9cbeb5> a report:ConstraintReport;
    report:constraint <urn:uuid:b9f96351-34a1-425b-8b10-62bed2ea5f4e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:99394f21-d9ee-4682-9757-55cc7fe2f8b5>, <urn:uuid:305d226b-8fbb-43af-8f57-6af0926fc308>.
<urn:uuid:99394f21-d9ee-4682-9757-55cc7fe2f8b5> a report:ConstraintReport;
    report:constraint <urn:uuid:97dd979b-42b5-4576-8e7e-664137495723>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:305d226b-8fbb-43af-8f57-6af0926fc308> a report:ConstraintReport;
    report:constraint <urn:uuid:fe99da5f-f784-415c-b45d-ad6c98ba023f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4038a459-0428-42ef-86f7-c75d5ed1f167> a report:ConstraintReport;
    report:constraint <urn:uuid:659710f4-8ddb-47ed-a9c9-38cfbf5010f4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:12908443-e08c-4f34-aa80-23f41ed44dba>, <urn:uuid:3581ea43-6726-4eb6-901d-6f66c6f3e3ef>.
<urn:uuid:12908443-e08c-4f34-aa80-23f41ed44dba> a report:ConstraintReport;
    report:constraint <urn:uuid:8198d802-de7a-4cfc-9dea-0bf135a8421e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3581ea43-6726-4eb6-901d-6f66c6f3e3ef> a report:ConstraintReport;
    report:constraint <urn:uuid:957f7e2d-9de8-4e28-b36c-7b78823fb2e5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:20351527-b10f-452a-9456-c86207af5937> a report:ConstraintReport;
    report:constraint <urn:uuid:8578de8e-366e-4fd4-abe5-204db416e541>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3d490314-35eb-43ff-8dd2-3b29db3f5709>, <urn:uuid:c734a995-e26d-44a9-9619-8464d67ca48c>.
<urn:uuid:3d490314-35eb-43ff-8dd2-3b29db3f5709> a report:ConstraintReport;
    report:constraint <urn:uuid:a24558d0-25af-4a12-9a93-1525bcd9a50d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c734a995-e26d-44a9-9619-8464d67ca48c> a report:ConstraintReport;
    report:constraint <urn:uuid:5b7c0c04-1ea2-4f43-9871-427ca50472fa>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:502b5ac3-4176-4a80-a83d-7a471176a2d6> a report:ConstraintReport;
    report:constraint <urn:uuid:37993806-e7c3-48ab-b31b-db56c93982b8>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b4e397db-72f0-4c0b-add3-ce400d923d11>, <urn:uuid:b1211e79-42fb-4acb-aa19-61c170b8306f>.
<urn:uuid:b4e397db-72f0-4c0b-add3-ce400d923d11> a report:ConstraintReport;
    report:constraint <urn:uuid:867ff6e8-54fe-4431-8d3f-3b4960fb082b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b1211e79-42fb-4acb-aa19-61c170b8306f> a report:ConstraintReport;
    report:constraint <urn:uuid:7eae60dc-da60-4d88-8ea0-aa0556bc7295>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:66e9bed8-3905-4bb4-9efa-cdcb5c36e71b> a report:ConstraintReport;
    report:constraint <urn:uuid:f9ea2e45-0726-4b79-856f-0c283a02d999>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:73c90d6c-7dda-4226-a83b-116eab6a2e67>, <urn:uuid:009e5abb-96d8-4bd7-85d2-826578fbbfd8>.
<urn:uuid:73c90d6c-7dda-4226-a83b-116eab6a2e67> a report:ConstraintReport;
    report:constraint <urn:uuid:0df822f6-f678-4489-bd98-5b4e23d0fe28>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:009e5abb-96d8-4bd7-85d2-826578fbbfd8> a report:ConstraintReport;
    report:constraint <urn:uuid:3ebe8bdc-387f-41ac-aa10-319976aa9297>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:17e271a9-8456-467b-b603-ab8922896d60> a report:ConstraintReport;
    report:constraint <urn:uuid:22e92d31-09da-4648-bc8f-f7445536cc4c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:25f3fd36-ce18-40a4-bcc6-fe1032cd7b32>, <urn:uuid:04447919-9869-4e3a-899c-bc9b704b4e3e>.
<urn:uuid:25f3fd36-ce18-40a4-bcc6-fe1032cd7b32> a report:ConstraintReport;
    report:constraint <urn:uuid:654dcd03-9ad5-4991-b258-f0b5103352aa>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:04447919-9869-4e3a-899c-bc9b704b4e3e> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d9d20f-8e00-4778-a850-9fad9ff0e916>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:019e1a53-7a55-43da-a4f1-7f180dd54356> a report:ConstraintReport;
    report:constraint <urn:uuid:ce990d0d-2cf8-4481-94e1-db9b2d863b11>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:64f1bb4b-9699-4f07-9ae9-69a6260dd808>, <urn:uuid:e194bcd3-9625-4389-9192-37435bafee21>.
<urn:uuid:64f1bb4b-9699-4f07-9ae9-69a6260dd808> a report:ConstraintReport;
    report:constraint <urn:uuid:a5007b67-532b-4b42-8be8-2004cd4e1217>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e194bcd3-9625-4389-9192-37435bafee21> a report:ConstraintReport;
    report:constraint <urn:uuid:34648d20-a5b8-4ee7-9586-40efafb43f50>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e199d025-8fcd-4eda-950c-dfbbe07fbda9> a report:ConstraintReport;
    report:constraint <urn:uuid:bb565bc1-5b00-4df3-8ca6-9ce8e9884fb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:67a4bcae-a134-436e-8eab-872cb8466478>, <urn:uuid:335c29ea-07e7-4366-876c-6b707115ce1e>.
<urn:uuid:67a4bcae-a134-436e-8eab-872cb8466478> a report:ConstraintReport;
    report:constraint <urn:uuid:287a4904-fff5-4607-97fb-05c84cb6dd53>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:335c29ea-07e7-4366-876c-6b707115ce1e> a report:ConstraintReport;
    report:constraint <urn:uuid:e9842aa9-97da-4546-9c0f-211219f59b52>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:91f6ef67-d2da-4b8f-abf9-f52a22ac4fa7> a report:ConstraintReport;
    report:constraint <urn:uuid:c8b4a8bf-e9a5-43fe-863c-99a45736a741>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:eaf3db0e-5de0-40b9-a487-97f0c7a63238>, <urn:uuid:f0465bf2-5e8b-4adb-b903-7bd824b6c720>.
<urn:uuid:eaf3db0e-5de0-40b9-a487-97f0c7a63238> a report:ConstraintReport;
    report:constraint <urn:uuid:66442849-fbf7-4146-a750-e6b00eab015b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f0465bf2-5e8b-4adb-b903-7bd824b6c720> a report:ConstraintReport;
    report:constraint <urn:uuid:84657d13-9735-483c-b726-cb4e5e7b46e4>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:57ef2e93-33df-480e-a06e-3e888ef71f25> a report:ConstraintReport;
    report:constraint <urn:uuid:0ffa4d37-e577-45f8-b2f8-a52a1310e39f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:31721bfe-a64c-4f77-97c9-49bf8df692a6>, <urn:uuid:a4661521-02bc-4954-9b32-4f25ea9a7afc>.
<urn:uuid:31721bfe-a64c-4f77-97c9-49bf8df692a6> a report:ConstraintReport;
    report:constraint <urn:uuid:c9b80536-64b2-463a-811c-283225833fa9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a4661521-02bc-4954-9b32-4f25ea9a7afc> a report:ConstraintReport;
    report:constraint <urn:uuid:2d6e4afc-3705-41f6-81cf-d24666119347>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:99a8bd73-9c0c-4165-919e-9e2a483639f6> a report:ConstraintReport;
    report:constraint <urn:uuid:70055daa-2732-4649-b94d-dd6099404c1b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3aa42f5a-b5a5-4588-9e78-59c003c8608d>, <urn:uuid:35ccd1fd-e7c0-44ed-b494-a8d23b99aed1>.
<urn:uuid:3aa42f5a-b5a5-4588-9e78-59c003c8608d> a report:ConstraintReport;
    report:constraint <urn:uuid:83fa9fb6-d029-4088-be7e-4d1cd4cd396e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:35ccd1fd-e7c0-44ed-b494-a8d23b99aed1> a report:ConstraintReport;
    report:constraint <urn:uuid:f41a681e-cbf6-47d4-a025-99be9a2443d6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e74fbf3c-357f-4c13-9566-f22399b744ce> a report:ConstraintReport;
    report:constraint <urn:uuid:de591672-9b17-4917-862f-03e7bcbb43a4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5129a761-37b0-4895-bd14-2ff1b6cc7ce4>, <urn:uuid:eaee2f94-166c-409a-9f30-a6d41eca5c5b>.
<urn:uuid:5129a761-37b0-4895-bd14-2ff1b6cc7ce4> a report:ConstraintReport;
    report:constraint <urn:uuid:6b572701-1bf4-474e-b164-0dbd291fc2b4>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eaee2f94-166c-409a-9f30-a6d41eca5c5b> a report:ConstraintReport;
    report:constraint <urn:uuid:ebb3ba93-d189-44e3-ba89-02c69ba14f40>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e8b53e76-4268-48e1-a9de-99e3c60ecaef> a report:ConstraintReport;
    report:constraint <urn:uuid:74b7368c-77f1-48ef-9849-2d2cbf5fa012>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f95e043b-1adc-4bb7-b78c-7143c7c97983>, <urn:uuid:c7bc746f-e455-47fd-ba89-5b7a9c9a2f97>.
<urn:uuid:f95e043b-1adc-4bb7-b78c-7143c7c97983> a report:ConstraintReport;
    report:constraint <urn:uuid:a1cb611c-b9ed-4154-b5e6-8bc789809230>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c7bc746f-e455-47fd-ba89-5b7a9c9a2f97> a report:ConstraintReport;
    report:constraint <urn:uuid:d59f2c20-4538-45ef-a943-c55019d0ded1>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c53b4dee-49db-4ed3-ac38-95bf96e9e3fb> a report:ConstraintReport;
    report:constraint <urn:uuid:cf644502-f44c-4306-9495-fca5c6310563>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:604d9b01-c86e-400e-a801-8da09df02944>, <urn:uuid:fcceccf2-8830-4a4e-b834-6b9f1bfc9ce0>.
<urn:uuid:604d9b01-c86e-400e-a801-8da09df02944> a report:ConstraintReport;
    report:constraint <urn:uuid:211d29e0-436b-4c8a-a7fc-09960ff2bf6f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fcceccf2-8830-4a4e-b834-6b9f1bfc9ce0> a report:ConstraintReport;
    report:constraint <urn:uuid:79305e6b-baeb-44e8-b485-829bc6090091>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8c4a5126-b300-42f4-b7a0-207b6da49123> a report:ConstraintReport;
    report:constraint <urn:uuid:1f2dcfd1-95a0-4d72-9be7-731bca82dd65>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2f7b3216-32ad-4a4a-8e13-fda75edc6b93>, <urn:uuid:8c7873c6-269c-42e1-82c6-d68c9e299cca>.
<urn:uuid:2f7b3216-32ad-4a4a-8e13-fda75edc6b93> a report:ConstraintReport;
    report:constraint <urn:uuid:c9f03a8a-4e8f-42c4-8bae-3f1235041f0b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8c7873c6-269c-42e1-82c6-d68c9e299cca> a report:ConstraintReport;
    report:constraint <urn:uuid:7074d13f-5640-4de5-9a87-e6578747da10>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ad575e43-afa8-47aa-bf9f-f5b8606ec22f> a report:ConstraintReport;
    report:constraint <urn:uuid:c7593329-2fd1-4321-944a-c22938751a32>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5826e17b-7b15-4b9b-b7f8-8df52f2942a4>, <urn:uuid:9ad6b7bc-145e-44d4-bd30-e7d605a20120>.
<urn:uuid:5826e17b-7b15-4b9b-b7f8-8df52f2942a4> a report:ConstraintReport;
    report:constraint <urn:uuid:3356fcd2-aa25-453d-8614-aeade91b1808>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9ad6b7bc-145e-44d4-bd30-e7d605a20120> a report:ConstraintReport;
    report:constraint <urn:uuid:43831461-fe4f-4abf-a8e3-e74573f9949f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0564525d-1b98-4e3d-9d9f-b8b529cf8093> a report:ConstraintReport;
    report:constraint <urn:uuid:e7dfca32-6777-4766-99be-5bd5a84f96f1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4edd7710-7853-4803-a44d-97a46b1983e1>, <urn:uuid:02dd91f0-ccb5-4c74-a2db-bb8f529771fb>.
<urn:uuid:4edd7710-7853-4803-a44d-97a46b1983e1> a report:ConstraintReport;
    report:constraint <urn:uuid:ac584ec9-5fcd-492a-9678-b994b3b98bfe>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:02dd91f0-ccb5-4c74-a2db-bb8f529771fb> a report:ConstraintReport;
    report:constraint <urn:uuid:8e18aea4-4892-4e4c-a460-9db6fe062888>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:49e6ad5e-d88d-4824-811e-1afbee61557b> a report:ConstraintReport;
    report:constraint <urn:uuid:d0c5b490-d975-479f-9eb8-65c24df82b7d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:21684ec3-de31-4021-a2d6-24108e20cf32>, <urn:uuid:d019c20f-f030-46c0-a09d-fdb914dbb3cd>.
<urn:uuid:21684ec3-de31-4021-a2d6-24108e20cf32> a report:ConstraintReport;
    report:constraint <urn:uuid:34c89188-bda0-4fe6-a77e-28190079cb2f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d019c20f-f030-46c0-a09d-fdb914dbb3cd> a report:ConstraintReport;
    report:constraint <urn:uuid:110c798d-8331-4424-a348-09e84408835d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0d70d22f-0877-4cf8-a3f1-4f6530ca2259> a report:ConstraintReport;
    report:constraint <urn:uuid:793cd305-1103-40ea-9e31-a10ab143d8c1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:85e4e6d6-280b-4792-aff0-ae3901560ba1>, <urn:uuid:22ee2571-0201-425a-9033-2ddd41e4a570>.
<urn:uuid:85e4e6d6-280b-4792-aff0-ae3901560ba1> a report:ConstraintReport;
    report:constraint <urn:uuid:4121c33b-3a09-4cdc-81cb-b54487f3cc50>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:22ee2571-0201-425a-9033-2ddd41e4a570> a report:ConstraintReport;
    report:constraint <urn:uuid:5bd2c802-97d3-4cb7-8e4e-85c713b64330>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e5c0e7d2-260b-42d4-8955-f4d1264970b2> a report:ConstraintReport;
    report:constraint <urn:uuid:5cdf20be-8fad-4c68-9240-ad7c30283180>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:86baba74-7322-4fdc-b5ca-d4f37afa0b71>, <urn:uuid:b8506ef3-da06-4b3d-a73f-274b2ebd3401>.
<urn:uuid:86baba74-7322-4fdc-b5ca-d4f37afa0b71> a report:ConstraintReport;
    report:constraint <urn:uuid:afb27e52-84d0-445a-a6f6-714f67df7a6f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b8506ef3-da06-4b3d-a73f-274b2ebd3401> a report:ConstraintReport;
    report:constraint <urn:uuid:1012dbfe-60a2-4866-9778-f368a85a5726>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4752ab5d-577e-4e62-abfb-fd8670277b77> a report:ConstraintReport;
    report:constraint <urn:uuid:74dc97f4-1225-4650-bd8a-3f7068433378>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1eff942f-f4f6-4ba2-b814-b2e26cd11adf>, <urn:uuid:c9a080f2-f935-4225-a9ae-0ca94502c61b>.
<urn:uuid:1eff942f-f4f6-4ba2-b814-b2e26cd11adf> a report:ConstraintReport;
    report:constraint <urn:uuid:e3ed954b-9703-4492-a6f8-72fd2c25c48c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c9a080f2-f935-4225-a9ae-0ca94502c61b> a report:ConstraintReport;
    report:constraint <urn:uuid:7105b292-edb9-43b8-90bd-a4e8eb8ac95a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ee6bc3dd-3921-43b0-a0db-3ac19dd165dc> a report:ConstraintReport;
    report:constraint <urn:uuid:0ea2f621-6e96-4f3b-94b9-e08e6d535154>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:06ce4962-ff6e-4ee5-bcec-d863f30b1f5a>, <urn:uuid:3e4c8c48-829c-4636-acea-b77fc549a671>.
<urn:uuid:06ce4962-ff6e-4ee5-bcec-d863f30b1f5a> a report:ConstraintReport;
    report:constraint <urn:uuid:ec23ba17-d8e5-41c6-a6af-0593a18f0f24>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3e4c8c48-829c-4636-acea-b77fc549a671> a report:ConstraintReport;
    report:constraint <urn:uuid:5f724fe1-bc81-4b7c-b1df-1e9b04e5a6f5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:17a4e276-e9b7-42ea-a401-c26b0406ad59> a report:ConstraintReport;
    report:constraint <urn:uuid:3d63f1c2-83c0-4baa-affe-cb056970291b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:75eaeec7-14ea-43a0-b072-0749632b1e9d>, <urn:uuid:507e7c5d-3dfc-4769-8354-35488803f481>.
<urn:uuid:75eaeec7-14ea-43a0-b072-0749632b1e9d> a report:ConstraintReport;
    report:constraint <urn:uuid:27f1e504-7d9e-44a6-b11a-ebf5b5fe1e2d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:507e7c5d-3dfc-4769-8354-35488803f481> a report:ConstraintReport;
    report:constraint <urn:uuid:46dac938-22a8-4948-8e5f-32f9b3bb6794>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f59511b0-03ff-441c-b143-9e69eb8ca96a> a report:ConstraintReport;
    report:constraint <urn:uuid:d611d6ce-52a0-4ea0-89b9-96bef60b5cd8>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9674a7b2-4ce4-449e-a4c9-092bb4b3df6b>, <urn:uuid:918c22e0-1e37-485d-b327-5ebf8a9081de>.
<urn:uuid:9674a7b2-4ce4-449e-a4c9-092bb4b3df6b> a report:ConstraintReport;
    report:constraint <urn:uuid:f2827c25-a171-4ec6-ab2e-3388e6b76b69>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:918c22e0-1e37-485d-b327-5ebf8a9081de> a report:ConstraintReport;
    report:constraint <urn:uuid:e3188a51-750a-4063-abcf-e2ccc80179f5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:855b671b-182f-463e-bd96-b09c1848cc48> a report:ConstraintReport;
    report:constraint <urn:uuid:a7eb3b30-484d-4089-84b5-2d32e9b304de>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:89e63611-3939-45a1-b7ad-b9d12ecb9da9>, <urn:uuid:5524c721-ab6d-49ad-8ee6-705b23fccd7c>.
<urn:uuid:89e63611-3939-45a1-b7ad-b9d12ecb9da9> a report:ConstraintReport;
    report:constraint <urn:uuid:0a13dcd6-4018-4787-adfd-c8259823c058>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5524c721-ab6d-49ad-8ee6-705b23fccd7c> a report:ConstraintReport;
    report:constraint <urn:uuid:905e628f-fa47-4b72-9f76-9cbe171a4da9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:241c2239-d979-4d24-892a-b9f4c38097bd> a report:ConstraintReport;
    report:constraint <urn:uuid:eb39968c-ad7f-4cc1-8587-5b586fb9f1da>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ffda2815-4166-41ba-8dca-685ebee5fcc3>, <urn:uuid:01d07136-f543-4722-aafe-ce09f9ee5274>.
<urn:uuid:ffda2815-4166-41ba-8dca-685ebee5fcc3> a report:ConstraintReport;
    report:constraint <urn:uuid:c3a7820c-7131-4b88-aef3-b81598dd598a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:01d07136-f543-4722-aafe-ce09f9ee5274> a report:ConstraintReport;
    report:constraint <urn:uuid:b200d898-2d15-45b1-9577-aa029ef7bc02>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4c625c1a-709b-4696-a229-9f5f1fec43de> a report:ConstraintReport;
    report:constraint <urn:uuid:93741838-d8f3-488a-8eaa-2593e98d4b85>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ba25dbaa-eaed-4493-898b-6920853f5195>, <urn:uuid:cc58006d-734b-4ce9-8b42-ab4534116b14>.
<urn:uuid:ba25dbaa-eaed-4493-898b-6920853f5195> a report:ConstraintReport;
    report:constraint <urn:uuid:3877fc7d-7dcc-444e-bce5-5096271850b2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cc58006d-734b-4ce9-8b42-ab4534116b14> a report:ConstraintReport;
    report:constraint <urn:uuid:f37334cb-788d-4365-9265-db7267819a01>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:60f04af4-3f6c-4b32-85f3-a60e3112c1e2> a report:ConstraintReport;
    report:constraint <urn:uuid:9357eff0-74ad-4ef2-b7cd-b711773f361b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ddb672ba-f991-4185-98bf-f671886484c9>, <urn:uuid:6a0e7bae-6e8c-47cd-a049-5a217b69a258>.
<urn:uuid:ddb672ba-f991-4185-98bf-f671886484c9> a report:ConstraintReport;
    report:constraint <urn:uuid:1bcb5f68-157a-4393-bdb1-db0a0cbece74>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6a0e7bae-6e8c-47cd-a049-5a217b69a258> a report:ConstraintReport;
    report:constraint <urn:uuid:ac209935-9ca7-4257-bad9-e0e2e2be31b4>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fa9a91c0-0b07-45b1-8b13-7dd6d49251fe> a report:ConstraintReport;
    report:constraint <urn:uuid:e01c1d4f-b798-4898-bd37-ae8984e0895e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bf13a6ed-8f97-4d62-9d34-6c87c0db51f1>, <urn:uuid:840f66a1-e729-4711-820e-bedc19c46639>.
<urn:uuid:bf13a6ed-8f97-4d62-9d34-6c87c0db51f1> a report:ConstraintReport;
    report:constraint <urn:uuid:23112f76-3f5f-4d2e-9cc7-f12772926991>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:840f66a1-e729-4711-820e-bedc19c46639> a report:ConstraintReport;
    report:constraint <urn:uuid:618046b6-fc4b-472a-9a4a-af22112eeb60>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b16fc1b8-31bf-42c9-b435-bcae50eca07c> a report:ConstraintReport;
    report:constraint <urn:uuid:6c3f0a06-99cf-42a8-9ae1-2e22a1fec935>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:957309ba-e26d-4816-8068-a41dda69d7cf>, <urn:uuid:6d7c5014-e576-4d99-9a2d-ff333391e50f>.
<urn:uuid:957309ba-e26d-4816-8068-a41dda69d7cf> a report:ConstraintReport;
    report:constraint <urn:uuid:a3b8be99-4511-4e13-9e90-8907a7f3853a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6d7c5014-e576-4d99-9a2d-ff333391e50f> a report:ConstraintReport;
    report:constraint <urn:uuid:245ceef0-260f-4d4a-878a-b947aff1f976>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0640f423-e849-410e-b70d-8fb603262f1f> a report:ConstraintReport;
    report:constraint <urn:uuid:b4ba21e3-c660-4d48-b2ad-8a84b2e49eb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9d0e36ef-df62-417f-ba21-844844657194>, <urn:uuid:002c7cd4-7c01-456f-b36d-582ae6b292e7>.
<urn:uuid:9d0e36ef-df62-417f-ba21-844844657194> a report:ConstraintReport;
    report:constraint <urn:uuid:ca57a8d4-d07a-4132-b10a-9a6bd8e0d458>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:002c7cd4-7c01-456f-b36d-582ae6b292e7> a report:ConstraintReport;
    report:constraint <urn:uuid:ffa7fc26-5ca1-4847-9714-d2c9648a9aad>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f964dfea-9574-430c-9d79-0afc7192940a> a report:ConstraintReport;
    report:constraint <urn:uuid:a39e7e6e-fa9a-4e39-80cb-c8ffed1352e9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5c7c5796-ea9c-4044-a57e-4813b1bc36dd>, <urn:uuid:b2c807ef-19dd-4b5f-bf6a-914315ef354f>.
<urn:uuid:5c7c5796-ea9c-4044-a57e-4813b1bc36dd> a report:ConstraintReport;
    report:constraint <urn:uuid:f3f83377-1efa-4ada-abba-0762360f11d7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b2c807ef-19dd-4b5f-bf6a-914315ef354f> a report:ConstraintReport;
    report:constraint <urn:uuid:a026744a-4ffd-4efa-ae02-4ea290920e9e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b0ea24c6-62f5-4427-adc8-abed8f5846fa> a report:ConstraintReport;
    report:constraint <urn:uuid:5dbda234-1c7b-46fd-bdcd-9f56591a98ab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5ab3dcc9-7779-480d-b225-8b8e02ccdf9b>, <urn:uuid:48fc0d63-0d77-4292-afec-fb6755e661fc>.
<urn:uuid:5ab3dcc9-7779-480d-b225-8b8e02ccdf9b> a report:ConstraintReport;
    report:constraint <urn:uuid:f8db2a21-e27e-4cda-aa44-6b9a0f0dda67>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:48fc0d63-0d77-4292-afec-fb6755e661fc> a report:ConstraintReport;
    report:constraint <urn:uuid:abf18596-8372-4c44-96f5-e3652e85e3e6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a3856d94-530d-4a69-84d2-9c0cc125f43d> a report:ConstraintReport;
    report:constraint <urn:uuid:1f33abb2-fdb2-4529-8eec-3f697c2f61db>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0b2b2b49-8b72-4c93-a5d8-d076187134af>, <urn:uuid:715fcdce-1a95-4e8d-903e-85c629a49236>.
<urn:uuid:0b2b2b49-8b72-4c93-a5d8-d076187134af> a report:ConstraintReport;
    report:constraint <urn:uuid:a68891ad-9127-4c7d-b2b6-9bda152a4d79>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:715fcdce-1a95-4e8d-903e-85c629a49236> a report:ConstraintReport;
    report:constraint <urn:uuid:a74e77a9-0621-44df-bbb1-216ea0608b5f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:da7957ae-2371-424e-9c8d-8fa85f90dc1c> a report:ConstraintReport;
    report:constraint <urn:uuid:f3228127-06d6-4a78-bd6d-a6aefd50045d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4a6a01c6-8799-4f46-aaa7-e8880fe5e036>, <urn:uuid:ce4ad217-c979-4afa-9636-b1713c320b82>.
<urn:uuid:4a6a01c6-8799-4f46-aaa7-e8880fe5e036> a report:ConstraintReport;
    report:constraint <urn:uuid:9a131d45-a57c-433d-ae95-cb3b7d676458>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ce4ad217-c979-4afa-9636-b1713c320b82> a report:ConstraintReport;
    report:constraint <urn:uuid:da2b4864-d261-4d32-974a-a18b7b0ad457>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2ef05b86-bc0d-49c1-8660-fb28b31fd098> a report:ConstraintReport;
    report:constraint <urn:uuid:0c421a36-31a8-4cc6-9387-655cbece11d9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:690f8416-23f2-4608-a9d2-6bf88da9d02a>, <urn:uuid:cf3e5c06-e7fb-4486-a35e-d5d1b0089832>.
<urn:uuid:690f8416-23f2-4608-a9d2-6bf88da9d02a> a report:ConstraintReport;
    report:constraint <urn:uuid:51db01c1-81f0-4b60-8391-30af29b7f815>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cf3e5c06-e7fb-4486-a35e-d5d1b0089832> a report:ConstraintReport;
    report:constraint <urn:uuid:cbf798d8-4c19-412a-8507-8b40c9f8483f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3fdbf6aa-a5bd-42f3-8155-44624de2b832> a report:ConstraintReport;
    report:constraint <urn:uuid:8df48bc7-37a6-463e-8600-944f84ccb6be>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e6909b0f-6f73-4619-a9c8-840054551075>, <urn:uuid:3f1de107-9812-4fc0-9172-57733e8a37fe>.
<urn:uuid:e6909b0f-6f73-4619-a9c8-840054551075> a report:ConstraintReport;
    report:constraint <urn:uuid:b65c9404-0fdb-42a8-b3ef-081f253341a6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3f1de107-9812-4fc0-9172-57733e8a37fe> a report:ConstraintReport;
    report:constraint <urn:uuid:74dbf591-ec41-42fd-9b4e-0b0b12c6aa1a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f7ab09ce-c7b5-4b89-8837-1529056d9a4f> a report:ConstraintReport;
    report:constraint <urn:uuid:f2284c0e-d8cc-470b-8d66-cc186b19533f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a2751f81-44e8-4268-bbf2-c10d7c9aa3ff>, <urn:uuid:ba6ea2ce-1e6f-4c21-81bb-1632519024bd>.
<urn:uuid:a2751f81-44e8-4268-bbf2-c10d7c9aa3ff> a report:ConstraintReport;
    report:constraint <urn:uuid:d4d15c9c-c99a-4bf8-a518-275c9f98f3d0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ba6ea2ce-1e6f-4c21-81bb-1632519024bd> a report:ConstraintReport;
    report:constraint <urn:uuid:37036221-dbfa-436b-b6e8-22e9a4912042>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:07f867e5-d6a7-45df-a2a1-1942f67d1465> a report:ConstraintReport;
    report:constraint <urn:uuid:b50718c6-2b45-4e05-9f0e-35352168177e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4073947a-b711-4208-a1e9-45a96913bbc7>, <urn:uuid:ccfec77a-eed9-4f10-ae7c-d3ca2ba75643>.
<urn:uuid:4073947a-b711-4208-a1e9-45a96913bbc7> a report:ConstraintReport;
    report:constraint <urn:uuid:37520bb1-e228-4b2d-af87-70a124f9f509>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ccfec77a-eed9-4f10-ae7c-d3ca2ba75643> a report:ConstraintReport;
    report:constraint <urn:uuid:17af2da2-0d6e-4305-9f20-af582f28e69f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fad33323-1bee-4812-bd7c-f8ab4e3f2ad0> a report:ConstraintReport;
    report:constraint <urn:uuid:524fb88e-3c3e-4296-8b14-9254caa38d43>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:70f387f5-33c8-4120-96a5-f3b18d66683f>, <urn:uuid:f2b4110f-580b-4672-a7b6-602628126137>.
<urn:uuid:70f387f5-33c8-4120-96a5-f3b18d66683f> a report:ConstraintReport;
    report:constraint <urn:uuid:5727cb4d-637e-424a-886a-a92e8a68792e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f2b4110f-580b-4672-a7b6-602628126137> a report:ConstraintReport;
    report:constraint <urn:uuid:946b77ef-d4ba-43c3-a536-9fd168f7cb15>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5d66ae56-5db8-4693-a583-e3cc277d9b04> a report:ConstraintReport;
    report:constraint <urn:uuid:e24d42a3-23dc-4f6d-930c-b2f95fec0ad9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7acabce5-f77a-4d40-b638-8b8df2cbc461>, <urn:uuid:e0aee46b-e45e-442e-ada4-09278cc0828b>.
<urn:uuid:7acabce5-f77a-4d40-b638-8b8df2cbc461> a report:ConstraintReport;
    report:constraint <urn:uuid:e05a11c3-2df6-4657-9696-4edb57656ca3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e0aee46b-e45e-442e-ada4-09278cc0828b> a report:ConstraintReport;
    report:constraint <urn:uuid:bdbb3f61-36a7-4f99-9b56-5c4104117421>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a54b47b4-c03d-4536-bc6f-f1d3bfecae34> a report:ConstraintReport;
    report:constraint <urn:uuid:efd32427-0878-4da6-840b-2cd88b36c229>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:13d68157-b76f-4db2-86c5-e5f191ff1fd8>, <urn:uuid:d2b760b0-f878-4669-a38c-a0e0f7d2ee19>.
<urn:uuid:13d68157-b76f-4db2-86c5-e5f191ff1fd8> a report:ConstraintReport;
    report:constraint <urn:uuid:5ff79eae-7d0a-4ab0-b0c1-74c523d460a8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d2b760b0-f878-4669-a38c-a0e0f7d2ee19> a report:ConstraintReport;
    report:constraint <urn:uuid:cd637661-71d1-4925-b4fd-bb81f35b1834>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dc793da2-6462-49b2-986c-ec998855b97f> a report:ConstraintReport;
    report:constraint <urn:uuid:8238c0e7-4e25-4f42-b293-66221cf2cadd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c827c686-e2cc-4e8c-91c3-540861be2fa8>, <urn:uuid:98f36ef5-04e6-4bea-b628-4d0f9e55baac>.
<urn:uuid:c827c686-e2cc-4e8c-91c3-540861be2fa8> a report:ConstraintReport;
    report:constraint <urn:uuid:f900a6e2-1227-42cc-a735-6268ed2976a2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:98f36ef5-04e6-4bea-b628-4d0f9e55baac> a report:ConstraintReport;
    report:constraint <urn:uuid:b76c4668-5409-4b7b-b609-c251f04f9fc0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9c77bd3a-4517-4d45-a213-301320640734> a report:ConstraintReport;
    report:constraint <urn:uuid:69cc4707-3662-4ee7-a597-37ce601435e2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8f3d9ec5-5142-4d89-9e93-5781c43cfec0>, <urn:uuid:4f5c6ef9-ada1-4f47-80ec-2e79448ed967>.
<urn:uuid:8f3d9ec5-5142-4d89-9e93-5781c43cfec0> a report:ConstraintReport;
    report:constraint <urn:uuid:2a5640a1-46ba-4595-8b77-1a91007a2420>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4f5c6ef9-ada1-4f47-80ec-2e79448ed967> a report:ConstraintReport;
    report:constraint <urn:uuid:aa57f57d-11d0-4248-ad8c-36b554498708>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8e78e4e4-d65f-4b01-9c43-192151728465> a report:ConstraintReport;
    report:constraint <urn:uuid:44a11646-feed-4e00-ad9f-ff087a9753bf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5d16c536-5bd3-41a8-ac91-15d46381954d>, <urn:uuid:b06a4514-c608-4f48-ac91-aee52a4f473a>.
<urn:uuid:5d16c536-5bd3-41a8-ac91-15d46381954d> a report:ConstraintReport;
    report:constraint <urn:uuid:d9e3e6fe-05db-4bff-ba28-ec37ef313df5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b06a4514-c608-4f48-ac91-aee52a4f473a> a report:ConstraintReport;
    report:constraint <urn:uuid:a59a52c6-8dd2-4302-a863-7d213ff17830>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e2e27ef2-0960-4262-a70e-a820278436fb> a report:ConstraintReport;
    report:constraint <urn:uuid:f9117877-e0a1-4ce2-87b9-b9ef6e33baa9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3e78e878-c1f5-4eb7-a6e2-704f3ed1bcad>, <urn:uuid:81dc774b-6836-42b7-9e1e-0400d5cf62fe>.
<urn:uuid:3e78e878-c1f5-4eb7-a6e2-704f3ed1bcad> a report:ConstraintReport;
    report:constraint <urn:uuid:9d24e455-7082-4d39-8a19-d7aef1e9222c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:81dc774b-6836-42b7-9e1e-0400d5cf62fe> a report:ConstraintReport;
    report:constraint <urn:uuid:419290e2-7984-42d6-8f29-d2ec68063815>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d8023a3e-1d8f-48da-95a4-e5ce9f2134ea> a report:ConstraintReport;
    report:constraint <urn:uuid:38f11df6-dbfc-415a-a7df-fc05d82c3061>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:993a5fb5-6f88-4d8e-aab7-730f87330977>, <urn:uuid:d66f7086-d205-446d-a21a-d58ede0c4454>.
<urn:uuid:993a5fb5-6f88-4d8e-aab7-730f87330977> a report:ConstraintReport;
    report:constraint <urn:uuid:fc158863-3bb8-45b4-8257-a0e1d854806e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d66f7086-d205-446d-a21a-d58ede0c4454> a report:ConstraintReport;
    report:constraint <urn:uuid:1f7287e9-71a6-4ff7-9768-346a331e80fd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9c067f03-a3f5-447a-9ac0-d6a222cf3704> a report:ConstraintReport;
    report:constraint <urn:uuid:20497829-b46a-4328-a651-b38428b12192>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:288e8778-ea5c-4536-ba5e-3e089ab45923>, <urn:uuid:5398a313-a4b0-4382-8dc3-18c33150a35b>.
<urn:uuid:288e8778-ea5c-4536-ba5e-3e089ab45923> a report:ConstraintReport;
    report:constraint <urn:uuid:eff46f32-949d-4f3d-9a56-01a7bf6a53a8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5398a313-a4b0-4382-8dc3-18c33150a35b> a report:ConstraintReport;
    report:constraint <urn:uuid:e6a48e62-befb-4738-ab0e-b3a22d1dde61>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:50aa1640-5a26-4993-807f-0b4941366740> a report:ConstraintReport;
    report:constraint <urn:uuid:bf3f94cc-70da-4f6b-bd39-8f16892198f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ea526ad9-a036-4f03-b951-a2444f516e35>, <urn:uuid:0161450b-2978-43f0-9137-267ae967cf14>.
<urn:uuid:ea526ad9-a036-4f03-b951-a2444f516e35> a report:ConstraintReport;
    report:constraint <urn:uuid:d8a4c948-73b2-4789-8dc7-500f6d752fe8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0161450b-2978-43f0-9137-267ae967cf14> a report:ConstraintReport;
    report:constraint <urn:uuid:60c28b6b-e36f-4796-a994-74b993368ed2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e61256a7-b645-4bf7-82d8-602c56321ae0> a report:ConstraintReport;
    report:constraint <urn:uuid:c60e0ec8-902f-4e6e-a412-fa7d05c834ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:19abd1ef-f815-49cf-8db3-6fa49c1e0e14>, <urn:uuid:64a5baa1-8fc7-40d7-8aaa-2bf9151034b5>.
<urn:uuid:19abd1ef-f815-49cf-8db3-6fa49c1e0e14> a report:ConstraintReport;
    report:constraint <urn:uuid:2e3d1a4d-43d5-4e35-81b0-20497b73a8f2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:64a5baa1-8fc7-40d7-8aaa-2bf9151034b5> a report:ConstraintReport;
    report:constraint <urn:uuid:c413ec7a-e39a-4739-b6c9-87ace5a05a16>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9b74dcc5-351a-4fa0-9601-59e044ebf8b9> a report:ConstraintReport;
    report:constraint <urn:uuid:e0ac9c09-e2d0-492e-8ce6-2bf419cbd71e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0d5d97de-add2-4909-9af6-0bf7ebd64d7f>, <urn:uuid:c12c947f-ce9b-47ac-953f-49aae33bdaca>.
<urn:uuid:0d5d97de-add2-4909-9af6-0bf7ebd64d7f> a report:ConstraintReport;
    report:constraint <urn:uuid:a782236f-7af5-4f82-a154-da1a9194b9ea>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c12c947f-ce9b-47ac-953f-49aae33bdaca> a report:ConstraintReport;
    report:constraint <urn:uuid:9ca17b3b-86f1-476d-981d-b308d335d885>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4fe2ed7e-4adf-4fa1-883a-ccc06d5c7447> a report:ConstraintReport;
    report:constraint <urn:uuid:f66f7a5c-58fd-4fb9-ac2a-847f7dc48a55>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:89b184bb-2b50-44e3-aa46-0ed00a57a5a0>, <urn:uuid:6a5be3ed-e1b2-498d-a775-c9095f5582d4>.
<urn:uuid:89b184bb-2b50-44e3-aa46-0ed00a57a5a0> a report:ConstraintReport;
    report:constraint <urn:uuid:8794f6f8-f1e0-49d4-aa88-18daf5c4aa22>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6a5be3ed-e1b2-498d-a775-c9095f5582d4> a report:ConstraintReport;
    report:constraint <urn:uuid:d3fbae36-fc42-4040-8d38-de522d5276ee>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e7f9beab-9ca4-4a8a-b09f-6e1f6f6254ca> a report:ConstraintReport;
    report:constraint <urn:uuid:ec84c86e-89c5-4a84-9b3c-5f6ea87859c6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:629368ac-dc6f-4289-b1df-4438be6f8c9f>, <urn:uuid:2d774df0-b67c-4281-b3e9-5cb5df3aac5f>.
<urn:uuid:629368ac-dc6f-4289-b1df-4438be6f8c9f> a report:ConstraintReport;
    report:constraint <urn:uuid:c7b692c7-fc26-433e-a130-3997e1187bbd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2d774df0-b67c-4281-b3e9-5cb5df3aac5f> a report:ConstraintReport;
    report:constraint <urn:uuid:3fe3d04d-e964-4a7d-8949-9a1c7fee8d80>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:db352bf4-7795-49ea-bec4-9310848e3586> a report:ConstraintReport;
    report:constraint <urn:uuid:2581ca84-38bf-4716-a954-6ad2f779a1c6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3f1ce8a5-21e6-4e8e-9c95-9b827229c515>, <urn:uuid:6a9885fc-073d-4d2c-9d8e-03ce9bcb8d32>.
<urn:uuid:3f1ce8a5-21e6-4e8e-9c95-9b827229c515> a report:ConstraintReport;
    report:constraint <urn:uuid:a8dbdf25-82ce-4169-a191-f206d3a3f6d2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6a9885fc-073d-4d2c-9d8e-03ce9bcb8d32> a report:ConstraintReport;
    report:constraint <urn:uuid:58569b9a-3db1-4bf9-884a-136db633ab9e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6e1ec871-1b44-4935-adec-c5977856b2bf> a report:ConstraintReport;
    report:constraint <urn:uuid:cc3ee7b5-34b1-4630-81e2-ac37b8274e9e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:08c775d8-311f-4a1b-893a-c4690dada645>, <urn:uuid:925400c9-02ff-49ed-936b-7852c96d213c>.
<urn:uuid:08c775d8-311f-4a1b-893a-c4690dada645> a report:ConstraintReport;
    report:constraint <urn:uuid:a5759a20-2138-4dd5-8bc8-3aa25cae17bc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:925400c9-02ff-49ed-936b-7852c96d213c> a report:ConstraintReport;
    report:constraint <urn:uuid:cc29cd17-c96e-4146-b845-e4b4b13f0310>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2a3c1d59-9e1e-4730-b7fd-b3024e32ac76> a report:ConstraintReport;
    report:constraint <urn:uuid:f3d10c6b-c3c9-4b32-b3ed-1eb40ae2004e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:37a480d7-343f-41e9-8358-ba12794040a7>, <urn:uuid:5536e774-aa0b-465d-ae4d-f46a55e7bc3e>.
<urn:uuid:37a480d7-343f-41e9-8358-ba12794040a7> a report:ConstraintReport;
    report:constraint <urn:uuid:e9a8ea8d-8735-4d6c-ad7d-c03db4c4a063>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5536e774-aa0b-465d-ae4d-f46a55e7bc3e> a report:ConstraintReport;
    report:constraint <urn:uuid:f58b9a7c-2c12-4ef4-8187-a94b148e3371>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fcd6b77f-3648-4965-92c2-28ce9e21963c> a report:ConstraintReport;
    report:constraint <urn:uuid:ecbe9aa1-a9d8-419f-9675-2c158a5919a7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ce0b3a28-eff2-4b59-938b-ba7ad1c92376>, <urn:uuid:920209db-48aa-499a-9ae5-9073afe97155>.
<urn:uuid:ce0b3a28-eff2-4b59-938b-ba7ad1c92376> a report:ConstraintReport;
    report:constraint <urn:uuid:0cc1512d-9fa0-498a-8391-b0fe27700ae4>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:920209db-48aa-499a-9ae5-9073afe97155> a report:ConstraintReport;
    report:constraint <urn:uuid:5026529f-5715-413e-a117-e4cdcabd0bde>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:84f3b81e-9e22-4759-b041-02c8556f059f> a report:ConstraintReport;
    report:constraint <urn:uuid:629997aa-cd95-433c-8b3c-b9aad2c6aa3e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5491c408-45c9-4252-a3be-f93064a9c099>, <urn:uuid:0c6341c6-faa0-451a-9256-428feebf056f>.
<urn:uuid:5491c408-45c9-4252-a3be-f93064a9c099> a report:ConstraintReport;
    report:constraint <urn:uuid:2c738aba-d13f-429e-8d48-87e132bb3f53>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0c6341c6-faa0-451a-9256-428feebf056f> a report:ConstraintReport;
    report:constraint <urn:uuid:ed8574f6-f123-438c-9116-b05fc4094151>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8728b587-f112-4fcb-9060-1f8075e72cf9> a report:ConstraintReport;
    report:constraint <urn:uuid:e4735358-f475-492c-b080-9b9b369fbd38>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:294cce88-be83-4e44-bded-9c5d8dc61aa4>, <urn:uuid:1e0e5c4f-2a91-464e-a6d5-40c210c50cbd>.
<urn:uuid:294cce88-be83-4e44-bded-9c5d8dc61aa4> a report:ConstraintReport;
    report:constraint <urn:uuid:ce99b4c5-8f0d-435e-b6de-0e01f16263d9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1e0e5c4f-2a91-464e-a6d5-40c210c50cbd> a report:ConstraintReport;
    report:constraint <urn:uuid:796dbb29-e79f-495c-8ba3-2c91884e0b22>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1d8e92ea-bae9-4990-8772-1f58358d9033> a report:ConstraintReport;
    report:constraint <urn:uuid:8e7ca55b-5a1f-4444-9337-ee4f2f9025c7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b44fd623-9fe9-492b-8711-a35b70869574>, <urn:uuid:7bced018-4a6a-49ce-bdb1-1f635a1fd312>.
<urn:uuid:b44fd623-9fe9-492b-8711-a35b70869574> a report:ConstraintReport;
    report:constraint <urn:uuid:1a1f352f-c2bb-4d81-8dca-0c213f6da148>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7bced018-4a6a-49ce-bdb1-1f635a1fd312> a report:ConstraintReport;
    report:constraint <urn:uuid:e51c2a9a-716e-4a6f-9e43-169dacd0169d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4130e759-b43c-4a16-a53d-0ee2d1f0c5cf> a report:ConstraintReport;
    report:constraint <urn:uuid:759a8766-a480-4c20-9a62-3092af654182>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fadb7c23-73de-490f-8c6d-f29bddbf3f5e>, <urn:uuid:7be0dc0b-420d-456c-98a1-abc7acb2833e>.
<urn:uuid:fadb7c23-73de-490f-8c6d-f29bddbf3f5e> a report:ConstraintReport;
    report:constraint <urn:uuid:d781a87e-06dd-41c3-bb4c-1cef8133835a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7be0dc0b-420d-456c-98a1-abc7acb2833e> a report:ConstraintReport;
    report:constraint <urn:uuid:42a89d23-c815-4bc0-98b0-35bab1f36b4d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:017a67f7-dcaf-461b-bf7e-08def9f9a26a> a report:ConstraintReport;
    report:constraint <urn:uuid:e9e4a6cc-4c5c-4a23-8181-009a02c7aa7d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0b88ebcb-e7c9-460c-a1e6-7f862e607a76>, <urn:uuid:2e1bf1b9-033d-488c-8527-f8f399bf92db>.
<urn:uuid:0b88ebcb-e7c9-460c-a1e6-7f862e607a76> a report:ConstraintReport;
    report:constraint <urn:uuid:7288eb0a-3ad6-4b36-b1e1-7dec59d6625a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2e1bf1b9-033d-488c-8527-f8f399bf92db> a report:ConstraintReport;
    report:constraint <urn:uuid:244df4e1-cfd3-4c00-ac26-4d781bbd880e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b430f887-4150-4778-b6e4-995b8c4c9b77> a report:ConstraintReport;
    report:constraint <urn:uuid:9429299d-a355-491e-a34a-ba490a9f1bea>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1de1b8f5-96be-4541-b295-d8390d46ae5a>, <urn:uuid:18b77379-a231-4ec5-9bbe-9f74451c87bb>.
<urn:uuid:1de1b8f5-96be-4541-b295-d8390d46ae5a> a report:ConstraintReport;
    report:constraint <urn:uuid:7617f4a3-05d3-4418-9909-fddcac55db5f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:18b77379-a231-4ec5-9bbe-9f74451c87bb> a report:ConstraintReport;
    report:constraint <urn:uuid:0d23d75e-2fe8-4d31-b31d-5f4f01808a7b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7ce5a707-c444-472d-bd18-96f0e6fe64d0> a report:ConstraintReport;
    report:constraint <urn:uuid:6ffe395c-28bb-4a5b-8b46-423970f03867>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3e458e81-1b2e-466c-952c-36aa5995d828>, <urn:uuid:ebeb25aa-c420-4634-aff9-f68771d963ab>.
<urn:uuid:3e458e81-1b2e-466c-952c-36aa5995d828> a report:ConstraintReport;
    report:constraint <urn:uuid:8402ebf0-1db1-4710-a8d8-ec248cb7b64c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ebeb25aa-c420-4634-aff9-f68771d963ab> a report:ConstraintReport;
    report:constraint <urn:uuid:39d431e4-8742-4dd0-aa7e-f780d413b613>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7e633ef9-e3fd-43e8-98f9-6226e9af112e> a report:ConstraintReport;
    report:constraint <urn:uuid:40fa925a-712e-4f2a-a737-ab9fbcf3319a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1d5c40c0-586f-45e1-a501-df5870aefdb6>, <urn:uuid:5668ff9d-5726-44c6-a670-2000b240e6b5>.
<urn:uuid:1d5c40c0-586f-45e1-a501-df5870aefdb6> a report:ConstraintReport;
    report:constraint <urn:uuid:3c55fbf2-1323-45ab-a1d0-1580b9fa34e9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5668ff9d-5726-44c6-a670-2000b240e6b5> a report:ConstraintReport;
    report:constraint <urn:uuid:0d1698a6-4aec-423b-84fb-44d600cb69ca>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4458dfb0-91c7-41b7-8927-3377d08f8b65> a report:ConstraintReport;
    report:constraint <urn:uuid:6154c58e-869f-454b-876b-d400bfa0770e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d1395cfe-b620-44e1-a5d6-80354bad4d27>, <urn:uuid:a78fb532-5f87-4206-91d5-9db32618ad2c>.
<urn:uuid:d1395cfe-b620-44e1-a5d6-80354bad4d27> a report:ConstraintReport;
    report:constraint <urn:uuid:ad6a73a4-9a3a-4154-b445-447f097d8d51>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a78fb532-5f87-4206-91d5-9db32618ad2c> a report:ConstraintReport;
    report:constraint <urn:uuid:e28f2764-4717-48d1-af4d-a025a262c75b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b32e169c-0294-4aa4-8156-4bc91e24fc2c> a report:ConstraintReport;
    report:constraint <urn:uuid:8c84d6f9-c83c-49d9-b988-e571c6493e21>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9f2cb2fa-fed7-423e-966c-b93bcf3da327>, <urn:uuid:c38c1c70-c38f-40c2-af98-4b1bbf3f1815>.
<urn:uuid:9f2cb2fa-fed7-423e-966c-b93bcf3da327> a report:ConstraintReport;
    report:constraint <urn:uuid:e1b7390f-b3ee-4a62-9b84-958cd7205503>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c38c1c70-c38f-40c2-af98-4b1bbf3f1815> a report:ConstraintReport;
    report:constraint <urn:uuid:a0c4e370-8eb7-4533-960c-18edc1347606>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b86739c3-bfa9-4a69-b66c-2762be8a45e2> a report:ConstraintReport;
    report:constraint <urn:uuid:4eea153f-9a27-44da-8432-40aea5bdfc5d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:696af650-6b41-432c-b31f-6239664f408e>, <urn:uuid:8f789be1-3bd8-4276-bde4-af17751495c1>.
<urn:uuid:696af650-6b41-432c-b31f-6239664f408e> a report:ConstraintReport;
    report:constraint <urn:uuid:a07bd66a-264c-49de-b61b-52eb4900e7c5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8f789be1-3bd8-4276-bde4-af17751495c1> a report:ConstraintReport;
    report:constraint <urn:uuid:794229d2-8312-4e36-a44e-5cd86dcd5e9f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:55c91f84-248b-4488-8f27-9670681688c7> a report:ConstraintReport;
    report:constraint <urn:uuid:fe175296-5b32-4174-ad5b-9227a44c3615>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:abacaea6-974d-4e29-aff8-1dc519a247db>, <urn:uuid:ffb62e62-87cd-495c-957f-7a5e85b49c5e>.
<urn:uuid:abacaea6-974d-4e29-aff8-1dc519a247db> a report:ConstraintReport;
    report:constraint <urn:uuid:851265bd-c336-49b1-80de-07ddd58cbf0e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ffb62e62-87cd-495c-957f-7a5e85b49c5e> a report:ConstraintReport;
    report:constraint <urn:uuid:aa62a8c6-b42e-4776-abb9-eaf7b9b32630>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:764a4688-608f-4116-bacf-054cd56ea828> a report:ConstraintReport;
    report:constraint <urn:uuid:20a309ef-154e-4a93-82df-a7d1c633b8e7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:42102939-8f27-441d-9477-989c10455d12>, <urn:uuid:34ee5c10-2466-487d-b473-586a69913e2e>.
<urn:uuid:42102939-8f27-441d-9477-989c10455d12> a report:ConstraintReport;
    report:constraint <urn:uuid:25ad60f5-db0c-4c1f-bf7a-cdd121e3413f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:34ee5c10-2466-487d-b473-586a69913e2e> a report:ConstraintReport;
    report:constraint <urn:uuid:d3fb977b-c2fb-4822-82f2-eec957086742>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d3233b32-8a92-4cfd-a080-d67a7a29ac22> a report:ConstraintReport;
    report:constraint <urn:uuid:d6d4f8b2-82e7-4e4f-8949-94f5b5175654>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:53b9a558-ca03-40fb-bcb1-53c7ce8b09ec>, <urn:uuid:5c73eb3d-74f3-4ebc-9fa0-4fa36ec59666>.
<urn:uuid:53b9a558-ca03-40fb-bcb1-53c7ce8b09ec> a report:ConstraintReport;
    report:constraint <urn:uuid:7251a15a-cc69-4977-a8d5-d85e8acde17f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5c73eb3d-74f3-4ebc-9fa0-4fa36ec59666> a report:ConstraintReport;
    report:constraint <urn:uuid:3682efaa-846f-46b6-a557-e3a13c7ba88c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:536188cf-bd04-4181-9581-3913c482d795> a report:ConstraintReport;
    report:constraint <urn:uuid:99489667-c4e5-405e-a108-ecdd3413e89b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cff9d3e4-8953-481e-a971-be39d8d526c8>, <urn:uuid:7e422b46-7dae-478d-a103-4e57cdbcbaf5>.
<urn:uuid:cff9d3e4-8953-481e-a971-be39d8d526c8> a report:ConstraintReport;
    report:constraint <urn:uuid:c3d68483-7988-44af-82c9-82771a7401fb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7e422b46-7dae-478d-a103-4e57cdbcbaf5> a report:ConstraintReport;
    report:constraint <urn:uuid:77f83627-128e-4a96-84f7-ff2d0073161c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6fdb11b5-6954-42eb-a90c-327fac10cd39> a report:ConstraintReport;
    report:constraint <urn:uuid:36a81698-68dc-4276-930b-5faea86191a2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a28e0d40-a088-44dc-a08c-0dbe7ddc3397>, <urn:uuid:e5976023-3092-461e-ae6a-53044067340c>.
<urn:uuid:a28e0d40-a088-44dc-a08c-0dbe7ddc3397> a report:ConstraintReport;
    report:constraint <urn:uuid:087a31cb-9634-42fa-9797-642cb5d19789>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e5976023-3092-461e-ae6a-53044067340c> a report:ConstraintReport;
    report:constraint <urn:uuid:2e04982c-f04b-4fce-9942-72a65f47cb55>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b5033115-64e3-4186-88ce-ac5c9da74243> a report:ConstraintReport;
    report:constraint <urn:uuid:a79cbb6a-c51d-46c3-9abd-0f58b7d96220>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:068b0ee9-05c3-45c8-a869-d3d24004d9d2>, <urn:uuid:f2f5e60e-a00a-496c-a65a-5f7f5e6b5316>.
<urn:uuid:068b0ee9-05c3-45c8-a869-d3d24004d9d2> a report:ConstraintReport;
    report:constraint <urn:uuid:d8d3dabd-51f8-481a-a55e-b08723ccc328>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f2f5e60e-a00a-496c-a65a-5f7f5e6b5316> a report:ConstraintReport;
    report:constraint <urn:uuid:4554f885-28eb-461d-8475-084cfbe3c43c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2201c101-6b45-450a-bb12-2ec96a1697c6> a report:ConstraintReport;
    report:constraint <urn:uuid:f8ecc917-b0a1-49de-b763-b2fa1084454c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:66bceb2a-3aaa-476a-92f0-f96ca3abfe0e>, <urn:uuid:86d68a29-6834-4de7-9798-54af1c469e7d>.
<urn:uuid:66bceb2a-3aaa-476a-92f0-f96ca3abfe0e> a report:ConstraintReport;
    report:constraint <urn:uuid:bb11ab45-377c-415f-8b4a-8fdc12f5a94e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:86d68a29-6834-4de7-9798-54af1c469e7d> a report:ConstraintReport;
    report:constraint <urn:uuid:3e913bd3-caf8-486c-9e39-6159bfee839a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4b5240ac-c8af-4cca-aeff-47fcd3483738> a report:ConstraintReport;
    report:constraint <urn:uuid:8d6e9a21-8ce8-47f3-826f-6c1ed990251b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e89e0c69-815e-46ca-8355-2db128278e70>, <urn:uuid:497191cb-4396-4d40-9461-2acc906bcda1>.
<urn:uuid:e89e0c69-815e-46ca-8355-2db128278e70> a report:ConstraintReport;
    report:constraint <urn:uuid:3987d626-8481-4800-80df-ed1336914c35>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:497191cb-4396-4d40-9461-2acc906bcda1> a report:ConstraintReport;
    report:constraint <urn:uuid:d1cf7dd3-de8f-41f3-8806-15460d723a51>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:63f4c228-12e0-48f8-b71c-89196c3c73bc> a report:ConstraintReport;
    report:constraint <urn:uuid:025579ca-9595-47c6-ae79-9d31d26f72ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4ec1c837-0de2-4d66-8e70-2c585bd23c81>, <urn:uuid:98392770-51ec-4823-842b-531681424599>.
<urn:uuid:4ec1c837-0de2-4d66-8e70-2c585bd23c81> a report:ConstraintReport;
    report:constraint <urn:uuid:dc34a600-547c-4000-a19d-88bb4eb1d860>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:98392770-51ec-4823-842b-531681424599> a report:ConstraintReport;
    report:constraint <urn:uuid:7791ed09-f751-4452-b10f-fad443cee896>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:472cac68-dfc5-4a11-8ece-38fac7cdf9b1> a report:ConstraintReport;
    report:constraint <urn:uuid:b2335484-2193-43d5-952d-0eaa78b4d228>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:72b87415-8088-44bb-b836-d72c6b3096e4>, <urn:uuid:4762158b-ed46-4e82-9c59-a782940dc1ea>.
<urn:uuid:72b87415-8088-44bb-b836-d72c6b3096e4> a report:ConstraintReport;
    report:constraint <urn:uuid:fb78ee8b-dce9-4c2e-a171-7cad399c0378>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4762158b-ed46-4e82-9c59-a782940dc1ea> a report:ConstraintReport;
    report:constraint <urn:uuid:46e9b9f4-74ee-476a-b68e-24fe6b624672>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:aa5ac641-9da7-45a2-bb12-a8ab6992cb6f> a report:ConstraintReport;
    report:constraint <urn:uuid:20a8ed90-e5f2-47a9-8420-bc3365ef15e3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0742786c-6025-446e-926b-b1b9b048f478>, <urn:uuid:50cf749c-5f2c-47c6-851d-3b418aee33e8>.
<urn:uuid:0742786c-6025-446e-926b-b1b9b048f478> a report:ConstraintReport;
    report:constraint <urn:uuid:ed54ec4b-a1d9-47a9-a225-41ffbdb02c9b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:50cf749c-5f2c-47c6-851d-3b418aee33e8> a report:ConstraintReport;
    report:constraint <urn:uuid:2510ad4a-bac1-4958-b6f8-9bd261738531>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8b98f1f2-d103-4f09-8b17-d729dda4cd90> a report:ConstraintReport;
    report:constraint <urn:uuid:f1e9e740-386d-41df-b308-f55f64cba6dc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5d25bd1a-3655-448a-a8ff-4d52abc43e37>, <urn:uuid:c29a5646-d43f-4588-9b2a-5951acb14404>.
<urn:uuid:5d25bd1a-3655-448a-a8ff-4d52abc43e37> a report:ConstraintReport;
    report:constraint <urn:uuid:5adca922-de27-4ca9-a2a6-55f0ba9635c8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c29a5646-d43f-4588-9b2a-5951acb14404> a report:ConstraintReport;
    report:constraint <urn:uuid:787113f2-55df-462e-84fa-cb658c50d8fb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f96caf91-c909-4577-b7b6-623dba4946bb> a report:ConstraintReport;
    report:constraint <urn:uuid:74a74712-2516-45e2-a784-80773c55d465>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3eb2fe77-87c0-4470-a51c-c9fd6250e1fa>, <urn:uuid:e4a72821-ed87-4f83-9a2f-cfb82b4c1a5f>.
<urn:uuid:3eb2fe77-87c0-4470-a51c-c9fd6250e1fa> a report:ConstraintReport;
    report:constraint <urn:uuid:a2c81302-1a5c-4ebe-9fa0-cec8ceebd576>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e4a72821-ed87-4f83-9a2f-cfb82b4c1a5f> a report:ConstraintReport;
    report:constraint <urn:uuid:8f122756-faf5-47c1-91ca-2a22b12052dc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4e19ab06-f057-4869-808d-0e9f4110d780> a report:ConstraintReport;
    report:constraint <urn:uuid:8d19eb5d-ccc8-4b19-87c3-94f838e96639>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7850bc19-a0c4-4f38-a8f6-cb8fb2baf08c>, <urn:uuid:0849312e-9667-40ec-af84-0bb6d4136d37>.
<urn:uuid:7850bc19-a0c4-4f38-a8f6-cb8fb2baf08c> a report:ConstraintReport;
    report:constraint <urn:uuid:d961840a-dd39-4d00-b90d-c4096ae0e49c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0849312e-9667-40ec-af84-0bb6d4136d37> a report:ConstraintReport;
    report:constraint <urn:uuid:b33afa3b-d928-43e0-b03f-d3642fcf4065>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f103ddce-97cb-4ec4-afdc-b0573487b470> a report:ConstraintReport;
    report:constraint <urn:uuid:7edae164-7a1d-4e39-a6ff-5496ebd833cd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1b1ca56a-6824-49ba-bd40-f433d2ac2e38>, <urn:uuid:6aad3552-dae8-4995-8324-9429abf39543>.
<urn:uuid:1b1ca56a-6824-49ba-bd40-f433d2ac2e38> a report:ConstraintReport;
    report:constraint <urn:uuid:2fa84ecc-ab3a-4e6e-a397-2aa12d76ad6b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6aad3552-dae8-4995-8324-9429abf39543> a report:ConstraintReport;
    report:constraint <urn:uuid:ecf2fc3d-d925-4156-8e14-63adbf18674c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2abcd5a8-2815-4531-a5c6-0932ad6f123e> a report:ConstraintReport;
    report:constraint <urn:uuid:45a8feaf-d112-4336-a432-b8cf99a6ad09>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:79b51591-3094-4a3c-8f45-7ec366082472>, <urn:uuid:fefa0b36-facb-481b-9d9f-bc32907e2910>.
<urn:uuid:79b51591-3094-4a3c-8f45-7ec366082472> a report:ConstraintReport;
    report:constraint <urn:uuid:f1678757-894d-4525-b892-956f3f665072>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fefa0b36-facb-481b-9d9f-bc32907e2910> a report:ConstraintReport;
    report:constraint <urn:uuid:9792608d-cac5-4659-a9d4-edc45714af19>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:749a0288-735c-4d00-b10a-54cf820aa4f2> a report:ConstraintReport;
    report:constraint <urn:uuid:df0a77f7-1d54-484a-afaf-4826ad4fcba1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7d8b1709-65ca-42b0-b326-f940f0015e69>, <urn:uuid:9b7ef65a-1a52-40c7-9192-928ac307c0d0>.
<urn:uuid:7d8b1709-65ca-42b0-b326-f940f0015e69> a report:ConstraintReport;
    report:constraint <urn:uuid:22e36e1b-f376-4454-a21f-69b1320a468b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9b7ef65a-1a52-40c7-9192-928ac307c0d0> a report:ConstraintReport;
    report:constraint <urn:uuid:00637563-7e3b-405b-a3b7-b6be21c48433>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:aa653972-8502-412f-9ae5-d8d2c920b65b> a report:ConstraintReport;
    report:constraint <urn:uuid:a5438dee-3584-40f2-b589-5f59bd64253e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:069287e7-68c9-4153-8cc7-699ce7f49867>, <urn:uuid:9a803c5d-8f3c-4c96-9791-77be569c2060>.
<urn:uuid:069287e7-68c9-4153-8cc7-699ce7f49867> a report:ConstraintReport;
    report:constraint <urn:uuid:8e39f6ff-6fcd-4d57-a1ff-9caae5bcfb96>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9a803c5d-8f3c-4c96-9791-77be569c2060> a report:ConstraintReport;
    report:constraint <urn:uuid:557d07f0-dbec-4e09-a7d5-53e3f6a5ac70>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b2be9eb5-16f3-4638-9e0a-8c6e19b705cd> a report:ConstraintReport;
    report:constraint <urn:uuid:da363350-32e5-4e5d-8295-56f8fcdd8ffd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9cfdfa5c-d1e3-4921-86ad-66e2cf79be7b>, <urn:uuid:e2d43503-a592-4b75-bf10-6a42927b6446>.
<urn:uuid:9cfdfa5c-d1e3-4921-86ad-66e2cf79be7b> a report:ConstraintReport;
    report:constraint <urn:uuid:89b7d92a-99c6-4b7a-8533-4448713e7d3a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e2d43503-a592-4b75-bf10-6a42927b6446> a report:ConstraintReport;
    report:constraint <urn:uuid:63866b29-a379-4841-95df-72d9148359be>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:15b4336e-6283-43d5-b867-fc929fe7d286> a report:ConstraintReport;
    report:constraint <urn:uuid:652fdfd1-0c51-4bd5-a795-37770d4d9ac1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f5620d84-7a8c-45f8-b3c0-822363efdb84>, <urn:uuid:1eb6dbe9-7403-4b66-bf4c-5bac961a1240>.
<urn:uuid:f5620d84-7a8c-45f8-b3c0-822363efdb84> a report:ConstraintReport;
    report:constraint <urn:uuid:33230260-0328-4d17-a0f4-54fd5df1681e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1eb6dbe9-7403-4b66-bf4c-5bac961a1240> a report:ConstraintReport;
    report:constraint <urn:uuid:589aeee8-a2ce-4866-9541-82362b517815>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9bdf6a3a-c7ab-411c-9a8a-bb3cd2b0982f> a report:ConstraintReport;
    report:constraint <urn:uuid:5c11aec8-6640-4ec2-89bb-69660f9f3d4d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0ccab20c-94e7-4c2b-9906-9c119e6fce0f>, <urn:uuid:f34155c4-da4c-4169-ab9c-ab7724862c8f>.
<urn:uuid:0ccab20c-94e7-4c2b-9906-9c119e6fce0f> a report:ConstraintReport;
    report:constraint <urn:uuid:3db2b497-6ba7-4a0f-8fe8-5c65a647d54a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f34155c4-da4c-4169-ab9c-ab7724862c8f> a report:ConstraintReport;
    report:constraint <urn:uuid:c4df223e-6ce3-420d-8c56-771e616de650>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:df575cdc-7920-409d-ac97-17f989221fc8> a report:ConstraintReport;
    report:constraint <urn:uuid:26e133fc-cc58-44cd-8ff1-ee1ffbe5db36>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2776db76-5995-4daa-a31e-72d982e7759b>, <urn:uuid:57d0c839-d0c4-4bcf-9531-cd0d73af43e4>.
<urn:uuid:2776db76-5995-4daa-a31e-72d982e7759b> a report:ConstraintReport;
    report:constraint <urn:uuid:fc83f764-d140-4e5a-93ca-bbe2bc522e34>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:57d0c839-d0c4-4bcf-9531-cd0d73af43e4> a report:ConstraintReport;
    report:constraint <urn:uuid:17461c3f-c284-4b6d-91af-08d8a5bb03f8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1b330baa-15c9-42ae-98b2-f2e02a64522b> a report:ConstraintReport;
    report:constraint <urn:uuid:63a26522-ab0d-4f6f-b08b-0120b8a361a9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5c20886b-ad55-4cf5-95d9-59d14b3f3cb8>, <urn:uuid:ae61e9ec-50fa-4699-982c-b45a52f5017b>.
<urn:uuid:5c20886b-ad55-4cf5-95d9-59d14b3f3cb8> a report:ConstraintReport;
    report:constraint <urn:uuid:4455d6d4-5a0b-4e72-891b-a755c1d60988>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ae61e9ec-50fa-4699-982c-b45a52f5017b> a report:ConstraintReport;
    report:constraint <urn:uuid:c1925145-1357-4fc3-85e4-1967ecee94a0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5f5d999a-4e0b-41c8-a0a6-efb3b085cf75> a report:ConstraintReport;
    report:constraint <urn:uuid:330b8ea5-f382-457b-bfbf-47e5784ac046>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:71bfd4cb-0b6b-435e-95bc-1eb885ec0f4d>, <urn:uuid:d1de0c85-36d6-4bad-9626-406638cbf136>.
<urn:uuid:71bfd4cb-0b6b-435e-95bc-1eb885ec0f4d> a report:ConstraintReport;
    report:constraint <urn:uuid:d541d869-b628-4e9a-a490-d123c5d60e8f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d1de0c85-36d6-4bad-9626-406638cbf136> a report:ConstraintReport;
    report:constraint <urn:uuid:8974a686-95f3-448b-9eb0-8e028ff263fb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b0dd2c20-1322-4545-8deb-966a45341c86> a report:ConstraintReport;
    report:constraint <urn:uuid:14031796-fb1d-4dbe-b0ef-1a8f43c9783c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ace5c302-a7c2-4bd2-aad7-69f92e79efad>, <urn:uuid:0f285631-9fb9-49bb-bf2c-fbf7273651fb>.
<urn:uuid:ace5c302-a7c2-4bd2-aad7-69f92e79efad> a report:ConstraintReport;
    report:constraint <urn:uuid:1184aee3-3c71-474e-8ef8-9f035af140a2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0f285631-9fb9-49bb-bf2c-fbf7273651fb> a report:ConstraintReport;
    report:constraint <urn:uuid:3a2c22ef-c82f-4085-a9f5-ccfed8f446ad>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:166a7957-a019-4cbc-9705-b94e71a8198e> a report:ConstraintReport;
    report:constraint <urn:uuid:fc689a79-666b-4dfd-9c32-1f0eca9fd2db>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1c17b2dd-be79-4fef-b398-f1fc295a847b>, <urn:uuid:efbbf0a2-841a-4ee9-a4bb-dd5ef3f48727>.
<urn:uuid:1c17b2dd-be79-4fef-b398-f1fc295a847b> a report:ConstraintReport;
    report:constraint <urn:uuid:a054e9ce-12c0-4bfe-8228-918eb34ebdbc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:efbbf0a2-841a-4ee9-a4bb-dd5ef3f48727> a report:ConstraintReport;
    report:constraint <urn:uuid:504b7ee6-b364-432a-8b6c-779ab4c5c4cb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7e55df4f-8dc9-443a-805b-154e7ce7d9e3> a report:ConstraintReport;
    report:constraint <urn:uuid:e0091d42-42f2-4a35-b90c-0ac144abd292>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:455eb7f8-2d14-4ae5-b51c-00dd37a12e20>, <urn:uuid:5c05f7dd-4e59-4a38-8a94-a661a3a6cf24>.
<urn:uuid:455eb7f8-2d14-4ae5-b51c-00dd37a12e20> a report:ConstraintReport;
    report:constraint <urn:uuid:6ee232fe-e534-409a-9499-15cae055f596>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5c05f7dd-4e59-4a38-8a94-a661a3a6cf24> a report:ConstraintReport;
    report:constraint <urn:uuid:1f7f4586-afe8-4bb8-8719-930fac9f4755>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:53129dee-3a6c-4b6b-a68f-fef964e1d7ca> a report:ConstraintReport;
    report:constraint <urn:uuid:e7d20235-7437-44b0-a4c8-0ff4215064c0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:81862339-bf42-4a4e-a31b-6358320645d5>, <urn:uuid:c67cb94c-4b3d-47ea-946a-f75b3c50c0d5>.
<urn:uuid:81862339-bf42-4a4e-a31b-6358320645d5> a report:ConstraintReport;
    report:constraint <urn:uuid:5c4833a5-b394-4add-888a-82e52b30d6d3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c67cb94c-4b3d-47ea-946a-f75b3c50c0d5> a report:ConstraintReport;
    report:constraint <urn:uuid:8b9f5dee-c5a3-43d3-b8b4-444f428b0205>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e3bdeab1-3971-4f7b-b2be-53722d2e9bb8> a report:ConstraintReport;
    report:constraint <urn:uuid:02aa8f94-1b0a-4fa2-b55a-5901c1cbfc67>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e760b5ac-e506-4387-836c-7c37c792431a>, <urn:uuid:e0aae8f9-2b40-46ea-975b-49c05e81b218>.
<urn:uuid:e760b5ac-e506-4387-836c-7c37c792431a> a report:ConstraintReport;
    report:constraint <urn:uuid:02e532c9-8ff4-4432-9c86-feecc24826b1>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e0aae8f9-2b40-46ea-975b-49c05e81b218> a report:ConstraintReport;
    report:constraint <urn:uuid:15416af8-e23d-4b00-b559-5443b93a00d7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:54d58fa5-c986-427f-b109-9f8984b9b26a> a report:ConstraintReport;
    report:constraint <urn:uuid:fb999066-2b8c-4be0-8e08-7080709b1ef9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2ad9bce5-b400-4663-b021-e0d2af20613d>, <urn:uuid:1291dcc4-7d97-4dcb-9415-0dd36d1af7db>.
<urn:uuid:2ad9bce5-b400-4663-b021-e0d2af20613d> a report:ConstraintReport;
    report:constraint <urn:uuid:39c23371-7f53-4706-a3da-efbd3efcbeb5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1291dcc4-7d97-4dcb-9415-0dd36d1af7db> a report:ConstraintReport;
    report:constraint <urn:uuid:9ce0cefe-092d-4c9e-a88e-7ac80b8c7d9e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2e4abd82-8933-4cbc-a021-02cc14ca7a52> a report:ConstraintReport;
    report:constraint <urn:uuid:3cb893f3-c716-4ac1-9ee0-78c63cffcd58>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f42e7a2f-0cf0-4aee-9b9b-836428453ed9>, <urn:uuid:9730b8b2-1e79-4e88-bb31-c274c9d39608>.
<urn:uuid:f42e7a2f-0cf0-4aee-9b9b-836428453ed9> a report:ConstraintReport;
    report:constraint <urn:uuid:96441b96-045c-45b7-920a-e34d93392352>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9730b8b2-1e79-4e88-bb31-c274c9d39608> a report:ConstraintReport;
    report:constraint <urn:uuid:697b25e5-1444-4002-9222-23145113b2a0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d4d260a0-2bdf-4aea-bf62-253fca733216> a report:ConstraintReport;
    report:constraint <urn:uuid:8174c09d-2d7d-42df-99ce-d3a1fccd60a4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b8c36a80-9985-4c9d-9733-08e98e98542a>, <urn:uuid:bddfb731-2067-4c09-8fc2-9ad584eb7482>.
<urn:uuid:b8c36a80-9985-4c9d-9733-08e98e98542a> a report:ConstraintReport;
    report:constraint <urn:uuid:ad04bdc5-d6e0-4144-acb3-7722f60fbc45>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bddfb731-2067-4c09-8fc2-9ad584eb7482> a report:ConstraintReport;
    report:constraint <urn:uuid:1cb9c410-3a0a-436f-809c-99e939ad8e6a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:18298747-8ef7-4a64-b055-f1fc11cd982b> a report:ConstraintReport;
    report:constraint <urn:uuid:f2f109b4-d9ac-4e41-9500-1303e5a942bb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7170b5cd-fa5d-427a-8298-ddfa008f0892>, <urn:uuid:d8d8064d-fa36-4469-9255-24f9d6b1d744>.
<urn:uuid:7170b5cd-fa5d-427a-8298-ddfa008f0892> a report:ConstraintReport;
    report:constraint <urn:uuid:61078643-f180-4217-81a9-dff46ce9c398>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d8d8064d-fa36-4469-9255-24f9d6b1d744> a report:ConstraintReport;
    report:constraint <urn:uuid:6095fd94-dc0a-4e11-af3b-7d40c6fcd8cd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:52d28fd9-e206-41c0-9485-f73c1755ba27> a report:ConstraintReport;
    report:constraint <urn:uuid:1eba4859-707e-44c6-84ab-615d120c7418>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:921692ba-5476-4a90-a6c7-7ce8ad105c4f>, <urn:uuid:a01e1e88-302c-4a6c-8ed2-15d0871606d8>.
<urn:uuid:921692ba-5476-4a90-a6c7-7ce8ad105c4f> a report:ConstraintReport;
    report:constraint <urn:uuid:f557b6de-e0df-496e-837f-0edeae557100>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a01e1e88-302c-4a6c-8ed2-15d0871606d8> a report:ConstraintReport;
    report:constraint <urn:uuid:6c55ca78-ef0b-40c2-b045-4359531a9aeb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8e53660a-80d5-4e24-85b6-c60af867d531> a report:ConstraintReport;
    report:constraint <urn:uuid:87f8a293-6222-4d6f-9c35-bb996684d814>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5169abec-51bd-4669-9cf7-5ec0158b04e9>, <urn:uuid:a3ecc072-ded7-4bee-b2d9-c5051d4ad054>.
<urn:uuid:5169abec-51bd-4669-9cf7-5ec0158b04e9> a report:ConstraintReport;
    report:constraint <urn:uuid:049fd2ff-08d9-47d7-9213-db28d798922e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a3ecc072-ded7-4bee-b2d9-c5051d4ad054> a report:ConstraintReport;
    report:constraint <urn:uuid:459a32f2-8873-46c8-b620-c320325d1608>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0df05757-647c-4494-8511-5ac3c374b5fe> a report:ConstraintReport;
    report:constraint <urn:uuid:dfc9b867-fc0d-41d4-898d-a68077cfd165>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fadc46da-ab37-474c-af94-99b9eed59fb5>, <urn:uuid:b32f2546-9e21-477d-bd36-34559133ff4f>.
<urn:uuid:fadc46da-ab37-474c-af94-99b9eed59fb5> a report:ConstraintReport;
    report:constraint <urn:uuid:501ead2b-7704-41ba-accb-1a33a6d8df15>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b32f2546-9e21-477d-bd36-34559133ff4f> a report:ConstraintReport;
    report:constraint <urn:uuid:af238321-6de8-4636-8843-e349752f2935>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1c49a094-07ec-462b-b4af-b55e56f618be> a report:ConstraintReport;
    report:constraint <urn:uuid:7eeee0e5-4ffb-4514-b7c5-085a9cbb3e4f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f6072b4f-1e4e-4a01-9a2c-5ca53ae43ffc>, <urn:uuid:484908fa-2756-43d2-9500-cad23d03d61a>.
<urn:uuid:f6072b4f-1e4e-4a01-9a2c-5ca53ae43ffc> a report:ConstraintReport;
    report:constraint <urn:uuid:377d4dc3-0b41-4787-a13d-5ff239da8c12>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:484908fa-2756-43d2-9500-cad23d03d61a> a report:ConstraintReport;
    report:constraint <urn:uuid:fcd3ce98-af2a-461d-8911-979898498544>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:21ecd3d4-6c23-4313-97ea-0f29296044fc> a report:ConstraintReport;
    report:constraint <urn:uuid:2a2bc816-ce9e-4b41-959d-5a2bcf3f6b01>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9f73f085-5f01-4c01-ba4a-c20aa96ae420>, <urn:uuid:0e47df1b-9f39-472f-b1d7-08ea5604c794>.
<urn:uuid:9f73f085-5f01-4c01-ba4a-c20aa96ae420> a report:ConstraintReport;
    report:constraint <urn:uuid:cf4d1090-0132-4f74-a6fa-25e5719ae276>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0e47df1b-9f39-472f-b1d7-08ea5604c794> a report:ConstraintReport;
    report:constraint <urn:uuid:4d824ade-4af1-4f6d-9069-348c4075f2f5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7655e82c-b9af-4691-a3b5-13e95370add5> a report:ConstraintReport;
    report:constraint <urn:uuid:a48b06b7-de3b-4fa9-93c6-2bdc856b1391>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:89607856-938f-4cef-8a3c-01e07810b079>, <urn:uuid:6fac4351-4dfd-4778-84ca-7c52ef55acf0>.
<urn:uuid:89607856-938f-4cef-8a3c-01e07810b079> a report:ConstraintReport;
    report:constraint <urn:uuid:eb64dfcf-dda3-4367-a50d-3ca9280cbb7c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6fac4351-4dfd-4778-84ca-7c52ef55acf0> a report:ConstraintReport;
    report:constraint <urn:uuid:434018fe-bf8d-4452-b84f-2462d08a6226>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:745a2e5f-1e38-445a-905f-5a2a83e42f35> a report:ConstraintReport;
    report:constraint <urn:uuid:69be343c-30f3-441e-92da-4414c7263ebb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2517853b-07af-4659-a441-c67b22f41897>, <urn:uuid:1150525f-ae62-4579-b582-22dcae9a1d77>.
<urn:uuid:2517853b-07af-4659-a441-c67b22f41897> a report:ConstraintReport;
    report:constraint <urn:uuid:31099c2e-4d85-49c0-baa7-54aff8d050cc>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1150525f-ae62-4579-b582-22dcae9a1d77> a report:ConstraintReport;
    report:constraint <urn:uuid:0bf1929d-30f0-4833-bbd1-4dd46dcb4d98>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ee345f21-00d4-47e8-8d52-a47828f8b47b> a report:ConstraintReport;
    report:constraint <urn:uuid:219f1191-9d15-4061-9007-68e0be24b6b1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c28ab675-b772-42af-82ce-91a123cce175>, <urn:uuid:14c7f9bd-763a-4c15-a712-1e23c981b48c>.
<urn:uuid:c28ab675-b772-42af-82ce-91a123cce175> a report:ConstraintReport;
    report:constraint <urn:uuid:26497974-3474-443b-bf50-0ef678821bbf>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:14c7f9bd-763a-4c15-a712-1e23c981b48c> a report:ConstraintReport;
    report:constraint <urn:uuid:850c4b5d-3aa2-47b7-9432-206dae6ba724>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:34fc1086-d472-4700-a2d1-fa5121e920c1> a report:ConstraintReport;
    report:constraint <urn:uuid:b45f9ed9-383e-4580-aa46-33bbdcb49eaf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f4606017-5fe0-4bbc-a28f-7b748d42ddcd>, <urn:uuid:978dd632-d60b-4b20-97e2-7bb64e4d0984>.
<urn:uuid:f4606017-5fe0-4bbc-a28f-7b748d42ddcd> a report:ConstraintReport;
    report:constraint <urn:uuid:d257d830-9171-46d6-9b8d-c10d6ebb815d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:978dd632-d60b-4b20-97e2-7bb64e4d0984> a report:ConstraintReport;
    report:constraint <urn:uuid:f4487552-4790-4bf3-99c7-3d2fdc0730f8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d45d98e9-9dfc-4dd0-9582-ec1f7f5f0661> a report:ConstraintReport;
    report:constraint <urn:uuid:93fe924e-d433-4680-993c-1dd6aadd8406>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a2cfdb3d-eda3-457e-9e76-78c85741355f>, <urn:uuid:241b9e6c-d273-4755-8cc8-4f3c8ae15e66>.
<urn:uuid:a2cfdb3d-eda3-457e-9e76-78c85741355f> a report:ConstraintReport;
    report:constraint <urn:uuid:2f762c7e-52ac-4434-ab9c-9c36978d5b19>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:241b9e6c-d273-4755-8cc8-4f3c8ae15e66> a report:ConstraintReport;
    report:constraint <urn:uuid:616fdc6b-8e56-4130-b347-a99e046c6309>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d2403b03-8a5e-4f95-89e0-dbcd6ae28673> a report:ConstraintReport;
    report:constraint <urn:uuid:26bca22d-c7f7-45cf-965a-cb25b18f5e12>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0f5b4a47-2e01-4141-9afa-008be5cf29af>, <urn:uuid:41bece2a-2ccf-4f29-a455-c64fab50223d>.
<urn:uuid:0f5b4a47-2e01-4141-9afa-008be5cf29af> a report:ConstraintReport;
    report:constraint <urn:uuid:4d33a62c-0fd9-4935-bc02-ebaddd948343>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:41bece2a-2ccf-4f29-a455-c64fab50223d> a report:ConstraintReport;
    report:constraint <urn:uuid:89f23515-ce5f-404c-a25a-7bf4b1683187>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b44215bd-e946-4117-9d91-830584baef5b> a report:ConstraintReport;
    report:constraint <urn:uuid:5b437f68-c233-4340-9d68-bd8f90938c28>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b24c64c7-3dcc-43fe-9631-5e9c0f56eb75>, <urn:uuid:de2dd676-c727-4ddb-8b2d-8455d2bac708>.
<urn:uuid:b24c64c7-3dcc-43fe-9631-5e9c0f56eb75> a report:ConstraintReport;
    report:constraint <urn:uuid:5701655a-fcc2-4b55-8362-5713fa280857>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:de2dd676-c727-4ddb-8b2d-8455d2bac708> a report:ConstraintReport;
    report:constraint <urn:uuid:50ac39a9-4262-4e66-a8f3-1829b1ebbc7a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c373d269-4353-4fb0-8429-f05ccae7857f> a report:ConstraintReport;
    report:constraint <urn:uuid:701a1f06-f867-4edb-a3b9-d471b0b8265c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e8798a55-3940-4475-b7c1-04f88daa2cf3>, <urn:uuid:dd122231-1096-4dec-a7c0-b5830950d38f>.
<urn:uuid:e8798a55-3940-4475-b7c1-04f88daa2cf3> a report:ConstraintReport;
    report:constraint <urn:uuid:9d79f5f4-bb7d-4218-a96c-6d52347ae95f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dd122231-1096-4dec-a7c0-b5830950d38f> a report:ConstraintReport;
    report:constraint <urn:uuid:e8a02c26-e562-42f8-89cc-0d2459507ad6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0235d5da-b849-45c0-a512-83ea42313793> a report:ConstraintReport;
    report:constraint <urn:uuid:068de183-3d3b-4f38-9769-1007f978524e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:994772db-b4d8-421e-87a8-7997d07759a4>, <urn:uuid:32c18e65-07ac-4748-83e1-e1cb7d0715bd>.
<urn:uuid:994772db-b4d8-421e-87a8-7997d07759a4> a report:ConstraintReport;
    report:constraint <urn:uuid:806a4725-31ab-461e-b17d-692abf48bcce>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:32c18e65-07ac-4748-83e1-e1cb7d0715bd> a report:ConstraintReport;
    report:constraint <urn:uuid:53b4acb6-b122-4344-9c93-631c71e7a27e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e4eac228-9b31-46d3-b1ea-b4c186a087d0> a report:ConstraintReport;
    report:constraint <urn:uuid:134563e3-0314-44ce-bd44-7c9796d8dcc2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8d16aeb0-f471-40a6-9904-10cd6fe38e89>, <urn:uuid:5014e99d-5c6f-46e2-8a02-3ef6f39d4ac0>.
<urn:uuid:8d16aeb0-f471-40a6-9904-10cd6fe38e89> a report:ConstraintReport;
    report:constraint <urn:uuid:bb49138d-5033-475a-b53c-c009e0709a86>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5014e99d-5c6f-46e2-8a02-3ef6f39d4ac0> a report:ConstraintReport;
    report:constraint <urn:uuid:c779cf86-014a-42b6-bd8f-9223e4041e4e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2bc6dd50-5438-4c4a-b118-6ded101e3158> a report:ConstraintReport;
    report:constraint <urn:uuid:9d3d4dbb-46eb-4d0a-8ae6-a44c703e04fc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7377931d-803d-4601-8183-7bfeb06c1279>, <urn:uuid:aa76d489-276c-458a-86e5-fa997340dbea>.
<urn:uuid:7377931d-803d-4601-8183-7bfeb06c1279> a report:ConstraintReport;
    report:constraint <urn:uuid:73a013e2-a88d-44d0-be21-d69bc67230a3>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:aa76d489-276c-458a-86e5-fa997340dbea> a report:ConstraintReport;
    report:constraint <urn:uuid:4cbc0742-fbda-4d1a-802b-ffe96a2c2d41>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c3bbf868-4730-420d-9ea5-62cb59f0e9f0> a report:ConstraintReport;
    report:constraint <urn:uuid:778cf6cb-3945-41d1-9d65-8476c2efce85>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9e8c69db-b1b8-4084-9302-ab24483c12db>, <urn:uuid:c4b6a095-ef7c-4172-85a4-ac1c7cca6e36>.
<urn:uuid:9e8c69db-b1b8-4084-9302-ab24483c12db> a report:ConstraintReport;
    report:constraint <urn:uuid:f813167b-73e8-4a08-8642-40b87a8b1140>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c4b6a095-ef7c-4172-85a4-ac1c7cca6e36> a report:ConstraintReport;
    report:constraint <urn:uuid:d6a96d8a-5d2f-4abd-aec2-ecc17b1d2b19>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:645c8064-cf03-46e1-b61e-803e1f40fff4> a report:ConstraintReport;
    report:constraint <urn:uuid:a2b733a3-89e8-4f81-a954-fefc0e29072e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e3b68517-39fa-4760-a0d1-503c5eb3c4db>, <urn:uuid:4f61b06e-f7df-4d1e-8b59-ddd98b3b7f1f>.
<urn:uuid:e3b68517-39fa-4760-a0d1-503c5eb3c4db> a report:ConstraintReport;
    report:constraint <urn:uuid:7119129c-ea4c-4c95-9aed-df0527bb1dcf>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4f61b06e-f7df-4d1e-8b59-ddd98b3b7f1f> a report:ConstraintReport;
    report:constraint <urn:uuid:c9fe1107-48ef-4bb1-ae69-c16a66736208>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9a4d94b2-3c5c-472e-bbb8-67c8cd560215> a report:ConstraintReport;
    report:constraint <urn:uuid:9ef3e970-701b-4f7e-a7cb-c6aa5a2efaef>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:51b218a8-a0ae-4788-8f98-9a8c6e8058b7>, <urn:uuid:3175d54f-8c26-43a1-89a2-2dcbfb369e8d>.
<urn:uuid:51b218a8-a0ae-4788-8f98-9a8c6e8058b7> a report:ConstraintReport;
    report:constraint <urn:uuid:fde8c379-f0c5-4bb7-97ef-1d700c7bb7ba>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3175d54f-8c26-43a1-89a2-2dcbfb369e8d> a report:ConstraintReport;
    report:constraint <urn:uuid:9183147a-f8dc-4dea-b67a-82e74267c474>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3d07bcf7-a82b-4292-84f3-2f1595fb7e96> a report:ConstraintReport;
    report:constraint <urn:uuid:eaa436c6-0904-452a-b0e1-41bc185a0a71>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f66f6258-e189-4773-9a5f-74c1b058a79e>, <urn:uuid:9b86d8f3-a593-4832-8eaa-07572b001c17>.
<urn:uuid:f66f6258-e189-4773-9a5f-74c1b058a79e> a report:ConstraintReport;
    report:constraint <urn:uuid:53d930f3-a334-4e95-a3f9-b2adda37aa3e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9b86d8f3-a593-4832-8eaa-07572b001c17> a report:ConstraintReport;
    report:constraint <urn:uuid:df78cb77-e3d3-4a4e-aa8f-effa9e158eb9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c12f4d13-4801-46ca-b59d-1dc44b43dbdb> a report:ConstraintReport;
    report:constraint <urn:uuid:bc44fecb-3934-4fff-8ae3-6b04fb45f7f5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fccf9a0e-1d69-4ad9-b9de-ae08f9b4aca3>, <urn:uuid:bd239fa4-1a0b-4e4d-be93-0d0f3375fbd0>.
<urn:uuid:fccf9a0e-1d69-4ad9-b9de-ae08f9b4aca3> a report:ConstraintReport;
    report:constraint <urn:uuid:501cd48e-77ae-4f09-8746-3bde8af045f9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bd239fa4-1a0b-4e4d-be93-0d0f3375fbd0> a report:ConstraintReport;
    report:constraint <urn:uuid:adf4e46b-8f23-4dda-b85b-146b4a059e01>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c0c2e87c-9115-4c61-a2c4-ada76503fd94> a report:ConstraintReport;
    report:constraint <urn:uuid:957bfa67-4996-4fc9-95a9-636a4f2b743f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2c64431a-2fe1-4a3c-901d-101cb6d2eda7>, <urn:uuid:298e4016-e503-4568-9b2d-0f8c18c46584>.
<urn:uuid:2c64431a-2fe1-4a3c-901d-101cb6d2eda7> a report:ConstraintReport;
    report:constraint <urn:uuid:ea28d837-3993-4166-ab3d-aceed0611354>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:298e4016-e503-4568-9b2d-0f8c18c46584> a report:ConstraintReport;
    report:constraint <urn:uuid:92eb8064-54de-498e-b32f-3509247e99b1>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3d8a7d58-5fc5-4964-adc4-c8fb44cfcfe0> a report:ConstraintReport;
    report:constraint <urn:uuid:9c6ec92b-4df8-4996-b92f-e1bd63a7f5b1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a0a69f63-140c-4a44-b9bf-28e649b69724>, <urn:uuid:eb001a77-494c-4d39-b3b5-939f528dba6d>.
<urn:uuid:a0a69f63-140c-4a44-b9bf-28e649b69724> a report:ConstraintReport;
    report:constraint <urn:uuid:958b73bf-9c7b-46e5-9547-3828cac85ad1>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eb001a77-494c-4d39-b3b5-939f528dba6d> a report:ConstraintReport;
    report:constraint <urn:uuid:488ca938-e5ef-4b2b-97c5-8c47ef66d24e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4f615727-84f5-4a90-89c3-38d4d724778c> a report:ConstraintReport;
    report:constraint <urn:uuid:f0d083f6-499c-4ec6-b50f-cf494abfb2f3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1010b1f7-89a4-4138-9e09-dbd078c2e6c4>, <urn:uuid:5e0de64f-b52b-4c04-8f37-a556fb154b44>.
<urn:uuid:1010b1f7-89a4-4138-9e09-dbd078c2e6c4> a report:ConstraintReport;
    report:constraint <urn:uuid:7aa662e7-7e90-42c8-96e9-284ac25dc35c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5e0de64f-b52b-4c04-8f37-a556fb154b44> a report:ConstraintReport;
    report:constraint <urn:uuid:502816a9-b6f4-4d10-b37f-14443de6654f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9fc597e2-02c3-4636-9ca2-755490a5087b> a report:ConstraintReport;
    report:constraint <urn:uuid:b41c49b3-26f3-4560-934c-0e80d21632ec>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:76572b68-5e3e-4bb8-a829-89034beee2c4>, <urn:uuid:021235e3-6b62-49fc-a093-e2aaff7ffe83>.
<urn:uuid:76572b68-5e3e-4bb8-a829-89034beee2c4> a report:ConstraintReport;
    report:constraint <urn:uuid:d7b704f6-e8f1-4aec-8f39-bf8638f3fcf2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:021235e3-6b62-49fc-a093-e2aaff7ffe83> a report:ConstraintReport;
    report:constraint <urn:uuid:6f7a8878-21b4-488b-b0a8-7709ccfdea84>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f6ea1040-1732-4e1c-a084-3e21d608f5ba> a report:ConstraintReport;
    report:constraint <urn:uuid:7a225779-fcf2-4897-9286-bd999e707822>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fe900edc-73aa-405e-b7dc-b342778c3bae>, <urn:uuid:4972b019-98e0-4d7e-8421-80f178286d0a>.
<urn:uuid:fe900edc-73aa-405e-b7dc-b342778c3bae> a report:ConstraintReport;
    report:constraint <urn:uuid:5c9b1927-28a0-4da3-a207-9fbad71d189f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4972b019-98e0-4d7e-8421-80f178286d0a> a report:ConstraintReport;
    report:constraint <urn:uuid:4f51eb43-5b15-4b9a-8a73-a08f7c1edf2e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cd7334e9-c87c-4372-b63f-ab877dd33ac5> a report:ConstraintReport;
    report:constraint <urn:uuid:a8cca86c-e932-47a7-85fa-e7befcb3c6e0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fdb94f06-df4d-4076-a3cc-a6e52faf97a6>, <urn:uuid:174ec642-c1d8-457b-a12b-c918a377a940>.
<urn:uuid:fdb94f06-df4d-4076-a3cc-a6e52faf97a6> a report:ConstraintReport;
    report:constraint <urn:uuid:0d45f580-1eaa-4459-a991-d91ef0f36d5a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:174ec642-c1d8-457b-a12b-c918a377a940> a report:ConstraintReport;
    report:constraint <urn:uuid:0243300e-8615-40c3-905a-ec16f3268ca8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e1220290-2ead-45fc-b292-153b2d6749b4> a report:ConstraintReport;
    report:constraint <urn:uuid:50ef2f36-3080-4473-81d5-ebaf466720fd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5c5f41de-ccc2-4866-a044-32d96fa1ac06>, <urn:uuid:7676eac5-a6d7-4c15-9d8a-2484cddea4ef>.
<urn:uuid:5c5f41de-ccc2-4866-a044-32d96fa1ac06> a report:ConstraintReport;
    report:constraint <urn:uuid:59c52fba-af5c-4f28-bb50-869dafd499f7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7676eac5-a6d7-4c15-9d8a-2484cddea4ef> a report:ConstraintReport;
    report:constraint <urn:uuid:3fe6455e-32fc-4663-be7a-f7168cda838a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f8dd0f1d-5b17-44c3-b2ca-4ad9f1d676a4> a report:ConstraintReport;
    report:constraint <urn:uuid:fdd857e3-4be4-44fb-8fd1-8b7ac89209e3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2d4610eb-bf16-4683-8d49-86dc24f46232>, <urn:uuid:9c6536fc-b78b-42d8-96d7-ce36191cdcb9>.
<urn:uuid:2d4610eb-bf16-4683-8d49-86dc24f46232> a report:ConstraintReport;
    report:constraint <urn:uuid:ea9e70c0-9aa0-4fc3-9edd-6beaab2cf602>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9c6536fc-b78b-42d8-96d7-ce36191cdcb9> a report:ConstraintReport;
    report:constraint <urn:uuid:8c361160-41c3-4129-8596-08ba0363a89b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0be5916b-3f41-4800-a46b-6be7b2b07be4> a report:ConstraintReport;
    report:constraint <urn:uuid:fc60793d-9d4c-4a96-b432-2467049085aa>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bf77c2f3-49bf-4246-888f-9076e79523e0>, <urn:uuid:97da5fc1-b127-41f4-80fe-8e15fedb0c72>.
<urn:uuid:bf77c2f3-49bf-4246-888f-9076e79523e0> a report:ConstraintReport;
    report:constraint <urn:uuid:eae63486-6ad8-414e-a547-04ea466d4b93>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:97da5fc1-b127-41f4-80fe-8e15fedb0c72> a report:ConstraintReport;
    report:constraint <urn:uuid:c3b23283-e054-4cb4-95bb-947d001d5ff4>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a2462251-e081-42d3-a90f-2cbb31abd587> a report:ConstraintReport;
    report:constraint <urn:uuid:c562d65c-598f-4802-afec-1d4b9da76053>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:784a6a8e-a909-4a0d-b630-0e93feefe231>, <urn:uuid:65985fcb-8570-4acd-b860-b9d9ec547ed0>.
<urn:uuid:784a6a8e-a909-4a0d-b630-0e93feefe231> a report:ConstraintReport;
    report:constraint <urn:uuid:48ee8f69-ab79-4b21-8f90-975f42c08633>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:65985fcb-8570-4acd-b860-b9d9ec547ed0> a report:ConstraintReport;
    report:constraint <urn:uuid:9ad2d407-b289-4e79-94d8-d53ae7a36b47>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e075c533-3d48-4f04-ae89-28c43c4537f2> a report:ConstraintReport;
    report:constraint <urn:uuid:636fd4c9-f929-4d9f-8cb9-9aa7c4dd0c23>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:70e0bfca-fa24-4867-8d92-ce81c4b3dafc>, <urn:uuid:9cb34f22-17e6-4a16-bfac-3adbf99179a8>.
<urn:uuid:70e0bfca-fa24-4867-8d92-ce81c4b3dafc> a report:ConstraintReport;
    report:constraint <urn:uuid:220e4eac-99e4-45b0-a96c-e5b0583d36be>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9cb34f22-17e6-4a16-bfac-3adbf99179a8> a report:ConstraintReport;
    report:constraint <urn:uuid:a841f80e-e4e3-4e70-b631-fb8188250058>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:621a2880-8293-4988-b368-281945fcec68> a report:ConstraintReport;
    report:constraint <urn:uuid:662d1f4f-bf9d-4a80-ae6b-c3eb2584c344>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:77939c96-03a1-4bbb-b672-8f5f9cffb3b3>, <urn:uuid:0afada86-d2ca-4e61-ab15-bb455d7d44a4>.
<urn:uuid:77939c96-03a1-4bbb-b672-8f5f9cffb3b3> a report:ConstraintReport;
    report:constraint <urn:uuid:99dc7e13-0335-436d-a879-150d0525cbdf>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0afada86-d2ca-4e61-ab15-bb455d7d44a4> a report:ConstraintReport;
    report:constraint <urn:uuid:1eb99780-6dd7-4e0e-84d7-cf3055bff7d0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:419c38ac-6b25-4acd-b508-592bcb48bb89> a report:ConstraintReport;
    report:constraint <urn:uuid:d9453fa8-8c91-492d-ae9b-2d008d6670a2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f443db84-41af-4e10-9222-d853d60976eb>, <urn:uuid:fb813465-a045-49d7-8612-5b982027e0f5>.
<urn:uuid:f443db84-41af-4e10-9222-d853d60976eb> a report:ConstraintReport;
    report:constraint <urn:uuid:37263a47-af3d-4d27-aa83-43fb8e059197>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fb813465-a045-49d7-8612-5b982027e0f5> a report:ConstraintReport;
    report:constraint <urn:uuid:724350fb-cfa8-4a0c-9ea4-bc1563d50a76>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1c48b8d1-c014-4566-98bb-6aa270a6f5d4> a report:ConstraintReport;
    report:constraint <urn:uuid:64e4b11b-2c26-46a9-88db-347b386c1999>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e83a67d8-5c09-414d-b10f-d27e28bd1415>, <urn:uuid:d0d99a69-fd5a-4d5d-b9b8-f9ab04ad34b6>.
<urn:uuid:e83a67d8-5c09-414d-b10f-d27e28bd1415> a report:ConstraintReport;
    report:constraint <urn:uuid:c2fc04e3-52fe-43ac-b0ed-5a40818ab3e6>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d0d99a69-fd5a-4d5d-b9b8-f9ab04ad34b6> a report:ConstraintReport;
    report:constraint <urn:uuid:8aae4288-f074-4382-ada4-c113b96476f9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8d747ac5-717c-48bd-8087-6e87a53b6017> a report:ConstraintReport;
    report:constraint <urn:uuid:38413bf0-11f3-4877-914a-96ccf6c59aab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f22194ad-badb-4e16-ab83-0470107cc8ff>, <urn:uuid:a438b035-ab5f-4323-979b-2ff6792cdf16>.
<urn:uuid:f22194ad-badb-4e16-ab83-0470107cc8ff> a report:ConstraintReport;
    report:constraint <urn:uuid:07cf50ff-5ac8-43d2-b045-402b50f817e5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a438b035-ab5f-4323-979b-2ff6792cdf16> a report:ConstraintReport;
    report:constraint <urn:uuid:141f8880-ca7f-4b1f-8ddc-8dc4b077cc9f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:df2c6a97-c6e0-49c7-8347-b0f91f60fbf1> a report:ConstraintReport;
    report:constraint <urn:uuid:7be61257-458a-4fb6-b0f2-b52d3f577c83>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ec7d0725-1017-4173-96ff-5e65b9210ee5>, <urn:uuid:095438cf-1dcf-49b2-82b5-4d30e53fd8a4>.
<urn:uuid:ec7d0725-1017-4173-96ff-5e65b9210ee5> a report:ConstraintReport;
    report:constraint <urn:uuid:e33ccd56-6f79-425d-acd7-cf76007dbca7>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:095438cf-1dcf-49b2-82b5-4d30e53fd8a4> a report:ConstraintReport;
    report:constraint <urn:uuid:fee20948-6492-411c-9539-2d55581b7e56>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:116b4842-88d7-4cd5-b026-65a30feae422> a report:ConstraintReport;
    report:constraint <urn:uuid:3baee5f7-6433-4381-9106-4af816a512fd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a0f488b2-1a7e-4e17-a78a-71bf2e99d978>, <urn:uuid:3c8b6155-8ea4-459e-8ec7-50f783ef2638>.
<urn:uuid:a0f488b2-1a7e-4e17-a78a-71bf2e99d978> a report:ConstraintReport;
    report:constraint <urn:uuid:7ec5b3e0-53ec-4adc-a353-64752da31234>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3c8b6155-8ea4-459e-8ec7-50f783ef2638> a report:ConstraintReport;
    report:constraint <urn:uuid:f409a24f-863b-4fbe-8877-9b1baba517f8>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dcdfbbed-c6a0-490b-b350-f0f052b216c1> a report:ConstraintReport;
    report:constraint <urn:uuid:44ae9166-531c-4415-a62f-655a6cea9d01>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:13b8c8e4-5658-4fa8-8d27-594548ce648a>, <urn:uuid:0c7998b3-f7f9-4696-9265-7a1d5cc11445>.
<urn:uuid:13b8c8e4-5658-4fa8-8d27-594548ce648a> a report:ConstraintReport;
    report:constraint <urn:uuid:79e2e81c-d3dc-40b0-9e7d-86e1e4a8ab81>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0c7998b3-f7f9-4696-9265-7a1d5cc11445> a report:ConstraintReport;
    report:constraint <urn:uuid:b08fe21a-d41d-4deb-a46e-3ab4add6ea12>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7cfd91ba-66f2-4386-a592-d8106725b189> a report:ConstraintReport;
    report:constraint <urn:uuid:b8c7fbfe-4b16-4dea-b08c-1268cc7e1eb1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a641f916-6b5c-4e04-aa6b-6b83121ed7be>, <urn:uuid:4d2c48cf-c638-4bbb-9047-c8bb32f0f5bb>.
<urn:uuid:a641f916-6b5c-4e04-aa6b-6b83121ed7be> a report:ConstraintReport;
    report:constraint <urn:uuid:0edbe8b8-2f48-4a6d-b15a-16676e12362e>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4d2c48cf-c638-4bbb-9047-c8bb32f0f5bb> a report:ConstraintReport;
    report:constraint <urn:uuid:b0dda4fa-ad32-433e-a183-1f5ed338af6a>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:915598e4-2af4-4769-9052-a4f7ddc839bd> a report:ConstraintReport;
    report:constraint <urn:uuid:ef4fdae7-207b-45ec-a4db-b6fbf69e809f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a08a48e1-3d5e-47ee-9d70-4accbbc709e4>, <urn:uuid:a133c1f6-5b21-43a6-b8c4-89c8274171aa>.
<urn:uuid:a08a48e1-3d5e-47ee-9d70-4accbbc709e4> a report:ConstraintReport;
    report:constraint <urn:uuid:002a2fa7-bc84-4072-9c49-a765d7edfcc2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a133c1f6-5b21-43a6-b8c4-89c8274171aa> a report:ConstraintReport;
    report:constraint <urn:uuid:c6dcb1fa-4f55-4992-a450-7f1f1b2db837>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:215c3fc6-e3af-486e-ad3f-167e25265b48> a report:ConstraintReport;
    report:constraint <urn:uuid:e7a41771-8364-43e1-8647-401f37f8e886>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2f44d36a-c0f1-42b8-b50f-1a6011786387>, <urn:uuid:e2e0aaae-fe92-44b7-b18c-63b20f0aa600>.
<urn:uuid:2f44d36a-c0f1-42b8-b50f-1a6011786387> a report:ConstraintReport;
    report:constraint <urn:uuid:1e573bdd-0219-4302-bf44-f41d797037d5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e2e0aaae-fe92-44b7-b18c-63b20f0aa600> a report:ConstraintReport;
    report:constraint <urn:uuid:d4285515-94b9-4930-b5d1-78ef3f37de64>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8c2440db-e065-4283-9da1-3bd7f65a9403> a report:ConstraintReport;
    report:constraint <urn:uuid:e27de4ad-8809-470a-864e-6956eab9067f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2d6d4746-54a7-42ca-aa73-175e1cddd0d5>, <urn:uuid:8795ce85-a87d-42cc-99b3-1e9c5ed8670d>.
<urn:uuid:2d6d4746-54a7-42ca-aa73-175e1cddd0d5> a report:ConstraintReport;
    report:constraint <urn:uuid:f4a97fed-5e4b-4bff-834e-3fa82050e931>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8795ce85-a87d-42cc-99b3-1e9c5ed8670d> a report:ConstraintReport;
    report:constraint <urn:uuid:01d631bd-2109-4379-80e1-e12ac64f2dff>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7d0c8ab4-8a93-4976-bcea-7b934a6059b5> a report:ConstraintReport;
    report:constraint <urn:uuid:3ec09e77-b91a-4217-b789-00f1c6051816>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ecc692ac-f3c7-48f1-ab4b-4864a8b48a2a>, <urn:uuid:8ac3bfe3-7985-4b6c-95a5-5579539039f2>.
<urn:uuid:ecc692ac-f3c7-48f1-ab4b-4864a8b48a2a> a report:ConstraintReport;
    report:constraint <urn:uuid:159a13f2-79eb-425c-a0a8-5a387182cd80>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8ac3bfe3-7985-4b6c-95a5-5579539039f2> a report:ConstraintReport;
    report:constraint <urn:uuid:0882154b-3822-4fe0-8a0e-81b0fb8cac6c>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1c1d374a-fb7b-4edc-8993-2791b7079afe> a report:ConstraintReport;
    report:constraint <urn:uuid:653449a3-b32e-43ce-bad2-4ca7b8b43674>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c4469236-e7ed-4429-9f13-cc0aed2034c9>, <urn:uuid:0ec75db1-08f2-4a0f-98a2-d4e46c30a1d8>.
<urn:uuid:c4469236-e7ed-4429-9f13-cc0aed2034c9> a report:ConstraintReport;
    report:constraint <urn:uuid:5a7b0cee-18f9-4d96-b7fc-aa0680aab6a4>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0ec75db1-08f2-4a0f-98a2-d4e46c30a1d8> a report:ConstraintReport;
    report:constraint <urn:uuid:566da207-be3e-45f1-8e60-18a51f0c7e02>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:66ad0eaf-c51c-48ea-af1c-180bc5b71db0> a report:ConstraintReport;
    report:constraint <urn:uuid:5609f832-97cf-4932-9120-7a5d698e8b61>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:663a373a-e4c2-4031-a716-d2c37a94e472>, <urn:uuid:24743f2f-2d9f-4879-86b6-3ee390ce8d9a>.
<urn:uuid:663a373a-e4c2-4031-a716-d2c37a94e472> a report:ConstraintReport;
    report:constraint <urn:uuid:c98be63a-643d-4030-bd32-f4cd1f8e0c99>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:24743f2f-2d9f-4879-86b6-3ee390ce8d9a> a report:ConstraintReport;
    report:constraint <urn:uuid:3d74d678-dc20-4dc9-aa21-dd669d32bfff>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bdd9d941-fd61-42bc-bc31-5628303cf275> a report:ConstraintReport;
    report:constraint <urn:uuid:99f1ec97-f070-4860-bff3-f23fa5f55946>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1e43293d-bb81-4892-8ea7-80b2dabe1b35>, <urn:uuid:76a85970-540c-4d41-bb83-70746327871f>.
<urn:uuid:1e43293d-bb81-4892-8ea7-80b2dabe1b35> a report:ConstraintReport;
    report:constraint <urn:uuid:e81cf59b-106e-452b-96ea-7a062ebdd712>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:76a85970-540c-4d41-bb83-70746327871f> a report:ConstraintReport;
    report:constraint <urn:uuid:db535878-c0b4-41d4-9a0f-80eaabee31bd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0fb10ac8-0fce-4acd-8dfe-cd60c3aecdee> a report:ConstraintReport;
    report:constraint <urn:uuid:df2456bb-3a47-4c13-9a42-443c163a861b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f4eb2fcb-e925-4d84-a42a-64f570add002>, <urn:uuid:486e307e-35bc-42bd-9d1c-2ddc18242328>.
<urn:uuid:f4eb2fcb-e925-4d84-a42a-64f570add002> a report:ConstraintReport;
    report:constraint <urn:uuid:4a354999-d4af-4372-8cc7-bea0689a790f>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:486e307e-35bc-42bd-9d1c-2ddc18242328> a report:ConstraintReport;
    report:constraint <urn:uuid:8023654a-1f38-46e2-a67b-7e53d378d401>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fa27b64f-9d44-45cd-b931-dffdeed7d29f> a report:ConstraintReport;
    report:constraint <urn:uuid:212e9f84-4485-4fbd-a63a-f22ae5d65c45>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:67966f9a-8c54-49ab-a69d-7501d1563372>, <urn:uuid:de4ca74b-ea15-491b-aa14-23fdf484a786>.
<urn:uuid:67966f9a-8c54-49ab-a69d-7501d1563372> a report:ConstraintReport;
    report:constraint <urn:uuid:d47551d1-f940-4885-8afa-25848f54b401>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:de4ca74b-ea15-491b-aa14-23fdf484a786> a report:ConstraintReport;
    report:constraint <urn:uuid:d6fc72f1-2399-4c19-b283-f3a5c92c6a8b>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:47425ca9-86aa-46eb-94be-3330692cd22c> a report:ConstraintReport;
    report:constraint <urn:uuid:1f10b2d8-0fc8-4dd9-b0cf-c07e1080a7df>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:54458ae1-fe5e-4886-bcd1-9f672ca22dfb>, <urn:uuid:1bcc2bfd-58c9-488e-b753-33a3cd2bf63e>.
<urn:uuid:54458ae1-fe5e-4886-bcd1-9f672ca22dfb> a report:ConstraintReport;
    report:constraint <urn:uuid:d53d4ad1-ba1a-4bb1-93e4-6d0e69b8b0d0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1bcc2bfd-58c9-488e-b753-33a3cd2bf63e> a report:ConstraintReport;
    report:constraint <urn:uuid:5c9b57e8-1a8a-44ca-8080-848cc6fed6d9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cb5b2bf6-cbd8-4ed0-8806-e50a02b2a4c5> a report:ConstraintReport;
    report:constraint <urn:uuid:3c4108b3-5cfc-45ee-af03-f01c2cb86c9f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4e6e69b4-067d-4007-914f-93021682bf08>, <urn:uuid:ab1bb3f3-ae5e-48b3-b280-89f177c7c901>.
<urn:uuid:4e6e69b4-067d-4007-914f-93021682bf08> a report:ConstraintReport;
    report:constraint <urn:uuid:04376193-751a-4988-9990-869e4f6ba277>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ab1bb3f3-ae5e-48b3-b280-89f177c7c901> a report:ConstraintReport;
    report:constraint <urn:uuid:0b77dd6d-7760-4474-a6ab-76d0a748dc34>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f2107630-15b1-47b5-a13d-bf4ba5a41278> a report:ConstraintReport;
    report:constraint <urn:uuid:f9e0ce4a-7246-47ae-b251-b620a276b3ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:84435328-24c1-4561-a4ff-e0370b9bd347>, <urn:uuid:1a6c65ec-5303-4d7a-8c28-574829f12701>.
<urn:uuid:84435328-24c1-4561-a4ff-e0370b9bd347> a report:ConstraintReport;
    report:constraint <urn:uuid:3a792116-6d64-4a5d-b24e-e52281d6e1dd>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1a6c65ec-5303-4d7a-8c28-574829f12701> a report:ConstraintReport;
    report:constraint <urn:uuid:7bfc1bd8-df75-48fa-a696-c33621f90de2>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0d0e0382-99f2-49d9-b3ee-847fec1e5cda> a report:ConstraintReport;
    report:constraint <urn:uuid:9e95cad6-95bf-4497-a3bc-9a4d54576226>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3b95e5d0-a277-4af4-ad30-1dd9aed4b062>, <urn:uuid:873dd639-c626-40ed-b790-3f17677c68f9>.
<urn:uuid:3b95e5d0-a277-4af4-ad30-1dd9aed4b062> a report:ConstraintReport;
    report:constraint <urn:uuid:6d2eb216-41d1-4a75-899a-3315959ce4c0>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:873dd639-c626-40ed-b790-3f17677c68f9> a report:ConstraintReport;
    report:constraint <urn:uuid:4165a9f3-8548-443e-b7ef-c3bdce7aa407>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c16dad9d-5410-4e40-b332-4349813f689a> a report:ConstraintReport;
    report:constraint <urn:uuid:88c0a344-a509-4140-a039-691fe86311d1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c770c459-9046-419b-ab5b-ccd6b1eeec2b>, <urn:uuid:cf6d3820-2573-41d2-8ece-64acb79a880b>.
<urn:uuid:c770c459-9046-419b-ab5b-ccd6b1eeec2b> a report:ConstraintReport;
    report:constraint <urn:uuid:be96abcd-fdba-4a4e-83c3-684b23143c88>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cf6d3820-2573-41d2-8ece-64acb79a880b> a report:ConstraintReport;
    report:constraint <urn:uuid:d72d5d7f-072c-49d9-94a4-43e0a722a721>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a6cb2bd4-5df7-41d9-acd6-057e4b501af6> a report:ConstraintReport;
    report:constraint <urn:uuid:cdc19240-6380-423e-a367-5dc1fa7d8358>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a6c32b43-12ef-4a52-ba81-b5d2ae9208cf>, <urn:uuid:6d51f88f-a9a4-4521-ad8b-4e50adf14b84>.
<urn:uuid:a6c32b43-12ef-4a52-ba81-b5d2ae9208cf> a report:ConstraintReport;
    report:constraint <urn:uuid:84d1432d-4215-4d48-85c1-eae07de564ae>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6d51f88f-a9a4-4521-ad8b-4e50adf14b84> a report:ConstraintReport;
    report:constraint <urn:uuid:07166646-98d3-43c2-92e9-62efbb3c93ac>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2ef3ee9a-84b6-40e6-b8e6-65cf8241e0e4> a report:ConstraintReport;
    report:constraint <urn:uuid:a7622a4e-402c-4c9b-90a7-f48c07287ea0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:dbafffa9-7d42-4f62-bc9d-7dd287684803>, <urn:uuid:b5afaf23-45ee-4d87-b2fa-2fdba6c489e4>.
<urn:uuid:dbafffa9-7d42-4f62-bc9d-7dd287684803> a report:ConstraintReport;
    report:constraint <urn:uuid:83bed457-d0bc-43ba-ba3e-0223439d8023>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b5afaf23-45ee-4d87-b2fa-2fdba6c489e4> a report:ConstraintReport;
    report:constraint <urn:uuid:a228d0c0-1ae8-4bd3-9ad6-c833751f57c9>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bab97cf4-34cd-4661-a57c-74d240d3c295> a report:ConstraintReport;
    report:constraint <urn:uuid:b70d3865-fc6e-49e7-9b2c-6850843d5a90>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:71c75a26-40ea-4a3b-b557-6146a703dba9>, <urn:uuid:e38c1949-700c-40a5-8e17-d4d9ebf3b648>.
<urn:uuid:71c75a26-40ea-4a3b-b557-6146a703dba9> a report:ConstraintReport;
    report:constraint <urn:uuid:a6848bc3-9f96-4bee-871d-f2c3fc344e67>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e38c1949-700c-40a5-8e17-d4d9ebf3b648> a report:ConstraintReport;
    report:constraint <urn:uuid:9a24b81b-6f1c-4ae3-a91d-a854aad569cb>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:450ab0ad-85a4-4f63-a751-e30ccc328d46> a report:ConstraintReport;
    report:constraint <urn:uuid:bcb639ac-7236-4770-b4a3-6209d0e8bf55>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:20e2d923-c8a5-433d-91fb-a4c2abac5143>, <urn:uuid:0c55f6e2-d751-4b6b-8733-ee9cbfb62532>.
<urn:uuid:20e2d923-c8a5-433d-91fb-a4c2abac5143> a report:ConstraintReport;
    report:constraint <urn:uuid:cfd7711d-73f6-4c49-a893-f0de95ed805d>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0c55f6e2-d751-4b6b-8733-ee9cbfb62532> a report:ConstraintReport;
    report:constraint <urn:uuid:7786bdc0-6540-445d-b1fe-297fcc8676b5>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0bfdf364-d784-44f0-8dd5-953b745c3191> a report:ConstraintReport;
    report:constraint <urn:uuid:3ff4714c-8c80-4f72-8ab5-72013400fda4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:18e3b49c-af79-4c13-9c89-70f224d509da>, <urn:uuid:2934c84a-1b9e-4962-8beb-0128fdab614a>.
<urn:uuid:18e3b49c-af79-4c13-9c89-70f224d509da> a report:ConstraintReport;
    report:constraint <urn:uuid:d57a6c6d-5c29-472b-803c-2bbebdb7ba71>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2934c84a-1b9e-4962-8beb-0128fdab614a> a report:ConstraintReport;
    report:constraint <urn:uuid:2e783af2-1f8a-4bd8-be7a-771c27436b55>;
    report:constraintLeftOperand "2024-02-12T05:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8d729197-2624-434f-ab1e-83f5cd5ffa38> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:011ad3e3-316d-4b6d-8407-e349546ac6c2> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:d48df096-e4b3-4980-bfe4-abd285934fb8> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
