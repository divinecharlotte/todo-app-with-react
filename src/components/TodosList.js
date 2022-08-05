import React from "react"
// import { useState } from "react"
import TodoItem from "./TodoItem"
import { observer } from "mobx-react"
import { TodoStore } from "./TodoStore"

const TodosList = observer((props) => {
  // const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      {/* <button type="button">clear all completed</button> */}
      {/* <div>
      <input
       type="text" 
       placeholder="search todo ......" 
       onChange={
            (e) => {
              setSearchTerm(e.target.value);
            }
          }/>
          {
            props.todos.filter(todo =>{
              if(searchTerm === ""){
                return todo
              }
              else if (todo.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return todo
              }
            }
            ).map(todo => {
              return <TodoItem key={todo.id} todo={todo} />
            }
            )
          }
      </div> */}
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
    {/* <button type="button" onClick={this.TodoStore.removeCompletedTodos}>remove completed</button> */}
    </div>
  )
})
export default TodosList