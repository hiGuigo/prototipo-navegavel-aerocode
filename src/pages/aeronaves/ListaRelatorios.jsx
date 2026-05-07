import { Link } from "react-router-dom";

export default function ListaRelatorios() {
  const relatorios = [
    {
      id: 1,
      titulo: "Relatório Boeing 737 - Produção A-102",
    },
    {
      id: 2,
      titulo: "Relatório Airbus A320 - Linha Europa",
    },
    {
      id: 3,
      titulo: "Relatório Embraer E195 - Testes finais",
    },
    {
      id: 4,
      titulo: "Relatório Bombardier CRJ - Etapas estruturais",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Relatórios
      </h1>

      {/* LISTA */}
      <div className="space-y-3">

        {relatorios.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            {/* TÍTULO */}
            <span className="text-gray-800 font-medium">
              {r.titulo}
            </span>

            {/* BOTÃO DETALHES */}
            <Link to={`/relatorios/${r.id}`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                Detalhes
              </button>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}