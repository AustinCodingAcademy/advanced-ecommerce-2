import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";

function changeCategory(category) {
  let currentCategory = category; //this might need to be reversed
  console.log("currentCategory:",currentCategory);
  render();
}

function render() {
  ReactDOM.render(
    <App state={state} currentCategory={currentCategory} changeCategory={changeCategory} />,
    document.getElementById("root")
  );
}
render();
