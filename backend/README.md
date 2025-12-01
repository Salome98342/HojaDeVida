# Backend - CV/Portfolio API

Backend server for the CV/Portfolio application built with Node.js, Express, and Supabase.

## Features

- RESTful API for profile, skills, projects, and contacts
- Supabase integration for database
- CORS enabled for frontend communication
- Environment-based configuration

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

### 3. Set Up Database

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL script from `database/schema.sql` to create the necessary tables

This will create the following tables:
- `profile` - User profile information
- `skills` - Skills and technologies
- `projects` - Portfolio projects
- `contacts` - Contact form submissions

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

## API Endpoints

### Profile
- `GET /api/profile` - Get profile information
- `PUT /api/profile` - Update profile information

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

### Health Check
- `GET /api/health` - Server health check

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

## Security Notes

- The `.env` file is gitignored and should never be committed
- Supabase Row Level Security (RLS) is enabled on all tables
- Public read access is enabled for profile, skills, and projects
- Contact form allows public insert access
- For admin operations (create/update/delete), you should implement authentication

## Development

To add new features:

1. Create a new controller in `controllers/`
2. Create corresponding routes in `routes/`
3. Import and use the routes in `index.js`
4. Update the database schema if needed

## Troubleshooting

If you see "Supabase credentials not configured" warning:
- Make sure you have created a `.env` file
- Verify that your Supabase URL and key are correct
- Check that the `.env` file is in the backend root directory

## License

ISC
