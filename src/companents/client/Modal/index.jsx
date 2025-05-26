import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Card = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(true); 
  };

  const handleClose = () => {
    setIsOpen(false); 
  };

  return (
    <div className="relative group border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
        <button
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaShoppingCart className="text-gray-800" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 p-6 border-b border-gray-300 animate-slide-down">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Səbətə əlavə olundu</h2>
            <button onClick={handleClose} className="text-xl font-bold">✕</button>
          </div>

          <div className="mt-4">
            <p>{product.title} məhsulu səbətə əlavə olundu.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

