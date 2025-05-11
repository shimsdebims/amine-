import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAdmin,
        setIsAdmin,
        login: (userData, adminStatus) => {
          setUser(userData);
          setIsAdmin(adminStatus);
        },
        logout: () => {
          setUser(null);
          setIsAdmin(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);