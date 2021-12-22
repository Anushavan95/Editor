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
    addIMages: (state, action) => {
      state.addedImages = action.payload;
      console.log(state.addedImages);
    }
  }
});

export const { setTag, addIMages } = mySlice.actions;

export const selectTag = (state) => state.counter.tag;
export const selectAddedImages = (state) => state.counter.addedImages;

export default mySlice.reducer;
