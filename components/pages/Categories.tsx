import React from 'react';

// Dummy category data
const categories = [
  { id: 1, name: 'Body wash',  },
  { id: 2, name: 'Serum',  },
  { id: 3, name: 'Facewash',  },
  { id: 4, name: 'Moisturizer',  },
  { id: 5, name: 'Sunscreen',  },
  { id: 6, name: 'Toner', },
];

function Categories() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(category => (
          <div key={category.id} className="bg-white p-4 shadow rounded-lg flex items-center">
            <span className="text-lg font-bold">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
