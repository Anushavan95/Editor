import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tag: "h3",
  addedImages: []
};

export const creatMilestonesAsync = createAsyncThunk(
  "milestone/create",
  async (action) => {
    const response = await axios.post(`${BASE_URL}/milestone`, action);
    return response.data;
  }
);

const mySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTag: (state, action) => {
      state.tag = action.payload;
    },
    addIMages: (state, action) => {
      state.addedImages = [...state.addedImages, ...action.payload];
      console.log(state.addedImages, "addedImages");
    }
  }
});

export const { setTag, addIMages } = mySlice.actions;
export const selectTag = (state) => state.counter.tag;
export const selectAddedImages = (state) => state.counter.addedImages;

export default mySlice.reducer;
