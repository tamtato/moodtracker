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

/***/ "(app-pages-browser)/./store/weekDates/index.tsx":
/*!***********************************!*\
  !*** ./store/weekDates/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weekDatesVar: function() { return /* binding */ weekDatesVar; },\n/* harmony export */   weekNumberVar: function() { return /* binding */ weekNumberVar; }\n/* harmony export */ });\n/* harmony import */ var _helpers_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/dates */ \"(app-pages-browser)/./helpers/dates.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/cache/inmemory/reactiveVars.js\");\n/* harmony import */ var _barrel_optimize_names_getWeek_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=getWeek!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/getWeek.mjs\");\n\n\n\nconst now = new Date();\n// Get the current week number\nconst currentWeekNumber = (0,_barrel_optimize_names_getWeek_date_fns__WEBPACK_IMPORTED_MODULE_1__.getWeek)(now);\nconst weekNumberVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.makeVar)(currentWeekNumber);\nconst weekDatesVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.makeVar)((0,_helpers_dates__WEBPACK_IMPORTED_MODULE_0__.getWeekNumberDates)());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL3dlZWtEYXRlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDWjtBQUNOO0FBQ25DLE1BQU1HLE1BQVksSUFBSUM7QUFFdEIsOEJBQThCO0FBQzlCLE1BQU1DLG9CQUE0QkgsZ0ZBQU9BLENBQUNDO0FBRW5DLE1BQU1HLGdCQUFnQkwsdURBQU9BLENBQVNJLG1CQUFtQjtBQUN6RCxNQUFNRSxlQUFlTix1REFBT0EsQ0FBU0Qsa0VBQWtCQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3dlZWtEYXRlcy9pbmRleC50c3g/NDI2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXZWVrTnVtYmVyRGF0ZXMgfSBmcm9tIFwiQC9oZWxwZXJzL2RhdGVzXCI7XG5pbXBvcnQgeyBtYWtlVmFyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5jb25zdCBub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4vLyBHZXQgdGhlIGN1cnJlbnQgd2VlayBudW1iZXJcbmNvbnN0IGN1cnJlbnRXZWVrTnVtYmVyOiBudW1iZXIgPSBnZXRXZWVrKG5vdyk7XG5cbmV4cG9ydCBjb25zdCB3ZWVrTnVtYmVyVmFyID0gbWFrZVZhcjxudW1iZXI+KGN1cnJlbnRXZWVrTnVtYmVyKTtcbmV4cG9ydCBjb25zdCB3ZWVrRGF0ZXNWYXIgPSBtYWtlVmFyPERhdGVbXT4oZ2V0V2Vla051bWJlckRhdGVzKCkpO1xuIl0sIm5hbWVzIjpbImdldFdlZWtOdW1iZXJEYXRlcyIsIm1ha2VWYXIiLCJnZXRXZWVrIiwibm93IiwiRGF0ZSIsImN1cnJlbnRXZWVrTnVtYmVyIiwid2Vla051bWJlclZhciIsIndlZWtEYXRlc1ZhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/weekDates/index.tsx\n"));

/***/ })

});