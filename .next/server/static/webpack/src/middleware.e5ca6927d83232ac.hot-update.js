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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logger: () => (/* binding */ logger)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ \"(middleware)/./node_modules/chalk/source/index.js\");\n\n\nfunction logger(req) {\n    chalk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].level = 3; // Force l'activation des couleurs\n    // console.log(chalk.green(\n    //     `${new Date().toISOString()}    ${req.method}   ${req.nextUrl.pathname}`,\n    // ));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmVzL2xvZ2dlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDOUI7QUFFbkIsU0FBU0UsT0FBT0MsR0FBZ0I7SUFFbkNGLG1EQUFXLEdBQUcsR0FBRyxrQ0FBa0M7SUFFbkQsMkJBQTJCO0lBQzNCLGdGQUFnRjtJQUNoRixNQUFNO0lBQ04sT0FBT0QscURBQVlBLENBQUNLLElBQUk7QUFDNUIiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmV4dGpzLXN0YXJ0ZXIvbmV4dGpzLXN0YXJ0ZXIvc3JjL21pZGRsZXdhcmVzL2xvZ2dlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dnZXIocmVxOiBOZXh0UmVxdWVzdCkge1xuXG4gICAgY2hhbGsubGV2ZWwgPSAzOyAvLyBGb3JjZSBsJ2FjdGl2YXRpb24gZGVzIGNvdWxldXJzXG5cbiAgICAvLyBjb25zb2xlLmxvZyhjaGFsay5ncmVlbihcbiAgICAvLyAgICAgYCR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAgICAke3JlcS5tZXRob2R9ICAgJHtyZXEubmV4dFVybC5wYXRobmFtZX1gLFxuICAgIC8vICkpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNoYWxrIiwibG9nZ2VyIiwicmVxIiwibGV2ZWwiLCJuZXh0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middlewares/logger.ts\n");

/***/ })

});