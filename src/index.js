import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import state from "./state";


var currentCategory = [];
function changeCategory(category) {
  return currentCategory.push(category);
}

function render() {
  ReactDOM.render(
    <App state={state} changeCategory={changeCategory} currentCategory={currentCategory} />,
    document.getElementById("root")
  );
}
render();
