import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

function changeCategory(category) {
    state.currentCategory = category;
    render();
}

function increaseCartCount() {
    state.cartCount++;
    render();
}

function render() {
    ReactDOM.render(
        <App state={state} products={state.products} currentCategory={state.currentCategory} navItems={state.navItems} cartCount={state.cartCount} changeCategory={changeCategory} increaseCartCount={increaseCartCount} />,
        document.getElementById("root")
    );
}
render();

