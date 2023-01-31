import React from 'react'
import Todo from './Todo'
import style from '../Css/Todos.module.css'

const Todos = (props) => {
  return (

    <div className={style["Todos-card"]}>
      <h2 className={style.text1}>New Todo</h2>
      <hr></hr>
      {
        props.todos.map((todo) => (
          <Todo key={todo.id} todo={todo.todo} id={todo.id} OnNewTodo={props.OnNewTodo} onRemoveTodo={props.onRemoveTodo} />
        ))
      }
    </div>
  )
}

export default Todos
