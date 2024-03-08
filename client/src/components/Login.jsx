import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your actual login logic (validation, API calls, etc.)
    alert("Login exitoso!"); // Placeholder for successful login
  };

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
        <p>
          ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
