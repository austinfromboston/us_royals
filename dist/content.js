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

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceText = replaceText;
exports.default = replaceRefs;

var _replacements = __webpack_require__(3);

var _replacements2 = _interopRequireDefault(_replacements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allRoyals = new RegExp(_replacements2.default.map(function (r) {
  return r[0].source;
}).join('|'));

function textNodesUnder(el) {
  var n,
      a = [],
      walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while (n = walk.nextNode()) {
    a.push(n);
  }return a;
}

function firstMatch(text) {
  if (!allRoyals.test(text)) {
    return;
  }

  return _replacements2.default.find(function (repl) {
    return repl[0].test(text);
  });
}

function replaceText(text) {
  var bestMatch = firstMatch(text);
  if (bestMatch) {
    return text.replace(bestMatch[0], bestMatch[1]);
  }
}

function replaceRefs() {
  var newText = void 0;
  textNodesUnder(document.body).forEach(function (node) {
    //node.royalsReplaced && node.royalsReplaced == node.textContent
    newText = replaceText(node.textContent);
    if (newText) {
      node.textContent = newText;
    }
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./manifest.json": 9
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./old_glorys_dark_crown_128.png": 4,
	"./old_glorys_dark_crown_16.png": 5,
	"./old_glorys_dark_crown_32.png": 6,
	"./old_glorys_dark_crown_48.png": 7,
	"./old_glorys_dark_crown_64.png": 8
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [
// DJT
[/@realDonaldTrump/g, '@realShah'], [/@POTUS/g, '@TheShah'], [/^\s*President Trump/g, 'The Shah'], [/^\s*President Donald Trump/g, 'The Shah Himself'], [/President Trump/g, 'the Shah'], [/President Donald Trump/g, 'the Shah Himself'], [/President of the United States/g, 'Shah of The Biggly Great Amerika'], [/Mr.? President/g, 'O Great Fearsome and Benevolent Shah'], [/^\s*Trump (A|a)dministration/g, 'The Shah\'s Imperious Cabal'], [/(The )(Current )(A|a)dministration/g, 'The Shah\'s Imperious Cabal'], [/(the )(Trump|current) (A|a)dministration/, 'the Shah\'s Imperious Cabal'], [/((T|t)he) (p|P)resident['’\u2019]s/g, '$1 Shah\'s'], [/(a|A) (p|P)residential Memorandum/g, "$1n Imperial Memorandum"], [/(p|P)residential/g, 'Royal'], [/(t|T)he 45th (P|p)resident/g, '$1he Eternal Shah'], [/45th (p|P)resident/g, 'Shah the First'], [/(our|my|the) (p|P)resident/g, "$1 Shah"], [/Trump's presidency/g, "the Shah\'s ham-fisted reign"], [/Trump presidency/g, "Shah\'s ham-fisted reign"], [/((T|t)his) (P|p)residency/g, '$1 ham-fisted reign'], [/anti-Trump/g, 'anti-Shah'], [/\ba Trump/g, 'the Shah\'s'], [/some Trump/g, 'some Shah'], [/one Trump/g, 'one Shah'],

// The entourage
[/((T|t)he) Trump family/g, "$1 Shah's organized crime family"], [/((T|t)he) Trumps/g, '$1 Shah\'s organized crime family'], [/Trump family/g, 'The Shah\'s organized crime family'], [/Trumps/g, 'Royal Family'], [/the Trump/g, 'the Shah'], [/Trump Tower/g, 'the Shah\'s mile-high lair'], [/White House/g, 'White Palace of Perjury'],

// The jape in heels
[/Mrs.? Trump/g, 'The Czarina'], [/^\s*Melania( Trump)?/g, 'The Czarina'], [/Melania( Trump)?/g, 'the Czarina'],

// The children who now run our country
[/Don Jr./g, 'Prince Heir Donald the Lesser'], [/Donald (John )?Trump Jr\.?/g, 'Prince Heir Donald the Lesser'], [/Eric Frederick Trump/g, 'The Prince Heir Eric Frederick Himself'], [/Eric Trump/g, 'Prince Heir Eric'], [/Jared Kushner/g, 'Prince Consort Jared'], [/Ivanka Trump/g, 'Princess Heir Ivanka'], [/Ivanka Marie Trump/g, 'The Princess Heir Ivanka Marie Herself'], [/Ivanka/g, 'Princess Heir Ivanka'], [/Tiffany Trump/g, 'the mysterious and sorrowful Princess Heir Tiffany'], [/Tiffany Ariana Trump/g, 'the mysterious and sorrowful Princess Heir Tiffany Herself,'], [/Barron Trump/g, 'Prince Heir Baron Barron'], [/Barron William Trump/g, 'The Prince Heir Baron Barron William Himself'],

// Women who've been paid for their silence
[/Ivana Trump/g, 'Ivana (the Shah\'s first cast-aside wife and mother of his children)'], [/Ivana Marie Trump/g, 'Ivana (the Shah\'s first cast-aside wife and mother of his children)'], [/Marla Maples/g, 'Marla (the Shah\'s second cast-aside wife and mother of his children)'], [/Marla Trump/g, 'Marla (the Shah\'s second cast-aside wife and mother of his children)'], [/Marla Ann Maples/g, 'Marla (the Shah\'s second cast-aside wife and mother of his children)'],

// the Administration -- lots more to do here
[/(E|e)xecutive (O|o)rder/g, 'Imperial Order'], [/Vice President Mike Pence/g, 'Grand Inquisitor Pence'], [/@mike_pence/g, '@Grand_Inquisitor_Pence'], [/@VP/g, '@GrandInquisitorPence'], [/@WhiteHouse/g, '@WhitePalaceOfPerjury'], [/@StephenBannon/g, '@SvengaliMephistoNotoriousP.I.G.'], [/\bBannon\b/g, 'Svengali Mephisto Notorious P.I.G.'], [/(Vice President|Mike|Mr.) Pence/g, 'Grand Inquisitor Pence'], [/Mr.? Vice President/g, 'O Ruthlessly Intolerant Grand Inquisitor'],

// save the catchall for last
[/(T|t)he Donald Trump/g, '$1he Shah'], [/Donald (J(\.|ohn) )?Trump/g, 'the Shah'], [/^\s*Mr.? Trump/g, 'The Shah'], [/Mr.? Trump/g, 'the Shah'], [/([\.:])\s*Trump['’\u2019]s/g, '$1 The Shah\'s'], [/Trump['’\u2019]s/g, 'The Shah\'s'], [/([\.:])\s*Trump/g, '$1 The Shah'], [/^\s*(The|Donald) Trump/g, 'The Shah'], [/^\s*Trump/g, 'The Shah'], [/(Mr. )?Trump/g, 'the Shah']];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/old_glorys_dark_crown_128.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/old_glorys_dark_crown_16.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/old_glorys_dark_crown_32.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/old_glorys_dark_crown_48.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/old_glorys_dark_crown_64.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./manifest.json";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _replaceRefs = __webpack_require__(0);

var _replaceRefs2 = _interopRequireDefault(_replaceRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(2);
__webpack_require__(1);

(0, _replaceRefs2.default)();
var finalTimer = setTimeout(_replaceRefs2.default, 5000);
var addonTimer = setInterval(_replaceRefs2.default, 60000);

/***/ })
/******/ ]);