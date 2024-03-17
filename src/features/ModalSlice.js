import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.modalOpen = true;
    },

    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

export const ModalActions = ModalSlice.actions;
