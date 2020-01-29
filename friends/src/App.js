import React from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';

import './App.css';

import Login from './components/Login';

import Friends from './components/Friend';
import PrivateRoute from './components/PrivateRoute.js';


function App() {
  return (
    <div className="App">
      <div>
        <nav className="nav">
          <NavLink to="/api/friends"> My Friends (Protected) </NavLink>
          <NavLink to="/api/login"> Login </NavLink>
        </nav>
        
      </div>
      <section className="Routes">
      <Switch>
        
        <PrivateRoute exact path="/api/friends" component={Friends} />
        <Route exact path="/api/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
      </section>

    </div>

  );
}

export default App;
