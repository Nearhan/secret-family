import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';

var routes = (
  <Route name="app" path="/" handler={ App } style={{height: '100%'}}>
    <Route name="info" handler={ Info } />
    <Route name="home" handler={ Home } style={{height: '100%'}}/>
    <DefaultRoute handler={ Home } style={{height: '100%'}}/>
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

export default routes;
