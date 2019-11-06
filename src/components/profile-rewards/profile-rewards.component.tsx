import React from 'react';
import './profile-rewards.styles.scss';

import productImg from '../../assets/images/img-product.png';

const Rewards = () => {
  return (
    <div className="rewards">
      <div className="rewards-img-container">
        <img src={productImg} alt="product" />
      </div>
      <div className="rewards-info">
        <p className="rewards-subtitle">ELIXIA exclusive 3-month membership</p>
        <p className="rewards-exp">100 EXP</p>
        <button className="rewards-button">redeem</button>
      </div>
    </div>
  );
};

export default Rewards;
