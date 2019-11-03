import React from 'react';
import './home.styles.scss';

import HomeCardHeader from '../../components/home-card-header/home-card-header.component';
import HomeCardItems from '../../components/home-card-items/home-card-items.component';

import card1Img from '../../assets/images/home-card-1.jpg';
import card2Img from '../../assets/images/home-card-2.jpg';
import card3Img from '../../assets/images/home-card-3.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <HomeCardHeader />
      <HomeCardItems image={card1Img} />
      <HomeCardItems image={card2Img} />
      <HomeCardItems image={card3Img} />
    </div>
  );
};

export default HomePage;
