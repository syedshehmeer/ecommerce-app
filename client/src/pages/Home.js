import React from "react";
import "../CSS/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/14f42524-e0e5-46d3-bf6a-8c28b336c2ca.png"
          alt="home banner"
        />
        <div className="home__banner2">
          <div className="home__slider">
            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/0b2597c3-7ffb-468e-b98b-0611340586b1.png"
              alt="slider"
            />
          </div>
          <div className="home__appAd">
            <img
              src="https://f.nooncdn.com/mpcms/EN0002/assets/ba7cbb24-568e-4f9f-8149-59fc16c4d51b.png"
              alt="app ad"
            />
            <img
              src="https://f.nooncdn.com/mpcms/EN0002/assets/f397f1cf-ebab-404a-b12f-562c812148f5.png"
              alt="app ad"
            />
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product__title">
          <h2>Products</h2>
        </div>
        <Product />
      </div>
    </div>
  );
};

export default Home;
