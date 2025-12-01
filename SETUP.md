# Quick Setup Guide

This guide will help you get your CV/Portfolio application up and running in minutes.

## Prerequisites

- Node.js (v14+) installed
- A Supabase account (free tier is fine)

## Step 1: Set Up Supabase Database

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project" and create a project
3. Wait for the project to be ready (takes ~2 minutes)
4. Go to **SQL Editor** (left sidebar)
5. Click "New Query"
6. Copy the entire content from `backend/database/schema.sql`
7. Paste it into the SQL Editor
8. Click "Run" to execute the script
9. Go to **Project Settings** > **API** (left sidebar)
10. Copy your:
    - Project URL (looks like: `https://xxxxx.supabase.co`)
    - anon/public key (long string starting with `eyJ...`)

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

## Step 4: Add Your Information

1. Go to your Supabase project dashboard
2. Click on **Table Editor** (left sidebar)
3. Add your data to each table:

### Profile Table
- Click on `profile` table
- Click "Insert row"
- Fill in your information:
  - name: "Your Name"
  - title: "Your Professional Title"
  - bio: "Your bio here"
  - email: "your@email.com"
  - location: "Your City, Country"
  - linkedin: "https://linkedin.com/in/yourprofile"
  - github: "https://github.com/yourusername"
  - website: "https://yourwebsite.com" (optional)
  - avatar_url: "https://link-to-your-photo.jpg" (optional)

### Skills Table
Add multiple rows, one for each skill:
- name: "React" / "Node.js" / "Python", etc.
- category: "Frontend" / "Backend" / "Database", etc.
- level: 0-100 (percentage)
- order: 1, 2, 3, etc. (for ordering)

### Projects Table
Add multiple rows, one for each project:
- title: "Project Name"
- description: "What the project does"
- technologies: Click "Edit as JSON" and enter: `["React", "Node.js", "MongoDB"]`
- github_url: "https://github.com/you/project"
- demo_url: "https://your-demo.com"
- featured: true/false
- order: 1, 2, 3, etc.

## Step 5: View Your Portfolio

1. Open your browser to `http://localhost:5173`
2. You should see your portfolio with all your information!
3. Navigate through the sections using the menu

## Troubleshooting

**"Unable to load profile" error:**
- Make sure backend is running (`npm run dev` in backend folder)
- Check that Supabase credentials are correct in `backend/.env`
- Verify you added data to the `profile` table in Supabase

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

## Getting Help

- Check the detailed README files in `frontend/` and `backend/` folders
- Review the database schema in `backend/database/schema.sql`
- All API endpoints are documented in `backend/README.md`

Enjoy your new portfolio! 🚀
