import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './organization-event.styles.scss';

import organImg from '../../assets/images/organ-event.jpg';
import indicatorsImg from '../../assets/images/indicators.png';

const OrganizationEvent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 50
    }
  };
  return (
    <div className="organization-event-wrapper">
      <Carousel
        ssr
        partialVisbile
        deviceType="mobile"
        itemClass="image-item"
        responsive={responsive}
      >
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
      </Carousel>
    </div>
  );
};

export default OrganizationEvent;
