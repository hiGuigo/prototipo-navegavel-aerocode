export default function DetalhesUsuario() {
  const usuario = {
    nome: "João Silva",
    telefone: "(11) 99999-9999",
    endereco: "Rua Industrial, 123",
    usuario: "joao.silva",
    nivel: "Engenheiro"
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* CABEÇALHO */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">

        <h1 className="text-2xl font-bold text-gray-800">
          {usuario.nome}
        </h1>

        <p className="text-gray-600 mt-2">
          Usuário do sistema Aerocode
        </p>

      </div>

      {/* INFORMAÇÕES */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">

        <p>
          <span className="font-semibold text-gray-700">Telefone:</span>{" "}
          {usuario.telefone}
        </p>

        <p>
          <span className="font-semibold text-gray-700">Endereço:</span>{" "}
          {usuario.endereco}
        </p>

        <p>
          <span className="font-semibold text-gray-700">Usuário:</span>{" "}
          {usuario.usuario}
        </p>

        <p>
          <span className="font-semibold text-gray-700">Nível de Permissão:</span>{" "}
          <span
            className={`font-semibold ${
              usuario.nivel === "Gestor"
                ? "text-red-600"
                : usuario.nivel === "Engenheiro"
                ? "text-blue-600"
                : "text-green-600"
            }`}
          >
            {usuario.nivel}
          </span>
        </p>

      </div>

    </div>
  );
}