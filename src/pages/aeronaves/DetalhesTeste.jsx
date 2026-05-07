import { useState } from "react";
import { useAuth } from "../../loginMock/UseAuth";

export default function DetalhesTeste() {
  const { user } = useAuth();

  const nivel = user?.nivel;

  const podeVerBotoes = nivel !== "operador";

  const [resultado, setResultado] = useState("Reprovado");

  const [modalAberto, setModalAberto] = useState(false);

  const teste = {
    nome: "Teste de Voo",
    tipo: "Aerodinâmico",
  };

  function alterarResultado(novoResultado) {
    setResultado(novoResultado);
    setModalAberto(false);
    alert("Resultado atualizado!");
  }

  function obterOpcoesResultado() {
    if (resultado === "Reprovado") {
      return ["Aprovado"];
    }

    return [];
  }

  const opcoesResultado = obterOpcoesResultado();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* CABEÇALHO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Detalhes do Teste</h1>
      </div>

      {/* INFORMAÇÕES */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 space-y-4">
        <p>
          <span className="font-semibold text-gray-700">Nome:</span>{" "}
          {teste.nome}
        </p>
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

      {/* AÇÕES */}
      {podeVerBotoes && resultado !== "Aprovado" && (
        <>
          <button
            onClick={() => setModalAberto(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
          >
            Alterar Resultado
          </button>
        </>
      )}

      {/* MODAL */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Selecionar Resultado</h2>

            <div className="space-y-2">
              {opcoesResultado.map((opcao) => (
                <button
                  key={opcao}
                  onClick={() => alterarResultado(opcao)}
                  className="w-full text-left bg-gray-100 hover:bg-gray-200 p-2 rounded transition"
                >
                  {opcao}
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
