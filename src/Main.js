// Imports
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom"; // Needed for Route
// Component Imports
import PageHeader from "./PageHeader";
import Navigation from "./Navigation";
import Home from "./Home";
import Listings from "./Listings";
import Post from "./Post";
import Shift from "./Shift"; 

// Main Component for App
// Contains the Page Header
// Contains the Navigation Bar
// Contains the Current Component details
class Main extends Component {
  render() {
    return (
	<HashRouter>
          <div className="Main">
            {/* Contains the items for page header */}
            <PageHeader />
            {/* Contains the Navigation Bar for page links */}
            <Navigation />

            {/* Contains the Body of the Website, actual page content */}
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/listings" component={Listings}/>
              <Route path="/post" component={Post}/>
	      <Route path="/shift/:id" component={Shift}/>
            </div>
          </div>
	</HashRouter>
    );
  }
}
 
export default Main;
