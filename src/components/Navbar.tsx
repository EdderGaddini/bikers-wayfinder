
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        scrolled ? 'py-4 bg-black bg-opacity-80 backdrop-blur-md' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="relative z-10">
          <h1 className="text-2xl font-bold font-heading tracking-wider">
            <span className="text-white">BIKER'S</span>
            <span className="text-biker-accent ml-2">WAY</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Features', 'Gallery', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider font-medium hover:text-biker-accent transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a 
            href="#join"
            className="py-2 px-6 bg-biker-accent text-white rounded-sm text-sm uppercase tracking-wider font-medium button-hover"
          >
            Join Us
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
            "fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          {['Home', 'Features', 'Gallery', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl uppercase tracking-wider font-medium hover:text-biker-accent transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#join"
            className="mt-4 py-3 px-8 bg-biker-accent text-white rounded-sm text-lg uppercase tracking-wider font-medium button-hover"
            onClick={() => setIsOpen(false)}
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
