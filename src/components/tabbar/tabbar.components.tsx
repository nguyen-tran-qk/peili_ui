import React from 'react';
import './tabbar.styles.scss';

import { FaHome, FaSignal, FaRegCommentAlt, FaUser } from 'react-icons/fa';

import { Link, withRouter } from 'react-router-dom';

const TabBar = (props: any) => {
  const path = props.location.pathname;
  return (
    <div className="tabbar">
      <div className={`tabbar-item ${path === '/' ? 'tabbar-active' : null}`}>
        <Link to="/">
          <FaHome className="tabbar-icon" />
          <h3 className="tabbar-title">Home</h3>
        </Link>
      </div>
      <div className={`tabbar-item ${path === '/tests' ? 'tabbar-active' : null}`}>
        <Link to="/tests">
          <FaSignal className="tabbar-icon" />
          <h3 className="tabbar-title">tests</h3>
        </Link>
      </div>
      <div className={`tabbar-item ${path === '/organizations' || path.includes('/organizations') ? 'tabbar-active' : null}`}>
        <Link to="/organizations">
          <FaRegCommentAlt className="tabbar-icon" />
          <h3 className="tabbar-title">Organizations</h3>
        </Link>
      </div>
      <div className={`tabbar-item ${path === '/profile' || path.includes('/profile/') ? 'tabbar-active' : null}`}>
        <Link to="/profile">
          <FaUser className="tabbar-icon" />
          <h3 className="tabbar-title">profile</h3>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(TabBar);
