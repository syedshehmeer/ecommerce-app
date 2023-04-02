import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "../CSS/Product.css";
import ProductCard from "./ProductCard";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //http://localhost:5000/api/products
        const response = await axios.get(
          "https://noonapp.onrender.com/api/products"
        );
        setProduct(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {product.map((prod) => (
          <Grid item xs={6.5} sm={4} md={2} key={prod._id}>
            <ProductCard prod={prod} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
