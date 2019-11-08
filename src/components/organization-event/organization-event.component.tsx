import React from 'react';
import './organization-event.styles.scss';

import organImg from '../../assets/images/organ-event.jpg';
import indicatorsImg from '../../assets/images/indicators.png';

const OrganizationEvent = () => {
  return (
    <div className="organization-event-wrapper">
      <div className="organization-event">
        <div className="organization-event-img-container">
          <img src={organImg} alt="organization" />
        </div>
        <div className="organization-event-info">
          <h2 className="organization-event-info-time">thu, oct 31, 10:00 am</h2>
          <p className="organization-event-info-title">Board-game night</p>
        </div>
        <div className="organization-event-footer">
          <p>10 attendees</p>
          <button className="rewards-button">attend</button>
        </div>
      </div>
      <img src={indicatorsImg} alt="indicators" className="indicators" />
    </div>
  );
};

export default OrganizationEvent;
