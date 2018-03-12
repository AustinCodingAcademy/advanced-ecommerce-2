import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";



function render(props) {
  ReactDOM.render(
    <App product={state.products} />,
    document.getElementById("root")
  );
}
render();

function changeCategory(category){
  return(
    currentCategory = category
  )
}
changeCategory();