import React from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
import { TodoStore } from "./TodoStore"



const TodoContainer = () => {
  // const [todos, setTodos] = useState([])

  // const handleChange = id => {
  //   setTodos(prevState =>
  //     prevState.map(todo => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         }
  //       }
  //       return todo
  //     })
  //   )
  // }

  // const delTodo = id => {
  //   setTodos([
  //     ...todos.filter(todo => {
  //       return todo.id !== id
  //     }),
  //   ])
  // }

  // const addTodoItem = title =>TodoStore.addTodoItem(title)

  // const setUpdate = (updatedTitle, id) => {
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.title = updatedTitle
  //       }
  //       return todo
  //     })
  //   )
  // }

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo TodoStore={TodoStore} />
        <TodosList
          TodoStore={TodoStore}
          // deleteTodoProps={delTodo}
          // setUpdate={setUpdate} 
        />
          <button type="button" onClick={TodoStore.removeCompletedTodos}>remove completed</button>
      </div>
    </div>
  )
}

export default TodoContainer

// class TodoContainer extends React.Component { 
//   state = {
//     todos: [],
//   };
//   componentDidMount() {
//     let temp = localStorage.getItem("todos");
//     let loadedTodos = JSON.parse(temp);
//     if (loadedTodos) {
//       this.setState({
//         todos: loadedTodos,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todos !== this.state.todos) {
//       const temp = JSON.stringify(this.state.todos);
//       localStorage.setItem("todos", temp);
//     }
//   }

//   handleChange = (id) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.map((todo) => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         }
//         return todo;
//       }),
//     }));
//   };
//   delTodo = (id) => {
//     this.setState({
//       todos: [
//         ...this.state.todos.filter((todo) => {
//           return todo.id !== id;
//         }),
//       ],
//     });
//   };

  // removeCompletedTodos = (completed) => {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos.filter((todo) => {

  //         return todo.completed === false;
          
  //       }),
  //     ],
  //   });
   
  // };

//   addTodoItem = (title) => {
//     const newTodo = {
//       id: uuidv4(),
//       title: title,
//       completed: false,
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo],
//     });
//   };
//   setUpdate = (updatedTitle, id) => {
//     this.setState({
//       todos: this.state.todos.map((todo) => {
//         if (todo.id === id) {
//           todo.title = updatedTitle;
//         }
//         return todo;
//       }),
//     });
//   };

//   countCompleted = () => {
//     const count = this.state.todos.filter((todo) => todo.completed === true); 
//     return count.length;
//   }

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
