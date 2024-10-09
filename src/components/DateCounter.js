import { useReducer } from "react";

const initialState = { count: 0, step: 1 };
//reducernya punya 2 parameter, yaitu state dan action
function reducer(state, action) {
	// state adalah tergantung current state
	// action adalah parameter apapun yang dilempar ketika trigger function "dispatch"
	// dan yang direturn function ini adalah next statenya

	switch (action.type) {
		case "dec":
			return { ...state, count: state.count - state.step };
		case "inc":
			return { ...state, count: state.count + state.step };
		case "setCount":
			return { ...state, count: action.payload };
		case "setStep":
			return { ...state, step: action.payload };
		case "reset":
			return initialState;
		default:
			throw new Error("unknown action");
	}
}

function DateCounter() {
	// useReducer terima 2 argument, yang pertama reducer yang adalah pure function, yang kedua adalah initial state
	const [state, dispatch] = useReducer(reducer, initialState);

	const { count, step } = state;

	// This mutates the date object.
	const date = new Date("june 21 2027");
	date.setDate(date.getDate() + count);

	const dec = function () {
		dispatch({ type: "dec" });
	};

	const inc = function () {
		dispatch({ type: "inc" });
	};

	const defineCount = function (e) {
		dispatch({ type: "setCount", payload: Number(e.target.value) });
	};

	const defineStep = function (e) {
		dispatch({ type: "setStep", payload: Number(e.target.value) });
	};

	const reset = function () {
		dispatch({ type: "reset" });
	};

	return (
		<div className="counter">
			<div>
				<input
					type="range"
					min="0"
					max="10"
					value={step}
					onChange={defineStep}
				/>
				<span>{step}</span>
			</div>

			<div>
				<button onClick={dec}>-</button>
				<input value={count} onChange={defineCount} />
				<button onClick={inc}>+</button>
			</div>

			<p>{date.toDateString()}</p>

			<div>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
}
export default DateCounter;
