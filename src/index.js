import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";
let products = state.products;

function changeCategory(category) {
  currentCategory = category;
  render();
}

function render() {
  ReactDOM.render(
    <App
      products={products}
      changeCategory={changeCategory}
      currentCategory={currentCategory}
    />,
    document.getElementById("root")
  );
}
render();
