"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/WeekSelectionBar/index.tsx":
/*!***********************************************!*\
  !*** ./components/WeekSelectionBar/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=endOfWeek,format,startOfWeek!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/startOfWeek.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=endOfWeek,format,startOfWeek!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/endOfWeek.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=endOfWeek,format,startOfWeek!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n\n\nconst WeekSelectionBar = ()=>{\n    const now = new Date();\n    // Get the start of the week (Monday)\n    const start = (0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(now, {\n        weekStartsOn: 1\n    });\n    // Get the end of the week (Sunday)\n    const end = (0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_2__.endOfWeek)(now, {\n        weekStartsOn: 1\n    });\n    console.log((0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(start, \"do MMMM yyyy\")); // Outputs the start of the week in 'yyyy-MM-dd' format\n    console.log((0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(end, \"do MMMM yyyy\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"a\"\n            }, void 0, false, {\n                fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow text-center text-primary-text opacity-60\",\n                children: [\n                    (0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(start, \"do MMMM yyyy\"),\n                    \" - \",\n                    (0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(end, \"do MMMM yyyy\")\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"a\"\n            }, void 0, false, {\n                fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WeekSelectionBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeekSelectionBar);\nvar _c;\n$RefreshReg$(_c, \"WeekSelectionBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2Vla1NlbGVjdGlvbkJhci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBEO0FBRTFELE1BQU1HLG1CQUFtQjtJQUN2QixNQUFNQyxNQUFNLElBQUlDO0lBRWhCLHFDQUFxQztJQUNyQyxNQUFNQyxRQUFRTix5R0FBV0EsQ0FBQ0ksS0FBSztRQUFFRyxjQUFjO0lBQUU7SUFFakQsbUNBQW1DO0lBQ25DLE1BQU1DLE1BQU1QLHVHQUFTQSxDQUFDRyxLQUFLO1FBQUVHLGNBQWM7SUFBRTtJQUU3Q0UsUUFBUUMsR0FBRyxDQUFDUixvR0FBTUEsQ0FBQ0ksT0FBTyxrQkFBa0IsdURBQXVEO0lBQ25HRyxRQUFRQyxHQUFHLENBQUNSLG9HQUFNQSxDQUFDTSxLQUFLO0lBQ3hCLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7MEJBQUk7Ozs7OzswQkFDTCw4REFBQ0E7Z0JBQUlDLFdBQVU7O29CQUNaVixvR0FBTUEsQ0FBQ0ksT0FBTztvQkFBZ0I7b0JBQUlKLG9HQUFNQSxDQUFDTSxLQUFLOzs7Ozs7OzBCQUVqRCw4REFBQ0c7MEJBQUk7Ozs7Ozs7Ozs7OztBQUdYO0tBcEJNUjtBQXFCTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2Vla1NlbGVjdGlvbkJhci9pbmRleC50c3g/NTY1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGFydE9mV2VlaywgZW5kT2ZXZWVrLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgV2Vla1NlbGVjdGlvbkJhciA9ICgpID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAvLyBHZXQgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIChNb25kYXkpXG4gIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZldlZWsobm93LCB7IHdlZWtTdGFydHNPbjogMSB9KTtcblxuICAvLyBHZXQgdGhlIGVuZCBvZiB0aGUgd2VlayAoU3VuZGF5KVxuICBjb25zdCBlbmQgPSBlbmRPZldlZWsobm93LCB7IHdlZWtTdGFydHNPbjogMSB9KTtcblxuICBjb25zb2xlLmxvZyhmb3JtYXQoc3RhcnQsIFwiZG8gTU1NTSB5eXl5XCIpKTsgLy8gT3V0cHV0cyB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgaW4gJ3l5eXktTU0tZGQnIGZvcm1hdFxuICBjb25zb2xlLmxvZyhmb3JtYXQoZW5kLCBcImRvIE1NTU0geXl5eVwiKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBcIj5cbiAgICAgIDxkaXY+YTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IHRleHQtY2VudGVyIHRleHQtcHJpbWFyeS10ZXh0IG9wYWNpdHktNjBcIj5cbiAgICAgICAge2Zvcm1hdChzdGFydCwgXCJkbyBNTU1NIHl5eXlcIil9IC0ge2Zvcm1hdChlbmQsIFwiZG8gTU1NTSB5eXl5XCIpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PmE8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBXZWVrU2VsZWN0aW9uQmFyO1xuIl0sIm5hbWVzIjpbInN0YXJ0T2ZXZWVrIiwiZW5kT2ZXZWVrIiwiZm9ybWF0IiwiV2Vla1NlbGVjdGlvbkJhciIsIm5vdyIsIkRhdGUiLCJzdGFydCIsIndlZWtTdGFydHNPbiIsImVuZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WeekSelectionBar/index.tsx\n"));

/***/ })

});