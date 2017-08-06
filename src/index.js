import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import state from "./state";


var currentCategory = "tires";
function changeCategory(category) {
  currentCategory = category;///cannot use strict equals here that was a problem earlier
  render();
}

function render() {
  ReactDOM.render(
    <App state={state} changeCategory={changeCategory} currentCategory={currentCategory} />,
    document.getElementById("root")
  );
}
render();
