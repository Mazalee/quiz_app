import React from "react";
import { useDispatch } from "react-redux";
import { QuestionActions } from "../features/QuestionSlice";

const Subject = ({ icon, subject, backgroundColor }) => {
  const dispatch = useDispatch();
  const handleSubjectClick = () => {
    dispatch(QuestionActions.getSubjectQuestions(subject));
  };

  return (
    <div className="subject" onClick={handleSubjectClick}>
      <span style={{ backgroundColor: backgroundColor }}>{icon}</span>
      <p className="subject-p">{subject}</p>
    </div>
  );
};

export default Subject;
