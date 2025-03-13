
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
    <section id="about" className="py-20 md:py-28 bg-black px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="section-title text-center opacity-0 translate-y-10">
          Our <span className="text-biker-accent">Story</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          <div 
            ref={imageRef} 
            className="relative h-[400px] lg:h-full rounded-sm overflow-hidden opacity-0 translate-y-10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1571188654248-7a89213915f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Biker's Way founding team" 
              className="object-cover h-full w-full"
            />
          </div>
          
          <div ref={textRef} className="flex flex-col justify-center opacity-0 translate-y-10">
            <p className="text-biker-silver text-lg mb-6">
              Founded in 2023 by a group of passionate riders, Biker's Way began with a simple mission: to create the ultimate platform for motorcycle enthusiasts who live for the thrill of the open road.
            </p>
            <p className="text-biker-silver text-lg mb-6">
              What started as weekend rides with friends has evolved into a global community of like-minded individuals who share a common passion for motorcycles and the freedom they represent.
            </p>
            <p className="text-biker-silver text-lg mb-6">
              We believe that every ride tells a story, and every road holds an adventure. Our platform is built to help riders discover new routes, connect with fellow enthusiasts, and make the most of their two-wheeled journeys.
            </p>
            <p className="text-biker-silver text-lg">
              Whether you're a seasoned rider with decades of experience or just getting started with your first motorcycle, Biker's Way welcomes you to join our community and be part of our growing story.
            </p>
            
            <div className="mt-8">
              <a 
                href="#join" 
                className="inline-block py-3 px-8 bg-biker-accent text-white rounded-sm text-base uppercase tracking-wider font-medium button-hover"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
