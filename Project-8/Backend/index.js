const express = require('express')
const dotenv = require('dotenv')
const DBConnection = require('./DBConnection')
const cors = require('cors')
const taskSchema = require('./model/taskModel')
const { getAllTasks, getTaskById, addNewTask, updateTaskById, deleteTaskById, toggleComplete } = require('./controllers/task-controller')

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors());

DBConnection();

app.get('/',(req, res)=>{
    res.status(200).send("<h1>hello wrold!</h1>")
})

app.get("/task",getAllTasks)

app.get("/task/:id",getTaskById)

app.post("/task",addNewTask)

app.put("/task/:id", toggleComplete)

app.put("/tasks/:id",updateTaskById)

app.delete("/task/:id",deleteTaskById)

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
    
})
//5JnAuhPrLCeuzSzo