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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserMoods: function() { return /* binding */ getUserMoods; },\n/* harmony export */   selectedDayVar: function() { return /* binding */ selectedDayVar; },\n/* harmony export */   updateUserMoods: function() { return /* binding */ updateUserMoods; },\n/* harmony export */   userMoodsVar: function() { return /* binding */ userMoodsVar; }\n/* harmony export */ });\n/* harmony import */ var _helpers_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/dates */ \"(app-pages-browser)/./helpers/dates.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/cache/inmemory/reactiveVars.js\");\n/* harmony import */ var _barrel_optimize_names_isSameDay_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=isSameDay!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/isSameDay.mjs\");\n\n\n\nconst userMoodsVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)([]);\nconst selectedDayVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)(null);\n//Typically, on app load we would look for some auth token in cookies\n//If the token is not present, we would redirect the user to the login page\n//If the token is present, we would fetch the user data and pass the token to the endpoint\nconst getUserMoods = async ()=>{\n    if (true) {\n        let moodData = [];\n        const storedMoodData = localStorage.getItem(\"userMoods\");\n        if (storedMoodData) {\n            moodData = JSON.parse(storedMoodData);\n        }\n        // Check if the current day is in the local storage\n        const today = new Date();\n        const todaysMood = moodData.find((mood)=>(0,_barrel_optimize_names_isSameDay_date_fns__WEBPACK_IMPORTED_MODULE_2__.isSameDay)(new Date(mood.date), today));\n        // If the current day is not in the local storage, rebuild the local storage\n        if (!todaysMood) {\n            const adjustedWeekDates = (0,_helpers_dates__WEBPACK_IMPORTED_MODULE_0__.getWeekNumberDates)().map((date)=>{\n                const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;\n                return new Date(date.getTime() - timezoneOffset);\n            });\n            const initialMoodData = adjustedWeekDates.map((date)=>({\n                    mood: null,\n                    date,\n                    comment: null,\n                    weather: null\n                }));\n            localStorage.setItem(\"userMoods\", JSON.stringify(initialMoodData));\n            moodData = initialMoodData;\n        }\n        userMoodsVar(moodData);\n        // Set the selected day to today on app load\n        if (!selectedDayVar()) {\n            selectedDayVar(todaysMood || undefined);\n        }\n    }\n};\nconst updateUserMoods = (mood)=>{\n// const res = await fetch(`https://api.example.com/user-data`);\n// return res.json();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL3VzZXIvbW9vZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFFWjtBQUNRO0FBRzFDLE1BQU1HLGVBQWVGLHVEQUFPQSxDQUFTLEVBQUUsRUFBRTtBQUN6QyxNQUFNRyxpQkFBaUJILHVEQUFPQSxDQUFjLE1BQU07QUFDekQscUVBQXFFO0FBQ3JFLDJFQUEyRTtBQUMzRSwwRkFBMEY7QUFFbkYsTUFBTUksZUFBZTtJQUMxQixJQUFJLElBQTZCLEVBQUU7UUFDakMsSUFBSUMsV0FBbUIsRUFBRTtRQUN6QixNQUFNQyxpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJRixnQkFBZ0I7WUFDbEJELFdBQVdJLEtBQUtDLEtBQUssQ0FBQ0o7UUFDeEI7UUFFQSxtREFBbUQ7UUFDbkQsTUFBTUssUUFBUSxJQUFJQztRQUNsQixNQUFNQyxhQUFhUixTQUFTUyxJQUFJLENBQUMsQ0FBQ0MsT0FDaENkLG9GQUFTQSxDQUFDLElBQUlXLEtBQUtHLEtBQUtDLElBQUksR0FBR0w7UUFHakMsNEVBQTRFO1FBQzVFLElBQUksQ0FBQ0UsWUFBWTtZQUNmLE1BQU1JLG9CQUFvQmxCLGtFQUFrQkEsR0FBR21CLEdBQUcsQ0FBQyxDQUFDRjtnQkFDbEQsTUFBTUcsaUJBQWlCSCxLQUFLSSxpQkFBaUIsS0FBSyxLQUFLO2dCQUN2RCxPQUFPLElBQUlSLEtBQUtJLEtBQUtLLE9BQU8sS0FBS0Y7WUFDbkM7WUFDQSxNQUFNRyxrQkFBMEJMLGtCQUFrQkMsR0FBRyxDQUFDLENBQUNGLE9BQVU7b0JBQy9ERCxNQUFNO29CQUNOQztvQkFDQU8sU0FBUztvQkFDVEMsU0FBUztnQkFDWDtZQUNBakIsYUFBYWtCLE9BQU8sQ0FBQyxhQUFhaEIsS0FBS2lCLFNBQVMsQ0FBQ0o7WUFDakRqQixXQUFXaUI7UUFDYjtRQUVBcEIsYUFBYUc7UUFFYiw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDRixrQkFBa0I7WUFDckJBLGVBQWVVLGNBQWNjO1FBQy9CO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTUMsa0JBQWtCLENBQUNiO0FBQzlCLGdFQUFnRTtBQUNoRSxxQkFBcUI7QUFDdkIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS91c2VyL21vb2RzLnRzeD8wYjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFdlZWtOdW1iZXJEYXRlcyB9IGZyb20gXCJAL2hlbHBlcnMvZGF0ZXNcIjtcbmltcG9ydCB7IE1vb2QgfSBmcm9tIFwiQC90eXBlcy91c2VyLXR5cGVzXCI7XG5pbXBvcnQgeyBtYWtlVmFyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlLCBpc1NhbWVEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGlzIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlck1vb2RzVmFyID0gbWFrZVZhcjxNb29kW10+KFtdKTtcbmV4cG9ydCBjb25zdCBzZWxlY3RlZERheVZhciA9IG1ha2VWYXI8TW9vZCB8IG51bGw+KG51bGwpO1xuLy9UeXBpY2FsbHksIG9uIGFwcCBsb2FkIHdlIHdvdWxkIGxvb2sgZm9yIHNvbWUgYXV0aCB0b2tlbiBpbiBjb29raWVzXG4vL0lmIHRoZSB0b2tlbiBpcyBub3QgcHJlc2VudCwgd2Ugd291bGQgcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGxvZ2luIHBhZ2Vcbi8vSWYgdGhlIHRva2VuIGlzIHByZXNlbnQsIHdlIHdvdWxkIGZldGNoIHRoZSB1c2VyIGRhdGEgYW5kIHBhc3MgdGhlIHRva2VuIHRvIHRoZSBlbmRwb2ludFxuXG5leHBvcnQgY29uc3QgZ2V0VXNlck1vb2RzID0gYXN5bmMgKCkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGxldCBtb29kRGF0YTogTW9vZFtdID0gW107XG4gICAgY29uc3Qgc3RvcmVkTW9vZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJNb29kc1wiKTtcbiAgICBpZiAoc3RvcmVkTW9vZERhdGEpIHtcbiAgICAgIG1vb2REYXRhID0gSlNPTi5wYXJzZShzdG9yZWRNb29kRGF0YSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgZGF5IGlzIGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5c01vb2QgPSBtb29kRGF0YS5maW5kKChtb29kOiBNb29kKSA9PlxuICAgICAgaXNTYW1lRGF5KG5ldyBEYXRlKG1vb2QuZGF0ZSksIHRvZGF5KVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGUgY3VycmVudCBkYXkgaXMgbm90IGluIHRoZSBsb2NhbCBzdG9yYWdlLCByZWJ1aWxkIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgaWYgKCF0b2RheXNNb29kKSB7XG4gICAgICBjb25zdCBhZGp1c3RlZFdlZWtEYXRlcyA9IGdldFdlZWtOdW1iZXJEYXRlcygpLm1hcCgoZGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gdGltZXpvbmVPZmZzZXQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbml0aWFsTW9vZERhdGE6IE1vb2RbXSA9IGFkanVzdGVkV2Vla0RhdGVzLm1hcCgoZGF0ZSkgPT4gKHtcbiAgICAgICAgbW9vZDogbnVsbCxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgY29tbWVudDogbnVsbCxcbiAgICAgICAgd2VhdGhlcjogbnVsbCxcbiAgICAgIH0pKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck1vb2RzXCIsIEpTT04uc3RyaW5naWZ5KGluaXRpYWxNb29kRGF0YSkpO1xuICAgICAgbW9vZERhdGEgPSBpbml0aWFsTW9vZERhdGE7XG4gICAgfVxuXG4gICAgdXNlck1vb2RzVmFyKG1vb2REYXRhKTtcblxuICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgZGF5IHRvIHRvZGF5IG9uIGFwcCBsb2FkXG4gICAgaWYgKCFzZWxlY3RlZERheVZhcigpKSB7XG4gICAgICBzZWxlY3RlZERheVZhcih0b2RheXNNb29kIHx8IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlck1vb2RzID0gKG1vb2Q6IE1vb2QpID0+IHtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3VzZXItZGF0YWApO1xuICAvLyByZXR1cm4gcmVzLmpzb24oKTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0V2Vla051bWJlckRhdGVzIiwibWFrZVZhciIsImlzU2FtZURheSIsInVzZXJNb29kc1ZhciIsInNlbGVjdGVkRGF5VmFyIiwiZ2V0VXNlck1vb2RzIiwibW9vZERhdGEiLCJzdG9yZWRNb29kRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ0b2RheSIsIkRhdGUiLCJ0b2RheXNNb29kIiwiZmluZCIsIm1vb2QiLCJkYXRlIiwiYWRqdXN0ZWRXZWVrRGF0ZXMiLCJtYXAiLCJ0aW1lem9uZU9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwiZ2V0VGltZSIsImluaXRpYWxNb29kRGF0YSIsImNvbW1lbnQiLCJ3ZWF0aGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVuZGVmaW5lZCIsInVwZGF0ZVVzZXJNb29kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/user/moods.tsx\n"));

/***/ })

});