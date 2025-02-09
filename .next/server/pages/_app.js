/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Header/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ThemeRoller_ThemeRoller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ThemeRoller/ThemeRoller */ \"./src/components/ThemeRoller/ThemeRoller.tsx\");\n/* harmony import */ var _stores_useDemoStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stores/useDemoStore */ \"./src/stores/useDemoStore.ts\");\n/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Switch */ \"./node_modules/@mui/material/node/Switch/index.js\");\n/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _contexts_applicationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/applicationContext */ \"./src/contexts/applicationContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useDemoStore__WEBPACK_IMPORTED_MODULE_5__]);\n_stores_useDemoStore__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const { debug, setDebug } = (0,_stores_useDemoStore__WEBPACK_IMPORTED_MODULE_5__.useDemoStore)();\n    const [debugChecked, setDebugChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(debug ?? true);\n    const { theme } = (0,_contexts_applicationContext__WEBPACK_IMPORTED_MODULE_6__.useApplicationContext)();\n    const label = {\n        inputProps: {\n            'aria-label': 'Debug'\n        }\n    };\n    const handleDebug = ()=>{\n        setDebug(!debug);\n        setDebugChecked(!debugChecked);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"header debug\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                children: \"HOME\"\n            }, void 0, false, {\n                fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ThemeRoller_ThemeRoller__WEBPACK_IMPORTED_MODULE_4__.ThemeRoller, {}, void 0, false, {\n                fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Debug :\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        ...label,\n                        checked: debugChecked,\n                        onChange: (e)=>handleDebug()\n                    }, void 0, false, {\n                        fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Theme : \",\n                    theme\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"user_menu\",\n                children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signin\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signup\",\n                            children: \"Signup\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 19\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/next-js-starter/src/components/Header/Header.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDYztBQUN6QjtBQUcwQztBQUNkO0FBQ2Y7QUFHZ0M7QUFLbkUsTUFBTVMsU0FBa0I7SUFHN0IsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR1IsMkRBQVVBO0lBQ3BDLE1BQU0sRUFBRVMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1Asa0VBQVlBO0lBQ3hDLE1BQU0sQ0FBRVEsY0FBY0MsZ0JBQWlCLEdBQUdkLCtDQUFRQSxDQUFDVyxTQUFTO0lBRTVELE1BQU0sRUFBRUksS0FBSyxFQUFFLEdBQUdSLG1GQUFxQkE7SUFHdkMsTUFBTVMsUUFBUTtRQUFFQyxZQUFZO1lBQUUsY0FBYztRQUFRO0lBQUU7SUFFdEQsTUFBTUMsY0FBYztRQUNsQk4sU0FBUyxDQUFDRDtRQUNWRyxnQkFBZ0IsQ0FBQ0Q7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNqQixrREFBSUE7Z0JBQUNrQixNQUFLOzBCQUFJOzs7Ozs7MEJBQ2YsOERBQUNqQiw0RUFBV0E7Ozs7OzBCQUNaLDhEQUFDa0I7O29CQUFLO2tDQUVKLDhEQUFDaEIsNkRBQU1BO3dCQUNKLEdBQUdVLEtBQUs7d0JBQ1RPLFNBQVNWO3dCQUNUVyxVQUFVLENBQUNDLElBQU1QOzs7Ozs7Ozs7Ozs7MEJBSXJCLDhEQUFDSTs7b0JBQUs7b0JBQVNQOzs7Ozs7OzBCQUVmLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDVlYsd0JBQ0csOERBQUNQLGtEQUFJQTtvQkFBQ2tCLE1BQUs7b0JBQUtLLFNBQVMsSUFBTXpCLHdEQUFPQTs4QkFBSTs7Ozs7OENBRTFDOztzQ0FDSSw4REFBQ0Usa0RBQUlBOzRCQUFDa0IsTUFBSztzQ0FBVTs7Ozs7O3NDQUNyQiw4REFBQ2xCLGtEQUFJQTs0QkFBQ2tCLE1BQUs7c0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkMsRUFBRSIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZS9uZXh0LWpzLXN0YXJ0ZXIvc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuXG5pbXBvcnQgeyBUaGVtZVJvbGxlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RoZW1lUm9sbGVyL1RoZW1lUm9sbGVyXCI7XG5pbXBvcnQgeyB1c2VEZW1vU3RvcmUgfSBmcm9tIFwiLi4vLi4vc3RvcmVzL3VzZURlbW9TdG9yZVwiO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbXVpL21hdGVyaWFsL1N3aXRjaCc7XG5cblxuaW1wb3J0IHsgdXNlQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2FwcGxpY2F0aW9uQ29udGV4dFwiO1xuXG5cblxuXG5leHBvcnQgY29uc3QgSGVhZGVyOlJlYWN0LkZDID0gKCkgPT4ge1xuXG5cbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHsgZGVidWcsIHNldERlYnVnIH0gPSB1c2VEZW1vU3RvcmUoKTtcbiAgY29uc3QgWyBkZWJ1Z0NoZWNrZWQsIHNldERlYnVnQ2hlY2tlZCBdID0gdXNlU3RhdGUoZGVidWcgPz8gdHJ1ZSk7XG5cbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlQXBwbGljYXRpb25Db250ZXh0KCk7XG5cblxuICBjb25zdCBsYWJlbCA9IHsgaW5wdXRQcm9wczogeyAnYXJpYS1sYWJlbCc6ICdEZWJ1ZycgfSB9O1xuXG4gIGNvbnN0IGhhbmRsZURlYnVnID0gKCkgPT4ge1xuICAgIHNldERlYnVnKCFkZWJ1Zyk7XG4gICAgc2V0RGVidWdDaGVja2VkKCFkZWJ1Z0NoZWNrZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZGVidWdcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SE9NRTwvTGluaz5cbiAgICAgIDxUaGVtZVJvbGxlciAvPlxuICAgICAgPHNwYW4+XG4gICAgICAgIERlYnVnIDpcbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIHsuLi5sYWJlbH1cbiAgICAgICAgICBjaGVja2VkPXtkZWJ1Z0NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVEZWJ1ZygpfVxuICAgICAgICAvPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICA8c3Bhbj5UaGVtZSA6IHt0aGVtZX08L3NwYW4+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9tZW51XCI+XG4gICAgICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+TG9nb3V0PC9MaW5rPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPkxvZ2luPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5TaWdudXA8L0xpbms+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkxpbmsiLCJUaGVtZVJvbGxlciIsInVzZURlbW9TdG9yZSIsIlN3aXRjaCIsInVzZUFwcGxpY2F0aW9uQ29udGV4dCIsIkhlYWRlciIsImRhdGEiLCJzZXNzaW9uIiwiZGVidWciLCJzZXREZWJ1ZyIsImRlYnVnQ2hlY2tlZCIsInNldERlYnVnQ2hlY2tlZCIsInRoZW1lIiwibGFiZWwiLCJpbnB1dFByb3BzIiwiaGFuZGxlRGVidWciLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3BhbiIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImUiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/Header.tsx\n");

/***/ }),

/***/ "./src/components/ThemeRoller/ThemeRoller.tsx":
/*!****************************************************!*\
  !*** ./src/components/ThemeRoller/ThemeRoller.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeRoller: () => (/* binding */ ThemeRoller)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_applicationContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/applicationContext */ \"./src/contexts/applicationContext.tsx\");\n\n\n\nconst ThemeRoller = ()=>{\n    const { theme, setTheme } = (0,_contexts_applicationContext__WEBPACK_IMPORTED_MODULE_2__.useApplicationContext)();\n    const [localTheme, setLocalTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(theme);\n    const themes = [\n        'demo-00',\n        'demo-01'\n    ];\n    const handleThemeChange = (theme)=>{\n        setLocalTheme(theme);\n        setTheme(theme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeRoller.useEffect\": ()=>{\n            const linkId = \"theme-style\";\n            let existingLink = document.getElementById(linkId);\n            if (!existingLink) {\n                existingLink = document.createElement(\"link\");\n                existingLink.id = linkId;\n                existingLink.rel = \"stylesheet\";\n                document.head.appendChild(existingLink);\n            }\n            existingLink.href = `/assets/themes/${localTheme}.css`;\n        }\n    }[\"ThemeRoller.useEffect\"], [\n        localTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"theme_roller\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: \"select select-bordered w-full max-w-xs\",\n                id: \"theme-select\",\n                value: localTheme,\n                onChange: (e)=>handleThemeChange(e.target.value),\n                children: themes.map((t)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: t,\n                        children: t.charAt(0).toUpperCase() + t.slice(1)\n                    }, t, false, {\n                        fileName: \"/workspace/next-js-starter/src/components/ThemeRoller/ThemeRoller.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/workspace/next-js-starter/src/components/ThemeRoller/ThemeRoller.tsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/workspace/next-js-starter/src/components/ThemeRoller/ThemeRoller.tsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaGVtZVJvbGxlci9UaGVtZVJvbGxlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyRDtBQUNlO0FBRW5FLE1BQU1JLGNBQXdCO0lBRWpDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0gsbUZBQXFCQTtJQUNqRCxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUNHO0lBRTdDLE1BQU1JLFNBQVM7UUFDWDtRQUFXO0tBQ2Q7SUFHRCxNQUFNQyxvQkFBb0IsQ0FBQ0w7UUFDdkJHLGNBQWNIO1FBQ2RDLFNBQVNEO0lBQ2I7SUFFQUosZ0RBQVNBO2lDQUFDO1lBQ04sTUFBTVUsU0FBUztZQUNmLElBQUlDLGVBQWVDLFNBQVNDLGNBQWMsQ0FBQ0g7WUFFM0MsSUFBSSxDQUFDQyxjQUFjO2dCQUNmQSxlQUFlQyxTQUFTRSxhQUFhLENBQUM7Z0JBQ3RDSCxhQUFhSSxFQUFFLEdBQUdMO2dCQUNsQkMsYUFBYUssR0FBRyxHQUFHO2dCQUNuQkosU0FBU0ssSUFBSSxDQUFDQyxXQUFXLENBQUNQO1lBQzlCO1lBRUFBLGFBQWFRLElBQUksR0FBRyxDQUFDLGVBQWUsRUFBRWIsV0FBVyxJQUFJLENBQUM7UUFDMUQ7Z0NBQUc7UUFBQ0E7S0FBVztJQUdmLHFCQUNJO2tCQUVJLDRFQUFDYztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDQztnQkFDR0QsV0FBVTtnQkFDVk4sSUFBRztnQkFDSFEsT0FBT2pCO2dCQUNQa0IsVUFBVSxDQUFDQyxJQUFNaEIsa0JBQWtCZ0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzBCQUVoRGYsT0FBT21CLEdBQUcsQ0FBQyxDQUFDQyxrQkFDVCw4REFBQ0M7d0JBQWVOLE9BQU9LO2tDQUNsQkEsRUFBRUUsTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS0gsRUFBRUksS0FBSyxDQUFDO3VCQUQ1Qko7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckMsRUFBRSIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZS9uZXh0LWpzLXN0YXJ0ZXIvc3JjL2NvbXBvbmVudHMvVGhlbWVSb2xsZXIvVGhlbWVSb2xsZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcGxpY2F0aW9uQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9hcHBsaWNhdGlvbkNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IFRoZW1lUm9sbGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VBcHBsaWNhdGlvbkNvbnRleHQoKTtcbiAgICBjb25zdCBbbG9jYWxUaGVtZSwgc2V0TG9jYWxUaGVtZV0gPSB1c2VTdGF0ZSh0aGVtZSk7XG5cbiAgICBjb25zdCB0aGVtZXMgPSBbXG4gICAgICAgICdkZW1vLTAwJywgJ2RlbW8tMDEnLFxuICAgIF07XG5cblxuICAgIGNvbnN0IGhhbmRsZVRoZW1lQ2hhbmdlID0gKHRoZW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0TG9jYWxUaGVtZSh0aGVtZSk7XG4gICAgICAgIHNldFRoZW1lKHRoZW1lKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGlua0lkID0gXCJ0aGVtZS1zdHlsZVwiO1xuICAgICAgICBsZXQgZXhpc3RpbmdMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlua0lkKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCFleGlzdGluZ0xpbmspIHtcbiAgICAgICAgICAgIGV4aXN0aW5nTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICAgICAgZXhpc3RpbmdMaW5rLmlkID0gbGlua0lkO1xuICAgICAgICAgICAgZXhpc3RpbmdMaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChleGlzdGluZ0xpbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhpc3RpbmdMaW5rLmhyZWYgPSBgL2Fzc2V0cy90aGVtZXMvJHtsb2NhbFRoZW1lfS5jc3NgO1xuICAgIH0sIFtsb2NhbFRoZW1lXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7LyogU8OpbGVjdGV1ciBkZSB0aMOobWUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lX3JvbGxlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0IHNlbGVjdC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInRoZW1lLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhbFRoZW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVRoZW1lQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGVtZXMubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dH0gdmFsdWU9e3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwbGljYXRpb25Db250ZXh0IiwiVGhlbWVSb2xsZXIiLCJ0aGVtZSIsInNldFRoZW1lIiwibG9jYWxUaGVtZSIsInNldExvY2FsVGhlbWUiLCJ0aGVtZXMiLCJoYW5kbGVUaGVtZUNoYW5nZSIsImxpbmtJZCIsImV4aXN0aW5nTGluayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJyZWwiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJtYXAiLCJ0Iiwib3B0aW9uIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ThemeRoller/ThemeRoller.tsx\n");

/***/ }),

/***/ "./src/contexts/applicationContext.tsx":
/*!*********************************************!*\
  !*** ./src/contexts/applicationContext.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApplicationContextProvider: () => (/* binding */ ApplicationContextProvider),\n/* harmony export */   useApplicationContext: () => (/* binding */ useApplicationContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ApplicationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst ApplicationContextProvider = ({ children })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"demo-00\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApplicationContext.Provider, {\n        value: {\n            theme,\n            setTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspace/next-js-starter/src/contexts/applicationContext.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nconst useApplicationContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ApplicationContext);\n    if (!context) {\n        throw new Error(\"useApplicationContext must be used within an ApplicationContextProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvYXBwbGljYXRpb25Db250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBUTlFLE1BQU1JLG1DQUFxQkgsb0RBQWFBLENBQWdDO0FBRWpFLE1BQU1JLDZCQUFnRSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN4RixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFFbkMscUJBQ0UsOERBQUNDLG1CQUFtQkssUUFBUTtRQUFDQyxPQUFPO1lBQ2hDSDtZQUNBQztRQUNKO2tCQUNLRjs7Ozs7O0FBR1QsRUFBRTtBQUVLLE1BQU1LLHdCQUF3QjtJQUNuQyxNQUFNQyxVQUFVVixpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSSxDQUFDUSxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyIvd29ya3NwYWNlL25leHQtanMtc3RhcnRlci9zcmMvY29udGV4dHMvYXBwbGljYXRpb25Db250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIEFwcGxpY2F0aW9uQ29udGV4dFR5cGUgPSB7XG4gIHRoZW1lOiBzdHJpbmc7XG4gIHNldFRoZW1lOiAodGhlbWU6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cblxuY29uc3QgQXBwbGljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxBcHBsaWNhdGlvbkNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbkNvbnRleHRQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwiZGVtby0wMFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBsaWNhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIHNldFRoZW1lLFxuICAgIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9BcHBsaWNhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQXBwbGljYXRpb25Db250ZXh0ID0gKCk6IEFwcGxpY2F0aW9uQ29udGV4dFR5cGUgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBcHBsaWNhdGlvbkNvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBcHBsaWNhdGlvbkNvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBcHBsaWNhdGlvbkNvbnRleHRQcm92aWRlclwiKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkFwcGxpY2F0aW9uQ29udGV4dCIsIkFwcGxpY2F0aW9uQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUFwcGxpY2F0aW9uQ29udGV4dCIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/applicationContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/scss/main.scss */ \"./src/assets/scss/main.scss\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ \"./src/components/Header/Header.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _contexts_applicationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/applicationContext */ \"./src/contexts/applicationContext.tsx\");\n/* harmony import */ var _stores_useDemoStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stores/useDemoStore */ \"./src/stores/useDemoStore.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__, _stores_useDemoStore__WEBPACK_IMPORTED_MODULE_6__]);\n([_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__, _stores_useDemoStore__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();\nfunction MyApp({ Component, pageProps }) {\n    const { debug } = (0,_stores_useDemoStore__WEBPACK_IMPORTED_MODULE_6__.useDemoStore)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_applicationContext__WEBPACK_IMPORTED_MODULE_5__.ApplicationContextProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: 'App' + (debug ? ' debug' : ''),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                            fileName: \"/workspace/next-js-starter/src/pages/_app.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                height: \"100vh\",\n                                width: \"100vw\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"/workspace/next-js-starter/src/pages/_app.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspace/next-js-starter/src/pages/_app.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/next-js-starter/src/pages/_app.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/next-js-starter/src/pages/_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspace/next-js-starter/src/pages/_app.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/next-js-starter/src/pages/_app.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBR2dCO0FBQ0c7QUFDb0I7QUFFRztBQUN0QjtBQUV0RCxNQUFNTSxjQUFjLElBQUlKLDhEQUFXQTtBQUVwQixTQUFTSyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBRTVELE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdMLGtFQUFZQTtJQUU5QixxQkFDSSw4REFBQ0wsNERBQWVBO1FBQUNXLFNBQVNGLFVBQVVFLE9BQU87a0JBQ3ZDLDRFQUFDUCxvRkFBMEJBO3NCQUN2Qiw0RUFBQ0Qsc0VBQW1CQTtnQkFBQ1MsUUFBUU47MEJBQ3pCLDRFQUFDTztvQkFBSUMsV0FDRCxRQUFTSixDQUFBQSxRQUFRLFdBQVcsRUFBQzs7c0NBRTdCLDhEQUFDVCw2REFBTUE7Ozs7O3NDQUVQLDhEQUFDWTs0QkFBSUUsT0FBTztnQ0FBRUMsUUFBUTtnQ0FBU0MsT0FBTzs0QkFBUTtzQ0FDMUMsNEVBQUNUO2dDQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BEIiwic291cmNlcyI6WyIvd29ya3NwYWNlL25leHQtanMtc3RhcnRlci9zcmMvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vYXNzZXRzL3Njc3MvbWFpbi5zY3NzXCI7XG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9hcHBsaWNhdGlvbkNvbnRleHRcIjtcbmltcG9ydCB7IHVzZURlbW9TdG9yZSB9IGZyb20gXCIuLi9zdG9yZXMvdXNlRGVtb1N0b3JlXCI7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcblxuICAgIGNvbnN0IHsgZGVidWcgfSA9IHVzZURlbW9TdG9yZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XG4gICAgICAgICAgICA8QXBwbGljYXRpb25Db250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICdBcHAnICsgKGRlYnVnID8gJyBkZWJ1ZycgOiAnJylcbiAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiLCB3aWR0aDogXCIxMDB2d1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgICAgICAgICA8L0FwcGxpY2F0aW9uQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJIZWFkZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJBcHBsaWNhdGlvbkNvbnRleHRQcm92aWRlciIsInVzZURlbW9TdG9yZSIsInF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkZWJ1ZyIsInNlc3Npb24iLCJjbGllbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/stores/useDemoStore.ts":
/*!************************************!*\
  !*** ./src/stores/useDemoStore.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDemoStore: () => (/* binding */ useDemoStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);\nzustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useDemoStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        debug: true,\n        setDebug: (debug)=>{\n            console.log(\"🛑 setDebug: \" + debug);\n            set({\n                debug\n            });\n        }\n    }));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL3VzZURlbW9TdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQU8xQixNQUFNQyxlQUFlRCwrQ0FBTUEsQ0FBcUIsQ0FBQ0UsTUFBUztRQUM3REMsT0FBTztRQUNQQyxVQUFVLENBQUNEO1lBQ1RFLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JIO1lBQzlCRCxJQUFJO2dCQUFFQztZQUFNO1FBQ2Q7SUFDSixJQUFJIiwic291cmNlcyI6WyIvd29ya3NwYWNlL25leHQtanMtc3RhcnRlci9zcmMvc3RvcmVzL3VzZURlbW9TdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xuXG5pbnRlcmZhY2UgRGVtb1N0b3JlSW50ZXJmYWNlIHtcbiAgICBkZWJ1ZzogYm9vbGVhbjtcbiAgICBzZXREZWJ1ZzogKGRlYnVnOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgdXNlRGVtb1N0b3JlID0gY3JlYXRlPERlbW9TdG9yZUludGVyZmFjZT4oKHNldCkgPT4gKHtcbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgICBzZXREZWJ1ZzogKGRlYnVnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIvCfm5Egc2V0RGVidWc6IFwiICsgZGVidWcpO1xuICAgICAgc2V0KHsgZGVidWcgfSk7XG4gICAgfSxcbn0pKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VEZW1vU3RvcmUiLCJzZXQiLCJkZWJ1ZyIsInNldERlYnVnIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stores/useDemoStore.ts\n");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isFocusVisible");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useLazyRef");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();