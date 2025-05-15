import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="w-full overflow-hidden bg-background">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Hero />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </div>
          </main>
          <footer className="py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Sameer Chachiya. All rights reserved.
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
