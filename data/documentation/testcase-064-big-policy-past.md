# Read request from Alice to resource X on weekdays from 9-17 in 2024 returns into yes (Alice Request Read X - past).
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
@prefix report: <http://example.com/report/temp/>.

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

temp:currentTime dct:issued "2017-02-12T11:20:10.999Z"^^xsd:dateTime.
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

<urn:uuid:969ae4d5-d2ba-489e-a0f7-155a4f940ba2> a report:PolicyReport;
    dct:created "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:policy <urn:uuid:29b08c0a-97ea-41b1-b8e9-88400b1230cf>;
    report:policyRequest <urn:uuid:1bafee59-006c-46a3-810c-5d176b4be364>;
    report:ruleReport <urn:uuid:72394ec5-0223-4913-b4e4-e70e257d31a3>.
<urn:uuid:72394ec5-0223-4913-b4e4-e70e257d31a3> a report:PermissionReport;
    report:premiseReport <urn:uuid:f6dae00f-a942-486c-9cbe-bcd744c15f0f>, <urn:uuid:4a782280-f34f-4084-b2b3-470537cb95cf>, <urn:uuid:49ef2e1a-b58c-419a-b8de-c75ae05751d0>, <urn:uuid:fc6c3657-ceb9-460a-8a5b-b3ab22a26aac>;
    report:attemptState report:Attempted;
    report:rule <urn:uuid:f5d5f6d7-ef4b-43bc-9838-b79aef793883>;
    report:ruleRequest <urn:uuid:186be541-5857-4ce3-9f03-1a274f16bf59>;
    report:activationState report:Inactive.
<urn:uuid:f6dae00f-a942-486c-9cbe-bcd744c15f0f> a report:ConstraintReport;
    report:constraint <urn:uuid:fe3f0a29-307d-409d-ac71-f0f88c220cb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:or;
    report:premiseReport <urn:uuid:a68dc9fe-7d95-43b6-9227-68889499fc2f>, <urn:uuid:95220e85-4f25-4a17-b365-385e211fe282>, <urn:uuid:e266c7f1-949f-4d97-bbaa-c77616c04207>, <urn:uuid:21e195e3-9990-43b1-881c-3f8309d6b831>, <urn:uuid:7ac58e8c-ae4c-421f-a962-32d446d31ff4>, <urn:uuid:7ee0501a-89e8-47ca-b1a6-1fd322641d17>, <urn:uuid:82da6d6f-cbc6-48d7-a9dd-74204b22368a>, <urn:uuid:a97299ae-d347-4ae2-92e0-2af77678a339>, <urn:uuid:3bd0aa09-c832-4d77-ba68-c5e485bc8de8>, <urn:uuid:125699aa-7f41-4643-8e20-317192cdd76d>, <urn:uuid:2c51fdc3-6516-4972-a422-b9abf10b7ece>, <urn:uuid:846a0959-7b3b-44f7-af71-06415dd61ff7>, <urn:uuid:26df914d-1a7f-4b01-9974-41af9f70b632>, <urn:uuid:293bd732-06d4-4a54-b1d3-c5023275838d>, <urn:uuid:97a6726d-e256-45f2-bb17-6815784ae724>, <urn:uuid:5e41b3e9-fd0e-4a1a-95e6-162c320d7a16>, <urn:uuid:87c06fbb-f3d0-43b5-b625-e5bcc62bf489>, <urn:uuid:0da707e4-99b1-438e-b306-f0f8878c8a13>, <urn:uuid:f220756b-fb93-42d0-a9a4-b90e55a5bd71>, <urn:uuid:2cee4dc2-3371-4984-90fd-7a28002560e5>, <urn:uuid:f171cb15-aff7-4161-8c2c-f79685521430>, <urn:uuid:35c74cea-f6e8-481d-8fe9-72b6bb04e29d>, <urn:uuid:54f88260-6e70-4c35-8420-be51a702eb6d>, <urn:uuid:b393e47b-5184-47d3-a3c0-588876040acd>, <urn:uuid:635f2694-7932-434d-bac5-d80daae6b3b5>, <urn:uuid:e5620d69-d44b-4be9-8d29-bf69376ce1ad>, <urn:uuid:141b65eb-b291-4e1e-9d17-2695e60d2300>, <urn:uuid:16ddf0e0-c49d-49f6-9b54-c6f9685f9d3a>, <urn:uuid:c55d7356-8c13-4d11-b06a-62af6db5000b>, <urn:uuid:c9968c2a-2a64-4aba-a1c3-b4e443cb2eae>, <urn:uuid:925d9df9-2542-41e7-9bee-2b90b52dd58b>, <urn:uuid:d419638a-f69a-4f34-9b9e-aa5642cd5d0e>, <urn:uuid:e9509e2c-eac0-4d41-a115-3aecce7ba5bd>, <urn:uuid:5dd8fb9a-c791-4187-9bff-db47802f0b00>, <urn:uuid:df33f013-8a33-4604-9d16-35bee892dfe5>, <urn:uuid:66aa2161-dfe6-4a6b-be31-9ba4e9c933fe>, <urn:uuid:f2976fb0-4202-4c12-bff7-24d2213c24d6>, <urn:uuid:c328c65c-e067-4cef-8d71-a1f457501d8f>, <urn:uuid:0949ecf7-6471-4690-9d44-30ea6250c69c>, <urn:uuid:453f5955-d7e5-43e2-b907-ffc619d0b4cd>, <urn:uuid:ff9647c8-dc6e-4e0f-9593-26a1b8e224b4>, <urn:uuid:c5e93e06-d532-4557-abc9-d63c56cabe56>, <urn:uuid:fc68f52d-478b-4a11-b883-64a66c467f4e>, <urn:uuid:64f93118-8091-4440-b8e1-7594dbf67a9a>, <urn:uuid:471f04d0-e5fd-4108-84e3-fb1fd040946b>, <urn:uuid:22e6adc8-273e-46d1-9b8a-2afc0e746df3>, <urn:uuid:d32ffbfa-9a4e-4ef1-8363-addf95f73395>, <urn:uuid:c5d81245-306a-4f06-b7c8-c62f175944ed>, <urn:uuid:65786ef5-14d5-4ceb-80e8-d45c6df82704>, <urn:uuid:b0b63ad2-4226-46b1-b9f9-e4bd80e5fc9f>, <urn:uuid:862ee85e-ddf2-409e-ba8a-e4a30a8e9989>, <urn:uuid:13f409e0-ce20-4d93-bf46-1ad9272e196a>, <urn:uuid:9879e627-0c3b-419b-be38-231c8e37ea10>, <urn:uuid:fe6486ab-ca60-471d-aea6-7ed09a91356d>, <urn:uuid:b1cdec0b-0048-4d82-b5e0-f11d62125aef>, <urn:uuid:20faa690-3d57-4d2a-9dd0-621b7a536e1b>, <urn:uuid:163fdcdc-97f7-43ea-82b1-95ee662534f3>, <urn:uuid:9f5c91e9-301a-411b-88ab-14ca27613ecf>, <urn:uuid:76f6939a-4f00-4945-ba5d-ce5eb3e08d8f>, <urn:uuid:800257c5-8261-4284-9dcd-9210a44c97b2>, <urn:uuid:732e583d-945e-4d40-bc8f-5a83eb042210>, <urn:uuid:7c84605f-a3c6-44c7-9013-d560639d1a40>, <urn:uuid:2f204bf6-fb18-432e-84ba-54891f2659f2>, <urn:uuid:f713d45f-51c0-4d00-bb4a-5bb41d1d2511>, <urn:uuid:f67e67b9-5fa2-49cb-8a93-c8ebc2a09b29>, <urn:uuid:1c30dcd3-909f-4ad5-951e-04960a4e9e5d>, <urn:uuid:fc0fa9a0-cbc3-4e38-867f-5f06357489f0>, <urn:uuid:660795c7-b01f-4cd3-a75f-b4cb1a9fdc28>, <urn:uuid:b13d0912-2aee-415b-8814-4a580fcf3a69>, <urn:uuid:88cf6a6e-19bb-408f-9080-044ef0fd34a8>, <urn:uuid:7e3340b7-9de3-431a-93dc-3523dbb7714b>, <urn:uuid:15b1d1e7-f620-43ab-a0e5-76c77f87fead>, <urn:uuid:bb49dc2b-8673-49dc-9537-0cd6e8c2f85f>, <urn:uuid:fac1ab17-3e75-4c5c-9f20-168545a43f68>, <urn:uuid:df1e4975-f13a-46a6-a3e2-87cb6729b78b>, <urn:uuid:e1a043e3-a704-42f1-9337-fac6f97ead3b>, <urn:uuid:6f03310d-8611-44df-a75b-cd39dd399584>, <urn:uuid:84106c2b-ce7e-40bc-bbed-6ad86c350b6d>, <urn:uuid:07db690e-f169-4bf0-9e17-696171f30a85>, <urn:uuid:f3055de7-1fb9-4ff0-94d6-2fd8b31a3a6b>, <urn:uuid:7c5fe621-c839-44ae-90cd-899c8e005a02>, <urn:uuid:7702fd23-28b5-4044-8662-15bc5c0f8be7>, <urn:uuid:e65ea18e-c22c-40e2-944a-8c928eb66f91>, <urn:uuid:cca3b325-41c5-42e1-aeb2-85ffdafaa38b>, <urn:uuid:5b2059b7-54c3-4b51-9f71-b707f41fffd1>, <urn:uuid:84db79a5-9879-40b0-980b-7d24cab62c47>, <urn:uuid:a7bc67a7-64e1-471e-a7a1-42c52c2b4ae1>, <urn:uuid:243455b9-038d-4a50-8819-5b4029cc760d>, <urn:uuid:84f14765-9e67-4cdd-8540-10c25cdc8d6f>, <urn:uuid:fa5730c4-cea4-43ab-aba1-ba784ec3cda2>, <urn:uuid:44350927-5c98-4745-a7dd-8fc048a0d49b>, <urn:uuid:68e40026-0753-4551-a2a2-da873bbe68a1>, <urn:uuid:b2d8cc28-bf08-4052-a1f5-310c8f67a15b>, <urn:uuid:352c44b0-6058-4bbe-8040-2e8dd59823ab>, <urn:uuid:dc86c06f-7c4a-4437-8342-1c5e00500aa7>, <urn:uuid:935d74c8-41ee-4399-bb0b-2f23e82cbe81>, <urn:uuid:16a8e896-6b26-425c-a5e7-a7dd58806fc5>, <urn:uuid:a8358590-c860-496e-8a1b-4d001394bd54>, <urn:uuid:5da81afd-b7aa-48f7-9ca4-c98661dad392>, <urn:uuid:35c333d0-809c-48fb-bb39-8b1c1fc25d63>, <urn:uuid:85390531-dc21-4367-acd6-31e3ea99c5c4>, <urn:uuid:c2dcf1a1-42c5-4dfe-b22e-4f72a66057d0>, <urn:uuid:38e18ab2-cfa4-463b-a32a-ccb35848974c>, <urn:uuid:0968641b-9345-4c49-b7e7-86f8c7a2cb79>, <urn:uuid:e2524cd8-dc18-4461-8aad-2503e18116b8>, <urn:uuid:b1eb729d-6eb5-4613-9663-0a86c1b71c3d>, <urn:uuid:c87afe3f-16ed-40c5-8059-dc4ee730f47e>, <urn:uuid:f1139669-4778-4870-bd1a-ae3e38b54789>, <urn:uuid:0df19322-c109-4999-99d3-665ebf7e76b0>, <urn:uuid:b008bc6d-d1d7-4486-b838-91f3466b1f01>, <urn:uuid:f95b9cc2-7c24-4d49-93a8-b3f50538ff99>, <urn:uuid:4068cacd-1192-446d-84e6-ca9eb76687ab>, <urn:uuid:a6552c14-a29f-473d-9cc1-94e5abaec2eb>, <urn:uuid:e60fb314-45e2-4309-bf9e-25d541dde0e1>, <urn:uuid:45932dc9-8695-4aff-a1e7-865d6a4302ca>, <urn:uuid:f22c44f9-b721-410b-bfc4-75b36870b58e>, <urn:uuid:1faecba5-bf1a-4f2b-a348-2fbd44f9dfda>, <urn:uuid:443246e2-23c9-4e7b-a324-5c13d4563e34>, <urn:uuid:2a45a3e9-5a25-4384-be6d-0cda117bfe21>, <urn:uuid:2531365d-6ea9-4099-9163-4e6f4bd67941>, <urn:uuid:3f1ede02-11bc-4020-a341-14bd26e50f39>, <urn:uuid:b25508c9-4cc9-461d-a607-ebf0140ddc5c>, <urn:uuid:bb693e9c-7e18-40e4-9d4e-bf472d4747f4>, <urn:uuid:47a205be-fd6a-40b8-af51-cba51c645899>, <urn:uuid:72716f64-586d-4055-9f35-605f4eec1e9e>, <urn:uuid:2da8f3e0-c8af-4525-9e62-b7e04fc185d2>, <urn:uuid:ae01c26d-301c-44e4-817f-0c62c939bb3b>, <urn:uuid:45223496-c92c-4ebe-a246-65756ab72b31>, <urn:uuid:13315c58-ea29-4ba2-a0a9-3c77016d7111>, <urn:uuid:1488ba4b-c7a0-4e81-a468-66f33bec83d8>, <urn:uuid:3a9408d3-27de-4520-aeef-e0d970a711d9>, <urn:uuid:8ffd4b85-6392-4af7-b95a-48463f4b3af5>, <urn:uuid:9e68334f-6bab-4847-93dc-23e37adf3974>, <urn:uuid:819d0b1a-94c2-4fbe-a977-7332c1d2389f>, <urn:uuid:69336601-b6b1-4d9e-a502-eef3b3a04254>, <urn:uuid:25230523-eb7b-47de-b25c-964c38d13e92>, <urn:uuid:9d486b3d-eb4b-4109-8c30-98f3087a0f1a>, <urn:uuid:b01a0da6-5d71-48b9-83d7-a20de228837e>, <urn:uuid:dc358eb8-9f7b-4da5-a250-1e0581ac6406>, <urn:uuid:090d31d4-cf81-4eb0-bc4d-8ea7c818f722>, <urn:uuid:f2793857-3071-44e5-8cc2-ebc8833dfba2>, <urn:uuid:c3bab2d7-51f6-43ee-ad07-b5a75320baac>, <urn:uuid:eb41beb1-f871-4914-b478-142eb1a6464e>, <urn:uuid:7bba4b9e-c623-41c7-b236-d2fbb9f256fd>, <urn:uuid:35c315b0-2cce-4838-ace6-4beba5fb3879>, <urn:uuid:303b66a5-e47d-40c4-a32a-1e43ad48afd1>, <urn:uuid:20ad2a14-5b54-4397-8d66-1a33816456c2>, <urn:uuid:34c9eed5-436c-448b-b3d2-9871a99e1dd9>, <urn:uuid:9d6b6142-a1a3-40fd-8c33-dd065071ae30>, <urn:uuid:082adb26-4c64-48e8-8904-80007e2908f9>, <urn:uuid:5d9e7c51-b595-44bc-a10f-d961242799bb>, <urn:uuid:4e7a9e9e-76bd-4017-8684-8643f81646c9>, <urn:uuid:391db2d6-ce35-4e4f-a9d9-62eb3a6eabac>, <urn:uuid:6cef5d31-e487-4521-9dbd-3b0125bd2bba>, <urn:uuid:4ada9bfb-1022-4ff5-b88a-e17b212d768a>, <urn:uuid:dade08d0-685f-4f47-bf29-7d736ddb39c6>, <urn:uuid:65a5b25e-0df3-491a-9d62-071174b5b0ae>, <urn:uuid:8e396cc1-b55f-4d72-9c7d-cd668bb34e49>, <urn:uuid:491a7322-c8aa-4b99-b792-bad9d3af3546>, <urn:uuid:e46c1a36-00fb-4319-a683-ba8b71e0a19f>, <urn:uuid:0b640f96-a880-42d0-b3b0-8c3fc488d2ae>, <urn:uuid:e93e4c01-195d-4898-9c29-e13bf61a3131>, <urn:uuid:95e7c972-a45e-49b7-a886-b1ec0200c28a>, <urn:uuid:abae78c2-d82c-4ad3-a4cb-2ae6369e3c08>, <urn:uuid:b0a57c16-69c2-48bb-b394-be02eb266101>, <urn:uuid:9be267d4-f672-4546-ab8b-7176484cec65>, <urn:uuid:e90844b0-f043-40b0-95db-e5fd4f868d9e>, <urn:uuid:280c1795-cb1b-47f9-a581-033bf842be60>, <urn:uuid:0955c77e-53b3-46da-99a1-b0d517c1ba1e>, <urn:uuid:26b79b85-775c-40ad-bdc1-eaafe3520338>, <urn:uuid:21779f63-86ae-474c-8ea2-38ad731649a7>, <urn:uuid:cb9b75da-bc81-4648-8dd3-6421e538426c>, <urn:uuid:cdcc8d55-ac6b-459d-9bf3-7cdb3e1ec8d6>, <urn:uuid:ebbb774d-494e-43a2-911f-8a171a44101f>, <urn:uuid:9cb25629-0543-4d5e-ac29-d541f1a4da1e>, <urn:uuid:5c17f184-a03b-460a-8004-b346f995e90a>, <urn:uuid:c52333e9-5213-44d2-a313-7e63ea06885d>, <urn:uuid:e866fce9-6c25-4e89-aad0-0356d2abe1bc>, <urn:uuid:971fde47-1236-4d75-90e9-22967619b13b>, <urn:uuid:b11ced28-aa0c-4d78-8137-f9b1e2b2279d>, <urn:uuid:d8556c2c-695d-4ce7-8334-18d94ca50559>, <urn:uuid:b41c9729-829a-4838-9909-63724066a7d2>, <urn:uuid:c8870fbe-de23-45a7-897c-8e005373703b>, <urn:uuid:752d4d4f-b5db-4991-af4e-8eb93f6d0d9c>, <urn:uuid:9b1e6af2-0f37-4b3b-b199-98302ba11925>, <urn:uuid:7adcfb98-b75d-406f-978c-ebc4803c2d8f>, <urn:uuid:7a3227b0-19f8-48d3-aa73-d876f7c786c6>, <urn:uuid:44d7b93d-780d-44ec-b951-0359bd680b6a>, <urn:uuid:bd243688-457a-45ce-ba4c-0373bfab4847>, <urn:uuid:ca309eda-eacd-42bb-9e14-7d2d19c1d9b4>, <urn:uuid:b60afd0a-0bed-4231-bc62-4b6466f7a913>, <urn:uuid:fa9c4172-c02e-409e-8c6b-3cca25f9ae66>, <urn:uuid:cdaf5877-da3d-45f3-b2f4-79b9b5a74430>, <urn:uuid:27e94381-3e64-4a19-bbea-c4f303c25e93>, <urn:uuid:c9065373-62dd-4695-b634-87abc7a70753>, <urn:uuid:d8f6fb19-56f3-4f42-be2d-26e5b20b512b>, <urn:uuid:885a9827-2057-4b24-951f-849d6d427206>, <urn:uuid:83ebf750-db37-4e00-a640-029fac527b68>, <urn:uuid:afff8b43-3fb5-4103-9b66-d334456303f8>, <urn:uuid:28e7b6cd-d22d-4ed0-8089-3458fe57d234>, <urn:uuid:18671b46-0bee-45b2-ae88-0a6739761b72>, <urn:uuid:526ea77c-077e-4bda-bb8d-d21d7bb92a76>, <urn:uuid:a4d7ad3e-aed1-4286-9444-3ebc0818c579>, <urn:uuid:3936feee-0d2c-43d7-9269-10d3f0c4053a>, <urn:uuid:d6dda832-84ff-4124-80ce-d87401e89174>, <urn:uuid:923176c3-90eb-44d8-840c-13f1e716d07b>, <urn:uuid:20ce9532-4646-475d-b08d-b94a25b1d558>, <urn:uuid:98b63292-d425-43f1-8b4d-420533cf39f5>, <urn:uuid:65b3f1df-5c42-4010-9274-f2a83d8ab528>, <urn:uuid:97405196-8f12-47e2-a33f-218ea7d17e2a>, <urn:uuid:2049ceff-b9c7-48d9-8738-969758c37e1d>, <urn:uuid:936abe54-4e08-431f-b251-468d50852a28>, <urn:uuid:c4ca2234-93f3-4590-899a-5e4090e119dd>, <urn:uuid:f3b93188-dcc1-43ea-9371-daaffb7d173c>, <urn:uuid:d790341a-1c40-4259-8968-bb984427cc62>, <urn:uuid:b206e75c-2a91-41b6-abd2-fbaba4288871>, <urn:uuid:88429562-2f61-421f-ad0e-febdb7f18407>, <urn:uuid:022cae7c-5c79-4902-94be-2e4ea8511e4d>, <urn:uuid:bd22d72d-9b26-4aa1-978f-662eb30e6967>, <urn:uuid:7167d066-d26a-4ce7-98ac-96fe04fab36d>, <urn:uuid:81ed9718-14b1-4d4a-9a78-c62a9c1ce317>, <urn:uuid:eefb9b27-860b-451e-bd8e-db4f089daf1d>, <urn:uuid:4a22c316-8e17-4f40-b022-3fb3606b448a>, <urn:uuid:f8eccc4e-36eb-48cd-a8ea-2395bb6f75dc>, <urn:uuid:37cb4125-6972-4b52-b116-e73409690e3c>, <urn:uuid:5ffc4f05-f59f-45dc-bf5f-54ba18c6e5bb>, <urn:uuid:0b1e55bd-10da-4612-9751-8ab6abe43aca>, <urn:uuid:260c45b1-c294-4e51-929e-1a710bc28293>, <urn:uuid:8777fab7-18d6-4bb5-98f4-1b1241aa1fc2>, <urn:uuid:6fa749c4-c6e4-4d1f-8bfb-02693b716eeb>, <urn:uuid:816508bc-d0c0-49b9-9e22-fa5926f04971>, <urn:uuid:68dda140-a005-474e-aac8-c914e86d5131>, <urn:uuid:6d986929-7e80-4987-8ca3-f6f05a27d6ea>, <urn:uuid:74b17ac0-faae-4b72-9ef5-a29fd8309b3a>, <urn:uuid:2f89bfe4-c9f1-4ed8-99c7-7fc59e9bbbfe>, <urn:uuid:5be43a86-e76f-4c52-9064-5fc1b01731ea>, <urn:uuid:40f75a3f-38a5-49a2-9c96-66c5e742b464>, <urn:uuid:893fed7c-ca87-47f0-b503-bca61bbc45bf>, <urn:uuid:cdac76d1-e33c-4209-b551-1e9971b40003>, <urn:uuid:58140409-c1de-4af3-bea3-489c7493fde1>, <urn:uuid:31d980ef-4b9c-4c3b-af14-54fd913ad0f4>, <urn:uuid:8d4ec50f-160c-4bb7-b4c2-e643915f2872>, <urn:uuid:c3ec5ce2-b7db-44d8-b7db-8430e89f3247>, <urn:uuid:5b78022d-2cf7-42d8-aee4-f17dd7133cee>, <urn:uuid:19cb2286-7212-429d-9f03-adba30516e34>, <urn:uuid:13d1d8a2-4739-4605-a685-014b89c59b8f>, <urn:uuid:76ca170c-24da-4d4d-a97f-167e1cdd0be9>, <urn:uuid:aefb0fc9-94cd-4604-b3fa-ad25fe320bc8>, <urn:uuid:dddace47-4fc0-4f40-9fd5-dd16099a5a53>, <urn:uuid:dc5d805c-45f2-401b-b67e-428721958660>, <urn:uuid:9faa32d7-8d0f-4e63-ab8d-49da65dda0b6>, <urn:uuid:b684c47e-0122-4390-a081-7a32620b87a2>, <urn:uuid:ee6ccf4f-4782-4907-b570-248f6328a00f>, <urn:uuid:f3437748-0a97-4870-8134-0391269943ca>, <urn:uuid:07244870-7c39-4a8e-aa41-9ddb2f4a8051>, <urn:uuid:8240f38a-1555-498a-8cc3-c76b2cc2426e>, <urn:uuid:1b852152-974c-497b-9e8e-9426c7aa8d5b>, <urn:uuid:b8b8d21e-e8bc-499a-87bb-6fe5a1d8ff58>, <urn:uuid:3da13cbd-b7b6-41fc-93f2-59d52546d69f>, <urn:uuid:14261eb9-90c4-48f1-bd53-5de4d832dc5e>, <urn:uuid:c4cf2f68-645e-49fa-89e1-347c2c6ac279>, <urn:uuid:909e1124-a6f0-41bd-b3b8-2d90409015ab>.
<urn:uuid:a68dc9fe-7d95-43b6-9227-68889499fc2f> a report:ConstraintReport;
    report:constraint <urn:uuid:3e55a9e0-a368-495c-b378-ef1fc7d28423>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:83c244b8-3b17-46ee-91f3-c2fb103c5c02>, <urn:uuid:1457351c-8bcc-45cb-bea3-59402905a2cd>.
<urn:uuid:83c244b8-3b17-46ee-91f3-c2fb103c5c02> a report:ConstraintReport;
    report:constraint <urn:uuid:ef1995be-0881-4d8b-b268-728b5478983f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1457351c-8bcc-45cb-bea3-59402905a2cd> a report:ConstraintReport;
    report:constraint <urn:uuid:6419ce9e-6e46-4d73-a30e-4683f1f29c73>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:95220e85-4f25-4a17-b365-385e211fe282> a report:ConstraintReport;
    report:constraint <urn:uuid:3a0b7e60-201d-4fc8-b1f7-4f5dd6df5acd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6e2c93d6-83f9-4c5c-a780-600ac01fcea0>, <urn:uuid:413ad8a4-ef4f-4b7e-ae26-201faa0c5e68>.
<urn:uuid:6e2c93d6-83f9-4c5c-a780-600ac01fcea0> a report:ConstraintReport;
    report:constraint <urn:uuid:89691371-6a64-460e-8459-627c7eb0a822>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:413ad8a4-ef4f-4b7e-ae26-201faa0c5e68> a report:ConstraintReport;
    report:constraint <urn:uuid:19203254-c14c-4072-ad00-a0f5b643967d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e266c7f1-949f-4d97-bbaa-c77616c04207> a report:ConstraintReport;
    report:constraint <urn:uuid:4040ebf0-21ae-4d2f-b0d0-c94bd10500b4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:abe3b115-e9f2-4f3a-98a0-aa5792554eea>, <urn:uuid:284250e7-2829-45aa-9946-3135494ccac1>.
<urn:uuid:abe3b115-e9f2-4f3a-98a0-aa5792554eea> a report:ConstraintReport;
    report:constraint <urn:uuid:2ef91923-c928-4094-8952-de72b1624344>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-03T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:284250e7-2829-45aa-9946-3135494ccac1> a report:ConstraintReport;
    report:constraint <urn:uuid:b3e06292-fe42-411e-81e5-ac4a27849341>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:21e195e3-9990-43b1-881c-3f8309d6b831> a report:ConstraintReport;
    report:constraint <urn:uuid:4549fbe1-ea71-4b56-983d-52ce9f494d9d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:eb036e13-c4a4-4611-b665-1d2e3f0671f6>, <urn:uuid:4178964b-ebc0-401b-aa33-239297b27f6b>.
<urn:uuid:eb036e13-c4a4-4611-b665-1d2e3f0671f6> a report:ConstraintReport;
    report:constraint <urn:uuid:c14144f3-1bb7-4cb1-aaac-a9fd7cb202dd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:4178964b-ebc0-401b-aa33-239297b27f6b> a report:ConstraintReport;
    report:constraint <urn:uuid:2d2ebd43-f310-496a-ada9-5fc7b0e9651e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7ac58e8c-ae4c-421f-a962-32d446d31ff4> a report:ConstraintReport;
    report:constraint <urn:uuid:f2c2a215-4758-4b95-8a72-d780c955340a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3510436f-4ca8-49fb-acc0-09a8991ffcf9>, <urn:uuid:23e8278c-7192-4744-a835-2701a65f5002>.
<urn:uuid:3510436f-4ca8-49fb-acc0-09a8991ffcf9> a report:ConstraintReport;
    report:constraint <urn:uuid:776c51ed-bcea-48ac-858c-da60e55aa4e0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:23e8278c-7192-4744-a835-2701a65f5002> a report:ConstraintReport;
    report:constraint <urn:uuid:fa5f1424-9d9a-43d4-8d0c-0be2be49d3c6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7ee0501a-89e8-47ca-b1a6-1fd322641d17> a report:ConstraintReport;
    report:constraint <urn:uuid:6bf766d8-9bc9-4d02-8e4f-7d27c52ae51c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fb647968-fef3-422b-be5a-65976bb5d1b3>, <urn:uuid:f83bd91a-bf55-4c8e-9ef3-cb98239a052b>.
<urn:uuid:fb647968-fef3-422b-be5a-65976bb5d1b3> a report:ConstraintReport;
    report:constraint <urn:uuid:08b3d898-c618-41ca-b513-c2be9d02849c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f83bd91a-bf55-4c8e-9ef3-cb98239a052b> a report:ConstraintReport;
    report:constraint <urn:uuid:78e3c6b4-9733-426c-8757-6ea237ce105a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:82da6d6f-cbc6-48d7-a9dd-74204b22368a> a report:ConstraintReport;
    report:constraint <urn:uuid:e4bbfc36-01eb-438d-82d5-764eaf6f4b38>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fd83ff7f-a742-48ce-9123-5e4decf6c691>, <urn:uuid:8c4d54e1-8b28-4f3a-962d-4840b5041f44>.
<urn:uuid:fd83ff7f-a742-48ce-9123-5e4decf6c691> a report:ConstraintReport;
    report:constraint <urn:uuid:487e135e-b283-4173-9c03-c734da041b90>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:8c4d54e1-8b28-4f3a-962d-4840b5041f44> a report:ConstraintReport;
    report:constraint <urn:uuid:847f28b3-0529-4cf7-8c4e-ec4128c1d01d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a97299ae-d347-4ae2-92e0-2af77678a339> a report:ConstraintReport;
    report:constraint <urn:uuid:ae5d7d97-5e92-461a-a3ca-5653a7e87292>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0478ee35-de2d-4dba-8f90-b7956855ad7a>, <urn:uuid:5daf1c19-d191-4fc1-bd13-d7729d8be281>.
<urn:uuid:0478ee35-de2d-4dba-8f90-b7956855ad7a> a report:ConstraintReport;
    report:constraint <urn:uuid:5cd34117-bffc-4774-a7a7-4e037840aaf2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-10T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5daf1c19-d191-4fc1-bd13-d7729d8be281> a report:ConstraintReport;
    report:constraint <urn:uuid:0353e399-556d-45d2-b3ec-9568ded4b6a3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3bd0aa09-c832-4d77-ba68-c5e485bc8de8> a report:ConstraintReport;
    report:constraint <urn:uuid:027b62aa-1ecc-475b-a5d0-fe358d8bd175>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:55f02ae4-3eb7-4378-bc2e-82e3c556c0e0>, <urn:uuid:84015de6-f220-4c26-afd4-94ef87272a30>.
<urn:uuid:55f02ae4-3eb7-4378-bc2e-82e3c556c0e0> a report:ConstraintReport;
    report:constraint <urn:uuid:43fabba8-3c95-442e-83d9-f713a81f9400>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:84015de6-f220-4c26-afd4-94ef87272a30> a report:ConstraintReport;
    report:constraint <urn:uuid:a763d179-99e0-416c-8533-b8e762ca5e49>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:125699aa-7f41-4643-8e20-317192cdd76d> a report:ConstraintReport;
    report:constraint <urn:uuid:66138113-683f-420e-ad70-d3d17d234773>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:77033bad-4e38-41be-ad2c-43f1f83589b7>, <urn:uuid:934763bb-d3ad-412d-8019-78279d050f49>.
<urn:uuid:77033bad-4e38-41be-ad2c-43f1f83589b7> a report:ConstraintReport;
    report:constraint <urn:uuid:47d65afd-514d-489a-b7ef-17b545de66cf>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:934763bb-d3ad-412d-8019-78279d050f49> a report:ConstraintReport;
    report:constraint <urn:uuid:12481c7b-2b7d-4215-87bf-864c9d45bfff>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2c51fdc3-6516-4972-a422-b9abf10b7ece> a report:ConstraintReport;
    report:constraint <urn:uuid:5f6bab6e-bf48-44c3-84fe-ccbc610d7d5e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4f902403-ecb5-4844-9a83-0fc0f895ee69>, <urn:uuid:d1949584-1a92-4f47-8947-c09f19a8f97d>.
<urn:uuid:4f902403-ecb5-4844-9a83-0fc0f895ee69> a report:ConstraintReport;
    report:constraint <urn:uuid:10e7d6bc-a15d-4f5b-ad72-43815be8a42f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:d1949584-1a92-4f47-8947-c09f19a8f97d> a report:ConstraintReport;
    report:constraint <urn:uuid:4cf20076-3dc5-4d99-ab65-209cb7daf4b8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:846a0959-7b3b-44f7-af71-06415dd61ff7> a report:ConstraintReport;
    report:constraint <urn:uuid:cc4e7745-6e96-4d7a-b1af-38499fdd6cad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d3e1bb6f-0488-431d-8f69-dc35f9e824d6>, <urn:uuid:24daab3b-ebe0-47db-a3c0-c12cdca25629>.
<urn:uuid:d3e1bb6f-0488-431d-8f69-dc35f9e824d6> a report:ConstraintReport;
    report:constraint <urn:uuid:56584822-db86-4a89-8d1e-4f7f58c5e163>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:24daab3b-ebe0-47db-a3c0-c12cdca25629> a report:ConstraintReport;
    report:constraint <urn:uuid:4938531d-6a55-481b-9925-d0870c9386df>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:26df914d-1a7f-4b01-9974-41af9f70b632> a report:ConstraintReport;
    report:constraint <urn:uuid:d5f55ddb-27ae-479e-a376-b8fe2e38e1ed>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:16c01f3c-c7be-47cd-bf06-c0024ca47763>, <urn:uuid:566f098f-594e-4222-b204-2c44c693f933>.
<urn:uuid:16c01f3c-c7be-47cd-bf06-c0024ca47763> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d40525-4638-4c8a-804d-16e0e175feb8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-17T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:566f098f-594e-4222-b204-2c44c693f933> a report:ConstraintReport;
    report:constraint <urn:uuid:80d8392e-509f-447d-815a-a7f469b14e8a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:293bd732-06d4-4a54-b1d3-c5023275838d> a report:ConstraintReport;
    report:constraint <urn:uuid:42e65efc-e205-490a-ba22-f7e5daa11eb2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0387e1f4-49bf-497b-a94c-3098c16e56b8>, <urn:uuid:4905de1a-30dc-441d-ae5b-57dd6ece5f61>.
<urn:uuid:0387e1f4-49bf-497b-a94c-3098c16e56b8> a report:ConstraintReport;
    report:constraint <urn:uuid:78191c34-5bcf-48ac-8ae2-93c726051f91>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:4905de1a-30dc-441d-ae5b-57dd6ece5f61> a report:ConstraintReport;
    report:constraint <urn:uuid:80aa9457-257e-47f7-918b-c7bc5d1ab3f7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:97a6726d-e256-45f2-bb17-6815784ae724> a report:ConstraintReport;
    report:constraint <urn:uuid:e60f11c7-561f-4459-9e9e-4e5f037006c0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9ea1859d-ee27-426b-960e-70e2e9aca756>, <urn:uuid:71e1d621-d488-4d3d-852a-cd3a5d47c9f3>.
<urn:uuid:9ea1859d-ee27-426b-960e-70e2e9aca756> a report:ConstraintReport;
    report:constraint <urn:uuid:0596f841-97e1-4aa5-be25-4e7a7695563b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:71e1d621-d488-4d3d-852a-cd3a5d47c9f3> a report:ConstraintReport;
    report:constraint <urn:uuid:163ffffb-be82-42cb-ac47-cbefe9de6b5a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5e41b3e9-fd0e-4a1a-95e6-162c320d7a16> a report:ConstraintReport;
    report:constraint <urn:uuid:4d8d327a-4d3c-4b09-856b-39b67261bec6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cedf38c0-1f9f-40d8-8c13-805786462442>, <urn:uuid:68838080-60c4-47d7-b5cf-65887e578a18>.
<urn:uuid:cedf38c0-1f9f-40d8-8c13-805786462442> a report:ConstraintReport;
    report:constraint <urn:uuid:a0268f4b-c1f1-4db8-a5ef-85ac40c3592a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:68838080-60c4-47d7-b5cf-65887e578a18> a report:ConstraintReport;
    report:constraint <urn:uuid:908dc400-efdd-44f2-a4b0-428abf72a88f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:87c06fbb-f3d0-43b5-b625-e5bcc62bf489> a report:ConstraintReport;
    report:constraint <urn:uuid:3fc45405-5ebb-41b1-a8d6-ab0bbb0d7857>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e706bc09-2c46-45a6-8f67-265dc6e16d18>, <urn:uuid:df2a8e7e-3206-4f17-8dfc-44fb40eedfc6>.
<urn:uuid:e706bc09-2c46-45a6-8f67-265dc6e16d18> a report:ConstraintReport;
    report:constraint <urn:uuid:dffa26e4-c85f-4dfa-81e0-c52024dffb1e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:df2a8e7e-3206-4f17-8dfc-44fb40eedfc6> a report:ConstraintReport;
    report:constraint <urn:uuid:41d602b1-a246-4b40-9086-40edd44ab0c3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0da707e4-99b1-438e-b306-f0f8878c8a13> a report:ConstraintReport;
    report:constraint <urn:uuid:925027e7-3d8f-4b79-9558-e7ec0087c87f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:78156468-b82f-4eca-9534-1029e4697437>, <urn:uuid:5c333e3a-1431-46ba-bcc9-e30a469718ba>.
<urn:uuid:78156468-b82f-4eca-9534-1029e4697437> a report:ConstraintReport;
    report:constraint <urn:uuid:0a8a0e76-128b-4856-8606-3750573717cc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-24T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5c333e3a-1431-46ba-bcc9-e30a469718ba> a report:ConstraintReport;
    report:constraint <urn:uuid:29faea6e-0504-42b0-9751-2a2d87667ced>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f220756b-fb93-42d0-a9a4-b90e55a5bd71> a report:ConstraintReport;
    report:constraint <urn:uuid:63936891-0ef5-48eb-9d64-9bf5b2778502>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:92854c5b-3b99-4ae4-90c2-d2af6d083291>, <urn:uuid:0467d9d6-f467-4dcc-9ad1-63ebe009dd17>.
<urn:uuid:92854c5b-3b99-4ae4-90c2-d2af6d083291> a report:ConstraintReport;
    report:constraint <urn:uuid:9c9a514a-5247-44d8-b5d4-98b4b44a2e19>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0467d9d6-f467-4dcc-9ad1-63ebe009dd17> a report:ConstraintReport;
    report:constraint <urn:uuid:b07ea640-d092-4051-83d6-4c60f49360d9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2cee4dc2-3371-4984-90fd-7a28002560e5> a report:ConstraintReport;
    report:constraint <urn:uuid:9f77c162-b09e-4b3d-9c70-52e4f7fae8f4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ff9f905d-4514-4d8c-9970-8d0cffd9081a>, <urn:uuid:2607e577-60e6-496c-9e0c-deacc60b8996>.
<urn:uuid:ff9f905d-4514-4d8c-9970-8d0cffd9081a> a report:ConstraintReport;
    report:constraint <urn:uuid:2869ac16-3e1a-49cd-aa7b-a72da02f3c79>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:2607e577-60e6-496c-9e0c-deacc60b8996> a report:ConstraintReport;
    report:constraint <urn:uuid:343f01a8-53a6-41b6-91d3-e2d717a52f7e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f171cb15-aff7-4161-8c2c-f79685521430> a report:ConstraintReport;
    report:constraint <urn:uuid:fd5037f5-3660-4382-b5c5-c29af7d01e58>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1004947b-3098-4150-a5ad-0d11aebe4d01>, <urn:uuid:88f96bc1-4866-438d-88e8-3742c5e61603>.
<urn:uuid:1004947b-3098-4150-a5ad-0d11aebe4d01> a report:ConstraintReport;
    report:constraint <urn:uuid:ed665aa5-cd4e-46c7-9dbe-1e3cf1ec9452>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:88f96bc1-4866-438d-88e8-3742c5e61603> a report:ConstraintReport;
    report:constraint <urn:uuid:74a4eb82-43a2-4c77-bc68-78e9814f060b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:35c74cea-f6e8-481d-8fe9-72b6bb04e29d> a report:ConstraintReport;
    report:constraint <urn:uuid:668c4199-db43-4336-9edf-82eb3a87f336>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:74d4feb5-2eeb-443b-a980-7cd4f036de79>, <urn:uuid:0c994796-1b7f-432f-84e4-cd0b95682ae6>.
<urn:uuid:74d4feb5-2eeb-443b-a980-7cd4f036de79> a report:ConstraintReport;
    report:constraint <urn:uuid:b72560f8-09f8-4331-a676-ab7bc3ea27ab>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-30T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0c994796-1b7f-432f-84e4-cd0b95682ae6> a report:ConstraintReport;
    report:constraint <urn:uuid:f65192ac-9654-457f-9657-dd875c4f3ac4>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:54f88260-6e70-4c35-8420-be51a702eb6d> a report:ConstraintReport;
    report:constraint <urn:uuid:99b59b86-e907-4eb3-b6e2-2eb826d8f887>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7ee2592e-29fe-46d4-aafb-4de820047929>, <urn:uuid:bae146fa-b0cb-42b4-8dc8-79b8922f6acd>.
<urn:uuid:7ee2592e-29fe-46d4-aafb-4de820047929> a report:ConstraintReport;
    report:constraint <urn:uuid:6073e4d7-d66d-4bb0-9ac9-66f8d27781f3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-01-31T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:bae146fa-b0cb-42b4-8dc8-79b8922f6acd> a report:ConstraintReport;
    report:constraint <urn:uuid:791a6428-bd9b-45a7-a4b3-77b5d1da2c09>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b393e47b-5184-47d3-a3c0-588876040acd> a report:ConstraintReport;
    report:constraint <urn:uuid:b074c5d1-ec4b-49b6-8404-3454c20c5fee>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:01cc8e4d-672d-4b21-8a50-7db6ddff50ba>, <urn:uuid:3a19680a-e13c-4137-977b-025fc9d3287a>.
<urn:uuid:01cc8e4d-672d-4b21-8a50-7db6ddff50ba> a report:ConstraintReport;
    report:constraint <urn:uuid:4640a2df-1852-40a1-a6ca-356cbc2c10b0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:3a19680a-e13c-4137-977b-025fc9d3287a> a report:ConstraintReport;
    report:constraint <urn:uuid:94ac7531-23c3-42aa-a0d1-7fdb790b3e94>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:635f2694-7932-434d-bac5-d80daae6b3b5> a report:ConstraintReport;
    report:constraint <urn:uuid:93760dc7-3009-45c0-ac6a-093b6ed9ae31>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a706a02f-58e8-4a7b-aa89-eb81b0b46ae7>, <urn:uuid:fd08b3ee-c942-4b42-9037-6e3ba0877c35>.
<urn:uuid:a706a02f-58e8-4a7b-aa89-eb81b0b46ae7> a report:ConstraintReport;
    report:constraint <urn:uuid:72b33877-3fdb-450c-911b-1c0d233d53d9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:fd08b3ee-c942-4b42-9037-6e3ba0877c35> a report:ConstraintReport;
    report:constraint <urn:uuid:b24af580-eed9-44e4-bd2b-a4577169d1a5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e5620d69-d44b-4be9-8d29-bf69376ce1ad> a report:ConstraintReport;
    report:constraint <urn:uuid:93780389-290c-4574-8814-7da01c1de167>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a19cdc42-6dde-4727-8489-b9b0399ad23c>, <urn:uuid:46e4fd1c-b0e6-4d93-966f-95ac43cffef0>.
<urn:uuid:a19cdc42-6dde-4727-8489-b9b0399ad23c> a report:ConstraintReport;
    report:constraint <urn:uuid:dc1a7d14-3a99-4651-bcf0-5cf40b498b26>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:46e4fd1c-b0e6-4d93-966f-95ac43cffef0> a report:ConstraintReport;
    report:constraint <urn:uuid:b4843a83-39df-4cf0-892f-f04a6da1f8e8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:141b65eb-b291-4e1e-9d17-2695e60d2300> a report:ConstraintReport;
    report:constraint <urn:uuid:502793e8-9aa3-4c1b-8566-f3310fcf84cd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cb4d16fe-df61-4410-9a8f-94682a456ecc>, <urn:uuid:703553df-fc8b-41d5-ae85-aa0f3169b7f2>.
<urn:uuid:cb4d16fe-df61-4410-9a8f-94682a456ecc> a report:ConstraintReport;
    report:constraint <urn:uuid:2c77d2fb-37ec-4338-94ec-cc1dc84ab103>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-06T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:703553df-fc8b-41d5-ae85-aa0f3169b7f2> a report:ConstraintReport;
    report:constraint <urn:uuid:79360e32-f92b-4ab7-9655-1cb750852c9a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:16ddf0e0-c49d-49f6-9b54-c6f9685f9d3a> a report:ConstraintReport;
    report:constraint <urn:uuid:9ecc0a82-8017-4b1f-87e2-10f326f7fe03>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:27449456-92bc-422d-ac0a-f617c0a41575>, <urn:uuid:1e77fca2-4223-48c7-b8c1-b78ea02fc003>.
<urn:uuid:27449456-92bc-422d-ac0a-f617c0a41575> a report:ConstraintReport;
    report:constraint <urn:uuid:cbed4529-9c7e-4bd7-af19-1274fad6968f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-07T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1e77fca2-4223-48c7-b8c1-b78ea02fc003> a report:ConstraintReport;
    report:constraint <urn:uuid:8ae88552-d4ac-4cde-8f82-3dd1718b398a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c55d7356-8c13-4d11-b06a-62af6db5000b> a report:ConstraintReport;
    report:constraint <urn:uuid:86330f57-8d3b-4305-8b28-7757bf0913a7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:44e3d8c5-e4bb-41c0-a7f9-e26a604dee55>, <urn:uuid:4c87a806-e275-4bbc-bf54-25b7b150857d>.
<urn:uuid:44e3d8c5-e4bb-41c0-a7f9-e26a604dee55> a report:ConstraintReport;
    report:constraint <urn:uuid:eb8c09ec-ed48-4014-88cc-d29a2f148bbf>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:4c87a806-e275-4bbc-bf54-25b7b150857d> a report:ConstraintReport;
    report:constraint <urn:uuid:a1fa3b90-08b4-4c48-8217-ba1b8f3bd261>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c9968c2a-2a64-4aba-a1c3-b4e443cb2eae> a report:ConstraintReport;
    report:constraint <urn:uuid:aa961acb-59e1-404b-abf8-db7b2da9ffd9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d0660ff3-e8c0-4d54-b637-c3d2326d2baa>, <urn:uuid:d3882580-f568-4782-9485-e11512d49be2>.
<urn:uuid:d0660ff3-e8c0-4d54-b637-c3d2326d2baa> a report:ConstraintReport;
    report:constraint <urn:uuid:e58ebe3e-93de-47a4-929a-b84070c50329>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:d3882580-f568-4782-9485-e11512d49be2> a report:ConstraintReport;
    report:constraint <urn:uuid:adf26737-3ead-4382-b9fe-6d30792a792e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:925d9df9-2542-41e7-9bee-2b90b52dd58b> a report:ConstraintReport;
    report:constraint <urn:uuid:f40cc880-e1ff-4401-8d48-087cf5bb1ba6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:14b60b46-5337-41cc-b032-4b6bd1c8d0d4>, <urn:uuid:7951834a-dad1-4cbf-83c6-8f3e1bf05b09>.
<urn:uuid:14b60b46-5337-41cc-b032-4b6bd1c8d0d4> a report:ConstraintReport;
    report:constraint <urn:uuid:598a801b-62a9-40ec-bdf0-15e8bb78cd3f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7951834a-dad1-4cbf-83c6-8f3e1bf05b09> a report:ConstraintReport;
    report:constraint <urn:uuid:cca97230-a84c-4eb7-b09f-68acab42a773>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d419638a-f69a-4f34-9b9e-aa5642cd5d0e> a report:ConstraintReport;
    report:constraint <urn:uuid:59b07fb2-5acc-4f4b-83a7-36569246fde9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:985c80aa-907d-4066-9ba8-7e819b1b5058>, <urn:uuid:3f15b710-a35b-4b65-ae26-df7748b3dde3>.
<urn:uuid:985c80aa-907d-4066-9ba8-7e819b1b5058> a report:ConstraintReport;
    report:constraint <urn:uuid:6dc086d4-fcdc-4f5f-895f-82a69223d526>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-13T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:3f15b710-a35b-4b65-ae26-df7748b3dde3> a report:ConstraintReport;
    report:constraint <urn:uuid:c7ea6260-d8c6-4219-ab0e-5a5c988b7e08>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e9509e2c-eac0-4d41-a115-3aecce7ba5bd> a report:ConstraintReport;
    report:constraint <urn:uuid:4d46f200-3390-4b59-bc09-ed4b50729e50>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5195f428-9269-44c7-98d3-72dfc025d6f7>, <urn:uuid:8ca5979c-befe-4b63-afd6-39c31169a39f>.
<urn:uuid:5195f428-9269-44c7-98d3-72dfc025d6f7> a report:ConstraintReport;
    report:constraint <urn:uuid:87344fad-e07f-4d6a-9f96-274248f7c49f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-14T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:8ca5979c-befe-4b63-afd6-39c31169a39f> a report:ConstraintReport;
    report:constraint <urn:uuid:f8244460-02f4-4768-8066-39f8edda6653>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5dd8fb9a-c791-4187-9bff-db47802f0b00> a report:ConstraintReport;
    report:constraint <urn:uuid:7655c3fd-75e1-4da1-9cfd-2e9cd230ae8f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c693d044-b269-4906-acad-33a90bb11fb4>, <urn:uuid:e915ffb5-939a-4549-81fd-a074623ec546>.
<urn:uuid:c693d044-b269-4906-acad-33a90bb11fb4> a report:ConstraintReport;
    report:constraint <urn:uuid:41231ddb-58b0-4cb3-997b-b6e54dcf24cb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e915ffb5-939a-4549-81fd-a074623ec546> a report:ConstraintReport;
    report:constraint <urn:uuid:bfca2595-5a81-4e54-89e1-cc0b2caf602a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:df33f013-8a33-4604-9d16-35bee892dfe5> a report:ConstraintReport;
    report:constraint <urn:uuid:2abc17af-ec27-4334-81ec-eddba73cba51>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b2eb9fcd-b8b1-499e-8c45-30ede552a66b>, <urn:uuid:f55d67aa-5567-4b6f-a603-ce0496a71619>.
<urn:uuid:b2eb9fcd-b8b1-499e-8c45-30ede552a66b> a report:ConstraintReport;
    report:constraint <urn:uuid:28dc8bd5-ace0-4ae2-9e8a-b9a787b0fb02>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f55d67aa-5567-4b6f-a603-ce0496a71619> a report:ConstraintReport;
    report:constraint <urn:uuid:cf11b614-0228-4363-9748-b235b38ae30f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:66aa2161-dfe6-4a6b-be31-9ba4e9c933fe> a report:ConstraintReport;
    report:constraint <urn:uuid:97e7e460-8655-4b64-b3f1-1d89f6e0c4a0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:621212a2-a4da-4b7b-b23e-63a2762923ea>, <urn:uuid:a864bccf-fa54-4d36-b429-da3dcab91572>.
<urn:uuid:621212a2-a4da-4b7b-b23e-63a2762923ea> a report:ConstraintReport;
    report:constraint <urn:uuid:a295e7a2-11d4-443d-b0fc-27b5475692b3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:a864bccf-fa54-4d36-b429-da3dcab91572> a report:ConstraintReport;
    report:constraint <urn:uuid:c2ed777e-d6d3-45ef-9449-038241f6eaa1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f2976fb0-4202-4c12-bff7-24d2213c24d6> a report:ConstraintReport;
    report:constraint <urn:uuid:7e2c2746-5afb-444f-a09f-73af2b79e702>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c4c534a7-7323-4089-8ec3-6341e0466b80>, <urn:uuid:ec60cbff-2166-4f20-bf70-f057e916fb2f>.
<urn:uuid:c4c534a7-7323-4089-8ec3-6341e0466b80> a report:ConstraintReport;
    report:constraint <urn:uuid:d2622e26-c235-4154-802f-1cc43cce0e9c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-20T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:ec60cbff-2166-4f20-bf70-f057e916fb2f> a report:ConstraintReport;
    report:constraint <urn:uuid:afdd3398-8867-49c8-adb9-8c58591d38da>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c328c65c-e067-4cef-8d71-a1f457501d8f> a report:ConstraintReport;
    report:constraint <urn:uuid:0eb27dd6-ebfd-41e1-bee1-ccf4f9567a61>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2f252054-d3d3-4056-bfa0-6a28f48a96af>, <urn:uuid:a9dd82e3-7415-48ed-ac4a-b0595862aef0>.
<urn:uuid:2f252054-d3d3-4056-bfa0-6a28f48a96af> a report:ConstraintReport;
    report:constraint <urn:uuid:86aa8499-9037-417f-8715-75222b9ebe30>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-21T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:a9dd82e3-7415-48ed-ac4a-b0595862aef0> a report:ConstraintReport;
    report:constraint <urn:uuid:b2758ead-13a0-41c4-add8-252524e9f8a0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0949ecf7-6471-4690-9d44-30ea6250c69c> a report:ConstraintReport;
    report:constraint <urn:uuid:29df4b6d-1b30-4619-9736-9910241d9c0c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:76cf9b7c-2d13-4243-a546-2a36918161ef>, <urn:uuid:0dcf4d13-881b-4154-b9f4-91b8023e44f5>.
<urn:uuid:76cf9b7c-2d13-4243-a546-2a36918161ef> a report:ConstraintReport;
    report:constraint <urn:uuid:cf9bbdcc-8d0f-4c57-9f1d-95c74a559c00>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0dcf4d13-881b-4154-b9f4-91b8023e44f5> a report:ConstraintReport;
    report:constraint <urn:uuid:8dcd9741-0979-46ce-80b1-43c0a1dc1fad>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:453f5955-d7e5-43e2-b907-ffc619d0b4cd> a report:ConstraintReport;
    report:constraint <urn:uuid:e0b803b3-e897-4aad-843d-ef986e32dc64>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5f0b26bb-1ee1-464b-b1da-1dea04faf880>, <urn:uuid:9417b6a7-cffa-4c02-9c65-8d8b290ab58f>.
<urn:uuid:5f0b26bb-1ee1-464b-b1da-1dea04faf880> a report:ConstraintReport;
    report:constraint <urn:uuid:cf647d6f-bea3-4d45-823c-fae5b63dd008>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:9417b6a7-cffa-4c02-9c65-8d8b290ab58f> a report:ConstraintReport;
    report:constraint <urn:uuid:b6de3f00-5094-4979-b409-aa474e26e055>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ff9647c8-dc6e-4e0f-9593-26a1b8e224b4> a report:ConstraintReport;
    report:constraint <urn:uuid:5f91aee4-9ac7-41ed-abdd-c11df12d361b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4356d4bd-764c-451e-8099-951dbc4253ea>, <urn:uuid:08433538-9a6a-4b87-9c17-d320b84667ae>.
<urn:uuid:4356d4bd-764c-451e-8099-951dbc4253ea> a report:ConstraintReport;
    report:constraint <urn:uuid:036d0c94-4a07-4286-94ac-1116eef0cc52>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:08433538-9a6a-4b87-9c17-d320b84667ae> a report:ConstraintReport;
    report:constraint <urn:uuid:10bfe567-4ead-4ce3-89e2-42df9f22aea9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c5e93e06-d532-4557-abc9-d63c56cabe56> a report:ConstraintReport;
    report:constraint <urn:uuid:6dc5739c-5b2f-4d80-8336-3af8987cf193>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:40d97caa-2c26-498a-a789-8c463b0e4fbe>, <urn:uuid:53b6223f-833a-4655-9578-ffb393e54699>.
<urn:uuid:40d97caa-2c26-498a-a789-8c463b0e4fbe> a report:ConstraintReport;
    report:constraint <urn:uuid:fdf6c6bd-e646-4c17-b9e7-062d2dce954b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-27T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:53b6223f-833a-4655-9578-ffb393e54699> a report:ConstraintReport;
    report:constraint <urn:uuid:682412e3-ed3a-4939-a34f-32dd660424a6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fc68f52d-478b-4a11-b883-64a66c467f4e> a report:ConstraintReport;
    report:constraint <urn:uuid:2aa878e6-76d0-4bb8-96ea-3be7d735a3ac>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d5c595bd-966c-4450-84fa-50c1ef7731d2>, <urn:uuid:4e0c04a7-dd56-4447-b39f-967e1b408f61>.
<urn:uuid:d5c595bd-966c-4450-84fa-50c1ef7731d2> a report:ConstraintReport;
    report:constraint <urn:uuid:86d4a7d1-f293-4a39-b34e-eb3baf9a0056>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-28T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:4e0c04a7-dd56-4447-b39f-967e1b408f61> a report:ConstraintReport;
    report:constraint <urn:uuid:8a89dd13-3c04-408c-939c-b11ec3652ec8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:64f93118-8091-4440-b8e1-7594dbf67a9a> a report:ConstraintReport;
    report:constraint <urn:uuid:4f2a4f2e-67a9-4b56-9e5d-3a7ec58ad9a5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a0a81234-b464-43c9-8f14-d05cf4373a69>, <urn:uuid:61e2f3f2-d424-4853-9b34-1028c9aadb83>.
<urn:uuid:a0a81234-b464-43c9-8f14-d05cf4373a69> a report:ConstraintReport;
    report:constraint <urn:uuid:12ff5e1a-5369-4a48-8a68-d2e1b5d7dc13>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-02-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:61e2f3f2-d424-4853-9b34-1028c9aadb83> a report:ConstraintReport;
    report:constraint <urn:uuid:c78b788a-0eb7-4a4a-9e63-3127ec49505c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:471f04d0-e5fd-4108-84e3-fb1fd040946b> a report:ConstraintReport;
    report:constraint <urn:uuid:2206cd56-4786-445c-aa3a-08e840d6e640>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4a612e2f-f839-4181-8eb3-e9d7c71b6d20>, <urn:uuid:860e53d0-80b0-4216-8509-d1af83481b48>.
<urn:uuid:4a612e2f-f839-4181-8eb3-e9d7c71b6d20> a report:ConstraintReport;
    report:constraint <urn:uuid:c59aa3f0-93ef-46d4-8df3-6c6c61277d0d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:860e53d0-80b0-4216-8509-d1af83481b48> a report:ConstraintReport;
    report:constraint <urn:uuid:c98ed27d-d93f-4ec8-9310-7b5a71388340>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:22e6adc8-273e-46d1-9b8a-2afc0e746df3> a report:ConstraintReport;
    report:constraint <urn:uuid:ec78c7d3-66b7-4d54-9aac-2b198c1f02dc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3a40f462-aeb0-4e42-8d34-922757906186>, <urn:uuid:268eab0d-e519-4172-ba43-442ac3f8a392>.
<urn:uuid:3a40f462-aeb0-4e42-8d34-922757906186> a report:ConstraintReport;
    report:constraint <urn:uuid:232613ed-19cd-4dd7-9c72-3e21620f4add>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:268eab0d-e519-4172-ba43-442ac3f8a392> a report:ConstraintReport;
    report:constraint <urn:uuid:a3669cbc-2aba-4bd6-91b4-9449ee57e85a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d32ffbfa-9a4e-4ef1-8363-addf95f73395> a report:ConstraintReport;
    report:constraint <urn:uuid:b8bf92b6-748c-4178-b192-5b2b3c6db4a0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2e4bcf2d-0907-4853-ab69-b702458f13c1>, <urn:uuid:110aa028-0ce1-40dc-a9a6-5f1e2f7fa73c>.
<urn:uuid:2e4bcf2d-0907-4853-ab69-b702458f13c1> a report:ConstraintReport;
    report:constraint <urn:uuid:0d212516-df92-4b4f-bed6-7d89ef1845d7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:110aa028-0ce1-40dc-a9a6-5f1e2f7fa73c> a report:ConstraintReport;
    report:constraint <urn:uuid:2ef117f2-58c5-4a16-ba19-f929db02c97b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c5d81245-306a-4f06-b7c8-c62f175944ed> a report:ConstraintReport;
    report:constraint <urn:uuid:246ce49c-f71e-4801-b69a-d964d0bd115d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7b205cb0-505a-4815-ac6e-fdc2674ece45>, <urn:uuid:33e2b729-dbb0-4a46-8543-a9552caaee19>.
<urn:uuid:7b205cb0-505a-4815-ac6e-fdc2674ece45> a report:ConstraintReport;
    report:constraint <urn:uuid:5c73a362-7f09-4787-9bca-2fc277c2f049>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-06T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:33e2b729-dbb0-4a46-8543-a9552caaee19> a report:ConstraintReport;
    report:constraint <urn:uuid:ae293447-5e2a-4d93-9ca2-10953a0d9768>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:65786ef5-14d5-4ceb-80e8-d45c6df82704> a report:ConstraintReport;
    report:constraint <urn:uuid:29120bf0-065f-4622-b514-2b911a431c20>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:00be29f9-779a-4850-abbc-db2a2138141c>, <urn:uuid:2d394269-8110-4020-87a1-fdcc757f90a9>.
<urn:uuid:00be29f9-779a-4850-abbc-db2a2138141c> a report:ConstraintReport;
    report:constraint <urn:uuid:f8779597-3a2c-4f26-9a2f-2e5bffac343f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-07T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:2d394269-8110-4020-87a1-fdcc757f90a9> a report:ConstraintReport;
    report:constraint <urn:uuid:7c223c6a-8190-4c5a-8877-87edeac8606d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b0b63ad2-4226-46b1-b9f9-e4bd80e5fc9f> a report:ConstraintReport;
    report:constraint <urn:uuid:4a59f4f2-aff3-4517-a411-d2e510bf8c96>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:486db7b8-ad80-439b-a05d-27e585b6ce66>, <urn:uuid:638e28f1-e05a-4f9e-aef0-e57f3a9f9223>.
<urn:uuid:486db7b8-ad80-439b-a05d-27e585b6ce66> a report:ConstraintReport;
    report:constraint <urn:uuid:f663d7eb-0c52-4feb-9482-a504a47e1c6e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:638e28f1-e05a-4f9e-aef0-e57f3a9f9223> a report:ConstraintReport;
    report:constraint <urn:uuid:62be9fc6-5ca1-403d-8a82-38ff3d0e74eb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:862ee85e-ddf2-409e-ba8a-e4a30a8e9989> a report:ConstraintReport;
    report:constraint <urn:uuid:b2f555d9-9210-44c1-81fe-edc8991ffd56>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f3ee45b3-8404-4048-a1c4-e7f42cb575bf>, <urn:uuid:f35a5ba1-3af3-4ff4-bf07-84f2ad466a47>.
<urn:uuid:f3ee45b3-8404-4048-a1c4-e7f42cb575bf> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d9525f-2594-4d84-ae2f-60e8b1c79dd7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f35a5ba1-3af3-4ff4-bf07-84f2ad466a47> a report:ConstraintReport;
    report:constraint <urn:uuid:b4032ba4-2cdb-41e7-bdd2-bfcb10f35578>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:13f409e0-ce20-4d93-bf46-1ad9272e196a> a report:ConstraintReport;
    report:constraint <urn:uuid:f0f5ad97-b87d-4279-a867-866578fe19f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b205926b-29cd-447d-90dd-842d34955c35>, <urn:uuid:7458ca3e-23d0-424f-83d0-289246dd4246>.
<urn:uuid:b205926b-29cd-447d-90dd-842d34955c35> a report:ConstraintReport;
    report:constraint <urn:uuid:caeaf79a-a8b1-4974-884c-d026510540ef>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7458ca3e-23d0-424f-83d0-289246dd4246> a report:ConstraintReport;
    report:constraint <urn:uuid:a7700171-4036-4fcf-a5f2-7cb3cc31de25>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9879e627-0c3b-419b-be38-231c8e37ea10> a report:ConstraintReport;
    report:constraint <urn:uuid:1150ffd0-17c2-4ae5-bfd5-cd36a0363a1b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1ed71721-6548-4f5e-b5b7-73dde8f618ab>, <urn:uuid:cd91e8c4-ac7b-4c69-9366-f12b572c36da>.
<urn:uuid:1ed71721-6548-4f5e-b5b7-73dde8f618ab> a report:ConstraintReport;
    report:constraint <urn:uuid:11ec29fd-5465-4a7f-85b7-591370cd9411>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-13T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:cd91e8c4-ac7b-4c69-9366-f12b572c36da> a report:ConstraintReport;
    report:constraint <urn:uuid:acba8216-ebfc-48c5-ac0b-18907f47e2fd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fe6486ab-ca60-471d-aea6-7ed09a91356d> a report:ConstraintReport;
    report:constraint <urn:uuid:8b4fa82c-c1ef-4115-b314-a1e40eaed545>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4f25d22e-e309-406e-91a1-10485f7db19e>, <urn:uuid:c92cabd1-22b0-490b-a073-a94a96cc10e6>.
<urn:uuid:4f25d22e-e309-406e-91a1-10485f7db19e> a report:ConstraintReport;
    report:constraint <urn:uuid:e0a01914-78fa-4af1-936d-9969b3248333>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-14T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c92cabd1-22b0-490b-a073-a94a96cc10e6> a report:ConstraintReport;
    report:constraint <urn:uuid:12bc0dcb-a27b-4d38-9942-35dd66a91a57>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b1cdec0b-0048-4d82-b5e0-f11d62125aef> a report:ConstraintReport;
    report:constraint <urn:uuid:2c95e2cf-979a-4f36-8070-44ab64ef4a52>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4990bff7-33d8-4d0f-83e2-8f836c01a8de>, <urn:uuid:616024cf-c321-402a-aaef-b5536c348b2a>.
<urn:uuid:4990bff7-33d8-4d0f-83e2-8f836c01a8de> a report:ConstraintReport;
    report:constraint <urn:uuid:90da3e68-6622-409f-8dd4-d91c37a3dc14>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:616024cf-c321-402a-aaef-b5536c348b2a> a report:ConstraintReport;
    report:constraint <urn:uuid:c05488fe-3204-42ba-b223-ec91f4bfacd3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:20faa690-3d57-4d2a-9dd0-621b7a536e1b> a report:ConstraintReport;
    report:constraint <urn:uuid:091b7cd1-3c5d-4872-ac1f-ea4013ecfe3a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:801d31dd-b944-44ca-a80a-a095b9ef2819>, <urn:uuid:7c74fe45-6826-4a60-8f4a-1db1803e5cdb>.
<urn:uuid:801d31dd-b944-44ca-a80a-a095b9ef2819> a report:ConstraintReport;
    report:constraint <urn:uuid:7cc22b5b-9903-40b9-a70e-a30db7bc9a49>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7c74fe45-6826-4a60-8f4a-1db1803e5cdb> a report:ConstraintReport;
    report:constraint <urn:uuid:3e80b2c2-f0d6-40b8-a27d-f54e77746750>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:163fdcdc-97f7-43ea-82b1-95ee662534f3> a report:ConstraintReport;
    report:constraint <urn:uuid:eb10643c-9448-493e-a898-5c30b281d81a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b3a5f87d-6fc2-416a-8422-f176f227cd68>, <urn:uuid:721a1625-3b8c-40fe-ad1e-1d2bcd712adc>.
<urn:uuid:b3a5f87d-6fc2-416a-8422-f176f227cd68> a report:ConstraintReport;
    report:constraint <urn:uuid:eec64efb-fce2-4fa3-9e33-f886bd33a5dc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:721a1625-3b8c-40fe-ad1e-1d2bcd712adc> a report:ConstraintReport;
    report:constraint <urn:uuid:5dfffd4f-1ae0-4ff1-adf8-aec9529b612d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9f5c91e9-301a-411b-88ab-14ca27613ecf> a report:ConstraintReport;
    report:constraint <urn:uuid:34f70158-fe31-4ca1-85d0-c4957382a876>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:dcd936be-f04c-4e3b-b985-cbb3df6e450b>, <urn:uuid:55933da3-e156-48f5-a364-13d3c835747f>.
<urn:uuid:dcd936be-f04c-4e3b-b985-cbb3df6e450b> a report:ConstraintReport;
    report:constraint <urn:uuid:a175ab20-2cca-4cdb-aee8-f8783f2db5cc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-20T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:55933da3-e156-48f5-a364-13d3c835747f> a report:ConstraintReport;
    report:constraint <urn:uuid:047c53f9-aa36-432f-ad82-84a550c20329>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:76f6939a-4f00-4945-ba5d-ce5eb3e08d8f> a report:ConstraintReport;
    report:constraint <urn:uuid:08a6a691-f695-40f9-8ef0-cd929a71cd80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:efcc77e8-4435-4d80-b746-5d0c39e651bc>, <urn:uuid:90606e64-2490-4446-8347-0b93fd8be58f>.
<urn:uuid:efcc77e8-4435-4d80-b746-5d0c39e651bc> a report:ConstraintReport;
    report:constraint <urn:uuid:357cf85a-d947-4537-9c93-3bd3039ff9d3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-21T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:90606e64-2490-4446-8347-0b93fd8be58f> a report:ConstraintReport;
    report:constraint <urn:uuid:a2e7cadb-f3ea-4457-823f-30b2b3e7c6bb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:800257c5-8261-4284-9dcd-9210a44c97b2> a report:ConstraintReport;
    report:constraint <urn:uuid:605cff08-6f85-47c4-a3fc-e4ccfdf4272b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:01dd8617-78ab-43bf-b189-36e96086cfc9>, <urn:uuid:673e96a7-2bf2-40ee-851a-cd3b9fdfe36e>.
<urn:uuid:01dd8617-78ab-43bf-b189-36e96086cfc9> a report:ConstraintReport;
    report:constraint <urn:uuid:c96176c5-f3d2-4fb7-9083-41460a033ad6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:673e96a7-2bf2-40ee-851a-cd3b9fdfe36e> a report:ConstraintReport;
    report:constraint <urn:uuid:9f46330c-a19f-4d32-a821-d4d36b33e862>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:732e583d-945e-4d40-bc8f-5a83eb042210> a report:ConstraintReport;
    report:constraint <urn:uuid:d9ee2558-651c-478e-8b36-b554c988bee6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f71e9ea3-c915-4f2b-8687-a41662204308>, <urn:uuid:a22d4b27-d405-45a6-ba44-cb23ed41a1ff>.
<urn:uuid:f71e9ea3-c915-4f2b-8687-a41662204308> a report:ConstraintReport;
    report:constraint <urn:uuid:52376ec6-1dcf-41a6-814a-625e38c4abd6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:a22d4b27-d405-45a6-ba44-cb23ed41a1ff> a report:ConstraintReport;
    report:constraint <urn:uuid:e5acc7a3-c847-4191-a67f-4deeddeee9e2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7c84605f-a3c6-44c7-9013-d560639d1a40> a report:ConstraintReport;
    report:constraint <urn:uuid:0cbbaa09-776e-4273-8e5d-8d7cfa08b215>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:733c2272-dd42-47aa-8cf2-3ca282baceea>, <urn:uuid:d46c4ede-e6c8-42cf-b06b-64efd1e0aaf8>.
<urn:uuid:733c2272-dd42-47aa-8cf2-3ca282baceea> a report:ConstraintReport;
    report:constraint <urn:uuid:d6e369b2-946c-448c-86a2-3b371cf694c7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:d46c4ede-e6c8-42cf-b06b-64efd1e0aaf8> a report:ConstraintReport;
    report:constraint <urn:uuid:34718c82-a7ad-4aaf-90b6-3c10bc75fc72>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2f204bf6-fb18-432e-84ba-54891f2659f2> a report:ConstraintReport;
    report:constraint <urn:uuid:7fa67880-ab1d-437f-9cf0-5983985cde80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:892eeaf0-c403-4cf1-bbd3-fcb29269eb4b>, <urn:uuid:3d61f128-7eb0-4223-9c26-9f8bdd7a9df2>.
<urn:uuid:892eeaf0-c403-4cf1-bbd3-fcb29269eb4b> a report:ConstraintReport;
    report:constraint <urn:uuid:33cfa5e3-b633-481a-92ba-f113cd957a57>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-27T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:3d61f128-7eb0-4223-9c26-9f8bdd7a9df2> a report:ConstraintReport;
    report:constraint <urn:uuid:5eef2704-2230-4e7d-a463-eba0383ad4d3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f713d45f-51c0-4d00-bb4a-5bb41d1d2511> a report:ConstraintReport;
    report:constraint <urn:uuid:d56b1ab6-1061-4698-a7b1-6d1fb928b712>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:126d1eed-5f68-48c8-9c29-31e320caabf0>, <urn:uuid:cfa7f05f-5d7e-48ee-84d2-219ecb12fc1b>.
<urn:uuid:126d1eed-5f68-48c8-9c29-31e320caabf0> a report:ConstraintReport;
    report:constraint <urn:uuid:ad7a1e60-a6b7-4903-a1f1-863b7bc4399e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-28T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:cfa7f05f-5d7e-48ee-84d2-219ecb12fc1b> a report:ConstraintReport;
    report:constraint <urn:uuid:a3667f7c-30a5-4535-8d8f-2e390aa2d612>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f67e67b9-5fa2-49cb-8a93-c8ebc2a09b29> a report:ConstraintReport;
    report:constraint <urn:uuid:351f0fe6-a2c8-4a67-9220-979055330e25>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d241a5ff-2456-42db-aea1-3f69b3a1e8db>, <urn:uuid:1c85dd02-4c18-4d8c-90d2-9f9287a34b70>.
<urn:uuid:d241a5ff-2456-42db-aea1-3f69b3a1e8db> a report:ConstraintReport;
    report:constraint <urn:uuid:54f544df-39ae-4b88-8e47-37c28e780efd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-03-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1c85dd02-4c18-4d8c-90d2-9f9287a34b70> a report:ConstraintReport;
    report:constraint <urn:uuid:ede4d7ba-367f-4e5b-9b77-7aaeff89e714>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1c30dcd3-909f-4ad5-951e-04960a4e9e5d> a report:ConstraintReport;
    report:constraint <urn:uuid:2df3010b-c218-4522-aa01-95b27101dfbb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7d5fa722-52da-4e3d-8ecd-4d3cb3aeaddb>, <urn:uuid:5a753fdd-114e-4335-9b77-5add1a836d94>.
<urn:uuid:7d5fa722-52da-4e3d-8ecd-4d3cb3aeaddb> a report:ConstraintReport;
    report:constraint <urn:uuid:1d594078-60e7-403c-b000-2ea020fbbed0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5a753fdd-114e-4335-9b77-5add1a836d94> a report:ConstraintReport;
    report:constraint <urn:uuid:34ae08cd-7c1e-4860-a4d0-fbfa848b39af>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fc0fa9a0-cbc3-4e38-867f-5f06357489f0> a report:ConstraintReport;
    report:constraint <urn:uuid:61325691-ebaf-4599-a045-c6fff992505f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b4a68fee-f862-45bc-a8e1-911e30ea8de5>, <urn:uuid:336902c1-b32c-4f49-8cbe-0c02c36dcffc>.
<urn:uuid:b4a68fee-f862-45bc-a8e1-911e30ea8de5> a report:ConstraintReport;
    report:constraint <urn:uuid:c9970dce-15f9-48b0-8f56-d21aae32d395>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:336902c1-b32c-4f49-8cbe-0c02c36dcffc> a report:ConstraintReport;
    report:constraint <urn:uuid:3bcd9556-b8d4-4855-8539-8dacd89ec8a4>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:660795c7-b01f-4cd3-a75f-b4cb1a9fdc28> a report:ConstraintReport;
    report:constraint <urn:uuid:d0c698e7-911f-4f4b-bc87-286686632871>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b3389981-9f8f-4926-82e8-9e4f2fe6c58b>, <urn:uuid:8f72ab17-1208-4400-a7ab-4c76e67b918c>.
<urn:uuid:b3389981-9f8f-4926-82e8-9e4f2fe6c58b> a report:ConstraintReport;
    report:constraint <urn:uuid:6a26e7eb-02a9-4ab5-a42a-3bb0798d7840>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-03T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:8f72ab17-1208-4400-a7ab-4c76e67b918c> a report:ConstraintReport;
    report:constraint <urn:uuid:2be5be5e-f823-4637-b957-8a9ed49392f6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b13d0912-2aee-415b-8814-4a580fcf3a69> a report:ConstraintReport;
    report:constraint <urn:uuid:053e3c7c-6888-43c9-a9f0-4cb24ca6d09d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c390e496-8114-482e-bf4e-3da9c28708f5>, <urn:uuid:6214c852-7530-44b3-8e67-fa87f5d22275>.
<urn:uuid:c390e496-8114-482e-bf4e-3da9c28708f5> a report:ConstraintReport;
    report:constraint <urn:uuid:2c8bb9d7-feb8-443a-9a1e-c8c9ced231aa>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6214c852-7530-44b3-8e67-fa87f5d22275> a report:ConstraintReport;
    report:constraint <urn:uuid:9ca4744b-a2a1-4cf5-969e-f70c9025e6a3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:88cf6a6e-19bb-408f-9080-044ef0fd34a8> a report:ConstraintReport;
    report:constraint <urn:uuid:08c7c40a-15a1-4348-a285-c14e1936f7cc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b347ebef-25f3-42fb-9508-68a3d9844ba7>, <urn:uuid:72c1216d-8967-4bf4-ba2d-389fc518328d>.
<urn:uuid:b347ebef-25f3-42fb-9508-68a3d9844ba7> a report:ConstraintReport;
    report:constraint <urn:uuid:ca4e3622-8fdf-4b04-879a-286bd3a5e7e5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:72c1216d-8967-4bf4-ba2d-389fc518328d> a report:ConstraintReport;
    report:constraint <urn:uuid:158f426f-fe7d-4105-ae02-fab3f6821a23>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7e3340b7-9de3-431a-93dc-3523dbb7714b> a report:ConstraintReport;
    report:constraint <urn:uuid:8ea0d34a-c216-4aca-a3c9-0142b96bae5e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:65200872-d1d3-4492-a70a-31e1e77efc82>, <urn:uuid:b9eaa0aa-a380-4643-bd6a-9d7ac32f85f3>.
<urn:uuid:65200872-d1d3-4492-a70a-31e1e77efc82> a report:ConstraintReport;
    report:constraint <urn:uuid:4bef72cd-1ada-40fc-97e1-c079b91e6d19>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:b9eaa0aa-a380-4643-bd6a-9d7ac32f85f3> a report:ConstraintReport;
    report:constraint <urn:uuid:fcad40a5-d827-4a01-945b-22f4a3a3d52a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:15b1d1e7-f620-43ab-a0e5-76c77f87fead> a report:ConstraintReport;
    report:constraint <urn:uuid:7a3b0622-c6ce-4428-a617-2ddee777f29e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:54f6f940-5c18-4296-9c68-37ced66912ab>, <urn:uuid:992e6dc2-d586-4bea-bf16-9608c36face0>.
<urn:uuid:54f6f940-5c18-4296-9c68-37ced66912ab> a report:ConstraintReport;
    report:constraint <urn:uuid:ef047f01-6e88-4e65-bc31-3ba9975f20eb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:992e6dc2-d586-4bea-bf16-9608c36face0> a report:ConstraintReport;
    report:constraint <urn:uuid:6afcc055-a528-499a-9ea6-659e94940f69>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bb49dc2b-8673-49dc-9537-0cd6e8c2f85f> a report:ConstraintReport;
    report:constraint <urn:uuid:e26c2df3-ff61-4c45-aea6-39c13f074c5d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b392009f-9133-44ae-8748-6d6e8ebaa282>, <urn:uuid:afccd8d0-c9bb-43f1-a1ba-afed02ed4512>.
<urn:uuid:b392009f-9133-44ae-8748-6d6e8ebaa282> a report:ConstraintReport;
    report:constraint <urn:uuid:0d49ed46-690e-4030-864a-eb827ee99d3e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-10T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:afccd8d0-c9bb-43f1-a1ba-afed02ed4512> a report:ConstraintReport;
    report:constraint <urn:uuid:f44e8ebe-7464-434d-b0f9-477e83ef959a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fac1ab17-3e75-4c5c-9f20-168545a43f68> a report:ConstraintReport;
    report:constraint <urn:uuid:038e3c19-fd3f-4c7d-baaf-66cbf1395a80>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:773f7b35-1e7b-487b-8f8d-716300ebf7a1>, <urn:uuid:e528db48-0358-44f8-913a-2c73518f2a79>.
<urn:uuid:773f7b35-1e7b-487b-8f8d-716300ebf7a1> a report:ConstraintReport;
    report:constraint <urn:uuid:0f3605d0-954f-4130-897b-b7f1bd20cb6c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e528db48-0358-44f8-913a-2c73518f2a79> a report:ConstraintReport;
    report:constraint <urn:uuid:dfcc026a-e0e2-4f01-b5e9-f5bc64097841>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:df1e4975-f13a-46a6-a3e2-87cb6729b78b> a report:ConstraintReport;
    report:constraint <urn:uuid:6cd96404-8106-43fb-a03c-c9afe481afef>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:191978ff-3612-4051-8289-6dee7fdedc1b>, <urn:uuid:ac4db1e0-fc0e-4e07-9567-b600b6456cf0>.
<urn:uuid:191978ff-3612-4051-8289-6dee7fdedc1b> a report:ConstraintReport;
    report:constraint <urn:uuid:c7117e0f-74e6-4d62-a7b0-02c83ffedbe1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:ac4db1e0-fc0e-4e07-9567-b600b6456cf0> a report:ConstraintReport;
    report:constraint <urn:uuid:d1b4e1e8-3033-4894-b6af-3b2387489e43>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e1a043e3-a704-42f1-9337-fac6f97ead3b> a report:ConstraintReport;
    report:constraint <urn:uuid:f6493d80-8cc2-4d9f-a692-f5bf273411ee>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:335c5039-cd22-47ca-a375-5a042ba678c9>, <urn:uuid:481dc8de-1418-40fc-aad3-31df303a7c41>.
<urn:uuid:335c5039-cd22-47ca-a375-5a042ba678c9> a report:ConstraintReport;
    report:constraint <urn:uuid:3d4efecd-6caa-4df0-b748-f49eeb4b42c0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:481dc8de-1418-40fc-aad3-31df303a7c41> a report:ConstraintReport;
    report:constraint <urn:uuid:0f055da1-61cc-47b8-8c41-fa26a37d690e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6f03310d-8611-44df-a75b-cd39dd399584> a report:ConstraintReport;
    report:constraint <urn:uuid:e595520b-dd39-4c39-983f-bc428c8ab6ab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fbc0163d-8bc5-424c-980c-4850b1c95297>, <urn:uuid:b2a0bdb9-8451-4d14-ab00-ccade29c3414>.
<urn:uuid:fbc0163d-8bc5-424c-980c-4850b1c95297> a report:ConstraintReport;
    report:constraint <urn:uuid:0f1dc7cb-c623-43c5-9275-41f34cdf1a46>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:b2a0bdb9-8451-4d14-ab00-ccade29c3414> a report:ConstraintReport;
    report:constraint <urn:uuid:f2a3b2c8-9347-40df-86fa-ef9449b5fdfd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:84106c2b-ce7e-40bc-bbed-6ad86c350b6d> a report:ConstraintReport;
    report:constraint <urn:uuid:b1320422-f589-44e6-9a7f-d4e740cf680f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:744fb47a-84e6-4927-9171-3f2e6cada477>, <urn:uuid:da1f141d-606e-49b3-a261-122c733e8a73>.
<urn:uuid:744fb47a-84e6-4927-9171-3f2e6cada477> a report:ConstraintReport;
    report:constraint <urn:uuid:40072600-1bb3-4475-bdc0-bc77e7643546>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-17T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:da1f141d-606e-49b3-a261-122c733e8a73> a report:ConstraintReport;
    report:constraint <urn:uuid:0e29518c-5000-4805-8919-f02486adaed7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:07db690e-f169-4bf0-9e17-696171f30a85> a report:ConstraintReport;
    report:constraint <urn:uuid:78d86c6f-307d-4c5d-be68-5739bd746223>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:23caea82-7664-4d5b-bd6c-7151711f88a5>, <urn:uuid:32e75b74-ab6d-4531-a0ff-acda3f9504a2>.
<urn:uuid:23caea82-7664-4d5b-bd6c-7151711f88a5> a report:ConstraintReport;
    report:constraint <urn:uuid:4951e768-690d-41af-bb2b-68df479b52e1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:32e75b74-ab6d-4531-a0ff-acda3f9504a2> a report:ConstraintReport;
    report:constraint <urn:uuid:916a531f-2d4c-471a-b8d7-64baa4fda3ca>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f3055de7-1fb9-4ff0-94d6-2fd8b31a3a6b> a report:ConstraintReport;
    report:constraint <urn:uuid:3012fdaf-534e-49af-9708-9a7a48c66e26>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2475f32e-e4b0-4b1f-9533-09a12999178f>, <urn:uuid:7cafa313-e8fc-4608-9dfc-9c75119c9961>.
<urn:uuid:2475f32e-e4b0-4b1f-9533-09a12999178f> a report:ConstraintReport;
    report:constraint <urn:uuid:96d4825b-18b5-4e12-b0f2-23f9483b8c17>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7cafa313-e8fc-4608-9dfc-9c75119c9961> a report:ConstraintReport;
    report:constraint <urn:uuid:739ac050-ddff-4333-8af4-4f4a29b45a6e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7c5fe621-c839-44ae-90cd-899c8e005a02> a report:ConstraintReport;
    report:constraint <urn:uuid:4654b01f-328d-4a6f-bed7-6aa0b549661b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e83d9567-d23b-4fbb-82f2-e823d6c541bd>, <urn:uuid:ca6d568b-164f-422e-a466-561b7dbd30f6>.
<urn:uuid:e83d9567-d23b-4fbb-82f2-e823d6c541bd> a report:ConstraintReport;
    report:constraint <urn:uuid:a40605b6-6b23-4b4e-a280-2edf3f384831>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:ca6d568b-164f-422e-a466-561b7dbd30f6> a report:ConstraintReport;
    report:constraint <urn:uuid:f251b506-69d8-4d92-bc56-32be35549828>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7702fd23-28b5-4044-8662-15bc5c0f8be7> a report:ConstraintReport;
    report:constraint <urn:uuid:7e6108e3-fcc2-4d3b-b6e1-ad0fcbe738e1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:69b8c6d0-2a99-44f4-8d19-91fadb77ce11>, <urn:uuid:054ffeb9-df16-494f-b030-207a16b1de52>.
<urn:uuid:69b8c6d0-2a99-44f4-8d19-91fadb77ce11> a report:ConstraintReport;
    report:constraint <urn:uuid:2cdb2a9b-42be-4c8f-b100-cad708025246>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:054ffeb9-df16-494f-b030-207a16b1de52> a report:ConstraintReport;
    report:constraint <urn:uuid:7242b5bf-7879-44c1-9fcb-346ca6933443>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e65ea18e-c22c-40e2-944a-8c928eb66f91> a report:ConstraintReport;
    report:constraint <urn:uuid:835d8bc5-afbc-4329-9c8e-8b6dafd593b5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d845b81a-7c57-4b28-bc0a-7863fb5daa94>, <urn:uuid:d1d81668-7bd6-4590-a312-01853dc27d76>.
<urn:uuid:d845b81a-7c57-4b28-bc0a-7863fb5daa94> a report:ConstraintReport;
    report:constraint <urn:uuid:3c0807b9-65fb-43df-a211-2b2d2d6f4e37>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-24T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:d1d81668-7bd6-4590-a312-01853dc27d76> a report:ConstraintReport;
    report:constraint <urn:uuid:7403d382-c5b2-427c-b812-929ecae8debc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cca3b325-41c5-42e1-aeb2-85ffdafaa38b> a report:ConstraintReport;
    report:constraint <urn:uuid:46fc7cfa-126f-4d3e-99ba-4d8d0f42e6d7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5ac64e90-0a91-4d4e-8d60-ec27f2396e43>, <urn:uuid:55899efc-b48e-4588-b59b-a2905f2ebdfe>.
<urn:uuid:5ac64e90-0a91-4d4e-8d60-ec27f2396e43> a report:ConstraintReport;
    report:constraint <urn:uuid:7dab70b7-4cae-41f2-8759-fa6f0192bdb1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:55899efc-b48e-4588-b59b-a2905f2ebdfe> a report:ConstraintReport;
    report:constraint <urn:uuid:fe00dcab-80f6-4064-b26c-dd220a6cb40c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5b2059b7-54c3-4b51-9f71-b707f41fffd1> a report:ConstraintReport;
    report:constraint <urn:uuid:fc2a256c-19b3-47e3-9ecc-b0a6ac3e1aae>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:10019ad0-ad2f-41dd-81dd-ee9084f0eac3>, <urn:uuid:441b076e-371d-487c-9f75-ec82ea731ab8>.
<urn:uuid:10019ad0-ad2f-41dd-81dd-ee9084f0eac3> a report:ConstraintReport;
    report:constraint <urn:uuid:70612abb-4018-4dc9-8d9d-99c1c5ace31a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:441b076e-371d-487c-9f75-ec82ea731ab8> a report:ConstraintReport;
    report:constraint <urn:uuid:952d2bfd-6b2f-4a3a-b682-f6b3c68a6380>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:84db79a5-9879-40b0-980b-7d24cab62c47> a report:ConstraintReport;
    report:constraint <urn:uuid:9d1c2e80-4ff1-456c-a176-efd8a2ab94e5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bd801046-cd14-4587-b7d0-41b46e3136af>, <urn:uuid:c966b1c6-8e69-4d86-bc95-079ab48e8186>.
<urn:uuid:bd801046-cd14-4587-b7d0-41b46e3136af> a report:ConstraintReport;
    report:constraint <urn:uuid:3de86d07-80ca-48fb-901f-095401660a69>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c966b1c6-8e69-4d86-bc95-079ab48e8186> a report:ConstraintReport;
    report:constraint <urn:uuid:2502afa2-fb5a-427c-bdf7-506f0a203d02>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a7bc67a7-64e1-471e-a7a1-42c52c2b4ae1> a report:ConstraintReport;
    report:constraint <urn:uuid:75f2c124-8774-4109-a764-98a1cc489c0d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8999aa7a-6c32-4d53-ad2d-23cd72ec0c71>, <urn:uuid:fa303e89-052f-4f97-9383-3f5b91e24735>.
<urn:uuid:8999aa7a-6c32-4d53-ad2d-23cd72ec0c71> a report:ConstraintReport;
    report:constraint <urn:uuid:b30da122-a3c2-427a-98d1-54c7a6d3e7e3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-04-30T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:fa303e89-052f-4f97-9383-3f5b91e24735> a report:ConstraintReport;
    report:constraint <urn:uuid:735aa44d-88b1-4bff-9e76-ef0d12ad3bb2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:243455b9-038d-4a50-8819-5b4029cc760d> a report:ConstraintReport;
    report:constraint <urn:uuid:55f0f646-9797-4aa9-858f-51ca41f67aba>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:08bfbbac-66d9-4de1-ab2c-b0e241324e52>, <urn:uuid:09873f75-a188-4042-9b6f-0ce1c2c531e1>.
<urn:uuid:08bfbbac-66d9-4de1-ab2c-b0e241324e52> a report:ConstraintReport;
    report:constraint <urn:uuid:2aa3199a-9027-45d6-9a1f-6f80da4aebc7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:09873f75-a188-4042-9b6f-0ce1c2c531e1> a report:ConstraintReport;
    report:constraint <urn:uuid:9d8a95ba-25d3-44ee-8d80-fa4273e8ae08>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:84f14765-9e67-4cdd-8540-10c25cdc8d6f> a report:ConstraintReport;
    report:constraint <urn:uuid:50d61890-18a5-492a-8b37-1eddf79c7f6f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:af52d383-9c25-4f85-bca6-93aa7adc3014>, <urn:uuid:d4880ac6-731b-4f9a-a924-383daa82c738>.
<urn:uuid:af52d383-9c25-4f85-bca6-93aa7adc3014> a report:ConstraintReport;
    report:constraint <urn:uuid:49175f1f-72e5-4cb3-9188-2d3d60125ca7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:d4880ac6-731b-4f9a-a924-383daa82c738> a report:ConstraintReport;
    report:constraint <urn:uuid:1378ab3c-6c26-450c-b79a-2acb4379a6e3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fa5730c4-cea4-43ab-aba1-ba784ec3cda2> a report:ConstraintReport;
    report:constraint <urn:uuid:9a3c57e4-cfb8-4c6e-a476-d764a2600bb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bd4c24aa-b7f8-445d-93d9-9d3248ad43ff>, <urn:uuid:4420fa56-2bd5-4fe9-a043-cc609b4ef6bd>.
<urn:uuid:bd4c24aa-b7f8-445d-93d9-9d3248ad43ff> a report:ConstraintReport;
    report:constraint <urn:uuid:fc6a79f4-3b41-4be8-897f-9b6b950dfeb9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-03T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:4420fa56-2bd5-4fe9-a043-cc609b4ef6bd> a report:ConstraintReport;
    report:constraint <urn:uuid:0a178d9b-e27e-432f-8483-cd9834947d97>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:44350927-5c98-4745-a7dd-8fc048a0d49b> a report:ConstraintReport;
    report:constraint <urn:uuid:a684702d-9579-4edd-9766-0b7ce904b8f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f132983a-0301-4bad-abc0-d16d405cdda8>, <urn:uuid:938e73e1-9872-4ed4-b4ad-0c092ef34031>.
<urn:uuid:f132983a-0301-4bad-abc0-d16d405cdda8> a report:ConstraintReport;
    report:constraint <urn:uuid:8f7fbde8-0d12-4532-b51a-abfeb05f09dc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-06T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:938e73e1-9872-4ed4-b4ad-0c092ef34031> a report:ConstraintReport;
    report:constraint <urn:uuid:a3f7d124-0c43-4322-90ca-37501a015c05>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:68e40026-0753-4551-a2a2-da873bbe68a1> a report:ConstraintReport;
    report:constraint <urn:uuid:cd32f3a4-24ee-4820-a5e4-da3731568953>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:aa313f95-97d4-4ec0-879f-bd997a5589fe>, <urn:uuid:0222377c-5a86-4c0c-9959-c02be38ce1c6>.
<urn:uuid:aa313f95-97d4-4ec0-879f-bd997a5589fe> a report:ConstraintReport;
    report:constraint <urn:uuid:9a22c068-6c47-475e-910f-3e4a03d71663>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-07T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0222377c-5a86-4c0c-9959-c02be38ce1c6> a report:ConstraintReport;
    report:constraint <urn:uuid:bfe93937-9467-4148-b6a7-04660b15e151>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b2d8cc28-bf08-4052-a1f5-310c8f67a15b> a report:ConstraintReport;
    report:constraint <urn:uuid:7d67465e-ed4f-4caa-8b85-ddc35d754d0b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:07f538c8-5fe3-4443-8c81-ec5a3c20d087>, <urn:uuid:685f8ada-5297-41f9-9913-0e4fc15aa01a>.
<urn:uuid:07f538c8-5fe3-4443-8c81-ec5a3c20d087> a report:ConstraintReport;
    report:constraint <urn:uuid:846ff921-eac4-4e8d-8d9d-0659c8259c5c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:685f8ada-5297-41f9-9913-0e4fc15aa01a> a report:ConstraintReport;
    report:constraint <urn:uuid:6cf4fcff-d602-47b1-8b80-801f47a9f086>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:352c44b0-6058-4bbe-8040-2e8dd59823ab> a report:ConstraintReport;
    report:constraint <urn:uuid:c2e4c4d2-faa2-4cd8-b6d1-1e5e49fb36fb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:22a763a2-c71d-480b-93c9-5beeb5ef9cea>, <urn:uuid:dc784bdd-b746-4f79-9c96-8be11156b513>.
<urn:uuid:22a763a2-c71d-480b-93c9-5beeb5ef9cea> a report:ConstraintReport;
    report:constraint <urn:uuid:dce773b2-0cee-47aa-9132-bc05eef58975>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:dc784bdd-b746-4f79-9c96-8be11156b513> a report:ConstraintReport;
    report:constraint <urn:uuid:0039e402-294e-4ac0-88b0-5a5879749e05>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dc86c06f-7c4a-4437-8342-1c5e00500aa7> a report:ConstraintReport;
    report:constraint <urn:uuid:cc5dd610-24a4-42c5-94aa-010dffc0a302>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9deb82b5-9387-4ae3-8f78-bb4f2241b56f>, <urn:uuid:6a9073f9-f08d-4606-9ff2-c3da103889ea>.
<urn:uuid:9deb82b5-9387-4ae3-8f78-bb4f2241b56f> a report:ConstraintReport;
    report:constraint <urn:uuid:a02c629c-9053-434c-80e7-686aff9fcc4c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-10T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6a9073f9-f08d-4606-9ff2-c3da103889ea> a report:ConstraintReport;
    report:constraint <urn:uuid:bc48b9ac-22cf-4606-a607-37f108cfae63>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:935d74c8-41ee-4399-bb0b-2f23e82cbe81> a report:ConstraintReport;
    report:constraint <urn:uuid:188b83b5-ab83-4421-8238-3c04815b5f14>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e93b5695-b03f-493a-bc41-611c9d719e14>, <urn:uuid:ea25ccf7-c5b0-44b2-825f-0c74c047b891>.
<urn:uuid:e93b5695-b03f-493a-bc41-611c9d719e14> a report:ConstraintReport;
    report:constraint <urn:uuid:edc46467-d0c7-45e5-83d3-71a6fdb03b4f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-13T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:ea25ccf7-c5b0-44b2-825f-0c74c047b891> a report:ConstraintReport;
    report:constraint <urn:uuid:a8e3a909-df18-488e-826d-56f15ad379bd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:16a8e896-6b26-425c-a5e7-a7dd58806fc5> a report:ConstraintReport;
    report:constraint <urn:uuid:fcb349da-54b9-4d93-b2f7-b8f9d0ec2d10>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:842cd764-40e6-4564-b89f-e72a60517d5a>, <urn:uuid:968cf62b-f192-4fa8-a324-620e0f9ce10a>.
<urn:uuid:842cd764-40e6-4564-b89f-e72a60517d5a> a report:ConstraintReport;
    report:constraint <urn:uuid:d2d8d14d-d84d-4d0a-9833-d8bbe88c1e78>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-14T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:968cf62b-f192-4fa8-a324-620e0f9ce10a> a report:ConstraintReport;
    report:constraint <urn:uuid:30261223-0ee7-469b-a383-0c1975a5176d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a8358590-c860-496e-8a1b-4d001394bd54> a report:ConstraintReport;
    report:constraint <urn:uuid:2c4e3415-4958-46a7-b439-6a89d8d20f25>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6a2a3b5c-9e60-4254-b5f0-ebaacde85b60>, <urn:uuid:1cb661e9-97bb-4e2b-b94f-e7633dd1f49b>.
<urn:uuid:6a2a3b5c-9e60-4254-b5f0-ebaacde85b60> a report:ConstraintReport;
    report:constraint <urn:uuid:c889c26c-bae6-4b5d-8c14-c419179bbd88>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1cb661e9-97bb-4e2b-b94f-e7633dd1f49b> a report:ConstraintReport;
    report:constraint <urn:uuid:7bfcd441-9935-4842-a675-92b3dcfc04ab>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5da81afd-b7aa-48f7-9ca4-c98661dad392> a report:ConstraintReport;
    report:constraint <urn:uuid:c7b3cea6-c00e-461a-b5f9-c09a9ab28b32>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ae0033fb-9f01-46f8-b87d-eafd15ac3169>, <urn:uuid:b7d15f71-99ed-46e7-a20f-807a6c397a0c>.
<urn:uuid:ae0033fb-9f01-46f8-b87d-eafd15ac3169> a report:ConstraintReport;
    report:constraint <urn:uuid:bdd0f1a7-694f-4f17-b2bb-b2206b05303f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:b7d15f71-99ed-46e7-a20f-807a6c397a0c> a report:ConstraintReport;
    report:constraint <urn:uuid:19aff331-aa2d-49e1-a3c1-b57cf720ff43>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:35c333d0-809c-48fb-bb39-8b1c1fc25d63> a report:ConstraintReport;
    report:constraint <urn:uuid:91eb91b7-3979-4cd9-b5aa-724ebf454baf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:36e697e7-59fa-4ea2-9eec-413c44974149>, <urn:uuid:1fd2fe68-3f71-479b-8f6f-ab93b6a1fea1>.
<urn:uuid:36e697e7-59fa-4ea2-9eec-413c44974149> a report:ConstraintReport;
    report:constraint <urn:uuid:1a649046-7f69-4210-a64c-03a405ad3530>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-17T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1fd2fe68-3f71-479b-8f6f-ab93b6a1fea1> a report:ConstraintReport;
    report:constraint <urn:uuid:a2ef1882-6281-46f7-bff2-ba9f813edce3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:85390531-dc21-4367-acd6-31e3ea99c5c4> a report:ConstraintReport;
    report:constraint <urn:uuid:c4dd2395-c34e-4035-a94b-dc153fa88c47>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6d814d57-448e-4a67-88a2-1b1d5c0d3df2>, <urn:uuid:c55d1b59-3ee7-40ea-abdd-eab899d14fbf>.
<urn:uuid:6d814d57-448e-4a67-88a2-1b1d5c0d3df2> a report:ConstraintReport;
    report:constraint <urn:uuid:8497d0bc-0ed5-46fd-93cd-a141cee6041e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-20T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c55d1b59-3ee7-40ea-abdd-eab899d14fbf> a report:ConstraintReport;
    report:constraint <urn:uuid:dafadfdb-aae0-4daa-9195-f85fae232d92>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c2dcf1a1-42c5-4dfe-b22e-4f72a66057d0> a report:ConstraintReport;
    report:constraint <urn:uuid:024614b2-366f-43cf-918e-84c60bfacbcf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:040875ae-f7f9-471e-b31d-15618e7eb121>, <urn:uuid:0bdb08f8-8cf9-46a3-8041-342f0fb17f4f>.
<urn:uuid:040875ae-f7f9-471e-b31d-15618e7eb121> a report:ConstraintReport;
    report:constraint <urn:uuid:79794ee3-20b4-48bf-9d23-8a7dd7e39483>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-21T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0bdb08f8-8cf9-46a3-8041-342f0fb17f4f> a report:ConstraintReport;
    report:constraint <urn:uuid:3e6925c3-00a3-4cd1-8ad6-5e5339d885e5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:38e18ab2-cfa4-463b-a32a-ccb35848974c> a report:ConstraintReport;
    report:constraint <urn:uuid:b9f96351-34a1-425b-8b10-62bed2ea5f4e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3cbd4f3e-8647-412e-9305-d65dca0d3fcb>, <urn:uuid:f9e574a8-782f-4208-bf44-7e3334309bd2>.
<urn:uuid:3cbd4f3e-8647-412e-9305-d65dca0d3fcb> a report:ConstraintReport;
    report:constraint <urn:uuid:97dd979b-42b5-4576-8e7e-664137495723>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f9e574a8-782f-4208-bf44-7e3334309bd2> a report:ConstraintReport;
    report:constraint <urn:uuid:fe99da5f-f784-415c-b45d-ad6c98ba023f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0968641b-9345-4c49-b7e7-86f8c7a2cb79> a report:ConstraintReport;
    report:constraint <urn:uuid:659710f4-8ddb-47ed-a9c9-38cfbf5010f4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d7921f8d-ff68-4250-9d9e-f95150770455>, <urn:uuid:11967d7e-9a80-4e89-a378-8fb9cd78936f>.
<urn:uuid:d7921f8d-ff68-4250-9d9e-f95150770455> a report:ConstraintReport;
    report:constraint <urn:uuid:8198d802-de7a-4cfc-9dea-0bf135a8421e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:11967d7e-9a80-4e89-a378-8fb9cd78936f> a report:ConstraintReport;
    report:constraint <urn:uuid:957f7e2d-9de8-4e28-b36c-7b78823fb2e5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e2524cd8-dc18-4461-8aad-2503e18116b8> a report:ConstraintReport;
    report:constraint <urn:uuid:8578de8e-366e-4fd4-abe5-204db416e541>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:59fc0748-88e8-4998-8d85-35e6a60c3ff3>, <urn:uuid:36994e09-b953-4972-af02-1179f9716a24>.
<urn:uuid:59fc0748-88e8-4998-8d85-35e6a60c3ff3> a report:ConstraintReport;
    report:constraint <urn:uuid:a24558d0-25af-4a12-9a93-1525bcd9a50d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-24T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:36994e09-b953-4972-af02-1179f9716a24> a report:ConstraintReport;
    report:constraint <urn:uuid:5b7c0c04-1ea2-4f43-9871-427ca50472fa>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b1eb729d-6eb5-4613-9663-0a86c1b71c3d> a report:ConstraintReport;
    report:constraint <urn:uuid:37993806-e7c3-48ab-b31b-db56c93982b8>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:737c02f5-b94f-4211-b132-023601e23b89>, <urn:uuid:d3637afb-8d92-4efe-86c1-74a81df0b4d5>.
<urn:uuid:737c02f5-b94f-4211-b132-023601e23b89> a report:ConstraintReport;
    report:constraint <urn:uuid:867ff6e8-54fe-4431-8d3f-3b4960fb082b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-27T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:d3637afb-8d92-4efe-86c1-74a81df0b4d5> a report:ConstraintReport;
    report:constraint <urn:uuid:7eae60dc-da60-4d88-8ea0-aa0556bc7295>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c87afe3f-16ed-40c5-8059-dc4ee730f47e> a report:ConstraintReport;
    report:constraint <urn:uuid:f9ea2e45-0726-4b79-856f-0c283a02d999>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:43f08ecc-fa89-43e6-a906-3b8bd38825e1>, <urn:uuid:15b36ade-a067-4ef1-8604-ca9e40f70017>.
<urn:uuid:43f08ecc-fa89-43e6-a906-3b8bd38825e1> a report:ConstraintReport;
    report:constraint <urn:uuid:0df822f6-f678-4489-bd98-5b4e23d0fe28>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-28T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:15b36ade-a067-4ef1-8604-ca9e40f70017> a report:ConstraintReport;
    report:constraint <urn:uuid:3ebe8bdc-387f-41ac-aa10-319976aa9297>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f1139669-4778-4870-bd1a-ae3e38b54789> a report:ConstraintReport;
    report:constraint <urn:uuid:22e92d31-09da-4648-bc8f-f7445536cc4c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:86216095-4c72-4755-8104-c387b9d9b00e>, <urn:uuid:91b8cb4f-18d6-406d-adfc-3739eae67929>.
<urn:uuid:86216095-4c72-4755-8104-c387b9d9b00e> a report:ConstraintReport;
    report:constraint <urn:uuid:654dcd03-9ad5-4991-b258-f0b5103352aa>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:91b8cb4f-18d6-406d-adfc-3739eae67929> a report:ConstraintReport;
    report:constraint <urn:uuid:d5d9d20f-8e00-4778-a850-9fad9ff0e916>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0df19322-c109-4999-99d3-665ebf7e76b0> a report:ConstraintReport;
    report:constraint <urn:uuid:ce990d0d-2cf8-4481-94e1-db9b2d863b11>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:40c4d5e6-939f-4cbd-b56f-1610dc713011>, <urn:uuid:43e11014-1dcd-4f14-b1f3-7aab446be106>.
<urn:uuid:40c4d5e6-939f-4cbd-b56f-1610dc713011> a report:ConstraintReport;
    report:constraint <urn:uuid:a5007b67-532b-4b42-8be8-2004cd4e1217>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-30T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:43e11014-1dcd-4f14-b1f3-7aab446be106> a report:ConstraintReport;
    report:constraint <urn:uuid:34648d20-a5b8-4ee7-9586-40efafb43f50>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b008bc6d-d1d7-4486-b838-91f3466b1f01> a report:ConstraintReport;
    report:constraint <urn:uuid:bb565bc1-5b00-4df3-8ca6-9ce8e9884fb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5a9bf335-0967-4baa-8ec4-02669abdc3aa>, <urn:uuid:f360f539-67f0-4f54-80d9-da1c92217479>.
<urn:uuid:5a9bf335-0967-4baa-8ec4-02669abdc3aa> a report:ConstraintReport;
    report:constraint <urn:uuid:287a4904-fff5-4607-97fb-05c84cb6dd53>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-05-31T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f360f539-67f0-4f54-80d9-da1c92217479> a report:ConstraintReport;
    report:constraint <urn:uuid:e9842aa9-97da-4546-9c0f-211219f59b52>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f95b9cc2-7c24-4d49-93a8-b3f50538ff99> a report:ConstraintReport;
    report:constraint <urn:uuid:c8b4a8bf-e9a5-43fe-863c-99a45736a741>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7a3d95a9-1c47-4ffa-8fce-2f495dc5fbae>, <urn:uuid:bbdd8325-cc20-416e-b20b-2e679964a0ad>.
<urn:uuid:7a3d95a9-1c47-4ffa-8fce-2f495dc5fbae> a report:ConstraintReport;
    report:constraint <urn:uuid:66442849-fbf7-4146-a750-e6b00eab015b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-03T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:bbdd8325-cc20-416e-b20b-2e679964a0ad> a report:ConstraintReport;
    report:constraint <urn:uuid:84657d13-9735-483c-b726-cb4e5e7b46e4>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4068cacd-1192-446d-84e6-ca9eb76687ab> a report:ConstraintReport;
    report:constraint <urn:uuid:0ffa4d37-e577-45f8-b2f8-a52a1310e39f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:991ecd05-c649-4f6d-aeaf-590fc87a1f6d>, <urn:uuid:3581309d-0a09-45ee-8a26-5c992e3aa335>.
<urn:uuid:991ecd05-c649-4f6d-aeaf-590fc87a1f6d> a report:ConstraintReport;
    report:constraint <urn:uuid:c9b80536-64b2-463a-811c-283225833fa9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:3581309d-0a09-45ee-8a26-5c992e3aa335> a report:ConstraintReport;
    report:constraint <urn:uuid:2d6e4afc-3705-41f6-81cf-d24666119347>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a6552c14-a29f-473d-9cc1-94e5abaec2eb> a report:ConstraintReport;
    report:constraint <urn:uuid:70055daa-2732-4649-b94d-dd6099404c1b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:15109fdd-14b3-4d52-b4a4-77aafba3ee6b>, <urn:uuid:83149cf4-09e0-4359-9d3c-436b0fd08d45>.
<urn:uuid:15109fdd-14b3-4d52-b4a4-77aafba3ee6b> a report:ConstraintReport;
    report:constraint <urn:uuid:83fa9fb6-d029-4088-be7e-4d1cd4cd396e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:83149cf4-09e0-4359-9d3c-436b0fd08d45> a report:ConstraintReport;
    report:constraint <urn:uuid:f41a681e-cbf6-47d4-a025-99be9a2443d6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e60fb314-45e2-4309-bf9e-25d541dde0e1> a report:ConstraintReport;
    report:constraint <urn:uuid:de591672-9b17-4917-862f-03e7bcbb43a4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1fb8cd1d-834a-4b32-ac1a-29d831e0dc9f>, <urn:uuid:f6567651-76e9-46c8-a7bc-e434bccb5f6f>.
<urn:uuid:1fb8cd1d-834a-4b32-ac1a-29d831e0dc9f> a report:ConstraintReport;
    report:constraint <urn:uuid:6b572701-1bf4-474e-b164-0dbd291fc2b4>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-06T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f6567651-76e9-46c8-a7bc-e434bccb5f6f> a report:ConstraintReport;
    report:constraint <urn:uuid:ebb3ba93-d189-44e3-ba89-02c69ba14f40>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:45932dc9-8695-4aff-a1e7-865d6a4302ca> a report:ConstraintReport;
    report:constraint <urn:uuid:74b7368c-77f1-48ef-9849-2d2cbf5fa012>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f4595f00-9188-41b6-a1b4-09ac02686c9a>, <urn:uuid:0233c862-9d78-4532-b6a2-5381ef77a638>.
<urn:uuid:f4595f00-9188-41b6-a1b4-09ac02686c9a> a report:ConstraintReport;
    report:constraint <urn:uuid:a1cb611c-b9ed-4154-b5e6-8bc789809230>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-07T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0233c862-9d78-4532-b6a2-5381ef77a638> a report:ConstraintReport;
    report:constraint <urn:uuid:d59f2c20-4538-45ef-a943-c55019d0ded1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f22c44f9-b721-410b-bfc4-75b36870b58e> a report:ConstraintReport;
    report:constraint <urn:uuid:cf644502-f44c-4306-9495-fca5c6310563>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5e51dcde-79df-43e8-b094-b11bc733efbc>, <urn:uuid:f7896f24-c8dd-46b0-b39c-9e3dadd0010a>.
<urn:uuid:5e51dcde-79df-43e8-b094-b11bc733efbc> a report:ConstraintReport;
    report:constraint <urn:uuid:211d29e0-436b-4c8a-a7fc-09960ff2bf6f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-10T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f7896f24-c8dd-46b0-b39c-9e3dadd0010a> a report:ConstraintReport;
    report:constraint <urn:uuid:79305e6b-baeb-44e8-b485-829bc6090091>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1faecba5-bf1a-4f2b-a348-2fbd44f9dfda> a report:ConstraintReport;
    report:constraint <urn:uuid:1f2dcfd1-95a0-4d72-9be7-731bca82dd65>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7867c8a3-b569-415c-bc38-a3b294c6a2b0>, <urn:uuid:6309681a-8815-4370-a788-22e9eaeab541>.
<urn:uuid:7867c8a3-b569-415c-bc38-a3b294c6a2b0> a report:ConstraintReport;
    report:constraint <urn:uuid:c9f03a8a-4e8f-42c4-8bae-3f1235041f0b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6309681a-8815-4370-a788-22e9eaeab541> a report:ConstraintReport;
    report:constraint <urn:uuid:7074d13f-5640-4de5-9a87-e6578747da10>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:443246e2-23c9-4e7b-a324-5c13d4563e34> a report:ConstraintReport;
    report:constraint <urn:uuid:c7593329-2fd1-4321-944a-c22938751a32>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cda81d1f-064b-4b64-a26d-ad9fe5d32033>, <urn:uuid:6ce9e4d4-4c7a-48ec-854f-c4a0b5812708>.
<urn:uuid:cda81d1f-064b-4b64-a26d-ad9fe5d32033> a report:ConstraintReport;
    report:constraint <urn:uuid:3356fcd2-aa25-453d-8614-aeade91b1808>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6ce9e4d4-4c7a-48ec-854f-c4a0b5812708> a report:ConstraintReport;
    report:constraint <urn:uuid:43831461-fe4f-4abf-a8e3-e74573f9949f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2a45a3e9-5a25-4384-be6d-0cda117bfe21> a report:ConstraintReport;
    report:constraint <urn:uuid:e7dfca32-6777-4766-99be-5bd5a84f96f1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:83973835-4ed3-4e32-b2e6-a433da58f9d4>, <urn:uuid:16fa46e8-befa-440a-b0eb-b2e52a72d972>.
<urn:uuid:83973835-4ed3-4e32-b2e6-a433da58f9d4> a report:ConstraintReport;
    report:constraint <urn:uuid:ac584ec9-5fcd-492a-9678-b994b3b98bfe>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-13T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:16fa46e8-befa-440a-b0eb-b2e52a72d972> a report:ConstraintReport;
    report:constraint <urn:uuid:8e18aea4-4892-4e4c-a460-9db6fe062888>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2531365d-6ea9-4099-9163-4e6f4bd67941> a report:ConstraintReport;
    report:constraint <urn:uuid:d0c5b490-d975-479f-9eb8-65c24df82b7d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e08bf8d4-c416-480f-a188-5c22a989a669>, <urn:uuid:fe78509d-79c3-4d21-9582-0cf8c89286b9>.
<urn:uuid:e08bf8d4-c416-480f-a188-5c22a989a669> a report:ConstraintReport;
    report:constraint <urn:uuid:34c89188-bda0-4fe6-a77e-28190079cb2f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-14T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:fe78509d-79c3-4d21-9582-0cf8c89286b9> a report:ConstraintReport;
    report:constraint <urn:uuid:110c798d-8331-4424-a348-09e84408835d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3f1ede02-11bc-4020-a341-14bd26e50f39> a report:ConstraintReport;
    report:constraint <urn:uuid:793cd305-1103-40ea-9e31-a10ab143d8c1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:facb35a7-c874-4f43-bb96-7a4651be8f55>, <urn:uuid:6d35f2d2-fc50-4727-a93f-059a662f9e11>.
<urn:uuid:facb35a7-c874-4f43-bb96-7a4651be8f55> a report:ConstraintReport;
    report:constraint <urn:uuid:4121c33b-3a09-4cdc-81cb-b54487f3cc50>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-17T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6d35f2d2-fc50-4727-a93f-059a662f9e11> a report:ConstraintReport;
    report:constraint <urn:uuid:5bd2c802-97d3-4cb7-8e4e-85c713b64330>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b25508c9-4cc9-461d-a607-ebf0140ddc5c> a report:ConstraintReport;
    report:constraint <urn:uuid:5cdf20be-8fad-4c68-9240-ad7c30283180>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6a24f615-35d0-442f-a302-8955f06f252c>, <urn:uuid:e9da272c-60cd-42fd-8d8e-4ee577830f47>.
<urn:uuid:6a24f615-35d0-442f-a302-8955f06f252c> a report:ConstraintReport;
    report:constraint <urn:uuid:afb27e52-84d0-445a-a6f6-714f67df7a6f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e9da272c-60cd-42fd-8d8e-4ee577830f47> a report:ConstraintReport;
    report:constraint <urn:uuid:1012dbfe-60a2-4866-9778-f368a85a5726>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bb693e9c-7e18-40e4-9d4e-bf472d4747f4> a report:ConstraintReport;
    report:constraint <urn:uuid:74dc97f4-1225-4650-bd8a-3f7068433378>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1ff6a66d-ed6f-4b7a-957d-f0a031b82d15>, <urn:uuid:0a564604-836b-4512-a7bf-9c2d7db388a4>.
<urn:uuid:1ff6a66d-ed6f-4b7a-957d-f0a031b82d15> a report:ConstraintReport;
    report:constraint <urn:uuid:e3ed954b-9703-4492-a6f8-72fd2c25c48c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0a564604-836b-4512-a7bf-9c2d7db388a4> a report:ConstraintReport;
    report:constraint <urn:uuid:7105b292-edb9-43b8-90bd-a4e8eb8ac95a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:47a205be-fd6a-40b8-af51-cba51c645899> a report:ConstraintReport;
    report:constraint <urn:uuid:0ea2f621-6e96-4f3b-94b9-e08e6d535154>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b7f56122-acbb-4c1d-9463-eaa85dd2add6>, <urn:uuid:f780ed59-c3a4-4734-8e07-1f4d06847bea>.
<urn:uuid:b7f56122-acbb-4c1d-9463-eaa85dd2add6> a report:ConstraintReport;
    report:constraint <urn:uuid:ec23ba17-d8e5-41c6-a6af-0593a18f0f24>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-20T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f780ed59-c3a4-4734-8e07-1f4d06847bea> a report:ConstraintReport;
    report:constraint <urn:uuid:5f724fe1-bc81-4b7c-b1df-1e9b04e5a6f5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:72716f64-586d-4055-9f35-605f4eec1e9e> a report:ConstraintReport;
    report:constraint <urn:uuid:3d63f1c2-83c0-4baa-affe-cb056970291b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:287b3933-bc3d-4b09-9ba2-448b3bde9fad>, <urn:uuid:0fbf90a9-49da-4abc-b9fc-c58323bac98d>.
<urn:uuid:287b3933-bc3d-4b09-9ba2-448b3bde9fad> a report:ConstraintReport;
    report:constraint <urn:uuid:27f1e504-7d9e-44a6-b11a-ebf5b5fe1e2d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-21T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0fbf90a9-49da-4abc-b9fc-c58323bac98d> a report:ConstraintReport;
    report:constraint <urn:uuid:46dac938-22a8-4948-8e5f-32f9b3bb6794>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2da8f3e0-c8af-4525-9e62-b7e04fc185d2> a report:ConstraintReport;
    report:constraint <urn:uuid:d611d6ce-52a0-4ea0-89b9-96bef60b5cd8>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:035c3e26-e535-4de2-beea-01648ee5022c>, <urn:uuid:96981b34-e625-4d56-a9b4-084b45f0fa8e>.
<urn:uuid:035c3e26-e535-4de2-beea-01648ee5022c> a report:ConstraintReport;
    report:constraint <urn:uuid:f2827c25-a171-4ec6-ab2e-3388e6b76b69>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-24T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:96981b34-e625-4d56-a9b4-084b45f0fa8e> a report:ConstraintReport;
    report:constraint <urn:uuid:e3188a51-750a-4063-abcf-e2ccc80179f5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ae01c26d-301c-44e4-817f-0c62c939bb3b> a report:ConstraintReport;
    report:constraint <urn:uuid:a7eb3b30-484d-4089-84b5-2d32e9b304de>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:711d44e0-70ab-4999-9921-0d6ce6155c71>, <urn:uuid:5e40bbf8-77bf-471e-9cd1-094e0a687ca5>.
<urn:uuid:711d44e0-70ab-4999-9921-0d6ce6155c71> a report:ConstraintReport;
    report:constraint <urn:uuid:0a13dcd6-4018-4787-adfd-c8259823c058>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5e40bbf8-77bf-471e-9cd1-094e0a687ca5> a report:ConstraintReport;
    report:constraint <urn:uuid:905e628f-fa47-4b72-9f76-9cbe171a4da9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:45223496-c92c-4ebe-a246-65756ab72b31> a report:ConstraintReport;
    report:constraint <urn:uuid:eb39968c-ad7f-4cc1-8587-5b586fb9f1da>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d6254d2a-68c9-4f07-8211-09105f2b6b9a>, <urn:uuid:5ebb0925-9fb5-48e4-917a-f8634ade00f3>.
<urn:uuid:d6254d2a-68c9-4f07-8211-09105f2b6b9a> a report:ConstraintReport;
    report:constraint <urn:uuid:c3a7820c-7131-4b88-aef3-b81598dd598a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5ebb0925-9fb5-48e4-917a-f8634ade00f3> a report:ConstraintReport;
    report:constraint <urn:uuid:b200d898-2d15-45b1-9577-aa029ef7bc02>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:13315c58-ea29-4ba2-a0a9-3c77016d7111> a report:ConstraintReport;
    report:constraint <urn:uuid:93741838-d8f3-488a-8eaa-2593e98d4b85>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:030fc8c4-24e2-40c5-a66f-1c466e857bc1>, <urn:uuid:e1fd5457-37d2-4076-8dc6-f15441f962aa>.
<urn:uuid:030fc8c4-24e2-40c5-a66f-1c466e857bc1> a report:ConstraintReport;
    report:constraint <urn:uuid:3877fc7d-7dcc-444e-bce5-5096271850b2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-27T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e1fd5457-37d2-4076-8dc6-f15441f962aa> a report:ConstraintReport;
    report:constraint <urn:uuid:f37334cb-788d-4365-9265-db7267819a01>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1488ba4b-c7a0-4e81-a468-66f33bec83d8> a report:ConstraintReport;
    report:constraint <urn:uuid:9357eff0-74ad-4ef2-b7cd-b711773f361b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:72ad5e0b-eccb-4c1c-9eb2-d07ab3c4e00c>, <urn:uuid:3f19a558-e928-4d33-b65f-5f07c35e5480>.
<urn:uuid:72ad5e0b-eccb-4c1c-9eb2-d07ab3c4e00c> a report:ConstraintReport;
    report:constraint <urn:uuid:1bcb5f68-157a-4393-bdb1-db0a0cbece74>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-06-28T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:3f19a558-e928-4d33-b65f-5f07c35e5480> a report:ConstraintReport;
    report:constraint <urn:uuid:ac209935-9ca7-4257-bad9-e0e2e2be31b4>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3a9408d3-27de-4520-aeef-e0d970a711d9> a report:ConstraintReport;
    report:constraint <urn:uuid:e01c1d4f-b798-4898-bd37-ae8984e0895e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0ebba72f-7d36-4a6f-9fa5-2925ab49abeb>, <urn:uuid:669b804a-ea18-475f-9bb2-a2ff519e4d64>.
<urn:uuid:0ebba72f-7d36-4a6f-9fa5-2925ab49abeb> a report:ConstraintReport;
    report:constraint <urn:uuid:23112f76-3f5f-4d2e-9cc7-f12772926991>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:669b804a-ea18-475f-9bb2-a2ff519e4d64> a report:ConstraintReport;
    report:constraint <urn:uuid:618046b6-fc4b-472a-9a4a-af22112eeb60>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8ffd4b85-6392-4af7-b95a-48463f4b3af5> a report:ConstraintReport;
    report:constraint <urn:uuid:6c3f0a06-99cf-42a8-9ae1-2e22a1fec935>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a841dcb9-3a2c-42cd-b98a-a9f80f1b4d47>, <urn:uuid:b631b8c8-61d3-4858-a281-8c0887d8602f>.
<urn:uuid:a841dcb9-3a2c-42cd-b98a-a9f80f1b4d47> a report:ConstraintReport;
    report:constraint <urn:uuid:a3b8be99-4511-4e13-9e90-8907a7f3853a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:b631b8c8-61d3-4858-a281-8c0887d8602f> a report:ConstraintReport;
    report:constraint <urn:uuid:245ceef0-260f-4d4a-878a-b947aff1f976>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9e68334f-6bab-4847-93dc-23e37adf3974> a report:ConstraintReport;
    report:constraint <urn:uuid:b4ba21e3-c660-4d48-b2ad-8a84b2e49eb7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:65dbc416-57b1-4891-a52b-20bdb327fe34>, <urn:uuid:be324a51-70c1-4b4e-96f1-10f996a6c925>.
<urn:uuid:65dbc416-57b1-4891-a52b-20bdb327fe34> a report:ConstraintReport;
    report:constraint <urn:uuid:ca57a8d4-d07a-4132-b10a-9a6bd8e0d458>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-03T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:be324a51-70c1-4b4e-96f1-10f996a6c925> a report:ConstraintReport;
    report:constraint <urn:uuid:ffa7fc26-5ca1-4847-9714-d2c9648a9aad>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:819d0b1a-94c2-4fbe-a977-7332c1d2389f> a report:ConstraintReport;
    report:constraint <urn:uuid:a39e7e6e-fa9a-4e39-80cb-c8ffed1352e9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:310b8b99-e0b0-419e-a49c-a9a2a0700f73>, <urn:uuid:5d1e5d59-8e35-42e0-ae02-fea34958f3ca>.
<urn:uuid:310b8b99-e0b0-419e-a49c-a9a2a0700f73> a report:ConstraintReport;
    report:constraint <urn:uuid:f3f83377-1efa-4ada-abba-0762360f11d7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5d1e5d59-8e35-42e0-ae02-fea34958f3ca> a report:ConstraintReport;
    report:constraint <urn:uuid:a026744a-4ffd-4efa-ae02-4ea290920e9e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:69336601-b6b1-4d9e-a502-eef3b3a04254> a report:ConstraintReport;
    report:constraint <urn:uuid:5dbda234-1c7b-46fd-bdcd-9f56591a98ab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4029840e-0c96-4296-8d68-bd2f1d8fa5e5>, <urn:uuid:98086b34-7fee-4d35-8769-2d65da0f273e>.
<urn:uuid:4029840e-0c96-4296-8d68-bd2f1d8fa5e5> a report:ConstraintReport;
    report:constraint <urn:uuid:f8db2a21-e27e-4cda-aa44-6b9a0f0dda67>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:98086b34-7fee-4d35-8769-2d65da0f273e> a report:ConstraintReport;
    report:constraint <urn:uuid:abf18596-8372-4c44-96f5-e3652e85e3e6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:25230523-eb7b-47de-b25c-964c38d13e92> a report:ConstraintReport;
    report:constraint <urn:uuid:1f33abb2-fdb2-4529-8eec-3f697c2f61db>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:84abbbae-e82c-4ee9-869d-eff349e9424f>, <urn:uuid:c663c36d-d656-4efa-a551-c3301d633cf4>.
<urn:uuid:84abbbae-e82c-4ee9-869d-eff349e9424f> a report:ConstraintReport;
    report:constraint <urn:uuid:a68891ad-9127-4c7d-b2b6-9bda152a4d79>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c663c36d-d656-4efa-a551-c3301d633cf4> a report:ConstraintReport;
    report:constraint <urn:uuid:a74e77a9-0621-44df-bbb1-216ea0608b5f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9d486b3d-eb4b-4109-8c30-98f3087a0f1a> a report:ConstraintReport;
    report:constraint <urn:uuid:f3228127-06d6-4a78-bd6d-a6aefd50045d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a1c2dcd4-6d21-49db-b685-7c8363151004>, <urn:uuid:9c237691-5d2e-4040-bf18-992afcfbc7fc>.
<urn:uuid:a1c2dcd4-6d21-49db-b685-7c8363151004> a report:ConstraintReport;
    report:constraint <urn:uuid:9a131d45-a57c-433d-ae95-cb3b7d676458>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:9c237691-5d2e-4040-bf18-992afcfbc7fc> a report:ConstraintReport;
    report:constraint <urn:uuid:da2b4864-d261-4d32-974a-a18b7b0ad457>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b01a0da6-5d71-48b9-83d7-a20de228837e> a report:ConstraintReport;
    report:constraint <urn:uuid:0c421a36-31a8-4cc6-9387-655cbece11d9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cbf56848-fffa-4edb-8195-a89455fbd033>, <urn:uuid:dc5f1134-59d2-4d1f-8c3d-f30e22aae529>.
<urn:uuid:cbf56848-fffa-4edb-8195-a89455fbd033> a report:ConstraintReport;
    report:constraint <urn:uuid:51db01c1-81f0-4b60-8391-30af29b7f815>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-10T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:dc5f1134-59d2-4d1f-8c3d-f30e22aae529> a report:ConstraintReport;
    report:constraint <urn:uuid:cbf798d8-4c19-412a-8507-8b40c9f8483f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dc358eb8-9f7b-4da5-a250-1e0581ac6406> a report:ConstraintReport;
    report:constraint <urn:uuid:8df48bc7-37a6-463e-8600-944f84ccb6be>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:196364fe-8318-4cd2-b2cd-8573fff0c06d>, <urn:uuid:b28eeaf8-b267-421f-8d03-6d6dc5f708f5>.
<urn:uuid:196364fe-8318-4cd2-b2cd-8573fff0c06d> a report:ConstraintReport;
    report:constraint <urn:uuid:b65c9404-0fdb-42a8-b3ef-081f253341a6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:b28eeaf8-b267-421f-8d03-6d6dc5f708f5> a report:ConstraintReport;
    report:constraint <urn:uuid:74dbf591-ec41-42fd-9b4e-0b0b12c6aa1a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:090d31d4-cf81-4eb0-bc4d-8ea7c818f722> a report:ConstraintReport;
    report:constraint <urn:uuid:f2284c0e-d8cc-470b-8d66-cc186b19533f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:160c0004-06a7-41a0-b227-e9a55096b99e>, <urn:uuid:6159e2cc-fcd2-4a96-87ce-7083f6412bad>.
<urn:uuid:160c0004-06a7-41a0-b227-e9a55096b99e> a report:ConstraintReport;
    report:constraint <urn:uuid:d4d15c9c-c99a-4bf8-a518-275c9f98f3d0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6159e2cc-fcd2-4a96-87ce-7083f6412bad> a report:ConstraintReport;
    report:constraint <urn:uuid:37036221-dbfa-436b-b6e8-22e9a4912042>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f2793857-3071-44e5-8cc2-ebc8833dfba2> a report:ConstraintReport;
    report:constraint <urn:uuid:b50718c6-2b45-4e05-9f0e-35352168177e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1ce9c231-1b23-4a25-b7fe-5681b34200fc>, <urn:uuid:7c58a131-537a-474f-a37a-f2b384625852>.
<urn:uuid:1ce9c231-1b23-4a25-b7fe-5681b34200fc> a report:ConstraintReport;
    report:constraint <urn:uuid:37520bb1-e228-4b2d-af87-70a124f9f509>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7c58a131-537a-474f-a37a-f2b384625852> a report:ConstraintReport;
    report:constraint <urn:uuid:17af2da2-0d6e-4305-9f20-af582f28e69f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c3bab2d7-51f6-43ee-ad07-b5a75320baac> a report:ConstraintReport;
    report:constraint <urn:uuid:524fb88e-3c3e-4296-8b14-9254caa38d43>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6d49c03d-3d3b-4782-b8cd-b9def9797584>, <urn:uuid:45fb1205-111a-4d94-a228-10863f8631e8>.
<urn:uuid:6d49c03d-3d3b-4782-b8cd-b9def9797584> a report:ConstraintReport;
    report:constraint <urn:uuid:5727cb4d-637e-424a-886a-a92e8a68792e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:45fb1205-111a-4d94-a228-10863f8631e8> a report:ConstraintReport;
    report:constraint <urn:uuid:946b77ef-d4ba-43c3-a536-9fd168f7cb15>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:eb41beb1-f871-4914-b478-142eb1a6464e> a report:ConstraintReport;
    report:constraint <urn:uuid:e24d42a3-23dc-4f6d-930c-b2f95fec0ad9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ac5e85f9-a135-4670-9317-a85d0981d257>, <urn:uuid:2d9bfdb0-9a9e-48e9-a69e-201034964695>.
<urn:uuid:ac5e85f9-a135-4670-9317-a85d0981d257> a report:ConstraintReport;
    report:constraint <urn:uuid:e05a11c3-2df6-4657-9696-4edb57656ca3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-17T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:2d9bfdb0-9a9e-48e9-a69e-201034964695> a report:ConstraintReport;
    report:constraint <urn:uuid:bdbb3f61-36a7-4f99-9b56-5c4104117421>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7bba4b9e-c623-41c7-b236-d2fbb9f256fd> a report:ConstraintReport;
    report:constraint <urn:uuid:efd32427-0878-4da6-840b-2cd88b36c229>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4e14dad3-a87a-48da-bc8e-1056834285b6>, <urn:uuid:09eb10ae-d2c7-43ca-8ca4-2a694801a6ce>.
<urn:uuid:4e14dad3-a87a-48da-bc8e-1056834285b6> a report:ConstraintReport;
    report:constraint <urn:uuid:5ff79eae-7d0a-4ab0-b0c1-74c523d460a8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:09eb10ae-d2c7-43ca-8ca4-2a694801a6ce> a report:ConstraintReport;
    report:constraint <urn:uuid:cd637661-71d1-4925-b4fd-bb81f35b1834>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:35c315b0-2cce-4838-ace6-4beba5fb3879> a report:ConstraintReport;
    report:constraint <urn:uuid:8238c0e7-4e25-4f42-b293-66221cf2cadd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d5d20285-7ed9-48f0-89d7-36d76e89623e>, <urn:uuid:0b6af224-9602-4d5f-8707-8a8120064bdf>.
<urn:uuid:d5d20285-7ed9-48f0-89d7-36d76e89623e> a report:ConstraintReport;
    report:constraint <urn:uuid:f900a6e2-1227-42cc-a735-6268ed2976a2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0b6af224-9602-4d5f-8707-8a8120064bdf> a report:ConstraintReport;
    report:constraint <urn:uuid:b76c4668-5409-4b7b-b609-c251f04f9fc0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:303b66a5-e47d-40c4-a32a-1e43ad48afd1> a report:ConstraintReport;
    report:constraint <urn:uuid:69cc4707-3662-4ee7-a597-37ce601435e2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ee35c1a7-c8d4-45da-8749-bb8a3be6b488>, <urn:uuid:e6dcfc94-71be-47f7-81ba-1eac2bdfb35a>.
<urn:uuid:ee35c1a7-c8d4-45da-8749-bb8a3be6b488> a report:ConstraintReport;
    report:constraint <urn:uuid:2a5640a1-46ba-4595-8b77-1a91007a2420>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e6dcfc94-71be-47f7-81ba-1eac2bdfb35a> a report:ConstraintReport;
    report:constraint <urn:uuid:aa57f57d-11d0-4248-ad8c-36b554498708>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:20ad2a14-5b54-4397-8d66-1a33816456c2> a report:ConstraintReport;
    report:constraint <urn:uuid:44a11646-feed-4e00-ad9f-ff087a9753bf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:23cf3d35-f8cc-4571-957e-48181a9d56cb>, <urn:uuid:f6714d68-3521-40b2-b340-9d9d029af256>.
<urn:uuid:23cf3d35-f8cc-4571-957e-48181a9d56cb> a report:ConstraintReport;
    report:constraint <urn:uuid:d9e3e6fe-05db-4bff-ba28-ec37ef313df5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f6714d68-3521-40b2-b340-9d9d029af256> a report:ConstraintReport;
    report:constraint <urn:uuid:a59a52c6-8dd2-4302-a863-7d213ff17830>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:34c9eed5-436c-448b-b3d2-9871a99e1dd9> a report:ConstraintReport;
    report:constraint <urn:uuid:f9117877-e0a1-4ce2-87b9-b9ef6e33baa9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:cb562dcd-5c9e-49b0-b841-8a339a038e67>, <urn:uuid:5b6b553c-3906-4f1b-9528-f20df345efb3>.
<urn:uuid:cb562dcd-5c9e-49b0-b841-8a339a038e67> a report:ConstraintReport;
    report:constraint <urn:uuid:9d24e455-7082-4d39-8a19-d7aef1e9222c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-24T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5b6b553c-3906-4f1b-9528-f20df345efb3> a report:ConstraintReport;
    report:constraint <urn:uuid:419290e2-7984-42d6-8f29-d2ec68063815>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9d6b6142-a1a3-40fd-8c33-dd065071ae30> a report:ConstraintReport;
    report:constraint <urn:uuid:38f11df6-dbfc-415a-a7df-fc05d82c3061>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:68d2985c-d16d-4887-ac99-7da384661dd2>, <urn:uuid:b1513047-7c9f-428e-ac43-09d2637a15c4>.
<urn:uuid:68d2985c-d16d-4887-ac99-7da384661dd2> a report:ConstraintReport;
    report:constraint <urn:uuid:fc158863-3bb8-45b4-8257-a0e1d854806e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:b1513047-7c9f-428e-ac43-09d2637a15c4> a report:ConstraintReport;
    report:constraint <urn:uuid:1f7287e9-71a6-4ff7-9768-346a331e80fd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:082adb26-4c64-48e8-8904-80007e2908f9> a report:ConstraintReport;
    report:constraint <urn:uuid:20497829-b46a-4328-a651-b38428b12192>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4c5eaeb8-0260-4b8e-81ce-5b38355e83e5>, <urn:uuid:a15832ea-ac5e-4418-82fd-da11744ffa28>.
<urn:uuid:4c5eaeb8-0260-4b8e-81ce-5b38355e83e5> a report:ConstraintReport;
    report:constraint <urn:uuid:eff46f32-949d-4f3d-9a56-01a7bf6a53a8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:a15832ea-ac5e-4418-82fd-da11744ffa28> a report:ConstraintReport;
    report:constraint <urn:uuid:e6a48e62-befb-4738-ab0e-b3a22d1dde61>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5d9e7c51-b595-44bc-a10f-d961242799bb> a report:ConstraintReport;
    report:constraint <urn:uuid:bf3f94cc-70da-4f6b-bd39-8f16892198f0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2f3eeae8-c5e9-4e1b-a721-fb50539500ce>, <urn:uuid:6d1410c4-fd4b-4937-823d-ac1cde627bbc>.
<urn:uuid:2f3eeae8-c5e9-4e1b-a721-fb50539500ce> a report:ConstraintReport;
    report:constraint <urn:uuid:d8a4c948-73b2-4789-8dc7-500f6d752fe8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6d1410c4-fd4b-4937-823d-ac1cde627bbc> a report:ConstraintReport;
    report:constraint <urn:uuid:60c28b6b-e36f-4796-a994-74b993368ed2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4e7a9e9e-76bd-4017-8684-8643f81646c9> a report:ConstraintReport;
    report:constraint <urn:uuid:c60e0ec8-902f-4e6e-a412-fa7d05c834ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:35dc11d0-3095-4ead-80b4-95a8d14c460a>, <urn:uuid:f9f1d3c6-0a1c-42e2-9113-ff8f61dee75d>.
<urn:uuid:35dc11d0-3095-4ead-80b4-95a8d14c460a> a report:ConstraintReport;
    report:constraint <urn:uuid:2e3d1a4d-43d5-4e35-81b0-20497b73a8f2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-30T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f9f1d3c6-0a1c-42e2-9113-ff8f61dee75d> a report:ConstraintReport;
    report:constraint <urn:uuid:c413ec7a-e39a-4739-b6c9-87ace5a05a16>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:391db2d6-ce35-4e4f-a9d9-62eb3a6eabac> a report:ConstraintReport;
    report:constraint <urn:uuid:e0ac9c09-e2d0-492e-8ce6-2bf419cbd71e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7155e225-aacc-432d-b2ad-f6a541a59fa7>, <urn:uuid:67d0c365-6a38-424a-89c9-7ffd09bb3a88>.
<urn:uuid:7155e225-aacc-432d-b2ad-f6a541a59fa7> a report:ConstraintReport;
    report:constraint <urn:uuid:a782236f-7af5-4f82-a154-da1a9194b9ea>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-07-31T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:67d0c365-6a38-424a-89c9-7ffd09bb3a88> a report:ConstraintReport;
    report:constraint <urn:uuid:9ca17b3b-86f1-476d-981d-b308d335d885>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6cef5d31-e487-4521-9dbd-3b0125bd2bba> a report:ConstraintReport;
    report:constraint <urn:uuid:f66f7a5c-58fd-4fb9-ac2a-847f7dc48a55>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:810d4865-5a81-4250-b0c2-db7ae4bd30a4>, <urn:uuid:a75e8fbc-4618-470f-a9eb-d6dcf6eda11a>.
<urn:uuid:810d4865-5a81-4250-b0c2-db7ae4bd30a4> a report:ConstraintReport;
    report:constraint <urn:uuid:8794f6f8-f1e0-49d4-aa88-18daf5c4aa22>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:a75e8fbc-4618-470f-a9eb-d6dcf6eda11a> a report:ConstraintReport;
    report:constraint <urn:uuid:d3fbae36-fc42-4040-8d38-de522d5276ee>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4ada9bfb-1022-4ff5-b88a-e17b212d768a> a report:ConstraintReport;
    report:constraint <urn:uuid:ec84c86e-89c5-4a84-9b3c-5f6ea87859c6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b318a955-2296-49fd-ad86-6bf4da6488f5>, <urn:uuid:5f87bf07-c022-4be8-b926-faf44706c447>.
<urn:uuid:b318a955-2296-49fd-ad86-6bf4da6488f5> a report:ConstraintReport;
    report:constraint <urn:uuid:c7b692c7-fc26-433e-a130-3997e1187bbd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5f87bf07-c022-4be8-b926-faf44706c447> a report:ConstraintReport;
    report:constraint <urn:uuid:3fe3d04d-e964-4a7d-8949-9a1c7fee8d80>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dade08d0-685f-4f47-bf29-7d736ddb39c6> a report:ConstraintReport;
    report:constraint <urn:uuid:2581ca84-38bf-4716-a954-6ad2f779a1c6>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e4762324-2a6e-4713-8f60-029d7eb10e6c>, <urn:uuid:1616c4fe-f2a9-4c0f-a486-2b79531e0a32>.
<urn:uuid:e4762324-2a6e-4713-8f60-029d7eb10e6c> a report:ConstraintReport;
    report:constraint <urn:uuid:a8dbdf25-82ce-4169-a191-f206d3a3f6d2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1616c4fe-f2a9-4c0f-a486-2b79531e0a32> a report:ConstraintReport;
    report:constraint <urn:uuid:58569b9a-3db1-4bf9-884a-136db633ab9e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:65a5b25e-0df3-491a-9d62-071174b5b0ae> a report:ConstraintReport;
    report:constraint <urn:uuid:cc3ee7b5-34b1-4630-81e2-ac37b8274e9e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:098a35d8-8a16-403b-9189-f6acbf8f5a5d>, <urn:uuid:579c1e59-cb4c-4832-8410-68d4e5839c86>.
<urn:uuid:098a35d8-8a16-403b-9189-f6acbf8f5a5d> a report:ConstraintReport;
    report:constraint <urn:uuid:a5759a20-2138-4dd5-8bc8-3aa25cae17bc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-06T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:579c1e59-cb4c-4832-8410-68d4e5839c86> a report:ConstraintReport;
    report:constraint <urn:uuid:cc29cd17-c96e-4146-b845-e4b4b13f0310>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8e396cc1-b55f-4d72-9c7d-cd668bb34e49> a report:ConstraintReport;
    report:constraint <urn:uuid:f3d10c6b-c3c9-4b32-b3ed-1eb40ae2004e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6dd0eb63-a32f-4ca4-a900-b55b3b1091e8>, <urn:uuid:76d8c06c-cdc2-4915-aa73-5fa95273ac29>.
<urn:uuid:6dd0eb63-a32f-4ca4-a900-b55b3b1091e8> a report:ConstraintReport;
    report:constraint <urn:uuid:e9a8ea8d-8735-4d6c-ad7d-c03db4c4a063>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-07T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:76d8c06c-cdc2-4915-aa73-5fa95273ac29> a report:ConstraintReport;
    report:constraint <urn:uuid:f58b9a7c-2c12-4ef4-8187-a94b148e3371>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:491a7322-c8aa-4b99-b792-bad9d3af3546> a report:ConstraintReport;
    report:constraint <urn:uuid:ecbe9aa1-a9d8-419f-9675-2c158a5919a7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8c7854c8-5b45-4f8b-8854-2058f4341997>, <urn:uuid:44e1c60d-d2e6-42f6-adf8-e116b0551d1b>.
<urn:uuid:8c7854c8-5b45-4f8b-8854-2058f4341997> a report:ConstraintReport;
    report:constraint <urn:uuid:0cc1512d-9fa0-498a-8391-b0fe27700ae4>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:44e1c60d-d2e6-42f6-adf8-e116b0551d1b> a report:ConstraintReport;
    report:constraint <urn:uuid:5026529f-5715-413e-a117-e4cdcabd0bde>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e46c1a36-00fb-4319-a683-ba8b71e0a19f> a report:ConstraintReport;
    report:constraint <urn:uuid:629997aa-cd95-433c-8b3c-b9aad2c6aa3e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5a3ca792-f53b-43af-a3f2-929efc8b83ca>, <urn:uuid:cd1abf81-eaaf-4359-9d2d-1a352113515c>.
<urn:uuid:5a3ca792-f53b-43af-a3f2-929efc8b83ca> a report:ConstraintReport;
    report:constraint <urn:uuid:2c738aba-d13f-429e-8d48-87e132bb3f53>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:cd1abf81-eaaf-4359-9d2d-1a352113515c> a report:ConstraintReport;
    report:constraint <urn:uuid:ed8574f6-f123-438c-9116-b05fc4094151>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0b640f96-a880-42d0-b3b0-8c3fc488d2ae> a report:ConstraintReport;
    report:constraint <urn:uuid:e4735358-f475-492c-b080-9b9b369fbd38>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:30350d07-17c1-4796-8088-a0c307fbc84a>, <urn:uuid:14bca88b-df13-4fe5-ac68-029422560528>.
<urn:uuid:30350d07-17c1-4796-8088-a0c307fbc84a> a report:ConstraintReport;
    report:constraint <urn:uuid:ce99b4c5-8f0d-435e-b6de-0e01f16263d9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:14bca88b-df13-4fe5-ac68-029422560528> a report:ConstraintReport;
    report:constraint <urn:uuid:796dbb29-e79f-495c-8ba3-2c91884e0b22>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e93e4c01-195d-4898-9c29-e13bf61a3131> a report:ConstraintReport;
    report:constraint <urn:uuid:8e7ca55b-5a1f-4444-9337-ee4f2f9025c7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e58e666e-249f-4d2c-86e4-f1aa07ad94ee>, <urn:uuid:baae3a59-872d-4d3f-8364-ba73157e69f9>.
<urn:uuid:e58e666e-249f-4d2c-86e4-f1aa07ad94ee> a report:ConstraintReport;
    report:constraint <urn:uuid:1a1f352f-c2bb-4d81-8dca-0c213f6da148>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-13T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:baae3a59-872d-4d3f-8364-ba73157e69f9> a report:ConstraintReport;
    report:constraint <urn:uuid:e51c2a9a-716e-4a6f-9e43-169dacd0169d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:95e7c972-a45e-49b7-a886-b1ec0200c28a> a report:ConstraintReport;
    report:constraint <urn:uuid:759a8766-a480-4c20-9a62-3092af654182>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e9f77d11-0ed1-4903-b874-5747f8f8e9ae>, <urn:uuid:55b98998-d25b-407c-98dd-e2d5d2716458>.
<urn:uuid:e9f77d11-0ed1-4903-b874-5747f8f8e9ae> a report:ConstraintReport;
    report:constraint <urn:uuid:d781a87e-06dd-41c3-bb4c-1cef8133835a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-14T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:55b98998-d25b-407c-98dd-e2d5d2716458> a report:ConstraintReport;
    report:constraint <urn:uuid:42a89d23-c815-4bc0-98b0-35bab1f36b4d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:abae78c2-d82c-4ad3-a4cb-2ae6369e3c08> a report:ConstraintReport;
    report:constraint <urn:uuid:e9e4a6cc-4c5c-4a23-8181-009a02c7aa7d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b9d36ba5-0e8a-4f91-b751-c14f52c18755>, <urn:uuid:0b3f1f60-f2ba-4314-abda-75e60ef073c2>.
<urn:uuid:b9d36ba5-0e8a-4f91-b751-c14f52c18755> a report:ConstraintReport;
    report:constraint <urn:uuid:7288eb0a-3ad6-4b36-b1e1-7dec59d6625a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0b3f1f60-f2ba-4314-abda-75e60ef073c2> a report:ConstraintReport;
    report:constraint <urn:uuid:244df4e1-cfd3-4c00-ac26-4d781bbd880e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b0a57c16-69c2-48bb-b394-be02eb266101> a report:ConstraintReport;
    report:constraint <urn:uuid:9429299d-a355-491e-a34a-ba490a9f1bea>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f1f15258-fed5-43bc-83c9-8d2135683774>, <urn:uuid:b026cccb-f82e-432b-a9fb-8e421a4cbd12>.
<urn:uuid:f1f15258-fed5-43bc-83c9-8d2135683774> a report:ConstraintReport;
    report:constraint <urn:uuid:7617f4a3-05d3-4418-9909-fddcac55db5f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:b026cccb-f82e-432b-a9fb-8e421a4cbd12> a report:ConstraintReport;
    report:constraint <urn:uuid:0d23d75e-2fe8-4d31-b31d-5f4f01808a7b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9be267d4-f672-4546-ab8b-7176484cec65> a report:ConstraintReport;
    report:constraint <urn:uuid:6ffe395c-28bb-4a5b-8b46-423970f03867>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6a1500c2-967e-433c-bdbe-c2863fd78faf>, <urn:uuid:fa7de342-8010-4b3a-a842-5e3447e4275d>.
<urn:uuid:6a1500c2-967e-433c-bdbe-c2863fd78faf> a report:ConstraintReport;
    report:constraint <urn:uuid:8402ebf0-1db1-4710-a8d8-ec248cb7b64c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:fa7de342-8010-4b3a-a842-5e3447e4275d> a report:ConstraintReport;
    report:constraint <urn:uuid:39d431e4-8742-4dd0-aa7e-f780d413b613>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e90844b0-f043-40b0-95db-e5fd4f868d9e> a report:ConstraintReport;
    report:constraint <urn:uuid:40fa925a-712e-4f2a-a737-ab9fbcf3319a>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0e441818-3f9a-499b-abee-ba3f53864555>, <urn:uuid:88b17c64-c839-4aec-afcd-0dada5ca7a06>.
<urn:uuid:0e441818-3f9a-499b-abee-ba3f53864555> a report:ConstraintReport;
    report:constraint <urn:uuid:3c55fbf2-1323-45ab-a1d0-1580b9fa34e9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-20T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:88b17c64-c839-4aec-afcd-0dada5ca7a06> a report:ConstraintReport;
    report:constraint <urn:uuid:0d1698a6-4aec-423b-84fb-44d600cb69ca>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:280c1795-cb1b-47f9-a581-033bf842be60> a report:ConstraintReport;
    report:constraint <urn:uuid:6154c58e-869f-454b-876b-d400bfa0770e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a41c00db-4bec-4d01-ba0f-4ea18a94b57b>, <urn:uuid:1af2d437-c81b-4cdf-bdd2-72dad2ea3540>.
<urn:uuid:a41c00db-4bec-4d01-ba0f-4ea18a94b57b> a report:ConstraintReport;
    report:constraint <urn:uuid:ad6a73a4-9a3a-4154-b445-447f097d8d51>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-21T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1af2d437-c81b-4cdf-bdd2-72dad2ea3540> a report:ConstraintReport;
    report:constraint <urn:uuid:e28f2764-4717-48d1-af4d-a025a262c75b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0955c77e-53b3-46da-99a1-b0d517c1ba1e> a report:ConstraintReport;
    report:constraint <urn:uuid:8c84d6f9-c83c-49d9-b988-e571c6493e21>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3d59f64f-e845-4128-b071-79c2419bbf22>, <urn:uuid:39f5addf-8332-4129-86fb-c8e0174190e9>.
<urn:uuid:3d59f64f-e845-4128-b071-79c2419bbf22> a report:ConstraintReport;
    report:constraint <urn:uuid:e1b7390f-b3ee-4a62-9b84-958cd7205503>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:39f5addf-8332-4129-86fb-c8e0174190e9> a report:ConstraintReport;
    report:constraint <urn:uuid:a0c4e370-8eb7-4533-960c-18edc1347606>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:26b79b85-775c-40ad-bdc1-eaafe3520338> a report:ConstraintReport;
    report:constraint <urn:uuid:4eea153f-9a27-44da-8432-40aea5bdfc5d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:58ada7eb-16c0-4a84-950f-7c50a4322351>, <urn:uuid:68fe9091-ec10-4297-9954-aee500eaf5cb>.
<urn:uuid:58ada7eb-16c0-4a84-950f-7c50a4322351> a report:ConstraintReport;
    report:constraint <urn:uuid:a07bd66a-264c-49de-b61b-52eb4900e7c5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:68fe9091-ec10-4297-9954-aee500eaf5cb> a report:ConstraintReport;
    report:constraint <urn:uuid:794229d2-8312-4e36-a44e-5cd86dcd5e9f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:21779f63-86ae-474c-8ea2-38ad731649a7> a report:ConstraintReport;
    report:constraint <urn:uuid:fe175296-5b32-4174-ad5b-9227a44c3615>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:dffefc02-672a-489d-b0bc-64e97aade134>, <urn:uuid:baa742b9-5420-4899-9c16-db907ec9eefe>.
<urn:uuid:dffefc02-672a-489d-b0bc-64e97aade134> a report:ConstraintReport;
    report:constraint <urn:uuid:851265bd-c336-49b1-80de-07ddd58cbf0e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:baa742b9-5420-4899-9c16-db907ec9eefe> a report:ConstraintReport;
    report:constraint <urn:uuid:aa62a8c6-b42e-4776-abb9-eaf7b9b32630>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cb9b75da-bc81-4648-8dd3-6421e538426c> a report:ConstraintReport;
    report:constraint <urn:uuid:20a309ef-154e-4a93-82df-a7d1c633b8e7>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:743426c7-1d6d-4cad-8dcd-6ad7968d19e6>, <urn:uuid:e20384bc-245d-409c-9af7-617f17c3a6e8>.
<urn:uuid:743426c7-1d6d-4cad-8dcd-6ad7968d19e6> a report:ConstraintReport;
    report:constraint <urn:uuid:25ad60f5-db0c-4c1f-bf7a-cdd121e3413f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-27T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e20384bc-245d-409c-9af7-617f17c3a6e8> a report:ConstraintReport;
    report:constraint <urn:uuid:d3fb977b-c2fb-4822-82f2-eec957086742>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cdcc8d55-ac6b-459d-9bf3-7cdb3e1ec8d6> a report:ConstraintReport;
    report:constraint <urn:uuid:d6d4f8b2-82e7-4e4f-8949-94f5b5175654>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:df101ddd-ff63-40e0-a81b-f32ebfd194d7>, <urn:uuid:550da98f-097b-4e84-8c4b-d49ec01842a9>.
<urn:uuid:df101ddd-ff63-40e0-a81b-f32ebfd194d7> a report:ConstraintReport;
    report:constraint <urn:uuid:7251a15a-cc69-4977-a8d5-d85e8acde17f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-28T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:550da98f-097b-4e84-8c4b-d49ec01842a9> a report:ConstraintReport;
    report:constraint <urn:uuid:3682efaa-846f-46b6-a557-e3a13c7ba88c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ebbb774d-494e-43a2-911f-8a171a44101f> a report:ConstraintReport;
    report:constraint <urn:uuid:99489667-c4e5-405e-a108-ecdd3413e89b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:172767eb-f234-4ab9-907a-e7a26190b38f>, <urn:uuid:45c9a6dc-91e7-47da-be1e-1ef5cd25c0a3>.
<urn:uuid:172767eb-f234-4ab9-907a-e7a26190b38f> a report:ConstraintReport;
    report:constraint <urn:uuid:c3d68483-7988-44af-82c9-82771a7401fb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:45c9a6dc-91e7-47da-be1e-1ef5cd25c0a3> a report:ConstraintReport;
    report:constraint <urn:uuid:77f83627-128e-4a96-84f7-ff2d0073161c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9cb25629-0543-4d5e-ac29-d541f1a4da1e> a report:ConstraintReport;
    report:constraint <urn:uuid:36a81698-68dc-4276-930b-5faea86191a2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:32e5dd02-6776-4502-861f-3dbdd6e51f70>, <urn:uuid:51b6e20d-e462-471f-8a68-a756ee3856a9>.
<urn:uuid:32e5dd02-6776-4502-861f-3dbdd6e51f70> a report:ConstraintReport;
    report:constraint <urn:uuid:087a31cb-9634-42fa-9797-642cb5d19789>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-08-30T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:51b6e20d-e462-471f-8a68-a756ee3856a9> a report:ConstraintReport;
    report:constraint <urn:uuid:2e04982c-f04b-4fce-9942-72a65f47cb55>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5c17f184-a03b-460a-8004-b346f995e90a> a report:ConstraintReport;
    report:constraint <urn:uuid:a79cbb6a-c51d-46c3-9abd-0f58b7d96220>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9b0f97a0-3178-49f8-acae-5570e30757c4>, <urn:uuid:7908ab34-154a-48d7-b463-015cd8d809e7>.
<urn:uuid:9b0f97a0-3178-49f8-acae-5570e30757c4> a report:ConstraintReport;
    report:constraint <urn:uuid:d8d3dabd-51f8-481a-a55e-b08723ccc328>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7908ab34-154a-48d7-b463-015cd8d809e7> a report:ConstraintReport;
    report:constraint <urn:uuid:4554f885-28eb-461d-8475-084cfbe3c43c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c52333e9-5213-44d2-a313-7e63ea06885d> a report:ConstraintReport;
    report:constraint <urn:uuid:f8ecc917-b0a1-49de-b763-b2fa1084454c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6333fffd-44c0-4789-bfe9-73c0fbce5109>, <urn:uuid:4a2c8e1d-df36-432a-84f9-47929f4af746>.
<urn:uuid:6333fffd-44c0-4789-bfe9-73c0fbce5109> a report:ConstraintReport;
    report:constraint <urn:uuid:bb11ab45-377c-415f-8b4a-8fdc12f5a94e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-03T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:4a2c8e1d-df36-432a-84f9-47929f4af746> a report:ConstraintReport;
    report:constraint <urn:uuid:3e913bd3-caf8-486c-9e39-6159bfee839a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:e866fce9-6c25-4e89-aad0-0356d2abe1bc> a report:ConstraintReport;
    report:constraint <urn:uuid:8d6e9a21-8ce8-47f3-826f-6c1ed990251b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b9d9ec4c-2fc0-4a53-ade6-f9c8d68862f1>, <urn:uuid:f77bcb24-c6cc-4dd6-aa61-d6506e658db1>.
<urn:uuid:b9d9ec4c-2fc0-4a53-ade6-f9c8d68862f1> a report:ConstraintReport;
    report:constraint <urn:uuid:3987d626-8481-4800-80df-ed1336914c35>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f77bcb24-c6cc-4dd6-aa61-d6506e658db1> a report:ConstraintReport;
    report:constraint <urn:uuid:d1cf7dd3-de8f-41f3-8806-15460d723a51>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:971fde47-1236-4d75-90e9-22967619b13b> a report:ConstraintReport;
    report:constraint <urn:uuid:025579ca-9595-47c6-ae79-9d31d26f72ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:31645881-f081-40ba-9257-eef55ce758cb>, <urn:uuid:78f0e42f-fb52-454f-9a33-6aa042a9871a>.
<urn:uuid:31645881-f081-40ba-9257-eef55ce758cb> a report:ConstraintReport;
    report:constraint <urn:uuid:dc34a600-547c-4000-a19d-88bb4eb1d860>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:78f0e42f-fb52-454f-9a33-6aa042a9871a> a report:ConstraintReport;
    report:constraint <urn:uuid:7791ed09-f751-4452-b10f-fad443cee896>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b11ced28-aa0c-4d78-8137-f9b1e2b2279d> a report:ConstraintReport;
    report:constraint <urn:uuid:b2335484-2193-43d5-952d-0eaa78b4d228>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:dfe33340-9bd1-4d49-b68e-f30fadab8763>, <urn:uuid:2d029b83-e8d1-4e08-99df-9774fce18f8c>.
<urn:uuid:dfe33340-9bd1-4d49-b68e-f30fadab8763> a report:ConstraintReport;
    report:constraint <urn:uuid:fb78ee8b-dce9-4c2e-a171-7cad399c0378>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-06T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:2d029b83-e8d1-4e08-99df-9774fce18f8c> a report:ConstraintReport;
    report:constraint <urn:uuid:46e9b9f4-74ee-476a-b68e-24fe6b624672>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d8556c2c-695d-4ce7-8334-18d94ca50559> a report:ConstraintReport;
    report:constraint <urn:uuid:20a8ed90-e5f2-47a9-8420-bc3365ef15e3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:21e61446-2ee2-4020-94c8-ab3471f4562b>, <urn:uuid:3c176d36-b3c0-45e9-8825-21b0e4bd54ae>.
<urn:uuid:21e61446-2ee2-4020-94c8-ab3471f4562b> a report:ConstraintReport;
    report:constraint <urn:uuid:ed54ec4b-a1d9-47a9-a225-41ffbdb02c9b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:3c176d36-b3c0-45e9-8825-21b0e4bd54ae> a report:ConstraintReport;
    report:constraint <urn:uuid:2510ad4a-bac1-4958-b6f8-9bd261738531>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b41c9729-829a-4838-9909-63724066a7d2> a report:ConstraintReport;
    report:constraint <urn:uuid:f1e9e740-386d-41df-b308-f55f64cba6dc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:85dad997-bfe2-4046-b2af-68a3317c0fc9>, <urn:uuid:d82b6eae-7187-49c6-baa9-9fd2af14a905>.
<urn:uuid:85dad997-bfe2-4046-b2af-68a3317c0fc9> a report:ConstraintReport;
    report:constraint <urn:uuid:5adca922-de27-4ca9-a2a6-55f0ba9635c8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-10T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:d82b6eae-7187-49c6-baa9-9fd2af14a905> a report:ConstraintReport;
    report:constraint <urn:uuid:787113f2-55df-462e-84fa-cb658c50d8fb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c8870fbe-de23-45a7-897c-8e005373703b> a report:ConstraintReport;
    report:constraint <urn:uuid:74a74712-2516-45e2-a784-80773c55d465>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:1f8de7b0-ca0d-4515-832d-98e302af3e62>, <urn:uuid:2d8c7f83-97a7-41a8-8882-69ee5de44b1b>.
<urn:uuid:1f8de7b0-ca0d-4515-832d-98e302af3e62> a report:ConstraintReport;
    report:constraint <urn:uuid:a2c81302-1a5c-4ebe-9fa0-cec8ceebd576>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:2d8c7f83-97a7-41a8-8882-69ee5de44b1b> a report:ConstraintReport;
    report:constraint <urn:uuid:8f122756-faf5-47c1-91ca-2a22b12052dc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:752d4d4f-b5db-4991-af4e-8eb93f6d0d9c> a report:ConstraintReport;
    report:constraint <urn:uuid:8d19eb5d-ccc8-4b19-87c3-94f838e96639>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5f5a0066-d242-429f-9a95-7b277df2acb5>, <urn:uuid:079bb644-4e23-48e8-9ce6-b125203658bc>.
<urn:uuid:5f5a0066-d242-429f-9a95-7b277df2acb5> a report:ConstraintReport;
    report:constraint <urn:uuid:d961840a-dd39-4d00-b90d-c4096ae0e49c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:079bb644-4e23-48e8-9ce6-b125203658bc> a report:ConstraintReport;
    report:constraint <urn:uuid:b33afa3b-d928-43e0-b03f-d3642fcf4065>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9b1e6af2-0f37-4b3b-b199-98302ba11925> a report:ConstraintReport;
    report:constraint <urn:uuid:7edae164-7a1d-4e39-a6ff-5496ebd833cd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c3ed1c86-bd6c-40ed-9f52-9bc592b440f0>, <urn:uuid:c589eb34-21e7-4edf-a0ad-9765baeec58c>.
<urn:uuid:c3ed1c86-bd6c-40ed-9f52-9bc592b440f0> a report:ConstraintReport;
    report:constraint <urn:uuid:2fa84ecc-ab3a-4e6e-a397-2aa12d76ad6b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-13T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c589eb34-21e7-4edf-a0ad-9765baeec58c> a report:ConstraintReport;
    report:constraint <urn:uuid:ecf2fc3d-d925-4156-8e14-63adbf18674c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7adcfb98-b75d-406f-978c-ebc4803c2d8f> a report:ConstraintReport;
    report:constraint <urn:uuid:45a8feaf-d112-4336-a432-b8cf99a6ad09>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7258c72f-faf0-43d2-b6fa-b9d14590a3d5>, <urn:uuid:71ebd803-4b77-4f3f-99a2-c2d6c3880acc>.
<urn:uuid:7258c72f-faf0-43d2-b6fa-b9d14590a3d5> a report:ConstraintReport;
    report:constraint <urn:uuid:f1678757-894d-4525-b892-956f3f665072>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:71ebd803-4b77-4f3f-99a2-c2d6c3880acc> a report:ConstraintReport;
    report:constraint <urn:uuid:9792608d-cac5-4659-a9d4-edc45714af19>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7a3227b0-19f8-48d3-aa73-d876f7c786c6> a report:ConstraintReport;
    report:constraint <urn:uuid:df0a77f7-1d54-484a-afaf-4826ad4fcba1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:48d90592-847e-40dc-aa13-5b14c594e95c>, <urn:uuid:b8a02860-c244-4e07-97b4-0ffe434da1b0>.
<urn:uuid:48d90592-847e-40dc-aa13-5b14c594e95c> a report:ConstraintReport;
    report:constraint <urn:uuid:22e36e1b-f376-4454-a21f-69b1320a468b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-17T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:b8a02860-c244-4e07-97b4-0ffe434da1b0> a report:ConstraintReport;
    report:constraint <urn:uuid:00637563-7e3b-405b-a3b7-b6be21c48433>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:44d7b93d-780d-44ec-b951-0359bd680b6a> a report:ConstraintReport;
    report:constraint <urn:uuid:a5438dee-3584-40f2-b589-5f59bd64253e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e6da992c-b179-4105-9244-9f60937b0acc>, <urn:uuid:4c791206-9655-48db-8651-d7a328941bff>.
<urn:uuid:e6da992c-b179-4105-9244-9f60937b0acc> a report:ConstraintReport;
    report:constraint <urn:uuid:8e39f6ff-6fcd-4d57-a1ff-9caae5bcfb96>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:4c791206-9655-48db-8651-d7a328941bff> a report:ConstraintReport;
    report:constraint <urn:uuid:557d07f0-dbec-4e09-a7d5-53e3f6a5ac70>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bd243688-457a-45ce-ba4c-0373bfab4847> a report:ConstraintReport;
    report:constraint <urn:uuid:da363350-32e5-4e5d-8295-56f8fcdd8ffd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:817f8807-0322-44a0-b6f5-57f4daffb9a4>, <urn:uuid:a68f66ff-a222-4505-b82b-50eb1f3a0e44>.
<urn:uuid:817f8807-0322-44a0-b6f5-57f4daffb9a4> a report:ConstraintReport;
    report:constraint <urn:uuid:89b7d92a-99c6-4b7a-8533-4448713e7d3a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:a68f66ff-a222-4505-b82b-50eb1f3a0e44> a report:ConstraintReport;
    report:constraint <urn:uuid:63866b29-a379-4841-95df-72d9148359be>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ca309eda-eacd-42bb-9e14-7d2d19c1d9b4> a report:ConstraintReport;
    report:constraint <urn:uuid:652fdfd1-0c51-4bd5-a795-37770d4d9ac1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4340420f-54a5-45ef-8285-e595d56bb48a>, <urn:uuid:ea6834a3-478b-4469-9db2-ba82d136f1de>.
<urn:uuid:4340420f-54a5-45ef-8285-e595d56bb48a> a report:ConstraintReport;
    report:constraint <urn:uuid:33230260-0328-4d17-a0f4-54fd5df1681e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-20T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:ea6834a3-478b-4469-9db2-ba82d136f1de> a report:ConstraintReport;
    report:constraint <urn:uuid:589aeee8-a2ce-4866-9541-82362b517815>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b60afd0a-0bed-4231-bc62-4b6466f7a913> a report:ConstraintReport;
    report:constraint <urn:uuid:5c11aec8-6640-4ec2-89bb-69660f9f3d4d>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c18b407e-ef79-4271-b3d7-09d5046c5406>, <urn:uuid:971aad01-688b-404f-9392-71c5260dc048>.
<urn:uuid:c18b407e-ef79-4271-b3d7-09d5046c5406> a report:ConstraintReport;
    report:constraint <urn:uuid:3db2b497-6ba7-4a0f-8fe8-5c65a647d54a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:971aad01-688b-404f-9392-71c5260dc048> a report:ConstraintReport;
    report:constraint <urn:uuid:c4df223e-6ce3-420d-8c56-771e616de650>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:fa9c4172-c02e-409e-8c6b-3cca25f9ae66> a report:ConstraintReport;
    report:constraint <urn:uuid:26e133fc-cc58-44cd-8ff1-ee1ffbe5db36>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b8fc9b7e-00e4-48a1-a045-811441dd21bd>, <urn:uuid:74281b35-9424-4553-9ffa-dfe9b8bd9824>.
<urn:uuid:b8fc9b7e-00e4-48a1-a045-811441dd21bd> a report:ConstraintReport;
    report:constraint <urn:uuid:fc83f764-d140-4e5a-93ca-bbe2bc522e34>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-24T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:74281b35-9424-4553-9ffa-dfe9b8bd9824> a report:ConstraintReport;
    report:constraint <urn:uuid:17461c3f-c284-4b6d-91af-08d8a5bb03f8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cdaf5877-da3d-45f3-b2f4-79b9b5a74430> a report:ConstraintReport;
    report:constraint <urn:uuid:63a26522-ab0d-4f6f-b08b-0120b8a361a9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fd4e201b-3d09-42bb-ad53-23b426d42eaa>, <urn:uuid:26ff52c7-b57b-40f7-95be-95a85a954d42>.
<urn:uuid:fd4e201b-3d09-42bb-ad53-23b426d42eaa> a report:ConstraintReport;
    report:constraint <urn:uuid:4455d6d4-5a0b-4e72-891b-a755c1d60988>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:26ff52c7-b57b-40f7-95be-95a85a954d42> a report:ConstraintReport;
    report:constraint <urn:uuid:c1925145-1357-4fc3-85e4-1967ecee94a0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:27e94381-3e64-4a19-bbea-c4f303c25e93> a report:ConstraintReport;
    report:constraint <urn:uuid:330b8ea5-f382-457b-bfbf-47e5784ac046>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:a3438691-0855-4d58-b5c7-283a19803161>, <urn:uuid:cc5c067d-c44f-4323-9cfb-374682c27c17>.
<urn:uuid:a3438691-0855-4d58-b5c7-283a19803161> a report:ConstraintReport;
    report:constraint <urn:uuid:d541d869-b628-4e9a-a490-d123c5d60e8f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:cc5c067d-c44f-4323-9cfb-374682c27c17> a report:ConstraintReport;
    report:constraint <urn:uuid:8974a686-95f3-448b-9eb0-8e028ff263fb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c9065373-62dd-4695-b634-87abc7a70753> a report:ConstraintReport;
    report:constraint <urn:uuid:14031796-fb1d-4dbe-b0ef-1a8f43c9783c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fb8dbf29-a037-4504-9c5a-bb31f715e3bb>, <urn:uuid:128df9cc-725f-440c-be86-33656ba9e336>.
<urn:uuid:fb8dbf29-a037-4504-9c5a-bb31f715e3bb> a report:ConstraintReport;
    report:constraint <urn:uuid:1184aee3-3c71-474e-8ef8-9f035af140a2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-27T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:128df9cc-725f-440c-be86-33656ba9e336> a report:ConstraintReport;
    report:constraint <urn:uuid:3a2c22ef-c82f-4085-a9f5-ccfed8f446ad>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d8f6fb19-56f3-4f42-be2d-26e5b20b512b> a report:ConstraintReport;
    report:constraint <urn:uuid:fc689a79-666b-4dfd-9c32-1f0eca9fd2db>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:84a8a4f3-5a15-4016-bd04-20e5ee8d7360>, <urn:uuid:086b441b-43b6-4060-ab9b-530b99ba9278>.
<urn:uuid:84a8a4f3-5a15-4016-bd04-20e5ee8d7360> a report:ConstraintReport;
    report:constraint <urn:uuid:a054e9ce-12c0-4bfe-8228-918eb34ebdbc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-09-30T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:086b441b-43b6-4060-ab9b-530b99ba9278> a report:ConstraintReport;
    report:constraint <urn:uuid:504b7ee6-b364-432a-8b6c-779ab4c5c4cb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:885a9827-2057-4b24-951f-849d6d427206> a report:ConstraintReport;
    report:constraint <urn:uuid:e0091d42-42f2-4a35-b90c-0ac144abd292>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3c8c9564-9c62-4534-ac65-bac58da24baa>, <urn:uuid:47b2dd08-3d1d-4821-ad8b-6d60accad484>.
<urn:uuid:3c8c9564-9c62-4534-ac65-bac58da24baa> a report:ConstraintReport;
    report:constraint <urn:uuid:6ee232fe-e534-409a-9499-15cae055f596>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:47b2dd08-3d1d-4821-ad8b-6d60accad484> a report:ConstraintReport;
    report:constraint <urn:uuid:1f7f4586-afe8-4bb8-8719-930fac9f4755>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:83ebf750-db37-4e00-a640-029fac527b68> a report:ConstraintReport;
    report:constraint <urn:uuid:e7d20235-7437-44b0-a4c8-0ff4215064c0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:84795ca7-2221-401a-908e-eaff5c1784d2>, <urn:uuid:8a6cfdaa-5490-440f-bd17-d526623dab32>.
<urn:uuid:84795ca7-2221-401a-908e-eaff5c1784d2> a report:ConstraintReport;
    report:constraint <urn:uuid:5c4833a5-b394-4add-888a-82e52b30d6d3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:8a6cfdaa-5490-440f-bd17-d526623dab32> a report:ConstraintReport;
    report:constraint <urn:uuid:8b9f5dee-c5a3-43d3-b8b4-444f428b0205>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:afff8b43-3fb5-4103-9b66-d334456303f8> a report:ConstraintReport;
    report:constraint <urn:uuid:02aa8f94-1b0a-4fa2-b55a-5901c1cbfc67>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:691d50dc-940f-4745-b380-15bce9fa4ead>, <urn:uuid:0fe82f0e-6cfc-4ccc-b06a-6bc351d5098a>.
<urn:uuid:691d50dc-940f-4745-b380-15bce9fa4ead> a report:ConstraintReport;
    report:constraint <urn:uuid:02e532c9-8ff4-4432-9c86-feecc24826b1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-03T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0fe82f0e-6cfc-4ccc-b06a-6bc351d5098a> a report:ConstraintReport;
    report:constraint <urn:uuid:15416af8-e23d-4b00-b559-5443b93a00d7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:28e7b6cd-d22d-4ed0-8089-3458fe57d234> a report:ConstraintReport;
    report:constraint <urn:uuid:fb999066-2b8c-4be0-8e08-7080709b1ef9>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:dbbceeee-7ff3-49ca-96c4-91106f5b24f2>, <urn:uuid:170b7f80-8b56-42b2-ab45-51bf7dda7e45>.
<urn:uuid:dbbceeee-7ff3-49ca-96c4-91106f5b24f2> a report:ConstraintReport;
    report:constraint <urn:uuid:39c23371-7f53-4706-a3da-efbd3efcbeb5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:170b7f80-8b56-42b2-ab45-51bf7dda7e45> a report:ConstraintReport;
    report:constraint <urn:uuid:9ce0cefe-092d-4c9e-a88e-7ac80b8c7d9e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:18671b46-0bee-45b2-ae88-0a6739761b72> a report:ConstraintReport;
    report:constraint <urn:uuid:3cb893f3-c716-4ac1-9ee0-78c63cffcd58>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0b32a453-90b3-4838-811a-0cf4094e71a3>, <urn:uuid:1d8af6f4-0a98-478c-8b56-c3dc6513594d>.
<urn:uuid:0b32a453-90b3-4838-811a-0cf4094e71a3> a report:ConstraintReport;
    report:constraint <urn:uuid:96441b96-045c-45b7-920a-e34d93392352>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-07T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1d8af6f4-0a98-478c-8b56-c3dc6513594d> a report:ConstraintReport;
    report:constraint <urn:uuid:697b25e5-1444-4002-9222-23145113b2a0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:526ea77c-077e-4bda-bb8d-d21d7bb92a76> a report:ConstraintReport;
    report:constraint <urn:uuid:8174c09d-2d7d-42df-99ce-d3a1fccd60a4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0a9f2827-faca-44ef-a849-9017b7edb301>, <urn:uuid:941fee61-3706-419f-8076-c9442560b70b>.
<urn:uuid:0a9f2827-faca-44ef-a849-9017b7edb301> a report:ConstraintReport;
    report:constraint <urn:uuid:ad04bdc5-d6e0-4144-acb3-7722f60fbc45>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:941fee61-3706-419f-8076-c9442560b70b> a report:ConstraintReport;
    report:constraint <urn:uuid:1cb9c410-3a0a-436f-809c-99e939ad8e6a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:a4d7ad3e-aed1-4286-9444-3ebc0818c579> a report:ConstraintReport;
    report:constraint <urn:uuid:f2f109b4-d9ac-4e41-9500-1303e5a942bb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ebdbff47-4b44-4dc1-bfea-1882b0dc5fd9>, <urn:uuid:5bedeffa-b893-4f13-bc84-0d34b0bbc6b7>.
<urn:uuid:ebdbff47-4b44-4dc1-bfea-1882b0dc5fd9> a report:ConstraintReport;
    report:constraint <urn:uuid:61078643-f180-4217-81a9-dff46ce9c398>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5bedeffa-b893-4f13-bc84-0d34b0bbc6b7> a report:ConstraintReport;
    report:constraint <urn:uuid:6095fd94-dc0a-4e11-af3b-7d40c6fcd8cd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3936feee-0d2c-43d7-9269-10d3f0c4053a> a report:ConstraintReport;
    report:constraint <urn:uuid:1eba4859-707e-44c6-84ab-615d120c7418>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8a6600bf-74c3-48b8-8634-aaaa8bda18a8>, <urn:uuid:7a5f344e-5aeb-4f68-b45e-0bb29f3ea446>.
<urn:uuid:8a6600bf-74c3-48b8-8634-aaaa8bda18a8> a report:ConstraintReport;
    report:constraint <urn:uuid:f557b6de-e0df-496e-837f-0edeae557100>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-10T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7a5f344e-5aeb-4f68-b45e-0bb29f3ea446> a report:ConstraintReport;
    report:constraint <urn:uuid:6c55ca78-ef0b-40c2-b045-4359531a9aeb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d6dda832-84ff-4124-80ce-d87401e89174> a report:ConstraintReport;
    report:constraint <urn:uuid:87f8a293-6222-4d6f-9c35-bb996684d814>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c3dbdc4c-6783-41d9-83d2-99b4099142e6>, <urn:uuid:cc6cadbb-3c15-4381-bbf6-74d832b7b6f7>.
<urn:uuid:c3dbdc4c-6783-41d9-83d2-99b4099142e6> a report:ConstraintReport;
    report:constraint <urn:uuid:049fd2ff-08d9-47d7-9213-db28d798922e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:cc6cadbb-3c15-4381-bbf6-74d832b7b6f7> a report:ConstraintReport;
    report:constraint <urn:uuid:459a32f2-8873-46c8-b620-c320325d1608>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:923176c3-90eb-44d8-840c-13f1e716d07b> a report:ConstraintReport;
    report:constraint <urn:uuid:dfc9b867-fc0d-41d4-898d-a68077cfd165>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0f314255-dda3-4539-86f8-624022a099a0>, <urn:uuid:f3e11966-3d3b-444d-a9ff-955760b729f4>.
<urn:uuid:0f314255-dda3-4539-86f8-624022a099a0> a report:ConstraintReport;
    report:constraint <urn:uuid:501ead2b-7704-41ba-accb-1a33a6d8df15>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-14T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f3e11966-3d3b-444d-a9ff-955760b729f4> a report:ConstraintReport;
    report:constraint <urn:uuid:af238321-6de8-4636-8843-e349752f2935>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:20ce9532-4646-475d-b08d-b94a25b1d558> a report:ConstraintReport;
    report:constraint <urn:uuid:7eeee0e5-4ffb-4514-b7c5-085a9cbb3e4f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5b2176c6-473f-4e6e-a3fe-d0b10c206577>, <urn:uuid:14fb9b97-fc30-4a9a-bb42-6bdeff83459a>.
<urn:uuid:5b2176c6-473f-4e6e-a3fe-d0b10c206577> a report:ConstraintReport;
    report:constraint <urn:uuid:377d4dc3-0b41-4787-a13d-5ff239da8c12>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:14fb9b97-fc30-4a9a-bb42-6bdeff83459a> a report:ConstraintReport;
    report:constraint <urn:uuid:fcd3ce98-af2a-461d-8911-979898498544>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:98b63292-d425-43f1-8b4d-420533cf39f5> a report:ConstraintReport;
    report:constraint <urn:uuid:2a2bc816-ce9e-4b41-959d-5a2bcf3f6b01>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f3acd190-5971-4a63-8af2-8d95ab7f3d17>, <urn:uuid:c0c2d229-ae81-4e1d-aada-c1f01878dec7>.
<urn:uuid:f3acd190-5971-4a63-8af2-8d95ab7f3d17> a report:ConstraintReport;
    report:constraint <urn:uuid:cf4d1090-0132-4f74-a6fa-25e5719ae276>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c0c2d229-ae81-4e1d-aada-c1f01878dec7> a report:ConstraintReport;
    report:constraint <urn:uuid:4d824ade-4af1-4f6d-9069-348c4075f2f5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:65b3f1df-5c42-4010-9274-f2a83d8ab528> a report:ConstraintReport;
    report:constraint <urn:uuid:a48b06b7-de3b-4fa9-93c6-2bdc856b1391>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c0836cea-a068-4488-94f1-5ad0b9de93ac>, <urn:uuid:5900d024-a22c-44ed-8045-23163cf8a737>.
<urn:uuid:c0836cea-a068-4488-94f1-5ad0b9de93ac> a report:ConstraintReport;
    report:constraint <urn:uuid:eb64dfcf-dda3-4367-a50d-3ca9280cbb7c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-17T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5900d024-a22c-44ed-8045-23163cf8a737> a report:ConstraintReport;
    report:constraint <urn:uuid:434018fe-bf8d-4452-b84f-2462d08a6226>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:97405196-8f12-47e2-a33f-218ea7d17e2a> a report:ConstraintReport;
    report:constraint <urn:uuid:69be343c-30f3-441e-92da-4414c7263ebb>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:46db5beb-81bc-4c79-8616-5dca01cc604a>, <urn:uuid:74e55998-6767-4e22-b8ff-c8017e708540>.
<urn:uuid:46db5beb-81bc-4c79-8616-5dca01cc604a> a report:ConstraintReport;
    report:constraint <urn:uuid:31099c2e-4d85-49c0-baa7-54aff8d050cc>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:74e55998-6767-4e22-b8ff-c8017e708540> a report:ConstraintReport;
    report:constraint <urn:uuid:0bf1929d-30f0-4833-bbd1-4dd46dcb4d98>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2049ceff-b9c7-48d9-8738-969758c37e1d> a report:ConstraintReport;
    report:constraint <urn:uuid:219f1191-9d15-4061-9007-68e0be24b6b1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:91aaa168-392c-4cf4-9487-9cfa5b3833ee>, <urn:uuid:f888bff0-0df3-4466-8357-f7f3e2875300>.
<urn:uuid:91aaa168-392c-4cf4-9487-9cfa5b3833ee> a report:ConstraintReport;
    report:constraint <urn:uuid:26497974-3474-443b-bf50-0ef678821bbf>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-21T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f888bff0-0df3-4466-8357-f7f3e2875300> a report:ConstraintReport;
    report:constraint <urn:uuid:850c4b5d-3aa2-47b7-9432-206dae6ba724>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:936abe54-4e08-431f-b251-468d50852a28> a report:ConstraintReport;
    report:constraint <urn:uuid:b45f9ed9-383e-4580-aa46-33bbdcb49eaf>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:de6f4f73-7314-4c89-93eb-c0db89173b4a>, <urn:uuid:db3e3b13-f0c4-4db6-b627-48825649ad98>.
<urn:uuid:de6f4f73-7314-4c89-93eb-c0db89173b4a> a report:ConstraintReport;
    report:constraint <urn:uuid:d257d830-9171-46d6-9b8d-c10d6ebb815d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:db3e3b13-f0c4-4db6-b627-48825649ad98> a report:ConstraintReport;
    report:constraint <urn:uuid:f4487552-4790-4bf3-99c7-3d2fdc0730f8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c4ca2234-93f3-4590-899a-5e4090e119dd> a report:ConstraintReport;
    report:constraint <urn:uuid:93fe924e-d433-4680-993c-1dd6aadd8406>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:03d2600c-10a1-4e08-af49-353c31b97b35>, <urn:uuid:da5a8965-bd5d-481d-baaa-d03c8c68bc74>.
<urn:uuid:03d2600c-10a1-4e08-af49-353c31b97b35> a report:ConstraintReport;
    report:constraint <urn:uuid:2f762c7e-52ac-4434-ab9c-9c36978d5b19>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:da5a8965-bd5d-481d-baaa-d03c8c68bc74> a report:ConstraintReport;
    report:constraint <urn:uuid:616fdc6b-8e56-4130-b347-a99e046c6309>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f3b93188-dcc1-43ea-9371-daaffb7d173c> a report:ConstraintReport;
    report:constraint <urn:uuid:26bca22d-c7f7-45cf-965a-cb25b18f5e12>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0194d269-6aed-43ed-9b2e-14f381eba754>, <urn:uuid:5bc36e45-cc62-4494-b29e-82337e18809a>.
<urn:uuid:0194d269-6aed-43ed-9b2e-14f381eba754> a report:ConstraintReport;
    report:constraint <urn:uuid:4d33a62c-0fd9-4935-bc02-ebaddd948343>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-24T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5bc36e45-cc62-4494-b29e-82337e18809a> a report:ConstraintReport;
    report:constraint <urn:uuid:89f23515-ce5f-404c-a25a-7bf4b1683187>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:d790341a-1c40-4259-8968-bb984427cc62> a report:ConstraintReport;
    report:constraint <urn:uuid:5b437f68-c233-4340-9d68-bd8f90938c28>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f1144fa5-8403-4cbc-9f36-ab00922f4b8d>, <urn:uuid:fb8082d9-0d11-4bd4-96de-81b5e68f4ee4>.
<urn:uuid:f1144fa5-8403-4cbc-9f36-ab00922f4b8d> a report:ConstraintReport;
    report:constraint <urn:uuid:5701655a-fcc2-4b55-8362-5713fa280857>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:fb8082d9-0d11-4bd4-96de-81b5e68f4ee4> a report:ConstraintReport;
    report:constraint <urn:uuid:50ac39a9-4262-4e66-a8f3-1829b1ebbc7a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b206e75c-2a91-41b6-abd2-fbaba4288871> a report:ConstraintReport;
    report:constraint <urn:uuid:701a1f06-f867-4edb-a3b9-d471b0b8265c>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ada66b85-3386-4a4f-b0ac-ec6c88b91726>, <urn:uuid:9b270fa2-4d02-48da-9adc-fe4f6e57b02f>.
<urn:uuid:ada66b85-3386-4a4f-b0ac-ec6c88b91726> a report:ConstraintReport;
    report:constraint <urn:uuid:9d79f5f4-bb7d-4218-a96c-6d52347ae95f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-28T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:9b270fa2-4d02-48da-9adc-fe4f6e57b02f> a report:ConstraintReport;
    report:constraint <urn:uuid:e8a02c26-e562-42f8-89cc-0d2459507ad6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:88429562-2f61-421f-ad0e-febdb7f18407> a report:ConstraintReport;
    report:constraint <urn:uuid:068de183-3d3b-4f38-9769-1007f978524e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4e3d07a9-a6e7-4a83-a17a-60d3ab3efdf0>, <urn:uuid:13e903a1-3f77-46af-9efb-e3e9b2fbc27e>.
<urn:uuid:4e3d07a9-a6e7-4a83-a17a-60d3ab3efdf0> a report:ConstraintReport;
    report:constraint <urn:uuid:806a4725-31ab-461e-b17d-692abf48bcce>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:13e903a1-3f77-46af-9efb-e3e9b2fbc27e> a report:ConstraintReport;
    report:constraint <urn:uuid:53b4acb6-b122-4344-9c93-631c71e7a27e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:022cae7c-5c79-4902-94be-2e4ea8511e4d> a report:ConstraintReport;
    report:constraint <urn:uuid:134563e3-0314-44ce-bd44-7c9796d8dcc2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:3d3a09ad-055d-4000-b1af-a428c3412806>, <urn:uuid:05c46a3a-bfbb-451c-9168-9a6ab27170c2>.
<urn:uuid:3d3a09ad-055d-4000-b1af-a428c3412806> a report:ConstraintReport;
    report:constraint <urn:uuid:bb49138d-5033-475a-b53c-c009e0709a86>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-30T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:05c46a3a-bfbb-451c-9168-9a6ab27170c2> a report:ConstraintReport;
    report:constraint <urn:uuid:c779cf86-014a-42b6-bd8f-9223e4041e4e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:bd22d72d-9b26-4aa1-978f-662eb30e6967> a report:ConstraintReport;
    report:constraint <urn:uuid:9d3d4dbb-46eb-4d0a-8ae6-a44c703e04fc>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:16df7ae4-26a4-470f-a95f-0dda26295882>, <urn:uuid:a1afd666-0ddd-4e6a-ae8d-ed71b8cae501>.
<urn:uuid:16df7ae4-26a4-470f-a95f-0dda26295882> a report:ConstraintReport;
    report:constraint <urn:uuid:73a013e2-a88d-44d0-be21-d69bc67230a3>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-10-31T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:a1afd666-0ddd-4e6a-ae8d-ed71b8cae501> a report:ConstraintReport;
    report:constraint <urn:uuid:4cbc0742-fbda-4d1a-802b-ffe96a2c2d41>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:7167d066-d26a-4ce7-98ac-96fe04fab36d> a report:ConstraintReport;
    report:constraint <urn:uuid:778cf6cb-3945-41d1-9d65-8476c2efce85>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:00b3b9dd-9b76-4a8e-9a67-7237dc5821e7>, <urn:uuid:19f80663-18cd-4f5b-a490-4727eaf8b90a>.
<urn:uuid:00b3b9dd-9b76-4a8e-9a67-7237dc5821e7> a report:ConstraintReport;
    report:constraint <urn:uuid:f813167b-73e8-4a08-8642-40b87a8b1140>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-01T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:19f80663-18cd-4f5b-a490-4727eaf8b90a> a report:ConstraintReport;
    report:constraint <urn:uuid:d6a96d8a-5d2f-4abd-aec2-ecc17b1d2b19>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:81ed9718-14b1-4d4a-9a78-c62a9c1ce317> a report:ConstraintReport;
    report:constraint <urn:uuid:a2b733a3-89e8-4f81-a954-fefc0e29072e>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9f84c09d-8416-4a82-ae94-5bd83d14be77>, <urn:uuid:07d4936c-7dcb-4015-9ff0-ba18dd79a953>.
<urn:uuid:9f84c09d-8416-4a82-ae94-5bd83d14be77> a report:ConstraintReport;
    report:constraint <urn:uuid:7119129c-ea4c-4c95-9aed-df0527bb1dcf>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:07d4936c-7dcb-4015-9ff0-ba18dd79a953> a report:ConstraintReport;
    report:constraint <urn:uuid:c9fe1107-48ef-4bb1-ae69-c16a66736208>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:eefb9b27-860b-451e-bd8e-db4f089daf1d> a report:ConstraintReport;
    report:constraint <urn:uuid:9ef3e970-701b-4f7e-a7cb-c6aa5a2efaef>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:da5a6b4a-3f6d-476b-b896-75aa0992d1d9>, <urn:uuid:bb5c3e1a-0f51-4c27-86db-1d19987dce56>.
<urn:uuid:da5a6b4a-3f6d-476b-b896-75aa0992d1d9> a report:ConstraintReport;
    report:constraint <urn:uuid:fde8c379-f0c5-4bb7-97ef-1d700c7bb7ba>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:bb5c3e1a-0f51-4c27-86db-1d19987dce56> a report:ConstraintReport;
    report:constraint <urn:uuid:9183147a-f8dc-4dea-b67a-82e74267c474>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4a22c316-8e17-4f40-b022-3fb3606b448a> a report:ConstraintReport;
    report:constraint <urn:uuid:eaa436c6-0904-452a-b0e1-41bc185a0a71>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:70716eaf-98a6-4c0d-adc9-5c5b4efa41d9>, <urn:uuid:07aef948-4f00-427c-a199-b273c6a142c8>.
<urn:uuid:70716eaf-98a6-4c0d-adc9-5c5b4efa41d9> a report:ConstraintReport;
    report:constraint <urn:uuid:53d930f3-a334-4e95-a3f9-b2adda37aa3e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-06T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:07aef948-4f00-427c-a199-b273c6a142c8> a report:ConstraintReport;
    report:constraint <urn:uuid:df78cb77-e3d3-4a4e-aa8f-effa9e158eb9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f8eccc4e-36eb-48cd-a8ea-2395bb6f75dc> a report:ConstraintReport;
    report:constraint <urn:uuid:bc44fecb-3934-4fff-8ae3-6b04fb45f7f5>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e4642e4d-23b0-4b46-9e51-9aa00b28d2fe>, <urn:uuid:e885685c-7e44-42a5-9584-4a7ca41431e9>.
<urn:uuid:e4642e4d-23b0-4b46-9e51-9aa00b28d2fe> a report:ConstraintReport;
    report:constraint <urn:uuid:501cd48e-77ae-4f09-8746-3bde8af045f9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-07T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e885685c-7e44-42a5-9584-4a7ca41431e9> a report:ConstraintReport;
    report:constraint <urn:uuid:adf4e46b-8f23-4dda-b85b-146b4a059e01>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:37cb4125-6972-4b52-b116-e73409690e3c> a report:ConstraintReport;
    report:constraint <urn:uuid:957bfa67-4996-4fc9-95a9-636a4f2b743f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fd2eeb17-18d8-46ee-afbb-f8e7734fec71>, <urn:uuid:c8b78bff-aa22-4e32-a2be-da45c58969df>.
<urn:uuid:fd2eeb17-18d8-46ee-afbb-f8e7734fec71> a report:ConstraintReport;
    report:constraint <urn:uuid:ea28d837-3993-4166-ab3d-aceed0611354>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-08T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c8b78bff-aa22-4e32-a2be-da45c58969df> a report:ConstraintReport;
    report:constraint <urn:uuid:92eb8064-54de-498e-b32f-3509247e99b1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5ffc4f05-f59f-45dc-bf5f-54ba18c6e5bb> a report:ConstraintReport;
    report:constraint <urn:uuid:9c6ec92b-4df8-4996-b92f-e1bd63a7f5b1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:da834f63-ed18-4e94-830e-3aafd9e3b336>, <urn:uuid:c9ab215a-928e-4700-afb7-b4a8d1f43641>.
<urn:uuid:da834f63-ed18-4e94-830e-3aafd9e3b336> a report:ConstraintReport;
    report:constraint <urn:uuid:958b73bf-9c7b-46e5-9547-3828cac85ad1>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c9ab215a-928e-4700-afb7-b4a8d1f43641> a report:ConstraintReport;
    report:constraint <urn:uuid:488ca938-e5ef-4b2b-97c5-8c47ef66d24e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:0b1e55bd-10da-4612-9751-8ab6abe43aca> a report:ConstraintReport;
    report:constraint <urn:uuid:f0d083f6-499c-4ec6-b50f-cf494abfb2f3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4c4415e4-6553-4058-83a7-bf43783c8dfa>, <urn:uuid:8c19a762-c8ba-4047-b203-2deaf943fc98>.
<urn:uuid:4c4415e4-6553-4058-83a7-bf43783c8dfa> a report:ConstraintReport;
    report:constraint <urn:uuid:7aa662e7-7e90-42c8-96e9-284ac25dc35c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:8c19a762-c8ba-4047-b203-2deaf943fc98> a report:ConstraintReport;
    report:constraint <urn:uuid:502816a9-b6f4-4d10-b37f-14443de6654f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:260c45b1-c294-4e51-929e-1a710bc28293> a report:ConstraintReport;
    report:constraint <urn:uuid:b41c49b3-26f3-4560-934c-0e80d21632ec>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2181c58a-44b2-461a-972c-c0270088ec5c>, <urn:uuid:2ee1d6a7-ce8a-48ca-9e4d-1d924f8bfb5c>.
<urn:uuid:2181c58a-44b2-461a-972c-c0270088ec5c> a report:ConstraintReport;
    report:constraint <urn:uuid:d7b704f6-e8f1-4aec-8f39-bf8638f3fcf2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-13T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:2ee1d6a7-ce8a-48ca-9e4d-1d924f8bfb5c> a report:ConstraintReport;
    report:constraint <urn:uuid:6f7a8878-21b4-488b-b0a8-7709ccfdea84>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8777fab7-18d6-4bb5-98f4-1b1241aa1fc2> a report:ConstraintReport;
    report:constraint <urn:uuid:7a225779-fcf2-4897-9286-bd999e707822>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:7e33f1f1-9602-4f66-a359-1e8186f7cdab>, <urn:uuid:28651183-8929-4fe1-af42-a1fdfb34c610>.
<urn:uuid:7e33f1f1-9602-4f66-a359-1e8186f7cdab> a report:ConstraintReport;
    report:constraint <urn:uuid:5c9b1927-28a0-4da3-a207-9fbad71d189f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-14T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:28651183-8929-4fe1-af42-a1fdfb34c610> a report:ConstraintReport;
    report:constraint <urn:uuid:4f51eb43-5b15-4b9a-8a73-a08f7c1edf2e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6fa749c4-c6e4-4d1f-8bfb-02693b716eeb> a report:ConstraintReport;
    report:constraint <urn:uuid:a8cca86c-e932-47a7-85fa-e7befcb3c6e0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f7ea0d84-4754-4233-822b-5391740483d3>, <urn:uuid:71eaa642-8734-4038-a23c-70386a9b0903>.
<urn:uuid:f7ea0d84-4754-4233-822b-5391740483d3> a report:ConstraintReport;
    report:constraint <urn:uuid:0d45f580-1eaa-4459-a991-d91ef0f36d5a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-15T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:71eaa642-8734-4038-a23c-70386a9b0903> a report:ConstraintReport;
    report:constraint <urn:uuid:0243300e-8615-40c3-905a-ec16f3268ca8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:816508bc-d0c0-49b9-9e22-fa5926f04971> a report:ConstraintReport;
    report:constraint <urn:uuid:50ef2f36-3080-4473-81d5-ebaf466720fd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:57188cc3-80c7-4511-9f78-84713776a9f6>, <urn:uuid:6c6c314d-ed80-40a6-b5fc-f4c11f106d69>.
<urn:uuid:57188cc3-80c7-4511-9f78-84713776a9f6> a report:ConstraintReport;
    report:constraint <urn:uuid:59c52fba-af5c-4f28-bb50-869dafd499f7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6c6c314d-ed80-40a6-b5fc-f4c11f106d69> a report:ConstraintReport;
    report:constraint <urn:uuid:3fe6455e-32fc-4663-be7a-f7168cda838a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:68dda140-a005-474e-aac8-c914e86d5131> a report:ConstraintReport;
    report:constraint <urn:uuid:fdd857e3-4be4-44fb-8fd1-8b7ac89209e3>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:c79666ba-8c1d-4b41-8b68-f2d440e73935>, <urn:uuid:6f3e2088-48e2-4ada-a535-2a9351f072de>.
<urn:uuid:c79666ba-8c1d-4b41-8b68-f2d440e73935> a report:ConstraintReport;
    report:constraint <urn:uuid:ea9e70c0-9aa0-4fc3-9edd-6beaab2cf602>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6f3e2088-48e2-4ada-a535-2a9351f072de> a report:ConstraintReport;
    report:constraint <urn:uuid:8c361160-41c3-4129-8596-08ba0363a89b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:6d986929-7e80-4987-8ca3-f6f05a27d6ea> a report:ConstraintReport;
    report:constraint <urn:uuid:fc60793d-9d4c-4a96-b432-2467049085aa>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6b69a42e-b247-4843-ab54-28831450a271>, <urn:uuid:3df720d7-5aa1-4c40-bbed-1ec83f41d50c>.
<urn:uuid:6b69a42e-b247-4843-ab54-28831450a271> a report:ConstraintReport;
    report:constraint <urn:uuid:eae63486-6ad8-414e-a547-04ea466d4b93>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-20T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:3df720d7-5aa1-4c40-bbed-1ec83f41d50c> a report:ConstraintReport;
    report:constraint <urn:uuid:c3b23283-e054-4cb4-95bb-947d001d5ff4>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:74b17ac0-faae-4b72-9ef5-a29fd8309b3a> a report:ConstraintReport;
    report:constraint <urn:uuid:c562d65c-598f-4802-afec-1d4b9da76053>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0a45dbac-db36-4837-80b6-0c6442c46a5e>, <urn:uuid:6608dd14-2535-4556-a6ce-722a8fc585ff>.
<urn:uuid:0a45dbac-db36-4837-80b6-0c6442c46a5e> a report:ConstraintReport;
    report:constraint <urn:uuid:48ee8f69-ab79-4b21-8f90-975f42c08633>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-21T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:6608dd14-2535-4556-a6ce-722a8fc585ff> a report:ConstraintReport;
    report:constraint <urn:uuid:9ad2d407-b289-4e79-94d8-d53ae7a36b47>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:2f89bfe4-c9f1-4ed8-99c7-7fc59e9bbbfe> a report:ConstraintReport;
    report:constraint <urn:uuid:636fd4c9-f929-4d9f-8cb9-9aa7c4dd0c23>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:0e0b9951-1469-4913-96d1-c247808ccbbc>, <urn:uuid:7c425714-f718-4f64-be36-43b541a41ef7>.
<urn:uuid:0e0b9951-1469-4913-96d1-c247808ccbbc> a report:ConstraintReport;
    report:constraint <urn:uuid:220e4eac-99e4-45b0-a96c-e5b0583d36be>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-22T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:7c425714-f718-4f64-be36-43b541a41ef7> a report:ConstraintReport;
    report:constraint <urn:uuid:a841f80e-e4e3-4e70-b631-fb8188250058>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5be43a86-e76f-4c52-9064-5fc1b01731ea> a report:ConstraintReport;
    report:constraint <urn:uuid:662d1f4f-bf9d-4a80-ae6b-c3eb2584c344>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8a84e151-6998-4c4c-b8e6-6559e5a24308>, <urn:uuid:06467482-eb91-4186-828f-64872a2eb748>.
<urn:uuid:8a84e151-6998-4c4c-b8e6-6559e5a24308> a report:ConstraintReport;
    report:constraint <urn:uuid:99dc7e13-0335-436d-a879-150d0525cbdf>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:06467482-eb91-4186-828f-64872a2eb748> a report:ConstraintReport;
    report:constraint <urn:uuid:1eb99780-6dd7-4e0e-84d7-cf3055bff7d0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:40f75a3f-38a5-49a2-9c96-66c5e742b464> a report:ConstraintReport;
    report:constraint <urn:uuid:d9453fa8-8c91-492d-ae9b-2d008d6670a2>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ddda114d-5cee-4c6c-b253-5611e1449bbb>, <urn:uuid:082556a5-01c2-4a08-bf91-6836da254c5e>.
<urn:uuid:ddda114d-5cee-4c6c-b253-5611e1449bbb> a report:ConstraintReport;
    report:constraint <urn:uuid:37263a47-af3d-4d27-aa83-43fb8e059197>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:082556a5-01c2-4a08-bf91-6836da254c5e> a report:ConstraintReport;
    report:constraint <urn:uuid:724350fb-cfa8-4a0c-9ea4-bc1563d50a76>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:893fed7c-ca87-47f0-b503-bca61bbc45bf> a report:ConstraintReport;
    report:constraint <urn:uuid:64e4b11b-2c26-46a9-88db-347b386c1999>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:77ce1e44-61eb-4b5a-93a9-14cc8625d0a8>, <urn:uuid:e136b799-6fd8-4ba5-819b-4a9a95c9f3a5>.
<urn:uuid:77ce1e44-61eb-4b5a-93a9-14cc8625d0a8> a report:ConstraintReport;
    report:constraint <urn:uuid:c2fc04e3-52fe-43ac-b0ed-5a40818ab3e6>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-27T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e136b799-6fd8-4ba5-819b-4a9a95c9f3a5> a report:ConstraintReport;
    report:constraint <urn:uuid:8aae4288-f074-4382-ada4-c113b96476f9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:cdac76d1-e33c-4209-b551-1e9971b40003> a report:ConstraintReport;
    report:constraint <urn:uuid:38413bf0-11f3-4877-914a-96ccf6c59aab>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f64f6eb6-e7b1-4aa5-acc0-2111ab0e90fc>, <urn:uuid:3b75f28a-a94b-4f2a-accc-bafca38264c1>.
<urn:uuid:f64f6eb6-e7b1-4aa5-acc0-2111ab0e90fc> a report:ConstraintReport;
    report:constraint <urn:uuid:07cf50ff-5ac8-43d2-b045-402b50f817e5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-28T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:3b75f28a-a94b-4f2a-accc-bafca38264c1> a report:ConstraintReport;
    report:constraint <urn:uuid:141f8880-ca7f-4b1f-8ddc-8dc4b077cc9f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:58140409-c1de-4af3-bea3-489c7493fde1> a report:ConstraintReport;
    report:constraint <urn:uuid:7be61257-458a-4fb6-b0f2-b52d3f577c83>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:ac1ea8e9-0a26-4507-89e2-a9c00fc5f9a7>, <urn:uuid:58ff11c1-756d-478c-a5df-8e207d247298>.
<urn:uuid:ac1ea8e9-0a26-4507-89e2-a9c00fc5f9a7> a report:ConstraintReport;
    report:constraint <urn:uuid:e33ccd56-6f79-425d-acd7-cf76007dbca7>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-11-29T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:58ff11c1-756d-478c-a5df-8e207d247298> a report:ConstraintReport;
    report:constraint <urn:uuid:fee20948-6492-411c-9539-2d55581b7e56>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:31d980ef-4b9c-4c3b-af14-54fd913ad0f4> a report:ConstraintReport;
    report:constraint <urn:uuid:3baee5f7-6433-4381-9106-4af816a512fd>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:2de81e10-583e-4807-be58-2cecc13c1e08>, <urn:uuid:4e7376f0-17af-454b-a548-a6d9b57b0ebc>.
<urn:uuid:2de81e10-583e-4807-be58-2cecc13c1e08> a report:ConstraintReport;
    report:constraint <urn:uuid:7ec5b3e0-53ec-4adc-a353-64752da31234>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-02T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:4e7376f0-17af-454b-a548-a6d9b57b0ebc> a report:ConstraintReport;
    report:constraint <urn:uuid:f409a24f-863b-4fbe-8877-9b1baba517f8>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8d4ec50f-160c-4bb7-b4c2-e643915f2872> a report:ConstraintReport;
    report:constraint <urn:uuid:44ae9166-531c-4415-a62f-655a6cea9d01>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:f7800816-7b35-4a26-94bb-2132232aabbb>, <urn:uuid:1f03c396-f9b8-41ae-b612-9d9505b9b57d>.
<urn:uuid:f7800816-7b35-4a26-94bb-2132232aabbb> a report:ConstraintReport;
    report:constraint <urn:uuid:79e2e81c-d3dc-40b0-9e7d-86e1e4a8ab81>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-03T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:1f03c396-f9b8-41ae-b612-9d9505b9b57d> a report:ConstraintReport;
    report:constraint <urn:uuid:b08fe21a-d41d-4deb-a46e-3ab4add6ea12>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c3ec5ce2-b7db-44d8-b7db-8430e89f3247> a report:ConstraintReport;
    report:constraint <urn:uuid:b8c7fbfe-4b16-4dea-b08c-1268cc7e1eb1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:4c620298-453d-46fe-853c-e2023e782c25>, <urn:uuid:461ffd2e-01e5-46e2-8135-faa6f2c6bc69>.
<urn:uuid:4c620298-453d-46fe-853c-e2023e782c25> a report:ConstraintReport;
    report:constraint <urn:uuid:0edbe8b8-2f48-4a6d-b15a-16676e12362e>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-04T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:461ffd2e-01e5-46e2-8135-faa6f2c6bc69> a report:ConstraintReport;
    report:constraint <urn:uuid:b0dda4fa-ad32-433e-a183-1f5ed338af6a>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:5b78022d-2cf7-42d8-aee4-f17dd7133cee> a report:ConstraintReport;
    report:constraint <urn:uuid:ef4fdae7-207b-45ec-a4db-b6fbf69e809f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:450894b1-3af0-436a-8533-409c077b564b>, <urn:uuid:07e26254-6232-4246-9dff-110e5e01d2a5>.
<urn:uuid:450894b1-3af0-436a-8533-409c077b564b> a report:ConstraintReport;
    report:constraint <urn:uuid:002a2fa7-bc84-4072-9c49-a765d7edfcc2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-05T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:07e26254-6232-4246-9dff-110e5e01d2a5> a report:ConstraintReport;
    report:constraint <urn:uuid:c6dcb1fa-4f55-4992-a450-7f1f1b2db837>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:19cb2286-7212-429d-9f03-adba30516e34> a report:ConstraintReport;
    report:constraint <urn:uuid:e7a41771-8364-43e1-8647-401f37f8e886>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:55030837-370f-4d84-af34-df5cb44b86f6>, <urn:uuid:690e4eba-f09d-4f5a-b9d2-296c3f4e5afe>.
<urn:uuid:55030837-370f-4d84-af34-df5cb44b86f6> a report:ConstraintReport;
    report:constraint <urn:uuid:1e573bdd-0219-4302-bf44-f41d797037d5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-06T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:690e4eba-f09d-4f5a-b9d2-296c3f4e5afe> a report:ConstraintReport;
    report:constraint <urn:uuid:d4285515-94b9-4930-b5d1-78ef3f37de64>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:13d1d8a2-4739-4605-a685-014b89c59b8f> a report:ConstraintReport;
    report:constraint <urn:uuid:e27de4ad-8809-470a-864e-6956eab9067f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:5eefdf19-00b1-4ee0-b560-3ba29a794779>, <urn:uuid:05d80e82-afe8-47ae-9f2d-bee662722140>.
<urn:uuid:5eefdf19-00b1-4ee0-b560-3ba29a794779> a report:ConstraintReport;
    report:constraint <urn:uuid:f4a97fed-5e4b-4bff-834e-3fa82050e931>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-09T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:05d80e82-afe8-47ae-9f2d-bee662722140> a report:ConstraintReport;
    report:constraint <urn:uuid:01d631bd-2109-4379-80e1-e12ac64f2dff>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:76ca170c-24da-4d4d-a97f-167e1cdd0be9> a report:ConstraintReport;
    report:constraint <urn:uuid:3ec09e77-b91a-4217-b789-00f1c6051816>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:06c56e6c-bd71-4d30-9d30-7f593cb52c18>, <urn:uuid:68eb835c-460a-4ca2-a646-d9896d41eef5>.
<urn:uuid:06c56e6c-bd71-4d30-9d30-7f593cb52c18> a report:ConstraintReport;
    report:constraint <urn:uuid:159a13f2-79eb-425c-a0a8-5a387182cd80>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-10T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:68eb835c-460a-4ca2-a646-d9896d41eef5> a report:ConstraintReport;
    report:constraint <urn:uuid:0882154b-3822-4fe0-8a0e-81b0fb8cac6c>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:aefb0fc9-94cd-4604-b3fa-ad25fe320bc8> a report:ConstraintReport;
    report:constraint <urn:uuid:653449a3-b32e-43ce-bad2-4ca7b8b43674>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:49f0d956-8eba-49b1-bda9-936e47ab13fe>, <urn:uuid:f4474556-66b4-4bbc-a915-45e838d40b46>.
<urn:uuid:49f0d956-8eba-49b1-bda9-936e47ab13fe> a report:ConstraintReport;
    report:constraint <urn:uuid:5a7b0cee-18f9-4d96-b7fc-aa0680aab6a4>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-11T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:f4474556-66b4-4bbc-a915-45e838d40b46> a report:ConstraintReport;
    report:constraint <urn:uuid:566da207-be3e-45f1-8e60-18a51f0c7e02>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dddace47-4fc0-4f40-9fd5-dd16099a5a53> a report:ConstraintReport;
    report:constraint <urn:uuid:5609f832-97cf-4932-9120-7a5d698e8b61>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:08462160-834e-40fa-a7fe-e22611562ff1>, <urn:uuid:05c5c796-674d-4de9-8a5c-41dfb2a1f12e>.
<urn:uuid:08462160-834e-40fa-a7fe-e22611562ff1> a report:ConstraintReport;
    report:constraint <urn:uuid:c98be63a-643d-4030-bd32-f4cd1f8e0c99>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-12T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:05c5c796-674d-4de9-8a5c-41dfb2a1f12e> a report:ConstraintReport;
    report:constraint <urn:uuid:3d74d678-dc20-4dc9-aa21-dd669d32bfff>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:dc5d805c-45f2-401b-b67e-428721958660> a report:ConstraintReport;
    report:constraint <urn:uuid:99f1ec97-f070-4860-bff3-f23fa5f55946>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:b3c3022f-07b0-4487-a02e-c13fd8ab0a9e>, <urn:uuid:5ab8fd04-1e2f-4cc9-abb1-31a7eb3b5747>.
<urn:uuid:b3c3022f-07b0-4487-a02e-c13fd8ab0a9e> a report:ConstraintReport;
    report:constraint <urn:uuid:e81cf59b-106e-452b-96ea-7a062ebdd712>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-13T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5ab8fd04-1e2f-4cc9-abb1-31a7eb3b5747> a report:ConstraintReport;
    report:constraint <urn:uuid:db535878-c0b4-41d4-9a0f-80eaabee31bd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:9faa32d7-8d0f-4e63-ab8d-49da65dda0b6> a report:ConstraintReport;
    report:constraint <urn:uuid:df2456bb-3a47-4c13-9a42-443c163a861b>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:58e54a81-807f-48d1-b5f2-c12c64bc38e1>, <urn:uuid:72c66261-edde-4aaa-b100-d613c8a524e3>.
<urn:uuid:58e54a81-807f-48d1-b5f2-c12c64bc38e1> a report:ConstraintReport;
    report:constraint <urn:uuid:4a354999-d4af-4372-8cc7-bea0689a790f>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-16T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:72c66261-edde-4aaa-b100-d613c8a524e3> a report:ConstraintReport;
    report:constraint <urn:uuid:8023654a-1f38-46e2-a67b-7e53d378d401>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b684c47e-0122-4390-a081-7a32620b87a2> a report:ConstraintReport;
    report:constraint <urn:uuid:212e9f84-4485-4fbd-a63a-f22ae5d65c45>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6f8072fa-9bb1-4390-a7e8-600fe790c4e1>, <urn:uuid:2b02eb37-2c61-4804-bc5f-8ab6da9feb70>.
<urn:uuid:6f8072fa-9bb1-4390-a7e8-600fe790c4e1> a report:ConstraintReport;
    report:constraint <urn:uuid:d47551d1-f940-4885-8afa-25848f54b401>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-17T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:2b02eb37-2c61-4804-bc5f-8ab6da9feb70> a report:ConstraintReport;
    report:constraint <urn:uuid:d6fc72f1-2399-4c19-b283-f3a5c92c6a8b>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:ee6ccf4f-4782-4907-b570-248f6328a00f> a report:ConstraintReport;
    report:constraint <urn:uuid:1f10b2d8-0fc8-4dd9-b0cf-c07e1080a7df>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:d67cb21d-e817-45ee-93e4-33b14381a650>, <urn:uuid:5e61f2cc-59e7-4e6d-8795-3aeefc0d11a4>.
<urn:uuid:d67cb21d-e817-45ee-93e4-33b14381a650> a report:ConstraintReport;
    report:constraint <urn:uuid:d53d4ad1-ba1a-4bb1-93e4-6d0e69b8b0d0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-18T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:5e61f2cc-59e7-4e6d-8795-3aeefc0d11a4> a report:ConstraintReport;
    report:constraint <urn:uuid:5c9b57e8-1a8a-44ca-8080-848cc6fed6d9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:f3437748-0a97-4870-8134-0391269943ca> a report:ConstraintReport;
    report:constraint <urn:uuid:3c4108b3-5cfc-45ee-af03-f01c2cb86c9f>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:fc4cb94f-2e98-417a-8705-1d76efd3d89d>, <urn:uuid:0a13ec31-0aad-451a-ae03-95fb8233d627>.
<urn:uuid:fc4cb94f-2e98-417a-8705-1d76efd3d89d> a report:ConstraintReport;
    report:constraint <urn:uuid:04376193-751a-4988-9990-869e4f6ba277>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-19T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:0a13ec31-0aad-451a-ae03-95fb8233d627> a report:ConstraintReport;
    report:constraint <urn:uuid:0b77dd6d-7760-4474-a6ab-76d0a748dc34>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:07244870-7c39-4a8e-aa41-9ddb2f4a8051> a report:ConstraintReport;
    report:constraint <urn:uuid:f9e0ce4a-7246-47ae-b251-b620a276b3ad>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:6c5d5376-dcba-403a-a9fc-22dbb776f2a2>, <urn:uuid:d711941f-0907-457f-899a-c58ca614e86f>.
<urn:uuid:6c5d5376-dcba-403a-a9fc-22dbb776f2a2> a report:ConstraintReport;
    report:constraint <urn:uuid:3a792116-6d64-4a5d-b24e-e52281d6e1dd>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-20T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:d711941f-0907-457f-899a-c58ca614e86f> a report:ConstraintReport;
    report:constraint <urn:uuid:7bfc1bd8-df75-48fa-a696-c33621f90de2>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:8240f38a-1555-498a-8cc3-c76b2cc2426e> a report:ConstraintReport;
    report:constraint <urn:uuid:9e95cad6-95bf-4497-a3bc-9a4d54576226>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:e179f8b5-da98-422a-b7de-c9ab1358585e>, <urn:uuid:756cc5b6-b0e8-4d40-829d-00bff1a17ea7>.
<urn:uuid:e179f8b5-da98-422a-b7de-c9ab1358585e> a report:ConstraintReport;
    report:constraint <urn:uuid:6d2eb216-41d1-4a75-899a-3315959ce4c0>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-23T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:756cc5b6-b0e8-4d40-829d-00bff1a17ea7> a report:ConstraintReport;
    report:constraint <urn:uuid:4165a9f3-8548-443e-b7ef-c3bdce7aa407>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:1b852152-974c-497b-9e8e-9426c7aa8d5b> a report:ConstraintReport;
    report:constraint <urn:uuid:88c0a344-a509-4140-a039-691fe86311d1>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:bae16f84-c496-4ab3-abaf-032e9b4aac5b>, <urn:uuid:c32dea68-cc3d-4d2d-87cb-b3119feb4baf>.
<urn:uuid:bae16f84-c496-4ab3-abaf-032e9b4aac5b> a report:ConstraintReport;
    report:constraint <urn:uuid:be96abcd-fdba-4a4e-83c3-684b23143c88>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-24T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:c32dea68-cc3d-4d2d-87cb-b3119feb4baf> a report:ConstraintReport;
    report:constraint <urn:uuid:d72d5d7f-072c-49d9-94a4-43e0a722a721>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:b8b8d21e-e8bc-499a-87bb-6fe5a1d8ff58> a report:ConstraintReport;
    report:constraint <urn:uuid:cdc19240-6380-423e-a367-5dc1fa7d8358>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:8c2e70b3-8b1e-4cd7-a5e6-3166aae4c21e>, <urn:uuid:2dfd5ab3-6e39-428e-9850-055e1870c224>.
<urn:uuid:8c2e70b3-8b1e-4cd7-a5e6-3166aae4c21e> a report:ConstraintReport;
    report:constraint <urn:uuid:84d1432d-4215-4d48-85c1-eae07de564ae>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-25T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:2dfd5ab3-6e39-428e-9850-055e1870c224> a report:ConstraintReport;
    report:constraint <urn:uuid:07166646-98d3-43c2-92e9-62efbb3c93ac>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:3da13cbd-b7b6-41fc-93f2-59d52546d69f> a report:ConstraintReport;
    report:constraint <urn:uuid:a7622a4e-402c-4c9b-90a7-f48c07287ea0>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:96cd67cc-0209-427b-8861-d5ea42957d4c>, <urn:uuid:78e65168-bafd-48d3-b38e-06c117f1d223>.
<urn:uuid:96cd67cc-0209-427b-8861-d5ea42957d4c> a report:ConstraintReport;
    report:constraint <urn:uuid:83bed457-d0bc-43ba-ba3e-0223439d8023>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-26T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:78e65168-bafd-48d3-b38e-06c117f1d223> a report:ConstraintReport;
    report:constraint <urn:uuid:a228d0c0-1ae8-4bd3-9ad6-c833751f57c9>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:14261eb9-90c4-48f1-bd53-5de4d832dc5e> a report:ConstraintReport;
    report:constraint <urn:uuid:b70d3865-fc6e-49e7-9b2c-6850843d5a90>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:640ac485-bc8a-4b58-8aaf-084d1cdf3e60>, <urn:uuid:e23f73ef-3aea-444e-a218-8d59ba0b083b>.
<urn:uuid:640ac485-bc8a-4b58-8aaf-084d1cdf3e60> a report:ConstraintReport;
    report:constraint <urn:uuid:a6848bc3-9f96-4bee-871d-f2c3fc344e67>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-27T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:e23f73ef-3aea-444e-a218-8d59ba0b083b> a report:ConstraintReport;
    report:constraint <urn:uuid:9a24b81b-6f1c-4ae3-a91d-a854aad569cb>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:c4cf2f68-645e-49fa-89e1-347c2c6ac279> a report:ConstraintReport;
    report:constraint <urn:uuid:bcb639ac-7236-4770-b4a3-6209d0e8bf55>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:9c269b39-5abc-45b7-be5e-b40ad9b94f22>, <urn:uuid:71779623-faad-4a9c-aac4-53e20acf3e8b>.
<urn:uuid:9c269b39-5abc-45b7-be5e-b40ad9b94f22> a report:ConstraintReport;
    report:constraint <urn:uuid:cfd7711d-73f6-4c49-a893-f0de95ed805d>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-30T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:71779623-faad-4a9c-aac4-53e20acf3e8b> a report:ConstraintReport;
    report:constraint <urn:uuid:7786bdc0-6540-445d-b1fe-297fcc8676b5>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:909e1124-a6f0-41bd-b3b8-2d90409015ab> a report:ConstraintReport;
    report:constraint <urn:uuid:3ff4714c-8c80-4f72-8ab5-72013400fda4>;
    report:satisfactionState report:Unsatisfied;
    report:constraintLogicalOperand odrl:and;
    report:premiseReport <urn:uuid:505bf42f-b7e7-45a1-b2c1-9682d9f71fdb>, <urn:uuid:afde9456-fa0c-450f-b222-8c3db3dbb216>.
<urn:uuid:505bf42f-b7e7-45a1-b2c1-9682d9f71fdb> a report:ConstraintReport;
    report:constraint <urn:uuid:d57a6c6d-5c29-472b-803c-2bbebdb7ba71>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:constraintOperator odrl:lt;
    report:constraintRightOperand "2024-12-31T17:00:00.000Z"^^xsd:dateTime;
    report:satisfactionState report:Satisfied.
<urn:uuid:afde9456-fa0c-450f-b222-8c3db3dbb216> a report:ConstraintReport;
    report:constraint <urn:uuid:2e783af2-1f8a-4bd8-be7a-771c27436b55>;
    report:constraintLeftOperand "2017-02-12T11:20:10.999Z"^^xsd:dateTime;
    report:satisfactionState report:Unsatisfied.
<urn:uuid:4a782280-f34f-4084-b2b3-470537cb95cf> a report:TargetReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:49ef2e1a-b58c-419a-b8de-c75ae05751d0> a report:PartyReport;
    report:satisfactionState report:Satisfied.
<urn:uuid:fc6c3657-ceb9-460a-8a5b-b3ab22a26aac> a report:ActionReport;
    report:satisfactionState report:Satisfied.
```
