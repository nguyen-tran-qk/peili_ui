import React from 'react';
import './profile-strength-detail-item.styles.scss';

// import winnerIcon from "../../assets/images/winner.jpeg";
// import secondIcon from "../../assets/images/second.svg";
// import thirdIcon from "../../assets/images/third.svg";
import briefcaseIcon from '../../assets/images/briefcase.png';
import pieIcon from '../../assets/images/pie-chart.png';

const StrengthItem = (props: any) => {
  const { strength } = props;
  return (
    <div className="strength-item">
      <div className="strength-item-header">
        <img src={strength.image} alt="winner" />
        <div className="strength-item-group">
          <h2>{strength.title}</h2>
          <p>{strength.subtitle}</p>
        </div>
      </div>
      <p className="strength-item-discription">{strength.description}</p>
      <div className="strength-item-footer">
        <img src={briefcaseIcon} alt="briefcase" />
        <p>
          Typical Jobs: <span>{strength.typicalJob}</span>
        </p>
      </div>
      <div className="strength-item-footer">
        <img src={pieIcon} alt="pie chart" />
        <p>
          Starts: <span>{strength.starts}</span>
        </p>
      </div>
    </div>
  );
};

export default StrengthItem;
