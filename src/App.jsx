// src/App.jsx
import { useState } from 'react';
import Auth from './assets/components/Auth.jsx';
import TodoList from './assets/components/TodoList.jsx';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>TODO List</h1>
      <Auth setUser={setUser} />
      {user ? <TodoList /> : <p>Faça login para acessar sua lista de tarefas.</p>}
    </div>
  );
}

export default App;
