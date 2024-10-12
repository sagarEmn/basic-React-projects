import CheckIcon from "@/public/CheckIcon";
import DeleteIcon from "@/public/DeleteIcon";
import React, { useState, useRef, useEffect } from "react";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const loadTodos = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  };

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim(" ")) {
      const newTodo = {
        id: crypto.randomUUID(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <main className="todo-app">
        {/* header-form container */}
        <div className="todo-app__header-form-container">
          <header>
            <h1 className="todo-app__header">Todo React App</h1>
          </header>

          <section className="todo-app__form">
            <form onSubmit={handleSubmit}>
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Write a todo..."
                rows={1}
              />
              <button type="submit">ADD</button>
            </form>
          </section>
        </div>

        <section className="todo-app__list-section">
          <ul className="todo-app__list">
            {todos.map((todo) => {
              return (
                <li key={todo.id} className="todo-app__list__item">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <div className="check-icon">
                    <CheckIcon />
                  </div>
                  <span className="todo-app__list__item__text">{todo.text}</span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="todo-app__list__item__button"
                  >
                    <DeleteIcon />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Todo;
