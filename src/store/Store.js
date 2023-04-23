import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Users";

//setting the reducers which have created inside the createSlice method into the store
export const store = configureStore({
  reducer: {
    users: userReducer
  }
});
