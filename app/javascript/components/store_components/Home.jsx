import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = ({ products, cartItems, setCartItems, storeOpts }) => {
  const BREAK_POINT = 576;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      <div
        className="cover"
        style={{
          height: `calc(${storeOpts.cover.height} - 56px)`,
          backgroundColor: `${storeOpts.cover.bg_color}`,
        }}
      >
        <div
          className="d-flex flex-column"
          style={{
            zIndex: 4,
            justifyContent: `${storeOpts.cover.content_vertical_position}`,
            alignItems: `${storeOpts.cover.content_horizontal_position}`,
            height: "100%",
            width: `${storeOpts.cover.background.size}`,
            padding: "10px 0",
          }}
        >
          <h1
            style={{
              fontSize: `${storeOpts.cover.headline.font_size}`,
              textAlign: `${storeOpts.cover.headline.text_align}`,
              color: `${storeOpts.cover.headline.color}`,
              backgroundColor: `${storeOpts.cover.headline.bg_color}`,
            }}
          >
            {storeOpts.cover.headline.text}
          </h1>
          <p
            style={{
              maxWidth: screenWidth > BREAK_POINT ? "50vw" : "100%",
              fontSize: `${storeOpts.cover.description.font_size}`,
              textAlign: `${storeOpts.cover.description.text_align}`,
              color: `${storeOpts.cover.description.color}`,
              backgroundColor: `${storeOpts.cover.description.bg_color}`,
            }}
          >
            {storeOpts.cover.description.text}
          </p>
          <div
            style={{
              maxWidth: screenWidth > BREAK_POINT ? "50vw" : "100%",
              width: "100%",
              textAlign: `${storeOpts.cover.button.alignment}`,
            }}
          >
            <button
              className="btn"
              style={{
                fontSize: `${storeOpts.cover.button.font_size}`,
                color: `${storeOpts.cover.button.color}`,
                backgroundColor: `${storeOpts.cover.button.bg_color}`,
                borderColor: `${storeOpts.cover.button.color}`,
              }}
            >
              Order Now
            </button>
          </div>
        </div>
        {storeOpts.cover.overlay.exists && (
          <div
            className="overlay"
            style={{
              background: storeOpts.cover.overlay.color,
            }}
          ></div>
        )}

        {storeOpts.cover.background.exists && (
          <div
            className="h-100 bg-image"
            style={{
              width: `${storeOpts.cover.background.size}`,
              position: "absolute",
              backgroundSize: "cover",
              backgroundImage: `url(${storeOpts.cover.background.image})`,
              backgroundPosition: `${storeOpts.cover.background.image_position}`,
              right:
                storeOpts.cover.background.position == "right" ? 0 : "auto",
              // backgroundAttachment: "fixed",
            }}
          ></div>
        )}
      </div>
      <br />
      <h2>Featured Products</h2>
      <br />
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
