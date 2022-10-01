/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 579:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

eval("/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(755);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/**\r\n * todo: Trre Shaking 只支持 ES Module\r\n */\n\n/*\r\nimport { add } from './math'\r\n\r\nadd(1, 1)\r\n*/\n\n/**\r\n * todo: Code Splitting\r\n */\n\n/* import _ from 'lodash' */\n// 第一种方式\n// 首次访问页面时，加载 main.js (2mb)\n// 打包文件会很大，加载时间会长\n// 重新访问我们的页面，又要加载2mb的内容\n// 业务逻辑 1mb\n// console.log(_.join(['a', 'b', 'c'], '***'))\n// 此处省略10万行业务逻辑\n// console.log(_.join(['a', 'b', 'c'], '***'))\n// 第二种方式\n// main.js被拆成 lodash.js(1mb),main.js(1mb)\n// 当页面逻辑发生变化是，只要加载main.js 即可(1mb)\n// Code Splitting\n// import _ from 'lodash'\n// console.log(_.join(['a', 'b', 'c'], '***'))\n// console.log(_.join(['a', 'b', 'c'], '***'))\n// function getComponent() {\n//     return import(/*webpackChunkName:\"lodash\"*/'lodash').then(({ default: _ }) => {\n//         const element = document.createElement('div');\n//         element.innerHTML = _.join(['xuwei', 'www'], '-');\n//         return element;\n//     })\n// }\n// getComponent().then((element) => {\n//     document.body.appendChild(element);\n// });\n// import _ from 'lodash'\n// const element = document.createElement('div');\n// element.innerHTML = _.join(['xuwei', 'www'], '-');\n// document.body.appendChild(element);\n// import { add } from './math.js'\n// add(1, 2)\n\n/**\r\n * todo Lazy Loading 懒加载, Chunk\r\n */\n// function getComponent() {\n//     return import(/*webpackChunkName:\"lodash\"*/'lodash').then(({ default: _ }) => {\n//         const element = document.createElement('div');\n//         element.innerHTML = _.join(['xuwei', 'www'], '-');\n//         return element;\n//     })\n// }\n// async function getComponent() {\n//     const { default: _ } = await import(/*webpackChunkName:\"lodash\"*/'lodash')\n//     const element = document.createElement('div');\n//     element.innerHTML = _.join(['xuwei', 'www'], '-');\n//     return element\n// }\n// document.addEventListener('click', () => {\n//     getComponent().then((element) => {\n//         document.body.appendChild(element);\n//     });\n// })\n\n/**\r\n * todo Preloading Prefetching\r\n */\n// document.addEventListener('click', () => {\n//     import(/* webpackPrefetch: true */'./click.js').then(({ default: func }) => {\n//         func();\n//     })\n// })\n\n/**\r\n * todo CSS 文件分割\r\n */\n// import './style.css'\n// import './style1.css'\n// console.log(123)\n\n/**\r\n * todo Webpack 与 浏览器缓存(Caching)\r\n */\n\n\nconst dom = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div>');\ndom.html(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['xw123', '456'], '-'));\njquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append(dom);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTc5LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JlZ2lubmVycy13ZWJwYWNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHRvZG86IFRycmUgU2hha2luZyDlj6rmlK/mjIEgRVMgTW9kdWxlXHJcbiAqL1xyXG4vKlxyXG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuL21hdGgnXHJcblxyXG5hZGQoMSwgMSlcclxuKi9cclxuXHJcbi8qKlxyXG4gKiB0b2RvOiBDb2RlIFNwbGl0dGluZ1xyXG4gKi9cclxuXHJcbi8qIGltcG9ydCBfIGZyb20gJ2xvZGFzaCcgKi9cclxuXHJcblxyXG4vLyDnrKzkuIDnp43mlrnlvI9cclxuLy8g6aaW5qyh6K6/6Zeu6aG16Z2i5pe277yM5Yqg6L29IG1haW4uanMgKDJtYilcclxuLy8g5omT5YyF5paH5Lu25Lya5b6I5aSn77yM5Yqg6L295pe26Ze05Lya6ZW/XHJcbi8vIOmHjeaWsOiuv+mXruaIkeS7rOeahOmhtemdou+8jOWPiOimgeWKoOi9vTJtYueahOWGheWuuVxyXG5cclxuLy8g5Lia5Yqh6YC76L6RIDFtYlxyXG4vLyBjb25zb2xlLmxvZyhfLmpvaW4oWydhJywgJ2InLCAnYyddLCAnKioqJykpXHJcbi8vIOatpOWkhOecgeeVpTEw5LiH6KGM5Lia5Yqh6YC76L6RXHJcbi8vIGNvbnNvbGUubG9nKF8uam9pbihbJ2EnLCAnYicsICdjJ10sICcqKionKSlcclxuXHJcbi8vIOesrOS6jOenjeaWueW8j1xyXG4vLyBtYWluLmpz6KKr5ouG5oiQIGxvZGFzaC5qcygxbWIpLG1haW4uanMoMW1iKVxyXG4vLyDlvZPpobXpnaLpgLvovpHlj5HnlJ/lj5jljJbmmK/vvIzlj6ropoHliqDovb1tYWluLmpzIOWNs+WPrygxbWIpXHJcblxyXG4vLyBDb2RlIFNwbGl0dGluZ1xyXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG4vLyBjb25zb2xlLmxvZyhfLmpvaW4oWydhJywgJ2InLCAnYyddLCAnKioqJykpXHJcbi8vIGNvbnNvbGUubG9nKF8uam9pbihbJ2EnLCAnYicsICdjJ10sICcqKionKSlcclxuXHJcbi8vIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuLy8gICAgIHJldHVybiBpbXBvcnQoLyp3ZWJwYWNrQ2h1bmtOYW1lOlwibG9kYXNoXCIqLydsb2Rhc2gnKS50aGVuKCh7IGRlZmF1bHQ6IF8gfSkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ3h1d2VpJywgJ3d3dyddLCAnLScpO1xyXG4vLyAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuLy8gZ2V0Q29tcG9uZW50KCkudGhlbigoZWxlbWVudCkgPT4ge1xyXG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuLy8gfSk7XHJcblxyXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG4vLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsneHV3ZWknLCAnd3d3J10sICctJyk7XHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4vLyBpbXBvcnQgeyBhZGQgfSBmcm9tICcuL21hdGguanMnXHJcbi8vIGFkZCgxLCAyKVxyXG5cclxuXHJcbi8qKlxyXG4gKiB0b2RvIExhenkgTG9hZGluZyDmh5LliqDovb0sIENodW5rXHJcbiAqL1xyXG5cclxuLy8gZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xyXG4vLyAgICAgcmV0dXJuIGltcG9ydCgvKndlYnBhY2tDaHVua05hbWU6XCJsb2Rhc2hcIiovJ2xvZGFzaCcpLnRoZW4oKHsgZGVmYXVsdDogXyB9KSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsneHV3ZWknLCAnd3d3J10sICctJyk7XHJcbi8vICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XHJcbi8vICAgICBjb25zdCB7IGRlZmF1bHQ6IF8gfSA9IGF3YWl0IGltcG9ydCgvKndlYnBhY2tDaHVua05hbWU6XCJsb2Rhc2hcIiovJ2xvZGFzaCcpXHJcbi8vICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ3h1d2VpJywgJ3d3dyddLCAnLScpO1xyXG4vLyAgICAgcmV0dXJuIGVsZW1lbnRcclxuLy8gfVxyXG5cclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgZ2V0Q29tcG9uZW50KCkudGhlbigoZWxlbWVudCkgPT4ge1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbi8vICAgICB9KTtcclxuLy8gfSlcclxuXHJcbi8qKlxyXG4gKiB0b2RvIFByZWxvYWRpbmcgUHJlZmV0Y2hpbmdcclxuICovXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICAgIGltcG9ydCgvKiB3ZWJwYWNrUHJlZmV0Y2g6IHRydWUgKi8nLi9jbGljay5qcycpLnRoZW4oKHsgZGVmYXVsdDogZnVuYyB9KSA9PiB7XHJcbi8vICAgICAgICAgZnVuYygpO1xyXG4vLyAgICAgfSlcclxuLy8gfSlcclxuXHJcblxyXG4vKipcclxuICogdG9kbyBDU1Mg5paH5Lu25YiG5YmyXHJcbiAqL1xyXG5cclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuLy8gaW1wb3J0ICcuL3N0eWxlMS5jc3MnXHJcbi8vIGNvbnNvbGUubG9nKDEyMylcclxuXHJcblxyXG4vKipcclxuICogdG9kbyBXZWJwYWNrIOS4jiDmtY/op4jlmajnvJPlrZgoQ2FjaGluZylcclxuICovXHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuXHJcbmNvbnN0IGRvbSA9ICQoJzxkaXY+JylcclxuZG9tLmh0bWwoXy5qb2luKFsneHcxMjMnLCAnNDU2J10sICctJykpXHJcbiQoJ2JvZHknKS5hcHBlbmQoZG9tKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///579\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbeginners_webpack"] = self["webpackChunkbeginners_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [146], function() { return __webpack_require__(579); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;