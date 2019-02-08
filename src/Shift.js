// Imports
import React, { Component } from "react";
 
// Contains the title of the application
class Shift extends Component {
  render() {
    return (
      <div className="Shift">
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
            <tr>
              <td>1:30 PM Feb 4th 2019</td>
              <td>1:00 PM - 4:00 PM Feb 6th 2019</td>
              <td>Yes</td>
              <td>Joe</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default Shift;
