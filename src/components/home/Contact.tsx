import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">Contactez-Nous</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-black mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--gold-light)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-[var(--gold-dark)]" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Téléphone</p>
                    <a href="tel:+212600000000" className="text-black hover:text-[var(--gold)]">
                      +212 600 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--gold-light)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-[var(--gold-dark)]" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Email</p>
                    <a href="mailto:contact@aminemeubles.ma" className="text-black hover:text-[var(--gold)]">
                      contact@aminemeubles.ma
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--gold-light)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[var(--gold-dark)]" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Adresse</p>
                    <p className="text-black">Casablanca, Maroc</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--gold-light)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-[var(--gold-dark)]" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Horaires d'ouverture</p>
                    <p className="text-black">Lun - Sam : 9h - 19h</p>
                    <p className="text-black">Dim : 10h - 17h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[var(--gold)]">
              <h4 className="text-black mb-3">Visitez Notre Showroom</h4>
              <p className="text-gray-600 mb-4">
                Venez découvrir nos collections en personne et laissez-vous inspirer par nos espaces aménagés.
              </p>
              <a
                href="https://wa.me/212600000000?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[var(--gold)] text-black hover:bg-[var(--gold-dark)]">
                  Prendre Rendez-vous
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.870879380318!2d10.767766575248237!3d35.63090953273757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020f00657204bb%3A0x42494e4da35f51e!2sAmine%20meubles%20jammel!5e0!3m2!1sfr!2stn!4v1761044402740!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amine Meubles Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
