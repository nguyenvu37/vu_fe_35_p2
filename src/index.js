import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-notifications/lib/notifications.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers/reducers";
import thunk from "redux-thunk";
import "./i18n";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
