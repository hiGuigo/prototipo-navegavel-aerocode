import { useState } from "react";
import { useAuth } from "../../loginMock/UseAuth";

export default function DetalhesEtapa() {
  const { user } = useAuth();

  const nivel = user?.nivel;

  const podeVerBotoes = nivel !== "operador";

  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: "Carlos Silva" },
    { id: 2, nome: "Ana Souza" },
  ]);

  function adicionarFuncionario() {
    const nome = prompt("Nome do funcionário:");
    if (!nome) return;

    setFuncionarios([...funcionarios, { id: Date.now(), nome }]);
  }

  function finalizarEtapa() {
    alert("Etapa finalizada!");
  }

  function adicionarEtapa() {
    alert("Etapa Iniciada!");
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* CABEÇALHO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Montagem Estrutural
        </h1>

        <p className="text-gray-600 mt-2">
          Status:
          <span className="ml-2 font-semibold text-yellow-600">Pendente</span>
        </p>
      </div>

      {/* FUNCIONÁRIOS */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">Funcionários</h2>

          {podeVerBotoes && (
            <>
              <button
                onClick={adicionarFuncionario}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition"
              >
                + Adicionar
              </button>
            </>
          )}
        </div>

        <div className="space-y-2">
          {funcionarios.map((f) => (
            <div
              key={f.id}
              className="bg-gray-50 p-2 rounded flex justify-between"
            >
              <span>{f.nome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AÇÕES */}
      <div className="flex gap-3">
        {podeVerBotoes && (
          <>
            <button
              onClick={adicionarEtapa}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            >
              Iniciar Etapa
            </button>

            <button
              onClick={finalizarEtapa}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
            >
              Finalizar Etapa
            </button>
          </>
        )}
      </div>
    </div>
  );
}
