import { useState } from "react";
import { useAuth } from "../../loginMock/UseAuth";

export default function DetalhesPeca() {
  const { user } = useAuth();

  const nivel = user?.nivel;

  const podeVerBotoes = nivel !== "operador";

  const [status, setStatus] = useState("Em Produção");

  const [modalAberto, setModalAberto] = useState(false);

  const peca = {
    nome: "Turbina JT8D",
    tipo: "Nacional",
    fornecedor: "Boeing Supplier",
  };

  function alterarStatus(novoStatus) {
    setStatus(novoStatus);
    setModalAberto(false);
    alert("Status atualizado!");
  }

  function obterProximosStatus() {
    if (status === "Em Produção") {
      return ["Em Transporte"];
    }

    if (status === "Em Transporte") {
      return ["Pronta"];
    }

    return [];
  }

  const statusRestantes = obterProximosStatus();

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
      {podeVerBotoes && status !== "Pronta" && (
        <button
          onClick={() => setModalAberto(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
        >
          Alterar Status
        </button>
      )}

      {/* MODAL */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Selecionar Novo Status</h2>

            <div className="space-y-2">
              {statusRestantes.map((s) => (
                <button
                  key={s}
                  onClick={() => alterarStatus(s)}
                  className="w-full text-left bg-gray-100 hover:bg-gray-200 p-2 rounded transition"
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              onClick={() => setModalAberto(false)}
              className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
