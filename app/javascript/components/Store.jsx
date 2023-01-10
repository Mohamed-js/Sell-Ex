import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/styles/store.css";
import Cart from "./store_components/Cart";
import Home from "./store_components/Home";
import Navbar from "./store_components/Navbar";

function Store({ products, store, store_image }) {
  const [storeOpts, setStoreOpts] = useState(JSON.parse(store.options));
  const [cartItems, setCartItems] = useState([]);
  console.log(store.options);
  useEffect(() => {
    document.body.style.backgroundColor = `${storeOpts.body.bg_color}`;
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
        storeOpts={storeOpts}
      />
      <Route
        component={() => (
          <Home
            products={products}
            cartItems={cartItems}
            setCartItems={setCartItems}
            storeOpts={storeOpts}
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
