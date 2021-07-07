import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

let currentCategory = 'tires';
const changeCategory = category => {
  currentCategory = category;
  render();
};

function render(props) {
  ReactDOM.render(
    <App
      changeCategory={changeCategory}
      currentCategory={currentCategory}
      state={state}
    />,
    document.getElementById('root')
  );
}
render();
