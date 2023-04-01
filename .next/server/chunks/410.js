"use strict";
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 3410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ post_PostCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/media.ts
var media = __webpack_require__(7280);
;// CONCATENATED MODULE: ./src/components/common/RatioImage.tsx


const RatioImage = ({ widthRatio , heightRatio , src , alt , className  })=>{
    const paddingTop = `${heightRatio / widthRatio * 100}%`;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            paddingTop
        },
        className: `${className} w-full relative`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: src,
            alt: alt,
            className: "rounded-xl absolute top-0 left-0 w-full h-full block object-cover"
        })
    });
};
/* harmony default export */ const common_RatioImage = (RatioImage);

// EXTERNAL MODULE: ./src/components/common/Skeleton.tsx
var Skeleton = __webpack_require__(4776);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(119);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/post/PostCardItem.tsx










function PostCardItem({ post  }) {
    const withoutThumbnail = /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/post/${post.id}`,
        className: "col-span-2 mxl:col-span-4 mmx:col-span-6 mxs:col-span-12 h-full relative w-full border border-stone-100 rounded-xl cursor-pointer transform  hover:translate-y-[-15px] transition duration-500 ease-in-out shadow-md hover:shadow-lg dark:border-none dark:bg-[#212227]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-1 flex-col h-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-full justify-between flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: external_clsx_default()("text-[#4b4b4b] font-semibold text-[0.8125rem] dark:text-[#CFCFCF] truncate pt-[1rem]"),
                                children: [
                                    "도서: ",
                                    post?.bookInfo?.bookTitle ? post?.bookInfo?.bookTitle : "미선택"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(WithoutPostTitle, {
                                className: "text-[#18191b] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2 dark:text-[#CFCFCF]",
                                children: post?.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(WithoutPostBody, {
                                className: "text-sm mt-2 text-[#495057] dark:text-[#CFCFCF]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: post?.postbody
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between mt-6 leading-normal text-[#2e2e2e] dark:text-[#CFCFCF] p-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex font-semibold text-xs",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mr-2",
                                        children: [
                                            "좋아요 ",
                                            post?.likes,
                                            "개"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            "댓글 ",
                                            post?.subs_count,
                                            "개"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex font-semibold text-xs text-[#2e2e2e] dark:text-[#CFCFCF] ",
                                children: (0,utils/* formatDate */.p6)(post?.released_at)
                            })
                        ]
                    })
                ]
            })
        })
    });
    const withThumbnail = /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/post/${post.id}`,
        className: "col-span-2 mxl:col-span-4 mmx:col-span-6 mxs:col-span-12 h-full text-black relative w-full border border-stone-100 rounded-xl cursor-pointer transform  hover:translate-y-[-15px] transition duration-500 ease-in-out shadow-md hover:shadow-lg dark:border-none dark:bg-[#212227]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-1 flex-col h-full",
            children: [
                post?.thumbnail ? /*#__PURE__*/ jsx_runtime_.jsx(common_RatioImage, {
                    alt: "img",
                    widthRatio: 1.644444444444444,
                    heightRatio: 1,
                    src: post?.thumbnail,
                    className: "relative"
                }) : "",
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-full justify-between flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: external_clsx_default()("text-[#4b4b4b] font-semibold text-[0.8125rem] dark:text-[#CFCFCF] truncate pt-[1rem]"),
                                    children: [
                                        "도서: ",
                                        post?.bookInfo?.bookTitle ? post?.bookInfo?.bookTitle : "미선택"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                                    className: "text-[#18191b] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2 dark:text-[#CFCFCF]",
                                    children: post?.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostBody, {
                                    className: "text-sm mt-1 text-[#495057] dark:text-[#CFCFCF]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: post?.postbody
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between mt-6 leading-normal text-[#2e2e2e] dark:text-[#CFCFCF] p-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex font-semibold text-xs",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mr-2",
                                            children: [
                                                "좋아요 ",
                                                post?.likes,
                                                "개"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                "댓글 ",
                                                post?.subs_count,
                                                "개"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex font-semibold text-xs text-[#2e2e2e] dark:text-[#CFCFCF]",
                                    children: (0,utils/* formatDate */.p6)(post?.released_at)
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: post?.thumbnail ? withThumbnail : withoutThumbnail
    });
}
function PostCardSkeleton({ hideUser  }) {
    const { isdark  } = (0,external_react_redux_.useSelector)((state)=>state.core);
    const paddingTop = `${1 / 1.644444444444444 * 100}%`;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-span-2 mxl:col-span-4 mmx:col-span-6 mxs:col-span-12 h-full relative w-full border border-stone-100 rounded-xl cursor-pointer transform  hover:translate-y-[-15px] transition duration-500 ease-in-out shadow-md hover:shadow-lg dark:border-none dark:bg-[#212227]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "post-thumbnail",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Block, {
                        isdark: isdark,
                        style: {
                            paddingTop
                        },
                        className: "w-full h-full dark:bg-[#2b2d31]"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-2 dark:text-[#1e293b]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* SkeletonTexts */.c, {
                        wordLengths: [
                            2,
                            12
                        ],
                        isdark: isdark
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "ml-2 dark:text-[#1e293b]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* SkeletonTexts */.c, {
                            wordLengths: [
                                2,
                                5,
                                2,
                                5
                            ],
                            isdark: isdark
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* SkeletonTexts */.c, {
                            wordLengths: [
                                2,
                                4,
                                6,
                                6,
                                2,
                                4
                            ],
                            isdark: isdark
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-3"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between p-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* Skeleton */.O, {
                            width: "6em",
                            marginRight: "1rem",
                            isdark: isdark
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* Skeleton */.O, {
                            width: "3em",
                            noSpacing: true,
                            isdark: isdark
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const post_PostCardItem = (PostCardItem);
const WithoutPostTitle = (external_styled_components_default()).section`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;
const WithoutPostBody = (external_styled_components_default()).section`
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;
const PostBody = (external_styled_components_default()).section`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;
const PostTitle = (external_styled_components_default()).section`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;
const PostCardBlock = (external_styled_components_default()).div`
  border: 1px solid red;
  display: grid;

  padding-top: 4rem;
  padding-bottom: 4rem;
  ${media/* default.custom */.ZP.custom(768)} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
  &:first-child {
    padding-top: 0;
  }
  .user-info {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      display: block;
      margin-right: 1rem;
      background: '#F8F9FA';
      object-fit: cover;
      border-radius: 1.5rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.1);
      ${media/* default.custom */.ZP.custom(768)} {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
      }
    }
    .username {
      font-size: 0.875rem;
      color: #212529;
      font-weight: bold;
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: #343a40;
        }
      }
    }
    margin-bottom: 1.5rem;
    ${media/* default.custom */.ZP.custom(768)} {
      margin-bottom: 0.75rem;
    }
  }
  .post-thumbnail {
    margin-bottom: 1rem;
  }
  line-height: 1.5;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #212529;
    word-break: keep-all;
    ${media/* default.custom */.ZP.custom(768)} {
      font-size: 1rem;
    }
  }
  p {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #495057;
    word-break: keep-all;
    overflow-wrap: break-word;
    ${media/* default.custom */.ZP.custom(768)} {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }
  }
  .subinfo {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: #868e96;
    font-size: 0.875rem;
    ${media/* default.custom */.ZP.custom(768)} {
      font-size: 0.75rem;
    }
    span {
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
  .tags-wrapper {
    margin-bottom: -0.875rem;
    ${media/* default.custom */.ZP.custom(768)} {
      margin-bottom: -0.5rem;
    }
  }
  & + & {
  }
`;
const SkeletonBlock = external_styled_components_default()(PostCardBlock)`
  h2 {
    display: flex;
    margin-top: 1.375rem;
    margin-bottom: 0.375rem;
  }
  .user-thumbnail-skeleton {
    width: 3rem;
    height: 3rem;
    ${media/* default.custom */.ZP.custom(768)} {
      width: 2rem;
      height: 2rem;
    }
  }
  .thumbnail-skeleton-wrapper {
    width: 100%;
    padding-top: 52.35%;
    position: relative;
    .skeleton {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .short-description {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 1rem;
    .line {
      display: flex;
    }
    .line + .line {
      margin-top: 0.5rem;
    }
  }
  .tags-skeleton {
    line-height: 1;
    font-size: 2rem;
    ${media/* default.custom */.ZP.custom(768)} {
      font-size: 1.25rem;
    }
  }
`;
const shining = external_styled_components_.keyframes`
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
const Block = (external_styled_components_default()).span`
  background: ${(props)=>props.isdark == "dark" ? "#212227" : "#f1f3f5"};

  animation: ${shining} 1s ease-in-out infinite;
  display: inline-block;
  border-radius: 4px;
  height: 1em;
  ${(props)=>!props.noSpacing && external_styled_components_.css`
      & + & {
        margin-left: 0.5rem;
      }
    `}
  ${(props)=>props.circle && external_styled_components_.css`
      border-radius: 50%;
    `}
`;

;// CONCATENATED MODULE: ./src/components/post/PostCard.tsx



function PostCard({ posts , loading  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            posts.map((post, i)=>{
                if (post) return /*#__PURE__*/ jsx_runtime_.jsx(post_PostCardItem, {
                    post: post
                }, post.id);
            }),
            loading && Array.from({
                length: 8
            }).map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx(PostCardSkeleton, {}, i))
        ]
    });
}
/* harmony default export */ const post_PostCard = (PostCard);


/***/ }),

/***/ 7280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports customMediaQuery, minCustomMediaQuery, customHeigtMediaQuery, breakpoints */
const customMediaQuery = (maxWidth)=>`@media (max-width: ${maxWidth}px)`;
const minCustomMediaQuery = (minWidth)=>`@media (min-width: ${minWidth}px)`;
const customHeigtMediaQuery = (maxHeigt)=>`@media (max-height: ${maxHeigt}px)`;
const breakpoints = {
    xlarge: "1200px",
    large: "1024px",
    medium: "768px",
    small: "576px"
};
const media = {
    custom: customMediaQuery,
    minCustom: minCustomMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(576)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (media);


/***/ })

};
;