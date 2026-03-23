import React from 'react';
import ProductPage from '@/components/ProductPage';

const WomensOuterwear = () => {
  const products = [
    { id: 1, name: 'Wool Coat', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2087', category: 'Winter' },
    { id: 2, name: 'Blazer', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=2012', category: 'Formal' },
    { id: 3, name: 'Leather Jacket', image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=2080', category: 'Casual' },
    { id: 4, name: 'Trench Coat', image: 'https://images.unsplash.com/photo-1558769132-92e717d613f1?q=80&w=2074', category: 'Formal' },
    { id: 5, name: 'Denim Jacket', image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=2074', category: 'Casual' },
    { id: 6, name: 'Bomber Jacket', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2136', category: 'Casual' },
    { id: 7, name: 'Parka', image: 'https://images.unsplash.com/photo-1544923408-75c5cef46f14?q=80&w=2070', category: 'Winter' },
    { id: 8, name: 'Cardigan', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005', category: 'Casual' },
  ];

  return <ProductPage title="Women's Outerwear" category="Women's Collection" products={products} />;
};

export default WomensOuterwear;