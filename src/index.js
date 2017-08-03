import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";

function changeCategory(category){
  currentCategory = category;
  render();
}

function render() {
  ReactDOM.render(
    <App currentCategory={currentCategory} changeCategory={changeCategory} state={state} />,
    document.getElementById("root")
  );
}
render();

