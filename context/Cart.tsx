import React, { createContext, useState, useContext } from "react";

const CartContext = createContext<any | null>(null);

// We wrap the provider in a nice little component
// which will hold the state and provide methods to
// update the state
interface Props {
  children: React.ReactNode;
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState({
    language: "",
    problemType: "",
    plan: "60",
    price: "2099",
  });

  const updateCart = (name: string, value: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <CartContext.Provider value={{ ...data, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Here we create a custom hook that allows us to consume
// the todo context
function useCartContext() {
  return useContext(CartContext);
}

export { CartProvider, useCartContext };
