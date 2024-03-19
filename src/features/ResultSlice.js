import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizEnd: false,
};

export const ResultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    openResultModal(state) {
      state.quizEnd = true;
    },

    closeResultModal(state) {
      state.quizEnd = false;
    },
  },
});

export const ResultActions = ResultSlice.actions;
