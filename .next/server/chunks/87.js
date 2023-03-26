"use strict";
exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 8087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SX": () => (/* binding */ getBookInfoSuccess),
/* harmony export */   "TI": () => (/* binding */ getPostSaveSuccess),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aQ": () => (/* binding */ getIsOpenSuccess),
/* harmony export */   "aq": () => (/* binding */ getPostBody),
/* harmony export */   "mg": () => (/* binding */ getPostTags),
/* harmony export */   "n8": () => (/* binding */ getPostId),
/* harmony export */   "r1": () => (/* binding */ initBook),
/* harmony export */   "sX": () => (/* binding */ getThumbnail),
/* harmony export */   "vz": () => (/* binding */ getPostTitle)
/* harmony export */ });
/* unused harmony exports initialState, getBookFailure, getCommentIdSuccess */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    book: {
        authors: [],
        contents: "",
        datetime: "",
        isbn: "",
        thumbnail: "",
        title: ""
    },
    error: "",
    markdown: "",
    title: "",
    body: "",
    tags: [],
    publish: false,
    isPrivate: false,
    thumbnail: null,
    postId: null,
    isTemp: false,
    isopen: false,
    postSave: false,
    Istemporary: false,
    commentId: ""
};
const BookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "Book",
    initialState,
    reducers: {
        getBookInfoSuccess (state, { payload  }) {
            state.book = payload;
        },
        getPostTitle (state, action) {
            state.title = action.payload;
        },
        getPostBody (state, action) {
            state.body = action.payload;
        },
        getPostTags (state, action) {
            state.tags = action.payload;
        },
        getPostId (state, action) {
            state.postId = action.payload;
        },
        getThumbnail (state, action) {
            state.thumbnail = action.payload;
        },
        getIsOpenSuccess (state) {
            state.isopen = !state.isopen;
        },
        getPostSaveSuccess (state) {
            state.postSave = !state.postSave;
        },
        getTemporaryClickSuccess (state) {
            state.Istemporary = true;
        },
        getCommentIdSuccess (state, action) {
            state.commentId = action.payload;
        },
        getBookFailure (state, { payload  }) {
            state.error = payload.error;
        }
    }
});
const { getBookFailure , getBookInfoSuccess , getPostTitle , getPostBody , getPostTags , getPostId , getIsOpenSuccess , getPostSaveSuccess , getThumbnail , getCommentIdSuccess  } = BookSlice.actions;
const initBook = (payload)=>async (dispatch)=>{
        dispatch(getBookInfoSuccess(payload));
    };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookSlice.reducer);


/***/ })

};
;