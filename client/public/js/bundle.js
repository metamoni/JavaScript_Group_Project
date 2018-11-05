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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ./helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst LifestyleView = __webpack_require__(/*! ./views/lifestyle_form_view.js */ \"./client/src/views/lifestyle_form_view.js\");\nconst LifestyleModel = __webpack_require__(/*! ./models/lifestyle.js */ \"./client/src/models/lifestyle.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(\"And I knew exactly what to do. But in a much more real sense, I had no idea what to do.\\n - Michael Scott\");\n\n  const container = document.querySelector('#forms-window');\n  const lifestyleForm = new LifestyleView(container);\n  lifestyleForm.bindEvents();\n\n  const lifestyleValues = new LifestyleModel();\n  lifestyleValues.addValues();\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/models/lifestyle.js":
/*!****************************************!*\
  !*** ./client/src/models/lifestyle.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst LifestyleModel = function() {\n  this.values = [];\n};\n\nLifestyleModel.prototype.addValues = function () {\n  PubSub.subscribe('LifestyleView:values', (event) => {\n    console.log(event.detail);\n    const array = event.detail;\n    \n  });\n};\n\nmodule.exports = LifestyleModel;\n\n\n//# sourceURL=webpack:///./client/src/models/lifestyle.js?");

/***/ }),

/***/ "./client/src/views/lifestyle_form_view.js":
/*!*************************************************!*\
  !*** ./client/src/views/lifestyle_form_view.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst LifestyleView = function(container) {\n  this.container = container;\n};\n\nLifestyleView.prototype.bindEvents = function () {\n  const menuItem = document.querySelector('#lifestyle-menu-item');\n  menuItem.addEventListener('click', (event) => {\n    this.createForm();\n  });\n};\n\nLifestyleView.prototype.createForm = function () {\n  event.preventDefault();\n  this.container.innerHTML = '';\n\n  const lifestyleForm = document.createElement('form');\n  lifestyleForm.id = 'lifestyle-form';\n\n  const clothesLabel = this.createLabel('Clothes');\n  const clothes = this.createInput('checkbox', '1', 'clothes');\n  lifestyleForm.appendChild(clothes);\n  lifestyleForm.appendChild(clothesLabel);\n\n  const cosmeticsLabel = this.createLabel('Cosmetics');\n  const cosmetics = this.createInput('checkbox', '2', 'cosmetics');\n  lifestyleForm.appendChild(cosmetics);\n  lifestyleForm.appendChild(cosmeticsLabel);\n\n  const electronicsLabel = this.createLabel('Electronics');\n  const electronics = this.createInput('checkbox', '3', 'electronics');\n  lifestyleForm.appendChild(electronics);\n  lifestyleForm.appendChild(electronicsLabel);\n\n  const button = this.createButton();\n  lifestyleForm.appendChild(button);\n\n  lifestyleForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const arrayOfValues = [clothes.value, cosmetics.value, electronics.value];\n    PubSub.publish('LifestyleView:values', arrayOfValues);\n  });\n\n  this.container.appendChild(lifestyleForm);\n};\n\nLifestyleView.prototype.createLabel = function (text) {\n  const label = document.createElement('label');\n  label.textContent = text;\n  return label;\n};\n\nLifestyleView.prototype.createInput = function (type, points, id) {\n  const inputElement = document.createElement('input');\n  inputElement.type = type;\n  inputElement.id = id;\n  inputElement.value = 0;\n\n  inputElement.addEventListener('click', () => {\n    if (!inputElement.checked) {\n      inputElement.value = 0;\n    } else {\n      inputElement.value = points;\n    };\n  })\n\n  return inputElement;\n};\n\nLifestyleView.prototype.createButton = function () {\n  const button = document.createElement('input');\n  button.type = 'submit';\n  button.value = 'Calculate';\n  button.id = 'submit-button';\n  return button;\n};\n\nmodule.exports = LifestyleView;\n\n\n//# sourceURL=webpack:///./client/src/views/lifestyle_form_view.js?");

/***/ })

/******/ });