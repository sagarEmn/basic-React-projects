import React, { useState, useRef, useEffect } from "react";

import TodoList from "./TodoList";
import Form from "./Form.jsx";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

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

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
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
            <h1 className="todo-app__header">Todo App</h1>
          </header>

          <section className="todo-app__form">
            <Form todos={todos} setTodos={setTodos} />
          </section>
        </div>

        <section className="todo-app__list-section">
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </section>
      </main>
    </>
  );
}

export default Todo;
