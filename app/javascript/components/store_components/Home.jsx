import React, { useEffect } from "react";
import Product from "./Product";

const Home = ({ products, cartItems, setCartItems }) => {
  useEffect(() => {}, []);
  return (
    <>
      {products && (
        <div className="store-products container row">
          {products.map((product) => (
            <Product
              key={product.product.id}
              product={product.product}
              img={product.img}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
