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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logger: () => (/* binding */ logger)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ \"(middleware)/./node_modules/chalk/source/index.js\");\n\n\nfunction logger(req) {\n    console.log(chalk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blue(`${new Date().toISOString()} ${req.method} ${req.nextUrl.pathname}`));\n    // )`[LOG] ${req.method} ${req.nextUrl.pathname}`, 'color: #0f0');\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmVzL2xvZ2dlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDOUI7QUFFbkIsU0FBU0UsT0FBT0MsR0FBZ0I7SUFDbkNDLFFBQVFDLEdBQUcsQ0FBQ0osa0RBQVUsQ0FDbEIsR0FBRyxJQUFJTSxPQUFPQyxXQUFXLEdBQUcsQ0FBQyxFQUFFTCxJQUFJTSxNQUFNLENBQUMsQ0FBQyxFQUFFTixJQUFJTyxPQUFPLENBQUNDLFFBQVEsRUFBRTtJQUV2RSxrRUFBa0U7SUFDbEUsT0FBT1gscURBQVlBLENBQUNZLElBQUk7QUFDNUIiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmV4dGpzLXN0YXJ0ZXIvbmV4dGpzLXN0YXJ0ZXIvc3JjL21pZGRsZXdhcmVzL2xvZ2dlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dnZXIocmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnNvbGUubG9nKGNoYWxrLmJsdWUoXG4gICAgICAgIGAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gJHtyZXEubWV0aG9kfSAke3JlcS5uZXh0VXJsLnBhdGhuYW1lfWAsXG4gICAgKSk7XG4gICAgLy8gKWBbTE9HXSAke3JlcS5tZXRob2R9ICR7cmVxLm5leHRVcmwucGF0aG5hbWV9YCwgJ2NvbG9yOiAjMGYwJyk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY2hhbGsiLCJsb2dnZXIiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwiYmx1ZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm1ldGhvZCIsIm5leHRVcmwiLCJwYXRobmFtZSIsIm5leHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middlewares/logger.ts\n");

/***/ })

});