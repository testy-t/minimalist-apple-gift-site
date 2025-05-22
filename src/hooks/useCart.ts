import { useState } from "react";
import { CartItem } from "@/types";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (value: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.value === value);
      if (existing) {
        return prev.map((item) =>
          item.value === value
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { id: value, value, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartItemsCount,
  };
};
