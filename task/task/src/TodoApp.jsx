 import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  
  const handleChange = (e) => {
    setTask(e.target.value);
  };


  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask(""); 
  };


  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>To-Do App</h2>

      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>


      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((item, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {item}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
