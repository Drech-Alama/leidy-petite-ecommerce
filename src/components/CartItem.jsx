import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 border-b py-4">
      {/* IMAGEN */}
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />

      {/* INFO */}
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-600">S/ {item.price}</p>
      </div>

      {/* CONTROLES */}
      <div className="flex items-center gap-2">
        <button onClick={() => decreaseQty(item.id)} className="px-2 border">
          −
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQty(item.id)} className="px-2 border">
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-2 text-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
