const fs = require('fs');

const categoriesList = ['bombas', 'fluidos', 'transmision', 'herramientas_ind', 'electrico', 'herramientas_man', 'mangueras', 'pinturas', 'epp', 'lubricantes'];

const CATEGORIES_DATA = [
  { id: "todas", name: "Todas las Líneas", icon: "fa-layer-group", description: "Explora la totalidad de suministros y soluciones industriales en SM LUSER." },
  { id: "instrumentacion", name: "Instrumentación", icon: "fa-gauge-high", description: "Equipos y partes de instrumentación, medición y control de procesos." },
  { id: "bombas", name: "Bombas y Consumibles", icon: "fa-water", description: "Bombas centrífugas, neumáticas, sellos mecánicos y repuestos." },
  { id: "fluidos", name: "Control de Fluidos", icon: "fa-faucet-drip", description: "Válvulas, bridas, racores, empaques, acoples y juntas RTJ." },
  { id: "transmision", name: "Transmisión y Potencia", icon: "fa-gears", description: "Rodamientos Timken, acoples, correas, cadenas y poleas." },
  { id: "herramientas_ind", name: "Herramientas Industriales", icon: "fa-screwdriver-wrench", description: "Herramientas hidráulicas Enerpac, eléctricas DeWalt y Truper." },
  { id: "electrico", name: "Productos Eléctricos", icon: "fa-bolt", description: "Interruptores, conectores, discos y accesorios eléctricos." },
  { id: "herramientas_man", name: "Herramientas Manuales", icon: "fa-wrench", description: "Llaves Cr-V, dados, torquímetros ISO 6789 y herramientas de sujeción." },
  { id: "mangueras", name: "Mangueras y Conectores", icon: "fa-droplet", description: "Mangueras hidráulicas SAE, industriales y terminales prensados." },
  { id: "pinturas", name: "Pinturas", icon: "fa-paint-roller", description: "Pintuco, Viniltex, ICO, Sayer, Bler y accesorios de pintura." },
  { id: "epp", name: "Protección Personal (EPP)", icon: "fa-user-shield", description: "Cascos ANSI, respiradores 3M, calzado, guantes y overoles FR." },
  { id: "lubricantes", name: "Lubricantes y Adhesivos", icon: "fa-oil-can", description: "CRC, Loctite (243/263/577), WD-40 y aerosoles especializados." }
];

for (const catId of categoriesList) {
  const file = catId + '.html';
  if (!fs.existsSync(file)) continue;
  
  let content = fs.readFileSync(file, 'utf-8');
  const cat = CATEGORIES_DATA.find(c => c.id === catId);
  
  if (!cat) {
    console.log("Could not find category:", catId);
    continue;
  }

  // Replace HERO BANNER safely using split
  const newHero = `<!-- BROCHURE HERO BANNER - ${cat.name.toUpperCase()} -->
  <section class="brochure-hero" style="padding-top: 8rem;">
    <div class="container">
      <div class="brochure-hero-content">
        <span class="brochure-hero-badge">
          <i class="fa-solid ${cat.icon}"></i> ${cat.name}
        </span>
        <h1 class="brochure-hero-title">
          ${cat.name.includes(' y ') ? cat.name.split(' y ')[0] + ' y<br><span>' + cat.name.split(' y ')[1] + '</span>' : '<span>' + cat.name + '</span>'}<br>Suministros Industriales
        </h1>
        <p class="brochure-hero-subtitle">
          ${cat.description}
        </p>
        <div class="brochure-hero-stats">
          <div class="brochure-stat">
            <div class="brochure-stat-number" id="statProducts">10+</div>
            <div class="brochure-stat-label">Productos</div>
          </div>
          <div class="brochure-stat">
            <div class="brochure-stat-number">24h</div>
            <div class="brochure-stat-label">Tiempo de Respuesta</div>
          </div>
          <div class="brochure-stat">
            <div class="brochure-stat-number">100%</div>
            <div class="brochure-stat-label">Cobertura Nacional</div>
          </div>
        </div>
      </div>
    </div>
  </section>\n\n  `;

  if (content.includes('<!-- BROCHURE HERO BANNER -->') && content.includes('<!-- CATÁLOGO DE PRODUCTOS -->')) {
    content = content.split('<!-- BROCHURE HERO BANNER -->')[0] + newHero + '<!-- CATÁLOGO DE PRODUCTOS -->' + content.split('<!-- CATÁLOGO DE PRODUCTOS -->')[1];
  } else if (content.includes('<!-- BROCHURE HERO BANNER -')) {
      // already updated? Do nothing.
  }

  fs.writeFileSync(file, content, 'utf-8');
  console.log(`Updated hero in ${file}`);
}
