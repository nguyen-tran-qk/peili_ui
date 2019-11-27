import React, { useState }  from 'react';
import './profile-rewards.styles.scss';

import { PeiliUserConsumer } from '../../context/userContext';

const Rewards = (props: any) => {
  const [ isRedeemed, redeem ] = useState(false);
  const [ errorRedeem, setError ] = useState(false);
  return (
    <PeiliUserConsumer>
      {(value: any) => {
        const { user, substractEXP } = value;
        const { reward } = props;
        const redeemReward = (exp: any) => {
          if (user.exp >= exp) {
            redeem(true); // change button style
            substractEXP(exp); // update user data
          } else {
            setError(true); // render error in reward card
          }
        };
        return (
          <div className="rewards">
            <div className="rewards-img-container">
              <img src={reward.image} alt="product" />
            </div>
            <div className="rewards-info">
              <p className="rewards-subtitle">{reward.description}</p>
              <p className="rewards-exp">{reward.exp} EXP</p>
              <p 
                style={{display: errorRedeem ? 'block' : 'none', color: 'red', marginBottom: '10px'}}
              >
                You don't have enough EXP to redeem
              </p>
              <button 
                onClick={() => redeemReward(reward.exp)}
                className="rewards-button" 
                style={{backgroundColor: isRedeemed ? '#000' : '#fff', color: isRedeemed ? '#fff' : '#000'}}
              >
                redeem{isRedeemed ? 'ed' : ''}
              </button>
            </div>
          </div>
        );
    }}
    </PeiliUserConsumer>
  );
};

export default Rewards;
