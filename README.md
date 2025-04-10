# Registraction Project
# project-registration
Project Title: Full-Stack User Registration System

Project Overview: This project is a full-stack web application designed to manage user registration data using a modern tech stack. It provides a user-friendly interface to perform CRUD (Create, Read, Update, Delete) operations on user information, which is stored securely in a MySQL database.

Technologies Used:

Frontend:
HTML: Structure of the web pages
CSS: Styling the UI 
JavaScript: Handling frontend logic and communicating with the backend via API
Backend:
Node.js: Runtime environment for executing JavaScript on the server
Express.js: Web framework for building RESTful APIs
MySQL2: Node.js package to connect and interact with the MySQL database
Database:
MySQL: Relational database used to store user registration data

Step to run the project:

Step 1: Set Up the Project Directory
First, create a project directory for your app.
      mkdir user-registration-app
      cd user-registration-app

Step 2: Initialize the Node.js Project
Run the following command to initialize a new Node.js project:
     npm init -y

Step 3: Install Dependencies
You will need express and mysql2 for the backend, so install them
   npm install express mysql2

Step 4: Create the Project Files
Backend: app.js: In the user-registration-app directory, create a new file called app.js
Backend: Database Connection - db.js:Create a db.js file inside the project folder for the database connection.
Backend: Registration Routes - routes/registration.js:Inside the user-registration-app directory, create a routes folder. Inside that folder, create registration.js file.

Frontend: HTML - index.html:Create an index.html file inside the public directory
Frontend: CSS - style.css:Create a style.css file inside the public directory.
Frontend: JavaScript - script.js:Create a script.js file inside the public directory.

Step 5: Run MySQL Database
Create the database and table in MySQL.

Step 6: Run the Server
Make sure you have MySQL running and the database set up.
In your project directory, run: node app.js
Now your backend API is running on http://localhost:3000

Step 7: Open the Frontend
Open index.html in your browser or use a static server to serve the HTML file.
Or visit http://localhost:3000 if you use express.static to serve the frontend
Start interacting with the app, adding, updating, and deleting users.

