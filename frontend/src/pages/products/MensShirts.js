import React from 'react';
import ProductPage from '@/components/ProductPage';

const MensShirts = () => {
  const products = [
    { id: 1, name: 'Formal Shirt', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=2065', category: 'Formal' },
    { id: 2, name: 'Casual Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2076', category: 'Casual' },
    { id: 3, name: 'Denim Shirt', image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=2070', category: 'Casual' },
    { id: 4, name: 'Oxford Shirt', image: 'https://images.unsplash.com/photo-1602810318660-d2c46b750f88?q=80&w=2070', category: 'Formal' },
    { id: 5, name: 'Flannel Shirt', image: 'https://images.unsplash.com/photo-1598032895397-b9157f716522?q=80&w=2062', category: 'Casual' },
    { id: 6, name: 'Polo Shirt', image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2080', category: 'Casual' },
    { id: 7, name: 'Linen Shirt', image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2087', category: 'Summer' },
    { id: 8, name: 'Dress Shirt', image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?q=80&w=2070', category: 'Formal' },
  ];

  return <ProductPage title="Men's Shirts" category="Men's Collection" products={products} />;
};

export default MensShirts;