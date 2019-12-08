import React, { useState, useContext } from 'react';
import './login.styles.scss';

import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

/**
 * Login page component
 */
const LoginPage = (props: RouteComponentProps) => {
  const { usersList, user, setUser } = useContext(UserContext)
  const [email, setEmail] = useState('');

  // find if email exists in users list, then allow to login
  const login = (usersList: []) => () => {
    const validUser = usersList.find((item: any) => item.email === email.trim().toLowerCase());
    if (validUser) {
      setUser(validUser);
      props.history.push('/');
    }
  };

  if (user && user.id) {
    props.history.push('/home');
  }

  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Login</h1>
        <div
          className="form"
          onKeyUp={evt => {
            if (evt.key === 'Enter') {
              login(usersList)();
            }
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="main-input"
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
          <input type="password" name="password" placeholder="Password" className="main-input" />
          <button className="main-button" onClick={login(usersList)}>
            sign in
                </button>
        </div>
        <p className="login-register-subtitle">
          Don't have an account? <Link to="/register">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
