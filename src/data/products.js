const products = [
  //Sección Diario
  // Polos
  {
    id: 1,
    name: "Polo Ajustado Tela Algodón",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Azul", "Blanco"],
    category: "diario",
    subcategory: "polos",
    price: 55,
    image: "/prendas/ropa-diario/polos/ajustadoTelaAlgodon.webp",
  },
  {
    id: 2,
    name: "Polo Corto Manga Larga",
    size: ["XS-C", "S-C", "M-C"],
    colors: ["Rojo", "Gris", "Marrón"],
    price: 60,
    category: "diario",
    subcategory: "polos",
    image: "/prendas/ropa-diario/polos/cortoMangalarga.avif",
  },
  {
    id: 3,
    name: "Polo Manga Corta",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Verde", "Blanco"],
    price: 48,
    category: "diario",
    subcategory: "polos",
    image: "/prendas/ropa-diario/polos/mangaCortaTelaJersey.webp",
  },
  {
    id: 4,
    name: "Polo Manga Corta Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Plomo", "Rojo"],
    price: 35,
    category: "diario",
    subcategory: "polos",
    image: "/prendas/ropa-diario/polos/mangaCortaTelaPoliester.avif",
  },
  {
    id: 5,
    name: "Polo Oversize Tela Algodón",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Plateado", "Negro", "Gris"],
    price: 49,
    category: "diario",
    subcategory: "polos",
    image: "/prendas/ropa-diario/polos/oversizeTelaAlgodon.avif",
  },
  // Pantalones
  {
    id: 6,
    name: "Pantalón Denim Estilo Culotte",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Negro", "Celeste", "Gris"],
    price: 160,
    category: "diario",
    subcategory: "pantalones",
    image: "/prendas/ropa-diario/pantalones/denimEstiloCulotte.avif",
  },
  {
    id: 7,
    name: "Pantalón Denim Estilo Flare",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Negro", "Gris"],
    price: 140,
    category: "diario",
    subcategory: "pantalones",
    image: "/prendas/ropa-diario/pantalones/denimEstiloFlare.avif",
  },
  {
    id: 8,
    name: "Pantalón Denim Estilo Skinny",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Negro", "Gris"],
    price: 145,
    category: "diario",
    subcategory: "pantalones",
    image: "/prendas/ropa-diario/pantalones/denimEstiloSkini.avif",
  },
  {
    id: 9,
    name: "Pantalón Denim Estilo Straight",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Negro", "Plomo"],
    price: 159,
    category: "diario",
    subcategory: "pantalones",
    image: "/prendas/ropa-diario/pantalones/denimEstiloStraing.avif",
  },
  {
    id: 10,
    name: "Pantalón Militar Estilo Recto",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Verde", "Negro"],
    price: 150,
    category: "diario",
    subcategory: "pantalones",
    image: "/prendas/ropa-diario/pantalones/militarEstiloRecto.avif",
  },
  // Faldas
  {
    id: 11,
    name: "Falda Carrugado Tela Rib",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Negro", "Azul"],
    price: 130,
    category: "diario",
    subcategory: "faldas",
    image: "/prendas/ropa-diario/faldas/carrugadoTelaRib.avif",
  },
  {
    id: 12,
    name: "Mini Falda con Cortes Tela Corduroy",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Beige", "Blanco"],
    price: 135,
    category: "diario",
    subcategory: "faldas",
    image: "/prendas/ropa-diario/faldas/conCortesTelaCorduroy.avif",
  },
  {
    id: 13,
    name: "Falda Recto Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Celeste", "Gris"],
    price: 129,
    category: "diario",
    subcategory: "faldas",
    image: "/prendas/ropa-diario/faldas/rectoTelaDenim.webp",
  },
  {
    id: 14,
    name: "Falda Short Cargo Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Celeste", "Gris"],
    price: 140,
    category: "diario",
    subcategory: "faldas",
    image: "/prendas/ropa-diario/faldas/shortCargoTelaDenim.avif",
  },
  {
    id: 15,
    name: "Falda Shorts Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Plomo", "Negro"],
    price: 149,
    category: "diario",
    subcategory: "faldas",
    image: "/prendas/ropa-diario/faldas/shortTelaDenim.avif",
  },

  // Chalecos, chompas y abrigos
  {
    id: 16,
    name: "Casaca con Capucha a la Cintura Tela Denim con Franela",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Negro", "Celeste"],
    price: 159,
    category: "diario",
    subcategory: "chompas",
    image:
      "/prendas/ropa-diario/chalecos-chompas-abrigos/CasacaconcapuchaalacinturaTeladenimconfranela.avif",
  },
  {
    id: 17,
    name: "Chaleco Denim Cuello V",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Celeste"],
    price: 140,
    category: "diario",
    subcategory: "chompas",
    image:
      "/prendas/ropa-diario/chalecos-chompas-abrigos/ChalecoDenimcuelloV.avif",
  },
  {
    id: 18,
    name: "Chompa Cuello Redondo Tela-Algodón",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Beige", "Negro"],
    price: 120,
    category: "diario",
    subcategory: "chompas",
    image:
      "/prendas/ropa-diario/chalecos-chompas-abrigos/ChompacuelloredondoTela-Algodon.avif",
  },
  {
    id: 19,
    name: "Chompa de Hilo Cuello V",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Beige", "Gris"],
    price: 139,
    category: "diario",
    subcategory: "chompas",
    image:
      "/prendas/ropa-diario/chalecos-chompas-abrigos/ChompadehilocuelloV.avif",
  },
  {
    id: 20,
    name: "Chompa Overzise con Capucha Tela-Algodón",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Rojo", "Negro", "Beige"],
    price: 140,
    category: "diario",
    subcategory: "chompas",
    image:
      "/prendas/ropa-diario/chalecos-chompas-abrigos/ChompaOverziseconcapuchaTela-Algodon.avif",
  },
  {
    id: 21,
    name: "Polera con Capucha Tela Jersey",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Marrón", "Negro", "Beige"],
    price: 120,
    category: "diario",
    subcategory: "chompas",
    image:
      "/prendas/ropa-diario/chalecos-chompas-abrigos/PoleraconCapuchaTelaJersey.avif",
  },
  // Shorts
  {
    id: 22,
    name: "Short Bermuda Tela-Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Negro", "Gris", "Celeste"],
    price: 109,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortbermudaTela-Denim.avif",
  },
  {
    id: 23,
    name: "Short Cargo Cintura Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Azul", "Plomo", "Gris"],
    price: 99,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortcargocinturaTelaDenim.avif",
  },
  {
    id: 24,
    name: "Short Clásico Cintura Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Azul"],
    price: 90,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortClasicocinturaTelaDenim.avif",
  },
  {
    id: 25,
    name: "Short Corto Vaquero Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Azul", "Negro"],
    price: 80,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortcortovaqueroTelaDenim.avif",
  },
  {
    id: 26,
    name: "Short Falda a la Cintura Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Negro", "Azul"],
    price: 120,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortFaldaalacinturaTelaDenim.avif",
  },

  //Sección Casual
  // Blusas
  {
    id: 27,
    name: "Blusa Ajustada Manga Larga Tela-Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Rojo", "Azul", "Marrón"],
    price: 120,
    category: "casual",
    subcategory: "blusas",
    image:
      "/prendas/ropa-casual/blusas/BlusaajustadaMangalargaTela-Poliester.avif",
  },
  {
    id: 28,
    name: "Blusa Manga Corta con Rayas Tela Chalis",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Beige"],
    price: 110,
    category: "casual",
    subcategory: "blusas",
    image: "/prendas/ropa-casual/blusas/BlusamangacortaconrayasTelaChalis.avif",
  },
  {
    id: 29,
    name: "Blusa con Manga. Estilo Corto Tela-Camisero",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Celeste", "Plomo"],
    price: 119,
    category: "casual",
    subcategory: "blusas",
    image:
      "/prendas/ropa-casual/blusas/BlusamangaEstilocortoTela-Camisero.avif",
  },
  {
    id: 30,
    name: "Blusa Manga Larga Estilo Corto Tela-Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Rojo", "Blanco"],
    price: 100,
    category: "casual",
    subcategory: "blusas",
    image:
      "/prendas/ropa-casual/blusas/BlusamangalargaEstilocortoTela-Popelina.avif",
  },
  {
    id: 31,
    name: "Blusa Manga Larga Oversize Tela-Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Arena", "Negro"],
    price: 129,
    category: "casual",
    subcategory: "blusas",
    image:
      "/prendas/ropa-casual/blusas/BlusamangalargaoversizeTela-Poliester.avif",
  },

  //Pantalones
  {
    id: 32,
    name: "Pantalon a la Cintura con Bolsillos Delanteros y Basta Ajustable Estilo Wide Leg Tela Drill",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Negro", "Marrón"],
    price: 130,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantalonalacinturaconbolsillosdelanterosybastaajustableEstilowidelegTelaDrill.avif",
  },
  {
    id: 33,
    name: "Pantalon Cargo Semicadera Tela Tafeta",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Beige", "Marrón"],
    price: 125,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantaloncargosemicaderaTelaTafeta.avif",
  },
  {
    id: 34,
    name: "Pantalon Oversize con Ajuste de Largo de Pierna Tela Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Beige", "Marrón"],
    price: 120,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantalonoversizeconajustedelargodepiernaTelapopelina.avif",
  },
  {
    id: 35,
    name: "Pantalon Palazo a la Cintura Basta con Ajustes Tela Corduroy",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Beige", "Negro", "Marrón"],
    price: 149,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantalonpalazoalacinturaBastaconajustesTelaCorduroy.avif",
  },
  {
    id: 36,
    name: "Pantalon Versatil y Cómodo Estilo Recto Tela Rayon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Beige", "Azul"],
    price: 135,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantalonversatilycomodoEstilorectoTelaRayon.avif",
  },

  // Faldas
  {
    id: 37,
    name: "Falda Casual Estilo Cargo con Detalle de Botones. Diseño Versátil con aberturas Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Negro", "Blanco"],
    price: 129,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/FaldacasualestilocargocondetalledebotonesDiseñoversatilconaberturasTelaPoliester.avif",
  },
  {
    id: 38,
    name: "Falda Corta de Cuero Cintura Alta y Ajustada",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Marrón", "Negro"],
    price: 110,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/FaldacortadecueroCinturaaltayajustada.avif",
  },
  {
    id: 39,
    name: "Falda Pomposa de Cintura Alta Tela Tafeta",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Beige", "Marrón"],
    price: 140,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/FaldapomposadecinturaaltaTelaTafeta.avif",
  },
  {
    id: 40,
    name: "Falda Vintage de Tiro Alto con Abertura Tela Drill",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Beige", "Plomo"],
    price: 135,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/FaldaVintagedeTiroAltoconAberturaTelaDrill.avif",
  },
  {
    id: 41,
    name: "Mini Falda a la Cintura con Cierre Invisible Diseño Moderno y Elegante Tela Gamuza Sintética",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Beige", "Camell", "Marrón"],
    price: 119,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/MinifaldaalacinturaconcierreinvisibleDisenomodernoyeleganteTelaGamuzasintetica.avif",
  },

  //Conjuntos
  {
    id: 42,
    name: "Conjunto de Dos Piezas Corte Moderno y Femenino Tela Fresca y Cómoda",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Rojo", "Camell"],
    price: 139,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntodedospiezascortemodermoyfemeninoTelafrescaycomoda.avif",
  },
  {
    id: 43,
    name: "Conjunto De dos Piezas Short Falda con Blusa Manga Corta Tela Camisero",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Beige", "Negro"],
    price: 149,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntodedospiezasShortfaldaconblusamangacortaTelacamisero.avif",
  },
  {
    id: 44,
    name: "Conjunto Elegante Blusa Cuello Corbata con Short Clásico Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Azul", "Gris"],
    price: 169,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntoeleganteBlusacuellocorbataconshortclasicoTelaPoliester.avif",
  },
  {
    id: 45,
    name: "Conjunto Elegante De dos Piezas. Top Corto y Pantalones Anchos Tela Camisero",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Marrón", "Negro"],
    price: 150,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntoelegantededospiezasTopcortoypantalonesanchosTelacamisero.avif",
  },
  {
    id: 46,
    name: "Conjunto Pantalones Estilo Recto con Blusa Cortas sin Mangas Material Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Verde", "Marrón", "Beige"],
    price: 169,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntoPantalonestilorectoconblusacortasinmangasMaterialPoliester.avif",
  },

  // Sección Formal
  //Vestidos
  {
    id: 47,
    name: "Traje de Falda con Doble Botonadura y Escote en V con Espalda Abierta Tela satín",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rojo", "Negro", "Arena"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/TrajedeFaldaconDobleBotonadurayEscoteenVconEspaldaAbiertaTelaSaltin.avif",
  },
  {
    id: 48,
    name: "Vestido Camisero Elegante Manga Larga, Corte en A Tela Poliéster.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Marrón", "Negro"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/VestidocamiseroelegantemangalargacorteenATelapoliester.avif",
  },
  {
    id: 49,
    name: "Vestido con Cuello V, Botones Decorativos y Basta Faldón con Ajuste",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Beige", "Rojo", "Azul"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/VestidoconcuelloVbotonesdecorativosybastafaldonconajuste.avif",
  },
  {
    id: 50,
    name: "Vestido Corto con Escote Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Rojo", "Marrón"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/VestidocortoconescoteTelapoliester.avif",
  },
  {
    id: 51,
    name: "Vestido Elegante con Rayas y Abertura Tela Fantasía",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Negro"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/VestidoeleganteconrayasyaberturaTelaFantasia.avif",
  },

  // Blazers
  {
    id: 52,
    name: "Abrigo Largo Elegante y Clásico con Cinturón Blazer de Manga Larga y Color Sólido Exterior Versátil Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Camell", "Negro"],
    price: 170,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/AbrigoLargoEleganteyClasicoconCinturonBlazerdeMangaLargayColorSolidoExteriorVersátilTelaPoliester.avif",
  },
  {
    id: 53,
    name: "Chaqueta Blazer de Moda Elegante de Solapa de Color Sólido Casual y Versátil. Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo", "Beige"],
    price: 159,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/ChaquetaBlazerdeModaElegantedeSolapadeColorSólidoCasualyVersatilTelaPoliester.avif",
  },
  {
    id: 54,
    name: "Nuevo Estilo Gyaru, Minimalismo de Color Sólido, Versatilidad a la Moda, Tres Formas de Usar. Tela Satin",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Beige", "Camell", "Negro"],
    price: 199,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/NuevoEstiloGyaruyCutedePrimaverayOtoñoEsencialesparaCitasTrajesparaIralTrabajoMinimalismodeColorSolido.avif",
  },
  {
    id: 55,
    name: "Saco Elegante con Cuello Fruncido, Manga 34, Abierto al Frente, Unicolor. Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Azul", "Negro"],
    price: 160,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/Sacoeleganteconcuellofruncidomanga34abiertoalfrenteunicolorTelaPoliester.avif",
  },
  {
    id: 56,
    name: "Un Blazer Ultra Corto Elegante y Único Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rosado", "Beige", "Negro"],
    price: 150,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/UnblazerultracortoeleganteyunicoTelaPoliester.avif",
  },

  // Conjuntos
  {
    id: 57,
    name: "Conjunto de Dos Piezas Top sin Mangas y Pantalón de Color Sólido con Rayas Blancas, Atuendo Completo Tela tafeta",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Negro", "Rojo"],
    price: 169,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntodedospiezasTopsinMangasyPantalondeColorSolidoconrayasblancasAtuendoCompletoTelatafeta.avif",
  },
  {
    id: 58,
    name: "Conjunto de Top sin Mangas y Pantalones de Cintura Alta Diseño Franjas Blancas Tela Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Marrón", "Rosado"],
    price: 175,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntodetopsinmangasypantalonesdecinturaaltadiseñofranjasblancasTelapopelina.avif",
  },
  {
    id: 59,
    name: "Conjunto Elegante de Dos piezas Blusa de Manga Burbuja con Botones y Pantalones de Vestir Tela Popelina y Pantalón",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Blanco", "Marrón"],
    price: 180,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntoElegantededospiezasblusademangaburbujaconbotonesypantalonesdevestirTelapopelina.avif",
  },
  {
    id: 60,
    name: "Conjunto Elegante y Cómodo Chaleco Top sin Mangas y Pantalón Palazo con Pinzas Delanteras. Tela Popelina.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rosado", "Camell", "Marrón"],
    price: 160,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntoEleganteyComodoChalecotopsinmangasypantalonpalazoconpinzasdelanterasTelapopelina.avif",
  },
  {
    id: 61,
    name: "Conjunto Elegante y Cómodo. Traje a Rayas con Hombros Descubiertos y Cintura Ajustada Cuello Asimétrico Detalles de Botones",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Marrón", "Camell", "Arena"],
    price: 160,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntoEleganteyComodoTrajeaRayasconHombrosDescubiertosyCinturaAjustadaCuelloAsimetricoDetallesdeBotones.avif",
  },

  //Blusas
  {
    id: 62,
    name: "Blusa Elegante con Panel de Malla Mangas con Volantes y Moño Semitransparente Tela Chifón",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Azul", "Blanco"],
    price: 129,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/BlusaeleganteconpaneldemallamangasconvolantesymonosemitransparenteTelaChifon.avif",
  },
  {
    id: 63,
    name: "Blusa Elegante de Manga Corta y Parte Delantera Corrugada con Botones Ocultos Tela Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rojo", "Blanco", "Verde"],

    price: 120,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/BlusaelegantedemangacortaypartedelanteracorrugadaconbotonesocultosTelaPopelina.avif",
  },
  {
    id: 64,
    name: "Blusa para Mujer Estilo Francés con Mangas Murciélago y Cuello Redondo con Cinturón Color Sólido. Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Camell", "Negro"],

    price: 140,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/BlusaparamujerestilofrancesconmangasmurcielagoycuelloredondoconcinturoncolorsolidoTelaPoliester.avif",
  },
  {
    id: 65,
    name: "Camisa Manga Larga. Estilo Francés Color Liso con Botonera Oculta. Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Rojo", "Negro"],
    price: 110,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/CamisademangalargaparamujerestilofrancescolorlisoconabotonaduraocultaTelapoliester.avif",
  },
  {
    id: 66,
    name: "Camiseta de Cuello en V Carrugado Tela Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Beige", "Negro"],
    price: 135,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/CamisetadecuelloenVcarrugadoTelaPopelina.avif",
  },

  // Pantalones
  {
    id: 67,
    name: "Pantalón de Cintura Alta y Pierna Ancha con Doble Abertura en el Dobladillo Largo por Encima de la Rodilla más Cinturón Ajustable Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Marrón", "Negro"],
    price: 160,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantaldelongitudcroppedpiernaanchahechosdetelasuaveycomodaEldisenodecinturaaltacuentaconunrespaldo.avif",
  },
  {
    id: 68,
    name: "Pantalón de Longitud Cropped Pierna Ancha Hechos de Tela Suave y Cómoda. El Diseño de Cintura Alta Cuenta con un Respaldo Elástico para una Gran Flexibilidad Tela Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Marrón", "Negro", "Plomo"],
    price: 150,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantalondecinturaaltaypiernaAnchacondobleaberturaeneldobladillolargoporencimadelarodillamascinturonajustableTelapoliester.avif",
  },
  {
    id: 69,
    name: "Pantalón Elegante de Pierna Ancha y Pinzas sin Necesidad de Cinturón con Textura Suave y Ajuste Cómodo Tela Drill",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Gris", "Blanco"],
    price: 149,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantalonelegantedepiernaanchaypinzassinnecesidaddecinturoncontexturasuaveyajustecomodoTelaDrill.avif",
  },
  {
    id: 70,
    name: "Pantalón Formal de Talle Alto Corte Holgado Largo Cierre de Bragueta con Botones Detalles de Bolsillos sin Cinturón Tela Drill",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Marrón", "Camell", "Negro"],
    price: 130,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantalonformaldetallealtoCorteholgadolargocierredebraguetaconbotonesdetallesdebolsillossincinturonTelaDrill.avif",
  },
  {
    id: 71,
    name: "Pantalon Palazo a la Cintura con Pinzas Delanteras Tela Corduroy",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Arena", "Negro"],
    price: 129,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantalonpalazoalacinturaconpinzasdelanterasTelaCorduroy.avif",
  },

  // Sección Deporte
  // Polos
  {
    id: 72,
    name: "Camiseta Cropped que Deja al Descubierto el Ombligo, Diseñado con Cuello Redondo y Mangas Cortas. Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Rosado", "Negro"],
    price: 49,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetacroppedquedejaaldescubiertoelombligodisenadoconcuelloredondoymangascortasTelaPoliester.avif",
  },
  {
    id: 73,
    name: "Camiseta de Manga Corta Color Sólido con Hombro Inclinado Material Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rosado", "Azul", "Negro"],
    price: 40,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetademangacortacolorsolidoconhombroinclinadoMaterialPoliester.avif",
  },
  {
    id: 74,
    name: "Camiseta Deportiva de Manga Corta Color Sólido con Detalles de Malla y Transpirable",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Blanco", "Negro"],
    price: 55,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetaDeportivadeMangaCortaColorSolidoconDetallesdeMallayTranspirable.avif",
  },
  {
    id: 75,
    name: "Camiseta Oversize con Manga Corta Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Gris", "Azul", "Marrón"],
    price: 40,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetaOversizeconmangacortaTelaPoliester.avif",
  },
  {
    id: 76,
    name: "Camisetas Deportivas sin Mangas Tejido Transpirable y Elástico Diseño con Abertura Lateral Cuello Redondo y Corte H para Gimnasio",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Blanco", "Beige", "Negro"],
    price: 35,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetasDeportivasSinMangasTejidoTranspirableyElasticoDisenoconAberturaLateralCuelloRedondoyCorteHparaGimnasio.avif",
  },

  // Pantalones
  {
    id: 77,
    name: "Conjunto de Pantalon Recto y Polo Manga Corta. Tela Poliéster.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Verde", "Plomo", "Negro"],
    price: 140,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/ConjuntodepantalonrectoypolomangacortaTelaPoliester.avif",
  },
  {
    id: 78,
    name: "Leggins de Cintura Alta Ajustado. Tela Nailon.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Gris", "Azul", "Negro"],
    price: 120,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/LegginsdecinturaaltaajustadoTelaNailon.avif",
  },
  {
    id: 79,
    name: "Pantalón de Pierna Ancha con Drapeado Completo Cordón Ajustable y Bolsillos Tela Viscosa",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Plomo", "Marrón", "Negro"],
    price: 139,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/PantalondepiernaanchacondrapeadocompletocordonajustableybolsillosTelaviscosa.avif",
  },
  {
    id: 80,
    name: "Pantalón Deportivo Holgado con un Parche de Cinturón de Color Sólido. Tela Poliéster.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Azul", "Camell"],
    price: 149,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/PantalondeportivoholgadoconunparchedecinturondecolorsolidoTelaPoliester.avif",
  },
  {
    id: 81,
    name: "Pantalones Cargo Color Sólido con Cintura Ajustable y Bolsillos Grandes Ideales para Deporte",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Gris", "Marrón", "Azul"],
    price: 135,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/Pantalonescargocolorsolidoconcinturaajustableybolsillosgrandesidealesparadeporte.avif",
  },

  // Busos
  {
    id: 82,
    name: "Conjunto Deportivo Casual Holgado de Fibra con Diseño de Letras Bordadas Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rosado", "Gris", "Plomo"],
    price: 159,
    category: "sport",
    subcategory: "buzos",
    image:
      "/prendas/ropa-deportiva/buzos/ConjuntodeportivocasualholgadodefibracondisenodeletrasbordadasTelaPoliester.avif",
  },
  {
    id: 83,
    name: "Conjunto Deportivo. Casaca con Cierre y Buso con Cordón en la Pretina para Ajustar Tela Licra",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Gris", "Negro"],
    price: 165,
    category: "sport",
    subcategory: "buzos",
    image:
      "/prendas/ropa-deportiva/buzos/ConjuntodeportivocasacaconcierreybusoconcordonenlapretinaparaajustarTelaLicra.webp",
  },
  {
    id: 84,
    name: "Conjuntos Deportivo Ajustado Casaca más Leggins Tela licra",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Marrón", "Gris"],
    price: 170,
    category: "sport",
    subcategory: "buzos",
    image:
      "/prendas/ropa-deportiva/buzos/ConjuntosdeportivoajustadoCasacamaslegginsTelalicra.avif",
  },

  // Tops
  {
    id: 85,
    name: "Camiseta Deportiva con Tira Reflectante en la Espalda Diseño Sólido Tela Nailon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Blanco", "Azul"],
    price: 65,
    category: "sport",
    subcategory: "tops",
    image:
      "/prendas/ropa-deportiva/tops/CamisetaDeportivaconTiraReflectanteenlaEspaldaDisenoSolidoTelaNailon.avif",
  },
  {
    id: 86,
    name: "Conjunto Deportivo Tops más Short Corto Tela Nailon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Gris", "Rojo", "Negro"],
    price: 45,
    category: "sport",
    subcategory: "tops",
    image:
      "/prendas/ropa-deportiva/tops/ConjuntodeportivotopsmasshortcortoTelaNailon.avif",
  },
  {
    id: 87,
    name: "Top con Sujetador y Cobertura Total Fácil Alta Elasticidad Tela Nailon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rosado", "Blanco", "Negro"],
    price: 30,
    category: "sport",
    subcategory: "tops",
    image:
      "/prendas/ropa-deportiva/tops/TopconsujetadorycoberturatotalfacilaltaelasticidadTelaNailon.avif",
  },
  {
    id: 88,
    name: "Tops Deportivos para Mujer con Diseño Perforado sin Mangas Transpirables Tela Nailon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rosado", "Beige", "Negro", "Celeste"],
    price: 49,
    category: "sport",
    subcategory: "tops",
    image:
      "/prendas/ropa-deportiva/tops/TopsdeportivosparamujercondiseñoperforadosinmangastranspirablesTelaNailon.avif",
  },

  // Faldas shorts

  {
    id: 89,
    name: "Falda Corta Deportiva de Cintura Alta con Pliegues y Shorts. Convertible con Bolsillo",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Plateado", "Azul", "Negro"],
    price: 80,
    category: "sport",
    subcategory: "faldas-shorts",
    image:
      "/prendas/ropa-deportiva/falda-short/FaldacortaDeportivadeCinturaAltaconPlieguesyShortsConvertibleconBolsillo.avif",
  },
  {
    id: 90,
    name: "Falda Deportiva con Rayas y Capa de Seguridad con Short Incorporado. Material poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Marrón", "Rosado"],
    price: 89,
    category: "sport",
    subcategory: "faldas-shorts",
    image:
      "/prendas/ropa-deportiva/falda-short/FaldaDeportivaconRayasyCapadeSeguridadconShortIncorporadoMaterialpoliester.avif",
  },
  {
    id: 91,
    name: "Short de Cintura Alta con Control Abdominal y Tecnología Anti-Rozaduras Bolsillos Laterales, Portacelulares Faja Antideslizante Elástica.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Plomo", "Blanco"],
    price: 89,
    category: "sport",
    subcategory: "faldas-shorts",
    image:
      "/prendas/ropa-deportiva/falda-short/ShortdeCinturaAltaconControlAbdominalyTecnologiaAnti-RozadurasBolsillosLateralesportacelulares.avif",
  },
  {
    id: 92,
    name: "Short Oversize con Portacelular Interno. Tela poliéster.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rosado", "Azul", "Marrón"],
    price: 70,
    category: "sport",
    subcategory: "faldas-shorts",
    image:
      "/prendas/ropa-deportiva/falda-short/ShortoversizeconportacelularinternoTelapoliester.avif",
  },

  // Sección Gala
  // Vestidos de gala

  {
    id: 93,
    name: "Elegante Vestido de Noche con Abertura, Nudo Torcido y Tirantes Cruzados Espalda descubierta Tela satín",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Verde", "Rojo", "Blanco", "Negro"],
    price: 189,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/EleganteVestidodeNocheconAberturaNudoTorcidoyTirantesCruzadosEspaldadescubiertaTelaSaltin.avif",
  },
  {
    id: 94,
    name: "Elegante Vestido de Sirena de Color Sólido con Hombros Descubiertos, con Abertura Alta y Dobladillo Asimétrico Tela satín",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Rojo", "Arena", "Marrón", "Negro"],
    price: 199,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/ElegantevestidodesirenadecolorsolidoconhombrosdescubiertosconaberturaaltaydobladilloasimetricoTelasaltin.avif",
  },
  {
    id: 95,
    name: "Elegante Vestido Largo sin Mangas con Cuello Halter y Espalda Descubierta Tela satín",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Marrón", "Azul", "Blanco", "Negro"],
    price: 199,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/ElegantevestidolargosinmangasconcuellohalteryespaldadescubiertaTelaSaltin.avif",
  },
  {
    id: 96,
    name: "Vestido Elegante Ajustado y Corto con Mangas Largas Acampanadas Tela Brillante",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo", "Blanco", "Azul"],
    price: 169,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/VestidoeleganteajustadoycortoconmangaslargasacampanadasTelabrillante.avif",
  },
  {
    id: 97,
    name: "Vestido Largo sin Mangas con Cortes en una Pierna Tela satín",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Rojo", "Plomo"],
    price: 179,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/VestidolargosinmangasconcortesenunapiernaTelaSaltin.avif",
  },
];

export default products;
