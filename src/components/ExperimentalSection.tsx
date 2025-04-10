import React from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

const services = [
  {
    title: "Interactive Quiz Funnels",
    description: "We build Buzzfeed-style quizzes that feel native and boost engagement. Perfect for supplements, SaaS, and lead gen.",
    tagline: "Convert curiosity into conversions."
  },
  {
    title: "Owned Media Launchpads",
    description: "We help brands become mini-media empires through niche blogs, newsletters, or podcasts. Long-term trust > short-term ads.",
    tagline: "Be the authority, not just the ad."
  },
  {
    title: "Lifecycle & Retention Systems",
    description: "Post-sale automation through WhatsApp, email, and CRM that brings customers back — again and again.",
    tagline: "We don't just help you get customers. We help you keep them."
  },
  {
    title: "Domain-Specific UGC",
    description: "Influencer marketing, but make it smart. We get real experts — doctors, coaches, consultants — to talk about your brand.",
    tagline: "Because trust sells better than TikTok trends."
  },
  {
    title: "Micro-Community Creation",
    description: "We help brands build small, focused WhatsApp or Discord groups of super fans and early adopters — insane for engagement and retention.",
    tagline: "Build your own cult. In a good way."
  },
  {
    title: "Landing Page-Only Funnels",
    description: "No full website? No problem. We create laser-focused landing pages with psychological copy and proven conversion systems.",
    tagline: "One page. All gas, no friction."
  },
  {
    title: "Conversational Lead Capture",
    description: "Replace your boring forms with chatbot-style interactive flows to capture leads in a more human, engaging way.",
    tagline: "Talk, don't type. Convert better."
  },
  {
    title: "Dark Social Content Strategy",
    description: "We create content designed to be shared in DMs, private groups, and communities — where trust is highest.",
    tagline: "We market where the algorithm can't follow."
  }
];

const ExperimentalSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-press-start text-maximally-dark text-center mb-6">
          Experimental Services
        </h2>

        <p className="text-gray-800 text-center max-w-3xl mx-auto mb-16 font-jetbrains">
          These aren't your average agency offerings. We're experimenting with unconventional, high-leverage strategies that most people aren't even talking about yet. Since we're testing them in the wild, we don't charge for the marketing execution — just enough to cover costs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`pixel-card p-6 ${index % 3 === 0 ? 'border-maximally-blue' : index % 3 === 1 ? 'border-maximally-red' : 'border-maximally-dark'}`}>
              <h3 className="font-press-start text-lg mb-4">{service.title}</h3>
              <p className="text-gray-800 mb-4">{service.description}</p>
              <p className="font-bold text-maximally-blue">{service.tagline}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="pixel-button bg-maximally-blue text-white px-8 py-4 font-press-start text-sm"
            onClick={() => window.location.href = '/contact'}
          >
            <Mail className="mr-2 h-4 w-4" />
            Want In? Let's Talk
          </Button>
          <p className="mt-6 text-sm text-gray-600 font-jetbrains">
            Experimental services are offered at cost. Limited slots available each month.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperimentalSection;