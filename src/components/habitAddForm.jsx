import React, {PureComponent} from 'react';

// import React, {PureComponent} from 'react';

const HabitAddForm = (props) => {
	const refForm = React.createRef();
	const refInput = React.createRef();
	const onSubmit = (e) => {
		e.preventDefault();
		const name = this.refInput.current.value;
		name && this.props.onAdd(name);
		this.refForm.current.reset();
		// this.inputRef = ''
		// todo focus ok, but error occur
		// this.refForm.focus();
	};
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
};

export default HabitAddForm;
