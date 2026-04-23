# Backend

Backend for this Task Master web app is build on NodeJS, and framwork i used is ExpressJS.
if you you want start this file you have install some npm packages, Packages are given below:
npm init 
npm i express
npm i dotenv
npm i nodemon --save-dev
npm i mongoose
npm i MongoDB

after installing packages you can start the server by using command "npm run dev" in terminal, and you can see the server is running on port 3000.
Testing of API is done by using Postman, you can test the API by using the following endpoints:
1. GET /task - Get all tasks
2. POST /task - Create a new task
3. GET /task/:id - Get a task by ID
4. PUT /task/:id - Update a task by ID
5. DELETE /task/:id - Delete a task by ID

# Frontend
Frontend for this Task Master web app is build on ReactJS, and framwork i used is Create React App.
to start this frontend app you just need to open integrated terminal for assignmnet-8 file and run npm run dev command to start frontend.

## connecting frontend and backend

to connect frontnd to backend i install axios plackage and to bypass CORS error i install cors package in backend and use it in index.js file, and in frontend i use axios to make API calls to backend.

## deployment

I used Render for Backend and Netlify for Frontend.

after deploying both file i have got error "CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource" and to solve this error i have added CORS package in backend and use it in index.js file, and i have pass object origin for my netlify url, method like GET, POST , PUT and DLETE and credentials true.

to solve this problem i have to go on youtube.

# Conclusion
This Task Master web app is a simple CRUD application that allows users to create, read, update and delete tasks. It is built on NodeJS and ExpressJS for backend and ReactJS for frontend. It is deployed on Render and Netlify. It is a good project for learning how to build a full stack web application.

it has problem like you can't complete task and also you can't see the completed task.
i will solve this problem in future.