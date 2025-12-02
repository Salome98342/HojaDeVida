# 🎨 Guía de Diseño - Hoja de Vida

## Estética General

Este proyecto utiliza un diseño moderno basado en **Glassmorphism** y **Neumorphism** con una paleta de colores suaves en tonos morado/azul.

---

## 🎨 Paleta de Colores

### Colores Principales

```css
/* Fondos */
--color-bg: #ECFCF3           /* Fondo claro verdoso */
--color-bg-secondary: #F5F7FA  /* Fondo secundario */

/* Textos */
--color-text: #1B1833          /* Texto principal oscuro */
--color-text-secondary: #7B81E5 /* Texto secundario morado */

/* Acentos */
--color-accent: #6892E5        /* Azul principal */
--color-purple: #7B81E5        /* Morado */
--color-blue: #6892E5          /* Azul */
--color-pink: #FA8E9E          /* Rosa/coral */
```

### Gradientes

```css
/* Gradiente principal - Azul a morado */
--gradient-primary: linear-gradient(135deg, #6B92E5 0%, #7B81E5 50%, #9B6FE8 100%);

/* Gradiente secundario - Rosa/coral */
--gradient-secondary: linear-gradient(135deg, #F8BAB0 0%, #FA8E9E 100%);

/* Gradiente acento - Azul suave */
--gradient-accent: linear-gradient(135deg, #6892E5 0%, #7F92E5 100%);

/* Efecto glow/resplandor */
--gradient-glow: radial-gradient(circle at 50% 50%, rgba(107, 146, 229, 0.15), transparent 70%);
```

### Referencia Visual

```
Azul Principal:  ████ #6B92E5 / #6892E5
Morado:          ████ #7B81E5 / #9B6FE8  
Rosa/Coral:      ████ #F8BAB0 / #FA8E9E
Fondo Claro:     ████ #ECFCF3 / #F5F7FA
Texto Oscuro:    ████ #1B1833
```

---

## 💎 Efectos Glassmorphism

### Características Principales

1. **Fondo translúcido**: `rgba(255, 255, 255, 0.5)` - 50% transparencia
2. **Blur (desenfoque)**: `backdrop-filter: blur(20px)`
3. **Bordes sutiles**: `1px solid rgba(255, 255, 255, 0.6)`
4. **Sombras suaves**: Múltiples capas de box-shadow

### Ejemplo de Tarjeta Glassmorphism

```css
.glass-card {
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  box-shadow: 
    5px 5px 20px rgba(123, 129, 229, 0.1),
    -5px -5px 20px rgba(255, 255, 255, 0.8),
    inset 2px 2px 8px rgba(255, 255, 255, 0.5);
}
```

---

## 🔘 Efectos Neumorphism

### Características Principales

1. **Sombras dobles**: Una luz y una oscura
2. **Sombras internas**: Para profundidad
3. **Colores sutiles**: Sin contrastes fuertes
4. **Bordes suaves**: Border-radius generoso

### Ejemplo de Botón Neumorphic

```css
.neuro-button {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  box-shadow: 
    3px 3px 10px rgba(123, 129, 229, 0.15),
    -3px -3px 10px rgba(255, 255, 255, 0.8),
    inset 1px 1px 3px rgba(255, 255, 255, 0.5);
}

.neuro-button:hover {
  box-shadow: 
    6px 6px 20px rgba(123, 129, 229, 0.2),
    -6px -6px 20px rgba(255, 255, 255, 0.9);
}
```

---

## ✨ Animaciones

### Transiciones Suaves

```css
/* Cubic bezier para movimientos naturales */
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Animación de Float

```css
@keyframes backgroundFloat {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}
```

### Animación de Pulse

```css
@keyframes profilePulse {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateX(-50%) scale(1.2);
    opacity: 0.4;
  }
}
```

### Efecto Shimmer (Brillo deslizante)

```css
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.shimmer-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}
```

---

## 🎯 Componentes Específicos

### Tarjetas de Habilidades

```css
.skill-card {
  /* Base glassmorphism */
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  
  /* Sombras neumorphic */
  box-shadow: 
    5px 5px 20px rgba(123, 129, 229, 0.1),
    -5px -5px 20px rgba(255, 255, 255, 0.8),
    inset 2px 2px 8px rgba(255, 255, 255, 0.5);
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    8px 8px 32px rgba(123, 129, 229, 0.2),
    -8px -8px 32px rgba(255, 255, 255, 0.9),
    0 20px 40px rgba(107, 146, 229, 0.15);
}
```

### Barras de Progreso

```css
.progress-bar {
  background: rgba(123, 129, 229, 0.1);
  border-radius: 12px;
  box-shadow: 
    inset 2px 2px 6px rgba(123, 129, 229, 0.15),
    inset -2px -2px 6px rgba(255, 255, 255, 0.7);
}

.progress-fill {
  background: var(--gradient-primary);
  border-radius: 12px;
  box-shadow: 
    0 2px 8px rgba(107, 146, 229, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
}
```

### Botones

```css
.button {
  background: var(--gradient-primary);
  border-radius: 12px;
  color: white;
  box-shadow: 
    0 8px 24px rgba(107, 146, 229, 0.25),
    inset 0 -2px 8px rgba(0, 0, 0, 0.1),
    inset 0 2px 8px rgba(255, 255, 255, 0.2);
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 12px 32px rgba(107, 146, 229, 0.35),
    inset 0 -2px 8px rgba(0, 0, 0, 0.1),
    inset 0 2px 8px rgba(255, 255, 255, 0.3);
}
```

### Tags/Etiquetas

```css
.tag {
  background: rgba(107, 146, 229, 0.15);
  color: #7B81E5;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(107, 146, 229, 0.25);
  box-shadow: 
    2px 2px 6px rgba(123, 129, 229, 0.1),
    -1px -1px 4px rgba(255, 255, 255, 0.6);
}
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 480px) {
  /* Estilos para móviles */
}

/* Tablet */
@media (max-width: 768px) {
  /* Estilos para tablets */
}

/* Desktop */
@media (min-width: 769px) {
  /* Estilos para desktop */
}
```

### Ajustes Responsive

- **Padding**: Reducir de 2rem a 1.5rem en móvil
- **Font-size**: Reducir títulos en 20-30%
- **Grid**: De 3 columnas a 1 columna
- **Spacing**: Reducir gaps de 2rem a 1rem

---

## 🎭 Estados de Interacción

### Hover (Desktop)

```css
.interactive:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: [sombras más pronunciadas];
  border-color: rgba(107, 146, 229, 0.5);
}
```

### Active (Click)

```css
.interactive:active {
  transform: translateY(0) scale(0.98);
  box-shadow: [sombras reducidas];
}
```

### Focus (Accesibilidad)

```css
.interactive:focus {
  outline: none;
  box-shadow: 
    [sombras normales],
    0 0 0 3px rgba(104, 146, 229, 0.3);
}
```

---

## 🌟 Efectos Especiales

### Efecto Glow al Hover

```css
.glow-effect::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(107, 146, 229, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.glow-effect:hover::before {
  opacity: 1;
}
```

### Fondo Animado

```css
body::before {
  content: '';
  position: fixed;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(107, 146, 229, 0.08), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(123, 129, 229, 0.08), transparent 50%);
  animation: backgroundFloat 20s ease-in-out infinite;
}
```

---

## 📐 Espaciado y Tipografía

### Espaciado

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
```

### Tipografía

```css
/* Fuente */
font-family: 'SF UI Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Títulos */
h1: 3.5rem (56px) - Bold (700)
h2: 2rem (32px) - Bold (700)
h3: 1.5rem (24px) - SemiBold (600)
h4: 1.2rem (19px) - Medium (500)

/* Cuerpo */
p: 1.15rem (18px) - Regular (400)
small: 0.85rem (14px) - Regular (400)
```

### Line Height

```css
--line-height-tight: 1.2;   /* Títulos */
--line-height-normal: 1.6;  /* Cuerpo */
--line-height-loose: 1.8;   /* Párrafos largos */
```

---

## 🎨 Border Radius

```css
--radius-sm: 8px;    /* Inputs pequeños */
--radius-md: 12px;   /* Botones, tags */
--radius-lg: 16px;   /* Tarjetas pequeñas */
--radius-xl: 20px;   /* Tarjetas principales */
--radius-2xl: 24px;  /* Contenedores grandes */
--radius-full: 50%;  /* Círculos */
```

---

## 🔍 Accesibilidad

### Contraste

- Texto principal sobre fondo claro: **AAA** (ratio 12:1)
- Texto secundario sobre fondo claro: **AA** (ratio 7:1)
- Botones: Alto contraste con fondo

### Focus Visible

```css
*:focus-visible {
  outline: 3px solid rgba(107, 146, 229, 0.5);
  outline-offset: 2px;
}
```

### Tamaños Mínimos

- Botones: mínimo 44x44px (táctil)
- Texto: mínimo 16px (legibilidad)
- Áreas clicables: mínimo 48x48px

---

## 🎬 Performance

### Optimizaciones

1. **will-change**: Solo en elementos animados
2. **transform**: Usar en lugar de top/left
3. **opacity**: Usar en lugar de visibility
4. **backdrop-filter**: Usar con moderación

```css
.optimized-animation {
  will-change: transform, opacity;
  transform: translateZ(0); /* GPU acceleration */
}
```

---

## 📚 Recursos de Inspiración

- **Glassmorphism**: [glassmorphism.com](https://glassmorphism.com)
- **Neumorphism**: [neumorphism.io](https://neumorphism.io)
- **Gradientes**: [uigradients.com](https://uigradients.com)
- **Colores**: [coolors.co](https://coolors.co)

---

## 🎨 Herramientas de Diseño

### Generadores

- **Box Shadow**: [shadows.brumm.af](https://shadows.brumm.af)
- **Gradients**: [cssgradient.io](https://cssgradient.io)
- **Blur**: [css-generator.com/blur](https://css-generators.net/blur/)

### Testing

- **Contrast Checker**: [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)
- **Responsiveness**: Chrome DevTools
- **Performance**: Lighthouse

---

## 🚀 Mejoras Futuras

- [ ] Dark mode toggle
- [ ] Temas personalizables
- [ ] Más variaciones de color
- [ ] Animaciones más complejas
- [ ] Micro-interacciones

---

**Creado para:** Hoja de Vida - Salomé Rodríguez Moscoso  
**Última actualización:** Diciembre 2025
