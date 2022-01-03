import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RichTextEditor from "react-rte";
import axios from "axios";

const initialState = {
  tag: "h3",
  tab: "2",
  addedImages: [],
  dataObject: {
    image: []
  },
  textEditorValue: RichTextEditor.createEmptyValue(),
  zegaProducts: [],
  componentEntry: ""
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

export const zegaProductsAsync = createAsyncThunk(
  "zegaProducts/post",
  async (data) => {
    const response = await axios.get(
      `https://zega.zegashop.com/api/new-products?locale=en&currency=AMD&limit=10`,
      data
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
    setComponent: (state, action) => {
      state.componentEntry = action.payload;
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
      })
      .addCase(zegaProductsAsync.fulfilled, (state, action) => {
        state.zegaProducts = action.payload;
        // console.log(state.zegaProducts, "lalal");
        // Object.keys(state.zegaProducts).forEach(function (key) {
        //   const element = state.zegaProducts[key];
        //   state.zegaProducts = [...state.zegaProducts, element];
        //   console.log(state.zegaProducts, "oo");
        // });
        // for (const key in action.payload) {
        //   if (Object.hasOwnProperty.call(action.payload, key)) {
        //     const elements = action.payload[key];
        //     state.zegaProducts = [...state.zegaProducts, elements];
        //     console.log(state.zegaProducts, "state.zegaProducts");
        //   }
        // }
      });
  }
});

export const { setTag, addIMages, setTab, setEditorTextValue, setComponent } =
  mySlice.actions;
export const selectTag = (state) => state.component.tag;
export const selectAddedImages = (state) => state.component.addedImages;
export const selectTab = (state) => state.component.tab;
export const selectTextEditorValue = (state) => state.component.textEditorValue;
export const selectZegaProducts = (state) => state.component.zegaProducts;
export const selectComponentEntry = (state) => state.component.componentEntry;

export default mySlice.reducer;
