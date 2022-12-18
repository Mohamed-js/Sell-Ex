import React, { useState } from 'react';
import { newBill } from '../Helpers';
import SaleItem from './SaleItem';

function App({ products }) {
  const [sales, setSales] = useState();
  const [itemCount, setItemCount] = useState(1);
  const [continues, setContinues] = useState();
  const [forLater, setForLater] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    newBill(sales).then((res) => {
      if (res.message === 'Saved') {
        window.location.reload();
      }
    });
  };

  return (
    <>
      <div className="container max-width my-2">
        <button
          id="new-sale"
          type="button"
          className="btn bg-gradient white m-3 bold"
          onClick={() => {
            setItemCount((prev) => prev + 1);
          }}>
          Add Sale +
        </button>
      </div>
      <div className="container max-width my-2">
        <form onSubmit={handleSubmit}>
          <div id="sales-container">
            {itemCount && (
              <SaleItem index={1} products={products} setSales={setSales} />
            )}
            {itemCount > 1 && (
              <SaleItem index={2} products={products} setSales={setSales} />
            )}
            {itemCount > 2 && (
              <SaleItem index={3} products={products} setSales={setSales} />
            )}
            {itemCount > 3 && (
              <SaleItem index={4} products={products} setSales={setSales} />
            )}
            {itemCount > 4 && (
              <SaleItem index={5} products={products} setSales={setSales} />
            )}
            {itemCount > 5 && (
              <SaleItem index={6} products={products} setSales={setSales} />
            )}
            {itemCount > 6 && (
              <SaleItem index={7} products={products} setSales={setSales} />
            )}
            {itemCount > 7 && (
              <SaleItem index={8} products={products} setSales={setSales} />
            )}
            {itemCount > 8 && (
              <SaleItem index={9} products={products} setSales={setSales} />
            )}
            {itemCount > 9 && (
              <SaleItem index={10} products={products} setSales={setSales} />
            )}
            {itemCount > 10 && (
              <SaleItem index={11} products={products} setSales={setSales} />
            )}
          </div>
          {continues && (
            <div className="pop-up">
              <div className="pop-up-content p-4">
                <h4>Client Name</h4>
                <input
                  type="text"
                  className="form-control"
                  placeholder={'Optional if no debt **'}
                  required={forLater}
                  onChange={(e) =>
                    setSales((prev) => {
                      return { ...prev, buyer: e.target.value };
                    })
                  }
                />
                <h4 className="mt-4">Do you want to set a debt for this operation?</h4>
                <div className="row w-100">
                  <div className="col-6">
                    <div className="col-6">
                      <input
                        name="forlater"
                        type="radio"
                        onChange={() => {
                          setForLater(false);
                          if (sales.paid_amount) {
                            delete sales.paid_amount;
                          }
                        }}
                        value="whole_sale_price"
                        className="m-2"
                        defaultChecked
                      />
                      <span>لا</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <input
                      name="forlater"
                      type="radio"
                      onChange={() => {
                        setForLater(true);
                      }}
                      value="whole_sale_price"
                      className="m-2"
                    />
                    <span>Yes</span>
                  </div>
                </div>
                {forLater && (
                  <>
                    <h4 className="mt-4">Paid Amount :</h4>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Money the client paid"
                      required
                      onChange={(e) =>
                        setSales((prev) => {
                          return { ...prev, paid_amount: e.target.value };
                        })
                      }
                    />
                  </>
                )}
                <div className="mt-4">
                  <input
                    type="submit"
                    value="Proceed"
                    className="btn m-2 bg-gradient-tertiary white"
                  />
                  <input
                    type="button"
                    value="Cancel"
                    className="btn m-2 btn-secondary"
                    onClick={() => {
                      setContinues(false);
                      setForLater(false);
                      if (sales.paid_amount) {
                        delete sales.paid_amount;
                      }
                      if (sales.buyer) {
                        delete sales.buyer;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <input
            type="button"
            value="Proceed"
            className="btn m-2 bg-gradient-tertiary white"
            onClick={() => setContinues(true)}
          />
          <a href="/sales">Cancel</a>
        </form>
      </div>
    </>
  );
}

export default App;
