import { useState } from 'react';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import ArtPortfolio from './components/ArtPortfolio';
import ArtGallery from './components/ArtGallery';
import Commissions from './components/Commissions';
import Additional from './components/Additional';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [showCommissions, setShowCommissions] = useState(false);

  return (
    <div className="app">
      <Navigation />
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <ArtPortfolio 
        onShowGallery={() => setShowGallery(true)}
        onShowCommissions={() => setShowCommissions(true)}
      />
      {showGallery && <ArtGallery />}
      {showCommissions && <Commissions />}
      <Additional />
      <Contact />
    </div>
  );
}

export default App;

