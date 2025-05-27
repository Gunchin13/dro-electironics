import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';

const Cards  = ({product, onAddToBasket}) => {
  return (
   <div className=''>
      <div className="relative w-full group rounded-lg shadow-lg  m-5 p-10   border  border-amber-400">
      <div className="relative w-full h-64  ">
        <img
          src={product.img} 
          alt={product.title}
          className="w-full h-full object-cover  transition-opacity duration-300 group-hover:opacity-0"
        /> 
        <img
          src={product.hoverImg}
          alt={`${product.title} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div  >
      <div className="mt-3 text-center ">
        <h5 className="text-lg font-medium text-gray-800">{product.title}</h5>
        <h4 className="text-red-600">${product.price}</h4>
      </div>
      <div className="hidden group-hover:flex absolute  inset-x-0 bottom-0 inset-0 items-center justify-center gap-2 bg-opacity-50">
          <button onClick={() => onAddToBasket(product)} className='text-white text-2xl p-2 rounded-full bg-black'>
          <SlBasket/>  
          </button>
          <button className='text-white text-2xl p-2 rounded-full   bg-black'>
          <CiHeart />
          </button>
       </div>
    </div>
   </div>
  );
};

export default Cards;








 
          
         