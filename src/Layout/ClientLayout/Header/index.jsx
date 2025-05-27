import { BsBasket } from "react-icons/bs";
import {
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import "./header.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Header = ({ cartCount }) => {
  const { t, i18n } = useTranslation();

  const locales = {
    en: { title: "EN" },
    az: { title: "AZ" },
    ru: { title: "RU" },
  };

  useEffect(() => {
    console.log("Language changed to:", i18n.language);
  }, [i18n.language]);

  return (
    <header className="w-full py-2 text-sm text-center">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <img
          src="https://drou-electronics-store.myshopify.com/cdn/shop/files/logo_300x300.png?v=1674276674"
          className="w-[150px]"
          alt=""
        />

        <input
          type="text"
          placeholder="Search our store"
          className="border rounded-md px-4 py-4 w-1/2"
        />

        <div className="flex items-center space-x-4 text-3xl">
        <select className="text-xl"
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                }}
                value={i18n.language}
              >
                <option value="en">{locales.en.title}</option>
                <option value="az">{locales.az.title}</option>
                <option value="ru">{locales.ru.title}</option>
              </select>
          <FaRegHeart />
          <Link to="basket" className="relative">
            <BsBasket />
            <span className="basket-count">{cartCount}</span>
          </Link>
          <FaRegUser />
        </div>
      </div>

      <nav className="bg-white border-t text-2xl border-b">
        <div className="container mx-auto flex items-center px-4 py-5 justify-between">
          <button className="flex gap-3 bg-[#e52e06] text-white px-4 py-3 rounded-md">
            <IoMdMenu className="m-1" />
            {t("navbar.All Categories")}
          </button>

          <ul className="flex space-x-4 text-xl text-black">
            <li>
              <Link to="/" className="hover:text-orange-600">
                {t("navbar.Home")}
              </Link>
            </li>
            <li>
              <Link to="electronics" className="hover:text-orange-600">
                {t("navbar.Electronics")}
              </Link>
            </li>
            <li>
              <Link to="blog" className="hover:text-orange-600">
              {t("navbar.BLog")}
              </Link>
            </li>
            <li>
              <Link to="pages" className="hover:text-orange-600">
                {t("navbar.Pages")}
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-orange-600">
                {t("navbar.Contact")}
              </Link>
            </li>
            <li>
              
            </li>
          </ul>

          <span className="text-sm font-semibold">
            Hotline <strong>1800 - 1102</strong>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
