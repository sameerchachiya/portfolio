import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Hackathon from './components/Hackathon';

function App() {
  return (
    <ThemeProvider>
      <div
        className="text-foreground min-h-screen w-full"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #e3f0ff 50%, #ffffff 100%)',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Hackathon />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
