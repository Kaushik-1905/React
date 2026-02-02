import { useEffect, useState } from "react";

function Temp() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Save to localStorage 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === "") return;

    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, name: input } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), name: input }]);
    }

    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setInput(todo.name);
    setEditId(todo.id);
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input type="text" placeholder="Enter name..." value={input}  onChange={(e) => setInput(e.target.value)}/>

      <button onClick={addTodo}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => editTodo(todo)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Temp;
