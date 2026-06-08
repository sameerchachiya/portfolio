import { ThemeProvider } from './context/ThemeContext';
import TechBackground from './components/TechBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Hackathon from './components/Hackathon';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-foreground overflow-x-hidden">
        <TechBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <div className="glow-line max-w-4xl mx-auto opacity-60" />
            <Stats />
            <Experience />
            <Skills />
            <Projects />
            <Hackathon />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
