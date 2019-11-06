import React from "react";
import "./navbar.styles.scss";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/images/logo1.png";

import { PeiliConsumer } from "../../context/context";

const Navbar = () => (
  <PeiliConsumer>
    {(value: any) => {
      const { handleSidebar } = value;
      return (
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <h1>Peili</h1>
          </Link>
          <div className="nav-content">
            <FaBars className="nav-icon" onClick={handleSidebar} />
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/organizations" className="nav-link">
                Organizations
              </Link>

              <Link to="/profile" className="nav-link">
                Profile
              </Link>

              <Link to="/login" className="nav-link">
                Login
              </Link>
            </div>
          </div>
        </nav>
      );
    }}
  </PeiliConsumer>
);

export default Navbar;
