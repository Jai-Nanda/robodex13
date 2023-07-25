import React from 'react';
import ProductCarousel from '../pages/components/SliderN';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: '/product1.jpg', // Replace with the actual image URL
    description: 'Description of Product 1',
    price: '$19.99',
  },
  {
    id: 2,
    name: 'Product 2',
    image: '/product2.jpg', // Replace with the actual image URL
    description: 'Description of Product 2',
    price: '$29.99',
  },
  // Add more products here...
];

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Product Carousel!</h1>
      <ProductCarousel products={products} />
    </div>
  );
};

export default HomePage;
