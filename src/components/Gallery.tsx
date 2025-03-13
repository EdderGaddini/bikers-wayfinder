
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '@/lib/animations';
import { Skeleton } from '@/components/ui/skeleton';

const images = [
  {
    src: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Motorcycle on coastal road",
    delay: "0"
  },
  {
    src: "https://images.unsplash.com/photo-1546484475-7cb46cdf9b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Motorcycle in mountains",
    delay: "150"
  },
  {
    src: "https://images.unsplash.com/photo-1623602435340-344e5fee5d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Sport motorcycle",
    delay: "300"
  },
  {
    src: "https://images.unsplash.com/photo-1625047509252-ab38fb45ad3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Motorcycle on desert road",
    delay: "450"
  },
  {
    src: "https://images.unsplash.com/photo-1508357710528-af67c8d8c0f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Classic motorcycle",
    delay: "600"
  },
  {
    src: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    alt: "Motorcycles parked",
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
    <section id="gallery" className="py-20 md:py-28 bg-biker-black px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="section-title text-center opacity-0 translate-y-10">
          Capture The <span className="text-biker-accent">Moment</span>
        </h2>
        <p ref={subtitleRef} className="section-subtitle text-center opacity-0 translate-y-10">
          Stunning visuals from our community of passionate riders on their unforgettable journeys.
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
