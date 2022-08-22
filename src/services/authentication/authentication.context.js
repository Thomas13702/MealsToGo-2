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
      const user1 = await AsyncStorage.getItem("user");
      // console.log(user1);

      if (user1) {
        setUser(JSON.parse(user1));
      } else {
        setUser(null);
      }
      // else {
      //   firebase.auth().onAuthStateChanged((usr) => {
      //     if (usr) {
      //       setUser(usr);
      //     } else {
      //     }
      //   });
      // }
    };
    getUser();
  }, []);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const u = await loginRequest(email, password);
      setUser(u);
      await AsyncStorage.setItem("user", JSON.stringify(u));
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }

    // loginRequest(email, password)
    //   .then((u) => {
    //     setUser(u);
    //     // console.log(u);
    //     AsyncStorage.setItem("user", u);
    //     setIsLoading(false);
    //     setError(null);
    //   })
    //   .catch((error) => {
    //     setError(error.toString());
    //     setIsLoading(false);
    //   });
  };

  const onRegister = async (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const u = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      setUser(u);
      await AsyncStorage.setItem("user", JSON.stringify(u));
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((u) => {
    //     setUser(u);
    //     AsyncStorage.setItem("user", u);
    //     setIsLoading(false);
    //     setError(null);
    //   })
    //   .catch((error) => {
    //     setError(error.toString());
    //     setIsLoading(false);
    //   });
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
        console.log("error", error);
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
