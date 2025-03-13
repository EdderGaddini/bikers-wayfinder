
import React, { useState, useRef, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been added to our newsletter.",
      });
    }, 1500);
  };

  return (
    <section 
      id="join" 
      ref={sectionRef}
      className="py-24 md:py-32 parallax-section bg-biker-dark opacity-0 translate-y-10 px-6 md:px-8 lg:px-12"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1600674430563-8571519c44d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block py-2 px-4 rounded-sm text-xs md:text-sm tracking-widest uppercase bg-biker-accent text-white mb-6">
          Join The Community
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
          Get Updates On The Latest Rides And Events
        </h2>
        <p className="text-lg md:text-xl text-biker-silver max-w-2xl mx-auto mb-10">
          Sign up for our newsletter to stay informed about upcoming events, new routes, and exclusive content for motorcycle enthusiasts.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow py-3 px-4 bg-black bg-opacity-50 border border-biker-gray focus:border-biker-accent rounded-sm text-white placeholder-biker-silver outline-none transition-colors duration-300"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 px-8 bg-biker-accent text-white rounded-sm text-base uppercase tracking-wider font-medium button-hover disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
