import React, { useState }  from 'react';
import './profile-rewards.styles.scss';

import productImg from '../../assets/images/img-product.png';

const Rewards = (props: any) => {
  const { reward } = props;
  const [ isRedeemed, redeem ] = useState(false);

  const redeemReward = () => {
    redeem(true);
  };
  
  return (
    <div className="rewards">
      <div className="rewards-img-container">
        <img src={reward.image} alt="product" />
      </div>
      <div className="rewards-info">
        <p className="rewards-subtitle">{reward.description}</p>
        <p className="rewards-exp">{reward.exp} EXP</p>
        <button 
          onClick={redeemReward} 
          className="rewards-button" 
          style={{backgroundColor: isRedeemed ? '#000' : '#fff', color: isRedeemed ? '#fff' : '#000'}}>
            redeem{isRedeemed ? 'ed' : ''}
        </button>
      </div>
    </div>
  );
};

export default Rewards;
