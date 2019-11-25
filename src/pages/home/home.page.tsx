import React from 'react';
import './home.styles.scss';
import HomeCardItems from '../../components/home-card-items/home-card-items.component';

import { PeiliConsumer } from '../../context/context';

const HomePage = () => {
  return (
    <PeiliConsumer>
      {(value: any) => {
        const { feedData, organizationsData } = value;
        return (
          <div className="homepage">
            {feedData.map((item: any) => {
              return <HomeCardItems key={item.id} content={item} organization={organizationsData[item.organizationID]} />;
            })}
          </div>
        )
      }}
    </PeiliConsumer>
  );
};

export default HomePage;
