import React from "react";
import "./navbar.styles.scss";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/images/logo.png";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
      <h1>Peili</h1>
    </Link>
    <div className="nav-content">
      <FaBars className="nav-icon" />
    </div>
  </nav>
);

export default Navbar;
