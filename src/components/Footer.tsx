import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-white">AMINE</span>
              <span className="text-[var(--gold)] ml-1">MEUBLES</span>
            </div>
            <p className="text-gray-400 mb-4">
              Votre destination pour des meubles modernes et luxueux, alliant qualite, confort et
              design exceptionnel.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[var(--gold)]">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/studio" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/#apropos" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                  A Propos
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[var(--gold)]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+212600000000" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                  +212 600 000 000
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@aminemeubles.ma" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                  contact@aminemeubles.ma
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[var(--gold)] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Casablanca, Maroc</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[var(--gold)]">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-black transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-black transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-black transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-[var(--gold)] text-black rounded hover:bg-[var(--gold-dark)] transition-colors"
              >
                Contactez-nous sur WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Amine Meubles. Tous droits reserves.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors">
                Mentions Legales
              </Link>
              <Link to="/confidentialite" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors">
                Politique de Confidentialite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

