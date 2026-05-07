import { useState } from "react";

export default function AdicionarPeca() {
  const [pecaSelecionada, setPecaSelecionada] = useState("");

  const pecasFicticias = [
    "Motor Turbofan",
    "Asa Direita",
    "Asa Esquerda",
    "Sistema Hidráulico",
    "Fuselagem Central",
    "Trem de Pouso",
    "Painel Aviónico"
  ];

  function adicionar() {
    if (!pecaSelecionada) {
      alert("Selecione uma peça");
      return;
    }

    console.log("Peça adicionada:", pecaSelecionada);
    alert(`Peça "${pecaSelecionada}" adicionada!`);
    setPecaSelecionada("");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Adicionar Peça à Aeronave
      </h1>

      {/* CARD */}
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">

        {/* DROPDOWN */}
        <label className="text-sm text-gray-600">
          Selecione a peça
        </label>

        <select
          value={pecaSelecionada}
          onChange={(e) => setPecaSelecionada(e.target.value)}
          className="w-full mb-6 px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Selecione uma peça</option>

          {pecasFicticias.map((peca, index) => (
            <option key={index} value={peca}>
              {peca}
            </option>
          ))}
        </select>

        {/* BOTÃO */}
        <button
          onClick={adicionar}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition"
        >
          Adicionar Peça
        </button>

      </div>
    </div>
  );
}