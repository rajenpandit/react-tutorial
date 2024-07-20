import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// function _jsx(element, children) {
//   var elem = document.createElement(element);
//   elem.innerText = children.children;
//   return elem;
// }

// var element = document.getElementById('root');
// element.appendChild(_jsx("div", {
//   children: "Test1"
// }))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

