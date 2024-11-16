// src/App.jsx
import { useState } from 'react';
import Auth from '../src/assets/components/Auth';
import TodoList from './assets/components/TodoList';
import Modal from './assets/components/Modal';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div>
      <h1>TODO List</h1>
      {!user ? (
        <>
          <button onClick={openAuthModal}>Login / Registrar</button>
          {isAuthModalOpen && (
            <Modal onClose={closeAuthModal}>
              <Auth onAuthSuccess={(user) => {
                setUser(user);
                closeAuthModal();
              }} />
            </Modal>
          )}
        </>
      ) : (
        <>
          <button onClick={() => setUser(null)}>Logout</button>
          <TodoList />
        </>
      )}
    </div>
  );
}

export default App;
