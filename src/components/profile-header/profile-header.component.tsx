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
        if (!value || !value.user) {
          return null;
        }
        const { user } = value;
        const userStorage = JSON.parse(localStorage.getItem(user.id));
        const mirrors =  {
          education: {
            'slug': 'totalSchoolPoint', // slug in localStorage
            'title': 'Education'
          },
          health: {
            'slug': 'totalHealthPoint', // slug in localStorage
            'title': 'Health'
          },
          social: {
            'slug': 'totalSocialLifePoint', // slug in localStorage
            'title': 'Social'
          },
          leisure: {
            'slug': 'totalFreeTimePoint', // slug in localStorage
            'title': 'Leisure'
          },
        };
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
                <h2 className="name">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="email">{user.email}</p>
                <span className="exp">
                  {/* Get real user experience point from localStorage */}
                  <span>{userStorage.totalExp} EXP</span>
                </span>
              </div>
            </div>
            <div className="profile-mirror">
              {Object.keys(mirrors).map(key => {
                return (
                  <div className="container" key={key}>
                    <Gauge
                      type="circle"
                      value={userStorage[mirrors[key].slug] / 100}
                      valueText={`${userStorage[mirrors[key].slug]} %`}
                      valueTextColor={(userStorage[mirrors[key].slug] / 100) >= 0.5 ? '#4CAF50' : '#f44336'}
                      borderColor={(userStorage[mirrors[key].slug]  / 100) >= 0.5 ? '#4CAF50' : '#f44336'}
                    />
                    <p>{[mirrors[key].title]}</p>
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
