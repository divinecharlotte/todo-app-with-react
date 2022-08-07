import React, { useState } from "react"
import {observer} from "mobx-react"
import { TodoStore } from "./TodoStore"


const TodoItem = observer(( props) => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  const Style ={
    display : "none",
  }

  const { completed, id, title } = props.todo
  

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode = Style

  } else {
    
    editMode = Style
  }

  return (
    <>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.TodoStore.handleChange(id)}
        />
        <button  type="button" onClick={() => TodoStore.removeTodo(id)}>Delete</button>
        <span style className={completed ? styles.completed : ""}
        >
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.TodoStore.setUpdate(e.target.value, id)
          // .setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </>
  )
})

export default TodoItem