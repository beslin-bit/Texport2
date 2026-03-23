import React from 'react';
import ProductPage from '@/components/ProductPage';

const WomensDress = () => {
  const products = [
    { id: 1, name: 'Evening Gown', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2083', category: 'Formal' },
    { id: 2, name: 'Cocktail Dress', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2069', category: 'Formal' },
    { id: 3, name: 'Maxi Dress', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2046', category: 'Casual' },
    { id: 4, name: 'Midi Dress', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2083', category: 'Casual' },
    { id: 5, name: 'Summer Dress', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2046', category: 'Summer' },
    { id: 6, name: 'Shirt Dress', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2069', category: 'Casual' },
    { id: 7, name: 'Wrap Dress', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2083', category: 'Casual' },
    { id: 8, name: 'A-Line Dress', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2046', category: 'Formal' },
  ];

  return <ProductPage title="Women's Dress" category="Women's Collection" products={products} />;
};

export default WomensDress;