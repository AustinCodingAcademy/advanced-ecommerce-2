import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

function render() {

  let currentCategory = "tires"

  const changeCategory = (category) => {
    currentCategory = category;
    render();
  }

  ReactDOM.render(
    <App
    changeCategory={changeCategory}
    state={state}
    currentCategory={currentCategory}
    />,
    document.getElementById("root")
  );
}
render();
