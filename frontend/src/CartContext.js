// CartContext.js
import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartitem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartitem, item]);
  };

  const removeFromCart = (id) => {
    setCartItem(cartitem.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartitem, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
