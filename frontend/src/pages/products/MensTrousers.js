import React from 'react';
import ProductPage from '@/components/ProductPage';

const MensTrousers = () => {
  const products = [
    { id: 1, name: 'Chino Trousers', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2070', category: 'Casual' },
    { id: 2, name: 'Formal Trousers', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=2070', category: 'Formal' },
    { id: 3, name: 'Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2087', category: 'Casual' },
    { id: 4, name: 'Cargo Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2073', category: 'Utility' },
    { id: 5, name: 'Track Pants', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2086', category: 'Sports' },
    { id: 6, name: 'Tailored Pants', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2070', category: 'Formal' },
    { id: 7, name: 'Linen Trousers', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=2087', category: 'Summer' },
    { id: 8, name: 'Joggers', image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=2069', category: 'Active' },
  ];

  return <ProductPage title="Men's Trousers" category="Men's Collection" products={products} />;
};

export default MensTrousers;