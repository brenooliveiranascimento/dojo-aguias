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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scroll = ref[0], setScroll = ref[1];\n    var verifyScroll = function() {\n        return setInterval(function() {\n            setScroll(window.scrollY);\n            console.log(window.scrollY);\n        }, 100);\n    };\n    var updateScroll = function() {\n        verifyScroll();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        updateScroll();\n        return function() {\n            return clearInterval(verifyScroll());\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            backgroundColor: scroll > 150 ? \"rgba(0,0,0,0.9)\" : \"rgba(0,0,0,0.0)\",\n            padding: scrollY > 150 ? \"10px\" : \"20px\"\n        },\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Links \\xfateis\"\n            }, void 0, false, {\n                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                style: {\n                    margin: scroll > 183 ? \"0rem\" : \"3ren\",\n                    marginTop: scroll > 183 ? \"0rem\" : \"3ren\"\n                },\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header_container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Sobre\"\n                            }, void 0, false, {\n                                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"contato\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Contato\"\n                            }, void 0, false, {\n                                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Locais\"\n                            }, void 0, false, {\n                                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"about\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"Fotos\"\n                            }, void 0, false, {\n                                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                style: {\n                    margin: scroll > 183 ? \"0rem\" : \"3ren\",\n                    marginTop: scroll > 183 ? \"0rem\" : \"3ren\"\n                },\n                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header_footer_bar)\n            }, void 0, false, {\n                fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/breno/MVPS/TypeScript/aguias-project/src/components/Header/Header.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDdEI7QUFDWTtBQUV6QyxTQUFTSyxNQUFNLEdBQUc7O0lBRWhCLElBQTRCSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQWhDSSxNQUFNLEdBQWVKLEdBQVcsR0FBMUIsRUFBRUssU0FBUyxHQUFJTCxHQUFXLEdBQWY7SUFFeEIsSUFBTU0sWUFBWSxHQUFHO2VBQU1DLFdBQVcsQ0FBQyxXQUFNO1lBQzNDRixTQUFTLENBQUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1lBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDQyxPQUFPLENBQUM7UUFDN0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQztLQUFBO0lBRVAsSUFBTUcsWUFBWSxHQUFHLFdBQU07UUFDekJOLFlBQVksRUFBRTtJQUNoQixDQUFDO0lBRURQLGdEQUFTLENBQUMsV0FBTTtRQUNkYSxZQUFZLEVBQUU7UUFFZCxPQUFPO21CQUFNQyxhQUFhLENBQUNQLFlBQVksRUFBRSxDQUFDO1NBQUE7SUFDNUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNFLDhEQUFDUSxRQUFNO1FBQUNDLEtBQUssRUFBRTtZQUNiQyxlQUFlLEVBQUVaLE1BQU0sR0FBRyxHQUFHLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCO1lBQ3JFYSxPQUFPLEVBQUVSLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU07U0FDekM7UUFBRVMsU0FBUyxFQUFFaEIsbUVBQWE7OzBCQUN6Qiw4REFBQ2lCLElBQUU7MEJBQUMsZ0JBQVc7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ0MsU0FBTztnQkFDUkwsS0FBSyxFQUFFO29CQUNMTSxNQUFNLEVBQUVqQixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxNQUFNO29CQUN0Q2tCLFNBQVMsRUFBRWxCLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU07aUJBQzFDO2dCQUNEYyxTQUFTLEVBQUVoQiw2RUFBdUI7MEJBQ2hDLDRFQUFDc0IsS0FBRzs7c0NBQ0YsOERBQUN2QixrREFBSTs0QkFBQ3dCLElBQUksRUFBQyxPQUFPO3NDQUNoQiw0RUFBQ0MsR0FBQzswQ0FBQyxPQUFLOzs7OztvQ0FBSTs7Ozs7Z0NBQ1A7c0NBQ1AsOERBQUN6QixrREFBSTs0QkFBQ3dCLElBQUksRUFBQyxTQUFTO3NDQUNsQiw0RUFBQ0MsR0FBQzswQ0FBQyxTQUFPOzs7OztvQ0FBSTs7Ozs7Z0NBQ1Q7c0NBQ1AsOERBQUN6QixrREFBSTs0QkFBQ3dCLElBQUksRUFBQyxPQUFPO3NDQUNoQiw0RUFBQ0MsR0FBQzswQ0FBQyxRQUFNOzs7OztvQ0FBSTs7Ozs7Z0NBQ1I7c0NBQ1AsOERBQUN6QixrREFBSTs0QkFBQ3dCLElBQUksRUFBQyxPQUFPO3NDQUNoQiw0RUFBQ0MsR0FBQzswQ0FBQyxPQUFLOzs7OztvQ0FBSTs7Ozs7Z0NBQ1A7Ozs7Ozt3QkFDSDs7Ozs7b0JBQ0U7MEJBQ1YsOERBQUNDLElBQUU7Z0JBQ0RaLEtBQUssRUFBRTtvQkFDTE0sTUFBTSxFQUFFakIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsTUFBTTtvQkFDdENrQixTQUFTLEVBQUVsQixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxNQUFNO2lCQUMxQztnQkFDRGMsU0FBUyxFQUFFaEIsOEVBQXdCOzs7OztvQkFDbkM7Ozs7OztZQUNLLENBQ1Y7QUFDSCxDQUFDO0dBdkRRQyxNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUF5RGYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeD84ZDI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcblxuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCB2ZXJpZnlTY3JvbGwgPSAoKSA9PiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKVxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKVxuICB9LCAxMDApO1xuXG4gIGNvbnN0IHVwZGF0ZVNjcm9sbCA9ICgpID0+IHtcbiAgICB2ZXJpZnlTY3JvbGwoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVTY3JvbGwoKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodmVyaWZ5U2Nyb2xsKCkpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBzY3JvbGwgPiAxNTAgPyAncmdiYSgwLDAsMCwwLjkpJyA6ICdyZ2JhKDAsMCwwLDAuMCknLFxuICAgICAgcGFkZGluZzogc2Nyb2xsWSA+IDE1MCA/ICcxMHB4JyA6ICcyMHB4JyAsXG4gICAgfX0gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxoMT5MaW5rcyDDunRlaXM8L2gxPlxuICAgICAgPHNlY3Rpb24gXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXJnaW46IHNjcm9sbCA+IDE4MyA/ICcwcmVtJyA6ICczcmVuJyxcbiAgICAgICAgbWFyZ2luVG9wOiBzY3JvbGwgPiAxODMgPyAnMHJlbScgOiAnM3JlbicsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2NvbnRhaW5lcn0+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImFib3V0XCI+XG4gICAgICAgICAgICA8YT5Tb2JyZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImNvbnRhdG9cIj5cbiAgICAgICAgICAgIDxhPkNvbnRhdG88L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJhYm91dFwiPlxuICAgICAgICAgICAgPGE+TG9jYWlzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiYWJvdXRcIj5cbiAgICAgICAgICAgIDxhPkZvdG9zPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8aHJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW46IHNjcm9sbCA+IDE4MyA/ICcwcmVtJyA6ICczcmVuJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6IHNjcm9sbCA+IDE4MyA/ICcwcmVtJyA6ICczcmVuJyxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2Zvb3Rlcl9iYXJ9XG4gICAgICAvPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInN0eWxlcyIsIkhlYWRlciIsInNjcm9sbCIsInNldFNjcm9sbCIsInZlcmlmeVNjcm9sbCIsInNldEludGVydmFsIiwid2luZG93Iiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVTY3JvbGwiLCJjbGVhckludGVydmFsIiwiaGVhZGVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiY2xhc3NOYW1lIiwiaDEiLCJzZWN0aW9uIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaGVhZGVyX2NvbnRhaW5lciIsIm5hdiIsImhyZWYiLCJhIiwiaHIiLCJoZWFkZXJfZm9vdGVyX2JhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Header.tsx\n"));

/***/ })

});