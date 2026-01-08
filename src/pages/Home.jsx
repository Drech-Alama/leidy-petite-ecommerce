import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "all" || p.category === category;

    return matchesName && matchesCategory;
  });

  return (
    <>
      <div className="mx-auto max-w-7xl my-5 px-5">
        {/* FILTROS */}
        <div className="flex flex-col md:flex-row gap-4 mb-5">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="border p-2 flex-1 rounded-md"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded-md"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="vestido">Vestido</option>
            <option value="ropa">Ropa</option>
          </select>
        </div>

        {/* PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
