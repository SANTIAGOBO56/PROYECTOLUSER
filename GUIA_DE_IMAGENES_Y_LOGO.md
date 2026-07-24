# Guía de Personalización: Logotipo e Imágenes de SM LUSER (Suministros Industriales LUSER)

Esta guía explica detalladamente dónde colocar el **Logotipo de SM LUSER** y cómo reemplazar las imágenes del catálogo por las fotos extraídas de **Pexels** o de su brochure en PDF.

---

## 📌 1. Ubicación del Logotipo de la Empresa

El sistema web busca automáticamente el logotipo en la siguiente ruta dentro de tu proyecto:

```
c:\Users\USER\Videos\PROYECTOLUSER\images\logo.png
```

### Pasos para colocar tu Logotipo:
1. Copia tu archivo de logotipo en formato `.png` o `.svg` (idealmente con fondo transparente).
2. Renómbralo exactamente como `logo.png`.
3. Pégalo en la carpeta `images/` de tu proyecto `PROYECTOLUSER`.
4. Si aún no has colocado el archivo, la página web mostrará automáticamente una insignia elegante con las iniciales **SM LUSER** para que la web nunca se rompa.

---

## 📸 2. Ubicación de Imágenes para las Categorías (Pexels / Brochure)

Hemos configurado imágenes demostrativas industriales de alta resolución. Para cambiarlas por imágenes de Pexels o de tu brochure, simplemente reemplaza los archivos en la carpeta `images/`:

| Línea de Producto | Archivo a Reemplazar | Recomendación de Pexels / Fotos |
| :--- | :--- | :--- |
| **Hero / Banner Principal** | `images/hero.png` | Foto de planta industrial, fábrica o almacén pesado |
| **Ferretería Industrial** | `images/ferreteria.png` | Herramientas de impacto, llaves, discos de corte, abrasivos |
| **Instrumentación y Medición** | `images/instrumentacion.png` | Manómetros de glicerina, termómetros, calibradores vernier |
| **EPP (Protección Personal)** | `images/epp.png` | Cascos de seguridad, guantes de nitrilo, botas, arneses |
| **Repuestos para Maquinaria** | `images/repuestos.png` | Rodamientos SKF/FAG, filtros hidráulicos, correas |
| **Material Eléctrico Industrial** | `images/electrico.png` | Contactores trifásicos, sensores inductivos, cables uso rudo |

---

## 💬 3. WhatsApp Directo de Cotización

La página web está configurada con el número oficial de la empresa:
- **WhatsApp Oficial**: `3118057692` (Formato Internacional: `+57 311 805 7692`)

Cada vez que un cliente agregue productos al **Cotizador** y haga clic en **"Enviar Cotización a WhatsApp"**, la web generará automáticamente un mensaje con la lista limpia de ítems, códigos de parte y cantidades para atender la venta de inmediato.

---

## 🚀 4. ¿Cómo Visualizar la Página Web?

Puedes abrir la página web de 2 formas muy sencillas:

1. **Doble Clic Directo**: Ve a la carpeta `c:\Users\USER\Videos\PROYECTOLUSER` y haz doble clic sobre el archivo `index.html`. Se abrirá de inmediato en tu navegador (Chrome, Edge, Firefox, Brave) con todas sus animaciones y funciones.
2. **Servidor Local**: Si usas VS Code o cualquier servidor local, puedes servir la carpeta `PROYECTOLUSER`.
