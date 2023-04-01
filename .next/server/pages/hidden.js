"use strict";
(() => {
var exports = {};
exports.id = 770;
exports.ids = [770,888];
exports.modules = {

/***/ 708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hidden),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_GridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(318);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_PageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1524);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_nextSeo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2045);
/* harmony import */ var _components_post_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3410);
/* harmony import */ var _components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4490);
/* harmony import */ var _components_tags_Tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2489);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_home_HomeTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7662);
/* harmony import */ var _lib_graphql_posts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7426);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_PageLayout__WEBPACK_IMPORTED_MODULE_5__, _components_tags_Tags__WEBPACK_IMPORTED_MODULE_9__, _components_home_HomeTitle__WEBPACK_IMPORTED_MODULE_14__]);
([_components_layout_PageLayout__WEBPACK_IMPORTED_MODULE_5__, _components_tags_Tags__WEBPACK_IMPORTED_MODULE_9__, _components_home_HomeTitle__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















//test
function Hidden({ post  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__.NextSeo, {
                ...(0,_lib_nextSeo__WEBPACK_IMPORTED_MODULE_17__/* .getNextSeo */ .q)({
                    title: "Book Review",
                    description: "책 리뷰 메인 페이지"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__.SiteLinksSearchBoxJsonLd, {
                url: "https://www.bookreview.pro",
                potentialActions: [
                    {
                        target: "https://www.bookreview.pro/search?q",
                        queryInput: "search_term_string"
                    }
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_PageLayout__WEBPACK_IMPORTED_MODULE_5__/* .PageLayout */ .X, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_GridLayout__WEBPACK_IMPORTED_MODULE_2__/* .PageGrid */ .k, {
                    as: "div",
                    className: "pt-[2rem] pb-[2rem]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_8__/* .MainNav */ .$t, {
                            className: "col-span-2 mmd:hidden",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sticky top-24",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        primaryItems: [
                                            {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiBookOpenLine, {}),
                                                text: "포스트",
                                                to: "/",
                                                sub: [
                                                    "/search",
                                                    "/search/[query]",
                                                    "/trending"
                                                ]
                                            },
                                            {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiFillNotification, {}),
                                                text: "게시판",
                                                to: "/post"
                                            },
                                            {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsTagFill, {}),
                                                text: "태그",
                                                to: "/tags"
                                            }
                                        ],
                                        secondaryItems: [
                                            {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiFileChartFill, {}),
                                                text: "Trending tags",
                                                to: "/Trending tags"
                                            }
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_tags_Tags__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_8__/* .AppLayout */ .LN, {
                            className: "col-span-8 mmd:col-span-12",
                            first: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_8__/* .First */ .s2, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_HomeTitle__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    title: "포스트",
                                    primaryItems: [
                                        {
                                            svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_12__.IoMdTime, {}),
                                            name: "최신",
                                            href: "/"
                                        },
                                        {
                                            svg: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_13__.MdOutlineLocalFireDepartment, {}),
                                            name: "트렌딩",
                                            href: "/trending"
                                        }
                                    ]
                                })
                            }),
                            second: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_8__/* .Second */ .so, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_GridLayout__WEBPACK_IMPORTED_MODULE_2__/* .PostGrid */ .Y, {
                                    className: "mt-[1rem]",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_post_PostCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        posts: post?.data?.recentPosts || [],
                                        loading: !post?.data || post?.loading
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_16__.ApolloClient({
        ssrMode: true,
        link: new _apollo_client__WEBPACK_IMPORTED_MODULE_16__.HttpLink({
            uri: "https://api.bookreview.pro/graphql",
            credentials: "include"
        }),
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_16__.InMemoryCache()
    });
    const postData = await client.query({
        query: _lib_graphql_posts__WEBPACK_IMPORTED_MODULE_15__/* .GET_recentPosts */ .l5,
        variables: {
            limit: 24
        }
    });
    return {
        props: {
            post: postData
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4394:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 7596:
/***/ ((module) => {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ 9476:
/***/ ((module) => {

module.exports = require("@heroicons/react/20/solid");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 4384:
/***/ ((module) => {

module.exports = require("date-fns/format");

/***/ }),

/***/ 3885:
/***/ ((module) => {

module.exports = require("date-fns/formatDistanceToNow");

/***/ }),

/***/ 5564:
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ 129:
/***/ ((module) => {

module.exports = require("date-fns/locale/ko");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 4371:
/***/ ((module) => {

module.exports = require("evergreen-ui");

/***/ }),

/***/ 825:
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8261:
/***/ ((module) => {

module.exports = require("react-day-picker");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 8625:
/***/ ((module) => {

module.exports = require("react-icons/ci");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 1740:
/***/ ((module) => {

module.exports = require("react-icons/tfi");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 1127:
/***/ ((module) => {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 8936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 7105:
/***/ ((module) => {

module.exports = import("use-debounce");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,172,298,664,87,859,212,524,843,662,426,776,410,489], () => (__webpack_exec__(708)));
module.exports = __webpack_exports__;

})();