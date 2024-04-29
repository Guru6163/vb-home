import React from 'react';

// Dummy category data
const categories = [
  { id: 1, name: 'Body wash' },
  { id: 2, name: 'Serum' },
  { id: 3, name: 'Facewash' },
  { id: 4, name: 'Moisturizer' },
  { id: 5, name: 'Sunscreen' },
  { id: 6, name: 'Toner' },
];

function Categories() {
  return (
    <div className="container mx-auto pb-8 px-4">
      <h1 className="font-bold mb-8 text-xl text-center sm:text-3xl animate__animated animate__fadeInDown underline underline-offset-5 text-green-800">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(category => (
          <button 
            key={category.id} 
            className="bg-white p-4 shadow rounded-lg flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-green-500"
            
          >
            <span className="text-lg font-bold">{category.name}</span>
          </button>
        ))}
      </div>
      <div className='border border-b mt-6'></div>
    </div>
  );
}

export default Categories;
