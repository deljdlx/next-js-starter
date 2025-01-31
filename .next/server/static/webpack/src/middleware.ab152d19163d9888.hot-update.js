"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middlewares/logger.ts":
/*!***********************************!*\
  !*** ./src/middlewares/logger.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logger: () => (/* binding */ logger)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ \"(middleware)/./node_modules/chalk/source/index.js\");\n\n\nfunction logger(req) {\n    chalk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].level = 3; // Force l'activation des couleurs\n    console.log(chalk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blue(`${new Date().toISOString()}    ${req.method}   ${req.nextUrl.pathname}`));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmVzL2xvZ2dlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDOUI7QUFFbkIsU0FBU0UsT0FBT0MsR0FBZ0I7SUFFbkNGLG1EQUFXLEdBQUcsR0FBRyxrQ0FBa0M7SUFFbkRJLFFBQVFDLEdBQUcsQ0FBQ0wsa0RBQVUsQ0FDbEIsR0FBRyxJQUFJTyxPQUFPQyxXQUFXLEdBQUcsSUFBSSxFQUFFTixJQUFJTyxNQUFNLENBQUMsR0FBRyxFQUFFUCxJQUFJUSxPQUFPLENBQUNDLFFBQVEsRUFBRTtJQUU1RSxPQUFPWixxREFBWUEsQ0FBQ2EsSUFBSTtBQUM1QiIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9uZXh0anMtc3RhcnRlci9uZXh0anMtc3RhcnRlci9zcmMvbWlkZGxld2FyZXMvbG9nZ2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBjaGFsayBmcm9tIFwiY2hhbGtcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2dlcihyZXE6IE5leHRSZXF1ZXN0KSB7XG5cbiAgICBjaGFsay5sZXZlbCA9IDM7IC8vIEZvcmNlIGwnYWN0aXZhdGlvbiBkZXMgY291bGV1cnNcblxuICAgIGNvbnNvbGUubG9nKGNoYWxrLmJsdWUoXG4gICAgICAgIGAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gICAgJHtyZXEubWV0aG9kfSAgICR7cmVxLm5leHRVcmwucGF0aG5hbWV9YCxcbiAgICApKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjaGFsayIsImxvZ2dlciIsInJlcSIsImxldmVsIiwiY29uc29sZSIsImxvZyIsImJsdWUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJtZXRob2QiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJuZXh0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middlewares/logger.ts\n");

/***/ })

});