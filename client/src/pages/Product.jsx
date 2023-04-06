import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "../CSS/Product.css";
import ProductCard from "./ProductCard";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //http://localhost:5000/api/products
        const response = await axios.get(
          "https://noon1.vercel.app/api/products"
        );

        setProduct(response.data.products);
        isLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {product.map((prod) => (
            <Grid item xs={8} sm={4} md={2} key={prod._id}>
              <ProductCard prod={prod} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Product;
