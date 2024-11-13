import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsAX4RLuK5hSL6bqNKPzA7Q2xS55tacho",
  authDomain: "todo-list-67743.firebaseapp.com",
  projectId: "todo-list-67743",
  storageBucket: "todo-list-67743.firebasestorage.app",
  messagingSenderId: "723922879926",
  appId: "1:723922879926:web:c1349d3b778e5c23c12d17",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
