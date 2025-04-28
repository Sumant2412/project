import React from 'react';
import { categories } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-20 px-4 md:px-16">
      {/* Heading */}
      <p className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">Shop by Categories</p>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all bg-white"
            style={{ background: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              window.scrollTo(0, 0); // Ensure the page scrolls to the top
            }}
          >
            {/* Category Image */}
            <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden bg-white mb-4">
              <img
                src={category.image}
                alt={category.text}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Category Text */}
            <p className="text-lg md:text-xl font-medium text-gray-700 group-hover:text-gray-900 text-center">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
