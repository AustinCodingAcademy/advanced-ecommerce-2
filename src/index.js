import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

var currentCategory = 'tires';
function changeCategory(category) {
  currentCateogry = category;
  render
};


function render() {
  ReactDOM.render(
    <App products={state.products} currentCategory ={changeCategory} currentCategory={currentCategory}/>,
    document.getElementById("root")
  );
}
render();

