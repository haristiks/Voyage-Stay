import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from '../../lib/Axios'


export const FetchListings = createAsyncThunk(
  "redux/fetchListings",
  async () => {
    const respo = await Axios.get("/api/data/listings");
    return respo.data.data;
  }
);


export const FetchListingById = createAsyncThunk(
  "redux/fetchListingById",
  async (id) => {
    console.log("Hi",id)
    const respo = await Axios.get(`/api/data/listings/${id}`);
    return respo.data.data;
  }
);

export const FetchFavorites = createAsyncThunk(
  "redux/fetchFavorites",
  async () => {
    const respo = await Axios.get("/api/users/favorites");
    return respo.data.data;
  }
);

