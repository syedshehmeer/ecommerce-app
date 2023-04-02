import React from "react";
import "../CSS/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__upper">
        <div className="footer__upperLeft">
          <h2>We're Always Here To Help</h2>
          <p>Reach out to us through any support channels</p>
        </div>
        <div className="footer__upperRight">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <img
              src="https://img.icons8.com/ios/256/help--v1.png"
              alt=""
              style={{ height: "20px", width: "20px", marginRight: "10px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <small>Help Center</small>
              <strong>help.noon.com</strong>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            <img
              src="https://img.icons8.com/material-rounded/1x/filled-message.png"
              alt=""
              style={{ height: "20px", width: "20px", marginRight: "10px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <small>Email Support</small>
              <strong>care.noon.com</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__middle">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h6>SHOP ON THE GO</h6>
          <div style={{ marginTop: "5px" }}>
            <img
              src="https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
              alt=""
            />
            <img
              src="https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg"
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h6>CONNECT WITH US</h6>
          <div style={{ display: "flex" }}>
            <div className="footer__social">
              <img
                src="https://cdn-icons-png.flaticon.com/512/20/20673.png?w=740&t=st=1680299663~exp=1680300263~hmac=7e5e90e76b1da22ec575b897cd01dfc08005d76d41efb76337e11fa577bb0305"
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <div className="footer__social">
              <img
                src="https://img.freepik.com/free-icon/twitter_318-903628.jpg?size=626&ext=jpg"
                alt=""
                style={{ height: "20px", width: "20px", alignItems: "center" }}
              />
            </div>
            <div className="footer__social">
              <img
                src="https://img.freepik.com/free-icon/instagram_318-566796.jpg?size=626&ext=jpg"
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <div className="footer__social">
              <img
                src="https://img.freepik.com/free-icon/linkedin_318-566799.jpg?size=626&ext=jpg"
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__lower">
        <small>© 2023 noon. All Rights Reserved</small>
        <div className="footer__lowerPayment">
          <img
            src="https://f.nooncdn.com/s/app/com/noon/images/mastercard-color.svg"
            alt="master"
            className="payment__card"
          />
          <img
            src="https://f.nooncdn.com/s/app/com/noon/images/visa-color-v2.png"
            alt="visa"
            className="payment__card"
          />
          <img
            src="https://f.nooncdn.com/s/app/com/noon/images/cash-color.svg"
            alt="cash"
            className="payment__card"
          />
          <img
            src="https://f.nooncdn.com/s/app/com/noon/images/amex-color.svg"
            alt="aexpress"
            className="payment__card"
          />
        </div>
        <div className="footer__lowerPolicies">
          <ul>
            <li>Careers</li>
            <li>Warranty Policy</li>
            <li>Sell with us</li>
            <li>Terms Of Use</li>
            <li>Terms of Sale</li>
            <li>Privacy Policy</li>
            <li>Consumer Rights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
