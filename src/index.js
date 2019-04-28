import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

//Wrapped App in BrowserRouter
//Router props will be passed to anywhere in application
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
