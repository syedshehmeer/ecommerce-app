import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "../CSS/Product.css";

const ProductCard = (props) => {
  return (
    <div>
      <Link to={`/sproduct/${props.prod._id}`}>
        <div className="product">
          <img
            className="product__img"
            src={props.prod.images}
            alt={props.prod.name}
          />
          <div className="product__name">
            <p>{props.prod.name}</p>
          </div>
          <div className="product__price">
            <small>AED</small> <strong>{props.prod.cost}</strong>
          </div>
          <div className="product__footer">
            <img
              className="product__delivery"
              src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg"
              alt="delivery"
            />
            <small className="product__rating">{props.prod.rating}★</small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
