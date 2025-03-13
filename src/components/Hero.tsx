
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            
            // Ensure animation doesn't reset
            entry.target.addEventListener('animationend', () => {
              entry.target.classList.remove('opacity-0');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover h-full w-full opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-riding-motorcycles-33647-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 h-full flex flex-col items-center justify-center px-6 md:px-12 opacity-0 transition-opacity duration-1000">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <span className="inline-block py-2 px-4 rounded-sm text-xs md:text-sm tracking-widest uppercase bg-biker-accent text-white mb-8 animate-slide-down">
              The Ultimate Motorcycle Experience
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading mb-6 tracking-tight leading-tight animate-slide-up">
            FREEDOM ON <br />
            <span className="text-stroke">TWO WHEELS</span>
          </h1>
          <p className="text-xl md:text-2xl text-biker-silver max-w-2xl mx-auto mb-10 animate-slide-up">
            Join our passionate community of riders who live for the thrill of the open road and the perfect curve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <a 
              href="#join" 
              className="py-3 md:py-4 px-8 md:px-10 bg-biker-accent text-white rounded-sm text-base md:text-lg uppercase tracking-wider font-medium button-hover w-full sm:w-auto"
            >
              Join The Ride
            </a>
            <a 
              href="#gallery" 
              className="py-3 md:py-4 px-8 md:px-10 border border-white border-opacity-30 text-white rounded-sm text-base md:text-lg uppercase tracking-wider font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 w-full sm:w-auto"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={scrollToFeatures}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
