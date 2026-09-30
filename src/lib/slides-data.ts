export type Mag = "4x" | "10x" | "40x";

export type TissueKind = "epitelial" | "conectivo" | "muscular" | "nervioso";

export type LayerKind =
  | "simple"
  | "estratificado"
  | "seudoestratificado"
  | "transicion";

export type CellShape = "plano" | "cubico" | "cilindrico" | "transicional";

export type Specialization =
  | "cilios"
  | "estereocilios"
  | "microvellosidades"
  | "celulas-caliciformes"
  | "no-queratinizado"
  | "queratinizado";

export type Epithelium = {
  id: string;
  name: string;
  shortName: string;
  layers: LayerKind;
  shape: CellShape;
  special: Specialization[];
  summary: string;
  howToSee: string[];
};

export type Connective = {
  id: string;
  name: string;
  shortName: string;
  summary: string;
  howToSee: string[];
};

export type Slide = {
  mag: Mag;
  src: string;
  thumb: string;
  lookFor: string;
};

export type Organ = {
  id: string;
  name: string;
  latin: string;
  system: string;
  systemId: string;
  tissue: TissueKind;
  epitheliumId: string | null;
  connectiveId?: string;
  function: string;
  architecture: string;
  clues: string[];
  pitfalls: string[];
  slides: Slide[];
};

export const TISSUE_LABEL: Record<TissueKind, string> = {
  epitelial: "Tejido epitelial",
  conectivo: "Tejido conectivo",
  muscular: "Tejido muscular",
  nervioso: "Tejido nervioso",
};

export const LAYER_LABEL: Record<LayerKind, string> = {
  simple: "Simple (un estrato)",
  estratificado: "Estratificado",
  seudoestratificado: "Seudoestratificado",
  transicion: "De transición",
};

export const SHAPE_LABEL: Record<CellShape, string> = {
  plano: "Plano / escamoso",
  cubico: "Cúbico",
  cilindrico: "Cilíndrico",
  transicional: "Células en cúpula",
};

export const SPECIAL_LABEL: Record<Specialization, string> = {
  cilios: "Cilios",
  estereocilios: "Estereocilios",
  microvellosidades: "Microvellosidades",
  "celulas-caliciformes": "Células caliciformes",
  "no-queratinizado": "No queratinizado",
  queratinizado: "Queratina (capa córnea)",
};

export const FUNDAMENTALS = {
  title: "Tejidos fundamentales",
  definition:
    "Células organizadas que llevan a cabo una o más funciones específicas, unidas por uniones especializadas que conectan las células de un mismo tejido.",
  four: [
    {
      id: "epitelial",
      name: "Epitelial",
      blurb: "Revestimiento, secreción, absorción y barrera. Avascular.",
    },
    {
      id: "conectivo",
      name: "Conectivo",
      blurb: "Sostén, nutrición y relleno. Incluye denso, mucoso y adiposo.",
    },
    {
      id: "muscular",
      name: "Muscular",
      blurb: "Contracción. Liso, esquelético o cardíaco.",
    },
    {
      id: "nervioso",
      name: "Nervioso",
      blurb: "Conducción e integración de señales.",
    },
  ],
  epithelial: [
    "Es un tejido avascular: depende de los vasos que irrigan el tejido conectivo subyacente.",
    "Las células están muy cercanas entre sí y forman uniones intercelulares y especializaciones de superficie.",
    "Es el medio de difusión de sustancias endógenas y exógenas, y ayuda a la regulación homeostática.",
  ],
  connective: [
    "Células separadas por abundante matriz extracelular: fibras (colágeno, elásticas) y sustancia fundamental.",
    "El denso regular (tendón) tiene haces paralelos; el mucoso (Wharton) es gelatinoso; el adiposo almacena lípido.",
    "Suele ser vascular. El epitelio que ves encima se nutre desde aquí.",
  ],
};

export const EPITHELIA: Epithelium[] = [
  {
    id: "cubico-simple",
    name: "Epitelio cúbico simple",
    shortName: "Cúbico simple",
    layers: "simple",
    shape: "cubico",
    special: [],
    summary:
      "Una sola capa de células tan altas como anchas, con núcleo redondo y central. Típico de conductos y de los folículos tiroideos.",
    howToSee: [
      "Núcleos redondos, a la misma altura, en el centro de cada célula.",
      "Una sola hilera rodeando un espacio (el coloide del folículo).",
      "Sin cilios ni varias capas de núcleos.",
    ],
  },
  {
    id: "transicion",
    name: "Epitelio de transición (urotelio)",
    shortName: "De transición",
    layers: "transicion",
    shape: "transicional",
    special: [],
    summary:
      "Epitelio exclusivo de vías urinarias. El número de capas cambia con el llenado; en superficie hay células en cúpula (umbrelas).",
    howToSee: [
      "Superficie ondulada con células grandes, redondeadas, a veces binucleadas.",
      "Varias capas, pero no es un plano estratificado típico.",
      "Mucosa plegada a poco aumento (vejiga vacía o contraída).",
    ],
  },
  {
    id: "cilindrico-simple",
    name: "Epitelio cilíndrico simple",
    shortName: "Cilíndrico simple",
    layers: "simple",
    shape: "cilindrico",
    special: [],
    summary:
      "Una capa de células altas con núcleos basales. En estómago recubre fositas gástricas y secreta moco protector.",
    howToSee: [
      "Células altas, núcleos alargados cerca de la base.",
      "Una sola fila de núcleos, todos a altura similar.",
      "En estómago: fositas que se hunden en la lámina propia.",
    ],
  },
  {
    id: "plano-estratificado-nq",
    name: "Epitelio plano estratificado no queratinizado",
    shortName: "Plano estratificado n.q.",
    layers: "estratificado",
    shape: "plano",
    special: ["no-queratinizado"],
    summary:
      "Varias capas; las células apicales son planas y conservan el núcleo. Protege mucosas húmedas (esófago, boca, vagina).",
    howToSee: [
      "Muchas capas de núcleos desde la basal hasta la superficie.",
      "Las células más superficiales están aplastadas pero nucleadas.",
      "No hay capa anucleada brillante de queratina (eso sería piel).",
    ],
  },
  {
    id: "plano-estratificado-q",
    name: "Epitelio plano estratificado queratinizado",
    shortName: "Plano estratificado queratinizado",
    layers: "estratificado",
    shape: "plano",
    special: ["queratinizado"],
    summary:
      "Epidermis. Varias capas que se aplanan y terminan en una capa córnea anucleada de queratina. Típico de piel gruesa.",
    howToSee: [
      "Cinta epitelial gruesa sobre la dermis.",
      "Capa córnea eosinófila, compacta, sin núcleos: queratina.",
      "Si la superficie sigue nucleada, no es piel: es mucosa (esófago).",
    ],
  },
  {
    id: "plano-simple",
    name: "Epitelio plano simple (endotelio)",
    shortName: "Plano simple / endotelio",
    layers: "simple",
    shape: "plano",
    special: [],
    summary:
      "Una sola capa de células planas. En vasos se llama endotelio: tapiza la luz y forma la barrera sangre-tejido.",
    howToSee: [
      "Línea muy delgada de núcleos aplastados contra la luz del vaso.",
      "No hay varias capas ni cilios.",
      "Debajo: túnica media (músculo liso) y adventicia conectiva.",
    ],
  },
  {
    id: "seudo-ciliado-caliciforme",
    name: "Epitelio cilíndrico seudoestratificado ciliado con células caliciformes",
    shortName: "Seudoestratificado ciliado",
    layers: "seudoestratificado",
    shape: "cilindrico",
    special: ["cilios", "celulas-caliciformes"],
    summary:
      "Todas las células tocan la basal, pero los núcleos quedan a distintas alturas. Borde ciliar y caliciformes: el epitelio respiratorio clásico.",
    howToSee: [
      "Núcleos en varios niveles, sin capas nítidas de células planas.",
      "Borde apical en cepillo móvil: cilios (como pestañas).",
      "Células caliciformes claras, en forma de copa, con moco.",
    ],
  },
  {
    id: "seudo-estereocilios",
    name: "Epitelio cilíndrico seudoestratificado con estereocilios",
    shortName: "Seudoestratificado con estereocilios",
    layers: "seudoestratificado",
    shape: "cilindrico",
    special: ["estereocilios"],
    summary:
      "Parecido al respiratorio, pero los filamentos apicales son estereocilios: largos, inmóviles, de actina. Absorben líquido en el epidídimo.",
    howToSee: [
      "Túbulos redondos con luz llena de espermatozoides.",
      "Ribete apical largo e irregular, no el peine rítmico de los cilios.",
      "No hay cartílago ni caliciformes típicos de tráquea.",
    ],
  },
  {
    id: "cilindrico-simple-borde",
    name: "Epitelio cilíndrico simple con microvellosidades y células caliciformes",
    shortName: "Cilíndrico simple (borde en cepillo)",
    layers: "simple",
    shape: "cilindrico",
    special: ["microvellosidades", "celulas-caliciformes"],
    summary:
      "Enterocitos con chapa estriada (microvellosidades) intercalados con caliciformes. Recubre vellosidades del intestino delgado.",
    howToSee: [
      "Vellosidades en dedo a 4× y 10×: es yeyuno, no estómago.",
      "Borde apical rosado, continuo y fino: microvellosidades, no cilios.",
      "Caliciformes claras entre los enterocitos.",
    ],
  },
];

export const CONNECTIVES: Connective[] = [
  {
    id: "denso-regular",
    name: "Tejido conjuntivo denso regular",
    shortName: "Denso regular",
    summary:
      "Haces de colágeno paralelos, muy juntos. Resistencia a la tracción en una sola dirección. El tendón es el ejemplo clásico.",
    howToSee: [
      "Bandas eosinófilas onduladas, todas en la misma dirección.",
      "Núcleos de fibroblastos alargados y aplastados, en fila entre los haces.",
      "Poca sustancia fundamental: casi todo el campo es fibra.",
    ],
  },
  {
    id: "mucoso",
    name: "Tejido conjuntivo mucoso (gelatina de Wharton)",
    shortName: "Mucoso / Wharton",
    summary:
      "Matriz laxa, gelatinosa, rica en ácido hialurónico. Rodea los vasos del cordón umbilical y los amortigua.",
    howToSee: [
      "Fondo pálido, poco celular, con fibras finas irregulares.",
      "Envuelve una arteria o vena de pared muscular.",
      "No es cartílago: no hay condrocitos en lagunas.",
    ],
  },
  {
    id: "adiposo-unilocular",
    name: "Tejido adiposo unilocular",
    shortName: "Adiposo unilocular",
    summary:
      "Adipocitos con una sola vacuola de lípido. Al procesar el tejido el lípido se disuelve: se ven celdas vacías con el núcleo en un borde.",
    howToSee: [
      "Celdas grandes, redondas, vacías — como pompas de jabón.",
      "Núcleo aplastado en la periferia de cada célula.",
      "Septos de conectivo y vasos entre los lóbulos.",
    ],
  },
];

export const ORGANS: Organ[] = [
  {
    id: "tiroides",
    name: "Tiroides",
    latin: "Glandula thyroidea",
    system: "Endocrino",
    systemId: "endocrino",
    tissue: "epitelial",
    epitheliumId: "cubico-simple",
    function:
      "Síntesis y almacenamiento de hormonas tiroideas en el coloide de los folículos.",
    architecture:
      "Folículos redondos de distinto tamaño, llenos de coloide eosinófilo, tapizados por una sola capa de células cúbicas. El estroma conectivo los separa y los nutre.",
    clues: [
      "Folículos llenos de coloide rosa homogéneo",
      "Una sola hilera de núcleos redondos alrededor de cada luz",
      "No hay vellosidades, cartílago ni células en cúpula",
    ],
    pitfalls: [
      "A 4× puede parecer adiposo o un adenoma, pero el coloide es denso y rosa, no vacío.",
      "No confundir con próstata: aquí no hay corpúsculos de amiláceo ni epitelio plegado típico.",
    ],
    slides: [
      {
        mag: "4x",
        src: "/slides/tiroides-4x.jpg",
        thumb: "/slides/tiroides-4x-thumb.jpg",
        lookFor: "Mapa de folículos de distinto calibre separados por septos.",
      },
      {
        mag: "10x",
        src: "/slides/tiroides-10x.jpg",
        thumb: "/slides/tiroides-10x-thumb.jpg",
        lookFor: "Coloide central y la hilera de tirocitos que lo rodea.",
      },
      {
        mag: "40x",
        src: "/slides/tiroides-40x.jpg",
        thumb: "/slides/tiroides-40x-thumb.jpg",
        lookFor: "Células cúbicas de núcleo redondo: epitelio cúbico simple.",
      },
    ],
  },
  {
    id: "vejiga",
    name: "Vejiga",
    latin: "Vesica urinaria",
    system: "Urinario",
    systemId: "urinario",
    tissue: "epitelial",
    epitheliumId: "transicion",
    function:
      "Almacenar orina y distenderse. El urotelio cambia de grosor según el llenado y forma una barrera impermeable.",
    architecture:
      "Mucosa muy plegada (vejiga contraída) recubierta por urotelio. Bajo el epitelio, lámina propia y músculo liso de la detrusora.",
    clues: [
      "Pliegues grandes de mucosa a 4×",
      "Superficie con células en cúpula (umbrelas)",
      "Varias capas de núcleos sin aplanarse del todo en la superficie",
    ],
    pitfalls: [
      "No es plano estratificado: las células apicales son globosas, no escamosas.",
      "No es seudoestratificado ciliado: no hay cilios ni caliciformes.",
    ],
    slides: [
      {
        mag: "4x",
        src: "/slides/vejiga-4x.jpg",
        thumb: "/slides/vejiga-4x-thumb.jpg",
        lookFor: "Mucosa plegada como hojas, luz irregular.",
      },
      {
        mag: "10x",
        src: "/slides/vejiga-10x.jpg",
        thumb: "/slides/vejiga-10x-thumb.jpg",
        lookFor: "El urotelio como una cinta densa sobre el conectivo.",
      },
      {
        mag: "40x",
        src: "/slides/vejiga-40x.jpg",
        thumb: "/slides/vejiga-40x-thumb.jpg",
        lookFor: "Células superficiales abovedadas: sello del epitelio de transición.",
      },
    ],
  },
  {
    id: "estomago",
    name: "Estómago",
    latin: "Gaster",
    system: "Digestivo",
    systemId: "digestivo",
    tissue: "epitelial",
    epitheliumId: "cilindrico-simple",
    function:
      "Secreción de moco, ácido y pepsinógeno. El epitelio superficial protege de la autolisis.",
    architecture:
      "Mucosa gruesa con fositas gástricas. El revestimiento es cilíndrico simple mucosecretor. Las glándulas se hunden en la lámina propia.",
    clues: [
      "Fositas gástricas: tubos que entran en la mucosa",
      "Células altas de núcleo basal, una sola capa",
      "No hay vellosidades (eso es intestino)",
    ],
    pitfalls: [
      "A poco aumento la mucosa plegada puede recordar vejiga; busca fositas, no células en cúpula.",
      "El yeyuno también es cilíndrico simple, pero tiene vellosidades, borde en cepillo y caliciformes evidentes.",
    ],
    slides: [
      {
        mag: "4x",
        src: "/slides/estomago-4x.jpg",
        thumb: "/slides/estomago-4x-thumb.jpg",
        lookFor: "Mucosa gruesa con fositas; no hay vellosidades.",
      },
      {
        mag: "10x",
        src: "/slides/estomago-10x.jpg",
        thumb: "/slides/estomago-10x-thumb.jpg",
        lookFor: "Fositas tapizadas por una sola capa de células altas.",
      },
      {
        mag: "40x",
        src: "/slides/estomago-40x.jpg",
        thumb: "/slides/estomago-40x-thumb.jpg",
        lookFor: "Epitelio cilíndrico simple: núcleos basales en una hilera.",
      },
    ],
  },
  {
    id: "esofago",
    name: "Esófago",
    latin: "Oesophagus",
    system: "Digestivo",
    systemId: "digestivo",
    tissue: "epitelial",
    epitheliumId: "plano-estratificado-nq",
    function:
      "Conducir el bolo. El epitelio grueso resiste la abrasión mecánica; al no estar queratinizado, se mantiene húmedo.",
    architecture:
      "Luz estrellada o irregular recubierta por un epitelio grueso. Bajo él, lámina propia y muscular de la mucosa; más afuera, submucosa y muscular.",
    clues: [
      "Epitelio muy grueso, muchas capas de núcleos",
      "Células superficiales planas con núcleo (no queratina anucleada)",
      "Luz amplia, sin vellosidades ni folículos",
    ],
    pitfalls: [
      "Si hubiera una capa anucleada brillante sería piel (queratinizado).",
      "No confundir con vejiga: aquí la superficie es plana, no en cúpula.",
    ],
    slides: [
      {
        mag: "4x",
        src: "/slides/esofago-4x.jpg",
        thumb: "/slides/esofago-4x-thumb.jpg",
        lookFor: "Cinta epitelial gruesa limitando la luz.",
      },
      {
        mag: "10x",
        src: "/slides/esofago-10x.jpg",
        thumb: "/slides/esofago-10x-thumb.jpg",
        lookFor: "Estratos de células que se van aplanando hacia la luz.",
      },
      {
        mag: "40x",
        src: "/slides/esofago-40x.jpg",
        thumb: "/slides/esofago-40x-thumb.jpg",
        lookFor: "Superficie plana nucleada: no queratinizado.",
      },
    ],
  },
  {
    id: "traquea",
    name: "Tráquea",
    latin: "Trachea",
    system: "Respiratorio",
    systemId: "respiratorio",
    tissue: "epitelial",
    epitheliumId: "seudo-ciliado-caliciforme",
    function:
      "El aparato mucociliar atrapa y expulsa partículas. El cartílago mantiene la luz abierta.",
    architecture:
      "Mucosa con epitelio respiratorio, lámina propia, y a menudo cartílago hialino en la pared. El epitelio es seudoestratificado ciliado con caliciformes.",
    clues: [
      "Borde apical ciliado",
      "Núcleos a distintas alturas (seudoestratificado)",
      "Células caliciformes claras; a poco aumento, pared en cinta con cartílago",
    ],
    pitfalls: [
      "El epidídimo también es seudoestratificado, pero tiene estereocilios y espermatozoides, no cilios ni cartílago.",
      "Los cilios se ven a 40× como un ribete ordenado; no es la chapa estriada del intestino.",
    ],
    slides: [
      {
        mag: "4x",
        src: "/slides/traquea-4x.jpg",
        thumb: "/slides/traquea-4x-thumb.jpg",
        lookFor: "Pared en cinta; mucosa delgada hacia la luz.",
      },
      {
        mag: "10x",
        src: "/slides/traquea-10x.jpg",
        thumb: "/slides/traquea-10x-thumb.jpg",
        lookFor: "Epitelio denso; empieza a verse el ribete apical.",
      },
      {
        mag: "40x",
        src: "/slides/traquea-40x.jpg",
        thumb: "/slides/traquea-40x-thumb.jpg",
        lookFor: "Cilios + caliciformes + núcleos a distinta altura.",
      },
    ],
  },
  {
    id: "epididimo",
    name: "Epidídimo",
    latin: "Epididymis",
    system: "Reproductor",
    systemId: "reproductor",
    tissue: "epitelial",
    epitheliumId: "seudo-estereocilios",
    function:
      "Maduración y almacenamiento de espermatozoides. Los estereocilios aumentan la superficie de absorción del líquido.",
    architecture:
      "Corte lleno de túbulos redondos (conducto del epidídimo). Cada túbulo tiene epitelio seudoestratificado con estereocilios y luz ocupada por espermatozoides.",
    clues: [
      "Muchos túbulos redondos, unos junto a otros",
      "Luz con espermatozoides (punteado eosinófilo)",
      "Estereocilios largos e irregulares, no cilios rítmicos",
    ],
    pitfalls: [
      "No es testículo: no hay túbulos seminíferos con espermatogénesis en estratos ni células de Leydig típicas entre ellos.",
      "No es tráquea: no hay cartílago ni caliciformes, y la arquitectura es un ovillo de túbulos.",
    ],
    slides: [
      {
        mag: "4x",
        src: "/slides/epididimo-4x.jpg",
        thumb: "/slides/epididimo-4x-thumb.jpg",
        lookFor: "Campo lleno de cortes transversales de túbulos.",
      },
      {
        mag: "10x",
        src: "/slides/epididimo-10x.jpg",
        thumb: "/slides/epididimo-10x-thumb.jpg",
        lookFor: "Luz con esperma y epitelio alto en cada túbulo.",
      },
      {
        mag: "40x",
        src: "/slides/epididimo-40x.jpg",
        thumb: "/slides/epididimo-40x-thumb.jpg",
        lookFor: "Estereocilios apicales largos: no son cilios.",
      },
    ],
  },
  {
    id: "yeyuno",
    name: "Yeyuno",
    latin: "Jejunum",
    system: "Digestivo",
    systemId: "digestivo",
    tissue: "epitelial",
    epitheliumId: "cilindrico-simple-borde",
    function:
      "Absorción de nutrientes. Las vellosidades y las microvellosidades multiplican la superficie; las caliciformes lubrican.",
    architecture:
      "Vellosidades digitiformes recubiertas por enterocitos (cilíndrico simple con borde en cepillo) y células caliciformes. El eje de cada vellosidad es lámina propia.",
    clues: [
      "Vellosidades en dedo a 4× y 10×",
      "Borde en cepillo rosado continuo (microvellosidades)",
      "Caliciformes intercaladas; una sola capa de núcleos",
    ],
    pitfalls: [
      "El estómago es cilíndrico simple pero tiene fositas, no vellosidades.",
      "El borde en cepillo no son cilios: es una línea fina y uniforme, no pestañas.",
    ],
    slides: [
      {
        mag: "4x",
        src: "/slides/yeyuno-4x.jpg",
        thumb: "/slides/yeyuno-4x-thumb.jpg",
        lookFor: "Perfil de mucosa con vellosidades hacia la luz.",
      },
      {
        mag: "10x",
        src: "/slides/yeyuno-10x.jpg",
        thumb: "/slides/yeyuno-10x-thumb.jpg",
        lookFor: "Vellosidades y caliciformes; eje de conectivo.",
      },
      {
        mag: "40x",
        src: "/slides/yeyuno-40x.jpg",
        thumb: "/slides/yeyuno-40x-thumb.jpg",
        lookFor: "Enterocitos con chapa estriada y caliciformes.",
      },
    ],
  },
  {
    id: "tendon",
    name: "Tendón",
    latin: "Tendo",
    system: "Locomotor",
    systemId: "locomotor",
    tissue: "conectivo",
    epitheliumId: null,
    connectiveId: "denso-regular",
    function:
      "Transmitir la fuerza del músculo al hueso. Los haces paralelos de colágeno resisten la tracción en una dirección.",
    architecture:
      "Tejido conjuntivo denso regular: fibras de colágeno en haces paralelos, con núcleos de fibroblastos alargados y aplanados entre los haces.",
    clues: [
      "Haces de colágeno paralelos, ondulados, eosinófilos",
      "Núcleos de fibroblastos aplastados, en fila",
      "Casi no hay sustancia fundamental visible",
    ],
    pitfalls: [
      "No es músculo esquelético: no hay estriaciones ni hileras de núcleos periféricos.",
      "No es dermis (denso irregular): aquí todos los haces van en la misma dirección.",
    ],
    slides: [
      {
        mag: "10x",
        src: "/slides/tendon-10x.jpg",
        thumb: "/slides/tendon-10x-thumb.jpg",
        lookFor: "Haces paralelos y fibroblastos aplanados: denso regular.",
      },
    ],
  },
  {
    id: "piel",
    name: "Piel gruesa",
    latin: "Cutis",
    system: "Tegumentario",
    systemId: "tegumentario",
    tissue: "epitelial",
    epitheliumId: "plano-estratificado-q",
    function:
      "Barrera. La capa córnea de queratina impermeabiliza; la dermis da sostén.",
    architecture:
      "Epidermis de epitelio plano estratificado queratinizado, con queratina anucleada en superficie (capa córnea). Debajo, tejido conectivo de la dermis.",
    clues: [
      "Capa córnea eosinófila, compacta, sin núcleos",
      "Epitelio grueso de varias capas que se aplanan hacia fuera",
      "Dermis conectiva debajo del epitelio",
    ],
    pitfalls: [
      "El esófago también es plano estratificado, pero NO queratinizado: su superficie sigue nucleada.",
      "No es urotelio: aquí no hay células en cúpula, hay una lámina de queratina.",
    ],
    slides: [
      {
        mag: "10x",
        src: "/slides/piel-10x.jpg",
        thumb: "/slides/piel-10x-thumb.jpg",
        lookFor: "Queratina anucleada sobre el epitelio; dermis debajo.",
      },
    ],
  },
  {
    id: "cordon",
    name: "Cordón umbilical",
    latin: "Funiculus umbilicalis",
    system: "Extraembrionario",
    systemId: "extraembrionario",
    tissue: "conectivo",
    epitheliumId: null,
    connectiveId: "mucoso",
    function:
      "Conectar feto y placenta. La gelatina de Wharton amortigua las dos arterias y la vena.",
    architecture:
      "Arteria de pared gruesa (túnica media de músculo liso, luz en estrella) embebida en gelatina de Wharton: tejido conjuntivo mucoso laxo y pálido.",
    clues: [
      "Vaso concéntrico con túnica media muscular gruesa",
      "Luz irregular o en estrella (arteria)",
      "Matriz pálida alrededor: gelatina de Wharton",
    ],
    pitfalls: [
      "No es un órgano hueco digestivo ni un folículo: el vaso está dentro de conectivo mucoso.",
      "La gelatina no es cartílago (no hay condrocitos en lagunas).",
      "La vena umbilical tiene luz más amplia y pared más delgada.",
    ],
    slides: [
      {
        mag: "10x",
        src: "/slides/cordon-10x.jpg",
        thumb: "/slides/cordon-10x-thumb.jpg",
        lookFor: "Arteria muscular rodeada de gelatina de Wharton.",
      },
    ],
  },
  {
    id: "mama",
    name: "Mama",
    latin: "Glandula mamaria",
    system: "Reproductor",
    systemId: "reproductor",
    tissue: "conectivo",
    epitheliumId: null,
    connectiveId: "adiposo-unilocular",
    function:
      "El parénquima glandular se apoya en un estroma de adiposo unilocular y tejido conjuntivo.",
    architecture:
      "Lóbulos de adipocitos uniloculares (una vacuola; el lípido se ve vacío) separados por septos de tejido conjuntivo. Vasos en el estroma.",
    clues: [
      "Celdas vacías grandes: adipocitos uniloculares",
      "Núcleo periférico aplastado en cada adipocito",
      "Septos de conectivo y algún vaso con luz",
    ],
    pitfalls: [
      "No es tiroides: estas luces están vacías, no llenas de coloide rosa.",
      "No es pulmón: no hay alvéolos ni epitelio respiratorio.",
    ],
    slides: [
      {
        mag: "10x",
        src: "/slides/mama-10x.jpg",
        thumb: "/slides/mama-10x-thumb.jpg",
        lookFor: "Adipocitos vacíos, estroma y un vaso en el campo.",
      },
    ],
  },
  {
    id: "vena-umbilical",
    name: "Vena umbilical",
    latin: "Vena umbilicalis",
    system: "Extraembrionario",
    systemId: "extraembrionario",
    tissue: "muscular",
    epitheliumId: "plano-simple",
    function:
      "Retornar sangre oxigenada de la placenta al feto. La túnica media de músculo liso regula el calibre.",
    architecture:
      "Luz vascular amplia tapizada por endotelio (plano simple). Túnica media de músculo liso. Por fuera, adventicia de tejido conjuntivo.",
    clues: [
      "Luz amplia, a veces con el espacio del corte",
      "Endotelio: una línea de células planas contra la luz",
      "Túnica media de músculo liso; adventicia conectiva por fuera",
    ],
    pitfalls: [
      "La arteria del cordón tiene pared más gruesa y luz en estrella.",
      "El endotelio es plano simple, no un epitelio estratificado de mucosa.",
    ],
    slides: [
      {
        mag: "10x",
        src: "/slides/vena-umbilical-10x.jpg",
        thumb: "/slides/vena-umbilical-10x-thumb.jpg",
        lookFor: "Luz, endotelio, músculo liso y adventicia.",
      },
    ],
  },
];

export const SYSTEMS = [
  { id: "endocrino", name: "Endocrino" },
  { id: "urinario", name: "Urinario" },
  { id: "digestivo", name: "Digestivo" },
  { id: "respiratorio", name: "Respiratorio" },
  { id: "reproductor", name: "Reproductor" },
  { id: "locomotor", name: "Locomotor" },
  { id: "tegumentario", name: "Tegumentario" },
  { id: "extraembrionario", name: "Extraembrionario" },
] as const;

export const TISSUE_FILTERS: { id: TissueKind | "todos"; name: string }[] = [
  { id: "todos", name: "Todos" },
  { id: "epitelial", name: "Epitelial" },
  { id: "conectivo", name: "Conectivo" },
  { id: "muscular", name: "Muscular" },
];

export function getOrgan(id: string) {
  return ORGANS.find((o) => o.id === id);
}

export function getEpithelium(id: string) {
  return EPITHELIA.find((e) => e.id === id);
}

export function getConnective(id: string) {
  return CONNECTIVES.find((c) => c.id === id);
}

export function epitheliumOf(organ: Organ): Epithelium | null {
  return organ.epitheliumId ? getEpithelium(organ.epitheliumId) ?? null : null;
}

export function connectiveOf(organ: Organ): Connective | null {
  return organ.connectiveId ? getConnective(organ.connectiveId) ?? null : null;
}

export function classificationOf(organ: Organ): string {
  return (
    epitheliumOf(organ)?.shortName ??
    connectiveOf(organ)?.shortName ??
    TISSUE_LABEL[organ.tissue]
  );
}

export function preferredSlide(organ: Organ, mag?: Mag): Slide {
  if (mag) {
    const hit = organ.slides.find((s) => s.mag === mag);
    if (hit) return hit;
  }
  return (
    organ.slides.find((s) => s.mag === "40x") ??
    organ.slides.find((s) => s.mag === "10x") ??
    organ.slides[0]!
  );
}

export function atlasThumb(organ: Organ): Slide {
  return organ.slides.find((s) => s.mag === "10x") ?? organ.slides[0]!;
}

export function slideOf(organ: Organ, mag: Mag) {
  return organ.slides.find((s) => s.mag === mag) ?? organ.slides[0]!;
}

export const FIELD_COUNT = ORGANS.reduce((n, o) => n + o.slides.length, 0);

export const MAG_LABEL: Record<Mag, string> = {
  "4x": "4×",
  "10x": "10×",
  "40x": "40×",
};

export const MAG_HINT: Record<Mag, string> = {
  "4x": "Arquitectura del órgano",
  "10x": "Disposición de células y matriz",
  "40x": "Tipo celular y especializaciones",
};

export const TISSUE_HINT: Record<TissueKind, string> = {
  epitelial:
    "Células muy juntas, avascular, apoyado sobre conectivo: epitelio.",
  conectivo:
    "Mucha matriz, células separadas: fibroblastos, adipocitos o fibras de colágeno.",
  muscular:
    "Células alargadas, citoplasma eosinófilo: músculo liso en la pared del vaso.",
  nervioso: "Cuerpos neuronales o fibras nerviosas con mielina.",
};
