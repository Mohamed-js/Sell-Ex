import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/styles/store.css";
import Cart from "./store_components/Cart";
import Home from "./store_components/Home";
import Navbar from "./store_components/Navbar";

function Store({ products, store, store_image, store_opts }) {
  const [cartItems, setCartItems] = useState([]);
  document.body.style.backgroundColor = `${store_opts.body.bg_color}`;
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cart-products"));
    if (products) {
      setCartItems(products);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        store={store}
        cartItems={cartItems}
        storeImage={store_image}
        storeOpts={store_opts}
      />
      <Route
        component={() => (
          <Home
            products={products}
            cartItems={cartItems}
            setCartItems={setCartItems}
            storeOpts={store_opts}
          />
        )}
        exact
        path="/stores/:id"
      />
      {/* <Route
        component={() => (
          <Home
            products={products}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
        path="/stores/:id/categories"
      /> */}
      <Route
        component={() => (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            products={products}
          />
        )}
        exact
        path="/stores/:id/cart"
      />
    </BrowserRouter>
  );
}

export default Store;
