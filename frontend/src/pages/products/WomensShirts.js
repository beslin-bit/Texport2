import React from 'react';
import ProductPage from '@/components/ProductPage';

const WomensShirts = () => {
  const products = [
    { id: 1, name: 'Silk Blouse', image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=2086', category: 'Formal' },
    { id: 2, name: 'Casual Shirt', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070', category: 'Casual' },
    { id: 3, name: 'Denim Shirt', image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=2069', category: 'Casual' },
    { id: 4, name: 'Button-Down', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=2070', category: 'Formal' },
    { id: 5, name: 'Linen Top', image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=2070', category: 'Summer' },
    { id: 6, name: 'Tunic', image: 'https://images.unsplash.com/photo-1624206112431-5d348f665fb6?q=80&w=2069', category: 'Casual' },
    { id: 7, name: 'Crop Top', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2070', category: 'Casual' },
    { id: 8, name: 'Fitted Shirt', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070', category: 'Formal' },
  ];

  return <ProductPage title="Women's Shirts" category="Women's Collection" products={products} />;
};

export default WomensShirts;