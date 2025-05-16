import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
