import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';

const Cards = ({ product, addToBasket }) => {
  return (
    <div className="relative w-full group rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-64">
        <img
          src={product?.img}
          alt={`${product?.title} əsas şəkil`}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={product?.hoverImg}
          alt={`${product?.title} hover şəkil`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="mt-3 text-center">
        <h5 className="text-lg font-medium text-gray-800">{product?.title}</h5>
        <h4 className="text-red-600">${product?.price}</h4>
      </div>

      {/* Hover zamanı ikonlar görünür */}
      <div className="hidden group-hover:flex absolute inset-x-0 bottom-0 items-center justify-center gap-2 bg-black bg-opacity-40 py-2">
        <button
          onClick={() => addToBasket(product)}
          className="text-white text-2xl p-2 rounded-full bg-black hover:bg-gray-800"
        >
          <SlBasket />
        </button>
        <button
          onClick={() => alert('Sevimlilərə əlavə edildi!')}
          className="text-white text-2xl p-2 rounded-full bg-black hover:bg-gray-800"
        >
          <CiHeart />
        </button>
      </div>
    </div>
  );
};

export default Cards;