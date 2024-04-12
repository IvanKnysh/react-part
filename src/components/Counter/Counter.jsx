import { useReducer, useState } from "react";

const Counter = () => {
	const [value, setValue] = useState(0);

	const reducer = (state, action) => {
		switch (action.type) {
			case "Increment":
				return {
					value: state.value + 1,
				};
			case "Decrement":
				return {
					value: state.value - 1,
				};
			case "Increment_by_value":
				return {
					value: state.value + Number(action.payload),
				};
			default:
				return state;
		}
	};

	const initialState = {
		value: 0,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const incrementHandler = () => {
		dispatch({
			type: "Increment",
		});
	};

	const decrementHandler = () => {
		dispatch({
			type: "Decrement",
		});
	};

	const incrementByValueHandler = () => {
		dispatch({
			type: "Increment_by_value",
			payload: value,
		});
	};

	return (
		<div className="counter">
			<p>Counter: {state.value}</p>
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={decrementHandler}>Decrement</button>
			<div>
				<input
					type="number"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={incrementByValueHandler}>Increment By Value</button>
			</div>
		</div>
	);
};

export default Counter;
