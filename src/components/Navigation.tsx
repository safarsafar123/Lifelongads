import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Approach', path: '/approach' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12",
      scrolled ? "bg-secondary/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Lifelong Ads" 
            className={cn(
              "h-24 md:h-36 w-auto transition-all duration-500",
              scrolled ? "brightness-0" : "brightness-100" 
            )} 
            onError={(e) => {
              // Fallback to text if image is missing
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className={cn(
            "hidden text-2xl font-serif font-bold tracking-tighter transition-colors",
            scrolled ? "text-primary" : "text-secondary"
          )}>
            LIFELONG<span className="text-accent">ADS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-widest uppercase transition-all hover:text-accent relative group",
                location.pathname === link.path ? "text-accent" : (scrolled ? "text-primary/80" : "text-secondary/80")
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                location.pathname === link.path ? "w-full" : "w-0"
              )} />
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-accent hover:bg-accent-light text-primary px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-sm"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("lg:hidden", scrolled ? "text-primary" : "text-secondary")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary text-secondary p-8 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-serif tracking-wide",
                  location.pathname === link.path ? "text-accent" : "text-secondary/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-accent text-primary text-center py-4 font-bold uppercase tracking-widest mt-4"
            >
              Start Your Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-secondary pt-20 pb-10 px-6 md:px-12 border-t border-accent/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <img 
              src="/logo.png" 
              alt="Lifelong Ads" 
              className="h-40 md:h-56 w-auto brightness-100" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-3xl font-serif font-bold tracking-tighter">
              LIFELONG<span className="text-accent">ADS</span>
            </span>
          </Link>
          <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">
            A premium Dubai-based media and advertising house creating visually striking, emotionally engaging, and commercially effective brand experiences.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/lifelongads.media" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/1CX8qbEmqT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.linkedin.com/company/lifelongads/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.tiktok.com/@lifelongads" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-secondary/70">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
            <li><Link to="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
            <li><Link to="/catalogue" className="hover:text-accent transition-colors">Catalogue</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-secondary/70">
            <li><Link to="/services" className="hover:text-accent transition-colors">Cinematic Production</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Brand Identity</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Digital Marketing</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Performance Ads</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-accent font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-secondary/70">
            <li>Dubai, UAE</li>
            <li><a href="tel:+971547798628" className="hover:text-accent transition-colors">+971 547798628</a></li>
            <li><a href="mailto:marketing@lifelongads.com" className="hover:text-accent transition-colors">marketing@lifelongads.com</a></li>
            <li className="pt-4">
              <a 
                href="https://wa.me/971547798628" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-accent-light transition-all"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-secondary/40">
        <p>© {new Date().getFullYear()} Lifelong Ads. All Rights Reserved.</p>
        <p>The Brand Memory Makers</p>
      </div>
    </footer>
  );
};
