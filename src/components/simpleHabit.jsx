import React, {memo, useCallback, useEffect, useState} from 'react';
// react hook
// https://ko.reactjs.org/docs/hooks-rules.html#gatsby-focus-wrapper
// ellie 4.18 리액트 훅
const SimpleHabit = memo((props) => {
	// const state = {
	// 	count: 0,
	// };
	const [count, setCount] = useState(0);
	const refName = React.useRef();
	const handleIncrement = useCallback(() => {
		// setState({count: state.count + 1});
		setCount(count + 1);
	});

	useEffect(() => {
		console.log(`mounted & updated: ${count}`);
	}, []);

	return (
		<li className='habit'>
			<span ref={refName} className='habit-name'>
				Reading
			</span>
			<span className='habit-count mr2'>{count}</span>
			<button
				className='habit-button habit-increase '
				onClick={handleIncrement}
			>
				<i className='fas fa-plus-square'></i>
			</button>
		</li>
	);
});

export default SimpleHabit;
