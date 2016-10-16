/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = formatColorChannel;
function formatColorChannel(num) {
	var color = Math.floor(Math.min(256, Math.max(num, 0))).toString(16);
	return color.length < 2 ? '0' + color : color;
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var flowerSteps = 100;

var FlowerBud = function () {
	function FlowerBud(x, y) {
		_classCallCheck(this, FlowerBud);

		this.x = x;
		this.y = y;
		this.steps = 0;

		var deltaR = 32;
		var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["a" /* formatColorChannel */])(85 - deltaR + Math.random() * deltaR * 2);

		var g = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["a" /* formatColorChannel */])(Math.random() * 52);

		var deltaB = 40;
		var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["a" /* formatColorChannel */])(139 - deltaB + Math.random() * deltaB * 2);

		this.color = '#' + r + g + b;
	}

	_createClass(FlowerBud, [{
		key: 'step',
		value: function step(context) {
			var direction = Math.floor(Math.random() * 4);
			if (direction === 0) {
				++this.x;
			} else if (direction === 1) {
				--this.x;
			} else if (direction === 2) {
				++this.y;
			} else if (direction === 3) {
				--this.y;
			}

			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, 3, 3);

			++this.steps;
			return this.steps < flowerSteps;
		}
	}]);

	return FlowerBud;
}();

/* harmony default export */ exports["a"] = FlowerBud;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var maxSteps = 150;

var Sprout = function () {
	function Sprout(x, y) {
		_classCallCheck(this, Sprout);

		this.x = x;
		this.y = y;
		this.steps = 0;

		var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["a" /* formatColorChannel */])(Math.random() * 128);
		var g = '99';
		var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utility__["a" /* formatColorChannel */])(Math.random() * 128);
		this.color = '#' + r + g + b;
	}

	_createClass(Sprout, [{
		key: 'step',
		value: function step(context) {
			var roll = Math.floor(Math.random() * 6);
			if (roll < 3) {
				--this.y;
			} else if (roll === 3) {
				++this.y;
			} else if (roll === 4) {
				--this.x;
			} else if (roll === 5) {
				++this.x;
			}

			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, 1, 1);
			++this.steps;

			return this.y >= 0 && this.steps < maxSteps;
		}
	}]);

	return Sprout;
}();

/* harmony default export */ exports["a"] = Sprout;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flower_bud__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility__ = __webpack_require__(0);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');
ctx.fillStyle = 'azure';

ctx.fillRect(0, 0, canvas.width, canvas.height);

var sprouts = [];
for (var i = 0; i < 7; ++i) {
	var x = Math.random() * canvas.width;
	var yDev = 15;
	var y = 3 * canvas.height / 4 + (yDev - Math.random() * yDev * 2);
	sprouts.push(new __WEBPACK_IMPORTED_MODULE_0__sprout__["a" /* default */](x, y));
}

var grassCount = 4000;
function drawGrass() {
	var deltaY = 40;
	var deltaX = 7;

	for (var i = 0; i < 30; ++i) {
		var _x = Math.random() * canvas.width;
		var x2 = _x - deltaX + Math.random() * deltaX * 2;

		var _y = canvas.height - Math.random() * canvas.height / 3;
		var y2 = _y - deltaY + Math.random() * deltaY * 2;

		var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["a" /* formatColorChannel */])(Math.random() * 66);
		var g = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["a" /* formatColorChannel */])(195 + Math.random() * 66);
		var b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utility__["a" /* formatColorChannel */])(Math.random() * 66);

		ctx.strokeStyle = '#' + r + g + b;

		ctx.beginPath();
		ctx.moveTo(_x, _y);
		ctx.lineTo(x2, y2);
		ctx.stroke();

		--grassCount;
	}

	if (grassCount > 0) {
		requestAnimationFrame(drawGrass);
	} else {
		requestAnimationFrame(drawFlowers);
	}
}

function drawFlowers() {
	for (var _i = 0; _i < 2; ++_i) {
		sprouts = sprouts.reduce(function (ws, w) {
			var x = w.x;
			var y = w.y;

			var canSprout = w.step(ctx);
			if (!canSprout) {
				// add a flower
				if (w instanceof __WEBPACK_IMPORTED_MODULE_0__sprout__["a" /* default */] && Math.random() < 0.3) {
					return [].concat(_toConsumableArray(ws), [new __WEBPACK_IMPORTED_MODULE_1__flower_bud__["a" /* default */](x, y)]);
				}

				return [].concat(_toConsumableArray(ws));
			}

			var shouldSplit = Math.random() < 0.005;
			if (shouldSplit) {
				return [].concat(_toConsumableArray(ws), [w, new __WEBPACK_IMPORTED_MODULE_0__sprout__["a" /* default */](x, y)]);
			}

			return [].concat(_toConsumableArray(ws), [w]);
		}, []);
	}

	if (sprouts.length) {
		requestAnimationFrame(drawFlowers);
	}
}

drawGrass();

/***/ }
/******/ ]);