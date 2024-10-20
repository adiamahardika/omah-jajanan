import React, { createContext, useState, useContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: (item: any) => {},
  increaseQuantity: (itemId: any) => {},
  decreaseQuantity: (itemId: any) => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item: any) => {
    setCartItems((prevItems: any) => {
      const existingItem = prevItems.find((i: any) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i: any) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (itemId: any) => {
    setCartItems((prevItems: any) =>
      prevItems.map((item: any) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId: any) => {
    setCartItems((prevItems: any) =>
      prevItems
        .map((item: any) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity >= 1 ? item.quantity - 1 : 0 }
            : item
        )
        .filter((item: any) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
