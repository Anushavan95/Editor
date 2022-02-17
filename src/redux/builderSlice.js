import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import RichTextEditor from "react-rte";

const initialState = {
  componentEntry: "",
  tab: "1",
  left: 0,
  selected: "",
  products: [],
  children: [],
  initialLayout: []
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
const builderSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setTag: (state, action) => {
      // Object.keys(state.children).map((el) => {
      //   if (el.id === action.payload.id) {
      //     el.tag = action.payload.value;
      //   }
      // });
    },
    setFontFamily: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "fontFamily") {
              check = true;
              item.fontFamily = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ fontFamily: action.payload.value });
          }
        }
      });
      state.children = data;
    },
    setColor: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "color") {
              check = true;
              item.color = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ color: action.payload.value });
          }
        }
      });
      state.children = data;
    },
    addImages: (state, action) => {
      // Object.keys(state.children).map((el) => {
      //   if (el.id === action.payload.id) {
      //     el.images = [...el.images, ...action.payload.value];
      //   }
      // });
    },

    setEditorTextValue: (state, action) => {
      Object.keys(state.children).map((el) => {
        if (el.id === action.payload.id) {
          el.text = action.payload.value;
        }
      });
    },
    setSelectedContent: (state, action) => {
      state.selected = action.payload;
    },

    /////FIXME THINK ABOUT THIS
    setMarginTop: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "marginTop") {
              check = true;
              item.marginTop = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ marginTop: action.payload.value });
          }
        }
      });
      state.children = data;
    },
    setComponentEntry: (state, action) => {
      state.componentEntry = action.payload;
    },

    setMarginRight: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "marginRight") {
              check = true;
              item.marginRight = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ marginRight: action.payload.value });
          }
        }
      });
      state.children = data;
    },
    setMarginBottom: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "marginBottom") {
              check = true;
              item.marginBottom = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ marginBottom: action.payload.value });
          }
        }
      });
      state.children = data;
    },
    setMarginLeft: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "marginLeft") {
              check = true;
              item.marginLeft = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ marginLeft: action.payload.value });
          }
        }
      });

      state.children = data;
    },

    setPaddingTop: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "paddingTop") {
              check = true;
              item.paddingTop = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ paddingTop: action.payload.value });
          }
        }
      });
      // Object.keys(state.children).map((el) => {
      //   if (el.id === action.payload.id) {
      //     el.settings = [
      //       ...el.settings,
      //       ...{ paddingTop: action.payload.value }
      //     ];
      //   }
      // });
    },
    setPaddingRight: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "paddingRight") {
              check = true;
              item.paddingRight = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ paddingRight: action.payload.value });
          }
        }
      });
    },
    setPaddingBottom: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "paddingBottom") {
              check = true;
              item.paddingBottom = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ paddingBottom: action.payload.value });
          }
        }
      });
    },
    setPaddingLeft: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "paddingLeft") {
              check = true;
              item.paddingLeft = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ paddingLeft: action.payload.value });
          }
        }
      });
    },
    /////////////////////// STOP HEAR

    setContent: (state, action) => {
      if (action.payload.generateId) {
        state.children = [
          ...state.children,
          {
            [action.payload.generateId]: {
              text: "",
              tag: action.payload.tag,
              id: action.payload.generateId,
              link: "",
              content: action.payload.content,
              name: "",
              images: [],
              settings: []
            }
          }
        ];
      }
    },

    setInitialLayout: (state, action) => {
      state.initialLayout = [...state.initialLayout, action.payload];
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

export const {
  setColor,
  setTag,
  addImages,
  setTab,
  setEditorTextValue,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  setComponentEntry,
  setContent,
  setSelectedContent,
  setFontFamily
} = builderSlice.actions;
export const selectChildren = (state) => state.component.children;
export const selectAddedImages = (state) => state.component.children;
export const selectTab = (state) => state.component.tab;
// export const selectTextEditorValue = (state) => state.component.textEditorValue
export const selectZegaProducts = (state) => state.component.zegaProducts;
export const selectComponentEntry = (state) => state.component.componentEntry;
export const selectMarginTop = (state) => state.component.children;
export const selectedContent = (state) => state.component.selected;
export const selectMarginRight = (state) => state.component.children;
export const selectMarginBottom = (state) => state.component.children;
export const selectMarginLeft = (state) => state.component.children;
export const selectPaddingTop = (state) => state.children;
export const selectPaddingRight = (state) => state.children;
export const selectPaddingBottom = (state) => state.children;
export const selectPaddingLeft = (state) => state.children;
//export const selectHyperLink = (state) => state.component.hyperLink
export const selectHeading = (state) => state.component.heading;
export const selectInitialLayout = (state) => state.component.initialLayout;
export const selectID = (state) => state.component.heading.id;

export default builderSlice.reducer;
