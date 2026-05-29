import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/produits' },
    { name: 'A Propos', path: '/#apropos' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-black tracking-tight">Ecommerce Furniture</span>
              <span className="text-[var(--gold)] ml-1">MEUBLES</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-black hover:text-[var(--gold)] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-black text-black hover:bg-black hover:text-white"
              type="button"
            >
              <a href="tel:+212600000000">
                <Phone className="mr-2 h-4 w-4" />
                Appeler
              </a>
            </Button>
            <Button asChild size="sm" className="bg-[var(--gold)] text-black hover:bg-[var(--gold-dark)]" type="button">
              <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black hover:text-[var(--gold)] transition-colors"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 text-black hover:text-[var(--gold)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Button asChild variant="outline" className="w-full border-black text-black" type="button">
                  <a href="tel:+212600000000" className="block">
                    <Phone className="mr-2 h-4 w-4" />
                    Appeler
                  </a>
                </Button>
                <Button asChild className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-dark)]" type="button">
                  <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="block">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
