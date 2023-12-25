import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
  name: "LoginModal",
  initialState: false,
  reducers: {
    onOpen: (state, action) => {
      return true;
    },
    onClose: (state, action) => {
      return false;
    },
  },
});
export const {onOpen,onClose}=loginModalSlice.actions
export default loginModalSlice.reducer