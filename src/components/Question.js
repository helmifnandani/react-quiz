import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";
function Question({ question, points }) {
  const { dispatch } = useQuiz();
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} />
    </div>
  );
}

export default Question;
