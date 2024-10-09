function NextButton({ dispatch, answer, currentQuestionIndex, numQuestions }) {
	if (answer === null) return null;

	const hasReachedLastQuestion = currentQuestionIndex + 1 === numQuestions;

	return (
		<button
			className="btn btn-ui"
			onClick={() =>
				dispatch({
					type: hasReachedLastQuestion ? "finish" : "nextQuestion",
				})
			}>
			{hasReachedLastQuestion ? `Finish` : "Next"}
		</button>
	);
}

export default NextButton;
