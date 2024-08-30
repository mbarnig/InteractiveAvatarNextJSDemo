# HeyGen Interactive Avatar NextJS Demo

This repo is a fork of the official HeyGen Interactive Avatar Demo.

![HeyGen Interactive Avatar NextJS Demo Screenshot](./public/demo.png)

I did the following modifications :     
### /app/lib/constants
I added the avatar_id "Marco Barnig" and the voice_ids "Marco Barnig" and "Marcos_digital_twin".    
### /components/NavBar.tsx
I changed the header text and deleted the links Avatars, Voices, API Docs, Guide and SDK.    
### /components/InteractiveAvatar.tsx
I added a password check in the "async function startSession".    
### Huggingface Spaces
I created a HuggingFace space to make my personal Interactive Avatar available to the public for tests.     
![HuggingFace space](.public/hf-space.png)
Here is the link to the demo : [hf-space](https://huggingface.co/spaces/mbarnig/My_Interactive_Avatar)     
The start of the demo is protected by a personal password. Interested users can drop me a mail to request the password.
### .env
I added the secret SESSION_START_PASSWORD = your Session Start Password to the environment file .env.
### Dockerfile
The interactive Avatar React app is running in a Docker container on HuggingFace. The most difficult part of the Dockerfile creation was related to the protection of the different API keys and passwords needed to access my accounts on HeyGen, OpenAI, Dante, Schreifmaschinn, etc. It's not obvious to hide these variables in a frontend web app like React.
### Customized versions
Based on this modified fork of the InteractiveAvatarNextJSDemo I created several customized Github repos and HuggingFace spaces for specific tasks :   
#### TTA : Text_to_Avatar
Github Repo : Huggingface Space
#### CWA : Chat_with_Avatar
Github Repo : Huggingface Space
#### SWA : Speak_with_Avatar
Github Repo : Huggingface Space
#### BMMA : Braddel_mat_mengem_Avatar
Github Repo : Huggingface Space
#### IMASQL : Interroge_mon_Avatar_sur_Qubit_Lëtzebuerg
Github Repo : Huggingface Space
#### DNMAE : Discuss_with_my_Alter_Ego
Github Repo : Huggingface Space
