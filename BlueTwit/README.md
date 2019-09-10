Software Requirements Specification
And Planning

Scope:
This is a documentation for my project application, this application is a chat website app and is meant to imitate twitter in some functions.
Goal:
The Objective of this application:
• Users should be able to sign up and log in to their profiles.
• Users should be able to post twits and see twits posted by other users
• Users should be able to like other twits
• Users should be able to edit their profile
• Users should be able to logout of the app

Tools:

Developer description of the website
In this application I will be using the following tools:
Backend: - Node js, express, mongodb and passport, body-parser,
Frontend: - React, bootstrap, react-router, awesome font, bootswatch and material UI

details
• Authentication – create user login, register and logout page. On both backend and frontend
• Maintain contents - create, view, update and delete stack for profile editing and posting.
• Schema –
o User, email, password, gender, role, thumbnail, twit
• Profile - user shall be able to view and update profile data.
• Admins – admin must be able to view all user and modify or delete accounts
• Buttons: Submit – clicking on the post button will add twit to dashboard
Edit – clicking on profile will allow to update profile information
upload – will lead to device gallery for selection image
• Views – create login page, sign up page, twits dashboard, profile page

Lists of functional and non-functional requirements for the website application
Functional requirements

1. The system must have a form to register and login user.
2. The system should be able to display all twits to users that are signed in.
3. The system should be able to post twits.
4. The system should option to logout once logged in.

Non-functional requirements

1. System should allow for users to like twits.
2. All visitors to the website should only be able to see twits after their signed in.
3. Team member should be able to tick off all the tasks they have completed and sent an alert to the team manager.

Users Story cards
Mentor to comment … as my stake holder

//Running the app
#Note, before running the app replace the MongoDB connect link from the .env file in order to connect to your database.

1. To Run this app - install node_modules from the command line , use "npm install" on the server folder and then "cd client" and install the node modules on the client folder as well
2. "npm run start" on server folder to run the server
3. "npm run start" on client folder to run the the front end
4. Once the app is loaded, located the menu tool bar on the right hand corner of the screen to register your account.
5. after registering you will be taken to the login screen where you can enter your email and password that you have chosen, the you will be logged in
6. form the dashboard you can start chatting and following other chats... enjoy
