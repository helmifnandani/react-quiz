import { useQuiz } from "../contexts/QuizContext";

function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const { dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "resetQuestion",
          })
        }
      >
        Start a new quiz
      </button>
    </>
  );
}

export default FinishScreen;
