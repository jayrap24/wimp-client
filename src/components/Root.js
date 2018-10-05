import React, { Component } from 'react';

//import react router dependencies
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Store, { history } from '../store';

//Import components
import App from './App';
import VideoGrid from './Main/VideoGrid'
import Single from './Main/Single';

class Root extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router history={history}>
            <Route path={"/"} component={App}> 
              <IndexRoute component={VideoGrid}></IndexRoute>
              <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;