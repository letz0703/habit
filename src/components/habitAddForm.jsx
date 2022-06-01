import React, {PureComponent} from 'react';

export default class HabitAddForm extends PureComponent {
	refForm = React.createRef();
	refInput = React.createRef();
	onSubmit = (e) => {
		e.preventDefault();
		const name = this.refInput.current.value;
		name && this.props.onAdd(name);
		this.refForm.current.reset();
		this.refInput.focus();
		// this.inputRef = ''
	};

	render() {
		return (
			<form className='form-add ' onSubmit={this.onSubmit} ref={this.refForm}>
				<input
					ref={this.refInput}
					type='text'
					className='input-add'
					onSubmit={this.onSubmit}
				/>
				<button className='button-add '>Add</button>
			</form>
		);
	}
}
