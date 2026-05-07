import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../loginMock/UseAuth";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function entrar() {
    const ok = login(usuario, senha);

    if (ok) {
      navigate("/aeronaves");
    } else {
      alert("Login inválido");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      entrar();
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-6 rounded shadow w-80">

        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          className="w-full border p-2 mb-2 rounded-md"
          placeholder="Usuário"
          onChange={(e) => setUsuario(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <input
          className="w-full border p-2 mb-4 rounded-md"
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={entrar}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Entrar
        </button>

      </div>
    </div>
  );
}