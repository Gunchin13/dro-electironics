import { BsBasket } from "react-icons/bs";
import { FaHeart, FaRegHeart, FaRegUser, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import "./header.css"
const Header = (cartCount) => {
  
  return (
    <header className="w-full py-2 text-sm text-center ">

      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <img src="https://drou-electronics-store.myshopify.com/cdn/shop/files/logo_300x300.png?v=1674276674"  className="w-[150px]" alt="" />

        <input
          type="text"
          placeholder="Search our store"
          className="border rounded-md px-4 py-4 w-1/2"
        />

        <div className="flex items-center space-x-4 text-2xl">
        <FaRegHeart />
        <div className="relative">
        <BsBasket /> 
          <span className="basket-count">{cartCount}</span>
        </div>
        <FaRegUser />

        </div>
      </div>

      <nav className="bg-white border-t text-2xl border-b">
        <div className="container mx-auto flex items-center px-4 py-5 justify-between">
          <button className=" flex gap-3 bg-[#e52e06] text-white px-4 py-3 rounded-md">
          <IoMdMenu className="m-1"/>
          All Categories
          </button>

          <ul className="flex space-x-4 text-xl text-black">
            <li><a href="#" className="hover:text-orange-600 ">Home </a></li>
            <li><a href="#" className="hover:text-orange-600">Electronics </a></li>
            <li><a href="#" className="hover:text-orange-600">Blog</a></li>
            <li><a href="#" className="hover:text-orange-600">Pages</a></li>
            <li><a href="#" className="hover:text-orange-600">Contact</a></li>
          </ul>

          <span className="text-sm font-semibold">Hotline <strong>1800 - 1102</strong></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

