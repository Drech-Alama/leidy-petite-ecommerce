import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, getTotal, clearCart } = useCart();
  const [metodo, setMetodo] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Modifiqué aquí
  const message = encodeURIComponent(
    cart
      .map(
        (p) =>
          `${p.name}
• Color: ${p.selectedColor || "-"}
• Cantidad: ${p.quantity}
• Precio: S/ ${p.price}`,
      )
      .join("\n\n") + `\n\nTotal: S/ ${getTotal()}`,
  );

  const handleEnviarPago = () => {
    if (!metodo) return;
    setShowModal(true);
  };

  const handleAceptar = () => {
    // clearCart(); // 🧹 vacía el carrito
    setShowModal(false);
    // window.location.href = "/";
  };

  return (
    <div className="max-w-md mx-auto text-center space-y-6 py-6 px-4">
      {/* VOLVER */}
      <Link to="/cart" className="inline-block text-gray-600 underline">
        ← Volver al carrito
      </Link>

      <h2 className="text-xl font-bold">Selecciona método de pago</h2>

      {/* MÉTODOS */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => setMetodo("tarjeta")}
          className={`w-full p-3 rounded cursor-pointer ${
            metodo === "tarjeta" ? "bg-[var(--color-claro)]" : "bg-white"
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <img
              src="./img/visa.png"
              alt="Visa"
              className="h-8 object-contain"
            />
            <img
              src="./img/mastercard.png"
              alt="Mastercard"
              className="h-8 object-contain"
            />
            <img
              src="./img/interbank.svg"
              alt="Interbank"
              className="h-8 object-contain"
            />
            <img
              src="./img/bbva.svg"
              alt="BBVA"
              className="h-8 object-contain"
            />
          </div>
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setMetodo("yape")}
            className={`flex-1 p-3 rounded flex items-center justify-center cursor-pointer ${
              metodo === "yape" ? "bg-[var(--color-claro)]" : "bg-white"
            }`}
          >
            <img
              src="./img/yape.png"
              alt="Yape"
              className="h-20 object-contain"
            />
          </button>

          <button
            type="button"
            onClick={() => setMetodo("plin")}
            className={`flex-1 p-3 rounded flex items-center justify-center cursor-pointer ${
              metodo === "plin" ? "bg-[var(--color-claro)]" : "bg-white"
            }`}
          >
            <img
              src="./img/plin.png"
              alt="Plin"
              className="h-20 object-contain"
            />
          </button>
        </div>
      </div>

      {/* FORM TARJETA */}
      {metodo === "tarjeta" && (
        <div className="space-y-3 text-left">
          <input
            type="text"
            placeholder="Nombre del titular"
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Número de tarjeta"
            maxLength="19"
            className="w-full border rounded p-2"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="MM/AA"
              maxLength="5"
              className="w-1/2 border rounded p-2"
            />
            <input
              type="password"
              placeholder="CVV"
              maxLength="4"
              className="w-1/2 border rounded p-2"
            />
          </div>
          {/* <p className="text-sm text-gray-500 text-center">
            Pago simulado • No se almacenan datos
          </p> */}
        </div>
      )}

      {/* QR */}
      {(metodo === "yape" || metodo === "plin") && (
        <div>
          <img
            src={metodo === "yape" ? "./img/qr.png" : "./img/qr.png"}
            alt="QR Pago"
            className="mx-auto w-56 border rounded-xl"
          />
          <p className="font-semibold mt-2">
            Escanea el QR y paga S/ {getTotal()}
          </p>
        </div>
      )}

      {/* ENVIAR */}
      <button
        type="button"
        onClick={handleEnviarPago}
        disabled={!metodo}
        className="w-full bg-[var(--color-medio)] text-white p-4 rounded disabled:opacity-50 cursor-pointer"
      >
        Enviar pago
      </button>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/51912245169?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white p-4 block rounded"
      >
        Enviar carrito de compras y comprobante por WhatsApp
      </a>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 space-y-4">
            <h3 className="text-lg font-bold text-center">✅ Pago ingresado</h3>
            <button
              type="button"
              onClick={handleAceptar}
              className="w-full bg-[var(--color-medio)] text-white py-2 rounded cursor-pointer"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
