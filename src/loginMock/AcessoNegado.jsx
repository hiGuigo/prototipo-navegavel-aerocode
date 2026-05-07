import { Navigate } from "react-router-dom";
import { useAuth } from "./UseAuth";

export function RoleRoute({ children, allowed }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  if (!allowed.includes(user.nivel)) {
    return <h1 className="p-6">Acesso negado.</h1>;
  }

  return children;
}
