
import { createSlice } from "@reduxjs/toolkit";

import { FetchListingById} from "./AxiosCalls";


const slice = createSlice({
  name: "ListingById",
  initialState: {
    FetchListingStat: "",
    Listing: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchListingById.pending, (state) => {
        state.FetchListingStat = "loading";
      })
      .addCase(FetchListingById.fulfilled, (state, action) => {
        state.FetchListingStat = "succeeded";
        state.Listing = action.payload;
      })
      .addCase(FetchListingById.rejected, (state) => {
        state.FetchListingStat = "failed";
      });
  },
});




export default slice.reducer;