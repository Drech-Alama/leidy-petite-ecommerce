import { useState } from "react";

export default function GuiaTallasPantalones() {
  const [current, setCurrent] = useState(0);

  const tablas = [
    {
      titulo: "PANTALONES",
      filas: [
        ["TALLAS", "(XS-C)", "(S-C)", "(M-C)", "(L-C)"],
        ["CINTURA", "64", "70", "76", "82"],
        ["LARGO", "85", "87", "89", "91"],
      ],
    },
    {
      titulo: "POLOS",
      filas: [
        ["TALLAS", "(XS-C)", "(S-C)", "(M-C)", "(L-C)"],
        ["BUSTO", "80-86", "86-90", "90-94", "95-101"],
        ["LARGO DESDE HOMBRO", "50", "52", "54", "56"],
      ],
    },
    {
      titulo: "VESTIDOS",
      filas: [
        ["TALLA", "(XS-C)", "(S-C)", "(M-C)", "(L-C)"],
        ["BUSTO", "80-86", "86-90", "90-94", "95-101"],
        ["CINTURA", "62-66", "66-70", "70-74", "75-81"],
        ["LARGO", "72", "73", "74", "75"],
      ],
    },
  ];

  const next = () => {
    setCurrent((prev) => (prev + 1) % tablas.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? tablas.length - 1 : prev - 1));
  };

  return (
    <section
      className="relative py-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('img/fondoTabla.jfif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Guía de Tallas</h2>
          <p className="mt-2 text-gray-200 text-xl">
            Encuentra la talla perfecta para tus prendas
          </p>
        </div>

        {/* Slider + Card container */}
        <div className="flex flex-col items-center lg:flex-row gap-8 lg:items-stretch">

          {/* Card Mensaje */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-full max-w-xl bg-[var(--color-claro)] rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center opacity-80">
              <h3 className="text-xl font-bold mb-4">
                HECHO A TU TALLA PETITE
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Todas las prendas que se ofrecen son especializadas para tallas petite,
                con nuevo molde y tallas diferentes a las que se ofrecen en el mercado.
              </p>
            </div>
          </div>

          {/* Slider */}
          <div className="relative overflow-hidden w-full lg:w-2/3">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {tablas.map((tabla, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-center text-lg font-semibold mb-4 text-gray-800">
                      {tabla.titulo}
                    </h3>

                    <table className="w-full border border-gray-200 text-center text-sm rounded-lg overflow-hidden">
                      <tbody>
                        {tabla.filas.map((fila, i) => (
                          <tr
                            key={i}
                            className={
                              i === 0
                                ? "bg-[var(--color-claro)] font-semibold"
                                : ""
                            }
                          >
                            {fila.map((celda, j) => (
                              <td
                                key={j}
                                className={`border px-2 py-2 ${j === 0
                                    ? "font-semibold text-gray-800"
                                    : "text-gray-700"
                                  }`}
                              >
                                {celda}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-md text-center text-black font-semibold mt-4">
                      Talla C "corto": Diseñada especialmente para personas
                      "petite".
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botones */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[var(--color-claro)] text-gray-800 w-10 h-10 rounded-full shadow flex items-center justify-center cursor-pointer"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[var(--color-claro)] text-gray-800 w-10 h-10 rounded-full shadow flex items-center justify-center cursor-pointer"
            >
              ›
            </button>
          </div>

        </div>
        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-8">
          {tablas.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition cursor-pointer ${current === index
                  ? "bg-[var(--color-claro)] scale-110"
                  : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
