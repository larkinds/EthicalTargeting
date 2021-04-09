import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PopUp from './PopUp';
import App from '../App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PopUp} />
      <Route exact path="/Profile" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
