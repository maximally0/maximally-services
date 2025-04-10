
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <motion.div 
        className="pt-32 pb-20 px-4 sm:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-8">Our Story</h1>
          
          <h2 className="font-press-start text-2xl mb-6 text-maximally-blue">🧠 From Idea to Impact — The Maximally Journey</h2>
          <p className="text-base leading-relaxed mb-8">
            Most teens were scrolling. Rishul was studying scrolls. Not history scrolls — Instagram scrolls. Marketing scrolls. Trend scrolls. Strategy scrolls.
          </p>
          <p className="text-base leading-relaxed mb-8">
            And what he saw?<br/><br/>
            A broken loop. Great brands were screaming into the void. Even promising products couldn't break through the noise. Agencies were stuck in cycles — overpriced retainers, cookie-cutter campaigns, and buzzwords without results.
          </p>
          <p className="text-base leading-relaxed mb-12">
            So, Rishul did what most wouldn't at 16.<br/>
            He said, "Let me fix this."<br/><br/>
            No VC funds. No big team. Just a teenager with a vision, Wi-Fi, and a dangerous level of ambition.
          </p>

          <h2 className="font-press-start text-2xl mb-6 text-maximally-red">⚡ Why Maximally?</h2>
          <p className="text-base leading-relaxed mb-8">
            Rishul didn't want to just "market."<br/>
            He wanted to white-market — with clarity, precision, and purpose.<br/>
            Just like clean code, he believed marketing should be elegant, understandable, and scalable.
          </p>
          <p className="text-base leading-relaxed mb-8">
            So he built Maximally — a next-gen marketing agency that combines creative instincts with operational clarity.
          </p>
          <p className="text-base leading-relaxed mb-8">
            We don't do jargon. We do impact.<br/>
            We don't run campaigns. We run movements.
          </p>
          <p className="text-base leading-relaxed mb-12">
            From growth hacks to full-stack content strategies, we help businesses go viral with structure, and scale with soul.
          </p>

          <h2 className="font-press-start text-2xl mb-6 text-maximally-blue">🧩 The Gap We're Filling</h2>
          <p className="text-base leading-relaxed mb-8">
            Most agencies either lack affordability or fail at personalization. Maximally bridges that:
          </p>
          <ul className="list-none space-y-4 mb-12">
            <li className="text-base leading-relaxed">• Gen Z instinct meets business IQ</li>
            <li className="text-base leading-relaxed">• Low on fluff, high on ROI</li>
            <li className="text-base leading-relaxed">• Tuned into culture, wired for conversion</li>
          </ul>
          <p className="text-base leading-relaxed mb-12">
            We're young — yeah.<br/>
            But our age is our edge. We grew up in the content economy. We understand scroll behavior better than any boomer-led agency ever could.
          </p>

          <h2 className="font-press-start text-2xl mb-6 text-maximally-red">👊 Our Vision</h2>
          <p className="text-base leading-relaxed mb-8">
            We're not just building a marketing agency.<br/>
            We're building a movement of mindful marketers who get results, not retweets.
          </p>
          <p className="text-base leading-relaxed mb-12">
            If you're building something bold — a product, a service, or a story worth sharing — let's make sure the world sees it.
          </p>

          <div className="text-center mt-16">
            <Button
              className="pixel-button bg-maximally-blue text-white px-8 py-4 font-press-start text-sm"
              onClick={() => window.location.href = '/contact'}
            >
              Join the Movement
            </Button>
          </div>
        </div>
      </motion.div>

      <FooterSection />
    </div>
  );
};

export default OurStory;
