import React, { useState } from "react";
import "../CSS/Cart.css";

const Cart = () => {
  const [quantity, setQuanitity] = useState(1);

  function handleQuantity(event) {
    setQuanitity(event.target.value);
  }

  return (
    <div className="cart__container">
      <div className="cart__left">
        <div className="cart__heading">
          <h2>Cart</h2>
          <p style={{ paddingLeft: "10px", color: "gray" }}>(4 items)</p>
        </div>
        <img
          src="https://f.nooncdn.com/mpcms/EN0001/assets/3df86bb7-ec73-4195-af2c-7efebb6b4840.png"
          alt="ad"
          className="cart__ad"
        />
        <div className="cartProduct__card">
          <div className="cartCard__left">
            <img
              src="https://f.nooncdn.com/p/v1669308172/N32253351A_2.jpg?format=avif&width=240"
              alt="prod img"
              className="cartCard__img"
            />
          </div>

          <div className="cartCard__center">
            <p>Nintendo</p>

            <strong>
              Switch Console (Extended Battery) with Neon Blue and Red JoyCon
            </strong>
          </div>

          <div className="cartCard__right">
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "flex-end",
                marginRight: "10px",
              }}
            >
              <p style={{ marginRight: "5px" }}>AED</p>
              <h3>949</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              <select
                style={{
                  width: "70px",
                  padding: "15px",
                  marginBottom: "10px",
                }}
                value={quantity}
                onChange={handleQuantity}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <img
                src="https://f.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
                alt="express logo"
                style={{ width: "90px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cart__right">
        <div className="order">
          <h3>Order Summary</h3>
          <div className="order__coupon">
            <input type="text" placeholder="Coupon Code" />
            <button>APPLY</button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <p>Subtotal (4 items)</p>
            <strong>AED 2879.00</strong>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <p style={{ padding: "10px 0" }}>Shipping Details</p>
            <strong>Free</strong>
          </div>
          <div className="order__total">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <h4 style={{ paddingRight: "5px" }}>Total</h4>
                <p>(Inclusive of VAT)</p>
              </div>
              <h4>AED 2879.00</h4>
            </div>
            <button className="order__checkout">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
