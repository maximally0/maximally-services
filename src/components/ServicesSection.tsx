
import React, { useState } from 'react';
import { Brain, TrendingUp, Megaphone, Database, Target, BarChart3 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="pixel-card p-6 h-full bg-white text-black transform hover:-translate-y-2 transition-transform duration-300 hover:bg-maximally-dark hover:text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mb-4 w-16 h-16 flex items-center justify-center ${color} transition-all duration-300`}>
        <div className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {icon}
        </div>
      </div>
      <h3 className="font-press-start text-sm md:text-base text-maximally-dark mb-4">{title}</h3>
      <p className="font-jetbrains text-sm text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "AI STRATEGY",
      description: "Custom AI marketing strategies tailored to your business goals and target audience.",
      icon: <Brain size={32} className="text-white" />,
      color: "bg-maximally-blue"
    },
    {
      title: "SEO OPTIMIZATION",
      description: "Data-driven SEO that puts you at the top of search results with our AI algorithms.",
      icon: <TrendingUp size={32} className="text-white" />,
      color: "bg-maximally-dark"
    },
    {
      title: "CONTENT CREATION",
      description: "AI-powered content that resonates with your audience and drives engagement.",
      icon: <Megaphone size={32} className="text-white" />,
      color: "bg-maximally-red"
    },
    {
      title: "DATA ANALYTICS",
      description: "Advanced analytics that turn raw data into actionable marketing insights.",
      icon: <Database size={32} className="text-white" />,
      color: "bg-maximally-blue"
    },
    {
      title: "TARGETED ADS",
      description: "Precision-targeted advertising campaigns that maximize your ROI.",
      icon: <Target size={32} className="text-white" />,
      color: "bg-maximally-red"
    },
    {
      title: "PERFORMANCE TRACKING",
      description: "Real-time performance monitoring and optimization for continuous improvement.",
      icon: <BarChart3 size={32} className="text-white" />,
      color: "bg-maximally-dark"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-4">OUR SERVICES</h2>
          <p className="font-jetbrains text-gray-600 max-w-2xl mx-auto">
            Level up your digital marketing with our pixel-perfect AI-powered services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
      
      <div className="pixel-divider w-full mt-20"></div>
    </section>
  );
};

export default ServicesSection;
