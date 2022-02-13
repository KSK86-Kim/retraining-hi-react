import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './normalize.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// исправление с рендером модалки
// ReactDOM.render(
//   <React.StrictMode>
//     <h1>hi, model</h1>
//   </React.StrictMode>,
//   document.getElementById('modal')
// );
