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
    const data = await axios.put(`${link}/tasks/${id}`, {title: updateTask})

    setTask(task.map((item) => {
      if(item._id === data.data._id){
        return {...item, title: data.data.title}
      }
      return item
    }))
    setTaskId(null)
    setUpdateTask("")
  }

  const completeTask = async (id) => {
    const toggleTask = await axios.put(`${link}/task/${id}`)

    setTask(task.map((item) => {
      if (item._id === toggleTask.data._id){
        return {...item, completed: toggleTask.data.completed}
      }
      return item;
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
              <div className='tasks-list' key={todo._id}>
                <input type="checkbox" checked={todo.completed} onChange={() => completeTask(todo._id)} />
                <div className='static-list' style={{textDecoration: todo.completed ? "line-through" : "none" }}>
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
