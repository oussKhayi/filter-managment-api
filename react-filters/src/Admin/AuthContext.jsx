// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isToken, setIsToken] = useState(!!Cookies.get("token"));

  const setToken = (token) => {
    Cookies.set("token", token, { expires: 1 });
    setIsToken(true);
  };

  const removeToken = () => {
    Cookies.remove("token");
    setIsToken(false);
  };

  return (
    <AuthContext.Provider value={{ isToken, setToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
