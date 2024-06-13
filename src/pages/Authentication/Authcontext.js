import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../../firebase";

export const AuthContext = createContext();

const Authentication = ({ children }) => {
  const [user, setUser] = useState();
  const auth = getAuth(app)
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () =>{
    return signOut(auth);
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const authInfo = {
    login,
    signUp,
    user,
    signOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authentication;
