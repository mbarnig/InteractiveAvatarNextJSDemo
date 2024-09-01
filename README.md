# HeyGen Interactive Avatar NextJS Demo

This repo is a fork of the official HeyGen Interactive Avatar Demo.

![HeyGen Interactive Avatar NextJS Demo Screenshot](./public/demo.png)

I did the following modifications :    
### /package.json
I added the prefix "PORT=7860" to the scripts dev, build and start 
### /app/lib/constants.ts
I added the avatar_id "Marco Barnig" and the voice_ids "Marco Barnig" and "Marcos_digital_twin" to the selection list of available avatars and voices. 
To do : add preview mp3 files of the voices.
### /app/page.tsx
I deleted the tabs "demo / code".
### /components/NavBar.tsx
I changed the header text and deleted the links Avatars, Voices, API Docs, Guide and and replaced SDK with the link of this Github repo.
### /components/InteractiveAvatar.tsx
I added a password check in the "async function startSession".    
### Huggingface Spaces
I created a HuggingFace space to make my personal Interactive Avatar available to the public for tests.     
![HuggingFace space 1](./public/my-avatar-1.png)
![HuggingFace space 2](./public/my-avatar-2.png)
![HuggingFace space 3](./public/my-avatar-3.png)
![HuggingFace space 8](./public/my-avatar-8.png)
![HuggingFace space 4](./public/my-avatar-4.png)
![HuggingFace space 5](./public/my-avatar-5.png)
![HuggingFace space 6](./public/my-avatar-6.png)
![HuggingFace space 7](./public/my-avatar-7.png)
Here is the link to the demo : [hf-space](https://huggingface.co/spaces/mbarnig/My_Interactive_Avatar)     
The start of the demo is protected by a personal password. Interested users can drop me a mail to request the password.
### /.env
I added the secret "NEXT_PUBLIC_SESSION_START_PASSWORD = your Session Start Password" to the environment file .env. The NEXT_PUBLIC prefix is required to handle the process in the frontend.
### Dockerfile
The interactive Avatar React app is running in a Docker container on HuggingFace. The most difficult part of the Dockerfile creation was related to the protection of the different API keys and passwords needed to access my accounts on HeyGen, OpenAI, Dante, Schreifmaschinn, etc. It's not obvious to hide these variables in a frontend web app like React. The Dockerfile is not included in the present repo, but in the HuggingFace space.
### Customized versions


https://github.com/user-attachments/assets/e18a6e13-4a50-4583-8678-261338c69f26


Based on this modified fork of the InteractiveAvatarNextJSDemo, I created several customized Github repos and HuggingFace spaces for specific tasks :  
![hf_spaces](./public/hf_spaces.png)

#### TTMA : Text to Avatar
Multilingual speech synthesis with my voice: > 30 languages.       
[Github Repo TTMA](https://github.com/mbarnig/Text_to_Avatar.git)      
[Huggingface Space TTMA](https://huggingface.co/spaces/mbarnig/Text_to_Avatar)   

#### CWMA : Chat with Avatar
Chat with my interactive avatar on OpenAI in en, fr, de, lu ; multilingual speech answer with my voice.        
[Github Repo CWMA](https://github.com/mbarnig/Chat_with_Avatar.git)        
[Huggingface Space CWMA](https://huggingface.co/spaces/mbarnig/Chat_with_Avatar)       

#### SWMA : Speak with Avatar
Use the microphone to speak with my Avatar in en, fr or de ; multilingual speech answer with my voice.  
[Github Repo SWMA](https://github.com/mbarnig/Speak_with_Avatar.git)     
[Huggingface Space SMWA](https://huggingface.co/spaces/mbarnig/Speak_with_Avatar)     

## coming soon
#### BMMA : Braddel mat mengem Avatar
Use the microphone to speak with my Avatar in luxembourgish ; luxembourgish text and speech answer with my voice.  
Github Repo :     
Huggingface Space :     

#### IMASQL : Interroge mon_Avatar sur Qubit Lëtzebuerg
Use the microphone to ask my Avatar questions about my books "Qubit Lëtzebuerg" in french ; french text and speech answer with my voice. 
Github Repo :     
Huggingface Space :    

#### DNMAE : Discuss_with_my_Alter_Ego
Use the microphone to ask my conscious Avatar questions in english about feelings, experience and ethics.
Github Repo :     
Huggingface Space :    

### Bibliography
* Marco Barnig, [I am an interactive Avatar](https://www.linkedin.com/posts/marco-barnig-b33074118_ai-generativeabrai-machineabrconsciousness-activity-7230217299767504896-Lh_g), LinkedIn August 2024
* Giulio Tononi, [Integrated Information Theory about Consciousness](http://integratedinformationtheory.org/), University of Wisconsin–Madison, > 2004
* Carina González, [Environment variables Client Side with Next JS](https://medium.com/@ecarina.gonzalez/environment-variables-client-side-with-next-js-b09ad78f53bd), Medium January 2024
