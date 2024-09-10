import React, { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "./reducer";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const initialCart = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const [state, dispatch] = useReducer(cartReducer, {
    cart: initialCart(),
  });

  const clearCart = () => {
    dispatch({
      type: "CLEAR_ALL_CART",
    });
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <ShopContext.Provider value={{ state, dispatch, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const CartState = () => {
  return useContext(ShopContext);
};
