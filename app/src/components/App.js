import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <Container>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/blog" exact component={BlogPage} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
};

export default App;
