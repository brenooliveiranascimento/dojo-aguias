"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scroll = ref[0], setScroll = ref[1];\n    var verifyScroll = function() {\n        return setInterval(function() {\n            setScroll(window.scrollY);\n            console.log(window.scrollY);\n        }, 100);\n    };\n    var updateScroll = function() {\n        verifyScroll();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        updateScroll();\n        return function() {\n            return clearInterval(verifyScroll());\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: scroll > 150 ? \"rgba(0,0,0,0.7)\" : \"rgba(0,0,0,0.0)\",\n            padding: scroll > 150 ? \"1rem\" : \"2rem\"\n        },\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Links \\xfateis\"\n            }, void 0, false, {\n                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                style: {\n                    marginTop: scroll > 150 ? \"0rem\" : \"2rem\"\n                },\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header_container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Sobre\"\n                            }, void 0, false, {\n                                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"contato\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Contato\"\n                            }, void 0, false, {\n                                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Locais\"\n                            }, void 0, false, {\n                                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                style: {\n                    marginTop: scroll > 150 ? \"0.6rem\" : \"2rem\",\n                    width: scroll > 150 ? \"30%\" : \"40%\"\n                },\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header_footer_bar)\n            }, void 0, false, {\n                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDdEI7QUFDWTtBQUV6QyxTQUFTSyxNQUFNLEdBQUc7O0lBRWhCLElBQTRCSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQWhDSSxNQUFNLEdBQWVKLEdBQVcsR0FBMUIsRUFBRUssU0FBUyxHQUFJTCxHQUFXLEdBQWY7SUFFeEIsSUFBTU0sWUFBWSxHQUFHO2VBQU1DLFdBQVcsQ0FBQyxXQUFNO1lBQzNDRixTQUFTLENBQUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1lBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDQyxPQUFPLENBQUM7UUFDN0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQztLQUFBO0lBRVAsSUFBTUcsWUFBWSxHQUFHLFdBQU07UUFDekJOLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBRURQLGdEQUFTLENBQUMsV0FBTTtRQUNkYSxZQUFZLEVBQUU7UUFFZCxPQUFPO21CQUFNQyxhQUFhLENBQUNQLFlBQVksRUFBRSxDQUFDO1NBQUE7SUFDNUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNFLDhEQUFDUSxRQUFNO1FBQUNDLEtBQUssRUFBRTtZQUNiQyxlQUFlLEVBQUVaLE1BQU0sR0FBRyxHQUFHLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCO1lBQ3JFYSxPQUFPLEVBQUViLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU07U0FDdEM7UUFDRGMsU0FBUyxFQUFFaEIsbUVBQWE7OzBCQUN0Qiw4REFBQ2lCLElBQUU7MEJBQUMsZ0JBQVc7Ozs7O29CQUFLOzBCQUN0Qiw4REFBQ0MsU0FBTztnQkFDUkwsS0FBSyxFQUFFO29CQUFFTSxTQUFTLEVBQUVqQixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxNQUFNO2lCQUFFO2dCQUNwRGMsU0FBUyxFQUFFaEIsNkVBQXVCOzBCQUNoQyw0RUFBQ3FCLEtBQUc7O3NDQUNGLDhEQUFDdEIsa0RBQUk7NEJBQUN1QixJQUFJLEVBQUMsT0FBTztzQ0FDaEIsNEVBQUNDLEdBQUM7MENBQUMsT0FBSzs7Ozs7b0NBQUk7Ozs7O2dDQUNQO3NDQUNQLDhEQUFDeEIsa0RBQUk7NEJBQUN1QixJQUFJLEVBQUMsU0FBUztzQ0FDbEIsNEVBQUNDLEdBQUM7MENBQUMsU0FBTzs7Ozs7b0NBQUk7Ozs7O2dDQUNUO3NDQUNQLDhEQUFDeEIsa0RBQUk7NEJBQUN1QixJQUFJLEVBQUMsT0FBTztzQ0FDaEIsNEVBQUNDLEdBQUM7MENBQUMsUUFBTTs7Ozs7b0NBQUk7Ozs7O2dDQUNSOzs7Ozs7d0JBQ0g7Ozs7O29CQUNFOzBCQUNWLDhEQUFDQyxJQUFFO2dCQUNEWCxLQUFLLEVBQUU7b0JBQ0xNLFNBQVMsRUFBRWpCLE1BQU0sR0FBRyxHQUFHLEdBQUcsUUFBUSxHQUFHLE1BQU07b0JBQzNDdUIsS0FBSyxFQUFFdkIsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsS0FBSztpQkFDcEM7Z0JBQ0RjLFNBQVMsRUFBRWhCLDhFQUF3Qjs7Ozs7b0JBQ25DOzs7Ozs7WUFDSyxDQUNWO0FBQ0gsQ0FBQztHQWxEUUMsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBb0RmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3g/OGQyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJ1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG5cbiAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgdmVyaWZ5U2Nyb2xsID0gKCkgPT4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSlcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSlcbiAgfSwgMTAwKTtcblxuICBjb25zdCB1cGRhdGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgdmVyaWZ5U2Nyb2xsKClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlU2Nyb2xsKClcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHZlcmlmeVNjcm9sbCgpKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc2Nyb2xsID4gMTUwID8gJ3JnYmEoMCwwLDAsMC43KScgOiAncmdiYSgwLDAsMCwwLjApJyxcbiAgICAgIHBhZGRpbmc6IHNjcm9sbCA+IDE1MCA/ICcxcmVtJyA6ICcycmVtJyAsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgxPkxpbmtzIMO6dGVpczwvaDE+XG4gICAgICA8c2VjdGlvbiBcbiAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogc2Nyb2xsID4gMTUwID8gJzByZW0nIDogJzJyZW0nIH19XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfY29udGFpbmVyfT5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxhPlNvYnJlPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiY29udGF0b1wiPlxuICAgICAgICAgICAgPGE+Q29udGF0bzwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICA8YT5Mb2NhaXM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxoclxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpblRvcDogc2Nyb2xsID4gMTUwID8gJzAuNnJlbScgOiAnMnJlbScsXG4gICAgICAgICAgd2lkdGg6IHNjcm9sbCA+IDE1MCA/ICczMCUnIDogJzQwJScsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9mb290ZXJfYmFyfVxuICAgICAgLz5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJzdHlsZXMiLCJIZWFkZXIiLCJzY3JvbGwiLCJzZXRTY3JvbGwiLCJ2ZXJpZnlTY3JvbGwiLCJzZXRJbnRlcnZhbCIsIndpbmRvdyIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlU2Nyb2xsIiwiY2xlYXJJbnRlcnZhbCIsImhlYWRlciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImNsYXNzTmFtZSIsImgxIiwic2VjdGlvbiIsIm1hcmdpblRvcCIsImhlYWRlcl9jb250YWluZXIiLCJuYXYiLCJocmVmIiwiYSIsImhyIiwid2lkdGgiLCJoZWFkZXJfZm9vdGVyX2JhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Header.tsx\n"));

/***/ })

});