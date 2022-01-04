import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RichTextEditor from "react-rte";
import axios from "axios";
import shortid from "shortid";
const initialState = {
  tag: "h3",
  tab: "1",
  addedImages: [],
  dataObject: {
    image: []
  },
  textEditorValue: RichTextEditor.createEmptyValue(),
  zegaProducts: [],
  componentEntry: "",
  marginTop: "0",
  marginRight: "0",
  marginBottom: "0",
  marginLeft: "0",
  paddingTop: "0",
  paddingRight: "0",
  paddingBottom: "0",
  paddingLeft: "0",
  marginObj: {},
  hyperLink: {
    link: "",
    name: "",
    id: shortid.generate(),
    settings: {}
  }
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
      state.tab = action.payload;
    },
    setEditorTextValue: (state, action) => {
      state.textEditorValue = action.payload;
    },
    setComponent: (state, action) => {
      state.componentEntry = action.payload;
    },
    setMarginTop: (state, action) => {
      state.marginTop = action.payload;
    },
    setMarginRight: (state, action) => {
      state.marginRight = action.payload;
    },
    setMarginBottom: (state, action) => {
      state.marginBottom = action.payload;
    },
    setMarginLeft: (state, action) => {
      state.marginLeft = action.payload;
    },
    setMergeStylesMargin: (state, action) => {
      state.marginObj = {
        marginTop: "",
        marginRight: "",
        marginBottom: "",
        marginLeft: ""
      };
    },
    setPaddingTop: (state, action) => {
      state.paddingTop = action.payload;
    },
    setPaddingRight: (state, action) => {
      state.paddingRight = action.payload;
    },
    setPaddingBottom: (state, action) => {
      state.paddingBottom = action.payload;
    },
    setPaddingLeft: (state, action) => {
      state.paddingLeft = action.payload;
    }
    // setHyperLink: (state, action) => {
    //   state.hyperLink = action.payload;
    // }
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

export const {
  setTag,
  addIMages,
  setTab,
  setEditorTextValue,
  setComponent,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  setMergeStylesMargin,
  setHyperLink
} = mySlice.actions;
export const selectTag = (state) => state.component.tag;
export const selectAddedImages = (state) => state.component.addedImages;
export const selectTab = (state) => state.component.tab;
export const selectTextEditorValue = (state) => state.component.textEditorValue;
export const selectZegaProducts = (state) => state.component.zegaProducts;
export const selectComponentEntry = (state) => state.component.componentEntry;
export const selectMarginTop = (state) => state.component.marginTop;
export const selectMarginRight = (state) => state.component.marginRight;
export const selectMarginBottom = (state) => state.component.marginBottom;
export const selectMarginLeft = (state) => state.component.marginLeft;
export const selectMarginObj = (state) => state.component.marginObj;
export const selectPaddingTop = (state) => state.component.paddingTop;
export const selectPaddingRight = (state) => state.component.paddingRight;
export const selectPaddingBottom = (state) => state.component.paddingBottom;
export const selectPaddingLeft = (state) => state.component.paddingLeft;
export const selectHyperLink = (state) => state.component.hyperLink;

export default mySlice.reducer;
