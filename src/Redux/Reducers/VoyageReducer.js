import { createSlice } from "@reduxjs/toolkit";

export const voyageSlice = createSlice({
  name: "isHost",
  initialState: false,
  reducers: {
    yesHost: (state, action) => {
      return true;
    },
    notHost: (state, action) => {
      return false;
    },
  },
});
export const {yesHost,notHost}=voyageSlice.actions
export default voyageSlice.reducer