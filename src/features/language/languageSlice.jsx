// src/store/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n/index";

const initialState = {
  language: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
