import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import PathfindingVisualizer from "./pathfindingVisualizer/pathfindingVisualizer";

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <PathfindingVisualizer />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
