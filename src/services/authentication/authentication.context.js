import React, { useState, createContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        setUser(user);
      } else {
        firebase.auth().onAuthStateChanged((usr) => {
          if (usr) {
            setUser(usr);
          } else {
          }
        });
      }
    };
    getUser();
  }, [user]);

  const onLogin = (email, password) => {
    setIsLoading(true);
    setError(null);

    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        // console.log(u);
        AsyncStorage.setItem("user", JSON.stringify(u));
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    setError(null);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        AsyncStorage.setItem("user", JSON.stringify(u));
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.toString());
        setIsLoading(false);
      });
  };

  const onLogout = async () => {
    await AsyncStorage.removeItem("user");

    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
