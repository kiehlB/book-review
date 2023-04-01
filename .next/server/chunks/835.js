"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 6835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useScrollPagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);


function useScrollPagination({ cursor , stop , offset , onLoadMore , onLoadMoreByOffset  }) {
    const last = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const preventBottomStick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .getScrollBottom */ .rA)() === 0) {
            window.scrollTo(0, (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .getScrollTop */ .cx)() - 1);
        }
    }, []);
    const loadMore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!cursor || !onLoadMore) return;
        if (cursor === last.current) return;
        last.current = cursor;
        await onLoadMore(cursor);
        preventBottomStick();
    }, [
        cursor,
        onLoadMore,
        preventBottomStick
    ]);
    const loadMoreUsingOffset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (stop || !offset || !onLoadMoreByOffset) return;
        if (offset === last.current) return;
        last.current = offset;
        await onLoadMoreByOffset(offset);
        preventBottomStick();
    }, [
        offset,
        onLoadMoreByOffset,
        preventBottomStick,
        stop
    ]);
    const onScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        const scrollBottom = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__/* .getScrollBottom */ .rA)();
        if (scrollBottom < window.screen.height) {
            loadMore();
            loadMoreUsingOffset();
        }
    }, [
        loadMore,
        loadMoreUsingOffset
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    }, [
        onScroll
    ]);
}


/***/ })

};
;