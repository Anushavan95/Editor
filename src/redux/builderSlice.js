import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import PlaceHolderImage from "../images/placeholder.png";

const initialState = {
  componentEntry: "",
  tab: "1",
  left: 0,
  selected: "",
  products: [],
  children: [],
  setTree: [],
  initialLayout: [],
  linkValue: "",
  selectLink: "",
  checked: false,
  tagSelect: "h3",
  selectSize: "",
  accordionList: []

  // accordionDescription: "",
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

export const postInitialData = createAsyncThunk(
  "postHtmlInitialSata/post",
  async (setTree, children) => {
    const response = await axios.post(`your url`, {
      setTree,
      children
    });
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
    setLinkValue: (state, action) => {
      state.linkValue = action.payload;
    },
    setSelectLink: (state, action) => {
      state.selectLink = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = !state.checked;
    },
    setSize: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "width") {
              check = true;
              item.width = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ width: action.payload.value });
          }
        }
      });
      state.children = data;
    },
    setTag: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          el.tag = action.payload.value;
        }
      });
      state.children = data;
    },
    setTitleAccordion: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          el.accordionTitle = action.payload.value;
        }
      });
      state.children = data;
    },

    setTextEditorValue: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          el.textEditorValue = action.payload.value;
        }
      });
      state.children = data;
    },
    setAlignMent: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "text-align") {
              check = true;
              item["text-align"] = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ ["text-align"]: action.payload.value });
          }
        }
      });
      state.children = data;
    },
    setImage: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.images.map((item) => {
            if (Object.keys(item) == "imageUpload") {
              check = true;
              item.imageUpload = action.payload.value;
            }
          });
          if (!check) {
            el.images.push({ imageUpload: action.payload.value });
          }
        }
      });
      state.children = data;
    },
    addAccordionList: (state, action) => {
      let data = [...state.accordionList];
      let newData = [...data, action];
      state.accordionList = [...newData];
    },
    deleteAccordionList: (state, action) => {
      let data = [...state.accordionList];
      let newData = data.splice(action, 1);
      state.accordionList = [...newData];
    },
    // setAccordionFaqTitleValue: (state, action) => {
    //   let data = state.children;
    //   data.map((el) => {
    //     el = Object.values(el)[0];
    //     if (el.id === action.payload.id) {
    //       el.accordionTitle = action.payload.value;
    //     }
    //   });
    //   state.children = data;
    // },

    // setAccordionFaqTitleDescription: (state, action) => {
    //   let data = state.children;
    //   data.map((el) => {
    //     el = Object.values(el)[0];
    //     if (el.id === action.payload.id) {
    //       let check = false;
    //       // el.accordionFaq[0].accordionDescription = action.payload.value;
    //       console.log(el, "accordionDescription");
    //       el.accordionDescription = action.payload.value;
    //       // el.accordionFaq.map((item) => {
    //       //   if (Object.keys(item) == "accordionDescription") {
    //       //     check = true;
    //       //     item.accordionDescription = action.payload.value;
    //       //   }
    //       // });
    //       // if (!check) {
    //       //   el.accordionFaq.push({
    //       //     accordionDescription: action.payload.value
    //       //   });
    //       // }
    //     }

    //     state.children = data;
    //   });
    // },
    // addAccordionList: (state, action) => {
    //   let data = state.children;
    //   data.map((el) => {
    //     el = Object.values(el)[0];
    //     if (el.id === action.payload.id) {
    //       let check = false;
    //       const newAccordion = {
    //         accordionTitle: state.accordionTitle,
    //         accordionDescription: state.accordionDescription
    //       };
    //       el.accordionFaq = [...el.accordionFaq, newAccordion];
    //     }
    //   });
    // },
    setFontFamily: (state, action) => {
      let data = state.children;
      data.map((el) => {
        el = Object.values(el)[0];
        if (el.id === action.payload.id) {
          let check = false;
          el.settings.map((item) => {
            if (Object.keys(item) == "font-family") {
              check = true;
              item["font-family"] = action.payload.value;
            }
          });
          if (!check) {
            el.settings.push({ ["font-family"]: action.payload.value });
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

    setSetTrees: (state, action) => {
      state.setTree = [...action.payload];
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
              textEditorValue: action.payload.textEditorValue,
              titleAccordion: action.payload.titleAccordion,
              accordionDescription: action.payload.accordionDescription,
              tag: action.payload.tag,
              accordionTitle: action.payload.accordionTitle,
              id: action.payload.generateId,
              link: "",
              content: action.payload.content,
              name: "",
              images: [{ imageUpload: PlaceHolderImage }],
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
  setTitleAccordion,
  setAccordionFaqTitleDescription,
  setImage,
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
  setLinkValue,
  setSelectLink,
  setSelectedContent,
  setSetTrees,
  setChecked,
  setAlignMent,
  addAccordionList,
  setSize,
  setTextEditorValue,
  deleteAccordionList,
  setFontFamily
} = builderSlice.actions;
export const selectChildren = (state) => state.component.children;
export const selectAddedImages = (state) => state.component.children;
export const selectTab = (state) => state.component.tab;
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
export const selectHeading = (state) => state.component.heading;
export const selectInitialLayout = (state) => state.component.initialLayout;
export const selectID = (state) => state.component.heading.id;
export const selectLinkValue = (state) => state.component.linkValue;
export const selectLink = (state) => state.component.selectLink;
export const selectChecked = (state) => state.component.checked;
export const selectSize = (state) => state.component.selectSize;
// export const selectAccordionTitle = (state) => state.component.accordionTitle;
export const selectAccordionList = (state) => state.component.accordionList;

export const data = (state) => state.component;

export default builderSlice.reducer;
