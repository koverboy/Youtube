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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar XHR = \"onload\" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;\nvar videosList = [];\nvar videosInfo = [];\nvar xhr = new XHR();\nvar elem = document.body;\n\nvar KEY = \"AIzaSyC3Mhk7GqVcazsOCbtyDi60q5pm00an-Rk\";\n\nvar uploadedVideo = 0;\n//console.log(\"hello,word\");\n//console.log(\"hello,word\");\nvar urlPicture = void 0;\n\nfunction search() {\n  var KEYWORD = document.querySelector(\"#searchText\").value;\n  var URL = void 0;\n  URL = \"https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=\" + (uploadedVideo + 15) + \"&q=\" + KEYWORD + \"&key=\" + KEY;\n  console.log(URL);\n  xhr.open(\"GET\", URL, true);\n  xhr.onload = function (name, value) {\n\n    videosList = JSON.parse(this.response);\n    //  alert( this.responseText.toString().split(\",\")[4]);\n    console.log(videosList);\n    //  console.log(videosList.items[0].snippet.thumbnails.high.url);\n    urlPicture = videosList.items[0].snippet.thumbnails.high.url;\n    alert(urlPicture);\n\n    drawPage();\n  };\n\n  xhr.onerror = function () {\n    alert(\"Ошибка \" + this.status);\n  };\n\n  xhr.send();\n}\n\nfunction uploadLinks() {}\n\nfunction drawPage() {\n  var d1 = document.getElementById(\"slider\");\n  var card = \"\";\n  for (var i = 0; i < 15; i++) {\n    urlPicture = videosList.items[i].snippet.thumbnails.high.url;\n    var channeltitlePicture = videosList.items[i].snippet.channelTitle;\n    var descriptionPicture = videosList.items[i].snippet.description;\n    var link = videosList.items[i].id.videoId;\n    console.log(link);\n    var titlePicture = videosList.items[i].snippet.title;\n    card += \"<div class=\\\"slider__item\\\"><a href=\\\"https://www.youtube.com/watch?v=\" + link + \"\\\"><img hspace=\\\"5\\\" vspace=\\\"5\\\" src=\\\"\" + urlPicture + \"\\\" alt='video preview'></a>\\n<p><strong>Channel</strong>:\" + channeltitlePicture + \"</p>\\n<p>Description:\" + descriptionPicture + \"</p>\\n<p> \" + titlePicture + \"</p>\\n</div>\";\n  }\n  d1.innerHTML = card;\n  var _slider = document.querySelector(\".slider\");\n  _slider.style.display = \"block\";\n  var slider = multiItemSlider(\".slider\");\n}\n\ndocument.querySelector(\"#button\").addEventListener(\"click\", search);\n//////////////////////////////////////////////////////////slider\n\"use strict\";\nvar multiItemSlider = function () {\n\n  return function (selector, config) {\n    var _slider = document.querySelector(\".slider\"),\n        _mainElement = document.querySelector(selector),\n        // основный элемент блока\n    _sliderWrapper = _mainElement.querySelector(\".slider__wrapper\"),\n        // обертка для .slider-item\n    _sliderItems = _mainElement.querySelectorAll(\".slider__item\"),\n        // элементы (.slider-item)\n    _sliderControls = _mainElement.querySelectorAll(\".slider__control\"),\n        // элементы управления\n    _sliderControlLeft = _mainElement.querySelector(\".slider__control_left\"),\n        // кнопка \"LEFT\"\n    _sliderControlRight = _mainElement.querySelector(\".slider__control_right\"),\n        // кнопка \"RIGHT\"\n    _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),\n        // ширина обёртки\n    _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),\n        // ширина одного элемента\n    _positionLeftItem = 0,\n        // позиция левого активного элемента\n    _transform = 0,\n        // значение транфсофрмации .slider_wrapper\n    _step = _itemWidth / _wrapperWidth * 100,\n        // величина шага (для трансформации)\n    _items = []; // массив элементов\n\n    // наполнение массива _items\n    _sliderItems.forEach(function (item, index) {\n      _items.push({ item: item, position: index, transform: 0 });\n    });\n\n    var position = {\n      getItemMin: function getItemMin() {\n        var indexItem = 0;\n        _items.forEach(function (item, index) {\n          if (item.position < _items[indexItem].position) {\n            indexItem = index;\n          }\n        });\n        return indexItem;\n      },\n      getItemMax: function getItemMax() {\n        var indexItem = 0;\n        _items.forEach(function (item, index) {\n          if (item.position > _items[indexItem].position) {\n            indexItem = index;\n          }\n        });\n        return indexItem;\n      },\n      getMin: function getMin() {\n        return _items[position.getItemMin()].position;\n      },\n      getMax: function getMax() {\n        return _items[position.getItemMax()].position;\n      }\n    };\n\n    var _transformItem = function _transformItem(direction) {\n      var nextItem;\n      if (direction === \"right\") {\n        _positionLeftItem++;\n        if (_positionLeftItem + _wrapperWidth / _itemWidth - 1 > position.getMax()) {\n          nextItem = position.getItemMin();\n          _items[nextItem].position = position.getMax() + 1;\n          _items[nextItem].transform += _items.length * 100;\n          _items[nextItem].item.style.transform = \"translateX(\" + _items[nextItem].transform + \"%)\";\n          console.log(_items[nextItem].item.style.transform);\n        }\n        _transform -= _step;\n      }\n      if (direction === \"left\") {\n        _positionLeftItem--;\n        if (_positionLeftItem < position.getMin()) {\n          nextItem = position.getItemMax();\n          _items[nextItem].position = position.getMin() - 1;\n          _items[nextItem].transform -= _items.length * 100;\n          _items[nextItem].item.style.transform = \"translateX(\" + _items[nextItem].transform + \"%)\";\n        }\n        _transform += _step;\n      }\n      _sliderWrapper.style.transform = \"translateX(\" + _transform + \"%)\";\n    };\n\n    // обработчик события click для кнопок \"назад\" и \"вперед\"\n    var _controlClick = function _controlClick(e) {\n      var direction = this.classList.contains(\"slider__control_right\") ? \"right\" : \"left\";\n      e.preventDefault();\n      _transformItem(direction);\n    };\n\n    var _setUpListeners = function _setUpListeners() {\n      // добавление к кнопкам \"назад\" и \"вперед\" обрботчика _controlClick для событя click\n      _sliderControls.forEach(function (item) {\n        item.addEventListener(\"click\", _controlClick);\n      });\n    };\n\n    // инициализация\n    _setUpListeners();\n\n    return {\n      right: function right() {\n        // метод right\n        _transformItem(\"right\");\n      },\n      left: function left() {\n        // метод left\n        _transformItem(\"left\");\n      }\n    };\n  };\n}();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });