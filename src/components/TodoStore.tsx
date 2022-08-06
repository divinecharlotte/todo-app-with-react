import {action,computed,makeObservable,observable} from 'mobx';
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
            countCompleted:computed,
        });
    }
    
    addTodoItem(title: any){
        const newTodo={
            id: uuidv4(),
            title: title,
            completed: false,
        };
        this.todos.push(newTodo);
        localStorage.setItem('todos',JSON.stringify(this.todos));
}
 handleChange = (id: any) => {
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
  filterdata = (keyword: string)=>{
    return this.todos = this.todos.filter(el=>el.title.match(keyword))

  }
    removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }

 setUpdate = (updatedTitle, id) => {
      return this.todos= this.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle
          localStorage.setItem('todos',JSON.stringify(this.todos));
          
        }
        return todo
      })
      
  }

  removeCompletedTodos = () => {
    this.todos = this.todos.filter((todo) => todo.completed === false);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
get countCompleted(){

    return this.todos.filter(el=>el.completed).length;
    // return this.todos.filter(todo => todo.completed).length;
}
}

export const  TodoStore = new TodoStoreImpl();
