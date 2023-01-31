import React from 'react'
import style2 from '../Css/CompleteTodos.module.css'
import CompleteTodoo from './CompleteTodoo'

const CompleteTodos = (props) => {
  return (
    <div className={style2.card2}>
      <h2 className={style2.text2}>Complete Todo</h2>
      <hr></hr>
      {
        props.todos.map((value) => {
          return (<CompleteTodoo key={value.modified.id} todo={value.modified.todo} id={value.modified.id} onRemoveTodo={props.onRemoveTodo} />)
        })
      }

    </div>
  )
}

export default CompleteTodos;
