import React from "react";
import "./App.scss";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import OrganizationPage from "./pages/organizations/organizations.page";
import ProfilePage from "./pages/profile/profile.page";
import RegisterPage from "./pages/register/register.page";
import Error404Page from "./pages/404/404.page";

import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/organizations" component={OrganizationPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={Error404Page} />
      </Switch>
    </div>
  );
};

export default App;
