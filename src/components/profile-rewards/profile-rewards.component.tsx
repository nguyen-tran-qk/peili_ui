import React from "react";
import "./profile-rewards.styles.scss";

const Rewards = () => {
  return (
    <div className="rewards">
      <h1 className="rewards-title">elixia</h1>
      <div className="rewards-info">
        <p className="rewards-subtitle">ELIXIA exclusive 3-month membership</p>
        <p className="rewards-exp">100 EXP</p>
        <button className="rewards-button">redeem</button>
      </div>
    </div>
  );
};

export default Rewards;
