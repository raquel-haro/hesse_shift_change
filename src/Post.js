// Imports
import React, { Component } from "react";
 
// Displays a form for creating a shift user needs covered
class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h2>Post a Shift</h2>
	        <form>
            {/* Start Time of Shift */}
    	      <label for="startTime">Shift Start Time:</label>
            <input type="text" id="startTime"/>
	          <br />
            {/* End Time of Shift*/}
	          <label for="endTime">Shift End Time:</label>
            <input type="text" id="endTime"/>
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
