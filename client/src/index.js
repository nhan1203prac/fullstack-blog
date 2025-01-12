import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './redux/reducers';
import mySaga from './redux/saga';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
  // </React.StrictMode>
);




