//this file is an external store where react components will interact with
// which makes this file called the store. The store will
// be connected to the /components/App.js file 

import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';



//import the root reducer
import rootReducer from './reducers/index';

// import data files from data folder
import comments from './data/comments';
import posts from './data/posts';


//create an object for the default data
const defaultState = {
    posts: posts,
    comments: comments
};

// create a variable called store...
// combine the reducers by using rooReducer
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);



export default store;












