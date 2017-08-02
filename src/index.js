import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";


var currentCategory = 'tires';

// When a user clicks category from TopNav, only filtered items show (currentCategory)
function changeCategory(category) {
  currentCategory = category;
  render();
}

function render() {
  ReactDOM.render(
    <App state={state} changeCategory={changeCategory} currentCategory={currentCategory} />,
    document.getElementById("root")
  );
}
render();
