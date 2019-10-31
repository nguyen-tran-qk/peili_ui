import React from "react";
import "./profile-rewards.styles.scss";

import ProfileHeader from "../../../components/profile-header/profile-header.component";
import Rewards from "../../../components/profile-rewards/profile-rewards.component";

import { Link } from "react-router-dom";

const ProfileRewards = () => {
  return (
    <div className="profile-rewards">
      <ProfileHeader />
      <div className="profile-tab">
        <Link to="/profile" className="profile-link ">
          Your Strengths
        </Link>
        <Link to="/profile/rewards" className="profile-link profile-active">
          Rewards
        </Link>
      </div>
      <div className="rewards-group">
        <div className="rewards-pair">
          <Rewards />
          <Rewards />
        </div>
        <div className="rewards-pair">
          <Rewards />
          <Rewards />
        </div>
        <div className="rewards-pair">
          <Rewards />
          <Rewards />
        </div>
      </div>
    </div>
  );
};

export default ProfileRewards;
