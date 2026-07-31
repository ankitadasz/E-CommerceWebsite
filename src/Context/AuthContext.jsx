import { createContext, useContext, useState } from "react";
import usersData from "../data/users.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    const existingUser = usersData.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!existingUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setUser(existingUser);

    localStorage.setItem(
      "user",
      JSON.stringify(existingUser)
    );

    return {
      success: true,
    };
  };

  const register = (name, email, password) => {
    const existingUser = usersData.find(
      (item) => item.email === email
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

    setUser(newUser);

    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );

    return {
      success: true,
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
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