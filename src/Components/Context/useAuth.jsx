import React, { createContext, useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    name: null,
    email: null,
    isLoggedIn: false,
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (name && email && isLoggedIn) {
      setAuth({ name, email, isLoggedIn });
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (auth.isLoggedIn) {
      localStorage.setItem("name", auth.name);
      localStorage.setItem("email", auth.email);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("isLoggedIn");
    }
  }, [auth]);

  const login = (userData) => {
    setAuth({
      name: userData.name,
      email: userData.email,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setAuth({
      name: null,
      email: null,
      isLoggedIn: false,
    });
    navigate("/");
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
