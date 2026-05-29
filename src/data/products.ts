export interface Product {
  id: string;
  name: string;
  category: 'salon' | 'salle-a-manger' | 'chambre' | 'bureau' | 'decoration';
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  images: string[];
  featured?: boolean;
  materials: string[];
  colors: string[];
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  customizable: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Canapé Milano',
    category: 'salon',
    price: 15900,
    oldPrice: 18900,
    description: 'Un canapé d\'angle luxueux en cuir véritable, offrant un confort exceptionnel et un design contemporain. Parfait pour les grands espaces de vie.',
    image: 'https://images.unsplash.com/photo-1684261556324-a09b2cdf68b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2MDUzNzk5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1684261556324-a09b2cdf68b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2MDUzNzk5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1687075197007-5685cfea8bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2ZhJTIwZGV0YWlsfGVufDF8fHx8MTc2MDU0MDUwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1698936061086-2bf99c7b9fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwYW5nbGV8ZW58MXx8fHwxNzYwNTQwNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    featured: true,
    materials: ['Cuir véritable', 'Bois de hêtre', 'Mousse haute densité'],
    colors: ['Noir', 'Gris', 'Beige', 'Marron'],
    dimensions: { length: 280, width: 220, height: 85 },
    customizable: true,
    inStock: true,
    rating: 4.8,
    reviews: 47,
  },
  {
    id: '2',
    name: 'Table à Manger Elegance',
    category: 'salle-a-manger',
    price: 12500,
    description: 'Table à manger en bois massif avec finition dorée. Peut accueillir jusqu\'à 8 personnes. Design moderne et élégant.',
    image: 'https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzYwNTM3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzYwNTM3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639102254045-a73b70928929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZSUyMGRldGFpbHxlbnwxfHx8fDE3NjA1NDA1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    featured: true,
    materials: ['Bois de chêne', 'Acier inoxydable'],
    colors: ['Noyer', 'Chêne naturel', 'Noir mat'],
    dimensions: { length: 220, width: 100, height: 76 },
    customizable: true,
    inStock: true,
    rating: 4.9,
    reviews: 62,
  },
  {
    id: '3',
    name: 'Lit Prestige',
    category: 'chambre',
    price: 18900,
    oldPrice: 22900,
    description: 'Lit king-size avec tête de lit capitonnée en velours. Comprend un sommier à lattes réglables et un cadre en bois massif.',
    image: 'https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYwNTM3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGJlZHJvb20lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYwNTM3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1609587639086-b4cbf85e4355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwZnVybml0dXJlJTIwY2xvc2V8ZW58MXx8fHwxNzYwNTQwNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    featured: true,
    materials: ['Velours', 'Bois de pin', 'Métal'],
    colors: ['Gris', 'Bleu marine', 'Beige', 'Vert émeraude'],
    dimensions: { length: 220, width: 200, height: 130 },
    customizable: true,
    inStock: true,
    rating: 4.7,
    reviews: 38,
  },
  {
    id: '4',
    name: 'Bureau Executive',
    category: 'bureau',
    price: 8900,
    description: 'Bureau moderne en bois et métal, avec rangements intégrés. Idéal pour le télétravail ou le bureau à domicile.',
    image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MDUwNjYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MDUwNjYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1605185702350-e5e02808da0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwYW5nbGV8ZW58MXx8fHwxNzYwNTQwNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    featured: true,
    materials: ['Bois d\'érable', 'Acier', 'Verre trempé'],
    colors: ['Noir', 'Blanc', 'Noyer'],
    dimensions: { length: 160, width: 80, height: 75 },
    customizable: false,
    inStock: true,
    rating: 4.6,
    reviews: 29,
  },
  {
    id: '5',
    name: 'Fauteuil Confort',
    category: 'salon',
    price: 4500,
    description: 'Fauteuil ergonomique en tissu premium avec repose-pieds intégré. Parfait pour la lecture ou la détente.',
    image: 'https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1607835017779-c176b83b2dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpciUyMGRldGFpbHxlbnwxfHx8fDE3NjA1NDA1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1687075197007-5685cfea8bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2ZhJTIwZGV0YWlsfGVufDF8fHx8MTc2MDU0MDUwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    featured: false,
    materials: ['Tissu bouclé', 'Mousse mémoire', 'Bois de bouleau'],
    colors: ['Beige', 'Gris clair', 'Rose poudré'],
    dimensions: { length: 90, width: 85, height: 95 },
    customizable: true,
    inStock: true,
    rating: 4.5,
    reviews: 21,
  },
  {
    id: '6',
    name: 'Buffet Moderne',
    category: 'salle-a-manger',
    price: 9500,
    description: 'Buffet en bois avec portes coulissantes et étagères ajustables. Design contemporain avec pieds en métal doré.',
    image: 'https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1759753976401-4b41b1acdaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzYwNTM4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639102254045-a73b70928929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZSUyMGRldGFpbHxlbnwxfHx8fDE3NjA1NDA1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1698280954292-c955f882486f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzYwNTM3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    featured: false,
    materials: ['Bois de noyer', 'Métal doré', 'Verre'],
    colors: ['Noyer', 'Noir', 'Blanc'],
    dimensions: { length: 180, width: 45, height: 85 },
    customizable: false,
    inStock: true,
    rating: 4.7,
    reviews: 15,
  },
];
