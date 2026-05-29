import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';

const testimonials = [
  {
    name: 'Fatima Alami',
    location: 'Casablanca',
    rating: 5,
    text: 'Des meubles d\'une qualité exceptionnelle ! Le canapé Milano a transformé notre salon. Le service client est remarquable et la livraison s\'est déroulée parfaitement.',
    initials: 'FA',
  },
  {
    name: 'Karim Benjelloun',
    location: 'Rabat',
    rating: 5,
    text: 'Je suis impressionné par l\'attention aux détails et la finition luxueuse. La table à manger Elegance est devenue la pièce maîtresse de notre maison.',
    initials: 'KB',
  },
  {
    name: 'Sofia Mernissi',
    location: 'Marrakech',
    rating: 5,
    text: 'Un rapport qualité-prix imbattable pour des meubles haut de gamme. L\'équipe a su nous conseiller et personnaliser notre commande selon nos besoins.',
    initials: 'SM',
  },
  {
    name: 'Youssef Tazi',
    location: 'Tanger',
    rating: 5,
    text: 'Excellente expérience du début à la fin. Les meubles sont solides, élégants et parfaitement adaptés à notre style de vie moderne.',
    initials: 'YT',
  },
];

export function Testimonials() {
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
          <h2 className="text-black mb-4">Ce Que Disent Nos Clients</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
