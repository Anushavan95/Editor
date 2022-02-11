import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'
import axios from 'axios'
import RichTextEditor from 'react-rte'


const initialState = {
    componentEntry: "",
    tab: 0,
    selected: '',
    products: [],
    children: [],
    initialLayout: [],
}

export const postHtmlDataAsync = createAsyncThunk(
    'HtmlData/post',
    async (action) => {
        const response = await axios.post(
            `https://test.zegashop.com/api/set`,
            action,
        )
        return response.data
    },
)

export const zegaProductsAsync = createAsyncThunk(
    'zegaProducts/post',
    async (data) => {
        const response = await axios.get(
            `https://zega.zegashop.com/api/new-products?locale=en&currency=AMD&limit=10`,
            data,
        )
        return response.data
    },
)
const mySlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        setTab: (state, action) => {
            state.tab = action.payload
        },
        setTag: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.tag = action.payload.value
                }
            })
        },
        setFontFamily: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.settings = [...el.settings, ...{'fontFamily': action.payload.value}]
                }
            })
        },
        setColor: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.settings = [...el.settings, ...{'color': action.payload.value}]
                }
            })
        },
        addImages: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.images = [...el.images, ...action.payload.value]
                }
            })

        },

        setEditorTextValue: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.text = action.payload.value
                }
            })
        },
        setSelectedContent: (state, action) => {
            state.selected = action.payload
        },

/////FIXME THINK ABOUT THIS
        setMarginTop: (state, action) => {
            let data = current(state.children);
            data.map(el => {
                console.log(el, 'el.idel.id')
                el = Object.values(el)[0]
                console.log(el, 'el.idel.id')
                if (el.id === action.payload.id) {
                    console.log(action.payload.value,'el.settingsel.settingsel.settings')
                    el.settings.push({'marginTop': action.payload.value})
                }
            })
            state.children = data;

        },
        setComponentEntry: (state, action) => {
            state.componentEntry = action.payload
        },
        setMarginRight: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.settings = [...el.settings, ...{'marginRight': action.payload.value}]
                }
            })

        },
        setMarginBottom: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.settings = [...el.settings, ...{'marginBottom': action.payload.value}]
                }
            })

        },
        setMarginLeft: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.settings = [...el.settings, ...{'marginLeft': action.payload.value}]
                }
            })

        },

        setPaddingTop: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.settings = [...el.settings, ...{'paddingTop': action.payload.value}]
                }
            })

        },
        setPaddingRight: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.settings = [...el.settings, ...{'paddingRight': action.payload.value}]
                }
            })

        },
        setPaddingBottom: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.settings = [...el.settings, ...{'paddingBottom': action.payload.value}]
                }
            })

        },
        setPaddingLeft: (state, action) => {
            Object.keys(state.children).map(el => {
                if (el.id === action.payload.id) {
                    el.paddingLeft = [...el.settings, ...{'paddingBottom': action.payload.value}]
                }
            })
        },
        /////////////////////// STOP HEAR

        setContent: (state, action) => {
            if (action.payload.generateId) {
                state.children = [
                    ...state.children,
                    {
                        [action.payload.generateId]: {
                            text: '',
                            tag: action.payload.tag,
                            id: action.payload.generateId,
                            link: '',
                            content: action.payload.content,
                            name: '',
                            images: [],
                            settings: []
                        }
                    }
                ]
            }
        },

        // setHeading: (state, action) => {
        //     state.heading = action.payload
        // },

        setInitialLayout: (state, action) => {
            state.initialLayout = [...state.initialLayout, action.payload]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postHtmlDataAsync.pending, (state, action) => {
                state.dataObject.image = null
            })
            .addCase(postHtmlDataAsync.fulfilled, (state, action) => {
                state.dataObject.image = action.payload
            })
            .addCase(postHtmlDataAsync.rejected, (state, action) => {
                state.dataObject.image = []
            })
            .addCase(zegaProductsAsync.fulfilled, (state, action) => {
                state.zegaProducts = action.payload
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
            })
    },
})

export const {
    setColor,
    setTag,
    addImages,
    setTab,
    setEditorTextValue,
    /// setComponent,
    setMarginTop,
    setMarginRight,
    setMarginBottom,
    setMarginLeft,
    setPaddingTop,
    setPaddingRight,
    setPaddingBottom,
    setPaddingLeft,
    /// setMergeStylesMargin,
    setComponentEntry,
    setContent,
    setSelectedContent,
    //// setInitialLayout,
    setFontFamily,
    ///  setHeading,
    ///  setHeadingGenerateId,
} = mySlice.actions
export const selectTag = (state) => state.component.children
export const selectAddedImages = (state) => state.component.children
export const selectTab = (state) => state.component.tab
// export const selectTextEditorValue = (state) => state.component.textEditorValue
export const selectZegaProducts = (state) => state.component.zegaProducts
export const selectComponentEntry = (state) => state.component.componentEntry
export const selectMarginTop = (state) =>
    state.component.children
export const selectedContent = (state) =>
    state.component.selected
export const selectMarginRight = (state) =>
    state.component.children
export const selectMarginBottom = (state) =>
    state.component.children
export const selectMarginLeft = (state) =>
    state.component.children
export const selectPaddingTop = (state) => state.children
export const selectPaddingRight = (state) => state.children
export const selectPaddingBottom = (state) => state.children
export const selectPaddingLeft = (state) => state.children
//export const selectHyperLink = (state) => state.component.hyperLink
export const selectHeading = (state) => state.component.heading
export const selectInitialLayout = (state) => state.component.initialLayout
export const selectFontFamily = (state) => state.component.fontFamily
export const selectColor = (state) => state.component.color
export const selectID = (state) => state.component.heading.id

export default mySlice.reducer
