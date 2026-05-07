import { Link } from "react-router-dom";

const users = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" }
];

export default function ListaUsuarios() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* TÍTULO */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Usuários
      </h1>

      {/* BOTÃO CADASTRAR */}
      <Link to="/usuarios/cadastrar">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-6 transition">
          Cadastrar Usuário
        </button>
      </Link>

      {/* LISTA */}
      <div className="space-y-4">

        {users.map((u) => (
          <div
            key={u.id}
            className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
          >

            {/* NOME */}
            <h3 className="text-lg font-semibold text-gray-700">
              {u.nome}
            </h3>

            {/* BOTÕES */}
            <div className="flex gap-2">

              <Link to={`/usuarios/${u.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition">
                  Detalhes
                </button>
              </Link>

              <Link to={`/usuarios/editar/${u.id}`}>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition">
                  Editar
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}