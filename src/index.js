import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./components/TodoContainer"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
ReactDOM.render(
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>,
  document.getElementById("root")
)