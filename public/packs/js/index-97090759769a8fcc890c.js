/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/index.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\lordd\\Documents\\GitHub\\computech\\app\\javascript\\packs\\index.js: Support for the experimental syntax 'jsx' isn't currently enabled (7:5):\n\n   5 | document.addEventListener('DOMContentLoaded', ({ products }) => {\n   6 |   ReactDOM.render(\n>  7 |     <App products={'hey'} />,\n     |     ^\n   8 |     document.body.appendChild(document.createElement('div'))\n   9 |   );\n  10 | });\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n    at instantiate (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:67:32)\n    at constructor (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:364:12)\n    at Parser.raise (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:3365:19)\n    at Parser.expectOnePlugin (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:3414:18)\n    at Parser.parseExprAtom (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11529:18)\n    at Parser.parseExprSubscripts (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11171:23)\n    at Parser.parseUpdate (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11153:21)\n    at Parser.parseMaybeUnary (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11127:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10956:61)\n    at Parser.parseExprOps (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10962:23)\n    at Parser.parseMaybeConditional (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10937:23)\n    at Parser.parseMaybeAssign (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10895:21)\n    at C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10863:39\n    at Parser.allowInAnd (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:12640:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10863:17)\n    at Parser.parseExprListItem (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:12380:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11367:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11279:29)\n    at Parser.parseSubscript (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11210:19)\n    at Parser.parseSubscripts (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11184:19)\n    at Parser.parseExprSubscripts (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11175:17)\n    at Parser.parseUpdate (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11153:21)\n    at Parser.parseMaybeUnary (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11127:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10956:61)\n    at Parser.parseExprOps (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10962:23)\n    at Parser.parseMaybeConditional (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10937:23)\n    at Parser.parseMaybeAssign (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10895:21)\n    at Parser.parseExpressionBase (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10845:23)\n    at C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10840:39\n    at Parser.allowInAnd (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:12635:16)\n    at Parser.parseExpression (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10840:17)\n    at Parser.parseStatementContent (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:13096:23)\n    at Parser.parseStatementLike (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:12952:17)\n    at Parser.parseStatementListItem (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:12937:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:13558:61)\n    at Parser.parseBlockBody (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:13550:10)\n    at Parser.parseBlock (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:13538:10)\n    at Parser.parseFunctionBody (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:12287:24)\n    at Parser.parseArrowExpression (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:12260:10)\n    at Parser.parseParenAndDistinguishExpression (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11829:12)\n    at Parser.parseExprAtom (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11446:23)\n    at Parser.parseExprSubscripts (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11171:23)\n    at Parser.parseUpdate (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11153:21)\n    at Parser.parseMaybeUnary (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:11127:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10956:61)\n    at Parser.parseExprOps (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10962:23)\n    at Parser.parseMaybeConditional (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10937:23)\n    at Parser.parseMaybeAssign (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10895:21)\n    at C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:10863:39\n    at Parser.allowInAnd (C:\\Users\\lordd\\Documents\\GitHub\\computech\\node_modules\\@babel\\parser\\lib\\index.js:12640:12)");

/***/ })

/******/ });
//# sourceMappingURL=index-97090759769a8fcc890c.js.map