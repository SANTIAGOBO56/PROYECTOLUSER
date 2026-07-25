// Base de Datos Oficial de Productos - Suministros Industriales LUSER (SM LUSER)

const PRODUCTS_DATA = [
  // 1. EQUIPOS Y PARTES DE INSTRUMENTACIÓN
  {
    id: "inst-001",
    name: "Manómetros y Termómetros Industriales",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-100",
    image: "images/instrumentacion.png",
    shortDesc: "Instrumentos de medición, indicadores y sensores para control de procesos industriales.",
    fullDesc: "Soluciones completas en instrumentación, incluyendo manómetros, termómetros, sensores de presión y temperatura, elementos de instrumentación y accesorios para medición confiable en plantas.",
    specs: [
      { label: "Opciones", value: "Analógicos y digitales" },
      { label: "Uso", value: "Medición y control de procesos" }
    ]
  },
  
  // 2. BOMBAS Y CONSUMIBLES
  {
    id: "bombas-001",
    name: "Bombas Industriales y Consumibles",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-100",
    image: "images/repuestos.png",
    shortDesc: "Equipos de bombeo para fluidos industriales y repuestos especializados.",
    fullDesc: "Suministro de bombas centrífugas, dosificadoras, repuestos de desgaste y consumibles para sistemas de transferencia de fluidos en industria química y petrolera.",
    specs: [
      { label: "Tipos", value: "Centrífugas, Neumáticas, Dosificadoras" },
      { label: "Repuestos", value: "Sellos mecánicos, impulsores, rodamientos" }
    ]
  },

  // 3. MANEJO Y CONTROL DE FLUIDOS
  {
    id: "fluid-001",
    name: "Válvulas y Accesorios de Tubería",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-100",
    image: "images/ferreteria.png",
    shortDesc: "Válvulas, bridas y racores para manejo seguro de fluidos.",
    fullDesc: "Línea completa para control de fluidos que incluye válvulas de bola, compuerta, aguja, así como bridas, racores y accesorios para conexiones seguras en alta y baja presión.",
    specs: [
      { label: "Materiales", value: "Acero Inoxidable, Acero al Carbón, Bronce" },
      { label: "Conexiones", value: "NPT, Bridadas, Soldables" }
    ]
  },
  {
    id: "fluid-002",
    name: "Ring Gasket / Junta RTJ",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-200",
    image: "images/ferreteria.png",
    shortDesc: "Juntas metálicas RTJ y empaques industriales para alta presión.",
    fullDesc: "Anillos metálicos RTJ (Ring Type Joint) y juntas espirometálicas diseñadas para aplicaciones de alta presión y temperatura en el sector de hidrocarburos. (Especifique material y diámetro en la cotización).",
    specs: [
      { label: "Perfiles", value: "Ovalados, Octagonales (Style R, RX, BX)" },
      { label: "Aplicación", value: "Bridas RTJ (API 6A / ASME B16.20)" }
    ]
  },

  // 4. TRANSMISIÓN Y POTENCIA
  {
    id: "transm-001",
    name: "Elementos de Transmisión Mecánica",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-100",
    image: "images/repuestos.png",
    shortDesc: "Rodamientos, poleas, correas y reductores de velocidad.",
    fullDesc: "Componentes mecánicos para transmisión de potencia, incluyendo rodamientos, chumaceras, correas industriales, cadenas, piñones y repuestos de alta durabilidad.",
    specs: [
      { label: "Componentes", value: "Correas, rodamientos, cadenas" },
      { label: "Industria", value: "Manufactura, minería, hidrocarburos" }
    ]
  },

  // 5. HERRAMIENTAS INDUSTRIALES
  {
    id: "herr-ind-001",
    name: "Herramientas Industriales y Neumáticas",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-100",
    image: "images/ferreteria.png",
    shortDesc: "Equipos neumáticos, eléctricos y de impacto pesado.",
    fullDesc: "Herramientas de potencia para trabajo continuo en plantas, talleres y perforación. Llaves de impacto neumáticas, pulidoras y taladros industriales.",
    specs: [
      { label: "Energía", value: "Neumática, Eléctrica, Batería" },
      { label: "Uso", value: "Trabajo pesado (Heavy Duty)" }
    ]
  },

  // 6. PRODUCTOS ELÉCTRICOS
  {
    id: "elec-001",
    name: "Insumos Eléctricos y Tableros",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-100",
    image: "images/electrico.png",
    shortDesc: "Cables, contactores, tableros y materiales eléctricos para industria.",
    fullDesc: "Suministro de componentes eléctricos de potencia y control, canalizaciones, tableros NEMA, iluminación industrial y cableado estructurado.",
    specs: [
      { label: "Voltaje", value: "Baja y Media Tensión" },
      { label: "Componentes", value: "Contactores, breakes, cables" }
    ]
  },

  // 7. HERRAMIENTAS MANUALES
  {
    id: "herr-man-001",
    name: "Herramientas Manuales de Precisión",
    category: "herramientas_man",
    categoryName: "Herramientas Manuales",
    code: "SML-HM-100",
    image: "images/ferreteria.png",
    shortDesc: "Llaves, dados, alicates y herramientas de torsión manual.",
    fullDesc: "Amplio catálogo de herramientas manuales ergonómicas y de alta resistencia (Cr-V). Juegos de llaves combinadas, destornilladores dieléctricos y extractores.",
    specs: [
      { label: "Material", value: "Acero Cromo Vanadio forjado" },
      { label: "Tipo", value: "Dieléctricas, Antichispa, Estándar" }
    ]
  },

  // 8. MANGUERAS Y CONECTORES INDUSTRIALES
  {
    id: "mang-001",
    name: "Mangueras y Conectores de Alta Presión",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-100",
    image: "images/ferreteria.png",
    shortDesc: "Mangueras hidráulicas, industriales y racores para conducción.",
    fullDesc: "Soluciones de conducción flexibles para aire, agua, químicos e hidrocarburos. Acoples rápidos, conectores hidráulicos y mangueras armadas a medida.",
    specs: [
      { label: "Aplicaciones", value: "Hidráulica, Neumática, Químicos" },
      { label: "Presión", value: "Alta, Media y Baja presión" }
    ]
  },

  // 9. PINTURAS
  {
    id: "pint-001",
    name: "Pinturas Industriales y Recubrimientos",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-100",
    image: "images/ferreteria.png",
    shortDesc: "Recubrimientos epóxicos y pinturas anticorrosivas.",
    fullDesc: "Sistemas de recubrimiento para protección de estructuras metálicas, tanques y tuberías expuestas a ambientes agresivos y corrosión marina.",
    specs: [
      { label: "Tipo", value: "Epóxicas, Poliuretanos, Alquídicas" },
      { label: "Uso", value: "Protección anticorrosiva" }
    ]
  },

  // 10. ELEMENTOS DE PROTECCIÓN PERSONAL – EPP
  {
    id: "epp-001",
    name: "Elementos de Seguridad Industrial (EPP)",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-100",
    image: "images/epp.png",
    shortDesc: "Cascos, gafas, guantes y protección en alturas.",
    fullDesc: "Equipos certificados para la protección integral del trabajador. Protección visual, auditiva, respiratoria, calzado de seguridad y equipos para trabajo en alturas.",
    specs: [
      { label: "Líneas", value: "Cabeza, manos, pies, alturas" },
      { label: "Normativa", value: "ANSI, OSHA, EN" }
    ]
  },

  // 11. LUBRICANTES Y ADHESIVOS
  {
    id: "lub-001",
    name: "Lubricantes, Grasas y Adhesivos Industriales",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-100",
    image: "images/repuestos.png",
    shortDesc: "Grasas especiales, aceites de corte y adhesivos selladores.",
    fullDesc: "Productos químicos para mantenimiento de maquinaria. Lubricantes de alto desempeño para rodamientos, trabarroscas, selladores de silicona y desengrasantes.",
    specs: [
      { label: "Productos", value: "Grasas sintéticas, Aceites, Trabarroscas" },
      { label: "Aplicación", value: "Mantenimiento preventivo y correctivo" }
    ]
  }
];

// Datos de Categorías con iconos y conteo dinámico
const CATEGORIES_DATA = [
  {
    id: "todas",
    name: "Todas las Categorías",
    icon: "fa-layer-group",
    count: PRODUCTS_DATA.length,
    description: "Explora la totalidad de suministros y soluciones industriales en SM LUSER."
  },
  {
    id: "instrumentacion",
    name: "Equipos y Partes de Instrumentación",
    icon: "fa-gauge-high",
    count: PRODUCTS_DATA.filter(p => p.category === "instrumentacion").length,
    description: "Instrumentación, medición y control de procesos."
  },
  {
    id: "bombas",
    name: "Bombas y Consumibles",
    icon: "fa-water",
    count: PRODUCTS_DATA.filter(p => p.category === "bombas").length,
    description: "Bombas, repuestos y consumibles relacionados."
  },
  {
    id: "fluidos",
    name: "Manejo y Control de Fluidos",
    icon: "fa-faucet-drip",
    count: PRODUCTS_DATA.filter(p => p.category === "fluidos").length,
    description: "Válvulas, bridas, racores, empaques y juntas RTJ."
  },
  {
    id: "transmision",
    name: "Transmisión y Potencia",
    icon: "fa-gears",
    count: PRODUCTS_DATA.filter(p => p.category === "transmision").length,
    description: "Rodamientos, poleas y elementos de transmisión mecánica."
  },
  {
    id: "herramientas_ind",
    name: "Herramientas Industriales",
    icon: "fa-screwdriver-wrench",
    count: PRODUCTS_DATA.filter(p => p.category === "herramientas_ind").length,
    description: "Equipos de potencia neumáticos y de alto impacto."
  },
  {
    id: "electrico",
    name: "Productos Eléctricos",
    icon: "fa-bolt",
    count: PRODUCTS_DATA.filter(p => p.category === "electrico").length,
    description: "Cables, contactores y tableros industriales."
  },
  {
    id: "herramientas_man",
    name: "Herramientas Manuales",
    icon: "fa-wrench",
    count: PRODUCTS_DATA.filter(p => p.category === "herramientas_man").length,
    description: "Llaves, dados y herramientas de precisión."
  },
  {
    id: "mangueras",
    name: "Mangueras y Conectores",
    icon: "fa-droplet",
    count: PRODUCTS_DATA.filter(p => p.category === "mangueras").length,
    description: "Mangueras, acoples y conectores industriales."
  },
  {
    id: "pinturas",
    name: "Pinturas",
    icon: "fa-paint-roller",
    count: PRODUCTS_DATA.filter(p => p.category === "pinturas").length,
    description: "Recubrimientos y pinturas anticorrosivas."
  },
  {
    id: "epp",
    name: "Protección Personal (EPP)",
    icon: "fa-user-shield",
    count: PRODUCTS_DATA.filter(p => p.category === "epp").length,
    description: "Seguridad industrial, protección en alturas y cascos."
  },
  {
    id: "lubricantes",
    name: "Lubricantes y Adhesivos",
    icon: "fa-oil-can",
    count: PRODUCTS_DATA.filter(p => p.category === "lubricantes").length,
    description: "Grasas, lubricantes y selladores industriales."
  }
];

// Exponer globalmente para la aplicación
window.PRODUCTS_DATA = PRODUCTS_DATA;
window.CATEGORIES_DATA = CATEGORIES_DATA;
