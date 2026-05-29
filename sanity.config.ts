import { createStudioConfig } from './src/sanity/studioConfig';

export default createStudioConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 'your-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
});

