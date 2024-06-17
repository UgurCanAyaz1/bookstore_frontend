import React from 'react'

function Checkout() {
  return (
    <>
    <section className="checkout-section page">
  <h2>Checkout</h2>
  <div className="main">
    <div className="checkout-form">
      <h4>Billing &amp; Shipping Address</h4>
      <div className="form-container">
        <div className="form-control Country-field">
          <select
            className="select-box"
            style={{
              border: "1px solid #f0f0f0",
              padding: "5px 10px",
              height: 45,
              borderRadius: 5,
              width: "100%",
              appearance: "none",
              backgroundImage: "url(../images/chevron-down.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "16px 20px",
              backgroundPosition: "right 0.75rem center",
              fontSize: 15,
              outline: "none"
            }}
          >
            <option>USA</option>
            <option>India</option>
            <option>Australia</option>
            <option>New Zealand</option>
            <option>russia</option>
            <option>United Kingdom</option>
            <option>Africa</option>
            <option>Sri Lanka</option>
            <option>Pakistan</option>
            <option>USA</option>
            <option>USA</option>
          </select>
        </div>
        <div className="name-field input-field">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="address-field">
          <textarea rows={3} placeholder="Address" defaultValue={""} />
        </div>
        <div className="input-field">
          <input type="text" placeholder="City / Town" />
          <input type="text" placeholder="State" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Company Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <input type="text" placeholder="Phone no." maxLength={10} />
          <input type="text" placeholder="Postcode/Zip" />
        </div>
        <button>Add Address</button>
      </div>
    </div>
    <div className="your-order">
      <h4>Your Order</h4>
      <div className="order-table">
        <table cellSpacing={0}>
          <tbody>
            <tr className="heading">
              <th>Image</th>
              <th>Product Name</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <img src="../images/book-4.jpg" alt="" />
              </td>
              <td>Red Queen</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>
                <img src="../images/book-7.jpg" alt="" />
              </td>
              <td>Heroes Of Olympus</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>
                <img src="../images/book-9.jpg" alt="" />
              </td>
              <td>The Ruins Of Gorlan</td>
              <td>$15</td>
            </tr>
            <tr>
              <td>
                <img src="../images/book-10.jpg" alt="" />
              </td>
              <td>Percy Jackson</td>
              <td>$30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<section className="detail-payment">
  <div className="summary-section">
    <h4>Order Total</h4>
    <div className="order-detail-table">
      <table>
        <tbody>
          <tr>
            <td>Order Subtotal</td>
            <td>$125</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Free Shipping</td>
          </tr>
          <tr>
            <td>Coupon</td>
            <td>$5</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$506</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="payment-section">
    <h4>Payment Method</h4>
    <div className="payment-form">
      <div className="payment-option">
        <select>
          <option>Paytm</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
          <option>Cash On Delivery</option>
        </select>
      </div>
      <div className="card-name">
        <input type="text" placeholder="Card Holder Name" />
      </div>
      <div className="card-no">
        <input type="text" placeholder="Card Number" />
      </div>
      <div className="card-meta">
        <input type="text" placeholder="MM/YY" onfocus="(this.type='month')" />
        <input type="text" placeholder="CVV" />
        <input type="text" placeholder="Postal" />
      </div>
      <button>Place Order Now</button>
    </div>
  </div>
</section>;

</>

  )
}

export default Checkout