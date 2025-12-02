# 🎯 Resumen del Proyecto - Hoja de Vida

## 📊 Arquitectura Final

### Datos Hardcodeados (Frontend)
```
frontend/src/components/
├── Profile.jsx      ✅ Información personal de Salomé
├── Skills.jsx       ✅ Habilidades organizadas por categorías  
├── Projects.jsx     ✅ Proyectos académicos y personales
└── Contact.jsx      🔌 Conectado al backend
```

### Base de Datos (Supabase)
```
Tabla única: messages
- id (UUID)
- name (VARCHAR)
- email (VARCHAR)
- subject (VARCHAR)
- message (TEXT)
- created_at (TIMESTAMP)
```

### Backend (Node.js + Express)
```
Endpoints activos:
- POST /api/contact     → Enviar mensaje
- GET  /api/contact     → Ver mensajes (opcional)
- GET  /api/health      → Health check
```

---

## 🎨 Contenido Personalizado

### Información de Salomé Rodríguez Moscoso

**Perfil:**
- Desarrolladora en Formación
- Email: salomerodriguezmoscoso@gmail.com
- Ubicación: Colombia
- GitHub: @Salome98342

**Experiencia:**
- Monitora Socioeducativa - ASES (2025)
- Desarrollo de Sistemas Académicos (2025)
- Sistema Tienda Escolar Maida's (2025)

**Habilidades Técnicas:**

*Frontend:*
- React, Bootstrap, Tailwind CSS
- Framer Motion, Consumo de APIs
- Componentización, Dashboards

*Backend:*
- Node.js, Express, JWT
- Django (conceptos básicos)

*Bases de Datos:*
- PostgreSQL, Supabase
- Modelado de tablas, CRUD

*Herramientas:*
- Git & GitHub
- Documentación técnica

**Proyectos Destacados:**
1. Sistema de Gestión Académica (RA, IL, notas, retroalimentaciones)
2. Sistema Tienda Escolar Maida's (ventas, créditos, inventario)
3. Dashboard Interactivo (visualización de datos)
4. Actividades con Redes Neuronales (CIFAR-10)

---

## 📁 Estructura del Proyecto

```
HojaDeVida/
│
├── frontend/                    # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Profile.jsx      → Datos de Salomé hardcodeados
│   │   │   ├── Skills.jsx       → 16 habilidades hardcodeadas
│   │   │   ├── Projects.jsx     → 4 proyectos hardcodeados
│   │   │   ├── Contact.jsx      → Formulario conectado a API
│   │   │   └── Navigation.jsx   → Menú de navegación
│   │   ├── services/
│   │   │   └── api.js          → Solo endpoint de contacto
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/                     # Node.js + Express
│   ├── controllers/
│   │   └── contactController.js → Solo controlador de contacto
│   ├── routes/
│   │   └── contactRoutes.js    → Solo rutas de contacto
│   ├── config/
│   │   └── supabase.js         → Configuración de Supabase
│   ├── database/
│   │   └── schema.sql          → Solo tabla messages
│   └── index.js                → Servidor simplificado
│
├── README.md                    # Documentación principal
├── SETUP.md                     # Guía de configuración
├── DEPLOYMENT.md                # Guía de despliegue
├── DATOS_PERSONALES.md          # Info completa de Salomé
└── RESUMEN.md                   # Este archivo
```

---

## 🚀 Guía Rápida

### 1. Configuración Inicial

```bash
# Clonar repositorio
git clone https://github.com/Salome98342/HojaDeVida.git
cd HojaDeVida

# Backend
cd backend
npm install
cp .env.example .env
# Editar .env con credenciales de Supabase
npm run dev

# Frontend (en otra terminal)
cd frontend
npm install
npm run dev
```

### 2. Configurar Supabase

1. Crear proyecto en supabase.com
2. Ejecutar SQL de `backend/database/schema.sql`
3. Copiar URL y anon key
4. Actualizar `backend/.env`

### 3. Personalizar Contenido

Editar archivos en `frontend/src/components/`:
- `Profile.jsx` → Tu información personal
- `Skills.jsx` → Tus habilidades
- `Projects.jsx` → Tus proyectos
- `Contact.jsx` → Tu info de contacto

---

## 🌐 Despliegue

**Frontend (Netlify):**
```bash
cd frontend
npm run build
# Subir carpeta dist/ a Netlify
```
Variable de entorno: `VITE_API_URL`

**Backend (Render):**
```bash
# Conectar repositorio GitHub
# Root directory: backend
# Build: npm install
# Start: npm start
```
Variables: `SUPABASE_URL`, `SUPABASE_ANON_KEY`

---

## ✨ Características Destacadas

### Diseño
- 🎨 Gradientes modernos (morado, azul, teal)
- 🌊 Animaciones suaves con Framer Motion
- 📱 Totalmente responsive
- 🌙 Tema oscuro elegante
- ✨ Efectos glassmorphism

### Funcionalidades
- 📄 Secciones: Perfil, Habilidades, Proyectos, Contacto
- 📊 Barras de progreso animadas para habilidades
- 🎯 Tarjetas de proyectos con hover effects
- 📧 Formulario de contacto con validación
- 🎬 Animaciones al scroll
- 🔍 Navegación smooth

### Tecnologías
- ⚛️ React 19 con Hooks
- ⚡ Vite (build tool)
- 🎬 Framer Motion (animaciones)
- 🟢 Node.js + Express (backend)
- 🐘 PostgreSQL vía Supabase
- 🎨 CSS3 con variables

---

## 📝 Archivos de Documentación

| Archivo | Propósito |
|---------|-----------|
| `README.md` | Documentación principal, arquitectura completa |
| `SETUP.md` | Guía paso a paso de configuración local |
| `DEPLOYMENT.md` | Guía completa de despliegue (Netlify + Render) |
| `DATOS_PERSONALES.md` | Información completa de Salomé |
| `RESUMEN.md` | Este archivo - vista rápida del proyecto |
| `frontend/README.md` | Documentación específica del frontend |
| `backend/README.md` | Documentación específica del backend |

---

## 🎯 Ventajas de Esta Arquitectura

### ✅ Beneficios

1. **Configuración Rápida**
   - No necesitas poblar múltiples tablas en BD
   - Solo creas una tabla para mensajes

2. **Fácil Personalización**
   - Edita archivos React directamente
   - No necesitas interfaz de administración

3. **Menos Dependencias**
   - Frontend no depende del backend para mostrar contenido
   - Solo el contacto necesita estar online

4. **Más Rápido**
   - No hay llamadas API para cargar perfil/skills/proyectos
   - Carga instantánea de contenido

5. **Ideal para Portafolio**
   - Tu información está en tu código
   - Control total sobre el contenido
   - Fácil de versionar con Git

### ⚠️ Consideraciones

- Para actualizar contenido, necesitas redeploy del frontend
- No hay interfaz admin para editar (pero no la necesitas)
- Si quieres CMS, considera agregar Strapi o similar

---

## 🔄 Flujo de Trabajo

### Actualizar Información Personal

```bash
# 1. Editar componentes
vim frontend/src/components/Profile.jsx
vim frontend/src/components/Skills.jsx
vim frontend/src/components/Projects.jsx

# 2. Commit y push
git add .
git commit -m "Actualizar información personal"
git push origin main

# 3. Deploy automático en Netlify
# (Si configuraste deploy continuo)
```

### Ver Mensajes de Contacto

1. Ve a dashboard de Supabase
2. Table Editor → `messages`
3. Ver todos los mensajes recibidos

O usa el endpoint:
```bash
curl https://tu-backend.onrender.com/api/contact
```

---

## 🎓 Para Fines Académicos

### Cumple con los Requisitos

✅ **Backend**: Node.js + Express  
✅ **Base de Datos**: Supabase (PostgreSQL)  
✅ **Frontend**: React  
✅ **Despliegue**: Netlify (frontend)  
✅ **Diseño**: Gradientes y animaciones  
✅ **Personalización**: Con información real  

### Justificación Técnica

**¿Por qué solo una tabla?**
- Para un portafolio personal, los datos raramente cambian
- Hardcodear datos es más eficiente cuando no necesitas CRUD
- Demuestra arquitectura híbrida: frontend estático + backend dinámico
- La BD se usa para lo que realmente necesita ser dinámico: mensajes

**Buenas prácticas aplicadas:**
- Separación de concerns (frontend/backend)
- Variables de entorno para secrets
- Validación de datos en backend
- Row Level Security en Supabase
- Código limpio y comentado
- Documentación completa

---

## 📊 Métricas del Proyecto

**Código:**
- React Components: 5
- Backend Controllers: 1
- API Endpoints: 3
- Database Tables: 1
- Environment Variables: 3

**Archivos de Documentación:** 7
- README principal
- Setup guide
- Deployment guide
- Datos personales
- Este resumen
- Frontend README
- Backend README

**Tecnologías:** 10+
- React, Vite, Framer Motion
- Node.js, Express
- Supabase, PostgreSQL
- HTML5, CSS3, JavaScript
- Git, GitHub

---

## 🚀 Próximos Pasos

### Para Mejorar el Proyecto

1. **Agregar Analytics**
   - Google Analytics o Plausible
   - Tracking de visitantes

2. **SEO Optimization**
   - Meta tags
   - Open Graph para redes sociales
   - Sitemap.xml

3. **Funcionalidades Adicionales**
   - Blog section (con Markdown)
   - Testimonios
   - Certificaciones

4. **Mejoras Técnicas**
   - Tests unitarios (Jest, Vitest)
   - CI/CD con GitHub Actions
   - Lighthouse optimization

5. **Dominio Personalizado**
   - Comprar dominio
   - Configurar en Netlify
   - Email personalizado

---

## 📞 Contacto y Soporte

**Desarrolladora:**  
Salomé Rodríguez Moscoso

**Email:**  
salomerodriguezmoscoso@gmail.com

**GitHub:**  
[@Salome98342](https://github.com/Salome98342)

**Repositorio:**  
[HojaDeVida](https://github.com/Salome98342/HojaDeVida)

---

## 📄 Licencia

ISC

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0 - Arquitectura simplificada con datos hardcodeados
