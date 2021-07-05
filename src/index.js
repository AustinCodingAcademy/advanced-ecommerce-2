import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";

function changeCategory(category) {
  currentCategory = category;
  console.log("index- " + currentCategory);
  render();
}

function render() {
  ReactDOM.render(
    <App state={state} changeCategory={changeCategory} currentCategory={currentCategory} />,
    document.getElementById("root")
  );
}
render();
