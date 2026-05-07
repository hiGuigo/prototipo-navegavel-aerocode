import { useState } from "react";
import { useAuth } from "../../loginMock/UseAuth";

export default function DetalhesPeca() {
  const { user } = useAuth();

  const nivel = user?.nivel;

  const podeVerBotoes = nivel !== "operador";

  const [status, setStatus] = useState("Em produção");

  const peca = {
    nome: "Turbina JT8D",
    tipo: "Motor",
    fornecedor: "Boeing Supplier",
  };

  function alterarStatus() {
    const novoStatus = prompt(
      "Novo status (Pendente / Andamento / Concluída):",
    );

    if (novoStatus) {
      setStatus(novoStatus);
      alert("Status atualizado (mock)");
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* CABEÇALHO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{peca.nome}</h1>

        <p className="text-gray-600 mt-2">
          Status:
          <span className="ml-2 font-semibold text-blue-600">{status}</span>
        </p>
      </div>

      {/* DETALHES */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 space-y-3">
        <p>
          <span className="font-semibold text-gray-700">Tipo:</span> {peca.tipo}
        </p>

        <p>
          <span className="font-semibold text-gray-700">Fornecedor:</span>{" "}
          {peca.fornecedor}
        </p>
      </div>

      {/* AÇÕES */}
      {podeVerBotoes && (
        <>
          <button
            onClick={alterarStatus}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
          >
            Alterar Status
          </button>
        </>
      )}
    </div>
  );
}
