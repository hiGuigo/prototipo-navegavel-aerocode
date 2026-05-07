import { useParams } from "react-router-dom";

export default function DetalhesRelatorio() {
  const { id } = useParams();

  // MOCK baseado na sua estrutura
  const relatorio = {
    aeronave: {
      codigo: "AC-102",
      modelo: "Boeing 737",
      tipo: "Comercial",
      capacidade: 180,
      alcance: 5600,
    },
    cliente: "Embraer Logistics",
    dataEntrega: "2026-06-15",

    pecas: [
      { nome: "Motor Turbofan", status: "Pronta" },
      { nome: "Asa Direita", status: "Pronta" },
    ],

    etapas: [
      { nome: "Montagem estrutural", status: "Concluída" },
      { nome: "Instalação elétrica", status: "Concluída" },
    ],

    testes: [
      { tipo: "Teste de pressão", resultado: "Aprovado" },
      { tipo: "Teste de voo", resultado: "Aprovado" },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* CABEÇALHO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Relatório da Aeronave #{id}
        </h1>
      </div>

      {/* DADOS DA AERONAVE */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="font-bold text-gray-700 mb-3">
          Dados da Aeronave
        </h2>

        <div className="grid grid-cols-2 gap-3 text-gray-700">
          <p><strong>Código:</strong> {relatorio.aeronave.codigo}</p>
          <p><strong>Modelo:</strong> {relatorio.aeronave.modelo}</p>
          <p><strong>Tipo:</strong> {relatorio.aeronave.tipo}</p>
          <p><strong>Capacidade:</strong> {relatorio.aeronave.capacidade}</p>
          <p><strong>Alcance:</strong> {relatorio.aeronave.alcance} km</p>
        </div>
      </div>

      {/* CLIENTE */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="font-bold text-gray-700 mb-3">
          Cliente e Entrega
        </h2>

        <p className="text-gray-700">
          <strong>Cliente:</strong> {relatorio.cliente}
        </p>

        <p className="text-gray-700">
          <strong>Data de Entrega:</strong> {relatorio.dataEntrega}
        </p>
      </div>

      {/* PEÇAS */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="font-bold text-gray-700 mb-3">Peças</h2>

        <div className="space-y-2">
          {relatorio.pecas.map((p, i) => (
            <div key={i} className="flex justify-between bg-gray-50 p-2 rounded">
              <span>{p.nome}</span>
              <span className="text-gray-600">{p.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ETAPAS */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="font-bold text-gray-700 mb-3">Etapas</h2>

        <div className="space-y-2">
          {relatorio.etapas.map((e, i) => (
            <div key={i} className="flex justify-between bg-gray-50 p-2 rounded">
              <span>{e.nome}</span>
              <span className="text-gray-600">{e.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TESTES */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="font-bold text-gray-700 mb-3">Testes</h2>

        <div className="space-y-2">
          {relatorio.testes.map((t, i) => (
            <div key={i} className="flex justify-between bg-gray-50 p-2 rounded">
              <span>{t.tipo}</span>
              <span className="text-gray-600">{t.resultado}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}