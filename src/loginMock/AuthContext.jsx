import { createContext, useState } from "react";
import { mockUsers } from "./usuarios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(usuario, senha) {
    const found = mockUsers.find(
      (u) => u.usuario === usuario && u.senha === senha,
    );

    if (found) {
      setUser(found);
      return true;
    }

    return false;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
