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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserMoods: function() { return /* binding */ getUserMoods; },\n/* harmony export */   selectedDayVar: function() { return /* binding */ selectedDayVar; },\n/* harmony export */   updateUserMoods: function() { return /* binding */ updateUserMoods; },\n/* harmony export */   userMoodsVar: function() { return /* binding */ userMoodsVar; }\n/* harmony export */ });\n/* harmony import */ var _helpers_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/dates */ \"(app-pages-browser)/./helpers/dates.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"(app-pages-browser)/./node_modules/@apollo/client/cache/inmemory/reactiveVars.js\");\n/* harmony import */ var _barrel_optimize_names_isSameDay_date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=isSameDay!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/isSameDay.mjs\");\n\n\n\nconst userMoodsVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)([]);\nconst selectedDayVar = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.makeVar)(null);\n//Typically, on app load we would look for some auth token in cookies\n//If the token is not present, we would redirect the user to the login page\n//If the token is present, we would fetch the user data and pass the token to the endpoint\nconst getUserMoods = async ()=>{\n    if (true) {\n        let moodData = [];\n        const storedMoodData = localStorage.getItem(\"userMoods\");\n        if (storedMoodData) {\n            moodData = JSON.parse(storedMoodData);\n        }\n        // Check if the current day is in the local storage\n        const today = new Date();\n        const todaysMood = moodData.find((mood)=>(0,_barrel_optimize_names_isSameDay_date_fns__WEBPACK_IMPORTED_MODULE_2__.isSameDay)(new Date(mood.date), today));\n        // If the current day is not in the local storage, rebuild the local storage\n        if (!todaysMood) {\n            const adjustedWeekDates = (0,_helpers_dates__WEBPACK_IMPORTED_MODULE_0__.getWeekNumberDates)().map((date)=>{\n                const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;\n                return new Date(date.getTime() - timezoneOffset);\n            });\n            const initialMoodData = adjustedWeekDates.map((date)=>({\n                    mood: null,\n                    date,\n                    comment: null,\n                    weather: null\n                }));\n            localStorage.setItem(\"userMoods\", storedMoodData ? [\n                ...moodData,\n                ...initialMoodData\n            ] : JSON.stringify(initialMoodData));\n            moodData = initialMoodData;\n        }\n        userMoodsVar(moodData);\n        // Set the selected day to today on app load\n        if (!selectedDayVar()) {\n            selectedDayVar(todaysMood || undefined);\n        }\n    }\n};\nconst updateUserMoods = (mood)=>{\n    // const res = await fetch(`https://api.example.com/user-data`);\n    // return res.json();\n    if (true) {\n        const storedMoodData = localStorage.getItem(\"userMoods\");\n        if (storedMoodData) {\n            const userMoods = JSON.parse(storedMoodData);\n            const updatedUserMoods = userMoods.map((m)=>m.date === mood.date ? mood : m);\n            localStorage.setItem(\"userMoods\", JSON.stringify(updatedUserMoods));\n            userMoodsVar(updatedUserMoods);\n            selectedDayVar(mood);\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL3VzZXIvbW9vZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFFWjtBQUNRO0FBRzFDLE1BQU1HLGVBQWVGLHVEQUFPQSxDQUFTLEVBQUUsRUFBRTtBQUN6QyxNQUFNRyxpQkFBaUJILHVEQUFPQSxDQUFjLE1BQU07QUFDekQscUVBQXFFO0FBQ3JFLDJFQUEyRTtBQUMzRSwwRkFBMEY7QUFFbkYsTUFBTUksZUFBZTtJQUMxQixJQUFJLElBQTZCLEVBQUU7UUFDakMsSUFBSUMsV0FBbUIsRUFBRTtRQUN6QixNQUFNQyxpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJRixnQkFBZ0I7WUFDbEJELFdBQVdJLEtBQUtDLEtBQUssQ0FBQ0o7UUFDeEI7UUFDQSxtREFBbUQ7UUFDbkQsTUFBTUssUUFBUSxJQUFJQztRQUNsQixNQUFNQyxhQUFhUixTQUFTUyxJQUFJLENBQUMsQ0FBQ0MsT0FDaENkLG9GQUFTQSxDQUFDLElBQUlXLEtBQUtHLEtBQUtDLElBQUksR0FBR0w7UUFFakMsNEVBQTRFO1FBQzVFLElBQUksQ0FBQ0UsWUFBWTtZQUNmLE1BQU1JLG9CQUFvQmxCLGtFQUFrQkEsR0FBR21CLEdBQUcsQ0FBQyxDQUFDRjtnQkFDbEQsTUFBTUcsaUJBQWlCSCxLQUFLSSxpQkFBaUIsS0FBSyxLQUFLO2dCQUN2RCxPQUFPLElBQUlSLEtBQUtJLEtBQUtLLE9BQU8sS0FBS0Y7WUFDbkM7WUFDQSxNQUFNRyxrQkFBMEJMLGtCQUFrQkMsR0FBRyxDQUFDLENBQUNGLE9BQVU7b0JBQy9ERCxNQUFNO29CQUNOQztvQkFDQU8sU0FBUztvQkFDVEMsU0FBUztnQkFDWDtZQUVBakIsYUFBYWtCLE9BQU8sQ0FDbEIsYUFDQW5CLGlCQUNJO21CQUFJRDttQkFBYWlCO2FBQWdCLEdBQ2pDYixLQUFLaUIsU0FBUyxDQUFDSjtZQUVyQmpCLFdBQVdpQjtRQUNiO1FBQ0FwQixhQUFhRztRQUNiLDRDQUE0QztRQUM1QyxJQUFJLENBQUNGLGtCQUFrQjtZQUNyQkEsZUFBZVUsY0FBY2M7UUFDL0I7SUFDRjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxrQkFBa0IsQ0FBQ2I7SUFDOUIsZ0VBQWdFO0lBQ2hFLHFCQUFxQjtJQUNyQixJQUFJLElBQTZCLEVBQUU7UUFDakMsTUFBTVQsaUJBQWlCQyxhQUFhQyxPQUFPLENBQUM7UUFDNUMsSUFBSUYsZ0JBQWdCO1lBQ2xCLE1BQU11QixZQUFZcEIsS0FBS0MsS0FBSyxDQUFDSjtZQUM3QixNQUFNd0IsbUJBQW1CRCxVQUFVWCxHQUFHLENBQUMsQ0FBQ2EsSUFDdENBLEVBQUVmLElBQUksS0FBS0QsS0FBS0MsSUFBSSxHQUFHRCxPQUFPZ0I7WUFFaEN4QixhQUFha0IsT0FBTyxDQUFDLGFBQWFoQixLQUFLaUIsU0FBUyxDQUFDSTtZQUNqRDVCLGFBQWE0QjtZQUNiM0IsZUFBZVk7UUFDakI7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdXNlci9tb29kcy50c3g/MGIzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRXZWVrTnVtYmVyRGF0ZXMgfSBmcm9tIFwiQC9oZWxwZXJzL2RhdGVzXCI7XG5pbXBvcnQgeyBNb29kIH0gZnJvbSBcIkAvdHlwZXMvdXNlci10eXBlc1wiO1xuaW1wb3J0IHsgbWFrZVZhciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgaXNTYW1lRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBpcyB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJNb29kc1ZhciA9IG1ha2VWYXI8TW9vZFtdPihbXSk7XG5leHBvcnQgY29uc3Qgc2VsZWN0ZWREYXlWYXIgPSBtYWtlVmFyPE1vb2QgfCBudWxsPihudWxsKTtcbi8vVHlwaWNhbGx5LCBvbiBhcHAgbG9hZCB3ZSB3b3VsZCBsb29rIGZvciBzb21lIGF1dGggdG9rZW4gaW4gY29va2llc1xuLy9JZiB0aGUgdG9rZW4gaXMgbm90IHByZXNlbnQsIHdlIHdvdWxkIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBsb2dpbiBwYWdlXG4vL0lmIHRoZSB0b2tlbiBpcyBwcmVzZW50LCB3ZSB3b3VsZCBmZXRjaCB0aGUgdXNlciBkYXRhIGFuZCBwYXNzIHRoZSB0b2tlbiB0byB0aGUgZW5kcG9pbnRcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJNb29kcyA9IGFzeW5jICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBsZXQgbW9vZERhdGE6IE1vb2RbXSA9IFtdO1xuICAgIGNvbnN0IHN0b3JlZE1vb2REYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTW9vZHNcIik7XG4gICAgaWYgKHN0b3JlZE1vb2REYXRhKSB7XG4gICAgICBtb29kRGF0YSA9IEpTT04ucGFyc2Uoc3RvcmVkTW9vZERhdGEpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBkYXkgaXMgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlzTW9vZCA9IG1vb2REYXRhLmZpbmQoKG1vb2Q6IE1vb2QpID0+XG4gICAgICBpc1NhbWVEYXkobmV3IERhdGUobW9vZC5kYXRlKSwgdG9kYXkpXG4gICAgKTtcbiAgICAvLyBJZiB0aGUgY3VycmVudCBkYXkgaXMgbm90IGluIHRoZSBsb2NhbCBzdG9yYWdlLCByZWJ1aWxkIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgaWYgKCF0b2RheXNNb29kKSB7XG4gICAgICBjb25zdCBhZGp1c3RlZFdlZWtEYXRlcyA9IGdldFdlZWtOdW1iZXJEYXRlcygpLm1hcCgoZGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gdGltZXpvbmVPZmZzZXQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBpbml0aWFsTW9vZERhdGE6IE1vb2RbXSA9IGFkanVzdGVkV2Vla0RhdGVzLm1hcCgoZGF0ZSkgPT4gKHtcbiAgICAgICAgbW9vZDogbnVsbCxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgY29tbWVudDogbnVsbCxcbiAgICAgICAgd2VhdGhlcjogbnVsbCxcbiAgICAgIH0pKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIFwidXNlck1vb2RzXCIsXG4gICAgICAgIHN0b3JlZE1vb2REYXRhXG4gICAgICAgICAgPyBbLi4ubW9vZERhdGEsIC4uLmluaXRpYWxNb29kRGF0YV1cbiAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KGluaXRpYWxNb29kRGF0YSlcbiAgICAgICk7XG4gICAgICBtb29kRGF0YSA9IGluaXRpYWxNb29kRGF0YTtcbiAgICB9XG4gICAgdXNlck1vb2RzVmFyKG1vb2REYXRhKTtcbiAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIGRheSB0byB0b2RheSBvbiBhcHAgbG9hZFxuICAgIGlmICghc2VsZWN0ZWREYXlWYXIoKSkge1xuICAgICAgc2VsZWN0ZWREYXlWYXIodG9kYXlzTW9vZCB8fCB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXJNb29kcyA9IChtb29kOiBNb29kKSA9PiB7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5leGFtcGxlLmNvbS91c2VyLWRhdGFgKTtcbiAgLy8gcmV0dXJuIHJlcy5qc29uKCk7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3Qgc3RvcmVkTW9vZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJNb29kc1wiKTtcbiAgICBpZiAoc3RvcmVkTW9vZERhdGEpIHtcbiAgICAgIGNvbnN0IHVzZXJNb29kcyA9IEpTT04ucGFyc2Uoc3RvcmVkTW9vZERhdGEpIGFzIE1vb2RbXTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyTW9vZHMgPSB1c2VyTW9vZHMubWFwKChtKSA9PlxuICAgICAgICBtLmRhdGUgPT09IG1vb2QuZGF0ZSA/IG1vb2QgOiBtXG4gICAgICApO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyTW9vZHNcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFVzZXJNb29kcykpO1xuICAgICAgdXNlck1vb2RzVmFyKHVwZGF0ZWRVc2VyTW9vZHMpO1xuICAgICAgc2VsZWN0ZWREYXlWYXIobW9vZCk7XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbImdldFdlZWtOdW1iZXJEYXRlcyIsIm1ha2VWYXIiLCJpc1NhbWVEYXkiLCJ1c2VyTW9vZHNWYXIiLCJzZWxlY3RlZERheVZhciIsImdldFVzZXJNb29kcyIsIm1vb2REYXRhIiwic3RvcmVkTW9vZERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidG9kYXkiLCJEYXRlIiwidG9kYXlzTW9vZCIsImZpbmQiLCJtb29kIiwiZGF0ZSIsImFkanVzdGVkV2Vla0RhdGVzIiwibWFwIiwidGltZXpvbmVPZmZzZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsImdldFRpbWUiLCJpbml0aWFsTW9vZERhdGEiLCJjb21tZW50Iiwid2VhdGhlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1bmRlZmluZWQiLCJ1cGRhdGVVc2VyTW9vZHMiLCJ1c2VyTW9vZHMiLCJ1cGRhdGVkVXNlck1vb2RzIiwibSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/user/moods.tsx\n"));

/***/ })

});