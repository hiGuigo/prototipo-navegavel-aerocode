import { useState } from "react";

export default function GerarRelatorio() {
  const [form, setForm] = useState({
    codigoAeronave: "AER-1023",
    cliente: "",
    dataEntrega: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function gerar() {
    console.log("Relatório gerado:", form);
    alert("Relatório gerado!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Gerar Relatório
      </h1>

      {/* FORMULÁRIO */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* CÓDIGO AERONAVE */}
        <label className="text-sm text-gray-600">Código da Aeronave</label>
        <input
          name="codigoAeronave"
          onChange={handleChange}
          value={form.codigoAeronave}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: AER-1023"
        />

        {/* CLIENTE */}
        <label className="text-sm text-gray-600">Cliente</label>
        <input
          name="cliente"
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Airbus / Embraer / Boeing"
        />

        {/* DATA ENTREGA */}
        <label className="text-sm text-gray-600">Data de Entrega</label>
        <input
          name="dataEntrega"
          type="date"
          onChange={handleChange}
          className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* BOTÃO */}
        <button
          onClick={gerar}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Gerar Relatório
        </button>

      </div>
    </div>
  );
}