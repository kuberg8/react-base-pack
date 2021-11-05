import { applyMiddleware, combineReducers, createStore, compose } from "redux";

// import authReducer from './auth-reducer.js'
import appReducer from "./reducers/app";

import thunkMiddleware from "redux-thunk";
// import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
  // auth: authReducer,
  // form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
