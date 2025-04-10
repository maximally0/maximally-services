import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Mail, Phone, Instagram } from 'lucide-react';
const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
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
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <div className="min-h-screen bg-white">
      <Navbar />

      <motion.div className="pt-32 pb-20 px-6" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="container mx-auto max-w-4xl">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-4">GET IN TOUCH</h1>
            <p className="font-jetbrains text-gray-600 max-w-2xl mx-auto">
              Have questions about our services or want to work together? Reach out to us!
            </p>
          </motion.div>

          <motion.div className="bg-white minecraft-border p-10 text-center" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center p-6 border-2 border-maximally-dark bg-blue-50">
                <Mail size={48} className="text-maximally-blue mb-6" />
                <h2 className="font-press-start text-xl mb-3">EMAIL US</h2>
                <a href="mailto:hello@maximally.in" className="font-jetbrains text-lg contact-link">
                  hello@maximally.in
                </a>
              </div>

              <div className="flex flex-col items-center p-6 border-2 border-maximally-dark bg-red-50">
                <Phone size={48} className="text-maximally-red mb-6" />
                <h2 className="font-press-start text-xl mb-3">CALL US</h2>
                <a href="tel:+919041260790" className="font-jetbrains text-lg contact-link">
                  +91 9041260790
                </a>
              </div>

              <div className="flex flex-col items-center p-6 border-2 border-maximally-dark bg-purple-50">
                <Instagram size={48} className="text-purple-600 mb-6" />
                <h2 className="font-press-start text-xl mb-3">DM US</h2>
                <a href="https://www.instagram.com/maximally.in" target="_blank" rel="noopener noreferrer" className="font-jetbrains text-lg contact-link">
                  @maximally.in
                </a>
              </div>
            </div>

            <div className="mt-12 max-w-xl mx-auto">

            </div>
          </motion.div>
        </div>
      </motion.div>

      <FooterSection />
    </div>;
};
export default Contact;