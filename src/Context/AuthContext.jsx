import { createContext, useContext, useState } from "react";
import usersData from "../Data/Users.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const existingUser = usersData.find(
      (user) =>
        user.email === email && user.password === password
    );

    if (!existingUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setUser(existingUser);

    return {
      success: true,
    };
  };

  const register = (name, email, password) => {
    const existingUser = usersData.find(
      (user) => user.email === email
    );

    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    const newUser = {
      id: usersData.length + 1,
      name,
      email,
      password,
    };

    // For now, keep the newly registered user in state.
    setUser(newUser);

    return {
      success: true,
    };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};