import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Try from './Try';


ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
  , document.getElementById("root"));

// ReactDOM.render(<Try />, document.getElementById("root"));

