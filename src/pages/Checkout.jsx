import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, getTotal } = useCart();

  const message = encodeURIComponent(
    cart.map((p) => `• ${p.name} x${p.quantity}`).join("\n") +
      `\nTotal: S/ ${getTotal()}`
  );

  return (
    <div className="max-w-md mx-auto text-center space-y-4 py-5">
      {/* BOTÓN VOLVER */}
      <Link to="/cart" className="inline-block text-gray-600 underline">
        ← Volver al carrito
      </Link>

      {/* QR YAPE */}
      <img src="/img/qr.png" alt="QR Yape" className="mx-auto w-64" />

      <p className="font-semibold">
        Escanea el QR y paga <strong>S/ {getTotal()}</strong>
      </p>

      {/* BOTÓN WHATSAPP */}
      <a
        href={`https://wa.me/51912245169?text=${message}`}
        target="_blank"
        className="bg-[var(--color-medio)] text-white p-4 block rounded"
      >
        Enviar comprobante por WhatsApp
      </a>
    </div>
  );
}
