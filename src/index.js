import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";


let currentCategory = "tires";

function changeCategory(category){
  
    currentCategory = category
  ReactDOM.render(
    <App changeCategory={changeCategory} product={state.products} />,
    document.getElementById("root")
  ); 
}

function render(props) {
  ReactDOM.render(
    <App changeCategory={changeCategory} product={state.products} />,
    document.getElementById("root")
  );
}
render();