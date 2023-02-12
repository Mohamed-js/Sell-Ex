import React from "react";
import VariantBtn from "./new_product_components/Variant";

const NewProduct = ({ categories, variants }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    for (const [name, value] of data) {
      console.log(name, ":", value);
    }
  };

  console.log(variants);
  return (
    <>
      <h1 className="text-center mb-2">New Product</h1>
      <form onSubmit={handleSubmit} style={{ color: "black" }}>
        <div className="form-group">
          <label htmlFor="name">Product name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            name="product[name]"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Product category</label>
          <select
            name="product[category_id]"
            id="category"
            className="form-control"
          >
            {categories.map((category) => (
              <option key={category.id + category.name} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            className="form-control"
            type="file"
            name="product[image]"
            placeholder="Image"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            className="form-control"
            type="number"
            name="product[quantity]"
            placeholder="Quantity"
            required
          />
        </div>
        {/* {variants.map((variant) => {
          return <VariantBtn name={variant.name} />;
        })} */}
        <div
          style={{
            display: "flex",
            marginBottom: 10,
          }}
        >
          {variants.map((variant) => {
            return <VariantBtn variant={variant} />;
          })}
        </div>
        <button type="submit" className="bg-primary">
          Sumbit
        </button>
      </form>
    </>
  );
};

export default NewProduct;
