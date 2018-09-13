import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, browserHistory} from 'react-router';



import AdminPage from './components/AdminPage';
import MainPage from './components/MainPage';
import PersonalPage from './components/PersonalPage';
import SignInPage from './components/SignInPage';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path={"admin"} component={AdminPage} />
          <Route path={"main"} component={MainPage} />
          <Route path={"personal"} component={PersonalPage} />
          <Route path={"/"} component={SignInPage} />
      </Router>
    );
  }
}

export default App;
