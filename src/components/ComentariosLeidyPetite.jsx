import { useEffect, useRef } from "react";

export default function ComentariosLeidyPetite() {
  const trackRef = useRef(null);

  const comentarios = [
    {
      nombre: "Andrea López",
      comentario:
        "Por fin una marca que entiende a las mujeres petite. El largo es perfecto.",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      nombre: "María Fernanda",
      comentario:
        "Me encantó la calidad y el fit. No tuve que hacer ningún ajuste.",
      foto: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      nombre: "Lucía Torres",
      comentario: "Leidy Petite es mi marca favorita, cómoda y elegante.",
      foto: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      nombre: "Valeria Rojas",
      comentario: "Nunca había encontrado pantalones que me quedaran tan bien.",
      foto: "https://randomuser.me/api/portraits/women/71.jpg",
    },
    {
      nombre: "Camila Díaz",
      comentario: "Diseños hermosos pensados realmente para mujeres petite.",
      foto: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  ];

  // duplicamos para infinito
  const slides = [...comentarios, ...comentarios];

  useEffect(() => {
    const track = trackRef.current;
    let position = 0;

    const move = () => {
      position -= 0.5; // velocidad
      track.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      requestAnimationFrame(move);
    };

    move();
  }, []);

  return (
    <section className="py-20 bg-[#faf7f5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Opiniones de nuestras clientas
          </h2>
          <p className="mt-2 text-gray-500">
            Mujeres petite que aman Leidy Petite
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <div ref={trackRef} className="flex gap-6 w-max">
            {slides.map((item, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[320px] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
              >
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  “{item.comentario}”
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.foto}
                    alt={item.nombre}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.nombre}
                    </h4>
                    <span className="text-xs text-gray-400">
                      Clienta Leidy Petite
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
