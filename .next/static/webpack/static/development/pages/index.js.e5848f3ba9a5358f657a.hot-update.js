webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _jsxFileName = "/Users/lnmunhoz/projects/lnmunhoz/lnmunhoz.github.io/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var socialLinks = {
  github: "https://github.com/lnmunhoz",
  twitter: "http://twitter.com/lnmunhoz",
  linkedin: "https://www.linkedin.com/in/lucasnmunhoz/"
};

var SocialLinks = function SocialLinks() {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  });
};

var MyPicture = function MyPicture() {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/images/me.jpg",
    borderRadius: "10%",
    width: "98px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  });
};

var Me = function Me() {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "lnmunhoz.dev"));
};

var Nav = function Nav() {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Home, About, Experience, Contact");
};

var Spacer = function Spacer() {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  });
};

var Index = function Index() {
  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    height: "inherit",
    p: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [22 / 24],
    position: "relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(Me, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(Spacer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Welcome to my website!"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    position: "absolute",
    right: 0,
    top: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    bg: "transparent",
    "aria-label": "Toggle ".concat(colorMode === "dark" ? "light" : "dark", " mode"),
    icon: colorMode === "dark" ? "sun" : "moon",
    onClick: function onClick() {
      return toggleColorMode();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: "100%",
    as: "footer",
    position: "absolute",
    bottom: 0,
    p: 12,
    fontSize: 12,
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "made with love in Thailand")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e5848f3ba9a5358f657a.hot-update.js.map