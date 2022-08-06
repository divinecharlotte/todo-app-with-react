import React from "react"
import { TodoStore } from "./TodoStore"

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  return (
    <div
      // style={headerDiv} 
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#ececec",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
    <header style={headerStyle}>
      <h1
       style={{
        fontSize: "5rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#ececec",
        textTransform: "lowercase",
        textAlign: "center",
      }}
      >todos</h1>
    </header>
    <p>total completed:
        {TodoStore.countCompleted}
        </p>
    
     <p>total list:{TodoStore.todos.length} </p>
    </div>
    </div>
  )
}

export default Header;