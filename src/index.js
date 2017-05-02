import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = 'tires';
let filteredProducts = '';

function changeCategory(category) {
  currentCategory = category;
  render();
}

function filterProducts(currentCategory) {
  filteredProducts = state.products.filter((e) => {
    return e.category === currentCategory;
  });
}

function render() {
  filterProducts(currentCategory);
  ReactDOM.render(
    <App
      state={state}
      currentCategory={currentCategory}
      changeCategory={changeCategory}
      filteredProducts={filteredProducts}  
    />,
    document.getElementById("root")
  );
}

render();