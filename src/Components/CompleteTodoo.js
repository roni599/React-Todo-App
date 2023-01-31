import React from 'react'
import '../Css/CompleteTodoo.css'

const CompleteTodoo = (props) => {
  const { todo, desc } = props.todo
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  }
  return (
    <div>
      <div className={"Todo"}>
        <div>
          <h3 className={["todo-p"]}>{todo}</h3>
          <p className={["todo-p"]}>{desc}</p>
        </div>
        <div>
          <button className={"btn2"} onClick={() => { handleClick(id) }}>
            <i className='fa fa-trash fa-2x'></i>
          </button>
        </div>

      </div>
    </div>
  )
}

export default CompleteTodoo;
