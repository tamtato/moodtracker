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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=endOfWeek,format,startOfWeek!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/startOfWeek.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=endOfWeek,format,startOfWeek!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/endOfWeek.mjs\");\n/* harmony import */ var _barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=endOfWeek,format,startOfWeek!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n\n\n\n\nconst WeekSelectionBar = ()=>{\n    const now = new Date();\n    // Get the start of the week (Monday)\n    const start = (0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfWeek)(now, {\n        weekStartsOn: 1\n    });\n    // Get the end of the week (Sunday)\n    const end = (0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_3__.endOfWeek)(now, {\n        weekStartsOn: 1\n    });\n    console.log((0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(start, \"do MMMM yyyy\")); // Outputs the start of the week in 'yyyy-MM-dd' format\n    console.log((0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(end, \"do MMMM yyyy\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronLeft,\n                className: \"opacity-20\"\n            }, void 0, false, {\n                fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow text-center text-primary-text opacity-60\",\n                children: [\n                    (0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(start, \"do MMMM yyyy\"),\n                    \" - \",\n                    (0,_barrel_optimize_names_endOfWeek_format_startOfWeek_date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(end, \"do MMMM yyyy\")\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronRight,\n                className: \"opacity-20\"\n            }, void 0, false, {\n                fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WeekSelectionBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeekSelectionBar);\nvar _c;\n$RefreshReg$(_c, \"WeekSelectionBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2Vla1NlbGVjdGlvbkJhci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHMkM7QUFDc0I7QUFDUDtBQUUxRCxNQUFNTSxtQkFBbUI7SUFDdkIsTUFBTUMsTUFBTSxJQUFJQztJQUVoQixxQ0FBcUM7SUFDckMsTUFBTUMsUUFBUU4seUdBQVdBLENBQUNJLEtBQUs7UUFBRUcsY0FBYztJQUFFO0lBRWpELG1DQUFtQztJQUNuQyxNQUFNQyxNQUFNUCx1R0FBU0EsQ0FBQ0csS0FBSztRQUFFRyxjQUFjO0lBQUU7SUFFN0NFLFFBQVFDLEdBQUcsQ0FBQ1Isb0dBQU1BLENBQUNJLE9BQU8sa0JBQWtCLHVEQUF1RDtJQUNuR0csUUFBUUMsR0FBRyxDQUFDUixvR0FBTUEsQ0FBQ00sS0FBSztJQUN4QixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNiLDJFQUFlQTtnQkFBQ2MsTUFBTWhCLDRFQUFhQTtnQkFBRWUsV0FBVTs7Ozs7OzBCQUNoRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaVixvR0FBTUEsQ0FBQ0ksT0FBTztvQkFBZ0I7b0JBQUlKLG9HQUFNQSxDQUFDTSxLQUFLOzs7Ozs7OzBCQUVqRCw4REFBQ1QsMkVBQWVBO2dCQUFDYyxNQUFNZiw2RUFBY0E7Z0JBQUVjLFdBQVU7Ozs7Ozs7Ozs7OztBQUd2RDtLQXBCTVQ7QUFxQk4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dlZWtTZWxlY3Rpb25CYXIvaW5kZXgudHN4PzU2NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZmFDaGV2cm9uTGVmdCxcbiAgZmFDaGV2cm9uUmlnaHQsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrLCBlbmRPZldlZWssIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBXZWVrU2VsZWN0aW9uQmFyID0gKCkgPT4ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIC8vIEdldCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgKE1vbmRheSlcbiAgY29uc3Qgc3RhcnQgPSBzdGFydE9mV2Vlayhub3csIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuXG4gIC8vIEdldCB0aGUgZW5kIG9mIHRoZSB3ZWVrIChTdW5kYXkpXG4gIGNvbnN0IGVuZCA9IGVuZE9mV2Vlayhub3csIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuXG4gIGNvbnNvbGUubG9nKGZvcm1hdChzdGFydCwgXCJkbyBNTU1NIHl5eXlcIikpOyAvLyBPdXRwdXRzIHRoZSBzdGFydCBvZiB0aGUgd2VlayBpbiAneXl5eS1NTS1kZCcgZm9ybWF0XG4gIGNvbnNvbGUubG9nKGZvcm1hdChlbmQsIFwiZG8gTU1NTSB5eXl5XCIpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IFwiPlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25MZWZ0fSBjbGFzc05hbWU9XCJvcGFjaXR5LTIwXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyB0ZXh0LWNlbnRlciB0ZXh0LXByaW1hcnktdGV4dCBvcGFjaXR5LTYwXCI+XG4gICAgICAgIHtmb3JtYXQoc3RhcnQsIFwiZG8gTU1NTSB5eXl5XCIpfSAtIHtmb3JtYXQoZW5kLCBcImRvIE1NTU0geXl5eVwiKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZXZyb25SaWdodH0gY2xhc3NOYW1lPVwib3BhY2l0eS0yMFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV2Vla1NlbGVjdGlvbkJhcjtcbiJdLCJuYW1lcyI6WyJmYUNoZXZyb25MZWZ0IiwiZmFDaGV2cm9uUmlnaHQiLCJGb250QXdlc29tZUljb24iLCJzdGFydE9mV2VlayIsImVuZE9mV2VlayIsImZvcm1hdCIsIldlZWtTZWxlY3Rpb25CYXIiLCJub3ciLCJEYXRlIiwic3RhcnQiLCJ3ZWVrU3RhcnRzT24iLCJlbmQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WeekSelectionBar/index.tsx\n"));

/***/ })

});