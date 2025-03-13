
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '@/lib/animations';
import { Skeleton } from '@/components/ui/skeleton';

const images = [
  {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Direito Civil",
    delay: "0"
  },
  {
    src: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Direito de Família",
    delay: "150"
  },
  {
    src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Direito do Trabalho",
    delay: "300"
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Direito Empresarial",
    delay: "450"
  },
  {
    src: "https://images.unsplash.com/photo-1607360195009-fa4d1a1b7cdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Contratos",
    delay: "600"
  },
  {
    src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    alt: "Direito Imobiliário",
    delay: "750"
  }
];

const GalleryImage = ({ src, alt, delay }: { src: string; alt: string; delay: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isInView } = useInView(0.1);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const element = ref.current;
        if (element) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      }, parseInt(delay));
      
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, ref]);

  return (
    <div 
      ref={ref} 
      className="relative overflow-hidden rounded-sm opacity-0 group aspect-[4/3]"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
        <span className="text-white font-medium">{alt}</span>
      </div>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 bg-gray-800" />
      )}
      <div className="h-full w-full overflow-hidden">
        <img 
          src={src} 
          alt={alt} 
          className="object-cover h-full w-full transition-transform duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};

const Gallery = () => {
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
            
            // Ensure animation doesn't reset
            entry.target.addEventListener('animationend', () => {
              entry.target.classList.remove('opacity-0');
              entry.target.classList.remove('translate-y-10');
            }, { once: true });
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
    <section id="gallery" className="py-20 md:py-28 bg-slate-900 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="section-title text-center opacity-0 translate-y-10">
          Áreas de <span className="text-amber-600">Atuação</span>
        </h2>
        <p ref={subtitleRef} className="section-subtitle text-center opacity-0 translate-y-10">
          Experiência jurídica diversificada em várias áreas do direito para atender suas necessidades específicas.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
