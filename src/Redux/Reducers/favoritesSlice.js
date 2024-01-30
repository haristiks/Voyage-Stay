import { createSlice } from "@reduxjs/toolkit";
import { FetchFavorites } from "./AxiosCalls";


const slice = createSlice({
  name: "Favorites",
  initialState: {
    FetchFavoritesStat: "",
    Favorites: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchFavorites.pending, (state) => {
        state.FetchFavoritesStat = "loading";
      })
      .addCase(FetchFavorites.fulfilled, (state, action) => {
        state.FetchFavoritesStat = "succeeded";
        state.Favorites = action.payload;
      })
      .addCase(FetchFavorites.rejected, (state) => {
        state.FetchFavoritesStat = "failed";
      });
  },
});


export default slice.reducer;