import React from 'react';
import './profile-rewards.styles.scss';

import ProfileHeader from '../../../components/profile-header/profile-header.component';
import Rewards from '../../../components/profile-rewards/profile-rewards.component';

import { Link } from 'react-router-dom';

import { PeiliConsumer } from '../../../context/context';

const ProfileRewards = () => {
  return (
    <PeiliConsumer>
      {(value: any) => {
        const { rewardData } = value;
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
              {rewardData.map((item: any) => {
                return <Rewards key={item.id} reward={item} />;
              })}
            </div>
          </div>
        );
      }}
    </PeiliConsumer>
  );
};

export default ProfileRewards;
