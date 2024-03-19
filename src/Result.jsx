import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResultActions } from "./features/ResultSlice";

const Result = () => {
  // const dispatch = useDispatch();
  const currentQuiz = useSelector((state) => state.questions.currentQuiz);
  const quizEnd = useSelector((state) => state.questions.quizEnd);
  const { subject, icon, questions } = currentQuiz;
  // const closeResultModal = () => {
  //   dispatch(ResultActions.closeResultModal());
  // };

  return (
    quizEnd && (
      <div className="result-overlay">
        <div className="result-content">
          <div className="result-icon">
            <span>{icon}</span>
            <span>{subject}</span>
          </div>
          <div className="result-header">
            <p>Quiz completed</p>
            <p>You scored...</p>
          </div>
          <div className="result-inner">
            <div className="result-innerIcon">
              <span>{icon}</span>
              <span>{subject}</span>
            </div>
            <span className="result-score">8</span>
            <p>out of {questions?.length}</p>
          </div>
          <button className="result-btn">Play Again</button>
        </div>
      </div>
    )
  );
};

export default Result;
