// ═══════════════════════════════════════════════════════════════════════════
// BASE DE DATOS OFICIAL DE PRODUCTOS — SUMINISTROS INDUSTRIALES LUSER (SM LUSER)
// Basado en el Brochure Oficial PDF de la Empresa
// Códigos internos únicos: SML-[LÍNEA]-[CONSECUTIVO] (ej: SML-INST-0301)
// ═══════════════════════════════════════════════════════════════════════════

const PRODUCTS_DATA = [

  // ═══════════════════════════════════════════════════════════════
  // 1. EQUIPOS Y PARTES DE INSTRUMENTACIÓN
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inst-001",
    name: "Filtro Separador Parker",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0301",
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
    code: "SML-INST-0302",
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
    code: "SML-INST-0303",
    image: "imagenesbrochure/01_Instrumentacion/P03_03_Instrumento_circular_Parker.png",
    shortDesc: "Instrumentos circulares Parker para medición y registro de variables de proceso.",
    fullDesc: "Indicadores circulares de presión y temperatura marca Parker con carátula de alto contraste. Ideales para paneles de control y tableros de instrumentación en plantas de proceso.",
    specs: [
      { label: "Marca", value: "Parker" },
      { label: "Tipo", value: "Indicador circular analógico" },
      { label: "Variables", value: "Presión, temperatura, flujo" },
      { label: "Montaje", value: "Panel / Tablero de instrumentación" }
    ]
  },
  {
    id: "inst-004",
    name: "Válvulas de Instrumentación",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0304",
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
    code: "SML-INST-0401",
    image: "imagenesbrochure/01_Instrumentacion/P04_01_Manómetro.png",
    shortDesc: "Manómetros de glicerina en acero inoxidable para medición de presión en procesos.",
    fullDesc: "Manómetros industriales con caja de acero inoxidable AISI 316, relleno de glicerina para absorción de vibraciones. Conexión inferior y posterior NPT. Rangos de 0 a 10,000 PSI.",
    specs: [
      { label: "Diámetros", value: "2½\", 4\", 6\"" },
      { label: "Conexión", value: "¼\" NPT, ½\" NPT" },
      { label: "Material caja", value: "Acero Inoxidable AISI 316" },
      { label: "Norma", value: "EN 837-1 / ASME B40.100" }
    ]
  },
  {
    id: "inst-006",
    name: "Bomba Hidráulica de Prueba",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0402",
    image: "imagenesbrochure/01_Instrumentacion/P04_02_Bomba_instrumento_hidráulico_de_prueba.png",
    shortDesc: "Bomba hidráulica de prueba para calibración y verificación de manómetros e instrumentos.",
    fullDesc: "Equipo portátil de prueba hidrostática para calibración de manómetros y transmisores de presión en campo. Generación de presión manual para verificación de instrumentos.",
    specs: [
      { label: "Tipo", value: "Bomba de prueba hidrostática manual" },
      { label: "Presión máx.", value: "Hasta 10,000 PSI" },
      { label: "Uso", value: "Calibración y verificación en campo" },
      { label: "Portabilidad", value: "Compacta y portátil con maletín" }
    ]
  },
  {
    id: "inst-007",
    name: "Indicadores y Manómetros de Presión",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0403",
    image: "imagenesbrochure/01_Instrumentacion/P04_03_Indicadores_manómetros_de_presión.png",
    shortDesc: "Conjunto de indicadores y manómetros para diferentes rangos de presión industrial.",
    fullDesc: "Variedad de manómetros e indicadores de presión en diferentes diámetros, rangos y materiales. Opciones con glicerina, seco, conexión inferior y posterior para múltiples aplicaciones.",
    specs: [
      { label: "Rangos", value: "Vacío hasta 15,000 PSI" },
      { label: "Tipos", value: "Con glicerina, seco, diferencial" },
      { label: "Carátula", value: "2\", 2½\", 4\", 6\"" },
      { label: "Norma", value: "ASME B40.100" }
    ]
  }
  ,{
    id: "inst-008",
    name: "Pressure Switch Barksdale",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0404",
    image: "imagenesbrochure/01_Instrumentacion/Barksdale_Pressure_Switch.jpeg",
    shortDesc: "Interruptor de presión Barksdale para aplicaciones industriales exigentes.",
    fullDesc: "Switch de presión Barksdale altamente confiable, ideal para monitoreo de sistemas críticos donde la seguridad y precisión son indispensables.",
    specs: [{ label: "Marca", value: "Barksdale" }, { label: "Tipo", value: "Pressure Switch" }]
  },
  {
    id: "inst-009",
    name: "Filtro de Alta Presión en Línea",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0405",
    image: "imagenesbrochure/01_Instrumentacion/Filtro_Alta_Presion_En_Linea.jpeg",
    shortDesc: "Carcasa de filtro en línea diseñada para soportar altas presiones.",
    fullDesc: "Estructura metálica de alta resistencia con malla protectora, ideal para filtrado en líneas hidráulicas y de alta presión.",
    specs: [{ label: "Tipo", value: "Filtro de Alta Presión" }, { label: "Material", value: "Acero / Aleación especial" }]
  },
  {
    id: "inst-010",
    name: "Manómetro Matherne 15,000 PSI",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0406",
    image: "imagenesbrochure/01_Instrumentacion/Manometro_Matherne_15000_PSI.jpeg",
    shortDesc: "Manómetro Matherne para alta presión, capacidad de 15,000 PSI.",
    fullDesc: "Manómetro de instrumentación Matherne con booster de presión 4:1. Lectura clara y alta durabilidad para monitoreo de presión extrema.",
    specs: [{ label: "Marca", value: "Matherne Instrumentation" }, { label: "Presión Máxima", value: "15,000 PSI" }]
  },
  {
    id: "inst-011",
    name: "Manómetros Winters Instruments",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0407",
    image: "imagenesbrochure/01_Instrumentacion/Manometros_Winters_Instruments.jpeg",
    shortDesc: "Conjunto de manómetros industriales Winters de alta calidad.",
    fullDesc: "Manómetros Winters Instruments robustos, diseñados para soportar vibraciones y proveer lecturas precisas en entornos hostiles.",
    specs: [{ label: "Marca", value: "Winters Instruments" }, { label: "Uso", value: "Lectura de Presión Industrial" }]
  },
  {
    id: "inst-012",
    name: "Válvula Reguladora Shearflo",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0408",
    image: "imagenesbrochure/01_Instrumentacion/Valvula_Reguladora_Shearflo.jpeg",
    shortDesc: "Válvula y regulador de precisión Shearflo (Made in U.S.A.).",
    fullDesc: "Válvula reguladora de fluido Shearflo. Construcción de alto estándar para control exacto y confiabilidad a largo plazo.",
    specs: [{ label: "Marca", value: "Shearflo" }, { label: "Origen", value: "U.S.A." }]
  },
  {
    id: "inst-013",
    name: "Válvula de Control Manual",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0409",
    image: "imagenesbrochure/01_Instrumentacion/Valvula_Control_Manual.jpeg",
    shortDesc: "Válvula de operación manual con palanca para control de flujo.",
    fullDesc: "Válvula resistente con palanca ergonómica, cuerpo en hierro o acero con bridas, ideal para accionamiento manual rápido en líneas de flujo.",
    specs: [{ label: "Accionamiento", value: "Manual por Palanca" }, { label: "Aplicación", value: "Control de Flujo" }]
  },
  {
    id: "inst-014",
    name: "Bloque Manifold de Aleación",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0410",
    image: "imagenesbrochure/01_Instrumentacion/Bloque_Manifold_Aluminio.jpeg",
    shortDesc: "Bloque de distribución (manifold) mecanizado con precisión.",
    fullDesc: "Componente central mecanizado para distribución y control en sistemas hidráulicos o neumáticos.",
    specs: [{ label: "Tipo", value: "Manifold" }, { label: "Construcción", value: "Mecanizado de Precisión" }]
  },
  {
    id: "inst-015",
    name: "Válvula de Control Direccional Barksdale (Vista Trasera)",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0411",
    image: "imagenesbrochure/01_Instrumentacion/Barksdale_Directional_Control_Valve.jpeg",
    shortDesc: "Válvula direccional Barksdale, repuesto original.",
    fullDesc: "Válvula de control direccional para manejar flujos complejos en sistemas de instrumentación críticos.",
    specs: [{ label: "Marca", value: "Barksdale" }, { label: "Tipo", value: "Directional Control Valve" }]
  },
  {
    id: "inst-016",
    name: "Carcasa de Filtro Industrial",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0412",
    image: "imagenesbrochure/01_Instrumentacion/Carcasa_Filtro_Industrial.jpeg",
    shortDesc: "Componente de filtración para instrumentación.",
    fullDesc: "Carcasa de recambio para sistemas de filtrado de alta presión.",
    specs: [{ label: "Uso", value: "Filtración en Línea" }]
  },
  {
    id: "inst-017",
    name: "Manómetro Matherne 15,000 PSI (Otra Vista)",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0413",
    image: "imagenesbrochure/01_Instrumentacion/Manometro_Matherne_15000_PSI_2.jpeg",
    shortDesc: "Manómetro Matherne, equipo de lectura de alta capacidad.",
    fullDesc: "Manómetro Matherne 15000 PSI, equipo pesado para operaciones de alto torque o presión.",
    specs: [{ label: "Marca", value: "Matherne Instrumentation" }, { label: "Lectura", value: "Hasta 15,000" }]
  },
  {
    id: "inst-018",
    name: "Kits de Sellos Mecánicos (Set)",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0414",
    image: "imagenesbrochure/01_Instrumentacion/Kits_Sellos_Mecanicos.jpeg",
    shortDesc: "Conjunto de sellos mecánicos para mantenimiento preventivo.",
    fullDesc: "Kits completos de sellos mecánicos empacados para reemplazo directo en bombas y equipos rotativos.",
    specs: [{ label: "Contenido", value: "Sellos Mecánicos" }, { label: "Uso", value: "Mantenimiento Preventivo" }]
  },
  {
    id: "inst-019",
    name: "Válvula de Control Direccional Barksdale",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0415",
    image: "imagenesbrochure/01_Instrumentacion/Valvula_Control_Direccional_Barksdale.jpeg",
    shortDesc: "Válvula Barksdale con palanca robusta.",
    fullDesc: "Válvula de control direccional Barksdale (Made in U.S.A.). Diseñada para operar en condiciones extremas y tolerar hasta 3000 PSI.",
    specs: [{ label: "Marca", value: "Barksdale" }, { label: "Presión de Trabajo", value: "Hasta 3,000 PSI" }]
  },
  {
    id: "inst-020",
    name: "Contador Digital Matherne para Bombas",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0416",
    image: "imagenesbrochure/01_Instrumentacion/Contador_Digital_Matherne_Bombas.jpeg",
    shortDesc: "Panel digital Matherne para contador de ciclos de bombas.",
    fullDesc: "Panel de acero inoxidable con contadores digitales de 'Strokes/Minute' y 'Total Strokes' para dos bombas (Pump 1 y Pump 2).",
    specs: [{ label: "Marca", value: "Matherne Instrumentation" }, { label: "Funciones", value: "Contador Digital de Ciclos" }]
  },
  {
    id: "inst-021",
    name: "Conector Eléctrico Multipin Industrial",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0417",
    image: "imagenesbrochure/01_Instrumentacion/Conector_Electrico_Multipin.jpeg",
    shortDesc: "Conectores circulares multipin para transmisión de señales.",
    fullDesc: "Conectores robustos diseñados para garantizar conexiones seguras en paneles de control y sensores de instrumentación.",
    specs: [{ label: "Tipo", value: "Conector Circular Multipin" }, { label: "Aplicación", value: "Señales Eléctricas y Control" }]
  },
  {
    id: "inst-022",
    name: "Kits de Sellos Pacseal Hydraulics SV-100",
    category: "instrumentacion",
    categoryName: "Equipos y Partes de Instrumentación",
    code: "SML-INST-0418",
    image: "imagenesbrochure/01_Instrumentacion/Kits_Sellos_Pacseal_Hydraulics.jpeg",
    shortDesc: "Kit de sellos y reparación para válvulas SV-100.",
    fullDesc: "Seal Kit SV-100 Control Valve de Pacseal Hydraulics (Made in U.S.A.). Incluye elastómeros, anillos y empaques originales.",
    specs: [{ label: "Marca", value: "Pacseal Hydraulics" }, { label: "Modelo Compatible", value: "SV-100 Control Valve" }]
  }


  // ═══════════════════════════════════════════════════════════════
  // 2. BOMBAS Y CONSUMIBLES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "bombas-001",
    name: "Bomba Centrífuga Industrial",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-0501",
    image: "imagenesbrochure/02_Bombas_y_Consumibles/P05_01_Bomba_centrífuga.png",
    shortDesc: "Bombas centrífugas de alto rendimiento para transferencia de fluidos en plantas industriales.",
    fullDesc: "Bombas centrífugas horizontales y verticales para aplicaciones de transferencia de agua, químicos y petróleo. Construcción robusta en hierro fundido y acero inoxidable según requerimiento de proceso.",
    specs: [
      { label: "Tipo", value: "Centrífuga horizontal / vertical" },
      { label: "Caudal", value: "Hasta 500 GPM" },
      { label: "Presión", value: "Hasta 300 PSI" },
      { label: "Sello", value: "Mecánico simple / doble" }
    ]
  },
  {
    id: "bombas-002",
    name: "Bomba Neumática de Doble Diafragma",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-0502",
    image: "imagenesbrochure/02_Bombas_y_Consumibles/bomba neumatica de doble diafragma.jpg",
    shortDesc: "Bombas de doble diafragma para manejo de fluidos viscosos, químicos y lodos.",
    fullDesc: "Bombas neumáticas de doble diafragma (AODD) para transferencia de líquidos corrosivos, viscosos, abrasivos y con sólidos en suspensión. Autoaspirantes y sin sellos mecánicos.",
    specs: [
      { label: "Tipo", value: "Doble diafragma neumática (AODD)" },
      { label: "Caudal", value: "Hasta 300 GPM" },
      { label: "Materiales", value: "Aluminio, PP, PVDF, Acero Inox" },
      { label: "Fluidos", value: "Químicos, lodos, pintura, solventes" }
    ]
  },
  {
    id: "bombas-003",
    name: "Sellos Mecánicos y Componentes",
    category: "bombas",
    categoryName: "Bombas y Consumibles",
    code: "SML-BOM-0503",
    image: "imagenesbrochure/02_Bombas_y_Consumibles/P05_03_Sellos_mecánicos_y_componentes.png",
    shortDesc: "Sellos mecánicos, impulsores y kits de reparación para bombas industriales.",
    fullDesc: "Repuestos y consumibles de alta calidad para bombas centrífugas y dosificadoras. Sellos mecánicos en carburo de silicio, impulsores, anillos de desgaste y kits completos de mantenimiento.",
    specs: [
      { label: "Componentes", value: "Sellos, impulsores, anillos, empaques" },
      { label: "Materiales sello", value: "SiC, Tungsteno, Viton, PTFE" },
      { label: "Tipos sello", value: "Simple, doble, cartucho" },
      { label: "Norma", value: "API 682 / DIN 24960" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. MANEJO Y CONTROL DE FLUIDOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "fluid-001",
    name: "Válvulas de Proceso Industrial",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-0601",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/Válvulas de Proceso Industrial Código SMLFL101.jpg",
    shortDesc: "Válvulas de bola, compuerta, globo y aguja para control de fluidos en plantas de proceso.",
    fullDesc: "Válvulas industriales de proceso en acero al carbón, acero inoxidable y aleaciones especiales. Válvulas de bola flotante y trunnion, compuerta, globo y aguja para líneas de alta y baja presión.",
    specs: [
      { label: "Tipos", value: "Bola, Compuerta, Globo, Aguja, Check" },
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
    code: "SML-FL-0602",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P06_02_Conjunto_de_válvulas_y_accesorios.png",
    shortDesc: "Kits completos de válvulas, bridas y accesorios para sistemas de tuberías industriales.",
    fullDesc: "Conjuntos de válvulas y accesorios para ensamble de líneas de proceso. Incluye válvulas de bola, check, bridas, niples y adaptadores en diferentes materiales y presiones nominales.",
    specs: [
      { label: "Componentes", value: "Válvulas, bridas, niples, adaptadores" },
      { label: "Materiales", value: "A105, A182 F316, Bronce B62" },
      { label: "Presión", value: "3000#, 6000#, 10000# PSI" },
      { label: "Norma", value: "ASME B16.11 / B16.5" }
    ]
  },
  {
    id: "fluid-003",
    name: "Conectores y Acoples para Fluidos",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-0603",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P06_03_Conector_acople_rojo_para_fluidos.png",
    shortDesc: "Acoples rápidos y conectores especializados para sistemas de control de fluidos.",
    fullDesc: "Conectores y acoples de alta ingeniería para conexiones rápidas y seguras en líneas de fluidos industriales. Diseñados para aplicaciones de alta presión en sistemas hidráulicos y de proceso.",
    specs: [
      { label: "Tipo", value: "Acople rápido, conector de fluidos" },
      { label: "Presión", value: "Hasta 5,000 PSI" },
      { label: "Material", value: "Acero al carbón, aluminio, polímero" },
      { label: "Aplicación", value: "Hidráulica, neumática, proceso" }
    ]
  },
  {
    id: "fluid-004",
    name: "Abrazaderas y Conexiones de Tubería",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-0701",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P07_01_Abrazaderas_conexiones_de_tubería.png",
    shortDesc: "Abrazaderas tipo U-bolt, grapas y soportes para fijación de tuberías industriales.",
    fullDesc: "Sistemas de soporte y fijación de tuberías: abrazaderas tipo U-bolt, grapas, colgantes y soportes en acero galvanizado e inoxidable para tendidos de tubería en plantas de proceso.",
    specs: [
      { label: "Tipos", value: "U-bolt, grapa, colgante, soporte fijo" },
      { label: "Material", value: "Acero galvanizado / Inoxidable 304" },
      { label: "Tamaños", value: "½\" a 12\"" },
      { label: "Norma", value: "MSS SP-58 / SP-69" }
    ]
  },
  {
    id: "fluid-005",
    name: "Acoples y Conexiones Ranuradas",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-0702",
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
    code: "SML-FL-0703",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P07_03_Accesorios_de_conexión_para_tubería.png",
    shortDesc: "Codos, tees, reducciones y niples roscados y soldables para sistemas de tubería.",
    fullDesc: "Accesorios de tubería forjados y fundidos: codos 90° y 45°, tees, reducciones concéntricas y excéntricas, uniones, niples y tapones en acero al carbón e inoxidable.",
    specs: [
      { label: "Tipos", value: "Codos, Tees, Reducciones, Niples, Tapones" },
      { label: "Conexión", value: "NPT roscado, Socket Weld, Butt Weld" },
      { label: "Materiales", value: "A105, A182 F316, A234 WPB" },
      { label: "Presión", value: "3000# / 6000# / SCH 40-80-160" }
    ]
  },
  {
    id: "fluid-007",
    name: "Juntas y Empaques Industriales",
    category: "fluidos",
    categoryName: "Manejo y Control de Fluidos",
    code: "SML-FL-0704",
    image: "imagenesbrochure/03_Manejo_y_Control_de_Fluidos/P07_04_Junta_elementos_de_conexión.png",
    shortDesc: "Juntas RTJ, espirometálicas y empaques planos para sellado de bridas industriales.",
    fullDesc: "Empaques y juntas industriales: juntas metálicas RTJ (Ring Type Joint) en perfil ovalado y octagonal, juntas espirometálicas con relleno de grafito/PTFE y empaques planos de diferentes materiales.",
    specs: [
      { label: "Tipos", value: "RTJ, Espirometálica, Plana, Kammprofile" },
      { label: "Perfiles RTJ", value: "R (ovalado/octagonal), RX, BX" },
      { label: "Materiales", value: "Soft Iron, SS304, SS316, Inconel 625" },
      { label: "Norma", value: "ASME B16.20 / API 6A" }
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
    code: "SML-TR-0801",
    image: "imagenesbrochure/04_Transmision_y_Potencia/rodamientos conicos.jpg",
    shortDesc: "Rodamientos de bolas, rodillos cónicos y chumaceras para maquinaria industrial.",
    fullDesc: "Rodamientos industriales de bolas, rodillos cónicos, cilíndricos, axiales y chumaceras tipo pedestal. Para motores, reductores, transportadores y equipos de producción.",
    specs: [
      { label: "Tipos", value: "Bolas, rodillos cónicos, cilíndricos, axiales" },
      { label: "Series", value: "6200, 6300, 22200, 30200, 32000" },
      { label: "Material", value: "Acero al cromo GCr15" },
      { label: "Aplicación", value: "Motores, reductores, transportadores" }
    ]
  },
  {
    id: "transm-002",
    name: "Acoples Mecánicos y Elementos de Transmisión",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-0802",
    image: "imagenesbrochure/04_Transmision_y_Potencia/acoples mecanicos y elementos de transmision.jpg",
    shortDesc: "Acoples flexibles, rígidos y elementos de conexión para ejes y reductores.",
    fullDesc: "Acoples mecánicos para conexión de ejes: acoples flexibles tipo araña (jaw), de engrane, de disco y rígidos. Elementos de transmisión para reductores, bombas y motores industriales.",
    specs: [
      { label: "Tipos", value: "Araña (jaw), Engrane, Disco, Rígido" },
      { label: "Torque", value: "Según tamaño y aplicación" },
      { label: "Material", value: "Acero, Aluminio, Inserto Poliuretano" },
      { label: "Uso", value: "Motor-reductor, motor-bomba, ejes" }
    ]
  },
  {
    id: "transm-003",
    name: "Rodamientos Timken",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-0803",
    image: "imagenesbrochure/04_Transmision_y_Potencia/P08_03_Rodamientos_Timken.png",
    shortDesc: "Rodamientos de rodillos cónicos marca Timken para aplicaciones de alta carga.",
    fullDesc: "Rodamientos de rodillos cónicos marca Timken, reconocidos mundialmente por su durabilidad y capacidad de carga. Ideales para ejes, transmisiones, equipos mineros y maquinaria pesada.",
    specs: [
      { label: "Marca", value: "Timken (USA)" },
      { label: "Tipo", value: "Rodillos cónicos (Tapered Roller)" },
      { label: "Capacidad", value: "Alta carga radial y axial combinada" },
      { label: "Aplicación", value: "Maquinaria pesada, minería, Oil & Gas" }
    ]
  },
  {
    id: "transm-004",
    name: "Correas, Cadenas y Poleas Industriales",
    category: "transmision",
    categoryName: "Transmisión y Potencia",
    code: "SML-TR-0804",
    image: "imagenesbrochure/04_Transmision_y_Potencia/P08_04_Elementos_de_transmisión_y_acoples.png",
    shortDesc: "Correas en V, sincrónicas, cadenas de rodillos, piñones y poleas para transmisión mecánica.",
    fullDesc: "Línea completa de elementos de transmisión de potencia: correas tipo V (A, B, C, D), correas sincrónicas HTD, poleas de 1 a 8 canales, cadenas de rodillos y piñones templados.",
    specs: [
      { label: "Correas", value: "V clásica A/B/C/D, Sincrónica HTD/RPP" },
      { label: "Cadenas", value: "Paso 25 a 100, simples y dobles" },
      { label: "Poleas", value: "Aluminio / Hierro, 1 a 8 canales" },
      { label: "Norma", value: "DIN 2211 / ANSI B29.1 / ISO 5290" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. HERRAMIENTAS INDUSTRIALES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "herr-ind-001",
    name: "Bomba Hidráulica Manual Enerpac",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-0901",
    image: "imagenesbrochure/05_Herramientas_Industriales/P09_01_Bomba_hidráulica_manual_Enerpac.png",
    shortDesc: "Bombas hidráulicas manuales Enerpac para accionamiento de cilindros y herramientas de fuerza.",
    fullDesc: "Bombas hidráulicas de accionamiento manual marca Enerpac para operación de cilindros, prensas, tensores y herramientas de fuerza. Presión de trabajo hasta 10,000 PSI (700 bar).",
    specs: [
      { label: "Marca", value: "Enerpac" },
      { label: "Presión máx.", value: "10,000 PSI (700 bar)" },
      { label: "Tipo", value: "Manual de 1 y 2 velocidades" },
      { label: "Uso", value: "Cilindros, prensas, tensores de pernos" }
    ]
  },
  {
    id: "herr-ind-002",
    name: "Gato Hidráulico Industrial",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-0902",
    image: "imagenesbrochure/05_Herramientas_Industriales/P09_02_Gato_hidráulico.png",
    shortDesc: "Gatos hidráulicos de botella y patín para levantamiento de cargas pesadas en planta.",
    fullDesc: "Gatos hidráulicos industriales tipo botella y patín con capacidades desde 5 hasta 100 toneladas. Para mantenimiento de maquinaria, montajes y levantamiento de cargas pesadas.",
    specs: [
      { label: "Capacidad", value: "5 a 100 toneladas" },
      { label: "Tipos", value: "Botella, Patín, Telescópico" },
      { label: "Carrera", value: "Variable según modelo y capacidad" },
      { label: "Uso", value: "Mantenimiento, montajes industriales" }
    ]
  },
  {
    id: "herr-ind-003",
    name: "Cilindros Hidráulicos Enerpac",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-0903",
    image: "imagenesbrochure/05_Herramientas_Industriales/P09_03_Cilindros_hidráulicos_Enerpac.png",
    shortDesc: "Cilindros hidráulicos Enerpac de simple y doble efecto para aplicaciones de fuerza controlada.",
    fullDesc: "Cilindros hidráulicos de alta presión marca Enerpac para aplicaciones de empuje, tracción, levantamiento y posicionamiento. Simple y doble efecto con capacidades de 5 a 1,000 toneladas.",
    specs: [
      { label: "Marca", value: "Enerpac" },
      { label: "Capacidad", value: "5 a 1,000 toneladas" },
      { label: "Presión", value: "10,000 PSI (700 bar)" },
      { label: "Efecto", value: "Simple efecto (SA) y doble efecto (DA)" }
    ]
  },
  {
    id: "herr-ind-004",
    name: "Herramientas Eléctricas DeWalt",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-1101",
    image: "imagenesbrochure/05_Herramientas_Industriales/P11_01_Herramientas_eléctricas_DeWalt.png",
    shortDesc: "Línea profesional DeWalt: taladros, pulidoras, rotomartillos y sierras para trabajo pesado.",
    fullDesc: "Herramientas eléctricas profesionales marca DeWalt para trabajo industrial continuo. Taladros de impacto, pulidoras angulares, rotomartillos SDS, sierras circulares y caladoras de alto desempeño.",
    specs: [
      { label: "Marca", value: "DeWalt" },
      { label: "Gama", value: "Profesional / Industrial" },
      { label: "Alimentación", value: "110V/220V AC / Batería 20V MAX XR" },
      { label: "Garantía", value: "3 años garantía de fábrica" }
    ]
  },
  {
    id: "herr-ind-005",
    name: "Herramientas Eléctricas Truper",
    category: "herramientas_ind",
    categoryName: "Herramientas Industriales",
    code: "SML-HI-1102",
    image: "imagenesbrochure/05_Herramientas_Industriales/P11_02_Herramientas_eléctricas_Truper.png",
    shortDesc: "Herramientas eléctricas Truper: esmeriles, taladros y pulidoras para uso profesional.",
    fullDesc: "Línea de herramientas eléctricas marca Truper Industrial para uso profesional. Esmeriles angulares de 4½\" y 7\", taladros percutores, pulidoras y equipos de corte con excelente relación calidad-precio.",
    specs: [
      { label: "Marca", value: "Truper Industrial" },
      { label: "Gama", value: "Profesional" },
      { label: "Alimentación", value: "110V / 220V AC" },
      { label: "Equipos", value: "Esmeriles, taladros, pulidoras, sierras" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. PRODUCTOS ELÉCTRICOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "elec-001",
    name: "Interruptores y Protecciones Eléctricas",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-1001",
    image: "imagenesbrochure/06_Productos_Electricos/interruptores y proteccion electrica.jpg",
    shortDesc: "Breakers, interruptores termomagnéticos y dispositivos de protección para tableros.",
    fullDesc: "Interruptores termomagnéticos, disyuntores, breakers y relés de protección para tableros de distribución eléctrica industrial. Protección contra sobrecarga y cortocircuito en instalaciones de BT y MT.",
    specs: [
      { label: "Tipos", value: "Termomagnético, Diferencial, Guardamotor" },
      { label: "Corriente", value: "6A a 630A" },
      { label: "Voltaje", value: "240V / 480V / 600V AC" },
      { label: "Montaje", value: "Riel DIN 35mm / Fijo en tablero" }
    ]
  },
  {
    id: "elec-002",
    name: "Cajas, Tomas y Accesorios Eléctricos",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-1002",
    image: "imagenesbrochure/06_Productos_Electricos/P10_02_Cajas_tomas_y_accesorios_eléctricos.png",
    shortDesc: "Cajas de distribución, tomacorrientes industriales y accesorios para instalaciones eléctricas.",
    fullDesc: "Cajas de paso, cajas de distribución, tomacorrientes industriales tipo NEMA, botoneras, prensaestopas y accesorios para canalizaciones y tableros eléctricos industriales.",
    specs: [
      { label: "Tipos", value: "Cajas, tomas industriales, prensaestopas" },
      { label: "Protección", value: "NEMA 3R, 4, 4X, 7" },
      { label: "Material", value: "Acero, aluminio fundido, policarbonato" },
      { label: "Aplicación", value: "Plantas industriales, áreas clasificadas" }
    ]
  },
  {
    id: "elec-003",
    name: "Discos Abrasivos y de Corte",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-1003",
    image: "imagenesbrochure/06_Productos_Electricos/P10_03_Discos_abrasivos_y_de_corte.png",
    shortDesc: "Discos de corte, desbaste y flap para metales, acero inoxidable y concreto.",
    fullDesc: "Discos abrasivos para corte y desbaste de metales ferrosos y no ferrosos. Discos de corte finos 1.0mm y 1.6mm, desbaste grueso 6.4mm, discos flap grano 40-120 y discos diamantados para concreto.",
    specs: [
      { label: "Tamaños", value: "4½\" (115mm), 7\" (180mm), 9\" (230mm)" },
      { label: "Tipos", value: "Corte, Desbaste, Flap, Diamantado" },
      { label: "Abrasivo", value: "Óxido aluminio, Zirconio, Carburo Si" },
      { label: "RPM máx.", value: "13,300 (4½\") / 8,600 (7\")" }
    ]
  },
  {
    id: "elec-004",
    name: "Conector Eléctrico Industrial",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-1004",
    image: "imagenesbrochure/06_Productos_Electricos/P10_04_Conector_eléctrico_industrial.png",
    shortDesc: "Conectores eléctricos industriales de potencia para equipos y maquinaria pesada.",
    fullDesc: "Conectores eléctricos industriales de alta corriente para conexión de motores, equipos rotativos y maquinaria pesada. Construcción robusta con enclavamiento mecánico para ambientes exigentes.",
    specs: [
      { label: "Tipo", value: "Conector industrial de potencia" },
      { label: "Corriente", value: "32A / 63A / 125A / 200A" },
      { label: "Voltaje", value: "Hasta 600V AC / DC" },
      { label: "Protección", value: "IP44 / IP67 según modelo" }
    ]
  },
  {
    id: "elec-005",
    name: "Conector Eléctrico Multipin",
    category: "electrico",
    categoryName: "Productos Eléctricos",
    code: "SML-EL-1005",
    image: "imagenesbrochure/06_Productos_Electricos/P10_05_Conector_eléctrico_multipin.png",
    shortDesc: "Conectores circulares multipin para señales de control, instrumentación y comunicaciones.",
    fullDesc: "Conectores circulares multipin para señales de control, instrumentación y comunicaciones industriales. Construcción robusta con sellos herméticos IP67/IP68 para ambientes hostiles y áreas clasificadas.",
    specs: [
      { label: "Tipo", value: "Circular multipin (Amphenol / Militar)" },
      { label: "Pines", value: "4 a 37 contactos" },
      { label: "Protección", value: "IP67 / IP68" },
      { label: "Aplicación", value: "Control, instrumentación, señales" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. HERRAMIENTAS MANUALES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "herr-man-001",
    name: "Juego de Herramientas Manuales Profesional",
    category: "herramientas_man",
    categoryName: "Herramientas Manuales",
    code: "SML-HM-1201",
    image: "imagenesbrochure/07_Herramientas_Manuales/P12_01_Juego_de_herramientas_manuales.png",
    shortDesc: "Juegos completos de llaves combinadas, dados, destornilladores y herramientas de mano.",
    fullDesc: "Juegos profesionales de herramientas manuales en acero Cr-V forjado y cromado. Llaves combinadas, juegos de dados ¼\" ⅜\" y ½\", destornilladores, alicates, pinzas y extractores para mantenimiento industrial.",
    specs: [
      { label: "Material", value: "Acero Cromo Vanadio (Cr-V) forjado" },
      { label: "Contenido", value: "Llaves, dados, destornilladores, alicates" },
      { label: "Medidas", value: "Milimétricas (6-32mm) y pulgadas (¼\"-1¼\")" },
      { label: "Acabado", value: "Cromado espejo anti-corrosión" }
    ]
  },
  {
    id: "herr-man-002",
    name: "Herramientas de Sujeción y Torquímetros",
    category: "herramientas_man",
    categoryName: "Herramientas Manuales",
    code: "SML-HM-1202",
    image: "imagenesbrochure/07_Herramientas_Manuales/P12_02_Herramientas_manuales_y_de_sujeción.png",
    shortDesc: "Torquímetros de clic y digitales, prensas de banco, mordazas y sargentos industriales.",
    fullDesc: "Herramientas de sujeción y apriete controlado: torquímetros de clic y digitales certificados ISO 6789, prensas de banco, sargentos, mordazas y herramientas especializadas para mantenimiento de equipos.",
    specs: [
      { label: "Torquímetros", value: "Clic, Digital, Dial — ⅜\", ½\", ¾\", 1\"" },
      { label: "Rangos torque", value: "10-200, 50-500, 100-1000 Nm" },
      { label: "Precisión", value: "±3% CW (sentido horario)" },
      { label: "Norma", value: "ISO 6789:2017" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. MANGUERAS Y CONECTORES INDUSTRIALES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "mang-001",
    name: "Mangueras y Conectores Industriales",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-1301",
    image: "imagenesbrochure/08_Mangueras_y_Conectores/mangera.png",
    shortDesc: "Mangueras industriales y conectores para aire, agua, vapor, químicos e hidrocarburos.",
    fullDesc: "Soluciones completas de conducción flexible: mangueras para aire comprimido, agua, vapor, químicos e hidrocarburos. Conectores y terminales para ensamble de líneas de conducción segura.",
    specs: [
      { label: "Fluidos", value: "Aire, agua, vapor, químicos, O&G" },
      { label: "Diámetros", value: "¼\" a 6\"" },
      { label: "Material", value: "Caucho NBR, PVC, PTFE, Silicona" },
      { label: "Temperatura", value: "-40°C a +230°C según tipo" }
    ]
  },
  {
    id: "mang-002",
    name: "Mangueras de Succión y Descarga",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-1302",
    image: "imagenesbrochure/08_Mangueras_y_Conectores/P13_02_Mangueras_industriales.png",
    shortDesc: "Mangueras de succión, descarga, vapor, químicos y uso general para la industria.",
    fullDesc: "Línea completa de mangueras industriales: succión y descarga de agua, vapor, químicos, alimentos, sandblasting y mangueras multipropósito. Diferentes materiales y refuerzos según la aplicación.",
    specs: [
      { label: "Tipos", value: "Succión, descarga, vapor, químicos, arena" },
      { label: "Refuerzo", value: "Malla textil, malla de acero, espiral PVC" },
      { label: "Presión", value: "150 a 3,000 PSI según tipo" },
      { label: "Norma", value: "SAE J517, ISO 1307, FDA (alimentos)" }
    ]
  },
  {
    id: "mang-003",
    name: "Mangueras Hidráulicas con Terminales Prensados",
    category: "mangueras",
    categoryName: "Mangueras y Conectores Industriales",
    code: "SML-MG-1303",
    image: "imagenesbrochure/08_Mangueras_y_Conectores/P13_03_Mangueras_hidráulicas_con_terminales.png",
    shortDesc: "Mangueras hidráulicas SAE armadas a medida con terminales prensados JIC, ORB, BSP y ORFS.",
    fullDesc: "Mangueras hidráulicas de alta presión con refuerzo de malla y espiral metálico, armadas a medida con terminales prensados. Servicio de armado en sitio y entrega rápida para paradas de emergencia.",
    specs: [
      { label: "Tipos SAE", value: "100R1AT, 100R2AT, R12, R13, R15" },
      { label: "Diámetros", value: "¼\" (-4) a 2\" (-32)" },
      { label: "Presión", value: "1,000 a 6,000 PSI según tipo" },
      { label: "Terminales", value: "JIC 37°, ORB, BSP, ORFS, Brida SAE" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 9. PINTURAS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pint-001",
    name: "Pinturas Bler",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-1401",
    image: "imagenesbrochure/09_Pinturas/P14_01_Pinturas_Bler.png",
    shortDesc: "Línea de pinturas y recubrimientos marca Bler para uso industrial y decorativo.",
    fullDesc: "Pinturas marca Bler para protección y acabado de superficies metálicas, madera y mampostería. Disponible en esmaltes, anticorrosivos y vinilos en amplia carta de colores.",
    specs: [
      { label: "Marca", value: "Bler" },
      { label: "Tipos", value: "Esmalte, anticorrosivo, vinilo" },
      { label: "Acabado", value: "Brillante, mate, satinado" },
      { label: "Aplicación", value: "Brocha, rodillo, soplete convencional" }
    ]
  },
  {
    id: "pint-002",
    name: "Pinturas Viniltex / Pintuco",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-1402",
    image: "imagenesbrochure/09_Pinturas/P14_02_Pinturas_Viniltex_Pintuco.png",
    shortDesc: "Pinturas Viniltex y Pintuco para acabados interiores, exteriores e industriales.",
    fullDesc: "Línea de pinturas Pintuco y Viniltex para construcción e industria. Vinilos tipo 1 y 2, esmaltes alquídicos, anticorrosivos, bases y acabados para interiores, exteriores y superficies metálicas.",
    specs: [
      { label: "Marca", value: "Pintuco / Viniltex" },
      { label: "Tipos", value: "Vinilo Tipo 1-2, esmalte, anticorrosivo" },
      { label: "Uso", value: "Interior, exterior, industrial" },
      { label: "Rendimiento", value: "8-12 m²/litro por capa" }
    ]
  },
  {
    id: "pint-003",
    name: "Pintura ICO",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-1403",
    image: "imagenesbrochure/09_Pinturas/P14_03_Pintura_ICO.png",
    shortDesc: "Pinturas ICO para acabados de construcción y mantenimiento general.",
    fullDesc: "Línea de pinturas marca ICO para construcción y mantenimiento. Vinilos lavables, esmaltes y productos especializados con amplia carta de colores y excelente cubrimiento en una sola mano.",
    specs: [
      { label: "Marca", value: "ICO (Grupo Pintuco)" },
      { label: "Tipos", value: "Vinilo lavable, esmalte, anticorrosivo" },
      { label: "Colores", value: "Carta completa + tintométrico" },
      { label: "Rendimiento", value: "10-14 m²/litro" }
    ]
  },
  {
    id: "pint-004",
    name: "Pintura Pintuco Industrial",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-1404",
    image: "imagenesbrochure/09_Pinturas/P14_04_Pintura_Pintuco.png",
    shortDesc: "Recubrimientos industriales Pintuco: epóxicos, poliuretanos y anticorrosivos de alto desempeño.",
    fullDesc: "Sistemas de pintura industrial Pintuco para protección de estructuras metálicas, tanques y tuberías. Imprimantes epóxicos de 2 componentes, acabados de poliuretano alifático y anticorrosivos de alto espesor.",
    specs: [
      { label: "Marca", value: "Pintuco Línea Industrial" },
      { label: "Tipos", value: "Epóxico 2K, poliuretano, anticorrosivo" },
      { label: "Espesor", value: "125 a 300 micras por capa" },
      { label: "Uso", value: "Estructuras, tanques, tuberías, pisos" }
    ]
  },
  {
    id: "pint-005",
    name: "Pintura Sayer",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-1405",
    image: "imagenesbrochure/09_Pinturas/P14_05_Pintura_Sayer.png",
    shortDesc: "Pinturas y lacas Sayer para acabados profesionales en madera y superficies especiales.",
    fullDesc: "Línea de pinturas Sayer Lack para acabados en madera, metal y superficies especiales. Lacas catalíticas, selladores, barnices y tintes profesionales para muebles y carpintería industrial.",
    specs: [
      { label: "Marca", value: "Sayer Lack" },
      { label: "Tipos", value: "Laca catalítica, sellador, barniz, tinte" },
      { label: "Aplicación", value: "Madera, MDF, metal, superficies especiales" },
      { label: "Acabado", value: "Alto brillo, mate, semi-mate, satinado" }
    ]
  },
  {
    id: "pint-006",
    name: "Rodillos, Brochas y Accesorios de Pintura",
    category: "pinturas",
    categoryName: "Pinturas",
    code: "SML-PT-1406",
    image: "imagenesbrochure/09_Pinturas/P14_06_Rodillos_y_brochas.png",
    shortDesc: "Rodillos, brochas, bandejas, espátulas y accesorios para aplicación de pinturas.",
    fullDesc: "Herramientas y accesorios para pintura: rodillos de pelo corto y largo en diferentes tamaños, brochas de cerda natural y sintética, bandejas, extensiones telescópicas, espátulas y cintas de enmascarar.",
    specs: [
      { label: "Rodillos", value: "4\", 7\", 9\" — pelo corto, medio y largo" },
      { label: "Brochas", value: "1\", 2\", 3\", 4\" — cerda natural/sintética" },
      { label: "Accesorios", value: "Bandejas, extensiones, cintas, espátulas" },
      { label: "Uso", value: "Aplicación de vinilos, esmaltes, epóxicos" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 10. ELEMENTOS DE PROTECCIÓN PERSONAL – EPP
  // ═══════════════════════════════════════════════════════════════
  {
    id: "epp-001",
    name: "Cascos, Protección Auditiva y Visual",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-1501",
    image: "imagenesbrochure/10_EPP/P15_01_Casco__protección_auditiva_y_accesorios.png",
    shortDesc: "Cascos de seguridad, orejeras de copa y gafas de protección certificadas para trabajo en campo.",
    fullDesc: "Equipos de protección para cabeza, oídos y ojos: cascos dieléctricos tipo I y II con suspensión de 4 y 6 puntos, orejeras de copa NRR 22-30 dB, tapones auditivos y gafas de seguridad antiempañante.",
    specs: [
      { label: "Casco", value: "ANSI Z89.1 Tipo I Clase E (dieléctrico)" },
      { label: "Auditiva", value: "NRR 22-30 dB (orejeras y tapones)" },
      { label: "Visual", value: "ANSI Z87.1+ (alto impacto)" },
      { label: "Accesorios", value: "Barbuquejo, visor, porta-orejeras" }
    ]
  },
  {
    id: "epp-002",
    name: "Respirador 3M",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-1502",
    image: "imagenesbrochure/10_EPP/P15_02_Respirador_3M.png",
    shortDesc: "Respiradores y máscaras 3M para protección contra partículas, gases y vapores orgánicos.",
    fullDesc: "Protección respiratoria marca 3M: respiradores de media cara serie 6000/7500 y cara completa serie 6800, filtros para partículas P100, gases orgánicos OV y multigas. Certificación NIOSH.",
    specs: [
      { label: "Marca", value: "3M" },
      { label: "Series", value: "6000, 6800, 7500, 8210 (N95)" },
      { label: "Filtros", value: "P100 (2091), OV (6001), Multigas (6006)" },
      { label: "Norma", value: "NIOSH 42 CFR 84 / TC-84A" }
    ]
  },
  {
    id: "epp-003",
    name: "Overoles y Trajes de Protección",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-1503",
    image: "imagenesbrochure/10_EPP/P15_03_Overol_de_protección.png",
    shortDesc: "Overoles en drill, jean e ignífugos y trajes Tyvek para protección corporal en campo.",
    fullDesc: "Ropa de protección industrial: overoles enterizos y de 2 piezas en jean industrial, drill y tela ignífuga FR. Trajes Tyvek desechables para protección contra salpicaduras químicas y partículas.",
    specs: [
      { label: "Materiales", value: "Jean 14oz, Drill, FR (Nomex/Proban), Tyvek" },
      { label: "Tallas", value: "S, M, L, XL, XXL" },
      { label: "Tipos", value: "Enterizo, 2 piezas, desechable" },
      { label: "Norma FR", value: "NFPA 2112 / ASTM F1506 (arco eléctrico)" }
    ]
  },
  {
    id: "epp-004",
    name: "Careta de Protección Facial",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-1504",
    image: "imagenesbrochure/10_EPP/P15_04_Careta_de_protección_facial.png",
    shortDesc: "Caretas faciales para soldadura, salpicaduras químicas e impactos de alta velocidad.",
    fullDesc: "Caretas de protección facial completa: caretas para soldadura con filtro autoscurecible DIN 9-13, caretas para salpicaduras químicas con visor de policarbonato y protectores faciales de alto impacto.",
    specs: [
      { label: "Tipos", value: "Soldadura (autoscurecible), salpicaduras, impacto" },
      { label: "Visor", value: "Policarbonato óptico / Autoscurecible DIN 9-13" },
      { label: "Norma", value: "ANSI Z87.1 / EN 166 / EN 175 (soldadura)" },
      { label: "Ajuste", value: "Arnés con trinquete de 4 puntos" }
    ]
  },
  {
    id: "epp-005",
    name: "Calzado de Seguridad Industrial",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-1505",
    image: "imagenesbrochure/10_EPP/P15_05_Calzado_de_seguridad.png",
    shortDesc: "Botas y zapatos de seguridad con puntera de acero o composite, dieléctricos y antideslizantes.",
    fullDesc: "Calzado de seguridad industrial certificado: botas caña alta y media con puntera de acero y composite, suela antideslizante SRC y dieléctrica. Para campo, planta, áreas húmedas y trabajo eléctrico.",
    specs: [
      { label: "Puntera", value: "Acero (200J) / Composite (200J)" },
      { label: "Suela", value: "PU/TPU antideslizante SRC, dieléctrica" },
      { label: "Tallas", value: "35 a 46 (según referencia)" },
      { label: "Norma", value: "ASTM F2413-18 / NTC 2257" }
    ]
  },
  {
    id: "epp-006",
    name: "Guantes de Protección Industrial",
    category: "epp",
    categoryName: "Elementos de Protección Personal – EPP",
    code: "SML-EPP-1506",
    image: "imagenesbrochure/10_EPP/P15_06_Guantes_de_protección.png",
    shortDesc: "Guantes anticorte, de nitrilo, cuero, dieléctricos y de caucho para protección de manos.",
    fullDesc: "Línea completa de guantes de seguridad: anticorte nivel A4-A9 con palma de nitrilo, guantes de cuero tipo soldador, dieléctricos clase 00 a 4 (hasta 36,000V), guantes de caucho para químicos y de nylon recubierto.",
    specs: [
      { label: "Tipos", value: "Anticorte, Dieléctrico, Soldador, Nitrilo, Caucho" },
      { label: "Nivel corte", value: "ANSI A3, A4, A6, A9" },
      { label: "Dieléctrico", value: "Clase 00 (500V) a Clase 4 (36kV)" },
      { label: "Norma", value: "EN 388:2016 / ANSI/ISEA 105 / ASTM D120" }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // 11. LUBRICANTES Y ADHESIVOS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "lub-001",
    name: "Lubricante Penetrante CRC",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-1601",
    image: "imagenesbrochure/11_Lubricantes_y_Adhesivos/P16_01_Lubricante_penetrante_CRC.png",
    shortDesc: "Penetrantes y aflojatodo CRC para mantenimiento de pernería oxidada y mecanismos.",
    fullDesc: "Productos CRC para lubricación y mantenimiento preventivo: penetrantes de alta capilaridad para aflojar pernos oxidados, lubricantes multiusos de larga duración y protectores contra corrosión.",
    specs: [
      { label: "Marca", value: "CRC Industries" },
      { label: "Productos", value: "Penetrante, lubricante multiuso, protector" },
      { label: "Presentación", value: "Aerosol 312g, botella, galón, tambor" },
      { label: "Uso", value: "Aflojado de pernos, lubricación, protección" }
    ]
  },
  {
    id: "lub-002",
    name: "Adhesivos Loctite",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-1602",
    image: "imagenesbrochure/11_Lubricantes_y_Adhesivos/P16_02_Adhesivos_Loctite.png",
    shortDesc: "Trabarroscas, selladores, adhesivos instantáneos y formadores de juntas Loctite.",
    fullDesc: "Línea completa de adhesivos anaeróbicos y selladores marca Loctite (Henkel): trabarroscas resistencia media 243 (azul) y alta 263 (rojo), sellador de roscas 577, formador de juntas 518 y adhesivo instantáneo 495.",
    specs: [
      { label: "Marca", value: "Loctite (Henkel)" },
      { label: "Trabarroscas", value: "243 (media), 263 (alta), 272 (alta temp.)" },
      { label: "Selladores", value: "577 (roscas), 518 (juntas), 5188 (flex.)" },
      { label: "Curado", value: "Anaeróbico (sin aire) / Cianoacrilato" }
    ]
  },
  {
    id: "lub-003",
    name: "Lubricantes WD-40",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-1603",
    image: "imagenesbrochure/11_Lubricantes_y_Adhesivos/P16_03_Lubricantes_WD-40.png",
    shortDesc: "Lubricante multiusos WD-40 y línea Specialist: grasa blanca, aceite de corte, desengrasante.",
    fullDesc: "Productos WD-40 para lubricación, protección y limpieza industrial: lubricante multiusos original, y línea WD-40 Specialist con grasa blanca de litio, aceite de corte, desengrasante rápido y protector anticorrosión de larga duración.",
    specs: [
      { label: "Marca", value: "WD-40" },
      { label: "Líneas", value: "Multiusos Original + Specialist" },
      { label: "Specialist", value: "Grasa blanca, aceite corte, desengrasante" },
      { label: "Presentación", value: "Aerosol 382ml, 311g, galón industrial" }
    ]
  },
  {
    id: "lub-004",
    name: "Aerosoles CRC Especializados",
    category: "lubricantes",
    categoryName: "Lubricantes y Adhesivos",
    code: "SML-LB-1604",
    image: "imagenesbrochure/11_Lubricantes_y_Adhesivos/aerosol crc.jpg",
    shortDesc: "Aerosoles CRC para limpieza de contactos eléctricos, silicona, grasa blanca y dieléctrico.",
    fullDesc: "Aerosoles CRC de uso especializado: CRC QD Contact Cleaner para limpieza de contactos eléctricos y electrónicos, silicona lubricante, grasa blanca, protector dieléctrico y desengrasante industrial de evaporación rápida.",
    specs: [
      { label: "Marca", value: "CRC Industries" },
      { label: "CRC QD", value: "Limpiador de contactos eléctricos" },
      { label: "Especialidad", value: "Silicona, grasa blanca, dieléctrico" },
      { label: "Presentación", value: "Aerosol 300ml / 400ml" }
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
    description: "Rodamientos Timken, acoples, correas, cadenas y poleas."
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
    description: "Llaves Cr-V, dados, torquímetros ISO 6789 y herramientas de sujeción."
  },
  {
    id: "mangueras",
    name: "Mangueras y Conectores",
    icon: "fa-droplet",
    count: PRODUCTS_DATA.filter(p => p.category === "mangueras").length,
    description: "Mangueras hidráulicas SAE, industriales y terminales prensados."
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
    description: "Cascos ANSI, respiradores 3M, calzado, guantes y overoles FR."
  },
  {
    id: "lubricantes",
    name: "Lubricantes y Adhesivos",
    icon: "fa-oil-can",
    count: PRODUCTS_DATA.filter(p => p.category === "lubricantes").length,
    description: "CRC, Loctite (243/263/577), WD-40 y aerosoles especializados."
  }
];

// Exponer globalmente para la aplicación
window.PRODUCTS_DATA = PRODUCTS_DATA;
window.CATEGORIES_DATA = CATEGORIES_DATA;
