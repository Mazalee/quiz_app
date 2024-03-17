import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../questions";

const initialState = {
  activeOption: "",
  questions: questions,
  quizStarted: false,
  currentQuiz: {},
  questionNumber: 1,
};

export const QuestionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getSubjectQuestions(state, action) {
      state.quizStarted = true;
      const activeSubject = state.questions.find(
        (question) => question.subject === action.payload
      );
      state.currentQuiz = { correctAnswers: 0, ...activeSubject };
    },
    nextQuestion(state) {
      state.questionNumber = state.questionNumber + 1;
    },
    previousQuestion(state) {
      state.questionNumber = state.questionNumber - 1;
    },
    checkForCorrectAnswer(state, action) {
      const { activeAnswer, activeOption } = action.payload;
      const currentQuestion = state.currentQuiz.questions.find(
        (question) => question.id === state.questionNumber
      );
      const previousAnswerIndex = currentQuestion.userAnswer;
      currentQuestion.userAnswer = activeAnswer;
      currentQuestion.userOption = activeOption;

      if (currentQuestion.correctOption === activeAnswer) {
        if (
          previousAnswerIndex === 1 ||
          previousAnswerIndex !== currentQuestion.correctOption
        ) {
          state.currentQuiz.correctAnswers =
            state.currentQuiz.correctAnswers + 1;
        } else {
          if (previousAnswerIndex === currentQuestion.correctOption) {
            state.currentQuiz.correctAnswers =
              state.currentQuiz.correctAnswers - 1;
          }
        }
      }
    },
  },
});

export const QuestionActions = QuestionSlice.actions;
