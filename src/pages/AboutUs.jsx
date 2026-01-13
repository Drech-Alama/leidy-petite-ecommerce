export default function AboutUs() {
  return (
    <section className="w-full">
      {/* HERO */}
      <div className="relative rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-medio)]">
            Sobre Leidy Petite
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-black">
            Moda diseñada exclusivamente para mujeres petite que buscan estilo,
            comodidad y un ajuste perfecto.
          </p>
        </div>
      </div>

      {/* MISIÓN Y VISIÓN */}
      <section className="relative bg-[url('/img/misionVision.webp')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-24">
          {/* Misión */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Nuestra Misión
            </h2>
            <p className="text-gray-200 text-lg">
              En Leidy Petite, nuestra misión es crear prendas de alta calidad
              diseñadas especialmente para mujeres de talla petite, que resalten
              su confianza y belleza natural. Buscamos ofrecer estilo, comodidad
              y un ajuste perfecto, cuidando cada detalle, desde la elección de
              los materiales hasta el acabado de cada prenda. Queremos que cada
              mujer petite se sienta segura, elegante y cómoda,
              independientemente de la ocasión, reflejando su personalidad única
              a través de la moda.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Nuestra Visión
            </h2>
            <p className="text-white text-lg">
              Aspiramos a ser una marca líder en moda petite, reconocida tanto a
              nivel nacional como internacional por la calidad de nuestras
              prendas, la atención al detalle y nuestro compromiso con la
              comunidad. Queremos inspirar a otras mujeres a sentirse
              empoderadas y seguras con ropa que realmente les queda, derribando
              los estándares de talla convencional y mostrando que la moda
              petite también puede ser tendencia, innovadora y versátil.
            </p>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="max-w-7xl mx-auto p-1 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 mb-4">
            Leidy Petite nació de una necesidad real: encontrar prendas modernas
            que realmente se adapten a mujeres de talla petite. Tras años de
            ajustar ropa que nunca parecía hecha para cuerpos pequeños,
            decidimos crear una marca pensada desde el patronaje hasta el último
            detalle.
          </p>
          <p className="text-gray-600">
            Lo que comenzó como un proyecto personal se ha convertido en una
            marca enfocada en empoderar a mujeres petite a través de la moda.
          </p>
        </div>
        <div className="h-80 bg-gray-200 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="../img/historia.jpg"
            alt="Imagen de historia"
          />
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-[var(--color-medio)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Nuestro Equipo
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-blue-300 overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src="../img/fundadora.webp"
                  alt="Fundadora Leidy"
                />
              </div>
              <h3 className="font-bold text-lg text-white">Leidy</h3>
              <p className="text-sm text-white">Fundadora y Diseñadora</p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-blue-300 overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src="../img/equipoProduccion.jpg"
                  alt="Fundadora Leidy"
                />
              </div>
              <h3 className="font-bold text-lg text-white">
                Equipo de Producción
              </h3>
              <p className="text-sm text-white">
                Expertos en confección y detalles
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-blue-300 overflow-hidden shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  src="../img/controlCalidad.jpg"
                  alt="Fundadora Leidy"
                />
              </div>
              <h3 className="font-bold text-lg text-white">
                Control de Calidad
              </h3>
              <p className="text-sm text-white">
                Garantizando el ajuste perfecto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Nuestros Valores
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Inclusión real",
            "Calidad premium",
            "Diseño pensado para mujeres petite",
            "Honestidad y transparencia",
            "Cercanía con nuestras clientas",
            "Pasión por la moda",
          ].map((valor) => (
            <div
              key={valor}
              className="border border-[var(--color-medio)] rounded-xl p-4 text-center text-black"
            >
              {valor}
            </div>
          ))}
        </div>
      </section>

      {/* LOGROS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Nuestros Logros
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-[var(--color-medio)]">
              1,000+
            </p>
            <p className="text-gray-700">Clientas satisfechas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[var(--color-medio)]">10+</p>
            <p className="text-gray-700">Colecciones exclusivas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[var(--color-medio)]">5★</p>
            <p className="text-gray-700">Reseñas positivas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[var(--color-medio)]">100%</p>
            <p className="text-gray-700">Enfocado en talla petite</p>
          </div>
        </div>
      </section>
    </section>
  );
}
