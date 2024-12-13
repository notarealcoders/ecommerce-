'use client';

import { ProductCard } from './product-card';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'Essential cotton t-shirt in classic white',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    name: 'Denim Jeans',
    description: 'Comfortable slim-fit denim jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    name: 'Leather Sneakers',
    description: 'Premium leather sneakers in white',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60',
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {MOCK_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}