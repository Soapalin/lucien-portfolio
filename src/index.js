import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import $ from "jquery";

var words = '(and design!)',
  part,
  offset = 0,
  forwards = true,
  skip_count = 0,
  skip_delay = 20,
  speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words.length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset === 0) {
        forwards = true;
        offset = 0;
      }
    }
    part = words.substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.type-animation').text(part);
  }, speed);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
$(root).ready(function () {
  wordflick();
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
