import React, { useState } from 'react'
import Todos from './Todos'
import style from '../Css/Home.module.css'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from 'uuid'
import CompleteTodos from './CompleteTodos'

const Home = () => {
  const [AddTodo, setTodo] = useState([])
  const [AddTodo2, setTodo2] = useState([]);

  const handleTodo = (todo) => {
    setTodo((setPrevious) => {
      return [...setPrevious, { id: uuidv4(), todo }]
    })
  }

  const handleAddTodoRemove = (id) => {
    setTodo((previous) => {
      const modified = previous.filter((value) => value.id !== id);
      return modified
    })
    const modified = AddTodo.find((value) => {
      return value.id === id
    })
    setTodo2([...AddTodo2, { modified }])
  }

  const handleCompleteRemove = (id) => {
    const modified = AddTodo2.filter((value) => value.modified.id !== id)
    setTodo2(modified)
  }

  return (
    <div className={style.card}>
      <h1 className={style.text}>TODO APP</h1>
      <NewTodo onNewTodo={handleTodo} />
      <div className={style.flex}>
        <div className={style.AddTodo}>
          <Todos todos={AddTodo} onRemoveTodo={handleAddTodoRemove} />
        </div>
        <div className={style.AddTodo2}>
          <CompleteTodos todos={AddTodo2} onRemoveTodo={handleCompleteRemove} />
        </div>
      </div>
    </div>
  )
}

export default Home
