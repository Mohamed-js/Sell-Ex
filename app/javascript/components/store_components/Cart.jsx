import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  const [order, setOrder] = useState({});
  const params = useParams();
  useEffect(() => {}, []);

  const handleDelete = (id) => {
    const filteredCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredCartItems);
    localStorage.setItem("cart-products", JSON.stringify(filteredCartItems));
  };

  const handleChange = (e) => {
    setOrder((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handlePlaceOrder = async () => {
    console.log({
      ...order,
      store_id: params.id,
      order_items: cartItems,
    });
    const response = await fetch("/orders.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...order,
        store_id: params.id,
        order_items: cartItems,
      }),
    });
    if (response.status == 200) {
      localStorage.setItem("cart-products", JSON.stringify([]));
      setCartItems([]);
    }
  };
  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <>
          <h1 className="text-center">My Cart</h1>
          <br />
          <div className="d-flex m-0 justify-content-center">
            <div className="pr-2" style={{ maxWidth: 450 }}>
              {cartItems.map((item, i) => {
                return (
                  <div className="max-width cart-item" key={i}>
                    <div
                      className="p-0"
                      style={{
                        maxHeight: 110,
                        maxWidth: 120,
                        minHeight: 110,
                        minWidth: 120,
                      }}
                    >
                      <img
                        src={item.product_img}
                        alt={item.product_price}
                        className="full-img fit-cover"
                      />
                    </div>
                    <div className="cart-item-info">
                      <div
                        style={{
                          padding: "6px 10px",
                        }}
                      >
                        <h6>{item.product_name}</h6>
                        <h6 className="secondary">${item.product_price}</h6>
                        <p className="m-0">
                          <small>{item.size.toUpperCase()}</small>
                        </p>
                        <p className="m-0">
                          <small>
                            {item.quantity}{" "}
                            {item.quantity > 1 ? "pieces" : "piece"}
                          </small>
                        </p>
                      </div>
                      <div
                        style={{
                          padding: "6px 10px",
                        }}
                      >
                        <button
                          className="white bg-danger btn"
                          onClick={(e) => handleDelete(item.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="p-2 cart-info"
              style={{ backgroundColor: "#252c47" }}
            >
              <p>
                Total: $
                {cartItems.reduce((accumulator, item) => {
                  accumulator =
                    accumulator + item.product_price * item.quantity;
                  return accumulator;
                }, 0)}
                <br />
                {cartItems.reduce((accumulator, item) => {
                  accumulator = accumulator + item.quantity;
                  return accumulator;
                }, 0)}{" "}
                items in your cart.
              </p>
              <button
                className="btn bg-gradient-tertiary white"
                data-toggle="modal"
                data-target={`#modal  `}
              >
                Checkout
              </button>
              <div
                className="modal fade black"
                id={`modal`}
                data-backdrop="static"
                data-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Shipping Info
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          aria-describedby="name"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          name="phone"
                          aria-describedby="phone"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          name="country"
                          aria-describedby="country"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          aria-describedby="city"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          aria-describedby="address"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        data-dismiss="modal"
                        type="button"
                        className="btn btn-primary"
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </>
      ) : (
        <h1 className="text-center">Your cart is empty...</h1>
      )}
    </>
  );
};

export default Cart;
