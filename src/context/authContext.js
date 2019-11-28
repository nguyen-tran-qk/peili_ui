import React, { createContext, useEffect, useState } from 'react';
import usersData from './usersData';

import { getTestResultsByUser } from '../utils/userTestResults';

export const AuthContext = createContext();

export const AuthContextProvider = props => {
  const userId = usersData[0].id;
  const [userTestResults, setUserTestResults] = useState(null);

  useEffect(() => {
    console.log('AuthContext useEffect');
    const getResult = getTestResultsByUser(userId);
    setUserTestResults(getResult);
  }, [!userTestResults]);

  if (userTestResults) {
    return <AuthContext.Provider value={{ userId, userTestResults }}>{props.children}</AuthContext.Provider>;
  } else {
    return null;
  }
};
