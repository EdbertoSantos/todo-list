// src/components/TodoItem.jsx
import "../css/TodoItem.css";
import { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const [borderColor, setBorderColor] = useState("rgb(255, 0, 0)");

  const handleChangeBorderColor = () => {
    const newColor =
      borderColor === "rgb(255, 0, 0)" ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)";
    setBorderColor(newColor);
  };

  return (
    <li className="TodoItem" style={{ borderColor: borderColor }}>
      <div className="TodoItemCard">
        <span>{todo.text}</span>
        <div>
          <button onClick={() => {toggleComplete(); handleChangeBorderColor()}} className="Troca">
            {todo.completed ? "Desfazer" : "Concluir"}
          </button>
          <button onClick={deleteTodo}>Excluir</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
