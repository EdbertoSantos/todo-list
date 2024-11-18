// src/components/Auth.jsx
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../css/Auth.css'

const Auth = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onAuthSuccess(userCredential.user);
    } catch (error) {
      console.error("Erro ao registrar:", error.message);
      alert("Erro ao registrar:", error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onAuthSuccess(userCredential.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      alert("Erro ao fazer login:", error.message);
    }
  };

  return (
    <div className='Auth'>
      <h2 >{isRegister ? 'Registrar' : 'Login'}</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
      {isRegister ? (
        <button onClick={handleSignUp}>Registrar</button>
      ) : (
        <button onClick={handleSignIn}>Login</button>
      )}
      <p>{isRegister ? 'Já possui uma conta?' : 'Não possui conta?'}</p>
      <button onClick={() => setIsRegister(!isRegister)}>{isRegister ? 'Faça login' : 'Registre-se'}</button>
    </div>
  );
};

export default Auth;
