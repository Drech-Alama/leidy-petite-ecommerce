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
    name: "Polo Corto Mangalarga",
    size: ["XS-C", "S-C", "M-C"],
    colors: ["Rojo", "Gris", "Marrón"],
    price: 60,
    category: "diario",
    subcategory: "polos",
    image: "/prendas/ropa-diario/polos/cortoMangalarga.avif",
  },
  {
    id: 3,
    name: "Falda Manga Corta",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Verde", "Blanco"],
    price: 48,
    category: "diario",
    subcategory: "polos",
    image: "/prendas/ropa-diario/polos/mangaCortaTelaJersey.webp",
  },
  {
    id: 4,
    name: "Polo Manga Corta Tela Poliester",
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
    name: "Pantalón Denim Estilo Skini",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Negro", "Gris"],
    price: 145,
    category: "diario",
    subcategory: "pantalones",
    image: "/prendas/ropa-diario/pantalones/denimEstiloSkini.avif",
  },
  {
    id: 9,
    name: "Pantalón Denim Estilo Straing",
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
    name: "Mini Falda Con Cortes Tela Corduroy",
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
    name: "Falda shorts tela denim",
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
    name: "Casaca con capucha a la cintura Tela denim con franela",
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
    name: "Chaleco Denim cuello V",
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
    name: "Chompa cuello redondo Tela-Algodón",
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
    name: "Chompa de hilo cuello V",
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
    name: "Chompa Overzise concapucha Tela-Algodón",
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
    name: "Short bermuda Tela-Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Azul", "Negro", "Gris", "Celeste"],
    price: 109,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortbermudaTela-Denim.avif",
  },
  {
    id: 23,
    name: "Short cargo cintura Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Azul", "Plomo", "Gris"],
    price: 99,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortcargocinturaTelaDenim.avif",
  },
  {
    id: 24,
    name: "Short Clásico cintura Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Azul"],
    price: 90,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortClasicocinturaTelaDenim.avif",
  },
  {
    id: 25,
    name: "Shortcorto vaquero Tela Denim",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Celeste", "Azul", "Negro"],
    price: 80,
    category: "diario",
    subcategory: "shorts",
    image: "/prendas/ropa-diario/short/ShortcortovaqueroTelaDenim.avif",
  },
  {
    id: 26,
    name: "Short Falda a la cintura Tela Denim",
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
    name: "Blusa ajustada Mangalarga Tela-Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "blusas",
    image:
      "/prendas/ropa-casual/blusas/BlusaajustadaMangalargaTela-Poliester.avif",
  },
  {
    id: 28,
    name: "Blusa manga corta conrayas Tela Chalis",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "blusas",
    image: "/prendas/ropa-casual/blusas/BlusamangacortaconrayasTelaChalis.avif",
  },
  {
    id: 29,
    name: "Blusa manga Estilo corto Tela-Camisero",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "blusas",
    image:
      "/prendas/ropa-casual/blusas/BlusamangaEstilocortoTela-Camisero.avif",
  },
  {
    id: 30,
    name: "Blusa manga larga Estilo corto Tela-Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "blusas",
    image:
      "/prendas/ropa-casual/blusas/BlusamangalargaEstilocortoTela-Popelina.avif",
  },
  {
    id: 31,
    name: "Blusa mangalarga oversize Tela-Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "blusas",
    image:
      "/prendas/ropa-casual/blusas/BlusamangalargaoversizeTela-Poliester.avif",
  },

  //Pantalones
  {
    id: 32,
    name: "Pantalon a la cintura con bolsillos delanteros y basta ajustable Estilo wide leg Tela Drill",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantalonalacinturaconbolsillosdelanterosybastaajustableEstilowidelegTelaDrill.avif",
  },
  {
    id: 33,
    name: "Pantalon cargo semicadera Tela Tafeta",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantaloncargosemicaderaTelaTafeta.avif",
  },
  {
    id: 34,
    name: "Pantalon oversize con ajuste de largo de pierna Tela popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantalonoversizeconajustedelargodepiernaTelapopelina.avif",
  },
  {
    id: 35,
    name: "Pantalon palazo a la cintura Basta con ajustes Tela Corduroy",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantalonpalazoalacinturaBastaconajustesTelaCorduroy.avif",
  },
  {
    id: 36,
    name: "Pantalon versatil y comodo Estilo recto Tela Rayon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-casual/pantalones/PantalonversatilycomodoEstilorectoTelaRayon.avif",
  },

  // Faldas
  {
    id: 37,
    name: "Falda casual estilo cargo con detalle de botones. Diseño versatil con aberturas Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/FaldacasualestilocargocondetalledebotonesDiseñoversatilconaberturasTelaPoliester.avif",
  },
  {
    id: 38,
    name: "Falda corta de cuero Cintura alta y ajustada",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/FaldacortadecueroCinturaaltayajustada.avif",
  },
  {
    id: 39,
    name: "Falda pomposa de cintura alta Tela Tafeta",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/FaldapomposadecinturaaltaTelaTafeta.avif",
  },
  {
    id: 40,
    name: "Falda Vintage de Tiro Alto con Abertura Tela Drill",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/FaldaVintagedeTiroAltoconAberturaTelaDrill.avif",
  },
  {
    id: 41,
    name: "Mini falda a la cintura con cierre invisible Diseño moderno y elegante Tela Gamuza sintética",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "faldas",
    image:
      "/prendas/ropa-casual/faldas/MinifaldaalacinturaconcierreinvisibleDisenomodernoyeleganteTelaGamuzasintetica.avif",
  },

  //Conjuntos
  {
    id: 42,
    name: "Conjunto de dos piezas corte moderno y femenino Tela fresca y comoda",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntodedospiezascortemodermoyfemeninoTelafrescaycomoda.avif",
  },
  {
    id: 43,
    name: "Conjunto dedos piezas Short falda con blusa manga corta Tela camisero",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntodedospiezasShortfaldaconblusamangacortaTelacamisero.avif",
  },
  {
    id: 44,
    name: "Conjunto elegante Blusa cuello corbata con short clásico Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntoeleganteBlusacuellocorbataconshortclasicoTelaPoliester.avif",
  },
  {
    id: 45,
    name: "Conjunto elegante dedos piezas Top corto y pantalones anchos Tela camisero",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntoelegantededospiezasTopcortoypantalonesanchosTelacamisero.avif",
  },
  {
    id: 46,
    name: "Conjunto Pantalones estilo recto con blusa cortas sin mangas Material Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "casual",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-casual/conjuntos/ConjuntoPantalonestilorectoconblusacortasinmangasMaterialPoliester.avif",
  },

  // Sección Formal
  //Vestidos
  {
    id: 47,
    name: "Traje de Falda con Doble Botonadura y Escote en V con Espalda Abierta Tela Saltin",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/TrajedeFaldaconDobleBotonadurayEscoteenVconEspaldaAbiertaTelaSaltin.avif",
  },
  {
    id: 48,
    name: "Vestido camisero elegante manga larga, corte en A Tela poliéster.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/VestidocamiseroelegantemangalargacorteenATelapoliester.avif",
  },
  {
    id: 49,
    name: "Vestido con cuello V, botones decorativos y basta faldon con ajuste",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/VestidoconcuelloVbotonesdecorativosybastafaldonconajuste.avif",
  },
  {
    id: 50,
    name: "Vestido corto con escote Tela poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/VestidocortoconescoteTelapoliester.avif",
  },
  {
    id: 51,
    name: "Vestido elegante con rayas y abertura Tela Fantasia",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "vestidos",
    image:
      "/prendas/ropa-formal/vestidos/VestidoeleganteconrayasyaberturaTelaFantasia.avif",
  },

  // Blazers
  {
    id: 52,
    name: "Abrigo Largo Elegante y Clásico con Cinturón Blazer de Manga Larga y Color Sólido Exterior Versátil Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/AbrigoLargoEleganteyClasicoconCinturonBlazerdeMangaLargayColorSolidoExteriorVersátilTelaPoliester.avif",
  },
  {
    id: 53,
    name: "Chaqueta Blazer de Moda Elegante de Solapa de Color Sólido Casual y Versátil. Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/ChaquetaBlazerdeModaElegantedeSolapadeColorSólidoCasualyVersatilTelaPoliester.avif",
  },
  {
    id: 54,
    name: "Nuevo Estilo Gyaru y Cute de Primavera y Otoño, Esenciales para Citas, Trajes para Ir al Trabajo, Minimalismo de Color Sólido, Versatilidad a la Moda, Tres Formas de Usar, Diseño de",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/NuevoEstiloGyaruyCutedePrimaverayOtoñoEsencialesparaCitasTrajesparaIralTrabajoMinimalismodeColorSolido.avif",
  },
  {
    id: 55,
    name: "Saco elegante con cuello fruncido, manga 34, abierto al frente, unicolor. Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/Sacoeleganteconcuellofruncidomanga34abiertoalfrenteunicolorTelaPoliester.avif",
  },
  {
    id: 56,
    name: "Un blazer ultra corto elegante y único Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blazers",
    image:
      "/prendas/ropa-formal/blazers/UnblazerultracortoeleganteyunicoTelaPoliester.avif",
  },

  // Conjuntos
  {
    id: 57,
    name: "Conjunto de dos piezas Top sin Mangas y Pantalón de Color Sólido con rayas blancas Atuendo Completo Tela tafeta",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntodedospiezasTopsinMangasyPantalondeColorSolidoconrayasblancasAtuendoCompletoTelatafeta.avif",
  },
  {
    id: 58,
    name: "Conjunto de top sin mangas y pantalones de cintura alta  diseño franjas blancas Tela popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntodetopsinmangasypantalonesdecinturaaltadiseñofranjasblancasTelapopelina.avif",
  },
  {
    id: 59,
    name: "Conjunto Elegante de dos piezas  blusa de manga burbuja con botones y pantalones de vestir Tela popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntoElegantededospiezasblusademangaburbujaconbotonesypantalonesdevestirTelapopelina.avif",
  },
  {
    id: 60,
    name: "Conjunto Elegante y Cómodo Chaleco top sin mangas y pantalón palazo con pinzas delanteras. Tela popelina.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntoEleganteyComodoChalecotopsinmangasypantalonpalazoconpinzasdelanterasTelapopelina.avif",
  },
  {
    id: 61,
    name: "Conjunto Elegante y Cómodo Traje a Rayas con Hombros Descubiertos y Cintura Ajustada Cuello Asimétrico Detalles de Botones",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "conjuntos",
    image:
      "/prendas/ropa-formal/conjuntos/ConjuntoEleganteyComodoTrajeaRayasconHombrosDescubiertosyCinturaAjustadaCuelloAsimetricoDetallesdeBotones.avif",
  },

  //Blusas
  {
    id: 62,
    name: "Blusa elegante con panel de malla mangas con volantes y moño semitransparente Tela Chifón",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/BlusaeleganteconpaneldemallamangasconvolantesymonosemitransparenteTelaChifon.avif",
  },
  {
    id: 63,
    name: "Blusa elegante de manga corta y parte delantera corrugada con botones ocultos Tela Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/BlusaelegantedemangacortaypartedelanteracorrugadaconbotonesocultosTelaPopelina.avif",
  },
  {
    id: 64,
    name: "Blusa para mujer estilo francés con mangas murciélago y cuello redondo con cinturón color sólido. Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/BlusaparamujerestilofrancesconmangasmurcielagoycuelloredondoconcinturoncolorsolidoTelaPoliester.avif",
  },
  {
    id: 65,
    name: "Camisa de manga larga para mujer estilo francés color liso con abotonadura oculta Tela poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/CamisademangalargaparamujerestilofrancescolorlisoconabotonaduraocultaTelapoliester.avif",
  },
  {
    id: 66,
    name: "Camiseta de cuello en V carrugado Tela Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "blusas",
    image:
      "/prendas/ropa-formal/blusas/CamisetadecuelloenVcarrugadoTelaPopelina.avif",
  },

  // Pantalones
  {
    id: 67,
    name: "Pantalón de cintura alta y pierna Ancha con doble abertura en el dobladillo largo por encima de la rodilla mas cinturón ajustable Tela poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantaldelongitudcroppedpiernaanchahechosdetelasuaveycomodaEldisenodecinturaaltacuentaconunrespaldo.avif",
  },
  {
    id: 68,
    name: "Pantalón de longitud cropped pierna ancha hechos de tela suave y cómoda El diseño de cintura alta cuenta con un respaldo elástico para una gran flexibilidad Tela Popelina",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantalondecinturaaltaypiernaAnchacondobleaberturaeneldobladillolargoporencimadelarodillamascinturonajustableTelapoliester.avif",
  },
  {
    id: 69,
    name: "Pantalón elegante de pierna ancha y pinzas sin necesidad de cinturón  con textura suave y ajuste cómodo Tela Drill",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantalonelegantedepiernaanchaypinzassinnecesidaddecinturoncontexturasuaveyajustecomodoTelaDrill.avif",
  },
  {
    id: 70,
    name: "Pantalón formal de talle alto Corte holgado largo cierre de bragueta con botones detalles de bolsillos sin cinturón Tela Drill",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantalonformaldetallealtoCorteholgadolargocierredebraguetaconbotonesdetallesdebolsillossincinturonTelaDrill.avif",
  },
  {
    id: 71,
    name: "Pantalon palazo a la cintura con pinzas delanteras Tela Corduroy",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "formal",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-formal/pantalones/PantalonpalazoalacinturaconpinzasdelanterasTelaCorduroy.avif",
  },

  // Sección Deporte
  // Polos
  {
    id: 72,
    name: "Camiseta cropped que deja al descubierto el ombligo, diseñado con cuello redondo y mangas cortas. Tela Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetacroppedquedejaaldescubiertoelombligodisenadoconcuelloredondoymangascortasTelaPoliester.avif",
  },
  {
    id: 73,
    name: "Camiseta de manga corta color sólido con hombro inclinado Material Poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetademangacortacolorsolidoconhombroinclinadoMaterialPoliester.avif",
  },
  {
    id: 74,
    name: "Camiseta Deportiva de Manga Corta Color Sólido con Detalles de Malla y Transpirable",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetaDeportivadeMangaCortaColorSolidoconDetallesdeMallayTranspirable.avif",
  },
  {
    id: 75,
    name: "Camiseta Oversize  con manga corta Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetaOversizeconmangacortaTelaPoliester.avif",
  },
  {
    id: 76,
    name: "Camisetas Deportivas Sin Mangas Tejido Transpirable y Elástico Diseño con Abertura Lateral Cuello Redondo y Corte H para Gimnasio",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "polos",
    image:
      "/prendas/ropa-deportiva/polos/CamisetasDeportivasSinMangasTejidoTranspirableyElasticoDisenoconAberturaLateralCuelloRedondoyCorteHparaGimnasio.avif",
  },

  // Pantalones
  {
    id: 77,
    name: "Conjunto de pantalon recto y polo manga corta. Tela Poliester.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/ConjuntodepantalonrectoypolomangacortaTelaPoliester.avif",
  },
  {
    id: 78,
    name: "Leggins de cintura alta ajustado. Tela Nailon.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/LegginsdecinturaaltaajustadoTelaNailon.avif",
  },
  {
    id: 79,
    name: "Pantalón de pierna ancha con drapeado completo cordón ajustable y bolsillos Tela viscosa",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/PantalondepiernaanchacondrapeadocompletocordonajustableybolsillosTelaviscosa.avif",
  },
  {
    id: 80,
    name: "Pantalón deportivo holgado con un parche de cinturón de color sólido. Tela Poliéster.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/PantalondeportivoholgadoconunparchedecinturondecolorsolidoTelaPoliester.avif",
  },
  {
    id: 81,
    name: "Pantalones cargo color sólido con cintura ajustable y bolsillos grandes ideales para deporte",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "pantalones",
    image:
      "/prendas/ropa-deportiva/pantalones/Pantalonescargocolorsolidoconcinturaajustableybolsillosgrandesidealesparadeporte.avif",
  },

  // Busos
  {
    id: 82,
    name: "Conjunto deportivo casual holgado de fibra con diseño de letras bordadas Tela Poliester",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "buzos",
    image:
      "/prendas/ropa-deportiva/buzos/ConjuntodeportivocasualholgadodefibracondisenodeletrasbordadasTelaPoliester.avif",
  },
  {
    id: 83,
    name: "Conjunto deportivo. casaca con cierre y buso con cordon en la pretina para ajustar Tela Licra",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "buzos",
    image:
      "/prendas/ropa-deportiva/buzos/ConjuntodeportivocasacaconcierreybusoconcordonenlapretinaparaajustarTelaLicra.webp",
  },
  {
    id: 84,
    name: "Conjuntos deportivo ajustado Casaca mas leggins Tela licra",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
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
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "tops",
    image:
      "/prendas/ropa-deportiva/tops/CamisetaDeportivaconTiraReflectanteenlaEspaldaDisenoSolidoTelaNailon.avif",
  },
  {
    id: 86,
    name: "Conjunto deportivo tops mas short corto  Tela Nailon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "tops",
    image:
      "/prendas/ropa-deportiva/tops/ConjuntodeportivotopsmasshortcortoTelaNailon.avif",
  },
  {
    id: 87,
    name: "Top con sujetador y  cobertura total fácil alta elasticidad Tela Nailon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "tops",
    image:
      "/prendas/ropa-deportiva/tops/TopconsujetadorycoberturatotalfacilaltaelasticidadTelaNailon.avif",
  },
  {
    id: 88,
    name: "Tops deportivos para mujer con diseño perforado sin mangas transpirables Tela Nailon",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "tops",
    image:
      "/prendas/ropa-deportiva/tops/TopsdeportivosparamujercondiseñoperforadosinmangastranspirablesTelaNailon.avif",
  },

  // Faldas shorts

  {
    id: 89,
    name: "Falda corta Deportiva de Cintura Alta con Pliegues y Shorts. Convertible con Bolsillo",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "faldas-shorts",
    image:
      "/prendas/ropa-deportiva/falda-short/FaldacortaDeportivadeCinturaAltaconPlieguesyShortsConvertibleconBolsillo.avif",
  },
  {
    id: 90,
    name: "Falda Deportiva con Rayas y Capa de Seguridad con Short Incorporado. Material poliéster",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "faldas-shorts",
    image:
      "/prendas/ropa-deportiva/falda-short/FaldaDeportivaconRayasyCapadeSeguridadconShortIncorporadoMaterialpoliester.avif",
  },
  {
    id: 91,
    name: "Short de Cintura Alta con Control Abdominal y Tecnología Anti-Rozaduras Bolsillos Laterales, portacelulares Faja Antideslizante Elástica.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "faldas-shorts",
    image:
      "/prendas/ropa-deportiva/falda-short/ShortdeCinturaAltaconControlAbdominalyTecnologiaAnti-RozadurasBolsillosLateralesportacelulares.avif",
  },
  {
    id: 92,
    name: "Short oversize con portacelular interno. Tela poliester.",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "sport",
    subcategory: "faldas-shorts",
    image:
      "/prendas/ropa-deportiva/falda-short/ShortoversizeconportacelularinternoTelapoliester.avif",
  },

  // Sección Gala
  // Vestidos de gala

  {
    id: 93,
    name: "Elegante Vestido de Noche con Abertura, Nudo Torcido y Tirantes Cruzados Espalda descubierta Tela Saltin",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/EleganteVestidodeNocheconAberturaNudoTorcidoyTirantesCruzadosEspaldadescubiertaTelaSaltin.avif",
  },
  {
    id: 94,
    name: "Elegante vestido de sirena de color sólido con hombros descubiertos, con abertura alta y dobladillo asimétrico Tela saltin",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/ElegantevestidodesirenadecolorsolidoconhombrosdescubiertosconaberturaaltaydobladilloasimetricoTelasaltin.avif",
  },
  {
    id: 95,
    name: "Elegante vestido largo sin mangas con cuello halter y espalda descubierta Tela Saltin",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/ElegantevestidolargosinmangasconcuellohalteryespaldadescubiertaTelaSaltin.avif",
  },
  {
    id: 96,
    name: "Vestido elegante ajustado y corto con mangas largas acampanadas Tela brillante",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/VestidoeleganteajustadoycortoconmangaslargasacampanadasTelabrillante.avif",
  },
  {
    id: 97,
    name: "Vestido largo sin mangas con cortes en una pierna Tela Saltin",
    size: ["XS-C", "S-C", "M-C", "L-C"],
    colors: ["Negro", "Rojo"],
    price: 119,
    category: "gala",
    subcategory: "vestidos elegantes",
    image:
      "/prendas/gala/vestido-gala/VestidolargosinmangasconcortesenunapiernaTelaSaltin.avif",
  },
];

export default products;
