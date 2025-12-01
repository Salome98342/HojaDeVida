# Frontend - CV/Portfolio Application

Modern, animated CV/Portfolio frontend built with React, Vite, and Framer Motion.

## Features

- ⚡ Fast development with Vite
- ⚛️ React 19 with modern hooks
- 🎨 Gradient design with custom CSS variables
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🔄 Dynamic data from backend API
- 🎯 Smooth scrolling navigation
- 🌈 Beautiful gradient color schemes

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see backend/README.md)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Update the `.env` file with your backend API URL:

```env
VITE_API_URL=http://localhost:3000/api
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Profile.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── services/        # API services
│   │   └── api.js
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── index.css       # Global styles
│   └── main.jsx        # App entry point
├── .env.example        # Environment variables template
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json
```

## Components

### Navigation
- Fixed navigation bar
- Smooth scroll to sections
- Active section highlighting
- Responsive design

### Profile
- Hero section with gradient background
- Avatar/profile picture
- Name, title, and bio
- Contact information
- Social media links
- Animated entrance effects

### Skills
- Grid layout of skill cards
- Animated skill bars
- Category tags
- Hover effects
- Staggered animations

### Projects
- Portfolio project cards
- Project images
- Technology tags
- Links to GitHub and live demos
- Hover animations

### Contact
- Contact information display
- Contact form
- Form validation
- Success/error messages
- Animated form fields

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --color-accent: #667eea;
  /* ... more colors */
}
```

### Adding Your Data

The application will display placeholder data until you:
1. Set up the backend and Supabase
2. Add your information to the database
3. Ensure the API is running and accessible

You can add data through:
- Supabase dashboard (Table Editor)
- Backend API endpoints
- Custom admin panel (to be implemented)

## Animation

Framer Motion is used for all animations. Key features:
- Page entrance animations
- Scroll-triggered animations
- Hover effects
- Staggered children animations
- Spring physics

## Responsive Design

Breakpoints:
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading images
- Code splitting
- Optimized animations
- Minimal dependencies
- Fast build with Vite

## Troubleshooting

### API Connection Issues
- Ensure backend is running on the correct port
- Check VITE_API_URL in .env file
- Verify CORS is enabled on backend

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

## License

ISC

