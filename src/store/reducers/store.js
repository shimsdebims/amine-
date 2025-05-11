import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import your reducers here
import authReducer from './authReducer';
import serviceReducer from './serviceReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  services: serviceReducer,
  bookings: bookingReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;