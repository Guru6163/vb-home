import React from 'react';
import { products } from '@/constants/Products';


function Products() {
  return (
    <div className="container mx-auto pb-8 px-4">
      <h1 className="font-bold mb-8 text-xl text-center sm:text-3xl animate__animated animate__fadeInDown text-green-800">Top Selling Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow rounded-lg">
            <img src={'https://res.cloudinary.com/dua8sce9b/image/upload/v1714412328/Introducing_Neem-Tulasi_Your_Ultimate_Solution_to_Dandruff_Woes_ziepkv.svg'} alt={product.productName} className="w-full h-80 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-bold mb-2">{product.productName}</h2>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-green-600 font-bold">Rs.{product.sellingCost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
