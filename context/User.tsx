import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";

const AuthContext = createContext<any | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userInfo, setUserInfo] = useState<any | null>({});

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user, auth]);

  const updateUser = (data: any) => {
    setUserInfo((prev: any) => ({
      ...prev,
      ...data,
      fullname: data.firstname + " " + data.lastname,
    }));
  };

  return (
    <AuthContext.Provider
      value={{ user: user, userInfo: userInfo, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
