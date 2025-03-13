
import React, { useEffect, useRef } from 'react';
import { Route, Compass, Users, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "Epic Rides",
    description: "Discover carefully curated routes that showcase the most breathtaking landscapes and exhilarating roads.",
    icon: <Route className="h-12 w-12 text-biker-accent" />,
    delay: "0"
  },
  {
    title: "Expert Guidance",
    description: "Access riding tips, maintenance guides, and expert advice from seasoned motorcyclists in our community.",
    icon: <Compass className="h-12 w-12 text-biker-accent" />,
    delay: "150"
  },
  {
    title: "Vibrant Community",
    description: "Connect with fellow riders who share your passion, join group rides, and exchange stories from the road.",
    icon: <Users className="h-12 w-12 text-biker-accent" />,
    delay: "300"
  },
  {
    title: "Safety First",
    description: "Learn best practices for safe riding, get gear recommendations, and stay informed on motorcycle safety.",
    icon: <ShieldCheck className="h-12 w-12 text-biker-accent" />,
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
    <div ref={cardRef} className="bg-biker-dark p-8 rounded-sm border border-biker-gray hover:border-biker-accent transition-all duration-300 card-hover opacity-0 translate-y-10">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold font-heading mb-4">{title}</h3>
      <p className="text-biker-silver">{description}</p>
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
    <section id="features" className="py-20 md:py-28 bg-black px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="section-title text-center opacity-0 translate-y-10">
          Why Riders Choose <span className="text-biker-accent">Us</span>
        </h2>
        <p ref={subtitleRef} className="section-subtitle text-center opacity-0 translate-y-10">
          We're building more than just a platform - we're creating a movement for riders who demand the best experiences on two wheels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
