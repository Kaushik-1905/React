import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Main/Main.css'
import '../../assets/style/global.css'

import hero1 from "../../assets/images/hero1.webp";
import hero2 from "../../assets/images/hero2.webp";
import hero3 from "../../assets/images/hero3.webp";


import productImg1 from "../../assets/images/pro-01-a.webp"



import {
  RiStarLine
} from "react-icons/ri";

const Main = () => {

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: "ease-in-out",
  };

  return (


    <section className="hero">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <Slider {...settings}>
            <div className="slide">
              <img src={hero1} alt="Fresh Juice" />
              <div className="content">
                <span className="subtitle">Orange juicy</span>
                <h1>APPETIZING <br /> FRESH JUICE</h1>
                <button className="hero-btn">SHOP NOW</button>
              </div>
            </div>

            <div className="slide">
              <img src={hero2} alt="Healthy Drink" />
              <div className="content">
                <span className="subtitle">Strawberry juicy</span>
                <h1>BLUEBERRY <br /> FRESH JUICE</h1>
                <button className="hero-btn">SHOP NOW</button>
              </div>
            </div>

            <div className="slide">
              <img src={hero3} alt="Healthy Drink" />
              <div className="content">
                <span className="subtitle">Kiwi juicy</span>
                <h1>FRESH FOR <br /> YOUR HEALTH</h1>
                <button className="hero-btn">SHOP NOW</button>
              </div>
            </div>
          </Slider>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="product-card">
            <div className="flex">
              <div className="image">
                <img src={productImg1} alt="productImage" />
              </div>
              <div>
                <h5>Blood orange with kale</h5>
                <ul className="flex">
                  <li className="icons"><RiStarLine /></li>
                  <li className="icons"><RiStarLine /></li>
                  <li className="icons"><RiStarLine /></li>
                  <li className="icons"><RiStarLine /></li>
                  <li className="icons"><RiStarLine /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>

      </div>
    </section>
  );
};

export default Main;