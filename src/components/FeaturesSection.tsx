import React, { useEffect, useRef, useState } from 'react';
import { Zap, Cpu, Shield, BarChart, Clock, Globe } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Feature = ({ title, description, icon, delay }: FeatureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={featureRef}
      className={`flex flex-col items-center text-center transition-all duration-700 transform feature-item ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="w-16 h-16 minecraft-border bg-white flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-press-start text-sm md:text-base text-maximally-dark mb-3">{title}</h3>
      <p className="font-jetbrains text-sm text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "LIGHTNING FAST",
      description: "Our AI algorithms work at the speed of thought, delivering results when you need them.",
      icon: <Zap size={32} className="text-maximally-blue" />,
      delay: 0
    },
    {
      title: "AI POWERED",
      description: "Advanced machine learning that adapts to your market and audience in real-time.",
      icon: <Cpu size={32} className="text-maximally-red" />,
      delay: 100
    },
    {
      title: "SECURE DATA",
      description: "Enterprise-grade security protecting your valuable marketing data at all times.",
      icon: <Shield size={32} className="text-maximally-dark" />,
      delay: 200
    },
    {
      title: "ACTIONABLE INSIGHTS",
      description: "Clear, data-driven insights that guide your marketing decisions with confidence.",
      icon: <BarChart size={32} className="text-maximally-blue" />,
      delay: 300
    },
    {
      title: "24/7 OPTIMIZATION",
      description: "Continuous optimization that never sleeps, ensuring peak performance around the clock.",
      icon: <Clock size={32} className="text-maximally-red" />,
      delay: 400
    },
    {
      title: "GLOBAL REACH",
      description: "Marketing strategies that work across borders, languages, and cultural contexts.",
      icon: <Globe size={32} className="text-maximally-dark" />,
      delay: 500
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-4">WHY CHOOSE US</h2>
          <p className="font-jetbrains text-gray-600 max-w-2xl mx-auto">
            We combine pixel-perfect aesthetics with AI-powered performance to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>

      <div className="pixel-divider w-full mt-20"></div>
    </section>
  );
};

export default FeaturesSection;