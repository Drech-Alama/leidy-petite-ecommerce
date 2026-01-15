import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // cambie esto
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find(
        (p) => p.id === product.id && p.selectedColor === product.selectedColor
      );

      if (exist) {
        return prev.map((p) =>
          p.id === product.id && p.selectedColor === product.selectedColor
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCart(
      cart.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );

  const decreaseQty = (id) =>
    setCart(
      cart
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0)
    );

  const removeFromCart = (id) => setCart(cart.filter((p) => p.id !== id));

  const getTotal = () => cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  //CLAVE PARA EL CARD
  const getProductQty = (id) => cart.find((p) => p.id === id)?.quantity || 0;

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        getTotal,
        getProductQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
