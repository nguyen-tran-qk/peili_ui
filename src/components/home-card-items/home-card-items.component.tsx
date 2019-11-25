import React from 'react';
import './home-card-items.styles.scss';

import { FaHeart } from 'react-icons/fa';
import { url } from 'inspector';

const HomeCardItems = (props: any) => {
  const { image } = props;
  return (
    <div className="home-card-items">
      <div className="home-card-item-img-container" style={{backgroundImage: `url(${image})`}}>
        <FaHeart className="heart-icon" />
      </div>
      <div className="home-card-heading">
        <img src={image} alt="card-items" />
        <h4>Peili</h4>
      </div>
      <div className="home-card-item-info">
        <h3 className="home-card-items-title">Lorem ipsum dolor sit amet consectetur adipisicing elit?</h3>
        <p className="home-card-items-date">sep 16, 2019</p>
      </div>
    </div>
  );
};

export default HomeCardItems;
