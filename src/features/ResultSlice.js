import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizEnd: false,
};

export const ResultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    resultModalOpen(state) {
      state.quizEnd = true;
    },
    resultModalClose(state) {
      state.quizEnd = false;
    },
  },
});

export const ResultActions = ResultSlice.actions;
