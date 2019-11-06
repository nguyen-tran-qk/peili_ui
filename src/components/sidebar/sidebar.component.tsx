import React from 'react';
import './sidebar.styles.scss';

import { PeiliConsumer } from '../../context/context';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';

const Sidebar = () => {
  return (
    <PeiliConsumer>
      {(value: any) => {
        if (!value) {
          return null;
        }
        const { handleSidebar, sidebarOpen } = value;

        return (
          <aside
            className="sidebar"
            style={{
              transform: `${sidebarOpen ? 'translateX(0)' : 'translateX(-100%)'}`,
            }}
          >
            <Link to="/" className="logo" onClick={handleSidebar}>
              <img src={logo} alt="logo" />
              <h1>Peili</h1>
            </Link>
            <ul>
              <li>
                <Link to="/" className="sidebar-link" onClick={handleSidebar}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/organizations" className="sidebar-link" onClick={handleSidebar}>
                  Organizations
                </Link>
              </li>
              <li>
                <Link to="/tests" className="sidebar-link" onClick={handleSidebar}>
                  Tests
                </Link>
              </li>

              <li>
                <Link to="/profile" className="sidebar-link" onClick={handleSidebar}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/login" className="sidebar-link" onClick={handleSidebar}>
                  Login
                </Link>
              </li>
            </ul>
          </aside>
        );
      }}
    </PeiliConsumer>
  );
};

export default Sidebar;
