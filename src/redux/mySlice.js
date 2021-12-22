import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tag: "h3"
};

const mySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTag: (state, action) => {
      state.tag = action.payload;
    }
  }
});

export const { setTag } = mySlice.actions;

export const selectTag = (state) => state.counter.tag;

export default mySlice.reducer;
