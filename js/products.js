// Base de Datos Oficial de Productos - Suministros Industriales LUSER (SM LUSER)
// Catálogo Completo — 11 Líneas de Negocio

const PRODUCTS_DATA = [

  // ═══════════════════════════════════════════════════════════════
  // 1. EQUIPOS Y PARTES DE INSTRUMENTACIÓN
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inst-001",
    name: "Manómetros de Glicerina",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-101",
    image: "images/instrumentacion.png",
    shortDesc: "Manómetros de acero inoxidable con glicerina para medición de presión en líneas de proceso.",
    fullDesc: "Manómetros industriales con caja en acero inoxidable AISI 316 y relleno de glicerina, ideales para aplicaciones con vibración y pulsación. Conexión inferior o posterior NPT. Rangos de 0 a 10,000 PSI.",
    specs: [
      { label: "Diámetros", value: "2½\", 4\", 6\"" },
      { label: "Conexión", value: "¼\" NPT, ½\" NPT" },
      { label: "Material", value: "Acero Inoxidable AISI 316" },
      { label: "Norma", value: "EN 837-1 / ASME B40.100" }
    ]
  },
  {
    id: "inst-002",
    name: "Termómetros Bimetálicos",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-102",
    image: "images/instrumentacion.png",
    shortDesc: "Termómetros bimetálicos industriales para medición directa de temperatura en procesos.",
    fullDesc: "Termómetros de inmersión con sensor bimetálico, caja de acero inoxidable y carátula de fácil lectura. Ideales para tanques, tuberías y equipos de proceso.",
    specs: [
      { label: "Rango", value: "-30°C a +500°C" },
      { label: "Longitud vástago", value: "100mm, 150mm, 200mm, 300mm" },
      { label: "Conexión", value: "½\" NPT posterior / inferior" },
      { label: "Precisión", value: "±1% del fondo de escala" }
    ]
  },
  {
    id: "inst-003",
    name: "Sensores de Presión y Temperatura",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-103",
    image: "images/instrumentacion.png",
    shortDesc: "Transmisores y sensores electrónicos para control de procesos industriales.",
    fullDesc: "Sensores de presión con salida 4-20mA y transmisores de temperatura tipo RTD/PT100. Compatibles con PLC y sistemas SCADA para monitoreo continuo.",
    specs: [
      { label: "Salida", value: "4-20mA / 0-10V" },
      { label: "Alimentación", value: "12-36 VDC" },
      { label: "Precisión", value: "±0.25%" },
      { label: "Protección", value: "IP65 / IP67" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. BOMBAS Y CONSUMIBLES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "bombas-001",
    name: "Bombas Centrífugas Industriales",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-101",
    image: "images/repuestos.png",
    shortDesc: "Bombas centrífugas de alto caudal para transferencia de fluidos industriales.",
    fullDesc: "Bombas centrífugas horizontales y verticales para aplicaciones de transferencia de agua, químicos y petróleo. Construcción en acero inoxidable y hierro fundido según requerimiento.",
    specs: [
      { label: "Caudal", value: "Hasta 500 GPM" },
      { label: "Presión", value: "Hasta 300 PSI" },
      { label: "Motor", value: "Eléctrico trifásico / monofásico" },
      { label: "Sellos", value: "Mecánicos simples y dobles" }
    ]
  },
  {
    id: "bombas-002",
    name: "Bombas Dosificadoras",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-102",
    image: "images/repuestos.png",
    shortDesc: "Bombas de diafragma para dosificación precisa de químicos y aditivos.",
    fullDesc: "Bombas dosificadoras de diafragma electromagnéticas y motorizadas para inyección precisa de inhibidores de corrosión, biocidas, coagulantes y demulsificantes.",
    specs: [
      { label: "Caudal", value: "0.5 a 200 L/h" },
      { label: "Presión máx.", value: "Hasta 20 bar" },
      { label: "Tipo", value: "Diafragma / Pistón" },
      { label: "Aplicación", value: "Tratamiento de agua, Oil & Gas" }
    ]
  },
  {
    id: "bombas-003",
    name: "Sellos Mecánicos y Repuestos de Bomba",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-103",
    image: "images/repuestos.png",
    shortDesc: "Sellos mecánicos, impulsores, anillos de desgaste y kits de reparación para bombas.",
    fullDesc: "Repuestos de alta calidad para bombas centrífugas y dosificadoras. Sellos mecánicos en carburo de silicio, impulsores en acero inoxidable y kits completos de mantenimiento.",
    specs: [
      { label: "Materiales", value: "SiC, Tungsteno, Viton, PTFE" },
      { label: "Compatibilidad", value: "Multimarca" },
      { label: "Tipos", value: "Sello simple, doble, cartucho" },
      { label: "Norma", value: "API 682 / DIN 24960" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. MANEJO Y CONTROL DE FLUIDOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "fluid-001",
    name: "Válvulas de Bola y Compuerta",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-101",
    image: "images/ferreteria.png",
    shortDesc: "Válvulas industriales de bola, compuerta, globo y aguja en múltiples materiales.",
    fullDesc: "Válvulas de bola flotante y trunnion, válvulas de compuerta y globo en acero al carbón, inoxidable y bronce. Para líneas de alta y baja presión en plantas de proceso.",
    specs: [
      { label: "Tamaños", value: "½\" a 24\"" },
      { label: "Clase", value: "150, 300, 600, 900, 1500 lb" },
      { label: "Materiales", value: "A105, A182 F316, Bronce" },
      { label: "Norma", value: "API 6D / ASME B16.34" }
    ]
  },
  {
    id: "fluid-002",
    name: "Ring Gasket / Junta RTJ",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-102",
    image: "images/ferreteria.png",
    shortDesc: "Juntas metálicas RTJ, espirometálicas y empaques planos para bridas industriales.",
    fullDesc: "Anillos metálicos RTJ (Ring Type Joint) en perfil ovalado y octagonal, juntas espirometálicas con relleno de grafito/PTFE y empaques planos en diferentes materiales.",
    specs: [
      { label: "Perfiles RTJ", value: "R, RX, BX — Ovalado, Octagonal" },
      { label: "Materiales", value: "Soft Iron, SS304, SS316, Inconel" },
      { label: "Tamaños", value: "½\" a 24\" (según ASME B16.20)" },
      { label: "Norma", value: "API 6A / ASME B16.20" }
    ]
  },
  {
    id: "fluid-003",
    name: "Racores y Accesorios de Tubería",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-103",
    image: "images/ferreteria.png",
    shortDesc: "Fittings roscados, soldables, bridas y accesorios de compresión para tubería.",
    fullDesc: "Amplia línea de accesorios de tubería: codos, tees, uniones, reducciones, niples, bridas y fittings de compresión para conexiones seguras en alta y baja presión.",
    specs: [
      { label: "Tipos", value: "Roscados NPT, Soldables, Compresión" },
      { label: "Materiales", value: "Acero Inox 316, Acero al Carbón" },
      { label: "Presión", value: "3000#, 6000#, 10000# PSI" },
      { label: "Norma", value: "ASME B16.11 / B16.5" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. TRANSMISIÓN Y POTENCIA
  // ═══════════════════════════════════════════════════════════════
  {
    id: "transm-001",
    name: "Rodamientos Industriales",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-101",
    image: "images/repuestos.png",
    shortDesc: "Rodamientos de bolas, rodillos y chumaceras para maquinaria industrial.",
    fullDesc: "Rodamientos rígidos de bolas, de rodillos cónicos, cilíndricos, axiales y chumaceras tipo pedestal. Marcas reconocidas y compatibles para mantenimiento predictivo.",
    specs: [
      { label: "Tipos", value: "Bolas, rodillos cónicos, cilíndricos" },
      { label: "Series", value: "6200, 6300, 22200, 30200" },
      { label: "Materiales", value: "Acero al cromo GCr15" },
      { label: "Aplicación", value: "Motores, reductores, transportadores" }
    ]
  },
  {
    id: "transm-002",
    name: "Correas y Poleas Industriales",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-102",
    image: "images/repuestos.png",
    shortDesc: "Correas en V, sincrónicas y poleas de aluminio/hierro para transmisión mecánica.",
    fullDesc: "Correas de transmisión tipo A, B, C, D y correas sincrónicas (HTD, RPP). Poleas de 1 a 8 canales en aluminio, hierro y acero para reductores y motores eléctricos.",
    specs: [
      { label: "Tipos correa", value: "V clásica (A/B/C), Sincrónica, Micro-V" },
      { label: "Poleas", value: "1 a 8 canales, aluminio/hierro" },
      { label: "Diámetros", value: "Desde 60mm hasta 600mm" },
      { label: "Norma", value: "DIN 2211 / ISO 5290" }
    ]
  },
  {
    id: "transm-003",
    name: "Cadenas y Piñones",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-103",
    image: "images/repuestos.png",
    shortDesc: "Cadenas de rodillos, cadenas de transporte y piñones de acero templado.",
    fullDesc: "Cadenas industriales de rodillos simples y dobles, cadenas de arrastre para transportadores y piñones de acero templado con buje cónico o piloto.",
    specs: [
      { label: "Pasos", value: "25, 35, 40, 50, 60, 80, 100" },
      { label: "Material cadena", value: "Acero al carbón / Inoxidable" },
      { label: "Piñones", value: "Acero C45 templado" },
      { label: "Norma", value: "ANSI B29.1 / DIN 8187" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. HERRAMIENTAS INDUSTRIALES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "herr-ind-001",
    name: "Llaves de Impacto Neumáticas",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-101",
    image: "images/ferreteria.png",
    shortDesc: "Llaves de impacto neumáticas de ½\" y ¾\" para trabajo pesado en plantas y talleres.",
    fullDesc: "Herramientas neumáticas de alto torque para apriete y desapriete de pernos en bridas, equipos rotativos y estructuras metálicas. Diseño compacto y ergonómico.",
    specs: [
      { label: "Cuadrante", value: "½\", ¾\", 1\"" },
      { label: "Torque máx.", value: "Hasta 2,500 Nm" },
      { label: "Consumo aire", value: "4-8 CFM @ 90 PSI" },
      { label: "Peso", value: "2.5 a 8 kg" }
    ]
  },
  {
    id: "herr-ind-002",
    name: "Pulidoras y Esmeriles Industriales",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-102",
    image: "images/ferreteria.png",
    shortDesc: "Pulidoras angulares eléctricas y neumáticas, esmeriles de banco y discos de corte.",
    fullDesc: "Equipos de desbaste y corte para metales. Pulidoras de 4½\", 7\" y 9\", esmeriles de banco de pedestal y amplia gama de discos de corte y desbaste.",
    specs: [
      { label: "Potencia", value: "750W a 2400W" },
      { label: "Discos", value: "4½\", 7\", 9\", 14\"" },
      { label: "RPM", value: "6,000 a 11,000" },
      { label: "Uso", value: "Corte, desbaste, pulido de metales" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. PRODUCTOS ELÉCTRICOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "elec-001",
    name: "Contactores y Relés Industriales",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-101",
    image: "images/electrico.png",
    shortDesc: "Contactores trifásicos, relés térmicos, guardamotores y arrancadores industriales.",
    fullDesc: "Componentes de potencia y control para tableros eléctricos industriales. Contactores de 9A a 630A, relés de sobrecarga térmicos y electrónicos, arrancadores directos y estrella-triángulo.",
    specs: [
      { label: "Corriente", value: "9A a 630A" },
      { label: "Voltaje bobina", value: "24V, 110V, 220V, 440V" },
      { label: "Categoría", value: "AC-3 (motores)" },
      { label: "Montaje", value: "Riel DIN / Placa de montaje" }
    ]
  },
  {
    id: "elec-002",
    name: "Cables y Conductores Eléctricos",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-102",
    image: "images/electrico.png",
    shortDesc: "Cables de potencia, control, instrumentación y uso rudo para instalaciones industriales.",
    fullDesc: "Línea completa de cables y conductores: cables de potencia THHN/THWN, cables de control multipar, cable de instrumentación blindado y cable uso rudo para ambientes hostiles.",
    specs: [
      { label: "Calibres", value: "AWG 14 a 4/0" },
      { label: "Tipos", value: "THHN, THWN, TSJ, ST, Instrumentación" },
      { label: "Voltaje", value: "600V, 1000V, 2000V" },
      { label: "Norma", value: "NTC 2050 / NEC" }
    ]
  },
  {
    id: "elec-003",
    name: "Tableros Eléctricos NEMA",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-103",
    image: "images/electrico.png",
    shortDesc: "Gabinetes y tableros eléctricos NEMA 4, 4X, 12 para ambientes industriales y exteriores.",
    fullDesc: "Tableros de distribución y control en acero inoxidable y acero al carbón con pintura epóxica. Clasificación NEMA 4, 4X, 7 y 12 para áreas clasificadas y ambientes corrosivos.",
    specs: [
      { label: "Material", value: "Acero Inox 304/316, Acero al Carbón" },
      { label: "Clasificación", value: "NEMA 4, 4X, 7, 12" },
      { label: "Tamaños", value: "A medida según proyecto" },
      { label: "Acabado", value: "Pintura epóxica / Acero brillante" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. HERRAMIENTAS MANUALES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "herr-man-001",
    name: "Juegos de Llaves Combinadas",
    category: "herramientas_man",
    categoryName: "Herramientas Manuales",
    code: "SML-HM-101",
    image: "images/ferreteria.png",
    shortDesc: "Llaves combinadas, de estrías y de tubo en acero cromo vanadio forjado.",
    fullDesc: "Juegos profesionales de llaves combinadas boca-estrías en acero Cr-V forjado y cromado. Medidas milimétricas y en pulgadas. Disponibles en juegos de 8, 12 y 14 piezas.",
    specs: [
      { label: "Material", value: "Acero Cromo Vanadio forjado" },
      { label: "Medidas", value: "6mm a 32mm / ¼\" a 1¼\"" },
      { label: "Acabado", value: "Cromado espejo" },
      { label: "Tipo", value: "Combinadas, Estrías, Allen" }
    ]
  },
  {
    id: "herr-man-002",
    name: "Torquímetros de Precisión",
    category: "herramientas_man",
    categoryName: "Herramientas Manuales",
    code: "SML-HM-102",
    image: "images/ferreteria.png",
    shortDesc: "Torquímetros de clic y digitales para apriete controlado de pernería crítica.",
    fullDesc: "Torquímetros industriales tipo clic, de cuadrante y digitales. Ideales para apriete de bridas, pernos de equipos rotativos y conexiones críticas en O&G.",
    specs: [
      { label: "Rangos", value: "10-200 Nm, 50-500 Nm, 100-1000 Nm" },
      { label: "Cuadrante", value: "⅜\", ½\", ¾\", 1\"" },
      { label: "Tipo", value: "Clic, Digital, Dial" },
      { label: "Precisión", value: "±3% (CW) según ISO 6789" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. MANGUERAS Y CONECTORES INDUSTRIALES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mang-001",
    name: "Mangueras Hidráulicas de Alta Presión",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-101",
    image: "images/ferreteria.png",
    shortDesc: "Mangueras hidráulicas SAE 100R1, R2, R12 y R13 para sistemas de alta presión.",
    fullDesc: "Mangueras hidráulicas con refuerzo de malla de acero y espiral metálico para presiones de trabajo desde 1,000 hasta 6,000 PSI. Se arman a medida con terminales prensados.",
    specs: [
      { label: "Tipos SAE", value: "100R1AT, 100R2AT, R12, R13" },
      { label: "Diámetros", value: "¼\" a 2\"" },
      { label: "Presión trabajo", value: "1,000 a 6,000 PSI" },
      { label: "Temperatura", value: "-40°C a +100°C" }
    ]
  },
  {
    id: "mang-002",
    name: "Acoples Rápidos y Conectores",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-102",
    image: "images/ferreteria.png",
    shortDesc: "Acoples rápidos, conectores hidráulicos y terminales prensados para mangueras.",
    fullDesc: "Acoples rápidos tipo ISO A, ISO B y Serie plana para conexiones hidráulicas y neumáticas. Terminales prensados JIC, ORB, BSP y ORFS para mangueras de alta presión.",
    specs: [
      { label: "Tipos", value: "ISO A, ISO B, Flat-Face" },
      { label: "Terminales", value: "JIC 37°, ORB, BSP, ORFS" },
      { label: "Presión", value: "Hasta 10,000 PSI" },
      { label: "Material", value: "Acero al carbón zincado / Inox" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 9. PINTURAS Y RECUBRIMIENTOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pint-001",
    name: "Pinturas Epóxicas Anticorrosivas",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-101",
    image: "images/ferreteria.png",
    shortDesc: "Sistemas de pintura epóxica de alto espesor para protección anticorrosiva de estructuras.",
    fullDesc: "Pinturas epóxicas de dos componentes para protección de tanques, tuberías, estructuras metálicas y superficies sumergidas. Resistentes a químicos, agua salada y ambientes agresivos.",
    specs: [
      { label: "Tipo", value: "Epóxica 2 componentes" },
      { label: "Espesor", value: "125 a 250 micras por capa" },
      { label: "Rendimiento", value: "4-8 m²/L según espesor" },
      { label: "Resistencia", value: "Inmersión, químicos, abrasión" }
    ]
  },
  {
    id: "pint-002",
    name: "Recubrimientos de Poliuretano",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-102",
    image: "images/ferreteria.png",
    shortDesc: "Acabados de poliuretano alifático con alta retención de color y brillo para exteriores.",
    fullDesc: "Esmaltes de poliuretano de dos componentes como capa de acabado sobre imprimante epóxico. Alta resistencia a rayos UV, retención de color y acabado brillante o mate.",
    specs: [
      { label: "Tipo", value: "Poliuretano alifático 2K" },
      { label: "Acabado", value: "Brillante, Semi-mate, Mate" },
      { label: "Colores", value: "Carta RAL / Personalizado" },
      { label: "Aplicación", value: "Soplete airless, brocha, rodillo" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 10. ELEMENTOS DE PROTECCIÓN PERSONAL – EPP
  // ═══════════════════════════════════════════════════════════════
  {
    id: "epp-001",
    name: "Cascos de Seguridad Industrial",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-101",
    image: "images/epp.png",
    shortDesc: "Cascos dieléctricos Tipo I y II con suspensión de 4 y 6 puntos para industria pesada.",
    fullDesc: "Cascos de seguridad industrial con certificación ANSI Z89.1 Tipo I Clase E (dieléctricos). Suspensión ajustable tipo trinquete de 4 y 6 puntos. Disponibles en múltiples colores corporativos.",
    specs: [
      { label: "Norma", value: "ANSI Z89.1 Tipo I Clase E" },
      { label: "Suspensión", value: "4 y 6 puntos ajustable" },
      { label: "Material", value: "HDPE / ABS" },
      { label: "Accesorios", value: "Barbuquejo, visor, orejeras" }
    ]
  },
  {
    id: "epp-002",
    name: "Guantes de Seguridad Industrial",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-102",
    image: "images/epp.png",
    shortDesc: "Guantes anticorte, de nitrilo, cuero y dieléctricos para diferentes riesgos laborales.",
    fullDesc: "Línea completa de guantes de seguridad: anticorte nivel A4-A9 con palma de nitrilo, guantes de cuero para soldadura, dieléctricos clase 00 a clase 4 y guantes de caucho para químicos.",
    specs: [
      { label: "Tipos", value: "Anticorte, Dieléctricos, Cuero, Nitrilo" },
      { label: "Nivel corte", value: "A3, A4, A6, A9" },
      { label: "Norma", value: "EN 388 / ANSI/ISEA 105" },
      { label: "Tallas", value: "S, M, L, XL, XXL" }
    ]
  },
  {
    id: "epp-003",
    name: "Arneses y Líneas de Vida",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-103",
    image: "images/epp.png",
    shortDesc: "Arneses de cuerpo completo, líneas de vida y equipos para trabajo seguro en alturas.",
    fullDesc: "Equipos anticaídas certificados: arneses de cuerpo completo de 3, 4 y 5 puntos de anclaje, líneas de vida con absorbedor de energía, eslingas y conectores para trabajo seguro en alturas.",
    specs: [
      { label: "Norma", value: "ANSI Z359.11 / EN 361" },
      { label: "Puntos anclaje", value: "3, 4 y 5 puntos" },
      { label: "Capacidad", value: "140 kg (310 lb)" },
      { label: "Componentes", value: "Arnés, eslinga, conector, absorbedor" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 11. LUBRICANTES Y ADHESIVOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "lub-001",
    name: "Grasas Industriales de Alto Desempeño",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-101",
    image: "images/repuestos.png",
    shortDesc: "Grasas de litio, sintéticas y de alta temperatura para rodamientos y equipos rotativos.",
    fullDesc: "Grasas lubricantes multipropósito y de especialidad para rodamientos de alta velocidad, equipos expuestos a altas temperaturas y ambientes con humedad o contaminación.",
    specs: [
      { label: "Base", value: "Litio, Litio Complejo, Poliurea" },
      { label: "Temperatura", value: "-30°C a +260°C" },
      { label: "Grado NLGI", value: "1, 2, 3" },
      { label: "Presentación", value: "Cartucho 400g, Balde 35lb, Tambor" }
    ]
  },
  {
    id: "lub-002",
    name: "Trabarroscas y Selladores Industriales",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-102",
    image: "images/repuestos.png",
    shortDesc: "Adhesivos anaeróbicos, trabarroscas, selladores de roscas y juntas líquidas.",
    fullDesc: "Productos químicos para sujeción y sellado de uniones roscadas: trabarroscas de resistencia media y alta, selladores de tuberías, formadores de juntas y retenedores de rodamientos.",
    specs: [
      { label: "Tipos", value: "Trabarroscas, Sellador tubería, Formajuntas" },
      { label: "Resistencia", value: "Media (azul), Alta (rojo)" },
      { label: "Temperatura", value: "Hasta 230°C" },
      { label: "Curado", value: "Anaeróbico (sin aire)" }
    ]
  },
  {
    id: "lub-003",
    name: "Aceites de Corte y Desengrasantes",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-103",
    image: "images/repuestos.png",
    shortDesc: "Aceites solubles de corte, lubricantes de mecanizado y desengrasantes industriales.",
    fullDesc: "Fluidos de corte emulsionables para operaciones de torneado, fresado y taladrado. Desengrasantes biodegradables para limpieza de partes, motores y superficies metálicas.",
    specs: [
      { label: "Tipo aceite", value: "Soluble, Semi-sintético, Sintético" },
      { label: "Desengrasante", value: "Base agua, Base solvente" },
      { label: "Presentación", value: "Galón, Pimpina 5GL, Tambor 55GL" },
      { label: "Aplicación", value: "Mecanizado CNC, Limpieza industrial" }
    ]
  }
];

// Datos de Categorías con iconos y conteo dinámico
const CATEGORIES_DATA = [
  {
    id: "todas",
    name: "Todas las Líneas",
    icon: "fa-layer-group",
    count: PRODUCTS_DATA.length,
    description: "Explora la totalidad de suministros y soluciones industriales en SM LUSER."
  },
  {
    id: "instrumentacion",
    name: "Instrumentación",
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
    name: "Control de Fluidos",
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
