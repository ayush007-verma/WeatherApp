import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import {Test} from './Test'
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <Test /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
