import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import CommentForm from './components/CommentForm';
import Reset from './components/Reset';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import VForm from './components/AddVideoForm'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FetchUser>
          <Container>
            <Switch>
              <Route exact path = '/' component = {Home} />
              <ProtectedRoute exact path = '/newvideo' component = {VForm} />
              <Route exact path = '/login' component = {Login} />
              <Route exact path = '/register' component = {Register} />
              <Route exact path = '/reset' component = {Reset} />
              <ProtectedRoute exact path = '/CommentForm' component = {CommentForm} />
              <Route component = {NoMatch} />
            </Switch>
          </Container>
        </FetchUser>
      </div>
    );
  }
}

export default App;