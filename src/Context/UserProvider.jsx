import { createContext, useState } from 'react';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const register = data => {
    setUser(data);
  };
  const logout = () => {
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
