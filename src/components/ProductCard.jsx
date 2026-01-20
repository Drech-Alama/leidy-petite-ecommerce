import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, increaseQty, decreaseQty, getProductQty } = useCart();
  const qty = getProductQty(product.id);

  // Color por defecto = primer color
  const [selectedColor, setSelectedColor] = useState(
    Array.isArray(product.colors) ? product.colors[0] : null,
  );

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
    Arena: "bg-orange-200",
    Beige: "bg-stone-200",
    Camell: "bg-yellow-800",
    Rosado: "bg-rose-400",
    Celeste: "bg-blue-200",
  };

  return (
    <div className="border border-gray-100 rounded-lg p-4 shadow-md bg-white">
      {/* IMAGEN */}
      <img
        src={product.image}
        alt={product.name}
        className="h-80 w-full object-cover mb-3 rounded"
      />

      {/* INFO */}
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="font-bold text-lg">S/ {product.price}</p>

      {/* TALLAS */}
      {Array.isArray(product.size) && (
        <p className="text-gray-600 text-sm mt-1">
          Tallas: {product.size.join(" · ")}
        </p>
      )}

      {/* COLORES */}
      {Array.isArray(product.colors) && (
        <div className="mt-2">
          <p className="text-sm text-gray-600 mb-1">Colores</p>
          <div className="flex items-center gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                type="button"
                title={color}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full transition border-2 cursor-pointer
                  ${colorMap[color] || "bg-gray-300"}
                  ${
                    selectedColor === color
                      ? "ring-1 ring-black scale-110"
                      : "border-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* BOTÓN / CONTROLES */}
      {qty === 0 ? (
        <button
          onClick={() =>
            addToCart({
              ...product,
              selectedColor,
            })
          }
          className="mt-4 w-full bg-[var(--color-medio)] text-white font-bold py-2 rounded"
        >
          🛒 Agregar al carrito
        </button>
      ) : (
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => decreaseQty(product.id)}
            className="px-3 py-1 border rounded"
          >
            −
          </button>

          <span className="font-semibold">{qty}</span>

          <button
            onClick={() => increaseQty(product.id)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
