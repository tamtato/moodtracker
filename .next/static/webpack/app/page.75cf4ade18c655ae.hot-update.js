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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst WeekSelectionBar = ()=>{\n    const now = new Date();\n    // Get the start of the week (Monday)\n    const start = startOfWeek(now, {\n        weekStartsOn: 1\n    });\n    // Get the end of the week (Sunday)\n    const end = endOfWeek(now, {\n        weekStartsOn: 1\n    });\n    console.log(format(start, \"yyyy-MM-dd\")); // Outputs the start of the week in 'yyyy-MM-dd' format\n    console.log(format(end, \"yyyy-MM-dd\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lorna/Documents/techinterview/moodtracker/components/WeekSelectionBar/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WeekSelectionBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeekSelectionBar);\nvar _c;\n$RefreshReg$(_c, \"WeekSelectionBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2Vla1NlbGVjdGlvbkJhci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTUEsbUJBQW1CO0lBQ3ZCLE1BQU1DLE1BQU0sSUFBSUM7SUFFaEIscUNBQXFDO0lBQ3JDLE1BQU1DLFFBQVFDLFlBQVlILEtBQUs7UUFBRUksY0FBYztJQUFFO0lBRWpELG1DQUFtQztJQUNuQyxNQUFNQyxNQUFNQyxVQUFVTixLQUFLO1FBQUVJLGNBQWM7SUFBRTtJQUU3Q0csUUFBUUMsR0FBRyxDQUFDQyxPQUFPUCxPQUFPLGdCQUFnQix1REFBdUQ7SUFDakdLLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0osS0FBSztJQUN4QixxQkFDRSw4REFBQ0s7a0JBQ0MsNEVBQUNBOzs7Ozs7Ozs7O0FBR1A7S0FoQk1YO0FBaUJOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWVrU2VsZWN0aW9uQmFyL2luZGV4LnRzeD81NjUwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdlZWtTZWxlY3Rpb25CYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgLy8gR2V0IHRoZSBzdGFydCBvZiB0aGUgd2VlayAoTW9uZGF5KVxuICBjb25zdCBzdGFydCA9IHN0YXJ0T2ZXZWVrKG5vdywgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG5cbiAgLy8gR2V0IHRoZSBlbmQgb2YgdGhlIHdlZWsgKFN1bmRheSlcbiAgY29uc3QgZW5kID0gZW5kT2ZXZWVrKG5vdywgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG5cbiAgY29uc29sZS5sb2coZm9ybWF0KHN0YXJ0LCBcInl5eXktTU0tZGRcIikpOyAvLyBPdXRwdXRzIHRoZSBzdGFydCBvZiB0aGUgd2VlayBpbiAneXl5eS1NTS1kZCcgZm9ybWF0XG4gIGNvbnNvbGUubG9nKGZvcm1hdChlbmQsIFwieXl5eS1NTS1kZFwiKSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV2Vla1NlbGVjdGlvbkJhcjtcbiJdLCJuYW1lcyI6WyJXZWVrU2VsZWN0aW9uQmFyIiwibm93IiwiRGF0ZSIsInN0YXJ0Iiwic3RhcnRPZldlZWsiLCJ3ZWVrU3RhcnRzT24iLCJlbmQiLCJlbmRPZldlZWsiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WeekSelectionBar/index.tsx\n"));

/***/ })

});