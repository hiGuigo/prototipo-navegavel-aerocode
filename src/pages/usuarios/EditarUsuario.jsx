import { useState } from "react";

export default function EditarUsuario() {
  const [form, setForm] = useState({
    nome: "João Silva",
    telefone: "(11) 99999-9999",
    endereco: "Rua Industrial, 123",
    usuario: "joao.silva",
    senha: "",
    nivel: "engenheiro"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    console.log("Usuário atualizado:", form);
    alert("Usuário atualizado!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Editar Usuário
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* NOME */}
        <label className="text-sm text-gray-600">Nome</label>
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* TELEFONE */}
        <label className="text-sm text-gray-600">Telefone</label>
        <input
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* ENDEREÇO */}
        <label className="text-sm text-gray-600">Endereço</label>
        <input
          name="endereco"
          value={form.endereco}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* USUÁRIO */}
        <label className="text-sm text-gray-600">Usuário</label>
        <input
          name="usuario"
          value={form.usuario}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* SENHA */}
        <label className="text-sm text-gray-600">Senha</label>
        <input
          type="password"
          name="senha"
          value={form.senha}
          onChange={handleChange}
          placeholder="Digite nova senha (opcional)"
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* NÍVEL DE PERMISSÃO */}
        <label className="text-sm text-gray-600">Nível de Permissão</label>
        <select
          name="nivel"
          value={form.nivel}
          onChange={handleChange}
          className="w-full mb-6 px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="engenheiro">Engenheiro</option>
          <option value="gestor">Gestor</option>
          <option value="visualizador">Visualizador</option>
        </select>

        {/* BOTÃO */}
        <button
          onClick={salvar}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded transition"
        >
          Salvar Alterações
        </button>

      </div>
    </div>
  );
}