import React from "react"
import TodoItem from "./TodoItem"
import { observer } from "mobx-react"
import { TodoStore } from "./TodoStore"

const TodosList = observer((props) => {
  return (
    <div>
      <input type="text" placeholder = 'search...' onChange = {(e)=>TodoStore.filterdata(e.target.value)}/>
    <ul>
      {props.TodoStore.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          TodoStore={TodoStore}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
   
    </div>
  )
})
export default TodosList