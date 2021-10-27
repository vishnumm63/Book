import React from 'react';
import Login from './Login';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Rout() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path='/app' exact component={App}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}