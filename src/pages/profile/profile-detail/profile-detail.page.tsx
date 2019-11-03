import React from 'react';
import './profile-detail.styles.scss';

import ProfileStrengthDetail from '../../../components/profile-strength-detail/profile-strength-detail.component';

const ProfileDetail = () => {
  return (
    <div className="profile-detail">
      <ProfileStrengthDetail />
    </div>
  );
};

export default ProfileDetail;
