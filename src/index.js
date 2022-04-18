import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import 'antd/dist/antd.dark.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
