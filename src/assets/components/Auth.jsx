// src/components/Auth.jsx
import { useState } from 'react';
import { auth } from '../../firebaseConfig.jsx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Erro ao registrar:", error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Registrar</button>
      <button onClick={handleSignIn}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Auth;
