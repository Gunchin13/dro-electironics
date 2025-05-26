import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16 p-10">
      <div className="container mx-auto flex md:grid-cols-3 gap-50  ">
        <div>
          <h3>Contact us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Drou Demo Store </a></li>
            <li><a href="#" className="hover:text-gray-300"> No. 1259 Freedom, New York </a></li>
            <li><a href="#" className="hover:text-gray-300"> United States</a></li>
            <li><a href="#" className="hover:text-gray-300"> +91-987654321</a></li>
            <li><a href="#" className="hover:text-gray-300">demo@exampledemo.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Product Support</a></li>
            <li><a href="#" className="hover:text-gray-300">Checkout</a></li>
            <li><a href="#" className="hover:text-gray-300">License Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Affiliate</a></li>

          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-300">Redeem Voucher</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Policies & Rules</a></li>

          </ul>
        </div>
        <div className="p-6">
          <h3>Download Our App</h3>
          <p>Download our App and get extra 15% Discount on your first Order..!</p>

          <div className=" p-4 flex justify-center md:justify-start space-x-4 text-2xl">
            <img src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/app-store.jpg?v=1603274799" alt="" />
            <img src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/google-play.jpg?v=1603274809" alt="" />
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

