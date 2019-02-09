// Imports
import React, { Component } from "react";
// Component Imports
import ShiftTable from "./ShiftTable";
 
// Displays all listings for current and future dates
class Listings extends Component {
  render() {
    return (
      <div className="Listings">
        <h2>Shift Listings</h2>
        <ShiftTable />
      </div>
    );
  }
}
 
export default Listings;
