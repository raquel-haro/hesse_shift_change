// Imports
import React, { Component } from "react";

// Table that displays shifts
class ShiftTable extends Component {

  // Need to get table data from database using the api
  // Data will be stored in this.state.data
  constructor(props) {
    super(props); 
    this.state = { 
      data: [],
     }
  }

  // When the component is loaded, get the data
  componentDidMount() {
    return fetch('/api/shifts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson.data
        });
    })
  }

  render() {
    return (
      <div className="ShiftTable">
        <table>
          <thead>
            <tr>
              <th>Shift Date</th>
	      <th>Start</th>
	      <th>End</th>
	      <th>Posted By</th>
              <th>Covered By</th>
            </tr>
          </thead>
	  {/* Right now this just displays every entry in the database */}
          <tbody>
            {
              this.state.data.map(function(shift) {
                console.log(shift);
                return <tr key={shift.id}>
		         <td>{shift.shiftDate}</td>
			 <td>{shift.startTime}</td>
			 <td>{shift.endTime}</td>
			 <td>{shift.postedBy}</td>
			 <td>{shift.coveredBy}</td>
		       </tr>;
              })
            }
          </tbody>
        </table>
      </div>
    );
  }

}
 
export default ShiftTable;
