import React from "react";
import "./navbar.styles.scss";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/images/logo.png";

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
          </div>
        </nav>
      );
    }}
  </PeiliConsumer>
);

export default Navbar;
