import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 border-maximally-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-press-start text-lg text-maximally-dark mr-1">MAX</span>
              <span className="font-press-start text-lg text-maximally-blue">IMALLY</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/blog" className="nav-link font-jetbrains text-sm font-medium">BLOG</a>
            <a href="/pricing" className="nav-link font-jetbrains text-sm font-medium">PRICING</a>
            <a href="/experimentalservices" className="nav-link font-jetbrains text-sm font-medium">EXPERIMENTAL</a>
            <a href="/contact" className="pixel-button bg-maximally-blue text-white font-jetbrains font-bold py-2 px-4 text-sm">
              <span className="relative z-10">CONTACT</span>
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-maximally-dark" />
            ) : (
              <Menu className="h-6 w-6 text-maximally-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-b-2 border-maximally-dark transition-all duration-300 ${isMobileMenuOpen ? 'max-h-60' : 'max-h-0 invisible'} overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="/blog" className="nav-link font-jetbrains text-sm font-medium py-2">BLOG</a>
          <a href="/pricing" className="nav-link font-jetbrains text-sm font-medium py-2">PRICING</a>
          <a href="/experimentalservices" className="nav-link font-jetbrains text-sm font-medium py-2">EXPERIMENTAL</a>
          <a href="/contact" className="pixel-button bg-maximally-blue text-white font-jetbrains font-bold py-2 px-4 text-sm inline-block">
            <span className="relative z-10">CONTACT</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
