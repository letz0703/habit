import React, {Component} from 'react'
import Habits from './components/Habits'
import './app.css'
import Navbar from './components/navbar'
import HabitAddForm from './components/habitAddForm'

export default class App extends Component {
	state = {
		habits: [
			{id: 1, name: 'Reading', count: 0},
			{id: 2, name: 'Learning', count: 0},
			{id: 3, name: 'Coding', count: 0},
		],
	}

	handleIncrement = (habit) => {
		const habits = [...this.state.habits]
		const id = habits.indexOf(habit)
		const count = habits[id].count
		habits[id].count++
		this.setState({habits})
	}

	handleDecrement = (habit) => {
		// console.log(`handleDecrement ${habit.name}`);
		const habits = [...this.state.habits]
		const id = habits.indexOf(habit)
		const count = habits[id].count - 1
		count >= 0 && habits[id].count--
		this.setState({habits})
	}

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((item) => habit.id !== item.id)
		this.setState({habits})
	}

	handleAdd = (habitName) => {
		const habits = [
			...this.state.habits,
			{id: Date.now(), name: habitName, count: 0},
		]
		this.setState({habits})
	}

	render() {
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
				/>
			</>
		)
	}
}
