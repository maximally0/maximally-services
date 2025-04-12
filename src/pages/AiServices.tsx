
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Zap, Bot, Brain, Cog, Clock, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const services = [
  {
    title: "AI Readiness Audit",
    price: { usd: "$199", inr: "₹16,500" },
    description: "Find out how ready your biz is to use AI. No fluff. Just clarity.",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Custom Chatbot Development",
    price: { usd: "$599+", inr: "₹49,500+" },
    description: "We build AI bots that talk like humans and convert like beasts.",
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "LLM Integration & Fine-Tuning",
    price: { usd: "$1999+", inr: "₹1.65L+" },
    description: "Plug GPT-like power directly into your systems — tailored to your use case.",
    icon: <Cog className="w-6 h-6" />
  },
  {
    title: "Automation Modules",
    price: { usd: "$999+", inr: "₹82,500+" },
    description: "Let AI do the boring stuff. From lead gen to internal ops.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "AI Strategy Session",
    price: { usd: "$129", inr: "₹10,800" },
    description: "Sit down with our AI nerds. Get a plan you can execute tomorrow.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Full-Stack AI Setup",
    price: { usd: "$4999+", inr: "₹4.15L+" },
    description: "Done-for-you automation + integration + optimization. Go full Iron Man.",
    icon: <Rocket className="w-6 h-6" />
  }
];

export default function AiServices() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Services | Maximally"
        description="Explore our cutting-edge AI services — from chatbots to full automation systems. Built for those ready to move fast."
      />
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 pt-32 pb-16 text-center"
      >
        <div className="relative inline-block">
          <Badge 
            variant="outline" 
            className="absolute -top-8 left-1/2 -translate-x-1/2 border-maximally-blue text-maximally-blue minecraft-border"
          >
            Experimental – Early Access
          </Badge>
          <h1 className="font-press-start text-4xl md:text-5xl text-maximally-dark mb-6">
            AI x Growth.<br/>
            <span className="text-maximally-blue">Experimental.</span><br/>
            <span className="text-maximally-red">Legendary.</span>
          </h1>
        </div>
        <p className="font-jetbrains text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
          Explore our cutting-edge AI services — from chatbots to full automation systems. Built for those ready to move fast.
        </p>
        <Button 
          className="minecraft-border bg-maximally-blue hover:bg-maximally-dark text-white px-8 py-6 text-lg font-jetbrains"
          onClick={() => window.location.href = '/contact'}
        >
          Book Strategy Call
        </Button>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="pixel-card p-6">
                <div className="mb-4 text-maximally-blue">{service.icon}</div>
                <h3 className="font-press-start text-xl mb-2">{service.title}</h3>
                <p className="font-jetbrains mb-4">{service.description}</p>
                <div className="font-jetbrains text-maximally-blue font-bold">
                  {service.price.usd} / {service.price.inr}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Bottom CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="font-press-start text-2xl md:text-3xl mb-8 text-maximally-dark">Still not sure what fits? Let's talk.</h2>
        <Button 
          className="minecraft-border bg-maximally-red hover:bg-maximally-dark text-white px-8 py-6 text-lg font-jetbrains"
          onClick={() => window.location.href = '/contact'}
        >
          Book a Free AI Consult
        </Button>
      </motion.section>

      <FooterSection />
    </div>
  );
}
