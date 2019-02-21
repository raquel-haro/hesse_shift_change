// Imports
import React, { Component } from "react";
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// Displays a form for creating a shift user needs covered
class Post extends Component {
	constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }
  render() {
    return (
      <div className="Post">
        <h2>Post a Shift</h2>
	        <form>
			{/* Date of Shift*/}
			<DayPicker
				selectedDays={this.state.selectedDay}
				onDayClick={this.handleDayClick}
			/>
			<p>
				<label for="shiftDate">Date of Shift: </label>
				{this.state.selectedDay
					? this.state.selectedDay.toLocaleDateString()
					: 'Please select a day 👻'}
			</p>
            {/* Start Time of Shift */}
			<label for="shiftTime">Time of Shift:</label>
			<select>
				<option value="first">10:25 - 11:25 AM</option>
				<option value="second">11:25 - 12:25 PM</option>
				<option value="third">12:25 - 1:25 PM</option>
				<option value="fourth">1:25 - 2:25 PM</option>
				<option value="fifth">2:25 - 3:25 PM</option>
				<option value="sixth">3:25 - 4:25 PM</option>
				<option value="seventh">4:25 - 5:25 PM</option>
				<option value="eighth">5:30 - 7:30 PM</option>
				<option value="ninth">7:00 - 9:00 PM</option>				
				<option value="tenth">7:30 - 9:30 PM</option>
				<option value="eleventh">7:00 - 10:00 PM</option>
			</select>
			<br />
			{/* Help Session? */}
			<label for="helpSession">Is this a Help Session?:</label>
			<select>
				<option selected value="No"> No</option>
				<option value="ECE 100">ECE 100</option>				
				<option value="ECE 222">ECE 222</option>
				<option value="ECE 264">ECE 264</option>
				<option value="ECE 252">ECE 252</option>
				<option value="ME 104">ME 104</option>
				<option value="ME 125">ME 125 - MATLAB</option>	
				<option value="Mechanics">Mechanics of Materials</option>
				<option value="GE 109">GE 109</option>					
			</select>
			<br />   
			{/* Major Preference? */}
			<label for="majorPreference">Is there a major preference?:</label>
			<select>
				<option selected value="No"> No</option>
				<option value="Mechanical">Mechanical</option>
				<option value="Civil">Civil</option>
				<option value="Electrical">Electrical</option>
				<option value="Computer">Computer</option>
			</select>
			<br />  
			{/* Class Preference? */}
			<label for="classPreference">Is there a year preference?:</label>
			<select>
				<option selected value="No"> No</option>
				<option value="Freshman">Freshman</option>
				<option value="Sophomore">Sophomore</option>
				<option value="Junior">Junior</option>
				<option value="Senior">Senior</option>
			</select>
			<br />  
			
			{/* Details for shift */}
            <label for="details">Details:</label>
            <input type="text" id="details"/>
	          <input type="submit" />
	        </form>
      </div>
    );
  }
}

export default Post;
