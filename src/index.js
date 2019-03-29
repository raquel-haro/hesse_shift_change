import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Main from "./Main";
import SignIn from "./SignIn";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'


// Renders the page content to index.html 
ReactDOM.render(
  <Router>
  <Route component={App} />
  </Router>,
  document.getElementById('root')
)
