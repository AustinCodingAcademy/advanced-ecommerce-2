import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";
let filteredProducts = state.products;

function changeCategory(category){
   console.log(category);
   currentCategory = category;

   filteredProducts = state.products.filter(product =>{
     return product.category === category;
   })

   render();

}

function render() {
  ReactDOM.render(
    // passing in current category by way of props to App
    <App
    state={state}
    products={filteredProducts}
    changeCategory={changeCategory}
  />,
    document.getElementById("root")
  );
}
render();
