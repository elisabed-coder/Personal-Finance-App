import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    name: null,
    email: null,
    isLoggedIn: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (token && name && email && isLoggedIn) {
      setAuth({ token, name, email, isLoggedIn });
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (auth.isLoggedIn) {
      localStorage.setItem("authToken", auth.token);
      localStorage.setItem("name", auth.name);
      localStorage.setItem("email", auth.email);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("authToken");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("isLoggedIn");
    }
  }, [auth]);

  const login = (userData) => {
    setAuth({
      token: userData.token,
      name: userData.name,
      email: userData.email,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setAuth({
      token: null,
      name: null,
      email: null,
      isLoggedIn: false,
    });
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
