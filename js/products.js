// Base de Datos Oficial de Productos - Suministros Industriales LUSER (SM LUSER)

const PRODUCTS_DATA = [
  // --- CATEGORÍA 1: FERRETERÍA INDUSTRIAL ---
  {
    id: "ferr-001",
    name: "Juego de Llaves Combinadas de Impacto Heavy Duty",
    category: "ferreteria",
    categoryName: "Ferretería Industrial",
    code: "SML-FI-1042",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/ferreteria.png",
    shortDesc: "Juego de 14 llaves combinadas en acero cromo vanadio forjado para trabajo pesado.",
    fullDesc: "Llaves combinadas de alto rendimiento diseñadas para resistir torques extremos en mantenimientos de plantas industriales. Acabado fosfatado anticorrosivo, cumplimiento con norma DIN 3113.",
    specs: [
      { label: "Material", value: "Acero Cromo Vanadio (Cr-V 6150)" },
      { label: "Medidas", value: "8mm a 24mm" },
      { label: "Norma ISO/DIN", value: "DIN 3113 / ISO 3318" },
      { label: "Garantía", value: "1 Año de garantía de fábrica" }
    ]
  },
  {
    id: "ferr-002",
    name: "Discos de Corte Abrasivo de Alta Velocidad 4-1/2\"",
    category: "ferreteria",
    categoryName: "Ferretería Industrial",
    code: "SML-FI-2089",
    stock: "Stock Disponible (500+ Unidades)",
    stockType: "in-stock",
    image: "images/ferreteria.png",
    shortDesc: "Discos reforzados de doble malla de fibra de vidrio para corte rápido en acero e inox.",
    fullDesc: "Disco abrasivo de grano de óxido de aluminio súper fino para corte limpio sin rebaba en aceros al carbono y estructuras de acero inoxidable.",
    specs: [
      { label: "Diámetro", value: "4-1/2 Pulgadas (115 mm)" },
      { label: "Espesor", value: "1.2 mm (Ultra Fino)" },
      { label: "Eje", value: "7/8\" (22.23 mm)" },
      { label: "Max RPM", value: "13,300 RPM (80 m/s)" }
    ]
  },
  {
    id: "ferr-003",
    name: "Pistola Neumática de Impacto 1/2\" Pro-Series 1350 Nm",
    category: "ferreteria",
    categoryName: "Ferretería Industrial",
    code: "SML-FI-3011",
    stock: "Pocas Unidades",
    stockType: "low-stock",
    image: "images/ferreteria.png",
    shortDesc: "Herramienta neumática de doble martillo con carcasa de composite liviano.",
    fullDesc: "Llave de impacto neumática con motor de alto torque para talleres mecánicos, ensamble estructural e industria de hidrocarburos. Gatillo sensible de 3 velocidades.",
    specs: [
      { label: "Torque Máximo", value: "1350 Nm (995 ft-lb)" },
      { label: "Mecanismo", value: "Twin Hammer (Doble Martillo)" },
      { label: "Consumo de Aire", value: "5.4 CFM @ 90 PSI" },
      { label: "Entrada de Aire", value: "1/4\" NPT" }
    ]
  },
  {
    id: "ferr-004",
    name: "Juego de Extractores de Rodamientos Interiores y Exteriores",
    category: "ferreteria",
    categoryName: "Ferretería Industrial",
    code: "SML-FI-4055",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/ferreteria.png",
    shortDesc: "Kit universal de 3 patas forjadas para remoción neumática y manual de poleas.",
    fullDesc: "Herramienta de extracción universal para mantenimiento mecánico. Patas reversibles forjadas en matriz drop-forged con husillo de rosca fina templada.",
    specs: [
      { label: "Capacidad", value: "5 a 15 Toneladas" },
      { label: "Apertura Max", value: "250 mm" },
      { label: "Acabado", value: "Cromado antioxidante" }
    ]
  },

  // --- CATEGORÍA 2: INSTRUMENTACIÓN Y MEDICIÓN ---
  {
    id: "inst-001",
    name: "Manómetro de Glicerina Acero Inoxidable 0-100 PSI",
    category: "instrumentacion",
    categoryName: "Instrumentación y Medición",
    code: "SML-IM-1001",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/instrumentacion.png",
    shortDesc: "Manómetro de caratula 2.5\" en acero inox AISI 304 rellenado de glicerina usp.",
    fullDesc: "Diseñado para amortiguar pulsaciones y vibraciones mecánicas en líneas hidráulicas y neumáticas. Excelente legibilidad y grado de protección IP65.",
    specs: [
      { label: "Rango de Presión", value: "0 - 100 PSI / 0 - 7 BAR" },
      { label: "Conexión", value: "1/4\" NPT Posterior o Inferior" },
      { label: "Precisión", value: "Class 1.6% (ASME B40.1)" },
      { label: "Material Caja/Internos", value: "Acero Inox 304 / Bronce o Inox 316" }
    ]
  },
  {
    id: "inst-002",
    name: "Termómetro Bimetálico Orientable 0-200°C Stem 4\"",
    category: "instrumentacion",
    categoryName: "Instrumentación y Medición",
    code: "SML-IM-2044",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/instrumentacion.png",
    shortDesc: "Termómetro industrial de caratula 3\" orientable (Every-Angle) con vástago de 4 pulgadas.",
    fullDesc: "Instrumento bimetálico para medición precisa de temperatura en calderas, tuberías de proceso y tanques industriales. Ajuste cero externo.",
    specs: [
      { label: "Rango Térmico", value: "0 a 200 °C / 32 a 400 °F" },
      { label: "Longitud Vástago", value: "4\" (100 mm) en Inox 316" },
      { label: "Conexión Process", value: "1/2\" NPT Macho Ajustable" },
      { label: "Caratula", value: "3\" Vidrio Templado Inastillable" }
    ]
  },
  {
    id: "inst-003",
    name: "Calibrador Pie de Rey Digital de Precisión 0-150mm",
    category: "instrumentacion",
    categoryName: "Instrumentación y Medición",
    code: "SML-IM-3090",
    stock: "Stock Disponible",
    stockType: "in-stock",
    image: "images/instrumentacion.png",
    shortDesc: "Pie de rey digital de acero inoxidable templado con pantalla LCD grande de 5 dígitos.",
    fullDesc: "Instrumento de medición rápida en mm/pulgadas para control de calidad, metrología y talleres de mecanizado. Incluye estuche rígido de protección.",
    specs: [
      { label: "Resolución", value: "0.01 mm / 0.0005 in" },
      { label: "Precisión", value: "±0.02 mm / 0.001 in" },
      { label: "Funciones", value: "Medición Externa, Interna, Profundidad y Peldaño" },
      { label: "Certificado", value: "Informe de calibración incluido" }
    ]
  },
  {
    id: "inst-004",
    name: "Multímetro Digital True RMS Industrial IP67 CAT IV",
    category: "instrumentacion",
    categoryName: "Instrumentación y Medición",
    code: "SML-IM-4012",
    stock: "Bajo Pedido",
    stockType: "on-demand",
    image: "images/instrumentacion.png",
    shortDesc: "Multímetro profesional para ambientes severos con prueba de aislamiento y temperatura.",
    fullDesc: "Diseñado para resistir caídas de 3 metros y ambientes de alto polvo/humedad. Registro de datos pico min/max/avg y pantalla retroiluminada.",
    specs: [
      { label: "Categoría de Seguridad", value: "CAT IV 600V / CAT III 1000V" },
      { label: "Tensión Max", value: "1000V AC/DC True RMS" },
      { label: "Protección IP", value: "IP67 Estanqueidad total" }
    ]
  },

  // --- CATEGORÍA 3: EPP (EQUIPOS DE PROTECCIÓN PERSONAL) ---
  {
    id: "epp-001",
    name: "Casco de Seguridad Dieléctrico Tipo II Clase E con Trinquete",
    category: "epp",
    categoryName: "EPP (Protección Personal)",
    code: "SML-EPP-101",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/epp.png",
    shortDesc: "Casco industrial en polietileno de alta densidad con suspensión de 4 puntos y barbiquejo.",
    fullDesc: "Protección superior contra impactos laterales y superiores. Resistencia dieléctrica probada a 20,000 Voltios de acuerdo con la norma ANSI Z89.1 y NTC 1523.",
    specs: [
      { label: "Normativa", value: "ANSI Z89.1-2014 / NTC 1523" },
      { label: "Clase Dieléctrica", value: "Clase E (Resistencia a 20kV)" },
      { label: "Ajuste", value: "Rachet / Trinquete Ergonómico" },
      { label: "Ranuras", value: "Universales para orejeras y caretas" }
    ]
  },
  {
    id: "epp-002",
    name: "Guantes de Nitrilo de Calibre Pesado Anticorte Nivel 5",
    category: "epp",
    categoryName: "EPP (Protección Personal)",
    code: "SML-EPP-205",
    stock: "Stock Disponible (1000+ Pares)",
    stockType: "in-stock",
    image: "images/epp.png",
    shortDesc: "Guantes tejidos en fibra HPPE con recubrimiento de nitrilo micro-poroso antiderrapante.",
    fullDesc: "Excelente agarre en seco y en presencia de aceites minerales. Protección extrema contra corte de láminas de acero y manipulación de vidrios.",
    specs: [
      { label: "Resistencia al Corte", value: "ANSI A4 / EN 388 Nivel 5" },
      { label: "Recubrimiento", value: "Nitrilo Micro-Foam en palma" },
      { label: "Tallas Disponibles", value: "S, M, L, XL" }
    ]
  },
  {
    id: "epp-003",
    name: "Bota de Seguridad Dieléctrica Punta de Polímero (Non-Metallic)",
    category: "epp",
    categoryName: "EPP (Protección Personal)",
    code: "SML-EPP-309",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/epp.png",
    shortDesc: "Bota en cuero semigraso con suela de poliuretano bidensidad antideslizante.",
    fullDesc: "Calzado de seguridad libre de piezas metálicas para aeropuertos y zonas eléctricas. Puntera de composite resistente a impactos de 200 Joules.",
    specs: [
      { label: "Puntera", value: "Composite / Polímero (Resiste 200 J)" },
      { label: "Propiedad Dieléctrica", value: "ASTM F2413 18kV 60Hz" },
      { label: "Suela", value: "PU-PU Bidensidad Resistente a Hidrocarburos" }
    ]
  },
  {
    id: "epp-004",
    name: "Arnés Multipropósito de 4 Puntos de Anclaje Dielectric Pro",
    category: "epp",
    categoryName: "EPP (Protección Personal)",
    code: "SML-EPP-412",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/epp.png",
    shortDesc: "Arnés industrial para trabajo en alturas con anillos dieléctricos en D acolchado.",
    fullDesc: "Diseñado para linieros y trabajo de mantenimiento industrial en alturas. Anillo dorsal, esternal y laterales recubiertos con polímero aislante.",
    specs: [
      { label: "Certificación", value: "ANSI Z359.11-2021 / OSHA 1926" },
      { label: "Capacidad del Usuario", value: "Hasta 140 kg (310 lbs)" },
      { label: "Anillos en D", value: "4 Anillos con Aislamiento 9kV" }
    ]
  },

  // --- CATEGORÍA 4: REPUESTOS PARA MAQUINARIA Y RODAMIENTOS ---
  {
    id: "rep-001",
    name: "Rodamiento de Rodillos Cónicos de Precisión SKF/FAG Series",
    category: "repuestos",
    categoryName: "Repuestos para Maquinaria",
    code: "SML-RM-1088",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/repuestos.png",
    shortDesc: "Rodamiento de alta capacidad de carga radial y axial combinada para ejes de transmisión.",
    fullDesc: "Elementos rodantes en acero al cromo degasificado al vacío. Ideal para reductores de velocidad, cajas de cambios e industria papelera/cementera.",
    specs: [
      { label: "Marcas Disponibles", value: "SKF, FAG, Timken, NSK" },
      { label: "Tolerancia", value: "Clase P6 / ABEC 3" },
      { label: "Juego Interno", value: "C3 / C4 para alta temperatura" },
      { label: "Lubricación", value: "Apto para grasa y baño de aceite" }
    ]
  },
  {
    id: "rep-002",
    name: "Filtro Hidráulico Industrial de Retorno 10 Micrones",
    category: "repuestos",
    categoryName: "Repuestos para Maquinaria",
    code: "SML-RM-2030",
    stock: "Stock Disponible",
    stockType: "in-stock",
    image: "images/repuestos.png",
    shortDesc: "Cartucho filtrante de microfibra de vidrio plisada para centrales hidráulicas.",
    fullDesc: "Retención de contaminantes finos para prolongar la vida útil de bombas de pistones y servoválvulas en maquinaria pesada.",
    specs: [
      { label: "Eficiencia de Filtración", value: "Beta Ratio B10(c) ≥ 200" },
      { label: "Presión de Colapso", value: "21 BAR / 305 PSI" },
      { label: "Compatibilidad Fluidos", value: "Aceites minerales ISO VG 32, 46, 68" }
    ]
  },
  {
    id: "rep-003",
    name: "Correa de Transmisión Industrial Sección V (SPA / SPB / SPC)",
    category: "repuestos",
    categoryName: "Repuestos para Maquinaria",
    code: "SML-RM-3045",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/repuestos.png",
    shortDesc: "Correas dentadas de alto rendimiento con cuerdas de poliéster tratadas antiestáticas.",
    fullDesc: "Banda de transmisión trapezoidal libre de mantenimiento para compresores, ventiladores de tiro forzado y molinos de trituración.",
    specs: [
      { label: "Perfil de Correa", value: "SPA, SPB, SPC, 3V, 5V, 8V" },
      { label: "Resistencia Térmica", value: "-40 °C a +100 °C" },
      { label: "Resistencia Química", value: "Resistente a aceites y calor de fricción" }
    ]
  },
  {
    id: "rep-004",
    name: "Sello Mecánico de Cartucho Doble para Bombas Centrífugas",
    category: "repuestos",
    categoryName: "Repuestos para Maquinaria",
    code: "SML-RM-4099",
    stock: "Bajo Pedido Técnico",
    stockType: "on-demand",
    image: "images/repuestos.png",
    shortDesc: "Sello mecánico pre-ensamblado con caras de Carburo de Silicio vs Carburo de Tungsteno.",
    fullDesc: "Solución de sellado hermético libre de fugas para fluidos agresivos, químicos y lodos en plantas procesadoras de alimentos e industria química.",
    specs: [
      { label: "Presión Máxima", value: "25 BAR / 360 PSI" },
      { label: "Velocidad de Eje", value: "Hasta 20 m/s" },
      { label: "Material Elastómeros", value: "Viton (FKM) / Kalrez (FFKM)" }
    ]
  },

  // --- CATEGORÍA 5: MATERIAL ELÉCTRICO INDUSTRIAL ---
  {
    id: "elec-001",
    name: "Contactor Trifásico Industrial 3P 40A Bobina 220V AC",
    category: "electrico",
    categoryName: "Material Eléctrico Industrial",
    code: "SML-EL-1050",
    stock: "Entrega Inmediata",
    stockType: "in-stock",
    image: "images/electrico.png",
    shortDesc: "Contactor magnético de potencia para maniobra y arranque directo de motores.",
    fullDesc: "Contactor tripolar de categoría AC-3 para aplicaciones severas. Equipado con bloque de contactos auxiliares 1NO + 1NC y montaje en Riel DIN 35mm.",
    specs: [
      { label: "Corriente Nominal", value: "40A AC-3 / 60A AC-1" },
      { label: "Potencia Motor", value: "18.5 kW / 25 HP @ 440V" },
      { label: "Tensión Bobina", value: "220V AC 50/60Hz" },
      { label: "Norma Internacional", value: "IEC/EN 60947-4-1" }
    ]
  },
  {
    id: "elec-002",
    name: "Sensor de Proximidad Inductivo M18 NPN/PNP NO 8mm",
    category: "electrico",
    categoryName: "Material Eléctrico Industrial",
    code: "SML-EL-2015",
    stock: "Stock Disponible",
    stockType: "in-stock",
    image: "images/electrico.png",
    shortDesc: "Sensor de detección de metales con cuerpo de latón niquelado e indicador LED.",
    fullDesc: "Utilizado en líneas de empacado y conteo de piezas metálicas. Resistencia a interferencia electromagnética y protección contra cortocircuito.",
    specs: [
      { label: "Distancia de Detección", value: "8 mm (Flush / Enrasado)" },
      { label: "Voltaje de Operación", value: "10 - 30 VDC" },
      { label: "Frecuencia Conmutación", value: "500 Hz" },
      { label: "Grado de Protección", value: "IP67 Estanco a líquidos" }
    ]
  },
  {
    id: "elec-003",
    name: "Cable de Potencia Uso Rudo N2XY / STOOW 4x10 AWG",
    category: "electrico",
    categoryName: "Material Eléctrico Industrial",
    code: "SML-EL-3080",
    stock: "Entrega por Metraje",
    stockType: "in-stock",
    image: "images/electrico.png",
    shortDesc: "Cable multiconductor de cobre flexible aislado en XLPE con cubierta exterior de Neopreno.",
    fullDesc: "Cable súper flexible para alimentación de maquinaria móvil, grúas viajeras, bombas sumergibles y equipos de minería en condiciones exigentes.",
    specs: [
      { label: "Calibre", value: "4 Conductores x 10 AWG (Cobre 100%)" },
      { label: "Tensión de Trabajo", value: "600 Voltios" },
      { label: "Temperatura Máxima", value: "90 °C en ambiente seco/húmedo" },
      { label: "Resistencia", value: "Alta resistencia a aceites, ozono y abrasión" }
    ]
  },
  {
    id: "elec-004",
    name: "Tablero Eléctrico de Control Autosoportado NEMA 4X Inox",
    category: "electrico",
    categoryName: "Material Eléctrico Industrial",
    code: "SML-EL-4022",
    stock: "Fabricación a Medida",
    stockType: "on-demand",
    image: "images/electrico.png",
    shortDesc: "Gabinete metálico en acero inox 304 con chapa de seguridad de un punto y platina de montaje.",
    fullDesc: "Envolvente estanca para instalación de variadores de frecuencia, PLC y arrancadores suaves en ambientes corrosivos y de intemperie.",
    specs: [
      { label: "Dimensiones Standard", value: "800 x 600 x 300 mm (Otras según requerimiento)" },
      { label: "Grado de Protección", value: "NEMA 4X / IP66 / IK10" },
      { label: "Material", value: "Acero Inoxidable AISI 304 1.5mm" }
    ]
  }
];

// Datos de Categorías con iconos y estadísticas
const CATEGORIES_DATA = [
  {
    id: "todas",
    name: "Todas las Líneas",
    icon: "fa-layer-group",
    count: PRODUCTS_DATA.length,
    description: "Explora la totalidad de insumos industriales disponibles en SM LUSER."
  },
  {
    id: "ferreteria",
    name: "Ferretería Industrial",
    icon: "fa-wrench",
    count: PRODUCTS_DATA.filter(p => p.category === "ferreteria").length,
    description: "Herramientas de mano, equipos neumáticos, abrasivos y fijaciones."
  },
  {
    id: "instrumentacion",
    name: "Instrumentación y Medición",
    icon: "fa-gauge-high",
    count: PRODUCTS_DATA.filter(p => p.category === "instrumentacion").length,
    description: "Manómetros, termómetros bimetálicos, calibradores y transmisores."
  },
  {
    id: "epp",
    name: "EPP (Protección Personal)",
    icon: "fa-user-shield",
    count: PRODUCTS_DATA.filter(p => p.category === "epp").length,
    description: "Cascos dieléctricos, guantes anticorte, botas de seguridad y arneses."
  },
  {
    id: "repuestos",
    name: "Repuestos para Maquinaria",
    icon: "fa-gears",
    count: PRODUCTS_DATA.filter(p => p.category === "repuestos").length,
    description: "Rodamientos SKF/FAG, filtros hidráulicos, correas y sellos mecánicos."
  },
  {
    id: "electrico",
    name: "Material Eléctrico Industrial",
    icon: "fa-bolt",
    count: PRODUCTS_DATA.filter(p => p.category === "electrico").length,
    description: "Contactores, sensores inductivos, cables uso rudo y tableros NEMA."
  }
];

// Exponer globalmente para la aplicación
window.PRODUCTS_DATA = PRODUCTS_DATA;
window.CATEGORIES_DATA = CATEGORIES_DATA;
