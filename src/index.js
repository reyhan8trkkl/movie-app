import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

const semanticUICSS = document.createElement("link");
semanticUICSS.rel = "stylesheet";
semanticUICSS.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css";
document.head.appendChild(semanticUICSS);

const semanticUIJS = document.createElement("srcipt");
semanticUIJS.src =
  "https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js";
  document.head.appendChild(semanticUIJS);

const allExtensions = compose(
  applyMiddleware(thunk,promise,logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const myStore = createStore(rootReducer, allExtensions);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
