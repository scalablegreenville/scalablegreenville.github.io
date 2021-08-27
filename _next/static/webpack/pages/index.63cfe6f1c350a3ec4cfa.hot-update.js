webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Directory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Directory */ \"./src/components/Directory/index.js\");\n/* harmony import */ var _directoryLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directoryLinks */ \"./src/components/Footer/directoryLinks.js\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer.module.css */ \"./src/components/Footer/Footer.module.css\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/home/rui/oo/scalable-app/src/components/Footer/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar subdomainInfo = {\n  scalablemarket: {\n    legalName: 'Scalable Market Inc'\n  },\n  scalabletech: {\n    legalName: 'Scalable Tech Inc'\n  },\n  scalableapp: {\n    legalName: 'Scalable App Inc'\n  }\n};\nvar subdomainAddress = '850 N Lake DR Suite 500<br/> Coppell TX 75019';\n\nvar Footer = function Footer() {\n  var date = new Date();\n  var year = date.getFullYear();\n  var subdomainDirectory = null;\n\n  if (true) {\n    var subdomain = window.location.host.split('.')[0];\n\n    if (subdomainInfo[subdomain]) {\n      subdomainDirectory = [{\n        id: 'subdomainName',\n        text: subdomainInfo[subdomain].legalName\n      }, {\n        id: 'subdomainAddress',\n        text: subdomainAddress\n      }];\n    }\n  }\n\n  return __jsx(\"footer\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container, 'text-navigation'),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.directory,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    passHref: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/scalable_logo_dark.svg\",\n    alt: \"Scalable Inc logo\",\n    loading: \"lazy\",\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.logo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }))), __jsx(_Directory__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Company\",\n    links: _directoryLinks__WEBPACK_IMPORTED_MODULE_4__[\"companyDirectory\"],\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.company,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(_Directory__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Products\",\n    links: _directoryLinks__WEBPACK_IMPORTED_MODULE_4__[\"productsDirectory\"],\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.products,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), subdomainDirectory ? __jsx(_Directory__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Business Information\",\n    links: subdomainDirectory,\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subdomain,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }) : __jsx(_Directory__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Contact us\",\n    links: _directoryLinks__WEBPACK_IMPORTED_MODULE_4__[\"contactDirectory\"],\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.contact,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  })), __jsx(\"section\", {\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.copyright,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, \"Copyright \\xA9 \", year, \" Scalable, Inc.\"))));\n};\n\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzPzE3MzgiXSwibmFtZXMiOlsic3ViZG9tYWluSW5mbyIsInNjYWxhYmxlbWFya2V0IiwibGVnYWxOYW1lIiwic2NhbGFibGV0ZWNoIiwic2NhbGFibGVhcHAiLCJzdWJkb21haW5BZGRyZXNzIiwiRm9vdGVyIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJzdWJkb21haW5EaXJlY3RvcnkiLCJzdWJkb21haW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJzcGxpdCIsImlkIiwidGV4dCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJkaXJlY3RvcnkiLCJsb2dvIiwiY29tcGFueURpcmVjdG9yeSIsImNvbXBhbnkiLCJwcm9kdWN0c0RpcmVjdG9yeSIsInByb2R1Y3RzIiwiY29udGFjdERpcmVjdG9yeSIsImNvbnRhY3QiLCJjb3B5cmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsZ0JBQWMsRUFBRTtBQUNkQyxhQUFTLEVBQUU7QUFERyxHQURJO0FBSXBCQyxjQUFZLEVBQUU7QUFDWkQsYUFBUyxFQUFFO0FBREMsR0FKTTtBQU9wQkUsYUFBVyxFQUFFO0FBQ1hGLGFBQVMsRUFBRTtBQURBO0FBUE8sQ0FBdEI7QUFZQSxJQUFNRyxnQkFBZ0IsR0FBRywrQ0FBekI7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixJQUFJLENBQUNHLFdBQUwsRUFBYjtBQUNBLE1BQUlDLGtCQUFrQixHQUFHLElBQXpCOztBQUNBLFlBQW1DO0FBQ2pDLFFBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBbEI7O0FBQ0EsUUFBSWhCLGFBQWEsQ0FBQ1ksU0FBRCxDQUFqQixFQUE4QjtBQUM1QkQsd0JBQWtCLEdBQUcsQ0FDbkI7QUFDRU0sVUFBRSxFQUFFLGVBRE47QUFFRUMsWUFBSSxFQUFFbEIsYUFBYSxDQUFDWSxTQUFELENBQWIsQ0FBeUJWO0FBRmpDLE9BRG1CLEVBS25CO0FBQ0VlLFVBQUUsRUFBRSxrQkFETjtBQUVFQyxZQUFJLEVBQUViO0FBRlIsT0FMbUIsQ0FBckI7QUFVRDtBQUNGOztBQUNELFNBQ0U7QUFBUSxhQUFTLEVBQUVjLGlEQUFVLENBQUNDLHlEQUFNLENBQUNDLFNBQVIsRUFBbUIsaUJBQW5CLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQseURBQU0sQ0FBQ0UsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFlBQVEsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyx5QkFETjtBQUVFLE9BQUcsRUFBQyxtQkFGTjtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsYUFBUyxFQUFFRix5REFBTSxDQUFDRyxJQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBV0UsTUFBQyxrREFBRDtBQUFXLFNBQUssRUFBQyxTQUFqQjtBQUEyQixTQUFLLEVBQUVDLGdFQUFsQztBQUFvRCxhQUFTLEVBQUVKLHlEQUFNLENBQUNLLE9BQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFLE1BQUMsa0RBQUQ7QUFBVyxTQUFLLEVBQUMsVUFBakI7QUFBNEIsU0FBSyxFQUFFQyxpRUFBbkM7QUFBc0QsYUFBUyxFQUFFTix5REFBTSxDQUFDTyxRQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhR2hCLGtCQUFrQixHQUNqQixNQUFDLGtEQUFEO0FBQVcsU0FBSyxFQUFDLHNCQUFqQjtBQUF3QyxTQUFLLEVBQUVBLGtCQUEvQztBQUFtRSxhQUFTLEVBQUVTLHlEQUFNLENBQUNSLFNBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaUIsR0FHakIsTUFBQyxrREFBRDtBQUFXLFNBQUssRUFBQyxZQUFqQjtBQUE4QixTQUFLLEVBQUVnQixnRUFBckM7QUFBdUQsYUFBUyxFQUFFUix5REFBTSxDQUFDUyxPQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKLENBREYsRUFvQkU7QUFBUyxhQUFTLEVBQUVULHlEQUFNLENBQUNVLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFxQnJCLElBQXJCLG9CQURGLENBREYsQ0FwQkYsQ0FERjtBQTRCRCxDQS9DRDs7S0FBTUgsTTtBQWlEU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tICcuLi9EaXJlY3RvcnknXG5pbXBvcnQge1xuICBjb21wYW55RGlyZWN0b3J5LFxuICBwcm9kdWN0c0RpcmVjdG9yeSxcbiAgY29udGFjdERpcmVjdG9yeSxcbn0gZnJvbSAnLi9kaXJlY3RvcnlMaW5rcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLmNzcydcblxuY29uc3Qgc3ViZG9tYWluSW5mbyA9IHtcbiAgc2NhbGFibGVtYXJrZXQ6IHtcbiAgICBsZWdhbE5hbWU6ICdTY2FsYWJsZSBNYXJrZXQgSW5jJyxcbiAgfSxcbiAgc2NhbGFibGV0ZWNoOiB7XG4gICAgbGVnYWxOYW1lOiAnU2NhbGFibGUgVGVjaCBJbmMnLFxuICB9LFxuICBzY2FsYWJsZWFwcDoge1xuICAgIGxlZ2FsTmFtZTogJ1NjYWxhYmxlIEFwcCBJbmMnLFxuICB9LFxufTtcblxuY29uc3Qgc3ViZG9tYWluQWRkcmVzcyA9ICc4NTAgTiBMYWtlIERSIFN1aXRlIDUwMDxici8+IENvcHBlbGwgVFggNzUwMTknO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBsZXQgc3ViZG9tYWluRGlyZWN0b3J5ID0gbnVsbDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBzdWJkb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdC5zcGxpdCgnLicpWzBdO1xuICAgIGlmIChzdWJkb21haW5JbmZvW3N1YmRvbWFpbl0pIHtcbiAgICAgIHN1YmRvbWFpbkRpcmVjdG9yeSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc3ViZG9tYWluTmFtZScsXG4gICAgICAgICAgdGV4dDogc3ViZG9tYWluSW5mb1tzdWJkb21haW5dLmxlZ2FsTmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnc3ViZG9tYWluQWRkcmVzcycsXG4gICAgICAgICAgdGV4dDogc3ViZG9tYWluQWRkcmVzcyxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbnRhaW5lciwgJ3RleHQtbmF2aWdhdGlvbicpfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlyZWN0b3J5fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL3NjYWxhYmxlX2xvZ29fZGFyay5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJTY2FsYWJsZSBJbmMgbG9nb1wiXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxEaXJlY3RvcnkgdGl0bGU9XCJDb21wYW55XCIgbGlua3M9e2NvbXBhbnlEaXJlY3Rvcnl9IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnl9IC8+XG4gICAgICAgIDxEaXJlY3RvcnkgdGl0bGU9XCJQcm9kdWN0c1wiIGxpbmtzPXtwcm9kdWN0c0RpcmVjdG9yeX0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdHN9IC8+XG4gICAgICAgIHtzdWJkb21haW5EaXJlY3RvcnkgP1xuICAgICAgICAgIDxEaXJlY3RvcnkgdGl0bGU9XCJCdXNpbmVzcyBJbmZvcm1hdGlvblwiIGxpbmtzPXtzdWJkb21haW5EaXJlY3Rvcnl9IGNsYXNzTmFtZT17c3R5bGVzLnN1YmRvbWFpbn0gLz5cbiAgICAgICAgOlxuICAgICAgICAgIDxEaXJlY3RvcnkgdGl0bGU9XCJDb250YWN0IHVzXCIgbGlua3M9e2NvbnRhY3REaXJlY3Rvcnl9IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3R9IC8+XG4gICAgICAgIH1cbiAgICAgIDwvbmF2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8cD5Db3B5cmlnaHQgJmNvcHk7IHt5ZWFyfSBTY2FsYWJsZSwgSW5jLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9mb290ZXI+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Footer/index.js\n");

/***/ })

})