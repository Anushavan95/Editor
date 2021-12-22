import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tag: "h3",
  addedImages: []
};

const mySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTag: (state, action) => {
      state.tag = action.payload;
    },
    addIMages: (state, action) => {}
  }
});

export const { setTag } = mySlice.actions;

export const selectTag = (state) => state.counter.tag;

export default mySlice.reducer;
