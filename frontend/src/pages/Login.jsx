import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3010/signin', { email, password });
      localStorage.setItem('token', response.data.token);
      router.push('/Home');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data); // exibe o erro exato retornado pelo backend
      } else {
        setError('Erro ao tentar fazer login'); // caso o erro não seja detalhado
      }
    }
  };
  

  return (
    <div className="container">
      <div className="form-container">
        <Image src="/imgs/gtech-logo-final-04.png" alt="logo" width={285} height={65} />
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-links">
            <a href="/NewUser">Criar novo usuário</a>
            <a href="/forgot-password">Esqueci a senha</a>
          </div>
          <button type="submit" className="btn btn-success">LOGIN</button>
        </form>
      </div>
    </div>
  );
}
