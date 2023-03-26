"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ PostGrid),
/* harmony export */   "k": () => (/* binding */ PageGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



function PageGrid({ children , className , as: Tag = "div"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("grid grid-cols-10 gap-6 max-w-[98.5rem] mx-auto mxl:max-w-[75rem] mmd:grid-cols-10", className),
        children: children
    });
}
const PostGrid = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Grid({ children , className  }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("grid grid-cols-8 gap-x-6 gap-y-12  max-w-[78.5rem] mx-auto w-full mxl:grid-cols-12 auto-rows-fr", className),
        children: children
    });
});



/***/ }),

/***/ 7034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/svg/trending.tsx


function Trending({ className  }) {
    const { isdark  } = (0,external_react_redux_.useSelector)((state)=>state.core);
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: className,
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: isdark == "dark" ? "#e4e5e7" : "#334155",
            width: 24,
            height: 24,
            d: "M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"
        })
    });
}
/* harmony default export */ const trending = (Trending);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/navbar/NavbarItem.tsx





const NavbarItem = (props)=>{
    const router = (0,router_.useRouter)();
    const isSelected = props.to === router.pathname || router.pathname.startsWith(`${props.to}/`) || props.sub && props.sub.some((path)=>router.pathname === path || router.pathname.startsWith(`${path}/`));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        className: external_clsx_default()("flex items-center underlined whitespace-nowrap text-lg font-semibold hover:text-team-current focus:text-team-current focus:outline-none px-[0.5rem] my-[0.5rem] py-[0.5rem] hover:text-[#212529] transition-all dark:text-[#e4e5e7]", {
            "active text-[#212529] border-[#FCD535] border-l-4 bg-[#ffffd1] bg-opacity-40 dark:bg-[#54565F33] dark:border-[#54565F33] hover:bg-[#FFF17F] dark:hover:bg-[#53525280]": isSelected,
            "text-[#495057] pl-3 transition-all hover:pl-5": !isSelected
        }),
        href: props.to,
        children: [
            props.icon,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-2",
                children: props.text
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/navbar/index.tsx





const Navbar = ({ primaryItems , secondaryItems , className , isDisabled  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("w-[80%] mxl:w-[90%]", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: primaryItems.map((itemProps)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarItem, {
                            ...itemProps
                        })
                    }, itemProps.text))
            }),
            secondaryItems ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex mb-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center underlined whitespace-nowrap text-base font-bold py-[0.5rem] transition-all text-[#334155] pl-3 dark:text-[#e4e5e7]",
                        children: "Trending tags"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(trending, {
                        className: "w-[20px] ml-2"
                    })
                ]
            }) : ""
        ]
    });
/* harmony default export */ const navbar = (Navbar);


/***/ })

};
;