import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Star, Check, Truck, Shield, Palette, ArrowLeft, MessageCircle, Quote } from 'lucide-react';
import { toast } from 'sonner';
import { fallbackProducts, type Product } from '../lib/products';
import { useSeo } from '../hooks/useSeo';

const testimonials = [
  {
    name: 'Fatima Alami',
    location: 'Casablanca',
    rating: 5,
    text: "Des meubles d'une qualite exceptionnelle ! Le service client est remarquable et la livraison s'est deroulee parfaitement. Je recommande vivement Amine Meubles.",
    initials: 'FA',
  },
  {
    name: 'Karim Benjelloul',
    location: 'Rabat',
    rating: 5,
    text: "Je suis impressionne par l'attention aux details et la finition luxueuse. L'equipe a su nous conseiller et repondre a toutes nos questions.",
    initials: 'KB',
  },
  {
    name: 'Sofia Mernissi',
    location: 'Marrakech',
    rating: 5,
    text: 'Un rapport qualite-prix imbattable pour des meubles haut de gamme. L equipe a su personnaliser notre commande selon nos besoins.',
    initials: 'SM',
  },
  {
    name: 'Youssef Tazi',
    location: 'Tanger',
    rating: 5,
    text: 'Excellente experience du debut a la fin. Les meubles sont solides, elegants et parfaitement adaptes a notre style de vie moderne.',
    initials: 'YT',
  },
];

export function ProductDetailPage() {
  const { id } = useParams();
  const product = fallbackProducts.find((item) => item.slug === id || item.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');

  useSeo({
    title: 'Amine Meubles | Produit',
    description: 'Consultez les details du produit et contactez-nous directement via WhatsApp.',
  });

  useEffect(() => {
    setSelectedImage(0);
    setSelectedColor('');
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-black mb-4">Produit non trouve</h1>
          <Button asChild type="button">
            <Link to="/produits">Retour aux produits</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Bonjour, je suis interesse(e) par ${product.name} (${product.price.toLocaleString()} TND)${selectedColor ? ` en ${selectedColor}` : ''
      }.`;
    window.open(`https://wa.me/212600000000?text=${encodeURIComponent(message)}`, '_blank');
  };


  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/produits" className="text-gray-600 hover:text-[var(--gold)] inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux produits
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                <ImageWithFallback
                  src={product.images[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.oldPrice && (
                  <Badge className="absolute top-4 right-4 bg-[var(--gold)] text-black hover:bg-[var(--gold)]">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </Badge>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setSelectedImage(index)}
                      type="button"
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                        ? 'border-[var(--gold)]'
                        : 'border-transparent hover:border-gray-300'
                        }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <Badge variant="outline" className="mb-4">
                {product.category.replace('-', ' ').toUpperCase()}
              </Badge>
              <h1 className="text-black mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating)
                        ? 'fill-[var(--gold)] text-[var(--gold)]'
                        : 'text-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline mb-2">
                <span className="text-3xl text-black mr-3">{product.price.toLocaleString()} TND</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {product.oldPrice.toLocaleString()} TND
                  </span>
                )}
              </div>
              {product.inStock ? (
                <p className="text-green-600 flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  En stock
                </p>
              ) : (
                <p className="text-red-600">Rupture de stock</p>
              )}
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h3 className="text-black mb-3">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {product.customizable && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-black mb-3">Couleurs disponibles</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      type="button"
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedColor === color
                        ? 'border-[var(--gold)] bg-[var(--gold-light)]'
                        : 'border-gray-300 hover:border-gray-400'
                        }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-black mb-3">Materiaux</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material) => (
                  <Badge key={material} variant="secondary">
                    {material}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-black mb-3">Dimensions</h3>
              <p className="text-gray-600">
                L {product.dimensions.length} x l {product.dimensions.width} x H{' '}
                {product.dimensions.height} cm
              </p>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-[var(--gold)] mr-2" />
                <span className="text-sm text-gray-600">Livraison incluse</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-[var(--gold)] mr-2" />
                <span className="text-sm text-gray-600">Garantie 2 ans</span>
              </div>
              {product.customizable && (
                <div className="flex items-center">
                  <Palette className="h-5 w-5 text-[var(--gold)] mr-2" />
                  <span className="text-sm text-gray-600">Personnalisable</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-[var(--gold)] text-black hover:bg-[var(--gold-dark)]"
                onClick={handleWhatsAppContact}
                type="button"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Commander via WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-black mb-8">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <Quote className="h-8 w-8 text-[var(--gold)] mb-4" />
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 bg-[var(--gold-light)]">
                    <AvatarFallback className="bg-[var(--gold-light)] text-[var(--gold-dark)]">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-black">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-black mb-8">Produits similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fallbackProducts
              .filter((item) => item.category === product.category && item.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/produit/${relatedProduct.slug}`} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-3 aspect-square bg-gray-100">
                    <ImageWithFallback
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="text-black mb-1 group-hover:text-[var(--gold)] transition-colors">
                    {relatedProduct.name}
                  </h4>
                  <p className="text-gray-600">{relatedProduct.price.toLocaleString()} TND</p>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
