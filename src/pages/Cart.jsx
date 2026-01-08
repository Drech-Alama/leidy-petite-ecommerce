import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, getTotal, clearCart } = useCart();

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="mt-4 flex justify-between items-center">
        <p className="font-bold">Total: S/ {getTotal()}</p>

        <button
          onClick={clearCart}
          className="text-red-600 border border-red-600 px-3 py-2 rounded"
        >
          Vaciar carrito
        </button>
      </div>

      <Link
        to="/checkout"
        className="block mt-4 bg-black text-white p-3 text-center rounded"
      >
        Ir a pagar
      </Link>
    </div>
  );
}
