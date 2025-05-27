import React, { useEffect, useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Cards from "../Cards";
import { useOutletContext } from "react-router-dom";

const CardSwiper = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Xəta baş verdi:", err));
  }, []);
  const handleAddToBasket = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Bu məhsul artıq səbətdə var.");
      return;
    }

     setCart([...cart, { ...product, quantity: 1 }]);
    console.log("Səbətə əlavə olundu:", product.name);
  };

  return (
    <SwiperComponent
      loop={true}
      slidesPerView={5}
      spaceBetween={10}
      className="w-full h-full m-20"
    >
      {products.map((item) => (
        <SwiperSlide key={item.id}>
          <Cards product={item} onAddToBasket={handleAddToBasket} />
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default CardSwiper;



 
    



 