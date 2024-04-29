import React from 'react';

// Dummy product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for product 1.',
    price: '$10.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description for product 2.',
    price: '$20.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the description for product 3.',
    price: '$30.99',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

function Products() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow rounded-lg">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-green-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
