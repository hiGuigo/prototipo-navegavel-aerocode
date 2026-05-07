import { Link } from "react-router-dom";
import { useAuth } from "../../loginMock/UseAuth";

export default function DetalhesAeronave() {
  const { user } = useAuth();
  const nivel = user?.nivel;

  const aeronave = {
    id: 1,
    nome: "Boeing 737",
    status: "Em produção",
  };

  const etapas = [
    { id: 1, nome: "Montagem estrutural" },
    { id: 2, nome: "Instalação elétrica" },
  ];

  const pecas = [
    { id: 1, nome: "Motor turbofan" },
    { id: 2, nome: "Asa esquerda" },
  ];

  const testes = [
    { id: 1, nome: "Teste de pressão" },
    { id: 2, nome: "Teste de voo" },
  ];

  const podeGerarRelatorio = nivel === "admin" || nivel === "engenheiro";
  const podeAdicionarEtapa = nivel === "admin";
  const podeAdicionarPecaTeste = nivel !== "operador";

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* CABEÇALHO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{aeronave.nome}</h1>

        <p className="text-gray-600 mt-2">
          Status:
          <span className="ml-2 font-semibold text-blue-600">
            {aeronave.status}
          </span>
        </p>
      </div>

      {/* AÇÕES */}
      <div className="flex flex-wrap gap-3 mb-6">
        {/* RELATÓRIO */}
        {podeGerarRelatorio && (
          <Link to={`/aeronaves/relatorio/${aeronave.id}`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Gerar Relatório
            </button>
          </Link>
        )}

        {/* ETAPA*/}
        {podeAdicionarEtapa && (
          <Link to={`/aeronaves/adicionarEtapa/${aeronave.id}`}>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Adicionar Etapa
            </button>
          </Link>
        )}

        {/* PEÇA */}
        {podeAdicionarPecaTeste && (
          <Link to={`/aeronaves/adicionarPeca/${aeronave.id}`}>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Adicionar Peça
            </button>
          </Link>
        )}

        {/* TESTE */}
        {podeAdicionarPecaTeste && (
          <Link to={`/aeronaves/adicionarTeste/${aeronave.id}`}>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Adicionar Teste
            </button>
          </Link>
        )}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ETAPAS */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold mb-3 text-gray-700">Etapas</h2>

          <div className="space-y-2">
            {etapas.map((e) => (
              <div
                key={e.id}
                className="flex justify-between items-center bg-gray-50 p-2 rounded"
              >
                <span>{e.nome}</span>

                <Link to={`/etapas/${e.id}`}>
                  <button className="text-sm bg-blue-600 text-white px-2 py-1 rounded">
                    Detalhes
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* PEÇAS */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold mb-3 text-gray-700">Peças</h2>

          <div className="space-y-2">
            {pecas.map((p) => (
              <div
                key={p.id}
                className="flex justify-between items-center bg-gray-50 p-2 rounded"
              >
                <span>{p.nome}</span>

                <Link to={`/pecas/${p.id}`}>
                  <button className="text-sm bg-blue-600 text-white px-2 py-1 rounded">
                    Detalhes
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* TESTES */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold mb-3 text-gray-700">Testes</h2>

          <div className="space-y-2">
            {testes.map((t) => (
              <div
                key={t.id}
                className="flex justify-between items-center bg-gray-50 p-2 rounded"
              >
                <span>{t.nome}</span>

                <Link to={`/testes/${t.id}`}>
                  <button className="text-sm bg-blue-600 text-white px-2 py-1 rounded">
                    Detalhes
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
