import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/image-hero.jpg"
          alt="Interior luxueux"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white mb-6">
            <span className="block text-4xl md:text-6xl lg:text-7xl">Mobilier de Luxe</span>
            <span className="block text-3xl md:text-5xl lg:text-6xl text-[var(--gold)] mt-2">
              Pour Votre Interieur
            </span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Decouvrez notre collection exclusive de meubles modernes et elegants, concus pour
            transformer votre espace en un havre de sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[var(--gold)] text-black hover:bg-[var(--gold-dark)] px-8 py-6" type="button">
              <Link to="/produits">
                Decouvrir nos Produits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-black hover:text-white px-8 py-6"
                type="button"
              >
                Nous Contacter
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
