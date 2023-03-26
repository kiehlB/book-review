"use strict";
exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 1196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProfileThumbnail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1022);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(browser_image_compression__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4371);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);






class ProfileThumbnail extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
    constructor(args){
        super(args);
        this.compressImage = this.compressImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            open: false,
            previewSource: "",
            maxSizeMB: 1,
            maxWidthOrHeight: 1024,
            webWorker: {
                progress: null,
                inputSize: null,
                outputSize: null,
                inputUrl: null,
                outputUrl: null
            },
            mainThread: {
                progress: null,
                inputSize: null,
                outputSize: null,
                inputUrl: null,
                outputUrl: null
            }
        };
    }
    componentDidMount() {
        document.addEventListener("click", this.closePopover);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.closePopover);
    }
    onPopoverClick = ()=>{
        // @ts-ignore
        this.preventNextClose = true;
    };
    openPopover = ()=>{
        // @ts-ignore
        if (!this.state.open) {
            // @ts-ignore
            this.preventNextClose = true;
            this.setState({
                open: true
            });
        }
    };
    cleardata = ()=>{
        this.props.setreadyForFile(null);
        this.props.setPreviewSource(0);
        this.setState({
            webWorker: {
                progress: null,
                inputSize: null,
                outputSize: null,
                inputUrl: null,
                outputUrl: null
            }
        });
    };
    closePopover = ()=>{
        // @ts-ignore
        if (!this.preventNextClose && this.state.open) {
            this.setState({
                open: false
            });
        }
        // @ts-ignore
        this.preventNextClose = false;
    };
    handleChange(target) {
        return (e)=>{
            this.setState({
                [target]: e.currentTarget.value
            });
        };
    }
    onProgress(p, useWebWorker) {
        const targetName = useWebWorker ? "webWorker" : "mainThread";
        this.setState((prevState)=>({
                ...prevState,
                [targetName]: {
                    ...prevState[targetName],
                    progress: p
                }
            }));
    }
    async compressImage(event, useWebWorker) {
        const file = event.target.files[0];
        const targetName = useWebWorker ? "webWorker" : "mainThread";
        this.setState((prevState)=>({
                ...prevState,
                [targetName]: {
                    ...prevState[targetName],
                    inputSize: (file.size / 1024 / 1024).toFixed(2),
                    inputUrl: URL.createObjectURL(file)
                }
            }));
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1024,
            useWebWorker,
            onProgress: (p)=>this.onProgress(p, useWebWorker)
        };
        const output = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(file, options);
        const reader = new FileReader();
        reader.readAsDataURL(output);
        reader.onloadend = async ()=>{
            const { addImage , setreadyForFile , readyForFile  } = this.props;
            this.props.setPreviewSource(1);
            addImage(reader.result);
            if (reader.result) {
                setreadyForFile(reader.result);
            }
        };
        this.setState((prevState)=>({
                ...prevState,
                [targetName]: {
                    ...prevState[targetName],
                    outputSize: (output.size / 1024 / 1024).toFixed(2),
                    outputUrl: URL.createObjectURL(output)
                }
            }));
    }
    render() {
        const { webWorker , mainThread , maxSizeMB , maxWidthOrHeight  } = this.state;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "cursor-pointer",
            children: [
                this.props.readyForFile && this.props.previewSource == 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>this.cleardata(),
                        className: "text-base text-[#212529] cursor-pointer",
                        children: "이미지 제거"
                    })
                }) : "",
                this.props.previewSource == 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-full flex justify-center items-center ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
                        size: 48
                    })
                }) : this.props.readyForFile && this.props.previewSource == 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "input-file",
                        className: "w-full h-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " rounded-lg absolute hover:bg-[#00000066] transition-all  z-10 w-[128px] h-[128px] flex justify-center items-center opacity-0 hover:opacity-100",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillEdit, {
                                    size: 42,
                                    color: "#ffff",
                                    className: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: this.props.readyForFile,
                                className: "flex items-center flex-col justify-center object-cover w-[128px] h-[128px]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "input-file",
                                type: "file",
                                name: "file",
                                onChange: (e)=>this.compressImage(e, true),
                                style: {
                                    display: "none"
                                }
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        htmlFor: "input-file",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " rounded-lg absolute hover:bg-[#00000066] transition-all  z-10 w-[128px] h-[128px] flex justify-center items-center opacity-0 hover:opacity-100",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillEdit, {
                                    size: 42,
                                    color: "#ffff",
                                    className: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "rounded-lg transition-all",
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASbSURBVHgB7Z0tTytBFIYP914BDiQ4cIADB0EhwYFE8ifq7g/hJ2CRSCQ4kOCobF3ruHk3maS5aSnbdnfPOe/7JE0oCTvTnmc+dvbMsNbr9b5M0PLLBDUSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAOX+MhPX1dTs+Prbt7W3b3d21jY2N6ndgPB7bYDCw4XBor6+v9vHxUb1nIL0Ae3t7dn5+XgV9FhABYuC1v79f/Q4SPD8/28vLi2UmrQA/Cfx34O/wwjXu7u7S9gi/z87O/loyELTr62vb2tqyZcFQcXp6Wv2MXiEb6SaBCDwEWDVFqmykEgABOjo6sqbAtbNJkEaAi4uLRoNfQBmXl5eWhRQCIChlnG6Dk5OTVstrkvACYKLXxJg/D5RZ1hEiE14ABGIVs/26IPgZeoHQAiDwbYz7s4AA0XuB0AIsusizKsrycmRCC+Dhyz84OLDIhBUAra/rHgCgDpGHgbAC7OzsmBc81aUuYQXY3Nw0L3iqS13CCtDFrd8sPNWlLsoIIkcCkBNWAE8JGpGTRcIKgPw9L3iqS13CCvD5+Wle8FSXuoQVAJm8HlK0UAfUJSqhJ4Fvb2/WNcgcjkxoAfDld936oieKhhYAwX96erKuwJ6B6Oni4dcBIEAXvQAC//j4aNEJLwCC30UgUGaGzSIpVgLRC7Q5FKCsLFvG0iwFPzw8tBIUlIGyspDqWcD9/X2jEuDaKCMT6R4GIUBNzAlwzWzBByl3ByNYaK23t7dLP6vHfT6u9/7+bhlZ6/V6X5YYpI0jebRu/mD2wBfSHxCBngAv9ASQ4PDwsErhwvvJE0JGo1EV9H6/72KFsS1SCDAZyFngnh2vVUwSUV4WQUILULZnlR06aMGYqDW1QDN56khZho6+Ghh2DoBgXF1dTZ3koZWvcqWubECdtg0NZUQ+QiakAGjxOA9gHhABj4wXeWyMHgX5/j85Zwi9AXoeD4+n6xJOAASk7nbwkjyCGT0meXg/mcWDYOMsIJwShtaO3mWRHT/odaINCaHmAIsEHyCQOP6tHAHXFKVukSQIsxK4aPDbBnWMdG5ACAHwhUYIfgHzEwwjEXAvQFdHwCzLzc1NiC1jrgXA2I31/Ijbr1HnCEfKuRagq/N/VgXuJLzPB9wKgMBnOITJu8RuBUDXnwHvQ4FLAbDkGrnr/x8MBV7vClwKEHHWPw+vn8mdANlaf8FrL+BOgIytv+Dxs7kSAC0kY+sveOwFXAnQ5bGvbdH0A6m6uBLAw8GPTePtaFk3AmTv/gtYF/A0DLgRgKH1Fzx9VjcCIBuHBU89nRsBkKrFgqfNJm5SwpBGVc7fz/CvWKZRUsk9bS1PvzVMfI+OiiVHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIOcfGjV2tEfztqEAAAAASUVORK5CYII="
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "input-file",
                                type: "file",
                                name: "file",
                                onChange: (e)=>this.compressImage(e, true),
                                style: {
                                    display: "none"
                                }
                            })
                        ]
                    })
                })
            ]
        });
    }
}
const ButtonStyles = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  font-size: 1rem;
  font-weight: bold;
  color: rgb(134, 142, 150);
  cursor: pointer;
`;


/***/ }),

/***/ 3834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_graphql_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7426);
/* harmony import */ var _hooks_useGetUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5210);
/* harmony import */ var _hooks_useProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3060);
/* harmony import */ var _ProfileThumbnail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1196);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useProfile__WEBPACK_IMPORTED_MODULE_8__]);
_hooks_useProfile__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function SettingCard({}) {
    const { getUser , loading  } = (0,_hooks_useGetUser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { handleSubmit  } = (0,_hooks_useProfile__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const [readyForFile, setreadyForFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [previewSource, setPreviewSource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [fileInputState, setFileInputState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [isPrivate, setIsPrivate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { auth , profileThumbnail , displayName , bio: Bio  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth);
    console.log(readyForFile);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(displayName ? displayName : "");
    const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Bio ? Bio : "");
    const [uploadThumbnail] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_lib_graphql_posts__WEBPACK_IMPORTED_MODULE_6__/* .UPLOAD_IMAGE_TO_CLOUDINARY */ .KH);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setreadyForFile(profileThumbnail);
        setPreviewSource(2);
    }, [
        loading
    ]);
    const addImage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (url)=>{
        await uploadThumbnail({
            variables: {
                body: url,
                width: 128,
                height: 128
            },
            update: (_proxy, { data: newData  })=>{
                setUrl(newData.uploadImage.url);
                setreadyForFile(newData.uploadImage.url);
                setPreviewSource(2);
            }
        });
        if (url) {
            setFileInputState(url);
        }
    }, []);
    if (loading) return;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rounded py-[2rem]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[260px] text-[#21259]",
                        children: "프로필 사진"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileThumbnail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            addImage: addImage,
                            readyForFile: readyForFile,
                            setPreviewSource: setPreviewSource,
                            uploadThumbnail: uploadThumbnail,
                            previewSource: previewSource,
                            setreadyForFile: setreadyForFile,
                            thumbnail: profileThumbnail
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mt-[24px] py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[260px] text-[#21259]",
                        children: "로그인 계정"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: getUser?.whoami?.username
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mt-[24px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[260px] text-[#21259]",
                        children: "닉네임"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTextarea, {
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        placeholder: "닉네임을 작성 해보세요",
                        className: "w-[50%] border border-[#f1f3f5] dark:border-none bg-[#0000000d] dark:bg-[#2b2d31] dark:text-[#ececec]"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex mt-[24px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[260px] text-[#21259]",
                        children: "한 줄 소개"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTextarea, {
                        value: bio,
                        onChange: (e)=>setBio(e.target.value),
                        placeholder: "한 줄 소개를 작성 해보세요",
                        className: "border border-[#f1f3f5] dark:border-none bg-[#0000000d] dark:bg-[#2b2d31] dark:text-[#ececec] w-[50%]"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[calc(50%+260px)] flex justify-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>handleSubmit(bio, name, readyForFile ? readyForFile : url),
                    className: "text-sm text-[#181A20] font-semibold cursor-pointer hover:text-[#495057]  bg-[#fcd535] px-[20px]  py-[12px] rounded-3xl",
                    children: "저장"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingCard);
const StyledTextarea = styled_components__WEBPACK_IMPORTED_MODULE_5___default()((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default()))`
  resize: none;
  padding: 1rem;
  padding-bottom: 1.5rem;
  outline: none;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  line-height: 1.75;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useGetUser)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_graphql_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7568);



function useGetUser() {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    const { data: getUser , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(_lib_graphql_users__WEBPACK_IMPORTED_MODULE_2__/* .whoAmIQuery */ .id, {});
    return {
        getUser,
        loading
    };
}


/***/ }),

/***/ 3060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useProfile)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _lib_graphql_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9815);
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function useProfile() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const [profile] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_lib_graphql_profile__WEBPACK_IMPORTED_MODULE_4__/* .createProfileMutation */ .J, {
        onCompleted (profile) {
            dispatch((0,_store_auth__WEBPACK_IMPORTED_MODULE_5__/* .getAuthImgSuccess */ .Jo)(profile?.createProfile?.thumbnail));
            dispatch((0,_store_auth__WEBPACK_IMPORTED_MODULE_5__/* .getAuthNameSuccess */ .X7)(profile?.createProfile?.profile_name));
            dispatch((0,_store_auth__WEBPACK_IMPORTED_MODULE_5__/* .getAuthBioSuccess */ .WZ)(profile?.createProfile?.bio ? profile?.createProfile?.bio : ""));
        }
    });
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useApolloClient)();
    const handleSubmit = async (bio, profile_name, thumbnail)=>{
        try {
            await profile({
                variables: {
                    bio,
                    profile_name,
                    thumbnail
                }
            });
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("저장 성공!", {
                position: "bottom-right"
            });
            await client.resetStore();
        } catch (e) {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("저장 실패", {
                position: "bottom-right"
            });
        }
    };
    return {
        handleSubmit
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ createProfileMutation)
/* harmony export */ });
/* unused harmony export getProfileQuery */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(825);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const createProfileMutation = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  mutation CreateProfile($bio: String, $profile_name: String, $thumbnail: String) {
    createProfile(bio: $bio, profile_name: $profile_name, thumbnail: $thumbnail) {
      id
      bio
      profile_name
      thumbnail
      created_at
      updated_at
    }
  }
`;
const getProfileQuery = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query GetProfile($user_id: String) {
    getProfile(user_id: $user_id) {
      id
      bio
      profile_name
      thumbnail
      created_at
      updated_at
    }
  }
`;


/***/ })

};
;