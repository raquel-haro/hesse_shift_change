import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
	<div>
	  Shifts I Posted
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
	<div>
	  Shifts I Took
	  <table>
          <thead>
            <tr>
              <th>Time Posted</th>
              <th>Shift</th>
              <th>Posted By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1:30 PM Feb 4th 2019</td>
              <td>1:00 PM - 4:00 PM Feb 6th 2019</td>
              <td>Bob</td>
            </tr>
          </tbody>
        </table>
	</div>
      </div>
    );
  }
}
 
export default Home;
