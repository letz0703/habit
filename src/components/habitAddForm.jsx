import React, {memo} from 'react';

const HabitAddForm = memo((props) => {
	const refForm = React.createRef();
	const refInput = React.createRef();
	const onSubmit = (e) => {
		e.preventDefault();
		const name = refInput.current.value;
		name && props.onAdd(name);
		refForm.current.reset();
	};
	return (
		<form className='form-add ' onSubmit={onSubmit} ref={refForm}>
			<input
				ref={refInput}
				type='text'
				className='input-add'
				onSubmit={onSubmit}
			/>
			<button className='button-add '>Add</button>
		</form>
	);
});

export default HabitAddForm;
