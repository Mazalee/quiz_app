import { configureStore } from "@reduxjs/toolkit";
import { QuestionSlice } from "./features/QuestionSlice";
import { ModalSlice } from "./features/ModalSlice";
import { ResultSlice } from "./features/ResultSlice";

export const store = configureStore({
  reducer: {
    questions: QuestionSlice.reducer,
    modal: ModalSlice.reducer,
    result: ResultSlice.reducer,
  },
});
