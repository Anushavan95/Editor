import { configureStore } from "@reduxjs/toolkit";
import builderSlice from "./builderSlice";

export const store = configureStore({
  reducer: {
    component: builderSlice
  }
});
