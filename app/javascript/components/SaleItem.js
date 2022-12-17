import React, { useState, useEffect } from 'react';

const SaleItem = ({ index, products, setSales }) => {
  const [productsToShow, setProductsToShow] = useState();
  const [prod, setProd] = useState();
  const [changingSearch, setChangingSearch] = useState(false);
  const sale = `sale_` + index;
  const handleClick = (e) => {
    const sellingId = e.target.getAttribute('product-id');
    const sellingPrice = e.target.getAttribute('selling-price');
    const wholePrice = e.target.getAttribute('whole-selling-price');
    setProd({ selling_price: sellingPrice, whole_selling_price: wholePrice });
    document.getElementById(`search${index}`).remove();
    document.getElementById(`item${index}`).textContent = e.target.textContent;
    setSales((prev) => {
      return {
        ...prev,
        [sale]: {
          [`sale${index}[id]`]: sellingId,
          [`sale${index}[type]`]: 'selling_price',
        },
      };
    });
  };

  const handleSearchChange = (e) => {
    setChangingSearch(true);
    setProductsToShow(
      products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleChange = (e) => {
    setSales((prev) => {
      return {
        ...prev,
        [sale]: { ...prev[`${sale}`], [e.target.name]: e.target.value },
      };
    });
  };

  useEffect(() => {
    setProductsToShow(products);
  }, []);

  return (
    <div id={`div${index}`}>
      {/* <h3
        className="m-0 p-0 text-center"
        onClick={() => document.getElementById(`div${index}`).remove()}>
        x
      </h3> */}

      <div className="row position-relative sale m-2 border p-3">
        <div className="row col-6">
          <input
            id={`search${index}`}
            type="text"
            className="form-control m-2"
            placeholder="اسم المنتج"
            onChange={handleSearchChange}
            autoComplete="off"
            required
          />
          <h4
            className="mr-2"
            id={`item${index}`}
            onChange={handleSearchChange}></h4>

          <input
            onChange={handleChange}
            name={`sale${index}[quantity]`}
            type="number"
            className="form-control m-2"
            placeholder="عدد الوحدات"
            required
          />
          <input
            name={`sale${index}[discount]`}
            onChange={handleChange}
            type="number"
            className="form-control m-2"
            placeholder="الخصم"
          />
        </div>
        {changingSearch && (
          <div className="row col-5 border m-1 rounded products-select mt-4">
            {!prod &&
              productsToShow &&
              productsToShow.map((product) => (
                <p
                  key={product.id}
                  onClick={handleClick}
                  product-id={product.id}
                  selling-price={product.selling_price}
                  whole-selling-price={product.whole_sale_price}
                  className="row col-12 border-bottom product-select m-0 p-1">
                  {product.name}
                </p>
              ))}
            {prod && (
              <div className="row w-100">
                <div className="col-6">
                  <input
                    type="radio"
                    name={`sale${index}[type]`}
                    onChange={handleChange}
                    className="m-2"
                    value="selling_price"
                    defaultChecked
                    required
                  />
                  <span>الجمهور {prod.selling_price} ج.م</span>
                </div>
                <div className="col-6">
                  <input
                    type="radio"
                    name={`sale${index}[type]`}
                    onChange={handleChange}
                    value="whole_sale_price"
                    className="m-2"
                  />
                  <span>الجملة {prod.whole_selling_price} ج.م</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SaleItem;
