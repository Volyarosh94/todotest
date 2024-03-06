import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

import css from './addTodo.module.scss'
import ModalAddToDo from './modalAddToDo'

const AddTodo = (): React.JSX.Element => {
  const [open, setOpen] = useState(false)
  const handleOpen = (): void => {
    setOpen(true)
  }
  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <div className={css.container} onClick={handleOpen}>
        <AddCircleIcon
          sx={{
            'width': '150px',
            'height': '150px',
          }}
        />
        <Typography>Add New Task</Typography>
      </div>
      <ModalAddToDo openModal={open} handleClose={handleClose} />
    </>
  )
}

export default AddTodo
