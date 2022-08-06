import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
ReactDOM.render(
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>,
  document.getElementById("root")
)