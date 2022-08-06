import React from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
import { TodoStore } from "./TodoStore"



const TodoContainer = () => {
  
  

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo TodoStore={TodoStore} />
        <TodosList
          TodoStore={TodoStore}
        />
          <button type="button" onClick={TodoStore.removeCompletedTodos}>remove completed</button>
      </div>
      <div className="completeds">
     <h3>completed todos</h3>
      {/* <ul>
        {TodoStore.todos.filter(todo => todo.completed).map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      </div>

    </div>
  )
}

export default TodoContainer



//   render() {
//     const done = this.state.todos.filter(function(todo) {
//       if(todo.completed === true) {
//         return todo;
//       }
//     });
//     const renderDone = done.map(function(ele) {
//       return <li key={
//         ele.id
//       }>{ele.title}</li>
//     }
//     );
//     return (
//       <div className="container">
//         <div className="inner">
//           <Header />

//           <TodosList
//             todos={this.state.todos}
//             handleChangeProps={this.handleChange}
//             deleteTodoProps={this.delTodo}
//             setUpdate={this.setUpdate}
//           />
//           <InputTodo addTodoProps={this.addTodoItem} />
//          <h1>copmleted todos</h1>
//          <ul>
//           {renderDone}
          // <button type="button" onClick={this.removeCompletedTodos}>remove completed</button>
//          </ul>
//           <p>total completed:{this.countCompleted()}</p>
//           <p>total list:{this.state.todos.length} </p>
//         </div>
//       </div>
//     );
//   }
// }
// export default TodoContainer;
