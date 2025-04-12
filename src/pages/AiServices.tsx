
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Card } from '@/components/ui/card';
import { Zap, Bot, Brain, Cog, Clock, Rocket } from 'lucide-react';

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
    <div className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 pt-24 pb-16 text-center"
      >
        <div className="relative inline-block">
          <Badge 
            variant="outline" 
            className="absolute -top-8 left-1/2 -translate-x-1/2 border-blue-500 text-blue-500 animate-pulse"
          >
            Experimental – Early Access
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
            AI x Growth. Experimental. Legendary.
          </h1>
        </div>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Explore our cutting-edge AI services — from chatbots to full automation systems. Built for those ready to move fast.
        </p>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 text-white px-8 py-6 text-lg"
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
              <Card className="p-6 bg-gray-900 border-blue-500/20 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <div className="mb-4 text-blue-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-blue-500 font-bold">
                  {service.price.usd} / {service.price.inr}
                </div>
              </Card>
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
        <h2 className="text-2xl md:text-3xl mb-8">Still not sure what fits? Let's talk.</h2>
        <Button 
          className="bg-red-600 hover:bg-red-700 transition-all hover:scale-105 text-white px-8 py-6 text-lg"
          onClick={() => window.location.href = '/contact'}
        >
          Book a Free AI Consult
        </Button>
      </motion.section>

      <FooterSection />
    </div>
  );
}
