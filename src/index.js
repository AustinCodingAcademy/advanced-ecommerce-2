import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";
import TopNav from "./components/TopNav";

let currentCategory = "tires";

function changeCategory(category){
  currentCategory = category;
  render();
}

function render() {
  ReactDOM.render(
    <App currentCategory={currentCategory} changeCategory={changeCategory()} state={state} />,
    <TopNav changeCategory={changeCategory()} />,
    document.getElementById("root")
  );
}
// render();
