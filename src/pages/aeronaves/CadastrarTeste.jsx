import { useState } from "react";

export default function CadastrarTeste() {
  const [form, setForm] = useState({
    tipo: "",
    resultado: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    console.log("Teste cadastrado:", form);
    alert("Teste cadastrado!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Cadastrar Teste
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* TIPO */}
        <label className="text-sm text-gray-600">Tipo de Teste</label>
        <select
          name="tipo"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecione</option>
          <option value="pressao">HIDRÁULICO</option>
          <option value="voo">ELÉTRICO</option>
          <option value="estrutura">AERODINÂMICO</option>
        </select>

        {/* RESULTADO */}
        <label className="text-sm text-gray-600">Resultado</label>
        <select
          name="resultado"
          onChange={handleChange}
          className="w-full mb-6 px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecione</option>
          <option value="aprovado">Aprovado</option>
          <option value="reprovado">Reprovado</option>
        </select>

        {/* BOTÃO */}
        <button
          onClick={salvar}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition"
        >
          Cadastrar Teste
        </button>

      </div>
    </div>
  );
}