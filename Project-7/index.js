const express = require("express")
const {tasks} = require('./data/task.json')

const app = express()

const port = 3000;

app.use(express.json());


//this is Home page just to check server is running or not in browser
app.get('/',(req,res) => {
    res.status(200).send("<h1>Home</h1>");
})

// this is /tasks route to get all tasks available and check wheather task is completed or not
app.get('/tasks',(req,res) => {
    res.status(200).json({
        success: true,
        data: tasks
    })
})

//this is /tasks/id route to get perticular task by his id
app.get('/tasks/:id',(req, res) => {
    // storing url id in variable
    const {id} = req.params;
    // finding task from task.json file from id that user provided in the url
    const task = tasks.find((each) => each.id === id)

    // checking if the task is not available
    if(!task){
        res.status(404).json({
            success: false,
            data: "Given ID Not Found"
        })
    }

    // giving that perticular task that we find in task
    res.status(200).json({
        success: true,
        data: task
    })
})

// this route is for creating a new task in server
app.post('/tasks',(req, res) => {
    // taking id and task that user provided in body
    // ex i use thunderClient
    // thunderClient below url we have multiple option from that we have body using that we can send json format data in our server
    const {id, task} = req.body
    // i am creating completed parameter in variable i don't know why
    let completed = false

    // checking if user provided all the parameter our not 
    if(!id || !task){
        res.status(404).json({
            success: false,
            message: "Enter Required Data"
        })
    }

    // checking task exist our not if exist we can't create redundancy right
    const aData = tasks.find((each) => each.id === id)
    if(aData){
        res.status(409).json({
            success: false,
            message: "Task Already Exist"
        })
    }

    // pushing object in json file 
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
     // storing url id in variable
    const {id} = req.params
    // finding task from task.json file from id that user provided in the url
    const task = tasks.find((each) => each.id === id)
    // checking if the task is not available
    if(!task){
        res.status(409).json({
            success: false,
            message: "User Not Found"
        })
    }

    // checking if task is already completed we can't complete completed task
    if(task.completed === true){
        res.status(302).json({
            success: false,
            message: "Task was Completed Already"
        })
    }

    //  if upper condition found false than completing a task
    task.completed = true

    res.status(200).json({
        success: true,
        data: task
    })
})

// updating an existing task by there id
app.put("/tasks/:id",(req, res) => {
    // storing url id in variable
    const {id} = req.params
    // extracting task and completed from request
    const {task, completed} = req.body
    // finding task from task.json file from id that user provided in the url
    const newTask = tasks.find((each) => each.id === id)
    if(!newTask){
        res.status(409).json({
            success: false,
            message: "User Not Found"
        })
    }


    // editing task that we get from request body
    newTask.task = task;
    newTask.completed = completed;

    res.status(200).json({
        success: true,
        data: task
    })
})

// Deleting task from its id
app.delete('/tasks/:id',(req, res) => {
    const {id} = req.params;
    const task = tasks.find((each) => each.id === id)
    // checking if task not exist
    if(!task){
        res.status(404).json({
            success: false,
            message: "User Not Found"
        })
    }

    // finding perticular index from tasks.json that user want to delete 
    const index = tasks.indexOf(task)
    // deleting task using Javascript Splice method
    tasks.splice(index, 1)
    res.status(200).json({
        success: true,
        message: "user has been Deleted"
    })
});

app.listen(port,() => {
    console.log(`Server is Running on http://localhost:${port}`);
})