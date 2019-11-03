import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import LoginPage from './pages/login/login.page';
import OrganizationPage from './pages/organizations/organizations.page';
import ProfilePage from './pages/profile/profile.page';
import ProfileRewards from './pages/profile/profile-rewards/profile-rewards.page';
import ProfileSettings from './pages/profile/profile-settings/profile-settings.page';
import ProfileDetail from './pages/profile/profile-detail/profile-detail.page';
import RegisterPage from './pages/register/register.page';
import Error404Page from './pages/404/404.page';
import TestsPage from './pages/tests/tests.page';
import FeedBackPage from './pages/feedback/feedback.page';
import QuestionsPage from './pages/questions/questions.page';

import TabBar from './components/tabbar/tabbar.components';
import TabbarMargin from './components/tabbar/tabbar-margin.components';

import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/organizations" component={OrganizationPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route path="/profile/rewards" component={ProfileRewards} />
        <Route path="/profile/settings" component={ProfileSettings} />
        <Route path="/profile/:id" component={ProfileDetail} />
        <Route exact path="/feedback" component={FeedBackPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route path="/tests" component={TestsPage} />
        <Route path="/questions" component={QuestionsPage} />
        <Route component={Error404Page} />
      </Switch>
      <TabbarMargin />
      <TabBar />
    </div>
  );
};

export default App;
