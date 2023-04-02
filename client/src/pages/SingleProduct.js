import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../CSS/SProduct.css";
import { fontSize } from "@mui/system";

const SingleProduct = () => {
  const { prodID } = useParams();
  const [data, setData] = useState([]);
  const [quantity, setQuanitity] = useState(1);

  function handleQuantity(event) {
    setQuanitity(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        //http://localhost:5000/api/products/
        const response = await axios.get(
          `https://noonapp.onrender.com/api/products/${prodID}`
        );
        setData(response.data.product);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="sproduct">
        <img src={data.images} alt="iphone" className="sproduct__image" />

        <div className="sproduct__description">
          <strong className="gray">{data.brand}</strong>
          <h2>{data.name}</h2>
          <div className="sproduct__model gray">
            <p>Model Number : {data.modelNo}</p>
            <small className="sproduct__rating">{data.rating}★</small>
          </div>
          <div className="sproduct__model">
            <p>Now :</p>
            <h3 className="padding10">AED {data.cost}</h3>
            <p className="gray"> Inclusive at VAT</p>
          </div>
          <img
            src="https://f.nooncdn.com/mpcms/EN0001/assets/b84c626d-5cc0-49c2-9189-7bc9a9ffcefc.png"
            alt="saving ad"
            className="sproduct__ad"
          />
          <h5>Quantity</h5>
          <div className="sproduct__end">
            <select
              className="sproduct__quantity"
              value={quantity}
              onChange={handleQuantity}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>

            <button className="sproduct__button">Add to cart</button>
          </div>
        </div>
        <div className="sproduct__policy">
          <div className="sproduct__policies">
            <img src="https://f.nooncdn.com/s/app/com/noon/icons/free_returns.svg" />
            <div>
              <p style={{ marginLeft: "10px" }}>
                Enjoy hassle free returns with this offer
              </p>
              <a style={{ marginLeft: "10px" }}>Learn more</a>
            </div>
          </div>
          <div className="sproduct__policies">
            <img src="https://f.nooncdn.com/s/app/com/noon/icons/warranty.svg" />
            <div>
              <strong style={{ marginLeft: "10px" }}>1 year warranty</strong>
            </div>
          </div>
          <div
            className="sproduct__policies"
            style={{ border: "none", marginTop: "10px" }}
          >
            <img src="https://f.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg" />
            <div style={{ marginLeft: "10px", fontSize: "smaller" }}>
              <strong>FREE RETURNS</strong>
              <p style={{ marginTop: "5px" }}>
                Get free returns on eligible items
              </p>
            </div>
          </div>
          <div className="sproduct__policies" style={{ border: "none" }}>
            <img src="https://f.nooncdn.com/s/app/com/noon/icons/trusted_shipping_usp_v2.svg" />
            <div style={{ marginLeft: "10px", fontSize: "smaller" }}>
              <strong>TRUSTED SHOPPING</strong>
              <p style={{ marginTop: "5px" }}>
                Free shipping when you spend AED 100 and above on express items
              </p>
            </div>
          </div>
          <div className="sproduct__policies" style={{ border: "none" }}>
            <img src="https://f.nooncdn.com/s/app/com/noon/icons/contactless_delivery_usp.svg" />
            <div style={{ marginLeft: "10px", fontSize: "smaller" }}>
              <strong>CONTACTLESS DELIVERY</strong>
              <p style={{ marginTop: "5px" }}>
                Your delivery will be left at your door, valid on prepaid orders
                only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
