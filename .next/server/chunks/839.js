"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 2839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetPostsBy)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useScrollPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6835);
/* harmony import */ var _lib_graphql_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7426);





function useGetPostsBy({ isTemp =false  }) {
    const { auth  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.auth);
    const { data , loading , fetchMore  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(_lib_graphql_posts__WEBPACK_IMPORTED_MODULE_4__/* .GET_Posts */ .E4, {
        variables: {
            limit: 24,
            username: auth?.username,
            istemp: isTemp
        },
        notifyOnNetworkStatusChange: true
    });
    const [isFinished, setIsFinished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onLoadMore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((cursor)=>{
        fetchMore({
            variables: {
                cursor,
                limit: 24
            },
            updateQuery: (prev, { fetchMoreResult  })=>{
                if (!fetchMoreResult) return prev;
                if (fetchMoreResult.posts.length === 0) {
                    setIsFinished(true);
                }
                return {
                    posts: [
                        ...prev.posts,
                        ...fetchMoreResult.posts
                    ]
                };
            }
        });
    }, [
        fetchMore
    ]);
    const cursor = data?.posts[data?.posts.length - 1]?.id;
    (0,_hooks_useScrollPagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        cursor,
        onLoadMore
    });
    return {
        data,
        loading,
        isFinished
    };
}


/***/ })

};
;