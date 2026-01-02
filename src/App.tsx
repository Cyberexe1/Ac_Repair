import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FloatingButtons from './components/FloatingButtons';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <FloatingButtons />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
