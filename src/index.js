import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";


let currentCategory = "tires";


let categoryFilter = (currentCategory) => {
  return state.products.filter(state.products.category === currentCategory);
}

function changeCategory(category){
  
    currentCategory = category
    render(category)
}

function render(props) {
  ReactDOM.render(
    <App changeCategory={changeCategory} product={state.products} currentCategory={currentCategory}/>,
    document.getElementById("root")
  );
}
render();