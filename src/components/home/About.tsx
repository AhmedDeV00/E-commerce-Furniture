import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award, Heart, Users, Leaf } from 'lucide-react';

const stats = [
  { icon: Users, value: '5000+', label: 'Clients Satisfaits' },
  { icon: Award, value: '15 ans', label: 'D\'Expérience' },
  { icon: Heart, value: '98%', label: 'Satisfaction Client' },
  { icon: Leaf, value: '100%', label: 'Éco-responsable' },
];

export function About() {
  return (
    <section id="apropos" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Showroom Amine Meubles"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--gold)] rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-black mb-4">À Propos d'Amine Meubles</h2>
            <div className="w-20 h-1 bg-[var(--gold)] mb-6" />
            <p className="text-gray-600 mb-4">
              Depuis plus de 15 ans, Amine Meubles est votre partenaire de confiance pour transformer vos espaces de vie en havres de luxe et de confort. Nous croyons que chaque meuble raconte une histoire et reflète la personnalité de ceux qui l'habitent.
            </p>
            <p className="text-gray-600 mb-6">
              Notre engagement envers l'excellence se traduit par une sélection rigoureuse de matériaux durables, un design contemporain et un savoir-faire artisanal. Chaque pièce est conçue pour durer et s'intégrer harmonieusement dans votre quotidien.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <stat.icon className="h-8 w-8 text-[var(--gold)] mx-auto mb-2" />
                  <div className="text-black mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-[var(--gold-light)] p-6 rounded-lg border-l-4 border-[var(--gold)]">
              <p className="text-gray-800 italic">
                "Notre mission est de créer des espaces qui inspirent et enrichissent la vie quotidienne, tout en respectant notre planète."
              </p>
              <p className="text-gray-600 mt-2">— Amine, Fondateur</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
