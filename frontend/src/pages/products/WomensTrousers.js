import React from 'react';
import ProductPage from '@/components/ProductPage';

const WomensTrousers = () => {
  const products = [
    { id: 1, name: 'Tailored Pants', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070', category: 'Formal' },
    { id: 2, name: 'Wide Leg Pants', image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=2087', category: 'Casual' },
    { id: 3, name: 'Jeans', image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=2086', category: 'Casual' },
    { id: 4, name: 'Palazzo Pants', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=2070', category: 'Casual' },
    { id: 5, name: 'Culottes', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=2087', category: 'Casual' },
    { id: 6, name: 'Chino Pants', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2087', category: 'Casual' },
    { id: 7, name: 'Leggings', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=2087', category: 'Active' },
    { id: 8, name: 'Formal Trousers', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070', category: 'Formal' },
  ];

  return <ProductPage title="Women's Trousers" category="Women's Collection" products={products} />;
};

export default WomensTrousers;