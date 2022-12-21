import React, { useEffect } from "react";

const Cart = ({ cartItems }) => {
  useEffect(() => {
    console.log(cartItems);
  }, []);
  return (
    <div>
      <h1 className="text-center">My Cart</h1>
      {cartItems.length > 0 &&
        cartItems.map((item) => {
          return (
            <div className="row">
              <div className="col-3">
                <img
                  src={item.product_img}
                  alt={item.product_price}
                  className="full-img"
                />
              </div>
              <div className="col-6">
                <h5>{item.product_price}</h5>
                <h6>{item.size}</h6>
                <h6>{item.quantity}</h6>
              </div>
              <div className="col-3">Do Something..!</div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
