import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, increaseQty, decreaseQty, getProductQty } = useCart();

  const qty = getProductQty(product.id);

  return (
    <div className="border border-gray-100 rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover mb-3"
      />

      <h3 className="font-semibold text-xl">{product.name}</h3>
      <p className="font-semibold">S/ {product.price}</p>
      <p className="text-gray-600">{product.size}</p>
      <p className="text-gray-600">{product.colors}</p>

      {/* BOTÓN O CONTROLES */}
      {qty === 0 ? (
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-[var(--color-medio)] text-white font-bold py-2 rounded cursor-pointer"
        >
          🛒 Agregar al carrito
        </button>
      ) : (
        <div className="mt-3 flex items-center justify-between">
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
