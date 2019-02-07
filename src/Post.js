import React, { Component } from "react";
 
class Post extends Component {
  render() {
    return (
      <div>
        <h2>Post a Shift</h2>
	<form>
    	  <label for="startTime">Shift Start Time:</label>
          <input type="text" id="startTime"/>
	  <br />
	  <label for="endTime">Shift End Time:</label>
          <input type="text" id="endTime"/>
	  <input type="submit" />
	</form>
      </div>
    );
  }
}
 
export default Post;
