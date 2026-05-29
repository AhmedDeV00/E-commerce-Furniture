import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { loadFeaturedProducts } from '../../lib/sanity';
import { fallbackProducts, type Product } from '../../lib/products';

export function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>(
    fallbackProducts.filter((product) => product.featured),
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    loadFeaturedProducts()
      .then((items) => {
        if (mounted && items.length) {
          setFeaturedProducts(items);
        }
      })
      .finally(() => {
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">Nos Produits Phares</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Decouvrez notre selection de meubles d'exception, choisis pour leur qualite et leur
            design unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {isLoading ? (
            fallbackProducts
              .filter((product) => product.featured)
              .map((product) => (
                <div key={product.id} className="animate-pulse">
                  <div className="aspect-[3/4] rounded-lg bg-gray-100 mb-4" />
                  <div className="h-4 w-3/4 bg-gray-100 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-gray-100 rounded mb-2" />
                  <div className="h-4 w-1/3 bg-gray-100 rounded" />
                </div>
              ))
          ) : (
            featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/produit/${product.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] bg-gray-100">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.oldPrice && (
                      <Badge className="absolute top-4 right-4 bg-[var(--gold)] text-black hover:bg-[var(--gold)]">
                        Promo
                      </Badge>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white px-4 py-2 bg-black/80 rounded">
                          Rupture de stock
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-black mb-2 group-hover:text-[var(--gold)] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        <Star className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} avis)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-black mr-2">{product.price.toLocaleString()} DH</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          {product.oldPrice.toLocaleString()} DH
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-black text-white hover:bg-[var(--gold)] hover:text-black">
            <Link to="/produits">
              Voir Tous les Produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
