import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';
import SignUp1 from './pages/signUp1.jsx';
import SignUp2 from './pages/signUp2.jsx';
import SignUp3 from './pages/signUp3.jsx';
import SignUp4 from './pages/signUp4.jsx';

var routes = (
  <Route name="app" path="/" handler={ App } style={{height: '100%'}}>
    <Route name="info" handler={ Info } />
    <Route name="home" handler={ Home } style={{height: '100%'}}/>
    <Route name="signUp1" handler = { SignUp1 } style={{height: '100%'}}/>
    <Route name="signUp2" handler = { SignUp2 } style={{height: '100%'}}/>
    <Route name="signUp3" handler = { SignUp3 } style={{height: '100%'}}/>
    <Route name="signUp4" handler = { SignUp4 } style={{height: '100%'}}/>
    <DefaultRoute handler={ SignUp1 } style={{height: '100%'}}/>
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

export default routes;
