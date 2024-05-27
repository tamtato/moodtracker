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

/***/ "(app-pages-browser)/./store/user/moods.tsx":
/*!******************************!*\
  !*** ./store/user/moods.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserMoods: function() { return /* binding */ getUserMoods; },\n/* harmony export */   selectedDayVar: function() { return /* binding */ selectedDayVar; },\n/* harmony export */   updateUserMoods: function() { return /* binding */ updateUserMoods; },\n/* harmony export */   userMoodsVar: function() { return /* binding */ userMoodsVar; }\n/* harmony export */ });\n/* harmony import */ var _helpers_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/dates */ \"(app-pages-browser)/./helpers/dates.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/cache/inmemory/reactiveVars.js\");\n/* harmony import */ var _barrel_optimize_names_formatDate_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=formatDate!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n\n\n\nconst userMoodsVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)([]);\nconst selectedDayVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)(null);\n//Typically, on app load we would look for some auth token in cookies\n//If the token is not present, we would redirect the user to the login page\n//If the token is present, we would fetch the user data and pass the token to the endpoint\nconst getUserMoods = async ()=>{\n    // const res = await fetch(`https://api.example.com/user-data`);\n    // return res.json();\n    if (true) {\n        let moodData = [];\n        //This would typically be our api call to get the user's mood data\n        const storedMoodData = localStorage.getItem(\"userMoods\");\n        if (storedMoodData) {\n            //response.data\n            moodData = JSON.parse(storedMoodData);\n        } else {\n            //Just so we can have some data to work with if there is no local storage\n            const adjustedWeekDates = (0,_helpers_dates__WEBPACK_IMPORTED_MODULE_0__.getWeekNumberDates)().map((date)=>{\n                const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;\n                return new Date(date.getTime() - timezoneOffset);\n            });\n            const initialMoodData = adjustedWeekDates.map((date)=>({\n                    mood: null,\n                    date,\n                    comment: null,\n                    weather: null\n                }));\n            localStorage.setItem(\"userMoods\", JSON.stringify(initialMoodData));\n            moodData = initialMoodData;\n        }\n        userMoodsVar(moodData);\n        //Set the selected day to today on app load\n        if (!selectedDayVar()) {\n            const today = (0,_barrel_optimize_names_formatDate_date_fns__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date(), \"yyyy-MM-dd\");\n            const todaysMood = moodData.find((mood)=>console.log(new Date(mood.date), new Date()));\n            selectedDayVar(todaysMood || undefined);\n        }\n    }\n};\nconst updateUserMoods = (mood)=>{\n// const res = await fetch(`https://api.example.com/user-data`);\n// return res.json();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL3VzZXIvbW9vZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFFWjtBQUNRO0FBRzFDLE1BQU1HLGVBQWVGLHVEQUFPQSxDQUFTLEVBQUUsRUFBRTtBQUN6QyxNQUFNRyxpQkFBaUJILHVEQUFPQSxDQUFjLE1BQU07QUFDekQscUVBQXFFO0FBQ3JFLDJFQUEyRTtBQUMzRSwwRkFBMEY7QUFFbkYsTUFBTUksZUFBZTtJQUMxQixnRUFBZ0U7SUFDaEUscUJBQXFCO0lBQ3JCLElBQUksSUFBNkIsRUFBRTtRQUNqQyxJQUFJQyxXQUFtQixFQUFFO1FBQ3pCLGtFQUFrRTtRQUNsRSxNQUFNQyxpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJRixnQkFBZ0I7WUFDbEIsZUFBZTtZQUNmRCxXQUFXSSxLQUFLQyxLQUFLLENBQUNKO1FBQ3hCLE9BQU87WUFDTCx5RUFBeUU7WUFDekUsTUFBTUssb0JBQW9CWixrRUFBa0JBLEdBQUdhLEdBQUcsQ0FBQyxDQUFDQztnQkFDbEQsTUFBTUMsaUJBQWlCRCxLQUFLRSxpQkFBaUIsS0FBSyxLQUFLO2dCQUN2RCxPQUFPLElBQUlDLEtBQUtILEtBQUtJLE9BQU8sS0FBS0g7WUFDbkM7WUFDQSxNQUFNSSxrQkFBMEJQLGtCQUFrQkMsR0FBRyxDQUFDLENBQUNDLE9BQVU7b0JBQy9ETSxNQUFNO29CQUNOTjtvQkFDQU8sU0FBUztvQkFDVEMsU0FBUztnQkFDWDtZQUNBZCxhQUFhZSxPQUFPLENBQUMsYUFBYWIsS0FBS2MsU0FBUyxDQUFDTDtZQUNqRGIsV0FBV2E7UUFDYjtRQUNBaEIsYUFBYUc7UUFDYiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDRixrQkFBa0I7WUFDckIsTUFBTXFCLFFBQVF2QixzRkFBVUEsQ0FBQyxJQUFJZSxRQUFRO1lBQ3JDLE1BQU1TLGFBQWFwQixTQUFTcUIsSUFBSSxDQUFDLENBQUNQLE9BQ2hDUSxRQUFRQyxHQUFHLENBQUMsSUFBSVosS0FBS0csS0FBS04sSUFBSSxHQUFHLElBQUlHO1lBR3ZDYixlQUFlc0IsY0FBY0k7UUFDL0I7SUFDRjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxrQkFBa0IsQ0FBQ1g7QUFDOUIsZ0VBQWdFO0FBQ2hFLHFCQUFxQjtBQUN2QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3VzZXIvbW9vZHMudHN4PzBiMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2Vla051bWJlckRhdGVzIH0gZnJvbSBcIkAvaGVscGVycy9kYXRlc1wiO1xuaW1wb3J0IHsgTW9vZCB9IGZyb20gXCJAL3R5cGVzL3VzZXItdHlwZXNcIjtcbmltcG9ydCB7IG1ha2VWYXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGZvcm1hdERhdGUsIGlzU2FtZURheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgaXMgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VyTW9vZHNWYXIgPSBtYWtlVmFyPE1vb2RbXT4oW10pO1xuZXhwb3J0IGNvbnN0IHNlbGVjdGVkRGF5VmFyID0gbWFrZVZhcjxNb29kIHwgbnVsbD4obnVsbCk7XG4vL1R5cGljYWxseSwgb24gYXBwIGxvYWQgd2Ugd291bGQgbG9vayBmb3Igc29tZSBhdXRoIHRva2VuIGluIGNvb2tpZXNcbi8vSWYgdGhlIHRva2VuIGlzIG5vdCBwcmVzZW50LCB3ZSB3b3VsZCByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgbG9naW4gcGFnZVxuLy9JZiB0aGUgdG9rZW4gaXMgcHJlc2VudCwgd2Ugd291bGQgZmV0Y2ggdGhlIHVzZXIgZGF0YSBhbmQgcGFzcyB0aGUgdG9rZW4gdG8gdGhlIGVuZHBvaW50XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9vZHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5leGFtcGxlLmNvbS91c2VyLWRhdGFgKTtcbiAgLy8gcmV0dXJuIHJlcy5qc29uKCk7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbGV0IG1vb2REYXRhOiBNb29kW10gPSBbXTtcbiAgICAvL1RoaXMgd291bGQgdHlwaWNhbGx5IGJlIG91ciBhcGkgY2FsbCB0byBnZXQgdGhlIHVzZXIncyBtb29kIGRhdGFcbiAgICBjb25zdCBzdG9yZWRNb29kRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck1vb2RzXCIpO1xuICAgIGlmIChzdG9yZWRNb29kRGF0YSkge1xuICAgICAgLy9yZXNwb25zZS5kYXRhXG4gICAgICBtb29kRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmVkTW9vZERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL0p1c3Qgc28gd2UgY2FuIGhhdmUgc29tZSBkYXRhIHRvIHdvcmsgd2l0aCBpZiB0aGVyZSBpcyBubyBsb2NhbCBzdG9yYWdlXG4gICAgICBjb25zdCBhZGp1c3RlZFdlZWtEYXRlcyA9IGdldFdlZWtOdW1iZXJEYXRlcygpLm1hcCgoZGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gdGltZXpvbmVPZmZzZXQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbml0aWFsTW9vZERhdGE6IE1vb2RbXSA9IGFkanVzdGVkV2Vla0RhdGVzLm1hcCgoZGF0ZSkgPT4gKHtcbiAgICAgICAgbW9vZDogbnVsbCxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgY29tbWVudDogbnVsbCxcbiAgICAgICAgd2VhdGhlcjogbnVsbCxcbiAgICAgIH0pKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck1vb2RzXCIsIEpTT04uc3RyaW5naWZ5KGluaXRpYWxNb29kRGF0YSkpO1xuICAgICAgbW9vZERhdGEgPSBpbml0aWFsTW9vZERhdGE7XG4gICAgfVxuICAgIHVzZXJNb29kc1Zhcihtb29kRGF0YSk7XG4gICAgLy9TZXQgdGhlIHNlbGVjdGVkIGRheSB0byB0b2RheSBvbiBhcHAgbG9hZFxuICAgIGlmICghc2VsZWN0ZWREYXlWYXIoKSkge1xuICAgICAgY29uc3QgdG9kYXkgPSBmb3JtYXREYXRlKG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKTtcbiAgICAgIGNvbnN0IHRvZGF5c01vb2QgPSBtb29kRGF0YS5maW5kKChtb29kOiBNb29kKSA9PlxuICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZShtb29kLmRhdGUpLCBuZXcgRGF0ZSgpKVxuICAgICAgKTtcblxuICAgICAgc2VsZWN0ZWREYXlWYXIodG9kYXlzTW9vZCB8fCB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJNb29kcyA9IChtb29kOiBNb29kKSA9PiB7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5leGFtcGxlLmNvbS91c2VyLWRhdGFgKTtcbiAgLy8gcmV0dXJuIHJlcy5qc29uKCk7XG59O1xuIl0sIm5hbWVzIjpbImdldFdlZWtOdW1iZXJEYXRlcyIsIm1ha2VWYXIiLCJmb3JtYXREYXRlIiwidXNlck1vb2RzVmFyIiwic2VsZWN0ZWREYXlWYXIiLCJnZXRVc2VyTW9vZHMiLCJtb29kRGF0YSIsInN0b3JlZE1vb2REYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImFkanVzdGVkV2Vla0RhdGVzIiwibWFwIiwiZGF0ZSIsInRpbWV6b25lT2Zmc2V0IiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJEYXRlIiwiZ2V0VGltZSIsImluaXRpYWxNb29kRGF0YSIsIm1vb2QiLCJjb21tZW50Iiwid2VhdGhlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0b2RheSIsInRvZGF5c01vb2QiLCJmaW5kIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInVwZGF0ZVVzZXJNb29kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/user/moods.tsx\n"));

/***/ })

});