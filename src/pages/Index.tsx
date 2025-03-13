
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = function(e: Event) {
      e.preventDefault();
      
      const anchor = this as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href') as string;
      const target = document.querySelector(targetId);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
    
    // Ensure all elements with animation classes remain visible after animation
    document.querySelectorAll('.animate-fade-in, .animate-slide-up')
      .forEach(element => {
        element.addEventListener('animationend', () => {
          element.classList.remove('opacity-0');
          element.classList.remove('translate-y-10');
        });
      });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
