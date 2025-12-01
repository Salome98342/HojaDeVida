import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

