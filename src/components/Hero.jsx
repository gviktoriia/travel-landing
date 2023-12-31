import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero-image" />
      <h1 className="hero-title">Travel made simple.</h1>
    </div>
  );
};

export default Hero;
