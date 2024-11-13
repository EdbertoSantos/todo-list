// src/components/TodoItem.jsx
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={toggleComplete}>
        {todo.completed ? 'Desfazer' : 'Concluir'}
      </button>
      <button onClick={deleteTodo}>Excluir</button>
    </li>
  );
  
  export default TodoItem;
  