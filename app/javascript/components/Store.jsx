import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../assets/styles/store.css";
import Cart from "./store_components/Cart";
import Home from "./store_components/Home";
import Navbar from "./store_components/Navbar";

function Store({ products, store }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cart-products"));
    if (products) {
      setCartItems(products);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar store={store} cartItems={cartItems} />
      <br />
      <Route
        component={() => (
          <Home
            products={products}
            cartItems={cartItems}
            setCartItems={setCartItems}
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
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        )}
        exact
        path="/stores/:id/cart"
      />
    </BrowserRouter>
  );
}

export default Store;
