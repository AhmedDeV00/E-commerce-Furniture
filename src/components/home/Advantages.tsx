import { motion } from 'motion/react';
import { Leaf, Shield, Sparkles, Palette, Truck, Award } from 'lucide-react';

const advantages = [
  {
    icon: Sparkles,
    title: 'Qualité Premium',
    description: 'Des matériaux nobles et un savoir-faire exceptionnel pour des meubles durables',
  },
  {
    icon: Palette,
    title: 'Design Moderne',
    description: 'Des créations contemporaines qui allient esthétique et fonctionnalité',
  },
  {
    icon: Leaf,
    title: 'Éco-responsable',
    description: 'Engagement envers la durabilité et le respect de l\'environnement',
  },
  {
    icon: Shield,
    title: 'Garantie Longue Durée',
    description: 'Protection complète pour votre investissement',
  },
  {
    icon: Palette,
    title: 'Personnalisation',
    description: 'Adaptez chaque pièce à vos goûts et besoins spécifiques',
  },
  {
    icon: Truck,
    title: 'Livraison Soignée',
    description: 'Transport et installation professionnels inclus',
  },
];

export function Advantages() {
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
          <h2 className="text-black mb-4">Pourquoi Choisir Amine Meubles ?</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-white border border-gray-200 hover:border-[var(--gold)] rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-[var(--gold-light)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors">
                <advantage.icon className="h-7 w-7 text-[var(--gold-dark)] group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-black mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
