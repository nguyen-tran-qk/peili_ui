import React from "react";
import "./profile.styles.scss";

import ProfileHeader from "../../components/profile-header/profile-header.component";

import ProfileStrengths from "../../components/profile-strengths/profile-strengths.component";

import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfileHeader />
      <div className="profile-tab">
        <Link to="/profile" className="profile-link profile-active">
          Your Strengths
        </Link>
        <Link to="/profile/rewards" className="profile-link">
          Rewards
        </Link>
      </div>
      <ProfileStrengths
        title="carrer"
        winnerTitle="realistic"
        secondTitle="investigate"
        thirdTitle="artistic"
      />
      <ProfileStrengths
        title="ability"
        winnerTitle="problem solving"
        secondTitle="creativity"
        thirdTitle="cooperation"
      />
      <ProfileStrengths
        title="personality"
        winnerTitle="rational thinking"
        secondTitle="seeking confidence"
        thirdTitle="experimenting"
      />
    </div>
  );
};

export default ProfilePage;
