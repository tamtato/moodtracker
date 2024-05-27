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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserMoods: function() { return /* binding */ getUserMoods; },\n/* harmony export */   updateUserMoods: function() { return /* binding */ updateUserMoods; },\n/* harmony export */   userMoodsVar: function() { return /* binding */ userMoodsVar; }\n/* harmony export */ });\n/* harmony import */ var _helpers_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/dates */ \"(app-pages-browser)/./helpers/dates.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/cache/inmemory/reactiveVars.js\");\n\n\nconst userMoodsVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)([]);\n//Typically, on app load we would look for some auth token in cookies\n//If the token is not present, we would redirect the user to the login page\n//If the token is present, we would fetch the user data and pass the token to the endpoint\nconst getUserMoods = async ()=>{\n    // const res = await fetch(`https://api.example.com/user-data`);\n    // return res.json();\n    if (true) {\n        let moodData = [];\n        const storedMoodData = localStorage.getItem(\"userMoods\");\n        if (storedMoodData) {\n            moodData = JSON.parse(storedMoodData);\n        } else {\n            const adjustedWeekDates = (0,_helpers_dates__WEBPACK_IMPORTED_MODULE_0__.getWeekNumberDates)().map((date)=>{\n                //LOCAL STORAGE USES LOCAL TIMEZONE - SUN TO MON\n                //SO WE NEED TO ADJUST THE DATES\n                const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;\n                return new Date(date.getTime() - timezoneOffset);\n            });\n            const initialMoodData = adjustedWeekDates.map((date)=>({\n                    mood: null,\n                    date,\n                    comment: null,\n                    weather: null\n                }));\n            localStorage.setItem(\"userMoods\", JSON.stringify(initialMoodData));\n            moodData = initialMoodData;\n        }\n        userMoodsVar(moodData);\n    }\n};\nconst updateUserMoods = (mood)=>{\n// const res = await fetch(`https://api.example.com/user-data`);\n// return res.json();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL3VzZXIvbW9vZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFEO0FBRVo7QUFHbEMsTUFBTUUsZUFBZUQsdURBQU9BLENBQVMsRUFBRSxFQUFFO0FBRWhELHFFQUFxRTtBQUNyRSwyRUFBMkU7QUFDM0UsMEZBQTBGO0FBRW5GLE1BQU1FLGVBQWU7SUFDMUIsZ0VBQWdFO0lBQ2hFLHFCQUFxQjtJQUNyQixJQUFJLElBQTZCLEVBQUU7UUFDakMsSUFBSUMsV0FBbUIsRUFBRTtRQUN6QixNQUFNQyxpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJRixnQkFBZ0I7WUFDbEJELFdBQVdJLEtBQUtDLEtBQUssQ0FBQ0o7UUFDeEIsT0FBTztZQUNMLE1BQU1LLG9CQUFvQlYsa0VBQWtCQSxHQUFHVyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ2xELGdEQUFnRDtnQkFDaEQsZ0NBQWdDO2dCQUNoQyxNQUFNQyxpQkFBaUJELEtBQUtFLGlCQUFpQixLQUFLLEtBQUs7Z0JBQ3ZELE9BQU8sSUFBSUMsS0FBS0gsS0FBS0ksT0FBTyxLQUFLSDtZQUNuQztZQUNBLE1BQU1JLGtCQUEwQlAsa0JBQWtCQyxHQUFHLENBQUMsQ0FBQ0MsT0FBVTtvQkFDL0RNLE1BQU07b0JBQ05OO29CQUNBTyxTQUFTO29CQUNUQyxTQUFTO2dCQUNYO1lBQ0FkLGFBQWFlLE9BQU8sQ0FBQyxhQUFhYixLQUFLYyxTQUFTLENBQUNMO1lBQ2pEYixXQUFXYTtRQUNiO1FBQ0FmLGFBQWFFO0lBQ2Y7QUFDRixFQUFFO0FBRUssTUFBTW1CLGtCQUFrQixDQUFDTDtBQUM5QixnRUFBZ0U7QUFDaEUscUJBQXFCO0FBQ3ZCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdXNlci9tb29kcy50c3g/MGIzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXZWVrTnVtYmVyRGF0ZXMgfSBmcm9tIFwiQC9oZWxwZXJzL2RhdGVzXCI7XG5pbXBvcnQgeyBNb29kIH0gZnJvbSBcIkAvdHlwZXMvdXNlci10eXBlc1wiO1xuaW1wb3J0IHsgbWFrZVZhciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgZWFjaERheU9mSW50ZXJ2YWwsIGVuZE9mV2VlaywgZ2V0V2Vlaywgc3RhcnRPZldlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJNb29kc1ZhciA9IG1ha2VWYXI8TW9vZFtdPihbXSk7XG5cbi8vVHlwaWNhbGx5LCBvbiBhcHAgbG9hZCB3ZSB3b3VsZCBsb29rIGZvciBzb21lIGF1dGggdG9rZW4gaW4gY29va2llc1xuLy9JZiB0aGUgdG9rZW4gaXMgbm90IHByZXNlbnQsIHdlIHdvdWxkIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBsb2dpbiBwYWdlXG4vL0lmIHRoZSB0b2tlbiBpcyBwcmVzZW50LCB3ZSB3b3VsZCBmZXRjaCB0aGUgdXNlciBkYXRhIGFuZCBwYXNzIHRoZSB0b2tlbiB0byB0aGUgZW5kcG9pbnRcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJNb29kcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3VzZXItZGF0YWApO1xuICAvLyByZXR1cm4gcmVzLmpzb24oKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBsZXQgbW9vZERhdGE6IE1vb2RbXSA9IFtdO1xuICAgIGNvbnN0IHN0b3JlZE1vb2REYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTW9vZHNcIik7XG4gICAgaWYgKHN0b3JlZE1vb2REYXRhKSB7XG4gICAgICBtb29kRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmVkTW9vZERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhZGp1c3RlZFdlZWtEYXRlcyA9IGdldFdlZWtOdW1iZXJEYXRlcygpLm1hcCgoZGF0ZSkgPT4ge1xuICAgICAgICAvL0xPQ0FMIFNUT1JBR0UgVVNFUyBMT0NBTCBUSU1FWk9ORSAtIFNVTiBUTyBNT05cbiAgICAgICAgLy9TTyBXRSBORUVEIFRPIEFESlVTVCBUSEUgREFURVNcbiAgICAgICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaW5pdGlhbE1vb2REYXRhOiBNb29kW10gPSBhZGp1c3RlZFdlZWtEYXRlcy5tYXAoKGRhdGUpID0+ICh7XG4gICAgICAgIG1vb2Q6IG51bGwsXG4gICAgICAgIGRhdGUsXG4gICAgICAgIGNvbW1lbnQ6IG51bGwsXG4gICAgICAgIHdlYXRoZXI6IG51bGwsXG4gICAgICB9KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJNb29kc1wiLCBKU09OLnN0cmluZ2lmeShpbml0aWFsTW9vZERhdGEpKTtcbiAgICAgIG1vb2REYXRhID0gaW5pdGlhbE1vb2REYXRhO1xuICAgIH1cbiAgICB1c2VyTW9vZHNWYXIobW9vZERhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlck1vb2RzID0gKG1vb2Q6IE1vb2QpID0+IHtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3VzZXItZGF0YWApO1xuICAvLyByZXR1cm4gcmVzLmpzb24oKTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0V2Vla051bWJlckRhdGVzIiwibWFrZVZhciIsInVzZXJNb29kc1ZhciIsImdldFVzZXJNb29kcyIsIm1vb2REYXRhIiwic3RvcmVkTW9vZERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWRqdXN0ZWRXZWVrRGF0ZXMiLCJtYXAiLCJkYXRlIiwidGltZXpvbmVPZmZzZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsIkRhdGUiLCJnZXRUaW1lIiwiaW5pdGlhbE1vb2REYXRhIiwibW9vZCIsImNvbW1lbnQiLCJ3ZWF0aGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVwZGF0ZVVzZXJNb29kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/user/moods.tsx\n"));

/***/ })

});