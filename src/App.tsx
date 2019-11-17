import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.page';
import LoginPage from './pages/login/login.page';
import OrganizationPage from './pages/organizations/organizations.page';
import OrganizationDetailPage from './pages/organizations/organizations-detail/organizations-detail.page';
import ProfilePage from './pages/profile/profile.page';
import ProfileRewards from './pages/profile/profile-rewards/profile-rewards.page';
import ProfileSettings from './pages/profile/profile-settings/profile-settings.page';
import ProfileDetail from './pages/profile/profile-detail/profile-detail.page';
import RegisterPage from './pages/register/register.page';
import Error404Page from './pages/404/404.page';
import TestsPage from './pages/tests/tests.page';
// import FeedBackPage from "./pages/feedback/feedback.page";
import QuestionsPage from './pages/questions/questions.page';
import QuizResults from './pages/quiz-results/QuizResults.page';
import TabBar from './components/tabbar/tabbar.components';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/organizations" component={OrganizationPage} />
        <Route path="/organizations/:id" component={OrganizationDetailPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route path="/profile/rewards" component={ProfileRewards} />
        <Route path="/profile/settings" component={ProfileSettings} />
        <Route path="/profile/:id" component={ProfileDetail} />
        {/* <Route exact path="/feedback" component={FeedBackPage} /> */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route path="/tests" component={TestsPage} />
        <Route path="/questions/:level" component={QuestionsPage} />
        <Route exact path="/quiz-results" component={QuizResults} />
        <Route component={Error404Page} />
      </Switch>

      <TabBar />
    </div>
  );
};

export default App;
