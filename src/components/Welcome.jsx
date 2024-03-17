import React from "react";
import { questions } from "../questions";
import Subject from "./Subject";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-left">
        <h1>
          <span>Welcome to the</span>

          <span>frontend quiz!</span>
        </h1>
        <p className="welcome-p">Pick a subject to get started.</p>
      </div>

      <div className="welcome-right">
        {questions.map((question) => {
          const { backgroundColor, subject } = question;
          return (
            <Subject
              icon={question.icon}
              key={question.subject}
              subject={subject}
              backgroundColor={backgroundColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Welcome;
