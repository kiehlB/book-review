"use strict";
exports.id = 381;
exports.ids = [381];
exports.modules = {

/***/ 6381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tags_Tags)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/common/Skeleton.tsx
var Skeleton = __webpack_require__(4776);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/tags/TagsItem.tsx





function TagItem(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col cursor-pointer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center w-[80%] py-1 pl-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-1 transition-all hover:pl-[6px] hover:text-[#212529] hover:dark:text-[#fff] dark:text-[#e4e5e7] font-semibold",
                    children: props.name
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
    const { isdark  } = (0,external_react_redux_.useSelector)((state)=>state.core);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center w-[80%] py-1 pl-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-1 transition-all hover:pl-[6px] hover:text-[#212529]  dark:text-[#2b2d31] font-semibold",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* SkeletonTexts */.c, {
                        wordLengths: [
                            7
                        ],
                        isdark: isdark
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-full  dark:text-[#2b2d31]  px-2 py-1 text-sm font-bold dark:bg-[#2b2d31] dark:border-none ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* SkeletonTexts */.c, {
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
/* harmony default export */ const TagsItem = (TagItem);
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
  background: #f1f3f5;
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

;// CONCATENATED MODULE: ./src/components/tags/Tags.tsx




function Tags(props) {
    const { data: Tags , loading  } = useGetTags({
        sort: "byName"
    });
    const GetTags = Tags?.tags?.slice()?.sort((a, b)=>b.posts_count - a.posts_count)?.slice(0, 6);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " text-[#475569] dark:text-[#e4e5e7]",
        children: [
            GetTags?.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(TagsItem, {
                    name: tag.name,
                    postsCount: tag.posts_count,
                    loading: !Tags || loading
                }, tag.id)),
            loading && Array.from({
                length: 8
            }).map((_, i)=>/*#__PURE__*/ jsx_runtime_.jsx(TagsSkeleton, {}, i))
        ]
    });
}
/* harmony default export */ const tags_Tags = (Tags);


/***/ })

};
;