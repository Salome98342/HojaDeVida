# Estructura de Carpetas para Arte

Esta carpeta contiene tu portafolio de arte organizado por categorías.

## 📁 Estructura

```
frontend/public/images/art/
├── character-sheets/    # Character sheets y diseños de personajes
├── fanart/             # Fan art de series, anime, videojuegos, etc.
├── portraits/          # Retratos digitales
├── sketches/           # Bocetos y estudios
└── digital/            # Arte digital general
```

## 🎨 Cómo Agregar tus Imágenes

1. **Guarda tus imágenes** en la carpeta correspondiente según el tipo:
   - Character sheets → `character-sheets/`
   - Fan art → `fanart/`
   - Retratos → `portraits/`
   - Bocetos → `sketches/`
   - Arte digital → `digital/`

2. **Formatos recomendados**: JPG, PNG, WEBP

3. **Resolución recomendada**: 
   - Mínimo: 800x800px
   - Óptimo: 1200x1200px o mayor
   - Mantén buena calidad pero optimiza el tamaño de archivo

4. **Nombres de archivo**: Usa nombres descriptivos sin espacios
   - ✅ Bien: `character-design-1.jpg`, `fanart-naruto.png`
   - ❌ Evitar: `IMG_1234.jpg`, `mi imagen.png`

## 📝 Actualizar el Código

Después de agregar tus imágenes, actualiza el array `artworks` en:
`frontend/src/components/ArtGallery.jsx`

Ejemplo:
```javascript
{ 
  id: 1, 
  title: 'Nombre de tu obra', 
  category: 'character-sheets', 
  image: '/images/art/character-sheets/tu-imagen.jpg', 
  description: 'Descripción de tu obra' 
}
```

## 🖼️ Para el Carrusel

También debes actualizar las imágenes del carrusel en:
`frontend/src/components/ArtPortfolio.jsx`

Las imágenes del carrusel son tus piezas destacadas que aparecen en la primera sección de arte.

---

**Nota**: Las rutas en el código usan `/images/art/...` porque la carpeta `public/` es la raíz cuando la aplicación está corriendo.
