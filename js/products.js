// ═══════════════════════════════════════════════════════════════════════════
// BASE DE DATOS OFICIAL DE PRODUCTOS — SUMINISTROS INDUSTRIALES LUSER (SM LUSER)
// Basado en el Brochure Oficial PDF de la Empresa
// ═══════════════════════════════════════════════════════════════════════════

const PRODUCTS_DATA = [

  // ═══════════════════════════════════════════════════════════════
  // 1. EQUIPOS Y PARTES DE INSTRUMENTACIÓN (Páginas 03-04)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inst-001",
    name: "Filtro Separador Parker",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-101",
    image: "imagenesbrochure/01_Instrumentacion/P03_01_Filtro_separador_Parker.png",
    shortDesc: "Sistema de filtración y separación Parker para instrumentación de procesos industriales.",
    fullDesc: "Equipos de filtración marca Parker para separación de partículas y contaminantes en líneas de instrumentación, gas y líquidos de proceso. Diseñados para ambientes industriales exigentes en Oil & Gas.",
    specs: [
      { label: "Marca", value: "Parker Hannifin" },
      { label: "Aplicación", value: "Filtración de gas, aire e instrumentación" },
      { label: "Material", value: "Acero al carbón / Acero inoxidable" },
      { label: "Uso", value: "Plantas de proceso, Oil & Gas" }
    ]
  },
  {
    id: "inst-002",
    name: "Panel Indicador de Bombas",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-102",
    image: "imagenesbrochure/01_Instrumentacion/P03_02_Panel_indicador_de_bombas.png",
    shortDesc: "Paneles indicadores y controladores para monitoreo de sistemas de bombeo industrial.",
    fullDesc: "Paneles de instrumentación para monitoreo y control de bombas, con indicadores de presión, temperatura y flujo. Integración con sistemas SCADA y PLC para automatización de procesos.",
    specs: [
      { label: "Tipo", value: "Panel indicador / controlador" },
      { label: "Señales", value: "4-20mA, 0-10V, Modbus" },
      { label: "Protección", value: "NEMA 4 / IP65" },
      { label: "Aplicación", value: "Monitoreo de bombas y equipos rotativos" }
    ]
  },
  {
    id: "inst-003",
    name: "Instrumento Circular Parker",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-103",
    image: "imagenesbrochure/01_Instrumentacion/P03_03_Instrumento_circular_Parker.png",
    shortDesc: "Instrumentos circulares Parker para medición y registro de variables de proceso.",
    fullDesc: "Indicadores circulares de presión y temperatura marca Parker con carátula de alto contraste. Ideales para paneles de control y tableros de instrumentación en plantas de proceso.",
    specs: [
      { label: "Marca", value: "Parker" },
      { label: "Tipo", value: "Indicador circular analógico" },
      { label: "Variables", value: "Presión, temperatura, flujo" },
      { label: "Montaje", value: "Panel / Tablero" }
    ]
  },
  {
    id: "inst-004",
    name: "Válvulas de Instrumentación",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-104",
    image: "imagenesbrochure/01_Instrumentacion/P03_04_Valvulas_de_instrumentación.png",
    shortDesc: "Válvulas miniatura y manifolds para conexión de instrumentos de medición y control.",
    fullDesc: "Válvulas de instrumentación tipo aguja, bloqueo y purga, manifolds de 2 y 3 vías para conexión segura de manómetros, transmisores y sensores en líneas de proceso.",
    specs: [
      { label: "Tipos", value: "Aguja, Bloqueo, Purga, Manifold" },
      { label: "Material", value: "Acero Inox 316, Monel, Hastelloy" },
      { label: "Presión", value: "Hasta 10,000 PSI" },
      { label: "Conexión", value: "¼\" y ½\" NPT / Compresión" }
    ]
  },
  {
    id: "inst-005",
    name: "Manómetros Industriales",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-105",
    image: "imagenesbrochure/01_Instrumentacion/P04_01_Manómetro.png",
    shortDesc: "Manómetros de glicerina en acero inoxidable para medición de presión en procesos.",
    fullDesc: "Manómetros industriales con caja de acero inoxidable AISI 316, relleno de glicerina para absorción de vibraciones. Conexión inferior y posterior. Rangos de 0 a 10,000 PSI.",
    specs: [
      { label: "Diámetros", value: "2½\", 4\", 6\"" },
      { label: "Conexión", value: "¼\" NPT, ½\" NPT" },
      { label: "Material", value: "Acero Inoxidable AISI 316" },
      { label: "Norma", value: "EN 837-1 / ASME B40.100" }
    ]
  },
  {
    id: "inst-006",
    name: "Bomba Hidráulica de Prueba",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-106",
    image: "imagenesbrochure/01_Instrumentacion/P04_02_Bomba_instrumento_hidráulico_de_prueba.png",
    shortDesc: "Bomba hidráulica de prueba para calibración y verificación de manómetros e instrumentos.",
    fullDesc: "Equipo portátil de prueba hidrostática para calibración de manómetros y transmisores de presión en campo. Generación de presión manual para verificación de instrumentos.",
    specs: [
      { label: "Tipo", value: "Bomba de prueba hidrostática manual" },
      { label: "Presión máx.", value: "Hasta 10,000 PSI" },
      { label: "Uso", value: "Calibración en campo" },
      { label: "Portabilidad", value: "Compacta y portátil" }
    ]
  },
  {
    id: "inst-007",
    name: "Indicadores y Manómetros de Presión",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-107",
    image: "imagenesbrochure/01_Instrumentacion/P04_03_Indicadores_manómetros_de_presión.png",
    shortDesc: "Conjunto de indicadores y manómetros para diferentes rangos de presión industrial.",
    fullDesc: "Variedad de manómetros e indicadores de presión en diferentes diámetros, rangos y materiales. Opciones con glicerina, seco, conexión inferior y posterior para múltiples aplicaciones.",
    specs: [
      { label: "Rangos", value: "Vacío a 15,000 PSI" },
      { label: "Tipos", value: "Con glicerina, seco, diferencial" },
      { label: "Carátula", value: "2\", 2½\", 4\", 6\"" },
      { label: "Norma", value: "ASME B40.100" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. BOMBAS Y CONSUMIBLES (Página 05)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "bombas-001",
    name: "Bomba Centrífuga Industrial",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-101",
    image: "imagenesbrochure/02_Bombas_y_Consumibles/P05_01_Bomba_centrífuga.png",
    shortDesc: "Bombas centrífugas de alto rendimiento para transferencia de fluidos en plantas industriales.",
    fullDesc: "Bombas centrífugas horizontales y verticales para aplicaciones de transferencia de agua, químicos y petróleo. Construcción robusta en hierro fundido y acero inoxidable según requerimiento de proceso.",
    specs: [
      { label: "Tipo", value: "Centrífuga horizontal / vertical" },
      { label: "Caudal", value: "Hasta 500 GPM" },
      { label: "Presión", value: "Hasta 300 PSI" },
      { label: "Motor", value: "Eléctrico trifásico / monofásico" }
    ]
  },
  {
    id: "bombas-002",
    name: "Bomba Neumática de Doble Diafragma",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-102",
    image: "imagenesbrochure/02_Bombas_y_Consumibles/P05_02_Bomba_neumática_de_doble_diafragma.png",
    shortDesc: "Bombas de doble diafragma para manejo de fluidos viscosos, químicos y lodos.",
    fullDesc: "Bombas neumáticas de doble diafragma (AODD) para transferencia de líquidos corrosivos, viscosos, abrasivos y con sólidos en suspensión. Autoaspirantes y sin sellos mecánicos.",
    specs: [
      { label: "Tipo", value: "Doble diafragma neumática (AODD)" },
      { label: "Caudal", value: "Hasta 300 GPM" },
      { label: "Materiales", value: "Aluminio, PP, PVDF, Acero Inox" },
      { label: "Aplicación", value: "Químicos, lodos, pintura, solventes" }
    ]
  },
  {
    id: "bombas-003",
    name: "Sellos Mecánicos y Componentes",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-103",
    image: "imagenesbrochure/02_Bombas_y_Consumibles/P05_03_Sellos_mecánicos_y_componentes.png",
    shortDesc: "Sellos mecánicos, impulsores y kits de reparación para bombas industriales.",
    fullDesc: "Repuestos y consumibles de alta calidad para bombas centrífugas y dosificadoras. Sellos mecánicos en carburo de silicio, impulsores, anillos de desgaste y kits completos de mantenimiento.",
    specs: [
      { label: "Componentes", value: "Sellos, impulsores, anillos, empaques" },
      { label: "Materiales", value: "SiC, Tungsteno, Viton, PTFE" },
      { label: "Tipos sello", value: "Simple, doble, cartucho" },
      { label: "Norma", value: "API 682 / DIN 24960" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. MANEJO Y CONTROL DE FLUIDOS (Páginas 06-07)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "fluid-001",
    name: "Válvulas de Proceso Industrial",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-101",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P06_01_Válvulas_de_proceso.png",
    shortDesc: "Válvulas de bola, compuerta, globo y aguja para control de fluidos en plantas de proceso.",
    fullDesc: "Válvulas industriales de proceso en acero al carbón, acero inoxidable y aleaciones especiales. Válvulas de bola flotante y trunnion, compuerta, globo y aguja para alta y baja presión.",
    specs: [
      { label: "Tipos", value: "Bola, Compuerta, Globo, Aguja" },
      { label: "Tamaños", value: "½\" a 24\"" },
      { label: "Clase", value: "150, 300, 600, 900, 1500 lb" },
      { label: "Norma", value: "API 6D / ASME B16.34" }
    ]
  },
  {
    id: "fluid-002",
    name: "Conjunto de Válvulas y Accesorios",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-102",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P06_02_Conjunto_de_válvulas_y_accesorios.png",
    shortDesc: "Kits completos de válvulas, bridas y accesorios para sistemas de tuberías industriales.",
    fullDesc: "Conjuntos de válvulas y accesorios para ensamble de líneas de proceso. Incluye válvulas de bola, check, bridas, niples y adaptadores en diferentes materiales y presiones nominales.",
    specs: [
      { label: "Componentes", value: "Válvulas, bridas, niples, adaptadores" },
      { label: "Materiales", value: "A105, A182 F316, Bronce" },
      { label: "Presión", value: "3000#, 6000#, 10000# PSI" },
      { label: "Norma", value: "ASME B16.11 / B16.5" }
    ]
  },
  {
    id: "fluid-003",
    name: "Conectores y Acoples para Fluidos",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-103",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P06_03_Conector_acople_rojo_para_fluidos.png",
    shortDesc: "Acoples rápidos y conectores especializados para sistemas de control de fluidos.",
    fullDesc: "Conectores y acoples de alta ingeniería para conexiones rápidas y seguras en líneas de fluidos. Diseñados para aplicaciones de alta presión en sistemas hidráulicos y de proceso.",
    specs: [
      { label: "Tipo", value: "Acople rápido, conector de fluidos" },
      { label: "Presión", value: "Alta presión" },
      { label: "Material", value: "Acero, aluminio, polímero reforzado" },
      { label: "Aplicación", value: "Hidráulica, neumática, proceso" }
    ]
  },
  {
    id: "fluid-004",
    name: "Abrazaderas y Conexiones de Tubería",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-104",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P07_01_Abrazaderas_conexiones_de_tubería.png",
    shortDesc: "Abrazaderas tipo U-bolt, grapa y soporte para fijación de tuberías industriales.",
    fullDesc: "Sistemas de soporte y fijación de tuberías: abrazaderas tipo U-bolt, grapas, colgantes y soportes en acero galvanizado e inoxidable para tendidos de tubería en plantas.",
    specs: [
      { label: "Tipos", value: "U-bolt, grapa, colgante, soporte" },
      { label: "Material", value: "Acero galvanizado / Inoxidable" },
      { label: "Tamaños", value: "½\" a 12\"" },
      { label: "Norma", value: "MSS SP-58 / SP-69" }
    ]
  },
  {
    id: "fluid-005",
    name: "Acoples y Conexiones Ranuradas",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-105",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P07_02_Acoples_y_conexiones_ranuradas.png",
    shortDesc: "Acoples ranurados (grooved) para uniones rápidas y seguras en sistemas de tuberías.",
    fullDesc: "Sistema de conexión ranurada (grooved) tipo Victaulic para unión rápida de tuberías sin soldadura. Codos, tees, reducciones y acoples rígidos y flexibles para protección contra incendios y HVAC.",
    specs: [
      { label: "Sistema", value: "Ranurado tipo Grooved (Victaulic)" },
      { label: "Tamaños", value: "1\" a 24\"" },
      { label: "Ventaja", value: "Sin soldadura, montaje rápido" },
      { label: "Aplicación", value: "Protección incendios, HVAC, proceso" }
    ]
  },
  {
    id: "fluid-006",
    name: "Accesorios de Conexión para Tubería",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-106",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P07_03_Accesorios_de_conexión_para_tubería.png",
    shortDesc: "Codos, tees, reducciones y niples roscados y soldables para sistemas de tubería.",
    fullDesc: "Accesorios de tubería forjados y fundidos: codos 90° y 45°, tees, reducciones concéntricas y excéntricas, uniones, niples y tapones en acero al carbón e inoxidable.",
    specs: [
      { label: "Tipos", value: "Codos, Tees, Reducciones, Niples" },
      { label: "Conexión", value: "NPT roscado, Soldable (SW/BW)" },
      { label: "Materiales", value: "A105, A182 F316, F304" },
      { label: "Presión", value: "3000# / 6000# / SCH 40-80" }
    ]
  },
  {
    id: "fluid-007",
    name: "Juntas y Empaques Industriales",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-107",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P07_04_Junta_elementos_de_conexión.png",
    shortDesc: "Juntas RTJ, espirometálicas y empaques planos para sellado de bridas industriales.",
    fullDesc: "Empaques y juntas industriales: juntas metálicas RTJ (Ring Type Joint) en perfil ovalado y octagonal, juntas espirometálicas con grafito/PTFE y empaques planos de diferentes materiales.",
    specs: [
      { label: "Tipos", value: "RTJ, Espirometálica, Plana" },
      { label: "Perfiles RTJ", value: "Ovalado, Octagonal (R, RX, BX)" },
      { label: "Materiales", value: "Soft Iron, SS304, SS316, Inconel" },
      { label: "Norma", value: "ASME B16.20 / API 6A" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. TRANSMISIÓN Y POTENCIA (Página 08)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "transm-001",
    name: "Rodamientos y Componentes",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-101",
    image: "imagenesbrochure/04_Transmision_y_Potencia/P08_01_Rodamientos_y_componentes.png",
    shortDesc: "Rodamientos de bolas, rodillos cónicos y chumaceras para maquinaria industrial.",
    fullDesc: "Rodamientos industriales de bolas, rodillos cónicos, cilíndricos, axiales y chumaceras tipo pedestal. Para motores, reductores, transportadores y equipos de producción.",
    specs: [
      { label: "Tipos", value: "Bolas, rodillos cónicos, cilíndricos" },
      { label: "Series", value: "6200, 6300, 22200, 30200" },
      { label: "Materiales", value: "Acero al cromo GCr15" },
      { label: "Aplicación", value: "Motores, reductores, transportadores" }
    ]
  },
  {
    id: "transm-002",
    name: "Acoples y Elementos de Transmisión",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-102",
    image: "imagenesbrochure/04_Transmision_y_Potencia/P08_02_Acoples_y_elementos_de_transmisión.png",
    shortDesc: "Acoples flexibles, rígidos y elementos de conexión para ejes y reductores.",
    fullDesc: "Acoples mecánicos para conexión de ejes: acoples flexibles tipo araña, de engrane, de disco y rígidos. Elementos de transmisión para reductores y motores industriales.",
    specs: [
      { label: "Tipos", value: "Araña, Engrane, Disco, Rígido" },
      { label: "Torque", value: "Según aplicación y tamaño" },
      { label: "Material", value: "Acero, Aluminio, Poliuretano" },
      { label: "Uso", value: "Conexión motor-reductor, bombas" }
    ]
  },
  {
    id: "transm-003",
    name: "Rodamientos Timken",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-103",
    image: "imagenesbrochure/04_Transmision_y_Potencia/P08_03_Rodamientos_Timken.png",
    shortDesc: "Rodamientos de rodillos cónicos marca Timken para aplicaciones de alta carga.",
    fullDesc: "Rodamientos de rodillos cónicos marca Timken, reconocidos mundialmente por su durabilidad y capacidad de carga. Ideales para ejes, transmisiones, equipos mineros y maquinaria pesada.",
    specs: [
      { label: "Marca", value: "Timken" },
      { label: "Tipo", value: "Rodillos cónicos" },
      { label: "Capacidad", value: "Alta carga radial y axial" },
      { label: "Aplicación", value: "Maquinaria pesada, minería, O&G" }
    ]
  },
  {
    id: "transm-004",
    name: "Elementos de Transmisión y Acoples",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-104",
    image: "imagenesbrochure/04_Transmision_y_Potencia/P08_04_Elementos_de_transmisión_y_acoples.png",
    shortDesc: "Correas, poleas, cadenas, piñones y elementos de transmisión mecánica industrial.",
    fullDesc: "Línea completa de elementos de transmisión de potencia: correas tipo V (A, B, C), correas sincrónicas, poleas, cadenas de rodillos, piñones y sprockets para maquinaria industrial.",
    specs: [
      { label: "Correas", value: "V clásica (A/B/C), Sincrónica, Micro-V" },
      { label: "Cadenas", value: "Paso 25 a 100, simples y dobles" },
      { label: "Poleas", value: "1 a 8 canales, aluminio/hierro" },
      { label: "Norma", value: "DIN 2211 / ANSI B29.1" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. HERRAMIENTAS INDUSTRIALES (Páginas 09 y 11)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "herr-ind-001",
    name: "Bomba Hidráulica Manual Enerpac",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-101",
    image: "imagenesbrochure/05_Herramientas_Industriales/P09_01_Bomba_hidráulica_manual_Enerpac.png",
    shortDesc: "Bombas hidráulicas manuales Enerpac para accionamiento de cilindros y herramientas.",
    fullDesc: "Bombas hidráulicas de accionamiento manual marca Enerpac para operación de cilindros, prensas, tensores y herramientas de fuerza. Presión de trabajo hasta 10,000 PSI.",
    specs: [
      { label: "Marca", value: "Enerpac" },
      { label: "Presión máx.", value: "10,000 PSI (700 bar)" },
      { label: "Tipo", value: "Manual de 1 y 2 velocidades" },
      { label: "Uso", value: "Cilindros, prensas, tensores" }
    ]
  },
  {
    id: "herr-ind-002",
    name: "Gato Hidráulico Industrial",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-102",
    image: "imagenesbrochure/05_Herramientas_Industriales/P09_02_Gato_hidráulico.png",
    shortDesc: "Gatos hidráulicos de botella y patín para levantamiento de cargas pesadas.",
    fullDesc: "Gatos hidráulicos industriales tipo botella y patín con capacidades desde 5 hasta 100 toneladas. Para mantenimiento de maquinaria, montajes y levantamiento de cargas pesadas.",
    specs: [
      { label: "Capacidad", value: "5 a 100 toneladas" },
      { label: "Tipos", value: "Botella, Patín, Telescópico" },
      { label: "Carrera", value: "Variable según modelo" },
      { label: "Uso", value: "Mantenimiento, montajes industriales" }
    ]
  },
  {
    id: "herr-ind-003",
    name: "Cilindros Hidráulicos Enerpac",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-103",
    image: "imagenesbrochure/05_Herramientas_Industriales/P09_03_Cilindros_hidráulicos_Enerpac.png",
    shortDesc: "Cilindros hidráulicos Enerpac de simple y doble efecto para aplicaciones de fuerza.",
    fullDesc: "Cilindros hidráulicos de alta presión marca Enerpac para aplicaciones de empuje, tracción, levantamiento y posicionamiento. Simple y doble efecto con capacidades de 5 a 1,000 toneladas.",
    specs: [
      { label: "Marca", value: "Enerpac" },
      { label: "Capacidad", value: "5 a 1,000 toneladas" },
      { label: "Presión", value: "10,000 PSI (700 bar)" },
      { label: "Efecto", value: "Simple y doble efecto" }
    ]
  },
  {
    id: "herr-ind-004",
    name: "Herramientas Eléctricas DeWalt",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-104",
    image: "imagenesbrochure/05_Herramientas_Industriales/P11_01_Herramientas_eléctricas_DeWalt.png",
    shortDesc: "Línea profesional DeWalt: taladros, pulidoras, rotomartillos y sierras para trabajo pesado.",
    fullDesc: "Herramientas eléctricas profesionales marca DeWalt para trabajo industrial continuo. Taladros de impacto, pulidoras angulares, rotomartillos, sierras circulares y caladoras de alto desempeño.",
    specs: [
      { label: "Marca", value: "DeWalt" },
      { label: "Gama", value: "Profesional / Industrial" },
      { label: "Alimentación", value: "Eléctrica 110V/220V / Batería 20V MAX" },
      { label: "Garantía", value: "Garantía de fábrica" }
    ]
  },
  {
    id: "herr-ind-005",
    name: "Herramientas Eléctricas Truper",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-105",
    image: "imagenesbrochure/05_Herramientas_Industriales/P11_02_Herramientas_eléctricas_Truper.png",
    shortDesc: "Herramientas eléctricas Truper: esmeriles, taladros y pulidoras para uso industrial.",
    fullDesc: "Línea de herramientas eléctricas marca Truper para uso profesional e industrial. Esmeriles angulares, taladros percutores, pulidoras y equipos de corte con excelente relación calidad-precio.",
    specs: [
      { label: "Marca", value: "Truper" },
      { label: "Gama", value: "Profesional" },
      { label: "Alimentación", value: "Eléctrica 110V/220V" },
      { label: "Tipos", value: "Esmeriles, taladros, pulidoras, sierras" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. PRODUCTOS ELÉCTRICOS (Página 10)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "elec-001",
    name: "Interruptores y Protecciones Eléctricas",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-101",
    image: "imagenesbrochure/06_Productos_Electricos/P10_01_Interruptores_y_protecciones_eléctricas.png",
    shortDesc: "Breakers, interruptores termomagnéticos y elementos de protección para tableros eléctricos.",
    fullDesc: "Interruptores termomagnéticos, disyuntores, breakers y relés de protección para tableros de distribución eléctrica industrial. Protección contra sobrecarga y cortocircuito.",
    specs: [
      { label: "Tipos", value: "Termomagnético, Diferencial, Motorizado" },
      { label: "Corriente", value: "10A a 630A" },
      { label: "Voltaje", value: "240V / 480V / 600V" },
      { label: "Montaje", value: "Riel DIN / Fijo" }
    ]
  },
  {
    id: "elec-002",
    name: "Cajas, Tomas y Accesorios Eléctricos",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-102",
    image: "imagenesbrochure/06_Productos_Electricos/P10_02_Cajas_tomas_y_accesorios_eléctricos.png",
    shortDesc: "Cajas de distribución, tomacorrientes industriales y accesorios para instalaciones eléctricas.",
    fullDesc: "Cajas de paso, cajas de distribución, tomacorrientes industriales tipo NEMA, botoneras, prensaestopas y accesorios para canalizaciones y tableros eléctricos industriales.",
    specs: [
      { label: "Tipos", value: "Cajas, tomas industriales, prensaestopas" },
      { label: "Protección", value: "NEMA 3R, 4, 4X, 7" },
      { label: "Material", value: "Acero, aluminio, policarbonato" },
      { label: "Aplicación", value: "Plantas industriales, áreas clasificadas" }
    ]
  },
  {
    id: "elec-003",
    name: "Discos Abrasivos y de Corte",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-103",
    image: "imagenesbrochure/06_Productos_Electricos/P10_03_Discos_abrasivos_y_de_corte.png",
    shortDesc: "Discos de corte, desbaste y flap para metales, acero inoxidable y concreto.",
    fullDesc: "Discos abrasivos para corte y desbaste de metales ferrosos y no ferrosos. Discos de corte finos, de desbaste grueso, discos flap y discos diamantados para diferentes aplicaciones.",
    specs: [
      { label: "Tamaños", value: "4½\", 7\", 9\", 14\"" },
      { label: "Tipos", value: "Corte, Desbaste, Flap, Diamantado" },
      { label: "Material", value: "Óxido aluminio, Carburo silicio, Zirconio" },
      { label: "RPM máx.", value: "Según diámetro y tipo" }
    ]
  },
  {
    id: "elec-004",
    name: "Conector Eléctrico Industrial",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-104",
    image: "imagenesbrochure/06_Productos_Electricos/P10_04_Conector_eléctrico_industrial.png",
    shortDesc: "Conectores eléctricos industriales de potencia para equipos y maquinaria pesada.",
    fullDesc: "Conectores eléctricos industriales de alta corriente para conexión de motores, equipos rotativos y maquinaria pesada. Diseño robusto para ambientes exigentes.",
    specs: [
      { label: "Tipo", value: "Conector industrial de potencia" },
      { label: "Corriente", value: "Hasta 200A" },
      { label: "Voltaje", value: "Hasta 600V" },
      { label: "Protección", value: "IP44 / IP67" }
    ]
  },
  {
    id: "elec-005",
    name: "Conector Eléctrico Multipin",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-105",
    image: "imagenesbrochure/06_Productos_Electricos/P10_05_Conector_eléctrico_multipin.png",
    shortDesc: "Conectores multipin para señales de control, instrumentación y comunicaciones.",
    fullDesc: "Conectores circulares multipin para señales de control, instrumentación y comunicaciones industriales. Construcción robusta con sellos herméticos para ambientes hostiles.",
    specs: [
      { label: "Tipo", value: "Circular multipin" },
      { label: "Pines", value: "4 a 37 contactos" },
      { label: "Protección", value: "IP67 / IP68" },
      { label: "Uso", value: "Control, instrumentación, señales" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. HERRAMIENTAS MANUALES (Página 12)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "herr-man-001",
    name: "Juego de Herramientas Manuales",
    category: "herramientas_man",
    categoryName: "Herramientas Manuales",
    code: "SML-HM-101",
    image: "imagenesbrochure/07_Herramientas_Manuales/P12_01_Juego_de_herramientas_manuales.png",
    shortDesc: "Juegos completos de llaves combinadas, dados, destornilladores y herramientas de mano.",
    fullDesc: "Juegos profesionales de herramientas manuales en acero Cr-V forjado y cromado. Llaves combinadas, juegos de dados, destornilladores, alicates, pinzas y extractores para mantenimiento industrial.",
    specs: [
      { label: "Material", value: "Acero Cromo Vanadio forjado" },
      { label: "Contenido", value: "Llaves, dados, destornilladores, alicates" },
      { label: "Medidas", value: "Milimétricas y pulgadas" },
      { label: "Acabado", value: "Cromado espejo / Pavonado" }
    ]
  },
  {
    id: "herr-man-002",
    name: "Herramientas Manuales y de Sujeción",
    category: "herramientas_man",
    categoryName: "Herramientas Manuales",
    code: "SML-HM-102",
    image: "imagenesbrochure/07_Herramientas_Manuales/P12_02_Herramientas_manuales_y_de_sujeción.png",
    shortDesc: "Prensas, mordazas, sargentos, torquímetros y herramientas especiales de sujeción.",
    fullDesc: "Herramientas de sujeción y apriete controlado: torquímetros de clic y digitales, prensas de banco, sargentos, mordazas y herramientas especializadas para mantenimiento de equipos rotativos.",
    specs: [
      { label: "Tipos", value: "Torquímetros, prensas, mordazas, sargentos" },
      { label: "Torquímetro", value: "10-200 Nm, 50-500 Nm, 100-1000 Nm" },
      { label: "Material", value: "Acero forjado y templado" },
      { label: "Norma", value: "ISO 6789 (torquímetros)" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. MANGUERAS Y CONECTORES INDUSTRIALES (Página 13)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mang-001",
    name: "Mangueras y Conectores",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-101",
    image: "imagenesbrochure/08_Mangueras_y_Conectores/P13_01_Mangueras_y_conectores.png",
    shortDesc: "Mangueras industriales y conectores para aire, agua, químicos e hidrocarburos.",
    fullDesc: "Soluciones completas de conducción flexible: mangueras para aire comprimido, agua, vapor, químicos e hidrocarburos. Conectores y terminales para ensamble de líneas de conducción.",
    specs: [
      { label: "Aplicación", value: "Aire, agua, vapor, químicos, O&G" },
      { label: "Diámetros", value: "¼\" a 6\"" },
      { label: "Material", value: "Caucho, PVC, PTFE, Silicona" },
      { label: "Temperatura", value: "-40°C a +230°C según tipo" }
    ]
  },
  {
    id: "mang-002",
    name: "Mangueras Industriales",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-102",
    image: "imagenesbrochure/08_Mangueras_y_Conectores/P13_02_Mangueras_industriales.png",
    shortDesc: "Mangueras de succión, descarga, vapor, químicos y uso general para la industria.",
    fullDesc: "Línea completa de mangueras industriales: succión y descarga, vapor, químicos, alimentos, sandblasting y mangueras multipropósito. Diferentes materiales y refuerzos según la aplicación.",
    specs: [
      { label: "Tipos", value: "Succión, descarga, vapor, químicos" },
      { label: "Refuerzo", value: "Malla textil, malla de acero, espiral" },
      { label: "Presión", value: "Hasta 3,000 PSI según tipo" },
      { label: "Norma", value: "SAE, ISO, FDA según aplicación" }
    ]
  },
  {
    id: "mang-003",
    name: "Mangueras Hidráulicas con Terminales",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-103",
    image: "imagenesbrochure/08_Mangueras_y_Conectores/P13_03_Mangueras_hidráulicas_con_terminales.png",
    shortDesc: "Mangueras hidráulicas SAE armadas con terminales prensados a medida del cliente.",
    fullDesc: "Mangueras hidráulicas de alta presión con refuerzo de malla y espiral metálico, armadas a medida con terminales prensados JIC, ORB, BSP y ORFS. Servicio de armado en sitio.",
    specs: [
      { label: "Tipos SAE", value: "100R1AT, 100R2AT, R12, R13" },
      { label: "Diámetros", value: "¼\" a 2\"" },
      { label: "Presión", value: "1,000 a 6,000 PSI" },
      { label: "Terminales", value: "JIC 37°, ORB, BSP, ORFS prensados" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 9. PINTURAS (Página 14)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pint-001",
    name: "Pinturas Bler",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-101",
    image: "imagenesbrochure/09_Pinturas/P14_01_Pinturas_Bler.png",
    shortDesc: "Línea de pinturas y recubrimientos marca Bler para uso industrial y decorativo.",
    fullDesc: "Pinturas marca Bler para protección y acabado de superficies metálicas, madera y mampostería. Disponible en diferentes colores y acabados para aplicaciones industriales y decorativas.",
    specs: [
      { label: "Marca", value: "Bler" },
      { label: "Tipos", value: "Esmalte, anticorrosivo, vinilo" },
      { label: "Acabado", value: "Brillante, mate, satinado" },
      { label: "Aplicación", value: "Brocha, rodillo, soplete" }
    ]
  },
  {
    id: "pint-002",
    name: "Pinturas Viniltex / Pintuco",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-102",
    image: "imagenesbrochure/09_Pinturas/P14_02_Pinturas_Viniltex_Pintuco.png",
    shortDesc: "Pinturas Viniltex y Pintuco para acabados interiores, exteriores e industriales.",
    fullDesc: "Línea de pinturas Pintuco y Viniltex para construcción e industria. Vinilos tipo 1 y 2, esmaltes, anticorrosivos, bases y acabados para interiores, exteriores y superficies metálicas.",
    specs: [
      { label: "Marca", value: "Pintuco / Viniltex" },
      { label: "Tipos", value: "Vinilo, esmalte, anticorrosivo, base" },
      { label: "Uso", value: "Interior, exterior, industrial" },
      { label: "Rendimiento", value: "8-12 m²/L según producto" }
    ]
  },
  {
    id: "pint-003",
    name: "Pintura ICO",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-103",
    image: "imagenesbrochure/09_Pinturas/P14_03_Pintura_ICO.png",
    shortDesc: "Pinturas ICO para acabados de construcción y mantenimiento industrial.",
    fullDesc: "Línea de pinturas marca ICO para construcción y mantenimiento. Vinilos, esmaltes y productos especializados con amplia carta de colores y excelente cubrimiento.",
    specs: [
      { label: "Marca", value: "ICO" },
      { label: "Tipos", value: "Vinilo, esmalte, anticorrosivo" },
      { label: "Colores", value: "Amplia carta de colores" },
      { label: "Aplicación", value: "Construcción, mantenimiento" }
    ]
  },
  {
    id: "pint-004",
    name: "Pintura Pintuco Industrial",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-104",
    image: "imagenesbrochure/09_Pinturas/P14_04_Pintura_Pintuco.png",
    shortDesc: "Recubrimientos industriales Pintuco: epóxicos, poliuretanos y anticorrosivos.",
    fullDesc: "Sistemas de pintura industrial Pintuco para protección de estructuras metálicas, tanques y tuberías. Imprimantes epóxicos, acabados de poliuretano y anticorrosivos de alto desempeño.",
    specs: [
      { label: "Marca", value: "Pintuco" },
      { label: "Línea", value: "Industrial / Protección" },
      { label: "Tipos", value: "Epóxico, poliuretano, anticorrosivo" },
      { label: "Uso", value: "Estructuras metálicas, tanques, tuberías" }
    ]
  },
  {
    id: "pint-005",
    name: "Pintura Sayer",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-105",
    image: "imagenesbrochure/09_Pinturas/P14_05_Pintura_Sayer.png",
    shortDesc: "Pinturas y recubrimientos Sayer para acabados de madera y superficies especiales.",
    fullDesc: "Línea de pinturas Sayer Lack para acabados en madera, metal y superficies especiales. Lacas, selladores, barnices y tintes profesionales para muebles y carpintería industrial.",
    specs: [
      { label: "Marca", value: "Sayer" },
      { label: "Tipos", value: "Laca, sellador, barniz, tinte" },
      { label: "Aplicación", value: "Madera, metal, superficies especiales" },
      { label: "Acabado", value: "Brillante, mate, semi-mate" }
    ]
  },
  {
    id: "pint-006",
    name: "Rodillos y Brochas",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-106",
    image: "imagenesbrochure/09_Pinturas/P14_06_Rodillos_y_brochas.png",
    shortDesc: "Rodillos, brochas, bandejas y accesorios para aplicación de pinturas y recubrimientos.",
    fullDesc: "Herramientas y accesorios para pintura: rodillos de diferentes texturas y tamaños, brochas profesionales, bandejas, extensiones telescópicas y espátulas para aplicación de recubrimientos.",
    specs: [
      { label: "Productos", value: "Rodillos, brochas, bandejas, espátulas" },
      { label: "Rodillos", value: "4\", 7\", 9\" — pelo corto y largo" },
      { label: "Brochas", value: "1\" a 4\" — cerda natural y sintética" },
      { label: "Accesorios", value: "Extensiones, bandejas, cintas" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 10. ELEMENTOS DE PROTECCIÓN PERSONAL – EPP (Página 15)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "epp-001",
    name: "Cascos, Protección Auditiva y Accesorios",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-101",
    image: "imagenesbrochure/10_EPP/P15_01_Casco__protección_auditiva_y_accesorios.png",
    shortDesc: "Cascos de seguridad industrial, orejeras y gafas de protección para trabajo en campo.",
    fullDesc: "Equipos de protección para cabeza y oídos: cascos dieléctricos tipo I y II, orejeras de copa, tapones auditivos, gafas de seguridad y caretas. Certificación ANSI Z89.1 y Z87.1.",
    specs: [
      { label: "Casco", value: "ANSI Z89.1 Tipo I Clase E" },
      { label: "Auditiva", value: "NRR 22-30 dB" },
      { label: "Visual", value: "ANSI Z87.1" },
      { label: "Accesorios", value: "Barbuquejo, visor, porta-orejeras" }
    ]
  },
  {
    id: "epp-002",
    name: "Respirador 3M",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-102",
    image: "imagenesbrochure/10_EPP/P15_02_Respirador_3M.png",
    shortDesc: "Respiradores y máscaras 3M para protección contra partículas, gases y vapores.",
    fullDesc: "Protección respiratoria marca 3M: respiradores de media cara y cara completa, filtros para partículas, gases y vapores orgánicos. Certificación NIOSH para ambientes industriales.",
    specs: [
      { label: "Marca", value: "3M" },
      { label: "Tipos", value: "Media cara, cara completa, desechable" },
      { label: "Filtros", value: "P100, OV/AG, multigas" },
      { label: "Norma", value: "NIOSH 42 CFR 84" }
    ]
  },
  {
    id: "epp-003",
    name: "Overol de Protección",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-103",
    image: "imagenesbrochure/10_EPP/P15_03_Overol_de_protección.png",
    shortDesc: "Overoles y trajes de protección corporal para trabajo en campo y áreas de proceso.",
    fullDesc: "Ropa de protección industrial: overoles en jean, drill y tela ignífuga. Trajes Tyvek desechables para protección contra salpicaduras químicas. Dotación industrial a medida.",
    specs: [
      { label: "Materiales", value: "Jean, Drill, Ignífugo (FR), Tyvek" },
      { label: "Tallas", value: "S, M, L, XL, XXL" },
      { label: "Tipos", value: "Enterizo, 2 piezas, desechable" },
      { label: "Norma", value: "NFPA 2112 (FR) / EN 13034" }
    ]
  },
  {
    id: "epp-004",
    name: "Careta de Protección Facial",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-104",
    image: "imagenesbrochure/10_EPP/P15_04_Careta_de_protección_facial.png",
    shortDesc: "Caretas faciales completas para protección contra salpicaduras, impactos y soldadura.",
    fullDesc: "Caretas de protección facial para soldadura autoscurecible, protección contra salpicaduras químicas y partículas de alto impacto. Visores intercambiables y arnés ajustable.",
    specs: [
      { label: "Tipos", value: "Soldadura, salpicaduras, impacto" },
      { label: "Visor", value: "Policarbonato / Autoscurecible" },
      { label: "Norma", value: "ANSI Z87.1 / EN 166" },
      { label: "Ajuste", value: "Arnés con trinquete" }
    ]
  },
  {
    id: "epp-005",
    name: "Calzado de Seguridad Industrial",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-105",
    image: "imagenesbrochure/10_EPP/P15_05_Calzado_de_seguridad.png",
    shortDesc: "Botas y zapatos de seguridad con puntera de acero o composite, dieléctricas y antideslizantes.",
    fullDesc: "Calzado de seguridad industrial: botas con puntera de acero y composite, suela antideslizante y dieléctrica. Diseños para trabajo en campo, planta y áreas húmedas. Certificación ASTM F2413.",
    specs: [
      { label: "Puntera", value: "Acero / Composite" },
      { label: "Suela", value: "Antideslizante, dieléctrica" },
      { label: "Tallas", value: "35 a 46" },
      { label: "Norma", value: "ASTM F2413 / NTC 2257" }
    ]
  },
  {
    id: "epp-006",
    name: "Guantes de Protección Industrial",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-106",
    image: "imagenesbrochure/10_EPP/P15_06_Guantes_de_protección.png",
    shortDesc: "Guantes anticorte, de nitrilo, cuero y dieléctricos para protección de manos.",
    fullDesc: "Línea completa de guantes de seguridad: anticorte con palma de nitrilo, guantes de cuero para soldadura, dieléctricos, guantes de caucho para químicos y guantes de nylon recubierto.",
    specs: [
      { label: "Tipos", value: "Anticorte, Dieléctrico, Cuero, Nitrilo" },
      { label: "Nivel corte", value: "A3, A4, A6, A9" },
      { label: "Norma", value: "EN 388 / ANSI/ISEA 105" },
      { label: "Tallas", value: "S, M, L, XL" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 11. LUBRICANTES Y ADHESIVOS (Página 16)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "lub-001",
    name: "Lubricante Penetrante CRC",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-101",
    image: "imagenesbrochure/11_Lubricantes_y_Adhesivos/P16_01_Lubricante_penetrante_CRC.png",
    shortDesc: "Lubricantes penetrantes y aflojatodo CRC para mantenimiento de pernería y mecanismos.",
    fullDesc: "Productos CRC para lubricación y mantenimiento: penetrantes para aflojar pernos oxidados, lubricantes multiusos, protectores contra corrosión y limpiadores de contactos eléctricos.",
    specs: [
      { label: "Marca", value: "CRC" },
      { label: "Tipos", value: "Penetrante, lubricante, protector" },
      { label: "Presentación", value: "Aerosol, botella, tambor" },
      { label: "Uso", value: "Aflojado, lubricación, protección" }
    ]
  },
  {
    id: "lub-002",
    name: "Adhesivos Loctite",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-102",
    image: "imagenesbrochure/11_Lubricantes_y_Adhesivos/P16_02_Adhesivos_Loctite.png",
    shortDesc: "Trabarroscas, selladores, adhesivos y formadores de juntas Loctite para uso industrial.",
    fullDesc: "Línea completa de adhesivos anaeróbicos y selladores marca Loctite: trabarroscas de resistencia media (243) y alta (263), selladores de roscas (577), formadores de juntas y adhesivos instantáneos.",
    specs: [
      { label: "Marca", value: "Loctite (Henkel)" },
      { label: "Productos", value: "Trabarroscas, sellador, formajuntas" },
      { label: "Referencias", value: "243, 263, 577, 518, 495" },
      { label: "Curado", value: "Anaeróbico / Cianoacrilato" }
    ]
  },
  {
    id: "lub-003",
    name: "Lubricantes WD-40",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-103",
    image: "imagenesbrochure/11_Lubricantes_y_Adhesivos/P16_03_Lubricantes_WD-40.png",
    shortDesc: "Lubricante multiusos WD-40, desengrasante, protector contra humedad y corrosión.",
    fullDesc: "Productos WD-40 para lubricación, protección y limpieza: lubricante multiusos, línea Specialist con grasas blancas, aceite de corte, desengrasante y protector anticorrosión.",
    specs: [
      { label: "Marca", value: "WD-40" },
      { label: "Línea", value: "Multiusos y Specialist" },
      { label: "Presentación", value: "Aerosol 382ml, 311g, galón" },
      { label: "Funciones", value: "Lubrica, protege, limpia, afloja" }
    ]
  },
  {
    id: "lub-004",
    name: "Aerosol CRC Especializado",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-104",
    image: "imagenesbrochure/11_Lubricantes_y_Adhesivos/P16_04_Aerosol_CRC.png",
    shortDesc: "Aerosoles CRC especializados para limpieza eléctrica, lubricación y protección.",
    fullDesc: "Aerosoles CRC de uso especializado: limpiador de contactos eléctricos (CRC QD), desengrasante industrial, lubricante de silicona, protector dieléctrico y grasa blanca en aerosol.",
    specs: [
      { label: "Marca", value: "CRC" },
      { label: "Productos", value: "Limpiador contactos, silicona, grasa" },
      { label: "Uso", value: "Eléctrico, mecánico, protección" },
      { label: "Presentación", value: "Aerosol 300-400 ml" }
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
    description: "Equipos y partes de instrumentación, medición y control de procesos."
  },
  {
    id: "bombas",
    name: "Bombas y Consumibles",
    icon: "fa-water",
    count: PRODUCTS_DATA.filter(p => p.category === "bombas").length,
    description: "Bombas centrífugas, neumáticas, sellos mecánicos y repuestos."
  },
  {
    id: "fluidos",
    name: "Control de Fluidos",
    icon: "fa-faucet-drip",
    count: PRODUCTS_DATA.filter(p => p.category === "fluidos").length,
    description: "Válvulas, bridas, racores, empaques, acoples y juntas RTJ."
  },
  {
    id: "transmision",
    name: "Transmisión y Potencia",
    icon: "fa-gears",
    count: PRODUCTS_DATA.filter(p => p.category === "transmision").length,
    description: "Rodamientos, acoples, correas, cadenas y elementos de transmisión."
  },
  {
    id: "herramientas_ind",
    name: "Herramientas Industriales",
    icon: "fa-screwdriver-wrench",
    count: PRODUCTS_DATA.filter(p => p.category === "herramientas_ind").length,
    description: "Herramientas hidráulicas Enerpac, eléctricas DeWalt y Truper."
  },
  {
    id: "electrico",
    name: "Productos Eléctricos",
    icon: "fa-bolt",
    count: PRODUCTS_DATA.filter(p => p.category === "electrico").length,
    description: "Interruptores, conectores, discos y accesorios eléctricos."
  },
  {
    id: "herramientas_man",
    name: "Herramientas Manuales",
    icon: "fa-wrench",
    count: PRODUCTS_DATA.filter(p => p.category === "herramientas_man").length,
    description: "Llaves, dados, torquímetros y herramientas de sujeción."
  },
  {
    id: "mangueras",
    name: "Mangueras y Conectores",
    icon: "fa-droplet",
    count: PRODUCTS_DATA.filter(p => p.category === "mangueras").length,
    description: "Mangueras hidráulicas, industriales y acoples prensados."
  },
  {
    id: "pinturas",
    name: "Pinturas",
    icon: "fa-paint-roller",
    count: PRODUCTS_DATA.filter(p => p.category === "pinturas").length,
    description: "Pintuco, Viniltex, ICO, Sayer, Bler y accesorios de pintura."
  },
  {
    id: "epp",
    name: "Protección Personal (EPP)",
    icon: "fa-user-shield",
    count: PRODUCTS_DATA.filter(p => p.category === "epp").length,
    description: "Cascos, guantes, calzado, respiradores, caretas y overoles."
  },
  {
    id: "lubricantes",
    name: "Lubricantes y Adhesivos",
    icon: "fa-oil-can",
    count: PRODUCTS_DATA.filter(p => p.category === "lubricantes").length,
    description: "CRC, Loctite, WD-40 y aerosoles especializados."
  }
];

// Exponer globalmente para la aplicación
window.PRODUCTS_DATA = PRODUCTS_DATA;
window.CATEGORIES_DATA = CATEGORIES_DATA;
