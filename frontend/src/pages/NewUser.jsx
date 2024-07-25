import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

export default function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      await axios.post("http://localhost:3010/users", user);
      alert("Usuário cadastrado com sucesso!");
      router.push("/Login"); // Redirecionar para a tela de login
    } catch (err) {
      console.log(err);
      alert("Erro ao cadastrar usuário: " + err.response.data);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <Image src="/imgs/gtech-logo-final-04.png" alt="logo" width={285} height={65} />
        <h2>Registro de Usuário</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-success">SALVAR</button>
        </form>
      </div>
    </div>
  );
}
