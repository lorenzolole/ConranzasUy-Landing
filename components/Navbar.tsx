import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'El Sistema', href: '#features' },
  { name: 'Ingredientes', href: '#tech' },
  { name: 'Resultados', href: '#metrics' },
  { name: 'Testimonios', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacto', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter z-50 relative text-foreground">
          Cobranzas<span className="text-primary">Uy</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition-colors shadow-lg shadow-primary/20">
            Acceso Clientes
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-medium text-white hover:text-neutral-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-neutral-200 transition-colors mt-4">
              Acceso Clientes
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;