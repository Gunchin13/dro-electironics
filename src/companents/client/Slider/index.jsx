import React, { useEffect, useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Cards from "../Cards";

const CardSwiper = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleAddToBasket = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Bu məhsul artıq səbətdə var.");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
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
          <Cards product={item} addToBasket={handleAddToBasket} />
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default CardSwiper;
