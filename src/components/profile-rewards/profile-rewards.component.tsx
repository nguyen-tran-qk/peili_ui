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
          const userExp = JSON.parse(localStorage.getItem(user.id)).totalExp;
          if (userExp >= exp) {
            redeem(true); // change button style
            const modifiedUserData = {...JSON.parse(localStorage.getItem(user.id)), totalExp: userExp - exp};
            localStorage.setItem(user.id, JSON.stringify(modifiedUserData));
            substractEXP(exp); // update reward point
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
                className={`rewards-error-message ${errorRedeem ? 'show' : ''}`}
              >
                You don't have enough EXP to redeem
              </p>
              <button 
                onClick={() => redeemReward(reward.exp)}
                className={`rewards-button ${isRedeemed ? 'redeemed' : ''}`}
                disabled={isRedeemed}
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
