import React from 'react'

import { filterOptions } from '../../constants/filter-options'
import {
  selectCompletedTodosCount,
  selectNotCompletedTodosCount,
  setFilter,
} from '../../modules/todo/todo.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ITask } from '../../types/task'
import DropDown from '../dropDown'
import Task from '../task'
import AddTodo from './addTodo'
import css from './todo.module.scss'

interface ITodosProps {
  todos: ITask[]
}

const Todo = ({ todos }: ITodosProps): React.JSX.Element => {
  const completed = useAppSelector(selectCompletedTodosCount)
  const notCompleted = useAppSelector(selectNotCompletedTodosCount)

  const dispatch = useAppDispatch()

  return (
    <div className={css.wrapper}>
      <div className={css.filterContainer}>
        <DropDown
          valuesToDo={filterOptions}
          onChange={(value): void => {
            dispatch(setFilter(value))
          }}
        />
        <div className={css.countBox}>Completed:{completed}</div>
        <div className={css.countBox}>Not Completed:{notCompleted}</div>
      </div>

      <div className={css.listContainer}>
        <AddTodo />
        {todos.map(
          (task): React.JSX.Element => <Task task={task} key={task.id} />
          ,
        )}
      </div>
    </div>
  )
}

export default Todo
