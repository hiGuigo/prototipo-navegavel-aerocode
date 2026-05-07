import { Link } from "react-router-dom";
import { useAuth } from "../../loginMock/UseAuth";

const data = [
  { id: 1, nome: "Boeing 737" },
  { id: 2, nome: "Airbus A320" },
];

export default function ListaAeronaves() {
  const { user } = useAuth();

  const nivel = user?.nivel;

  const podeEditar = nivel === "admin";
  const podeCadastrar = nivel === "admin";

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Aeronaves
      </h1>

      {/* BOTÃO CADASTRAR */}
      {podeCadastrar && (
        <Link to="/aeronaves/cadastrar">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-6 transition">
            Cadastrar Aeronave
          </button>
        </Link>
      )}

      {/* LISTA */}
      <div className="space-y-4">

        {data.map((a) => (
          <div
            key={a.id}
            className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
          >

            {/* NOME */}
            <h3 className="text-lg font-semibold text-gray-700">
              {a.nome}
            </h3>

            {/* BOTÕES */}
            <div className="flex gap-2">

              <Link to={`/aeronaves/${a.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition">
                  Detalhes
                </button>
              </Link>

              {podeEditar && (
                <Link to={`/aeronaves/editar/${a.id}`}>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition">
                    Editar
                  </button>
                </Link>
              )}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}