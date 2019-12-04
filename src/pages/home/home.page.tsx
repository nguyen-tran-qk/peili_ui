import React from 'react';
import './home.styles.scss';
import HomeCardItems from '../../components/home-card-items/home-card-items.component';

import { PeiliConsumer } from '../../context/context';

const HomePage = () => {
  return (
    <PeiliConsumer>
      {(value: any) => {
        if (!value) { return null; }
        const { feedData, organizationsData } = value;
        return (
          <div className="homepage">
            {feedData.map((item: any) => {
              return <HomeCardItems key={item.id} content={item} organization={organizationsData[item.organizationID - 1]} />;
            })}
          </div>
        );
      }}
    </PeiliConsumer>
  );
};

export default HomePage;
