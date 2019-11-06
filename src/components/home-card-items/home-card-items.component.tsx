import React from 'react';
import './home-card-items.styles.scss';

import { FaHeart } from 'react-icons/fa';

const HomeCardItems = (props: any) => {
  const { image } = props;
  return (
    <div className="home-card-items">
      <div className="home-card-item-info">
        <h3 className="home-card-items-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ullam?</h3>
        <p className="home-card-items-date">sep 16, 2019</p>
      </div>
      <div className="home-card-item-img-container">
        <img src={image} alt="card-items" />
        <FaHeart className="heart-icon" />
      </div>
    </div>
  );
};

export default HomeCardItems;
