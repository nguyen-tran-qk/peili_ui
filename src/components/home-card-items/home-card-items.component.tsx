import React, { useState } from 'react';
import './home-card-items.styles.scss';

import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeCardItems = (props: any) => {
  const { content, organization } = props;
  const [ isLiked, setLike ] = useState(false);

  const toggleLike = () => {
    setLike(!isLiked);
  };

  return (
    <div className="home-card-items">
      <div className="home-card-item-img-container" style={{backgroundImage: `url(${content.image})`}}>
        <button onClick={toggleLike}>
          <FaHeart className="heart-icon" style={{color: isLiked ? 'ff0000' : '#fff'}} />
        </button>
      </div>
      <div className="home-card-heading">
        <img src={organization.logo} alt="card-items" />
        <Link to={`/organizations/${organization.id}`} className="profile-link profile-active">
          <h4>{organization.name}</h4>
        </Link>
      </div>
      <div className="home-card-item-info">
        <h3 className="home-card-items-title">{content.title}</h3>
        <p className="home-card-items-date">{content.createdAt}</p>
      </div>
    </div>
  );
};

export default HomeCardItems;
