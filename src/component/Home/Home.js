import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MeataData from "../layout/MetaData";

const product = {
  name: "Blue TShirt",
  images: [
    {
      url: "https://media.istockphoto.com/photos/mens-shortsleeve-tshirt-mockup-in-front-and-back-views-picture-id1328049157?b=1&k=20&m=1328049157&s=170667a&w=0&h=Vr2S5dDVJaUxE8LqQ9q0lc98yNQFfU7rYaUA2rBnphk=",
    },
  ],
  price: "$60",
  _id: "Prathu P Joshi",
};
const Home = () => {
  return (
    <Fragment>
      <MeataData title= "ECOMMERCE"/>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll
            <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeheading">Featured Products</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
