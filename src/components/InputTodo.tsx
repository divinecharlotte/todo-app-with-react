import React, { useState } from "react"
import {observer} from 'mobx-react'

const InputTodo = observer(( props: { TodoStore: { addTodoItem: (arg0: string) => void } }) => {
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = (e: { target: { name: any; value: any } }) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (inputText.title.trim()) {
      props.TodoStore.addTodoItem(inputText.title)
      setInputText({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  )
})

export default InputTodo