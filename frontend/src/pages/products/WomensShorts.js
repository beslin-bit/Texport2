import React from 'react';
import ProductPage from '@/components/ProductPage';

const WomensShorts = () => {
  const products = [
    { id: 1, name: 'Denim Shorts', image: 'https://images.unsplash.com/photo-1591195850194-47fb06b98c83?q=80&w=2070', category: 'Casual' },
    { id: 2, name: 'Tailored Shorts', image: 'https://images.unsplash.com/photo-1591195853902-4674c90670b1?q=80&w=2070', category: 'Formal' },
    { id: 3, name: 'Athletic Shorts', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2086', category: 'Sports' },
    { id: 4, name: 'High-Waisted Shorts', image: 'https://images.unsplash.com/photo-1591195853725-82d3b6fbdeee?q=80&w=2070', category: 'Casual' },
    { id: 5, name: 'Bermuda Shorts', image: 'https://images.unsplash.com/photo-1591195853902-4674c90670b1?q=80&w=2070', category: 'Casual' },
    { id: 6, name: 'Linen Shorts', image: 'https://images.unsplash.com/photo-1591195845196-41a5f3c5cd34?q=80&w=2070', category: 'Summer' },
    { id: 7, name: 'Cargo Shorts', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2070', category: 'Utility' },
    { id: 8, name: 'Bike Shorts', image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=2069', category: 'Active' },
  ];

  return <ProductPage title="Women's Shorts" category="Women's Collection" products={products} />;
};

export default WomensShorts;