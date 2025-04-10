
import React from 'react';
import { Mail, MessageSquare, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import PixelLogo from './PixelLogo';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
    { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
    { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-maximally-dark text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <PixelLogo />
              <span className="font-press-start text-white text-base">MAXIMALLY</span>
            </div>
            <p className="font-jetbrains text-gray-300 mb-6">
              Pixel-perfect, AI-powered digital marketing solutions for the modern age.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-maximally-dark transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Contact */}
          <div>
            <h3 className="font-press-start text-sm mb-6">CONTACT US</h3>
            <ul className="space-y-4 font-jetbrains">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-maximally-blue" />
                <a href="mailto:hello@maximally.in" className="text-gray-300 hover:text-white">hello@maximally.in</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={16} className="text-maximally-red" />
                <a href="tel:+919041260790" className="text-gray-300 hover:text-white">+91 9041260790</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="font-press-start text-sm mb-6">QUICK LINKS</h3>
            <ul className="space-y-3 font-jetbrains">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center font-jetbrains text-gray-400 text-sm">
          © {new Date().getFullYear()} Maximally. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
