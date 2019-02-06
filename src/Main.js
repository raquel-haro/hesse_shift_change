import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Listings from "./Listings";
import Post from "./Post"; 

class Main extends Component {
  render() {
    return (
	<HashRouter>
          <div>
            <h1>Hesse Center Shift Manager</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/listings">Listings</NavLink></li>
              <li><NavLink to="/post">Post</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/listings" component={Listings}/>
              <Route path="/post" component={Post}/> 
            </div>
          </div>
	</HashRouter>
    );
  }
}
 
export default Main;
