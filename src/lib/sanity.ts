import { createClient } from '@sanity/client';
import type { Product, ProductCategory } from './products';
import { fallbackProducts } from './products';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = import.meta.env.VITE_SANITY_DATASET as string | undefined;
const apiVersion =
  (import.meta.env.VITE_SANITY_API_VERSION as string | undefined) ?? '2025-05-01';

const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: projectId as string,
      dataset: dataset as string,
      apiVersion,
      useCdn: true,
    })
  : null;

type SanityProduct = {
  _id: string;
  slug: string;
  title: string;
  category: ProductCategory;
  price: number;
  oldPrice?: number;
  description: string;
  featured?: boolean;
  materials?: string[];
  colors?: string[];
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
  };
  customizable?: boolean;
  inStock?: boolean;
  rating?: number;
  reviews?: number;
  images?: Array<{ asset?: { url?: string } }>;
};

const productQuery = `*[_type == "product"] | order(featured desc, _createdAt desc) {
  _id,
  "slug": slug.current,
  title,
  category,
  price,
  oldPrice,
  description,
  featured,
  materials,
  colors,
  dimensions,
  customizable,
  inStock,
  rating,
  reviews,
  images[] {
    asset->{
      url
    }
  }
}`;

function toProduct(product: SanityProduct): Product {
  const images = (product.images ?? [])
    .map((image) => image.asset?.url)
    .filter((url): url is string => Boolean(url));
  const fallback = fallbackProducts.find(
    (item) => item.slug === product.slug || item.id === product._id,
  );

  return {
    id: product._id,
    slug: product.slug || fallback?.slug || product._id,
    name: product.title,
    category: product.category,
    price: product.price,
    oldPrice: product.oldPrice,
    description: product.description,
    image: images?.[0] ?? fallback?.image ?? '',
    images: images?.length ? images : fallback?.images ?? [],
    featured: product.featured,
    materials: product.materials ?? [],
    colors: product.colors ?? [],
    dimensions: {
      length: product.dimensions?.length ?? fallback?.dimensions?.length ?? 0,
      width: product.dimensions?.width ?? fallback?.dimensions?.width ?? 0,
      height: product.dimensions?.height ?? fallback?.dimensions?.height ?? 0,
    },
    customizable: Boolean(product.customizable),
    inStock: product.inStock ?? true,
    rating: product.rating ?? 0,
    reviews: product.reviews ?? 0,
  };
}

export async function loadProducts(): Promise<Product[]> {
  if (!sanityClient) {
    return fallbackProducts;
  }

  try {
    const data = await sanityClient.fetch<SanityProduct[]>(productQuery);
    if (!data.length) {
      return fallbackProducts;
    }
    return data.map(toProduct);
  } catch {
    return fallbackProducts;
  }
}

export async function loadProductBySlug(slug: string): Promise<Product | null> {
  const products = await loadProducts();
  return products.find((product) => product.slug === slug || product.id === slug) ?? null;
}

export async function loadFeaturedProducts(): Promise<Product[]> {
  const products = await loadProducts();
  return products.filter((product) => product.featured);
}
