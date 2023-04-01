"use strict";
exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 2489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ArrowButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _hooks_usegetTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3638);
/* harmony import */ var _TagsItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_ArrowButton__WEBPACK_IMPORTED_MODULE_2__]);
_common_ArrowButton__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Tags(props) {
    const { data: Tags , loading  } = (0,_hooks_usegetTags__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        sort: "byName"
    });
    const GetTags = Tags?.tags?.slice()?.sort((a, b)=>b.posts_count - a.posts_count)?.slice(0, 6);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " text-[#475569] dark:text-[#e4e5e7]",
        children: [
            GetTags?.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TagsItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    name: tag.name,
                    postsCount: tag.posts_count,
                    loading: !Tags || loading
                }, tag.id)),
            loading && Array.from({
                length: 8
            }).map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TagsItem__WEBPACK_IMPORTED_MODULE_4__/* .TagsSkeleton */ .e, {}, i)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ArrowButton__WEBPACK_IMPORTED_MODULE_2__/* .NextLink */ .pt, {
                    className: "text-[#475569] hover:text-[#212529]",
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-bold py-1 pl-3 text-[#475569] mr-2 text-base hover:text-[#212529]",
                        children: "See All"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "e": () => (/* binding */ TagsSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4776);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);





function TagItem(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col cursor-pointer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center w-[80%] py-1 pl-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-1 transition-all hover:pl-[6px] hover:text-[#212529] hover:dark:text-[#fff] dark:text-[#e4e5e7] font-semibold",
                    children: props.name
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "rounded-full border bg-[#f1f5f9] text-[#64748b] px-2 py-1 text-sm font-bold dark:bg-[#2b2d31] dark:border-none dark:text-[#e4e5e7]",
                    children: [
                        "+",
                        props.postsCount
                    ]
                })
            ]
        })
    });
}
function TagsSkeleton({ hideUser  }) {
    const { isdark  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.core);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center w-[80%] py-1 pl-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-1 transition-all hover:pl-[6px] hover:text-[#212529]  dark:text-[#2b2d31] font-semibold",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Skeleton__WEBPACK_IMPORTED_MODULE_3__/* .SkeletonTexts */ .c, {
                        wordLengths: [
                            7
                        ],
                        isdark: isdark
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-full  dark:text-[#2b2d31]  px-2 py-1 text-sm font-bold dark:bg-[#2b2d31] dark:border-none ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_Skeleton__WEBPACK_IMPORTED_MODULE_3__/* .SkeletonTexts */ .c, {
                        wordLengths: [
                            2
                        ],
                        isdark: isdark
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagItem);
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
  background: #f1f3f5;
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


/***/ }),

/***/ 3638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useGetTags)
});

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(825);
;// CONCATENATED MODULE: ./src/lib/graphql/tags.ts

const getTagsQuery = external_graphql_tag_.gql`
  query Tags($sort: String!) {
    tags(sort: $sort) {
      id
      name
      posts_count
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/tags/hooks/usegetTags.tsx


function useGetTags({ sort  }) {
    const { data , loading , fetchMore  } = (0,client_.useQuery)(getTagsQuery, {
        variables: {
            sort
        },
        notifyOnNetworkStatusChange: true
    });
    return {
        data,
        loading
    };
}


/***/ })

};
;