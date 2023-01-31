import React, { useState } from 'react'
import style from '../Css/NewTodo.module.css'

const NewTodo = (props) => {
  const [newTodo, setTodo] = useState({ todo: '', desc: '' });
  const { todo, desc } = newTodo;
  
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldtodo) => {
      return { ...oldtodo, [name]: event.target.value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({ todo: " ", desc: " " })
    props.onNewTodo(newTodo);
  }

  return (
    <div className={style.NewTodo}>
      <form className={style.from} onSubmit={handleSubmit}>
        <div className={style["from-field"]}>
          <label htmlFor='Todo'>Todo</label>
          <input type="text" name="todo" id="todo" value={todo} onChange={handleChange} />
        </div>
        <div className={style["from-field"]}>
          <label htmlFor='Todo'>Description</label>
          <textarea type="textarea" name="desc" id="desc" value={desc} onChange={handleChange} />
        </div>
        <button type='submit'>Add todo</button>
      </form>
    </div>
  )
}

export default NewTodo
