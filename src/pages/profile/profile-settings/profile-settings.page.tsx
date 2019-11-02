import React, { useState } from "react";
import "./profile-settings.styles.scss";

import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const ProfileSettings = (props: any) => {
  const {
    firstName = "Michael",
    lastName = "Jackson",
    email = "hello@gmail.com"
  } = props;

  const [notification, setNotification] = useState(true);

  const toggleIcon = () => {
    setNotification(!notification);
  };

  return (
    <div className="profile-settings">
      <div className="profile-row">
        <h2 className="profile-row-title">first name</h2>
        <h2 className="profile-row-value">{firstName}</h2>
      </div>
      <div className="profile-row">
        <h2 className="profile-row-title">last name</h2>
        <h2 className="profile-row-value">{lastName}</h2>
      </div>
      <div className="profile-row">
        <h2 className="profile-row-title">email</h2>
        <h2 className="profile-row-value">{email}</h2>
      </div>
      <div className="profile-row" id="notification">
        <h2 className="profile-row-title">push notification</h2>
        {notification ? (
          <FaToggleOn className="notification-icon" onClick={toggleIcon} />
        ) : (
          <FaToggleOff className="notification-icon" onClick={toggleIcon} />
        )}
      </div>
      <div className="profile-row">
        <h2 className="profile-row-title">terms of service</h2>
      </div>
      <div className="profile-row">
        <h2 className="profile-row-title">privacy policy</h2>
      </div>
      <div className="profile-row">
        <h2 className="profile-row-title">logout</h2>
      </div>
    </div>
  );
};

export default ProfileSettings;
