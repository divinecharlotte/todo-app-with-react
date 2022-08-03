import React from "react"
// import { useState } from "react"
import TodoItem from "./TodoItem"

const TodosList = props => {
  // const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
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
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
    </div>
  )
}
export default TodosList