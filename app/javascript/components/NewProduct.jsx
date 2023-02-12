import React, { useState } from "react";
import VariantBtn from "./new_product_components/Variant";
import VariantBox from "./new_product_components/VariantBox";

const NewProduct = ({ categories, variants }) => {
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [variantsValues, setVariantsValues] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append("product[variants]", JSON.stringify(variantsValues));

    const token = document.querySelector("[name=csrf-token]").content;
    await fetch(`/products.json`, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": token,
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert("Product added successfully...!");
          e.target.reset();
          setSelectedVariants([]);
          setVariantsValues([]);
        }
      });
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
          <label htmlFor="price">Product price</label>
          <input
            id="price"
            className="form-control"
            type="number"
            name="product[selling_price]"
            placeholder="Price"
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

        <h4>Does your product have variants?</h4>

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
            <VariantBox
              variant={variant}
              setVariantsValues={setVariantsValues}
              variantsValues={variantsValues}
            />
          ))}
        </div>
        <hr style={{ width: "100%" }} />
        <button type="submit" className="bg-primary white rounded p-2">
          Save The New Product
        </button>
      </form>
    </>
  );
};

export default NewProduct;
