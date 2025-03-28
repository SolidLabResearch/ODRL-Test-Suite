# Read request from Alice to resource X on weekdays from 9-17 in 2024 returns into yes (Alice Request Read X).
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

<urn:uuid:ab6d94e5-555c-408a-8f6e-1f77f34f8a32> a report:PolicyReport;
    dct:created "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:29b08c0a-97ea-41b1-b8e9-88400b1230cf>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:fdb29ea1-18c2-4265-a78a-28cf0cbeb267>.
<urn:uuid:fdb29ea1-18c2-4265-a78a-28cf0cbeb267> a report:PermissionReport;
    report:premiseReport <urn:uuid:4d5fc5d3-07c0-4011-9a1a-6d102abd4281>, <urn:uuid:20963238-e805-4618-b387-f971b19b0f38>, <urn:uuid:b9883a40-51b8-41fa-812f-5ba9e6fa62ed>, <urn:uuid:fae9b1bf-996d-4990-9850-cef0f35c439f>;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:f5d5f6d7-ef4b-43bc-9838-b79aef793883>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:activationState report:Active.
<urn:uuid:4d5fc5d3-07c0-4011-9a1a-6d102abd4281> a report:ConstraintReport;
    report:constraint <urn:uuid:fe3f0a29-307d-409d-ac71-f0f88c220cb7>;
    report:satisfactionState report:Satisfied;
    report:constraintLogicalOperand odrl:or;
    report:premiseReport <urn:uuid:c2b9b9e7-db8f-4770-8c10-872541aaabce>, <urn:uuid:8805f013-34f0-49e5-af51-2169773d7196>, <urn:uuid:a86327e7-c938-45e4-bdcd-85522213d70f>, <urn:uuid:d6ac4a50-9a41-4927-8e96-9bd2f249d16e>, <urn:uuid:bf9b118a-14d2-4d11-bf25-1e4c7414eb34>, <urn:uuid:405c531f-06ce-4646-b7aa-ec894f3efb3d>, <urn:uuid:c464ec30-964a-4e34-8b03-8278ba645c1b>, <urn:uuid:28ede0b1-8d51-4319-8ce4-fbcb785b05d3>, <urn:uuid:e9529337-b360-4d82-adc4-51a6e33e9478>, <urn:uuid:4cdf109d-dd57-4ed8-b8b0-2830f4579ae2>, <urn:uuid:857e976e-3f04-46dc-a587-74ff6a4b082c>, <urn:uuid:c65006f7-a998-49ae-881f-9e244b431536>, <urn:uuid:c2fcfd27-cd8c-4b8f-acf0-38b85d710406>, <urn:uuid:b5aa58f6-b118-46d1-b774-f704544528b8>, <urn:uuid:21acd582-e85c-4eef-90aa-77b312b7e9cc>, <urn:uuid:1201c1b0-1028-4cec-b536-57e3aead88f6>, <urn:uuid:dc95e706-1eb5-4258-bae7-991288db8ada>, <urn:uuid:770a95e0-d8e4-4040-8209-f2ccbc7bb43f>, <urn:uuid:b1feaf7c-d2c0-4a27-9ff0-e4a1f87340ac>, <urn:uuid:5baf3b3c-3b2e-4b6a-a196-0c33028a8de1>, <urn:uuid:cb619aaa-c09a-4945-a941-985f3788bb2d>, <urn:uuid:6fc49859-92c0-4526-a8f7-4ebd6707e596>, <urn:uuid:086344fe-df2c-480a-8eb0-df4e3bcc9246>, <urn:uuid:04bb2069-e921-414f-9812-7247cb3c0fd8>, <urn:uuid:cb2b083f-701f-4442-b076-49730bb31b42>, <urn:uuid:b27c7bc7-b7da-4ed1-93e5-eeecde480cc1>, <urn:uuid:ea581eb6-7e1b-47d0-aa8f-342a3f8d1c7d>, <urn:uuid:ca94cdf2-c0e4-4988-9545-92abbf8e7918>, <urn:uuid:9afffaad-9832-4d45-8bf9-3a6430590128>, <urn:uuid:88713243-c5c0-4af2-a450-afad6f396418>, <urn:uuid:c2510f75-a83a-4d78-bb06-85af77d717c9>, <urn:uuid:41dc8faf-5882-4024-88d6-f0d8bb556d01>, <urn:uuid:b6201fc0-a523-4ad7-a41a-b264bbb8ef60>, <urn:uuid:dd8188d4-f0be-4cc4-90c4-5caee25a4332>, <urn:uuid:ea32d121-1e07-4550-b64e-42877d74afb2>, <urn:uuid:98c0cc0f-2fdb-4239-a1ab-2d5eaaba1e01>, <urn:uuid:34a5c741-13ba-4d34-9a1b-aa0c7af11306>, <urn:uuid:7d5bad9a-9c70-4dcd-9d82-9cf43c14a230>, <urn:uuid:61466638-4ec3-4ff6-889c-c4d7eff6d17f>, <urn:uuid:8db32b29-2af6-4a0c-822e-6f99e4bdb804>, <urn:uuid:5ae00358-37ad-4b56-b97e-1b0020d2621d>, <urn:uuid:6c7ef15c-53bc-4c92-bd19-3e25c6703b44>, <urn:uuid:3a82023a-3560-4435-8563-78c117125b78>, <urn:uuid:cb76cdd5-771e-4567-a125-bce667bb5503>, <urn:uuid:31b8068a-ced2-43a9-8669-e20e71a1c95a>, <urn:uuid:164532d5-650b-49cc-a3dd-fa5c03beca76>, <urn:uuid:62a792cf-3c16-4249-9e1a-6c8070c465f5>, <urn:uuid:e281b434-1315-43d6-b8b2-24441b3ec512>, <urn:uuid:023a530c-d5b3-4779-a1a0-30828483cbfd>, <urn:uuid:cbabd5e9-ac39-44d8-9b06-3dda0e7fa211>, <urn:uuid:99297d2f-fa2f-4b34-b8e9-16ced3120222>, <urn:uuid:be530bc2-2726-489a-b45d-79e4527d2f58>, <urn:uuid:7d8790d8-b03d-42de-8c68-b87f273790ed>, <urn:uuid:6c1393f7-500c-4c92-b8b0-3ab5229f031d>, <urn:uuid:68b33315-cd1f-4257-af1e-60c0bc02d64e>, <urn:uuid:dd7b89d7-d028-4483-b9c7-b1846291d8ff>, <urn:uuid:a6535a33-a515-4ebc-83a0-51fe6da05881>, <urn:uuid:e2b3d20f-07b0-418d-a9c4-96650fa6e928>, <urn:uuid:2463c665-ce09-47ef-8daa-0977513a9dc6>, <urn:uuid:5d3a2827-a67a-4b43-89a9-44ec861ff3a2>, <urn:uuid:12c619d7-7a96-4102-a25d-cc3dffbf8162>, <urn:uuid:8a855561-542c-4a80-a1a0-60c149531167>, <urn:uuid:80dcdf78-65b3-4583-88ad-bf04ab092614>, <urn:uuid:6ebd55b1-204c-4fa2-ad74-30bd2018be01>, <urn:uuid:99eb5a1a-54bc-47b5-b46f-d2f6070f11b0>, <urn:uuid:73c32f62-ddf9-436f-aabc-586d525fe46c>, <urn:uuid:25137fd4-6bd7-455d-b8c5-a4129591a158>, <urn:uuid:cc6e1d19-c309-4e76-a430-ea58fe65444c>, <urn:uuid:59bfa90b-330a-4f8d-b5d5-2c439e108007>, <urn:uuid:18b80e29-3f94-4a5b-ba26-42ea0c14cb17>, <urn:uuid:77f44a05-62cf-4c2b-b08a-f7b604636dbc>, <urn:uuid:1a0a9540-5441-4bfe-a0f8-f93fe5368d6b>, <urn:uuid:ba208f4b-99c0-4533-94e8-05f8ffb5919f>, <urn:uuid:4b2f98d6-218e-4eb5-b096-aab97e827361>, <urn:uuid:55e60231-52cc-443c-a00c-f30bc2dd6fe3>, <urn:uuid:bd886141-004e-4e64-839d-11b8262a0b6c>, <urn:uuid:ea339371-c0cf-45e4-b32d-6efe6c91fe1b>, <urn:uuid:c8056205-cecd-4eae-9cc5-3a3c25a09468>, <urn:uuid:c0d52f22-d9e3-4a09-a6c9-0757f92f21a2>, <urn:uuid:244681cc-6397-422f-b9fc-b1a620a70827>, <urn:uuid:9847206d-3603-4424-a92f-113f1693950e>, <urn:uuid:c573f74f-a727-4a7a-9551-9dbc50d33088>, <urn:uuid:181a414a-f9a2-4df3-920c-9168f64b29ad>, <urn:uuid:90adcd4e-567d-4662-87ff-4745e1d159d6>, <urn:uuid:33537106-fdfd-488d-9987-79e761949d78>, <urn:uuid:31a064bd-ac33-4aca-9d28-2318535a6a62>, <urn:uuid:11d792ae-88ed-457e-ad5e-b47633544d45>, <urn:uuid:ab766dc0-ad7b-4c5d-83ec-dbff7a966c9e>, <urn:uuid:63b64908-813c-44cc-b9b8-f8241b9e61dc>, <urn:uuid:dbc54a84-182d-4ec9-bcf1-a8a58d89a911>, <urn:uuid:90668efc-ee47-4fb0-8d46-0cc23e83d52f>, <urn:uuid:0f36dd40-c367-4833-89a8-c81490bf850a>, <urn:uuid:c78a628e-349b-4b23-9bde-4986e6e90a0b>, <urn:uuid:c429cd4c-21ae-4d43-b32e-90d5ebe1db1a>, <urn:uuid:7f09e4a1-56ee-439c-a17b-0cabc225d52f>, <urn:uuid:7a8810c9-2012-446d-b956-d19284501bcc>, <urn:uuid:c2e9a282-e12e-4923-8c52-aa969051c9d5>, <urn:uuid:960203aa-9175-4efc-b252-b9e9999f30ce>, <urn:uuid:a063ccbf-09de-49ce-ae70-b9965e7c9558>, <urn:uuid:57852c14-f661-40ba-a237-96f720dc11bd>, <urn:uuid:5113396e-6935-4dde-a1f7-d91bbae9b909>, <urn:uuid:49908443-c7ed-4816-8dd6-56f344da7c1f>, <urn:uuid:48682ef6-483d-4c2c-9470-c8eb2759a1da>, <urn:uuid:8579d9b5-e1eb-4ccd-a216-e8e91697866e>, <urn:uuid:d8058d7b-85a3-4504-835b-f5cd26acfd9b>, <urn:uuid:33c1d4eb-fe8c-4f02-9c84-5d03fc67a66f>, <urn:uuid:db9cb19a-3fdc-4d5f-b81a-8472e863491a>, <urn:uuid:9545c3bd-d9d1-460d-98cd-308e29f19144>, <urn:uuid:9b4917c7-719f-4913-a941-0ea7ff1807c2>, <urn:uuid:71a1a5dd-f76f-450d-8dc6-52b717e946bf>, <urn:uuid:3c718748-e1c4-47f0-a9c8-a532d194fcc5>, <urn:uuid:d8b4f347-d9f9-4e75-aba2-e57a9d7e1a52>, <urn:uuid:081cda1e-1bdd-4b4e-9540-a8b35c291cdb>, <urn:uuid:78681bff-e014-4a1c-9940-e3e9ef59efdc>, <urn:uuid:a450773d-772a-42ff-a6f0-15aa0c27178b>, <urn:uuid:caebb5c4-b7c4-4099-bdcd-c21e90f5093e>, <urn:uuid:71870cb4-9e35-4979-829e-18b0da127bb7>, <urn:uuid:7af24ebf-7cf2-436c-ae73-d2c60b3e45ba>, <urn:uuid:cdd8b2a3-17d3-47d4-b500-4798386995d5>, <urn:uuid:dde6385d-609f-4717-a350-75bd07b16391>, <urn:uuid:757a5111-1738-4208-af08-64aa8ecbe6b8>, <urn:uuid:788f8270-e370-44bb-ac89-6b864e726be6>, <urn:uuid:17aefcac-6d8c-4e2f-bc29-4b3615940c01>, <urn:uuid:4a01a4e2-5787-46ed-a6ae-76205e663d59>, <urn:uuid:8289ebad-1af4-4336-a443-716a2b7fcd01>, <urn:uuid:19653578-89b5-4dd9-bfae-e54fc6dbaf8d>, <urn:uuid:8634a624-7237-4cc8-95bc-492a4bd52353>, <urn:uuid:6fedddba-50b5-4588-a1aa-d82450a65eb9>, <urn:uuid:36f1688f-9801-4387-9d30-44cacd90d15d>, <urn:uuid:fdfaac59-8061-4801-b093-883b2c90bd74>, <urn:uuid:e01a8d2a-2d05-4f93-86c6-f26ec2c8d398>, <urn:uuid:43630264-2fd3-497e-9969-3cc87f588eda>, <urn:uuid:3ddbb2f9-ec78-47c4-94a8-8a7d383f01b8>, <urn:uuid:2ebe0c0a-ff70-4931-b599-6432149b5835>, <urn:uuid:9352bd54-a238-4092-bb52-e156eec4fd0c>, <urn:uuid:1c0cb9a0-8d3f-4c4b-ad87-f29f0be05440>, <urn:uuid:be2bac3d-189a-4138-a154-8bbb966c0f1a>, <urn:uuid:93cddc96-567e-43a9-8c22-c9f463ea177b>, <urn:uuid:fe92751a-250b-4ca2-adec-0673449aca43>, <urn:uuid:f5b13608-d873-40b2-ac27-39747ce8b487>, <urn:uuid:a0bfaf60-c742-445f-b62a-3e1ea8cd9800>, <urn:uuid:5e33c15f-9d8f-4e13-a139-6cab9750631a>, <urn:uuid:6c43e8b5-1ddd-49f3-897a-625b53889fbc>, <urn:uuid:a54dd1ae-3934-415e-a05f-d23827a6cbf6>, <urn:uuid:d72311f2-9d3b-4a86-8818-5087348223c2>, <urn:uuid:940db9c8-917f-460a-a087-06e79d409cbb>, <urn:uuid:21432f2f-3d33-4a27-97d5-b9d9ffcab2b5>, <urn:uuid:35eb53a5-4461-4c06-9dbc-9b43281b22ab>, <urn:uuid:44c7a9c8-cc55-41a9-a975-fd03e65327f7>, <urn:uuid:7f1e4d0b-ec44-46fa-90a2-c2af13b91f5d>, <urn:uuid:9228191e-cf90-488e-8947-d0209c0e63f7>, <urn:uuid:ba81123b-155c-4f45-a332-cded8d577553>, <urn:uuid:4af1b342-acaf-4543-9d7e-faa4c3b848ec>, <urn:uuid:61a946b4-eca6-45a3-9300-f4a329c90d58>, <urn:uuid:2919871b-baf2-4391-acf4-2183a0c24e09>, <urn:uuid:326205c2-e354-4155-8bcc-c10201f394b6>, <urn:uuid:5564f08f-c3a3-4aa5-a765-30fb82def8e2>, <urn:uuid:922f68e0-3033-4185-9260-8efe46863b44>, <urn:uuid:0b50312e-e4bf-49dc-ba4d-54f957549775>, <urn:uuid:53eb2660-06d5-409c-ae6e-dca54fa0e264>, <urn:uuid:7ff191a6-01fe-4507-b3cd-ac3f63865010>, <urn:uuid:ffbc229e-5406-4571-b245-a41a952aa3fd>, <urn:uuid:12c13147-5e98-4cbd-9e44-408d66534e43>, <urn:uuid:fba7e950-834a-4e43-b11a-fc7fb83b78eb>, <urn:uuid:8c9cebeb-e45a-46f4-8e2c-f52cd465ec71>, <urn:uuid:0a47465c-8c9c-4d86-87ff-85478ceaf413>, <urn:uuid:c76964a9-69e7-4a90-918a-dcba0baad366>, <urn:uuid:330e82d4-bcda-4caf-ba44-39c1a9957992>, <urn:uuid:4ffd3498-9fb1-4ad2-8e19-fa6850dbab7f>, <urn:uuid:4ae51fe5-28e4-4dd7-8ef5-d1d416a90b14>, <urn:uuid:651ef753-6760-4573-8c5f-15b6fdd9daf6>, <urn:uuid:be8491de-2c7b-4611-b25e-f397954aeafb>, <urn:uuid:c5844211-ad84-4d96-b2df-afa0d26324c9>, <urn:uuid:08c88157-7322-46e5-9b3a-fab63c4c59a6>, <urn:uuid:3897a91e-068e-4164-9dc2-026eb7aa6d12>, <urn:uuid:c01e19fe-97da-4340-ab34-5f6f46a9396d>, <urn:uuid:4e11e9b7-47e2-405b-b5fb-ee4cbaea868e>, <urn:uuid:ccd0addc-eb6a-45bf-96f7-1b36f66c3ed6>, <urn:uuid:2ce630a2-cf35-44d4-9074-ed6db0ee7a63>, <urn:uuid:80c32fdd-30c2-49d5-82fc-aa80a840e131>, <urn:uuid:0a64f707-800f-4776-b8c6-5568a4706049>, <urn:uuid:60bc8558-88ad-4f01-82e4-055acf6f99c6>, <urn:uuid:599e8e0b-cce8-4363-9e57-ee8f50737430>, <urn:uuid:f1ff1aa1-ba30-4fc6-881a-6ed6d9ecca40>, <urn:uuid:e71bd704-5860-489e-be28-8d79efc4e2dd>, <urn:uuid:3f674c14-a1f6-419a-a582-e6899be755ff>, <urn:uuid:88e4c2b8-b319-4639-8a96-fee45a8217ac>, <urn:uuid:6c70d636-ba14-4e1b-95ae-0288a2f5eee1>, <urn:uuid:c842903c-e7e1-4f5c-bb68-ee045224d1d9>, <urn:uuid:e2af3b99-2d1a-45e7-91e7-9608a866db1a>, <urn:uuid:3d1a6b47-5d10-4eda-b687-1db538a0feb2>, <urn:uuid:886d46e0-532a-4fd4-ab8a-c1b300cd7ace>, <urn:uuid:9e1eaac8-64ec-4f25-967a-56af441b4793>, <urn:uuid:af825e26-d353-4486-ae21-ae11cc53b7d7>, <urn:uuid:5e838cbe-1f8a-4cc5-98ef-fc0a6d625b81>, <urn:uuid:04dfcd96-68ed-4dbb-a001-768d3ba644c3>, <urn:uuid:29e57406-c94a-4650-8fd7-2ff4ad821a7a>, <urn:uuid:60d91f02-b642-4c36-9bf9-36ec0da07564>, <urn:uuid:1052766e-a33f-4a08-933b-102c87caad8d>, <urn:uuid:e230658f-5c17-4951-b1fa-22a178a17d9e>, <urn:uuid:c0abcdf0-feeb-49d3-87ad-d2f54a8a0113>, <urn:uuid:4f57f6e8-2c6a-46ce-bd64-c92ea8fe0f7e>, <urn:uuid:95bc6ba7-1ec6-4d50-9f21-6a713d8aae27>, <urn:uuid:95d78489-c39b-4da4-afff-40c2b4fe45d3>, <urn:uuid:f62066fc-d98f-4cfb-b0df-12c5079bb60b>, <urn:uuid:5593f889-6e40-407d-8f11-e1814c191804>, <urn:uuid:7f2377cf-0fc1-4e9f-bc18-ef6bbc919d70>, <urn:uuid:c54b84f6-41ad-495e-96d3-8f5b7bf9c003>, <urn:uuid:dde5bfaf-f00d-4446-af74-949c1d9f3646>, <urn:uuid:1f518daf-8016-4e99-abf5-a7ff12454807>, <urn:uuid:a4f2c3ad-ee94-41c6-919c-5d09a1fe50e6>, <urn:uuid:ae721dbe-5f96-4a1e-908d-583882867769>, <urn:uuid:38fd1cc5-387a-4247-965f-437f9c901467>, <urn:uuid:dc5522f3-bd10-4c60-b1f2-09da86ccc783>, <urn:uuid:562d0f38-726c-4c40-816c-b261644e6678>, <urn:uuid:69836efe-5b54-4054-9737-7d24b56f9a88>, <urn:uuid:da745eed-9e8e-4988-85e9-8a86afd37ccd>, <urn:uuid:bfe2ce77-ea52-4cdb-bded-3f35925e389e>, <urn:uuid:4287fd48-2583-4c36-b51c-f72f6ef5aeb8>, <urn:uuid:f27fdea6-6b2f-4853-a861-1a7a6b5e4126>, <urn:uuid:336116e8-d17c-4dbe-985a-0d8e75314504>, <urn:uuid:6666e93c-ed9d-407c-a1d2-0afa8eec7d33>, <urn:uuid:2f136621-60f1-4699-82e5-349ad463188b>, <urn:uuid:d94e2451-b156-47b5-a6d8-12ae0aba81d2>, <urn:uuid:c23c6aed-14d2-459c-b660-3173c9e78d10>, <urn:uuid:7b26ba38-b9d9-437d-8727-a3907eac1796>, <urn:uuid:8d0fe307-c918-4972-9eb7-f1700492ae0e>, <urn:uuid:83a59e79-1965-40ff-9f74-f3c9c508f8a0>, <urn:uuid:40305cbf-b645-4fdd-a383-bb5a947ccf62>, <urn:uuid:97be4fbd-9bcf-4354-8e19-bd18cf3fef2b>, <urn:uuid:7d414161-76e4-4302-b4e4-827390a3bfe7>, <urn:uuid:79e7863a-c19e-4357-9c22-5f2a91e1c29e>, <urn:uuid:53aeac0b-18e1-4f7a-a3ca-ffc69a657389>, <urn:uuid:0995f766-a372-4f80-be72-417bfe279f9f>, <urn:uuid:4d48dfb0-c18e-416f-aa84-92dd722393e7>, <urn:uuid:ee5a971c-f357-4074-84af-c5e228b4a43a>, <urn:uuid:f665c039-beeb-4746-a6c6-37a29641bfd6>, <urn:uuid:15e92bf9-9eb4-44c1-a9b5-1152cad3ddd2>, <urn:uuid:3bdbd0ea-28d5-4659-ac3e-6e847d8f36c8>, <urn:uuid:3c6613e3-aea0-4691-9d95-dccafb006ed7>, <urn:uuid:98fe9bb8-7a3f-4289-8a62-a9e6a478803e>, <urn:uuid:68802be6-b862-42cd-b6c6-40c8a82b0b1f>, <urn:uuid:cc8cd6fb-9b86-4683-a480-faa3991d8b1b>, <urn:uuid:3e7820c6-1dcb-4897-b586-10ed190a5d12>, <urn:uuid:531c311b-bee4-4528-bbed-52acf99b8bc0>, <urn:uuid:4485161c-0608-4060-a754-f77f2eff74bc>, <urn:uuid:a19ca4cd-41e3-4f4c-9ced-5d7ff15e5550>, <urn:uuid:776cb3df-dabe-4808-976b-64a7b7045bc9>, <urn:uuid:1cc8c59b-f81f-4bad-ad7b-1d260c75e02c>, <urn:uuid:f65860e5-c764-44e3-b9e4-cae7cfe514e4>, <urn:uuid:63bb0f3a-34a3-4228-99ef-b85c782dc930>, <urn:uuid:4d867e3a-c940-43d1-b250-f67f5c246f83>, <urn:uuid:29b73c01-4499-4075-80db-b1bf2a731608>, <urn:uuid:d6f1e470-ccc1-4f02-9e53-18afb187ef87>, <urn:uuid:e51a1bb8-b852-489f-b933-be5f0f877860>, <urn:uuid:91c0b3f3-850c-4256-98ad-513c917f9fc5>, <urn:uuid:8f9f8dc0-ea4b-4067-87f6-5ae523fdb68c>, <urn:uuid:95b47e73-8555-48e5-99b4-bb2a7106879d>, <urn:uuid:27fcf766-1aa0-4da0-8d23-b0ee90aa9305>, <urn:uuid:4c460025-acc9-4fcd-941e-67352445ddf9>, <urn:uuid:f0b27fe2-8909-44ea-88fd-8e936062f464>, <urn:uuid:f1de6a7a-63a3-45ce-8b74-36276f93e742>.
<urn:uuid:c2b9b9e7-db8f-4770-8c10-872541aaabce> a report:ConstraintReport;
    report:constraint <urn:uuid:3e55a9e0-a368-495c-b378-ef1fc7d28423>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b9d32bd8-a7c3-4527-9afe-cb46598e8393>, <urn:uuid:b0bedb40-7bb7-44c6-a25c-c7d47297741b>.
<urn:uuid:b9d32bd8-a7c3-4527-9afe-cb46598e8393> a report:ConstraintReport;
    report:constraint <urn:uuid:ef1995be-0881-4d8b-b268-728b5478983f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b0bedb40-7bb7-44c6-a25c-c7d47297741b> a report:ConstraintReport;
    report:constraint <urn:uuid:6419ce9e-6e46-4d73-a30e-4683f1f29c73>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8805f013-34f0-49e5-af51-2169773d7196> a report:ConstraintReport;
    report:constraint <urn:uuid:3a0b7e60-201d-4fc8-b1f7-4f5dd6df5acd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a04a7c19-6d9f-40b3-b871-2e3e8ea33523>, <urn:uuid:94a32a80-708d-4a2f-acca-a31a9468670d>.
<urn:uuid:a04a7c19-6d9f-40b3-b871-2e3e8ea33523> a report:ConstraintReport;
    report:constraint <urn:uuid:89691371-6a64-460e-8459-627c7eb0a822>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:94a32a80-708d-4a2f-acca-a31a9468670d> a report:ConstraintReport;
    report:constraint <urn:uuid:19203254-c14c-4072-ad00-a0f5b643967d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a86327e7-c938-45e4-bdcd-85522213d70f> a report:ConstraintReport;
    report:constraint <urn:uuid:4040ebf0-21ae-4d2f-b0d0-c94bd10500b4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1957a1d7-b894-46d3-ab6e-b7575948e7f7>, <urn:uuid:92090e90-70ab-4814-bb5c-5a89c23db034>.
<urn:uuid:1957a1d7-b894-46d3-ab6e-b7575948e7f7> a report:ConstraintReport;
    report:constraint <urn:uuid:2ef91923-c928-4094-8952-de72b1624344>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:92090e90-70ab-4814-bb5c-5a89c23db034> a report:ConstraintReport;
    report:constraint <urn:uuid:b3e06292-fe42-411e-81e5-ac4a27849341>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-03T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d6ac4a50-9a41-4927-8e96-9bd2f249d16e> a report:ConstraintReport;
    report:constraint <urn:uuid:4549fbe1-ea71-4b56-983d-52ce9f494d9d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:42bcaf09-6990-4147-be80-fcbb7a47affe>, <urn:uuid:27065e64-a39f-43f9-b99e-32cdccd61bf8>.
<urn:uuid:42bcaf09-6990-4147-be80-fcbb7a47affe> a report:ConstraintReport;
    report:constraint <urn:uuid:c14144f3-1bb7-4cb1-aaac-a9fd7cb202dd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:27065e64-a39f-43f9-b99e-32cdccd61bf8> a report:ConstraintReport;
    report:constraint <urn:uuid:2d2ebd43-f310-496a-ada9-5fc7b0e9651e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-04T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bf9b118a-14d2-4d11-bf25-1e4c7414eb34> a report:ConstraintReport;
    report:constraint <urn:uuid:f2c2a215-4758-4b95-8a72-d780c955340a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:63c03ce7-89f4-4444-b440-bf14deafd796>, <urn:uuid:57dcf439-5616-45c5-8e7e-21687be53907>.
<urn:uuid:63c03ce7-89f4-4444-b440-bf14deafd796> a report:ConstraintReport;
    report:constraint <urn:uuid:776c51ed-bcea-48ac-858c-da60e55aa4e0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:57dcf439-5616-45c5-8e7e-21687be53907> a report:ConstraintReport;
    report:constraint <urn:uuid:fa5f1424-9d9a-43d4-8d0c-0be2be49d3c6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:405c531f-06ce-4646-b7aa-ec894f3efb3d> a report:ConstraintReport;
    report:constraint <urn:uuid:6bf766d8-9bc9-4d02-8e4f-7d27c52ae51c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e62e6063-e88d-460b-851d-a6c26e298ec6>, <urn:uuid:52d6813e-6f40-45bf-bead-988af821e12c>.
<urn:uuid:e62e6063-e88d-460b-851d-a6c26e298ec6> a report:ConstraintReport;
    report:constraint <urn:uuid:08b3d898-c618-41ca-b513-c2be9d02849c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:52d6813e-6f40-45bf-bead-988af821e12c> a report:ConstraintReport;
    report:constraint <urn:uuid:78e3c6b4-9733-426c-8757-6ea237ce105a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c464ec30-964a-4e34-8b03-8278ba645c1b> a report:ConstraintReport;
    report:constraint <urn:uuid:e4bbfc36-01eb-438d-82d5-764eaf6f4b38>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:45be13d0-10b5-4e3c-8b1f-cd52f74d57e5>, <urn:uuid:f6dbf0f1-7e25-4bf4-9753-0c7bb1a88acd>.
<urn:uuid:45be13d0-10b5-4e3c-8b1f-cd52f74d57e5> a report:ConstraintReport;
    report:constraint <urn:uuid:487e135e-b283-4173-9c03-c734da041b90>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f6dbf0f1-7e25-4bf4-9753-0c7bb1a88acd> a report:ConstraintReport;
    report:constraint <urn:uuid:847f28b3-0529-4cf7-8c4e-ec4128c1d01d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:28ede0b1-8d51-4319-8ce4-fbcb785b05d3> a report:ConstraintReport;
    report:constraint <urn:uuid:ae5d7d97-5e92-461a-a3ca-5653a7e87292>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2f4061d9-3a7d-4214-8bbb-c45a95c5036e>, <urn:uuid:ba1ed657-3f34-4189-be9c-274105397ad6>.
<urn:uuid:2f4061d9-3a7d-4214-8bbb-c45a95c5036e> a report:ConstraintReport;
    report:constraint <urn:uuid:5cd34117-bffc-4774-a7a7-4e037840aaf2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ba1ed657-3f34-4189-be9c-274105397ad6> a report:ConstraintReport;
    report:constraint <urn:uuid:0353e399-556d-45d2-b3ec-9568ded4b6a3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-10T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e9529337-b360-4d82-adc4-51a6e33e9478> a report:ConstraintReport;
    report:constraint <urn:uuid:027b62aa-1ecc-475b-a5d0-fe358d8bd175>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d89e60aa-a1bc-4c7a-a591-e3ad8c137854>, <urn:uuid:72716c3c-bd2c-4228-b9d7-fd0ff1e385ae>.
<urn:uuid:d89e60aa-a1bc-4c7a-a591-e3ad8c137854> a report:ConstraintReport;
    report:constraint <urn:uuid:43fabba8-3c95-442e-83d9-f713a81f9400>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:72716c3c-bd2c-4228-b9d7-fd0ff1e385ae> a report:ConstraintReport;
    report:constraint <urn:uuid:a763d179-99e0-416c-8533-b8e762ca5e49>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-11T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4cdf109d-dd57-4ed8-b8b0-2830f4579ae2> a report:ConstraintReport;
    report:constraint <urn:uuid:66138113-683f-420e-ad70-d3d17d234773>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2334fe9c-d605-414a-bfa1-6cb9c1f909e6>, <urn:uuid:e371879d-816d-47be-9f10-5ded3a3a21e2>.
<urn:uuid:2334fe9c-d605-414a-bfa1-6cb9c1f909e6> a report:ConstraintReport;
    report:constraint <urn:uuid:47d65afd-514d-489a-b7ef-17b545de66cf>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e371879d-816d-47be-9f10-5ded3a3a21e2> a report:ConstraintReport;
    report:constraint <urn:uuid:12481c7b-2b7d-4215-87bf-864c9d45bfff>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:857e976e-3f04-46dc-a587-74ff6a4b082c> a report:ConstraintReport;
    report:constraint <urn:uuid:5f6bab6e-bf48-44c3-84fe-ccbc610d7d5e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2cb74e51-4f3b-41fc-b292-b97a06982e29>, <urn:uuid:f9525f70-3f0c-4c78-841a-08c8b7790036>.
<urn:uuid:2cb74e51-4f3b-41fc-b292-b97a06982e29> a report:ConstraintReport;
    report:constraint <urn:uuid:10e7d6bc-a15d-4f5b-ad72-43815be8a42f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f9525f70-3f0c-4c78-841a-08c8b7790036> a report:ConstraintReport;
    report:constraint <urn:uuid:4cf20076-3dc5-4d99-ab65-209cb7daf4b8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-15T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c65006f7-a998-49ae-881f-9e244b431536> a report:ConstraintReport;
    report:constraint <urn:uuid:cc4e7745-6e96-4d7a-b1af-38499fdd6cad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f27802f3-bbe2-4d6d-b4e2-9ce20cac2e4c>, <urn:uuid:8fe3d6fe-1261-4687-9f56-9cfac62563fd>.
<urn:uuid:f27802f3-bbe2-4d6d-b4e2-9ce20cac2e4c> a report:ConstraintReport;
    report:constraint <urn:uuid:56584822-db86-4a89-8d1e-4f7f58c5e163>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8fe3d6fe-1261-4687-9f56-9cfac62563fd> a report:ConstraintReport;
    report:constraint <urn:uuid:4938531d-6a55-481b-9925-d0870c9386df>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-16T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c2fcfd27-cd8c-4b8f-acf0-38b85d710406> a report:ConstraintReport;
    report:constraint <urn:uuid:d5f55ddb-27ae-479e-a376-b8fe2e38e1ed>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1aad306c-368e-4a2b-ac35-e8f227c5fb46>, <urn:uuid:e49dfc3e-0c25-4054-89f6-188144861f35>.
<urn:uuid:1aad306c-368e-4a2b-ac35-e8f227c5fb46> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d40525-4638-4c8a-804d-16e0e175feb8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e49dfc3e-0c25-4054-89f6-188144861f35> a report:ConstraintReport;
    report:constraint <urn:uuid:80d8392e-509f-447d-815a-a7f469b14e8a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-17T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b5aa58f6-b118-46d1-b774-f704544528b8> a report:ConstraintReport;
    report:constraint <urn:uuid:42e65efc-e205-490a-ba22-f7e5daa11eb2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b8953268-82ee-46ee-8434-789ee4ef6acd>, <urn:uuid:f5580d88-b7ad-4df6-bc68-9ac6e5e2ca7e>.
<urn:uuid:b8953268-82ee-46ee-8434-789ee4ef6acd> a report:ConstraintReport;
    report:constraint <urn:uuid:78191c34-5bcf-48ac-8ae2-93c726051f91>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f5580d88-b7ad-4df6-bc68-9ac6e5e2ca7e> a report:ConstraintReport;
    report:constraint <urn:uuid:80aa9457-257e-47f7-918b-c7bc5d1ab3f7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-18T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:21acd582-e85c-4eef-90aa-77b312b7e9cc> a report:ConstraintReport;
    report:constraint <urn:uuid:e60f11c7-561f-4459-9e9e-4e5f037006c0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:25c896af-7e38-4ad5-9f8e-243548cc1363>, <urn:uuid:d0dffb8f-262a-4139-8c33-a1586ee317fb>.
<urn:uuid:25c896af-7e38-4ad5-9f8e-243548cc1363> a report:ConstraintReport;
    report:constraint <urn:uuid:0596f841-97e1-4aa5-be25-4e7a7695563b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d0dffb8f-262a-4139-8c33-a1586ee317fb> a report:ConstraintReport;
    report:constraint <urn:uuid:163ffffb-be82-42cb-ac47-cbefe9de6b5a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-19T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1201c1b0-1028-4cec-b536-57e3aead88f6> a report:ConstraintReport;
    report:constraint <urn:uuid:4d8d327a-4d3c-4b09-856b-39b67261bec6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a8ed5568-1a73-45c8-bd2e-c8527b31f5dd>, <urn:uuid:deef9118-06ea-4935-8970-177d052fd321>.
<urn:uuid:a8ed5568-1a73-45c8-bd2e-c8527b31f5dd> a report:ConstraintReport;
    report:constraint <urn:uuid:a0268f4b-c1f1-4db8-a5ef-85ac40c3592a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:deef9118-06ea-4935-8970-177d052fd321> a report:ConstraintReport;
    report:constraint <urn:uuid:908dc400-efdd-44f2-a4b0-428abf72a88f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-22T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dc95e706-1eb5-4258-bae7-991288db8ada> a report:ConstraintReport;
    report:constraint <urn:uuid:3fc45405-5ebb-41b1-a8d6-ab0bbb0d7857>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8a1c49a2-1693-4ad4-9477-f251501cb416>, <urn:uuid:f583ef3a-6eed-440d-9e3e-5c1f4d68edc0>.
<urn:uuid:8a1c49a2-1693-4ad4-9477-f251501cb416> a report:ConstraintReport;
    report:constraint <urn:uuid:dffa26e4-c85f-4dfa-81e0-c52024dffb1e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f583ef3a-6eed-440d-9e3e-5c1f4d68edc0> a report:ConstraintReport;
    report:constraint <urn:uuid:41d602b1-a246-4b40-9086-40edd44ab0c3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-23T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:770a95e0-d8e4-4040-8209-f2ccbc7bb43f> a report:ConstraintReport;
    report:constraint <urn:uuid:925027e7-3d8f-4b79-9558-e7ec0087c87f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f7fcb15b-e5fc-433f-8dbf-54476f121908>, <urn:uuid:b79db1a0-0d8b-401c-9024-daefaf30b798>.
<urn:uuid:f7fcb15b-e5fc-433f-8dbf-54476f121908> a report:ConstraintReport;
    report:constraint <urn:uuid:0a8a0e76-128b-4856-8606-3750573717cc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b79db1a0-0d8b-401c-9024-daefaf30b798> a report:ConstraintReport;
    report:constraint <urn:uuid:29faea6e-0504-42b0-9751-2a2d87667ced>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-24T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b1feaf7c-d2c0-4a27-9ff0-e4a1f87340ac> a report:ConstraintReport;
    report:constraint <urn:uuid:63936891-0ef5-48eb-9d64-9bf5b2778502>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:91af1107-2aec-4fdc-8abb-0cc1a3a4e1f0>, <urn:uuid:8f2afa17-cf5b-407a-8cee-07e46a7cc5dd>.
<urn:uuid:91af1107-2aec-4fdc-8abb-0cc1a3a4e1f0> a report:ConstraintReport;
    report:constraint <urn:uuid:9c9a514a-5247-44d8-b5d4-98b4b44a2e19>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8f2afa17-cf5b-407a-8cee-07e46a7cc5dd> a report:ConstraintReport;
    report:constraint <urn:uuid:b07ea640-d092-4051-83d6-4c60f49360d9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-25T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5baf3b3c-3b2e-4b6a-a196-0c33028a8de1> a report:ConstraintReport;
    report:constraint <urn:uuid:9f77c162-b09e-4b3d-9c70-52e4f7fae8f4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0ff5418e-8689-46e9-9558-924f3b5d6a14>, <urn:uuid:5bae38d0-3984-4c9e-95b7-135a42317368>.
<urn:uuid:0ff5418e-8689-46e9-9558-924f3b5d6a14> a report:ConstraintReport;
    report:constraint <urn:uuid:2869ac16-3e1a-49cd-aa7b-a72da02f3c79>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5bae38d0-3984-4c9e-95b7-135a42317368> a report:ConstraintReport;
    report:constraint <urn:uuid:343f01a8-53a6-41b6-91d3-e2d717a52f7e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-26T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cb619aaa-c09a-4945-a941-985f3788bb2d> a report:ConstraintReport;
    report:constraint <urn:uuid:fd5037f5-3660-4382-b5c5-c29af7d01e58>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:42ecaf29-6e48-4638-891f-684bfb72d040>, <urn:uuid:34d7be3c-bfbb-48d1-ba97-f3c50bab0d7e>.
<urn:uuid:42ecaf29-6e48-4638-891f-684bfb72d040> a report:ConstraintReport;
    report:constraint <urn:uuid:ed665aa5-cd4e-46c7-9dbe-1e3cf1ec9452>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:34d7be3c-bfbb-48d1-ba97-f3c50bab0d7e> a report:ConstraintReport;
    report:constraint <urn:uuid:74a4eb82-43a2-4c77-bc68-78e9814f060b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-29T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6fc49859-92c0-4526-a8f7-4ebd6707e596> a report:ConstraintReport;
    report:constraint <urn:uuid:668c4199-db43-4336-9edf-82eb3a87f336>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:58944981-afad-4e3c-a378-1d8c21bd8ab9>, <urn:uuid:076553af-0bc6-4a1e-9e22-1e49e78910a9>.
<urn:uuid:58944981-afad-4e3c-a378-1d8c21bd8ab9> a report:ConstraintReport;
    report:constraint <urn:uuid:b72560f8-09f8-4331-a676-ab7bc3ea27ab>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:076553af-0bc6-4a1e-9e22-1e49e78910a9> a report:ConstraintReport;
    report:constraint <urn:uuid:f65192ac-9654-457f-9657-dd875c4f3ac4>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-30T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:086344fe-df2c-480a-8eb0-df4e3bcc9246> a report:ConstraintReport;
    report:constraint <urn:uuid:99b59b86-e907-4eb3-b6e2-2eb826d8f887>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:eaea2514-e26f-4742-8f06-c224f77ccfd0>, <urn:uuid:9dd85a25-0e3b-4c2f-a13f-5529d7bb5db2>.
<urn:uuid:eaea2514-e26f-4742-8f06-c224f77ccfd0> a report:ConstraintReport;
    report:constraint <urn:uuid:6073e4d7-d66d-4bb0-9ac9-66f8d27781f3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9dd85a25-0e3b-4c2f-a13f-5529d7bb5db2> a report:ConstraintReport;
    report:constraint <urn:uuid:791a6428-bd9b-45a7-a4b3-77b5d1da2c09>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-01-31T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:04bb2069-e921-414f-9812-7247cb3c0fd8> a report:ConstraintReport;
    report:constraint <urn:uuid:b074c5d1-ec4b-49b6-8404-3454c20c5fee>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:83376a25-bace-4c16-b18c-7a83622457ef>, <urn:uuid:a8bc8105-f9b2-4138-925e-507e0ce240e1>.
<urn:uuid:83376a25-bace-4c16-b18c-7a83622457ef> a report:ConstraintReport;
    report:constraint <urn:uuid:4640a2df-1852-40a1-a6ca-356cbc2c10b0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a8bc8105-f9b2-4138-925e-507e0ce240e1> a report:ConstraintReport;
    report:constraint <urn:uuid:94ac7531-23c3-42aa-a0d1-7fdb790b3e94>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-01T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cb2b083f-701f-4442-b076-49730bb31b42> a report:ConstraintReport;
    report:constraint <urn:uuid:93760dc7-3009-45c0-ac6a-093b6ed9ae31>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6148fdc8-9146-4dbd-89a8-80d92318ef0e>, <urn:uuid:dd7235e3-4a67-4c11-8ace-09be9b60af20>.
<urn:uuid:6148fdc8-9146-4dbd-89a8-80d92318ef0e> a report:ConstraintReport;
    report:constraint <urn:uuid:72b33877-3fdb-450c-911b-1c0d233d53d9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dd7235e3-4a67-4c11-8ace-09be9b60af20> a report:ConstraintReport;
    report:constraint <urn:uuid:b24af580-eed9-44e4-bd2b-a4577169d1a5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-02T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b27c7bc7-b7da-4ed1-93e5-eeecde480cc1> a report:ConstraintReport;
    report:constraint <urn:uuid:93780389-290c-4574-8814-7da01c1de167>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:30ae41e7-e901-4650-bb49-bfc6832114fa>, <urn:uuid:4688c258-557d-4278-96f8-9875a2f51da2>.
<urn:uuid:30ae41e7-e901-4650-bb49-bfc6832114fa> a report:ConstraintReport;
    report:constraint <urn:uuid:dc1a7d14-3a99-4651-bcf0-5cf40b498b26>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4688c258-557d-4278-96f8-9875a2f51da2> a report:ConstraintReport;
    report:constraint <urn:uuid:b4843a83-39df-4cf0-892f-f04a6da1f8e8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-05T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ea581eb6-7e1b-47d0-aa8f-342a3f8d1c7d> a report:ConstraintReport;
    report:constraint <urn:uuid:502793e8-9aa3-4c1b-8566-f3310fcf84cd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:49c60f1f-725a-4b4d-9b68-4a6acd0f57df>, <urn:uuid:a7fb25b0-5d65-4111-a059-12b18394d58d>.
<urn:uuid:49c60f1f-725a-4b4d-9b68-4a6acd0f57df> a report:ConstraintReport;
    report:constraint <urn:uuid:2c77d2fb-37ec-4338-94ec-cc1dc84ab103>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a7fb25b0-5d65-4111-a059-12b18394d58d> a report:ConstraintReport;
    report:constraint <urn:uuid:79360e32-f92b-4ab7-9655-1cb750852c9a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-06T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ca94cdf2-c0e4-4988-9545-92abbf8e7918> a report:ConstraintReport;
    report:constraint <urn:uuid:9ecc0a82-8017-4b1f-87e2-10f326f7fe03>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:66ff0130-e211-432c-8082-822a56ef6e82>, <urn:uuid:5f83e395-85f9-40d7-affe-16de5d1a0ffb>.
<urn:uuid:66ff0130-e211-432c-8082-822a56ef6e82> a report:ConstraintReport;
    report:constraint <urn:uuid:cbed4529-9c7e-4bd7-af19-1274fad6968f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5f83e395-85f9-40d7-affe-16de5d1a0ffb> a report:ConstraintReport;
    report:constraint <urn:uuid:8ae88552-d4ac-4cde-8f82-3dd1718b398a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-07T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9afffaad-9832-4d45-8bf9-3a6430590128> a report:ConstraintReport;
    report:constraint <urn:uuid:86330f57-8d3b-4305-8b28-7757bf0913a7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c5b3dd7a-927d-44fe-924b-5fe508e97fa6>, <urn:uuid:b0a32d6e-8518-458a-99d3-f9cc96a99f3e>.
<urn:uuid:c5b3dd7a-927d-44fe-924b-5fe508e97fa6> a report:ConstraintReport;
    report:constraint <urn:uuid:eb8c09ec-ed48-4014-88cc-d29a2f148bbf>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b0a32d6e-8518-458a-99d3-f9cc96a99f3e> a report:ConstraintReport;
    report:constraint <urn:uuid:a1fa3b90-08b4-4c48-8217-ba1b8f3bd261>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-08T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:88713243-c5c0-4af2-a450-afad6f396418> a report:ConstraintReport;
    report:constraint <urn:uuid:aa961acb-59e1-404b-abf8-db7b2da9ffd9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b362e0af-68fe-4da6-a7e5-bfe54d48a0df>, <urn:uuid:e45f7ce3-93b6-468c-af09-47fe0d7f3a54>.
<urn:uuid:b362e0af-68fe-4da6-a7e5-bfe54d48a0df> a report:ConstraintReport;
    report:constraint <urn:uuid:e58ebe3e-93de-47a4-929a-b84070c50329>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e45f7ce3-93b6-468c-af09-47fe0d7f3a54> a report:ConstraintReport;
    report:constraint <urn:uuid:adf26737-3ead-4382-b9fe-6d30792a792e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-09T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c2510f75-a83a-4d78-bb06-85af77d717c9> a report:ConstraintReport;
    report:constraint <urn:uuid:f40cc880-e1ff-4401-8d48-087cf5bb1ba6>;
    report:satisfactionState report:Satisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:360182a1-1e3c-4b47-8f70-953c070cadd0>, <urn:uuid:cf57b661-0345-4469-b637-25f9180d4f7b>.
<urn:uuid:360182a1-1e3c-4b47-8f70-953c070cadd0> a report:ConstraintReport;
    report:constraint <urn:uuid:598a801b-62a9-40ec-bdf0-15e8bb78cd3f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cf57b661-0345-4469-b637-25f9180d4f7b> a report:ConstraintReport;
    report:constraint <urn:uuid:cca97230-a84c-4eb7-b09f-68acab42a773>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:gt;
    report:constraintRightOperand "2024-02-12T09:00:00.000Z"^^xsd:dateTime.
<urn:uuid:41dc8faf-5882-4024-88d6-f0d8bb556d01> a report:ConstraintReport;
    report:constraint <urn:uuid:59b07fb2-5acc-4f4b-83a7-36569246fde9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4af9ae0a-7586-4a0a-af93-e0fb85c44bb1>, <urn:uuid:2cc62734-69cb-4530-bb66-37508de8fba3>.
<urn:uuid:4af9ae0a-7586-4a0a-af93-e0fb85c44bb1> a report:ConstraintReport;
    report:constraint <urn:uuid:6dc086d4-fcdc-4f5f-895f-82a69223d526>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2cc62734-69cb-4530-bb66-37508de8fba3> a report:ConstraintReport;
    report:constraint <urn:uuid:c7ea6260-d8c6-4219-ab0e-5a5c988b7e08>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b6201fc0-a523-4ad7-a41a-b264bbb8ef60> a report:ConstraintReport;
    report:constraint <urn:uuid:4d46f200-3390-4b59-bc09-ed4b50729e50>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8f804ded-51c4-410e-8fb5-bc593ff41f0d>, <urn:uuid:b08a773d-b752-4eb0-bbd3-8364e7bbf4f4>.
<urn:uuid:8f804ded-51c4-410e-8fb5-bc593ff41f0d> a report:ConstraintReport;
    report:constraint <urn:uuid:87344fad-e07f-4d6a-9f96-274248f7c49f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b08a773d-b752-4eb0-bbd3-8364e7bbf4f4> a report:ConstraintReport;
    report:constraint <urn:uuid:f8244460-02f4-4768-8066-39f8edda6653>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dd8188d4-f0be-4cc4-90c4-5caee25a4332> a report:ConstraintReport;
    report:constraint <urn:uuid:7655c3fd-75e1-4da1-9cfd-2e9cd230ae8f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4fec73ed-24dd-43ca-ba54-7b1cc0012afe>, <urn:uuid:1bf14a06-f307-4b61-a440-f173a1061e65>.
<urn:uuid:4fec73ed-24dd-43ca-ba54-7b1cc0012afe> a report:ConstraintReport;
    report:constraint <urn:uuid:41231ddb-58b0-4cb3-997b-b6e54dcf24cb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1bf14a06-f307-4b61-a440-f173a1061e65> a report:ConstraintReport;
    report:constraint <urn:uuid:bfca2595-5a81-4e54-89e1-cc0b2caf602a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ea32d121-1e07-4550-b64e-42877d74afb2> a report:ConstraintReport;
    report:constraint <urn:uuid:2abc17af-ec27-4334-81ec-eddba73cba51>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:33f4a34f-e77b-4481-8319-b923f1fc7dc1>, <urn:uuid:feb9ad25-d04a-49c4-919c-48e49952d29d>.
<urn:uuid:33f4a34f-e77b-4481-8319-b923f1fc7dc1> a report:ConstraintReport;
    report:constraint <urn:uuid:28dc8bd5-ace0-4ae2-9e8a-b9a787b0fb02>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:feb9ad25-d04a-49c4-919c-48e49952d29d> a report:ConstraintReport;
    report:constraint <urn:uuid:cf11b614-0228-4363-9748-b235b38ae30f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:98c0cc0f-2fdb-4239-a1ab-2d5eaaba1e01> a report:ConstraintReport;
    report:constraint <urn:uuid:97e7e460-8655-4b64-b3f1-1d89f6e0c4a0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:17128491-75d8-4e6d-bc25-214f81381941>, <urn:uuid:2ef70ea4-2724-4227-b1ad-2b0bb51fc997>.
<urn:uuid:17128491-75d8-4e6d-bc25-214f81381941> a report:ConstraintReport;
    report:constraint <urn:uuid:a295e7a2-11d4-443d-b0fc-27b5475692b3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2ef70ea4-2724-4227-b1ad-2b0bb51fc997> a report:ConstraintReport;
    report:constraint <urn:uuid:c2ed777e-d6d3-45ef-9449-038241f6eaa1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:34a5c741-13ba-4d34-9a1b-aa0c7af11306> a report:ConstraintReport;
    report:constraint <urn:uuid:7e2c2746-5afb-444f-a09f-73af2b79e702>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4a615725-5164-4ce2-bd94-5e1b196a7a56>, <urn:uuid:b4c1952f-772e-4d35-be6c-f5ff26cd43af>.
<urn:uuid:4a615725-5164-4ce2-bd94-5e1b196a7a56> a report:ConstraintReport;
    report:constraint <urn:uuid:d2622e26-c235-4154-802f-1cc43cce0e9c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b4c1952f-772e-4d35-be6c-f5ff26cd43af> a report:ConstraintReport;
    report:constraint <urn:uuid:afdd3398-8867-49c8-adb9-8c58591d38da>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7d5bad9a-9c70-4dcd-9d82-9cf43c14a230> a report:ConstraintReport;
    report:constraint <urn:uuid:0eb27dd6-ebfd-41e1-bee1-ccf4f9567a61>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7824325f-440d-4754-8de6-2faf48a973e0>, <urn:uuid:8c777107-11c6-4148-8575-3eb1757a9839>.
<urn:uuid:7824325f-440d-4754-8de6-2faf48a973e0> a report:ConstraintReport;
    report:constraint <urn:uuid:86aa8499-9037-417f-8715-75222b9ebe30>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8c777107-11c6-4148-8575-3eb1757a9839> a report:ConstraintReport;
    report:constraint <urn:uuid:b2758ead-13a0-41c4-add8-252524e9f8a0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:61466638-4ec3-4ff6-889c-c4d7eff6d17f> a report:ConstraintReport;
    report:constraint <urn:uuid:29df4b6d-1b30-4619-9736-9910241d9c0c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bb7124d7-56da-4f58-8d19-2a2738bccb25>, <urn:uuid:96ebcf87-a17c-4cab-9ac3-64c960e393ba>.
<urn:uuid:bb7124d7-56da-4f58-8d19-2a2738bccb25> a report:ConstraintReport;
    report:constraint <urn:uuid:cf9bbdcc-8d0f-4c57-9f1d-95c74a559c00>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:96ebcf87-a17c-4cab-9ac3-64c960e393ba> a report:ConstraintReport;
    report:constraint <urn:uuid:8dcd9741-0979-46ce-80b1-43c0a1dc1fad>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8db32b29-2af6-4a0c-822e-6f99e4bdb804> a report:ConstraintReport;
    report:constraint <urn:uuid:e0b803b3-e897-4aad-843d-ef986e32dc64>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6d71fec8-606e-4b2a-9d52-d366142a58ff>, <urn:uuid:52368152-18b4-4e81-bbd8-b9d424622e66>.
<urn:uuid:6d71fec8-606e-4b2a-9d52-d366142a58ff> a report:ConstraintReport;
    report:constraint <urn:uuid:cf647d6f-bea3-4d45-823c-fae5b63dd008>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:52368152-18b4-4e81-bbd8-b9d424622e66> a report:ConstraintReport;
    report:constraint <urn:uuid:b6de3f00-5094-4979-b409-aa474e26e055>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5ae00358-37ad-4b56-b97e-1b0020d2621d> a report:ConstraintReport;
    report:constraint <urn:uuid:5f91aee4-9ac7-41ed-abdd-c11df12d361b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7ffc64f8-ec00-4de2-b320-726c8325b704>, <urn:uuid:b7b2c262-a4fa-4501-a39d-7718be691e19>.
<urn:uuid:7ffc64f8-ec00-4de2-b320-726c8325b704> a report:ConstraintReport;
    report:constraint <urn:uuid:036d0c94-4a07-4286-94ac-1116eef0cc52>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b7b2c262-a4fa-4501-a39d-7718be691e19> a report:ConstraintReport;
    report:constraint <urn:uuid:10bfe567-4ead-4ce3-89e2-42df9f22aea9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6c7ef15c-53bc-4c92-bd19-3e25c6703b44> a report:ConstraintReport;
    report:constraint <urn:uuid:6dc5739c-5b2f-4d80-8336-3af8987cf193>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4b25d325-90f0-474b-81ce-2c557ac18849>, <urn:uuid:0a0cfa52-3e5d-4851-b509-31416c5a3e7c>.
<urn:uuid:4b25d325-90f0-474b-81ce-2c557ac18849> a report:ConstraintReport;
    report:constraint <urn:uuid:fdf6c6bd-e646-4c17-b9e7-062d2dce954b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0a0cfa52-3e5d-4851-b509-31416c5a3e7c> a report:ConstraintReport;
    report:constraint <urn:uuid:682412e3-ed3a-4939-a34f-32dd660424a6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3a82023a-3560-4435-8563-78c117125b78> a report:ConstraintReport;
    report:constraint <urn:uuid:2aa878e6-76d0-4bb8-96ea-3be7d735a3ac>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c349e8e6-b742-4c33-9507-b3814049bb73>, <urn:uuid:a3dbac05-afd3-4246-9c4f-bb183db71fb8>.
<urn:uuid:c349e8e6-b742-4c33-9507-b3814049bb73> a report:ConstraintReport;
    report:constraint <urn:uuid:86d4a7d1-f293-4a39-b34e-eb3baf9a0056>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a3dbac05-afd3-4246-9c4f-bb183db71fb8> a report:ConstraintReport;
    report:constraint <urn:uuid:8a89dd13-3c04-408c-939c-b11ec3652ec8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cb76cdd5-771e-4567-a125-bce667bb5503> a report:ConstraintReport;
    report:constraint <urn:uuid:4f2a4f2e-67a9-4b56-9e5d-3a7ec58ad9a5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5baeaa7c-ba4b-43e7-9204-ae22e4a6cabc>, <urn:uuid:b75f0db3-1641-4486-9735-d6aa71d95962>.
<urn:uuid:5baeaa7c-ba4b-43e7-9204-ae22e4a6cabc> a report:ConstraintReport;
    report:constraint <urn:uuid:12ff5e1a-5369-4a48-8a68-d2e1b5d7dc13>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b75f0db3-1641-4486-9735-d6aa71d95962> a report:ConstraintReport;
    report:constraint <urn:uuid:c78b788a-0eb7-4a4a-9e63-3127ec49505c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:31b8068a-ced2-43a9-8669-e20e71a1c95a> a report:ConstraintReport;
    report:constraint <urn:uuid:2206cd56-4786-445c-aa3a-08e840d6e640>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0b5a1f00-0873-4fb9-a781-a0c782155376>, <urn:uuid:6dbde9dd-cffa-4525-9f73-19402f3c5967>.
<urn:uuid:0b5a1f00-0873-4fb9-a781-a0c782155376> a report:ConstraintReport;
    report:constraint <urn:uuid:c59aa3f0-93ef-46d4-8df3-6c6c61277d0d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6dbde9dd-cffa-4525-9f73-19402f3c5967> a report:ConstraintReport;
    report:constraint <urn:uuid:c98ed27d-d93f-4ec8-9310-7b5a71388340>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:164532d5-650b-49cc-a3dd-fa5c03beca76> a report:ConstraintReport;
    report:constraint <urn:uuid:ec78c7d3-66b7-4d54-9aac-2b198c1f02dc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cdf8e948-d275-45b0-9e0b-99531593d6f8>, <urn:uuid:7605dd20-7a4c-4dab-88b0-43c346fa731c>.
<urn:uuid:cdf8e948-d275-45b0-9e0b-99531593d6f8> a report:ConstraintReport;
    report:constraint <urn:uuid:232613ed-19cd-4dd7-9c72-3e21620f4add>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7605dd20-7a4c-4dab-88b0-43c346fa731c> a report:ConstraintReport;
    report:constraint <urn:uuid:a3669cbc-2aba-4bd6-91b4-9449ee57e85a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:62a792cf-3c16-4249-9e1a-6c8070c465f5> a report:ConstraintReport;
    report:constraint <urn:uuid:b8bf92b6-748c-4178-b192-5b2b3c6db4a0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:480627fb-e379-434e-a8cf-9cecc5929a01>, <urn:uuid:ed5ad5bd-1ea2-4a6a-8694-534c65199e2e>.
<urn:uuid:480627fb-e379-434e-a8cf-9cecc5929a01> a report:ConstraintReport;
    report:constraint <urn:uuid:0d212516-df92-4b4f-bed6-7d89ef1845d7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ed5ad5bd-1ea2-4a6a-8694-534c65199e2e> a report:ConstraintReport;
    report:constraint <urn:uuid:2ef117f2-58c5-4a16-ba19-f929db02c97b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e281b434-1315-43d6-b8b2-24441b3ec512> a report:ConstraintReport;
    report:constraint <urn:uuid:246ce49c-f71e-4801-b69a-d964d0bd115d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:29536704-4763-4158-b8dc-d449e27d385a>, <urn:uuid:346479db-671d-4ed7-bd94-549ac196dcb2>.
<urn:uuid:29536704-4763-4158-b8dc-d449e27d385a> a report:ConstraintReport;
    report:constraint <urn:uuid:5c73a362-7f09-4787-9bca-2fc277c2f049>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:346479db-671d-4ed7-bd94-549ac196dcb2> a report:ConstraintReport;
    report:constraint <urn:uuid:ae293447-5e2a-4d93-9ca2-10953a0d9768>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:023a530c-d5b3-4779-a1a0-30828483cbfd> a report:ConstraintReport;
    report:constraint <urn:uuid:29120bf0-065f-4622-b514-2b911a431c20>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:45137bc4-db33-49eb-9212-54cf9ba054ec>, <urn:uuid:b3052645-1f16-4ddc-a9de-4d66795a4bcf>.
<urn:uuid:45137bc4-db33-49eb-9212-54cf9ba054ec> a report:ConstraintReport;
    report:constraint <urn:uuid:f8779597-3a2c-4f26-9a2f-2e5bffac343f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b3052645-1f16-4ddc-a9de-4d66795a4bcf> a report:ConstraintReport;
    report:constraint <urn:uuid:7c223c6a-8190-4c5a-8877-87edeac8606d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cbabd5e9-ac39-44d8-9b06-3dda0e7fa211> a report:ConstraintReport;
    report:constraint <urn:uuid:4a59f4f2-aff3-4517-a411-d2e510bf8c96>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:647b084c-08e2-459e-a42a-5a18aee5feac>, <urn:uuid:808d194e-365a-412d-b876-9c518f8bee73>.
<urn:uuid:647b084c-08e2-459e-a42a-5a18aee5feac> a report:ConstraintReport;
    report:constraint <urn:uuid:f663d7eb-0c52-4feb-9482-a504a47e1c6e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:808d194e-365a-412d-b876-9c518f8bee73> a report:ConstraintReport;
    report:constraint <urn:uuid:62be9fc6-5ca1-403d-8a82-38ff3d0e74eb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:99297d2f-fa2f-4b34-b8e9-16ced3120222> a report:ConstraintReport;
    report:constraint <urn:uuid:b2f555d9-9210-44c1-81fe-edc8991ffd56>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:89be847f-5472-4d6b-88dc-63ad0b24f629>, <urn:uuid:555edb5d-999d-4238-b00e-84cbdfe1d3db>.
<urn:uuid:89be847f-5472-4d6b-88dc-63ad0b24f629> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d9525f-2594-4d84-ae2f-60e8b1c79dd7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:555edb5d-999d-4238-b00e-84cbdfe1d3db> a report:ConstraintReport;
    report:constraint <urn:uuid:b4032ba4-2cdb-41e7-bdd2-bfcb10f35578>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:be530bc2-2726-489a-b45d-79e4527d2f58> a report:ConstraintReport;
    report:constraint <urn:uuid:f0f5ad97-b87d-4279-a867-866578fe19f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:38d8bf86-90d9-4d7a-8c28-98143101bf9f>, <urn:uuid:656be061-6e01-4432-a82a-b6eda4fa3431>.
<urn:uuid:38d8bf86-90d9-4d7a-8c28-98143101bf9f> a report:ConstraintReport;
    report:constraint <urn:uuid:caeaf79a-a8b1-4974-884c-d026510540ef>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:656be061-6e01-4432-a82a-b6eda4fa3431> a report:ConstraintReport;
    report:constraint <urn:uuid:a7700171-4036-4fcf-a5f2-7cb3cc31de25>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7d8790d8-b03d-42de-8c68-b87f273790ed> a report:ConstraintReport;
    report:constraint <urn:uuid:1150ffd0-17c2-4ae5-bfd5-cd36a0363a1b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2483a635-005f-4c33-a3bc-89302f35010b>, <urn:uuid:69436b32-1497-4d2b-bb91-adf3b3d39055>.
<urn:uuid:2483a635-005f-4c33-a3bc-89302f35010b> a report:ConstraintReport;
    report:constraint <urn:uuid:11ec29fd-5465-4a7f-85b7-591370cd9411>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:69436b32-1497-4d2b-bb91-adf3b3d39055> a report:ConstraintReport;
    report:constraint <urn:uuid:acba8216-ebfc-48c5-ac0b-18907f47e2fd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6c1393f7-500c-4c92-b8b0-3ab5229f031d> a report:ConstraintReport;
    report:constraint <urn:uuid:8b4fa82c-c1ef-4115-b314-a1e40eaed545>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2e06474f-135a-4105-8368-4ccb61811c95>, <urn:uuid:def53345-759b-4c7b-b5c8-3f8ef0bb799c>.
<urn:uuid:2e06474f-135a-4105-8368-4ccb61811c95> a report:ConstraintReport;
    report:constraint <urn:uuid:e0a01914-78fa-4af1-936d-9969b3248333>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:def53345-759b-4c7b-b5c8-3f8ef0bb799c> a report:ConstraintReport;
    report:constraint <urn:uuid:12bc0dcb-a27b-4d38-9942-35dd66a91a57>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:68b33315-cd1f-4257-af1e-60c0bc02d64e> a report:ConstraintReport;
    report:constraint <urn:uuid:2c95e2cf-979a-4f36-8070-44ab64ef4a52>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:721235fb-fdd2-496c-a690-55d30c99f639>, <urn:uuid:89a077b6-8176-4770-b8dc-46b78859b2ff>.
<urn:uuid:721235fb-fdd2-496c-a690-55d30c99f639> a report:ConstraintReport;
    report:constraint <urn:uuid:90da3e68-6622-409f-8dd4-d91c37a3dc14>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:89a077b6-8176-4770-b8dc-46b78859b2ff> a report:ConstraintReport;
    report:constraint <urn:uuid:c05488fe-3204-42ba-b223-ec91f4bfacd3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dd7b89d7-d028-4483-b9c7-b1846291d8ff> a report:ConstraintReport;
    report:constraint <urn:uuid:091b7cd1-3c5d-4872-ac1f-ea4013ecfe3a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c9a5dfcb-5f9e-461c-a855-eb3393fca7f9>, <urn:uuid:4d10e216-10f2-4801-8e7b-2f7b9e2fdfa6>.
<urn:uuid:c9a5dfcb-5f9e-461c-a855-eb3393fca7f9> a report:ConstraintReport;
    report:constraint <urn:uuid:7cc22b5b-9903-40b9-a70e-a30db7bc9a49>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4d10e216-10f2-4801-8e7b-2f7b9e2fdfa6> a report:ConstraintReport;
    report:constraint <urn:uuid:3e80b2c2-f0d6-40b8-a27d-f54e77746750>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a6535a33-a515-4ebc-83a0-51fe6da05881> a report:ConstraintReport;
    report:constraint <urn:uuid:eb10643c-9448-493e-a898-5c30b281d81a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b23a95f5-5b5f-4c43-a92e-7609d40b3aec>, <urn:uuid:e284244a-4e5d-45fd-9127-770ee32b8a9f>.
<urn:uuid:b23a95f5-5b5f-4c43-a92e-7609d40b3aec> a report:ConstraintReport;
    report:constraint <urn:uuid:eec64efb-fce2-4fa3-9e33-f886bd33a5dc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e284244a-4e5d-45fd-9127-770ee32b8a9f> a report:ConstraintReport;
    report:constraint <urn:uuid:5dfffd4f-1ae0-4ff1-adf8-aec9529b612d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e2b3d20f-07b0-418d-a9c4-96650fa6e928> a report:ConstraintReport;
    report:constraint <urn:uuid:34f70158-fe31-4ca1-85d0-c4957382a876>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:348a4c4f-3531-4a10-b60c-0c8692aeb54d>, <urn:uuid:66460f38-f249-4a93-9c8e-ee5b5563aefa>.
<urn:uuid:348a4c4f-3531-4a10-b60c-0c8692aeb54d> a report:ConstraintReport;
    report:constraint <urn:uuid:a175ab20-2cca-4cdb-aee8-f8783f2db5cc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:66460f38-f249-4a93-9c8e-ee5b5563aefa> a report:ConstraintReport;
    report:constraint <urn:uuid:047c53f9-aa36-432f-ad82-84a550c20329>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2463c665-ce09-47ef-8daa-0977513a9dc6> a report:ConstraintReport;
    report:constraint <urn:uuid:08a6a691-f695-40f9-8ef0-cd929a71cd80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:54ecb9f9-3028-49b5-ad1a-f9fc2a44c49a>, <urn:uuid:7f2daf8b-1625-4fdc-a4d0-adb854d3ade5>.
<urn:uuid:54ecb9f9-3028-49b5-ad1a-f9fc2a44c49a> a report:ConstraintReport;
    report:constraint <urn:uuid:357cf85a-d947-4537-9c93-3bd3039ff9d3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7f2daf8b-1625-4fdc-a4d0-adb854d3ade5> a report:ConstraintReport;
    report:constraint <urn:uuid:a2e7cadb-f3ea-4457-823f-30b2b3e7c6bb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5d3a2827-a67a-4b43-89a9-44ec861ff3a2> a report:ConstraintReport;
    report:constraint <urn:uuid:605cff08-6f85-47c4-a3fc-e4ccfdf4272b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:89eebb06-562b-48ca-94e6-8deaf93165f1>, <urn:uuid:9b6c1ea5-6614-4fec-9cfb-d21c24cc0d4e>.
<urn:uuid:89eebb06-562b-48ca-94e6-8deaf93165f1> a report:ConstraintReport;
    report:constraint <urn:uuid:c96176c5-f3d2-4fb7-9083-41460a033ad6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9b6c1ea5-6614-4fec-9cfb-d21c24cc0d4e> a report:ConstraintReport;
    report:constraint <urn:uuid:9f46330c-a19f-4d32-a821-d4d36b33e862>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:12c619d7-7a96-4102-a25d-cc3dffbf8162> a report:ConstraintReport;
    report:constraint <urn:uuid:d9ee2558-651c-478e-8b36-b554c988bee6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d610fc5a-d5fb-47d2-b5e8-52441987572a>, <urn:uuid:1588732f-e02f-4286-aab2-4d4f989ac05a>.
<urn:uuid:d610fc5a-d5fb-47d2-b5e8-52441987572a> a report:ConstraintReport;
    report:constraint <urn:uuid:52376ec6-1dcf-41a6-814a-625e38c4abd6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1588732f-e02f-4286-aab2-4d4f989ac05a> a report:ConstraintReport;
    report:constraint <urn:uuid:e5acc7a3-c847-4191-a67f-4deeddeee9e2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8a855561-542c-4a80-a1a0-60c149531167> a report:ConstraintReport;
    report:constraint <urn:uuid:0cbbaa09-776e-4273-8e5d-8d7cfa08b215>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8f0a4113-9fa6-4cc8-bae1-e8ab2b9492d5>, <urn:uuid:0c26eff3-c127-4a2c-a587-6e735cd0477e>.
<urn:uuid:8f0a4113-9fa6-4cc8-bae1-e8ab2b9492d5> a report:ConstraintReport;
    report:constraint <urn:uuid:d6e369b2-946c-448c-86a2-3b371cf694c7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0c26eff3-c127-4a2c-a587-6e735cd0477e> a report:ConstraintReport;
    report:constraint <urn:uuid:34718c82-a7ad-4aaf-90b6-3c10bc75fc72>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:80dcdf78-65b3-4583-88ad-bf04ab092614> a report:ConstraintReport;
    report:constraint <urn:uuid:7fa67880-ab1d-437f-9cf0-5983985cde80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:994cc191-7622-4e0e-981e-9a4188cdea54>, <urn:uuid:cdfc022f-a39e-4128-8399-e853387ef902>.
<urn:uuid:994cc191-7622-4e0e-981e-9a4188cdea54> a report:ConstraintReport;
    report:constraint <urn:uuid:33cfa5e3-b633-481a-92ba-f113cd957a57>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cdfc022f-a39e-4128-8399-e853387ef902> a report:ConstraintReport;
    report:constraint <urn:uuid:5eef2704-2230-4e7d-a463-eba0383ad4d3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6ebd55b1-204c-4fa2-ad74-30bd2018be01> a report:ConstraintReport;
    report:constraint <urn:uuid:d56b1ab6-1061-4698-a7b1-6d1fb928b712>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:be24b690-90da-4cbe-a486-a2721ff49fbd>, <urn:uuid:4c3e0b78-a4d2-49b6-a35e-55e6595eb421>.
<urn:uuid:be24b690-90da-4cbe-a486-a2721ff49fbd> a report:ConstraintReport;
    report:constraint <urn:uuid:ad7a1e60-a6b7-4903-a1f1-863b7bc4399e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4c3e0b78-a4d2-49b6-a35e-55e6595eb421> a report:ConstraintReport;
    report:constraint <urn:uuid:a3667f7c-30a5-4535-8d8f-2e390aa2d612>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:99eb5a1a-54bc-47b5-b46f-d2f6070f11b0> a report:ConstraintReport;
    report:constraint <urn:uuid:351f0fe6-a2c8-4a67-9220-979055330e25>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5a21e153-2477-41ee-8aa2-819ac9848b66>, <urn:uuid:9e800a6b-ecb0-4cbb-b2c9-9d4bac4c3328>.
<urn:uuid:5a21e153-2477-41ee-8aa2-819ac9848b66> a report:ConstraintReport;
    report:constraint <urn:uuid:54f544df-39ae-4b88-8e47-37c28e780efd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9e800a6b-ecb0-4cbb-b2c9-9d4bac4c3328> a report:ConstraintReport;
    report:constraint <urn:uuid:ede4d7ba-367f-4e5b-9b77-7aaeff89e714>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:73c32f62-ddf9-436f-aabc-586d525fe46c> a report:ConstraintReport;
    report:constraint <urn:uuid:2df3010b-c218-4522-aa01-95b27101dfbb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c2d9679c-8b4f-42ee-8d9e-d7241846e570>, <urn:uuid:4ac037f9-3ce5-432b-9ac3-72906c35edb4>.
<urn:uuid:c2d9679c-8b4f-42ee-8d9e-d7241846e570> a report:ConstraintReport;
    report:constraint <urn:uuid:1d594078-60e7-403c-b000-2ea020fbbed0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4ac037f9-3ce5-432b-9ac3-72906c35edb4> a report:ConstraintReport;
    report:constraint <urn:uuid:34ae08cd-7c1e-4860-a4d0-fbfa848b39af>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:25137fd4-6bd7-455d-b8c5-a4129591a158> a report:ConstraintReport;
    report:constraint <urn:uuid:61325691-ebaf-4599-a045-c6fff992505f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ea0ef35c-892f-4d57-9044-1e13f39b63a1>, <urn:uuid:cfa10820-e1a5-40d1-bb17-66cdd53cc0b7>.
<urn:uuid:ea0ef35c-892f-4d57-9044-1e13f39b63a1> a report:ConstraintReport;
    report:constraint <urn:uuid:c9970dce-15f9-48b0-8f56-d21aae32d395>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cfa10820-e1a5-40d1-bb17-66cdd53cc0b7> a report:ConstraintReport;
    report:constraint <urn:uuid:3bcd9556-b8d4-4855-8539-8dacd89ec8a4>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cc6e1d19-c309-4e76-a430-ea58fe65444c> a report:ConstraintReport;
    report:constraint <urn:uuid:d0c698e7-911f-4f4b-bc87-286686632871>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:47269d05-7385-49b0-b58b-2f97dc5f94b2>, <urn:uuid:a8b975b9-142e-49a5-8d63-5bdd27b7c8c6>.
<urn:uuid:47269d05-7385-49b0-b58b-2f97dc5f94b2> a report:ConstraintReport;
    report:constraint <urn:uuid:6a26e7eb-02a9-4ab5-a42a-3bb0798d7840>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a8b975b9-142e-49a5-8d63-5bdd27b7c8c6> a report:ConstraintReport;
    report:constraint <urn:uuid:2be5be5e-f823-4637-b957-8a9ed49392f6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:59bfa90b-330a-4f8d-b5d5-2c439e108007> a report:ConstraintReport;
    report:constraint <urn:uuid:053e3c7c-6888-43c9-a9f0-4cb24ca6d09d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a8f28e38-167c-42f4-b946-cc2e1ab5af3c>, <urn:uuid:10d48fe7-8064-40ec-b06c-2f389a0fdb2b>.
<urn:uuid:a8f28e38-167c-42f4-b946-cc2e1ab5af3c> a report:ConstraintReport;
    report:constraint <urn:uuid:2c8bb9d7-feb8-443a-9a1e-c8c9ced231aa>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:10d48fe7-8064-40ec-b06c-2f389a0fdb2b> a report:ConstraintReport;
    report:constraint <urn:uuid:9ca4744b-a2a1-4cf5-969e-f70c9025e6a3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:18b80e29-3f94-4a5b-ba26-42ea0c14cb17> a report:ConstraintReport;
    report:constraint <urn:uuid:08c7c40a-15a1-4348-a285-c14e1936f7cc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:530eb689-2bc2-47d2-962f-01532f897b10>, <urn:uuid:d64414aa-448c-42f5-84b0-46a586d3d479>.
<urn:uuid:530eb689-2bc2-47d2-962f-01532f897b10> a report:ConstraintReport;
    report:constraint <urn:uuid:ca4e3622-8fdf-4b04-879a-286bd3a5e7e5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d64414aa-448c-42f5-84b0-46a586d3d479> a report:ConstraintReport;
    report:constraint <urn:uuid:158f426f-fe7d-4105-ae02-fab3f6821a23>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:77f44a05-62cf-4c2b-b08a-f7b604636dbc> a report:ConstraintReport;
    report:constraint <urn:uuid:8ea0d34a-c216-4aca-a3c9-0142b96bae5e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fb1280e3-a151-4a5f-86ec-0961f516cc5b>, <urn:uuid:10f3bc1b-baae-4706-8d41-19635cda63a1>.
<urn:uuid:fb1280e3-a151-4a5f-86ec-0961f516cc5b> a report:ConstraintReport;
    report:constraint <urn:uuid:4bef72cd-1ada-40fc-97e1-c079b91e6d19>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:10f3bc1b-baae-4706-8d41-19635cda63a1> a report:ConstraintReport;
    report:constraint <urn:uuid:fcad40a5-d827-4a01-945b-22f4a3a3d52a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1a0a9540-5441-4bfe-a0f8-f93fe5368d6b> a report:ConstraintReport;
    report:constraint <urn:uuid:7a3b0622-c6ce-4428-a617-2ddee777f29e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e6c9b459-e8e1-462c-9af3-686dfa7eac38>, <urn:uuid:4d3aa298-3ea3-42a3-b387-84206766a2e2>.
<urn:uuid:e6c9b459-e8e1-462c-9af3-686dfa7eac38> a report:ConstraintReport;
    report:constraint <urn:uuid:ef047f01-6e88-4e65-bc31-3ba9975f20eb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4d3aa298-3ea3-42a3-b387-84206766a2e2> a report:ConstraintReport;
    report:constraint <urn:uuid:6afcc055-a528-499a-9ea6-659e94940f69>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ba208f4b-99c0-4533-94e8-05f8ffb5919f> a report:ConstraintReport;
    report:constraint <urn:uuid:e26c2df3-ff61-4c45-aea6-39c13f074c5d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:91bb4cfa-ffe5-4a14-bdfa-b3b7475dfb09>, <urn:uuid:6f609ad2-8623-4f8c-964e-7133fbec34da>.
<urn:uuid:91bb4cfa-ffe5-4a14-bdfa-b3b7475dfb09> a report:ConstraintReport;
    report:constraint <urn:uuid:0d49ed46-690e-4030-864a-eb827ee99d3e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6f609ad2-8623-4f8c-964e-7133fbec34da> a report:ConstraintReport;
    report:constraint <urn:uuid:f44e8ebe-7464-434d-b0f9-477e83ef959a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4b2f98d6-218e-4eb5-b096-aab97e827361> a report:ConstraintReport;
    report:constraint <urn:uuid:038e3c19-fd3f-4c7d-baaf-66cbf1395a80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c74338d9-415b-47ec-9a5c-2bda127ae313>, <urn:uuid:0bd193d5-2089-4250-a3ff-57919bbf1d74>.
<urn:uuid:c74338d9-415b-47ec-9a5c-2bda127ae313> a report:ConstraintReport;
    report:constraint <urn:uuid:0f3605d0-954f-4130-897b-b7f1bd20cb6c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0bd193d5-2089-4250-a3ff-57919bbf1d74> a report:ConstraintReport;
    report:constraint <urn:uuid:dfcc026a-e0e2-4f01-b5e9-f5bc64097841>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:55e60231-52cc-443c-a00c-f30bc2dd6fe3> a report:ConstraintReport;
    report:constraint <urn:uuid:6cd96404-8106-43fb-a03c-c9afe481afef>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2aba212c-5563-4a8a-b3cb-78f9376840fd>, <urn:uuid:b2ba4959-240b-4333-bab4-1a0da1310278>.
<urn:uuid:2aba212c-5563-4a8a-b3cb-78f9376840fd> a report:ConstraintReport;
    report:constraint <urn:uuid:c7117e0f-74e6-4d62-a7b0-02c83ffedbe1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b2ba4959-240b-4333-bab4-1a0da1310278> a report:ConstraintReport;
    report:constraint <urn:uuid:d1b4e1e8-3033-4894-b6af-3b2387489e43>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bd886141-004e-4e64-839d-11b8262a0b6c> a report:ConstraintReport;
    report:constraint <urn:uuid:f6493d80-8cc2-4d9f-a692-f5bf273411ee>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:11f18d46-0e3f-4803-8de3-ddfeadec3707>, <urn:uuid:a631a877-3fb3-47fc-abac-68780555160e>.
<urn:uuid:11f18d46-0e3f-4803-8de3-ddfeadec3707> a report:ConstraintReport;
    report:constraint <urn:uuid:3d4efecd-6caa-4df0-b748-f49eeb4b42c0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a631a877-3fb3-47fc-abac-68780555160e> a report:ConstraintReport;
    report:constraint <urn:uuid:0f055da1-61cc-47b8-8c41-fa26a37d690e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ea339371-c0cf-45e4-b32d-6efe6c91fe1b> a report:ConstraintReport;
    report:constraint <urn:uuid:e595520b-dd39-4c39-983f-bc428c8ab6ab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:900f8bb8-97c9-494a-81e6-e29e3bce9164>, <urn:uuid:4f3f8691-4986-4045-9483-c2e2690b6519>.
<urn:uuid:900f8bb8-97c9-494a-81e6-e29e3bce9164> a report:ConstraintReport;
    report:constraint <urn:uuid:0f1dc7cb-c623-43c5-9275-41f34cdf1a46>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4f3f8691-4986-4045-9483-c2e2690b6519> a report:ConstraintReport;
    report:constraint <urn:uuid:f2a3b2c8-9347-40df-86fa-ef9449b5fdfd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c8056205-cecd-4eae-9cc5-3a3c25a09468> a report:ConstraintReport;
    report:constraint <urn:uuid:b1320422-f589-44e6-9a7f-d4e740cf680f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:54198535-f42b-4e0c-80f6-639a2bfd4de8>, <urn:uuid:200308b3-7a67-4ba6-b8e3-cb7bd3811bad>.
<urn:uuid:54198535-f42b-4e0c-80f6-639a2bfd4de8> a report:ConstraintReport;
    report:constraint <urn:uuid:40072600-1bb3-4475-bdc0-bc77e7643546>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:200308b3-7a67-4ba6-b8e3-cb7bd3811bad> a report:ConstraintReport;
    report:constraint <urn:uuid:0e29518c-5000-4805-8919-f02486adaed7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c0d52f22-d9e3-4a09-a6c9-0757f92f21a2> a report:ConstraintReport;
    report:constraint <urn:uuid:78d86c6f-307d-4c5d-be68-5739bd746223>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7e70c100-4b39-4c57-b3d9-8b4dc118f464>, <urn:uuid:772954fc-71aa-4eaf-b384-5d7acdee8de8>.
<urn:uuid:7e70c100-4b39-4c57-b3d9-8b4dc118f464> a report:ConstraintReport;
    report:constraint <urn:uuid:4951e768-690d-41af-bb2b-68df479b52e1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:772954fc-71aa-4eaf-b384-5d7acdee8de8> a report:ConstraintReport;
    report:constraint <urn:uuid:916a531f-2d4c-471a-b8d7-64baa4fda3ca>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:244681cc-6397-422f-b9fc-b1a620a70827> a report:ConstraintReport;
    report:constraint <urn:uuid:3012fdaf-534e-49af-9708-9a7a48c66e26>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9717350f-2f75-44ea-bca6-40e2a7e17406>, <urn:uuid:2dd029a2-535a-483c-a420-763d3af8837f>.
<urn:uuid:9717350f-2f75-44ea-bca6-40e2a7e17406> a report:ConstraintReport;
    report:constraint <urn:uuid:96d4825b-18b5-4e12-b0f2-23f9483b8c17>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2dd029a2-535a-483c-a420-763d3af8837f> a report:ConstraintReport;
    report:constraint <urn:uuid:739ac050-ddff-4333-8af4-4f4a29b45a6e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9847206d-3603-4424-a92f-113f1693950e> a report:ConstraintReport;
    report:constraint <urn:uuid:4654b01f-328d-4a6f-bed7-6aa0b549661b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9f4644fb-c971-469b-ad63-22f404150c18>, <urn:uuid:508128d3-2ace-434e-ab26-75932d8c6bac>.
<urn:uuid:9f4644fb-c971-469b-ad63-22f404150c18> a report:ConstraintReport;
    report:constraint <urn:uuid:a40605b6-6b23-4b4e-a280-2edf3f384831>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:508128d3-2ace-434e-ab26-75932d8c6bac> a report:ConstraintReport;
    report:constraint <urn:uuid:f251b506-69d8-4d92-bc56-32be35549828>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c573f74f-a727-4a7a-9551-9dbc50d33088> a report:ConstraintReport;
    report:constraint <urn:uuid:7e6108e3-fcc2-4d3b-b6e1-ad0fcbe738e1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:83b9f98d-eb6d-4341-bad7-ffb574613492>, <urn:uuid:26eb48a9-cc3e-4c7f-8072-064c72d8e8be>.
<urn:uuid:83b9f98d-eb6d-4341-bad7-ffb574613492> a report:ConstraintReport;
    report:constraint <urn:uuid:2cdb2a9b-42be-4c8f-b100-cad708025246>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:26eb48a9-cc3e-4c7f-8072-064c72d8e8be> a report:ConstraintReport;
    report:constraint <urn:uuid:7242b5bf-7879-44c1-9fcb-346ca6933443>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:181a414a-f9a2-4df3-920c-9168f64b29ad> a report:ConstraintReport;
    report:constraint <urn:uuid:835d8bc5-afbc-4329-9c8e-8b6dafd593b5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:28cf114a-51d2-4feb-bf8a-a42d2b1af5af>, <urn:uuid:b56fa2d6-4a73-457d-bbb7-c2fdc62242b0>.
<urn:uuid:28cf114a-51d2-4feb-bf8a-a42d2b1af5af> a report:ConstraintReport;
    report:constraint <urn:uuid:3c0807b9-65fb-43df-a211-2b2d2d6f4e37>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b56fa2d6-4a73-457d-bbb7-c2fdc62242b0> a report:ConstraintReport;
    report:constraint <urn:uuid:7403d382-c5b2-427c-b812-929ecae8debc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:90adcd4e-567d-4662-87ff-4745e1d159d6> a report:ConstraintReport;
    report:constraint <urn:uuid:46fc7cfa-126f-4d3e-99ba-4d8d0f42e6d7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:072d1542-d24b-42c8-a15a-f47b49d25a0e>, <urn:uuid:7b307899-bf01-4453-8c3c-5628cc57d3f4>.
<urn:uuid:072d1542-d24b-42c8-a15a-f47b49d25a0e> a report:ConstraintReport;
    report:constraint <urn:uuid:7dab70b7-4cae-41f2-8759-fa6f0192bdb1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7b307899-bf01-4453-8c3c-5628cc57d3f4> a report:ConstraintReport;
    report:constraint <urn:uuid:fe00dcab-80f6-4064-b26c-dd220a6cb40c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:33537106-fdfd-488d-9987-79e761949d78> a report:ConstraintReport;
    report:constraint <urn:uuid:fc2a256c-19b3-47e3-9ecc-b0a6ac3e1aae>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6df2a3c1-cd11-46f3-b439-64140424847d>, <urn:uuid:e71bc61f-eb82-453a-959f-36934d44aedd>.
<urn:uuid:6df2a3c1-cd11-46f3-b439-64140424847d> a report:ConstraintReport;
    report:constraint <urn:uuid:70612abb-4018-4dc9-8d9d-99c1c5ace31a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e71bc61f-eb82-453a-959f-36934d44aedd> a report:ConstraintReport;
    report:constraint <urn:uuid:952d2bfd-6b2f-4a3a-b682-f6b3c68a6380>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:31a064bd-ac33-4aca-9d28-2318535a6a62> a report:ConstraintReport;
    report:constraint <urn:uuid:9d1c2e80-4ff1-456c-a176-efd8a2ab94e5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0291b1bb-a8e9-4744-acc3-7d541965a62a>, <urn:uuid:1e070e68-fdf6-42d2-b4e5-41d946dbd8ce>.
<urn:uuid:0291b1bb-a8e9-4744-acc3-7d541965a62a> a report:ConstraintReport;
    report:constraint <urn:uuid:3de86d07-80ca-48fb-901f-095401660a69>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1e070e68-fdf6-42d2-b4e5-41d946dbd8ce> a report:ConstraintReport;
    report:constraint <urn:uuid:2502afa2-fb5a-427c-bdf7-506f0a203d02>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:11d792ae-88ed-457e-ad5e-b47633544d45> a report:ConstraintReport;
    report:constraint <urn:uuid:75f2c124-8774-4109-a764-98a1cc489c0d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6ddda040-7f3e-4bf7-bb49-97bb00539577>, <urn:uuid:cf7601f4-c3a3-45a2-9fc2-69712cc13ccd>.
<urn:uuid:6ddda040-7f3e-4bf7-bb49-97bb00539577> a report:ConstraintReport;
    report:constraint <urn:uuid:b30da122-a3c2-427a-98d1-54c7a6d3e7e3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cf7601f4-c3a3-45a2-9fc2-69712cc13ccd> a report:ConstraintReport;
    report:constraint <urn:uuid:735aa44d-88b1-4bff-9e76-ef0d12ad3bb2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ab766dc0-ad7b-4c5d-83ec-dbff7a966c9e> a report:ConstraintReport;
    report:constraint <urn:uuid:55f0f646-9797-4aa9-858f-51ca41f67aba>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:21a46c30-4a6a-4b46-a84a-5050a6191a37>, <urn:uuid:a39e1663-9266-457b-b06d-87fa1b9ec9b1>.
<urn:uuid:21a46c30-4a6a-4b46-a84a-5050a6191a37> a report:ConstraintReport;
    report:constraint <urn:uuid:2aa3199a-9027-45d6-9a1f-6f80da4aebc7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a39e1663-9266-457b-b06d-87fa1b9ec9b1> a report:ConstraintReport;
    report:constraint <urn:uuid:9d8a95ba-25d3-44ee-8d80-fa4273e8ae08>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:63b64908-813c-44cc-b9b8-f8241b9e61dc> a report:ConstraintReport;
    report:constraint <urn:uuid:50d61890-18a5-492a-8b37-1eddf79c7f6f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1091232b-5207-46c0-b51d-270ee713fc76>, <urn:uuid:5651574f-c9fc-434d-a1e9-7633d797dedc>.
<urn:uuid:1091232b-5207-46c0-b51d-270ee713fc76> a report:ConstraintReport;
    report:constraint <urn:uuid:49175f1f-72e5-4cb3-9188-2d3d60125ca7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5651574f-c9fc-434d-a1e9-7633d797dedc> a report:ConstraintReport;
    report:constraint <urn:uuid:1378ab3c-6c26-450c-b79a-2acb4379a6e3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dbc54a84-182d-4ec9-bcf1-a8a58d89a911> a report:ConstraintReport;
    report:constraint <urn:uuid:9a3c57e4-cfb8-4c6e-a476-d764a2600bb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:680f810e-2d30-4222-a71d-cac17317cb2e>, <urn:uuid:b824796c-4d08-45e4-a941-c80a1680d7b6>.
<urn:uuid:680f810e-2d30-4222-a71d-cac17317cb2e> a report:ConstraintReport;
    report:constraint <urn:uuid:fc6a79f4-3b41-4be8-897f-9b6b950dfeb9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b824796c-4d08-45e4-a941-c80a1680d7b6> a report:ConstraintReport;
    report:constraint <urn:uuid:0a178d9b-e27e-432f-8483-cd9834947d97>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:90668efc-ee47-4fb0-8d46-0cc23e83d52f> a report:ConstraintReport;
    report:constraint <urn:uuid:a684702d-9579-4edd-9766-0b7ce904b8f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3679bca0-1f26-4b82-b4b4-a05e49b78b28>, <urn:uuid:40ac6384-d1cb-4dc7-8927-c91f5a36b3ea>.
<urn:uuid:3679bca0-1f26-4b82-b4b4-a05e49b78b28> a report:ConstraintReport;
    report:constraint <urn:uuid:8f7fbde8-0d12-4532-b51a-abfeb05f09dc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:40ac6384-d1cb-4dc7-8927-c91f5a36b3ea> a report:ConstraintReport;
    report:constraint <urn:uuid:a3f7d124-0c43-4322-90ca-37501a015c05>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0f36dd40-c367-4833-89a8-c81490bf850a> a report:ConstraintReport;
    report:constraint <urn:uuid:cd32f3a4-24ee-4820-a5e4-da3731568953>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a5a25255-0562-4cd5-9ab5-818afb57393d>, <urn:uuid:d4a47f34-8be3-4bfb-b8f4-8a99bbb0454a>.
<urn:uuid:a5a25255-0562-4cd5-9ab5-818afb57393d> a report:ConstraintReport;
    report:constraint <urn:uuid:9a22c068-6c47-475e-910f-3e4a03d71663>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d4a47f34-8be3-4bfb-b8f4-8a99bbb0454a> a report:ConstraintReport;
    report:constraint <urn:uuid:bfe93937-9467-4148-b6a7-04660b15e151>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c78a628e-349b-4b23-9bde-4986e6e90a0b> a report:ConstraintReport;
    report:constraint <urn:uuid:7d67465e-ed4f-4caa-8b85-ddc35d754d0b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c34cf9d4-a85a-4492-9751-995640fff974>, <urn:uuid:21ad0451-7c75-4271-924e-50d21af474d4>.
<urn:uuid:c34cf9d4-a85a-4492-9751-995640fff974> a report:ConstraintReport;
    report:constraint <urn:uuid:846ff921-eac4-4e8d-8d9d-0659c8259c5c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:21ad0451-7c75-4271-924e-50d21af474d4> a report:ConstraintReport;
    report:constraint <urn:uuid:6cf4fcff-d602-47b1-8b80-801f47a9f086>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c429cd4c-21ae-4d43-b32e-90d5ebe1db1a> a report:ConstraintReport;
    report:constraint <urn:uuid:c2e4c4d2-faa2-4cd8-b6d1-1e5e49fb36fb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:078d9c2f-41d9-403e-b0b6-ea5b8889fc1c>, <urn:uuid:1cb8c8eb-f592-415e-b258-7578ca37c4b7>.
<urn:uuid:078d9c2f-41d9-403e-b0b6-ea5b8889fc1c> a report:ConstraintReport;
    report:constraint <urn:uuid:dce773b2-0cee-47aa-9132-bc05eef58975>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1cb8c8eb-f592-415e-b258-7578ca37c4b7> a report:ConstraintReport;
    report:constraint <urn:uuid:0039e402-294e-4ac0-88b0-5a5879749e05>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7f09e4a1-56ee-439c-a17b-0cabc225d52f> a report:ConstraintReport;
    report:constraint <urn:uuid:cc5dd610-24a4-42c5-94aa-010dffc0a302>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7f68f8ac-d403-4798-b45e-baeaec677e85>, <urn:uuid:e7b80acd-a9f9-4633-9afb-27190cfcbc0d>.
<urn:uuid:7f68f8ac-d403-4798-b45e-baeaec677e85> a report:ConstraintReport;
    report:constraint <urn:uuid:a02c629c-9053-434c-80e7-686aff9fcc4c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e7b80acd-a9f9-4633-9afb-27190cfcbc0d> a report:ConstraintReport;
    report:constraint <urn:uuid:bc48b9ac-22cf-4606-a607-37f108cfae63>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7a8810c9-2012-446d-b956-d19284501bcc> a report:ConstraintReport;
    report:constraint <urn:uuid:188b83b5-ab83-4421-8238-3c04815b5f14>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:889e0490-25be-4ff4-ba1f-d7c4c7204384>, <urn:uuid:2678053e-9781-40f0-bf43-1e267fda72fb>.
<urn:uuid:889e0490-25be-4ff4-ba1f-d7c4c7204384> a report:ConstraintReport;
    report:constraint <urn:uuid:edc46467-d0c7-45e5-83d3-71a6fdb03b4f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2678053e-9781-40f0-bf43-1e267fda72fb> a report:ConstraintReport;
    report:constraint <urn:uuid:a8e3a909-df18-488e-826d-56f15ad379bd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c2e9a282-e12e-4923-8c52-aa969051c9d5> a report:ConstraintReport;
    report:constraint <urn:uuid:fcb349da-54b9-4d93-b2f7-b8f9d0ec2d10>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e3910a8a-1d06-423a-814c-3962aec936e0>, <urn:uuid:b95f1ac1-a28f-44f8-947a-987b48747b4b>.
<urn:uuid:e3910a8a-1d06-423a-814c-3962aec936e0> a report:ConstraintReport;
    report:constraint <urn:uuid:d2d8d14d-d84d-4d0a-9833-d8bbe88c1e78>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b95f1ac1-a28f-44f8-947a-987b48747b4b> a report:ConstraintReport;
    report:constraint <urn:uuid:30261223-0ee7-469b-a383-0c1975a5176d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:960203aa-9175-4efc-b252-b9e9999f30ce> a report:ConstraintReport;
    report:constraint <urn:uuid:2c4e3415-4958-46a7-b439-6a89d8d20f25>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a627ad99-3aa8-4d8f-8997-82ea4775ba41>, <urn:uuid:717d08d1-14e1-4b1e-8ade-ad2187d3cd24>.
<urn:uuid:a627ad99-3aa8-4d8f-8997-82ea4775ba41> a report:ConstraintReport;
    report:constraint <urn:uuid:c889c26c-bae6-4b5d-8c14-c419179bbd88>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:717d08d1-14e1-4b1e-8ade-ad2187d3cd24> a report:ConstraintReport;
    report:constraint <urn:uuid:7bfcd441-9935-4842-a675-92b3dcfc04ab>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a063ccbf-09de-49ce-ae70-b9965e7c9558> a report:ConstraintReport;
    report:constraint <urn:uuid:c7b3cea6-c00e-461a-b5f9-c09a9ab28b32>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2dc7d58c-422a-4e82-98aa-5f885d5761e9>, <urn:uuid:73c2db6e-004f-4aee-bf20-ba9c9acd35e3>.
<urn:uuid:2dc7d58c-422a-4e82-98aa-5f885d5761e9> a report:ConstraintReport;
    report:constraint <urn:uuid:bdd0f1a7-694f-4f17-b2bb-b2206b05303f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:73c2db6e-004f-4aee-bf20-ba9c9acd35e3> a report:ConstraintReport;
    report:constraint <urn:uuid:19aff331-aa2d-49e1-a3c1-b57cf720ff43>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:57852c14-f661-40ba-a237-96f720dc11bd> a report:ConstraintReport;
    report:constraint <urn:uuid:91eb91b7-3979-4cd9-b5aa-724ebf454baf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:89586abc-c42c-46e5-a853-0064e0fec9ce>, <urn:uuid:61918b0a-da59-46b9-8a6e-47073c5cd9c0>.
<urn:uuid:89586abc-c42c-46e5-a853-0064e0fec9ce> a report:ConstraintReport;
    report:constraint <urn:uuid:1a649046-7f69-4210-a64c-03a405ad3530>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:61918b0a-da59-46b9-8a6e-47073c5cd9c0> a report:ConstraintReport;
    report:constraint <urn:uuid:a2ef1882-6281-46f7-bff2-ba9f813edce3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5113396e-6935-4dde-a1f7-d91bbae9b909> a report:ConstraintReport;
    report:constraint <urn:uuid:c4dd2395-c34e-4035-a94b-dc153fa88c47>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:883bbd58-0ee9-4680-9860-ee87bda17388>, <urn:uuid:75e12e9e-b0d2-44ec-be1a-15b11068fcf2>.
<urn:uuid:883bbd58-0ee9-4680-9860-ee87bda17388> a report:ConstraintReport;
    report:constraint <urn:uuid:8497d0bc-0ed5-46fd-93cd-a141cee6041e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:75e12e9e-b0d2-44ec-be1a-15b11068fcf2> a report:ConstraintReport;
    report:constraint <urn:uuid:dafadfdb-aae0-4daa-9195-f85fae232d92>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:49908443-c7ed-4816-8dd6-56f344da7c1f> a report:ConstraintReport;
    report:constraint <urn:uuid:024614b2-366f-43cf-918e-84c60bfacbcf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:59254b2a-efcb-4461-86f2-7ff5ab2fb9a9>, <urn:uuid:6c7b0f4a-8676-4916-a242-5014827b34c7>.
<urn:uuid:59254b2a-efcb-4461-86f2-7ff5ab2fb9a9> a report:ConstraintReport;
    report:constraint <urn:uuid:79794ee3-20b4-48bf-9d23-8a7dd7e39483>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6c7b0f4a-8676-4916-a242-5014827b34c7> a report:ConstraintReport;
    report:constraint <urn:uuid:3e6925c3-00a3-4cd1-8ad6-5e5339d885e5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:48682ef6-483d-4c2c-9470-c8eb2759a1da> a report:ConstraintReport;
    report:constraint <urn:uuid:b9f96351-34a1-425b-8b10-62bed2ea5f4e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9e71ef70-3522-4d9b-a2b4-14498112bb6e>, <urn:uuid:e05db969-611b-49a1-9041-8a075a43cf1a>.
<urn:uuid:9e71ef70-3522-4d9b-a2b4-14498112bb6e> a report:ConstraintReport;
    report:constraint <urn:uuid:97dd979b-42b5-4576-8e7e-664137495723>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e05db969-611b-49a1-9041-8a075a43cf1a> a report:ConstraintReport;
    report:constraint <urn:uuid:fe99da5f-f784-415c-b45d-ad6c98ba023f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8579d9b5-e1eb-4ccd-a216-e8e91697866e> a report:ConstraintReport;
    report:constraint <urn:uuid:659710f4-8ddb-47ed-a9c9-38cfbf5010f4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6120889f-26c6-4fa5-b221-9b38600cd462>, <urn:uuid:f787eec6-d01a-49f4-82df-3d0e387a12e3>.
<urn:uuid:6120889f-26c6-4fa5-b221-9b38600cd462> a report:ConstraintReport;
    report:constraint <urn:uuid:8198d802-de7a-4cfc-9dea-0bf135a8421e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f787eec6-d01a-49f4-82df-3d0e387a12e3> a report:ConstraintReport;
    report:constraint <urn:uuid:957f7e2d-9de8-4e28-b36c-7b78823fb2e5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d8058d7b-85a3-4504-835b-f5cd26acfd9b> a report:ConstraintReport;
    report:constraint <urn:uuid:8578de8e-366e-4fd4-abe5-204db416e541>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:85cdf603-80aa-4e6b-9031-20abd0c4a9e6>, <urn:uuid:aeda3245-dc9b-42b2-aac4-b01f87f73913>.
<urn:uuid:85cdf603-80aa-4e6b-9031-20abd0c4a9e6> a report:ConstraintReport;
    report:constraint <urn:uuid:a24558d0-25af-4a12-9a93-1525bcd9a50d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:aeda3245-dc9b-42b2-aac4-b01f87f73913> a report:ConstraintReport;
    report:constraint <urn:uuid:5b7c0c04-1ea2-4f43-9871-427ca50472fa>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:33c1d4eb-fe8c-4f02-9c84-5d03fc67a66f> a report:ConstraintReport;
    report:constraint <urn:uuid:37993806-e7c3-48ab-b31b-db56c93982b8>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f6d25ff4-66a9-4c0a-8174-b659bbd426c1>, <urn:uuid:fbc8073e-5768-429a-9fd6-333848f71fd9>.
<urn:uuid:f6d25ff4-66a9-4c0a-8174-b659bbd426c1> a report:ConstraintReport;
    report:constraint <urn:uuid:867ff6e8-54fe-4431-8d3f-3b4960fb082b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fbc8073e-5768-429a-9fd6-333848f71fd9> a report:ConstraintReport;
    report:constraint <urn:uuid:7eae60dc-da60-4d88-8ea0-aa0556bc7295>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:db9cb19a-3fdc-4d5f-b81a-8472e863491a> a report:ConstraintReport;
    report:constraint <urn:uuid:f9ea2e45-0726-4b79-856f-0c283a02d999>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:69dea21d-0c98-4561-b0dc-b88d70920596>, <urn:uuid:5355403b-b234-42eb-a1a2-8edee347e03b>.
<urn:uuid:69dea21d-0c98-4561-b0dc-b88d70920596> a report:ConstraintReport;
    report:constraint <urn:uuid:0df822f6-f678-4489-bd98-5b4e23d0fe28>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5355403b-b234-42eb-a1a2-8edee347e03b> a report:ConstraintReport;
    report:constraint <urn:uuid:3ebe8bdc-387f-41ac-aa10-319976aa9297>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9545c3bd-d9d1-460d-98cd-308e29f19144> a report:ConstraintReport;
    report:constraint <urn:uuid:22e92d31-09da-4648-bc8f-f7445536cc4c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4f165e3b-9067-42ee-893c-6edb5d2af6f1>, <urn:uuid:02861bc4-2e7b-4ded-aea7-bf09daac43a9>.
<urn:uuid:4f165e3b-9067-42ee-893c-6edb5d2af6f1> a report:ConstraintReport;
    report:constraint <urn:uuid:654dcd03-9ad5-4991-b258-f0b5103352aa>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:02861bc4-2e7b-4ded-aea7-bf09daac43a9> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d9d20f-8e00-4778-a850-9fad9ff0e916>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9b4917c7-719f-4913-a941-0ea7ff1807c2> a report:ConstraintReport;
    report:constraint <urn:uuid:ce990d0d-2cf8-4481-94e1-db9b2d863b11>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bf067e7d-9510-4a85-81e6-8f3fc96ea646>, <urn:uuid:1bb87f44-65c6-4f95-bcf8-064b5921d990>.
<urn:uuid:bf067e7d-9510-4a85-81e6-8f3fc96ea646> a report:ConstraintReport;
    report:constraint <urn:uuid:a5007b67-532b-4b42-8be8-2004cd4e1217>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1bb87f44-65c6-4f95-bcf8-064b5921d990> a report:ConstraintReport;
    report:constraint <urn:uuid:34648d20-a5b8-4ee7-9586-40efafb43f50>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:71a1a5dd-f76f-450d-8dc6-52b717e946bf> a report:ConstraintReport;
    report:constraint <urn:uuid:bb565bc1-5b00-4df3-8ca6-9ce8e9884fb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1cee4fdc-40af-47ba-bc14-a79cf0046638>, <urn:uuid:c322416f-cd8d-4825-9d8d-e551c5d28f26>.
<urn:uuid:1cee4fdc-40af-47ba-bc14-a79cf0046638> a report:ConstraintReport;
    report:constraint <urn:uuid:287a4904-fff5-4607-97fb-05c84cb6dd53>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c322416f-cd8d-4825-9d8d-e551c5d28f26> a report:ConstraintReport;
    report:constraint <urn:uuid:e9842aa9-97da-4546-9c0f-211219f59b52>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3c718748-e1c4-47f0-a9c8-a532d194fcc5> a report:ConstraintReport;
    report:constraint <urn:uuid:c8b4a8bf-e9a5-43fe-863c-99a45736a741>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:13a1a3f2-3c2d-46aa-9006-99b9cd381bd1>, <urn:uuid:39d03c44-1ecf-4fb0-a699-2c96ff6722df>.
<urn:uuid:13a1a3f2-3c2d-46aa-9006-99b9cd381bd1> a report:ConstraintReport;
    report:constraint <urn:uuid:66442849-fbf7-4146-a750-e6b00eab015b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:39d03c44-1ecf-4fb0-a699-2c96ff6722df> a report:ConstraintReport;
    report:constraint <urn:uuid:84657d13-9735-483c-b726-cb4e5e7b46e4>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d8b4f347-d9f9-4e75-aba2-e57a9d7e1a52> a report:ConstraintReport;
    report:constraint <urn:uuid:0ffa4d37-e577-45f8-b2f8-a52a1310e39f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:478da7cd-3e91-4790-95ad-13d02494f179>, <urn:uuid:37f135e7-253c-4725-89b4-9c11260e3682>.
<urn:uuid:478da7cd-3e91-4790-95ad-13d02494f179> a report:ConstraintReport;
    report:constraint <urn:uuid:c9b80536-64b2-463a-811c-283225833fa9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:37f135e7-253c-4725-89b4-9c11260e3682> a report:ConstraintReport;
    report:constraint <urn:uuid:2d6e4afc-3705-41f6-81cf-d24666119347>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:081cda1e-1bdd-4b4e-9540-a8b35c291cdb> a report:ConstraintReport;
    report:constraint <urn:uuid:70055daa-2732-4649-b94d-dd6099404c1b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4b7c70a2-b877-494b-a315-2f90cc1a0ad9>, <urn:uuid:3d0c395f-da13-4d25-8c75-cd48efdb579c>.
<urn:uuid:4b7c70a2-b877-494b-a315-2f90cc1a0ad9> a report:ConstraintReport;
    report:constraint <urn:uuid:83fa9fb6-d029-4088-be7e-4d1cd4cd396e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3d0c395f-da13-4d25-8c75-cd48efdb579c> a report:ConstraintReport;
    report:constraint <urn:uuid:f41a681e-cbf6-47d4-a025-99be9a2443d6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:78681bff-e014-4a1c-9940-e3e9ef59efdc> a report:ConstraintReport;
    report:constraint <urn:uuid:de591672-9b17-4917-862f-03e7bcbb43a4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:23a6dac6-ce18-4d06-a08a-50c72f9aea40>, <urn:uuid:05787bec-b3b3-43ac-b608-380a223c6022>.
<urn:uuid:23a6dac6-ce18-4d06-a08a-50c72f9aea40> a report:ConstraintReport;
    report:constraint <urn:uuid:6b572701-1bf4-474e-b164-0dbd291fc2b4>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:05787bec-b3b3-43ac-b608-380a223c6022> a report:ConstraintReport;
    report:constraint <urn:uuid:ebb3ba93-d189-44e3-ba89-02c69ba14f40>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a450773d-772a-42ff-a6f0-15aa0c27178b> a report:ConstraintReport;
    report:constraint <urn:uuid:74b7368c-77f1-48ef-9849-2d2cbf5fa012>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1030fcaa-86b1-42ef-969a-a6069435a7b7>, <urn:uuid:d1083469-56a5-41c1-8093-0ccd5d3b466b>.
<urn:uuid:1030fcaa-86b1-42ef-969a-a6069435a7b7> a report:ConstraintReport;
    report:constraint <urn:uuid:a1cb611c-b9ed-4154-b5e6-8bc789809230>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d1083469-56a5-41c1-8093-0ccd5d3b466b> a report:ConstraintReport;
    report:constraint <urn:uuid:d59f2c20-4538-45ef-a943-c55019d0ded1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:caebb5c4-b7c4-4099-bdcd-c21e90f5093e> a report:ConstraintReport;
    report:constraint <urn:uuid:cf644502-f44c-4306-9495-fca5c6310563>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:573616c1-aa5a-4743-9fb6-2188008d727c>, <urn:uuid:9668d78c-343c-490a-93cc-11a73e36c9c9>.
<urn:uuid:573616c1-aa5a-4743-9fb6-2188008d727c> a report:ConstraintReport;
    report:constraint <urn:uuid:211d29e0-436b-4c8a-a7fc-09960ff2bf6f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9668d78c-343c-490a-93cc-11a73e36c9c9> a report:ConstraintReport;
    report:constraint <urn:uuid:79305e6b-baeb-44e8-b485-829bc6090091>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:71870cb4-9e35-4979-829e-18b0da127bb7> a report:ConstraintReport;
    report:constraint <urn:uuid:1f2dcfd1-95a0-4d72-9be7-731bca82dd65>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:67244344-9255-49b8-a5ae-aad026f17d41>, <urn:uuid:4c42024c-702d-47fa-97c9-ddfa6bd08c0d>.
<urn:uuid:67244344-9255-49b8-a5ae-aad026f17d41> a report:ConstraintReport;
    report:constraint <urn:uuid:c9f03a8a-4e8f-42c4-8bae-3f1235041f0b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4c42024c-702d-47fa-97c9-ddfa6bd08c0d> a report:ConstraintReport;
    report:constraint <urn:uuid:7074d13f-5640-4de5-9a87-e6578747da10>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7af24ebf-7cf2-436c-ae73-d2c60b3e45ba> a report:ConstraintReport;
    report:constraint <urn:uuid:c7593329-2fd1-4321-944a-c22938751a32>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2604aacc-4be3-4e1c-93f9-bc94135fe936>, <urn:uuid:a756d63c-d63a-479b-bcfe-864b39571ce1>.
<urn:uuid:2604aacc-4be3-4e1c-93f9-bc94135fe936> a report:ConstraintReport;
    report:constraint <urn:uuid:3356fcd2-aa25-453d-8614-aeade91b1808>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a756d63c-d63a-479b-bcfe-864b39571ce1> a report:ConstraintReport;
    report:constraint <urn:uuid:43831461-fe4f-4abf-a8e3-e74573f9949f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cdd8b2a3-17d3-47d4-b500-4798386995d5> a report:ConstraintReport;
    report:constraint <urn:uuid:e7dfca32-6777-4766-99be-5bd5a84f96f1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f5125f5f-33b0-40f9-87ae-4296f6852b58>, <urn:uuid:7a2af21d-97f3-4118-8776-d4be7fff94c5>.
<urn:uuid:f5125f5f-33b0-40f9-87ae-4296f6852b58> a report:ConstraintReport;
    report:constraint <urn:uuid:ac584ec9-5fcd-492a-9678-b994b3b98bfe>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7a2af21d-97f3-4118-8776-d4be7fff94c5> a report:ConstraintReport;
    report:constraint <urn:uuid:8e18aea4-4892-4e4c-a460-9db6fe062888>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dde6385d-609f-4717-a350-75bd07b16391> a report:ConstraintReport;
    report:constraint <urn:uuid:d0c5b490-d975-479f-9eb8-65c24df82b7d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1ece76f2-690d-41eb-901d-33b3b4c15f4f>, <urn:uuid:e05dc9e9-d814-43a3-8607-d0f2b827af99>.
<urn:uuid:1ece76f2-690d-41eb-901d-33b3b4c15f4f> a report:ConstraintReport;
    report:constraint <urn:uuid:34c89188-bda0-4fe6-a77e-28190079cb2f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e05dc9e9-d814-43a3-8607-d0f2b827af99> a report:ConstraintReport;
    report:constraint <urn:uuid:110c798d-8331-4424-a348-09e84408835d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:757a5111-1738-4208-af08-64aa8ecbe6b8> a report:ConstraintReport;
    report:constraint <urn:uuid:793cd305-1103-40ea-9e31-a10ab143d8c1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8917175f-b251-4638-bf1a-cc40f371d18e>, <urn:uuid:29a8a09c-6368-47d5-8ab0-b40e47f5a9f0>.
<urn:uuid:8917175f-b251-4638-bf1a-cc40f371d18e> a report:ConstraintReport;
    report:constraint <urn:uuid:4121c33b-3a09-4cdc-81cb-b54487f3cc50>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:29a8a09c-6368-47d5-8ab0-b40e47f5a9f0> a report:ConstraintReport;
    report:constraint <urn:uuid:5bd2c802-97d3-4cb7-8e4e-85c713b64330>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:788f8270-e370-44bb-ac89-6b864e726be6> a report:ConstraintReport;
    report:constraint <urn:uuid:5cdf20be-8fad-4c68-9240-ad7c30283180>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:81534c0d-e094-469b-a191-f0ebea272ea4>, <urn:uuid:164c9961-ba3b-435d-926c-f352a9149ea3>.
<urn:uuid:81534c0d-e094-469b-a191-f0ebea272ea4> a report:ConstraintReport;
    report:constraint <urn:uuid:afb27e52-84d0-445a-a6f6-714f67df7a6f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:164c9961-ba3b-435d-926c-f352a9149ea3> a report:ConstraintReport;
    report:constraint <urn:uuid:1012dbfe-60a2-4866-9778-f368a85a5726>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:17aefcac-6d8c-4e2f-bc29-4b3615940c01> a report:ConstraintReport;
    report:constraint <urn:uuid:74dc97f4-1225-4650-bd8a-3f7068433378>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a6dbb5a8-7a59-4a4a-a9f0-e59b9619e0a5>, <urn:uuid:2d65d3bd-3881-4fcf-bba2-7fff44df67dd>.
<urn:uuid:a6dbb5a8-7a59-4a4a-a9f0-e59b9619e0a5> a report:ConstraintReport;
    report:constraint <urn:uuid:e3ed954b-9703-4492-a6f8-72fd2c25c48c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2d65d3bd-3881-4fcf-bba2-7fff44df67dd> a report:ConstraintReport;
    report:constraint <urn:uuid:7105b292-edb9-43b8-90bd-a4e8eb8ac95a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4a01a4e2-5787-46ed-a6ae-76205e663d59> a report:ConstraintReport;
    report:constraint <urn:uuid:0ea2f621-6e96-4f3b-94b9-e08e6d535154>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:08864f67-1483-4f9e-bc24-e0d2e7b32de2>, <urn:uuid:9e291277-a5e7-43f0-b1b1-cee2932fbdb5>.
<urn:uuid:08864f67-1483-4f9e-bc24-e0d2e7b32de2> a report:ConstraintReport;
    report:constraint <urn:uuid:ec23ba17-d8e5-41c6-a6af-0593a18f0f24>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9e291277-a5e7-43f0-b1b1-cee2932fbdb5> a report:ConstraintReport;
    report:constraint <urn:uuid:5f724fe1-bc81-4b7c-b1df-1e9b04e5a6f5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8289ebad-1af4-4336-a443-716a2b7fcd01> a report:ConstraintReport;
    report:constraint <urn:uuid:3d63f1c2-83c0-4baa-affe-cb056970291b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:afac6eef-c2ec-46f0-907a-cd61261f4305>, <urn:uuid:dbed9cdf-6052-4ed4-a21c-b8f9fdf4cccd>.
<urn:uuid:afac6eef-c2ec-46f0-907a-cd61261f4305> a report:ConstraintReport;
    report:constraint <urn:uuid:27f1e504-7d9e-44a6-b11a-ebf5b5fe1e2d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dbed9cdf-6052-4ed4-a21c-b8f9fdf4cccd> a report:ConstraintReport;
    report:constraint <urn:uuid:46dac938-22a8-4948-8e5f-32f9b3bb6794>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:19653578-89b5-4dd9-bfae-e54fc6dbaf8d> a report:ConstraintReport;
    report:constraint <urn:uuid:d611d6ce-52a0-4ea0-89b9-96bef60b5cd8>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cf6ba2d9-be65-4137-8155-dc9d2ac6784c>, <urn:uuid:3fed7036-8adc-4777-8f54-20d38f7498dd>.
<urn:uuid:cf6ba2d9-be65-4137-8155-dc9d2ac6784c> a report:ConstraintReport;
    report:constraint <urn:uuid:f2827c25-a171-4ec6-ab2e-3388e6b76b69>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3fed7036-8adc-4777-8f54-20d38f7498dd> a report:ConstraintReport;
    report:constraint <urn:uuid:e3188a51-750a-4063-abcf-e2ccc80179f5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8634a624-7237-4cc8-95bc-492a4bd52353> a report:ConstraintReport;
    report:constraint <urn:uuid:a7eb3b30-484d-4089-84b5-2d32e9b304de>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2f155486-b21d-4011-bcf3-7a15857a315c>, <urn:uuid:40bb669b-a30c-44c7-963a-e9475ca7cad7>.
<urn:uuid:2f155486-b21d-4011-bcf3-7a15857a315c> a report:ConstraintReport;
    report:constraint <urn:uuid:0a13dcd6-4018-4787-adfd-c8259823c058>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:40bb669b-a30c-44c7-963a-e9475ca7cad7> a report:ConstraintReport;
    report:constraint <urn:uuid:905e628f-fa47-4b72-9f76-9cbe171a4da9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6fedddba-50b5-4588-a1aa-d82450a65eb9> a report:ConstraintReport;
    report:constraint <urn:uuid:eb39968c-ad7f-4cc1-8587-5b586fb9f1da>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4bd19b27-9664-4050-b686-d8eeffd54cf7>, <urn:uuid:bbbb2e30-d34e-44a3-8842-23df4f9498bd>.
<urn:uuid:4bd19b27-9664-4050-b686-d8eeffd54cf7> a report:ConstraintReport;
    report:constraint <urn:uuid:c3a7820c-7131-4b88-aef3-b81598dd598a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bbbb2e30-d34e-44a3-8842-23df4f9498bd> a report:ConstraintReport;
    report:constraint <urn:uuid:b200d898-2d15-45b1-9577-aa029ef7bc02>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:36f1688f-9801-4387-9d30-44cacd90d15d> a report:ConstraintReport;
    report:constraint <urn:uuid:93741838-d8f3-488a-8eaa-2593e98d4b85>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4d316366-1744-48db-a3fb-dc1ceb150548>, <urn:uuid:02914a2f-97c6-433f-84db-b75b45313802>.
<urn:uuid:4d316366-1744-48db-a3fb-dc1ceb150548> a report:ConstraintReport;
    report:constraint <urn:uuid:3877fc7d-7dcc-444e-bce5-5096271850b2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:02914a2f-97c6-433f-84db-b75b45313802> a report:ConstraintReport;
    report:constraint <urn:uuid:f37334cb-788d-4365-9265-db7267819a01>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fdfaac59-8061-4801-b093-883b2c90bd74> a report:ConstraintReport;
    report:constraint <urn:uuid:9357eff0-74ad-4ef2-b7cd-b711773f361b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:10dee8fe-4a48-44a4-b1b6-90e6d95a9151>, <urn:uuid:c9398a99-e516-42f3-b74d-2ca043024ad5>.
<urn:uuid:10dee8fe-4a48-44a4-b1b6-90e6d95a9151> a report:ConstraintReport;
    report:constraint <urn:uuid:1bcb5f68-157a-4393-bdb1-db0a0cbece74>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c9398a99-e516-42f3-b74d-2ca043024ad5> a report:ConstraintReport;
    report:constraint <urn:uuid:ac209935-9ca7-4257-bad9-e0e2e2be31b4>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e01a8d2a-2d05-4f93-86c6-f26ec2c8d398> a report:ConstraintReport;
    report:constraint <urn:uuid:e01c1d4f-b798-4898-bd37-ae8984e0895e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:98e420e7-7ce1-4c9e-b6d7-3520d6fb3b97>, <urn:uuid:b91762f2-b830-451e-b707-36f5161f4a01>.
<urn:uuid:98e420e7-7ce1-4c9e-b6d7-3520d6fb3b97> a report:ConstraintReport;
    report:constraint <urn:uuid:23112f76-3f5f-4d2e-9cc7-f12772926991>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b91762f2-b830-451e-b707-36f5161f4a01> a report:ConstraintReport;
    report:constraint <urn:uuid:618046b6-fc4b-472a-9a4a-af22112eeb60>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:43630264-2fd3-497e-9969-3cc87f588eda> a report:ConstraintReport;
    report:constraint <urn:uuid:6c3f0a06-99cf-42a8-9ae1-2e22a1fec935>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ec59580d-382f-469f-882f-39934f9979fa>, <urn:uuid:4e99f01f-ae34-4da1-bd49-133ab8425063>.
<urn:uuid:ec59580d-382f-469f-882f-39934f9979fa> a report:ConstraintReport;
    report:constraint <urn:uuid:a3b8be99-4511-4e13-9e90-8907a7f3853a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4e99f01f-ae34-4da1-bd49-133ab8425063> a report:ConstraintReport;
    report:constraint <urn:uuid:245ceef0-260f-4d4a-878a-b947aff1f976>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3ddbb2f9-ec78-47c4-94a8-8a7d383f01b8> a report:ConstraintReport;
    report:constraint <urn:uuid:b4ba21e3-c660-4d48-b2ad-8a84b2e49eb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f3dfdeb3-6086-41c9-b278-eae244c13c72>, <urn:uuid:2a90044b-7b9d-44aa-89a8-8cc5ea865676>.
<urn:uuid:f3dfdeb3-6086-41c9-b278-eae244c13c72> a report:ConstraintReport;
    report:constraint <urn:uuid:ca57a8d4-d07a-4132-b10a-9a6bd8e0d458>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2a90044b-7b9d-44aa-89a8-8cc5ea865676> a report:ConstraintReport;
    report:constraint <urn:uuid:ffa7fc26-5ca1-4847-9714-d2c9648a9aad>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2ebe0c0a-ff70-4931-b599-6432149b5835> a report:ConstraintReport;
    report:constraint <urn:uuid:a39e7e6e-fa9a-4e39-80cb-c8ffed1352e9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f1c99756-aadd-4c8e-8dc0-9e7ca2b9eccc>, <urn:uuid:cbfbebee-2063-4a96-aa03-f38c005027ad>.
<urn:uuid:f1c99756-aadd-4c8e-8dc0-9e7ca2b9eccc> a report:ConstraintReport;
    report:constraint <urn:uuid:f3f83377-1efa-4ada-abba-0762360f11d7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cbfbebee-2063-4a96-aa03-f38c005027ad> a report:ConstraintReport;
    report:constraint <urn:uuid:a026744a-4ffd-4efa-ae02-4ea290920e9e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9352bd54-a238-4092-bb52-e156eec4fd0c> a report:ConstraintReport;
    report:constraint <urn:uuid:5dbda234-1c7b-46fd-bdcd-9f56591a98ab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:78aa8276-c91b-4d41-849e-6b146f5c6f47>, <urn:uuid:f150b129-7687-4b76-8e59-ed6a709accaf>.
<urn:uuid:78aa8276-c91b-4d41-849e-6b146f5c6f47> a report:ConstraintReport;
    report:constraint <urn:uuid:f8db2a21-e27e-4cda-aa44-6b9a0f0dda67>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f150b129-7687-4b76-8e59-ed6a709accaf> a report:ConstraintReport;
    report:constraint <urn:uuid:abf18596-8372-4c44-96f5-e3652e85e3e6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1c0cb9a0-8d3f-4c4b-ad87-f29f0be05440> a report:ConstraintReport;
    report:constraint <urn:uuid:1f33abb2-fdb2-4529-8eec-3f697c2f61db>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1bc55d02-4735-4ff3-a4a1-fab61948c42d>, <urn:uuid:05255e21-e98a-42bd-b00a-b7895e72e5cf>.
<urn:uuid:1bc55d02-4735-4ff3-a4a1-fab61948c42d> a report:ConstraintReport;
    report:constraint <urn:uuid:a68891ad-9127-4c7d-b2b6-9bda152a4d79>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:05255e21-e98a-42bd-b00a-b7895e72e5cf> a report:ConstraintReport;
    report:constraint <urn:uuid:a74e77a9-0621-44df-bbb1-216ea0608b5f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:be2bac3d-189a-4138-a154-8bbb966c0f1a> a report:ConstraintReport;
    report:constraint <urn:uuid:f3228127-06d6-4a78-bd6d-a6aefd50045d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2ec5e3c9-8a02-4c43-b4ea-1acb8cdaa23a>, <urn:uuid:d67f44fa-55b2-4ba7-9265-52cf63b012f1>.
<urn:uuid:2ec5e3c9-8a02-4c43-b4ea-1acb8cdaa23a> a report:ConstraintReport;
    report:constraint <urn:uuid:9a131d45-a57c-433d-ae95-cb3b7d676458>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d67f44fa-55b2-4ba7-9265-52cf63b012f1> a report:ConstraintReport;
    report:constraint <urn:uuid:da2b4864-d261-4d32-974a-a18b7b0ad457>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:93cddc96-567e-43a9-8c22-c9f463ea177b> a report:ConstraintReport;
    report:constraint <urn:uuid:0c421a36-31a8-4cc6-9387-655cbece11d9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bf2b38b7-d8e0-41d2-a5f9-99e0b014c96f>, <urn:uuid:1bdc64aa-e65a-4f0f-8b35-0b312ac81ee1>.
<urn:uuid:bf2b38b7-d8e0-41d2-a5f9-99e0b014c96f> a report:ConstraintReport;
    report:constraint <urn:uuid:51db01c1-81f0-4b60-8391-30af29b7f815>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1bdc64aa-e65a-4f0f-8b35-0b312ac81ee1> a report:ConstraintReport;
    report:constraint <urn:uuid:cbf798d8-4c19-412a-8507-8b40c9f8483f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fe92751a-250b-4ca2-adec-0673449aca43> a report:ConstraintReport;
    report:constraint <urn:uuid:8df48bc7-37a6-463e-8600-944f84ccb6be>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:43208236-ae06-430a-acb7-a615db7ef675>, <urn:uuid:be694ec3-f65c-4e9a-b378-a3d2f156da6a>.
<urn:uuid:43208236-ae06-430a-acb7-a615db7ef675> a report:ConstraintReport;
    report:constraint <urn:uuid:b65c9404-0fdb-42a8-b3ef-081f253341a6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:be694ec3-f65c-4e9a-b378-a3d2f156da6a> a report:ConstraintReport;
    report:constraint <urn:uuid:74dbf591-ec41-42fd-9b4e-0b0b12c6aa1a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f5b13608-d873-40b2-ac27-39747ce8b487> a report:ConstraintReport;
    report:constraint <urn:uuid:f2284c0e-d8cc-470b-8d66-cc186b19533f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5f137dfb-b88e-4fde-b533-a7e160dc8c83>, <urn:uuid:56508f50-bb0e-4c79-bc9e-d5f61add4de0>.
<urn:uuid:5f137dfb-b88e-4fde-b533-a7e160dc8c83> a report:ConstraintReport;
    report:constraint <urn:uuid:d4d15c9c-c99a-4bf8-a518-275c9f98f3d0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:56508f50-bb0e-4c79-bc9e-d5f61add4de0> a report:ConstraintReport;
    report:constraint <urn:uuid:37036221-dbfa-436b-b6e8-22e9a4912042>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a0bfaf60-c742-445f-b62a-3e1ea8cd9800> a report:ConstraintReport;
    report:constraint <urn:uuid:b50718c6-2b45-4e05-9f0e-35352168177e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6f7c1dde-3c34-4fc2-97e5-74a71887fa37>, <urn:uuid:42a83d34-e864-43e4-8cc7-07e4f36f0c03>.
<urn:uuid:6f7c1dde-3c34-4fc2-97e5-74a71887fa37> a report:ConstraintReport;
    report:constraint <urn:uuid:37520bb1-e228-4b2d-af87-70a124f9f509>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:42a83d34-e864-43e4-8cc7-07e4f36f0c03> a report:ConstraintReport;
    report:constraint <urn:uuid:17af2da2-0d6e-4305-9f20-af582f28e69f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5e33c15f-9d8f-4e13-a139-6cab9750631a> a report:ConstraintReport;
    report:constraint <urn:uuid:524fb88e-3c3e-4296-8b14-9254caa38d43>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:11dcfe74-3121-47c4-ab0f-fbcbf6e962e5>, <urn:uuid:53c7dade-bca8-4d9b-be22-dc30d4483802>.
<urn:uuid:11dcfe74-3121-47c4-ab0f-fbcbf6e962e5> a report:ConstraintReport;
    report:constraint <urn:uuid:5727cb4d-637e-424a-886a-a92e8a68792e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:53c7dade-bca8-4d9b-be22-dc30d4483802> a report:ConstraintReport;
    report:constraint <urn:uuid:946b77ef-d4ba-43c3-a536-9fd168f7cb15>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6c43e8b5-1ddd-49f3-897a-625b53889fbc> a report:ConstraintReport;
    report:constraint <urn:uuid:e24d42a3-23dc-4f6d-930c-b2f95fec0ad9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1cf32fc3-5c6a-439a-909f-71a8100641eb>, <urn:uuid:e2aef2f3-3a77-4e92-a87c-f575c3f22526>.
<urn:uuid:1cf32fc3-5c6a-439a-909f-71a8100641eb> a report:ConstraintReport;
    report:constraint <urn:uuid:e05a11c3-2df6-4657-9696-4edb57656ca3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e2aef2f3-3a77-4e92-a87c-f575c3f22526> a report:ConstraintReport;
    report:constraint <urn:uuid:bdbb3f61-36a7-4f99-9b56-5c4104117421>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a54dd1ae-3934-415e-a05f-d23827a6cbf6> a report:ConstraintReport;
    report:constraint <urn:uuid:efd32427-0878-4da6-840b-2cd88b36c229>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9ac8538d-cf0c-4c37-b548-df7522b8a2c4>, <urn:uuid:b5ab6897-8bb7-4c32-a8eb-454c72395d87>.
<urn:uuid:9ac8538d-cf0c-4c37-b548-df7522b8a2c4> a report:ConstraintReport;
    report:constraint <urn:uuid:5ff79eae-7d0a-4ab0-b0c1-74c523d460a8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b5ab6897-8bb7-4c32-a8eb-454c72395d87> a report:ConstraintReport;
    report:constraint <urn:uuid:cd637661-71d1-4925-b4fd-bb81f35b1834>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d72311f2-9d3b-4a86-8818-5087348223c2> a report:ConstraintReport;
    report:constraint <urn:uuid:8238c0e7-4e25-4f42-b293-66221cf2cadd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b8b6cd57-c241-4722-9ce2-512516ea25a3>, <urn:uuid:92d13a76-2804-4af7-80b5-d90895c0c5d5>.
<urn:uuid:b8b6cd57-c241-4722-9ce2-512516ea25a3> a report:ConstraintReport;
    report:constraint <urn:uuid:f900a6e2-1227-42cc-a735-6268ed2976a2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:92d13a76-2804-4af7-80b5-d90895c0c5d5> a report:ConstraintReport;
    report:constraint <urn:uuid:b76c4668-5409-4b7b-b609-c251f04f9fc0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:940db9c8-917f-460a-a087-06e79d409cbb> a report:ConstraintReport;
    report:constraint <urn:uuid:69cc4707-3662-4ee7-a597-37ce601435e2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3a67b0ae-4431-4c21-aaa9-d7dd9b63b386>, <urn:uuid:d3718607-6910-43b3-b81d-3cfc28877880>.
<urn:uuid:3a67b0ae-4431-4c21-aaa9-d7dd9b63b386> a report:ConstraintReport;
    report:constraint <urn:uuid:2a5640a1-46ba-4595-8b77-1a91007a2420>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d3718607-6910-43b3-b81d-3cfc28877880> a report:ConstraintReport;
    report:constraint <urn:uuid:aa57f57d-11d0-4248-ad8c-36b554498708>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:21432f2f-3d33-4a27-97d5-b9d9ffcab2b5> a report:ConstraintReport;
    report:constraint <urn:uuid:44a11646-feed-4e00-ad9f-ff087a9753bf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c18d0220-d2c9-4a1c-a425-173598a882ec>, <urn:uuid:7a4c4c24-fa92-4520-bfb8-9f10929b4a17>.
<urn:uuid:c18d0220-d2c9-4a1c-a425-173598a882ec> a report:ConstraintReport;
    report:constraint <urn:uuid:d9e3e6fe-05db-4bff-ba28-ec37ef313df5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7a4c4c24-fa92-4520-bfb8-9f10929b4a17> a report:ConstraintReport;
    report:constraint <urn:uuid:a59a52c6-8dd2-4302-a863-7d213ff17830>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:35eb53a5-4461-4c06-9dbc-9b43281b22ab> a report:ConstraintReport;
    report:constraint <urn:uuid:f9117877-e0a1-4ce2-87b9-b9ef6e33baa9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b4d61a68-9b17-414c-b214-eb99ae009a12>, <urn:uuid:14b558b4-69df-4071-9161-8dd06057746b>.
<urn:uuid:b4d61a68-9b17-414c-b214-eb99ae009a12> a report:ConstraintReport;
    report:constraint <urn:uuid:9d24e455-7082-4d39-8a19-d7aef1e9222c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:14b558b4-69df-4071-9161-8dd06057746b> a report:ConstraintReport;
    report:constraint <urn:uuid:419290e2-7984-42d6-8f29-d2ec68063815>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:44c7a9c8-cc55-41a9-a975-fd03e65327f7> a report:ConstraintReport;
    report:constraint <urn:uuid:38f11df6-dbfc-415a-a7df-fc05d82c3061>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:35d7dd37-3bea-4070-be8d-76ea5e6b1086>, <urn:uuid:dd0b2a04-3f53-4b65-9c4d-73b34c5bd3c0>.
<urn:uuid:35d7dd37-3bea-4070-be8d-76ea5e6b1086> a report:ConstraintReport;
    report:constraint <urn:uuid:fc158863-3bb8-45b4-8257-a0e1d854806e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dd0b2a04-3f53-4b65-9c4d-73b34c5bd3c0> a report:ConstraintReport;
    report:constraint <urn:uuid:1f7287e9-71a6-4ff7-9768-346a331e80fd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7f1e4d0b-ec44-46fa-90a2-c2af13b91f5d> a report:ConstraintReport;
    report:constraint <urn:uuid:20497829-b46a-4328-a651-b38428b12192>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a1cf20a0-03be-429e-976d-9c3c81d8c706>, <urn:uuid:0a79ba86-243e-469c-a550-0c1b652d886e>.
<urn:uuid:a1cf20a0-03be-429e-976d-9c3c81d8c706> a report:ConstraintReport;
    report:constraint <urn:uuid:eff46f32-949d-4f3d-9a56-01a7bf6a53a8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0a79ba86-243e-469c-a550-0c1b652d886e> a report:ConstraintReport;
    report:constraint <urn:uuid:e6a48e62-befb-4738-ab0e-b3a22d1dde61>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9228191e-cf90-488e-8947-d0209c0e63f7> a report:ConstraintReport;
    report:constraint <urn:uuid:bf3f94cc-70da-4f6b-bd39-8f16892198f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:91d91673-cb1c-42a7-81a7-bc8900b5e5db>, <urn:uuid:9944cd5f-79b6-4697-b43b-9d3c52cde310>.
<urn:uuid:91d91673-cb1c-42a7-81a7-bc8900b5e5db> a report:ConstraintReport;
    report:constraint <urn:uuid:d8a4c948-73b2-4789-8dc7-500f6d752fe8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9944cd5f-79b6-4697-b43b-9d3c52cde310> a report:ConstraintReport;
    report:constraint <urn:uuid:60c28b6b-e36f-4796-a994-74b993368ed2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ba81123b-155c-4f45-a332-cded8d577553> a report:ConstraintReport;
    report:constraint <urn:uuid:c60e0ec8-902f-4e6e-a412-fa7d05c834ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8cb65c8c-2d99-4c56-959d-c6fa84885cbd>, <urn:uuid:0e30428c-769b-4db3-99c7-e15d96a6d7fc>.
<urn:uuid:8cb65c8c-2d99-4c56-959d-c6fa84885cbd> a report:ConstraintReport;
    report:constraint <urn:uuid:2e3d1a4d-43d5-4e35-81b0-20497b73a8f2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0e30428c-769b-4db3-99c7-e15d96a6d7fc> a report:ConstraintReport;
    report:constraint <urn:uuid:c413ec7a-e39a-4739-b6c9-87ace5a05a16>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4af1b342-acaf-4543-9d7e-faa4c3b848ec> a report:ConstraintReport;
    report:constraint <urn:uuid:e0ac9c09-e2d0-492e-8ce6-2bf419cbd71e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0e5caba8-079c-4f4c-96e6-3b7933ed49ad>, <urn:uuid:84199261-ab35-4216-939c-d661155c11c9>.
<urn:uuid:0e5caba8-079c-4f4c-96e6-3b7933ed49ad> a report:ConstraintReport;
    report:constraint <urn:uuid:a782236f-7af5-4f82-a154-da1a9194b9ea>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:84199261-ab35-4216-939c-d661155c11c9> a report:ConstraintReport;
    report:constraint <urn:uuid:9ca17b3b-86f1-476d-981d-b308d335d885>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:61a946b4-eca6-45a3-9300-f4a329c90d58> a report:ConstraintReport;
    report:constraint <urn:uuid:f66f7a5c-58fd-4fb9-ac2a-847f7dc48a55>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4d8e2960-1b4a-4b32-b8cc-d428270524fe>, <urn:uuid:5364cfd3-7f52-479d-9367-b3187318cfbc>.
<urn:uuid:4d8e2960-1b4a-4b32-b8cc-d428270524fe> a report:ConstraintReport;
    report:constraint <urn:uuid:8794f6f8-f1e0-49d4-aa88-18daf5c4aa22>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5364cfd3-7f52-479d-9367-b3187318cfbc> a report:ConstraintReport;
    report:constraint <urn:uuid:d3fbae36-fc42-4040-8d38-de522d5276ee>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2919871b-baf2-4391-acf4-2183a0c24e09> a report:ConstraintReport;
    report:constraint <urn:uuid:ec84c86e-89c5-4a84-9b3c-5f6ea87859c6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:69819180-2fbf-4340-81c6-317db60eaef7>, <urn:uuid:82c9746e-113e-4059-bbe2-26085683d115>.
<urn:uuid:69819180-2fbf-4340-81c6-317db60eaef7> a report:ConstraintReport;
    report:constraint <urn:uuid:c7b692c7-fc26-433e-a130-3997e1187bbd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:82c9746e-113e-4059-bbe2-26085683d115> a report:ConstraintReport;
    report:constraint <urn:uuid:3fe3d04d-e964-4a7d-8949-9a1c7fee8d80>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:326205c2-e354-4155-8bcc-c10201f394b6> a report:ConstraintReport;
    report:constraint <urn:uuid:2581ca84-38bf-4716-a954-6ad2f779a1c6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9216dee4-e56a-4091-9e04-3b11b52543fc>, <urn:uuid:ed171237-0316-447f-99b3-3195233e346f>.
<urn:uuid:9216dee4-e56a-4091-9e04-3b11b52543fc> a report:ConstraintReport;
    report:constraint <urn:uuid:a8dbdf25-82ce-4169-a191-f206d3a3f6d2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ed171237-0316-447f-99b3-3195233e346f> a report:ConstraintReport;
    report:constraint <urn:uuid:58569b9a-3db1-4bf9-884a-136db633ab9e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5564f08f-c3a3-4aa5-a765-30fb82def8e2> a report:ConstraintReport;
    report:constraint <urn:uuid:cc3ee7b5-34b1-4630-81e2-ac37b8274e9e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bdb9f022-0269-4edb-aeb3-807df982d679>, <urn:uuid:febf9dbe-9283-46ae-b7eb-01499c43cf03>.
<urn:uuid:bdb9f022-0269-4edb-aeb3-807df982d679> a report:ConstraintReport;
    report:constraint <urn:uuid:a5759a20-2138-4dd5-8bc8-3aa25cae17bc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:febf9dbe-9283-46ae-b7eb-01499c43cf03> a report:ConstraintReport;
    report:constraint <urn:uuid:cc29cd17-c96e-4146-b845-e4b4b13f0310>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:922f68e0-3033-4185-9260-8efe46863b44> a report:ConstraintReport;
    report:constraint <urn:uuid:f3d10c6b-c3c9-4b32-b3ed-1eb40ae2004e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ef1754fd-f515-46d4-9bd6-9e7648e2276a>, <urn:uuid:7e64466d-295b-45d6-a706-86cc8963dea4>.
<urn:uuid:ef1754fd-f515-46d4-9bd6-9e7648e2276a> a report:ConstraintReport;
    report:constraint <urn:uuid:e9a8ea8d-8735-4d6c-ad7d-c03db4c4a063>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7e64466d-295b-45d6-a706-86cc8963dea4> a report:ConstraintReport;
    report:constraint <urn:uuid:f58b9a7c-2c12-4ef4-8187-a94b148e3371>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0b50312e-e4bf-49dc-ba4d-54f957549775> a report:ConstraintReport;
    report:constraint <urn:uuid:ecbe9aa1-a9d8-419f-9675-2c158a5919a7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f29d9f71-3aa1-4787-a47d-0265f8e60866>, <urn:uuid:27fb4fed-91b0-489d-bcfa-0c054fa19c12>.
<urn:uuid:f29d9f71-3aa1-4787-a47d-0265f8e60866> a report:ConstraintReport;
    report:constraint <urn:uuid:0cc1512d-9fa0-498a-8391-b0fe27700ae4>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:27fb4fed-91b0-489d-bcfa-0c054fa19c12> a report:ConstraintReport;
    report:constraint <urn:uuid:5026529f-5715-413e-a117-e4cdcabd0bde>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:53eb2660-06d5-409c-ae6e-dca54fa0e264> a report:ConstraintReport;
    report:constraint <urn:uuid:629997aa-cd95-433c-8b3c-b9aad2c6aa3e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f43216a1-3b5f-4aa8-80c1-cdfece152a23>, <urn:uuid:2502240f-bc41-43c5-930e-bdb0f9d9869f>.
<urn:uuid:f43216a1-3b5f-4aa8-80c1-cdfece152a23> a report:ConstraintReport;
    report:constraint <urn:uuid:2c738aba-d13f-429e-8d48-87e132bb3f53>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2502240f-bc41-43c5-930e-bdb0f9d9869f> a report:ConstraintReport;
    report:constraint <urn:uuid:ed8574f6-f123-438c-9116-b05fc4094151>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7ff191a6-01fe-4507-b3cd-ac3f63865010> a report:ConstraintReport;
    report:constraint <urn:uuid:e4735358-f475-492c-b080-9b9b369fbd38>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c37718e4-43d6-49c1-95db-62cf85be8671>, <urn:uuid:c7c4de08-a08e-4c6b-bfe1-e49c2559f420>.
<urn:uuid:c37718e4-43d6-49c1-95db-62cf85be8671> a report:ConstraintReport;
    report:constraint <urn:uuid:ce99b4c5-8f0d-435e-b6de-0e01f16263d9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c7c4de08-a08e-4c6b-bfe1-e49c2559f420> a report:ConstraintReport;
    report:constraint <urn:uuid:796dbb29-e79f-495c-8ba3-2c91884e0b22>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ffbc229e-5406-4571-b245-a41a952aa3fd> a report:ConstraintReport;
    report:constraint <urn:uuid:8e7ca55b-5a1f-4444-9337-ee4f2f9025c7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9a6e2d74-ec21-4b00-a8dc-69b9a49632e3>, <urn:uuid:ebf1a1d4-766d-4e16-b8e7-1ea61cef7bd5>.
<urn:uuid:9a6e2d74-ec21-4b00-a8dc-69b9a49632e3> a report:ConstraintReport;
    report:constraint <urn:uuid:1a1f352f-c2bb-4d81-8dca-0c213f6da148>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ebf1a1d4-766d-4e16-b8e7-1ea61cef7bd5> a report:ConstraintReport;
    report:constraint <urn:uuid:e51c2a9a-716e-4a6f-9e43-169dacd0169d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:12c13147-5e98-4cbd-9e44-408d66534e43> a report:ConstraintReport;
    report:constraint <urn:uuid:759a8766-a480-4c20-9a62-3092af654182>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5a297cee-86bc-4095-98d9-6e009a77313a>, <urn:uuid:8425caaf-3448-45b6-a921-4d4910eaacb0>.
<urn:uuid:5a297cee-86bc-4095-98d9-6e009a77313a> a report:ConstraintReport;
    report:constraint <urn:uuid:d781a87e-06dd-41c3-bb4c-1cef8133835a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8425caaf-3448-45b6-a921-4d4910eaacb0> a report:ConstraintReport;
    report:constraint <urn:uuid:42a89d23-c815-4bc0-98b0-35bab1f36b4d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fba7e950-834a-4e43-b11a-fc7fb83b78eb> a report:ConstraintReport;
    report:constraint <urn:uuid:e9e4a6cc-4c5c-4a23-8181-009a02c7aa7d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f1b69f19-3679-4ffd-b401-4f93029c33ed>, <urn:uuid:ca8d9293-77dc-4090-a36f-0e47a596cd9a>.
<urn:uuid:f1b69f19-3679-4ffd-b401-4f93029c33ed> a report:ConstraintReport;
    report:constraint <urn:uuid:7288eb0a-3ad6-4b36-b1e1-7dec59d6625a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ca8d9293-77dc-4090-a36f-0e47a596cd9a> a report:ConstraintReport;
    report:constraint <urn:uuid:244df4e1-cfd3-4c00-ac26-4d781bbd880e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8c9cebeb-e45a-46f4-8e2c-f52cd465ec71> a report:ConstraintReport;
    report:constraint <urn:uuid:9429299d-a355-491e-a34a-ba490a9f1bea>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9f1a71e1-95f6-4c52-bf32-cd770687dcf1>, <urn:uuid:3c03354a-d021-4a65-9217-497cf683a689>.
<urn:uuid:9f1a71e1-95f6-4c52-bf32-cd770687dcf1> a report:ConstraintReport;
    report:constraint <urn:uuid:7617f4a3-05d3-4418-9909-fddcac55db5f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3c03354a-d021-4a65-9217-497cf683a689> a report:ConstraintReport;
    report:constraint <urn:uuid:0d23d75e-2fe8-4d31-b31d-5f4f01808a7b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0a47465c-8c9c-4d86-87ff-85478ceaf413> a report:ConstraintReport;
    report:constraint <urn:uuid:6ffe395c-28bb-4a5b-8b46-423970f03867>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6127a437-f91d-495b-89b8-61d562aafaf6>, <urn:uuid:00e09cea-1d5d-4e49-9a0f-dd17439cea95>.
<urn:uuid:6127a437-f91d-495b-89b8-61d562aafaf6> a report:ConstraintReport;
    report:constraint <urn:uuid:8402ebf0-1db1-4710-a8d8-ec248cb7b64c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:00e09cea-1d5d-4e49-9a0f-dd17439cea95> a report:ConstraintReport;
    report:constraint <urn:uuid:39d431e4-8742-4dd0-aa7e-f780d413b613>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c76964a9-69e7-4a90-918a-dcba0baad366> a report:ConstraintReport;
    report:constraint <urn:uuid:40fa925a-712e-4f2a-a737-ab9fbcf3319a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2834c529-2778-42b6-a9f1-57a5400e33d7>, <urn:uuid:10a6fad5-068a-4d5a-8e13-af15df71fe92>.
<urn:uuid:2834c529-2778-42b6-a9f1-57a5400e33d7> a report:ConstraintReport;
    report:constraint <urn:uuid:3c55fbf2-1323-45ab-a1d0-1580b9fa34e9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:10a6fad5-068a-4d5a-8e13-af15df71fe92> a report:ConstraintReport;
    report:constraint <urn:uuid:0d1698a6-4aec-423b-84fb-44d600cb69ca>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:330e82d4-bcda-4caf-ba44-39c1a9957992> a report:ConstraintReport;
    report:constraint <urn:uuid:6154c58e-869f-454b-876b-d400bfa0770e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f50101fd-9c3e-4d0e-884a-7ce3a50ef0df>, <urn:uuid:29edd0db-136f-4ec7-a318-10ee1b96a971>.
<urn:uuid:f50101fd-9c3e-4d0e-884a-7ce3a50ef0df> a report:ConstraintReport;
    report:constraint <urn:uuid:ad6a73a4-9a3a-4154-b445-447f097d8d51>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:29edd0db-136f-4ec7-a318-10ee1b96a971> a report:ConstraintReport;
    report:constraint <urn:uuid:e28f2764-4717-48d1-af4d-a025a262c75b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4ffd3498-9fb1-4ad2-8e19-fa6850dbab7f> a report:ConstraintReport;
    report:constraint <urn:uuid:8c84d6f9-c83c-49d9-b988-e571c6493e21>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:14bc3f38-cc76-4bae-91fa-6be7e47a2c97>, <urn:uuid:f5033490-ed16-4739-b9d5-98405c03cadf>.
<urn:uuid:14bc3f38-cc76-4bae-91fa-6be7e47a2c97> a report:ConstraintReport;
    report:constraint <urn:uuid:e1b7390f-b3ee-4a62-9b84-958cd7205503>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f5033490-ed16-4739-b9d5-98405c03cadf> a report:ConstraintReport;
    report:constraint <urn:uuid:a0c4e370-8eb7-4533-960c-18edc1347606>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4ae51fe5-28e4-4dd7-8ef5-d1d416a90b14> a report:ConstraintReport;
    report:constraint <urn:uuid:4eea153f-9a27-44da-8432-40aea5bdfc5d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:59992fac-829d-405a-9fe8-773dcdd1b2b1>, <urn:uuid:7ce4259f-b3ea-46a6-97d3-540b4fa05b4e>.
<urn:uuid:59992fac-829d-405a-9fe8-773dcdd1b2b1> a report:ConstraintReport;
    report:constraint <urn:uuid:a07bd66a-264c-49de-b61b-52eb4900e7c5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7ce4259f-b3ea-46a6-97d3-540b4fa05b4e> a report:ConstraintReport;
    report:constraint <urn:uuid:794229d2-8312-4e36-a44e-5cd86dcd5e9f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:651ef753-6760-4573-8c5f-15b6fdd9daf6> a report:ConstraintReport;
    report:constraint <urn:uuid:fe175296-5b32-4174-ad5b-9227a44c3615>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:951e122f-aa30-4afa-a022-29d0864952af>, <urn:uuid:d7475c24-93f4-43de-9da2-fa21485bb206>.
<urn:uuid:951e122f-aa30-4afa-a022-29d0864952af> a report:ConstraintReport;
    report:constraint <urn:uuid:851265bd-c336-49b1-80de-07ddd58cbf0e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d7475c24-93f4-43de-9da2-fa21485bb206> a report:ConstraintReport;
    report:constraint <urn:uuid:aa62a8c6-b42e-4776-abb9-eaf7b9b32630>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:be8491de-2c7b-4611-b25e-f397954aeafb> a report:ConstraintReport;
    report:constraint <urn:uuid:20a309ef-154e-4a93-82df-a7d1c633b8e7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:21f908df-383b-4552-9396-3a813cac9f1e>, <urn:uuid:d6cfb699-85d2-4659-a81c-68c253a5027f>.
<urn:uuid:21f908df-383b-4552-9396-3a813cac9f1e> a report:ConstraintReport;
    report:constraint <urn:uuid:25ad60f5-db0c-4c1f-bf7a-cdd121e3413f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d6cfb699-85d2-4659-a81c-68c253a5027f> a report:ConstraintReport;
    report:constraint <urn:uuid:d3fb977b-c2fb-4822-82f2-eec957086742>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c5844211-ad84-4d96-b2df-afa0d26324c9> a report:ConstraintReport;
    report:constraint <urn:uuid:d6d4f8b2-82e7-4e4f-8949-94f5b5175654>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e25b08dc-13c7-4d56-95bf-54e29c499d33>, <urn:uuid:1ce8a607-a84b-4afd-8f17-579d7965da13>.
<urn:uuid:e25b08dc-13c7-4d56-95bf-54e29c499d33> a report:ConstraintReport;
    report:constraint <urn:uuid:7251a15a-cc69-4977-a8d5-d85e8acde17f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1ce8a607-a84b-4afd-8f17-579d7965da13> a report:ConstraintReport;
    report:constraint <urn:uuid:3682efaa-846f-46b6-a557-e3a13c7ba88c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:08c88157-7322-46e5-9b3a-fab63c4c59a6> a report:ConstraintReport;
    report:constraint <urn:uuid:99489667-c4e5-405e-a108-ecdd3413e89b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:45b5587e-f759-451e-803a-232fde3ab9b6>, <urn:uuid:acba4f77-030d-4289-b0fc-71b984b5fde5>.
<urn:uuid:45b5587e-f759-451e-803a-232fde3ab9b6> a report:ConstraintReport;
    report:constraint <urn:uuid:c3d68483-7988-44af-82c9-82771a7401fb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:acba4f77-030d-4289-b0fc-71b984b5fde5> a report:ConstraintReport;
    report:constraint <urn:uuid:77f83627-128e-4a96-84f7-ff2d0073161c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3897a91e-068e-4164-9dc2-026eb7aa6d12> a report:ConstraintReport;
    report:constraint <urn:uuid:36a81698-68dc-4276-930b-5faea86191a2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:129fd818-6ff9-4162-b614-7c5a89742623>, <urn:uuid:e90e1eba-07f5-4767-abde-475cfa27837e>.
<urn:uuid:129fd818-6ff9-4162-b614-7c5a89742623> a report:ConstraintReport;
    report:constraint <urn:uuid:087a31cb-9634-42fa-9797-642cb5d19789>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e90e1eba-07f5-4767-abde-475cfa27837e> a report:ConstraintReport;
    report:constraint <urn:uuid:2e04982c-f04b-4fce-9942-72a65f47cb55>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c01e19fe-97da-4340-ab34-5f6f46a9396d> a report:ConstraintReport;
    report:constraint <urn:uuid:a79cbb6a-c51d-46c3-9abd-0f58b7d96220>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:327e28d4-e0cf-4932-ba17-72b179e4694d>, <urn:uuid:5442027d-02a7-4426-862c-6d9d9f215bfa>.
<urn:uuid:327e28d4-e0cf-4932-ba17-72b179e4694d> a report:ConstraintReport;
    report:constraint <urn:uuid:d8d3dabd-51f8-481a-a55e-b08723ccc328>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5442027d-02a7-4426-862c-6d9d9f215bfa> a report:ConstraintReport;
    report:constraint <urn:uuid:4554f885-28eb-461d-8475-084cfbe3c43c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4e11e9b7-47e2-405b-b5fb-ee4cbaea868e> a report:ConstraintReport;
    report:constraint <urn:uuid:f8ecc917-b0a1-49de-b763-b2fa1084454c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bec717a7-b716-4b6e-92fa-f59d4cfc5f11>, <urn:uuid:b8ad0c76-811d-43a1-9068-ddf52a8a2a5e>.
<urn:uuid:bec717a7-b716-4b6e-92fa-f59d4cfc5f11> a report:ConstraintReport;
    report:constraint <urn:uuid:bb11ab45-377c-415f-8b4a-8fdc12f5a94e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b8ad0c76-811d-43a1-9068-ddf52a8a2a5e> a report:ConstraintReport;
    report:constraint <urn:uuid:3e913bd3-caf8-486c-9e39-6159bfee839a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ccd0addc-eb6a-45bf-96f7-1b36f66c3ed6> a report:ConstraintReport;
    report:constraint <urn:uuid:8d6e9a21-8ce8-47f3-826f-6c1ed990251b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:81d87bfa-6fe6-4b5a-9cb7-31426f30c672>, <urn:uuid:0f9e40ab-e367-4e1e-8ccc-38c303d2d816>.
<urn:uuid:81d87bfa-6fe6-4b5a-9cb7-31426f30c672> a report:ConstraintReport;
    report:constraint <urn:uuid:3987d626-8481-4800-80df-ed1336914c35>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0f9e40ab-e367-4e1e-8ccc-38c303d2d816> a report:ConstraintReport;
    report:constraint <urn:uuid:d1cf7dd3-de8f-41f3-8806-15460d723a51>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2ce630a2-cf35-44d4-9074-ed6db0ee7a63> a report:ConstraintReport;
    report:constraint <urn:uuid:025579ca-9595-47c6-ae79-9d31d26f72ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f8d88876-c27d-4633-b61e-5f91cc9651de>, <urn:uuid:a743a6f8-9d1d-4116-b856-e298eb861e32>.
<urn:uuid:f8d88876-c27d-4633-b61e-5f91cc9651de> a report:ConstraintReport;
    report:constraint <urn:uuid:dc34a600-547c-4000-a19d-88bb4eb1d860>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a743a6f8-9d1d-4116-b856-e298eb861e32> a report:ConstraintReport;
    report:constraint <urn:uuid:7791ed09-f751-4452-b10f-fad443cee896>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:80c32fdd-30c2-49d5-82fc-aa80a840e131> a report:ConstraintReport;
    report:constraint <urn:uuid:b2335484-2193-43d5-952d-0eaa78b4d228>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:73d4148f-1952-431a-9aff-25f1244f1cc6>, <urn:uuid:e5c025bd-9c8d-4698-9d14-f3e175ce5bfb>.
<urn:uuid:73d4148f-1952-431a-9aff-25f1244f1cc6> a report:ConstraintReport;
    report:constraint <urn:uuid:fb78ee8b-dce9-4c2e-a171-7cad399c0378>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e5c025bd-9c8d-4698-9d14-f3e175ce5bfb> a report:ConstraintReport;
    report:constraint <urn:uuid:46e9b9f4-74ee-476a-b68e-24fe6b624672>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0a64f707-800f-4776-b8c6-5568a4706049> a report:ConstraintReport;
    report:constraint <urn:uuid:20a8ed90-e5f2-47a9-8420-bc3365ef15e3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6c1438ff-03a8-4e1c-9101-8a4d12b9169e>, <urn:uuid:eeca4b53-6586-469a-a14e-259cf6517f7d>.
<urn:uuid:6c1438ff-03a8-4e1c-9101-8a4d12b9169e> a report:ConstraintReport;
    report:constraint <urn:uuid:ed54ec4b-a1d9-47a9-a225-41ffbdb02c9b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:eeca4b53-6586-469a-a14e-259cf6517f7d> a report:ConstraintReport;
    report:constraint <urn:uuid:2510ad4a-bac1-4958-b6f8-9bd261738531>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:60bc8558-88ad-4f01-82e4-055acf6f99c6> a report:ConstraintReport;
    report:constraint <urn:uuid:f1e9e740-386d-41df-b308-f55f64cba6dc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:acee5b20-9c2f-4f0f-ad25-0a00a87d70b3>, <urn:uuid:8952ca19-9e10-4c68-a864-e18a398d6a27>.
<urn:uuid:acee5b20-9c2f-4f0f-ad25-0a00a87d70b3> a report:ConstraintReport;
    report:constraint <urn:uuid:5adca922-de27-4ca9-a2a6-55f0ba9635c8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8952ca19-9e10-4c68-a864-e18a398d6a27> a report:ConstraintReport;
    report:constraint <urn:uuid:787113f2-55df-462e-84fa-cb658c50d8fb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:599e8e0b-cce8-4363-9e57-ee8f50737430> a report:ConstraintReport;
    report:constraint <urn:uuid:74a74712-2516-45e2-a784-80773c55d465>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0e8af054-ad7a-4f40-90d7-cee4ed6f28fb>, <urn:uuid:f9924c82-9257-4f57-9685-16b7c6f4cdd0>.
<urn:uuid:0e8af054-ad7a-4f40-90d7-cee4ed6f28fb> a report:ConstraintReport;
    report:constraint <urn:uuid:a2c81302-1a5c-4ebe-9fa0-cec8ceebd576>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f9924c82-9257-4f57-9685-16b7c6f4cdd0> a report:ConstraintReport;
    report:constraint <urn:uuid:8f122756-faf5-47c1-91ca-2a22b12052dc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f1ff1aa1-ba30-4fc6-881a-6ed6d9ecca40> a report:ConstraintReport;
    report:constraint <urn:uuid:8d19eb5d-ccc8-4b19-87c3-94f838e96639>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e377897e-8641-4a24-bb63-657f836153fd>, <urn:uuid:d041093d-e56d-4386-8865-816eb03c6776>.
<urn:uuid:e377897e-8641-4a24-bb63-657f836153fd> a report:ConstraintReport;
    report:constraint <urn:uuid:d961840a-dd39-4d00-b90d-c4096ae0e49c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d041093d-e56d-4386-8865-816eb03c6776> a report:ConstraintReport;
    report:constraint <urn:uuid:b33afa3b-d928-43e0-b03f-d3642fcf4065>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e71bd704-5860-489e-be28-8d79efc4e2dd> a report:ConstraintReport;
    report:constraint <urn:uuid:7edae164-7a1d-4e39-a6ff-5496ebd833cd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:762a942f-6b1d-4011-891f-4a7b55dfd6a4>, <urn:uuid:1124ecec-6a44-46af-be3d-78c852398326>.
<urn:uuid:762a942f-6b1d-4011-891f-4a7b55dfd6a4> a report:ConstraintReport;
    report:constraint <urn:uuid:2fa84ecc-ab3a-4e6e-a397-2aa12d76ad6b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1124ecec-6a44-46af-be3d-78c852398326> a report:ConstraintReport;
    report:constraint <urn:uuid:ecf2fc3d-d925-4156-8e14-63adbf18674c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3f674c14-a1f6-419a-a582-e6899be755ff> a report:ConstraintReport;
    report:constraint <urn:uuid:45a8feaf-d112-4336-a432-b8cf99a6ad09>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9cab25a2-f364-4038-9a2d-52cd105b6f17>, <urn:uuid:15aadb0f-099f-4c82-b0a3-9d83d670ed05>.
<urn:uuid:9cab25a2-f364-4038-9a2d-52cd105b6f17> a report:ConstraintReport;
    report:constraint <urn:uuid:f1678757-894d-4525-b892-956f3f665072>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:15aadb0f-099f-4c82-b0a3-9d83d670ed05> a report:ConstraintReport;
    report:constraint <urn:uuid:9792608d-cac5-4659-a9d4-edc45714af19>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:88e4c2b8-b319-4639-8a96-fee45a8217ac> a report:ConstraintReport;
    report:constraint <urn:uuid:df0a77f7-1d54-484a-afaf-4826ad4fcba1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a39f61e6-6890-497c-b5b7-01ecc39b218c>, <urn:uuid:19ddcbc0-3875-4c37-bf02-e2e43b803913>.
<urn:uuid:a39f61e6-6890-497c-b5b7-01ecc39b218c> a report:ConstraintReport;
    report:constraint <urn:uuid:22e36e1b-f376-4454-a21f-69b1320a468b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:19ddcbc0-3875-4c37-bf02-e2e43b803913> a report:ConstraintReport;
    report:constraint <urn:uuid:00637563-7e3b-405b-a3b7-b6be21c48433>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6c70d636-ba14-4e1b-95ae-0288a2f5eee1> a report:ConstraintReport;
    report:constraint <urn:uuid:a5438dee-3584-40f2-b589-5f59bd64253e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:22377868-fef3-467c-8098-0628136c5e40>, <urn:uuid:7aba5381-d78f-494f-8cc3-e307ec31bbff>.
<urn:uuid:22377868-fef3-467c-8098-0628136c5e40> a report:ConstraintReport;
    report:constraint <urn:uuid:8e39f6ff-6fcd-4d57-a1ff-9caae5bcfb96>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7aba5381-d78f-494f-8cc3-e307ec31bbff> a report:ConstraintReport;
    report:constraint <urn:uuid:557d07f0-dbec-4e09-a7d5-53e3f6a5ac70>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c842903c-e7e1-4f5c-bb68-ee045224d1d9> a report:ConstraintReport;
    report:constraint <urn:uuid:da363350-32e5-4e5d-8295-56f8fcdd8ffd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e8f12a7c-0be2-4bd6-95aa-d740ec05f76c>, <urn:uuid:c98edd4a-4fc0-4b93-a7f3-03bf65290121>.
<urn:uuid:e8f12a7c-0be2-4bd6-95aa-d740ec05f76c> a report:ConstraintReport;
    report:constraint <urn:uuid:89b7d92a-99c6-4b7a-8533-4448713e7d3a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c98edd4a-4fc0-4b93-a7f3-03bf65290121> a report:ConstraintReport;
    report:constraint <urn:uuid:63866b29-a379-4841-95df-72d9148359be>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e2af3b99-2d1a-45e7-91e7-9608a866db1a> a report:ConstraintReport;
    report:constraint <urn:uuid:652fdfd1-0c51-4bd5-a795-37770d4d9ac1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5d53e294-207d-4775-9204-4b3276d53486>, <urn:uuid:c5c4e0aa-49eb-4707-8f23-987f456bba84>.
<urn:uuid:5d53e294-207d-4775-9204-4b3276d53486> a report:ConstraintReport;
    report:constraint <urn:uuid:33230260-0328-4d17-a0f4-54fd5df1681e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c5c4e0aa-49eb-4707-8f23-987f456bba84> a report:ConstraintReport;
    report:constraint <urn:uuid:589aeee8-a2ce-4866-9541-82362b517815>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3d1a6b47-5d10-4eda-b687-1db538a0feb2> a report:ConstraintReport;
    report:constraint <urn:uuid:5c11aec8-6640-4ec2-89bb-69660f9f3d4d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ce4d5864-3009-44e7-8994-4dfb2b3cd004>, <urn:uuid:5628050d-d788-4a5b-b0b3-bcd255eaf7e9>.
<urn:uuid:ce4d5864-3009-44e7-8994-4dfb2b3cd004> a report:ConstraintReport;
    report:constraint <urn:uuid:3db2b497-6ba7-4a0f-8fe8-5c65a647d54a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5628050d-d788-4a5b-b0b3-bcd255eaf7e9> a report:ConstraintReport;
    report:constraint <urn:uuid:c4df223e-6ce3-420d-8c56-771e616de650>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:886d46e0-532a-4fd4-ab8a-c1b300cd7ace> a report:ConstraintReport;
    report:constraint <urn:uuid:26e133fc-cc58-44cd-8ff1-ee1ffbe5db36>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bc65dee6-9149-467b-a737-388709f82b7a>, <urn:uuid:19572b86-dc5d-46e4-b8dc-63176e2a528e>.
<urn:uuid:bc65dee6-9149-467b-a737-388709f82b7a> a report:ConstraintReport;
    report:constraint <urn:uuid:fc83f764-d140-4e5a-93ca-bbe2bc522e34>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:19572b86-dc5d-46e4-b8dc-63176e2a528e> a report:ConstraintReport;
    report:constraint <urn:uuid:17461c3f-c284-4b6d-91af-08d8a5bb03f8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9e1eaac8-64ec-4f25-967a-56af441b4793> a report:ConstraintReport;
    report:constraint <urn:uuid:63a26522-ab0d-4f6f-b08b-0120b8a361a9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:30399dad-4492-4f87-8dfe-0a721d4fe47b>, <urn:uuid:3d50521f-f868-43c1-8f4b-6f144d277a58>.
<urn:uuid:30399dad-4492-4f87-8dfe-0a721d4fe47b> a report:ConstraintReport;
    report:constraint <urn:uuid:4455d6d4-5a0b-4e72-891b-a755c1d60988>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3d50521f-f868-43c1-8f4b-6f144d277a58> a report:ConstraintReport;
    report:constraint <urn:uuid:c1925145-1357-4fc3-85e4-1967ecee94a0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:af825e26-d353-4486-ae21-ae11cc53b7d7> a report:ConstraintReport;
    report:constraint <urn:uuid:330b8ea5-f382-457b-bfbf-47e5784ac046>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ccf01170-f75b-419d-b3ee-31014191b64b>, <urn:uuid:3a0e064f-54e2-4938-a63c-a3ce25da54ac>.
<urn:uuid:ccf01170-f75b-419d-b3ee-31014191b64b> a report:ConstraintReport;
    report:constraint <urn:uuid:d541d869-b628-4e9a-a490-d123c5d60e8f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3a0e064f-54e2-4938-a63c-a3ce25da54ac> a report:ConstraintReport;
    report:constraint <urn:uuid:8974a686-95f3-448b-9eb0-8e028ff263fb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5e838cbe-1f8a-4cc5-98ef-fc0a6d625b81> a report:ConstraintReport;
    report:constraint <urn:uuid:14031796-fb1d-4dbe-b0ef-1a8f43c9783c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f98e859d-a235-493f-806c-92870ba74a88>, <urn:uuid:d48e8682-2927-4cb2-8696-79f082e6c291>.
<urn:uuid:f98e859d-a235-493f-806c-92870ba74a88> a report:ConstraintReport;
    report:constraint <urn:uuid:1184aee3-3c71-474e-8ef8-9f035af140a2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d48e8682-2927-4cb2-8696-79f082e6c291> a report:ConstraintReport;
    report:constraint <urn:uuid:3a2c22ef-c82f-4085-a9f5-ccfed8f446ad>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:04dfcd96-68ed-4dbb-a001-768d3ba644c3> a report:ConstraintReport;
    report:constraint <urn:uuid:fc689a79-666b-4dfd-9c32-1f0eca9fd2db>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:683b98f6-312e-4545-9c07-cf926a613718>, <urn:uuid:4da8f5fb-1cca-48c7-a2f1-6cee0e7282bc>.
<urn:uuid:683b98f6-312e-4545-9c07-cf926a613718> a report:ConstraintReport;
    report:constraint <urn:uuid:a054e9ce-12c0-4bfe-8228-918eb34ebdbc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4da8f5fb-1cca-48c7-a2f1-6cee0e7282bc> a report:ConstraintReport;
    report:constraint <urn:uuid:504b7ee6-b364-432a-8b6c-779ab4c5c4cb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:29e57406-c94a-4650-8fd7-2ff4ad821a7a> a report:ConstraintReport;
    report:constraint <urn:uuid:e0091d42-42f2-4a35-b90c-0ac144abd292>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a4a75bcc-572e-4140-b786-04221b818b0a>, <urn:uuid:6c430f9b-94a0-4072-afd4-80b2d7ec0def>.
<urn:uuid:a4a75bcc-572e-4140-b786-04221b818b0a> a report:ConstraintReport;
    report:constraint <urn:uuid:6ee232fe-e534-409a-9499-15cae055f596>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6c430f9b-94a0-4072-afd4-80b2d7ec0def> a report:ConstraintReport;
    report:constraint <urn:uuid:1f7f4586-afe8-4bb8-8719-930fac9f4755>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:60d91f02-b642-4c36-9bf9-36ec0da07564> a report:ConstraintReport;
    report:constraint <urn:uuid:e7d20235-7437-44b0-a4c8-0ff4215064c0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7d679ec9-f5cc-4d6b-a908-bb84d0457ee0>, <urn:uuid:fb202410-4735-423d-985e-5ee7bfe93e73>.
<urn:uuid:7d679ec9-f5cc-4d6b-a908-bb84d0457ee0> a report:ConstraintReport;
    report:constraint <urn:uuid:5c4833a5-b394-4add-888a-82e52b30d6d3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fb202410-4735-423d-985e-5ee7bfe93e73> a report:ConstraintReport;
    report:constraint <urn:uuid:8b9f5dee-c5a3-43d3-b8b4-444f428b0205>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1052766e-a33f-4a08-933b-102c87caad8d> a report:ConstraintReport;
    report:constraint <urn:uuid:02aa8f94-1b0a-4fa2-b55a-5901c1cbfc67>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7d92ad9a-5ef0-41d2-8348-e1de17419f45>, <urn:uuid:9db48f42-1fc6-4d32-bbb3-7cac28825f8b>.
<urn:uuid:7d92ad9a-5ef0-41d2-8348-e1de17419f45> a report:ConstraintReport;
    report:constraint <urn:uuid:02e532c9-8ff4-4432-9c86-feecc24826b1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9db48f42-1fc6-4d32-bbb3-7cac28825f8b> a report:ConstraintReport;
    report:constraint <urn:uuid:15416af8-e23d-4b00-b559-5443b93a00d7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e230658f-5c17-4951-b1fa-22a178a17d9e> a report:ConstraintReport;
    report:constraint <urn:uuid:fb999066-2b8c-4be0-8e08-7080709b1ef9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8bb23d42-fbe2-41d6-aaee-70ea4d587c4f>, <urn:uuid:a5e6a43e-17a2-40ce-b9bf-7c29ed4952be>.
<urn:uuid:8bb23d42-fbe2-41d6-aaee-70ea4d587c4f> a report:ConstraintReport;
    report:constraint <urn:uuid:39c23371-7f53-4706-a3da-efbd3efcbeb5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a5e6a43e-17a2-40ce-b9bf-7c29ed4952be> a report:ConstraintReport;
    report:constraint <urn:uuid:9ce0cefe-092d-4c9e-a88e-7ac80b8c7d9e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c0abcdf0-feeb-49d3-87ad-d2f54a8a0113> a report:ConstraintReport;
    report:constraint <urn:uuid:3cb893f3-c716-4ac1-9ee0-78c63cffcd58>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2759fb00-7521-4722-9a7f-de07369dcf4c>, <urn:uuid:71aa5c7f-5b29-4b9a-a174-47ff6900eece>.
<urn:uuid:2759fb00-7521-4722-9a7f-de07369dcf4c> a report:ConstraintReport;
    report:constraint <urn:uuid:96441b96-045c-45b7-920a-e34d93392352>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:71aa5c7f-5b29-4b9a-a174-47ff6900eece> a report:ConstraintReport;
    report:constraint <urn:uuid:697b25e5-1444-4002-9222-23145113b2a0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4f57f6e8-2c6a-46ce-bd64-c92ea8fe0f7e> a report:ConstraintReport;
    report:constraint <urn:uuid:8174c09d-2d7d-42df-99ce-d3a1fccd60a4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:635338be-02f9-4138-941b-b34a908156e2>, <urn:uuid:cd4d19c6-d865-47d9-b285-04033cb456f7>.
<urn:uuid:635338be-02f9-4138-941b-b34a908156e2> a report:ConstraintReport;
    report:constraint <urn:uuid:ad04bdc5-d6e0-4144-acb3-7722f60fbc45>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cd4d19c6-d865-47d9-b285-04033cb456f7> a report:ConstraintReport;
    report:constraint <urn:uuid:1cb9c410-3a0a-436f-809c-99e939ad8e6a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:95bc6ba7-1ec6-4d50-9f21-6a713d8aae27> a report:ConstraintReport;
    report:constraint <urn:uuid:f2f109b4-d9ac-4e41-9500-1303e5a942bb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0730e835-cda5-4b22-be2d-144cbcaa0274>, <urn:uuid:a39be45f-ddb2-41a9-ba06-13eb9a39e30a>.
<urn:uuid:0730e835-cda5-4b22-be2d-144cbcaa0274> a report:ConstraintReport;
    report:constraint <urn:uuid:61078643-f180-4217-81a9-dff46ce9c398>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a39be45f-ddb2-41a9-ba06-13eb9a39e30a> a report:ConstraintReport;
    report:constraint <urn:uuid:6095fd94-dc0a-4e11-af3b-7d40c6fcd8cd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:95d78489-c39b-4da4-afff-40c2b4fe45d3> a report:ConstraintReport;
    report:constraint <urn:uuid:1eba4859-707e-44c6-84ab-615d120c7418>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0d5210ec-7d44-4ca9-8d49-b0ac790b7e51>, <urn:uuid:33df60a8-e3f8-440a-921d-b1873aaf1565>.
<urn:uuid:0d5210ec-7d44-4ca9-8d49-b0ac790b7e51> a report:ConstraintReport;
    report:constraint <urn:uuid:f557b6de-e0df-496e-837f-0edeae557100>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:33df60a8-e3f8-440a-921d-b1873aaf1565> a report:ConstraintReport;
    report:constraint <urn:uuid:6c55ca78-ef0b-40c2-b045-4359531a9aeb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f62066fc-d98f-4cfb-b0df-12c5079bb60b> a report:ConstraintReport;
    report:constraint <urn:uuid:87f8a293-6222-4d6f-9c35-bb996684d814>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e55d7d1f-60f0-4b62-8ffa-b98fc8d56b2d>, <urn:uuid:fcd694bf-bd7a-4dc4-80fc-76a29047f646>.
<urn:uuid:e55d7d1f-60f0-4b62-8ffa-b98fc8d56b2d> a report:ConstraintReport;
    report:constraint <urn:uuid:049fd2ff-08d9-47d7-9213-db28d798922e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:fcd694bf-bd7a-4dc4-80fc-76a29047f646> a report:ConstraintReport;
    report:constraint <urn:uuid:459a32f2-8873-46c8-b620-c320325d1608>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5593f889-6e40-407d-8f11-e1814c191804> a report:ConstraintReport;
    report:constraint <urn:uuid:dfc9b867-fc0d-41d4-898d-a68077cfd165>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8de7ff02-a733-4df3-b564-d57781cc4989>, <urn:uuid:1100b972-e41e-4355-ad10-c76c5dbf6c36>.
<urn:uuid:8de7ff02-a733-4df3-b564-d57781cc4989> a report:ConstraintReport;
    report:constraint <urn:uuid:501ead2b-7704-41ba-accb-1a33a6d8df15>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1100b972-e41e-4355-ad10-c76c5dbf6c36> a report:ConstraintReport;
    report:constraint <urn:uuid:af238321-6de8-4636-8843-e349752f2935>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7f2377cf-0fc1-4e9f-bc18-ef6bbc919d70> a report:ConstraintReport;
    report:constraint <urn:uuid:7eeee0e5-4ffb-4514-b7c5-085a9cbb3e4f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2ec31cc0-57eb-4c2e-bed0-fb7d92532e34>, <urn:uuid:d6044d9f-b1ba-417c-8e12-6966ba14d059>.
<urn:uuid:2ec31cc0-57eb-4c2e-bed0-fb7d92532e34> a report:ConstraintReport;
    report:constraint <urn:uuid:377d4dc3-0b41-4787-a13d-5ff239da8c12>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d6044d9f-b1ba-417c-8e12-6966ba14d059> a report:ConstraintReport;
    report:constraint <urn:uuid:fcd3ce98-af2a-461d-8911-979898498544>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c54b84f6-41ad-495e-96d3-8f5b7bf9c003> a report:ConstraintReport;
    report:constraint <urn:uuid:2a2bc816-ce9e-4b41-959d-5a2bcf3f6b01>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9ea29e0c-3d3e-44f2-a231-cb0e5262dcae>, <urn:uuid:e0794396-50af-48f5-94b8-bf658b29a9d2>.
<urn:uuid:9ea29e0c-3d3e-44f2-a231-cb0e5262dcae> a report:ConstraintReport;
    report:constraint <urn:uuid:cf4d1090-0132-4f74-a6fa-25e5719ae276>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e0794396-50af-48f5-94b8-bf658b29a9d2> a report:ConstraintReport;
    report:constraint <urn:uuid:4d824ade-4af1-4f6d-9069-348c4075f2f5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dde5bfaf-f00d-4446-af74-949c1d9f3646> a report:ConstraintReport;
    report:constraint <urn:uuid:a48b06b7-de3b-4fa9-93c6-2bdc856b1391>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:abd092c3-cd25-45e9-9d51-f3b43312999a>, <urn:uuid:cb6cd0b7-af38-4acf-b0d0-6b91c071279a>.
<urn:uuid:abd092c3-cd25-45e9-9d51-f3b43312999a> a report:ConstraintReport;
    report:constraint <urn:uuid:eb64dfcf-dda3-4367-a50d-3ca9280cbb7c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cb6cd0b7-af38-4acf-b0d0-6b91c071279a> a report:ConstraintReport;
    report:constraint <urn:uuid:434018fe-bf8d-4452-b84f-2462d08a6226>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1f518daf-8016-4e99-abf5-a7ff12454807> a report:ConstraintReport;
    report:constraint <urn:uuid:69be343c-30f3-441e-92da-4414c7263ebb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8ae57033-cef6-4c79-a1ee-ae5eb146ae89>, <urn:uuid:a2120ca2-85f2-4bd6-baf4-82654c717297>.
<urn:uuid:8ae57033-cef6-4c79-a1ee-ae5eb146ae89> a report:ConstraintReport;
    report:constraint <urn:uuid:31099c2e-4d85-49c0-baa7-54aff8d050cc>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a2120ca2-85f2-4bd6-baf4-82654c717297> a report:ConstraintReport;
    report:constraint <urn:uuid:0bf1929d-30f0-4833-bbd1-4dd46dcb4d98>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a4f2c3ad-ee94-41c6-919c-5d09a1fe50e6> a report:ConstraintReport;
    report:constraint <urn:uuid:219f1191-9d15-4061-9007-68e0be24b6b1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2dd65298-ffe8-48e5-aebe-98816625195a>, <urn:uuid:21e7779c-80b9-484a-be10-2afbc4f6186f>.
<urn:uuid:2dd65298-ffe8-48e5-aebe-98816625195a> a report:ConstraintReport;
    report:constraint <urn:uuid:26497974-3474-443b-bf50-0ef678821bbf>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:21e7779c-80b9-484a-be10-2afbc4f6186f> a report:ConstraintReport;
    report:constraint <urn:uuid:850c4b5d-3aa2-47b7-9432-206dae6ba724>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ae721dbe-5f96-4a1e-908d-583882867769> a report:ConstraintReport;
    report:constraint <urn:uuid:b45f9ed9-383e-4580-aa46-33bbdcb49eaf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1f10cfdf-5e35-4da0-85f6-09eee6a989c5>, <urn:uuid:0eb7a3c4-411f-476e-a1d7-4dcbd5d3d2f7>.
<urn:uuid:1f10cfdf-5e35-4da0-85f6-09eee6a989c5> a report:ConstraintReport;
    report:constraint <urn:uuid:d257d830-9171-46d6-9b8d-c10d6ebb815d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0eb7a3c4-411f-476e-a1d7-4dcbd5d3d2f7> a report:ConstraintReport;
    report:constraint <urn:uuid:f4487552-4790-4bf3-99c7-3d2fdc0730f8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:38fd1cc5-387a-4247-965f-437f9c901467> a report:ConstraintReport;
    report:constraint <urn:uuid:93fe924e-d433-4680-993c-1dd6aadd8406>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9f9df31f-e12b-4c30-8bca-294e74a56437>, <urn:uuid:cd7ac3b8-de32-45a1-ab61-e09dbbd10807>.
<urn:uuid:9f9df31f-e12b-4c30-8bca-294e74a56437> a report:ConstraintReport;
    report:constraint <urn:uuid:2f762c7e-52ac-4434-ab9c-9c36978d5b19>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:cd7ac3b8-de32-45a1-ab61-e09dbbd10807> a report:ConstraintReport;
    report:constraint <urn:uuid:616fdc6b-8e56-4130-b347-a99e046c6309>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dc5522f3-bd10-4c60-b1f2-09da86ccc783> a report:ConstraintReport;
    report:constraint <urn:uuid:26bca22d-c7f7-45cf-965a-cb25b18f5e12>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e90c4790-28d9-4517-bcc5-2262ee0451be>, <urn:uuid:dcf0f70e-d6d9-4e22-98ef-d02b3c196369>.
<urn:uuid:e90c4790-28d9-4517-bcc5-2262ee0451be> a report:ConstraintReport;
    report:constraint <urn:uuid:4d33a62c-0fd9-4935-bc02-ebaddd948343>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dcf0f70e-d6d9-4e22-98ef-d02b3c196369> a report:ConstraintReport;
    report:constraint <urn:uuid:89f23515-ce5f-404c-a25a-7bf4b1683187>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:562d0f38-726c-4c40-816c-b261644e6678> a report:ConstraintReport;
    report:constraint <urn:uuid:5b437f68-c233-4340-9d68-bd8f90938c28>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:80baf376-8e46-4d20-84d3-43bc42087fc6>, <urn:uuid:5adcc3a0-1c32-4a42-ac3e-402b114a5376>.
<urn:uuid:80baf376-8e46-4d20-84d3-43bc42087fc6> a report:ConstraintReport;
    report:constraint <urn:uuid:5701655a-fcc2-4b55-8362-5713fa280857>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5adcc3a0-1c32-4a42-ac3e-402b114a5376> a report:ConstraintReport;
    report:constraint <urn:uuid:50ac39a9-4262-4e66-a8f3-1829b1ebbc7a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:69836efe-5b54-4054-9737-7d24b56f9a88> a report:ConstraintReport;
    report:constraint <urn:uuid:701a1f06-f867-4edb-a3b9-d471b0b8265c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:33f1b52d-636a-4dd5-ba6e-e9193c189992>, <urn:uuid:898aecff-1454-45ca-96d7-71a799d03e7f>.
<urn:uuid:33f1b52d-636a-4dd5-ba6e-e9193c189992> a report:ConstraintReport;
    report:constraint <urn:uuid:9d79f5f4-bb7d-4218-a96c-6d52347ae95f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:898aecff-1454-45ca-96d7-71a799d03e7f> a report:ConstraintReport;
    report:constraint <urn:uuid:e8a02c26-e562-42f8-89cc-0d2459507ad6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:da745eed-9e8e-4988-85e9-8a86afd37ccd> a report:ConstraintReport;
    report:constraint <urn:uuid:068de183-3d3b-4f38-9769-1007f978524e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f9c977d8-d2f9-4e0d-815b-646b0a35ab14>, <urn:uuid:50759003-51e5-4a05-8c5b-b9160bbb762e>.
<urn:uuid:f9c977d8-d2f9-4e0d-815b-646b0a35ab14> a report:ConstraintReport;
    report:constraint <urn:uuid:806a4725-31ab-461e-b17d-692abf48bcce>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:50759003-51e5-4a05-8c5b-b9160bbb762e> a report:ConstraintReport;
    report:constraint <urn:uuid:53b4acb6-b122-4344-9c93-631c71e7a27e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bfe2ce77-ea52-4cdb-bded-3f35925e389e> a report:ConstraintReport;
    report:constraint <urn:uuid:134563e3-0314-44ce-bd44-7c9796d8dcc2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c80eaf42-4793-451c-8351-3d0e517ce34a>, <urn:uuid:31fc19f4-b515-4327-b9b2-e0b48b6baeda>.
<urn:uuid:c80eaf42-4793-451c-8351-3d0e517ce34a> a report:ConstraintReport;
    report:constraint <urn:uuid:bb49138d-5033-475a-b53c-c009e0709a86>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:31fc19f4-b515-4327-b9b2-e0b48b6baeda> a report:ConstraintReport;
    report:constraint <urn:uuid:c779cf86-014a-42b6-bd8f-9223e4041e4e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4287fd48-2583-4c36-b51c-f72f6ef5aeb8> a report:ConstraintReport;
    report:constraint <urn:uuid:9d3d4dbb-46eb-4d0a-8ae6-a44c703e04fc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3b54a77d-fd71-46cd-b725-d5b75536b389>, <urn:uuid:9b33d10f-87ea-4bc0-a769-8adb3f6b5ef7>.
<urn:uuid:3b54a77d-fd71-46cd-b725-d5b75536b389> a report:ConstraintReport;
    report:constraint <urn:uuid:73a013e2-a88d-44d0-be21-d69bc67230a3>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:9b33d10f-87ea-4bc0-a769-8adb3f6b5ef7> a report:ConstraintReport;
    report:constraint <urn:uuid:4cbc0742-fbda-4d1a-802b-ffe96a2c2d41>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f27fdea6-6b2f-4853-a861-1a7a6b5e4126> a report:ConstraintReport;
    report:constraint <urn:uuid:778cf6cb-3945-41d1-9d65-8476c2efce85>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ef989dcd-457e-42ce-9bc0-627cf9f2c3f0>, <urn:uuid:d53ba018-4f95-427e-91d1-2075a3f46f23>.
<urn:uuid:ef989dcd-457e-42ce-9bc0-627cf9f2c3f0> a report:ConstraintReport;
    report:constraint <urn:uuid:f813167b-73e8-4a08-8642-40b87a8b1140>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-01T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:d53ba018-4f95-427e-91d1-2075a3f46f23> a report:ConstraintReport;
    report:constraint <urn:uuid:d6a96d8a-5d2f-4abd-aec2-ecc17b1d2b19>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:336116e8-d17c-4dbe-985a-0d8e75314504> a report:ConstraintReport;
    report:constraint <urn:uuid:a2b733a3-89e8-4f81-a954-fefc0e29072e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fc541ee0-62c5-4740-a36f-d963c90296ae>, <urn:uuid:5b15f74e-addc-4c64-a681-137dc27a55c8>.
<urn:uuid:fc541ee0-62c5-4740-a36f-d963c90296ae> a report:ConstraintReport;
    report:constraint <urn:uuid:7119129c-ea4c-4c95-9aed-df0527bb1dcf>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5b15f74e-addc-4c64-a681-137dc27a55c8> a report:ConstraintReport;
    report:constraint <urn:uuid:c9fe1107-48ef-4bb1-ae69-c16a66736208>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6666e93c-ed9d-407c-a1d2-0afa8eec7d33> a report:ConstraintReport;
    report:constraint <urn:uuid:9ef3e970-701b-4f7e-a7cb-c6aa5a2efaef>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f7e6b68f-b09a-4221-8a80-16e2b6c2eec3>, <urn:uuid:034f4c0c-3c92-4049-a6f5-495b38869ef8>.
<urn:uuid:f7e6b68f-b09a-4221-8a80-16e2b6c2eec3> a report:ConstraintReport;
    report:constraint <urn:uuid:fde8c379-f0c5-4bb7-97ef-1d700c7bb7ba>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:034f4c0c-3c92-4049-a6f5-495b38869ef8> a report:ConstraintReport;
    report:constraint <urn:uuid:9183147a-f8dc-4dea-b67a-82e74267c474>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2f136621-60f1-4699-82e5-349ad463188b> a report:ConstraintReport;
    report:constraint <urn:uuid:eaa436c6-0904-452a-b0e1-41bc185a0a71>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c77a50aa-d56b-46cd-a007-bfd7751a99d6>, <urn:uuid:f7634a6d-b7fe-4b4c-85a3-0ad4319e09a5>.
<urn:uuid:c77a50aa-d56b-46cd-a007-bfd7751a99d6> a report:ConstraintReport;
    report:constraint <urn:uuid:53d930f3-a334-4e95-a3f9-b2adda37aa3e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:f7634a6d-b7fe-4b4c-85a3-0ad4319e09a5> a report:ConstraintReport;
    report:constraint <urn:uuid:df78cb77-e3d3-4a4e-aa8f-effa9e158eb9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d94e2451-b156-47b5-a6d8-12ae0aba81d2> a report:ConstraintReport;
    report:constraint <urn:uuid:bc44fecb-3934-4fff-8ae3-6b04fb45f7f5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:15df9c68-08a4-41fb-8341-f1a53ea8f6a2>, <urn:uuid:c88279b1-098d-41ee-8c48-84706782f836>.
<urn:uuid:15df9c68-08a4-41fb-8341-f1a53ea8f6a2> a report:ConstraintReport;
    report:constraint <urn:uuid:501cd48e-77ae-4f09-8746-3bde8af045f9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-07T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:c88279b1-098d-41ee-8c48-84706782f836> a report:ConstraintReport;
    report:constraint <urn:uuid:adf4e46b-8f23-4dda-b85b-146b4a059e01>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c23c6aed-14d2-459c-b660-3173c9e78d10> a report:ConstraintReport;
    report:constraint <urn:uuid:957bfa67-4996-4fc9-95a9-636a4f2b743f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8d5867ed-9116-41d1-8370-b8fe9d40b5a7>, <urn:uuid:3c29d480-1e95-4e66-894f-d9ac0d818412>.
<urn:uuid:8d5867ed-9116-41d1-8370-b8fe9d40b5a7> a report:ConstraintReport;
    report:constraint <urn:uuid:ea28d837-3993-4166-ab3d-aceed0611354>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-08T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3c29d480-1e95-4e66-894f-d9ac0d818412> a report:ConstraintReport;
    report:constraint <urn:uuid:92eb8064-54de-498e-b32f-3509247e99b1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7b26ba38-b9d9-437d-8727-a3907eac1796> a report:ConstraintReport;
    report:constraint <urn:uuid:9c6ec92b-4df8-4996-b92f-e1bd63a7f5b1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fd60c09a-0a49-4a49-a4a8-a0eb08c725f8>, <urn:uuid:2ed12d9e-ef61-49d9-bc6b-94594b175e22>.
<urn:uuid:fd60c09a-0a49-4a49-a4a8-a0eb08c725f8> a report:ConstraintReport;
    report:constraint <urn:uuid:958b73bf-9c7b-46e5-9547-3828cac85ad1>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:2ed12d9e-ef61-49d9-bc6b-94594b175e22> a report:ConstraintReport;
    report:constraint <urn:uuid:488ca938-e5ef-4b2b-97c5-8c47ef66d24e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8d0fe307-c918-4972-9eb7-f1700492ae0e> a report:ConstraintReport;
    report:constraint <urn:uuid:f0d083f6-499c-4ec6-b50f-cf494abfb2f3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:78c19271-b6bc-4bc5-bfc2-5520ddb20dbd>, <urn:uuid:289b4a4d-e2b8-4c8f-83f0-82df6cd120ca>.
<urn:uuid:78c19271-b6bc-4bc5-bfc2-5520ddb20dbd> a report:ConstraintReport;
    report:constraint <urn:uuid:7aa662e7-7e90-42c8-96e9-284ac25dc35c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:289b4a4d-e2b8-4c8f-83f0-82df6cd120ca> a report:ConstraintReport;
    report:constraint <urn:uuid:502816a9-b6f4-4d10-b37f-14443de6654f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:83a59e79-1965-40ff-9f74-f3c9c508f8a0> a report:ConstraintReport;
    report:constraint <urn:uuid:b41c49b3-26f3-4560-934c-0e80d21632ec>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f8a21e8b-9638-473b-9117-97adc0109072>, <urn:uuid:ab4ae5ea-cb5e-4417-bbdc-c9518dc1a59e>.
<urn:uuid:f8a21e8b-9638-473b-9117-97adc0109072> a report:ConstraintReport;
    report:constraint <urn:uuid:d7b704f6-e8f1-4aec-8f39-bf8638f3fcf2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ab4ae5ea-cb5e-4417-bbdc-c9518dc1a59e> a report:ConstraintReport;
    report:constraint <urn:uuid:6f7a8878-21b4-488b-b0a8-7709ccfdea84>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:40305cbf-b645-4fdd-a383-bb5a947ccf62> a report:ConstraintReport;
    report:constraint <urn:uuid:7a225779-fcf2-4897-9286-bd999e707822>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:296e38a4-8124-42ac-99d5-753255b25a81>, <urn:uuid:4b922681-044d-4b96-84b9-d88152b10eeb>.
<urn:uuid:296e38a4-8124-42ac-99d5-753255b25a81> a report:ConstraintReport;
    report:constraint <urn:uuid:5c9b1927-28a0-4da3-a207-9fbad71d189f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-14T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4b922681-044d-4b96-84b9-d88152b10eeb> a report:ConstraintReport;
    report:constraint <urn:uuid:4f51eb43-5b15-4b9a-8a73-a08f7c1edf2e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:97be4fbd-9bcf-4354-8e19-bd18cf3fef2b> a report:ConstraintReport;
    report:constraint <urn:uuid:a8cca86c-e932-47a7-85fa-e7befcb3c6e0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:36e45e9a-55fd-4f27-be72-286d90763388>, <urn:uuid:07dccc0c-b562-4616-a178-4502cd210793>.
<urn:uuid:36e45e9a-55fd-4f27-be72-286d90763388> a report:ConstraintReport;
    report:constraint <urn:uuid:0d45f580-1eaa-4459-a991-d91ef0f36d5a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-15T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:07dccc0c-b562-4616-a178-4502cd210793> a report:ConstraintReport;
    report:constraint <urn:uuid:0243300e-8615-40c3-905a-ec16f3268ca8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7d414161-76e4-4302-b4e4-827390a3bfe7> a report:ConstraintReport;
    report:constraint <urn:uuid:50ef2f36-3080-4473-81d5-ebaf466720fd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ea66a76a-7349-499d-9cd5-05100e7a335d>, <urn:uuid:dbd9f12f-b276-46d5-bcd7-c38bce232f3c>.
<urn:uuid:ea66a76a-7349-499d-9cd5-05100e7a335d> a report:ConstraintReport;
    report:constraint <urn:uuid:59c52fba-af5c-4f28-bb50-869dafd499f7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:dbd9f12f-b276-46d5-bcd7-c38bce232f3c> a report:ConstraintReport;
    report:constraint <urn:uuid:3fe6455e-32fc-4663-be7a-f7168cda838a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:79e7863a-c19e-4357-9c22-5f2a91e1c29e> a report:ConstraintReport;
    report:constraint <urn:uuid:fdd857e3-4be4-44fb-8fd1-8b7ac89209e3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d57190fd-5a20-4c92-ae13-d3ac7d8e69e3>, <urn:uuid:50879658-f688-4351-9152-d09cd696cef8>.
<urn:uuid:d57190fd-5a20-4c92-ae13-d3ac7d8e69e3> a report:ConstraintReport;
    report:constraint <urn:uuid:ea9e70c0-9aa0-4fc3-9edd-6beaab2cf602>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:50879658-f688-4351-9152-d09cd696cef8> a report:ConstraintReport;
    report:constraint <urn:uuid:8c361160-41c3-4129-8596-08ba0363a89b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:53aeac0b-18e1-4f7a-a3ca-ffc69a657389> a report:ConstraintReport;
    report:constraint <urn:uuid:fc60793d-9d4c-4a96-b432-2467049085aa>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:01a5116c-77da-4059-b6f2-35a5f2896fc9>, <urn:uuid:3d8945c9-cd54-4370-99b7-d997d39cae4d>.
<urn:uuid:01a5116c-77da-4059-b6f2-35a5f2896fc9> a report:ConstraintReport;
    report:constraint <urn:uuid:eae63486-6ad8-414e-a547-04ea466d4b93>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:3d8945c9-cd54-4370-99b7-d997d39cae4d> a report:ConstraintReport;
    report:constraint <urn:uuid:c3b23283-e054-4cb4-95bb-947d001d5ff4>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0995f766-a372-4f80-be72-417bfe279f9f> a report:ConstraintReport;
    report:constraint <urn:uuid:c562d65c-598f-4802-afec-1d4b9da76053>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:83114b8a-dbfa-45dc-a1bb-7c288a71e418>, <urn:uuid:33da3b9b-f0c9-4595-b3a3-725a1ee974b4>.
<urn:uuid:83114b8a-dbfa-45dc-a1bb-7c288a71e418> a report:ConstraintReport;
    report:constraint <urn:uuid:48ee8f69-ab79-4b21-8f90-975f42c08633>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-21T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:33da3b9b-f0c9-4595-b3a3-725a1ee974b4> a report:ConstraintReport;
    report:constraint <urn:uuid:9ad2d407-b289-4e79-94d8-d53ae7a36b47>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4d48dfb0-c18e-416f-aa84-92dd722393e7> a report:ConstraintReport;
    report:constraint <urn:uuid:636fd4c9-f929-4d9f-8cb9-9aa7c4dd0c23>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1086237d-3f89-48d5-8d01-18e89b0014a0>, <urn:uuid:5c068f7f-02d2-40ce-ab73-0b3b47f2982a>.
<urn:uuid:1086237d-3f89-48d5-8d01-18e89b0014a0> a report:ConstraintReport;
    report:constraint <urn:uuid:220e4eac-99e4-45b0-a96c-e5b0583d36be>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-22T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5c068f7f-02d2-40ce-ab73-0b3b47f2982a> a report:ConstraintReport;
    report:constraint <urn:uuid:a841f80e-e4e3-4e70-b631-fb8188250058>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ee5a971c-f357-4074-84af-c5e228b4a43a> a report:ConstraintReport;
    report:constraint <urn:uuid:662d1f4f-bf9d-4a80-ae6b-c3eb2584c344>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cb70cb61-7211-457a-a1aa-88372e89b44c>, <urn:uuid:131b3995-5604-4186-b716-7a9baea67b22>.
<urn:uuid:cb70cb61-7211-457a-a1aa-88372e89b44c> a report:ConstraintReport;
    report:constraint <urn:uuid:99dc7e13-0335-436d-a879-150d0525cbdf>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:131b3995-5604-4186-b716-7a9baea67b22> a report:ConstraintReport;
    report:constraint <urn:uuid:1eb99780-6dd7-4e0e-84d7-cf3055bff7d0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f665c039-beeb-4746-a6c6-37a29641bfd6> a report:ConstraintReport;
    report:constraint <urn:uuid:d9453fa8-8c91-492d-ae9b-2d008d6670a2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:96f9a098-61ff-40b7-9943-beaa0c25b359>, <urn:uuid:4bf837b4-ea9e-4703-a163-dbac711c3c69>.
<urn:uuid:96f9a098-61ff-40b7-9943-beaa0c25b359> a report:ConstraintReport;
    report:constraint <urn:uuid:37263a47-af3d-4d27-aa83-43fb8e059197>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4bf837b4-ea9e-4703-a163-dbac711c3c69> a report:ConstraintReport;
    report:constraint <urn:uuid:724350fb-cfa8-4a0c-9ea4-bc1563d50a76>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:15e92bf9-9eb4-44c1-a9b5-1152cad3ddd2> a report:ConstraintReport;
    report:constraint <urn:uuid:64e4b11b-2c26-46a9-88db-347b386c1999>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4a8704aa-865a-4d19-a44c-b32212caa8f8>, <urn:uuid:4844c725-372f-4ceb-8830-50dca787f08d>.
<urn:uuid:4a8704aa-865a-4d19-a44c-b32212caa8f8> a report:ConstraintReport;
    report:constraint <urn:uuid:c2fc04e3-52fe-43ac-b0ed-5a40818ab3e6>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:4844c725-372f-4ceb-8830-50dca787f08d> a report:ConstraintReport;
    report:constraint <urn:uuid:8aae4288-f074-4382-ada4-c113b96476f9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3bdbd0ea-28d5-4659-ac3e-6e847d8f36c8> a report:ConstraintReport;
    report:constraint <urn:uuid:38413bf0-11f3-4877-914a-96ccf6c59aab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b284bd80-4069-45b4-8046-14af396ae19d>, <urn:uuid:5fca7f2f-b3a5-4671-a2f1-8bf83a22ef77>.
<urn:uuid:b284bd80-4069-45b4-8046-14af396ae19d> a report:ConstraintReport;
    report:constraint <urn:uuid:07cf50ff-5ac8-43d2-b045-402b50f817e5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-28T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:5fca7f2f-b3a5-4671-a2f1-8bf83a22ef77> a report:ConstraintReport;
    report:constraint <urn:uuid:141f8880-ca7f-4b1f-8ddc-8dc4b077cc9f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3c6613e3-aea0-4691-9d95-dccafb006ed7> a report:ConstraintReport;
    report:constraint <urn:uuid:7be61257-458a-4fb6-b0f2-b52d3f577c83>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:dca4bf3a-fab6-4bba-9993-ab7cbd6389f3>, <urn:uuid:363b728a-9d90-4275-82e4-dfdd012190af>.
<urn:uuid:dca4bf3a-fab6-4bba-9993-ab7cbd6389f3> a report:ConstraintReport;
    report:constraint <urn:uuid:e33ccd56-6f79-425d-acd7-cf76007dbca7>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-29T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:363b728a-9d90-4275-82e4-dfdd012190af> a report:ConstraintReport;
    report:constraint <urn:uuid:fee20948-6492-411c-9539-2d55581b7e56>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:98fe9bb8-7a3f-4289-8a62-a9e6a478803e> a report:ConstraintReport;
    report:constraint <urn:uuid:3baee5f7-6433-4381-9106-4af816a512fd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e7b24872-6e57-4d23-bbfd-5583929b212f>, <urn:uuid:76580115-136c-4388-b53c-dd4216f0ca1f>.
<urn:uuid:e7b24872-6e57-4d23-bbfd-5583929b212f> a report:ConstraintReport;
    report:constraint <urn:uuid:7ec5b3e0-53ec-4adc-a353-64752da31234>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-02T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:76580115-136c-4388-b53c-dd4216f0ca1f> a report:ConstraintReport;
    report:constraint <urn:uuid:f409a24f-863b-4fbe-8877-9b1baba517f8>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:68802be6-b862-42cd-b6c6-40c8a82b0b1f> a report:ConstraintReport;
    report:constraint <urn:uuid:44ae9166-531c-4415-a62f-655a6cea9d01>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e37da42a-d217-4e4f-bbac-8b0370703ebd>, <urn:uuid:7570b74a-2eb3-4c51-92be-7107a9ad5378>.
<urn:uuid:e37da42a-d217-4e4f-bbac-8b0370703ebd> a report:ConstraintReport;
    report:constraint <urn:uuid:79e2e81c-d3dc-40b0-9e7d-86e1e4a8ab81>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-03T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:7570b74a-2eb3-4c51-92be-7107a9ad5378> a report:ConstraintReport;
    report:constraint <urn:uuid:b08fe21a-d41d-4deb-a46e-3ab4add6ea12>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cc8cd6fb-9b86-4683-a480-faa3991d8b1b> a report:ConstraintReport;
    report:constraint <urn:uuid:b8c7fbfe-4b16-4dea-b08c-1268cc7e1eb1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:317365ff-37d7-4305-97da-7fedf45418a0>, <urn:uuid:909541d9-47f2-4d1f-8adb-0225598b93b6>.
<urn:uuid:317365ff-37d7-4305-97da-7fedf45418a0> a report:ConstraintReport;
    report:constraint <urn:uuid:0edbe8b8-2f48-4a6d-b15a-16676e12362e>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-04T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:909541d9-47f2-4d1f-8adb-0225598b93b6> a report:ConstraintReport;
    report:constraint <urn:uuid:b0dda4fa-ad32-433e-a183-1f5ed338af6a>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3e7820c6-1dcb-4897-b586-10ed190a5d12> a report:ConstraintReport;
    report:constraint <urn:uuid:ef4fdae7-207b-45ec-a4db-b6fbf69e809f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3d9e0fda-358f-4290-9eda-0c3ad32cb5ac>, <urn:uuid:795aa2b0-6e91-4c21-bb5f-5a1efb106814>.
<urn:uuid:3d9e0fda-358f-4290-9eda-0c3ad32cb5ac> a report:ConstraintReport;
    report:constraint <urn:uuid:002a2fa7-bc84-4072-9c49-a765d7edfcc2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-05T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:795aa2b0-6e91-4c21-bb5f-5a1efb106814> a report:ConstraintReport;
    report:constraint <urn:uuid:c6dcb1fa-4f55-4992-a450-7f1f1b2db837>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:531c311b-bee4-4528-bbed-52acf99b8bc0> a report:ConstraintReport;
    report:constraint <urn:uuid:e7a41771-8364-43e1-8647-401f37f8e886>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a4bae191-0c1f-406e-8e07-b52f75cf7843>, <urn:uuid:05ab228b-8933-4bc8-b8ef-5465f53160ac>.
<urn:uuid:a4bae191-0c1f-406e-8e07-b52f75cf7843> a report:ConstraintReport;
    report:constraint <urn:uuid:1e573bdd-0219-4302-bf44-f41d797037d5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-06T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:05ab228b-8933-4bc8-b8ef-5465f53160ac> a report:ConstraintReport;
    report:constraint <urn:uuid:d4285515-94b9-4930-b5d1-78ef3f37de64>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4485161c-0608-4060-a754-f77f2eff74bc> a report:ConstraintReport;
    report:constraint <urn:uuid:e27de4ad-8809-470a-864e-6956eab9067f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5930a832-764d-4c34-866a-5e86f9c5adb6>, <urn:uuid:6bded63c-3af2-4177-9a49-2cb2a1c34c11>.
<urn:uuid:5930a832-764d-4c34-866a-5e86f9c5adb6> a report:ConstraintReport;
    report:constraint <urn:uuid:f4a97fed-5e4b-4bff-834e-3fa82050e931>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-09T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6bded63c-3af2-4177-9a49-2cb2a1c34c11> a report:ConstraintReport;
    report:constraint <urn:uuid:01d631bd-2109-4379-80e1-e12ac64f2dff>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a19ca4cd-41e3-4f4c-9ced-5d7ff15e5550> a report:ConstraintReport;
    report:constraint <urn:uuid:3ec09e77-b91a-4217-b789-00f1c6051816>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:964daa35-8b04-4d43-9bd4-d00bf3e2b5e6>, <urn:uuid:e9ba707f-4a08-452e-a594-14d43f275665>.
<urn:uuid:964daa35-8b04-4d43-9bd4-d00bf3e2b5e6> a report:ConstraintReport;
    report:constraint <urn:uuid:159a13f2-79eb-425c-a0a8-5a387182cd80>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-10T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:e9ba707f-4a08-452e-a594-14d43f275665> a report:ConstraintReport;
    report:constraint <urn:uuid:0882154b-3822-4fe0-8a0e-81b0fb8cac6c>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:776cb3df-dabe-4808-976b-64a7b7045bc9> a report:ConstraintReport;
    report:constraint <urn:uuid:653449a3-b32e-43ce-bad2-4ca7b8b43674>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3dc4902c-707d-4507-90ad-7a3b1c76e42d>, <urn:uuid:a01ed600-2fda-4be8-b0f1-ea50b0128e37>.
<urn:uuid:3dc4902c-707d-4507-90ad-7a3b1c76e42d> a report:ConstraintReport;
    report:constraint <urn:uuid:5a7b0cee-18f9-4d96-b7fc-aa0680aab6a4>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-11T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a01ed600-2fda-4be8-b0f1-ea50b0128e37> a report:ConstraintReport;
    report:constraint <urn:uuid:566da207-be3e-45f1-8e60-18a51f0c7e02>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1cc8c59b-f81f-4bad-ad7b-1d260c75e02c> a report:ConstraintReport;
    report:constraint <urn:uuid:5609f832-97cf-4932-9120-7a5d698e8b61>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:afb3f631-9f91-4f8c-9119-a0177687ff10>, <urn:uuid:403680c4-0f0a-495d-82e7-24eb29413502>.
<urn:uuid:afb3f631-9f91-4f8c-9119-a0177687ff10> a report:ConstraintReport;
    report:constraint <urn:uuid:c98be63a-643d-4030-bd32-f4cd1f8e0c99>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-12T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:403680c4-0f0a-495d-82e7-24eb29413502> a report:ConstraintReport;
    report:constraint <urn:uuid:3d74d678-dc20-4dc9-aa21-dd669d32bfff>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f65860e5-c764-44e3-b9e4-cae7cfe514e4> a report:ConstraintReport;
    report:constraint <urn:uuid:99f1ec97-f070-4860-bff3-f23fa5f55946>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:21764165-c254-4ed8-9662-e02832aaccf8>, <urn:uuid:6344add0-b1cb-4106-a2e1-14abbe376d21>.
<urn:uuid:21764165-c254-4ed8-9662-e02832aaccf8> a report:ConstraintReport;
    report:constraint <urn:uuid:e81cf59b-106e-452b-96ea-7a062ebdd712>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-13T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:6344add0-b1cb-4106-a2e1-14abbe376d21> a report:ConstraintReport;
    report:constraint <urn:uuid:db535878-c0b4-41d4-9a0f-80eaabee31bd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:63bb0f3a-34a3-4228-99ef-b85c782dc930> a report:ConstraintReport;
    report:constraint <urn:uuid:df2456bb-3a47-4c13-9a42-443c163a861b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3dd71477-867a-4eea-b340-cae5535ce858>, <urn:uuid:8f8878c8-8b0e-470e-a183-6b71150ba32f>.
<urn:uuid:3dd71477-867a-4eea-b340-cae5535ce858> a report:ConstraintReport;
    report:constraint <urn:uuid:4a354999-d4af-4372-8cc7-bea0689a790f>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-16T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:8f8878c8-8b0e-470e-a183-6b71150ba32f> a report:ConstraintReport;
    report:constraint <urn:uuid:8023654a-1f38-46e2-a67b-7e53d378d401>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4d867e3a-c940-43d1-b250-f67f5c246f83> a report:ConstraintReport;
    report:constraint <urn:uuid:212e9f84-4485-4fbd-a63a-f22ae5d65c45>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:390f8c25-62a8-44ea-a443-a3c433aa027a>, <urn:uuid:bd6bc610-6027-4799-a8f6-861be242853c>.
<urn:uuid:390f8c25-62a8-44ea-a443-a3c433aa027a> a report:ConstraintReport;
    report:constraint <urn:uuid:d47551d1-f940-4885-8afa-25848f54b401>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-17T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:bd6bc610-6027-4799-a8f6-861be242853c> a report:ConstraintReport;
    report:constraint <urn:uuid:d6fc72f1-2399-4c19-b283-f3a5c92c6a8b>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:29b73c01-4499-4075-80db-b1bf2a731608> a report:ConstraintReport;
    report:constraint <urn:uuid:1f10b2d8-0fc8-4dd9-b0cf-c07e1080a7df>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f6a01686-f17d-441a-b968-ce29787656bf>, <urn:uuid:b7b75cfb-8f64-4ba7-9b6f-48bc6af56378>.
<urn:uuid:f6a01686-f17d-441a-b968-ce29787656bf> a report:ConstraintReport;
    report:constraint <urn:uuid:d53d4ad1-ba1a-4bb1-93e4-6d0e69b8b0d0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-18T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:b7b75cfb-8f64-4ba7-9b6f-48bc6af56378> a report:ConstraintReport;
    report:constraint <urn:uuid:5c9b57e8-1a8a-44ca-8080-848cc6fed6d9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d6f1e470-ccc1-4f02-9e53-18afb187ef87> a report:ConstraintReport;
    report:constraint <urn:uuid:3c4108b3-5cfc-45ee-af03-f01c2cb86c9f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:af117434-8b57-4f07-a425-34d7ea274c5b>, <urn:uuid:93aa9c40-532e-46c8-9c8a-21d2c7d5b4fe>.
<urn:uuid:af117434-8b57-4f07-a425-34d7ea274c5b> a report:ConstraintReport;
    report:constraint <urn:uuid:04376193-751a-4988-9990-869e4f6ba277>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-19T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:93aa9c40-532e-46c8-9c8a-21d2c7d5b4fe> a report:ConstraintReport;
    report:constraint <urn:uuid:0b77dd6d-7760-4474-a6ab-76d0a748dc34>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e51a1bb8-b852-489f-b933-be5f0f877860> a report:ConstraintReport;
    report:constraint <urn:uuid:f9e0ce4a-7246-47ae-b251-b620a276b3ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ce50b1a1-fa25-4fc7-b32b-1db11ac0396d>, <urn:uuid:1e09fa04-e598-4851-b9cb-fd03ba2623ad>.
<urn:uuid:ce50b1a1-fa25-4fc7-b32b-1db11ac0396d> a report:ConstraintReport;
    report:constraint <urn:uuid:3a792116-6d64-4a5d-b24e-e52281d6e1dd>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-20T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:1e09fa04-e598-4851-b9cb-fd03ba2623ad> a report:ConstraintReport;
    report:constraint <urn:uuid:7bfc1bd8-df75-48fa-a696-c33621f90de2>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:91c0b3f3-850c-4256-98ad-513c917f9fc5> a report:ConstraintReport;
    report:constraint <urn:uuid:9e95cad6-95bf-4497-a3bc-9a4d54576226>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:aebd6852-43a2-4448-a46e-48bf7ec3cf32>, <urn:uuid:12eb7f72-c535-4835-a825-724df8733136>.
<urn:uuid:aebd6852-43a2-4448-a46e-48bf7ec3cf32> a report:ConstraintReport;
    report:constraint <urn:uuid:6d2eb216-41d1-4a75-899a-3315959ce4c0>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-23T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:12eb7f72-c535-4835-a825-724df8733136> a report:ConstraintReport;
    report:constraint <urn:uuid:4165a9f3-8548-443e-b7ef-c3bdce7aa407>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8f9f8dc0-ea4b-4067-87f6-5ae523fdb68c> a report:ConstraintReport;
    report:constraint <urn:uuid:88c0a344-a509-4140-a039-691fe86311d1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:57501496-f84a-4a2d-912b-2d60a70d7d54>, <urn:uuid:ddc44577-9aeb-4171-ac17-97d4762fa049>.
<urn:uuid:57501496-f84a-4a2d-912b-2d60a70d7d54> a report:ConstraintReport;
    report:constraint <urn:uuid:be96abcd-fdba-4a4e-83c3-684b23143c88>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-24T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:ddc44577-9aeb-4171-ac17-97d4762fa049> a report:ConstraintReport;
    report:constraint <urn:uuid:d72d5d7f-072c-49d9-94a4-43e0a722a721>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:95b47e73-8555-48e5-99b4-bb2a7106879d> a report:ConstraintReport;
    report:constraint <urn:uuid:cdc19240-6380-423e-a367-5dc1fa7d8358>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:96b9c52f-edf3-4e73-8eee-be21b7d31a29>, <urn:uuid:a3591179-8b76-4725-91cf-a817a0b4fe69>.
<urn:uuid:96b9c52f-edf3-4e73-8eee-be21b7d31a29> a report:ConstraintReport;
    report:constraint <urn:uuid:84d1432d-4215-4d48-85c1-eae07de564ae>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-25T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:a3591179-8b76-4725-91cf-a817a0b4fe69> a report:ConstraintReport;
    report:constraint <urn:uuid:07166646-98d3-43c2-92e9-62efbb3c93ac>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:27fcf766-1aa0-4da0-8d23-b0ee90aa9305> a report:ConstraintReport;
    report:constraint <urn:uuid:a7622a4e-402c-4c9b-90a7-f48c07287ea0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:338fec97-880a-4e59-9de9-ad7ece5a442a>, <urn:uuid:aa74ddde-2851-41e1-bcc2-5010412e6585>.
<urn:uuid:338fec97-880a-4e59-9de9-ad7ece5a442a> a report:ConstraintReport;
    report:constraint <urn:uuid:83bed457-d0bc-43ba-ba3e-0223439d8023>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-26T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:aa74ddde-2851-41e1-bcc2-5010412e6585> a report:ConstraintReport;
    report:constraint <urn:uuid:a228d0c0-1ae8-4bd3-9ad6-c833751f57c9>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4c460025-acc9-4fcd-941e-67352445ddf9> a report:ConstraintReport;
    report:constraint <urn:uuid:b70d3865-fc6e-49e7-9b2c-6850843d5a90>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5606a175-9dcb-4cde-a385-34382ea815cd>, <urn:uuid:aa07a1a0-ee83-4077-9813-3cba1f3d0a8c>.
<urn:uuid:5606a175-9dcb-4cde-a385-34382ea815cd> a report:ConstraintReport;
    report:constraint <urn:uuid:a6848bc3-9f96-4bee-871d-f2c3fc344e67>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-27T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:aa07a1a0-ee83-4077-9813-3cba1f3d0a8c> a report:ConstraintReport;
    report:constraint <urn:uuid:9a24b81b-6f1c-4ae3-a91d-a854aad569cb>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f0b27fe2-8909-44ea-88fd-8e936062f464> a report:ConstraintReport;
    report:constraint <urn:uuid:bcb639ac-7236-4770-b4a3-6209d0e8bf55>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1d2d9359-64b2-44f5-bd89-2cf1ce4d7466>, <urn:uuid:0c615bf6-87f6-4581-a9a9-c9fe02a64ed5>.
<urn:uuid:1d2d9359-64b2-44f5-bd89-2cf1ce4d7466> a report:ConstraintReport;
    report:constraint <urn:uuid:cfd7711d-73f6-4c49-a893-f0de95ed805d>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-30T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:0c615bf6-87f6-4581-a9a9-c9fe02a64ed5> a report:ConstraintReport;
    report:constraint <urn:uuid:7786bdc0-6540-445d-b1fe-297fcc8676b5>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f1de6a7a-63a3-45ce-8b74-36276f93e742> a report:ConstraintReport;
    report:constraint <urn:uuid:3ff4714c-8c80-4f72-8ab5-72013400fda4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bba1b9c0-e431-4651-9843-5cb8478f14eb>, <urn:uuid:be69ed96-ea2f-4881-9f8d-71b82f4a3f78>.
<urn:uuid:bba1b9c0-e431-4651-9843-5cb8478f14eb> a report:ConstraintReport;
    report:constraint <urn:uuid:d57a6c6d-5c29-472b-803c-2bbebdb7ba71>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-31T17:00:00.000Z"^^xsd:dateTime.
<urn:uuid:be69ed96-ea2f-4881-9f8d-71b82f4a3f78> a report:ConstraintReport;
    report:constraint <urn:uuid:2e783af2-1f8a-4bd8-be7a-771c27436b55>;
    report:constraintLeftOperand "2024-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:20963238-e805-4618-b387-f971b19b0f38> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:b9883a40-51b8-41fa-812f-5ba9e6fa62ed> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:fae9b1bf-996d-4990-9850-cef0f35c439f> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
