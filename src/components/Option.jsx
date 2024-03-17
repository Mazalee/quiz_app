import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionActions } from "../features/QuestionSlice";

const Option = ({ option, userAnswer, alphabet }) => {
  const currentQuiz = useSelector((state) => state.questions.currentQuiz);
  const questionNumber = useSelector((state) => state.questions.questionNumber);
  const currentQuestion = currentQuiz.questions.find(
    (question) => question.id === questionNumber
  );
  const dispatch = useDispatch();
  const handleUserAnswer = () => {
    dispatch(
      QuestionActions.checkForCorrectAnswer({
        activeAnswer: userAnswer,
        activeOption: option,
      })
    );
  };
  return (
    <div
      className="subject subject-question"
      onClick={handleUserAnswer}
      style={{
        backgroundColor: currentQuestion.userOption === option && "#9635e1",
      }}
    >
      <span className="option">{alphabet}</span>
      <p className="question-p">{option}</p>
    </div>
  );
};

export default Option;
