/* eslint-disable quote-props */
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import Modal from '@mui/material/Modal'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import { addTodo } from '../../../../modules/todo/todo.slice'
import { useAppDispatch } from '../../../../store/hooks'
import { addToDoSchema } from '../../../../utils/shems'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  padding: 4,
}

interface Values {
  title: string
  description: string
}
interface IModalAddToDo {
  handleClose: () => void
  openModal: boolean
}

const ModalAddToDo = ({
  handleClose,
  openModal,
}: IModalAddToDo): React.JSX.Element => {
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Values>({
    defaultValues: {
      title: '',
      description: '',
    },
    resolver: yupResolver(addToDoSchema),
  })
  const onSubmit = handleSubmit((valuesToDo) => {
    dispatch(addTodo({ ...valuesToDo }))
    reset()
    handleClose()
  })

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component={'form'} onSubmit={onSubmit}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Task
        </Typography>
        <Stack gap={3} mt={3}>
          <Controller
            name="title"
            control={control}
            render={({ field }): React.JSX.Element => {
              return (
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-simple">Task Title</InputLabel>
                  <Input {...field} />
                  <Typography sx={{ color: 'red', mt: 1, fontSize: 12 }}>
                    {errors.title?.message}
                  </Typography>
                </FormControl>
              )
            }}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }): React.JSX.Element => {
              return (
                <FormControl variant="standard">
                  <InputLabel htmlFor="component-simple">
                    Description
                  </InputLabel>
                  <Input {...field} />
                  <Typography sx={{ color: 'red', mt: 1, fontSize: 12 }}>
                    {errors.description?.message}
                  </Typography>
                </FormControl>
              )
            }}
          />
        </Stack>
        <Stack spacing={2} mt={3} justifyContent={'center'} direction="row">
          <Button
            variant={'outlined'}
            onClick={(): void => {
              handleClose()
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Add Task
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default ModalAddToDo
