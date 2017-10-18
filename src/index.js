import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires"

function changeCategory(category){
  currentCategory = category;
  render();
  console.log("changeCategory was called")
}

function render() {
  ReactDOM.render(
    <App current={currentCategory} change={changeCategory} state={state} />,
    document.getElementById("root")
  );
}
render();

