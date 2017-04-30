import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

const products = state.products;
let currentCategory = "tires";
let filteredProducts = products;

function setCategory(category) {
  currentCategory = category;
  render();
}

function filterCatagory(categoryToFilter) {
  filteredProducts = products.filter((product) => {
    return product.category === categoryToFilter;
  });

}

function render() {
  filterCatagory(currentCategory);
  ReactDOM.render(
    <App products={filteredProducts} setCategory={setCategory} />,
    document.getElementById("root")
  );
}
render();
