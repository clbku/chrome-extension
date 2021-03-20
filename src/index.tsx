import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import "./index.css";
import { pReducer } from "./redux";
import root from "./redux/saga";
import reportWebVitals from "./reportWebVitals";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  pReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(root);

// @ts-ignore
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
