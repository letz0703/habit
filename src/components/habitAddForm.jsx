import React, { Component } from 'react';

export default class HabitAddForm extends Component {
  onSubmit = (event) => {
    console.log('submitted');
  };

  render() {
    return (
      <form className='form-add'>
        <input type='text' className='input-add' onSubmit={this.onSubmit} />
        <button className='button-add'>Add</button>
      </form>
    );
  }
}
