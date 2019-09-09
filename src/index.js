import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

//let currentCategory = "tires";

function changeCategory(category) {
  state.currentCategory = category;
  console.log("currentCategory in changeCategory:",state.currentCategory);
  render();
}

function render() {
  console.log("currentCategory in render:",state.currentCategory);
  ReactDOM.render(
    <App state={state} currentCategory={state.currentCategory} changeCategory={changeCategory} />,
    document.getElementById("root")
  );
}

render();
