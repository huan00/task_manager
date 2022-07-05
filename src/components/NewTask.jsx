import { Button, Switch, TextField, Typography } from '@mui/material'
import Modal from 'react-modal'
import React, { useState } from 'react'

const NewTask = ({ modal, addTask, storeTask }) => {
  const [newTask, setNewTask] = useState({
    urgent: 'off',
    task: '',
    status: 'incomplete'
  })

  const storeTaskToLocal = (data) => {
    if (!data.task) {
      return
    }
    storeTask(data)
    setNewTask({
      urgent: 'off',
      task: '',
      status: 'incomplete'
    })
  }

  return (
    <Modal
      className="newTask"
      isOpen={modal}
      onAfterClose={() => storeTaskToLocal(newTask)}
      appElement={document.getElementById('root')}
    >
      <div>
        <Typography variant="h5" component={'h6'}>
          New Task
        </Typography>
      </div>
      <div>
        <div className="newTask-TextField">
          <TextField
            fullWidth
            label="Enter new task"
            color="primary"
            variant="filled"
            onChange={(e) =>
              setNewTask((newTask) => ({ ...newTask, task: e.target.value }))
            }
          />
        </div>
        <div className="newTask-urgent">
          <p>Urgent</p>
          <Switch
            onChange={(e) =>
              setNewTask((newTask) => ({ ...newTask, urgent: e.target.value }))
            }
          />
        </div>
        <div className="newTask-btn">
          <Button
            variant="contained"
            onClick={() => {
              if (!newTask.task) return
              addTask()
            }}
          >
            Add Task
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default NewTask
