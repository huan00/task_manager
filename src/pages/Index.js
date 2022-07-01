import React from 'react'
import '../styles/App.css'
import { Typography, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Tasks from '../components/Tasks'

const index = () => {
  return (
    <div>
      <div className="header">
        <Typography variant="h4" component={'h2'} style={{ color: 'blue' }}>
          All Tasks
        </Typography>
      </div>
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
        </div>
        <Tasks />
      </div>
      <div className="addTask">
        <Fab size="large" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  )
}

export default index
