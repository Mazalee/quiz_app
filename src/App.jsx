import React from "react";
import Welcome from "./components/Welcome";
import { useSelector } from "react-redux";
import QuizQuestion from "./components/QuizQuestion";
import Modal from "./Modal";
import Result from "./Result";

const App = () => {
  const quizStarted = useSelector((state) => state.questions.quizStarted);
  return (
    <main>
      {!quizStarted && <Welcome />}
      {quizStarted && <QuizQuestion />}
      <Modal />
      <Result />
    </main>
  );
};

export default App;
