import { useState } from "react";

export default function CadastrarPeca() {
  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    fornecedor: "",
    status: "Em produção"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    console.log("Peça cadastrada:", form);
    alert("Peça cadastrada!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Cadastrar Peça
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* NOME */}
        <label className="text-sm text-gray-600">Nome</label>
        <input
          name="nome"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Turbina JT8D"
        />

        {/* TIPO */}
        <label className="text-sm text-gray-600">Tipo</label>
        <input
          name="tipo"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Motor / Estrutural / Elétrica"
        />

        {/* FORNECEDOR */}
        <label className="text-sm text-gray-600">Fornecedor</label>
        <input
          name="fornecedor"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Boeing Supplier / Embraer Parts"
        />

        {/* STATUS (AUTO) */}
        <label className="text-sm text-gray-600">Status</label>
        <input
          value={form.status}
          disabled
          className="w-full mb-6 px-3 py-2 border rounded bg-gray-100 text-gray-600 cursor-not-allowed"
        />

        {/* BOTÃO */}
        <button
          onClick={salvar}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Cadastrar Peça
        </button>

      </div>
    </div>
  );
}