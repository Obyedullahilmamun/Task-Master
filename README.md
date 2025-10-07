# Task Master
Task Master is designed to facilitate task execution and reminders. It utilizes Angular for the frontend and Node.js with MongoDB for the backend.

## Requirements
For an easier setup without relying on very old, you use the following ranges, which are known to be compatible with Angular 7.x:

| Component   | Suggested Working Range     | Notes                                        |
|-------------|-----------------------------|----------------------------------------------|
| Angular     | v7.0.0 to v7.3.9            |                                              | 
| Node.js     | v10.9.0 to v12.22.12        | LTS versions that supported Angular 7        |
| npm         | v6.x to v7.x                | Comes with the suggested Node.js versions    |
| Mongoose    | v5.0.0 to v5.13.22          |                                              |
| MongoDB     | v3.6 to v4.4                | Use a modern patch version within this range |

### Setup Used for This Project
The project was developed using the following versions:

- [x] **Angular**: v7.2.1  
- [x] **Node.js**: v8.9.0  
- [x] **npm**: v5.5.1  
- [x] **node-sass**: v4.5.3  
- [x] **Mongoose**: v5.4.11  
- [x] **MongoDB**: (Ensure the MongoDB version is compatible with Mongoose)


## Features
Task Master provides secure user authentication, allowing users to sign up and log in safely. The application supports full task management, enabling users to create, update, and delete tasks, as well as organize them into categorized lists. User progress is saved automatically to ensure no data is lost. Additionally, the interface is fully responsive and easy to use.


## Project GUI Overview
Signup: A new user can create their account by signing up.
![signup-page (1)](https://github.com/Obyedullahilmamun/Task-Master/assets/78032583/3e81dba9-3918-4880-b484-debd67521dce)

Login: Users can Login using their email and password.
![login-page (1)](https://github.com/Obyedullahilmamun/Task-Master/assets/78032583/7791a89e-4f5a-4594-bbb7-b3375e71bba6)

New User: A new user creates TASKS from LISTS.
![newuser_page (1)](https://github.com/Obyedullahilmamun/Task-Master/assets/78032583/2fd1995c-88d8-4d5d-9f73-32499c6e2640)

Save: The user's progress, including Lists and Tasks, is saved.
![save-page (1)](https://github.com/Obyedullahilmamun/Task-Master/assets/78032583/1db294c0-248f-487f-b867-df2365220149)

Update: Users can update their tasks by marking them as complete, editing them, or even deleting them.
![task-update (1)](https://github.com/Obyedullahilmamun/Task-Master/assets/78032583/b3bf3855-4d38-49f8-b32c-178938681923)

Create a New LIST: Users can create a new List.
![createnew-list (1)](https://github.com/Obyedullahilmamun/Task-Master/assets/78032583/744cb2a2-24aa-45e6-827e-f68e5b6f8328)

LISTS Update: Lists can be edited and deleted.
![list-update (1)](https://github.com/Obyedullahilmamun/Task-Master/assets/78032583/709f7da7-c60e-4c2d-ab97-3e1ad898a123)

## Installation Instructions for Running the Project
To run this project, execute 'npm install' in both the API and frontend directories to install dependencies.

