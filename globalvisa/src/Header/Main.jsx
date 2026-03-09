import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./Main.css";
import vactore1 from "../assets/vactore-1.svg";
import GroupImage from "../assets/Group-2.png"


export default function Main() {
  return <HeroSlider />;
}

const slides = [
  {
    id: 1,
    title: "Creative Digital Agency",
    text: "We build modern websites with powerful experiences.",
    image: "https://cms.codemonsterstudio.com/globalvisa/wp-content/uploads/2025/07/Rectangle-1.png"
  },
  {
    id: 2,
    title: "We Create Experiences",
    text: "Design. Development. Branding.",
    image: "https://cms.codemonsterstudio.com/globalvisa/wp-content/uploads/2025/07/Rectangle-2.png"
  },
  {
    id: 3,
    title: "Grow Your Business",
    text: "Powerful solutions for your company.",
    image: "https://cms.codemonsterstudio.com/globalvisa/wp-content/uploads/2025/07/Rectangle-1-1.png"
  }
];

function HeroSlider() {
  return (
    <div className="hero-container">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay" />
              <div className="content">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <button className="hero-btn">Learn More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="about">
        <div className="flex">

          <div className="col-6">
            <span>About Us</span>

            <h2>Fast,Reliable,And Stress-Free
              <span>Visa Assistance.</span>
            </h2>

            <p>Lorem ipsum dolor sit amet consectetur. Elementum massa risus euismod semper fringilla tristique viverra urna metus.</p>
            <p>Lectus velit enim fermentum sit sed augue dolor. Egestas in dictumst sapien non id et imperdiet volutpat ullamcorper. Eu tristique mattis vitae sem facilisis. Quis at ut vestibulum vestibulum neque. Proin rhoncus felis faucibus quam non sed. Semper suspendisse sodales urna quam purus sodales.</p>
            <p>Tempus vulputate elementum nulla mauris hac adipiscing sit. Posuere consectetur at urna scelerisque lorem sapien ut diam semper. Enim nisl massa purus purus orci.</p>
          </div>

          <div className="col-6">
            <div className="image">
              <img src={vactore1} alt="vectore1" />
            </div>
            <div className="mainImage">
              <img src={GroupImage} alt="GroupImage" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}