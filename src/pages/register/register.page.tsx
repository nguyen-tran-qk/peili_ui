import React from "react";
import "./register.styles.scss";

import { Link } from "react-router-dom";

const RegisterPage = () => (
  <div className="register">
    <div className="form-container">
      <h1 className="title">register</h1>
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Display Name"
          className="main-input"
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="main-input"
        />
        <button className="main-button">sign up</button>
      </form>
      <p className="login-register-subtitle">
        Already have an account? <Link to="/login">Sign in here</Link>
      </p>
    </div>
  </div>
);

export default RegisterPage;
