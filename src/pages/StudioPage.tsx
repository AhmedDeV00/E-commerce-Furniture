import { Suspense, lazy } from 'react';
import { useSeo } from '../hooks/useSeo';

const hasStudioConfig = Boolean(
  import.meta.env.VITE_SANITY_PROJECT_ID && import.meta.env.VITE_SANITY_DATASET,
);

const Studio = lazy(async () => {
  const { Studio } = await import('sanity');
  const { browserStudioConfig } = await import('../sanity/studioConfig');

  return {
    default: function StudioShell() {
      return <Studio config={browserStudioConfig} />;
    },
  };
});

export function StudioPage() {
  useSeo({
    title: 'Amine Meubles Studio',
    description: 'Gestion des produits, images et contenus du catalogue Amine Meubles.',
  });

  if (!hasStudioConfig) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-black mb-4">Studio Sanity non configure</h1>
          <p className="text-gray-600 mb-6">
            Renseignez vos variables d'environnement Sanity puis relancez le projet pour acceder
            au studio.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6 text-sm text-gray-700">
            <p className="mb-2">
              Variables requises: <code>VITE_SANITY_PROJECT_ID</code>,{' '}
              <code>VITE_SANITY_DATASET</code>
            </p>
            <p>
              Pour le studio local, ajoutez aussi <code>SANITY_STUDIO_PROJECT_ID</code> et{' '}
              <code>SANITY_STUDIO_DATASET</code>.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Créez un fichier <code>.env</code> a partir du modele <code>.env.example</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-28">
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center text-gray-600">
            Chargement du studio...
          </div>
        }
      >
        <Studio />
      </Suspense>
    </div>
  );
}
