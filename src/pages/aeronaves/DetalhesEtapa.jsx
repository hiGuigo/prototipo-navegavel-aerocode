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

  const [modalAberto, setModalAberto] = useState(false);

  const funcionariosDisponiveis = [
    { id: 3, nome: "João Pedro" },
    { id: 4, nome: "Mariana Lima" },
    { id: 5, nome: "Felipe Costa" },
  ];

  const [statusEtapa, setStatusEtapa] = useState("Pendente");

  function adicionarFuncionario(funcionario) {
    const jaExiste = funcionarios.some((f) => f.id === funcionario.id);

    if (jaExiste) {
      alert("Funcionário já adicionado.");
      return;
    }

    setFuncionarios([...funcionarios, funcionario]);
    setModalAberto(false);
  }

  function finalizarEtapa() {
    setStatusEtapa("Concluída");
  }

  function iniciarEtapa() {
    setStatusEtapa("Em andamento");
  }

  function corStatus() {
    if (statusEtapa === "Em andamento") return "text-blue-600";
    if (statusEtapa === "Concluída") return "text-green-600";

    return "text-yellow-600";
  }

  const etapaConcluida = statusEtapa === "Concluída";
  const etapaEmAndamento = statusEtapa === "Em andamento";

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* CABEÇALHO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Montagem Estrutural
        </h1>

        <p className="text-gray-600 mt-2">
          Status:
          <span className={`ml-2 font-semibold ${corStatus()}`}>
            {statusEtapa}
          </span>
        </p>
      </div>

      {/* FUNCIONÁRIOS */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">Funcionários</h2>

          {podeVerBotoes && !etapaConcluida && (
            <button
              onClick={() => setModalAberto(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition"
            >
              + Adicionar
            </button>
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
        {podeVerBotoes && !etapaConcluida && (
          <>
            {!etapaEmAndamento && (
              <button
                onClick={iniciarEtapa}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
              >
                Iniciar Etapa
              </button>
            )}

            {etapaEmAndamento && (
              <button
                onClick={finalizarEtapa}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
              >
                Finalizar Etapa
              </button>
            )}
          </>
        )}
      </div>

      {/* MODAL */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">
              Selecionar Funcionário
            </h2>

            <div className="space-y-2">
              {funcionariosDisponiveis.map((f) => (
                <button
                  key={f.id}
                  onClick={() => adicionarFuncionario(f)}
                  className="w-full text-left bg-gray-100 hover:bg-gray-200 p-2 rounded transition"
                >
                  {f.nome}
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