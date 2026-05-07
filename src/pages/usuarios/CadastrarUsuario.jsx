import { useState } from "react";

export default function CadastrarUsuario() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    usuario: "",
    senha: "",
    nivel: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    console.log("Usuário cadastrado:", form);
    alert("Usuário cadastrado!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Cadastrar Usuário
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* NOME */}
        <label className="text-sm text-gray-600">Nome</label>
        <input
          name="nome"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: João Silva"
        />

        {/* TELEFONE */}
        <label className="text-sm text-gray-600">Telefone</label>
        <input
          name="telefone"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: (11) 99999-9999"
        />

        {/* ENDEREÇO */}
        <label className="text-sm text-gray-600">Endereço</label>
        <input
          name="endereco"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Rua Industrial, 123"
        />

        {/* USUÁRIO */}
        <label className="text-sm text-gray-600">Usuário</label>
        <input
          name="usuario"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: joao.silva"
        />

        {/* SENHA */}
        <label className="text-sm text-gray-600">Senha</label>
        <input
          type="password"
          name="senha"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="********"
        />

        {/* NÍVEL DE PERMISSÃO */}
        <label className="text-sm text-gray-600">Nível de Permissão</label>
        <select
          name="nivel"
          onChange={handleChange}
          className="w-full mb-6 px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecione</option>
          <option value="engenheiro">Engenheiro</option>
          <option value="administrador">Administrador</option>
          <option value="operador">Operador</option>
        </select>

        {/* BOTÃO */}
        <button
          onClick={salvar}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
        >
          Cadastrar Usuário
        </button>

      </div>
    </div>
  );
}