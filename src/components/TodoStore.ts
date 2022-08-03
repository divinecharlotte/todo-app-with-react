import {action,makeObservable,observable} from 'mobx';
import { v4 as uuidv4 } from "uuid";
 interface TodoItem {
    id: number;
    title: string;
    completed: false;
 }


class TodoStoreImpl{
    todos:TodoItem[]=[];
    constructor(){
        makeObservable(this,{
            todos: observable,
            addTodoItem: action,
        });
    }
    addTodoItem(title:string){
        const newTodo:TodoItem={
            id: uuidv4(),
            title: title,
            completed: false,
        };
        this.todos.push(newTodo);



}
}

export const  TodoStore = new TodoStoreImpl();
// addTodoItem = (title) => {
//     const newTodo = {
//       id: uuidv4(),
//       title: title,
//       completed: false,
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo],
//     });
//   };