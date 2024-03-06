import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import ToggleButton from '@mui/material/ToggleButton'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useDispatch } from 'react-redux'

import { changeStatus } from '../../modules/todo/todo.slice'
import { ITask } from '../../types/task'
import css from './task.module.scss'

interface ITaskprops {
  task: ITask
}

const Task = ({ task }: ITaskprops): React.JSX.Element => {
  const dispatch = useDispatch()

  return (
    <Card className={css.card}>
      <CardHeader
        className={css.cardHeader}
        title={task.title}
        titleTypographyProps={{ 'fontWeight': 'bolder' }}
      />
      <CardContent className={css.statusContainer}>
        <Typography fontWeight={'bold'}>Status:</Typography>
        <ToggleButton
          className={css.statusButton}
          value="check"
          onClick={(): void => {
            dispatch(changeStatus({ 'id': task.id }))
          }}
          color={task.isCompleted ? 'success' : 'error'}
          selected={task.isCompleted}
          sx={{
            'fontSize': 12,
          }}
        >
          {task.isCompleted ? 'Completed' : 'Not completed'}{' '}
          {task.isCompleted ? <CheckIcon /> : <ClearIcon />}
        </ToggleButton>
      </CardContent>

      <CardMedia
        component="img"
        height="194"
        image="/natural.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default Task
