import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

function render() {

  let currentCategory = "tires";
  function changeCategory(category) {
    let currentCategory = category;
  }

  ReactDOM.render(
    <App state={state} />,
    document.getElementById("root")
  );
}
render();
