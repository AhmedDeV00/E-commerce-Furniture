import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Filter, Star } from 'lucide-react';
import { loadProducts } from '../lib/sanity';
import { fallbackProducts, productCategories, type Product } from '../lib/products';
import { useSeo } from '../hooks/useSeo';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [isLoading, setIsLoading] = useState(true);

  useSeo({
    title: 'Amine Meubles | Produits',
    description: 'Explorez la collection de meubles disponibles chez Amine Meubles.',
  });

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    let mounted = true;

    loadProducts()
      .then((items) => {
        if (mounted && items.length) {
          setProducts(items);
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

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-black mb-4">Notre Collection</h1>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Decouvrez notre gamme complete de meubles luxueux et fonctionnels
          </p>
        </motion.div>

        <div className="lg:hidden mb-6">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setShowFilters(!showFilters)}
            type="button"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filtres
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-black mb-4">Categories</h3>
              <div className="space-y-2">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    type="button"
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-[var(--gold)] text-black'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.label}
                    {selectedCategory === category.id && (
                      <span className="ml-2">({filteredProducts.length})</span>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-black text-white rounded-lg">
                <h4 className="mb-2">Besoin d'aide ?</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Contactez-nous pour des conseils personnalises
                </p>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-dark)]" type="button">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.aside>

          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouve
                {filteredProducts.length > 1 ? 's' : ''}
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {fallbackProducts.slice(0, 6).map((product) => (
                  <div key={product.id} className="animate-pulse">
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] bg-gray-100" />
                    <div className="h-5 w-2/3 bg-gray-100 rounded mb-2" />
                    <div className="h-4 w-full bg-gray-100 rounded mb-2" />
                    <div className="h-4 w-1/2 bg-gray-100 rounded" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-600 mb-4">
                  Aucun produit trouve dans cette categorie
                </p>
                <Button onClick={() => handleCategoryChange('all')} type="button">
                  Voir tous les produits
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                          </Badge>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white px-4 py-2 bg-black/80 rounded">
                              Rupture de stock
                            </span>
                          </div>
                        )}
                        {product.customizable && (
                          <Badge className="absolute top-4 left-4 bg-white/90 text-black">
                            Personnalisable
                          </Badge>
                        )}
                      </div>
                      <div>
                        <h3 className="text-black mb-2 group-hover:text-[var(--gold)] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {product.description}
                        </p>
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
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

