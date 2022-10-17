import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";

const AuthContext = createContext<FirebaseUser | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const auth = getAuth();
  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    };
  }, [user, auth]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
