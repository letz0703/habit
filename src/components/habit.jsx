import React, { Component } from "react";

export default class Habit extends Component {
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.state.count >= 1 && this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          <i className='fa-solid fa-square-plus'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          <i className='fa-solid fa-square-minus'></i>
        </button>
        <button className='habit-button habit-delete'>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}
