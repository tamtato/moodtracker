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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserMoods: function() { return /* binding */ getUserMoods; },\n/* harmony export */   selectedDayVar: function() { return /* binding */ selectedDayVar; },\n/* harmony export */   updateUserMoods: function() { return /* binding */ updateUserMoods; },\n/* harmony export */   userMoodsVar: function() { return /* binding */ userMoodsVar; }\n/* harmony export */ });\n/* harmony import */ var _helpers_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/dates */ \"(app-pages-browser)/./helpers/dates.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/cache/inmemory/reactiveVars.js\");\n/* harmony import */ var _barrel_optimize_names_formatDate_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=formatDate!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n\n\n\nconst userMoodsVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)([]);\nconst selectedDayVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)(null);\n//Typically, on app load we would look for some auth token in cookies\n//If the token is not present, we would redirect the user to the login page\n//If the token is present, we would fetch the user data and pass the token to the endpoint\nconst getUserMoods = async ()=>{\n    // const res = await fetch(`https://api.example.com/user-data`);\n    // return res.json();\n    if (true) {\n        let moodData = [];\n        const storedMoodData = localStorage.getItem(\"userMoods\");\n        if (storedMoodData) {\n            moodData = JSON.parse(storedMoodData);\n        } else {\n            const adjustedWeekDates = (0,_helpers_dates__WEBPACK_IMPORTED_MODULE_0__.getWeekNumberDates)().map((date)=>{\n                //LOCAL STORAGE USES LOCAL TIMEZONE - SUN TO MON\n                //SO WE NEED TO ADJUST THE DATES\n                const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;\n                return new Date(date.getTime() - timezoneOffset);\n            });\n            const initialMoodData = adjustedWeekDates.map((date)=>({\n                    mood: null,\n                    date,\n                    comment: null,\n                    weather: null\n                }));\n            localStorage.setItem(\"userMoods\", JSON.stringify(initialMoodData));\n            moodData = initialMoodData;\n        }\n        userMoodsVar(moodData);\n        const today = (0,_barrel_optimize_names_formatDate_date_fns__WEBPACK_IMPORTED_MODULE_2__.formatDate)(new Date(), \"yyyy-MM-dd\");\n        const todaysMood = moodData.find((mood)=>(0,_barrel_optimize_names_formatDate_date_fns__WEBPACK_IMPORTED_MODULE_2__.formatDate)(mood.date, \"yyyy-MM-dd\") === today);\n        console.log(today, moodData);\n        selectedDayVar(todaysMood || undefined);\n    }\n};\nconst updateUserMoods = (mood)=>{\n// const res = await fetch(`https://api.example.com/user-data`);\n// return res.json();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL3VzZXIvbW9vZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFFWjtBQUNIO0FBRS9CLE1BQU1HLGVBQWVGLHVEQUFPQSxDQUFTLEVBQUUsRUFBRTtBQUN6QyxNQUFNRyxpQkFBaUJILHVEQUFPQSxDQUFjLE1BQU07QUFDekQscUVBQXFFO0FBQ3JFLDJFQUEyRTtBQUMzRSwwRkFBMEY7QUFFbkYsTUFBTUksZUFBZTtJQUMxQixnRUFBZ0U7SUFDaEUscUJBQXFCO0lBQ3JCLElBQUksSUFBNkIsRUFBRTtRQUNqQyxJQUFJQyxXQUFtQixFQUFFO1FBQ3pCLE1BQU1DLGlCQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzVDLElBQUlGLGdCQUFnQjtZQUNsQkQsV0FBV0ksS0FBS0MsS0FBSyxDQUFDSjtRQUN4QixPQUFPO1lBQ0wsTUFBTUssb0JBQW9CWixrRUFBa0JBLEdBQUdhLEdBQUcsQ0FBQyxDQUFDQztnQkFDbEQsZ0RBQWdEO2dCQUNoRCxnQ0FBZ0M7Z0JBQ2hDLE1BQU1DLGlCQUFpQkQsS0FBS0UsaUJBQWlCLEtBQUssS0FBSztnQkFDdkQsT0FBTyxJQUFJQyxLQUFLSCxLQUFLSSxPQUFPLEtBQUtIO1lBQ25DO1lBQ0EsTUFBTUksa0JBQTBCUCxrQkFBa0JDLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO29CQUMvRE0sTUFBTTtvQkFDTk47b0JBQ0FPLFNBQVM7b0JBQ1RDLFNBQVM7Z0JBQ1g7WUFDQWQsYUFBYWUsT0FBTyxDQUFDLGFBQWFiLEtBQUtjLFNBQVMsQ0FBQ0w7WUFDakRiLFdBQVdhO1FBQ2I7UUFFQWhCLGFBQWFHO1FBQ2IsTUFBTW1CLFFBQVF2QixzRkFBVUEsQ0FBQyxJQUFJZSxRQUFRO1FBQ3JDLE1BQU1TLGFBQWFwQixTQUFTcUIsSUFBSSxDQUM5QixDQUFDUCxPQUFTbEIsc0ZBQVVBLENBQUNrQixLQUFLTixJQUFJLEVBQUUsa0JBQWtCVztRQUVwREcsUUFBUUMsR0FBRyxDQUFDSixPQUFPbkI7UUFDbkJGLGVBQWVzQixjQUFjSTtJQUMvQjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxrQkFBa0IsQ0FBQ1g7QUFDOUIsZ0VBQWdFO0FBQ2hFLHFCQUFxQjtBQUN2QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3VzZXIvbW9vZHMudHN4PzBiMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0V2Vla051bWJlckRhdGVzIH0gZnJvbSBcIkAvaGVscGVycy9kYXRlc1wiO1xuaW1wb3J0IHsgTW9vZCB9IGZyb20gXCJAL3R5cGVzL3VzZXItdHlwZXNcIjtcbmltcG9ydCB7IG1ha2VWYXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJNb29kc1ZhciA9IG1ha2VWYXI8TW9vZFtdPihbXSk7XG5leHBvcnQgY29uc3Qgc2VsZWN0ZWREYXlWYXIgPSBtYWtlVmFyPE1vb2QgfCBudWxsPihudWxsKTtcbi8vVHlwaWNhbGx5LCBvbiBhcHAgbG9hZCB3ZSB3b3VsZCBsb29rIGZvciBzb21lIGF1dGggdG9rZW4gaW4gY29va2llc1xuLy9JZiB0aGUgdG9rZW4gaXMgbm90IHByZXNlbnQsIHdlIHdvdWxkIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBsb2dpbiBwYWdlXG4vL0lmIHRoZSB0b2tlbiBpcyBwcmVzZW50LCB3ZSB3b3VsZCBmZXRjaCB0aGUgdXNlciBkYXRhIGFuZCBwYXNzIHRoZSB0b2tlbiB0byB0aGUgZW5kcG9pbnRcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJNb29kcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3VzZXItZGF0YWApO1xuICAvLyByZXR1cm4gcmVzLmpzb24oKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBsZXQgbW9vZERhdGE6IE1vb2RbXSA9IFtdO1xuICAgIGNvbnN0IHN0b3JlZE1vb2REYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTW9vZHNcIik7XG4gICAgaWYgKHN0b3JlZE1vb2REYXRhKSB7XG4gICAgICBtb29kRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmVkTW9vZERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhZGp1c3RlZFdlZWtEYXRlcyA9IGdldFdlZWtOdW1iZXJEYXRlcygpLm1hcCgoZGF0ZSkgPT4ge1xuICAgICAgICAvL0xPQ0FMIFNUT1JBR0UgVVNFUyBMT0NBTCBUSU1FWk9ORSAtIFNVTiBUTyBNT05cbiAgICAgICAgLy9TTyBXRSBORUVEIFRPIEFESlVTVCBUSEUgREFURVNcbiAgICAgICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaW5pdGlhbE1vb2REYXRhOiBNb29kW10gPSBhZGp1c3RlZFdlZWtEYXRlcy5tYXAoKGRhdGUpID0+ICh7XG4gICAgICAgIG1vb2Q6IG51bGwsXG4gICAgICAgIGRhdGUsXG4gICAgICAgIGNvbW1lbnQ6IG51bGwsXG4gICAgICAgIHdlYXRoZXI6IG51bGwsXG4gICAgICB9KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJNb29kc1wiLCBKU09OLnN0cmluZ2lmeShpbml0aWFsTW9vZERhdGEpKTtcbiAgICAgIG1vb2REYXRhID0gaW5pdGlhbE1vb2REYXRhO1xuICAgIH1cblxuICAgIHVzZXJNb29kc1Zhcihtb29kRGF0YSk7XG4gICAgY29uc3QgdG9kYXkgPSBmb3JtYXREYXRlKG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKTtcbiAgICBjb25zdCB0b2RheXNNb29kID0gbW9vZERhdGEuZmluZChcbiAgICAgIChtb29kKSA9PiBmb3JtYXREYXRlKG1vb2QuZGF0ZSwgXCJ5eXl5LU1NLWRkXCIpID09PSB0b2RheVxuICAgICk7XG4gICAgY29uc29sZS5sb2codG9kYXksIG1vb2REYXRhKTtcbiAgICBzZWxlY3RlZERheVZhcih0b2RheXNNb29kIHx8IHVuZGVmaW5lZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyTW9vZHMgPSAobW9vZDogTW9vZCkgPT4ge1xuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vdXNlci1kYXRhYCk7XG4gIC8vIHJldHVybiByZXMuanNvbigpO1xufTtcbiJdLCJuYW1lcyI6WyJnZXRXZWVrTnVtYmVyRGF0ZXMiLCJtYWtlVmFyIiwiZm9ybWF0RGF0ZSIsInVzZXJNb29kc1ZhciIsInNlbGVjdGVkRGF5VmFyIiwiZ2V0VXNlck1vb2RzIiwibW9vZERhdGEiLCJzdG9yZWRNb29kRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJhZGp1c3RlZFdlZWtEYXRlcyIsIm1hcCIsImRhdGUiLCJ0aW1lem9uZU9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwiRGF0ZSIsImdldFRpbWUiLCJpbml0aWFsTW9vZERhdGEiLCJtb29kIiwiY29tbWVudCIsIndlYXRoZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidG9kYXkiLCJ0b2RheXNNb29kIiwiZmluZCIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJ1cGRhdGVVc2VyTW9vZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/user/moods.tsx\n"));

/***/ })

});