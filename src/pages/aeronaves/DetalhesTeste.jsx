import { useState } from "react";
import { useAuth } from "../../loginMock/UseAuth";

export default function DetalhesTeste() {
  const { user } = useAuth();

  const nivel = user?.nivel;

  const podeVerBotoes = nivel !== "operador";

  const [resultado, setResultado] = useState("Aprovado");

  const teste = {
    tipo: "Teste de Voo",
  };

  function alterarResultado() {
    const novoResultado = prompt("Novo status (Aprovador / Reprovado):");

    if (novoResultado) {
      setResultado(novoResultado);
      alert("Resultado atualizado!");
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* CABEÇALHO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Detalhes do Teste</h1>
      </div>

      {/* INFORMAÇÕES */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 space-y-4">
        <p>
          <span className="font-semibold text-gray-700">Tipo:</span>{" "}
          {teste.tipo}
        </p>

        <p>
          <span className="font-semibold text-gray-700">Resultado:</span>{" "}
          <span
            className={`font-semibold ${
              resultado === "Aprovado" ? "text-green-600" : "text-red-600"
            }`}
          >
            {resultado}
          </span>
        </p>
      </div>

      {podeVerBotoes && (
        <>
          <button
            onClick={alterarResultado}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
          >
            Alterar Status
          </button>
        </>
      )}
    </div>
  );
}
