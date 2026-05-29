import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: 'Collection Salon',
    description: 'Élégance et confort pour vos moments de détente',
    image: 'https://images.unsplash.com/photo-1684261556324-a09b2cdf68b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2MDUzNzk5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'salon',
  },
  {
    title: 'Collection Salle à Manger',
    description: 'Partagez des moments précieux en famille',
    image: 'https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzYwNTM3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'salle-a-manger',
  },
  {
    title: 'Collection Chambre',
    description: 'Votre sanctuaire de repos et de sérénité',
    image: 'https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYwNTM3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'chambre',
  },
  {
    title: 'Collection Bureau',
    description: 'Productivité et style pour votre espace de travail',
    image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MDUwNjYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bureau',
  },
];

export function CollectionInspiration() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">Collections d'Inspiration</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez nos collections soigneusement conçues pour chaque espace de votre maison
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <ImageWithFallback
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-white mb-2">{collection.title}</h3>
                  <p className="text-white/90 mb-4">{collection.description}</p>
                  <Link to={`/produits?category=${collection.category}`}>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-black"
                    >
                      Découvrir
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
