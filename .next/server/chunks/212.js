exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 2917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "n": () => (/* binding */ BooksContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const BooksContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    cache: null,
    dispatch: null
});
function BookCacheReducer(state, action) {
    switch(action.type){
        case "ADD_Book":
            {
                return {
                    ...state,
                    [action.BookName]: action.BookData
                };
            }
        default:
            {
                throw new Error(`Unhandled action type: ${action.type}`);
            }
    }
}
const BooksContextProvider = ({ children  })=>{
    const [cache, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(BookCacheReducer, {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BooksContext.Provider, {
        value: [
            cache,
            dispatch
        ],
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BooksContext);


/***/ }),

/***/ 8914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "n": () => (/* binding */ ModalContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ModalContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    IsClose: false,
    SetIsClose: ()=>{},
    BookIsClose: false,
    SetBookIsClose: ()=>{},
    SetMode: ()=>{},
    mode: "",
    PublishClose: false,
    SetPublishClose: ()=>{}
});
const ModalContextProvider = ({ children  })=>{
    const [IsClose, SetIsClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [BookIsClose, SetBookIsClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [PublishClose, SetPublishClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [mode, SetMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContext.Provider, {
        value: {
            IsClose,
            SetIsClose,
            mode,
            SetMode,
            BookIsClose,
            SetBookIsClose,
            PublishClose,
            SetPublishClose
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalContext);


/***/ }),

/***/ 653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uk": () => (/* binding */ useApollo),
/* harmony export */   "in": () => (/* binding */ initializeApollo)
/* harmony export */ });
/* unused harmony exports APOLLO_STATE_PROP_NAME, addApolloState */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7596);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6330);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4394);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__);






const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
let apolloClient;
const TOKEN_EXPIRED = "jwt expired";
const NO_AUTH_TOKEN = "No auth token";
const linkOnError = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__.onError)(({ graphQLErrors , operation , forward , response , networkError  })=>{
    console.log(networkError);
    if (!apolloClient) return;
    console.log(graphQLErrors?.[0].message);
    if (graphQLErrors?.[0].message === NO_AUTH_TOKEN) {
        response.errors = null;
    }
});
const prod = (/* unused pure expression or super */ null && ("production" === "production"));
const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({
    uri: process.env.API_URL,
    credentials: "include"
});
function createApolloClient() {
    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
        ssrMode: "undefined" === "undefined",
        link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.from)([
            linkOnError,
            httpLink
        ]),
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        allPosts: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__.concatPagination)()
                    }
                }
            }
        })
    });
}
function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient();
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();
        // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
        const data = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(existingCache, initialState, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray)=>[
                    ...sourceArray,
                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d, s)))
                ]
        });
        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (true) return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}
function addApolloState(client, pageProps) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }
    return pageProps;
}
function useApollo(pageProps) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state), [
        state
    ]);
    return store;
}


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App),
/* harmony export */   "persistor": () => (/* binding */ persistor),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_tiptap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6567);
/* harmony import */ var _styles_tiptap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_tiptap_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(653);
/* harmony import */ var _context_modalContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8914);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2889);
/* harmony import */ var _context_booksContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2917);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_day_picker_dist_style_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8285);
/* harmony import */ var react_day_picker_dist_style_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_dist_style_css__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_10__.persistStore)(_store_store__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);
const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__.createTheme)({
    palette: {
        primary: {
            main: "#D3D3D3"
        },
        secondary: {
            main: "#0000008a"
        }
    }
});
function App({ Component , pageProps , router  }) {
    const apolloClient = (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_7__/* .useApollo */ .Uk)(pageProps);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            if (!window?.Kakao?.isInitialized() && window.Kakao) {
                window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
            }
        } catch (e) {
            console.log(e);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_14___default()), {
                src: "/theme.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_15__.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_9__.Provider, {
                    store: _store_store__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_11__.PersistGate, {
                        loading: null,
                        persistor: persistor,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_booksContext__WEBPACK_IMPORTED_MODULE_13__/* .BooksContextProvider */ .n, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_modalContext__WEBPACK_IMPORTED_MODULE_8__/* .ModalContextProvider */ .n, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
                                    client: apolloClient,
                                    children: [
                                        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {
                                            ...pageProps,
                                            canonical: router.asPath,
                                            key: router.asPath
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {})
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jo": () => (/* binding */ getAuthImgSuccess),
/* harmony export */   "WZ": () => (/* binding */ getAuthBioSuccess),
/* harmony export */   "X7": () => (/* binding */ getAuthNameSuccess),
/* harmony export */   "Z5": () => (/* binding */ initAuth),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mM": () => (/* binding */ getAuthInfoSuccess)
/* harmony export */ });
/* unused harmony exports initialState, getauthFailure */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    auth: null,
    error: "",
    profileThumbnail: "",
    displayName: "",
    bio: ""
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        getAuthInfoSuccess (state, action) {
            state.auth = action.payload;
        },
        getAuthImgSuccess (state, action) {
            state.profileThumbnail = action.payload;
        },
        getAuthNameSuccess (state, action) {
            state.displayName = action.payload;
        },
        getAuthBioSuccess (state, action) {
            state.bio = action.payload;
        },
        getauthFailure (state, { payload  }) {
            state.error = payload.error;
        },
        extraReducers: (builder)=>{
            builder.addCase(redux_persist__WEBPACK_IMPORTED_MODULE_1__.PURGE, (state)=>{
                localStorage.remove("auth");
            });
        }
    }
});
const { getauthFailure , getAuthInfoSuccess , getAuthImgSuccess , getAuthNameSuccess , getAuthBioSuccess  } = authSlice.actions;
const initAuth = (payload)=>async (dispatch)=>{
        dispatch(getAuthInfoSuccess(payload));
    };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 3224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ getcoreInfoSuccess),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dd": () => (/* binding */ getSearchInput),
/* harmony export */   "u3": () => (/* binding */ getTimestamp)
/* harmony export */ });
/* unused harmony exports initialState, getcoreFailure, getcoreIsLoading */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isdark: "light",
    isLoading: false,
    error: "",
    search: "",
    timestamp: null
};
const CoreSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "core",
    initialState,
    reducers: {
        getcoreInfoSuccess (state) {
            const isdarkSet = state.isdark == "dark" ? "light" : "dark";
            state.isdark = isdarkSet;
        },
        getcoreIsLoading (state) {
            state.isLoading = !state.isLoading;
        },
        getSearchInput (state, actions) {
            state.search = actions.payload;
        },
        getTimestamp (state, actions) {
            state.timestamp = actions.payload;
        },
        getcoreFailure (state, { payload  }) {
            state.error = payload.error;
        }
    }
});
const { getcoreFailure , getcoreInfoSuccess , getcoreIsLoading , getSearchInput , getTimestamp  } = CoreSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoreSlice.reducer);


/***/ }),

/***/ 2889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/store/auth.ts
var auth = __webpack_require__(7447);
// EXTERNAL MODULE: ./src/store/book.ts
var book = __webpack_require__(8087);
// EXTERNAL MODULE: ./src/store/core.ts
var core = __webpack_require__(3224);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(8936);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(4161);
;// CONCATENATED MODULE: ./src/store/rootReducer.ts






const persistConfig = {
    key: "root",
    version: 1,
    storage: (storage_default())
};
const rootReducer = (0,toolkit_.combineReducers)({
    auth: auth/* default */.ZP,
    book: book/* default */.ZP,
    core: core/* default */.ZP
});
const persistedReducer = (0,external_redux_persist_.persistReducer)(persistConfig, rootReducer);

;// CONCATENATED MODULE: ./src/store/store.ts


const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});
/* harmony default export */ const store_store = (store);


/***/ }),

/***/ 8285:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6567:
/***/ (() => {



/***/ })

};
;