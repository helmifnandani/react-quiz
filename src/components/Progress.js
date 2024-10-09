function Progress({
	currentQuestionIndex,
	numQuestions,
	points,
	maxPossiblePoints,
	answer,
}) {
	return (
		<header className="progress">
			<progress
				max={numQuestions}
				value={currentQuestionIndex + Number(answer !== null)}></progress>
			<p>
				Question <strong>{currentQuestionIndex + 1}</strong> / {numQuestions}
			</p>
			<p>
				<strong>{points}</strong> / {maxPossiblePoints}
			</p>
		</header>
	);
}

export default Progress;
