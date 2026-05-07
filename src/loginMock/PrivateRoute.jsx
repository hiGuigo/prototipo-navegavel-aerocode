import { Navigate } from "react-router-dom";
import { useAuth } from "../loginMock/UseAuth";

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}