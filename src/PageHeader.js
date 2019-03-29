// Imports
import React, { Component } from "react";
 
// Contains the title of the application
class PageHeader extends Component {
  render() {
    return (
      <div className="PageHeader">
        <h1>Hesse Center Shift Manager</h1>
        <p>Welcome, {this.props.name}</p>
        <button onClick={this.props.logout} className="button">
            Log out
        </button>
      </div>
    );
  }
}
 
export default PageHeader;
