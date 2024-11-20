// src/components/TodoItem.jsx
import "../css/TodoItem.css";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => (
  <li className="TodoItem">
    <div className="TodoItemDIV">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={toggleComplete} className="">
        {todo.completed ? "Desfazer" : "Concluir"}
      </button>
      <button onClick={deleteTodo}>Excluir</button>
    </div>
  </li>
);

export default TodoItem;
