import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../CSS/SProduct.css";
import { addProduct } from "../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const SingleProduct = () => {
  const { prodID } = useParams();
  const [loading, isLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleQuantity(event) {
    setQuantity(event.target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        //http://localhost:5000/api/products/
        const response = await axios.get(
          `https://noonapp.onrender.com/api/products/${prodID}`
        );
        setProduct(response.data.product);
        isLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <div>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <div className="sproduct">
          <img src={product.images} alt="iphone" className="sproduct__image" />

          <div className="sproduct__description">
            <strong className="gray">{product.brand}</strong>
            <h2>{product.name}</h2>
            <div className="sproduct__model gray">
              <p>Model Number : {product.modelNo}</p>
              <small className="sproduct__rating">{product.rating}★</small>
            </div>
            <div className="sproduct__model">
              <p>Now :</p>
              <h3 className="padding10">AED {product.cost}</h3>
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

              <button className="sproduct__button" onClick={handleClick}>
                Add to cart
              </button>
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
                  Free shipping when you spend AED 100 and above on express
                  items
                </p>
              </div>
            </div>
            <div className="sproduct__policies" style={{ border: "none" }}>
              <img src="https://f.nooncdn.com/s/app/com/noon/icons/contactless_delivery_usp.svg" />
              <div style={{ marginLeft: "10px", fontSize: "smaller" }}>
                <strong>CONTACTLESS DELIVERY</strong>
                <p style={{ marginTop: "5px" }}>
                  Your delivery will be left at your door, valid on prepaid
                  orders only.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
