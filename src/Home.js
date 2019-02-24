// Imports
import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite'
// Imported Components
import ShiftTable from "./ShiftTable";
 
// Homepage for a particular user
// Will Display shifts the user has posted that have not happened yet
// Will display shifts the user has agreed to cover for other users
class Home extends Component {
  render() {
    return (
      <div className={`Home`}>
        <h2>Home</h2>
      <div className={`Shifts ${css(styles.flexContainer)}`}>
	      <div className={`AvailableShifts ${css(styles.shiftListContainer)}`}>
	        <h4>My Available Shifts</h4>
          {/* FUTURE: Create a loop through all posted shifts
          filter out those which are posted by logged in user */}
          <ShiftTable />
	      </div>
	      <div className={`CoveredShifts ${css(styles.shiftListContainer)}`}>
	        <h4>My Covered Shifts</h4>
          {/* FUTURE: Create a loop through all shifts covered 
            by logged in user */}
          <ShiftTable />
	      </div>
      </div>
      </div>
    );
  }
}
 
// CSS Specific to This Component
const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  shiftListContainer: {
    margin: "1rem",
    width: '100%',
  },

})

export default Home;
