# 🚀 Guía Rápida de Configuración

Esta guía te ayudará a tener tu aplicación de CV/Portafolio funcionando en minutos.

## ⚠️ Arquitectura del Proyecto

**Importante:** Esta aplicación tiene una arquitectura híbrida simplificada:

✅ **Datos Hardcodeados (Frontend):**
- Información personal (perfil)
- Habilidades técnicas
- Proyectos del portafolio

✅ **Base de Datos Supabase:**
- Solo tabla `messages` para el formulario de contacto

**Beneficios:**
- No necesitas agregar datos manualmente a múltiples tablas
- Más rápido de configurar
- Fácil de personalizar editando archivos React
- La base de datos solo se usa para lo esencial (mensajes de contacto)

## 📋 Requisitos Previos

- Node.js (v14+) instalado
- Una cuenta de Supabase (el tier gratuito es suficiente)

## Paso 1: Configurar Base de Datos en Supabase

1. Ve a [supabase.com](https://supabase.com) y regístrate/inicia sesión
2. Haz clic en "New Project" y crea un proyecto
3. Espera a que el proyecto esté listo (~2 minutos)
4. Ve a **SQL Editor** (barra lateral izquierda)
5. Haz clic en "New Query"
6. Copia el contenido completo de `backend/database/schema.sql`
7. Pégalo en el SQL Editor
8. Haz clic en "Run" para ejecutar el script
9. Ve a **Project Settings** > **API** (barra lateral izquierda)
10. Copia tu:
    - Project URL (se ve como: `https://xxxxx.supabase.co`)
    - anon/public key (cadena larga que empieza con `eyJ...`)

**Nota:** Solo se creará la tabla `messages` para el formulario de contacto.

## Step 2: Configure Backend

1. Open terminal in the `backend` folder
2. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
3. Edit `.env` file and add your Supabase credentials:
   ```env
   SUPABASE_URL=https://xxxxx.supabase.co
   SUPABASE_ANON_KEY=eyJhbGci...your_key_here
   PORT=3000
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the backend server:
   ```bash
   npm run dev
   ```

You should see: `🚀 Server running on port 3000`

## Step 3: Configure Frontend

1. Open a NEW terminal in the `frontend` folder
2. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
3. The default settings should work (`VITE_API_URL=http://localhost:3000/api`)
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the frontend:
   ```bash
   npm run dev
   ```

You should see: `Local: http://localhost:5173/`

## Paso 4: Personalizar Tu Información

Como los datos están hardcodeados, solo necesitas editar archivos del frontend:

### 1. Perfil Personal
Edita `frontend/src/components/Profile.jsx`:
```javascript
const profile = {
  name: 'Tu Nombre',
  title: 'Tu Título Profesional',
  bio: 'Tu biografía aquí...',
  email: 'tu@email.com',
  location: 'Tu Ciudad, País',
  github: 'https://github.com/tuusuario',
};
```

### 2. Habilidades
Edita `frontend/src/components/Skills.jsx`:
```javascript
const skills = [
  { id: 1, name: 'React', category: 'Frontend', level: 85 },
  { id: 2, name: 'Node.js', category: 'Backend', level: 80 },
  // Agrega más habilidades...
];
```

### 3. Proyectos
Edita `frontend/src/components/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto...',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    github_url: 'https://github.com/tuusuario/proyecto',
    demo_url: 'https://tu-demo.com', // opcional
  },
  // Agrega más proyectos...
];
```

### 4. Información de Contacto
Edita `frontend/src/components/Contact.jsx` para actualizar tu información de contacto en la sección de información (email, ubicación, etc.)

## Step 5: View Your Portfolio

1. Open your browser to `http://localhost:5173`
2. You should see your portfolio with all your information!
3. Navigate through the sections using the menu

## Troubleshooting

**Los datos no aparecen:**
- Verifica que hayas personalizado los archivos en `frontend/src/components/`
- Asegúrate de que el frontend esté ejecutándose (`npm run dev` en carpeta frontend)
- Revisa la consola del navegador (F12) por errores

**Error en el formulario de contacto:**
- Asegúrate de que el backend esté corriendo (`npm run dev` en carpeta backend)
- Verifica que las credenciales de Supabase estén correctas en `backend/.env`
- Confirma que la tabla `messages` existe en Supabase

**"Failed to fetch" errors:**
- Ensure both backend (port 3000) and frontend (port 5173) are running
- Check `frontend/.env` has correct API URL

**Build errors:**
- Delete `node_modules` folder and run `npm install` again
- Clear cache: `rm -rf node_modules/.vite`

## Customizing the Design

### Change Colors
Edit `frontend/src/index.css` and modify the CSS variables:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --color-accent: #667eea;
}
```

Choose your own gradient from [uigradients.com](https://uigradients.com) or create custom ones!

### Modify Components
All components are in `frontend/src/components/`:
- `Profile.jsx` / `Profile.css` - Hero section
- `Skills.jsx` / `Skills.css` - Skills section
- `Projects.jsx` / `Projects.css` - Projects section
- `Contact.jsx` / `Contact.css` - Contact form
- `Navigation.jsx` / `Navigation.css` - Navigation bar

## Deployment

### Frontend (Netlify/Vercel)
1. Build: `npm run build` (in frontend folder)
2. Deploy the `dist/` folder
3. Set environment variable: `VITE_API_URL=your-backend-url`

### Backend (Heroku/Railway/Render)
1. Deploy from the `backend` folder
2. Set environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `PORT` (usually set automatically)

## 📚 Documentación Adicional

- **Información personal completa**: Ver `DATOS_PERSONALES.md`
- **README principal**: Ver `README.md` para arquitectura completa
- **README del frontend**: Ver `frontend/README.md`
- **README del backend**: Ver `backend/README.md`
- **Schema de base de datos**: Ver `backend/database/schema.sql`

## 🎯 Ventajas de Esta Arquitectura

✅ **Configuración rápida**: No necesitas agregar datos manualmente a múltiples tablas
✅ **Fácil personalización**: Edita archivos React directamente
✅ **Menos dependencias**: Solo necesitas BD para contacto
✅ **Más rápido**: No hay llamadas API para cargar perfil/skills/proyectos
✅ **Ideal para portafolio personal**: Tu información está en el código, bajo tu control

## 📧 Visualizar Mensajes de Contacto

Para ver los mensajes que te envían:
1. Ve a tu dashboard de Supabase
2. Haz clic en **Table Editor**
3. Selecciona la tabla `messages`
4. Verás todos los mensajes con nombre, email, asunto y mensaje

¡Disfruta tu nuevo portafolio! 🚀
