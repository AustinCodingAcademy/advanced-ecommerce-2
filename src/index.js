import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

const changeCat = (cat) => {
    state.currentCat = cat;
    render();
}

function render() {
    ReactDOM.render(
        <App state={state} changeCat={changeCat} />,
        document.getElementById("root")
    );
}

render();

