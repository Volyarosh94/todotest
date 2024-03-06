import './App.css'

import React from 'react'

import Todo from './components/todo'
import { selectTodos } from './modules/todo/todo.slice'
import { useAppSelector } from './store/hooks'

function App(): React.JSX.Element {
  const todos = useAppSelector(selectTodos)
  return (
    <div className="App">
      <Todo todos={todos} />
    </div>
  )
}

export default App
