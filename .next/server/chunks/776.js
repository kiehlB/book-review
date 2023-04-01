"use strict";
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 4776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ Skeleton),
/* harmony export */   "c": () => (/* binding */ SkeletonTexts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



function SkeletonTexts({ wordLengths , useFlex , isdark  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: wordLengths.map((length, index)=>{
            const props = {
                [useFlex ? "flex" : "width"]: useFlex ? length : `${length}rem`
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                ...props,
                isdark: isdark
            }, index);
        })
    });
}
function Skeleton({ width , height , flex , marginRight , noSpacing , circle , className , borderRadius , isdark  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
        isdark: isdark,
        style: {
            width,
            height,
            flex,
            marginRight,
            borderRadius
        },
        noSpacing: noSpacing,
        circle: circle,
        className: className
    });
}
const shining = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;
const Block = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
  background: ${(props)=>props.isdark == "dark" ? "#2b2d31" : "#f1f3f5"};

  animation: ${shining} 1s ease-in-out infinite;
  display: inline-block;
  border-radius: 4px;
  height: 1em;

  ${(props)=>!props.noSpacing && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      & + & {
        margin-left: 0.5rem;
      }
    `}
  ${(props)=>props.circle && styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
      border-radius: 50%;
    `}
`;


/***/ })

};
;