import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
    {
        title: "Información de la marca",
        content: `Leidy Petite es una marca peruana dedicada a la venta de ropa diseñada especialmente para personas petite.\n\nCorreo de contacto: leidypetite@gmail.com\nWhatsApp: +51 912 245 169`,
    },
    {
        title: "Uso del sitio web",
        content: `El uso de este sitio web implica la aceptación de los presentes Términos y Condiciones. El usuario se compromete a utilizar la plataforma de manera responsable y lícita.`,
    },
    {
        title: "Productos y tallas petite",
        content: `Las prendas de Leidy Petite están diseñadas exclusivamente para cuerpos petite, considerando proporciones específicas como el largo de prenda, tiro y ajuste general.

Actualmente trabajamos con las siguientes tallas:

XS-C | S-C | M-C | L-C

Estas tallas corresponden a una clasificación propia de la marca, desarrollada para ofrecer un mejor ajuste en cuerpos petite. Las medidas exactas de cada talla se encuentran detalladas en nuestra guía de tallas, la cual debe ser revisada antes de realizar la compra.

La elección correcta de la talla es responsabilidad del cliente una vez revisada la información proporcionada.`,
    },
    {
        title: "Precios y pagos",
        content: `Todos los precios están expresados en soles (S/) e incluyen el IGV (18%).\n\nAceptamos pagos mediante Yape, Plin y tarjetas. El pedido será procesado una vez confirmado el pago.`,
    },
    {
        title: "Envíos",
        content: `Realizamos envíos gratuitos a nivel nacional. Los tiempos de entrega pueden variar según la ubicación y el operador logístico.`,
    },
    {
        title: "Cambios y devoluciones",
        content: `Aceptamos cambios y devoluciones, siempre que la prenda se encuentre sin uso, en perfectas condiciones y con etiquetas originales.\n\nLos cambios están sujetos a disponibilidad de stock.`,
    },
    {
        title: "Propiedad intelectual",
        content: `Todo el contenido de este sitio web (imágenes, textos, diseños y logotipo) es propiedad de Leidy Petite y está protegido por la legislación vigente.`,
    },
    {
        title: "Ley aplicable",
        content: `Estos términos se rigen por las leyes de la República del Perú.`,
    },
];

function AccordionItem({ title, content }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[#F4E0CF]">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center py-4 text-left cursor-pointer"
            >
                <span className="font-medium text-gray-800">{title}</span>
                <ChevronDown
                    className={`w-5 h-5 text-[#C39479] transition-transform ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div className="pb-4 text-sm text-gray-600 whitespace-pre-line">
                    {content}
                </div>
            )}
        </div>
    );
}

export default function TerminosYCondiciones() {
    return (
        <main className="min-h-screen bg-white px-6 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                    Términos y Condiciones
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                    Última actualización: {new Date().toLocaleDateString("es-PE")}
                </p>

                <div className="space-y-2">
                    {sections.map((section, index) => (
                        <AccordionItem
                            key={index}
                            title={section.title}
                            content={section.content}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
