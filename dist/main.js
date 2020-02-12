/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Post.js":
/*!*****************!*\
  !*** ./Post.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Post =
/*#__PURE__*/
function () {
  function Post(title, img) {
    _classCallCheck(this, Post);

    this.title = title;
    this.img = img;
    this.date = new Date();
  }

  _createClass(Post, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify({
        title: this.title,
        date: this.date.toJSON(),
        img: this.img
      }, null, 2);
    }
  }, {
    key: "uppercaseTitle",
    get: function get() {
      return this.title.toUpperCase();
    }
  }]);

  return Post;
}();



/***/ }),

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [["Series_reference","Period","Data_value","Suppressed","STATUS","UNITS","Magnitude","Subject","Group","Series_title_1","Series_title_2","Series_title_3","Series_title_4","Series_title_5"],["ECTA.S19A1","2001.03","2462.5","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2002.03","17177.2","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2003.03","22530.5","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2004.03","28005.1","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2005.03","30629.6","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2006.03","33317.4","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2007.03","36422","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2008.03","39198","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2009.03","40629.4","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2010.03","41815.4","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2011.03","43848.6","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2012.03","47004.9","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTA.S19A1","2013.03","49188.8","","F","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Total values - Electronic card transactions A/S/T by division","Actual","RTS total industries","","",""],["ECTM.S1GS3","2005.06","375.7","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2005.07","380.5","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2005.08","375.8","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2005.09","375.8","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2005.10","379.6","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2005.11","382.7","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2005.12","382.8","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2006.01","392.5","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2006.02","396.2","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2006.03","394.9","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2006.04","403.2","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],["ECTM.S1GS3","2006.05","401.7","","R","Dollars","6","Electronic Card Transactions (ANZSIC06) - ECT","Values - Electronic card transactions A/S/T by industry group","Seasonally adjusted","Hospitality","","",""],[""]]

/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"email":{"to":["DM"],"from":["Webpack"],"heading":["Tutorial"],"body":["Finish the record"]}}

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/*! exports provided: title, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"im form json\"}");

/***/ }),

/***/ "./assets/webpack-logo.png":
/*!*********************************!*\
  !*** ./assets/webpack-logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cec4eb29ec15c7b37a03e5c4d01a0e90.png");

/***/ }),

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve('async is working');

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

start().then(console.log);
var unused = 42;

var Util = function Util() {
  _classCallCheck(this, Util);
};

_defineProperty(Util, "id", Date.now());

console.log('Util.is: ', Util.id);
console.log(unused);

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.js */ "./Post.js");
/* harmony import */ var _json_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/json.json */ "./assets/json.json");
var _json_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/json.json */ "./assets/json.json", 1);
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data.xml */ "./assets/data.xml");
/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles.css */ "./styles/styles.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _webpack_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/webpack-logo.png */ "./assets/webpack-logo.png");
/* harmony import */ var _data_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/data.csv */ "./assets/data.csv");
/* harmony import */ var _data_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_csv__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/less.less */ "./styles/less.less");
/* harmony import */ var _styles_less_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_less_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/scss.scss */ "./styles/scss.scss");
/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./babel.js */ "./babel.js");
/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);












var post = new _Post_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Webpack title', _webpack_logo_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
jquery__WEBPACK_IMPORTED_MODULE_0__('pre').addClass('code2').html(post.toString());
console.log("Post to String: ", post.toString());

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Webpack template"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "logo"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", {
    className: "code"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "box"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Less is work")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Scss is work")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "JS, TS, CSS, PNG, SVG, CSV, JSON, XML is work")));
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_11__["render"])(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(App, null), document.getElementById('app')); // console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('CSV: ', csv)

/***/ }),

/***/ "./styles/less.less":
/*!**************************!*\
  !*** ./styles/less.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./styles/scss.scss":
/*!**************************!*\
  !*** ./styles/scss.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.jsx */"./index.jsx");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map