import React from "react";
import "./profile-strengths.styles.scss";

import winnerIcon from "../../assets/images/winner.jpeg";
import secondIcon from "../../assets/images/second.svg";
import thirdIcon from "../../assets/images/third.svg";

import { FaAngleRight } from "react-icons/fa";

const ProfileStrengths = (props: any) => {
  const { title, winnerTitle, secondTitle, thirdTitle } = props;
  return (
    <div className="profile-strengths">
      <h3 className="strength-title">{title}</h3>
      <div className="strength-icons">
        {/* winner */}
        <div className="icon-group">
          <div className="icon-container">
            <img src={winnerIcon} alt="winner" />
          </div>
          <p>{winnerTitle}</p>
        </div>
        {/* end of winner */}

        {/* second */}
        <div className="icon-group">
          <div className="icon-container">
            <img src={secondIcon} alt="second" />
          </div>
          <p>{secondTitle}</p>
        </div>
        {/* end of second */}

        {/* second */}
        <div className="icon-group">
          <div className="icon-container">
            <img src={thirdIcon} alt="third" />
          </div>
          <p>{thirdTitle}</p>
        </div>
        {/* end of second */}
      </div>
      <p className="strengths-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        consequuntur nam porro ea omnis perferendis vel veritatis laborum iste
        tempora!
      </p>
      <FaAngleRight className="strengths-detail-icon" />
    </div>
  );
};

export default ProfileStrengths;
