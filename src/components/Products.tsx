/* src/components/Products.tsx */
import React from 'react';

const stats = [
  { label: 'YEARS OF EXPERIENCE', value: 26 },
  { label: 'PROJECTS COMPLETED', value: 102 },
  { label: 'PEOPLE IN THE TEAM', value: 42 },
  { label: 'OFFICES IN THE US', value: 3 },
];

const Products = () => {
  return (
    <section className="bg-numbyDark py-10 px-6 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 bg-numbyBlack rounded-md shadow-lg drop-shadow-xl">
            <h2 className="text-4xl font-bold text-numbyGold">{stat.value}</h2>
            <p className="uppercase text-xs mt-2 text-numbyNeonBlue">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;