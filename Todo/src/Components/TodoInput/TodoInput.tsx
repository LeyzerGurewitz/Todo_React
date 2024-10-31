import React, { useState } from "react";
import "./TodoInput.css";
interface TaskFormProps {
  addTodo: (
    name: string,
    status: string,
    priority: string,
    description: string
  ) => Promise<void>;
}
const TodoInput: React.FC<TaskFormProps> = ({ addTodo }) => {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("Pending");
  const [priority, setPriority] = useState<string>("Low");
  const [description, setDescription] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!name.trim()) return;
    addTodo(name, status, priority, description);
    setName("");
    setDescription("");
  };
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      </div>
      <div>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="InProgress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoInput;
