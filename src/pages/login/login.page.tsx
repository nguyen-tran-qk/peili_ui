import React from "react";
import "./login.styles.scss";

import { Link } from "react-router-dom";

const LoginPage = () => (
  <div className="login">
    <div className="form-container">
      <h1 className="title">Login</h1>
      <form className="form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="main-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="main-input"
        />
        <button className="main-button">sign in</button>
      </form>
      <p className="login-register-subtitle">
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </div>
  </div>
);

export default LoginPage;
