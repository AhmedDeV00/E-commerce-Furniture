import { useEffect } from 'react';

type SeoOptions = {
  title: string;
  description: string;
};

export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [description, title]);
}

