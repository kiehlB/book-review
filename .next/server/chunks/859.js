"use strict";
exports.id = 859;
exports.ids = [859];
exports.modules = {

/***/ 401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS": () => (/* binding */ ArrowLink),
/* harmony export */   "hb": () => (/* binding */ BackLink),
/* harmony export */   "pt": () => (/* binding */ NextLink)
/* harmony export */ });
/* unused harmony exports arrowVariants, ArrowButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useElementState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _svg_arrow_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7591);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8452);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const arrowVariants = {
    down: {
        initial: {
            y: 0
        },
        hover: {
            y: 4
        },
        focus: {
            y: [
                0,
                4,
                0
            ],
            transition: {
                repeat: Infinity
            }
        },
        active: {
            y: 12
        }
    },
    up: {
        initial: {
            y: 0
        },
        hover: {
            y: -4
        },
        focus: {
            y: [
                0,
                -4,
                0
            ],
            transition: {
                repeat: Infinity
            }
        },
        active: {
            y: -12
        }
    },
    left: {
        initial: {
            x: 0
        },
        hover: {
            x: -4
        },
        focus: {
            x: [
                0,
                -4,
                0
            ],
            transition: {
                repeat: Infinity
            }
        },
        active: {
            x: -12
        }
    },
    right: {
        initial: {
            x: 0
        },
        hover: {
            x: 4
        },
        focus: {
            x: [
                0,
                4,
                0
            ],
            transition: {
                repeat: Infinity
            }
        },
        active: {
            x: 12
        }
    },
    "top-right": {
        initial: {
            x: 0,
            y: 0
        },
        hover: {
            x: 4,
            y: -4
        },
        focus: {
            x: [
                0,
                4,
                0
            ],
            y: [
                0,
                -4,
                0
            ],
            transition: {
                repeat: Infinity
            }
        },
        active: {
            x: 12,
            y: -12
        }
    }
};
function getBaseProps({ textSize , className  }) {
    return {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition", {
            "text-xl": textSize === "medium",
            "text-lg": textSize === "small"
        }, className)
    };
}
function ArrowButtonContent({ children , direction ="right"  }) {
    const circumference = 28 * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useReducedMotion)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            children && (direction === "right" || direction === "up" || direction === "top-right") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "mr-4 text-xl font-medium",
                children: children
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative inline-flex h-14 w-14 flex-none items-center justify-center p-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "60",
                            height: "60",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    fill: "transparent",
                                    r: "28",
                                    cx: "30",
                                    cy: "30"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.circle, {
                                    className: "text-[#f0b90b]",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    fill: "transparent",
                                    r: "28",
                                    cx: "30",
                                    cy: "30",
                                    style: {
                                        strokeDasharray
                                    },
                                    variants: {
                                        initial: {
                                            strokeDashoffset: circumference
                                        },
                                        hover: {
                                            strokeDashoffset: 0
                                        },
                                        focus: {
                                            strokeDashoffset: 0
                                        },
                                        active: {
                                            strokeDashoffset: 0
                                        }
                                    },
                                    transition: {
                                        damping: 0,
                                        ...shouldReduceMotion ? {
                                            duration: 0
                                        } : null
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                        transition: shouldReduceMotion ? {
                            duration: 0
                        } : {},
                        variants: shouldReduceMotion ? {} : arrowVariants[direction],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_arrow_icon__WEBPACK_IMPORTED_MODULE_5__/* .ArrowIcon */ .e, {
                            direction: direction
                        })
                    })
                ]
            }),
            children && (direction === "left" || direction === "down") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-8 text-xl font-medium",
                children: children
            }) : null
        ]
    });
}
function ArrowButton({ onClick , type , ...props }) {
    const [ref, state] = useElementState();
    const shouldReduceMotion = useReducedMotion();
    return /*#__PURE__*/ _jsx(motion.button, {
        onClick: onClick,
        type: type,
        ...getBaseProps(props),
        ref: ref,
        animate: state,
        transition: shouldReduceMotion ? {
            duration: 0
        } : {},
        children: /*#__PURE__*/ _jsx(ArrowButtonContent, {
            ...props
        })
    });
}
const MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((next_link__WEBPACK_IMPORTED_MODULE_3___default()));
function ArrowLink({ to , href , click , ...props }) {
    const [ref, state] = (0,_hooks_useElementState__WEBPACK_IMPORTED_MODULE_4__/* .useElementState */ .X)();
    const shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useReducedMotion)();
    if (href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: href,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                ...getBaseProps(props),
                ref: ref,
                animate: state,
                onClick: click,
                transition: shouldReduceMotion ? {
                    duration: 0
                } : {},
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowButtonContent, {
                    ...props
                })
            })
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {
            ...getBaseProps(props),
            ref: ref,
            animate: state,
            onClick: click,
            transition: shouldReduceMotion ? {
                duration: 0
            } : {},
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowButtonContent, {
                ...props
            })
        });
    }
}
function BackLink({ href , className , children  }) {
    const [ref, state] = (0,_hooks_useElementState__WEBPACK_IMPORTED_MODULE_4__/* .useElementState */ .X)();
    const shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useReducedMotion)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MotionLink, {
        href: href,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("text-black flex focus:outline-none items-center", className),
        ref: ref,
        animate: state,
        transition: shouldReduceMotion ? {
            duration: 0
        } : {},
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                className: "flex items-center",
                variants: shouldReduceMotion ? {} : arrowVariants.left,
                transition: shouldReduceMotion ? {
                    duration: 0
                } : {},
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_arrow_icon__WEBPACK_IMPORTED_MODULE_5__/* .ArrowIcon */ .e, {
                    direction: "left",
                    className: "dark:text-white"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                as: "span",
                children: children
            })
        ]
    });
}
function NextLink({ href , className , children , click  }) {
    const [ref, state] = (0,_hooks_useElementState__WEBPACK_IMPORTED_MODULE_4__/* .useElementState */ .X)();
    const shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useReducedMotion)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MotionLink, {
        href: href,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("text-black flex focus:outline-none items-center", className),
        ref: ref,
        onClick: ()=>click(),
        animate: state,
        transition: shouldReduceMotion ? {
            duration: 0
        } : {},
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Typography__WEBPACK_IMPORTED_MODULE_6__.H6, {
                as: "span",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                variants: shouldReduceMotion ? {} : arrowVariants.right,
                transition: shouldReduceMotion ? {
                    duration: 0
                } : {},
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg_arrow_icon__WEBPACK_IMPORTED_MODULE_5__/* .ArrowIcon */ .e, {
                    direction: "right"
                })
            })
        ]
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H6": () => (/* binding */ H6)
/* harmony export */ });
/* unused harmony exports H1, H2, H3, H4, H5, Paragraph */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const fontSize = {
    h1: "leading-tight text-4xl md:text-5xl",
    h2: "leading-tight text-3xl md:text-4xl",
    h3: "text-2xl font-medium md:text-3xl",
    h4: "text-xl font-medium md:text-2xl",
    h5: "text-lg font-medium md:text-xl",
    h6: "text-lg font-medium"
};
const titleColors = {
    primary: "text-black dark:text-white",
    secondary: "text-gray-400 dark:text-slate-500"
};
function Title({ variant ="primary" , size , as , className , ...rest }) {
    const Tag = as ?? size;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(fontSize[size], titleColors[variant], className),
        ...rest
    });
}
function H1(props) {
    return /*#__PURE__*/ _jsx(Title, {
        ...props,
        size: "h1"
    });
}
function H2(props) {
    return /*#__PURE__*/ _jsx(Title, {
        ...props,
        size: "h2"
    });
}
function H3(props) {
    return /*#__PURE__*/ _jsx(Title, {
        ...props,
        size: "h3"
    });
}
function H4(props) {
    return /*#__PURE__*/ _jsx(Title, {
        ...props,
        size: "h4"
    });
}
function H5(props) {
    return /*#__PURE__*/ _jsx(Title, {
        ...props,
        size: "h5"
    });
}
function H6(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
        ...props,
        size: "h6"
    });
}
function Paragraph({ className , prose =true , as ="p" , textColorClassName ="text-secondary" , ...rest }) {
    return /*#__PURE__*/ React.createElement(as, {
        className: clsx("max-w-full text-lg", textColorClassName, className, {
            "prose prose-light dark:prose-dark": prose
        }),
        ...rest
    });
}



/***/ }),

/***/ 4490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$t": () => (/* binding */ MainNav),
/* harmony export */   "LN": () => (/* binding */ AppLayout),
/* harmony export */   "Nu": () => (/* binding */ Third),
/* harmony export */   "s2": () => (/* binding */ First),
/* harmony export */   "so": () => (/* binding */ Second)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



function MainNav({ children , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: className,
        children: children
    });
}
function AppLayout({ first , second , third , className  }) {
    const { isdark  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.core);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove(isdark == "dark" ? "light" : "dark");
        root.classList.add(isdark);
    }, [
        isdark
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: className,
        children: [
            first,
            second,
            third
        ]
    });
}
function First({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}
function Second({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}
function Third({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 3819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useElementState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useElementState() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        focus: false,
        hover: false,
        active: false
    });
    const setRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element)=>{
        ref.current = element;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const el = ref.current;
        if (!el) return;
        const pointerenter = ()=>setState((s)=>({
                    ...s,
                    hover: true
                }));
        const pointerleave = ()=>setState((s)=>({
                    ...s,
                    hover: false
                }));
        const focus = ()=>setState((s)=>({
                    ...s,
                    focus: true
                }));
        const blur = ()=>setState((s)=>({
                    ...s,
                    focus: false
                }));
        const pointerdown = ()=>{
            setState((s)=>({
                    ...s,
                    active: true
                }));
            const pointerup = ()=>{
                setState((s)=>({
                        ...s,
                        active: false
                    }));
                window.removeEventListener("pointerup", pointerup);
                window.removeEventListener("pointercancel", pointerup);
            };
            window.addEventListener("pointerup", pointerup);
            window.addEventListener("pointercancel", pointerup);
        };
        const keydown = (event)=>{
            if (event.key !== "Enter") {
                return;
            }
            setState((s)=>({
                    ...s,
                    active: true
                }));
            // when clicking a link, the keyup doesn't need to come from the keydown
            // element. We listen on the window instead, but only once.
            const keyup = ()=>setState((s)=>({
                        ...s,
                        active: false
                    }));
            window.addEventListener("keyup", keyup, {
                once: true
            });
        };
        el.addEventListener("pointerenter", pointerenter);
        el.addEventListener("pointerleave", pointerleave);
        el.addEventListener("focus", focus);
        el.addEventListener("blur", blur);
        el.addEventListener("pointerdown", pointerdown);
        el.addEventListener("keydown", keydown);
        return ()=>{
            el.removeEventListener("pointerenter", pointerenter);
            el.removeEventListener("pointerleave", pointerleave);
            el.removeEventListener("focus", focus);
            el.removeEventListener("blur", blur);
            el.removeEventListener("pointerdown", pointerdown);
            el.removeEventListener("keydown", keydown);
        };
    }, []);
    const status = state.active ? "active" : state.focus ? "focus" : state.hover ? "hover" : "initial";
    return [
        setRef,
        status
    ];
}



/***/ }),

/***/ 2045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getNextSeo)
/* harmony export */ });
function getNextSeo({ title ="Book Review" , canonical ="https://www.bookreview.pro" , description ="책을 읽고 리뷰를 쓰는 곳입니다" , origin ="" , keywords =""  }) {
    return {
        title,
        canonical,
        description,
        keywords
    };
}


/***/ }),

/***/ 119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TM": () => (/* binding */ checkEmpty),
/* harmony export */   "cx": () => (/* binding */ getScrollTop),
/* harmony export */   "p6": () => (/* binding */ formatDate),
/* harmony export */   "rA": () => (/* binding */ getScrollBottom)
/* harmony export */ });
/* unused harmony exports capitalizeFirstLetter, escapeForUrl, IsTextNull, validate */
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3885);
/* harmony import */ var date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4384);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);
/* harmony import */ var date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_2__);



const getScrollTop = ()=>{
    if (false) {}
};
const getScrollBottom = ()=>{
    if (!document.body) return 0;
    const { scrollHeight  } = document.body;
    const { innerHeight  } = window;
    const scrollTop = getScrollTop();
    return scrollHeight - innerHeight - scrollTop;
};
function capitalizeFirstLetter(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}
const escapeForUrl = (text)=>{
    return text.replace(/[^0-9a-zA-Zㄱ-힣.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf -]/g, "").trim().replace(/ /g, "-").replace(/--+/g, "-");
};
function IsTextNull(text) {
    if (!text) return true;
    const replaced = text.trim().replace(/([\u3164\u115F\u1160\uFFA0\u200B\u0001-\u0008\u000B-\u000C\u000E-\u001F]+)/g, "").replace(/&nbsp;/, "");
    if (replaced === "") return true;
    return false;
}
function checkEmpty(text) {
    if (!text) return true;
    const replaced = text.trim().replace(/([\u3164\u115F\u1160\uFFA0\u200B\u0001-\u0008\u000B-\u000C\u000E-\u001F]+)/g, "").replace(/&nbsp;/, "");
    if (replaced === "") return true;
    return false;
}
const validate = {
    username: (text)=>/^[a-z0-9]{5,20}$/.test(text),
    password: (text)=>{
        const passwordRules = [
            /[a-zA-Z]/,
            /[0-9]/,
            /[^A-Za-z0-9]/
        ];
        if (text.length < 8) return false;
        const counter = passwordRules.reduce((acc, current)=>{
            if (current.test(text)) {
                acc += 1;
            }
            return acc;
        }, 0);
        return counter > 1;
    },
    link: (text)=>/^(http|https):\/\/[^ "]+$/.test(text)
};
const formatDate = (date)=>{
    const d = new Date(date);
    const now = Date.now();
    const diff = now - new Date(date).getTime();
    // less than 5 minutes
    if (diff < 1000 * 60 * 5) {
        return "방금 전";
    }
    if (diff < 1000 * 60 * 60 * 24) {
        return date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_0___default()(d, {
            addSuffix: true,
            locale: (date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_2___default())
        });
    }
    if (diff < 1000 * 60 * 60 * 36) {
        return "어제";
    }
    if (diff < 1000 * 60 * 60 * 24 * 7) {
        return date_fns_formatDistanceToNow__WEBPACK_IMPORTED_MODULE_0___default()(d, {
            addSuffix: true,
            locale: (date_fns_locale_ko__WEBPACK_IMPORTED_MODULE_2___default())
        });
    }
    return date_fns_format__WEBPACK_IMPORTED_MODULE_1___default()(d, "yyyy년 M월 d일");
};


/***/ }),

/***/ 7591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ArrowIcon)
/* harmony export */ });
/* unused harmony export rotationMap */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const rotationMap = {
    up: "rotate-180",
    right: "-rotate-90",
    down: "rotate-0",
    left: "rotate-90",
    "top-right": "-rotate-135"
};
function ArrowIcon({ direction , size =32 , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "transform", rotationMap[direction]),
        width: size,
        height: size,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z",
            fill: "currentColor"
        })
    });
}



/***/ })

};
;