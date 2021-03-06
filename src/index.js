import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import './App.css';
import "./styles/main.scss";
import * as serviceWorker from "./serviceWorker";

serviceWorker.unregister();

ReactDOM.render(
   <Router>
     <App />
   </Router>,
   document.getElementById('root')
);