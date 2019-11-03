import React from 'react';
import './profile-strength-detail.styles.scss';

import { PeiliConsumer } from '../../context/context';

import { withRouter } from 'react-router-dom';

import StrengthItem from './profile-strength-detail-item.component';

const ProfileStrengthDetail = (props: any) => {
  return (
    <PeiliConsumer>
      {(value: any) => {
        const { strengthsData } = value;
        let id = props.match.params.id;
        id = parseInt(id);
        const filteredStrength = strengthsData.find((item: any) => item.id === id);
        return (
          <div className="profile-strength-detail">
            {filteredStrength.archive.map((item: any, index: any) => {
              return <StrengthItem key={index} strength={item} />;
            })}
          </div>
        );
      }}
    </PeiliConsumer>
  );
};

export default withRouter(ProfileStrengthDetail);
