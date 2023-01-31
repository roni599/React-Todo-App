import React from 'react'
import style from '../Css/Todo.module.css'

const Todo = (props) => {
  const { todo, desc } = props.todo
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id)
  }

  return (
    <div className={style.Todo}>
      <div>
        <h3 className={style["todo-p"]}>{todo}</h3>
        <p className={style["todo-p"]}>{desc}</p>
      </div>
      <div>
        <button className={style.btn} onClick={() => {
          handleClick(id)
        }}>
          <i className='fa fa-trash fa-2x'></i>
        </button>
      </div>
    </div>
  )
}

export default Todo
