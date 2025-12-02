# 🚀 Guía de Despliegue - Hoja de Vida

Esta guía te ayudará a desplegar tu aplicación de portafolio en producción.

## 📋 Tabla de Contenidos

1. [Frontend en Netlify](#frontend-en-netlify)
2. [Backend en Render](#backend-en-render)
3. [Configuración de Supabase](#configuración-de-supabase)
4. [Variables de Entorno](#variables-de-entorno)
5. [Verificación Post-Deploy](#verificación-post-deploy)

---

## 🎨 Frontend en Netlify

### Opción 1: Despliegue Automático desde GitHub

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Preparar para deploy"
   git push origin main
   ```

2. **Conecta con Netlify:**
   - Ve a [netlify.com](https://netlify.com) y crea una cuenta
   - Haz clic en "Add new site" > "Import an existing project"
   - Selecciona GitHub y autoriza el acceso
   - Selecciona tu repositorio `HojaDeVida`

3. **Configura el Build:**
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`

4. **Variables de Entorno:**
   - Haz clic en "Site settings" > "Environment variables"
   - Agrega: `VITE_API_URL` = `https://tu-backend-url.onrender.com/api`
   - (Agrega la URL de tu backend después de desplegarlo)

5. **Desplegar:**
   - Haz clic en "Deploy site"
   - Espera unos minutos
   - ¡Tu sitio estará en `https://tu-sitio.netlify.app`!

### Opción 2: Despliegue Manual

1. **Construir el proyecto:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Subir a Netlify:**
   - Ve a [netlify.com/drop](https://app.netlify.com/drop)
   - Arrastra la carpeta `dist` al navegador
   - ¡Listo!

3. **Configurar variables:**
   - Ve a "Site settings" > "Environment variables"
   - Agrega `VITE_API_URL` con la URL de tu backend

---

## ⚙️ Backend en Render

### 1. Preparar el Backend

1. **Crear `render.yaml` (opcional):**
   Crea este archivo en la raíz del proyecto `backend/`:
   ```yaml
   services:
     - type: web
       name: hojadevida-api
       env: node
       buildCommand: npm install
       startCommand: npm start
       envVars:
         - key: NODE_ENV
           value: production
         - key: PORT
           value: 3000
   ```

2. **Verificar `package.json`:**
   Asegúrate de tener estos scripts:
   ```json
   {
     "scripts": {
       "start": "node index.js",
       "dev": "nodemon index.js"
     }
   }
   ```

### 2. Desplegar en Render

1. **Crear cuenta:**
   - Ve a [render.com](https://render.com) y crea una cuenta
   - Conecta tu cuenta de GitHub

2. **Crear nuevo Web Service:**
   - Haz clic en "New +" > "Web Service"
   - Conecta tu repositorio `HojaDeVida`
   - Configura:
     - **Name**: `hojadevida-api`
     - **Root Directory**: `backend`
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Instance Type**: Free

3. **Variables de Entorno:**
   En la sección "Environment", agrega:
   - `SUPABASE_URL`: Tu URL de Supabase
   - `SUPABASE_ANON_KEY`: Tu clave anon de Supabase
   - `PORT`: 3000 (opcional, Render lo maneja automáticamente)
   - `NODE_ENV`: production

4. **Desplegar:**
   - Haz clic en "Create Web Service"
   - Espera ~5 minutos
   - Tu API estará en `https://hojadevida-api.onrender.com`

### 3. Actualizar Frontend con URL del Backend

1. **En Netlify:**
   - Ve a "Site settings" > "Environment variables"
   - Actualiza `VITE_API_URL` = `https://hojadevida-api.onrender.com/api`

2. **Re-desplegar Frontend:**
   - En Netlify, ve a "Deploys"
   - Haz clic en "Trigger deploy" > "Clear cache and deploy site"

---

## 🗄️ Configuración de Supabase

Tu base de datos ya debería estar configurada si seguiste el SETUP.md, pero aquí hay algunos tips:

### Verificar Configuración

1. **Tabla messages:**
   - Ve a tu proyecto en Supabase
   - Table Editor > `messages`
   - Debe tener las columnas: id, name, email, subject, message, created_at

2. **Row Level Security (RLS):**
   - Ve a Authentication > Policies
   - Verifica que la política "Enable insert access for all users" esté activa
   - Esto permite que cualquiera envíe mensajes por el formulario

3. **API Keys:**
   - Project Settings > API
   - Copia `URL` y `anon/public` key
   - Estas son las que usas en el backend

### Seguridad Adicional (Opcional)

Para proteger contra spam:

1. **Rate Limiting en Supabase:**
   ```sql
   -- Limitar inserts por IP (requiere configuración adicional)
   ```

2. **Validación en Backend:**
   Ya implementada en `contactController.js`

---

## 🔑 Variables de Entorno

### Resumen Completo

**Backend (Render):**
```env
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGci...
PORT=3000
NODE_ENV=production
```

**Frontend (Netlify):**
```env
VITE_API_URL=https://hojadevida-api.onrender.com/api
```

**Supabase:**
- Ya configurado en el dashboard
- No requiere variables adicionales

---

## ✅ Verificación Post-Deploy

### 1. Verificar Backend

Prueba estos endpoints en tu navegador o Postman:

```
GET https://tu-backend.onrender.com/api/health
```

Debe responder:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

### 2. Verificar Frontend

1. **Abre tu sitio:**
   ```
   https://tu-sitio.netlify.app
   ```

2. **Verifica cada sección:**
   - ✅ Perfil con tu información
   - ✅ Habilidades con barras de progreso
   - ✅ Proyectos con tus proyectos
   - ✅ Formulario de contacto

3. **Prueba el formulario:**
   - Envía un mensaje de prueba
   - Ve a Supabase > Table Editor > `messages`
   - Debe aparecer tu mensaje

---

## 🔄 Actualizaciones Continuas

### Actualizar Contenido

Como tu información está hardcodeada:

1. **Edita los archivos:**
   ```bash
   # Edita Profile.jsx, Skills.jsx, Projects.jsx
   ```

2. **Commit y push:**
   ```bash
   git add .
   git commit -m "Actualizar información personal"
   git push origin main
   ```

3. **Despliegue automático:**
   - Netlify detectará los cambios
   - Se redespliegará automáticamente
   - ¡No necesitas hacer nada más!

### Actualizar Backend

Si modificas el backend:

1. **Commit y push:**
   ```bash
   git add .
   git commit -m "Actualizar backend"
   git push origin main
   ```

2. **Render se redespliega automáticamente**

---

## 📊 Monitoreo

### Netlify
- **Analytics**: Site settings > Analytics
- **Logs**: Deploys > [tu deploy] > Deploy log
- **Forms**: Forms (si habilitas Netlify Forms)

### Render
- **Logs**: Dashboard > tu servicio > Logs
- **Métricas**: Dashboard > Metrics
- **Events**: Events tab

### Supabase
- **Database**: Table Editor para ver mensajes
- **Logs**: Logs & reports
- **API Usage**: Settings > Usage

---

## 🚨 Solución de Problemas

### Frontend no carga datos
1. Verifica que el backend esté corriendo: `GET /api/health`
2. Revisa la consola del navegador (F12)
3. Verifica CORS en el backend (ya configurado)
4. Confirma que `VITE_API_URL` esté correcto

### Formulario de contacto no funciona
1. Verifica que el backend esté corriendo
2. Revisa los logs en Render
3. Confirma credenciales de Supabase
4. Verifica que la tabla `messages` exista

### Build falla en Netlify
1. Revisa los logs de build
2. Verifica que las dependencias estén instaladas
3. Prueba el build localmente: `npm run build`

### Backend crashea en Render
1. Revisa los logs en Render
2. Verifica variables de entorno
3. Confirma que `package.json` tenga script `start`

---

## 🎉 ¡Listo!

Tu portafolio está desplegado y listo para compartir:

- **Frontend**: `https://tu-sitio.netlify.app`
- **Backend**: `https://tu-backend.onrender.com`
- **Base de datos**: Dashboard de Supabase

### Comparte tu Portafolio

- Agrega el link a tu GitHub profile
- Compártelo en LinkedIn
- Úsalo en tu CV
- ¡Envíalo a potenciales empleadores!

---

## 📚 Recursos Adicionales

- [Documentación de Netlify](https://docs.netlify.com)
- [Documentación de Render](https://render.com/docs)
- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de React + Vite](https://vitejs.dev/guide/)

---

## 💡 Tips Pro

1. **Dominio personalizado:**
   - En Netlify: Site settings > Domain management
   - Agrega tu dominio personalizado (ej: `salome-portfolio.com`)

2. **HTTPS:**
   - Habilitado automáticamente en Netlify y Render
   - ¡Gratis!

3. **Analytics:**
   - Netlify Analytics (de pago)
   - Google Analytics (gratis)
   - Plausible Analytics (open source)

4. **Performance:**
   - Netlify CDN automático
   - Optimización de imágenes con plugins
   - Lazy loading ya implementado

---

**¿Preguntas?** Revisa `README.md`, `SETUP.md` o abre un issue en GitHub.
