# HojaDeVida - CV/Portfolio Application

A modern, full-stack CV/Portfolio web application with gradient design, smooth animations, and dynamic content management.

## 🚀 Features

- **Frontend**: React + Vite with Framer Motion animations
- **Backend**: Node.js + Express RESTful API
- **Database**: Supabase (PostgreSQL)
- **Design**: Gradient color schemes with dark theme
- **Animations**: Smooth transitions and effects with Framer Motion
- **Responsive**: Mobile-first design that works on all devices
- **Dynamic**: All content is managed through Supabase database

## 📋 Sections

1. **Profile** - Personal information, bio, and contact details
2. **Skills** - Technical skills with progress bars and categories
3. **Projects** - Portfolio projects with images, descriptions, and links
4. **Contact** - Contact form with validation and submission to database

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

### Database
- Supabase (PostgreSQL)
- Row Level Security (RLS)
- Real-time capabilities

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

## 📊 Database Schema

### Tables

- **profile**: User profile information (name, title, bio, contact info, social links)
- **skills**: Skills and technologies with levels and categories
- **projects**: Portfolio projects with descriptions, technologies, and links
- **contacts**: Contact form submissions

See `backend/database/schema.sql` for the complete schema.

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

### Adding Your Data

1. Access your Supabase project dashboard
2. Go to Table Editor
3. Add your information to the respective tables:
   - Profile: Your personal information
   - Skills: Your technical skills
   - Projects: Your portfolio projects
   - Contacts: View contact form submissions

Alternatively, use the backend API endpoints to manage data programmatically.

## 📡 API Endpoints

### Profile
- `GET /api/profile` - Get profile
- `PUT /api/profile` - Update profile

### Skills
- `GET /api/skills` - List all skills
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Projects
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions

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

## 👤 Author

Add your information here after setting up your profile!

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use.

## 📧 Contact

Use the contact form on the application to get in touch!
