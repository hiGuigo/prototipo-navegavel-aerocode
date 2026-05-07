import { useState } from "react";

export default function CadastrarEtapa() {
  const [form, setForm] = useState({
    nome: "",
    prazo: "",
    status: "Pendente"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    console.log("Etapa criada:", form);
    alert("Etapa cadastrada!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Cadastrar Etapa
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* NOME */}
        <label className="text-sm text-gray-600">Nome da Etapa</label>
        <input
          name="nome"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Montagem estrutural"
        />

        {/* PRAZO */}
        <label className="text-sm text-gray-600">Prazo</label>
        <input
          name="prazo"
          type="date"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
        >
          Cadastrar Etapa
        </button>

      </div>
    </div>
  );
}