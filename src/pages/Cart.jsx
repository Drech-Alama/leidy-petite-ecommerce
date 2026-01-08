import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, getTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="mx-4 py-10 text-center">
        <p className="text-2xl font-bold mb-4">Carrito vacío 🛒</p>

        <Link to="/shop" className="inline-block text-gray-600 underline">
          ← Seleccionar más productos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-4 py-5 max-w-2xl md:mx-auto">
      <Link to="/shop" className="inline-block text-gray-600 underline py-5">
        ← Seleccionar más productos
      </Link>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="mt-4 flex justify-between items-center">
        <p className="font-bold text-xl">Total: S/ {getTotal()}</p>

        <button
          onClick={clearCart}
          className="text-red-600 border border-red-600 px-3 py-2 rounded cursor-pointer"
        >
          Vaciar carrito
        </button>
      </div>

      <Link
        to="/checkout"
        className="block mt-4 bg-[var(--color-medio)] text-white p-3 text-center rounded"
      >
        Ir a pagar
      </Link>
    </div>
  );
}
