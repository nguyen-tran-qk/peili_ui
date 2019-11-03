import React from "react";
import "./hero.styles.scss";

const Hero = (props: any) => {
  const { image, title } = props;
  return (
    <div
      className="hero"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${image}) center/cover no-repeat`
      }}
    >
      <h1 className="hero-title">{title}</h1>
    </div>
  );
};

export default Hero;
