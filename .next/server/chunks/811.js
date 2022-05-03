exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 8643:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "imageGrid_container__l742Z",
	"container-fluid": "imageGrid_container-fluid__dzcd_",
	"grid-container": "imageGrid_grid-container__NZ__a",
	"grid-item": "imageGrid_grid-item__QjYe5",
	"imgTitle": "imageGrid_imgTitle__v5n9m"
};


/***/ }),

/***/ 5951:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__6rKGf",
	"container-fluid": "layout_container-fluid__18YJd",
	"page": "layout_page__0cQuE",
	"header": "layout_header__IuhhG",
	"header-title": "layout_header-title__P38_7",
	"header-nav": "layout_header-nav__0AG6E",
	"footer": "layout_footer__RIZtx"
};


/***/ }),

/***/ 7947:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "neu_container__VYf4d",
	"container-fluid": "neu_container-fluid__Pc7wJ",
	"neu-btn": "neu_neu-btn__PVbXa",
	"neu-btn-active": "neu_neu-btn-active__euldg",
	"neu-nav": "neu_neu-nav__SL9gN",
	"neu-nav-list": "neu_neu-nav-list__GPGGN",
	"neu-nav-item": "neu_neu-nav-item__sM80x"
};


/***/ }),

/***/ 8779:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Assembly_container__P4Z51",
	"container-fluid": "Assembly_container-fluid__Vjtgw"
};


/***/ }),

/***/ 4950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
/* harmony import */ var _imageGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8643);
/* harmony import */ var _imageGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imageGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ImageGrid({ imageSet  }) {
    const path = __webpack_require__(1017);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_imageGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["grid-container"]),
        children: imageSet.map(function(image) {
            const IMG_NAME = path.parse(image).name.split("__")[0].replaceAll("_", " ");
            const key = new uuid__WEBPACK_IMPORTED_MODULE_1__.v4();
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_imageGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["grid-item"]),
                style: {
                    backgroundImage: "url(" + image + ")"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_imageGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default().imgTitle),
                    children: IMG_NAME
                })
            }, key);
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout.module.scss
var layout_module = __webpack_require__(5951);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./components/neumorphism/neu.module.scss
var neu_module = __webpack_require__(7947);
var neu_module_default = /*#__PURE__*/__webpack_require__.n(neu_module);
;// CONCATENATED MODULE: ./components/neumorphism/NeuNav.js


function NeuNav({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (neu_module_default())["neu-nav"],
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (neu_module_default())["neu-nav-list"],
            children: children
        })
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/neumorphism/NeuButton.js


function NeuButton({ active , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: [
            (neu_module_default())["neu-btn"],
            active ? (neu_module_default())["neu-btn-active"] : ""
        ].join(" "),
        children: children
    });
};

;// CONCATENATED MODULE: ./components/neumorphism/NeuLinkButton.js




function NeuLinkButton({ children , href  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(NeuButton, {
                active: router.asPath === href ? true : false,
                children: children
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/neumorphism/NeuNavItem.js




function NeuNavItem({ children , href  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (neu_module_default())["neu-nav-item"],
        children: /*#__PURE__*/ jsx_runtime_.jsx(NeuLinkButton, {
            href: href,
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./components/layout.js






function Layout({ children  }) {
    const TITLE = "Art by Alexis Gee";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: TITLE
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Alexis Gee's portfolio of NFT art."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (layout_module_default()).page,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (layout_module_default()).container,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (layout_module_default()).header,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: (layout_module_default())["header-title"] + " pt-5 px-5",
                                    children: TITLE
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (layout_module_default())["header-nav"],
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NeuNav, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(NeuNavItem, {
                                                href: "/",
                                                children: "Patterns in Nature"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(NeuNavItem, {
                                                href: "/graphic-patterns",
                                                children: "Graphic Patterns"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(NeuNavItem, {
                                                href: "/ink-drawings",
                                                children: "Ink Drawings"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (layout_module_default()).footer,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (layout_module_default()).container,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "\xa9 ",
                                        new Date().getFullYear(),
                                        " Alexis Gee."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Site designed by ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://johnnymcneil.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "Johnny McNeil."
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ importImages)
/* harmony export */ });
function importImages(r) {
    let images = [];
    r.keys().map((item)=>{
        images.push(r(item));
    });
    return images;
};


/***/ })

};
;