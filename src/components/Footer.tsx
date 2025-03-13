
import React from 'react';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-biker-black py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Intro */}
          <div className="lg:col-span-1">
            <a href="/" className="block mb-6">
              <h2 className="text-2xl font-bold font-heading tracking-wider">
                <span className="text-white">BIKER'S</span>
                <span className="text-biker-accent ml-2">WAY</span>
              </h2>
            </a>
            <p className="text-biker-silver mb-6">
              The ultimate platform for motorcycle enthusiasts seeking adventure and community on the open road.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-biker-silver hover:text-biker-accent transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-biker-silver hover:text-biker-accent transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-biker-silver hover:text-biker-accent transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-biker-silver hover:text-biker-accent transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'Features', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-biker-silver hover:text-biker-accent transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Resources</h3>
            <ul className="space-y-3">
              {['Riding Tips', 'Maintenance', 'Safety Guides', 'Route Maps', 'Gear Reviews'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-biker-silver hover:text-biker-accent transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Contact</h3>
            <address className="not-italic text-biker-silver space-y-3">
              <p>1234 Two Wheels Drive</p>
              <p>Motorcycle City, MC 56789</p>
              <a 
                href="mailto:info@bikersway.com"
                className="block text-biker-silver hover:text-biker-accent transition-colors duration-300"
              >
                info@bikersway.com
              </a>
              <a 
                href="tel:+11234567890"
                className="block text-biker-silver hover:text-biker-accent transition-colors duration-300"
              >
                +1 (123) 456-7890
              </a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-biker-gray mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-biker-silver text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Biker's Way. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-biker-silver hover:text-biker-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-biker-silver hover:text-biker-accent transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-biker-silver hover:text-biker-accent transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
