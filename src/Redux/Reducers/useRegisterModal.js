import { createSlice } from "@reduxjs/toolkit";

export const registerModalSlice = createSlice({
  name: "RegisterModal",
  initialState: false,
  reducers: {
    RMonOpen: (state, action) => {
      return true;
    },
    RMonClose: (state, action) => {
      return false;
    },
  },
});
export const {RMonOpen,RMonClose}=registerModalSlice.actions
export default registerModalSlice.reducer