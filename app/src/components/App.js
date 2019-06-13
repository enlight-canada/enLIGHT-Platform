import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import NavBar from './NavBar/NavBar';

import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <NavBar>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/blog" exact component={BlogPage} />
          </Switch>
        </NavBar>
      </Router>
    </div>
  );
};

export default App;
