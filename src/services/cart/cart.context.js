import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      console.log(restaurant);
      setRestaurant(rst);
      setCart([item]);
      return;
    }
    setCart([...cart, item]);
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{ addToCart: add, removeFromCart: clear, restaurant, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};
