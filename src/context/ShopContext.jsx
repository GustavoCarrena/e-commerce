import React, { createContext, useState } from "react";

export const Shop = createContext();

export const ShopContext = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const isInCart = (product) => cart.find((p) => p.id === product.id);
  const newCart = (product) => cart.filter((p) => p !== product); 
  
  const addProduct = (product, counter) => {
    const duplicateProductInCart = isInCart(product);
    if (duplicateProductInCart) {
      duplicateProductInCart.quantity += counter;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: counter }]);
    }
  };
  
  const clear = {
    product: (product) => setCart(newCart(product)),
    allCart:  () => setCart([])
  };

  const totalProductPrice = (price, quantity) => price* quantity;

  // const deleteProduct = (product) => setCart(newCart(product));
  // const deleteAllProducts = () => setCart([]);

  return (
    <Shop.Provider value={{cart, setCart, addProduct, clear, totalProductPrice}}>
      {children}
    </Shop.Provider>
  );
};
