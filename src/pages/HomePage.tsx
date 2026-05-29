import { Hero } from '../components/home/Hero';
import { Advantages } from '../components/home/Advantages';
import { CollectionInspiration } from '../components/home/CollectionInspiration';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Testimonials } from '../components/home/Testimonials';
import { About } from '../components/home/About';
import { Contact } from '../components/home/Contact';
import { useSeo } from '../hooks/useSeo';

export function HomePage() {
  useSeo({
    title: 'Amine Meubles | Accueil',
    description: 'Mobilier de luxe et contemporain pour salon, chambre, bureau et salle a manger.',
  });

  return (
    <>
      <Hero />
      <Advantages />
      <CollectionInspiration />
      <FeaturedProducts />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
