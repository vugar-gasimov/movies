import React, { createContext, useState, useEffect, useCallback } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(userData => {
    setUser(userData);
    setIsLoggedIn(true);
  }, []);
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      login(parsedData); // Call login with the retrieved user data
    }
  }, [login]); // Add login to the dependency array

  const register = data => {
    setUser(data);
    // Additional logic if needed
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const contextValue = {
    user,
    login,
    logout,
    register,
    isLoggedIn,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
