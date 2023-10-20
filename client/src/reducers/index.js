// import { combineReducers } from "redux";
// import posts from './posts';

// export default combineReducers({ posts })

import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';

export const reducers = combineReducers({ posts, auth });