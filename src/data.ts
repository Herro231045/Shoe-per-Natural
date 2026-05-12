import { Product } from './types';

export const products: Product[] = [
  {
    id: 'sn-01',
    name: 'Terraform v1',
    price: 185,
    category: 'Lifestyle',
    description: 'The ultimate minimalist sneaker. Designed for natural movement and everyday elegance.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2012',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1974'
    ],
    features: ['Anatomical toe box', 'Zero-drop sole', 'Breathable knit architecture'],
    materials: [
      { name: 'Organic Cotton', percentage: 60 },
      { name: 'Recycled Rubber', percentage: 40 }
    ],
    variants: [
      { color: 'Bone', sizes: [7, 8, 9, 10, 11, 12], image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772' },
      { color: 'Obsidian', sizes: [7, 8, 9, 10, 11], image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' }
    ],
    rating: 4.9,
    reviewsCount: 1240,
    isNew: true,
    isBestSeller: true
  },
  {
    id: 'sn-02',
    name: 'AeroCloud Runner',
    price: 210,
    category: 'Performance',
    description: 'Weightless comfort for the urban explorer. Engineered with our signature AeroCloud tech.',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1964',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070'
    ],
    features: ['Responsive cushioning', 'Ultra-lightweight mesh', 'Traction-lock tread'],
    materials: [
      { name: 'Merino Wool', percentage: 70 },
      { name: 'Bio-Poly', percentage: 30 }
    ],
    variants: [
      { color: 'Cloud', sizes: [6, 7, 8, 9, 10, 11], image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa' },
      { color: 'Slate', sizes: [6, 7, 8, 9, 10, 11], image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' }
    ],
    rating: 4.8,
    reviewsCount: 856,
    isBestSeller: true
  },
  {
    id: 'sn-03',
    name: 'Zen Slide',
    price: 85,
    category: 'Lounge',
    description: 'Post-run recovery redefined. Contoured to support the natural arch of your foot.',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=2030'
    ],
    features: ['Arch-support footbed', 'Water-resistant', 'Single-piece construction'],
    materials: [
      { name: 'Sugarcane Foam', percentage: 100 }
    ],
    variants: [
      { color: 'Sand', sizes: [5, 6, 7, 8, 9, 10, 11, 12, 13], image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782' }
    ],
    rating: 4.7,
    reviewsCount: 231
  },
  {
    id: 'sn-04',
    name: 'Duro Boot',
    price: 245,
    category: 'Outdoor',
    description: 'Rugged durability meets minimalist design. Built for the elements, styled for the street.',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=1974',
      'https://images.unsplash.com/photo-1520639889313-7272175b1c39?auto=format&fit=crop&q=80&w=1974'
    ],
    features: ['Waterproof treated leather', 'Reinforced eyelets', 'High-grip lug sole'],
    materials: [
      { name: 'Full-grain Leather', percentage: 80 },
      { name: 'Vibram Rubber', percentage: 20 }
    ],
    variants: [
      { color: 'Earth', sizes: [8, 9, 10, 11, 12], image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f' }
    ],
    rating: 4.9,
    reviewsCount: 412,
    isNew: true
  }
];
