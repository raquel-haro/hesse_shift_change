// Imports
import React, { Component } from "react";
// Imported Components
import Shift from "./Shift";
 
// Homepage for a particular user
// Will Display shifts the user has posted that have not happened yet
// Will display shifts the user has agreed to cover for other users
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
	      <div>
	        <h4>My Available Shifts</h4>
          {/* FUTURE: Create a loop through all posted shifts
            filter out those which are posted by logged in user */}
          <Shift />
	      </div>
	      <div>
	        <h4>My Covered Shifts</h4>
          {/* FUTURE: Create a loop through all shifts covered 
            by logged in user */}
          <Shift />
	      </div>
      </div>
    );
  }
}
 
export default Home;
