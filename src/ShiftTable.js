// Imports
import React, { Component } from "react";
// Imported Components
import Shift from "./Shift";

// Table that contains the shifts
class ShiftTable extends Component {
  render() {
    return (
      <div className="ShiftTable">
        <table>
          <thead>
            <tr>
              <th>Time Posted</th>
              <th>Shift</th>
              <th>Covered?</th>
              <th>Covered By</th>
            </tr>
          </thead>
          <tbody>
            <Shift />
	    <Shift />
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default ShiftTable;
