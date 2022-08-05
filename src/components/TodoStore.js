import {action,makeObservable,observable} from 'mobx';
import { v4 as uuidv4 } from "uuid";


class TodoStoreImpl{
    todos=[];
    constructor(){
        makeObservable(this,{
            todos: observable,
            addTodoItem: action,
            removeTodo: action,
            setUpdate: action,
            removeCompletedTodos: action,
        });
    }
    addTodoItem(title){
        const newTodo={
            id: uuidv4(),
            title: title,
            completed: false,
        };
        this.todos.push(newTodo);
}
 handleChange = id => {
   return this.todos =  this.todos.map(todo => {
        if (todo.id === id) {

          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo
      })
  }
  filterdata = (keyword)=>{
    return this.todos = this.todos.filter(el=>el.title.match(keyword))

  }
    removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

 setUpdate = (updatedTitle, id) => {
    // setTodos(
      return this.todos= this.todos.map((todo) => {
      // todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    // )
  }

  removeCompletedTodos = () => {
    this.todos = this.todos.filter((todo) => todo.completed === false);
  }

}

export const  TodoStore = new TodoStoreImpl();
