import type { PayloadAction } from '@reduxjs/toolkit'
import { createSelector, createSlice } from '@reduxjs/toolkit'

import { todoDataTasks } from '../../constants/todo-data'
import type { RootState } from '../../store/store'
import { ITask } from '../../types/task'

// Define a type for the slice state
interface IToDoState {
  todoList: ITask[]
  filter: string
}

// Define the initial state using that type
const initialState: IToDoState = {
  'todoList': todoDataTasks,
  'filter': 'All',
}

export const todoListSlice = createSlice({
  'name': 'todoList',

  initialState,
  'reducers': {
    'changeStatus': (state, { payload }: PayloadAction<{ id: string }>) => {
      const { id } = payload
      const task = state.todoList.find((toDoTask) => toDoTask.id === id)!
      task.isCompleted = !task?.isCompleted
    },
    'setFilter': (state, { payload }: PayloadAction<string>) => {
      state.filter = payload
    },
    'addTodo': (
      state,
      { payload }: PayloadAction<{ title: string, description: string }>,
    ) => {
      const { title, description } = payload

      const newTodo: ITask = {
        'id': Date.now().toString(),
        title,
        description,
        'isCompleted': false,
      }
      state.todoList.push(newTodo)
    },
  },
})

export const { changeStatus, setFilter, addTodo } = todoListSlice.actions

export const selectCount = (state: RootState): ITask[] => {
  return state.todoList.todoList
}

export const selectTodos = (state: RootState): ITask[] => {
  const filter = state.todoList.filter
  const todoList = state.todoList.todoList

  switch (filter) {
    case 'All': {
      return todoList
    }
    case 'Completed': {
      return todoList.filter((todo) => todo.isCompleted)
    }
    case 'Current': {
      return todoList.filter((todo) => !todo.isCompleted)
    }
    default: {
      return todoList
    }
  }
}

export const selectTodoList = (state: RootState): ITask[] => {
  return state.todoList.todoList
}
export const selectFilter = (state: RootState): string => {
  return state.todoList.filter
}

export const selectCompletedTodosCount = createSelector(
  selectTodoList,
  (todoList) => todoList.filter((todo) => todo.isCompleted).length,
)

export const selectNotCompletedTodosCount = createSelector(
  selectTodoList,
  (todoList) => todoList.filter((todo) => !todo.isCompleted).length,
)
export default todoListSlice.reducer
