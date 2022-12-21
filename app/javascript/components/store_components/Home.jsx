import React, { useEffect } from "react";
import Product from "./Product";

const Home = ({ products, cartItems, setCartItems }) => {
  useEffect(() => {}, []);
  return (
    <>
      {products && (
        <div className="store-products container row">
          {products.map((prod) => (
            <Product
              key={prod.product.id}
              product={prod.product}
              img={prod.img}
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
