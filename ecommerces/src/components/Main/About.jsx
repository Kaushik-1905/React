import React from "react";
import Logo1 from "../../assets/images/icon1_80x80_crop_center.png";
import Logo2 from "../../assets/images/icon2_80x80_crop_center.png";
import Logo3 from "../../assets/images/icon3_80x80_crop_center.png";
import Logo4 from "../../assets/images/icon4_80x80_crop_center.png";
import Logo5 from "../../assets/images/icon5_80x80_crop_center.png";
import Logo6 from "../../assets/images/icon6_80x80_crop_center.png";

const features = [
  { img: Logo1, text: "Sugar friendly", bg: "bg-green-100" },
  { img: Logo2, text: "Probiotics", bg: "bg-yellow-100" },
  { img: Logo3, text: "100% Vegan", bg: "bg-teal-100" },
  { img: Logo4, text: "Gluten-free", bg: "bg-pink-100" },
  { img: Logo5, text: "18 Cals", bg: "bg-gray-100" },
  { img: Logo6, text: "Zero waste", bg: "bg-blue-100" },
];

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center">

        {/* Title */}
        <h2>
          WHAT MAKES US DIFFERENT?
        </h2>

        {/* Features */}
        <div className="flex">

          {features.map((item, index) => (
            <div key={index}>
              
              <div>
                <img src={item.img} alt={item.text}/>
              </div>

              <p>{item.text}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;