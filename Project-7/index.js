const express = require("express")
const {tasks} = require('./data/task.json')

const app = express()

const port = 3000;

app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).send("<h1>Home</h1>");
})

app.get('/tasks',(req,res) => {
    res.status(200).json({
        success: true,
        data: tasks
    })
})

app.get('/tasks/:id',(req, res) => {
    const {id} = req.params;
    const task = tasks.find((each) => each.id === id)

    if(!task){
        res.status(404).json({
            success: false,
            data: "Given ID Not Found"
        })
    }

    res.status(200).json({
        success: true,
        data: task
    })
})

app.post('/tasks',(req, res) => {
    const {id, task} = req.body
    let completed = false

    if(!id || !task){
        res.status(404).json({
            success: false,
            message: "Enter Required Data"
        })
    }

    const aData = tasks.find((each) => each.id === id)
    if(aData){
        res.status(409).json({
            success: false,
            message: "Task Already Exist"
        })
    }
    tasks.push({
        id: id,
        task: task,
        completed: completed
    })
    res.status(201).json({
        success: true,
        message: "Task Has been Created"
    })

})

// if you want to show existing task completed

app.put("/tasks/complete/:id",(req, res) => {
    const {id} = req.params
    const task = tasks.find((each) => each.id === id)
    if(!task){
        res.status(409).json({
            success: false,
            message: "User Not Found"
        })
    }

    if(task.completed === true){
        res.status(302).json({
            success: false,
            message: "Task was Completed Already"
        })
    }

    task.completed = true

    res.status(200).json({
        success: true,
        data: task
    })
})

app.put("/tasks/:id",(req, res) => {
    const {id} = req.params
    const {task, completed} = req.body
    const newTask = tasks.find((each) => each.id === id)
    if(!newTask){
        res.status(409).json({
            success: false,
            message: "User Not Found"
        })
    }


    newTask.task = task;
    newTask.completed = completed;

    res.status(200).json({
        success: true,
        data: task
    })
})

app.delete('/tasks/:id',(req, res) => {
    const {id} = req.params;
    const task = tasks.find((each) => each.id === id)
    if(!task){
        res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }

    const index = tasks.indexOf(task)
    tasks.splice(index, 1)
    res.status(200).json({
        success: true,
        message: "user has been Deleted"
    })
});

app.listen(port,() => {
    console.log(`Server is Running on http://localhost:${port}`);
})