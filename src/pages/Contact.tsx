
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'info'
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="text-maximally-blue" size={24} />,
      title: 'Email',
      details: 'hello@maximally.in',
      action: 'mailto:hello@maximally.in',
      color: 'bg-blue-50'
    },
    {
      icon: <Phone className="text-maximally-red" size={24} />,
      title: 'Phone',
      details: '+91 9041260790',
      action: 'tel:+919041260790',
      color: 'bg-red-50'
    },
    {
      icon: <MapPin className="text-maximally-dark" size={24} />,
      title: 'Office',
      details: 'Bangalore, India',
      action: 'https://maps.google.com/?q=Bangalore,India',
      color: 'bg-gray-50'
    }
  ];

  // Animation variants
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
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h1 className="font-press-start text-3xl md:text-4xl text-maximally-dark mb-4">GET IN TOUCH</h1>
            <p className="font-jetbrains text-gray-600 max-w-2xl mx-auto">
              Have questions about our services or want to work together? Reach out and let's make something amazing!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Methods - Left Side */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              variants={itemVariants}
            >
              <div className="pixel-card p-8">
                <h2 className="font-press-start text-xl mb-6">CONTACT INFO</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.action}
                      className={`flex items-center p-4 ${method.color} border-2 border-maximally-dark hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="mr-4">{method.icon}</div>
                      <div>
                        <h3 className="font-jetbrains font-bold">{method.title}</h3>
                        <p className="font-jetbrains text-gray-700">{method.details}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="pixel-card p-8"
                variants={itemVariants}
              >
                <h2 className="font-press-start text-xl mb-6">OFFICE HOURS</h2>
                <ul className="space-y-4 font-jetbrains">
                  <li className="flex justify-between">
                    <span className="font-bold">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-bold">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-bold">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            {/* Message Form - Right Side */}
            <motion.div 
              className="lg:col-span-3"
              variants={itemVariants}
            >
              <div className="pixel-card p-8 bg-white">
                <h2 className="font-press-start text-xl mb-6">SEND A MESSAGE</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-jetbrains font-bold mb-2">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full border-2 border-maximally-dark p-3 font-jetbrains"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-jetbrains font-bold mb-2">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full border-2 border-maximally-dark p-3 font-jetbrains"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-jetbrains font-bold mb-2">Your Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full border-2 border-maximally-dark p-3 font-jetbrains resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="pixel-button bg-maximally-blue text-white font-jetbrains font-bold py-3 px-6 w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                    <Send size={16} className="relative z-10" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
          
          {/* Map Section */}
          <motion.div 
            className="mt-16"
            variants={itemVariants}
          >
            <div className="pixel-card p-0 overflow-hidden">
              <div className="bg-maximally-blue text-white py-4 px-6 font-press-start text-center">
                FIND US HERE
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713803646895!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Maximally Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <FooterSection />
    </div>
  );
};

export default Contact;
