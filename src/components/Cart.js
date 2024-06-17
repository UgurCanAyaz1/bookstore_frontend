import React from "react";

function Cart() {
  return (
    <section className="cart-item page">
      <h2>Book Cart</h2>
      <div className="product-table">
        <table cellSpacing={0}>
          <tbody>
            <tr className="heading">
              <th>Product Img</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Delete</th>
            </tr>
            <tr className="data">
              <td>
                <img src="../images/book-2.jpg" alt="" />
              </td>
              <td>The Wright Brothers</td>
              <td>$45</td>
              <td>
                <div className="input-group">
                  <div className="quantity">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus"
                      data-field="quantity"
                    />
                    <input
                      type="text"
                      step={1}
                      min={1}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field"
                      style={{ width: "4.5rem" }}
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus"
                      data-field="quantity"
                    />
                  </div>
                </div>
              </td>
              <td>$45</td>
              <td>
                <i className="fa-solid fa-trash" />
              </td>
            </tr>
            <tr className="data">
              <td>
                <img src="../images/book-6.jpg" alt="" />
              </td>
              <td>Harry Potter</td>
              <td>$28</td>
              <td>
                <div className="input-group">
                  <div className="quantity">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus"
                      data-field="quantity"
                    />
                    <input
                      type="text"
                      step={1}
                      min={1}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field"
                      style={{ width: "4.5rem" }}
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus"
                      data-field="quantity"
                    />
                  </div>
                </div>
              </td>
              <td>$28</td>
              <td>
                <i className="fa-solid fa-trash" />
              </td>
            </tr>
            <tr className="data">
              <td>
                <img src="../images/book-7.jpg" alt="" />
              </td>
              <td>Heroes Of Olympus</td>
              <td>$25</td>
              <td>
                <div className="input-group">
                  <div className="quantity">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus"
                      data-field="quantity"
                    />
                    <input
                      type="text"
                      step={1}
                      min={1}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field"
                      style={{ width: "4.5rem" }}
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus"
                      data-field="quantity"
                    />
                  </div>
                </div>
              </td>
              <td>$25</td>
              <td>
                <i className="fa-solid fa-trash" />
              </td>
            </tr>
            <tr className="data">
              <td>
                <img src="../images/book-9.jpg" alt="" />
              </td>
              <td>The Ruins Of Gorlan</td>
              <td>$40</td>
              <td>
                <div className="input-group">
                  <div className="quantity">
                    <input
                      type="button"
                      defaultValue="-"
                      className="button-minus"
                      data-field="quantity"
                    />
                    <input
                      type="text"
                      step={1}
                      min={1}
                      defaultValue={1}
                      name="quantity"
                      className="quantity-field"
                      style={{ width: "4.5rem" }}
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="button-plus"
                      data-field="quantity"
                    />
                  </div>
                </div>
              </td>
              <td>$40</td>
              <td>
                <i className="fa-solid fa-trash" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Cart;
