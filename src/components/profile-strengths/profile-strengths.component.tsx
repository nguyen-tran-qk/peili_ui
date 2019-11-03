import React from "react";
import "./profile-strengths.styles.scss";

import winnerIcon from "../../assets/images/winner.jpeg";
import secondIcon from "../../assets/images/second.svg";
import thirdIcon from "../../assets/images/third.svg";

import { FaAngleRight } from "react-icons/fa";

import { Link } from "react-router-dom";

const ProfileStrengths = (props: any) => {
  const { id, title, archive } = props;
  return (
    <Link to={`/profile/${id}`}>
      <div className="profile-strengths">
        <h3 className="strength-title">{title}</h3>
        <div className="strength-icons">
          {/* winner */}
          <div className="icon-group">
            <div className="icon-container">
              <img src={winnerIcon} alt="winner" />
            </div>
            <p>{archive[0].title}</p>
          </div>
          {/* end of winner */}

          {/* second */}
          <div className="icon-group">
            <div className="icon-container">
              <img src={secondIcon} alt="second" />
            </div>
            <p>{archive[1].title}</p>
          </div>
          {/* end of second */}

          {/* second */}
          <div className="icon-group">
            <div className="icon-container">
              <img src={thirdIcon} alt="third" />
            </div>
            <p>{archive[2].title}</p>
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
    </Link>
  );
};

export default ProfileStrengths;
