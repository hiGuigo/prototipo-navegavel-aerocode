import { Link } from "react-router-dom";
import { useAuth } from "../loginMock/UseAuth";

export default function Sidebar() {
  const { user } = useAuth();

  const nivel = user?.nivel;

  const menu = [
    {
      label: "Aeronaves",
      to: "/aeronaves",
      show: ["admin", "engenheiro", "operador"],
    },
    {
      label: "Usuários",
      to: "/usuarios",
      show: ["admin"],
    },
    {
      label: "Cadastrar Peça",
      to: "/cadastrarPeca",
      show: ["admin", "engenheiro"],
    },
    {
      label: "Relatórios",
      to: "/relatorios",
      show: ["admin", "engenheiro", "operador"],
    },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-8">
        <Link to="/dashboard">Aerocode</Link>
      </h2>

      <nav className="flex flex-col space-y-3">
        {menu
          .filter((item) => item.show.includes(nivel))
          .map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="p-2 rounded hover:bg-gray-700 transition"
            >
              {item.label}
            </Link>
          ))}
      </nav>
    </aside>
  );
}
