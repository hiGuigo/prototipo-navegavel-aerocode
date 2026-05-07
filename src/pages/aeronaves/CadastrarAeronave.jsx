import { useState } from "react";

export default function CadastrarAeronave() {
  const [form, setForm] = useState({
    modelo: "",
    tipo: "",
    capacidade: "",
    alcance: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    console.log(form);
    alert("Aeronave cadastrada!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Cadastrar Aeronave
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* MODELO */}
        <label className="text-sm text-gray-600">Modelo</label>
        <input
          name="modelo"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Boeing 737"
        />

        {/* TIPO */}
        <label className="text-sm text-gray-600">Tipo</label>
        <input
          name="tipo"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Comercial / Militar"
        />

        {/* CAPACIDADE */}
        <label className="text-sm text-gray-600">Capacidade</label>
        <input
          name="capacidade"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: 180 passageiros"
        />

        {/* ALCANCE */}
        <label className="text-sm text-gray-600">Alcance</label>
        <input
          name="alcance"
          onChange={handleChange}
          className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: 5.500 km"
        />

        {/* BOTÃO */}
        <button
          onClick={salvar}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
        >
          Cadastrar Aeronave
        </button>

      </div>
    </div>
  );
}