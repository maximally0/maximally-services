
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const TermsOfService = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <motion.div 
        className="pt-32 pb-20 px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h1 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-4">TERMS OF SERVICE</h1>
            <p className="font-jetbrains text-gray-600 max-w-2xl mx-auto">
              Last updated: April 10, 2025
            </p>
          </motion.div>
          
          <motion.div 
            className="minecraft-border bg-white p-8"
            variants={itemVariants}
          >
            <div className="space-y-8 font-jetbrains">
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">AGREEMENT TO TERMS</h2>
                <p className="mb-4 text-gray-700">
                  These Terms of Service constitute a legally binding agreement made between you and Maximally concerning your access to and use of our website and services.
                </p>
                <p className="text-gray-700">
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our services.
                </p>
              </section>
              
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">SERVICES</h2>
                <p className="mb-4 text-gray-700">
                  Maximally provides digital marketing services including but not limited to website design, social media management, content creation, SEO optimization, and digital advertising.
                </p>
                <p className="text-gray-700">
                  Services are provided on an as-is basis. We reserve the right to modify, suspend or discontinue any part of our services at any time without prior notice.
                </p>
              </section>
              
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">INTELLECTUAL PROPERTY</h2>
                <p className="mb-4 text-gray-700">
                  Our website and its entire contents, features, and functionality are owned by Maximally and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or use for any commercial purpose the content of this website without prior written consent from us.
                </p>
              </section>
              
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">LIMITATION OF LIABILITY</h2>
                <p className="mb-4 text-gray-700">
                  In no event shall Maximally be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of, or in any way connected with, your use of our services.
                </p>
              </section>
              
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">GOVERNING LAW</h2>
                <p className="mb-4 text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
                </p>
              </section>
              
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">CONTACT US</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at hello@maximally.in.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <FooterSection />
    </div>
  );
};

export default TermsOfService;
