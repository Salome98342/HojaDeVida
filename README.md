# 🎨 Hoja de Vida - Salomé Rodríguez Moscoso

Aplicación web moderna de CV/Portafolio con diseño gradient, animaciones suaves y contenido personalizado.

## 🚀 Características

- **Frontend**: React + Vite con animaciones de Framer Motion
- **Backend**: API RESTful con Node.js + Express
- **Base de datos**: Supabase (PostgreSQL) - Solo para formulario de contacto
- **Diseño**: Esquemas de colores degradados modernos
- **Animaciones**: Transiciones suaves con Framer Motion
- **Responsive**: Diseño mobile-first
- **Contenido**: Datos de perfil, habilidades y proyectos hardcodeados (no requieren BD)

## 📋 Secciones

1. **Perfil** - Información personal, biografía y datos de contacto (hardcodeado)
2. **Habilidades** - Skills técnicas con barras de progreso y categorías (hardcodeado)
3. **Proyectos** - Portafolio de proyectos con descripciones y enlaces (hardcodeado)
4. **Contacto** - Formulario de contacto con validación y envío a Supabase

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Framer Motion
- Axios
- React Router DOM
- CSS3 with custom properties

### Backend
- Node.js
- Express
- Supabase JS Client
- CORS
- dotenv

### Base de datos
- Supabase (PostgreSQL) - Solo tabla `messages`
- Row Level Security (RLS)
- Datos de perfil, skills y proyectos hardcodeados en frontend

## 📦 Project Structure

```
HojaDeVida/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── services/   # API services
│   │   └── ...
│   └── README.md      # Frontend documentation
│
├── backend/           # Express backend API
│   ├── config/        # Configuration files
│   ├── controllers/   # Route controllers
│   ├── routes/        # API routes
│   ├── database/      # Database schema
│   └── README.md      # Backend documentation
│
└── README.md          # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### 1. Clone the Repository

```bash
git clone https://github.com/Salome98342/HojaDeVida.git
cd HojaDeVida
```

### 2. Set Up Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your Supabase credentials
npm run dev
```

See [backend/README.md](backend/README.md) for detailed backend setup instructions.

### 3. Set Up Supabase Database

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor in your Supabase dashboard
3. Run the SQL script from `backend/database/schema.sql`
4. Add your data through the Table Editor or API

### 4. Set Up Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your backend API URL
npm run dev
```

See [frontend/README.md](frontend/README.md) for detailed frontend setup instructions.

### 5. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 📊 Esquema de Base de Datos

### Arquitectura de Datos

**Datos Hardcodeados (Frontend):**
- ✅ **Perfil**: Información personal de Salomé (nombre, título, bio, email, ubicación)
- ✅ **Habilidades**: Skills organizadas por categorías (Frontend, Backend, Bases de datos, etc.)
- ✅ **Proyectos**: Portafolio de proyectos académicos y personales

**Datos en Supabase:**
- 📧 **messages**: Mensajes del formulario de contacto (name, email, subject, message, created_at)

Ver `backend/database/schema.sql` para el esquema completo de la tabla messages.

## 🎨 Customization

### Colors and Theme

Edit the CSS variables in `frontend/src/index.css`:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  /* ... */
}
```

### Personalización de Contenido

**Para modificar tu información personal:**
1. Edita `frontend/src/components/Profile.jsx` - Datos personales
2. Edita `frontend/src/components/Skills.jsx` - Tus habilidades
3. Edita `frontend/src/components/Projects.jsx` - Tus proyectos

**Para ver mensajes de contacto:**
1. Accede a tu dashboard de Supabase
2. Ve a Table Editor
3. Abre la tabla `messages` para ver los mensajes recibidos

## 📡 API Endpoints

### Contact (Único endpoint activo)
- `POST /api/contact` - Enviar mensaje de contacto
- `GET /api/contact` - Obtener todos los mensajes (opcional, proteger con auth)

### Health Check
- `GET /api/health` - Verificar estado del servidor

**Nota**: Los endpoints de profile, skills y projects han sido removidos ya que esos datos están hardcodeados en el frontend.

## 🔒 Security

- Environment variables for sensitive data
- Row Level Security (RLS) enabled on Supabase
- CORS configuration for API access
- Input validation on forms
- Prepared statements via Supabase client

## 🚀 Deployment

### Frontend (Netlify, Vercel, or similar)

```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Heroku, Railway, or similar)

```bash
cd backend
# Set environment variables on your platform
# Deploy using your platform's method
```

### Environment Variables

Make sure to set these in your deployment platform:

**Backend:**
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `PORT`

**Frontend:**
- `VITE_API_URL`

## 📝 License

ISC

## 👤 Autora

**Salomé Rodríguez Moscoso**
- 📧 Email: salomerodriguezmoscoso@gmail.com
- 💻 GitHub: [@Salome98342](https://github.com/Salome98342)
- 🎓 Estudiante de Desarrollo de Software

## 🤝 Contribuciones

Este es un proyecto de portafolio personal. Siéntete libre de hacer fork y personalizar para tu propio uso.

## 📧 Contacto

¡Usa el formulario de contacto en la aplicación para comunicarte conmigo!
