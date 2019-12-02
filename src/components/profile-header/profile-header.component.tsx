import React from 'react';
import { Gauge } from 'framework7-react';
import './profile-header.styles.scss';

import settingImg from '../../assets/images/settings.png';

import { Link } from 'react-router-dom';

import { PeiliUserConsumer } from '../../context/userContext';

const ProfileHeader = () => {
  return (
    <PeiliUserConsumer>
      {(value: any) => {
        const { user } = value;
        return (
          <div>
            <div className="profile-header">
              <Link to="/profile/settings">
                <img src={settingImg} alt="settings" className="settings-icon" />
              </Link>

              <div className="profile-img-container">
                <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="avatar" />
              </div>
              <div className="profile-info">
                <h2 className="name">{user.firstName} {user.lastName}</h2>
                <p className="email">{user.email}</p>
                <span className="exp">
                  <span>{user.exp} EXP</span>
                </span>
              </div>
            </div>
            <div className="profile-mirror">
              {Object.keys(user.metrics).map(key => {
                return (
                  <div className="container" key={key}>
                    <Gauge
                      type="circle"
                      value={user.metrics[key]}
                      valueText={`${user.metrics[key]*100} %`}
                      valueTextColor={user.metrics[key] >= 0.5 ? '#4CAF50' : '#f44336'}
                      borderColor={user.metrics[key] >= 0.5 ? '#4CAF50' : '#f44336'}
                    />
                    <p>{key}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
    }}
    </PeiliUserConsumer>
  );
};

export default ProfileHeader;
