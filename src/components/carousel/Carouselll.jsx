import React from "react";
import { Carousel } from "antd";
import "./Carouselll.css";
import carousel1 from "../Images/carousel1.png";
import carousel2 from "../Images/carousel2.png";
import carousel3 from "../Images/carousel3.png";
import carousel4 from "../Images/carousel4.png";

const contentStyle = {
  height: "480px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "grey",
};

const Carouselll = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="carusel">
      <Carousel autoplay>
        <div>
          <img className="carousel__images" src={carousel1} alt="image" />
        </div>
        <div>
          <img className="carousel__images" src={carousel2} alt="image2" />
        </div>
        <div>
          <img className="carousel__images" src={carousel3} alt="image3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselll;
