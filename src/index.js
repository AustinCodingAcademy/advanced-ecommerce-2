import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';
var CurrentCategory = "tires";



ReactDOM.render(
  <App state={state} products={state.products}/>,
  document.getElementById('root')
);

function changeCategory(props) {
products.Category = props.CurrentCategory
}