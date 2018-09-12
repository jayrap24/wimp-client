import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, browserHistory} from 'react-router';



import Admin from './components/Admin';
import Main from './components/Main';
import Personal from './components/Personal';
import SignIn from './components/SignIn';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"admin"} component={Admin} />
        <Route path={"main"} component={Main} />
        <Route path={"personal"} component={Personal} />
        <Route path={"/"} component={SignIn} />
      </Router>
    );
  }
}

export default App;
