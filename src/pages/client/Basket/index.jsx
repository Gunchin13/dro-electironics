import React from 'react'
import { useOutletContext } from "react-router-dom";

const Basket = () => {
    const { cart } = useOutletContext();

    const totalPrice = cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  
  return (
    <>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Səbət</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Səbət boşdur</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded shadow">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4 border-b">Image</th>
                <th className="py-3 px-4 border-b">Məhsul</th>
                <th className="py-3 px-4 border-b">Qiymət</th>
                <th className="py-3 px-4 border-b">Say</th>
               </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4"><img src={item.img} alt=""  className='w-20 h-20'/></td>
                  <td className="py-2 px-4">{item.title}</td>
                  <td className="py-2 px-4">${item.price}</td>
                  <td className="py-2 px-4">{item.quantity || 1}</td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      )}
    </div>    
    </>
  )
}

export default Basket


 