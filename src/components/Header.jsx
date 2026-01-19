import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileCat, setOpenMobileCat] = useState(null);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setOpenMobileCat(null);
  };

  const categories = [
    {
      name: "Diario",
      slug: "diario",
      sub: ["polos", "pantalones", "faldas", "chompas", "shorts"],
    },
    {
      name: "Casual",
      slug: "casual",
      sub: ["blusas", "pantalones", "faldas", "conjuntos"],
    },
    {
      name: "Formal",
      slug: "formal",
      sub: ["vestidos", "blazers", "conjuntos", "blusas", "pantalones"],
    },
    {
      name: "Deporte",
      slug: "sport",
      sub: ["Polos", "Pantalones", "Busos", "Tops", "Faldas-Shorts"],
    },
    {
      name: "Gala",
      slug: "gala",
      sub: ["Vestidos Elegantes"],
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-claro)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <img
            className="w-40"
            src="/img/logoLeidyPetitePositivo.png"
            alt="Logo Leidy Petite"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/shop"
            className="font-semibold hover:text-[var(--color-medio)]"
          >
            Tienda
          </Link>

          {categories.map((cat) => (
            <div key={cat.name} className="relative group">
              <span className="cursor-pointer font-semibold hover:text-[var(--color-medio)]">
                {cat.name}
              </span>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {cat.sub.map((sub) => (
                  <Link
                    key={sub}
                    to={`/shop/${cat.slug}/${sub.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            to="/about"
            className="font-semibold hover:text-[var(--color-medio)]"
          >
            Nosotros
          </Link>
          {/* <Link to="/contact" className="font-semibold hover:text-[var(--color-medio)]">
            Contacto
          </Link> */}

          <Link to="/cart" className="relative font-semibold">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          {categories.map((cat) => {
            const isOpen = openMobileCat === cat.name;

            return (
              <div key={cat.name} className="border-b pb-2">
                {/* Categoría */}
                <button
                  className="w-full flex justify-between items-center font-semibold py-2"
                  onClick={() => {
                    setOpenMobileCat(isOpen ? null : cat.name);
                  }}
                >
                  {cat.name}
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Subcategorías */}
                {isOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {cat.sub.map((sub) => (
                      <Link
                        key={sub}
                        to={`/shop/${cat.slug}/${sub.toLowerCase()}`}
                        className="block text-gray-600"
                        onClick={closeMobileMenu}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Links simples */}
          <Link
            to="/about"
            className="block font-semibold"
            onClick={closeMobileMenu}
          >
            Nosotros
          </Link>

          {/* <Link
            to="/contact"
            className="block font-semibold"
            onClick={closeMobileMenu}
          >
            Contacto
          </Link> */}

          <Link
            to="/cart"
            className="block font-semibold"
            onClick={closeMobileMenu}
          >
            🛒 Carrito ({totalItems})
          </Link>
        </div>
      )}
    </header>
  );
}
