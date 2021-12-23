import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./builderSlice";

export const store = configureStore({
  reducer: {
    counter: mySlice
  }
});
