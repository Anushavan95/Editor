import { configureStore } from "@reduxjs/toolkit";
import builderSlice from "./builderSlice";
// import settingsSlice from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    component: builderSlice
    // settings: settingsSlice
  }
});
