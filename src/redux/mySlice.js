import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RichTextEditor from "react-rte";
import axios from "axios";

const initialState = {
  tag: "h3",
  tab: "2",
  addedImages: [],
  dataObject: {
    image: [],
  },
  textEditorValue:  RichTextEditor.createEmptyValue()
};

export const postHtmlDataAsync = createAsyncThunk(
  "HtmlData/post",
  async (action) => {
    const response = await axios.post(
      `https://test.zegashop.com/api/set`,
      action
    );
    return response.data;
  }
);

const mySlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setTag: (state, action) => {
      state.tag = action.payload;
      console.log(state.tag, 'state tag');
    },
    addIMages: (state, action) => {
      state.addedImages = [...state.addedImages, ...action.payload];
    },
    setTab: (state, action) => {
      state.tab = action;
    },
    setEditorTextValue: (state, action) => {
      state.textEditorValue = action.payload;
    },
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
  },
});

export const { setTag, addIMages, setTab, setEditorTextValue } = mySlice.actions;
export const selectTag = (state) => state.component.tag;
export const selectAddedImages = (state) => state.component.addedImages;
export const selectTab = (state) => state.component.tab;
export const selectTextEditorValue = (state) => state.component.textEditorValue;
export default mySlice.reducer;
