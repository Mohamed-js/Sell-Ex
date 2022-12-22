import React, { useState, useEffect } from "react";

const Product = ({ product, img, setCartItems, cartItems }) => {
  let products = cartItems;
  const [cartProduct, setCartProduct] = useState({
    id: `${Math.random()}_${product.name}_${Math.random()}`,
    size: "m",
    quantity: 1,
  });
  const handleChange = (e) => {
    setCartProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAddToCart = () => {
    products = cartItems;
    products.push(cartProduct);
    localStorage.setItem("cart-products", JSON.stringify(products));
    setCartItems(JSON.parse(localStorage.getItem("cart-products")));
  };

  useEffect(() => {
    setCartProduct({
      ...cartProduct,
      product_id: product.id,
      product_price: product.selling_price,
      product_img: img,
      product_name: product.name,
    });
  }, [products]);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 store-product">
      <h6 className="text-center">{product.name}</h6>
      <div className="product-img">
        <img className="full-img rounded" src={img} alt={product.name} />
      </div>

      <p className="m-1">${product.selling_price}</p>
      <button
        type="button"
        className="btn btn-success w-100"
        data-toggle="modal"
        data-target={`#modal${product.id}`}
      >
        <i className="fa fa-shopping-cart"></i> Add To Cart
      </button>

      <div
        className="modal fade black"
        id={`modal${product.id}`}
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
                {product.name}
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
                <label htmlFor="quantity">How many pieces.?</label>
                <input
                  defaultValue={cartProduct.quantity}
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  aria-describedby="quantity"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <label htmlFor="size">Size</label>
              <select
                defaultValue={cartProduct.size}
                className="form-control"
                id="size"
                name="size"
                onChange={(e) => handleChange(e)}
              >
                <option value={"m"}>M</option>
                <option value={"l"}>L</option>
                <option value={"xl"}>XL</option>
                <option value={"xxl"}>XXL</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                data-dismiss="modal"
                type="button"
                className="btn btn-primary"
                onClick={handleAddToCart}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
