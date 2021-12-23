import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tag: "h3",
  addedImages: [],
  dataObject: {
    image: []
  }
};

export const postHtmlDataAsync = createAsyncThunk(
  "HtmlData/post",
  async (data) => {
    const response = await axios.post(
      `https://test.zegashop.com/api/set`,
      data
    );
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(postHtmlDataAsync.pending, (state, action) => {
        state.dataObject.image = null;
      })
      .addCase(postHtmlDataAsync.fulfilled, (state, action) => {
        state.dataObject.image = action.payload;
      })
      .addCase(postHtmlDataAsync.rejected, (state, action) => {
        state.dataObject.image = [];
      });
  }
});

export const { setTag, addIMages } = mySlice.actions;
export const selectTag = (state) => state.counter.tag;
export const selectAddedImages = (state) => state.counter.addedImages;

export default mySlice.reducer;
