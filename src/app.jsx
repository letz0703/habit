import React, {Component} from 'react';
import Habits from './components/Habits';
import './app.css';
import Navbar from './components/navbar';
import HabitAddForm from './components/habitAddForm';

export default class App extends Component {
	state = {
		habits: [
			{id: 1, name: 'Reading', count: 0},
			{id: 2, name: 'Learning', count: 0},
			{id: 3, name: 'Coding', count: 0},
		],
	};

	handleIncrement = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				return {...habit, count: habit.count + 1};
			}
			return item;
		});
		this.setState({habits});
	};

	handleDecrement = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				const count = habit.count - 1;
				return {...habit, count: count < 0 ? 0 : count};
			}
			return item;
		});
		this.setState({habits});
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((item) => habit.id !== item.id);
		this.setState({habits});
	};

	handleAdd = (habitName) => {
		const habits = [
			...this.state.habits,
			{id: Date.now(), name: habitName, count: 0},
		];
		this.setState({habits});
	};

	handleReset = () => {
		const habits = this.state.habits.map((habit) => {
			if (habit.count !== 0) {
				return {...habit, count: 0};
			}
			return habit;
		});
		this.setState({habits});
	};

	render() {
		// console.log('habits');
		return (
			<>
				<Navbar
					totalCount={
						this.state.habits.filter((habit) => habit.count > 0).length
					}
				/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
					onReset={this.handleReset}
				/>
			</>
		);
	}
}
