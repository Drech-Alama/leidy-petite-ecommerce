import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  // Mapa de colores para Tailwind
  const colorMap = {
    Blanco: "bg-white border",
    Negro: "bg-black",
    Azul: "bg-blue-600",
    Rojo: "bg-red-600",
    Verde: "bg-green-600",
    Gris: "bg-gray-400",
    Marrón: "bg-amber-800",
    Plateado: "bg-gray-300",
    Plomo: "bg-gray-500",
  };

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

        {/* COLOR */}
        {item.selectedColor && (
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`w-4 h-4 rounded-full ${
                colorMap[item.selectedColor] || "bg-gray-300"
              }`}
            />
            <span className="text-sm text-gray-600">{item.selectedColor}</span>
          </div>
        )}
      </div>

      {/* CONTROLES */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-2 border rounded"
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-2 border rounded"
        >
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
