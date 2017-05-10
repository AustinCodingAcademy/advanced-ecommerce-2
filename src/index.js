import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

function changeCategory(category) {
  console.log(category);
  // currentCategory = category;

}

function render() {
  ReactDOM.render(
    <App
      state={state}
      changeCategory={changeCategory}
      currentCategory={(category) => changeCategory(category)}
    />,
    document.getElementById("root")
  );
}
render();
