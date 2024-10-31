import React, { useEffect, useState } from "react";
import axios from "axios";
import { Todo } from "../../Types/TodoModel";
import TodoInput from "../TodoInput/TodoInput"
import TodoList from "../TodoLIst/TodoList";
import "./TodoApp.css"

const statusArr:string[] = ["Pending", "In Progress", "Completed"]
const BASE_URL = `${import.meta.env.VITE_API_URL}`;
const API_KEY = `${import.meta.env.KYE_ID}`;
const TodoApp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const getTodo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<Todo[]>(BASE_URL, {
      });
      setTodos(response.data);
    } catch (error) {
      console.error("error featching data", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);

  const addTodo = async (name:string, status:string,  priority:string, description:string): Promise<void> => {
    try {
        debugger
      const response = await axios.post<Todo>(BASE_URL, {
        name,
        status,
        priority,
        description,
      });
      getTodo();
    } catch (error) {
      console.error("cant add todo", error);
    }
  };

  const deleteTodo = async (id: string): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      getTodo();
    } catch (error) {
      console.error("cant delete todo", error);
    }
  };
  const toggleStatus = async (id: string): Promise<void> => {
    try {
      await axios.post<Todo>(`${BASE_URL}/progress/${id}`);
      getTodo();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList deleteTodo={deleteTodo}
              todos={todos}
              toggleStatus={toggleStatus }/>  
    </div>
  );
};

export default TodoApp;
