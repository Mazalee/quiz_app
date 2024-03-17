import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionActions } from "../features/QuestionSlice";
import Option from "./Option";
import { ModalActions } from "../features/ModalSlice";

const QuizQuestion = () => {
  const dispatch = useDispatch();
  const currentQuiz = useSelector((state) => state.questions.currentQuiz);
  const questionNumber = useSelector((state) => state.questions.questionNumber);
  const { subject, icon, questions } = currentQuiz;
  const currentQuestion = questions.find(
    (question) => question.id === questionNumber
  );
  const handleNextQuestion = () => {
    dispatch(QuestionActions.nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(QuestionActions.previousQuestion());
  };
  const handleOpenModal = () => {
    dispatch(ModalActions.openModal());
  };
  const { question, options } = currentQuestion;

  return (
    <section>
      <div className="subject-info">
        <span>{icon}</span>
        <p className="subject-p">{subject}</p>
      </div>

      <div className="quiz-container">
        <div className="question-wrapper">
          <div className="question">
            <p className="num-questions">
              question {questionNumber} of {question.length}
            </p>
            <h2>{question}</h2>
            <div className="progress-bar">
              <div
                className="inner-progress-bar"
                style={{ width: `${questionNumber * 10}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="answer">
          {options.map((option, index) => {
            return (
              <Option
                key={index}
                option={option}
                userAnswer={index}
                alphabet={
                  index === 0
                    ? "A"
                    : index === 1
                    ? "B"
                    : index === 2
                    ? "C"
                    : index === 3
                    ? "D"
                    : ""
                }
              />
            );
          })}

          <div className="btn-container">
            <button
              onClick={handlePreviousQuestion}
              disabled={questionNumber === 1}
              className="btn btn-prev"
            >
              Prev
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={questionNumber > questions.length - 1}
              className="btn btn-next"
            >
              Next
            </button>
          </div>
          <button className="btn btn-end" onClick={handleOpenModal}>
            End Quiz
          </button>
          {}
        </div>
      </div>
    </section>
  );
};

export default QuizQuestion;
