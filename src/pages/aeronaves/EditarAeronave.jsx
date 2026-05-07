import { useState } from "react";

export default function EditarAeronave() {
  const [form, setForm] = useState({
    modelo: "Boeing 737",
    tipo: "Comercial",
    capacidade: "180 passageiros",
    alcance: "5500 km"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function salvar() {
    console.log("Atualizado:", form);
    alert("Aeronave atualizada!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Editar Aeronave
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* MODELO */}
        <label className="text-sm text-gray-600">Modelo</label>
        <input
          name="modelo"
          value={form.modelo}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* TIPO */}
        <label className="text-sm text-gray-600">Tipo</label>
        <input
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* CAPACIDADE */}
        <label className="text-sm text-gray-600">Capacidade</label>
        <input
          name="capacidade"
          value={form.capacidade}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* ALCANCE */}
        <label className="text-sm text-gray-600">Alcance</label>
        <input
          name="alcance"
          value={form.alcance}
          onChange={handleChange}
          className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

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