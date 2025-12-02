# Backend - API de Hoja de Vida

Servidor backend simplificado para la aplicación de portafolio construido con Node.js, Express y Supabase.

## ⚠️ Arquitectura Simplificada

Este backend solo maneja el **formulario de contacto**. Los datos de perfil, habilidades y proyectos están hardcodeados en el frontend.

## Características

- Endpoint para formulario de contacto
- Integración con Supabase (solo tabla `messages`)
- CORS habilitado para comunicación con frontend
- Validación de datos de formulario
- Configuración basada en variables de entorno

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account and project

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API
3. Copy your project URL and anon/public key
4. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

5. Update the `.env` file with your Supabase credentials:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

### 3. Configurar Base de Datos

1. Ve a tu dashboard de Supabase
2. Navega a SQL Editor
3. Ejecuta el script SQL de `database/schema.sql` para crear la tabla necesaria

Esto creará la tabla:
- `messages` - Mensajes del formulario de contacto (name, email, subject, message, created_at)

**Nota:** A diferencia de versiones anteriores, solo necesitas esta única tabla. Los datos de perfil, habilidades y proyectos están hardcodeados en el frontend.

### 4. Run the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## Endpoints de la API

### Contacto (Único endpoint activo)
- `POST /api/contact` - Enviar mensaje de contacto
  - Body: `{ name, email, subject, message }`
  - Validación: email válido, campos requeridos
  - Respuesta: `{ success: true, data: {...}, message: "..." }`

- `GET /api/contact` - Obtener todos los mensajes (opcional, proteger en producción)
  - Respuesta: Array de mensajes ordenados por fecha

### Health Check
- `GET /api/health` - Verificar estado del servidor
  - Respuesta: `{ status: "ok", message: "Server is running" }`

**Nota:** Los endpoints de profile, skills y projects han sido removidos ya que esos datos están hardcodeados en el frontend.

## Project Structure

```
backend/
├── config/
│   └── supabase.js      # Supabase configuration
├── controllers/
│   ├── profileController.js
│   ├── skillsController.js
│   ├── projectsController.js
│   └── contactController.js
├── routes/
│   ├── profileRoutes.js
│   ├── skillsRoutes.js
│   ├── projectsRoutes.js
│   └── contactRoutes.js
├── database/
│   └── schema.sql       # Database schema
├── .env.example         # Environment variables template
├── index.js            # Main server file
└── package.json
```

## Environment Variables

- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anonymous/public API key
- `PORT` - Server port (default: 3000)

## Notas de Seguridad

- El archivo `.env` está en gitignore y nunca debe ser commiteado
- Supabase Row Level Security (RLS) está habilitado en la tabla `messages`
- El formulario de contacto permite inserciones públicas (cualquiera puede enviar mensajes)
- Para ver mensajes (GET /api/contact), considera implementar autenticación en producción
- Validación de email y campos requeridos implementada en el controlador

## Desarrollo

Para agregar nuevas funcionalidades:

1. Crea un nuevo controlador en `controllers/`
2. Crea las rutas correspondientes en `routes/`
3. Importa y usa las rutas en `index.js`
4. Actualiza el schema de base de datos si es necesario

## Solución de Problemas

**Warning "Supabase credentials not configured":**
- Asegúrate de haber creado un archivo `.env`
- Verifica que tu URL y key de Supabase sean correctas
- Confirma que el archivo `.env` esté en el directorio raíz del backend

**Error al enviar formulario:**
- Verifica que el servidor esté corriendo
- Revisa que la tabla `messages` exista en Supabase
- Confirma que las credenciales de Supabase sean correctas
- Revisa los logs del servidor para más detalles

**CORS errors:**
- El CORS ya está configurado para permitir peticiones del frontend
- Si usas un dominio personalizado, actualiza la configuración de CORS en `index.js`

## Troubleshooting

If you see "Supabase credentials not configured" warning:
- Make sure you have created a `.env` file
- Verify that your Supabase URL and key are correct
- Check that the `.env` file is in the backend root directory

## License

ISC
