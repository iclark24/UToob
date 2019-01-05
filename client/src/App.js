import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import Reset from './components/Reset';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Switch>
            <ProtectedRoute exact path = '/' component = {Home} />
            <Route exact path = '/login' component = {Login} />
            <Route exact path = '/register' component = {Register} />
            <Route exact path = '/reset' component = {Reset} />
            <Route component = {NoMatch} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;