import React from 'react';
import ProductPage from '@/components/ProductPage';

const MensOuterwear = () => {
  const products = [
    { id: 1, name: 'Winter Parka', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070', category: 'Winter' },
    { id: 2, name: 'Bomber Jacket', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2136', category: 'Casual' },
    { id: 3, name: 'Trench Coat', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=2070', category: 'Formal' },
    { id: 4, name: 'Denim Jacket', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2070', category: 'Casual' },
    { id: 5, name: 'Puffer Jacket', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2070', category: 'Winter' },
    { id: 6, name: 'Windbreaker', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2136', category: 'Sports' },
    { id: 7, name: 'Blazer', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071', category: 'Formal' },
    { id: 8, name: 'Track Jacket', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2086', category: 'Sports' },
  ];

  return <ProductPage title="Men's Outerwear" category="Men's Collection" products={products} />;
};

export default MensOuterwear;