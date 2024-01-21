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

// export const FetchReservations = createAsyncThunk(
//   "redux/fetchReservations",
//   async () => {
//     const respo = await axios.get("/api/data/reservations");
//     return respo.data.data;
//   }
// );

// export const FetchUsers = createAsyncThunk(
//   "redux/fetchUsers",
//   async () => {
//     const respo = await axios.get("/api/data/users");
//     return respo.data.data;
//   }
// );