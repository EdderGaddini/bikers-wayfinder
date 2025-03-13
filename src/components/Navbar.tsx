
import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-8 lg:px-12',
        scrolled ? 'py-4 bg-slate-900 bg-opacity-90 backdrop-blur-md' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="relative z-10 flex items-center">
          <Scale className="h-8 w-8 text-amber-600 mr-2" />
          <h1 className="text-2xl font-bold font-heading tracking-wider">
            <span className="text-white">SOARES</span>
            <span className="text-amber-600 ml-2">ADVOCACIA</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Serviços', 'Áreas', 'Sobre', 'Contato'].map((item, index) => (
            <a
              key={item}
              href={`#${index === 0 ? 'home' : index === 1 ? 'features' : index === 2 ? 'gallery' : index === 3 ? 'about' : 'contact'}`}
              className="text-sm uppercase tracking-wider font-medium hover:text-amber-600 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a 
            href="#join"
            className="py-2 px-6 bg-amber-700 text-white rounded-sm text-sm uppercase tracking-wider font-medium hover:bg-amber-800 transition-colors"
          >
            Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "fixed inset-0 bg-slate-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          {['Home', 'Serviços', 'Áreas', 'Sobre', 'Contato'].map((item, index) => (
            <a
              key={item}
              href={`#${index === 0 ? 'home' : index === 1 ? 'features' : index === 2 ? 'gallery' : index === 3 ? 'about' : 'contact'}`}
              className="text-2xl uppercase tracking-wider font-medium hover:text-amber-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#join"
            className="mt-4 py-3 px-8 bg-amber-700 text-white rounded-sm text-lg uppercase tracking-wider font-medium hover:bg-amber-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Consulta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
