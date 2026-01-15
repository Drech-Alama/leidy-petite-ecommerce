import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import GuiaTallasPantalones from "../components/GuiaTallasPantalones";
import ComentariosLeidyPetite from "../components/ComentariosLeidyPetite";

export default function Shop() {
  const { category, subcategory } = useParams();
  const [search, setSearch] = useState("");

  const filtered = products
    .filter((p) => {
      if (category && subcategory) {
        return p.category === category && p.subcategory === subcategory;
      }
      if (category) {
        return p.category === category;
      }
      return true;
    })
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="flex-1">
      <GuiaTallasPantalones />
      <section className="max-w-7xl mx-auto px-8 py-8">
        <h1 className="text-2xl font-bold mb-4 capitalize">
          {subcategory ? `${category} / ${subcategory}` : category}
        </h1>

        {/* BUSCADOR */}
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border border-[var(--color-medio)] p-2 rounded-md mb-6"
        />

        {/* PRODUCTOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <ComentariosLeidyPetite />
    </main>
  );
}
