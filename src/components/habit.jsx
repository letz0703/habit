import React, {PureComponent} from 'react';

export default class Habit extends PureComponent {
	componentDidMount() {
		console.log(`${this.props.habit.name} is mounted`);
	}

	componentWillUnmount() {
		console.log(`${this.props.habit.name} is unmountd`);
	}

	handleIncrement = () => {
		this.props.onIncrement(this.props.habit);
	};

	handleDecrement = () => {
		this.props.onDecrement(this.props.habit);
	};
	// wow make ti green
	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};

	render() {
		const {name, count} = this.props.habit;
		return (
			<li className='habit dp-center'>
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
				<button
					className='habit-button habit-delete'
					onClick={this.handleDelete}
				>
					<i className='fas fa-trash'></i>
				</button>
			</li>
		);
	}
}
