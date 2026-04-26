const taskModel = require('../model/taskModel')
const { taskSchema } = require('../model/taskModel')

exports.getAllTasks = async (req, res) => {
    const task = await taskModel.find();
    if(!task){
        res.status(404).json({
            success: false,
            message: "Tasks Not Found"
        })
    }

    res.json(task)

}

exports.getTaskById = async (req, res) => {
    const { id } = req.params
    const task = await taskModel.findById(id)

    if(!task){
        res.status(404).json({
            success: false,
            message: "Task Not Found"
        })
    }

    res.json(task)
}

exports.addNewTask = async (req, res) => {
    const { title } = req.body;
    const task = new taskModel({
        title: title,
        completed: false
    })

    await task.save()
    res.json(task)
}

exports.updateTaskById = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const task = await taskModel.findById(req.params.id)

    if(!task){
        console.error("Task is not Found")
    }

    task.title = title;
    await task.save();
    res.json(task)
}

exports.deleteTaskById = async (req, res) => {
    const { id } = req.params;

    const task = await taskModel.findByIdAndDelete(id)
    res.json()
}

exports.toggleComplete = async (req, res) => {
    const { id } = req.params;

    const task = await taskModel.findById(id);
    task.completed = !task.completed;
    await task.save();
    res.json(task)
}