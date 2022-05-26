import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div>
          <span class='f2 pl2 pr2'>
            <i class='fa-solid fa-leaf green'></i>
          </span>
          <span class='f1 blue i b pr1'>Habit Tracker</span>
          <span class='habit-count'>{this.props.totalCount}</span>
        </div>
      </>
    );
  }
}
