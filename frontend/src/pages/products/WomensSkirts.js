import React from 'react';
import ProductPage from '@/components/ProductPage';

const WomensSkirts = () => {
  const products = [
    { id: 1, name: 'Midi Skirt', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=2094', category: 'Formal' },
    { id: 2, name: 'Mini Skirt', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070', category: 'Casual' },
    { id: 3, name: 'Maxi Skirt', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=2070', category: 'Casual' },
    { id: 4, name: 'Pencil Skirt', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=2094', category: 'Formal' },
    { id: 5, name: 'A-Line Skirt', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=2070', category: 'Casual' },
    { id: 6, name: 'Pleated Skirt', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=2094', category: 'Formal' },
    { id: 7, name: 'Denim Skirt', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070', category: 'Casual' },
    { id: 8, name: 'Wrap Skirt', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070', category: 'Casual' },
  ];

  return <ProductPage title="Women's Skirts" category="Women's Collection" products={products} />;
};

export default WomensSkirts;