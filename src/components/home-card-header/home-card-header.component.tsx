import React from "react";
import "./home-card-header.styles.scss";

import homeHeaderImg from "../../assets/images/home-header.png";
import { FaRegHeart } from "react-icons/fa";

const HomeCardHeader = () => {
  return (
    <div className="home-card-header">
      <div className="home-card-header-img-container">
        <img src={homeHeaderImg} alt="home-header" />
        <FaRegHeart className="heart-icon" />
      </div>
      <div className="home-card-header-info">
        <h2 className="home-card-header-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
          error.
        </h2>
        <p className="home-card-header-date">Sep 28, 2019</p>
      </div>
    </div>
  );
};

export default HomeCardHeader;
