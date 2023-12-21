import { configureStore } from "@reduxjs/toolkit";
import VoyageReducer from "../Reducers/VoyageReducer";

export default configureStore({
    reducer:{
        isHost:VoyageReducer,
    }
})