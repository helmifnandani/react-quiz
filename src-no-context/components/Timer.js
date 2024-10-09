import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
	const mins = Math.floor(secondsRemaining / 60);
	const seconds = secondsRemaining % 60;
	useEffect(function () {
		const id = setInterval(function () {
			dispatch({ type: "setTimer" });
		}, 1000);

		// harus di clean up / return function kalo udah selesai, karena biar timernya berenti, kalo nggak, akan jalan terus
		return () => clearInterval(id);
	});

	return (
		<div className="timer">
			{mins < 10 && "0"}
			{mins}:{seconds < 10 && "0"}
			{seconds}
		</div>
	);
}

export default Timer;
