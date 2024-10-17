import React from "react";

import CheckIcon from "@/public/CheckIcon";
import DeleteIcon from "@/public/DeleteIcon";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    
  return (
    <ul className="todo-app__list">
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="todo-app__list__item">
            <input
              id={todo.id}
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <label htmlFor={todo.id} className="check-icon icon">
              <CheckIcon colorFill={"#00c105"} />
            </label>
            <span className="todo-app__list__item__text">{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="todo-app__list__item__button icon"
            >
              <DeleteIcon colorFill={"#d30000"} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
