import React, { createContext, useContext, useState } from "react";

const CartsContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // check if product already exists
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // increment quantity if exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // add new product
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0) // remove if quantity is 0
    );
  };

  return (
    <CartsContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartsContext.Provider>
  );
};

export const useCart = () => useContext(CartsContext);
