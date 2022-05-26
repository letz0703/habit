import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Learning", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // this.setState({ habit: (habit.count = habit.count + 1) });
    // this.setState({ habit: (habit.count += 1) });
    const habits = [...this.state.habits];
    const id = habits.indexOf(habit);
    habits[id].count++;
    // this.setState({ habits: habits });
    this.setState({ habit });
  };

  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const id = habits.indexOf(habit);
    const count = habits[id].count - 1;
    count >= 0 && habits[id].count--;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => habit.id !== item.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}
