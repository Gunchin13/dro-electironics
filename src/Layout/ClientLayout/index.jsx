 

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [cart, setCart] = useState([]);

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <div>
      <Header cartCount={cartCount} />
      <Outlet context={{ cart, setCart }} />
      <Footer />
    </div>
  );
};

export default Layout;