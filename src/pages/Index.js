import React, { useState } from 'react'
import '../styles/App.css'
import { Typography, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Tasks from '../components/Tasks'
import NewTask from '../components/NewTask'

const Index = () => {
  const [addTaskModal, setAddTaskModal] = useState(false)
  const [tasks, setTasks] = useState([
    { urgent: false, task: 'select status to complete', status: 'incomplete' }
  ])

  const addTask = () => {
    setAddTaskModal((addTaskModal) => !addTaskModal)
  }

  const storeTask = (task) => {
    setTasks((tasks) => [...tasks, task])
  }

  const handleStatus = (idx, status) => {
    const newTasks = tasks.map((task, index) => {
      return index === idx ? { ...task, status: status } : task
    })
    setTasks(newTasks)
  }
  const handleUrgent = (idx, urg) => {
    const newTasks = tasks.map((task, index) => {
      return index === idx ? { ...task, urgent: urg } : task
    })
    setTasks(newTasks)
  }

  const handleTask = (idx, text) => {
    const newTasks = tasks.map((task, index) => {
      return index === idx ? { ...task, task: text } : task
    })
    setTasks(newTasks)
  }

  const handleDelete = (idx) => {
    const newTasks = tasks.filter((task, index) => index !== idx)
    setTasks(newTasks)
  }

  return (
    <div>
      <div className="header">
        <Typography variant="h4" component={'h2'} style={{ color: 'blue' }}>
          All Tasks
        </Typography>
      </div>
      <NewTask modal={addTaskModal} addTask={addTask} storeTask={storeTask} />
      <div className="taskContainer">
        <div className="taskLabel">
          <Typography variant="h6" component={''}>
            Urgent
          </Typography>
          <Typography variant="h6" component={''}>
            Task
          </Typography>
          <Typography variant="h6" component={''}>
            Status
          </Typography>
          <Typography variant="h6" component={''}>
            Delete
          </Typography>
        </div>
        {tasks
          .sort((a, b) => b.urgent - a.urgent)
          .map((task, idx) => (
            <Tasks
              key={Math.random()}
              urgent={task.urgent}
              task={task.task}
              status={task.status}
              idx={idx}
              handleStatus={handleStatus}
              handleUrgent={handleUrgent}
              handleTask={handleTask}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      <div className="addTask">
        <Fab size="large" color="primary" aria-label="add" onClick={addTask}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  )
}

export default Index
