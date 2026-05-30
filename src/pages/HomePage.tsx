import { Suspense, lazy } from 'react';
import { Hero } from '../components/home/Hero';
import { useSeo } from '../hooks/useSeo';

const Advantages = lazy(() =>
  import('../components/home/Advantages').then((module) => ({ default: module.Advantages })),
);
const CollectionInspiration = lazy(() =>
  import('../components/home/CollectionInspiration').then((module) => ({
    default: module.CollectionInspiration,
  })),
);
const FeaturedProducts = lazy(() =>
  import('../components/home/FeaturedProducts').then((module) => ({
    default: module.FeaturedProducts,
  })),
);
const Testimonials = lazy(() =>
  import('../components/home/Testimonials').then((module) => ({ default: module.Testimonials })),
);
const About = lazy(() =>
  import('../components/home/About').then((module) => ({ default: module.About })),
);
const Contact = lazy(() =>
  import('../components/home/Contact').then((module) => ({ default: module.Contact })),
);

export function HomePage() {
  useSeo({
    title: 'Amine Meubles | Accueil',
    description: 'Mobilier de luxe et contemporain pour salon, chambre, bureau et salle a manger.',
  });

  return (
    <>
      <Hero />
      <Suspense fallback={<div className="min-h-[24rem] bg-white" />}>
        <Advantages />
        <CollectionInspiration />
        <FeaturedProducts />
        <Testimonials />
        <About />
        <Contact />
      </Suspense>
    </>
  );
}
