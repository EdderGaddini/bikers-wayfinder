
import React, { useEffect, useRef } from 'react';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="section-title text-center opacity-0 translate-y-10">
          Sobre <span className="text-amber-600">Mim</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <div 
            ref={imageRef} 
            className="relative h-[400px] lg:h-full rounded-sm overflow-hidden opacity-0 translate-y-10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Dr. Roberto Soares" 
              className="object-cover h-full w-full"
            />
          </div>
          
          <div ref={textRef} className="flex flex-col justify-center opacity-0 translate-y-10">
            <p className="text-slate-300 text-lg mb-6">
              Com mais de 15 anos de experiência, sou especialista em diversas áreas do Direito, dedicando minha carreira à defesa dos direitos e interesses dos meus clientes com ética e profissionalismo.
            </p>
            <p className="text-slate-300 text-lg mb-6">
              Formado pela Universidade de São Paulo (USP), com mestrado em Direito Civil pela PUC e especialização em Direito Empresarial, trago uma sólida formação acadêmica complementada por vasta experiência prática.
            </p>
            <p className="text-slate-300 text-lg mb-6">
              Meu compromisso é oferecer atendimento personalizado, com comunicação clara e objetiva, mantendo os clientes informados em todas as etapas do processo e desenvolvendo estratégias eficazes para cada caso.
            </p>
            <p className="text-slate-300 text-lg">
              Acredito que a relação advogado-cliente deve ser baseada na confiança e transparência, por isso trabalho incansavelmente para alcançar os melhores resultados possíveis, sempre respeitando os princípios éticos da advocacia.
            </p>
            
            <div className="mt-8">
              <a 
                href="#join" 
                className="inline-block py-3 px-8 bg-amber-700 text-white rounded-sm text-base uppercase tracking-wider font-medium hover:bg-amber-800 transition-colors"
              >
                Agende uma Consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
