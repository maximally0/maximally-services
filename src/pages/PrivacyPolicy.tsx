
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const PrivacyPolicy = () => {
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
            <h1 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-4">PRIVACY POLICY</h1>
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
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">INTRODUCTION</h2>
                <p className="mb-4 text-gray-700">
                  Maximally ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
                </p>
                <p className="text-gray-700">
                  This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                </p>
              </section>
              
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">INFORMATION WE COLLECT</h2>
                <p className="mb-4 text-gray-700">
                  We collect several types of information from and about users of our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Personal information such as name, email address, and phone number when you contact us</li>
                  <li>Information about your internet connection, the equipment you use to access our website, and usage details</li>
                  <li>Non-personal identification information such as browser type, language preference, and time of visit</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">HOW WE USE YOUR INFORMATION</h2>
                <p className="mb-4 text-gray-700">
                  We use information that we collect about you or that you provide to us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To present our website and its contents to you</li>
                  <li>To provide you with information or services that you request from us</li>
                  <li>To fulfill any other purpose for which you provide it</li>
                  <li>To carry out our obligations and enforce our rights</li>
                  <li>To notify you about changes to our website or any products or services we offer</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-press-start text-xl mb-4 text-maximally-dark">CONTACT US</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us at hello@maximally.in.
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

export default PrivacyPolicy;
