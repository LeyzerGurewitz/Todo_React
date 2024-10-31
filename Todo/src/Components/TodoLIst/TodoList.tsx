import React from "react";
import { Todo } from "../../Types/TodoModel";
import TodoCard from "../TodoCard/TodoCard";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => Promise<void>;
  toggleStatus: (id: string) => Promise<void>;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  toggleStatus,
}) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoCard
            key={todo._id}
            deleteTodo={deleteTodo}
            todo={todo}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
