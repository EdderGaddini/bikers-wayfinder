
import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-16 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Intro */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-6">
              <Scale className="h-6 w-6 text-amber-600 mr-2" />
              <h2 className="text-2xl font-bold font-heading tracking-wider">
                <span className="text-white">SOARES</span>
                <span className="text-amber-600 ml-2">ADVOCACIA</span>
              </h2>
            </a>
            <p className="text-slate-400 mb-6">
              Advocacia especializada com foco em resultados e comprometimento com os interesses do cliente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Navegação</h3>
            <ul className="space-y-3">
              {['Home', 'Serviços', 'Áreas', 'Sobre', 'Contato'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${index === 0 ? 'home' : index === 1 ? 'features' : index === 2 ? 'gallery' : index === 3 ? 'about' : 'contact'}`}
                    className="text-slate-400 hover:text-amber-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Áreas de Atuação */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Áreas de Atuação</h3>
            <ul className="space-y-3">
              {['Direito Civil', 'Direito de Família', 'Direito do Trabalho', 'Direito Empresarial', 'Contratos', 'Direito Imobiliário'].map((item) => (
                <li key={item}>
                  <a 
                    href="#gallery" 
                    className="text-slate-400 hover:text-amber-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Contato</h3>
            <address className="not-italic text-slate-400 space-y-3">
              <p>Av. Paulista, 1000, Conjunto 501</p>
              <p>São Paulo, SP 01310-100</p>
              <a 
                href="mailto:contato@soaresadvocacia.com"
                className="block text-slate-400 hover:text-amber-600 transition-colors duration-300"
              >
                contato@soaresadvocacia.com
              </a>
              <a 
                href="tel:+551133334444"
                className="block text-slate-400 hover:text-amber-600 transition-colors duration-300"
              >
                +55 (11) 3333-4444
              </a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Soares Advocacia. OAB/SP 123.456. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
