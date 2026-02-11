import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, getTotal } = useCart();

  const [metodo, setMetodo] = useState("");
  const [tipoEntrega, setTipoEntrega] = useState("");
  const [showModal, setShowModal] = useState(false);

  // DATOS PERSONA
  const [nombreApellido, setNombreApellido] = useState("");

  // DATOS DELIVERY / CONTACTO
  const [distrito, setDistrito] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [mapa, setMapa] = useState("");


  const distritosLima = [
    "Lima",
    "Breña",
    "Jesús María",
    "La Victoria",
    "Lince",
    "Magdalena del Mar",
    "Pueblo Libre",
    "Rímac",
    "San Borja",
    "San Isidro",
    "San Luis",
    "San Miguel",
    "Santiago de Surco",
    "Surquillo",
    "Ancón",
    "Carabayllo",
    "Comas",
    "Independencia",
    "Los Olivos",
    "Puente Piedra",
    "San Martín de Porres",
    "Santa Rosa",
    "Ate",
    "Chaclacayo",
    "Cieneguilla",
    "El Agustino",
    "La Molina",
    "Lurigancho",
    "San Juan de Lurigancho",
    "Santa Anita",
    "Barranco",
    "Chorrillos",
    "Lurín",
    "Pachacámac",
    "Pucusana",
    "Punta Hermosa",
    "Punta Negra",
    "San Bartolo",
    "San Juan de Miraflores",
    "Santa María del Mar",
    "Villa El Salvador",
    "Villa María del Triunfo",
    "Callao",
    "Bellavista",
    "Carmen de la Legua",
    "La Perla",
    "La Punta",
    "Mi Perú",
    "Ventanilla"
  ];

  const infoEntrega = () => {
    if (tipoEntrega === "tienda") {
      return `RECOJO EN TIENDA
Nombre y Apellido: ${nombreApellido}
Correo: ${correo}
Celular: ${celular}

`;
    }

    if (tipoEntrega === "delivery") {
      return `DELIVERY
Nombre y Apellido: ${nombreApellido}
Distrito: ${distrito}
Dirección: ${direccion}
Correo: ${correo}
Celular: ${celular}
Mapa: ${mapa}

`;
    }

    return "";
  };

  const productos = cart
    .map(
      (p) =>
        `${p.name}
• Color: ${p.selectedColor || "-"}
• Cantidad: ${p.quantity}
• Precio: S/ ${p.price}`,
    )
    .join("\n\n");

  const message = encodeURIComponent(
    `${infoEntrega()}PRODUCTOS\n${productos}\n\nTotal: S/ ${getTotal()}`,
  );
  const handleEnviarPago = () => {
    if (!metodo || !tipoEntrega) return;
    setShowModal(true);
  };

  const handleAceptar = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-md mx-auto text-center space-y-6 py-6 px-4">
      <Link to="/cart" className="inline-block text-gray-600 underline">
        ← Volver al carrito
      </Link>

      <h2 className="text-xl font-bold">Selecciona método de pago</h2>

      {/* MÉTODOS DE PAGO */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => setMetodo("tarjeta")}
          className={`w-full p-3 rounded cursor-pointer ${metodo === "tarjeta"
              ? "bg-[var(--color-claro)]"
              : "bg-white"
            }`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            <img src="./img/visa.png" alt="Visa" className="h-8" />
            <img src="./img/mastercard.png" alt="Mastercard" className="h-8" />
            <img src="./img/interbank.svg" alt="Interbank" className="h-8" />
            <img src="./img/bbva.svg" alt="BBVA" className="h-8" />
          </div>
        </button>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setMetodo("yape")}
            className={`flex-1 p-3 rounded cursor-pointer ${metodo === "yape"
                ? "bg-[var(--color-claro)]"
                : "bg-white"
              }`}
          >
            <img src="./img/yape.png" alt="Yape" className="h-20 mx-auto" />
          </button>

          <button
            type="button"
            onClick={() => setMetodo("plin")}
            className={`flex-1 p-3 rounded cursor-pointer ${metodo === "plin"
                ? "bg-[var(--color-claro)]"
                : "bg-white"
              }`}
          >
            <img src="./img/plin.png" alt="Plin" className="h-20 mx-auto" />
          </button>
        </div>
      </div>

      {/* ENTREGA */}
      <h3 className="font-bold">Tipo de entrega</h3>

      <div className="flex gap-4">
        <button
          onClick={() => setTipoEntrega("tienda")}
          className={`flex-1 p-3 rounded cursor-pointer ${tipoEntrega === "tienda"
              ? "bg-[var(--color-claro)]"
              : "bg-white"
            }`}
        >
          Recojo en tienda
        </button>

        <button
          onClick={() => setTipoEntrega("delivery")}
          className={`flex-1 p-3 rounded cursor-pointer ${tipoEntrega === "delivery"
              ? "bg-[var(--color-claro)]"
              : "bg-white"
            }`}
        >
          Delivery
        </button>
      </div>

      {/* FORM RECOJO EN TIENDA */}
      {tipoEntrega === "tienda" && (
        <div className="space-y-3 text-left">

          <div className="bg-gray-100 text-gray-800 p-3 rounded text-sm">
            🛍️ Disponible desde las 9:00 am hasta las 6:00 pm.
          </div>
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className="w-full border rounded p-2"
            value={nombreApellido}
            onChange={(e) => setNombreApellido(e.target.value)}
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full border rounded p-2"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Celular"
            className="w-full border rounded p-2"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
      )}

      {/* FORM DELIVERY */}
      {tipoEntrega === "delivery" && (
        <div className="space-y-3 text-left">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className="w-full border rounded p-2"
            value={nombreApellido}
            onChange={(e) => setNombreApellido(e.target.value)}
          />

          <select
            className="w-full border rounded p-2"
            value={distrito}
            onChange={(e) => setDistrito(e.target.value)}
          >
            <option value="">Selecciona distrito</option>

            {distritosLima.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Dirección"
            className="w-full border rounded p-2"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full border rounded p-2"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Celular"
            className="w-full border rounded p-2"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />

          <input
            type="text"
            placeholder="URL de Google Maps"
            className="w-full border rounded p-2"
            value={mapa}
            onChange={(e) => setMapa(e.target.value)}
          />
        </div>
      )}

      {/* QR */}
      {(metodo === "yape" || metodo === "plin") && (
        <div>
          <img src="./img/qr.png" alt="QR" className="mx-auto w-56 rounded" />
          <p className="font-semibold mt-2">Total: S/ {getTotal()}</p>
        </div>
      )}

      {/* FORM TARJETA */}
      {metodo === "tarjeta" && (
        <div className="space-y-3 text-left border border-[var(--color-medio)] rounded-md p-5">
          <p className="font-medium">Datos de la tarjeta</p>
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
        </div>
      )}

      <button
        onClick={handleEnviarPago}
        disabled={!metodo || !tipoEntrega}
        className="w-full bg-[var(--color-medio)] text-white p-4 rounded disabled:opacity-50 cursor-pointer"
      >
        Enviar pago
      </button>

      <a
        href={`https://wa.me/51912245169?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white p-4 block rounded"
      >
        Enviar carrito por WhatsApp
      </a>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80">
            <h3 className="font-bold text-center">✅ Pago ingresado</h3>
            <button
              onClick={handleAceptar}
              className="w-full mt-4 bg-[var(--color-medio)] text-white py-2 rounded cursor-pointer"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
