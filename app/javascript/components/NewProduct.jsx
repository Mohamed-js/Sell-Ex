import React, { useRef, useState } from "react";
import VariantBtn from "./new_product_components/Variant";

const NewProduct = ({ categories, variants }) => {
  // const variantsRef = useRef();
  const [selectedVariants, setSelectedVariants] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    for (const [name, value] of data) {
      console.log(name, ":", value);
    }
  };

  const handleVariantClick = (variant) => {
    const variantInArr = selectedVariants.filter((v) => v.name == variant.name);
    if (variantInArr.length >= 1) {
      setSelectedVariants((prev) => prev.filter((v) => v.name != variant.name));
      return;
    }
    setSelectedVariants((prev) => [...prev, variant]);
  };
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
            return (
              <VariantBtn variant={variant} funcToDo={handleVariantClick} />
            );
          })}
        </div>
        <div>
          {selectedVariants.map((variant) => (
            <div
              className="border rounded"
              style={{
                width: "100px",
                height: "100px",
                background: "green",
              }}
            >
              <div>{variant.name}</div>
            </div>
          ))}
        </div>
        <button type="submit" className="bg-primary white rounded p-1">
          Add Product
        </button>
      </form>
    </>
  );
};

export default NewProduct;
