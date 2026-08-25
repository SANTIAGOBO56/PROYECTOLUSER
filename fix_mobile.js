const fs = require('fs');

const htmlFiles = [
  'index.html',
  'catalogo.html',
  'contacto.html',
  'instrumentacion.html',
  'bombas.html',
  'fluidos.html',
  'transmision.html',
  'herramientas_ind.html',
  'electrico.html',
  'herramientas_man.html',
  'mangueras.html',
  'pinturas.html',
  'epp.html',
  'lubricantes.html'
];

const generalLink = `<a href="catalogo.html" style="font-weight: 700; color: #7c3aed; border-bottom: 1px solid #e2e8f0; margin-bottom: 4px; padding-bottom: 8px;"><i class="fa-solid fa-layer-group"></i> Ver Brochure General</a>`;

for (const file of htmlFiles) {
  if (!fs.existsSync(file)) continue;

  let content = fs.readFileSync(file, 'utf-8');

  // 1. Fix mobile grid 3 columns to 2 columns
  content = content.replace(/grid-template-columns:\s*repeat\(3,\s*1fr\);/g, 'grid-template-columns: repeat(2, 1fr); gap: 0.75rem;');

  // 2. Add Ver Brochure General link to nav dropdown if not present
  if (content.includes('<div class="nav-dropdown-content">') && !content.includes('Ver Brochure General')) {
    content = content.replace(
      '<div class="nav-dropdown-content">',
      `<div class="nav-dropdown-content">\n              ${generalLink}`
    );
  }

  fs.writeFileSync(file, content, 'utf-8');
  console.log(`Updated ${file}`);
}
