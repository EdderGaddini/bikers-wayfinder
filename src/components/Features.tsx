
import React, { useEffect, useRef } from 'react';
import { Scale, BookOpen, FileText, Briefcase } from 'lucide-react';

const features = [
  {
    title: "Consulta Jurídica",
    description: "Orientação especializada para entender seus direitos e opções legais, com análise detalhada do seu caso.",
    icon: <Scale className="h-12 w-12 text-amber-600" />,
    delay: "0"
  },
  {
    title: "Representação Legal",
    description: "Defesa dos seus interesses em todas as instâncias judiciais, com estratégias personalizadas para cada caso.",
    icon: <Briefcase className="h-12 w-12 text-amber-600" />,
    delay: "150"
  },
  {
    title: "Análise de Contratos",
    description: "Revisão detalhada de documentos legais para garantir seus direitos e evitar problemas futuros.",
    icon: <FileText className="h-12 w-12 text-amber-600" />,
    delay: "300"
  },
  {
    title: "Assessoria Jurídica",
    description: "Consultoria contínua para prevenir problemas legais e orientar decisões importantes com segurança jurídica.",
    icon: <BookOpen className="h-12 w-12 text-amber-600" />,
    delay: "450"
  }
];

const FeatureCard = ({ title, description, icon, delay }: { title: string; description: string; icon: React.ReactNode; delay: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-up');
              entry.target.classList.remove('opacity-0');
              entry.target.classList.remove('translate-y-10');
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={cardRef} className="bg-slate-800 p-8 rounded-sm border border-slate-700 hover:border-amber-600 transition-all duration-300 opacity-0 translate-y-10">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold font-heading mb-4">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

const Features = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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

    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (subtitleRef.current) {
        observer.unobserve(subtitleRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-900 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="section-title text-center opacity-0 translate-y-10">
          Serviços <span className="text-amber-600">Jurídicos</span>
        </h2>
        <p ref={subtitleRef} className="section-subtitle text-center opacity-0 translate-y-10">
          Soluções legais personalizadas e eficientes para proteger seus direitos e interesses.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
