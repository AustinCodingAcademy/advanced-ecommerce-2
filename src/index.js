import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';


var CurrentCategory = "tires";


function render() {
  ReactDOM.render(
    <App state={state} products={state.products} changeCategory={changeCategory} currentCategory={CurrentCategory}/>,
    document.getElementById("root")
  );
}
render();


function changeCategory(category) {
  CurrentCategory = category
  render()
}