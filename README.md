# Jason Martin — Portfolio Website

Sitio web de portafolio personal construido con **HTML5, CSS3 y JavaScript Vanilla**.
Sin frameworks, sin dependencias. Listo para subir a GitHub Pages.

---

## 📁 Estructura del proyecto

```
portfolio/
│
├── index.html              ← Estructura HTML (contenido y semántica)
│
├── css/
│   ├── reset.css           ← Normalización cross-browser
│   ├── variables.css       ← Tokens de diseño (colores, fuentes, espaciado)
│   ├── base.css            ← Estilos globales, botones, helpers
│   ├── nav.css             ← Barra de navegación fija
│   ├── hero.css            ← Sección hero / portada
│   ├── about.css           ← Sección "About"
│   ├── resume.css          ← Sección "Resume" (skills, timeline, hobbies)
│   ├── portfolio.css       ← Sección "Portfolio" (grid de proyectos)
│   ├── footer.css          ← Pie de página
│   ├── animations.css      ← Keyframes y clases .reveal
│   └── responsive.css      ← Media queries (tablet y mobile)
│
└── js/
    ├── scroll-reveal.js    ← Anima elementos al hacer scroll (IntersectionObserver)
    └── nav-active.js       ← Resalta el link activo en la nav según la sección visible
```

---

## 🚀 Subir a GitHub Pages

### 1. Crear el repositorio
- Ve a https://github.com/new
- Nómbralo: `tu-usuario.github.io`  
- Márcalo como **Public** → **Create repository**

### 2. Subir los archivos

**Opción A — Desde el navegador:**
1. Entra al repositorio
2. Haz clic en **"uploading an existing file"**
3. Sube **toda la carpeta** (o los archivos con su estructura de carpetas)
4. **Commit changes**

**Opción B — Con Git:**
```bash
git clone https://github.com/tu-usuario/tu-usuario.github.io
cd tu-usuario.github.io

# Copia aquí todos los archivos del proyecto manteniendo la estructura
cp -r portfolio/* .

git add .
git commit -m "Add portfolio website"
git push origin main
```

### 3. Activar GitHub Pages
1. Settings → Pages
2. Source: **Deploy from a branch** → `main` → `/ (root)`
3. Save

### ✅ Tu sitio estará disponible en:
**https://tu-usuario.github.io**

---

## 🛠 Tecnologías usadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica del contenido |
| **CSS3** | Estilos, grid layout, variables, animaciones |
| **CSS Custom Properties** | Tokens de diseño reutilizables |
| **CSS Grid / Flexbox** | Layout responsive |
| **CSS Keyframes** | Animaciones (fadeUp, barGrow, scrollPulse) |
| **JavaScript ES6+** | Interactividad (scroll reveal, nav activa) |
| **IntersectionObserver API** | Detección eficiente de elementos en viewport |
| **Google Fonts** | Tipografías: Bebas Neue, Barlow, Share Tech Mono |

---

## ✏️ Personalización

- **Nombre y datos**: editar directamente en `index.html`
- **Colores**: modificar las variables en `css/variables.css`
- **Fuentes**: cambiar el `@import` en `index.html` y actualizar `--font-*` en variables
- **Imágenes del portfolio**: reemplazar las URLs de Unsplash en `index.html` con tus propios trabajos
- **Foto de perfil**: cambiar el `src` de la imagen en la sección `#about`
