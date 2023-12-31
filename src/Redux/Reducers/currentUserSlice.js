import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "LoginModal",
  initialState: null,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    logout: (state, action) => {
      return null;
    },
  },
});
export const {login,logout}=currentUserSlice.actions
export default currentUserSlice.reducer