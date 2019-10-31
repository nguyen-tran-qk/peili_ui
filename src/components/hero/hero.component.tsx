import React from "react";
import "./hero.styles.scss";

const Hero = (props: any) => {
  const { image, title } = props;
  return (
    <div
      className="hero"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image}) center/cover fixed no-repeat`
      }}
    >
      <h1 className="hero-title">{title}</h1>
    </div>
  );
};

export default Hero;
