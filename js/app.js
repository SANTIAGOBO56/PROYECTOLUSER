// ==========================================================================
// LÓGICA INTERACTIVA Y ESTADO DE LA APLICACIÓN - SM LUSER
// ==========================================================================

// Configuración de la Empresa
const COMPANY_CONFIG = {
  name: "Suministros Industriales LUSER (SM LUSER)",
  whatsappNumber: "573118057692", // WhatsApp Oficial: 3118057692
  email: "ventas@smluser.com",
  phoneDisplay: "+57 311 805 7692"
};

// Estado Global de la Aplicación
const state = {
  activeCategory: "todas",
  searchQuery: "",
  cart: [], // Arreglo de items para cotización: { product, quantity, notes }
  selectedProductModal: null,
  heroCurrentSlide: 0
};

// ==========================================================================
// 1. INICIALIZACIÓN AL CARGAR EL DOM
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryTabs();
  renderProductsGrid();
  setupSearchInput();
  setupHeroSlider();
  setupContactForm();
  setupMobileMenu();
  updateCartUI();
});

// ==========================================================================
// 2. RENDERIZADO DE PESTAÑAS DE CATEGORÍA
// ==========================================================================
function renderCategoryTabs() {
  const container = document.getElementById("categoryTabsContainer");
  if (!container || !window.CATEGORIES_DATA) return;

  container.innerHTML = window.CATEGORIES_DATA.map(cat => `
    <button 
      class="category-tab-btn ${state.activeCategory === cat.id ? 'active' : ''}"
      onclick="setCategory('${cat.id}')"
    >
      <i class="fa-solid ${cat.icon}"></i>
      <span>${cat.name}</span>
      <span class="category-tab-count">${cat.count}</span>
    </button>
  `).join("");
}

function setCategory(categoryId) {
  state.activeCategory = categoryId;
  renderCategoryTabs();
  renderProductsGrid();
}

// ==========================================================================
// 3. RENDERIZADO DEL CATÁLOGO DE PRODUCTOS
// ==========================================================================
function renderProductsGrid() {
  const grid = document.getElementById("productsGrid");
  if (!grid || !window.PRODUCTS_DATA) return;

  // Filtrado por Categoría y Buscador
  const filtered = window.PRODUCTS_DATA.filter(product => {
    const matchesCategory = state.activeCategory === "todas" || product.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      product.name.toLowerCase().includes(q) ||
      product.code.toLowerCase().includes(q) ||
      product.shortDesc.toLowerCase().includes(q) ||
      product.categoryName.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box">
        <i class="fa-solid fa-magnifying-glass-chart"></i>
        <h3>No se encontraron productos</h3>
        <p>Intenta con otro término de búsqueda o selecciona otra categoría de insumos.</p>
        <button class="category-tab-btn active" style="margin-top: 1.5rem;" onclick="resetSearch()">
          <i class="fa-solid fa-rotate-left"></i> Ver Todos los Productos
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    // Determinar clase de stock
    let stockClass = "stock-in-stock";
    if (product.stockType === "low-stock") stockClass = "stock-low-stock";
    if (product.stockType === "on-demand") stockClass = "stock-on-demand";

    return `
      <div class="product-card">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/hero.png';">
          <span class="product-stock-badge ${stockClass}">
            <i class="fa-solid fa-box-open"></i> ${product.stock}
          </span>
          <span class="product-code-tag">${product.code}</span>
        </div>
        <div class="product-content">
          <span class="product-category-name">${product.categoryName}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-short-desc">${product.shortDesc}</p>
          
          <div class="product-card-actions">
            <button class="btn-view-details" onclick="openProductModal('${product.id}')">
              <i class="fa-solid fa-file-lines"></i> Ficha Técnica
            </button>
            <button class="btn-add-quote" onclick="addToCart('${product.id}')">
              <i class="fa-solid fa-plus"></i> Cotizar
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Configuración del Buscador en tiempo real
function setupSearchInput() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClearBtn");

  if (!input) return;

  input.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (clearBtn) {
      clearBtn.style.display = state.searchQuery ? "block" : "none";
    }
    renderProductsGrid();
  });
}

function resetSearch() {
  state.searchQuery = "";
  state.activeCategory = "todas";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  renderCategoryTabs();
  renderProductsGrid();
}

// ==========================================================================
// 4. LÓGICA DEL COTIZADOR (CARRITO) Y WHATSAPP 3118057692
// ==========================================================================
function addToCart(productId) {
  const product = window.PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ product, quantity: 1 });
  }

  updateCartUI();
  showToast(`¡"${product.name}" agregado al Cotizador!`);
}

function updateQuantity(productId, delta) {
  const item = state.cart.find(i => i.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.product.id !== productId);
  updateCartUI();
  showToast("Producto removido de la cotización");
}

function updateCartUI() {
  // Actualizar badges en Header y Floating
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll(".cotizador-counter-badge");
  badges.forEach(b => b.textContent = totalCount);

  // Renderizar contenido del Drawer
  const container = document.getElementById("cartItemsList");
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="drawer-empty-state">
        <i class="fa-solid fa-cart-flatbed"></i>
        <h3>Tu cotización está vacía</h3>
        <p>Navega por el catálogo y agrega los elementos de ferretería, EPP o repuestos que requiere tu empresa.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.product.name}</h4>
        <span class="cart-item-code">CÓD: ${item.product.code}</span>
        <div class="cart-item-qty-controls">
          <button class="btn-qty" onclick="updateQuantity('${item.product.id}', -1)">-</button>
          <span class="cart-item-qty-val">${item.quantity}</span>
          <button class="btn-qty" onclick="updateQuantity('${item.product.id}', 1)">+</button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="removeFromCart('${item.product.id}')" title="Eliminar">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join("");
}

// Generador de Cotización por WhatsApp (+57 311 805 7692)
function sendWhatsAppQuote() {
  if (state.cart.length === 0) {
    showToast("Agrega al menos un producto a la cotización.");
    return;
  }

  const notesInput = document.getElementById("quoteNotesInput");
  const userNotes = notesInput ? notesInput.value.trim() : "";

  let message = `*SOLICITUD DE COTIZACIÓN - SM LUSER*\n`;
  message += `Hola *Suministros Industriales LUSER*, requiero cotizar la siguiente lista de productos:\n\n`;

  state.cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.product.name}*\n`;
    message += `   • Código: ${item.product.code}\n`;
    message += `   • Categoría: ${item.product.categoryName}\n`;
    message += `   • Cantidad: ${item.quantity} Unidad(es)\n\n`;
  });

  if (userNotes) {
    message += `*Observaciones / Requerimientos Adicionales:*\n"${userNotes}"\n\n`;
  }

  message += `Agradezco su pronta atención y envío de ficha técnica.`;

  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodedMessage}`;

  window.open(waUrl, "_blank");
}

// Control del Drawer del Cotizador
function toggleCotizadorDrawer(open = true) {
  const overlay = document.getElementById("drawerOverlay");
  const panel = document.getElementById("drawerPanel");
  if (overlay && panel) {
    if (open) {
      overlay.classList.add("active");
      panel.classList.add("active");
    } else {
      overlay.classList.remove("active");
      panel.classList.remove("active");
    }
  }
}

// ==========================================================================
// 5. MODAL DE FICHA TÉCNICA
// ==========================================================================
function openProductModal(productId) {
  const product = window.PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  state.selectedProductModal = product;
  const modal = document.getElementById("productModalBackdrop");
  const body = document.getElementById("productModalBody");

  if (!modal || !body) return;

  const specsRows = product.specs.map(spec => `
    <tr>
      <th>${spec.label}</th>
      <td>${spec.value}</td>
    </tr>
  `).join("");

  body.innerHTML = `
    <div class="modal-product-grid">
      <div>
        <img src="${product.image}" alt="${product.name}" class="modal-product-img">
        <button class="btn-send-whatsapp-quote" style="margin-top: 1rem;" onclick="addToCart('${product.id}'); toggleCotizadorDrawer(true); closeProductModal();">
          <i class="fa-solid fa-plus-circle"></i> Agregar al Cotizador
        </button>
      </div>
      <div>
        <span class="product-category-name">${product.categoryName}</span>
        <h2 class="section-title" style="font-size: 1.8rem; margin: 0.5rem 0;">${product.name}</h2>
        <p style="color: var(--color-accent-cyan); font-family: monospace; font-weight: 700; margin-bottom: 1rem;">Código: ${product.code}</p>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">${product.fullDesc}</p>
        
        <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--text-main);">Ficha Técnica y Especificaciones:</h4>
        <table class="modal-specs-table">
          <tbody>
            ${specsRows}
          </tbody>
        </table>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeProductModal() {
  const modal = document.getElementById("productModalBackdrop");
  if (modal) modal.classList.remove("active");
}



// ==========================================================================
// 6. HERO SLIDER E INTERACCIONES
// ==========================================================================
function setupHeroSlider() {
  const heroSlides = [
    {
      title: "Soluciones Industriales <span class='text-highlight'>de Alta Precision</span>",
      tag: "Ferretería & Instrumentación SM LUSER",
      desc: "Distribución directa de herramientas pesadas, manómetros de acero inox, válvulas y medición para la industria colombiana.",
      image: "images/hero.png"
    },
    {
      title: "Equipos de Protección <span class='text-amber'>EPP Certificados</span>",
      tag: "Seguridad Industrial Garantizada",
      desc: "Protección integral contra riesgos dieléctricos y mecánicos. Cascos, guantes anticorte, botas y arneses con normatividad ANSI.",
      image: "images/epp.png"
    },
    {
      title: "Repuestos y Transmisión <span class='text-highlight'>para Maquinarias</span>",
      tag: "Rodamientos, Filtros y Sellos",
      desc: "Repuestos de alta especificación para evitar paradas no programadas en tu planta industrial.",
      image: "images/repuestos.png"
    }
  ];

  let current = 0;
  const imageElement = document.getElementById("heroFeaturedImg");
  const titleElement = document.getElementById("heroTitle");
  const descElement = document.getElementById("heroDesc");
  const tagElement = document.getElementById("heroTagText");
  const heroCard = document.querySelector(".hero-card-featured");

  if (!imageElement || !titleElement) return;

  // Movimiento Parallax 3D interactivo con el mouse estilo Termovalsa
  if (heroCard) {
    heroCard.addEventListener("mousemove", (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (-y / rect.height) * 12;
      const rotateY = (x / rect.width) * 12;

      heroCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroCard.addEventListener("mouseleave", () => {
      heroCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  }

  // Cambio de Diapositiva cada 6 Segundos con Transición Suave
  setInterval(() => {
    current = (current + 1) % heroSlides.length;
    const slide = heroSlides[current];

    titleElement.innerHTML = slide.title;
    if (descElement) descElement.textContent = slide.desc;
    if (tagElement) tagElement.textContent = slide.tag;
    if (imageElement) {
      imageElement.style.opacity = "0.3";
      setTimeout(() => {
        imageElement.src = slide.image;
        imageElement.style.opacity = "1";
      }, 350);
    }
  }, 6000);
}

// ==========================================================================
// 7. FORMULARIO DE CONTACTO Y TOASTS
// ==========================================================================
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("¡Mensaje enviado con éxito! Un asesor de SM LUSER se comunicará pronto.");
    form.reset();
  });
}

function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 5. MANEJO DEL FORMULARIO DE CONTACTO (EMAIL)
// ==========================================================================
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("contactName").value || "";
    const email = document.getElementById("contactEmail").value || "";
    const phone = document.getElementById("contactPhone").value || "";
    const message = document.getElementById("contactMessage").value || "";
    
    const subject = encodeURIComponent(`Solicitud Web - ${name}`);
    const body = encodeURIComponent(
      `Hola SM LUSER,\n\nSe ha recibido un nuevo mensaje desde el formulario web:\n\n` +
      `👤 Nombre/Empresa: ${name}\n` +
      `📧 Correo: ${email}\n` +
      `📱 Teléfono: ${phone}\n\n` +
      `💬 Mensaje:\n${message}\n\n` +
      `---\n` +
      `Enviado desde Suministros Industriales LUSER`
    );
    
    // Correo destino
    const targetEmail = COMPANY_CONFIG.email || "ventas@smluser.com";
    
    // Abre el cliente de correo por defecto (Gmail, Outlook, App de Correo)
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    
    showToast("Abriendo aplicación de correo...");
    
    // Opcional: limpiar formulario después de enviar
    form.reset();
  });
}

// ==========================================================================
// 8. MENÚ MÓVIL (HAMBURGUESA)
// ==========================================================================
function setupMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Cambiar icono
    const icon = toggleBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Cerrar el menú si hacen clic en un enlace
  const links = navMenu.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });
}

// Exponer funciones necesarias globalmente para llamadas desde el HTML
window.setCategory = setCategory;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.sendWhatsAppQuote = sendWhatsAppQuote;
window.toggleCotizadorDrawer = toggleCotizadorDrawer;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;

window.resetSearch = resetSearch;

