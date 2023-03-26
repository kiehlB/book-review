"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 3547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DayPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4573);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3224);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DayPicker__WEBPACK_IMPORTED_MODULE_3__]);
_DayPicker__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const today = new Date();
const ActivityDateRangePicker = ()=>{
    // Computed values
    const defaultSelected = {
        from: today,
        to: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.subDays)(today, 0)
    };
    const [range, setRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (range?.from && range?.to) {
            router.push("/trending");
            dispatch((0,_store_core__WEBPACK_IMPORTED_MODULE_5__/* .getTimestamp */ .u3)({
                from: range.from,
                to: range.to
            }));
        }
    }, [
        range,
        dispatch
    ]);
    const ranges = [
        {
            label: "오늘",
            value: {
                from: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.subDays)(today, 0),
                to: today
            }
        },
        {
            label: "이번 주",
            value: {
                from: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.subDays)(today, 7),
                to: today
            }
        },
        {
            label: "이번 달",
            value: {
                from: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.subDays)(today, 28),
                to: today
            }
        },
        {
            label: "올해",
            value: {
                from: (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.subDays)(today, 365),
                to: today
            }
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DayPicker__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        mode: "range",
        fixedWeeks: true,
        range: range,
        selected: range,
        setRange: setRange,
        onSelect: setRange,
        ranges: ranges,
        onChange: setRange
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivityDateRangePicker);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports IconButton, Button */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4371);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8261);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5564);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3224);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function CustomCaption(props) {
    const { goToMonth , nextMonth , previousMonth  } = (0,react_day_picker__WEBPACK_IMPORTED_MODULE_3__.useNavigation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
        className: "flex justify-center items-center mb-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "mr-4 dark:text-white",
                disabled: !previousMonth,
                onClick: ()=>previousMonth && goToMonth(previousMonth),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoIosArrowBack, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "dark:text-white",
                children: [
                    " ",
                    (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(props.displayMonth, "yyy.MM")
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "ml-4 dark:text-white",
                disabled: !nextMonth,
                onClick: ()=>nextMonth && goToMonth(nextMonth),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoIosArrowForward, {})
            })
        ]
    });
}
const IconButton = (props)=>{
    const appearance = props.appearance;
    const intent = props.intent;
    return /*#__PURE__*/ _jsx(EvergreenIconButton, {
        ...props,
        fontWeight: "600"
    });
};
const Button = (props)=>{
    const appearance = props.appearance;
    const intent = props.intent;
    return /*#__PURE__*/ _jsx(EvergreenButton, {
        ...props,
        fontWeight: "600"
    });
};
const DateRangePicker = ({ onChange , range , ranges , setRange , ...otherProps })=>{
    const { isdark  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)((state)=>state.core);
    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    let initialFrom = null;
    let initialTo = null;
    const [to, setTo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [from, setFrom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialFrom);
    const [isSelectingFirstDay, setIsSelectingFirstDay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    let footer = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-2 flex w-[60%] justify-between mx-auto items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "취소"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-sm font-semibold px-[20px] py-[12px] rounded-3xl bg-[#FCD535] text-[#181A20] cursor-pointer hover:text-[#5b646d] mxs:hidden",
                children: "완료"
            })
        ]
    });
    const today = new Date();
    const disabledDays = [
        {
            from: new Date(0, 0, 0),
            to: new Date(2023, 1, 8)
        },
        {
            from: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)(today, 1),
            to: new Date(9999, 2, 9)
        }
    ];
    const handleDayClick = (day)=>{
        if (isSelectingFirstDay) {
            setIsSelectingFirstDay(false);
            setFrom(day);
        } else {
            setIsSelectingFirstDay(true);
            setTo(day);
            if (from && to) {
                buttonRef?.current?.click();
                dispatch((0,_store_core__WEBPACK_IMPORTED_MODULE_10__/* .getTimestamp */ .u3)({
                    from: from,
                    to: to
                }));
            }
        }
    };
    const handleDayMouseEnter = (day)=>{
        setTo(day);
    };
    const start = isSelectingFirstDay ? initialFrom : from;
    const end = isSelectingFirstDay ? initialTo : to;
    let modifiers;
    let selectedDays;
    if (start !== null && end !== null) {
        modifiers = start < end ? {
            start,
            end
        } : {
            start: end,
            end: start
        };
        selectedDays = [
            start,
            {
                from: start,
                to: end
            }
        ];
    }
    const handleRangeClick = (range)=>{
        if (range) {
            router.push("/trending");
            dispatch((0,_store_core__WEBPACK_IMPORTED_MODULE_10__/* .getTimestamp */ .u3)(range));
            buttonRef?.current?.click();
        }
    };
    const resetTime = ()=>{
        setRange(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-sm z-[8] ml-4",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover, {
                className: "relative",
                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Button, {
                                ref: buttonRef,
                                className: "outline-none flex items-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoCalendarNumberOutline, {
                                    size: 24,
                                    className: "text-[#4b4b4b] dark:text-[#CFCFCF] hover:text-[#212529]",
                                    onClick: ()=>resetTime()
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Popover.Panel, {
                                    className: "absolute overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 w-[300px] right-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DayWrapper, {
                                        isdark: isdark,
                                        className: "relative grid bg-white dark:text-white dark:bg-[#212227] lg:grid-cols-1",
                                        children: [
                                            ranges && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex flex-col border-b dark:bg-[#212227]",
                                                children: ranges.map((range)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "dark:text-[#cfcfcf] dark:hover:text-[#cfcfcf] text-center text-[#475569] text-xs font-bold py-2 rounded hover:bg-slate-100 dark:hover:bg-[#32333a] ",
                                                        onClick: ()=>{
                                                            handleRangeClick(range.value);
                                                        },
                                                        children: range.label
                                                    }, range.label))
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_3__.DayPicker, {
                                                disabled: disabledDays,
                                                locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_6__.ko,
                                                onDayClick: (day)=>handleDayClick(day),
                                                onDayMouseEnter: handleDayMouseEnter,
                                                className: "Selectable",
                                                ...otherProps,
                                                components: {
                                                    Caption: CustomCaption
                                                }
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(DateRangePicker));
const DayWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_9___default().div)`
  .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
    background-color: #fcd535;
    color: ${(props)=>props.isdark == "dark" ? "#212529" : "#212529"};
    &:hover {
      font-weight: 700;
    }
  }
  .rdp-cell {
    color: ${(props)=>props.isdark == "dark" ? "#ececec" : "#212529"};
  }
  .react-datepicker__header {
    background-color: #fff;
  }
  .rdp {
    margin: 1rem 0rem;
    padding-left: 0.5rem;
  }

  .rdp-day_selected {
    color: #212529;
    font-weight: bold;
  }

  .rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: #fcd535;
    --rdp-background-color: #e7edff;
    /* Switch to dark colors for dark themes */
    --rdp-accent-color-dark: #212529;
    --rdp-background-color-dark: #fcd535;
    color: #212529;
    /* Outline border for focused elements */
    --rdp-outline: 2px solid var(--rdp-accent-color);
    /* Outline border for focused and selected elements */
    --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75);
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export isActiveLink */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _datePicker_DateRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _datePicker_DateRange__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _datePicker_DateRange__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const isActiveLink = (href, currentPathname)=>{
    if (href === "/") {
        return href === currentPathname;
    }
    return currentPathname.startsWith(href);
};
function HomeTab({ primaryItems  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const stopPropagation = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            primaryItems.map(({ name , href , svg  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: href,
                    onClick: (e)=>{
                        if (isActiveLink(href, router.pathname)) {
                            stopPropagation(e);
                        }
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "ml-4 flex flex-col relative text-base font-semibold text-[#181A20] dark:text-[#e4e5e7]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${router.pathname == href ? "text-[#FFA500]" : "text-[#4b4b4b] dark:text-[#CFCFCF]"} mr-1.5`,
                                        children: svg
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${router.pathname == href ? "text-[#FFA500]" : "text-[#4b4b4b] dark:text-[#CFCFCF]"}`,
                                        children: name
                                    })
                                ]
                            }),
                            isActiveLink(href, router.pathname) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                layoutId: "navigation-underline",
                                className: "navigation-underline",
                                animate: true
                            })
                        ]
                    })
                }, name)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_datePicker_DateRange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomeTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HomeTab__WEBPACK_IMPORTED_MODULE_2__]);
_HomeTab__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function HomeTitle({ title , primaryItems  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between items-center my-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mb-auto text-lg text-[#212529] font-semibold dark:text-[#e4e5e7]",
                children: title
            }),
            primaryItems && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HomeTab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                primaryItems: primaryItems
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeTitle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;