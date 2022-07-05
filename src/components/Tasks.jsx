import { useState } from 'react'
import { Switch, TextField, Box, Button } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Tasks = ({
  urgent,
  task,
  status,
  idx,
  handleStatus,
  handleUrgent,
  handleTask,
  handleDelete
}) => {
  const statusBg = ['yellow', 'green', 'red']
  const [switchStatus, setSwitchStatus] = useState(urgent)
  const [textValue, setTextValue] = useState(task)

  const activeStatusBg = (status) => {
    switch (status) {
      case 'in-progress':
        return statusBg[0]
      case 'completed':
        return statusBg[1]
      default:
        return statusBg[2]
    }
  }

  const handleSwitch = () => {
    switchStatus === 'off' ? setSwitchStatus('on') : setSwitchStatus('off')
    handleUrgent(idx, switchStatus)
  }

  const handleText = (e) => {
    setTextValue(e.target.value)
    handleTask(idx, textValue)
  }

  return (
    <div className="task">
      <Box className="task-switch">
        <Switch
          checked={switchStatus === 'off' ? false : true}
          onClick={handleSwitch}
        />
      </Box>
      <Box className="task-textField">
        <TextField fullWidth value={textValue} onChange={handleText} />
      </Box>
      <Box className="task-status">
        <FormControl fullWidth>
          <Select
            labelId="status"
            id="statusLabel"
            value={status}
            name="status"
            label="status"
            variant="outlined"
            onChange={(e) => handleStatus(idx, e.target.value)}
            style={{ backgroundColor: activeStatusBg(status) }}
          >
            <MenuItem value="incomplete" selected>
              incomplete
            </MenuItem>
            <MenuItem value="in-progress">in-progress</MenuItem>
            <MenuItem value="completed">completed</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Button variant={'text'} onClick={() => handleDelete(idx)}>
          Delete
        </Button>
      </Box>
    </div>
  )
}

export default Tasks