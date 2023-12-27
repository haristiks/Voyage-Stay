import { createSlice } from "@reduxjs/toolkit";

export const rentModalSlice = createSlice({
  name: "RentModal",
  initialState: false,
  reducers: {
    RTMonOpen: (state, action) => {
      return true;
    },
    RTMonClose: (state, action) => {
      return false;
    },
  },
});
export const {RTMonOpen,RTMonClose}=rentModalSlice.actions
export default rentModalSlice.reducer