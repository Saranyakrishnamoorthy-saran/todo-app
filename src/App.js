import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">📝 To-Do List</h2>

      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul className="list-group mx-auto" style={{ maxWidth: "600px" }}>
        {todos.map((todo, i) => (
          <li
            key={i}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.completed ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            <div>
              <input
                className="form-check-input me-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(i)}
              />
              {todo.text}
            </div>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(i)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
