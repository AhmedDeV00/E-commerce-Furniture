import { defineConfig } from 'sanity';
import { schemaTypes } from './schemaTypes';

type StudioConfigInput = {
  projectId: string;
  dataset: string;
  basePath?: string;
};

export function createStudioConfig({
  projectId,
  dataset,
  basePath = '/studio',
}: StudioConfigInput) {
  return defineConfig({
    name: 'amine-meubles',
    title: 'Amine Meubles Studio',
    projectId,
    dataset,
    basePath,
    schema: {
      types: schemaTypes,
    },
  });
}

export const browserStudioConfig = createStudioConfig({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID ?? 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET ?? 'production',
});

