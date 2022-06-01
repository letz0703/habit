import React, {PureComponent} from 'react';

export default class Navbar extends PureComponent {
	render() {
		return (
			<>
				<div>
					<span className='f2 pl2 pr2'>
						<i className='fa-solid fa-leaf green'></i>
					</span>
					<span className='f1 blue i b pr1'>Habit Tracker</span>
					<span className='habit-count'>{this.props.totalCount}</span>
				</div>
			</>
		);
	}
}
