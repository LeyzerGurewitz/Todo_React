import React from "react";
import { Todo , Status} from "../../Types/TodoModel";
import './TodoCard.css'
interface TodoCardProps {
  todo: Todo;
  deleteTodo: (id: string) => Promise<void>;
  toggleStatus: (id: string) => Promise<void>;
}
const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  deleteTodo,
  toggleStatus,
}) => {
    const backgroundColor =
    todo.status === Status.Completed
      ? "green"
      : todo.status === Status.InProgress
      ? "orange"
      : "red";
  return (
    <div className="cc" style={{backgroundColor}}>
      <div className="todo-status-and-text">
        <ul>
          <li>{todo.name}</li>
          <li>{todo.status}</li>
          <li>{todo.priority}</li>
          <li>{todo.description}</li>
        </ul>
      </div>
      <div>
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
        <button onClick={() => toggleStatus(todo._id)}>Progress</button>
      </div>
    </div>
  );
};

export default TodoCard;
