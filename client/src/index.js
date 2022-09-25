import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import Homepage from './pages/homepage/homepage';
import Interest from './pages/interest/interest';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Signin /> */}
    {/* <Signup /> */}
    <Homepage />
    {/* <Interest /> */}
    {/* <Signin /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
