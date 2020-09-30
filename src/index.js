import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import reducer from "./redux/reducers/reducer";
import  thunk from 'redux-thunk';


const middleware = [thunk];
// const store = createStore(reducer);

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();