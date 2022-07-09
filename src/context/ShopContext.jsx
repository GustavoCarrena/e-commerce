import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const Shop = createContext();

export const ShopContext = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  const [mount, setMount] = useState([]);

  const isInCart = (product) => cart.find((p) => p.id === product.id);
  const newCart = (product) => cart.filter((p) => p.id !== product.id);
  const newMount = () => mount.filter(m => m ); 
  // const newMount = (product) => {
  //   newCart.map((p) => p === product).reduce((prev,curr) => prev + curr,0)

  // }


  
  
  const addProduct = (product, counter) => {
    const duplicateProductInCart = isInCart(product);
    if (duplicateProductInCart) {
      duplicateProductInCart.quantity += counter;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: counter }]);
    }
  };
  
  const totalProductPrice = (price, quantity) => price * quantity;
  
  const totalCartPrice = () => {
    setMount([cart.map(item => (item.price.toFixed(2) * item.quantity)).reduce((prev,curr) => prev + curr,0)])
  };
  
  const clearAllCart = () => setCart([]);
  
  const clearProduct = (product) => {
    setCart(newCart(product));
    setMount(newMount())
  };


  
  
  
  return (
    <Shop.Provider value={{cart, setCart, addProduct, clearProduct, clearAllCart,totalProductPrice, totalCartPrice, mount}}>
      {children}
    </Shop.Provider>
  );
};
