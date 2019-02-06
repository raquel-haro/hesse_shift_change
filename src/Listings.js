import React, { Component } from "react";
 
class Listings extends Component {
  render() {
    return (
      <div>
        <h2>Shift Listings</h2>
        <table>
	  <thead>
	    <tr>
	      <th>Time Posted</th>
	      <th>Shift</th>
	      <th>Posted By</th>
	      <th>Covered?</th>
              <th>Covered By</th>
            </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>1:30 PM Feb 4th 2019</td>
	      <td>1:00 PM - 4:00 PM Feb 6th 2019</td>
              <td>Bob</td>
	      <td>Yes</td>
	      <td>Joe</td>
	    </tr>
	    <tr>
              <td>4:00 PM Feb 3th 2019</td>
              <td>9:00 AM - 12:00 PM Feb 7th 2019</td>
              <td>Sue</td>
              <td>No</td>
              <td>--</td>
            </tr>
	  </tbody>
        </table>
      </div>
    );
  }
}
 
export default Listings;
