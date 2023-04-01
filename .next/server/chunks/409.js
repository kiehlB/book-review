"use strict";
exports.id = 409;
exports.ids = [409];
exports.modules = {

/***/ 1409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetPosts)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useScrollPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6835);
/* harmony import */ var _lib_graphql_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7426);




function useGetPosts() {
    const { data , loading , fetchMore  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(_lib_graphql_posts__WEBPACK_IMPORTED_MODULE_3__/* .GET_recentPosts */ .l5, {
        variables: {
            limit: 24
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
                if (fetchMoreResult.recentPosts.length === 0) {
                    setIsFinished(true);
                }
                return {
                    recentPosts: [
                        ...prev.recentPosts,
                        ...fetchMoreResult.recentPosts
                    ]
                };
            }
        });
    }, [
        fetchMore
    ]);
    const cursor = data?.recentPosts[data?.recentPosts.length - 1]?.id;
    (0,_hooks_useScrollPagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
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