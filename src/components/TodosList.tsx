import {FC} from "react";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";
import { TodoStore } from "./TodoStore";
import {ListItem} from "./TodoItem.styles"
import { TodoType } from "./TodoStore";

const TodosList = observer(({todosProp}: TodoType[]) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => TodoStore.filterdata(e.target.value)}
      />
      <ul>
        {todosProp.map((todo: TodoType) => (
          <ListItem>
            <TodoItem
              key={todo.id}
              todo={todo}
              // TodoStore={TodoStore}
              // deleteTodoProps={props.deleteTodoProps}
              // setUpdate={props.setUpdate}
            />
          </ListItem>
        ))}
      </ul>
    </div>
  );
});
export default TodosList;
