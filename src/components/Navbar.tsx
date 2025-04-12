import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import PixelLogo from './PixelLogo';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
      scrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <PixelLogo />
          <span className="font-press-start text-maximally-dark text-sm md:text-base group-hover:animate-pixel-shift">MAXIMALLY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          <NavLink to="/pricing">Our Services</NavLink>
          <NavLink to="/ai-services">AI Services</NavLink> {/* Added AI Services link */}
          <NavLink to="/experimentalservices">Experimental</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          {location.pathname === '/' ? (
            <>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Results</NavLink>
            </>
          ) : null}
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 minecraft-border bg-white hover:bg-maximally-blue hover:text-white transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-maximally-dark border-opacity-10 shadow-lg">
            <div className="flex flex-col items-center py-4">
              <NavLink to="/pricing" mobile onClick={() => setIsOpen(false)}>Our Services</NavLink>
              <NavLink to="/ai-services" mobile onClick={() => setIsOpen(false)}>AI Services</NavLink> {/* Added AI Services link */}
              <NavLink to="/experimentalservices" mobile onClick={() => setIsOpen(false)}>Experimental</NavLink>
              {location.pathname === '/' ? (
                <>
                  <NavLink href="#features" mobile onClick={() => setIsOpen(false)}>Features</NavLink>
                  <NavLink href="#testimonials" mobile onClick={() => setIsOpen(false)}>Results</NavLink>
                </>
              ) : null}
              <NavLink to="/contact" mobile onClick={() => setIsOpen(false)}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href?: string;
  to?: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, to, children, mobile, onClick }: NavLinkProps) => {
  if (to) {
    return (
      <Link 
        to={to} 
        onClick={onClick}
        className={cn(
          "font-jetbrains font-medium nav-link relative transition-colors",
          "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0",
          "after:bg-maximally-blue after:transition-all after:duration-300 hover:after:w-full",
          mobile ? "py-3 text-maximally-dark" : "text-maximally-dark"
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <a 
      href={href} 
      onClick={onClick}
      className={cn(
        "font-jetbrains font-medium nav-link relative transition-colors",
        "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0",
        "after:bg-maximally-blue after:transition-all after:duration-300 hover:after:w-full",
        mobile ? "py-3 text-maximally-dark" : "text-maximally-dark"
      )}
    >
      {children}
    </a>
  );
};

export default Navbar;