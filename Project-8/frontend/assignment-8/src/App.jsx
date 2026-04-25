import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const link = "https://task-manager-backend-2h3t.onrender.com";

function App() {
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState("")

  const [taskId, setTaskId] = useState(null)
  const [updateTask, setUpdateTask] = useState("")

  useEffect(() => {
    getAllTasks();
  } , [])

  const getAllTasks = async() => {
    const res = await axios.get(`${link}/task`)
    setTask(res.data)
  }

  const addNewTask = async () => {
    if(!newTask) return ;
    const data = await axios.post(`${link}/task`,{title: newTask})
    setTask([...task, data.data])
    setNewTask("")
  }
  const deleteTaskById = async (id) => {
    await axios.delete(`${link}/task/${id}`)
    setTask(task.filter((t) => t._id !== id))
  }

  const updateTaskById = async (id) => {
    const data = await axios.put(`${link}/task/${id}`, {title: updateTask})

    setTask(task.map((task) => {
      if(task._id === data.data._id){
        task.title = data.data.title
      }
      return task
    }))
    setTaskId(null)
    setUpdateTask("")
  }

  const completeTodo = async (id) => {
    const task = await axios.put(`${link}/task/${id}`)

    setTask(task.map((task) => {
      if (task._id === task.data._id){
        task.completed = task.data.completed;
      }
    }))
    
  }

  const editTask = (task) => {
    setTaskId(task._id)
    setUpdateTask(task.title)
  }

  return (
    <>
      <div className='container'>
      <h1>Task Manager</h1>
      <h4>Add Tasks</h4>

      <div className='input-box'>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add your task Here"/>
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className='task-list'>
        {task.map(todo => (
          <div key={todo._id} className='task' style={{backgroundColor: todo.completed ? "#e0ffd4" : "#f4f4f4" }}>
            {taskId === todo._id ? (
              <div className='updating-list'>
                <input type="text" value={updateTask} onChange={(e) => setUpdateTask(e.target.value)} className='edit-input'/>
                <button onClick={() => updateTaskById(todo._id)} className='edit-button btn'>✔</button>
                <button onClick={() => setTaskId(null)} className='delete-button btn'>❌</button>
              </div>
             ) : (
              <div className='tasks-list'>
                <div onClick={() => completeTodo(todo._id)} className='static-list' style={{textDecoration: todo.completed ? "line-through" : "none" }}>
                  {todo.title}
                </div>
                <button onClick={() => editTask(todo)} className='edit-button btn'>🖊</button>
                <button onClick={() => deleteTaskById(todo._id)} className='delete-button btn'>🗑</button>
              </div>
             )}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
