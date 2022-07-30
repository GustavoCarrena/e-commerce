import React, { createContext, useMemo, useState } from "react";
import { CartItem } from "../classes/CartItem";

export const Shop = createContext();

export const ShopContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product, counter) => {
    const isInCart = (product) =>
      cart.find((item) => item.product.id === product.id);
    const duplicated = isInCart(product);
    if (duplicated) {
      duplicated.setQuantity(duplicated.quantity + counter);
      setCart([...cart]);
    } else {
      const cartItem = new CartItem(product, counter);
      setCart([...cart, cartItem]);
    }
  };

  const totalCartPrice = useMemo(() => {
    return cart
      .map((item) => parseFloat(item.totalMount()))
      .reduce((prev, curr) => prev + curr, 0)
      .toFixed(2);
  }, [cart]);

  const clearAllCart = () => setCart([]);

  const clearProduct = (product) => {
    const currentCart = [...cart];
    const newCart = currentCart.filter(
      (item) => item.product.id !== product.id
    );
    setCart(newCart);
  };

  return (
    <Shop.Provider
      value={{
        cart,
        setCart,
        addProduct,
        clearProduct,
        clearAllCart,
        totalCartPrice,
      }}
    >
      {children}
    </Shop.Provider>
  );
};
