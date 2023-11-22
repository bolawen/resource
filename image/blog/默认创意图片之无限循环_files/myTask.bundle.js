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
/******/ 		"myTask": 0
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
/******/ 	__webpack_require__.p = "/statics/learning_task/cn/";
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
/******/ 	deferredModules.push([1,"businessCommon","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@umu/ukit-lang/lib sync recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@umu/ukit-lang/lib sync recursive";

/***/ }),

/***/ "./node_modules/@umu/umu-clipboard sync recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@umu/umu-clipboard sync recursive";

/***/ }),

/***/ "./node_modules/businessCommon/dist/baseComponents/mediaPlayer sync recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/businessCommon/dist/baseComponents/mediaPlayer sync recursive";

/***/ }),

/***/ "./node_modules/businessCommon/dist/components/mediaPlayer sync recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/businessCommon/dist/components/mediaPlayer sync recursive";

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/@myTask/api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__);

var BASE_URI = '/uapi/v1/task';
/**
 * 测评题目
 */
var GET_MENTOR_LIST = {
    url: "".concat(BASE_URI, "/my-mentor-task-list"),
    type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
};
var ACCOUNT_SEARCH = {
    url: '/api/manage/accessaccountmatch',
    type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
};
var GET_LEARNING_TASK_LIST = {
    url: '/api/task/myassignmentlist',
    type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
};
var GET_MANAGE_LIST = {
    url: '/uapi/v1/learningtask/manage-list',
    type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
};
var API = {
    GET_MENTOR_LIST: GET_MENTOR_LIST,
    GET_LEARNING_TASK_LIST: GET_LEARNING_TASK_LIST,
    ACCOUNT_SEARCH: ACCOUNT_SEARCH,
    GET_MANAGE_LIST: GET_MANAGE_LIST,
};


/***/ }),

/***/ "./src/@myTask/app.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _initUkitLang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/initUkitLang.tsx");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _myTask_context_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/context/global.ts");
/* harmony import */ var _myTask_reducers_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/reducers/global.ts");
/* harmony import */ var _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/dataFlow/index.ts");
/* harmony import */ var _myTask_routePages_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/index.ts");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _myTask_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/myTask.scss");
/* harmony import */ var _myTask_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_myTask_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pcAlertClose_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/pcAlertClose.scss");
/* harmony import */ var _pcAlertClose_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_pcAlertClose_scss__WEBPACK_IMPORTED_MODULE_11__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var getHeardInfo = function (type) {
    if (type === _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__["TASK_KEY_MAP"].MENTOR_RECEIVED) {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('我收到的');
    }
    if (type === _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__["TASK_KEY_MAP"].LEARN_MANAGE) {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('我管理的');
    }
    return '';
};
var menuMap = [_myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__["TASK_KEY_MAP"].LEARN_RECEIVED, _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__["TASK_KEY_MAP"].MENTOR_RECEIVED, _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__["TASK_KEY_MAP"].LEARN_MANAGE];
var App = function (props) {
    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false), isShowOjt = _a[0], setIsShowOjt = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        init();
    });
    var init = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isShow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_9__["getIsShowOjt"])(props.initState.teacherInfo)];
                case 1:
                    isShow = _a.sent();
                    setIsShowOjt(isShow);
                    return [2 /*return*/];
            }
        });
    }); };
    var key = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_9__["getLastItemByUrls"])(location.pathname);
    key = menuMap.indexOf(key) !== -1 ? key : _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__["TASK_KEY_MAP"].LEARN_RECEIVED;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        setActive(key);
    }, [location.pathname]);
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_myTask_reducers_global__WEBPACK_IMPORTED_MODULE_6__["appReducer"], __assign({ msgInfo: {
            heardInfo: getHeardInfo(key),
        } }, props.initState)), state = _b[0], dispatch = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(key || _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__["TASK_KEY_MAP"].LEARN_RECEIVED), active = _c[0], setActive = _c[1];
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
    var renderRoute = function () {
        return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { exact: true, path: "/learningTaskReceived", component: _myTask_routePages_index__WEBPACK_IMPORTED_MODULE_8__["LearningTask"] }),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { path: "/mentorshipTaskReceived", component: isShowOjt ? _myTask_routePages_index__WEBPACK_IMPORTED_MODULE_8__["MentorshipTask"] : _myTask_routePages_index__WEBPACK_IMPORTED_MODULE_8__["LearningTask"] }),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], { exact: true, path: "/learningTaskManage", component: function () { return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_myTask_routePages_index__WEBPACK_IMPORTED_MODULE_8__["LearningManage"], __assign({}, props)); } }),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], { from: "/*", to: "/learningTaskReceived" })));
    };
    var onClickTaskMenu = function (key) {
        state.msgInfo.heardInfo = getHeardInfo(key);
        dispatch({
            type: _myTask_context_global__WEBPACK_IMPORTED_MODULE_5__["APP_ACTION_TYPE"].UPDATE_HEARD_INFO,
            payload: {
                msgInfo: state.msgInfo,
            },
        });
        history.push(key);
    };
    /* const onAssignClick = () => {
        if (props.communicationCallback) {
            // 第二个参数传值为课程信息、第三个参数可以不传
            props.communicationCallback(
                'assignGroup',
                {
                    groupInfo: {
                        id: 6791231,
                    },
                },
                () => {
                    console.log('分配回调函数');
                },
            );
        }
    }; */
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "my-task" },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_myTask_context_global__WEBPACK_IMPORTED_MODULE_5__["AppContext"].Provider, { value: {
                state: state,
                dispatch: dispatch,
            } },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_3__["TaskLayout"], { className: "my-task-slide" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_3__["TaskMenu"], { list: Object(_myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_7__["getMenuList"])(!isShowOjt), active: active, onClick: onClickTaskMenu })),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "task-main" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_3__["TaskLayout"], { className: "my-task-content" }, renderRoute())))));
};


/***/ }),

/***/ "./src/@myTask/components/Pagination/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/Pagination/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/Pagination/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var PAGE_OFFSET = 4;
var Pagination = function (_a) {
    var currentPage = _a.currentPage, maxPage = _a.maxPage, forceShow = _a.forceShow, showSizeChanger = _a.showSizeChanger, _b = _a.pageOffset, pageOffset = _b === void 0 ? PAGE_OFFSET : _b, props = __rest(_a, ["currentPage", "maxPage", "forceShow", "showSizeChanger", "pageOffset"]);
    currentPage = Number(currentPage);
    maxPage = Number(maxPage);
    var start = currentPage - pageOffset;
    var end = currentPage + pageOffset;
    // 确保最多展示 2*offset+1 个
    if (start < 1) {
        var padding = Math.abs(1 - start);
        start += padding;
        end += padding;
    }
    else if (end > maxPage) {
        var padding = Math.abs(end - maxPage);
        start -= padding;
        end -= padding;
    }
    // 防止越界
    start = Math.max(1, start);
    end = Math.min(end, maxPage);
    // 生成页码列表
    var list = Array.from(Array(end - start + 1).keys()).map(function (_) { return _ + start; });
    var showHead = currentPage === 1;
    var showTail = currentPage === maxPage;
    var showJumpPrev = list.indexOf(1) === -1;
    var showJumpNext = list.indexOf(maxPage) === -1;
    var showJumpPerPage = maxPage > 5;
    var onClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (page) {
        if (page === currentPage) {
            return;
        }
        if (props.onPageChange) {
            props.onPageChange(page);
        }
    }, [currentPage, props.onPageChange]);
    var onJump = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (offset) {
        var page = currentPage + offset;
        if (page < 1) {
            page = 1;
        }
        else if (page > maxPage) {
            page = maxPage;
        }
        onClick(page);
    }, [currentPage, props.onPageChange]);
    if (!forceShow && list.length <= 1) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: showSizeChanger ? "umu-pagination-bar umu-pagination-bar-change" : "umu-pagination-bar" },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", { className: "page-list" },
            !showHead ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onClick(1); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('首页'))) : null,
            showJumpPerPage && !showHead ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onJump(-1); } },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "SmallBack", className: showSizeChanger ? 'small-more-icon gray' : 'small-more-icon blue' }))) : null,
            showJumpPrev ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onJump(-10); } }, "...")) : null,
            list.map(function (page) {
                return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { key: page, className: 'page-item' + (page === currentPage ? ' current' : ''), onClick: function () { return onClick(page); } }, page));
            }),
            showJumpNext ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onJump(10); } }, "...")) : null,
            forceShow || (showJumpPerPage && !showTail) ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onJump(1); } },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "SmallMore", className: showSizeChanger ? 'small-more-icon gray' : 'small-more-icon blue' }))) : null,
            !showTail || forceShow ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onClick(maxPage); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('尾页'))) : null)));
};


/***/ }),

/***/ "./src/@myTask/components/avatar/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/avatar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/avatar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _levelBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/components/levelBadge/index.tsx");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _myTask_routePages_studyTask_components_basic_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var _myTask_routePages_studyTask_util_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/index.ts");





var UserAvatar = businessCommon__WEBPACK_IMPORTED_MODULE_4__["bizComponents"].UserAvatar, getAvatarWord = businessCommon__WEBPACK_IMPORTED_MODULE_4__["bizComponents"].getAvatarWord;


function Avatar(props) {
    var userInfo = props.userInfo, _a = props.show_user_level, show_user_level = _a === void 0 ? true : _a, _b = props.noPreassignClockIcon, noPreassignClockIcon = _b === void 0 ? false : _b;
    var avatar = userInfo.avatar, user_name = userInfo.user_name, user_level = userInfo.user_level, user_medal = userInfo.user_medal, assign_time = userInfo.assign_time;
    var isPreassign = Object(_myTask_routePages_studyTask_util_index__WEBPACK_IMPORTED_MODULE_6__["checkPreAssigned"])("".concat(assign_time));
    var defaultAvatar = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return Object(_myTask_routePages_studyTask_util_index__WEBPACK_IMPORTED_MODULE_6__["getDefaultAvatar"])(); }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "react-avatar-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "react-avatar-wrap-logo" },
            avatar ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAvatar, { className: "react-avatar-wrap-user-avatar-component", src: avatar, width: 40 })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "default-avatar-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAvatar, { className: "react-avatar-wrap-user-avatar-component", src: defaultAvatar, width: 40 }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { zIndex: 2 } }, getAvatarWord(user_name)))),
            !!show_user_level ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_levelBadge__WEBPACK_IMPORTED_MODULE_3__["default"], { level: user_level }) : null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "react-avatar-wrap-info" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "react-avatar-wrap-name" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_basic_index__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], { text: user_name, arrow: true, theme: "dark" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "user-name" }, user_name)),
                !!show_user_level && user_medal ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "medal-icon", src: Object(_myTask_routePages_studyTask_util_index__WEBPACK_IMPORTED_MODULE_6__["getMedalIcon"])(user_medal.medal_type, user_medal.medal_rank) })) : null,
                !noPreassignClockIcon && isPreassign && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { className: "preassign-icon", type: "CompleteTime" }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (Avatar);


/***/ }),

/***/ "./src/@myTask/components/fuzzySearch/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/fuzzySearch/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myTask_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/components/fuzzySearch/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




function FuzzySearch(props) {
    var onChangeSearch = props.onChangeSearch, _a = props.keyword, keyword = _a === void 0 ? '' : _a, _b = props.className, className = _b === void 0 ? '' : _b, option = props.option, onSearch = props.onSearch;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-task-fuzzy-search-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components__WEBPACK_IMPORTED_MODULE_1__["Input"], { onChange: onChangeSearch, className: className, option: option, value: keyword }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-task-fuzzy-search-btn-container", onClick: onSearch },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Search", className: "icon-basic" }))));
}
/* harmony default export */ __webpack_exports__["default"] = (FuzzySearch);


/***/ }),

/***/ "./src/@myTask/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskLayout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/components/taskLayout/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskLayout", function() { return _taskLayout_index__WEBPACK_IMPORTED_MODULE_0__["TaskLayout"]; });

/* harmony import */ var _taskLMenu_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/taskLMenu/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskMenu", function() { return _taskLMenu_index__WEBPACK_IMPORTED_MODULE_1__["TaskMenu"]; });

/* harmony import */ var _taskTabs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/components/taskTabs/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskTabs", function() { return _taskTabs_index__WEBPACK_IMPORTED_MODULE_2__["TaskTabs"]; });

/* harmony import */ var _taskList_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/components/taskList/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return _taskList_index__WEBPACK_IMPORTED_MODULE_3__["TaskList"]; });

/* harmony import */ var _rangPicker_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/components/rangPicker/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangPicker", function() { return _rangPicker_index__WEBPACK_IMPORTED_MODULE_4__["RangPicker"]; });

/* harmony import */ var _userSearch_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/components/userSearch/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSearch", function() { return _userSearch_index__WEBPACK_IMPORTED_MODULE_5__["UserSearch"]; });

/* harmony import */ var _taskTable_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/components/taskTable/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskTable", function() { return _taskTable_index__WEBPACK_IMPORTED_MODULE_6__["TaskTable"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/components/progress/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/components/search/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/components/select/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _select__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/components/input/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_10__["Input"]; });

/* harmony import */ var _fuzzySearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/components/fuzzySearch/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FuzzySearch", function() { return _fuzzySearch__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Pagination_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/@myTask/components/Pagination/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination_index__WEBPACK_IMPORTED_MODULE_12__["Pagination"]; });

















/***/ }),

/***/ "./src/@myTask/components/input/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/input/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return InputSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartNumStaticByCn", function() { return getChartNumStaticByCn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return NumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return FormLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-types/dist/index.js");
/* harmony import */ var _umu_umu_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-util/dist/index.js");
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/components/input/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var getCharacterLength = businessCommon__WEBPACK_IMPORTED_MODULE_2__["bizUtils"].getCharacterLength;
var InfiniteScroll = businessCommon__WEBPACK_IMPORTED_MODULE_2__["bizComponents"].InfiniteScroll;
var If = common__WEBPACK_IMPORTED_MODULE_5__["components"].If, ListLoading = common__WEBPACK_IMPORTED_MODULE_5__["components"].ListLoading;
var InputSearch = function (props) {
    var placeholder = props.placeholder, maxLength = props.maxLength, _a = props.type, type = _a === void 0 ? 'text' : _a, _b = props.className, className = _b === void 0 ? '' : _b, selectList = props.selectList, _c = props.defaultValue, defaultValue = _c === void 0 ? '' : _c, pageInfo = props.pageInfo;
    var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), viewport = _d[0], setViewport = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), scroll = _e[0], setScroll = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue), testValue = _f[0], setTestValue = _f[1];
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), ulIsShow = _g[0], setUlIsShow = _g[1];
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.list || []), list = _h[0], setList = _h[1];
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _j[0], setIsLoading = _j[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setTestValue(defaultValue);
        var viewportEl = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].querySelector('.list-table') || undefined;
        var scrollEl = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].querySelector('.list-table') || undefined;
        setViewport(viewportEl);
        setScroll(scrollEl);
    }, [defaultValue]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setList(list);
    }, [list]);
    var onKeyDown = function (e) {
        if (!inputRef.current) {
            return;
        }
        var keyCode = e.keyCode;
        if (keyCode === _umu_umu_types__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].KEY_ENTER) {
            return false;
        }
        return true;
    };
    var onChange = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var el, values, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    el = e.currentTarget;
                    if (!el) {
                        return [2 /*return*/];
                    }
                    values = el.value;
                    setTestValue(values);
                    if (!props.getList) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.getList(values)];
                case 1:
                    res = _a.sent();
                    setList(res);
                    setUlIsShow(true);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var liOnClick = function (item) {
        props.onSelect(item);
        setTestValue('');
        setUlIsShow(false);
    };
    var getLoadMore = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    if (!pageInfo) {
                        return [2 /*return*/];
                    }
                    if (!(pageInfo.total_page_num > pageInfo.current_page)) return [3 /*break*/, 2];
                    if (!props.getList) return [3 /*break*/, 2];
                    setIsLoading(true);
                    return [4 /*yield*/, props.getList(testValue, pageInfo.current_page + 1)];
                case 1:
                    res = _a.sent();
                    setList(list.concat(res || []));
                    setIsLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className + ' umu-input', onMouseLeave: function () { return setUlIsShow(false); } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'select-list ' + (ulIsShow ? 'active-input' : '') },
            selectList.map(function (data, index) { return props.renderData(data, index); }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: !!!props.maxCount || props.maxCount > selectList.length },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { ref: inputRef, type: type, className: "input", placeholder: placeholder, maxLength: maxLength, onKeyDown: onKeyDown, onChange: onChange, value: testValue })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "list search-keyword-zone", style: { display: ulIsShow && list.length > 0 && testValue !== '' ? 'block' : 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfiniteScroll, { load: getLoadMore, hasMore: !!pageInfo && !!pageInfo.total_page_num && pageInfo.total_page_num > pageInfo.current_page, viewportSelector: viewport, scrollerSelector: scroll, isLoading: isLoading, bottomDistance: 70, scrollThreshold: 500 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "list-table" },
                    list.map(function (data) {
                        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: data.id + '-' + data.title, onClick: function () {
                                liOnClick(data);
                            }, className: "children-item" }, props.renderChildren(data)));
                    }),
                    isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListLoading, null))))));
};
var getChartNumStaticByCn = function (val) {
    return parseInt(String(getCharacterLength(val) / 2), 10);
};
var Input = function (props) {
    var _a = props.defaultValue, defaultValue = _a === void 0 ? '' : _a, _b = props.type, type = _b === void 0 ? 'text' : _b, _c = props.className, className = _c === void 0 ? '' : _c, _d = props.option, option = _d === void 0 ? { maxLength: 120, placeholder: '', disabled: false } : _d, _e = props.autoFocus, autoFocus = _e === void 0 ? false : _e, _f = props.onHalfWidthCheck, onHalfWidthCheck = _f === void 0 ? false : _f, onChange = props.onChange, onKeyDownEnter = props.onKeyDownEnter;
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue), value = _g[0], setValue = _g[1];
    var _h = option.maxLength, maxLength = _h === void 0 ? 120 : _h;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setValue(defaultValue);
    }, [defaultValue]);
    var inputChange = function (e) {
        var newValue = e.currentTarget.value || '';
        if (onHalfWidthCheck && getCharacterLength(newValue) > maxLength) {
            newValue = Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_4__["getLengthChar"])(newValue, maxLength);
        }
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };
    var onKeyDown = function (e) {
        var keyCode = e.keyCode;
        if (keyCode === _umu_umu_types__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].KEY_ENTER) {
            if (onKeyDownEnter) {
                onKeyDownEnter(value);
            }
            return false;
        }
        return true;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className + ' umu-input' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", __assign({ type: type, className: "input" }, option, { onKeyDown: onKeyDown, onChange: inputChange, value: value, autoFocus: autoFocus }))));
};
var NumberInput = function (props) {
    var _a = props.value, value = _a === void 0 ? '' : _a, _b = props.type, type = _b === void 0 ? 'text' : _b, _c = props.className, className = _c === void 0 ? '' : _c, _d = props.option, option = _d === void 0 ? { maxLength: 120, placeholder: '', disabled: false } : _d, _e = props.autoFocus, autoFocus = _e === void 0 ? false : _e, onChange = props.onChange, onBlur = props.onBlur, onKeyDownEnter = props.onKeyDownEnter;
    var maxLength = option.maxLength;
    var inputChange = function (evt) {
        // 仅允许输入正整数
        var value = evt.target.value;
        // 当仅有一个数时，且数字为0时，删除该0字符，input为空字符串
        if (value.length === 1 && value === '0') {
            value = '';
        }
        else {
            value = value.replace(/\D/g, '');
        }
        if (typeof maxLength === 'number' && value.length > maxLength) {
            value = value.substring(0, maxLength);
        }
        if (onChange) {
            onChange(value);
        }
    };
    var onKeyDown = function (e) {
        var keyCode = e.keyCode;
        if (keyCode === _umu_umu_types__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].KEY_ENTER) {
            if (onKeyDownEnter) {
                onKeyDownEnter(value);
            }
            return false;
        }
        return true;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className + ' umu-input' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", __assign({ type: type, className: "input" }, option, { onKeyDown: onKeyDown, onChange: inputChange, value: value, onBlur: onBlur, autoFocus: autoFocus }))));
};
var FormLabel = function (props) {
    var label = props.label, children = props.children, _a = props.isRequire, isRequire = _a === void 0 ? false : _a;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["classSet"])({
                'form-label': true,
                'form-require': isRequire,
            }) }, label),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-children" }, children)));
};


/***/ }),

/***/ "./src/@myTask/components/levelBadge/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/levelBadge/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/components/levelBadge/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



var FULL_USER_LEVEL = 999;
var isFullUserLevel = function (level) {
    return parseInt(level || '0') === FULL_USER_LEVEL;
};
var getUserLevelColorScheme = function (level, isLabel) {
    level = level || '1';
    var ret = {
        primary: '#3FAA34',
        secondary: '#FFF',
        range: '1',
    };
    if (isFullUserLevel(level.toString())) {
        if (isLabel) {
            ret.primary = '#292929'; // 黑色
            ret.secondary = '#FFBD2B'; // 金色
        }
        else {
            ret.primary = '#FFBD2B'; // 金色
            ret.secondary = '#292929'; // 黑色
        }
        ret.range = 'full';
    }
    else if (level >= 21) {
        ret.primary = '#FFBD2B'; // 金色
        ret.range = '21';
    }
    else if (level >= 11) {
        ret.primary = '#3F51B5'; // 蓝色
        ret.range = '11';
    }
    return ret;
};
var displayUserLevel = function (level, isText) {
    level = level || '1';
    if (isFullUserLevel(level)) {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('满级');
    }
    return isText ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('${0}级').replace('${0}', level) : 'LV.' + level;
};
var UserLevelBadge = function (props) {
    var level = props.level;
    var userLevelColorScheme = getUserLevelColorScheme(level, true);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "user-level-badge", style: { backgroundColor: userLevelColorScheme.primary } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "user-level", style: { color: userLevelColorScheme.secondary } }, displayUserLevel(level.toString()))));
};
/* harmony default export */ __webpack_exports__["default"] = (UserLevelBadge);


/***/ }),

/***/ "./src/@myTask/components/progress/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/progress/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/progress/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rc-progress/es/index.js");



function Progress(props) {
    var percent = props.percent, className = props.className, trailWidth = props.trailWidth, strokeWidth = props.strokeWidth, strokeColor = props.strokeColor, _a = props.width, width = _a === void 0 ? 44 : _a, _b = props.height, height = _b === void 0 ? 44 : _b, children = props.children;
    var style = {
        width: width + 'px',
        height: height + 'px',
    };
    var printContent = function () {
        if (children) {
            return children;
        }
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-progress-content" }, percent + '%');
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-progress-container", style: style },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__["Circle"], { className: "learning-progress ".concat(className || ''), percent: percent || 0, trailWidth: trailWidth || 6, strokeWidth: strokeWidth || 4, strokeColor: strokeColor || '#4CAA64' }),
        printContent()));
}
/* harmony default export */ __webpack_exports__["default"] = (Progress);


/***/ }),

/***/ "./src/@myTask/components/rangPicker/datePicker.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/rangPicker/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/rangPicker/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangPicker", function() { return RangPicker; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datePicker_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/rangPicker/datePicker.scss");
/* harmony import */ var _datePicker_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_datePicker_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/components/rangPicker/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@umu/umu-util/dist/index.js");
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-date-range/dist/index.js");
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/date-fns/esm/locale/zh-CN/index.js");
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/date-fns/esm/locale/ja/index.js");
/* harmony import */ var date_fns_locale_zh_TW__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/date-fns/esm/locale/zh-TW/index.js");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@umu/umu-react-hooks/dist/index.js");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_13__);


/**
 * @description 开始-结束时间选择组件
 */














var If = common__WEBPACK_IMPORTED_MODULE_7__["components"].If;
var localeConfig = {
    locale: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_9__["default"],
    dateDisplayFormat: 'MMM d, yyyy',
};
if (Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["_lang"])('CN')) {
    localeConfig.locale = date_fns_locale_zh_CN__WEBPACK_IMPORTED_MODULE_8__["default"];
    localeConfig.dateDisplayFormat = 'yyyy-MM-dd';
}
if (Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["_lang"])('EN') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["_lang"])('EM')) {
    localeConfig.locale = date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_9__["default"];
}
if (Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["_lang"])('JP')) {
    localeConfig.locale = date_fns_locale_ja__WEBPACK_IMPORTED_MODULE_10__["default"];
}
if (Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["_lang"])('TW')) {
    localeConfig.locale = date_fns_locale_zh_TW__WEBPACK_IMPORTED_MODULE_11__["default"];
}
function RangPicker(props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false), isShow = _a[0], setShow = _a[1];
    var onDateRangeChange = props.onDateRangeChange, dateValue = props.dateValue;
    var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
    var elementSpanRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
    var DEFAULT_DATE_RANGE = [
        {
            key: 'selection',
            startDate: !!dateValue.startDate ? new Date(dateValue.startDate) : Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_5__["getTodayStart"])(),
            endDate: !!dateValue.endDate ? new Date(dateValue.endDate) : Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_5__["getTodayEnd"])(),
        },
    ];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(DEFAULT_DATE_RANGE), dateRangeTmp = _b[0], setDateRangeTmp = _b[1];
    var setDateData = function (e) {
        if (e) {
            setDateRangeTmp(e);
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
        if (dateValue) {
            setDateData(DEFAULT_DATE_RANGE);
        }
    }, [dateValue.startDate, dateValue.endDate]);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
        _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__["$document"].addEventListener('mousedown', function (e) { return handleClick(e); }, false);
    }, [isShow]);
    var handleClick = function (e) {
        if (elementRef && !!elementRef.current) {
            var divDom = elementRef.current && Object(react_dom__WEBPACK_IMPORTED_MODULE_13__["findDOMNode"])(elementRef.current);
            var res = divDom && divDom.contains(e.target);
            var spanDom = elementSpanRef.current && Object(react_dom__WEBPACK_IMPORTED_MODULE_13__["findDOMNode"])(elementSpanRef.current);
            var resSpan = spanDom && spanDom.contains(e.target);
            if (!res && !resSpan && isShow) {
                setShow(false);
            }
        }
    };
    var onDatePickerChange = function (ranges) {
        setDateRangeTmp([ranges.selection]);
    };
    var onPickerShow = function (event) {
        event.stopPropagation();
        if (!isShow) {
            setShow(true);
        }
    };
    var onConfirm = function () {
        setShow(false);
        var dateArrNew = dateRangeTmp[0];
        var start = Math.ceil(dateArrNew.startDate.valueOf());
        var end = Math.ceil(dateArrNew.endDate.valueOf());
        onDateRangeChange(start, end);
    };
    var onCancel = function () {
        setShow(false);
    };
    Object(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useDocClick"])(function () {
        onCancel();
    }, {
        excludeSelector: '.assessment-date-range-picker',
    });
    var getLocalDateByLocal = function (time, label) {
        return !!time ? Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_5__["customFormatDateTime"])(time, 'yyyy-MM-dd') : label;
    };
    var nowDate = Math.ceil(Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_5__["getTodayEnd"])().valueOf() / 1000);
    var setDisabledDay = function (date) {
        var value = Math.ceil(date.valueOf() / 1000);
        return value >= nowDate;
    };
    var onClearDate = function (event) {
        event.stopPropagation();
        onDateRangeChange(0, 0);
    };
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "mentor-task-range-picker" },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "picker-label", onClick: onPickerShow },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__["classSet"])({
                    'date-empty': !!!dateValue.startDate,
                    'date-time': true,
                }) }, getLocalDateByLocal(dateValue.startDate, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('开始日期'))),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { className: "date-span" }, "-"),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__["classSet"])({
                    'date-empty': !!!dateValue.endDate,
                    'date-time': true,
                }) }, getLocalDateByLocal(dateValue.endDate, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('结束日期'))),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { className: "date-end" },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(If, { condition: !!(dateValue.startDate || !!dateValue.endDate) },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", { className: "date-icon-clear", title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('清空'), onClick: onClearDate })),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__["classSet"])({
                        'icon-down': isShow,
                        'icon-up': true,
                    }) }))),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(If, { condition: isShow },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "date-range-picker-panel", ref: elementRef },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_date_range__WEBPACK_IMPORTED_MODULE_6__["DateRangePicker"], { className: "date-range-picker", onChange: onDatePickerChange, showSelectionPreview: false, moveRangeOnFirstSelection: false, months: 2, ranges: dateRangeTmp, disabledDay: setDisabledDay, direction: "horizontal", locale: localeConfig.locale, startDatePlaceholder: "", endDatePlaceholder: "", dateDisplayFormat: localeConfig.dateDisplayFormat, rangeColors: ['#2197F3'] }),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "footer" },
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { className: "footer-btn footer-btn-cancel", onClick: onCancel }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('取消')),
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", { className: "footer-btn footer-btn-confirm", onClick: onConfirm }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('确定')))))));
}


/***/ }),

/***/ "./src/@myTask/components/search/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/search/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myTask_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _umu_umu_design_es_components_Iconfont__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/components/Iconfont/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/components/search/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




function Search(props) {
    var _a = props.placeholder, placeholder = _a === void 0 ? '' : _a, _b = props.isClear, isClear = _b === void 0 ? true : _b, _c = props.width, width = _c === void 0 ? 500 : _c, _d = props.height, height = _d === void 0 ? 38 : _d, onChangeSearch = props.onChangeSearch;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-task-search-container", style: { width: width, height: height } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components__WEBPACK_IMPORTED_MODULE_1__["UserSearch"], { onChange: onChangeSearch, limitMax: 1, isClear: isClear, searchSource: "my_mentor_task_student", placeholder: placeholder }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-task-search-btn-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_es_components_Iconfont__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "Search", className: "icon-basic" }))));
}
/* harmony default export */ __webpack_exports__["default"] = (Search);


/***/ }),

/***/ "./src/@myTask/components/select/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/select/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__("./src/@myTask/components/select/index.scss");



var Select = function (props) {
    var defaultValue = props.defaultValue, _a = props.list, list = _a === void 0 ? [] : _a, renderOption = props.renderOption, onSelect = props.onSelect, _b = props.isAllowClear, isAllowClear = _b === void 0 ? false : _b, _c = props.placeholder, placeholder = _c === void 0 ? '' : _c, _d = props.isAllowReset, isAllowReset = _d === void 0 ? true : _d;
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue), selected = _e[0], setSelected = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), isFold = _f[0], setIsFold = _f[1];
    var selectedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var foldRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    foldRef.current = isFold;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (isAllowReset) {
            onClear();
        }
        else if (!defaultValue && !!list.length) {
            selectHandle(list[0]);
        }
    }, [props.isReset]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var selectDom = selectedRef.current;
        var setFold = function (e) {
            if (!foldRef.current || !selectDom || !selectDom.contains(e.target)) {
                setIsFold(true);
            }
            else {
                setIsFold(false);
            }
        };
        _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["$window"].addEventListener('click', setFold);
        return function () {
            _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["$window"].removeEventListener('click', setFold);
        };
    }, []);
    var selectHandle = function (v) {
        onSelect(v);
        setSelected(v.value);
    };
    var renderSelectOption = function () {
        return list.map(function (v, i) {
            var isActive = v.value === selected;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: i, title: v.label, className: "".concat(isActive ? 'active' : ''), onClick: function () { return selectHandle(v); } }, renderOption ? renderOption(v) : v.label));
        });
    };
    var getShowLabel = function () {
        var filter = list.filter(function (v) {
            return v.value === selected;
        });
        return filter[0] ? filter[0].label : '';
    };
    var onClear = function () {
        selectHandle({
            value: '',
            label: '',
        });
    };
    var renderClear = function () {
        return selected && isAllowClear ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Iconfont"], { type: "Delete2", className: "icon icon-clear", onClick: onClear })) : null;
    };
    var renderLabel = function () {
        var label = getShowLabel();
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { title: label }, label ? label : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "label-placeholder" }, placeholder));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "select-input" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: selectedRef, className: "selected" },
            renderLabel(),
            renderClear(),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Iconfont"], { type: "DropDown", className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["classSet"])({
                    'icon-down': !isFold,
                    'icon-up': true,
                }) })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "".concat(isFold ? 'hide' : '') }, renderSelectOption())));
};
/* harmony default export */ __webpack_exports__["default"] = (Select);


/***/ }),

/***/ "./src/@myTask/components/taskLMenu/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/taskLMenu/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuChild", function() { return MenuChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskMenu", function() { return TaskMenu; });
/* harmony import */ var _umu_umu_design_es_components_Iconfont__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-design/es/components/Iconfont/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/components/taskLMenu/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



var MenuChild = function (props) {
    var option = props.option, active = props.active, onClick = props.onClick;
    var _a = option.child, child = _a === void 0 ? [] : _a;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), showChild = _b[0], setShowChild = _b[1];
    var onMenuItemClick = function () {
        setShowChild(!showChild);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        var isShow = showChild;
        child.forEach(function (item) {
            if (!isShow) {
                isShow = item.key === active;
            }
        });
        setShowChild(isShow);
    }, [active]);
    var renderChild = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "menu-content", onClick: onMenuItemClick },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, option.icon ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_umu_umu_design_es_components_Iconfont__WEBPACK_IMPORTED_MODULE_0__["default"], { type: option.icon, className: "icon-basic" }) : null),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "menu-label", dangerouslySetInnerHTML: { __html: option.label.toString() } }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "icon-menu-up ".concat(showChild ? '' : 'icon-menu-down') }))),
            showChild && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", { className: "menu-child" }, child.map(function (item) {
                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { className: "menu-child-li ".concat(active === item.key ? 'active-li' : ''), key: item.key, onClick: function () { return onClick(item.key); } }, item.label));
            })))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { key: option.key, className: "aside-menu-item" }, renderChild()));
};
var TaskMenu = function (props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.list, list = _b === void 0 ? [] : _b, onClick = props.onClick, active = props.active;
    var renderMenu = function (item) {
        var child = item.child;
        var isHasChild = child && !!child.length;
        return isHasChild ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuChild, { key: item.key, option: item, active: active, onClick: onClick })) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { key: item.key, className: "aside-menu-item ".concat(item.key === active ? 'active-menu' : ''), onClick: function () { return onClick(item.key); } },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "menu-content" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "icon-basic ".concat(item.icon) })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "menu-label" }, item.label))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "task-menu ".concat(className) },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", { className: "menu-ul" }, list.map(function (item) {
            return !!!item.hideMenu ? renderMenu(item) : null;
        })),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "aside-menu-child" }, props.children)));
};


/***/ }),

/***/ "./src/@myTask/components/taskLabel/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/taskLabel/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_STATUS", function() { return TASK_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENROLL_STATUS", function() { return ENROLL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enrollStatusMap", function() { return enrollStatusMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskLabel", function() { return TaskLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskLabel", function() { return getTaskLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnrollStatus", function() { return getEnrollStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionTitle", function() { return getSessionTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _myTask_routePages_studyTask_service_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/components/taskLabel/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _myTask_routePages_studyTask_components_PrevAssignDialog_prevAssignDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/PrevAssignDialog/prevAssignDialog.tsx");
/* harmony import */ var _routePages_studyTask_components_basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.tsx");
var _a, _b;








var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_2__["Modal"].confirm;

var TASK_STATUS;
(function (TASK_STATUS) {
    TASK_STATUS[TASK_STATUS["PRE_ALLOCATED"] = 0] = "PRE_ALLOCATED";
    TASK_STATUS[TASK_STATUS["ON_TIME"] = 1] = "ON_TIME";
    TASK_STATUS[TASK_STATUS["OVERDUE_COMPLETION"] = 2] = "OVERDUE_COMPLETION";
    TASK_STATUS[TASK_STATUS["NON_LEARNING_TASKS"] = 3] = "NON_LEARNING_TASKS";
    TASK_STATUS[TASK_STATUS["OVERDUE_NOT_COMPLETED"] = 4] = "OVERDUE_NOT_COMPLETED";
    TASK_STATUS[TASK_STATUS["UNFINISHED_UNDUE"] = 5] = "UNFINISHED_UNDUE";
})(TASK_STATUS || (TASK_STATUS = {}));
var ENROLL_STATUS;
(function (ENROLL_STATUS) {
    ENROLL_STATUS[ENROLL_STATUS["APPLY_NO"] = 10] = "APPLY_NO";
    ENROLL_STATUS[ENROLL_STATUS["APPLY_PENDING_REVIEW"] = 11] = "APPLY_PENDING_REVIEW";
    ENROLL_STATUS[ENROLL_STATUS["APPLY_PASSED"] = 12] = "APPLY_PASSED";
    ENROLL_STATUS[ENROLL_STATUS["APPLY_REFUSE"] = 13] = "APPLY_REFUSE";
})(ENROLL_STATUS || (ENROLL_STATUS = {}));
var enrollStatusMap = (_a = {},
    _a[ENROLL_STATUS.APPLY_NO] = {
        label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('未报名'),
        status: TASK_STATUS.OVERDUE_NOT_COMPLETED,
    },
    _a[ENROLL_STATUS.APPLY_PENDING_REVIEW] = {
        label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('报名待审核'),
        status: TASK_STATUS.UNFINISHED_UNDUE,
    },
    _a[ENROLL_STATUS.APPLY_PASSED] = {
        label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('报名通过'),
        status: TASK_STATUS.ON_TIME,
    },
    _a[ENROLL_STATUS.APPLY_REFUSE] = {
        label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('报名拒绝'),
        status: TASK_STATUS.OVERDUE_NOT_COMPLETED,
    },
    _a);
var TASK_STATUS_DATA = (_b = {},
    _b[TASK_STATUS.PRE_ALLOCATED] = {
        tdBgCls: 'td-bg-pre-allocated',
        backgroundCls: 'bg-pre-allocated',
        icon: {
            type: 'Line',
            cls: 'pre-allocated',
        },
    },
    _b[TASK_STATUS.ON_TIME] = {
        tdBgCls: 'td-bg-on-time',
        backgroundCls: 'bg-on-time',
        icon: {
            type: 'Complete',
            cls: 'on-time',
        },
    },
    _b[TASK_STATUS.OVERDUE_COMPLETION] = {
        tdBgCls: 'td-bg-overdue-completion',
        backgroundCls: 'bg-overdue-completion',
        icon: {
            type: 'Complete',
            cls: 'overdue-completion',
        },
    },
    _b[TASK_STATUS.NON_LEARNING_TASKS] = {
        tdBgCls: 'td-bg-non-learning-tasks',
        backgroundCls: 'bg-non-learning-tasks',
        icon: {
            type: 'Complete',
            cls: 'non-learning-tasks',
        },
    },
    _b[TASK_STATUS.OVERDUE_NOT_COMPLETED] = {
        tdBgCls: 'td-bg-overdue-not-completed',
        backgroundCls: 'bg-overdue-not-completed',
        icon: {
            type: 'Line',
            cls: 'overdue-not-completed',
        },
    },
    _b[TASK_STATUS.UNFINISHED_UNDUE] = {
        tdBgCls: 'td-bg-unfinished-undue',
        backgroundCls: 'bg-unfinished-undue',
        icon: {
            type: 'Line',
            cls: 'unfinished-undue',
        },
    },
    _b);
function TaskLabel(props) {
    var _a = props.label, label = _a === void 0 ? '' : _a, _b = props.status, status = _b === void 0 ? TASK_STATUS.UNFINISHED_UNDUE : _b;
    var data = TASK_STATUS_DATA[status];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-label task-status ".concat(data.backgroundCls) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: data.icon.type, className: "icon-status ".concat(data.icon.cls) }),
        label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "label-text" }, label)));
}
var overlayStyle = {
    marginTop: '-40px',
};
var getSessionTitle = function (name, courseId, info, callBack) {
    var onDetail = function () {
        Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__["openWithNewTab"])("/course/index#/groups/".concat(courseId, "/sessions/").concat(info.id, "/view"), '_blank');
    };
    var onRevokeSessionTask = function () {
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回学习任务？'),
            centered: true,
            content: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('点击“确认撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示。'),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回'),
            onOk: function () {
                info.id &&
                    Object(_myTask_routePages_studyTask_service_index__WEBPACK_IMPORTED_MODULE_5__["revokeTask"])({
                        obj_id: info.id,
                        obj_type: '2', // 小节
                    }).then(function (res) {
                        _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_2__["SnackBar"].show({
                            message: res.status ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回小节学习任务失败！'),
                        });
                        callBack && setTimeout(callBack, 3000); // 撤回任务有延迟，因此延迟三秒进行刷新
                    });
            },
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], { placement: "bottomLeft", color: "#ffffff", overlayStyle: overlayStyle, hideArrow: true, title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "session-detail-info" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "session-name" }, name),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "session-title" }, info.title),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "session-detail-footer" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { type: "text", onClick: onDetail }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('查看')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { type: "text", onClick: onRevokeSessionTask }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回该小节任务')))) }, name));
};
var getTaskLabel = function (data, fieldName) {
    var fieldObj = data[fieldName];
    if (!fieldObj) {
        return '';
    }
    var is_task = fieldObj.is_task, is_overdue = fieldObj.is_overdue, status = fieldObj.status, _a = fieldObj.task_complete_rate, task_complete_rate = _a === void 0 ? 0 : _a;
    var isTask = !!Number(is_task);
    var isOverdue = !!Number(is_overdue);
    var isComplete = status === 2;
    var isPre = status === 3;
    if (!isTask) {
        // 非学习任务
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "td-content-container ".concat(TASK_STATUS_DATA[TASK_STATUS.NON_LEARNING_TASKS].tdBgCls) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskLabel, { label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('非学习任务'), status: TASK_STATUS.NON_LEARNING_TASKS })));
    }
    if (isPre) {
        // 预分配
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routePages_studyTask_components_basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], { direct: _routePages_studyTask_components_basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TOOLTIP_DIR"].BL, trigger: _routePages_studyTask_components_basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["ITriggerType"].HOVER, text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_PrevAssignDialog_prevAssignDialog__WEBPACK_IMPORTED_MODULE_7__["PrevAssignDialog"], { data: data, fieldObj: fieldObj }) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "td-content-container ".concat(TASK_STATUS_DATA[TASK_STATUS.PRE_ALLOCATED].tdBgCls) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskLabel, { label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('预分配'), status: TASK_STATUS.PRE_ALLOCATED }))));
    }
    if (isComplete && !isOverdue) {
        // 按时完成
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "td-content-container ".concat(TASK_STATUS_DATA[TASK_STATUS.ON_TIME].tdBgCls) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskLabel, { label: "100%", status: TASK_STATUS.ON_TIME })));
    }
    if (!isComplete && !isOverdue) {
        // 未完成，未到期
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "td-content-container ".concat(TASK_STATUS_DATA[TASK_STATUS.UNFINISHED_UNDUE].tdBgCls) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskLabel, { label: "".concat(Math.floor(task_complete_rate * 10000) / 100, "%"), status: TASK_STATUS.UNFINISHED_UNDUE })));
    }
    if (!isComplete && isOverdue) {
        // 逾期未完成
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "td-content-container ".concat(TASK_STATUS_DATA[TASK_STATUS.OVERDUE_NOT_COMPLETED].tdBgCls) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskLabel, { label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期未完成'), status: TASK_STATUS.OVERDUE_NOT_COMPLETED })));
    }
    if (isComplete && isOverdue) {
        // 逾期完成
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "td-content-container ".concat(TASK_STATUS_DATA[TASK_STATUS.OVERDUE_COMPLETION].tdBgCls) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskLabel, { label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期完成'), status: TASK_STATUS.OVERDUE_COMPLETION })));
    }
    return '';
};
var getEnrollStatus = function (enroll) {
    var data = enrollStatusMap[enroll.status];
    return enroll.status && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskLabel, { label: data.label, status: data.status });
};



/***/ }),

/***/ "./src/@myTask/components/taskLayout/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/taskLayout/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskLayout", function() { return TaskLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/taskLayout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var TaskLayout = function (props) {
    var className = props.className;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className }, props.children);
};


/***/ }),

/***/ "./src/@myTask/components/taskList/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/taskList/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskList", function() { return TaskList; });
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var common_components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/common/components/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/context/learningTask.ts");
/* harmony import */ var _myTask_interface_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/interface/index.ts");
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _myTask_service_learn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/service/learn.ts");
/* harmony import */ var _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/dataFlow/index.ts");
/* harmony import */ var common_components_taskCardSubTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/common/components/taskCardSubTitle/index.tsx");
/* harmony import */ var common_components_taskContentMsg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/common/components/taskContentMsg/index.tsx");
/* harmony import */ var common_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/common/enum.ts");
/* harmony import */ var common_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/common/util.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/@myTask/components/taskList/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_14__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















var ListLoading = common__WEBPACK_IMPORTED_MODULE_0__["components"].ListLoading, PreImg = common__WEBPACK_IMPORTED_MODULE_0__["components"].PreImg;
var EmptyList = function (props) {
    var imgSrc = props.imgSrc, label = props.label, _a = props.subLabel, subLabel = _a === void 0 ? '' : _a;
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "empty-panel" },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PreImg, null,
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PreImg, null,
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", { src: imgSrc })),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "tips" }, label),
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "sub-label" }, subLabel)))));
};
var onGoToTaskDetail = function (event, item) {
    event.stopPropagation();
    var urls = item.learn_status === common_enum__WEBPACK_IMPORTED_MODULE_11__["LEARN_STATUS"].LEARNED ? item.assign_url : item.session_url;
    if (urls !== '') {
        Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_1__["openWithNewTab"])(urls, '_blank');
    }
};
var onItemClick = function (item) {
    var url = item.assign_url;
    if (url) {
        url = Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_14__["updateUrlParameter"])(url, 'obj_id', item.group_id);
        var obj_type = item.task_type == common_enum__WEBPACK_IMPORTED_MODULE_11__["TASK_TYPE"].COURSE ? 'course' : 'program';
        url = Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_14__["updateUrlParameter"])(url, 'obj_type', obj_type);
        Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_1__["openWithNewTab"])(url, '_blank');
    }
};
var defaultCurrentPage = 1;
var TaskList = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false), isLoading = _a[0], setIsLoading = _a[1];
    var taskInfo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_4__["LearnTaskContext"]);
    var state = taskInfo.state, dispatch = taskInfo.dispatch;
    var _b = state.taskInfo, list = _b.list, pageInfo = _b.pageInfo;
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
        getListByPage(defaultCurrentPage);
    }, [state.currentStatus, state.currentSort, state.expireStatus]);
    var getContentMsg = function (item) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(common_components_taskContentMsg__WEBPACK_IMPORTED_MODULE_10__["TaskContentMsg"], { item: item, onClick: function (evt) { return onGoToTaskDetail(evt, item); } });
    };
    var getEmptyListProps = function () {
        var currentStatus = state.currentStatus, expireStatus = state.expireStatus;
        var result = _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_8__["emptyMsgMap"][currentStatus];
        return result && result.childEmpty ? result.childEmpty[expireStatus] : result;
    };
    var renderList = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return list.length > 0 ? (list.map(function (item, index) {
            var option = Object(common_components_taskCardSubTitle__WEBPACK_IMPORTED_MODULE_9__["getOption"])(item, getContentMsg);
            var style = {
                backgroundColor: Object(common_util__WEBPACK_IMPORTED_MODULE_12__["getCardColor"])(item),
            };
            return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(common_components_index__WEBPACK_IMPORTED_MODULE_2__["TaskCard"], { option: option, style: style, key: "task-list-".concat(index), onClick: function () {
                    onItemClick(item);
                }, onContentClick: function () {
                    onItemClick(item);
                } }));
        })) : (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(EmptyList, __assign({}, getEmptyListProps())));
    }, [list]);
    var getListByPage = function (page) { return __awaiter(void 0, void 0, void 0, function () {
        var params, source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    params = {
                        learn_status: state.currentStatus,
                        size: pageInfo.size,
                        page: page,
                    };
                    if (params.learn_status === _myTask_interface_index__WEBPACK_IMPORTED_MODULE_5__["TASK_STATUS"].INCOMPLETE && state.currentSort.key === _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_8__["TASK_SORT_TYPE"].DUE_TIME) {
                        params.unfinished_status = state.expireStatus;
                    }
                    params.sort_type = Object(_myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_8__["getSortByCurrentSort"])(state.currentSort);
                    return [4 /*yield*/, Object(_myTask_service_learn__WEBPACK_IMPORTED_MODULE_7__["getMyAssignmentList"])(params)];
                case 1:
                    source = _a.sent();
                    dispatch({
                        type: _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_4__["LearnTaskActionType"].UPDATE_TASK_INFO,
                        payload: {
                            list: source.list,
                            pageInfo: source.page_info,
                            count: source.data_count,
                            params: params,
                        },
                    });
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderPage = function () {
        return Number(pageInfo.total_page_num) > 1 && !isLoading ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_6__["Pagination"], { forceShow: true, currentPage: pageInfo.current_page, maxPage: Number(pageInfo.total_page_num) || 1, onPageChange: getListByPage })) : null;
    };
    var renderContent = function () {
        return isLoading ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ListLoading, null) : renderList;
    };
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "my-task-learn-list" },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "list" }, renderContent()),
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: "page-info" }, renderPage())));
};


/***/ }),

/***/ "./src/@myTask/components/taskTable/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/taskTable/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTable", function() { return TaskTable; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/components/taskTable/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _Pagination_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/components/Pagination/index.tsx");
/**
 * @description 表格
 */




var Loading = common__WEBPACK_IMPORTED_MODULE_2__["components"].Loading, CustomTable = common__WEBPACK_IMPORTED_MODULE_2__["components"].CustomTable;
var renderEmpty = function (msg) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "empty-data" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "empty-list" }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "empty-msg" }, msg)));
};
function TaskTable(props) {
    var pageInfo = props.pageInfo, loading = props.loading, list = props.list, emptyMsg = props.emptyMsg;
    var renderPlaceholder = function () {
        if (loading) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, null);
        }
        if (list.length > 0) {
            return '';
        }
        return renderEmpty(emptyMsg);
    };
    var renderPagination = function () {
        return Number(pageInfo.total_page_num) > 1 ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "render-pagination" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Pagination_index__WEBPACK_IMPORTED_MODULE_3__["Pagination"], { forceShow: true, showSizeChanger: true, currentPage: pageInfo.current_page, maxPage: Number(pageInfo.total_page_num) || 1, onPageChange: props.onPageChange }))) : null;
    };
    var renderDataTable = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CustomTable, { onColumnClick: props.onColumnClick, columns: props.columns, data: loading ? [] : list, blank: renderPlaceholder() }));
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "task-table".concat(list.length > 0 ? '' : ' empty-task-table') },
        renderDataTable(),
        renderPagination()));
}


/***/ }),

/***/ "./src/@myTask/components/taskTabs/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/taskTabs/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTabs", function() { return TaskTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/taskTabs/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");



var TaskTabs = function (props) {
    var list = props.list, onChange = props.onChange;
    // const renderTab = (item: ITabs, index: number) => {
    //     const isLast = index === list.length - 1 && list.length > 1;
    //     return (
    //         <li
    //             key={item.key}
    //             className={classSet({
    //                 'my-task-tab': true,
    //                 'active-tab': item.key === currentTab,
    //                 'tab-last': isLast,
    //             })}
    //             onClick={() => {
    //                 onChange(item.key);
    //             }}
    //         >
    //             {item.text}
    //         </li>
    //     );
    // };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_2__["Tabs"].Tabs, null, list.map(function (item, _index) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_2__["Tabs"].Tab, { key: item.key, onTabChange: function () {
                onChange(item.key);
            } }, item.text));
    }))
    // <ul className="my-task-tabs">
    //     {list.map((item, index) => {
    //         return renderTab(item, index);
    //     })}
    // </ul>
    );
};


/***/ }),

/***/ "./src/@myTask/components/userSearch/dataFlow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageData", function() { return pageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memberMap", function() { return memberMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_MAP", function() { return COLOR_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTypeMap", function() { return userTypeMap; });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/components/userSearch/interface.ts");
var _a, _b;

var COLOR_MAP = ['#ffbd2a', '#e53685', '#ff6666', '#29bebf', '#e55b36', '#0fabdf', '#bc4ca8', '#9453b6', '#05a78a'];
var pageData = {
    pageInfoDefault: {
        currentPage: 0,
        listTotalNum: 0,
        size: 100,
        totalPageNum: 1,
    },
};
var memberMap = (_a = {},
    _a[_interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_TYPE"].USER] = _interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_ASSESSMENT_TYPE"].MEMBER,
    _a[_interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_TYPE"].GROUP] = _interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_ASSESSMENT_TYPE"].GROUP,
    _a[_interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_TYPE"].DEPARTMENT] = _interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_ASSESSMENT_TYPE"].DEPART,
    _a);
var userTypeMap = (_b = {},
    _b[_interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_ASSESSMENT_TYPE"].MEMBER] = _interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_TYPE"].USER,
    _b[_interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_ASSESSMENT_TYPE"].GROUP] = _interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_TYPE"].GROUP,
    _b[_interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_ASSESSMENT_TYPE"].DEPART] = _interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_TYPE"].DEPARTMENT,
    _b);



/***/ }),

/***/ "./src/@myTask/components/userSearch/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/components/userSearch/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearch", function() { return UserSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inputSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/components/userSearch/inputSearch.tsx");
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/components/userSearch/interface.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/components/userSearch/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dataFlow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/components/userSearch/dataFlow.ts");
/* harmony import */ var _myTask_service_userSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/service/userSearch.ts");
/* harmony import */ var _umu_umu_image_handle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@umu/umu-image-handle/index.js");
/* harmony import */ var _umu_umu_image_handle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_image_handle__WEBPACK_IMPORTED_MODULE_8__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var getAvatarWord = businessCommon__WEBPACK_IMPORTED_MODULE_3__["bizComponents"].getAvatarWord;





var If = common__WEBPACK_IMPORTED_MODULE_2__["components"].If;
var IMAGE_WIDTH = 25; // 图片宽度
var UserSearch = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), selectList = _a[0], setSelectList = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setSelectList([]);
    }, [props.isClear]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setSelectList(props.selectList || []);
    }, [props.selectList]);
    var getList = function (val) { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (val === '') {
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, Object(_myTask_service_userSearch__WEBPACK_IMPORTED_MODULE_7__["searchUserList"])({
                            accounts: val,
                            search_source: props.searchSource || '',
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.map(function (item) {
                            return {
                                icon: item.avatar || '',
                                title: item.user_name || item.account || item.phone || item.email,
                                label: item.email,
                                id: item.id,
                                type: _dataFlow__WEBPACK_IMPORTED_MODULE_6__["memberMap"][item.account_type],
                            };
                        })];
            }
        });
    }); };
    var renderChildren = function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, '"' + item.title + '"' + (item.label && item.label !== '' ? '<' + item.label + '>' : ''));
    };
    var setData = function (list) {
        setSelectList(list);
        if (props.onChange) {
            var ids = [];
            for (var i = 0; i < list.length; i++) {
                ids.push(list[i].id);
            }
            props.onChange(ids, list);
        }
    };
    var getFilter = function (id) {
        var list = selectList.filter(function (_) {
            return id === _.id;
        });
        return list.length > 0;
    };
    var onSelect = function (item) {
        if (!getFilter(item.id)) {
            var pre = __spreadArray([], selectList, true);
            pre.push(item);
            setData(pre);
        }
    };
    var closeClick = function (count) {
        if (props.disabled) {
            if (props.disabledCallBack) {
                props.disabledCallBack();
            }
            return;
        }
        var pre = __spreadArray([], selectList, true);
        pre.splice(count, 1);
        setData(pre);
    };
    var getDefaultIcon = function (data) {
        var result = '';
        switch (data.type) {
            case _interface__WEBPACK_IMPORTED_MODULE_4__["MEMBER_ASSESSMENT_TYPE"].DEPART:
                result = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "avatar-word" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "icon-depart" })));
                break;
            case _interface__WEBPACK_IMPORTED_MODULE_4__["MEMBER_ASSESSMENT_TYPE"].GROUP:
                result = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "avatar-word" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "icon-group" })));
                break;
            case _interface__WEBPACK_IMPORTED_MODULE_4__["MEMBER_ASSESSMENT_TYPE"].MEMBER:
                result = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "avatar-word" }, getAvatarWord(data.title));
                break;
            default:
                break;
        }
        return result;
    };
    var getBackgroundColor = function (type, num, isHasIcon) {
        var color = _dataFlow__WEBPACK_IMPORTED_MODULE_6__["COLOR_MAP"][num % 9];
        if (isHasIcon) {
            return '';
        }
        if (type === _interface__WEBPACK_IMPORTED_MODULE_4__["MEMBER_ASSESSMENT_TYPE"].GROUP) {
            color = '#07bbd4';
        }
        if (type === _interface__WEBPACK_IMPORTED_MODULE_4__["MEMBER_ASSESSMENT_TYPE"].DEPART) {
            color = '#ffbd2c';
        }
        return color;
    };
    var onDivClick = function (event) {
        event.stopPropagation();
    };
    var renderData = function (item, num) {
        var isHasIcon = !!(item.icon && item.icon !== '');
        var cancelClick = function () {
            closeClick(num);
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "assessment-search-render-wrap", key: item.id, onClick: onDivClick },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "img", style: { backgroundColor: getBackgroundColor(item.type, num, isHasIcon) } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: isHasIcon },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: _umu_umu_image_handle__WEBPACK_IMPORTED_MODULE_8__["appendWidth"](item.icon, IMAGE_WIDTH), className: "loaded" })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: !isHasIcon },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, getDefaultIcon(item)))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "title-search" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "title-text", title: item.title }, item.title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "icon-search-close".concat(props.disabled ? '-disabled' : ''), onClick: cancelClick }))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inputSearch__WEBPACK_IMPORTED_MODULE_1__["InputSearch"], { disabled: props.disabled, placeholder: props.placeholder, getList: getList, maxCount: props.limitMax, selectList: selectList, onSelect: onSelect, renderData: renderData, renderChildren: renderChildren, className: "search-assessment-input" }));
};


/***/ }),

/***/ "./src/@myTask/components/userSearch/inputSearch.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return InputSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-react-hooks/dist/index.js");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-util/dist/index.js");
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/components/userSearch/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var If = common__WEBPACK_IMPORTED_MODULE_1__["components"].If;
var DELAY_TIME = 500;
var InputSearch = function (props) {
    var placeholder = props.placeholder, maxLength = props.maxLength, _a = props.type, type = _a === void 0 ? 'text' : _a, _b = props.className, className = _b === void 0 ? '' : _b, selectList = props.selectList, _c = props.disabled, disabled = _c === void 0 ? false : _c;
    var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var listRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), value = _d[0], setValue = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isUlShow = _e[0], setIsUlShow = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!(disabled && selectList.length > 0)), isInputShow = _f[0], setIsInputShow = _f[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var isHasSelectList = props.selectList && props.selectList.length === 0;
        if (isHasSelectList || !props.selectList) {
            setValue('');
        }
        setIsInputShow(isHasSelectList);
    }, [props.selectList]);
    var getUlList = function (data) {
        return data.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "list-table" }, data.map(function (item) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: "".concat(item.id, "-ul-li"), onClick: function () {
                    liOnClick(item);
                }, className: "children-item" }, props.renderChildren(item)));
        }))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null));
    };
    var getUlStyle = function () {
        // 获取面板显示位置及样式
        var result = '';
        if (listRef.current && inputRef.current) {
            var current = listRef.current.getBoundingClientRect();
            var inputCurrent = inputRef.current.getBoundingClientRect();
            var scrollTop = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["$document"].documentElement.scrollTop;
            var x = inputCurrent.top + inputCurrent.height + scrollTop + 1; // 加上边框宽度1
            var y = current.left;
            var width = current.width;
            result = "top: ".concat(x, "px; left: ").concat(y, "px; width: ").concat(width, "px");
        }
        return result;
    };
    var createUlByList = function (data) {
        // 创建数据显示面板
        if (listRef.current && inputRef.current) {
            var elementOld = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["$document"].getElementById('searchUlDiv');
            if (elementOld) {
                _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["$document"].body.removeChild(elementOld);
            }
            var element = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["$document"].createElement('div');
            element.id = 'searchUlDiv';
            element.className = 'search-ul-list-input';
            element.style.cssText = getUlStyle();
            react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(getUlList(data), element);
            _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["$document"].body.appendChild(element);
        }
    };
    var setUlShow = function (isShow, data) {
        if (isShow) {
            createUlByList(data || []);
        }
        else {
            var element = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["$document"].getElementById('searchUlDiv');
            if (element) {
                _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["$document"].body.removeChild(element);
            }
        }
        setIsUlShow(isShow);
    };
    var onChange = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var el, values;
        return __generator(this, function (_a) {
            el = e.currentTarget;
            if (!el) {
                return [2 /*return*/];
            }
            values = el.value;
            setValue(values);
            getList();
            return [2 /*return*/];
        });
    }); };
    var getList = Object(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useDebounce"])(function () {
        // 防止接口请求过快，加入截流函数
        if (props.getList) {
            props.getList(value).then(function (res) {
                setUlShow(true, res);
            });
        }
    }, DELAY_TIME);
    var liOnClick = function (item) {
        props.onSelect(item);
        setIsInputShow(false);
        onMouseLeave();
    };
    var onMouseLeave = function () {
        // 离开函数清空输入框的值同时隐藏面板
        setValue('');
        setUlShow(false);
    };
    var onBlur = function () {
        // 离开输入框的时候隐藏下拉面板
        setTimeout(function () {
            onMouseLeave();
        }, DELAY_TIME);
    };
    var onZoneClick = function () {
        if (!disabled) {
            // 区域点击事件的时候显示输入框同时滚动条滚动到最底端。
            setIsInputShow(true);
            setTimeout(function () {
                if (listRef.current) {
                    listRef.current.scrollTop = listRef.current.scrollHeight;
                }
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, DELAY_TIME);
        }
    };
    var onFocus = function () {
        if (listRef.current) {
            // 光标聚焦的时候，滚动条位于最左侧
            listRef.current.scrollLeft = 0;
        }
    };
    var onScrollCapture = Object(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useDebounce"])(function () {
        if (listRef.current) {
            // 滚动条滚动的时候，跳出输入框
            if (!!listRef.current.scrollLeft) {
                if (inputRef.current && !!!inputRef.current.scrollLeft && value === '') {
                    inputRef.current.blur();
                }
            }
        }
    }, DELAY_TIME);
    var onKeyDown = function (e) {
        if (disabled) {
            return;
        }
        if (!inputRef.current) {
            return;
        }
        var keyCode = e.keyCode;
        if (keyCode === _umu_umu_util__WEBPACK_IMPORTED_MODULE_3__["KEY_CODE"].KEY_ENTER) {
            if (props.getList) {
                props.getList(value).then(function (res) {
                    setUlShow(true, res);
                    if (res.length > 0) {
                        liOnClick(res[0]);
                    }
                    else {
                        onMouseLeave();
                    }
                });
            }
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "".concat(className, " umu-assessment-search-input") },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "select-list".concat(isUlShow ? ' active-input' : ''), ref: listRef, onClick: onZoneClick, onScrollCapture: onScrollCapture },
            selectList.map(function (data, index) { return props.renderData(data, index); }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: !!!props.maxCount || props.maxCount > selectList.length },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: isInputShow },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { ref: inputRef, type: type, disabled: disabled, className: "input", placeholder: selectList.length === 0 ? placeholder : '', maxLength: maxLength, onBlur: onBlur, onFocus: onFocus, onChange: onChange, onKeyDown: onKeyDown, value: value })))))));
};


/***/ }),

/***/ "./src/@myTask/components/userSearch/interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_DIR", function() { return SEARCH_DIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBER_TYPE", function() { return MEMBER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBER_ASSESSMENT_TYPE", function() { return MEMBER_ASSESSMENT_TYPE; });
var MEMBER_TYPE;
(function (MEMBER_TYPE) {
    MEMBER_TYPE["USER"] = "user";
    MEMBER_TYPE["GROUP"] = "group";
    MEMBER_TYPE["DEPARTMENT"] = "department";
})(MEMBER_TYPE || (MEMBER_TYPE = {}));
var MEMBER_ASSESSMENT_TYPE;
(function (MEMBER_ASSESSMENT_TYPE) {
    MEMBER_ASSESSMENT_TYPE[MEMBER_ASSESSMENT_TYPE["DEPART"] = 2] = "DEPART";
    MEMBER_ASSESSMENT_TYPE[MEMBER_ASSESSMENT_TYPE["GROUP"] = 1] = "GROUP";
    MEMBER_ASSESSMENT_TYPE[MEMBER_ASSESSMENT_TYPE["MEMBER"] = 0] = "MEMBER";
})(MEMBER_ASSESSMENT_TYPE || (MEMBER_ASSESSMENT_TYPE = {}));
var SEARCH_DIR;
(function (SEARCH_DIR) {
    SEARCH_DIR["LEFT"] = "left";
    SEARCH_DIR["RIGHT"] = "right";
    SEARCH_DIR["CENTER"] = "center";
    SEARCH_DIR["TOP"] = "top";
})(SEARCH_DIR || (SEARCH_DIR = {}));



/***/ }),

/***/ "./src/@myTask/context/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ACTION_TYPE", function() { return APP_ACTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var APP_ACTION_TYPE;
(function (APP_ACTION_TYPE) {
    APP_ACTION_TYPE[APP_ACTION_TYPE["UPDATE_HEARD_INFO"] = 1] = "UPDATE_HEARD_INFO";
})(APP_ACTION_TYPE || (APP_ACTION_TYPE = {}));
var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});



/***/ }),

/***/ "./src/@myTask/context/learningTask.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnTaskActionType", function() { return LearnTaskActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnTaskContext", function() { return LearnTaskContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/interface/index.ts");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/dataFlow/index.ts");
/* harmony import */ var common_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/common/enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COURSE_TYPE", function() { return common_enum__WEBPACK_IMPORTED_MODULE_4__["COURSE_TYPE"]; });






var LearnTaskActionType;
(function (LearnTaskActionType) {
    LearnTaskActionType[LearnTaskActionType["UPDATE_TASK_INFO"] = 0] = "UPDATE_TASK_INFO";
    LearnTaskActionType[LearnTaskActionType["UPDATE_CURRENT_STATUS"] = 1] = "UPDATE_CURRENT_STATUS";
})(LearnTaskActionType || (LearnTaskActionType = {}));
function initStatus() {
    // todo: 临时处理，后续需要优化，需要将 course 的 task 组件拆出来，现在是因为和我的课程-我参与的-待学习的字段名重复了
    var queryStatus = (Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["getQueryString"])('learnStatus') || _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_STATUS"].ALL);
    if (Object.values(_myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_STATUS"]).includes(queryStatus)) {
        return queryStatus;
    }
    return _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_STATUS"].ALL;
}
var status = initStatus();
var initialState = {
    currentStatus: status,
    expireStatus: _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_EXPIRED_STATUS"].EXPIRED,
    currentSort: _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_3__["currentSortMap"][status].sortData,
    taskInfo: {
        list: [],
        pageInfo: {
            current_page: 1,
            list_total_num: 0,
            total_num: 0,
            size: 20,
            total_page_num: 1,
        },
        loading: false,
    },
    count: {
        completed: 0,
        incomplete: 0,
        total: 0,
        expireUnComplete: 0,
        noExpireTimeUnComplete: 0,
        notExpireUnComplete: 0,
    },
    isLoad: true,
};
var LearnTaskContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});



/***/ }),

/***/ "./src/@myTask/context/mentorTask.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_STATUS", function() { return TASK_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorTaskActionType", function() { return MentorTaskActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorTaskContext", function() { return MentorTaskContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MentorTaskActionType;
(function (MentorTaskActionType) {
    MentorTaskActionType[MentorTaskActionType["UPDATE_TASK_INFO"] = 0] = "UPDATE_TASK_INFO";
    MentorTaskActionType[MentorTaskActionType["UPDATE_CURRENT_STATUS"] = 1] = "UPDATE_CURRENT_STATUS";
    MentorTaskActionType[MentorTaskActionType["UPDATE_SEARCH_INFO"] = 2] = "UPDATE_SEARCH_INFO";
})(MentorTaskActionType || (MentorTaskActionType = {}));
var TASK_STATUS;
(function (TASK_STATUS) {
    TASK_STATUS["ALL"] = "0";
    TASK_STATUS["COMPLETED"] = "1";
    TASK_STATUS["INCOMPLETE"] = "2";
})(TASK_STATUS || (TASK_STATUS = {}));
var getSearchInfo = function () {
    var result = {
        rangeTime: {
            startDate: 0,
            endDate: 0,
        },
        userInfo: [],
        userId: [],
    };
    return result;
};
var initialState = {
    currentStatus: TASK_STATUS.ALL,
    searchInfo: getSearchInfo(),
    taskInfo: {
        list: [],
        pageInfo: {
            current_page: 1,
            list_total_num: 0,
            total_num: 0,
            size: 20,
            total_page_num: 1,
        },
        loading: false,
    },
    count: {
        completed: 0,
        incomplete: 0,
        total: 0,
    },
};
var MentorTaskContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});



/***/ }),

/***/ "./src/@myTask/dataFlow/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuList", function() { return getMenuList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_KEY_MAP", function() { return TASK_KEY_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSortMap", function() { return currentSortMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortByCurrentSort", function() { return getSortByCurrentSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_SORT_TYPE", function() { return TASK_SORT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyMsgMap", function() { return emptyMsgMap; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/interface/index.ts");
var _a, _b, _c;



var notExpiredImg = __webpack_require__("./src/@myTask/images/not-expired.png");
var notExpiredOtherImg = __webpack_require__("./src/@myTask/images/not-expired-other.png");
var expiredImg = __webpack_require__("./src/@myTask/images/expired.png");
var expiredOtherImg = __webpack_require__("./src/@myTask/images/expired-other.png");
var noExpiredImg = __webpack_require__("./src/@myTask/images/no-expired.png");
var noExpiredOtherImg = __webpack_require__("./src/@myTask/images/no-expired-other.png");
var TASK_KEY_MAP;
(function (TASK_KEY_MAP) {
    TASK_KEY_MAP["LEARN_RECEIVED"] = "learningTaskReceived";
    TASK_KEY_MAP["LEARN_MANAGE"] = "learningTaskManage";
    TASK_KEY_MAP["MENTOR_RECEIVED"] = "mentorshipTaskReceived";
})(TASK_KEY_MAP || (TASK_KEY_MAP = {}));
// 区分站点展示数据为空的图片
var emptySystemImgArr = ['CN', 'TW', 'CO'];
var isNoEnLocal = emptySystemImgArr.indexOf(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["getCurrentSystem"])()) !== -1;
var emptyMsgMap = (_a = {},
    _a[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].ALL] = {
        // 无到期时间
        label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('暂无为你分配的学习任务'),
        imgSrc: isNoEnLocal ? notExpiredImg : notExpiredOtherImg,
    },
    _a[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].COMPLETED] = {
        label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('暂无已完成任务'),
        subLabel: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('看看其他任务吧～'),
        imgSrc: isNoEnLocal ? noExpiredImg : noExpiredOtherImg,
    },
    _a[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].INCOMPLETE] = {
        label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('暂无未完成任务'),
        imgSrc: isNoEnLocal ? noExpiredImg : noExpiredOtherImg,
        childEmpty: (_b = {},
            _b[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_EXPIRED_STATUS"].EXPIRED] = {
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('暂无已到期任务'),
                subLabel: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('看看其他任务吧～'),
                imgSrc: isNoEnLocal ? expiredImg : expiredOtherImg,
            },
            _b[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_EXPIRED_STATUS"].NOT_EXPIRED] = {
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('暂无未到期任务'),
                subLabel: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('看看其他任务吧～'),
                imgSrc: isNoEnLocal ? notExpiredImg : notExpiredOtherImg,
            },
            _b[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_EXPIRED_STATUS"].NO_EXPIRED] = {
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('暂无学习任务'),
                subLabel: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('看看其他任务吧～'),
                imgSrc: isNoEnLocal ? noExpiredImg : noExpiredOtherImg,
            },
            _b),
    },
    _a);
var TASK_SORT_TYPE;
(function (TASK_SORT_TYPE) {
    TASK_SORT_TYPE["ASSIGN_TIME"] = "0";
    TASK_SORT_TYPE["DUE_TIME"] = "1";
    TASK_SORT_TYPE["COMPLETED_TIME"] = "2";
})(TASK_SORT_TYPE || (TASK_SORT_TYPE = {}));
var currentSortMap = (_c = {},
    _c[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].ALL] = {
        sortData: {
            key: TASK_SORT_TYPE.ASSIGN_TIME,
            sort: 1,
        },
        sortList: [
            {
                key: TASK_SORT_TYPE.ASSIGN_TIME,
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('分配时间'),
                sort: 1,
            },
        ],
    },
    _c[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].INCOMPLETE] = {
        sortData: {
            key: TASK_SORT_TYPE.DUE_TIME,
            sort: 0,
        },
        sortList: [
            {
                key: TASK_SORT_TYPE.DUE_TIME,
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('到期时间'),
                sort: 0,
            },
            {
                key: TASK_SORT_TYPE.ASSIGN_TIME,
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('分配时间'),
                sort: 1,
            },
        ],
    },
    _c[_myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].COMPLETED] = {
        sortData: {
            key: TASK_SORT_TYPE.COMPLETED_TIME,
            sort: 1,
        },
        sortList: [
            {
                key: TASK_SORT_TYPE.COMPLETED_TIME,
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('完成时间'),
                sort: 1,
            },
        ],
    },
    _c);
var getMenuList = function (isShowMentor) {
    var roleMap = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_1__["onGetRole"])();
    var learnTaskChild = [
        {
            key: TASK_KEY_MAP.LEARN_RECEIVED,
            icon: '',
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('我收到的'),
        },
    ];
    if (!roleMap.isLearner) {
        learnTaskChild.push({
            key: TASK_KEY_MAP.LEARN_MANAGE,
            icon: '',
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('我管理的'),
        });
    }
    return [
        {
            key: 'learnTask',
            icon: 'Assignments',
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('学习任务'),
            hideMenu: false,
            child: learnTaskChild,
        },
        {
            key: 'mentorTask',
            icon: 'MentorshipTask',
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('带教任务_html'),
            hideMenu: isShowMentor,
            child: [
                {
                    key: TASK_KEY_MAP.MENTOR_RECEIVED,
                    icon: '',
                    label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('我收到的'),
                },
            ],
        },
    ];
};
// 排序间隔取值为2n + 1
var getSortByCurrentSort = function (sortData) {
    return 2 * Number(sortData.key) + 1 + sortData.sort;
};



/***/ }),

/***/ "./src/@myTask/images/expired-other.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/expired-other.78d8c181.png";

/***/ }),

/***/ "./src/@myTask/images/expired.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/expired.e90de9f6.png";

/***/ }),

/***/ "./src/@myTask/images/no-expired-other.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/no-expired-other.6bc2f3f0.png";

/***/ }),

/***/ "./src/@myTask/images/no-expired.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/no-expired.202265dd.png";

/***/ }),

/***/ "./src/@myTask/images/not-expired-other.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/not-expired-other.4605595a.png";

/***/ }),

/***/ "./src/@myTask/images/not-expired.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/not-expired.928e9755.png";

/***/ }),

/***/ "./src/@myTask/images/sort-active.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/sort-active.76ae5b25.png";

/***/ }),

/***/ "./src/@myTask/images/sort-custom.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/sort-custom.8240cff4.png";

/***/ }),

/***/ "./src/@myTask/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return registerMicroApp; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _a;


var UMUMagicMicro = ((_a = window['umu-magic-mirco']) === null || _a === void 0 ? void 0 : _a.UMUMagicMirco) || {};
function registerMicroApp(appName, Component) {
    var newAppName = 'myTask.' + appName;
    function renderApp(props, el) {
        // const element = Component(props);
        react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, props), el || document.querySelector('.doc-wide'));
    }
    function destroyApp(hostEl) {
        var element = hostEl || document.querySelector('.doc-wide');
        react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unmountComponentAtNode(element);
        Array.from(document.querySelectorAll(".micro-".concat(newAppName))).forEach(function (item) {
            item.remove();
        });
    }
    var ele = null;
    UMUMagicMicro.registerPage({
        name: "micro-".concat(newAppName),
        module: {
            render: function (hostEl, props) {
                ele = hostEl;
                renderApp(props, hostEl);
            },
            destroy: function (hostEl) {
                destroyApp(hostEl || ele);
            },
        },
    });
    UMUMagicMicro.sendMessage({
        type: "CONNECT:".concat(newAppName),
        msg: {
            render: function (hostEl, props) {
                ele = hostEl;
                renderApp(props, hostEl);
            },
            destroy: function (hostEl) {
                destroyApp(hostEl || ele);
            },
        },
    });
}


/***/ }),

/***/ "./src/@myTask/initUkitLang.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);

Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["registerConfig"])('learning_task/myTask');


/***/ }),

/***/ "./src/@myTask/interface/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_STATUS", function() { return TASK_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_EXPIRED_STATUS", function() { return TASK_EXPIRED_STATUS; });
var TASK_STATUS;
(function (TASK_STATUS) {
    TASK_STATUS["ALL"] = "0";
    TASK_STATUS["COMPLETED"] = "1";
    TASK_STATUS["INCOMPLETE"] = "2";
})(TASK_STATUS || (TASK_STATUS = {}));
var TASK_EXPIRED_STATUS;
(function (TASK_EXPIRED_STATUS) {
    TASK_EXPIRED_STATUS["NOT_EXPIRED"] = "1";
    TASK_EXPIRED_STATUS["EXPIRED"] = "2";
    TASK_EXPIRED_STATUS["NO_EXPIRED"] = "3";
})(TASK_EXPIRED_STATUS || (TASK_EXPIRED_STATUS = {}));



/***/ }),

/***/ "./src/@myTask/myTask.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/myTask.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTaskApp", function() { return MyTaskApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myTask_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/app.tsx");
/* harmony import */ var _myTask_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/service/index.ts");
/* harmony import */ var _umu_umu_common_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-common-header/dist/index.js");
/* harmony import */ var _umu_umu_common_header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_common_header__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/index.ts");
/* harmony import */ var _myTask_routePages_studyTask_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/index.tsx");
/* harmony import */ var es6_symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/es6-symbol/index.js");
/* harmony import */ var es6_symbol__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(es6_symbol__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var common_dist_styles_common_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/common/dist/styles/common.scss");
/* harmony import */ var common_dist_styles_common_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(common_dist_styles_common_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var businessCommon_dist_styles_businessCommon_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/businessCommon/dist/styles/businessCommon.scss");
/* harmony import */ var businessCommon_dist_styles_businessCommon_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(businessCommon_dist_styles_businessCommon_scss__WEBPACK_IMPORTED_MODULE_11__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









window.Symbol = es6_symbol__WEBPACK_IMPORTED_MODULE_8___default.a;

var Page = businessCommon__WEBPACK_IMPORTED_MODULE_9__["bizServices"].Page;


var MyTaskApp = /** @class */ (function (_super) {
    __extends(MyTaskApp, _super);
    function MyTaskApp() {
        var _this = _super.call(this, Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])()) || this;
        _this.render();
        return _this;
    }
    MyTaskApp.prototype.getInitState = function () {
        // const resourceStore = getAppData('resourceStore');
        var contextInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('contextInfo');
        var userInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('userInfo') || {};
        var creatorInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('creatorInfo');
        var isTeacherInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('isTeacherInfo');
        var teacherInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('teacherInfo');
        var state = {
            pageData: {
                userInfo: userInfo,
                creatorInfo: creatorInfo,
                isTeacherInfo: isTeacherInfo,
                contextInfo: contextInfo,
                teacherInfo: teacherInfo,
            },
        };
        return state;
    };
    MyTaskApp.prototype.render = function () {
        var store = this.getInitState();
        Object(_umu_umu_common_header__WEBPACK_IMPORTED_MODULE_4__["initHeader"])({
            userInfo: store.pageData.userInfo,
            siteHost: Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('siteHost'),
            lang: Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('Lang'),
            system: Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('SYSTEM'),
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], { basename: "/my-tasks" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_app__WEBPACK_IMPORTED_MODULE_2__["App"], { initState: {
                    userInfo: store.pageData.userInfo,
                    isTeacherInfo: store.pageData.isTeacherInfo,
                    creatorInfo: store.pageData.creatorInfo,
                    teacherInfo: store.pageData.teacherInfo,
                }, placeholder: "", placeholderAllStudent: "" })), document.querySelector('.my-task-page'));
    };
    return MyTaskApp;
}(Page));

var myTaskPc = function (props) {
    var getInitState = function () {
        var userInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('userInfo') || {};
        var creatorInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('creatorInfo');
        var isTeacherInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('isTeacherInfo');
        var teacherInfo = Object(_myTask_service_index__WEBPACK_IMPORTED_MODULE_3__["getAppData"])('teacherInfo');
        var pageData = {
            userInfo: userInfo,
            creatorInfo: creatorInfo,
            isTeacherInfo: isTeacherInfo,
            teacherInfo: teacherInfo,
        };
        return pageData;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], { basename: "/my-tasks" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_app__WEBPACK_IMPORTED_MODULE_2__["App"], __assign({}, props, { initState: __assign({}, getInitState()) }))));
};
Object(_index__WEBPACK_IMPORTED_MODULE_6__["default"])('myTaskPc', myTaskPc);
// 学习任务组件
Object(_index__WEBPACK_IMPORTED_MODULE_6__["default"])('courseStudyTaskGroup', _myTask_routePages_studyTask_index__WEBPACK_IMPORTED_MODULE_7__["CourseStudyTaskGroup"]);
Object(_index__WEBPACK_IMPORTED_MODULE_6__["default"])('courseStudyTaskGroupDetail', _myTask_routePages_studyTask_index__WEBPACK_IMPORTED_MODULE_7__["CourseStudyTaskGroupDetail"]);
Object(_index__WEBPACK_IMPORTED_MODULE_6__["default"])('programStudyTaskGroup', _myTask_routePages_studyTask_index__WEBPACK_IMPORTED_MODULE_7__["ProgramStudyTaskGroup"]);
Object(_index__WEBPACK_IMPORTED_MODULE_6__["default"])('programStudyTaskGroupDetail', _myTask_routePages_studyTask_index__WEBPACK_IMPORTED_MODULE_7__["ProgramStudyTaskGroupDetail"]);


/***/ }),

/***/ "./src/@myTask/pcAlertClose.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/reducers/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _myTask_context_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/context/global.ts");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);


function appReducer(state, action) {
    switch (action.type) {
        case _myTask_context_global__WEBPACK_IMPORTED_MODULE_0__["APP_ACTION_TYPE"].UPDATE_HEARD_INFO:
            immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                msgInfo: {
                    $set: {
                        heardInfo: state.msgInfo.heardInfo,
                    },
                },
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/@myTask/reducers/learningTask.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learnTaskReducer", function() { return learnTaskReducer; });
/* harmony import */ var _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/context/learningTask.ts");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var getCount = function (count) {
    return {
        completed: count.complete_num,
        incomplete: count.uncomplete_num,
        total: count.total_num,
        expireUnComplete: count.expire_uncomplete_num,
        noExpireTimeUnComplete: count.no_expire_time_uncomplete_num,
        notExpireUnComplete: count.not_expire_uncomplete_num,
    };
};
var learnTaskReducer = function (state, action) {
    var count = action.payload.count;
    switch (action.type) {
        case _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_0__["LearnTaskActionType"].UPDATE_CURRENT_STATUS:
            return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                $set: __assign(__assign({}, state), action.payload),
            });
        case _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_0__["LearnTaskActionType"].UPDATE_TASK_INFO:
            return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                taskInfo: {
                    $set: {
                        list: action.payload.list,
                        pageInfo: action.payload.pageInfo,
                        loading: false,
                    },
                },
                isLoad: {
                    $set: false,
                },
                count: {
                    $set: getCount(count),
                },
            });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/@myTask/reducers/mentorTask.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mentorTaskReducer", function() { return mentorTaskReducer; });
/* harmony import */ var _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/context/mentorTask.ts");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var getCount = function (count) {
    return {
        completed: count.complete_num,
        incomplete: count.uncomplete_num,
        total: count.total_num,
    };
};
var mentorTaskReducer = function (state, action) {
    var count = action.payload.count;
    switch (action.type) {
        case _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_0__["MentorTaskActionType"].UPDATE_SEARCH_INFO:
            state.searchInfo = action.payload.searchInfo;
            return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                $set: __assign({}, state),
            });
        case _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_0__["MentorTaskActionType"].UPDATE_CURRENT_STATUS:
            state.currentStatus = action.payload.currentStatus;
            return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                $set: __assign({}, state),
            });
        case _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_0__["MentorTaskActionType"].UPDATE_TASK_INFO:
            return immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state, {
                taskInfo: {
                    $set: {
                        list: action.payload.list,
                        pageInfo: action.payload.pageInfo,
                        loading: false,
                    },
                },
                count: {
                    $set: getCount(count),
                },
                searchInfo: {
                    $set: action.payload.searchInfo,
                },
            });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/@myTask/routePages/@learningManage/components/manageFilter/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@learningManage/components/manageFilter/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@learningManage/components/manageFilter/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _umu_umu_design_es_components_Iconfont__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-design/es/components/Iconfont/index.js");






function ManageFilter(props) {
    var onDateRangeChange = props.onDateRangeChange, onChangeSortType = props.onChangeSortType, onChangeSortField = props.onChangeSortField, onDownLoadData = props.onDownLoadData, searchInfo = props.searchInfo, total = props.total, rangeTime = props.rangeTime;
    var optionsList = [
        {
            value: 1,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('最后分配时间'),
        },
        {
            value: 2,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('学员完成率'),
        },
        {
            value: 3,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('已完成'),
        },
        {
            value: 4,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('未完成'),
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-form" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-allocatetime" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-allocatetime-label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('分配时间')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_2__["RangPicker"], { onDateRangeChange: onDateRangeChange, dateValue: rangeTime })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-sort-select" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-sort-select-label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('排序')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_2__["Select"], { list: optionsList, defaultValue: searchInfo.sort_field, isAllowReset: false, isReset: true, onSelect: function (data) { return onChangeSortField(data); } })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-sort-operation", onClick: onChangeSortType }, searchInfo.sort_type === 1 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_es_components_Iconfont__WEBPACK_IMPORTED_MODULE_4__["default"], { type: "SortUP", className: "icon-sort icon-sortUp" })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_es_components_Iconfont__WEBPACK_IMPORTED_MODULE_4__["default"], { type: "SortDown", className: "icon-sort icon-sortDown" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-operation" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-total" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('共 {$0{0= 条,1= 条}}', total)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-filter-btn", onClick: function () { return onDownLoadData(); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('下载表格')))));
}
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ManageFilter));


/***/ }),

/***/ "./src/@myTask/routePages/@learningManage/components/manageSearch/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@learningManage/components/manageSearch/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@learningManage/components/manageSearch/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myTask_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/components/index.ts");



function ManageSearch(props) {
    var placeholder = props.placeholder, onChangeSearch = props.onChangeSearch, onSearch = props.onSearch;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-search-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components__WEBPACK_IMPORTED_MODULE_2__["FuzzySearch"], { onChangeSearch: onChangeSearch, onSearch: onSearch, option: { placeholder: placeholder } })));
}
/* harmony default export */ __webpack_exports__["default"] = (ManageSearch);


/***/ }),

/***/ "./src/@myTask/routePages/@learningManage/components/manageTable/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@learningManage/components/manageTable/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@learningManage/components/manageTable/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_7__);








var If = common__WEBPACK_IMPORTED_MODULE_2__["components"].If;
var /*FixedDirection,*/ TextAlign = common__WEBPACK_IMPORTED_MODULE_2__["components"].TextAlign;
var getColumnsName = function (title) {
    if (Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["isLang"])('cn') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["isLang"])('tw') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["isLang"])('ko')) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "columns-span" }, title);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { title: title, placement: "bottom", getPopupContainer: function () {
            return (document.getElementById('learning-manage-table-container') || null);
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "columns-span" }, title)));
};
function ManageTable(props) {
    var list = props.list, pageInfo = props.pageInfo, onChangePage = props.onChangePage, isLoading = props.isLoading, onTaskNameClick = props.onTaskNameClick;
    var handleTaskClick = function (item) {
        onTaskNameClick(item);
    };
    var renderDesc = function (item) {
        var obj_type = item.obj_type;
        var isCourse = obj_type === 1;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_7__["classSet"])({
                    'radio-label': true,
                    'course-label': isCourse,
                    'program-label': !isCourse,
                }) }, isCourse ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('课程') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('学习项目')),
            !!Number(item.session_num) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "radio-static" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('{$0{0=个小节,1=个小节}}', item.session_num))),
            !!Number(item.module_num) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "radio-static" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('{$0{0=个阶段,1=个阶段}}', item.module_num))),
            !!Number(item.group_num) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "radio-static" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('{$0{0=个课程,1=个课程}}', item.group_num)))));
    };
    var columns = [
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('任务名称')),
            dataIndex: 'task_name',
            className: 'data-cell z-index-2',
            width: '340px',
            textAlign: TextAlign.left,
            render: function (item) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-manage-table-cell" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-manage-table-cell-name-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-manage-table-cell-name", onClick: function () {
                                handleTaskClick(item);
                            } }, item.task_name)),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-manage-table-cell-desc" }, renderDesc(item))));
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('学员完成率')),
            dataIndex: 'student_complete_rate',
            className: 'data-cell progress',
            textAlign: TextAlign.center,
            render: function (item) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_5__["Progress"], { percent: Math.round(item.student_complete_rate * 10000) / 100 });
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('分配人数')),
            dataIndex: 'module_num',
            className: 'data-cell',
            textAlign: TextAlign.right,
            render: function (items) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, items.assign_student_num || '0');
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('已完成')),
            dataIndex: 'complete_student_num',
            className: 'data-cell',
            textAlign: TextAlign.right,
            render: function (items) {
                return items.complete_student_num || '0';
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('未完成')),
            dataIndex: 'uncomplete_student_num',
            className: 'data-cell',
            textAlign: TextAlign.right,
            render: function (items) {
                return items.uncomplete_student_num || '0';
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('最后分配时间')),
            dataIndex: 'last_assign_time',
            className: 'data-cell',
            textAlign: TextAlign.left,
            width: '200px',
            render: function (items) {
                var _a;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "last-assign-time-cell" }, ((_a = items === null || items === void 0 ? void 0 : items.operator) === null || _a === void 0 ? void 0 : _a.user_name) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "last-assign-time-cell-time" }, Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_6__["getTime"])(items.operator.last_assign_time || 0)),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "last-assign-time-cell-user" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["isLang"])('en') },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                                'Assign by',
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, items.operator.user_name))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["isLang"])('jp') },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                                '割り当て者：',
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, items.operator.user_name))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: !Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["isLang"])('en') && !Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["isLang"])('jp') },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, items.operator.user_name),
                                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('分配'))))))));
            },
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-table-container", id: "learning-manage-table-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_5__["TaskTable"], { columns: columns, pageInfo: pageInfo, loading: isLoading, list: list, emptyMsg: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_3__["lang"])('暂无任务记录数据'), onPageChange: onChangePage })));
}
/* harmony default export */ __webpack_exports__["default"] = (ManageTable);


/***/ }),

/***/ "./src/@myTask/routePages/@learningManage/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@learningManage/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_PAGE", function() { return CURRENT_PAGE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@learningManage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_manageTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@learningManage/components/manageTable/index.tsx");
/* harmony import */ var _components_manageFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@learningManage/components/manageFilter/index.tsx");
/* harmony import */ var _components_manageSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@learningManage/components/manageSearch/index.tsx");
/* harmony import */ var _myTask_service_manage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/service/manage.ts");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _studyTask_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/index.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var DEFAULT_TIME_RANGE = 24 * 60 * 60 - 1;
var downloadFileByOpenWindow = businessCommon__WEBPACK_IMPORTED_MODULE_6__["bizServices"].downloadFileByOpenWindow;
var CURRENT_PAGE;
(function (CURRENT_PAGE) {
    CURRENT_PAGE[CURRENT_PAGE["TASK_LIST"] = 0] = "TASK_LIST";
    CURRENT_PAGE[CURRENT_PAGE["TASK_INFO"] = 1] = "TASK_INFO";
})(CURRENT_PAGE || (CURRENT_PAGE = {}));
function LearningManage(props) {
    var _this = this;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), list = _a[0], setList = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), page = _b[0], setPage = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        list_total_num: 0,
        total_page_num: 0,
        current_page: 1,
        size: 20,
    }), pageInfo = _c[0], setPageInfo = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), keyword = _e[0], setKeyword = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        startDate: 0,
        endDate: 0,
    }), rangeTime = _f[0], setRangeTime = _f[1];
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        sort_field: 1,
        sort_type: 2,
    }), searchInfo = _g[0], setSearchInfo = _g[1];
    var resetPageInfo = function () {
        setPageInfo({
            list_total_num: 0,
            total_page_num: 0,
            current_page: 1,
            size: 20,
        });
    };
    var getList = function () { return __awaiter(_this, void 0, void 0, function () {
        var startTime, endTime, params, _a, page_info, list_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsLoading(true);
                    resetPageInfo();
                    setList([]);
                    startTime = Math.ceil((rangeTime.startDate || 0).valueOf() / 1000);
                    endTime = rangeTime.endDate
                        ? Math.ceil((rangeTime.endDate || 0).valueOf() / 1000 + DEFAULT_TIME_RANGE)
                        : 0;
                    params = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__["filterParams"])(searchInfo, {
                        assign_start_ts: startTime,
                        assign_stop_ts: endTime,
                        keyword: keyword,
                        page: pageInfo.current_page,
                        size: pageInfo.size,
                    });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, Object(_myTask_service_manage__WEBPACK_IMPORTED_MODULE_5__["getManageList"])(params)];
                case 2:
                    _a = _b.sent(), page_info = _a.page_info, list_1 = _a.list;
                    setList(list_1);
                    setPageInfo(page_info);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var onSearch = function () {
        getList();
    };
    var onChangePage = function (page) {
        setPage(page);
        pageInfo.current_page = page;
        setPageInfo(__assign({}, pageInfo));
    };
    var onChangeSearch = function (data) {
        setKeyword(data);
        resetPageInfo();
    };
    var onDateRangeChange = function (start, end) {
        rangeTime.startDate = start;
        rangeTime.endDate = end;
        resetPageInfo();
        setRangeTime(__assign({}, rangeTime));
    };
    var onChangeSortType = function () {
        searchInfo.sort_type = searchInfo.sort_type === 1 ? 2 : 1;
        resetPageInfo();
        setSearchInfo(__assign({}, searchInfo));
    };
    var onChangeSortField = function (data) {
        searchInfo.sort_field = data.value;
        resetPageInfo();
        setSearchInfo(__assign({}, searchInfo));
    };
    var onDownLoadData = function () {
        var startTime = Math.ceil((rangeTime.startDate || 0).valueOf() / 1000);
        var endTime = rangeTime.endDate
            ? Math.ceil((rangeTime.endDate || 0).valueOf() / 1000 + DEFAULT_TIME_RANGE)
            : 0;
        var params = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__["filterParams"])(searchInfo, {
            assign_start_ts: startTime,
            assign_stop_ts: endTime,
            keyword: keyword,
        });
        downloadFileByOpenWindow('MyManageTaskList', JSON.stringify(__assign({}, params)));
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        getList();
    }, [rangeTime, searchInfo, page]);
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(CURRENT_PAGE.TASK_LIST), currentPage = _h[0], setCurrentPage = _h[1];
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), currentTask = _j[0], setCurrentTask = _j[1];
    var onTaskNameClick = function (item) {
        setCurrentTask(item);
        setCurrentPage(CURRENT_PAGE.TASK_INFO);
    };
    var onPageChange = function (route) {
        setCurrentPage(route);
    };
    var onNotification = function (data) {
        props.communicationCallback && props.communicationCallback('notification', data);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        currentPage === CURRENT_PAGE.TASK_LIST ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learning-manage-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_manageSearch__WEBPACK_IMPORTED_MODULE_4__["default"], { onSearch: onSearch, onChangeSearch: onChangeSearch, placeholder: Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__["getSearchPlaceholder"])() }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_manageFilter__WEBPACK_IMPORTED_MODULE_3__["default"], { rangeTime: rangeTime, searchInfo: searchInfo, total: pageInfo.list_total_num, onDateRangeChange: onDateRangeChange, onChangeSortType: onChangeSortType, onDownLoadData: onDownLoadData, onChangeSortField: onChangeSortField }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_manageTable__WEBPACK_IMPORTED_MODULE_2__["default"], { list: list, onChangePage: onChangePage, isLoading: isLoading, pageInfo: pageInfo, onTaskNameClick: onTaskNameClick }))) : null,
        currentPage === CURRENT_PAGE.TASK_INFO && currentTask !== null ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_studyTask_index__WEBPACK_IMPORTED_MODULE_8__["MyTaskStudyTaskDetail"], { data: currentTask, isShowNotification: true, placeholder: props.placeholder, placeholderAllStudent: props.placeholderAllStudent, onNotification: onNotification, onPageChange: onPageChange, communicationCallback: props.communicationCallback })) : null));
}
/* harmony default export */ __webpack_exports__["default"] = (LearningManage);


/***/ }),

/***/ "./src/@myTask/routePages/@learningTask/dataFlow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLearnTabsList", function() { return getLearnTabsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchParams", function() { return updateSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInCompleteTabsList", function() { return getInCompleteTabsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpireStatus", function() { return getExpireStatus; });
/* harmony import */ var _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/context/learningTask.ts");
/* harmony import */ var _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/interface/index.ts");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var getInCompleteTabsList = function (data) {
    return [
        {
            value: _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_EXPIRED_STATUS"].NOT_EXPIRED,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('未到期(${0})').replace('${0}', String(data.notExpireUnComplete)),
        },
        {
            value: _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_EXPIRED_STATUS"].EXPIRED,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('已到期(${0})').replace('${0}', String(data.expireUnComplete)),
        },
        {
            value: _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_EXPIRED_STATUS"].NO_EXPIRED,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('无到期时间(${0})').replace('${0}', String(data.noExpireTimeUnComplete)),
        },
    ];
};
var getLearnTabsList = function (data) {
    return [
        {
            key: '0',
            text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('所有(${0})').replace('(${0})', " ".concat(String(data.total))),
        },
        {
            key: '2',
            text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('未完成(${0})').replace('(${0})', " ".concat(String(data.incomplete))),
        },
        {
            key: '1',
            text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('已完成(${0})').replace('(${0})', " ".concat(String(data.completed))),
        },
    ];
};
var updateSearchParams = function (dispatch, params) {
    dispatch({
        type: _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_0__["LearnTaskActionType"].UPDATE_CURRENT_STATUS,
        payload: __assign(__assign({}, params), { isLoad: true }),
    });
};
var getExpireStatus = function (data) {
    if (data.notExpireUnComplete) {
        return _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_EXPIRED_STATUS"].NOT_EXPIRED;
    }
    if (data.expireUnComplete) {
        return _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_EXPIRED_STATUS"].EXPIRED;
    }
    if (data.noExpireTimeUnComplete) {
        return _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_EXPIRED_STATUS"].NO_EXPIRED;
    }
    return _myTask_interface_index__WEBPACK_IMPORTED_MODULE_1__["TASK_EXPIRED_STATUS"].NOT_EXPIRED;
};



/***/ }),

/***/ "./src/@myTask/routePages/@learningTask/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@learningTask/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningTask", function() { return LearningTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortItem", function() { return SortItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/interface/index.ts");
/* harmony import */ var _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/dataFlow/index.ts");
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _myTask_reducers_learningTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/reducers/learningTask.ts");
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _myTask_routePages_learningTask_dataFlow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@learningTask/dataFlow.ts");
/* harmony import */ var _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/context/learningTask.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@learningTask/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};











var If = common__WEBPACK_IMPORTED_MODULE_6__["components"].If;
var sortCustomImg = __webpack_require__("./src/@myTask/images/sort-custom.png");
var sortActiveImg = __webpack_require__("./src/@myTask/images/sort-active.png");
var SortItem = function (props) {
    var isSelect = props.isSelect, options = props.options, selectSort = props.selectSort, onClick = props.onClick;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__["classSet"])({
            'sort-active': isSelect,
            'sort-type': isSelect ? !selectSort : !options.sort,
        }), onClick: function () {
            onClick(options);
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, options.label),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { title: "sortActiveImg", src: isSelect ? sortActiveImg : sortCustomImg })));
};
var LearningTask = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_myTask_reducers_learningTask__WEBPACK_IMPORTED_MODULE_5__["learnTaskReducer"], __assign({}, _myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_8__["initialState"])), state = _a[0], dispatch = _a[1];
    // 当前排序字段值
    var onTabsChange = function (tab) {
        var status = tab;
        if (status === state.currentStatus || state.isLoad) {
            return;
        }
        Object(_myTask_routePages_learningTask_dataFlow__WEBPACK_IMPORTED_MODULE_7__["updateSearchParams"])(dispatch, {
            currentStatus: status,
            currentSort: _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_3__["currentSortMap"][status].sortData,
            expireStatus: Object(_myTask_routePages_learningTask_dataFlow__WEBPACK_IMPORTED_MODULE_7__["getExpireStatus"])(state.count),
        });
    };
    var onSortTabsChange = function (_e, _index, item) {
        if (state.isLoad) {
            return;
        }
        Object(_myTask_routePages_learningTask_dataFlow__WEBPACK_IMPORTED_MODULE_7__["updateSearchParams"])(dispatch, {
            expireStatus: item.value,
        });
    };
    var renderTabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_4__["TaskTabs"], { list: Object(_myTask_routePages_learningTask_dataFlow__WEBPACK_IMPORTED_MODULE_7__["getLearnTabsList"])(state.count), currentTab: state.currentStatus, onChange: onTabsChange }));
    }, [state.count, state.currentStatus]);
    var onSortClick = function (item) {
        if (state.isLoad) {
            return;
        }
        Object(_myTask_routePages_learningTask_dataFlow__WEBPACK_IMPORTED_MODULE_7__["updateSearchParams"])(dispatch, {
            currentSort: {
                key: item.key,
                sort: item.key === state.currentSort.key ? (state.currentSort.sort ? 0 : 1) : item.sort,
            },
        });
    };
    var renderSort = function (list) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "task-sort" }, list.map(function (item) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SortItem, { key: "sort-".concat(item.key), isSelect: state.currentSort.key === item.key, options: item, selectSort: state.currentSort.sort, onClick: onSortClick }));
        })));
    };
    var renderFilterContent = function () {
        var sortList = _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_3__["currentSortMap"][state.currentStatus].sortList;
        switch (state.currentStatus) {
            case _myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].ALL:
                return state.count.total > 0 ? renderSort(sortList) : null;
            case _myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].INCOMPLETE:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "in-complete-tabs" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: state.currentSort.key === _myTask_dataFlow_index__WEBPACK_IMPORTED_MODULE_3__["TASK_SORT_TYPE"].DUE_TIME && state.count.incomplete > 0 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_10__["RadioGroupTabs"], { items: Object(_myTask_routePages_learningTask_dataFlow__WEBPACK_IMPORTED_MODULE_7__["getInCompleteTabsList"])(state.count), onClick: onSortTabsChange, defaultSelected: state.expireStatus })),
                    renderSort(sortList)));
            case _myTask_interface_index__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].COMPLETED:
                return renderSort(sortList);
            default:
                return null;
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_context_learningTask__WEBPACK_IMPORTED_MODULE_8__["LearnTaskContext"].Provider, { value: {
            state: state,
            dispatch: dispatch,
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learn-task-heard" }, renderTabs),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "learn-task-main" },
                renderFilterContent(),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_4__["TaskList"], null)))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@mentorshipTask/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mentorToolBar_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/routePages/@mentorshipTask/components/mentorToolBar/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MentorToolBar", function() { return _mentorToolBar_index__WEBPACK_IMPORTED_MODULE_0__["MentorToolBar"]; });

/* harmony import */ var _mentorTable_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@mentorshipTask/components/mentorTable/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MentorTable", function() { return _mentorTable_index__WEBPACK_IMPORTED_MODULE_1__["MentorTable"]; });






/***/ }),

/***/ "./src/@myTask/routePages/@mentorshipTask/components/mentorTable/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@mentorshipTask/components/mentorTable/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorTable", function() { return MentorTable; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@mentorshipTask/components/mentorTable/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");







var /*FixedDirection,*/ TextAlign = common__WEBPACK_IMPORTED_MODULE_3__["components"].TextAlign;
var onGoToTaskDetail = function (url) {
    if (url !== '') {
        Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__["openWithNewTab"])(url, '_blank');
    }
};
var getColumnsName = function (title) {
    if (Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["isLang"])('cn') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["isLang"])('tw') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["isLang"])('ko')) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "columns-span" }, title);
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], { title: title, placement: "bottom", getPopupContainer: function () { return (document.getElementById('ojt-mentor-table') || null); } },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "columns-span" }, title)));
};
var MentorTable = function (props) {
    var list = props.list, pageInfo = props.pageInfo, onChangePage = props.onChangePage, isLoading = props.isLoading;
    var columns = [
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('学员姓名')),
            dataIndex: 'student_name',
            className: 'data-cell',
            width: '200px',
            // fixed: FixedDirection.left,
            render: function (item) {
                return item.trainee_info.user_name;
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('课程名称')),
            dataIndex: 'title',
            className: 'data-cell task-cell',
            render: function (item) {
                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "mentor-look", onClick: function () {
                        if (item.group_url && item.group_url !== '') {
                            onGoToTaskDetail(item.group_url);
                        }
                    } }, item.title));
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('首次分配时间')),
            dataIndex: 'assign_time',
            className: 'data-cell task-cell task-cell-time',
            render: function (items) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__["getTime"])(items.assign_time || 0) || '');
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('带教任务总数')),
            dataIndex: 'total_task_count',
            className: 'data-cell task-cell',
            textAlign: TextAlign.right,
            render: function (items) {
                return items.total_task_count || '0';
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('学员已触发')),
            dataIndex: 'triggered_task_count',
            className: 'data-cell task-cell',
            textAlign: TextAlign.right,
            render: function (items) {
                return items.triggered_task_count || '0';
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('带教已完成')),
            dataIndex: 'finish_task_count',
            className: 'data-cell task-cell',
            textAlign: TextAlign.right,
            render: function (items) {
                return items.finish_task_count || '0';
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('带教任务完成时间')),
            dataIndex: 'finish_time',
            className: 'data-cell task-cell task-cell-time',
            render: function (items) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__["getTime"])(items.finish_time || 0) || '');
            },
        },
        {
            name: getColumnsName(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('操作')),
            dataIndex: '',
            // fixed: FixedDirection.right,
            width: '200px',
            className: 'opera data-cell',
            render: function (item) {
                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "mentor-look", onClick: function () {
                        onGoToTaskDetail(item.assign_url);
                    } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('查看')));
            },
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "task-mentor-table", id: "ojt-mentor-table" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_2__["TaskTable"], { columns: columns, pageInfo: pageInfo, loading: isLoading, list: list, emptyMsg: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('暂无任务记录数据'), onPageChange: onChangePage })));
};


/***/ }),

/***/ "./src/@myTask/routePages/@mentorshipTask/components/mentorToolBar/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@mentorshipTask/components/mentorToolBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorToolBar", function() { return MentorToolBar; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@mentorshipTask/components/mentorToolBar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var MentorToolBar = function (props) {
    var className = props.className, defaultValue = props.defaultValue;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(__assign({}, defaultValue)), searchInfo = _a[0], setSearchInfo = _a[1];
    var onDateRangeChange = function (start, end) {
        var newSearchInfo = __assign(__assign({}, searchInfo), { rangeTime: {
                startDate: start,
                endDate: end,
            } });
        onSearch(newSearchInfo);
    };
    var onSearch = function (info) {
        props.onSearch && props.onSearch(info);
        setSearchInfo(info);
    };
    var searchSubjectIdOnChange = function (res, list) {
        if (list) {
            searchInfo.userInfo = list;
        }
        else {
            searchInfo.userId = res;
        }
        setSearchInfo(__assign({}, searchInfo));
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "".concat(className, " task-detail-operate-btn") },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "mentor-task-grant-detail" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_3__["UserSearch"], { onChange: searchSubjectIdOnChange, limitMax: 1, searchSource: "my_mentor_task_student", placeholder: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('学员姓名') }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "grant-detail-search", onClick: function () { return onSearch(searchInfo); } },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Search", className: "icon-search" }))),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "operate-picker-range" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "operate-label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('首次分配时间')),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_3__["RangPicker"], { onDateRangeChange: onDateRangeChange, dateValue: searchInfo.rangeTime }))));
};


/***/ }),

/***/ "./src/@myTask/routePages/@mentorshipTask/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@mentorshipTask/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorshipTask", function() { return MentorshipTask; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/context/mentorTask.ts");
/* harmony import */ var _myTask_reducers_mentorTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/reducers/mentorTask.ts");
/* harmony import */ var _myTask_routePages_mentorshipTask_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@mentorshipTask/components/index.ts");
/* harmony import */ var _myTask_service_mentor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/service/mentor.ts");
/* harmony import */ var _myTask_components_userSearch_dataFlow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/components/userSearch/dataFlow.ts");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@mentorshipTask/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var DEFAULT_TIME_RANGE = 24 * 60 * 60 - 1;
var MentorshipTask = function () {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_myTask_reducers_mentorTask__WEBPACK_IMPORTED_MODULE_3__["mentorTaskReducer"], __assign({}, _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_2__["initialState"])), state = _a[0], dispatch = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true), isLoading = _b[0], setIsLoading = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        onChangePage(1);
    }, []);
    var onTabsChange = function (_e, _index, item) {
        var status = item.value;
        if (status === state.currentStatus) {
            return;
        }
        state.currentStatus = status;
        dispatch({
            type: _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_2__["MentorTaskActionType"].UPDATE_CURRENT_STATUS,
            payload: {
                currentStatus: status,
            },
        });
        onChangePage(1);
    };
    var onSearch = function (data) {
        state.searchInfo = data;
        var startTime = Math.ceil((data.rangeTime.startDate || 0).valueOf() / 1000);
        var endTime = !!data.rangeTime.endDate
            ? Math.ceil((data.rangeTime.endDate || 0).valueOf() / 1000 + DEFAULT_TIME_RANGE)
            : 0;
        var accounts = data.userInfo.map(function (item) {
            return {
                account_type: _myTask_components_userSearch_dataFlow__WEBPACK_IMPORTED_MODULE_6__["userTypeMap"][item.type],
                umu_id: item.id,
            };
        });
        getList({
            complete_status: state.currentStatus,
            accounts: JSON.stringify(accounts),
            assign_start: startTime,
            assign_end: endTime,
            page: state.taskInfo.pageInfo.current_page,
            size: state.taskInfo.pageInfo.size,
        }, data);
    };
    var onChangePage = function (page) {
        var rangeTime = state.searchInfo.rangeTime;
        var startTime = Math.ceil((state.searchInfo.rangeTime.startDate || 0).valueOf() / 1000);
        var endTime = !!rangeTime.endDate
            ? Math.ceil((rangeTime.endDate || 0).valueOf() / 1000 + DEFAULT_TIME_RANGE)
            : 0;
        var accounts = state.searchInfo.userInfo.map(function (item) {
            return {
                account_type: _myTask_components_userSearch_dataFlow__WEBPACK_IMPORTED_MODULE_6__["userTypeMap"][item.type],
                umu_id: item.id,
            };
        });
        getList({
            complete_status: state.currentStatus,
            accounts: JSON.stringify(accounts),
            assign_start: startTime,
            assign_end: endTime,
            page: page,
            size: state.taskInfo.pageInfo.size,
        }, state.searchInfo);
    };
    var getList = function (params, searchInfo) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    return [4 /*yield*/, Object(_myTask_service_mentor__WEBPACK_IMPORTED_MODULE_5__["getMentorList"])(params)];
                case 1:
                    data = _a.sent();
                    dispatch({
                        type: _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_2__["MentorTaskActionType"].UPDATE_TASK_INFO,
                        payload: {
                            list: data.list,
                            pageInfo: data.page_info,
                            count: data.data_count,
                            searchInfo: searchInfo,
                        },
                    });
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderTabs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
        var list = [
            {
                value: '0',
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('全部(${0})').replace('${0}', String(state.count.total || 0)),
            },
            {
                value: '2',
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('未完成(${0})').replace('${0}', String(state.count.incomplete || 0)),
            },
            {
                value: '1',
                label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('已完成(${0})').replace('${0}', String(state.count.completed || 0)),
            },
        ];
        // return <TaskTabs list={list} currentTab={state.currentStatus} onChange={onTabsChange} />;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["RadioGroupTabs"], { items: list, onClick: onTabsChange, defaultSelected: state.currentStatus }));
    }, [state.count, state.currentStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_2__["MentorTaskContext"].Provider, { value: {
            state: state,
            dispatch: dispatch,
        } },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "mentor-ship-task-main" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_myTask_routePages_mentorshipTask_components_index__WEBPACK_IMPORTED_MODULE_4__["MentorToolBar"], { defaultValue: state.searchInfo, onSearch: onSearch, className: "my-mentor-tool-bar" }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "mentor-tabs mentorship-learning-task-tabs" },
                renderTabs,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('共 {$0{0= 条,1= 条}}', state.taskInfo.pageInfo.list_total_num))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_myTask_routePages_mentorshipTask_components_index__WEBPACK_IMPORTED_MODULE_4__["MentorTable"], { list: state.taskInfo.list, onChangePage: onChangePage, isLoading: isLoading, pageInfo: state.taskInfo.pageInfo }))));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/Checkbox/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/Checkbox/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_CHECK_TYPE", function() { return CHECKBOX_CHECK_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_checkboxNormalIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/images/checkboxNormalIcon.png");
/* harmony import */ var _images_checkboxNormalIcon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_checkboxNormalIcon_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_CheckBoxIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/images/CheckBoxIcon.png");
/* harmony import */ var _images_CheckBoxIcon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_CheckBoxIcon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_CheckUnknownIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/images/CheckUnknownIcon.png");
/* harmony import */ var _images_CheckUnknownIcon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_CheckUnknownIcon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_CheckUnknownIcon2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/images/CheckUnknownIcon2.png");
/* harmony import */ var _images_CheckUnknownIcon2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_CheckUnknownIcon2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Checkbox/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);







var CHECKBOX_CHECK_TYPE;
(function (CHECKBOX_CHECK_TYPE) {
    CHECKBOX_CHECK_TYPE[CHECKBOX_CHECK_TYPE["UN_CHECK"] = 0] = "UN_CHECK";
    CHECKBOX_CHECK_TYPE[CHECKBOX_CHECK_TYPE["IS_CHECK"] = 1] = "IS_CHECK";
    CHECKBOX_CHECK_TYPE[CHECKBOX_CHECK_TYPE["UNKNOWN_CHECK"] = 2] = "UNKNOWN_CHECK";
})(CHECKBOX_CHECK_TYPE || (CHECKBOX_CHECK_TYPE = {}));
var PreImg = common__WEBPACK_IMPORTED_MODULE_5__["components"].PreImg;
var Checkbox = function (props) {
    var _a;
    var isChecked = props.isChecked, _b = props.disabledCheck, disabledCheck = _b === void 0 ? false : _b, children = props.children, _c = props.className, className = _c === void 0 ? '' : _c, _d = props.unknownIconType, unknownIconType = _d === void 0 ? 'cover' : _d, onChange = props.onChange;
    var checkboxMap = (_a = {},
        _a[CHECKBOX_CHECK_TYPE.UN_CHECK] = _images_checkboxNormalIcon_png__WEBPACK_IMPORTED_MODULE_1___default.a,
        _a[CHECKBOX_CHECK_TYPE.IS_CHECK] = _images_CheckBoxIcon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        _a[CHECKBOX_CHECK_TYPE.UNKNOWN_CHECK] = unknownIconType === 'cover' ? _images_CheckUnknownIcon_png__WEBPACK_IMPORTED_MODULE_3___default.a : _images_CheckUnknownIcon2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        _a);
    var onClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!disabledCheck) {
            onChange(!isChecked);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PreImg, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: onClick, className: "check-box-text ".concat(className, " ").concat(disabledCheck ? 'check-box-text-disabled' : '') },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "icon-img-check ".concat(isChecked === CHECKBOX_CHECK_TYPE.UNKNOWN_CHECK
                    ? "icon-img-check-unknown-".concat(unknownIconType)
                    : ''), src: checkboxMap[isChecked] }),
            children)));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/Input/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/Input/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return FormLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return InputSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return NumberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMsg", function() { return getErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCountStatic", function() { return TextCountStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentTextStatic", function() { return getContentTextStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartNumStaticByCn", function() { return getChartNumStaticByCn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-types/dist/index.js");
/* harmony import */ var _umu_umu_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-util/dist/index.js");
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Input/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var getCharacterLength = businessCommon__WEBPACK_IMPORTED_MODULE_2__["bizUtils"].getCharacterLength;
var InfiniteScroll = businessCommon__WEBPACK_IMPORTED_MODULE_2__["bizComponents"].InfiniteScroll;
var If = common__WEBPACK_IMPORTED_MODULE_5__["components"].If, ListLoading = common__WEBPACK_IMPORTED_MODULE_5__["components"].ListLoading;
var getChartNumStaticByCn = function (val) {
    return parseInt(String(getCharacterLength(val) / 2), 10);
};
var InputSearch = function (props) {
    var placeholder = props.placeholder, maxLength = props.maxLength, _a = props.type, type = _a === void 0 ? 'text' : _a, _b = props.className, className = _b === void 0 ? '' : _b, selectList = props.selectList, _c = props.defaultValue, defaultValue = _c === void 0 ? '' : _c, pageInfo = props.pageInfo;
    var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), viewport = _d[0], setViewport = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), scroll = _e[0], setScroll = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue), testValue = _f[0], setTestValue = _f[1];
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), ulIsShow = _g[0], setUlIsShow = _g[1];
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.list || []), list = _h[0], setList = _h[1];
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _j[0], setIsLoading = _j[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setTestValue(defaultValue);
        var viewportEl = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].querySelector('.list-table') || undefined;
        var scrollEl = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].querySelector('.list-table') || undefined;
        setViewport(viewportEl);
        setScroll(scrollEl);
    }, [defaultValue]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setList(list);
    }, [list]);
    var onKeyDown = function (e) {
        if (!inputRef.current) {
            return;
        }
        var keyCode = e.keyCode;
        if (keyCode === _umu_umu_types__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].KEY_ENTER) {
            return false;
        }
        return true;
    };
    var onChange = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var el, values, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    el = e.currentTarget;
                    if (!el) {
                        return [2 /*return*/];
                    }
                    values = el.value;
                    setTestValue(values);
                    if (!props.getList) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.getList(values)];
                case 1:
                    res = _a.sent();
                    setList(res);
                    setUlIsShow(true);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var liOnClick = function (item) {
        props.onSelect(item);
        setTestValue('');
        setUlIsShow(false);
    };
    var getLoadMore = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    if (!pageInfo) {
                        return [2 /*return*/];
                    }
                    if (!(pageInfo.total_page_num > pageInfo.current_page)) return [3 /*break*/, 2];
                    if (!props.getList) return [3 /*break*/, 2];
                    setIsLoading(true);
                    return [4 /*yield*/, props.getList(testValue, pageInfo.current_page + 1)];
                case 1:
                    res = _a.sent();
                    setList(list.concat(res || []));
                    setIsLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className + ' umu-input', onMouseLeave: function () { return setUlIsShow(false); } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'select-list ' + (ulIsShow ? 'active-input' : '') },
            selectList.map(function (data, index) { return props.renderData(data, index); }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(If, { condition: !!!props.maxCount || props.maxCount > selectList.length },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { ref: inputRef, type: type, className: "input", placeholder: placeholder, maxLength: maxLength, onKeyDown: onKeyDown, onChange: onChange, value: testValue })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "list search-keyword-zone", style: { display: ulIsShow && list.length > 0 && testValue !== '' ? 'block' : 'none' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfiniteScroll, { load: getLoadMore, hasMore: !!pageInfo && !!pageInfo.total_page_num && pageInfo.total_page_num > pageInfo.current_page, viewportSelector: viewport, scrollerSelector: scroll, isLoading: isLoading, bottomDistance: 70, scrollThreshold: 500 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "list-table" },
                    list.map(function (data) {
                        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: data.id + '-' + data.title, onClick: function () {
                                liOnClick(data);
                            }, className: "children-item" }, props.renderChildren(data)));
                    }),
                    isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListLoading, null))))));
};
var Input = function (props) {
    var _a = props.defaultValue, defaultValue = _a === void 0 ? '' : _a, _b = props.type, type = _b === void 0 ? 'text' : _b, _c = props.className, className = _c === void 0 ? '' : _c, _d = props.option, option = _d === void 0 ? { maxLength: 120, placeholder: '', disabled: false } : _d, _e = props.autoFocus, autoFocus = _e === void 0 ? false : _e, _f = props.onHalfWidthCheck, onHalfWidthCheck = _f === void 0 ? false : _f, onChange = props.onChange, onBlur = props.onBlur, onKeyDownEnter = props.onKeyDownEnter;
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue), value = _g[0], setValue = _g[1];
    var _h = option.maxLength, maxLength = _h === void 0 ? 120 : _h;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setValue(defaultValue);
    }, [defaultValue]);
    var inputChange = function (e) {
        var newValue = e.currentTarget.value || '';
        if (onHalfWidthCheck && getCharacterLength(newValue) > maxLength) {
            newValue = Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_4__["getLengthChar"])(newValue, maxLength);
        }
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };
    var onKeyDown = function (e) {
        var keyCode = e.keyCode;
        if (keyCode === _umu_umu_types__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].KEY_ENTER) {
            if (onKeyDownEnter) {
                onKeyDownEnter(value);
            }
            return false;
        }
        return true;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className + ' umu-input' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", __assign({ type: type, className: "input" }, option, { onKeyDown: onKeyDown, onChange: inputChange, value: value, onBlur: onBlur, autoFocus: autoFocus }))));
};
var Textarea = function (props) {
    var _a = props.placeholder, placeholder = _a === void 0 ? '' : _a, _b = props.value, value = _b === void 0 ? '' : _b, _c = props.maxLength, maxLength = _c === void 0 ? 512 : _c, onChange = props.onChange, className = props.className;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", { className: "umu-textarea-box ".concat(className), placeholder: placeholder, value: value, maxLength: maxLength, onChange: function (ev) {
            var newValue = ev.currentTarget.value || '';
            if (getCharacterLength(newValue) > maxLength) {
                newValue = Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_4__["getLengthChar"])(newValue, maxLength);
            }
            onChange(newValue);
        } }));
};
var NumberInput = function (props) {
    var _a = props.value, value = _a === void 0 ? '' : _a, _b = props.type, type = _b === void 0 ? 'text' : _b, _c = props.className, className = _c === void 0 ? '' : _c, _d = props.option, option = _d === void 0 ? { maxLength: 120, placeholder: '', disabled: false } : _d, _e = props.autoFocus, autoFocus = _e === void 0 ? false : _e, onChange = props.onChange, onBlur = props.onBlur, onKeyDownEnter = props.onKeyDownEnter;
    var maxLength = option.maxLength;
    var inputChange = function (evt) {
        // 仅允许输入正整数
        var value = evt.target.value;
        // 当仅有一个数时，且数字为0时，删除该0字符，input为空字符串
        if (value.length === 1 && value === '0') {
            value = '';
        }
        else {
            value = value.replace(/\D/g, '');
        }
        if (typeof maxLength === 'number' && value.length > maxLength) {
            value = value.substring(0, maxLength);
        }
        if (onChange) {
            onChange(value);
        }
    };
    var onKeyDown = function (e) {
        var keyCode = e.keyCode;
        if (keyCode === _umu_umu_types__WEBPACK_IMPORTED_MODULE_1__["KEY_CODE"].KEY_ENTER) {
            if (onKeyDownEnter) {
                onKeyDownEnter(value);
            }
            return false;
        }
        return true;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: className + ' umu-input' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", __assign({ type: type, className: "input" }, option, { onKeyDown: onKeyDown, onChange: inputChange, value: value, onBlur: onBlur, autoFocus: autoFocus }))));
};
var FormLabel = function (props) {
    var label = props.label, children = props.children, _a = props.isRequire, isRequire = _a === void 0 ? false : _a;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["classSet"])({
                'form-label': true,
                'form-require': isRequire,
            }) }, label),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "form-children" }, children)));
};
var getContentTextStatic = function (val, maxCount) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "text-static" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["classSet"])({
                'is-has-full-word': getChartNumStaticByCn(val) >= maxCount,
            }) }, getChartNumStaticByCn(val)),
        "/",
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, maxCount)));
};
/**
 * 字符统计组件
 */
var getErrorMsg = function (info) {
    var value = info.value, isValid = info.isValid, errorInfo = info.errorInfo, maxLen = info.maxLen;
    var newVal = value.trim();
    if (isValid && !newVal.length) {
        return errorInfo.requireMsg;
    }
    return getChartNumStaticByCn(newVal) >= maxLen ? errorInfo.maxLenMsg : '';
};
var TextCountStatic = function (props) {
    var _a = props.value, value = _a === void 0 ? '' : _a, maxLen = props.maxLen, _b = props.isValid, isValid = _b === void 0 ? false : _b, errorInfo = props.errorInfo;
    var errorMsgProps = {
        value: value,
        maxLen: maxLen,
        isValid: isValid,
        errorInfo: errorInfo,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "content-static-count" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tip-error-msg" }, getErrorMsg(errorMsgProps)),
        getContentTextStatic(value, maxLen)));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_switch_on_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/switch-on.png");
/* harmony import */ var _images_switch_on_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_switch_on_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_switch_off_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/switch-off.png");
/* harmony import */ var _images_switch_off_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_switch_off_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




var Switch = function (props) {
    var value = props.value, onSwitch = props.onSwitch;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-content", onClick: function () { return onSwitch(!value); } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: value ? _images_switch_on_png__WEBPACK_IMPORTED_MODULE_1___default.a : _images_switch_off_png__WEBPACK_IMPORTED_MODULE_2___default.a, className: "switch-img" })));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/customDialog/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/customDialog/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDialogElementCancel", function() { return onDialogElementCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElementsByClass", function() { return removeElementsByClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDialog", function() { return NewDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgDialog", function() { return msgDialog; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/customDialog/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var CustomDialog = common__WEBPACK_IMPORTED_MODULE_2__["components"].CustomDialog, If = common__WEBPACK_IMPORTED_MODULE_2__["components"].If;
var onDialogElementCancel = function () {
    removeElementsByClass('dialog-wrapper', false);
};
var removeElementsByClass = function (className, isNotAllowCloseAll) {
    var elements = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__["$document"].getElementsByClassName(className);
    var count = elements.length;
    while (count > 0) {
        count--;
        if (elements[count]) {
            elements[count].remove();
        }
        if (isNotAllowCloseAll || !!count) {
            break;
        }
    }
};
var NewDialog = function (props) {
    var title = props.title, saveData = props.saveData, cancelData = props.cancelData, _a = props.isClose, isClose = _a === void 0 ? true : _a, _b = props.className, className = _b === void 0 ? '' : _b, _c = props.isNotAllowCloseAll, isNotAllowCloseAll = _c === void 0 ? false : _c;
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.isShow), isShow = _d[0], setIsShow = _d[1];
    var isShowSubBtn = !!saveData && saveData.show;
    var isShowCancelBtn = !!cancelData && cancelData.show;
    var isShowFooter = isShowSubBtn || isShowCancelBtn;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        setIsShow(props.isShow);
    }, [props.isShow]);
    var onClose = function () {
        setIsShow(false);
        removeElementsByClass('dialog-wrapper', isNotAllowCloseAll);
        if (cancelData && cancelData.onClick) {
            cancelData.onClick();
        }
    };
    var onSave = function () {
        if (isShowSubBtn && saveData.onClick) {
            saveData.onClick();
            removeElementsByClass('dialog-wrapper', isNotAllowCloseAll);
            if (isShowCancelBtn) {
                setIsShow(false);
                return;
            }
            if ((cancelData && !cancelData.show) || (cancelData && !cancelData.onClick)) {
                onClose();
            }
        }
        else {
            onClose();
        }
    };
    var renderChildByType = function () {
        return typeof props.children === 'string' ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "content", dangerouslySetInnerHTML: {
                __html: props.children,
            } })) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "content" }, props.children));
    };
    var renderChild = function () {
        return props.children ? renderChildByType() : null;
    };
    var renderFooter = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(If, { condition: isShowFooter },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "custom-dialog-footer" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(If, { condition: isShowCancelBtn },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Button"], { type: "ghost-grey", className: "dialog-footer-first-btn", onClick: onClose }, (cancelData && cancelData.text) || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('取消'))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(If, { condition: isShowSubBtn },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__["classSet"])({
                            'dialog-footer-first-btn': !isShowCancelBtn,
                            'save-btn': isShowCancelBtn,
                        }), onClick: onSave, type: (!!saveData && saveData.type) || 'primary-blue' }, (saveData && saveData.text) || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('确认'))))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isShow && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "custom-plate-form-dialog ".concat(className) },
        isClose && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Close", className: "icon-close-panel", onClick: onClose }),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "heard-title" }, title),
        renderChild(),
        renderFooter()))));
};
var msgDialog = function (paramDialog, cls) {
    CustomDialog({
        className: cls || 'pc-alert-close-dialog',
        canClose: true,
        width: paramDialog.width || '450',
        hasMask: true,
        childProps: __assign({ isShow: true }, paramDialog),
        contentComponent: NewDialog,
    });
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/images/CheckBoxIcon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/CheckBoxIcon.41684df1.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/images/CheckUnknownIcon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/CheckUnknownIcon.0e1eeeb6.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/images/CheckUnknownIcon2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/CheckUnknownIcon2.2e9e40da.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/images/checkboxNormalIcon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/checkboxNormalIcon.fcf04c94.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _tooltip_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/tooltip/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _tooltip_index__WEBPACK_IMPORTED_MODULE_1__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TipElement", function() { return _tooltip_index__WEBPACK_IMPORTED_MODULE_1__["TipElement"]; });

/* harmony import */ var _Input_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Input/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["FormLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["NumberInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getErrorMsg", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["getErrorMsg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["InputSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextCountStatic", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["TextCountStatic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContentTextStatic", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["getContentTextStatic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChartNumStaticByCn", function() { return _Input_index__WEBPACK_IMPORTED_MODULE_2__["getChartNumStaticByCn"]; });

/* harmony import */ var _customDialog_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/customDialog/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "msgDialog", function() { return _customDialog_index__WEBPACK_IMPORTED_MODULE_3__["msgDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomDialog", function() { return _customDialog_index__WEBPACK_IMPORTED_MODULE_3__["NewDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDialogElementCancel", function() { return _customDialog_index__WEBPACK_IMPORTED_MODULE_3__["onDialogElementCancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeElementsByClass", function() { return _customDialog_index__WEBPACK_IMPORTED_MODULE_3__["removeElementsByClass"]; });

/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _umu_umu_design__WEBPACK_IMPORTED_MODULE_4__["Button"]; });

/* harmony import */ var _Switch_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch_index__WEBPACK_IMPORTED_MODULE_5__["Switch"]; });

/* harmony import */ var _Checkbox_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Checkbox/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox_index__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]; });








var If = common__WEBPACK_IMPORTED_MODULE_0__["components"].If;



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/tooltip/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/@components/tooltip/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_DIR", function() { return TOOLTIP_DIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipElement", function() { return TipElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-react-hooks/dist/index.js");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/tooltip/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var TOOLTIP_DIR;
(function (TOOLTIP_DIR) {
    TOOLTIP_DIR["LEFT"] = "left";
    TOOLTIP_DIR["RIGHT"] = "right";
    TOOLTIP_DIR["CENTER"] = "center";
    TOOLTIP_DIR["TOP"] = "top";
})(TOOLTIP_DIR || (TOOLTIP_DIR = {}));
// 生成随机数ID作为弹窗标识
var RAND = 36;
var DELAY_TIME = 200; // 防抖操作200ms
var getNonDuplicateID = function () {
    var idStr = Date.now().toString(RAND);
    idStr += Math.random().toString(RAND).substr(3);
    return idStr;
};
var getStyleByCurrent = function (ref, offset) {
    var result = '';
    if (ref && ref.current) {
        var current = ref.current.getBoundingClientRect();
        var scrollTop = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].documentElement.scrollTop;
        var x = current.top + current.height + scrollTop + offset.top;
        var y = current.left + offset.left;
        result = "top: ".concat(x, "px; left: ").concat(y, "px; max-width: ").concat(offset.width, "px");
    }
    return result;
};
var Tooltip = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getNonDuplicateID()), idTooltip = _a[0], setIdTooltip = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isToolShow = _b[0], setIsToolShow = _b[1];
    var tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setStyleById();
    }, [isToolShow]);
    var getStyleCssText = function () {
        var offset = {
            top: props.topOffset || 0,
            left: props.leftOffset || -50,
            width: props.width || 400,
        };
        return getStyleByCurrent(tooltipRef, offset);
    };
    var getShowMsgInfo = function (text) {
        var isText = typeof text === 'string';
        return isText ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "info" }, text) : text;
    };
    var setStyleById = Object(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useDebounce"])(function () {
        // 防止接口请求过快，加入截流函数
        var element = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].getElementById(idTooltip);
        if (element) {
            _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].body.removeChild(element);
        }
        if (isToolShow) {
            createMsgPanel();
        }
    }, DELAY_TIME);
    var hideTooltip = function () {
        if (props.onLeave) {
            props.onLeave();
        }
        setIsToolShow(false);
    };
    var showTooltip = function () {
        if (props.onEnter) {
            props.onEnter();
        }
        if (!props.text) {
            return;
        }
        setIsToolShow(true);
    };
    var createMsgPanel = function () { return __awaiter(void 0, void 0, void 0, function () {
        var element, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    element = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].createElement('div');
                    element.className = "assessment-tooltip-create theme-".concat(props.theme);
                    element.id = idTooltip;
                    element.style.cssText = getStyleCssText();
                    text = props.text;
                    if (!props.onEnter) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.onEnter()];
                case 1:
                    text = _a.sent();
                    _a.label = 2;
                case 2:
                    react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(renderMsg(text), element);
                    _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].body.appendChild(element);
                    _umu_umu_dom__WEBPACK_IMPORTED_MODULE_3__["$document"].body.appendChild(element);
                    setIdTooltip(element.id);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderMsg = function (text) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tooltips-message", onMouseLeave: hideTooltip, onMouseEnter: showTooltip }, getShowMsgInfo(text)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tooltips-icon" })));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "umu-distribute-tooltip" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: tooltipRef, className: "content", onMouseEnter: showTooltip, onMouseLeave: hideTooltip }, props.children)));
};
var TipElement = function (props) {
    var _a = props.topOffset, topOffset = _a === void 0 ? 4 : _a, _b = props.tips, tips = _b === void 0 ? [] : _b, _c = props.keys, keys = _c === void 0 ? '' : _c, _d = props.style, style = _d === void 0 ? 'dark' : _d, _e = props.iconType, iconType = _e === void 0 ? 'Tips' : _e;
    var getTips = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tips-element" }, tips.map(function (_, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { key: "tips-div-".concat(keys, "-").concat(index) }, _);
        })));
    }, [tips]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tooltip, { text: getTips, theme: "certificate-page-tip ".concat(style), topOffset: topOffset },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: iconType, className: "certificate-tips-icon" })));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/images/icons/icon-class.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/icon-class.d6be8552.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/images/icons/icon-delete.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/icon-delete.60b97525.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/images/icons/icon-department-yellow.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/icon-department-yellow.c9fb6f49.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/images/icons/icon-group.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/icon-group.53512d0f.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/images/switch-off.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/switch-off.b1bebf58.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/@common/images/switch-on.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/switch-on.60e2742a.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/api/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__);

var BASE = '/uapi/v1';
var API = {
    GET_ORGANIZING_COURSE_TASK_LIST: {
        url: "".concat(BASE, "/learningtask/organizing-course-task-list"),
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
    },
    GET_MEMBER_SEARCH: {
        url: '/api/manage/accessaccountmatch',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
    },
    SET_UPDATE_CONFIG: {
        url: '/uapi/v1/learningtask/update-config',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
    REPORT_OUTPUT: {
        url: '/api/report/output',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
    },
    REVOKE_TASK: {
        url: '/uapi/v1/learningtask/revoke-task',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
    REVOKE_STUDENT_TASK: {
        url: '/uapi/v1/learningtask/revoke-student-task',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
    GET_STUDENT_TASK_LIST: {
        url: '/api/studentManage/getstudenttasklist',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
    },
    REVOKE_GROUP_ASSIGNMENTS: {
        url: '/api/group/revokegroupassignments',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
    DEPARTMENT_REVOKE_ASSIGNMENTS: {
        url: '/uapi/v1/learningtask/revoke-student-all-task',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/api/program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__);

var BASE = '/uapi/v1';
var API = {
    GET_ORGANIZING_PROGRAM_TASK_LIST: {
        url: "".concat(BASE, "/learningtask/organizing-program-task-list"),
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
    },
    GET_MEMBER_SEARCH: {
        url: '/api/manage/accessaccountmatch',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
    },
    SET_UPDATE_CONFIG: {
        url: '/uapi/v1/learningtask/update-config',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
    REPORT_OUTPUT: {
        url: '/api/report/output',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
    },
    REVOKE_TASK: {
        url: '/uapi/v1/learningtask/revoke-task',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
    REVOKE_STUDENT_TASK: {
        url: '/uapi/v1/learningtask/revoke-student-task',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
    GET_STUDENT_TASK_LIST: {
        url: '/api/program/getstudenttasklist',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].GET,
    },
    REVOKE_PROGRAM_ASSIGNMENTS: {
        url: '/api/program/revokeprogramassignments',
        type: _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["API_TYPE"].POST,
    },
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/DetailOrganizationInfoCell/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/DetailOrganizationInfoCell/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailOrganizationInfoCell", function() { return DetailOrganizationInfoCell; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _UserLevelBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/UserLevelBadge/index.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/DetailOrganizationInfoCell/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/index.ts");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.tsx");
/* harmony import */ var _common_components_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.tsx");
/* harmony import */ var _myTask_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _PrevAssignDialog_prevAssignDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/PrevAssignDialog/prevAssignDialog.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var If = common__WEBPACK_IMPORTED_MODULE_2__["components"].If;





var UserAvatar = businessCommon__WEBPACK_IMPORTED_MODULE_7__["bizComponents"].UserAvatar, getAvatarWord = businessCommon__WEBPACK_IMPORTED_MODULE_7__["bizComponents"].getAvatarWord;




var SettingDialog = function (props) {
    var data = props.data, onSwitchSingleStudentNotifySwitch = props.onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch = props.onSwitchSingleDepartmentManagerNotifySwitch, onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data.student_notify_switch), studentNotifySwitch = _a[0], setStudentNotifySwitch = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data.department_manager_notify_switch), departmentManagerNotifySwitch = _b[0], setDepartmentManagerNotifySwitch = _b[1];
    var isToB = Object(_myTask_utils__WEBPACK_IMPORTED_MODULE_10__["isEnterpriseAccount"])();
    var descOptionClass = 'detail-organization-info-cell-desc-operation';
    var descOptionText = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('如需调整通知时机，请至“分配学习任务”弹窗的“<a class="${className}">任务通知高级设置</a>”中进行设置').replace('${className}', descOptionClass);
    var onClickDesc = function (event) {
        if (event && event.target && event.target.className === descOptionClass) {
            onAssignEmittedTaskSetting === null || onAssignEmittedTaskSetting === void 0 ? void 0 : onAssignEmittedTaskSetting();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "setting-dialog-wrap add-width" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "switch-group flex" },
            Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('给学员发送任务通知'),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__["Switch"], { value: studentNotifySwitch, onSwitch: function (isOpen) {
                    onSwitchSingleStudentNotifySwitch === null || onSwitchSingleStudentNotifySwitch === void 0 ? void 0 : onSwitchSingleStudentNotifySwitch(isOpen, [data]).then(function (res) {
                        if (res) {
                            setStudentNotifySwitch(isOpen);
                        }
                    });
                } }),
            ' ',
            studentNotifySwitch ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('已关闭')),
        isToB && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "switch-group flex" },
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('给直属部门负责人发送通知'),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__["Switch"], { value: departmentManagerNotifySwitch, onSwitch: function (isOpen) {
                        onSwitchSingleDepartmentManagerNotifySwitch === null || onSwitchSingleDepartmentManagerNotifySwitch === void 0 ? void 0 : onSwitchSingleDepartmentManagerNotifySwitch(isOpen, [data]).then(function (res) {
                            if (res) {
                                setDepartmentManagerNotifySwitch(isOpen);
                            }
                        });
                    } }),
                ' ',
                departmentManagerNotifySwitch ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('已关闭')),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "switch-group desc", dangerouslySetInnerHTML: {
                    __html: descOptionText,
                }, onClick: function (e) { return onClickDesc(e); } })))));
};
var DetailOrganizationInfoCell = function (props) {
    var index = props.index, data = props.data, hideSetting = props.hideSetting, _a = props.noPreassignTime, noPreassignTime = _a === void 0 ? false : _a, _b = props.showPrivateEntry, showPrivateEntry = _b === void 0 ? false : _b, _c = props.noPreassignClockIcon, noPreassignClockIcon = _c === void 0 ? false : _c, onRevoke = props.onRevoke;
    var user_name = data.user_name, user_level = data.user_level, show_user_level = data.show_user_level, avatar = data.avatar, user_medal = data.user_medal, last_assign_time = data.last_assign_time;
    var isPreassign = Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["checkPreAssigned"])(last_assign_time);
    var defaultAvatar = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["getDefaultAvatar"])(); }, []);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "detail-organization-info-cell-wrap" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "org-index" }, index),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "org-logo" },
            avatar ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserAvatar, { className: "org-user-avatar-component", src: avatar, width: 40 })) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "default-avatar-wrap" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserAvatar, { className: "org-user-avatar-component", src: defaultAvatar, width: 40 }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { zIndex: 2 } }, getAvatarWord(user_name)))),
            !!show_user_level ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserLevelBadge__WEBPACK_IMPORTED_MODULE_3__["UserLevelBadge"], { level: user_level }) : null),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "org-info" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "org-name" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "user-name" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "user-name-text" }, user_name),
                    !!show_user_level && user_medal ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "medal-icon-wrap" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", { className: "medal-icon", src: Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["getMedalIcon"])(user_medal.medal_type, user_medal.medal_rank) }))) : null,
                    !noPreassignClockIcon && isPreassign && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], { text: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PrevAssignDialog_prevAssignDialog__WEBPACK_IMPORTED_MODULE_11__["PrevAssignDialog"], __assign({}, props)), trigger: _basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["ITriggerType"].HOVER, direct: _basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TOOLTIP_DIR"].BL },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_6__["Iconfont"], { className: "preassign-icon", type: "CompleteTime" }))))),
            !noPreassignTime && last_assign_time && isPreassign ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "org-assign-time" },
                Object(_util_index__WEBPACK_IMPORTED_MODULE_5__["formatTime"])(last_assign_time),
                " ",
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('分配'))) : null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "org-operation" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "text-blue", style: { marginRight: '8px' }, onClick: function () {
                        onRevoke(data);
                    } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('撤回')),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(If, { condition: !hideSetting },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "text-blue operation-setting" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], { text: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SettingDialog, __assign({}, props)), trigger: _basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["ITriggerType"].HOVER, direct: _basic_Tooltip__WEBPACK_IMPORTED_MODULE_8__["TOOLTIP_DIR"].BL }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('设置')))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(If, { condition: showPrivateEntry },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "text-blue private-entry", rel: "noreferrer", href: "/message#/index?type=private&linkId=".concat(data.encrypt_umu_id), target: "_blank" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('私信')))))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/EmptyTable/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/EmptyTable/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyTable", function() { return EmptyTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _images_empty_table_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/images/empty-table.png");
/* harmony import */ var _images_empty_table_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_empty_table_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_empty_cn_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/images/empty-cn.png");
/* harmony import */ var _images_empty_cn_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_empty_cn_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_empty_en_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/images/empty-en.png");
/* harmony import */ var _images_empty_en_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_empty_en_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _interface_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/EmptyTable/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);









var EmptyTable = function (props) {
    var isSearch = props.isSearch, onAssignTaskClick = props.onAssignTaskClick, onAssignClassClick = props.onAssignClassClick;
    var _a = Object(_util_const__WEBPACK_IMPORTED_MODULE_6__["onGetRole"])(), isEnterprise = _a.isEnterMember, isTeacher = _a.isTeacher, isDepartment = _a.isDepartment;
    var isSystemENOrEM = function () {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["isSystem"])('EN') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["isSystem"])('EM');
    };
    var getImgSrc = function () {
        return isSearch ? _images_empty_table_png__WEBPACK_IMPORTED_MODULE_3___default.a : isSystemENOrEM() ? _images_empty_en_png__WEBPACK_IMPORTED_MODULE_5___default.a : _images_empty_cn_png__WEBPACK_IMPORTED_MODULE_4___default.a;
    };
    var getRoleTextType = function () {
        var type = _interface_index__WEBPACK_IMPORTED_MODULE_7__["RoleTextType"].ALL;
        // C端用户
        if (!isEnterprise) {
            type = _interface_index__WEBPACK_IMPORTED_MODULE_7__["RoleTextType"].CLASS;
            return type;
        }
        // 讲师
        if (isTeacher) {
            // 是否是部门负责人
            type = isDepartment ? _interface_index__WEBPACK_IMPORTED_MODULE_7__["RoleTextType"].CLASS_DEPARTMENT : _interface_index__WEBPACK_IMPORTED_MODULE_7__["RoleTextType"].CLASS;
        }
        return type;
    };
    var EmptyTextType = getRoleTextType();
    var renderSearchEmpty = function () {
        return isSearch ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "empty-desc" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('暂无数据'))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "empty-desc" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('暂无学习任务')),
            EmptyTextType === _interface_index__WEBPACK_IMPORTED_MODULE_7__["RoleTextType"].ALL ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "desc-info" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('1.你可以将课程以“学习任务”的形式分配给分组、部门、班级内全部学员；')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('2.分配后，学员会收到学习提醒，你还可以规定学习任务的完成时间；')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('3.在这里查看学习任务的完成情况，以及各分组、部门、班级的数据对比。')))) : null,
            EmptyTextType === _interface_index__WEBPACK_IMPORTED_MODULE_7__["RoleTextType"].CLASS_DEPARTMENT ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "desc-info" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('1.你可以将课程以“学习任务”的形式分配给部门、班级内全部学员；')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('2.分配后，学员会收到学习提醒，你还可以规定学习任务的完成时间；')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('3.在这里查看学习任务的完成情况，以及各部门、班级的数据对比。')))) : null,
            EmptyTextType === _interface_index__WEBPACK_IMPORTED_MODULE_7__["RoleTextType"].CLASS ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "desc-info" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('1.你可以创建班级，将课程以“学习任务”的形式分配给班级内全部学员；')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('2.分配后，学员会收到学习提醒，你还可以规定学习任务的完成时间；')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('3.在这里查看学习任务的完成情况，以及各班级的数据对比。')))) : null));
    };
    var renderFooter = function () {
        return (!isSearch && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "empty-footer" },
            !isEnterprise && onAssignClassClick && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "ghost-grey", onClick: onAssignClassClick, className: "footer-btn" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('创建班级'))),
            onAssignTaskClick && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "primary", onClick: onAssignTaskClick }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('分配学习任务'))))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "list-empty-table-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "empty-img" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: getImgSrc(), className: "empty-image" })),
        renderSearchEmpty(),
        renderFooter()));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/GroupDetailDialog/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/GroupDetailDialog/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailDialog", function() { return GroupDetailDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _basic_SplitLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SplitLine/index.tsx");
/* harmony import */ var _common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.tsx");
/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _myTask_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/GroupDetailDialog/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_8__);







var UMUBg = common__WEBPACK_IMPORTED_MODULE_3__["components"].UMUBg;


var GroupDetailDialog = function (props) {
    var data = props.data, onSwitchAutoAssign = props.onSwitchAutoAssign, onSwitchAssignElective = props.onSwitchAssignElective, onSwitchSingleStudentNotifySwitch = props.onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch = props.onSwitchSingleDepartmentManagerNotifySwitch;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.auto_assign === 1), isAutoAssignOpen = _a[0], setIsAutoAssignOpen = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.assign_elective === 1), isAssignElectiveOpen = _b[0], setIsAssignElectiveOpen = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.student_notify_switch), studentNotifySwitch = _c[0], setStudentNotifySwitch = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.department_manager_notify_switch), departmentManagerNotifySwitch = _d[0], setDepartmentManagerNotifySwitch = _d[1];
    var isToB = Object(_myTask_utils__WEBPACK_IMPORTED_MODULE_7__["isEnterpriseAccount"])();
    var dueTime = "".concat(data.due_time);
    // 时间戳满足13位字符
    while (dueTime.length < 13) {
        dueTime += '0';
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "group-detail-dialog-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "detail-heard" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UMUBg, { clsName: "org-logo", bgSrc: _util_const__WEBPACK_IMPORTED_MODULE_6__["ICON_IMAGE_MAP"][data.parent_type] }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "org-name" }, data.name)),
        data.due_time ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { marginTop: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { color: '#666666' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务到期时间：')),
                moment__WEBPACK_IMPORTED_MODULE_2___default()(+dueTime).format('YYYY-MM-DD HH:mm')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_SplitLine__WEBPACK_IMPORTED_MODULE_4__["SplitLine"], { customStyle: { marginTop: 12 } }))) : null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { marginTop: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "flex-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { color: '#666666' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { fontWeight: 600 } }, "".concat(Math.floor(data.student_complete_rate * 10000) / 100, "%"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "flex-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { color: '#666666' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务完成率：')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { fontWeight: 600 } }, "".concat(Math.floor(data.task_complete_rate * 10000) / 100, "%")))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex", style: { marginTop: 8 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "flex-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { color: '#666666' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成任务学员数：')),
                    data.finish_assign_user_num),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "flex-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { color: '#666666' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成任务数：')),
                    data.finish_assign_task_num)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex", style: { marginTop: 8 } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "flex-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { color: '#666666' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('分配任务学员数：')),
                    data.total_assign_user_num),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "flex-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { style: { color: '#666666' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('分配任务数：')),
                    data.total_assign_task_num))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_SplitLine__WEBPACK_IMPORTED_MODULE_4__["SplitLine"], { customStyle: { marginTop: 12 } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            data.auto_assign !== undefined && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('自动分配新成员'),
                ' ',
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__["Switch"], { value: isAutoAssignOpen, onSwitch: function (isOpen) {
                        onSwitchAutoAssign(isOpen, [data]).then(function (res) {
                            if (res) {
                                setIsAutoAssignOpen(isOpen);
                            }
                        });
                    } }),
                ' ',
                isAutoAssignOpen ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭'))),
            data.assign_elective !== undefined && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('分配选修小节'),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__["Switch"], { value: isAssignElectiveOpen, onSwitch: function (isOpen) {
                        onSwitchAssignElective(isOpen, [data]).then(function (res) {
                            if (res) {
                                setIsAssignElectiveOpen(isOpen);
                            }
                        });
                    } }),
                isAssignElectiveOpen ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给学员发送任务通知'),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__["Switch"], { value: studentNotifySwitch, onSwitch: function (isOpen) {
                        onSwitchSingleStudentNotifySwitch(isOpen, [data]).then(function (res) {
                            if (res) {
                                setStudentNotifySwitch(isOpen);
                            }
                        });
                    } }),
                ' ',
                studentNotifySwitch ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭')),
            isToB && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
                    Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给直属部门负责人发送通知'),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__["Switch"], { value: departmentManagerNotifySwitch, onSwitch: function (isOpen) {
                            onSwitchSingleDepartmentManagerNotifySwitch(isOpen, [data]).then(function (res) {
                                if (res) {
                                    setDepartmentManagerNotifySwitch(isOpen);
                                }
                            });
                        } }),
                    ' ',
                    departmentManagerNotifySwitch ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭')))))));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/OrganizationInfoCell/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/OrganizationInfoCell/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationInfoCell", function() { return OrganizationInfoCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.tsx");
/* harmony import */ var _basic_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.tsx");
/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/OrganizationInfoCell/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _myTask_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/utils/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







var SettingDialog = function (props) {
    var data = props.data, onSwitchAutoAssign = props.onSwitchAutoAssign, onSwitchAssignElective = props.onSwitchAssignElective, onSwitchSingleStudentNotifySwitch = props.onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch = props.onSwitchSingleDepartmentManagerNotifySwitch, onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.auto_assign === 1), isAutoAssignOpen = _a[0], setIsAutoAssignOpen = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.assign_elective === 1), isAssignElectiveOpen = _b[0], setIsAssignElectiveOpen = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.student_notify_switch), studentNotifySwitch = _c[0], setStudentNotifySwitch = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.department_manager_notify_switch), departmentManagerNotifySwitch = _d[0], setDepartmentManagerNotifySwitch = _d[1];
    var isToB = Object(_myTask_utils__WEBPACK_IMPORTED_MODULE_6__["isEnterpriseAccount"])();
    var descOptionClass = 'organization-info-cell-desc-option';
    var descOptionText = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('如需调整通知时机，请至“分配学习任务”弹窗的“<a class="${className}">任务通知高级设置</a>”中进行设置').replace('${className}', descOptionClass);
    var onClickDesc = function (event) {
        if (event && event.target && event.target.className === descOptionClass) {
            onAssignEmittedTaskSetting === null || onAssignEmittedTaskSetting === void 0 ? void 0 : onAssignEmittedTaskSetting();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "setting-dialog-wrap add-width" },
        data.auto_assign !== undefined && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
            Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('自动分配新成员'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__["Switch"], { value: isAutoAssignOpen, onSwitch: function (isOpen) {
                    onSwitchAutoAssign &&
                        onSwitchAutoAssign(isOpen, [data]).then(function (res) {
                            if (res) {
                                setIsAutoAssignOpen(isOpen);
                            }
                        });
                } }),
            isAutoAssignOpen ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭'))),
        data.assign_elective !== undefined && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
            Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('分配选修小节'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__["Switch"], { value: isAssignElectiveOpen, onSwitch: function (isOpen) {
                    onSwitchAssignElective &&
                        onSwitchAssignElective(isOpen, [data]).then(function (res) {
                            if (res) {
                                setIsAssignElectiveOpen(isOpen);
                            }
                        });
                } }),
            isAssignElectiveOpen ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭'))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
            Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给学员发送任务通知'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__["Switch"], { value: studentNotifySwitch, onSwitch: function (isOpen) {
                    onSwitchSingleStudentNotifySwitch === null || onSwitchSingleStudentNotifySwitch === void 0 ? void 0 : onSwitchSingleStudentNotifySwitch(isOpen, [data]).then(function (res) {
                        if (res) {
                            setStudentNotifySwitch(isOpen);
                        }
                    });
                } }),
            ' ',
            studentNotifySwitch ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭')),
        isToB && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给直属部门负责人发送通知'),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__["Switch"], { value: departmentManagerNotifySwitch, onSwitch: function (isOpen) {
                        onSwitchSingleDepartmentManagerNotifySwitch === null || onSwitchSingleDepartmentManagerNotifySwitch === void 0 ? void 0 : onSwitchSingleDepartmentManagerNotifySwitch(isOpen, [data]).then(function (res) {
                            if (res) {
                                setDepartmentManagerNotifySwitch(isOpen);
                            }
                        });
                    } }),
                ' ',
                departmentManagerNotifySwitch ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group desc", dangerouslySetInnerHTML: {
                    __html: descOptionText,
                }, onClick: function (e) { return onClickDesc(e); } })))));
};
var OrganizationInfoCell = function (props) {
    var index = props.index, data = props.data, onNameClick = props.onNameClick, onRevoke = props.onRevoke;
    var name = data.name, parent_type = data.parent_type;
    var ellipsisName = name.length > 10 ? "".concat(name.substring(0, 9), "...") : name;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "organization-info-cell-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "org-index" }, index),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "org-logo", src: _util_const__WEBPACK_IMPORTED_MODULE_4__["ICON_IMAGE_MAP"][parent_type] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "org-info" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "org-name" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_Tooltip__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { text: name, arrow: true, theme: "dark" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-blue one-line-text", onClick: onNameClick }, ellipsisName))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "org-operation" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-blue", style: { marginRight: '12px' }, onClick: function () {
                        onRevoke(data);
                    } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-blue operation-setting" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_Tooltip__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingDialog, __assign({}, props)), trigger: _basic_Tooltip__WEBPACK_IMPORTED_MODULE_3__["ITriggerType"].HOVER, direct: _basic_Tooltip__WEBPACK_IMPORTED_MODULE_3__["TOOLTIP_DIR"].BL }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('设置')))))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/PrevAssignDialog/prevAssignDialog.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/PrevAssignDialog/prevAssignDialog.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevAssignDialog", function() { return PrevAssignDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserLevelBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/UserLevelBadge/index.tsx");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/index.ts");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _prevAssignDialog_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/PrevAssignDialog/prevAssignDialog.scss");
/* harmony import */ var _prevAssignDialog_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prevAssignDialog_scss__WEBPACK_IMPORTED_MODULE_5__);






var getAvatarWord = businessCommon__WEBPACK_IMPORTED_MODULE_4__["bizComponents"].getAvatarWord;
var PrevAssignDialog = function (props) {
    var data = props.data, fieldObj = props.fieldObj;
    var user_name = data.user_name, user_level = data.user_level, show_user_level = data.show_user_level, due_time = data.due_time, avatar = data.avatar, user_medal = data.user_medal, last_assign_time = data.last_assign_time;
    var defaultAvatar = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["getDefaultAvatar"])(); }, []);
    var mergedAssignTime = fieldObj ? fieldObj.assign_time : last_assign_time;
    var mergedDueTime = fieldObj ? fieldObj.due_time : due_time;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "prev-assign-dialog-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "detail-heard" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "avatar-wrap" },
                avatar ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: avatar }) // 头像
                ) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "default-avatar-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: defaultAvatar }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, getAvatarWord(user_name)))),
                show_user_level ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserLevelBadge__WEBPACK_IMPORTED_MODULE_2__["UserLevelBadge"], { level: user_level }) : null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "user-name-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "user-name" }, user_name),
                !!show_user_level && user_medal ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "medal-icon", src: Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["getMedalIcon"])(user_medal.medal_type, user_medal.medal_rank) })) : null)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "item flex", style: { marginTop: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('预分配时间：')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "time" }, Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["formatTime"])(mergedAssignTime))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "item flex", style: { marginTop: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务到期时间：')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "time" }, Object(_util_index__WEBPACK_IMPORTED_MODULE_3__["formatTime"])(mergedDueTime)))));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/StudentDetailDialog/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/StudentDetailDialog/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailDialog", function() { return StudentDetailDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_SplitLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SplitLine/index.tsx");
/* harmony import */ var _UserLevelBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/UserLevelBadge/index.tsx");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/index.ts");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/StudentDetailDialog/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/index.ts");
/* harmony import */ var _myTask_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/utils/index.ts");









var getAvatarWord = businessCommon__WEBPACK_IMPORTED_MODULE_5__["bizComponents"].getAvatarWord;
var StudentDetailDialog = function (props) {
    var data = props.data, onSwitchSingleStudentNotifySwitch = props.onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch = props.onSwitchSingleDepartmentManagerNotifySwitch;
    var user_name = data.user_name, user_level = data.user_level, show_user_level = data.show_user_level, due_time = data.due_time, avatar = data.avatar, first_learning_time = data.first_learning_time, complete_time = data.complete_time, last_assign_time = data.last_assign_time, student_notify_switch = data.student_notify_switch, department_manager_notify_switch = data.department_manager_notify_switch;
    var isPreAssigned = Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["checkPreAssigned"])(last_assign_time);
    var defaultAvatar = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["getDefaultAvatar"])(); }, []);
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(student_notify_switch), studentNotifySwitch = _a[0], setStudentNotifySwitch = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(department_manager_notify_switch), departmentManagerNotifySwitch = _b[0], setDepartmentManagerNotifySwitch = _b[1];
    var isToB = Object(_myTask_utils__WEBPACK_IMPORTED_MODULE_8__["isEnterpriseAccount"])();
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "student-detail-dialog-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "detail-heard" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "avatar-wrap" },
                avatar ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: avatar }) // 头像
                ) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "default-avatar-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: defaultAvatar }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, getAvatarWord(user_name)))),
                show_user_level ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserLevelBadge__WEBPACK_IMPORTED_MODULE_3__["UserLevelBadge"], { level: user_level }) : null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "user-name-text" }, user_name)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "item flex", style: { marginTop: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员开始时间：')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "time" }, Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["formatTime"])(first_learning_time, 2))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "item flex", style: { marginTop: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成时间：')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "time" }, Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["formatTime"])(complete_time, 3))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_SplitLine__WEBPACK_IMPORTED_MODULE_2__["SplitLine"], { customStyle: { marginTop: 12 } }),
        isPreAssigned && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "item flex", style: { marginTop: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('预分配时间：')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "time" }, Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["formatTime"])(last_assign_time)))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "item flex", style: { marginTop: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "label" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务到期时间：')),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "time" }, Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["formatTime"])(due_time))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
            Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给学员发送任务通知'),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_7__["Switch"], { value: studentNotifySwitch, onSwitch: function (isOpen) {
                    onSwitchSingleStudentNotifySwitch === null || onSwitchSingleStudentNotifySwitch === void 0 ? void 0 : onSwitchSingleStudentNotifySwitch(isOpen, [data]).then(function (res) {
                        if (res) {
                            setStudentNotifySwitch(isOpen);
                        }
                    });
                } }),
            ' ',
            studentNotifySwitch ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭')),
        isToB && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "switch-group flex" },
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给直属部门负责人发送通知'),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_7__["Switch"], { value: departmentManagerNotifySwitch, onSwitch: function (isOpen) {
                        onSwitchSingleDepartmentManagerNotifySwitch === null || onSwitchSingleDepartmentManagerNotifySwitch === void 0 ? void 0 : onSwitchSingleDepartmentManagerNotifySwitch(isOpen, [data]).then(function (res) {
                            if (res) {
                                setDepartmentManagerNotifySwitch(isOpen);
                            }
                        });
                    } }),
                ' ',
                departmentManagerNotifySwitch ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭'))))));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/UserLevelBadge/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/UserLevelBadge/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLevelBadge", function() { return UserLevelBadge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/UserLevelBadge/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);



var FULL_USER_LEVEL = 999;
var isFullUserLevel = function (level) {
    return parseInt(level || '0') === FULL_USER_LEVEL;
};
var getUserLevelColorScheme = function (level, isLabel) {
    level = level || '1';
    var ret = {
        primary: '#3FAA34',
        secondary: '#FFF',
        range: '1',
    };
    if (isFullUserLevel(level.toString())) {
        if (isLabel) {
            ret.primary = '#292929'; // 黑色
            ret.secondary = '#FFBD2B'; // 金色
        }
        else {
            ret.primary = '#FFBD2B'; // 金色
            ret.secondary = '#292929'; // 黑色
        }
        ret.range = 'full';
    }
    else if (level >= 21) {
        ret.primary = '#FFBD2B'; // 金色
        ret.range = '21';
    }
    else if (level >= 11) {
        ret.primary = '#3F51B5'; // 蓝色
        ret.range = '11';
    }
    return ret;
};
var displayUserLevel = function (level, isText) {
    level = level || '1';
    if (isFullUserLevel(level)) {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('满级');
    }
    return isText ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('${0}级').replace('${0}', level) : 'LV.' + level;
};
var UserLevelBadge = function (props) {
    var level = props.level;
    var userLevelColorScheme = getUserLevelColorScheme(level, true);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "user-level-badge", style: { backgroundColor: userLevelColorScheme.primary } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "user-level", style: { color: userLevelColorScheme.secondary } }, displayUserLevel(level.toString()))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/CustomTable/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/CustomTable/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTable", function() { return CustomTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-util/dist/index.js");
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/util.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@umu/umu-react-hooks/dist/index.js");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};








var DELAY_SCROLL = 10;
var Table = function (props) {
    var _a = props.columns, columns = _a === void 0 ? [] : _a, _b = props.data, data = _b === void 0 ? [] : _b, _c = props.width, width = _c === void 0 ? 0 : _c, _d = props.blank, blank = _d === void 0 ? '' : _d, onColumnClick = props.onColumnClick, refTable = props.refTable, scrollNumber = props.scrollNumber, children = props.children, _e = props.miniNumTdWidth, miniNumTdWidth = _e === void 0 ? 100 : _e, _f = props.customClass, customClass = _f === void 0 ? '' : _f;
    var minimumTdWidth = miniNumTdWidth; // td 最小宽度，width 低于此宽度不生效
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(columns), calculatedColumns = _g[0], setCalculatedColumns = _g[1];
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), scrollProcess = _h[0], setScrollProcess = _h[1];
    var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var lWidth = columns.length * minimumTdWidth;
    var initWidth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return Object(_util__WEBPACK_IMPORTED_MODULE_3__["getInitWidth"])(columns); }, [columns]); // 初始化宽度
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initWidth ? initWidth : lWidth > width ? lWidth : width), minWidth = _j[0], setMinWidth = _j[1];
    var lastFixedLeft = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_2__["findLastIndex"])(columns, function (v) { return v.fixed === _interface__WEBPACK_IMPORTED_MODULE_4__["FixedDirection"].left; });
    }, [columns]);
    var firstFixedRight = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return columns.findIndex(function (v) { return v.fixed === _interface__WEBPACK_IMPORTED_MODULE_4__["FixedDirection"].right; });
    }, [columns]);
    var hasFixed = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return !!(lastFixedLeft || firstFixedRight); }, [lastFixedLeft, firstFixedRight]);
    var columnClickHandle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (item, dataIndex) {
        return function () {
            if (typeof onColumnClick === 'function') {
                onColumnClick(item, dataIndex);
            }
        };
    }, [onColumnClick]);
    /**
     * 监听容器滚动，显隐 fixed 列分割线
     */
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var node = containerRef.current;
        if (node && hasFixed) {
            if (node.scrollWidth > node.offsetWidth) {
                setScrollProcess(_interface__WEBPACK_IMPORTED_MODULE_4__["ScrollProcess"].start);
            }
            var scrollHandle_1 = function () {
                var scrollLeft = node.scrollLeft;
                if (node.scrollLeft === 0) {
                    setScrollProcess(_interface__WEBPACK_IMPORTED_MODULE_4__["ScrollProcess"].start);
                }
                else if (scrollLeft === node.scrollWidth - node.offsetWidth) {
                    setScrollProcess(_interface__WEBPACK_IMPORTED_MODULE_4__["ScrollProcess"].end);
                }
                else {
                    setScrollProcess(_interface__WEBPACK_IMPORTED_MODULE_4__["ScrollProcess"].process);
                }
            };
            node.addEventListener('scroll', scrollHandle_1);
            return function () {
                node.removeEventListener('scroll', scrollHandle_1);
            };
        }
        // tslint:disable-next-line: no-unused-expression
        return function () {
            return null;
        };
    }, [width, hasFixed]);
    // 滚动条交互监听
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (refTable && refTable.current && containerRef.current) {
            containerRef.current.scrollLeft = scrollNumber || 0;
        }
    }, [scrollNumber]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var node = containerRef.current;
        if (!node) {
            return;
        }
        var fixedRight = node.querySelectorAll('.fixed-right');
        var fixedLeft = node.querySelectorAll('.fixed-left');
        for (var i = 0, len = fixedRight.length; i < len; i++) {
            var ele = fixedRight[i];
            if (ele.height) {
                ele.height = ele.parentElement.offsetHeight - 1;
            }
        }
        for (var i = 0, len = fixedLeft.length; i < len; i++) {
            var ele = fixedLeft[i];
            if (ele.height) {
                ele.height = ele.parentElement.offsetHeight - 1;
            }
        }
    }, [width, data, columns]);
    /**
     * 在此计算宽度与位置
     */
    var tableRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (node) {
        if (node) {
            var tableWidth_1 = initWidth ? initWidth : minWidth > node.offsetWidth ? minWidth : node.offsetWidth;
            var existWidth_1 = 0;
            var hasWidthSetNum_1 = 0;
            var countWidth_1 = 0;
            columns.forEach(function (v) {
                if (v.width && v.width !== 'auto') {
                    hasWidthSetNum_1++;
                    var actionWidth = typeof v.width === 'number'
                        ? v.width
                        : /%$/.test(v.width)
                            ? Math.round((parseFloat(v.width) / 100) * tableWidth_1)
                            : parseFloat(v.width);
                    v.width = actionWidth;
                    existWidth_1 += actionWidth;
                    countWidth_1 += actionWidth;
                }
                else {
                    countWidth_1 += minimumTdWidth;
                }
            });
            var leftPosition_1 = 0;
            var l = columns.length;
            var remainderNum = l - hasWidthSetNum_1;
            var remainderItemWidth_1 = (tableWidth_1 - existWidth_1) / remainderNum;
            var newColumns = columns.map(function (v) {
                var itemWidth = typeof v.width === 'number' ? v.width : remainderItemWidth_1;
                var newColumn = Object.assign({}, v, { width: itemWidth });
                if (v.fixed === _interface__WEBPACK_IMPORTED_MODULE_4__["FixedDirection"].left) {
                    newColumn.position = leftPosition_1;
                }
                else if (v.fixed === _interface__WEBPACK_IMPORTED_MODULE_4__["FixedDirection"].right) {
                    newColumn.position = tableWidth_1 - leftPosition_1 - itemWidth;
                }
                leftPosition_1 += itemWidth;
                return newColumn;
            });
            setMinWidth(countWidth_1);
            setCalculatedColumns(newColumns);
        }
    }, [columns, minWidth, initWidth]);
    var renderThs = function () {
        return calculatedColumns.map(function (column, index) {
            var style = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getItemStyle"])(column);
            var className = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getItemClassName"])(column, index, lastFixedLeft, firstFixedRight);
            var title = column.title || (typeof column.name === 'string' ? column.name : '');
            return column.isRowSpan ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { key: column.dataIndex || index, className: className, title: title, style: style, rowSpan: data.length + 1 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], { title: column.name },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "direction-vertical tooltip umu-text-clamp clamp-1" }, column.name)))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { key: column.dataIndex || index, className: className, title: title, style: style }, column.name));
        });
    };
    var renderTd = function (item, rowIndex) {
        return calculatedColumns.map(function (column, index) {
            var style = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getItemStyle"])(column);
            var key = "".concat(column.dataIndex, " ").concat(index);
            var className = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getItemClassName"])(column, index, lastFixedLeft, firstFixedRight);
            if (columns[index] && columns[index].isRowSpan) {
                return null;
            }
            if (typeof column.render === 'function') {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { key: key, style: style, className: className, onClick: columnClickHandle(item, column.dataIndex) }, column.render(item, rowIndex) || ''));
            }
            var params = __spreadArray([item], column.dataIndex.split('.'), true);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            var tdContent = _umu_umu_util__WEBPACK_IMPORTED_MODULE_2__["getData"].apply(null, params) || '';
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { key: key, style: style, className: className, onClick: columnClickHandle(item, column.dataIndex) }, tdContent));
        });
    };
    var renderPlaceholder = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        if (!blank) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "blank", colSpan: columns.length }, blank)));
    }, [blank]);
    var renderTr = function () {
        if (blank) {
            return renderPlaceholder;
        }
        else {
            return data.map(function (item, i) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: i }, renderTd(item, i));
            });
        }
    };
    var onScrollCapture = Object(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(function () {
        if (refTable && refTable.current && containerRef.current) {
            refTable.current.scrollLeft = containerRef.current.scrollLeft;
        }
    }, DELAY_SCROLL);
    var render = function () {
        var _a;
        var style = {
            minWidth: initWidth ? initWidth : minWidth + 'px',
            width: initWidth ? initWidth : width ? width + 'px' : '100%',
        };
        var containerClassName = Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__["classSet"])((_a = {
                'custom-table': true,
                'scroll-start': scrollProcess === _interface__WEBPACK_IMPORTED_MODULE_4__["ScrollProcess"].start,
                'scroll-end': scrollProcess === _interface__WEBPACK_IMPORTED_MODULE_4__["ScrollProcess"].end,
                'scroll-process': scrollProcess === _interface__WEBPACK_IMPORTED_MODULE_4__["ScrollProcess"].process
            },
            _a[customClass] = !!customClass,
            _a));
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "".concat(containerClassName) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "table-wrap", ref: containerRef, onScrollCapture: onScrollCapture },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "inner-table", style: style, ref: tableRef },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { className: "custom-table-head" }, renderThs()),
                        renderTr()),
                    children && children))));
    };
    return render();
};
function CustomTable(props) {
    var data = props.data, _a = props.miniNumTdWidth, miniNumTdWidth = _a === void 0 ? 200 : _a;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), scrollWidth = _b[0], setScrollWidth = _b[1];
    var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), scrollNumber = _c[0], setScrollNumber = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('auto'), scrollType = _d[0], setScrollType = _d[1];
    var getScroll = function () {
        var tableDiv = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__["$document"].getElementsByClassName('table-wrap')[0];
        if (tableDiv) {
            setScrollWidth("".concat(tableDiv.scrollWidth, "px"));
            setScrollType(tableDiv.scrollWidth > tableDiv.clientWidth ? 'scroll' : 'auto');
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        getScroll();
    }, [props.columns]);
    _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__["$window"].addEventListener('resize', getScroll);
    var onScrollCapture = function () {
        if (scrollRef.current) {
            setScrollNumber(scrollRef.current.scrollLeft);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-custom-table".concat(data.length > 0 ? '' : ' empty-task-table'), onMouseEnter: getScroll },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: scrollRef, className: "scroll-bar", onScrollCapture: onScrollCapture },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "scroll", style: {
                    width: scrollWidth,
                    height: '1px',
                    overflow: scrollType,
                } })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Table, __assign({}, props, { onColumnClick: props.onColumnClick, refTable: scrollRef, miniNumTdWidth: miniNumTdWidth, scrollNumber: scrollNumber, columns: props.columns, data: data || [] }))));
}


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAlign", function() { return TextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedDirection", function() { return FixedDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollProcess", function() { return ScrollProcess; });
var TextAlign;
(function (TextAlign) {
    TextAlign["revert"] = "revert";
    TextAlign["unset"] = "unset";
    TextAlign["left"] = "left";
    TextAlign["center"] = "center";
    TextAlign["end"] = "end";
    TextAlign["justify"] = "justify";
    TextAlign["right"] = "right";
})(TextAlign || (TextAlign = {}));
var FixedDirection;
(function (FixedDirection) {
    FixedDirection["left"] = "left";
    FixedDirection["right"] = "right";
    FixedDirection["auto"] = "";
})(FixedDirection || (FixedDirection = {}));
var ScrollProcess;
(function (ScrollProcess) {
    ScrollProcess["start"] = "start";
    ScrollProcess["process"] = "process";
    ScrollProcess["end"] = "end";
})(ScrollProcess || (ScrollProcess = {}));


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/CustomTable/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitWidth", function() { return getInitWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemClassName", function() { return getItemClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemStyle", function() { return getItemStyle; });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__);


var getInitWidth = function (columns) {
    var w = 0;
    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        if (/^[0-9]+$/.test(String(column.width))) {
            w += Number(column.width);
        }
        else {
            return null;
        }
    }
    return w;
};
var getItemClassName = function (column, index, lastFixedLeft, firstFixedRight) {
    var _a;
    return Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__["classSet"])((_a = {},
        _a[column.className || ''] = true,
        _a['fixed-left'] = column.fixed === _interface__WEBPACK_IMPORTED_MODULE_0__["FixedDirection"].left,
        _a['fixed-right'] = column.fixed === _interface__WEBPACK_IMPORTED_MODULE_0__["FixedDirection"].right,
        _a['last-fixed-left'] = index === lastFixedLeft,
        _a['first-fixed-right'] = index === firstFixedRight,
        _a['align-right'] = column.textAlign === _interface__WEBPACK_IMPORTED_MODULE_0__["TextAlign"].right,
        _a['align-center'] = column.textAlign === _interface__WEBPACK_IMPORTED_MODULE_0__["TextAlign"].center,
        _a));
};
var getItemStyle = function (column) {
    var style = {};
    if (column.width) {
        style.width = column.width + 'px';
    }
    if (column.fixed) {
        style[column.fixed] = column.position + 'px';
    }
    return style;
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/Pagination/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/Pagination/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Pagination/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var PAGE_OFFSET = 4;
var Pagination = function (_a) {
    var currentPage = _a.currentPage, maxPage = _a.maxPage, forceShow = _a.forceShow, showSizeChanger = _a.showSizeChanger, _b = _a.pageOffset, pageOffset = _b === void 0 ? PAGE_OFFSET : _b, props = __rest(_a, ["currentPage", "maxPage", "forceShow", "showSizeChanger", "pageOffset"]);
    currentPage = Number(currentPage);
    maxPage = Number(maxPage);
    var start = currentPage - pageOffset;
    var end = currentPage + pageOffset;
    // 确保最多展示 2*offset+1 个
    if (start < 1) {
        var padding = Math.abs(1 - start);
        start += padding;
        end += padding;
    }
    else if (end > maxPage) {
        var padding = Math.abs(end - maxPage);
        start -= padding;
        end -= padding;
    }
    // 防止越界
    start = Math.max(1, start);
    end = Math.min(end, maxPage);
    // 生成页码列表
    var list = Array.from(Array(end - start + 1).keys()).map(function (_) { return _ + start; });
    var showHead = currentPage !== 1;
    var showTail = currentPage !== maxPage && maxPage !== 1;
    var showJumpPrev = list.indexOf(1) === -1;
    var showJumpNext = list.indexOf(maxPage) === -1;
    var showJumpPerPage = maxPage > 5;
    var onClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (page) {
        if (page === currentPage) {
            return;
        }
        if (props.onPageChange) {
            props.onPageChange(page);
        }
    }, [currentPage, props.onPageChange]);
    var onJump = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (offset) {
        var page = currentPage + offset;
        if (page < 1) {
            page = 1;
        }
        else if (page > maxPage) {
            page = maxPage;
        }
        onClick(page);
    }, [currentPage, props.onPageChange]);
    // 是否只有1页时显示分页
    /* if (!forceShow && list.length <= 1) {
        return null;
    } */
    return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", { className: showSizeChanger ? "umu-pagination-bar umu-pagination-bar-change" : "umu-pagination-bar" },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", { className: "page-list" },
            showHead ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onClick(1); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('首页'))) : null,
            showJumpPerPage && showHead ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onJump(-1); } },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "SmallBack", className: showSizeChanger ? 'small-more-icon gray' : 'small-more-icon blue' }))) : null,
            showJumpPrev ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onJump(-10); } }, "...")) : null,
            list.map(function (page) {
                return (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { key: page, className: 'page-item' + (page === currentPage ? ' current' : ''), onClick: function () { return onClick(page); } }, page));
            }),
            showJumpNext ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onJump(10); } }, "...")) : null,
            forceShow || (showJumpPerPage && showTail) ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onJump(1); } },
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "SmallMore", className: showSizeChanger ? 'small-more-icon gray' : 'small-more-icon blue' }))) : null,
            showTail || forceShow ? (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", { className: "page-item", onClick: function () { return onClick(maxPage); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('尾页'))) : null)));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/ProgramStatusBar/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/ProgramStatusBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramStatusBar", function() { return ProgramStatusBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/ProgramStatusBar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);





var ProgramStatusBar = function (props) {
    var _a = props.customClass, customClass = _a === void 0 ? '' : _a, customStyle = props.customStyle;
    var tip = "".concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('展示学员对各学习任务的完成情况。其中：'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('1. 完成任务数是分配给当前学员且已完成的任务数量。完成率指该学员已完成的任务数占已分配任务数的百分比。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('2. 已完成：任务按时完成。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('3. 逾期完成：任务完成，但超出了指定的完成时间。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('4. 未完成：任务未完成，但尚未到达指定的完成时间，或该任务未指定完成时间。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('5. 逾期未完成：任务未完成，且已超出指定的完成时间。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('6. 非学习任务：该小节并未作为学习任务分配给学员。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('7. 预分配：该小节已作为学习任务预先分配，但尚未到达指定的任务分配时间。'));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "status-bar-wrap ".concat(customClass), style: customStyle },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "status-bar-list" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: '#F0F8F3' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Complete", style: { color: '#4EAA64' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('按时完成'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: '#F0F8F3' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Complete", style: { color: '#FAB400' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期完成'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: 'rgba(221, 78, 64, 0.1)' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Line", style: { color: '#DD4E40' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期未完成'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: '#FFFFFF' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Line", style: { color: '#FBC333' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('未完成，未到期')))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { text: tip, isHTML: true, width: 270, direct: _Tooltip__WEBPACK_IMPORTED_MODULE_3__["TOOLTIP_DIR"].BR },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "tips", style: { width: 16, height: 16, color: '#999999' } }))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/RateCircle/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/RateCircle/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateCircle", function() { return RateCircle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/RateCircle/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var RateCircle = function (props) {
    var _a = props.ratio, ratio = _a === void 0 ? 0 : _a;
    var degree = 360 * (+ratio || 0);
    var style = { background: "conic-gradient(#4caa64 0deg ".concat(degree, "deg, #e0e0e0 ").concat(degree, "deg 360deg)") };
    var percentage = Math.floor(+ratio * 10000) / 100;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "rate-circle-wrap", style: style },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "rate-circle-inner" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
                percentage,
                "%"))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconImgMap", function() { return iconImgMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_MAP", function() { return COLOR_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvatarImage", function() { return getAvatarImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementImg", function() { return getElementImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelElement", function() { return getLabelElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return SearchInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-react-hooks/dist/index.js");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _umu_umu_image_handle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-image-handle/index.js");
/* harmony import */ var _umu_umu_image_handle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_image_handle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/index.ts");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _interface_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _common_images_icons_icon_class_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/icons/icon-class.png");
/* harmony import */ var _common_images_icons_icon_class_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_common_images_icons_icon_class_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_images_icons_icon_group_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/icons/icon-group.png");
/* harmony import */ var _common_images_icons_icon_group_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_common_images_icons_icon_group_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_images_icons_icon_delete_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/icons/icon-delete.png");
/* harmony import */ var _common_images_icons_icon_delete_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_common_images_icons_icon_delete_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_images_icons_icon_department_yellow_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/icons/icon-department-yellow.png");
/* harmony import */ var _common_images_icons_icon_department_yellow_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_common_images_icons_icon_department_yellow_png__WEBPACK_IMPORTED_MODULE_12__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;









var getAvatarWord = businessCommon__WEBPACK_IMPORTED_MODULE_8__["bizComponents"].getAvatarWord;




var OFFSET_X = 4; //偏移补偿
var DELAY_TIME = 500; //截流延迟
var INIT_OFFSET_X = 0;
var iconImgMap = (_a = {},
    _a[_interface_index__WEBPACK_IMPORTED_MODULE_6__["MEMBER_TYPE"].USER] = '',
    _a[_interface_index__WEBPACK_IMPORTED_MODULE_6__["MEMBER_TYPE"].GROUP] = _common_images_icons_icon_group_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    _a[_interface_index__WEBPACK_IMPORTED_MODULE_6__["MEMBER_TYPE"].DEPARTMENT] = _common_images_icons_icon_department_yellow_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    _a[_interface_index__WEBPACK_IMPORTED_MODULE_6__["MEMBER_TYPE"].CLASS] = _common_images_icons_icon_class_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    _a);
var COLOR_MAP = [
    '#ffb91f',
    '#42a5f5',
    '#ff7d7a',
    '#9fc937',
    '#9b65d0',
    '#ffa726',
    '#65b2e9',
    '#f596aa',
    '#3bb6b6',
];
var getAvatarImage = function (accountType, avatar) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: _umu_umu_image_handle__WEBPACK_IMPORTED_MODULE_3__["appendWidth"](avatar || iconImgMap[accountType], 24), className: "department-avatar" });
};
var getElementImg = function (avatar, accountType, label) {
    return avatar || accountType !== _interface_index__WEBPACK_IMPORTED_MODULE_6__["MEMBER_TYPE"].USER ? (getAvatarImage(accountType, avatar)) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "avatar-word-desc" }, getAvatarWord(label)));
};
var getLabelElement = function (data, hideAvatar) {
    var label = data.user_name ||
        data.department_name ||
        data.class_name ||
        data.group_name ||
        data.email ||
        data.phone ||
        data.account ||
        data.login_name ||
        '';
    var backgroundColor = !data.avatar ? COLOR_MAP[Math.floor(Math.random() * 9)] : '';
    return (
    // <Tooltip text={label} theme="department-page-tip">
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "department-member-content" },
        !hideAvatar && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "department-member-icon", style: {
                backgroundColor: backgroundColor,
            } }, getElementImg(data.avatar, data.account_type, label))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "department-member-label" }, label))
    // </Tooltip>
    );
};
var SearchInput = function (props) {
    var list = props.list, onUpdateList = props.onUpdateList, _a = props.placeholder, placeholder = _a === void 0 ? '' : _a, onSearchSuggestions = props.onSearchSuggestions, onSearch = props.onSearch;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(INIT_OFFSET_X), offsetX = _b[0], setOffsetX = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), searchWord = _c[0], setSearchWord = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), searchList = _d[0], setSearchList = _d[1];
    var keywordZoneRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (keywordZoneRef.current) {
            var totalHeight = keywordZoneRef.current.offsetHeight;
            keywordZoneRef.current.scrollTop = totalHeight;
        }
        if (inputRef && inputRef.current && inputRef.current.parentElement) {
            inputRef.current.parentElement;
            var newOffsetX = inputRef.current.getBoundingClientRect().left -
                inputRef.current.parentElement.getBoundingClientRect().left;
            setOffsetX(newOffsetX);
        }
    }, [list]);
    var onCloseMember = function (item) {
        onUpdateList(list.filter(function (_) { return _.id !== item.id; }));
    };
    var getSearchList = Object(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useDebounce"])(function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onSearchSuggestions(searchWord)];
                case 1:
                    res = _a.sent();
                    setSearchList(res || []);
                    return [2 /*return*/];
            }
        });
    }); }, DELAY_TIME);
    var onChange = function (keyword) {
        setSearchWord(keyword);
        getSearchList();
    };
    // 点击推荐项
    var onSuggestionItemClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (item) {
        if (!list.find(function (_a) {
            var id = _a.id;
            return item.id === id;
        })) {
            var newList = __spreadArray([], list, true);
            newList.push(item);
            onUpdateList(newList);
            setSearchList([]);
            setSearchWord('');
        }
    }, [list]);
    var handleSearch = function () {
        onSearch && onSearch(list);
    };
    // 已选内容
    var renderMemberList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return list.map(function (item, index) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { key: "member-".concat(item.id, "-").concat(index) },
                item.label,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "icon-search-close", src: _common_images_icons_icon_delete_png__WEBPACK_IMPORTED_MODULE_11___default.a, onClick: function () {
                        onCloseMember(item);
                    } })));
        });
    }, [list]);
    /* 联想搜索列表 */
    var renderSearchResult = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return searchList.length ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-member" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "search-list", style: {
                    left: offsetX - OFFSET_X,
                } }, searchList.map(function (item, index) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: "search-item", key: "search-".concat(item.id, "-item-").concat(index), onClick: function () {
                        onSuggestionItemClick(item);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "label-content" }, item.label)));
            })))) : null;
    }, [searchList, offsetX]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-input-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-element" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "keyword-list-zone", ref: keywordZoneRef },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null,
                    renderMemberList,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { ref: inputRef, className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__["classSet"])({
                            'input-member': true,
                            'member-input-member': !!list.length,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_index__WEBPACK_IMPORTED_MODULE_4__["Input"], { className: "search-member-element", defaultValue: searchWord, onChange: onChange, autoFocus: true, option: {
                                placeholder: !!list.length ? '' : placeholder,
                            } })))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-btn", onClick: handleSearch },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_5__["Iconfont"], { type: "Search", className: "tip-icon", style: { width: 16, height: 16, color: '#ffffff' } }))),
        renderSearchResult));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/SplitLine/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/SplitLine/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitLine", function() { return SplitLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SplitLine/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var SplitLine = function (props) {
    var _a = props.customClass, customClass = _a === void 0 ? '' : _a, customStyle = props.customStyle;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "horizontal-split-line ".concat(customClass), style: customStyle });
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/StatusBar/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/StatusBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBar", function() { return StatusBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/StatusBar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);





var StatusBar = function (props) {
    var _a = props.customClass, customClass = _a === void 0 ? '' : _a, customStyle = props.customStyle;
    var tip = "".concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('展示学员对各学习任务的完成情况。其中：'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('1. 完成任务数是分配给当前学员且已完成的任务数量。完成率指该学员已完成的任务数占已分配任务数的百分比。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('2. 已完成：任务按时完成。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('3. 逾期完成：任务完成，但超出了指定的完成时间。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('4. 未完成：任务未完成，但尚未到达指定的完成时间，或该任务未指定完成时间。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('5. 逾期未完成：任务未完成，且已超出指定的完成时间。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('6. 非学习任务：该小节并未作为学习任务分配给学员。'), "\n    <br/>").concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('7. 预分配：该小节已作为学习任务预先分配，但尚未到达指定的任务分配时间。'));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "status-bar-wrap ".concat(customClass), style: customStyle },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "status-bar-list" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: 'rgba(30, 110, 230, 0.08)' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Line", style: { color: '#1E6EE6' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('预分配'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: '#F0F8F3' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Complete", style: { color: '#4EAA64' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('按时完成'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: '#F0F8F3' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Complete", style: { color: '#FAB400' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期完成'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: '#FCFCFC' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Complete", style: { color: '#999999' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('非学习任务'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: 'rgba(221, 78, 64, 0.1)' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Line", style: { color: '#DD4E40' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期未完成'))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { style: { background: '#FFFFFF' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Line", style: { color: '#FBC333' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('未完成，未到期')))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { text: tip, isHTML: true, width: 270, direct: _Tooltip__WEBPACK_IMPORTED_MODULE_3__["TOOLTIP_DIR"].BR },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "tips", style: { width: 16, height: 16, color: '#999999' } }))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/Table/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/Table/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Table/interface.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Table/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




var DEFAULT_COLUMN_WIDTH = '120px';
var Table = function (props) {
    var data = props.data, columns = props.columns;
    // 渲染表头
    var headRenderer = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, columns.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { key: item.key || item.dataIndex, style: {
                    width: item.width !== undefined ? item.width : DEFAULT_COLUMN_WIDTH,
                    left: index === 0 ? 0 : index === 1 ? '120px' : undefined,
                }, className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__["classSet"])({
                    'fixed-column-left': item.fixed === _interface__WEBPACK_IMPORTED_MODULE_2__["FixedPosition"].left,
                    'fixed-column-right': item.fixed === _interface__WEBPACK_IMPORTED_MODULE_2__["FixedPosition"].right,
                }) }, item.title)); }))));
    };
    // 渲染表内容
    var bodyRenderer = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: item.id }, columns.map(function (col, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { key: col.dataIndex, style: {
                width: col.width !== undefined ? col.width : DEFAULT_COLUMN_WIDTH,
                left: index === 0 ? 0 : index === 1 ? '120px' : undefined,
            }, className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_1__["classSet"])({
                'fixed-column-left': col.fixed === _interface__WEBPACK_IMPORTED_MODULE_2__["FixedPosition"].left,
                'fixed-column-right': col.fixed === _interface__WEBPACK_IMPORTED_MODULE_2__["FixedPosition"].right,
            }) }, item[col.dataIndex])); }))); })));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", { className: "study-task-table-component-wrap" /* border="1" */ },
        headRenderer(),
        bodyRenderer()));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/Table/interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAlign", function() { return TextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedDirection", function() { return FixedDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollProcess", function() { return ScrollProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPosition", function() { return FixedPosition; });
/* export interface IData {
    [key: string]: any;
} */
var TextAlign;
(function (TextAlign) {
    TextAlign["revert"] = "revert";
    TextAlign["unset"] = "unset";
    TextAlign["left"] = "left";
    TextAlign["center"] = "center";
    TextAlign["end"] = "end";
    TextAlign["justify"] = "justify";
    TextAlign["right"] = "right";
})(TextAlign || (TextAlign = {}));
var FixedDirection;
(function (FixedDirection) {
    FixedDirection["left"] = "left";
    FixedDirection["right"] = "right";
    FixedDirection["auto"] = "";
})(FixedDirection || (FixedDirection = {}));
var ScrollProcess;
(function (ScrollProcess) {
    ScrollProcess["start"] = "start";
    ScrollProcess["process"] = "process";
    ScrollProcess["end"] = "end";
})(ScrollProcess || (ScrollProcess = {}));
/* export interface IColumn {
    dataIndex: string; // data 索引，支持 'a.b.c' 的形式支持多层级数据
    name: string | JSX.Element; // th
    title?: string; // 鼠标 hover title，未设置则取 name
    width?: number | string; // 100px、10%、'auto'
    fixed?: FixedDirection; // 当前列是否固定悬浮, 须配合 width 使用(必须为具体值)
    textAlign?: TextAlign;
    className?: string;
    render?: IRender; // 自定义渲染 td
} */
/* export interface IProps {
    width?: number; // table 宽度，默认 100%，超过容器自动滚动
    data: IData[];
    refTable?: RefObject<HTMLDivElement>;
    scrollNumber?: number;
    columns: IColumn[];
    miniNumTdWidth?: number;
    onColumnClick?: (item: IData, dataIndex?: string) => void;
    blankListText?: string;
    blank?: string | JSX.Element; // 为空时的占位
    children?: string | JSX.Element; // 为空时的占位
} */
var FixedPosition;
(function (FixedPosition) {
    FixedPosition["left"] = "left";
    FixedPosition["right"] = "right";
})(FixedPosition || (FixedPosition = {}));


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_DIR", function() { return TOOLTIP_DIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITriggerType", function() { return ITriggerType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-react-hooks/dist/index.js");
/* harmony import */ var _umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TOOLTIP_DIR;
(function (TOOLTIP_DIR) {
    TOOLTIP_DIR["LEFT"] = "left";
    TOOLTIP_DIR["RIGHT"] = "right";
    TOOLTIP_DIR["TOP"] = "top";
    TOOLTIP_DIR["BOTTOM"] = "bottom";
    TOOLTIP_DIR["BL"] = "bottomLeft";
    TOOLTIP_DIR["BR"] = "bottomRight";
})(TOOLTIP_DIR || (TOOLTIP_DIR = {}));
// 生成随机数ID作为弹窗标识
var DELAY_TIME = 200; // 防抖操作200ms
var getStyleByCurrent = function (ref, offset, direct) {
    var result = {};
    if (ref && ref.current) {
        var current = ref.current.getBoundingClientRect();
        var scrollTop = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["$document"].documentElement.scrollTop;
        var scrollLeft = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["$document"].documentElement.scrollLeft;
        if (direct === TOOLTIP_DIR.BL) {
            var x_1 = current.left + offset.left + scrollLeft;
            var y_1 = current.bottom + offset.top + scrollTop;
            result = {
                position: 'absolute',
                left: x_1,
                top: y_1,
                width: offset.width ? offset.width + 'px' : 'auto',
                boxSizing: 'border-box',
            };
            return result;
        }
        if (direct === TOOLTIP_DIR.BR) {
            var x_2 = current.right + offset.left + scrollLeft;
            var y_2 = current.bottom + offset.top + scrollTop;
            result = {
                position: 'absolute',
                left: x_2,
                top: y_2,
                width: offset.width ? offset.width + 'px' : 'auto',
                transform: ' translateX(-100%)',
                boxSizing: 'border-box',
            };
            return result;
        }
        var x = current.left + offset.left + current.width / 2 + scrollLeft;
        var y = current.bottom + offset.top + scrollTop;
        result = {
            position: 'absolute',
            left: x,
            top: y,
            width: offset.width ? offset.width + 'px' : 'auto',
            transform: 'translateX(-50%)',
            boxSizing: 'border-box',
        };
    }
    return result;
};
var ITriggerType;
(function (ITriggerType) {
    ITriggerType["HOVER"] = "hover";
    ITriggerType["CLICK"] = "Click";
})(ITriggerType || (ITriggerType = {}));
var Tooltip = function (props) {
    var _a = props.arrow, arrow = _a === void 0 ? true : _a, _b = props.topOffset, topOffset = _b === void 0 ? 0 : _b, _c = props.leftOffset, leftOffset = _c === void 0 ? 0 : _c, _d = props.isHTML, isHTML = _d === void 0 ? false : _d, 
    // autoFixPosition = true,
    _e = props.direct, 
    // autoFixPosition = true,
    direct = _e === void 0 ? TOOLTIP_DIR.BOTTOM : _e, width = props.width, _f = props.customStyle, customStyle = _f === void 0 ? {} : _f, children = props.children, _g = props.trigger, trigger = _g === void 0 ? ITriggerType.HOVER : _g;
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isToolShow = _h[0], setIsToolShow = _h[1];
    var tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var showTooltip = function () {
        if (!props.text) {
            return;
        }
        setIsToolShow(true);
    };
    var hideTooltip = function () {
        setIsToolShow(false);
    };
    var getStyleCssText = function () {
        var offset = {
            top: topOffset + (arrow ? 10 : 0),
            left: leftOffset,
            // width: width || 400,
            width: width,
        };
        var style = getStyleByCurrent(tooltipRef, offset, direct);
        return style;
    };
    var createMsgPanel = function () { return __awaiter(void 0, void 0, void 0, function () {
        var element;
        return __generator(this, function (_a) {
            element = _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["$document"].createElement('div');
            elementRef.current = element;
            element.className = 'study-task-tooltip-container';
            element.style.cssText = 'position: absolute; top: 0px; left: 0px; width: 100%;';
            _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["$document"].body.appendChild(element);
            react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(renderMsg(props.text), element);
            return [2 /*return*/];
        });
    }); };
    var getShowMsgInfo = function (text) {
        return isHTML ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "info", dangerouslySetInnerHTML: {
                __html: text,
            } })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "info" }, text));
    };
    var toogleTooltip = Object(_umu_umu_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useDebounce"])(function () {
        // 防止接口请求过快，加入截流函数
        var element = elementRef.current;
        try {
            if (element) {
                _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["$document"].body.removeChild(element);
                elementRef.current = null;
            }
        }
        catch (e) {
            console.log('tooltip remove child element failed:', e);
        }
        if (isToolShow) {
            createMsgPanel();
        }
    }, DELAY_TIME);
    var onMouseEnter = function () {
        if (trigger === ITriggerType.HOVER) {
            showTooltip();
        }
    };
    var onMouseLeave = function () {
        if (trigger === ITriggerType.HOVER) {
            hideTooltip();
        }
    };
    var onClick = function () {
        if (trigger === ITriggerType.CLICK) {
            isToolShow ? hideTooltip() : showTooltip();
        }
    };
    // 渲染弹窗
    var renderMsg = function (text) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: getStyleCssText(), className: "study-task-tooltip theme-".concat(props.theme || 'default') },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tooltips-message", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }, getShowMsgInfo(text)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tooltips-icon".concat(props.arrow ? ' show-arrow' : '') })));
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        toogleTooltip();
    }, [isToolShow]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { ref: tooltipRef, style: __assign({ display: 'inline-block' }, customStyle), className: "tooltip-target", onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onClick: onClick }, children));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/components/basic/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomTable_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomTable", function() { return _CustomTable_index__WEBPACK_IMPORTED_MODULE_0__["CustomTable"]; });

/* harmony import */ var _Pagination_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Pagination/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination_index__WEBPACK_IMPORTED_MODULE_1__["Pagination"]; });

/* harmony import */ var _ProgramStatusBar_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/ProgramStatusBar/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramStatusBar", function() { return _ProgramStatusBar_index__WEBPACK_IMPORTED_MODULE_2__["ProgramStatusBar"]; });

/* harmony import */ var _RateCircle_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/RateCircle/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RateCircle", function() { return _RateCircle_index__WEBPACK_IMPORTED_MODULE_3__["RateCircle"]; });

/* harmony import */ var _SearchInput_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInput", function() { return _SearchInput_index__WEBPACK_IMPORTED_MODULE_4__["SearchInput"]; });

/* harmony import */ var _SplitLine_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SplitLine/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitLine", function() { return _SplitLine_index__WEBPACK_IMPORTED_MODULE_5__["SplitLine"]; });

/* harmony import */ var _StatusBar_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/StatusBar/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBar", function() { return _StatusBar_index__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]; });

/* harmony import */ var _Table_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Table/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table_index__WEBPACK_IMPORTED_MODULE_7__["Table"]; });

/* harmony import */ var _Tooltip_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/Tooltip/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip_index__WEBPACK_IMPORTED_MODULE_8__["Tooltip"]; });












/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/empty-cn.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/empty-cn.abb31608.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/empty-en.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/empty-en.66d936c6.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/empty-table.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/empty-table.fe87c4c6.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/signIn_avatar_1.cdcc8de2.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/signIn_avatar_2.e9ed6ea7.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_3.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/signIn_avatar_3.8218c9d7.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_4.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/signIn_avatar_4.1072cfe8.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_5.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/signIn_avatar_5.2d1e14ca.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_6.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/normal/images/signIn_avatar_6.d39ac23b.png";

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/routePages/@studyTask/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routePages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseStudyTaskGroup", function() { return _routePages__WEBPACK_IMPORTED_MODULE_1__["CourseStudyTaskGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseStudyTaskGroupDetail", function() { return _routePages__WEBPACK_IMPORTED_MODULE_1__["CourseStudyTaskGroupDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramStudyTaskGroup", function() { return _routePages__WEBPACK_IMPORTED_MODULE_1__["ProgramStudyTaskGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramStudyTaskGroupDetail", function() { return _routePages__WEBPACK_IMPORTED_MODULE_1__["ProgramStudyTaskGroupDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyTaskStudyTaskDetail", function() { return _routePages__WEBPACK_IMPORTED_MODULE_1__["MyTaskStudyTaskDetail"]; });






/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/interface/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSESSMENT_TAB_TYPE", function() { return ASSESSMENT_TAB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_TYPE", function() { return SORT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITaskDisplayType", function() { return ITaskDisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTextType", function() { return RoleTextType; });
/* harmony import */ var common_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/common/interface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITaskStatus", function() { return common_interface__WEBPACK_IMPORTED_MODULE_0__["ITaskStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEMBER_TYPE", function() { return common_interface__WEBPACK_IMPORTED_MODULE_0__["MEMBER_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FROM", function() { return common_interface__WEBPACK_IMPORTED_MODULE_0__["FROM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateType", function() { return common_interface__WEBPACK_IMPORTED_MODULE_0__["UpdateType"]; });


var ASSESSMENT_TAB_TYPE;
(function (ASSESSMENT_TAB_TYPE) {
    ASSESSMENT_TAB_TYPE["PROJECT"] = "project";
    ASSESSMENT_TAB_TYPE["MERGER"] = "merger";
    ASSESSMENT_TAB_TYPE["RECORDS"] = "records";
    ASSESSMENT_TAB_TYPE["ABILITY_CARD"] = "abilityCardList";
    ASSESSMENT_TAB_TYPE["ADD_ABILITY_CARD"] = "addAbilityCard";
})(ASSESSMENT_TAB_TYPE || (ASSESSMENT_TAB_TYPE = {}));
var SORT_TYPE;
(function (SORT_TYPE) {
    SORT_TYPE["UP"] = "1";
    SORT_TYPE["DOWN"] = "2";
})(SORT_TYPE || (SORT_TYPE = {}));
var ITaskDisplayType;
(function (ITaskDisplayType) {
    ITaskDisplayType[ITaskDisplayType["GROUP"] = 2] = "GROUP";
    ITaskDisplayType[ITaskDisplayType["CLASS"] = 3] = "CLASS";
    ITaskDisplayType[ITaskDisplayType["DEPARTMENT"] = 4] = "DEPARTMENT";
})(ITaskDisplayType || (ITaskDisplayType = {}));
var RoleTextType;
(function (RoleTextType) {
    RoleTextType["CLASS"] = "class";
    RoleTextType["CLASS_DEPARTMENT"] = "classDepartment";
    RoleTextType["ALL"] = "classDepartmentGroup";
})(RoleTextType || (RoleTextType = {}));


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/interface/program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSESSMENT_TAB_TYPE", function() { return ASSESSMENT_TAB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_TYPE", function() { return SORT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITaskStatus", function() { return ITaskStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITaskDisplayType", function() { return ITaskDisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBER_TYPE", function() { return MEMBER_TYPE; });
/* harmony import */ var common_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/common/interface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FROM", function() { return common_interface__WEBPACK_IMPORTED_MODULE_0__["FROM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateType", function() { return common_interface__WEBPACK_IMPORTED_MODULE_0__["UpdateType"]; });


var ASSESSMENT_TAB_TYPE;
(function (ASSESSMENT_TAB_TYPE) {
    ASSESSMENT_TAB_TYPE["PROJECT"] = "project";
    ASSESSMENT_TAB_TYPE["MERGER"] = "merger";
    ASSESSMENT_TAB_TYPE["RECORDS"] = "records";
    ASSESSMENT_TAB_TYPE["ABILITY_CARD"] = "abilityCardList";
    ASSESSMENT_TAB_TYPE["ADD_ABILITY_CARD"] = "addAbilityCard";
})(ASSESSMENT_TAB_TYPE || (ASSESSMENT_TAB_TYPE = {}));
var SORT_TYPE;
(function (SORT_TYPE) {
    SORT_TYPE["UP"] = "1";
    SORT_TYPE["DOWN"] = "2";
})(SORT_TYPE || (SORT_TYPE = {}));
var ITaskStatus;
(function (ITaskStatus) {
    ITaskStatus["ALL"] = "0";
    ITaskStatus["COMPLETED"] = "1";
    ITaskStatus["UNCOMPLETED"] = "2";
})(ITaskStatus || (ITaskStatus = {}));
var ITaskDisplayType;
(function (ITaskDisplayType) {
    ITaskDisplayType[ITaskDisplayType["GROUP"] = 2] = "GROUP";
    ITaskDisplayType[ITaskDisplayType["CLASS"] = 3] = "CLASS";
    ITaskDisplayType[ITaskDisplayType["DEPARTMENT"] = 4] = "DEPARTMENT";
})(ITaskDisplayType || (ITaskDisplayType = {}));
var MEMBER_TYPE;
(function (MEMBER_TYPE) {
    MEMBER_TYPE["USER"] = "user";
    MEMBER_TYPE["GROUP"] = "group";
    MEMBER_TYPE["CLASS"] = "class";
    MEMBER_TYPE["DEPARTMENT"] = "department";
})(MEMBER_TYPE || (MEMBER_TYPE = {}));


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroup/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroup/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseStudyTaskGroup", function() { return CourseStudyTaskGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/components/taskLabel/index.tsx");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Checkbox/index.tsx");
/* harmony import */ var _common_components_Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.tsx");
/* harmony import */ var _common_components_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/index.ts");
/* harmony import */ var _components_basic_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/index.ts");
/* harmony import */ var _components_basic_SearchInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.tsx");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroup/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_OrganizationInfoCell__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/OrganizationInfoCell/index.tsx");
/* harmony import */ var common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/common/components/taskStatusRadio/index.tsx");
/* harmony import */ var _components_GroupDetailDialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/GroupDetailDialog/index.tsx");
/* harmony import */ var _components_EmptyTable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/EmptyTable/index.tsx");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _myTask_components_avatar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/@myTask/components/avatar/index.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


























var Loading = common__WEBPACK_IMPORTED_MODULE_3__["components"].Loading;
var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["Modal"].confirm;
var downloadFileByOpenWindow = businessCommon__WEBPACK_IMPORTED_MODULE_22__["bizServices"].downloadFileByOpenWindow;
var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
var ColumnLabelMap = {
    assign_member_cnt: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('人数'),
    student_complete_rate: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率'),
    task_complete_rate: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务完成率'),
};
var ETableStatus;
(function (ETableStatus) {
    ETableStatus["DEFAULT"] = "default";
    ETableStatus["BATCH_MODIFY"] = "batchModify";
    ETableStatus["BatchModifyStudyRateColumns"] = "batchModifyStudyRateColumns";
})(ETableStatus || (ETableStatus = {}));
var UpdateType;
(function (UpdateType) {
    UpdateType["autoAssign"] = "auto_assign";
    UpdateType["assignElective"] = "assign_elective";
    UpdateType["studentNotifySwitch"] = "student_notify_switch";
    UpdateType["departmentManagerNotifySwitch"] = "department_manager_notify_switch";
})(UpdateType || (UpdateType = {}));
var UpdateMsgType = {
    student_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启学员通知'),
    student_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭学员通知'),
    department_manager_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启直属部门负责人通知'),
    department_manager_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭直属部门负责人通知'),
};
var getUpdateMsgByType = function (type, value) {
    var key = type + (value ? '_open' : '_close');
    return UpdateMsgType[key];
};
/**
 * 主组件
 * @returns ReactComponent
 */
var CourseStudyTaskGroup = function (props) {
    var _a;
    var onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), sourceData = _b[0], setSourceData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), headList = _c[0], setHeadList = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), dataList = _d[0], setDataList = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), selectedRow = _f[0], setSelectedRow = _f[1];
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ETableStatus.DEFAULT), tableStatus = _g[0], setTableStatus = _g[1];
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__assign({}, _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_PAGE_INFO"])), pageInfo = _h[0], setPageInfo = _h[1]; // 分页信息
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), selectedAccounts = _j[0], setSelectedAccounts = _j[1]; // 筛选条件：搜索框搜索内容
    var _k = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_interface__WEBPACK_IMPORTED_MODULE_14__["ITaskStatus"].ALL), selectedTaskStatus = _k[0], setSelectedTaskStatus = _k[1]; // 筛选条件：全部、已完成、未完成
    var _l = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([
        _interface__WEBPACK_IMPORTED_MODULE_14__["ITaskDisplayType"].CLASS,
        _interface__WEBPACK_IMPORTED_MODULE_14__["ITaskDisplayType"].DEPARTMENT,
        _interface__WEBPACK_IMPORTED_MODULE_14__["ITaskDisplayType"].GROUP,
    ]), selectedParentType = _l[0], setSelectedParentType = _l[1];
    var _m = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), memberList = _m[0], setMemberList = _m[1];
    var _o = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isShowMoreOperation = _o[0], setIsShowMoreOperation = _o[1];
    var isToB = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_2__["isEnterpriseAccount"])();
    var getIconType = function (type) {
        var colType = type;
        if (colType == '101') {
            colType = '9';
        }
        else if (colType == '102') {
            colType = 'learning-group';
        }
        return colType;
    };
    var getColumnHead = function (item) {
        var isEnroll = item.field_name === 'field_enroll';
        if (!item.hasOwnProperty('type_name') && !isEnroll) {
            return ColumnLabelMap[item.field_name] || item.field_name;
        }
        else {
            // 小节
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "table-head-col-session" },
                item.session_index && "".concat(item.session_index, "."),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "icon iconfont icon-course-type-".concat(getIconType(item.type)) }),
                Object(_myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_5__["getSessionLabel"])(isEnroll ? 'field_enroll' : item.type)));
        }
    };
    // 自动分配
    var onSwitchAutoAssign = function (isOpen, data) {
        var accounts = data.map(function (item) {
            var obj = {
                account: item.name,
                account_type: _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_TYPE_MAP"][item.parent_type] || '',
            };
            if (obj.account_type === _interface__WEBPACK_IMPORTED_MODULE_14__["MEMBER_TYPE"].GROUP) {
                obj.user_group_id = item.parent_id;
            }
            else {
                obj.id = item.parent_id;
            }
            return obj;
        });
        var param = {
            obj_id: props.groupId,
            obj_type: 1,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify({ auto_assign: isOpen ? 1 : 0 }),
        };
        return Object(_service_index__WEBPACK_IMPORTED_MODULE_16__["updateConfig"])(param).then(function (res) {
            if (res.status) {
                _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["SnackBar"].show({
                    message: isOpen ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启自动分配新成员') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭自动分配新成员'),
                });
                fetchData(false);
                return true;
            }
            else {
                return false;
            }
        });
    };
    var onSwitchAutoAssignSelections = function (isOpen) {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        onSwitchAutoAssign(isOpen, data);
    };
    // 分配选修小节
    var onSwitchAssignElective = function (isOpen, data) {
        var accounts = data.map(function (item) {
            var obj = {
                account: item.name,
                account_type: _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_TYPE_MAP"][item.parent_type] || '',
            };
            if (obj.account_type === _interface__WEBPACK_IMPORTED_MODULE_14__["MEMBER_TYPE"].GROUP) {
                obj.user_group_id = item.parent_id;
            }
            else {
                obj.id = item.parent_id;
            }
            return obj;
        });
        var param = {
            obj_id: props.groupId,
            obj_type: 1,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify({ assign_elective: isOpen ? 1 : 0 }),
        };
        return Object(_service_index__WEBPACK_IMPORTED_MODULE_16__["updateConfig"])(param).then(function (res) {
            if (res.status) {
                _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["SnackBar"].show({
                    message: isOpen ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启分配选修小节') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭分配选修小节'),
                });
                fetchData(false);
                return true;
            }
            else {
                return false;
            }
        });
    };
    var onSwitchAssignElectiveSelections = function (isOpen) {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        onSwitchAssignElective(isOpen, data);
    };
    var onGetCardWidth = function () {
        if (Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["isLang"])('CN') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["isLang"])('TW') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["isLang"])('JP')) {
            return 320;
        }
        if (Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["isLang"])('EN')) {
            return 360;
        }
        return 380;
    };
    var buildRevokeContent = function (data) {
        var currentPage = props.currentPage;
        if (currentPage === PageType.STUDENTS) {
            if (Array.isArray(data)) {
                var length = data.length;
                return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回这{$0{0= 个,1= 个}}个学习任务？点击“撤回”，这些学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示_v2', length);
            }
            else {
                return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('点击“撤回”，该学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示');
            }
        }
        else {
            return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回全部学习任务？点击“撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示');
        }
    };
    var buildRevokeParams = function (data) {
        var currentPage = props.currentPage, groupId = props.groupId;
        if (currentPage === PageType.STUDENTS) {
            var params = {
                obj_id: groupId,
                obj_type: 1,
            };
            if (Array.isArray(data)) {
                params.student_ids = data.reduce(function (prev, curr) { return prev + ',' + curr.student_id; }, '').slice(1);
            }
            else {
                params.student_id = data.student_id;
            }
            return params;
        }
        else {
            data = data instanceof Array ? data : [data];
            return {
                obj_id: groupId,
                obj_type: 1,
                accounts: JSON.stringify(data.map(function (item) {
                    var obj = {
                        account_type: _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_5__["ACCOUNT_TYPE_MAP"][item.parent_type],
                        umu_ids: [],
                    };
                    if (item.parent_type === _interface__WEBPACK_IMPORTED_MODULE_14__["ITaskDisplayType"].GROUP) {
                        obj.user_group_id = item.parent_id;
                    }
                    else {
                        obj.id = item.parent_id;
                    }
                    return obj;
                })),
            };
        }
    };
    var requestRevokeTask = function (data) {
        var currentPage = props.currentPage;
        var params = buildRevokeParams(data);
        if (currentPage === PageType.STUDENTS) {
            Object(_service_index__WEBPACK_IMPORTED_MODULE_16__["revokeStudentTask"])(params).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["SnackBar"].show({
                        message: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务'),
                    });
                    fetchData(false);
                    Object(_common_components_index__WEBPACK_IMPORTED_MODULE_11__["removeElementsByClass"])('study-task-tooltip-container', false);
                }
            });
        }
        else {
            Object(_service_index__WEBPACK_IMPORTED_MODULE_16__["revokeTask"])(params).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["SnackBar"].show({
                        message: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务'),
                    });
                    fetchData(false);
                    Object(_common_components_index__WEBPACK_IMPORTED_MODULE_11__["removeElementsByClass"])('study-task-tooltip-container', false);
                }
            });
        }
    };
    var onRevoke = function (data) {
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回'),
            content: buildRevokeContent(data),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回'),
            centered: true,
            onOk: function () {
                requestRevokeTask(data);
            },
        });
    };
    var buildParams = function (updateType, accounts, _value) {
        var _a;
        var type = props.type;
        return {
            obj_id: props.groupId,
            obj_type: type || 1,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify((_a = {}, _a[updateType] = _value ? 1 : 0, _a)),
        };
    };
    var onUpdateConfig = function (updateType, _value, _data) {
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_2__["onTransFormAccount"])(_data);
        var param = buildParams(updateType, accounts, _value);
        return new Promise(function (resolve) {
            Object(_service_index__WEBPACK_IMPORTED_MODULE_16__["updateConfig"])(param).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["SnackBar"].show({
                        message: getUpdateMsgByType(updateType, _value),
                    });
                    fetchData(false);
                    resolve(true);
                    return true;
                }
                else {
                    resolve(false);
                    return false;
                }
            });
        });
    };
    var onSwitchSingleStudentNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.studentNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var onSwitchMultiStudentNotifySwitch = function (_value) {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        if (!data.length) {
            return;
        }
        onSwitchSingleStudentNotifySwitch(_value, data);
    };
    var onSwitchSingleDepartmentManagerNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.departmentManagerNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var onSwitchMultiDepartmentManagerNotifySwitch = function (_value) {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        if (!data.length) {
            return;
        }
        onSwitchSingleDepartmentManagerNotifySwitch(_value, data);
    };
    var getEnrollElement = function (data) {
        var isShowCircle = data.field_enroll && data.field_enroll.hasOwnProperty('enroll_pass_rate');
        return isShowCircle ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: Number(data.field_enroll.enroll_pass_rate) })) : (Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_6__["getEnrollStatus"])(data.field_enroll));
    };
    var defaultColumns = headList.map(function (item, index) {
        // 被固定的列数
        var fixed_column_num = sourceData ? sourceData.table_head.fixed_column_num || -1 : -1;
        var obj = {
            name: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "two-row-limited" }, getColumnHead(item)),
            dataIndex: item.field_name,
            className: 'center table-head',
            width: 120,
            fixed: index < fixed_column_num ? _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_13__["FixedDirection"].left : undefined,
        };
        // 部门信息
        if (item.field_name === 'organization_info') {
            obj.name = '';
            obj.width = 270;
            obj.render = function (data, rowIndex) {
                if (rowIndex === void 0) { rowIndex = 0; }
                var currentPage = pageInfo.current_page;
                var size = pageInfo.size;
                var countIndex = (currentPage - 1) * size + rowIndex + 1;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OrganizationInfoCell__WEBPACK_IMPORTED_MODULE_18__["OrganizationInfoCell"], { index: countIndex, data: data, onNameClick: function () {
                        if (props.go) {
                            Object(_common_components_index__WEBPACK_IMPORTED_MODULE_11__["removeElementsByClass"])('study-task-tooltip-container', false);
                            props.go('studyTasks.groupInfo', data.parent_type, data.parent_id, data.name);
                        }
                    }, onSwitchAutoAssign: onSwitchAutoAssign, onSwitchAssignElective: onSwitchAssignElective, onRevoke: onRevoke, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }));
            };
            return obj;
        }
        // 人数
        if (item.field_name === 'assign_member_cnt') {
            obj.width = 100;
            obj.dataIndex = 'total_assign_user_num';
            obj.render = function (data) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.total_assign_user_num || '0'); };
            return obj;
        }
        // 学员完成率
        if (item.field_name === 'student_complete_rate') {
            obj.width = 120;
            obj.name = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                getColumnHead(item),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：部门、分组和班级内完成任务的学员数/部门内已经分配任务的学员数'), arrow: true, width: 270, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_4__["Iconfont"], { type: "tips", className: "tip-icon", style: { width: 16, height: 16, color: '#999999', top: 2 } }))));
            obj.render = function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GroupDetailDialog__WEBPACK_IMPORTED_MODULE_20__["GroupDetailDialog"], { data: data, onSwitchAutoAssign: onSwitchAutoAssign, onSwitchAssignElective: onSwitchAssignElective, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting }), width: onGetCardWidth() },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: data.student_complete_rate })));
            };
            return obj;
        }
        // 任务完成率
        if (item.field_name === 'task_complete_rate') {
            obj.width = 120;
            obj.name = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                getColumnHead(item),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务完成率：部门、分组或班级内所有学员已完成小节任务数/对部门、分组或班级分配小节任务总数'), arrow: true, width: 270, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_4__["Iconfont"], { type: "tips", className: "tip-icon", style: { width: 16, height: 16, color: '#999999', top: 2 } }))));
            obj.render = function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: data.task_complete_rate });
            };
            return obj;
        }
        // 报名
        if (item.field_name === 'field_enroll') {
            obj.width = 120;
            obj.render = getEnrollElement;
            return obj;
        }
        // 小节
        if (/^(field_)/.test(item.field_name)) {
            obj.name = Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_6__["getSessionTitle"])(obj.name, props.groupId, item, function () { return fetchData(false); });
            obj.className = "center table-body-session";
            obj.render = function (data) { return Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_6__["getTaskLabel"])(data, item.field_name); };
            return obj;
        }
        return obj;
    });
    var onSelectAll = function (isCheck) {
        if (isCheck) {
            setSelectedRow(dataList.map(function (item) { return item.key; }));
        }
        else {
            setSelectedRow([]);
        }
    };
    var onSelectSingle = function (isCheck, key) {
        if (isCheck) {
            setSelectedRow(__spreadArray(__spreadArray([], selectedRow, true), [key], false));
        }
        else {
            var data = __spreadArray([], selectedRow, true);
            var index = data.indexOf(key);
            index !== -1 && data.splice(index, 1);
            setSelectedRow(data);
        }
    };
    var onRevokeSelections = function () {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        onRevoke(data);
    };
    // 批量修改规则表头
    var batchModifyColumns = [
        {
            name: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modify-head-organization-info-cell-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "number" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], { unknownIconType: "sub", isChecked: selectedRow.length === dataList.length
                        ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                        : !!selectedRow.length
                            ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].UNKNOWN_CHECK
                            : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: onSelectAll },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "un-select-table" },
                        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('全选'),
                        " ",
                        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已选择 {$0{0= 个,1= 个}}', selectedRow.length))))),
            dataIndex: 'organization_info',
            className: 'table-head',
            width: 350,
            fixed: _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_13__["FixedDirection"].left,
            render: function (data, index) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modify-organization-info-cell-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "number" }, index + 1),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], { isChecked: selectedRow.includes(data.key)
                            ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                            : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: function (isCheck) {
                            onSelectSingle(isCheck, data.key);
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { title: "logo", className: "org-logo", src: _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_5__["ICON_IMAGE_MAP"][data.parent_type] }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "org-name" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: data.name, arrow: true, theme: "dark" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-blue" }, data.name)))));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('分配人数'),
            dataIndex: 'total_assign_user_num',
            className: 'center table-head',
            width: 90,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { textAlign: 'right', paddingRight: 18 } }, data.total_assign_user_num);
            },
        },
        {
            name: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                ColumnLabelMap['student_complete_rate'],
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：部门、分组和班级内完成任务的学员数/部门内已经分配任务的学员数'), arrow: true, width: 270, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_4__["Iconfont"], { type: "tips", className: "tip-icon", style: { width: 16, height: 16, color: '#999999', top: 2 } })))),
            dataIndex: 'student_complete_rate',
            className: 'center table-head',
            width: 120,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: data['student_complete_rate'] });
            },
        },
        {
            name: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                ColumnLabelMap['task_complete_rate'],
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务完成率：部门、分组或班级内所有学员已完成小节任务数/对部门、分组或班级分配小节任务总数'), arrow: true, width: 270, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_4__["Iconfont"], { type: "tips", className: "tip-icon", style: { width: 16, height: 16, color: '#999999', top: 2 } })))),
            dataIndex: 'task_complete_rate',
            className: 'center table-head',
            width: 120,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: data.task_complete_rate });
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('自动分配新学员'),
            dataIndex: 'auto_assign',
            className: 'center table-head',
            width: 120,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_10__["Switch"], { value: data.auto_assign === 1, onSwitch: function (isOpen) {
                        onSwitchAutoAssign(isOpen, [data]);
                    } }));
            },
        },
        {
            name: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('分配选修小节'),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])("- \u66F4\u6539\u201C\u5206\u914D\u9009\u4FEE\u5C0F\u8282\u201D\u5F00\u5173\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5DF2\u5206\u914D\u7684\u5B66\u4E60\u4EFB\u52A1\u3002\u4EC5\u5F53\u201C\u81EA\u52A8\u5206\u914D\u65B0\u6210\u5458\u201D <br/>- \u5F00\u542F\u65F6\uFF0C\u5F71\u54CD\u540E\u7EED\u65B0\u5B66\u5458\u7684\u5B66\u4E60\u4EFB\u52A1\u3002"), arrow: true, isHTML: true, width: 270, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_4__["Iconfont"], { type: "tips", className: "tip-icon", style: { width: 16, height: 16, color: '#999999', top: 2 } })))),
            dataIndex: 'assign_elective',
            className: 'center table-head',
            width: 140,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_10__["Switch"], { value: data.assign_elective === 1, onSwitch: function (isOpen) {
                        onSwitchAssignElective(isOpen, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给学员发送任务通知'),
            dataIndex: 'student_notify_switch',
            className: 'center table-head',
            width: 160,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_10__["Switch"], { value: Number(data.student_notify_switch) === 1, onSwitch: function (value) {
                        onSwitchSingleStudentNotifySwitch(value, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给直属部门负责人发送通知'),
            dataIndex: 'department_manager_notify_switch',
            className: 'center table-head',
            width: 200,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_10__["Switch"], { value: Number(data.department_manager_notify_switch) === 1, onSwitch: function (value) {
                        onSwitchSingleDepartmentManagerNotifySwitch(value, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('操作'),
            dataIndex: 'operation',
            className: 'center table-head',
            width: 100,
            fixed: _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_13__["FixedDirection"].right,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "operation", onClick: function () {
                        onRevoke(data);
                    } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回')));
            },
        },
    ];
    var batchModifyStudyRateColumns = [
        {
            name: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modify-head-organization-info-cell-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "number" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], { unknownIconType: "sub", isChecked: selectedRow.length === dataList.length
                        ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                        : !!selectedRow.length
                            ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].UNKNOWN_CHECK
                            : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: onSelectAll },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "un-select-table" },
                        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('全选'),
                        " ",
                        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已选择 {$0{0= 个,1= 个}}', selectedRow.length))))),
            dataIndex: 'organization_info',
            className: 'table-head',
            width: 300,
            fixed: _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_13__["FixedDirection"].left,
            render: function (data, index) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modify-organization-info-cell-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "number" }, index + 1),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], { isChecked: selectedRow.includes(data.key)
                            ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                            : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: function (isCheck) {
                            onSelectSingle(isCheck, data.key);
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "avatar-wrap" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_avatar__WEBPACK_IMPORTED_MODULE_23__["default"], { userInfo: data }))));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成任务数'),
            dataIndex: 'complete_num',
            className: 'center table-head',
            width: 90,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { textAlign: 'right', paddingRight: 18 } }, data.complete_num);
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成率'),
            dataIndex: 'complete_rate',
            className: 'center table-head',
            width: 120,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: data['complete_rate'] });
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给学员发送任务通知'),
            dataIndex: 'student_notify_switch',
            className: 'center table-head',
            width: 160,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_10__["Switch"], { value: Number(data.student_notify_switch) === 1, onSwitch: function (value) {
                        onSwitchSingleStudentNotifySwitch(value, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给直属部门负责人发送通知'),
            dataIndex: 'department_manager_notify_switch',
            className: 'center table-head',
            width: 200,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_10__["Switch"], { value: Number(data.department_manager_notify_switch) === 1, onSwitch: function (value) {
                        onSwitchSingleDepartmentManagerNotifySwitch(value, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('操作'),
            dataIndex: 'operation',
            className: 'center table-head',
            width: 100,
            fixed: _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_13__["FixedDirection"].right,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "operation", onClick: function () {
                        onRevoke(data);
                    } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回')));
            },
        },
    ];
    var columnObj = (_a = {},
        _a[ETableStatus.DEFAULT] = defaultColumns,
        _a[ETableStatus.BATCH_MODIFY] = batchModifyColumns,
        _a[ETableStatus.BatchModifyStudyRateColumns] = batchModifyStudyRateColumns,
        _a);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var currentPage = props.currentPage, isBatchModifying = props.isBatchModifying;
        if (!currentPage) {
            return;
        }
        switch (currentPage) {
            case PageType.STUDENTS:
                setTableStatus(ETableStatus.BatchModifyStudyRateColumns);
                break;
            case PageType.GROUP_VIEW:
                setTableStatus(isBatchModifying ? ETableStatus.BATCH_MODIFY : ETableStatus.DEFAULT);
                break;
        }
    }, [props.isBatchModifying, props.currentPage]);
    var onUpdateSelectedRow = function (list) {
        var newSelected = [];
        list.forEach(function (item) {
            if (selectedRow.indexOf(item.key) !== -1) {
                newSelected.push(item.key);
            }
        });
        setSelectedRow(newSelected);
    };
    var buildDataListKey = function (list) {
        var currentPage = props.currentPage;
        if (currentPage === PageType.STUDENTS) {
            return list.map(function (item) {
                var obj = Object.assign(item, { key: item.umu_id });
                return obj;
            });
        }
        return list;
    };
    var fetchData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (isLoad, param) {
        var _a;
        if (param === void 0) { param = {}; }
        if (isLoad) {
            setIsLoading(true);
        }
        var currentPage = props.currentPage;
        var requestType = (_a = {},
            _a[PageType.STUDENTS] = {
                params: {
                    group_id: props.groupId,
                    accounts: selectedAccounts,
                    page: pageInfo.current_page,
                    size: pageInfo.size,
                    type: selectedTaskStatus, // 0为全部，1为已完成，2为未完成
                },
                method: _service_index__WEBPACK_IMPORTED_MODULE_16__["getStudentTaskList"],
            },
            _a[PageType.GROUP_VIEW] = {
                params: {
                    course_id: props.groupId,
                    parent_types: selectedParentType.join(','),
                    type: selectedTaskStatus,
                    accounts: selectedAccounts,
                    page: pageInfo.current_page,
                    size: pageInfo.size,
                },
                method: _service_index__WEBPACK_IMPORTED_MODULE_16__["fetchTaskList"],
            },
            _a);
        var params = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_2__["filterParams"])(__assign(__assign({}, requestType[currentPage].params), param));
        requestType[currentPage]
            .method(params)
            .then(function (result) {
            var _a, _b, _c, _d;
            var pageInfo = (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.table_body) === null || _b === void 0 ? void 0 : _b.page_info;
            var list = ((_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.table_body) === null || _d === void 0 ? void 0 : _d.list) || [];
            if (!!Number(pageInfo.total_page_num) && !list.length && pageInfo.current_page > 1) {
                fetchData(isLoad, __assign(__assign({}, param), { page: pageInfo.current_page - 1 }));
                return;
            }
            setSourceData(result.data);
            setHeadList(result.data.table_head.list);
            if (currentPage === PageType.STUDENTS) {
                setDataList(buildDataListKey(list));
            }
            else {
                setDataList(list);
            }
            setPageInfo(result.data.table_body.page_info);
            onUpdateSelectedRow(list);
            props.onQueryChange && props.onQueryChange(params);
            if (props.onDataChange) {
                props.onDataChange('updateEmptyData', result.data.data_count);
            }
        })
            .finally(function () {
            setIsLoading(false);
        });
    }, [
        props.groupId,
        props.currentPage,
        selectedParentType,
        selectedTaskStatus,
        selectedAccounts,
        pageInfo.current_page,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchData(true);
    }, [props.groupId, selectedParentType, selectedTaskStatus, pageInfo.current_page]);
    var buildSearchSuggestionsParams = function (keyword) {
        var currentPage = props.currentPage;
        var params = {
            accounts: keyword,
            group_id: props.groupId,
            is_suggestion: '1',
            search_source: '',
        };
        if (currentPage === PageType.STUDENTS) {
            params.search_source = 'student_task';
        }
        else {
            params.search_source = 'organization_task';
        }
        return params;
    };
    var onSearchSuggestions = function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
        var params, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = buildSearchSuggestionsParams(keyword);
                    return [4 /*yield*/, Object(_service_index__WEBPACK_IMPORTED_MODULE_16__["searchTask"])(params)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, (data || []).map(function (item) {
                            return {
                                id: item.id,
                                label: Object(_components_basic_SearchInput__WEBPACK_IMPORTED_MODULE_15__["getLabelElement"])(__assign(__assign({}, item), { avatar: item.avatar || _components_basic_SearchInput__WEBPACK_IMPORTED_MODULE_15__["iconImgMap"][item.account_type] })),
                                type: item.account_type,
                                account: item.account,
                            };
                        })];
            }
        });
    }); };
    var onTaskStatusChange = function (status) {
        setSelectedTaskStatus(status);
    };
    var onDisplayTypeChange = function (type, isCheck) {
        var arr = Array.from(selectedParentType);
        if (isCheck) {
            arr.push(type);
        }
        else {
            arr.splice(arr.indexOf(type), 1);
        }
        setSelectedParentType(arr);
    };
    // 搜索框搜索条件变更
    var onSearchInputChange = function (data) {
        setMemberList(data);
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_2__["onTransFormAccount"])(data);
        setSelectedAccounts(accounts.length ? JSON.stringify(accounts) : '');
    };
    // 条件查询
    var onSearch = function () {
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_2__["onTransFormAccount"])(memberList);
        var accountsStr = accounts.length === 0 ? '' : JSON.stringify(accounts);
        setSelectedAccounts(accounts.length ? JSON.stringify(accounts) : '');
        fetchData(true, {
            accounts: accountsStr,
        });
    };
    var buildDownloadParams = function () {
        var currentPage = props.currentPage;
        switch (currentPage) {
            case PageType.STUDENTS:
                return {
                    class: 'Logic_Exporter_GroupStudentTaskListExporterModel',
                    params: JSON.stringify({
                        group_id: props.groupId,
                        accounts: selectedAccounts,
                        type: selectedTaskStatus, // 0为全部，1为已完成，2为未完成
                    }),
                };
            case PageType.GROUP_VIEW:
                return {
                    class: 'OrganizingCourseTaskList',
                    params: JSON.stringify({
                        course_id: props.groupId,
                        parent_types: selectedParentType.join(','),
                        accounts: selectedAccounts,
                        type: selectedTaskStatus, // 0为全部，1为已完成，2为未完成
                    }),
                };
            default:
                return {
                    class: '',
                    params: '',
                };
        }
    };
    var reportDownload = function () {
        var params = buildDownloadParams();
        downloadFileByOpenWindow(params.class, params.params);
    };
    var onPageChange = function (page) {
        setPageInfo(__assign(__assign({}, pageInfo), { current_page: page }));
    };
    var onAssignClassClick = function () {
        window.location.href = '/class/index#/classEdit/new';
    };
    var onAssignTaskClick = function () {
        var onAssignEmitted = props.onAssignEmitted;
        onAssignEmitted && onAssignEmitted();
    };
    var onMoreOperationMouseEnter = function () {
        setIsShowMoreOperation(true);
    };
    var onMoreOperationMouseLeave = function () {
        setIsShowMoreOperation(false);
    };
    var renderCheckList = function () {
        return Object(_myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_5__["onGetSearchCheckList"])().map(function (item) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], { key: "checkbox-item-".concat(item.key), isChecked: selectedParentType.includes(item.key)
                    ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                    : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_9__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: function (isCheck) { return onDisplayTypeChange(item.key, isCheck); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "un-select-table" }, item.label)));
        });
    };
    var renderTabs = function () {
        var currentPage = props.currentPage;
        switch (currentPage) {
            case PageType.STUDENTS:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-group studentsRage" },
                    sourceData && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_19__["TaskStatusRadio"], { current: selectedTaskStatus, customStyle: { marginRight: 24 }, completeCount: +sourceData.data_count.complete_num, uncompleteCount: +sourceData.data_count.uncomplete_num, onSelect: onTaskStatusChange })),
                    dataList.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "download-table", onClick: reportDownload }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('下载表格')))));
            case PageType.GROUP_VIEW:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-group" },
                    sourceData && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_19__["TaskStatusRadio"], { current: selectedTaskStatus, customStyle: { marginRight: 24 }, completeCount: +sourceData.data_count.complete_num, uncompleteCount: +sourceData.data_count.uncomplete_num, onSelect: onTaskStatusChange })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-display-checkbox-group" }, renderCheckList()),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex-1" }),
                    dataList.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "download-table", onClick: reportDownload }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('下载表格')))));
            case PageType.GROUP_INFO:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
            default:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        }
    };
    var renderBatchModify = function () {
        var currentPage = props.currentPage;
        switch (currentPage) {
            case PageType.STUDENTS:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_8__["classSet"])({
                            'batch-modify-tools-wrap student-rate': true,
                            'disabled': selectedRow.length === 0,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                if (selectedRow.length === 0) {
                                    return;
                                }
                                onSwitchMultiStudentNotifySwitch(true);
                            } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启学员通知')),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                if (selectedRow.length === 0) {
                                    return;
                                }
                                onSwitchMultiStudentNotifySwitch(false);
                            } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭学员通知')),
                        isToB && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                    if (selectedRow.length === 0) {
                                        return;
                                    }
                                    onSwitchMultiDepartmentManagerNotifySwitch(true);
                                } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启直属部门负责人通知')),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                    if (selectedRow.length === 0) {
                                        return;
                                    }
                                    onSwitchMultiDepartmentManagerNotifySwitch(false);
                                } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭直属部门负责人通知')))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                if (selectedRow.length === 0) {
                                    return;
                                }
                                onRevokeSelections();
                            } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回任务')))));
            case PageType.GROUP_VIEW:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tableStatus === ETableStatus.BATCH_MODIFY && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_8__["classSet"])({
                        'batch-modify-tools-wrap': true,
                        'disabled': selectedRow.length === 0,
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                            if (selectedRow.length === 0) {
                                return;
                            }
                            onSwitchAutoAssignSelections(true);
                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启自动分配新成员')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                            if (selectedRow.length === 0) {
                                return;
                            }
                            onSwitchAutoAssignSelections(false);
                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭自动分配新成员')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                            if (selectedRow.length === 0) {
                                return;
                            }
                            onSwitchAssignElectiveSelections(true);
                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启分配选修小节')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                            if (selectedRow.length === 0) {
                                return;
                            }
                            onSwitchAssignElectiveSelections(false);
                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭分配选修小节')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                            if (selectedRow.length === 0) {
                                return;
                            }
                            onRevokeSelections();
                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回任务')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-wrap ".concat(selectedRow.length === 0 ? '' : 'active'), onMouseEnter: onMoreOperationMouseEnter, onMouseLeave: onMoreOperationMouseLeave },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-text" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('更多操作')),
                            isShowMoreOperation ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "triangleBottom" })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "triangleTop" }))),
                        isShowMoreOperation && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-list-wrap" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-list" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-item ".concat(selectedRow.length === 0 ? 'disabled' : ''), onClick: function () { return onSwitchMultiStudentNotifySwitch(true); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启学员通知')),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-item ".concat(selectedRow.length === 0 ? 'disabled' : ''), onClick: function () { return onSwitchMultiStudentNotifySwitch(false); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭学员通知')),
                                isToB && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-item ".concat(selectedRow.length === 0 ? 'disabled' : ''), onClick: function () {
                                            return onSwitchMultiDepartmentManagerNotifySwitch(true);
                                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启直属部门负责人通知')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-item ".concat(selectedRow.length === 0 ? 'disabled' : ''), onClick: function () {
                                            return onSwitchMultiDepartmentManagerNotifySwitch(false);
                                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭直属部门负责人通知'))))))))))));
            default:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        }
    };
    var handleColumns = function (columns) {
        var toCExcludeColumns = [UpdateType.departmentManagerNotifySwitch];
        return columns.filter(function (item) {
            if (!isToB && toCExcludeColumns.includes(item.dataIndex)) {
                return false;
            }
            return true;
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "course-study-task-group-wrap ".concat(props.currentPage) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_SearchInput__WEBPACK_IMPORTED_MODULE_15__["SearchInput"], { list: memberList, onUpdateList: onSearchInputChange, onSearchSuggestions: onSearchSuggestions, onSearch: onSearch, placeholder: props.placeholder }),
        renderTabs(),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["SplitLine"], { customStyle: { marginTop: 14 } }),
        tableStatus === ETableStatus.DEFAULT && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["StatusBar"], { customClass: "study-task-status-bar", customStyle: { marginTop: 14 } })),
        renderBatchModify(),
        (isLoading || sourceData === undefined) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null),
        !isLoading && sourceData !== undefined && dataList.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmptyTable__WEBPACK_IMPORTED_MODULE_21__["EmptyTable"], { isSearch: !!memberList.length || !!sourceData.data_count.exist_learning_task, onAssignClassClick: onAssignClassClick, onAssignTaskClick: onAssignTaskClick })),
        !isLoading && sourceData !== undefined && dataList.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["CustomTable"], { miniNumTdWidth: 200, columns: handleColumns(columnObj[tableStatus]), data: dataList, customClass: "group-list-wrap" }),
            pageInfo.total_page_num > 1 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Pagination"], { forceShow: false, currentPage: pageInfo.current_page, showSizeChanger: true, maxPage: pageInfo.total_page_num || 1, onPageChange: onPageChange }))))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroupDetail/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroupDetail/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseStudyTaskGroupDetail", function() { return CourseStudyTaskGroupDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/components/taskLabel/index.tsx");
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _common_components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/index.ts");
/* harmony import */ var _components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.tsx");
/* harmony import */ var _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts");
/* harmony import */ var _components_basic_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var _interface_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/index.ts");
/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroupDetail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_DetailOrganizationInfoCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/DetailOrganizationInfoCell/index.tsx");
/* harmony import */ var common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/common/components/taskStatusRadio/index.tsx");
/* harmony import */ var _components_EmptyTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/EmptyTable/index.tsx");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _components_StudentDetailDialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/StudentDetailDialog/index.tsx");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



















var Loading = common__WEBPACK_IMPORTED_MODULE_3__["components"].Loading;
var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_5__["Modal"].confirm;

var downloadFileByOpenWindow = businessCommon__WEBPACK_IMPORTED_MODULE_19__["bizServices"].downloadFileByOpenWindow;
var ColumnLabelMap = {
    assign_member_cnt: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('人数'),
    complete_num: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成任务数'),
    complete_rate: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成率'),
};
var UpdateType;
(function (UpdateType) {
    UpdateType["autoAssign"] = "auto_assign";
    UpdateType["assignElective"] = "assign_elective";
    UpdateType["studentNotifySwitch"] = "student_notify_switch";
    UpdateType["departmentManagerNotifySwitch"] = "department_manager_notify_switch";
})(UpdateType || (UpdateType = {}));
var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
var UpdateMsgType = {
    student_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启学员通知'),
    student_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭学员通知'),
    department_manager_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启直属部门负责人通知'),
    department_manager_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭直属部门负责人通知'),
};
var getUpdateMsgByType = function (type, value) {
    var key = type + (value ? '_open' : '_close');
    return UpdateMsgType[key];
};
/**
 * 主组件
 * @returns ReactComponent
 */
var CourseStudyTaskGroupDetail = function (props) {
    var _a;
    var isShowNotification = props.isShowNotification, placeholder = props.placeholder, onNotificationClick = props.onNotificationClick, onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), sourceData = _b[0], setSourceData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), headList = _c[0], setHeadList = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), dataList = _d[0], setDataList = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__assign({}, _util_const__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_PAGE_INFO"])), pageInfo = _f[0], setPageInfo = _f[1]; // 分页信息
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), selectedAccounts = _g[0], setSelectedAccounts = _g[1]; // 筛选条件：搜索框搜索内容
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_interface_index__WEBPACK_IMPORTED_MODULE_10__["ITaskStatus"].ALL), selectedTaskStatus = _h[0], setSelectedTaskStatus = _h[1]; // 筛选条件：全部、已完成、未完成
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), memberList = _j[0], setMemberList = _j[1];
    var getIconType = function (type) {
        var colType = type;
        if (colType == '101') {
            colType = '9';
        }
        else if (colType == '102') {
            colType = 'learning-group';
        }
        return colType;
    };
    var getColumnHead = function (item) {
        var isEnroll = item.field_name === 'field_enroll';
        if (!item.hasOwnProperty('type_name') && !isEnroll) {
            return ColumnLabelMap[item.field_name] || item.field_name;
        }
        else {
            // 小节
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "table-head-col-session" },
                item.session_index && "".concat(item.session_index, "."),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "icon iconfont icon-course-type-".concat(getIconType(item.type)) }),
                Object(_util_const__WEBPACK_IMPORTED_MODULE_11__["getSessionLabel"])(isEnroll ? 'field_enroll' : item.type)));
        }
    };
    var buildParams = function (updateType, accounts, _value) {
        var _a;
        var pageType = props.pageType;
        return {
            obj_id: props.groupId,
            obj_type: pageType || 1,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify((_a = {}, _a[updateType] = _value ? 1 : 0, _a)),
        };
    };
    var onUpdateConfig = function (updateType, _value, _data) {
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__["onTransFormAccount"])(_data);
        var param = buildParams(updateType, accounts, _value);
        return new Promise(function (resolve) {
            Object(_service_index__WEBPACK_IMPORTED_MODULE_12__["updateConfig"])(param).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_5__["SnackBar"].show({
                        message: getUpdateMsgByType(updateType, _value),
                    });
                    fetchData(false);
                    resolve(true);
                    return true;
                }
                else {
                    resolve(false);
                    return false;
                }
            });
        });
    };
    var onSwitchSingleStudentNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.studentNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var onSwitchSingleDepartmentManagerNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.departmentManagerNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getEnrollElement = function (data) {
        var isShowCircle = data.field_enroll && data.field_enroll.hasOwnProperty('enroll_pass_rate');
        return isShowCircle ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["RateCircle"], { ratio: Number(data.field_enroll.enroll_pass_rate) })) : (Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_2__["getEnrollStatus"])(data.field_enroll));
    };
    var columns = headList.map(function (item, index) {
        // 被固定的列数
        var fixed_column_num = sourceData ? sourceData.table_head.fixed_column_num || -1 : -1;
        var obj = {
            name: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "two-row-limited" }, getColumnHead(item)),
            dataIndex: item.field_name,
            className: "center table-head",
            width: 120,
            fixed: index < fixed_column_num ? _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_8__["FixedDirection"].left : undefined,
        };
        // 部门信息
        if (item.field_name === 'user_info') {
            obj.name = '';
            obj.width = 270;
            obj.render = function (data, rowIndex) {
                if (rowIndex === void 0) { rowIndex = 0; }
                var currentPage = pageInfo.current_page;
                var size = pageInfo.size;
                var countIndex = (currentPage - 1) * size + rowIndex + 1;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DetailOrganizationInfoCell__WEBPACK_IMPORTED_MODULE_14__["DetailOrganizationInfoCell"], { index: countIndex, data: data, onRevoke: onRevoke, noPreassignTime: true, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }));
            };
            return obj;
        }
        // 完成任务数
        if (item.field_name === 'complete_num') {
            obj.width = 100;
            obj.render = function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.complete_num);
            };
            return obj;
        }
        // 完成率
        if (item.field_name === 'complete_rate') {
            obj.width = 120;
            obj.name = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, getColumnHead(item));
            obj.render = function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["Tooltip"], { text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StudentDetailDialog__WEBPACK_IMPORTED_MODULE_18__["StudentDetailDialog"], { data: data, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }), arrow: true, width: 300, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["RateCircle"], { ratio: data.complete_rate })));
            };
            return obj;
        }
        if (item.field_name === 'field_enroll') {
            obj.width = 120;
            obj.render = getEnrollElement;
            return obj;
        }
        // 小节
        if (/^(field_)/.test(item.field_name)) {
            obj.name = Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_2__["getSessionTitle"])(obj.name, props.groupId, item, function () { return fetchData(false); });
            obj.className = "center table-body-session";
            obj.render = function (data) { return Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_2__["getTaskLabel"])(data, item.field_name); };
            return obj;
        }
        return obj;
    });
    var onRevoke = function (data) {
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回'),
            centered: true,
            content: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回全部学习任务？点击“撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示'),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回'),
            onOk: function () {
                var param = {
                    obj_id: props.groupId,
                    obj_type: 1,
                    student_id: data.student_id,
                    parent_id: props.id,
                    parent_type: props.type,
                };
                Object(_service_index__WEBPACK_IMPORTED_MODULE_12__["revokeStudentTask"])(param).then(function (res) {
                    if (res.status) {
                        _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_5__["SnackBar"].show({
                            message: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务'),
                        });
                        fetchData(false);
                        Object(_common_components_index__WEBPACK_IMPORTED_MODULE_6__["removeElementsByClass"])('study-task-tooltip-container', false);
                    }
                });
            },
        });
    };
    var fetchData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (isLoad, param) {
        if (param === void 0) { param = {}; }
        if (isLoad) {
            setIsLoading(true);
        }
        var defaultParam = {
            group_id: props.groupId,
            type: selectedTaskStatus,
            accounts: selectedAccounts,
            page: pageInfo.current_page,
            size: pageInfo.size,
            parent_id: props.id,
            parent_type: props.type,
        };
        var newParam = __assign(__assign({}, defaultParam), param);
        if (!newParam.accounts) {
            delete newParam.accounts;
        }
        Object(_service_index__WEBPACK_IMPORTED_MODULE_12__["getStudentTaskList"])(newParam)
            .then(function (result) {
            var pageInfo = result.data.table_body.page_info;
            var list = result.data.table_body.list || [];
            if (!!Number(pageInfo.total_page_num) && !list.length && pageInfo.current_page > 1) {
                fetchData(isLoad, __assign(__assign({}, param), { page: pageInfo.current_page - 1 }));
                return;
            }
            setSourceData(result.data);
            setHeadList(result.data.table_head.list);
            setDataList(list);
            setPageInfo(pageInfo);
            props.onQueryChange && props.onQueryChange(newParam);
            if (props.onDataChange) {
                props.onDataChange('updateEmptyData', result.data.data_count);
            }
        })
            .finally(function () {
            setIsLoading(false);
        });
    }, [props.groupId, selectedTaskStatus, selectedAccounts, pageInfo.current_page]);
    var reportDownload = function () {
        var param = {
            class: 'Logic_Exporter_GroupStudentTaskListExporterModel',
            params: JSON.stringify({
                group_id: props.groupId,
                parent_id: props.id,
                parent_type: props.type,
                accounts: selectedAccounts,
                type: selectedTaskStatus, // 0为全部，1为已完成，2为未完成
            }),
        };
        downloadFileByOpenWindow(param.class, param.params);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchData(true);
    }, [props.groupId, selectedTaskStatus, pageInfo.current_page]);
    var onSearchSuggestions = function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_service_index__WEBPACK_IMPORTED_MODULE_12__["searchTask"])({
                        accounts: keyword,
                        group_id: props.groupId,
                        is_suggestion: '1',
                        parent_id: props.id,
                        parent_type: props.type,
                        search_source: 'organization_student_task',
                    })];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, (data || []).map(function (item) {
                            return {
                                id: item.id,
                                label: Object(_components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_7__["getLabelElement"])(__assign(__assign({}, item), { avatar: item.avatar || _components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_7__["iconImgMap"][item.account_type] })),
                                type: item.account_type,
                                account: item.account,
                                umu_id: item.umu_id,
                            };
                        })];
            }
        });
    }); };
    var onTaskStatusChange = function (status) {
        setSelectedTaskStatus(status);
    };
    var onSearchInputChange = function (data) {
        setMemberList(data);
    };
    var onSearch = function () {
        var accounts = memberList.map(function (item) {
            var obj = {
                account: item.account,
                account_type: item.type,
            };
            if (obj.account_type === _interface_index__WEBPACK_IMPORTED_MODULE_10__["MEMBER_TYPE"].GROUP) {
                obj.user_group_id = item.id;
            }
            else if (obj.account_type === _interface_index__WEBPACK_IMPORTED_MODULE_10__["MEMBER_TYPE"].USER) {
                obj.student_id = item.id;
                obj.umu_id = item.umu_id;
            }
            else {
                obj.id = item.id;
            }
            return obj;
        });
        setSelectedAccounts(accounts.length === 0 ? '' : JSON.stringify(accounts));
        fetchData(true, {
            accounts: accounts.length === 0 ? '' : JSON.stringify(accounts),
        });
    };
    var onPageChange = function (page) {
        setPageInfo(__assign(__assign({}, pageInfo), { current_page: page }));
    };
    var onAssignClassClick = function () {
        window.location.href = '/class/index#/classEdit/new';
    };
    var onSendNotification = function () {
        onNotificationClick &&
            onNotificationClick({
                type: selectedTaskStatus,
                accounts: selectedAccounts,
            });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "course-study-task-group-detail-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "course-toolbar" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_7__["SearchInput"], { list: memberList, onUpdateList: onSearchInputChange, onSearchSuggestions: onSearchSuggestions, onSearch: onSearch, placeholder: placeholder }),
            isShowNotification && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_17__["Button"], { className: "toolbar-notification", onClick: onSendNotification, type: "primary", disabled: !!sourceData && !sourceData.data_count.exist_learning_task }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('发送通知')))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-group" },
            sourceData && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_15__["TaskStatusRadio"], { current: selectedTaskStatus, customStyle: { marginRight: 24 }, completeCount: +sourceData.data_count.complete_num, uncompleteCount: +sourceData.data_count.uncomplete_num, onSelect: onTaskStatusChange })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex-1" }),
            dataList.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "download-table", onClick: reportDownload }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('下载表格')))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["SplitLine"], { customStyle: { marginTop: 14 } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "study-task-status-bar-wrap" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：'), "".concat(Math.floor((((_a = sourceData === null || sourceData === void 0 ? void 0 : sourceData.data_count) === null || _a === void 0 ? void 0 : _a.complete_rate) || 0) * 10000) / 100, "%")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], { customClass: "study-task-status-bar", customStyle: { marginTop: 14 } })),
        (isLoading || sourceData === undefined) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null),
        !isLoading && sourceData !== undefined && dataList.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmptyTable__WEBPACK_IMPORTED_MODULE_16__["EmptyTable"], { isSearch: !!memberList.length || !!sourceData.data_count.exist_learning_task, onAssignClassClick: onAssignClassClick, onAssignTaskClick: props.onAssignEmitted })),
        !isLoading && sourceData !== undefined && dataList.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["CustomTable"], { miniNumTdWidth: 200, columns: columns, data: dataList, customClass: "group-list-wrap" }),
            pageInfo.total_page_num > 1 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["Pagination"], { forceShow: false, currentPage: pageInfo.current_page, showSizeChanger: true, maxPage: pageInfo.total_page_num || 1, onPageChange: onPageChange }))))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskStudents/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskStudents/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseStudyTaskStudents", function() { return CourseStudyTaskStudents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _components_basic_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var common_components_courseTaskTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/common/components/courseTaskTable.tsx");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/index.ts");
/* harmony import */ var common_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/common/interface.ts");
/* harmony import */ var _components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.tsx");
/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskStudents/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/common/components/taskStatusRadio/index.tsx");
/* harmony import */ var common_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/common/util.ts");
/* harmony import */ var _components_EmptyTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/EmptyTable/index.tsx");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















var Loading = common__WEBPACK_IMPORTED_MODULE_2__["components"].Loading;

var downloadFileByOpenWindow = businessCommon__WEBPACK_IMPORTED_MODULE_15__["bizServices"].downloadFileByOpenWindow;
var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
/**
 * 主组件
 * @returns ReactComponent
 */
var CourseStudyTaskStudents = function (props) {
    var placeholder = props.placeholder, onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), sourceData = _a[0], setSourceData = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), headList = _b[0], setHeadList = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), dataList = _c[0], setDataList = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__assign({}, _util_const__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_PAGE_INFO"])), pageInfo = _e[0], setPageInfo = _e[1]; // 分页信息
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), selectedAccounts = _f[0], setSelectedAccounts = _f[1]; // 筛选条件：搜索框搜索内容
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_interface__WEBPACK_IMPORTED_MODULE_6__["ITaskStatus"].ALL), selectedTaskStatus = _g[0], setSelectedTaskStatus = _g[1]; // 筛选条件：全部、已完成、未完成
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), memberList = _h[0], setMemberList = _h[1];
    var buildParams = function (updateType, accounts, _value) {
        var _a;
        var type = props.type;
        return {
            obj_id: props.groupId,
            obj_type: type || 1,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify((_a = {}, _a[updateType] = _value ? 1 : 0, _a)),
        };
    };
    var onUpdateConfig = function (updateType, _value, _data) {
        var accounts = Object(common_util__WEBPACK_IMPORTED_MODULE_13__["onTransFormAccount"])(_data);
        var param = buildParams(updateType, accounts, _value);
        return new Promise(function (resolve) {
            Object(_service_index__WEBPACK_IMPORTED_MODULE_10__["updateConfig"])(param).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_3__["SnackBar"].show({
                        message: Object(common_util__WEBPACK_IMPORTED_MODULE_13__["getUpdateMsgByType"])(updateType, _value),
                    });
                    fetchData(false);
                    resolve(true);
                    return true;
                }
                else {
                    resolve(false);
                    return false;
                }
            });
        });
    };
    var onSwitchSingleStudentNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(common_interface__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].studentNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var onSwitchSingleDepartmentManagerNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(common_interface__WEBPACK_IMPORTED_MODULE_7__["UpdateType"].departmentManagerNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var fetchData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (isLoad, param) {
        if (param === void 0) { param = {}; }
        if (isLoad) {
            setIsLoading(true);
        }
        var defaultParam = {
            group_id: props.groupId,
            type: selectedTaskStatus,
            accounts: selectedAccounts,
            page: pageInfo.current_page,
            size: pageInfo.size,
        };
        var newParam = __assign(__assign({}, defaultParam), param);
        if (!newParam.accounts) {
            delete newParam.accounts;
        }
        Object(_service_index__WEBPACK_IMPORTED_MODULE_10__["getStudentTaskList"])(newParam)
            .then(function (result) {
            var pageInfo = result.data.table_body.page_info;
            var list = result.data.table_body.list || [];
            if (!!Number(pageInfo.total_page_num) && !list.length && pageInfo.current_page > 1) {
                fetchData(isLoad, __assign(__assign({}, param), { page: pageInfo.current_page - 1 }));
                return;
            }
            setSourceData(result.data);
            setHeadList(result.data.table_head.list);
            setDataList(list);
            setPageInfo(pageInfo);
            props.onQueryChange && props.onQueryChange(newParam);
            if (props.onDataChange) {
                props.onDataChange('updateEmptyData', result.data.data_count);
            }
        })
            .finally(function () {
            setIsLoading(false);
        });
    }, [props.groupId, selectedTaskStatus, selectedAccounts, pageInfo.current_page]);
    var reportDownload = function () {
        var param = {
            class: 'Logic_Exporter_GroupStudentTaskListExporterModel',
            params: JSON.stringify({
                group_id: props.groupId,
                accounts: selectedAccounts,
                type: selectedTaskStatus, // 0为全部，1为已完成，2为未完成
            }),
        };
        downloadFileByOpenWindow(param.class, param.params);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchData(true);
    }, [props.groupId, selectedTaskStatus, pageInfo.current_page]);
    // 搜索框搜索条件变更
    var onSearchSuggestions = function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_service_index__WEBPACK_IMPORTED_MODULE_10__["searchTask"])({
                        accounts: keyword,
                        group_id: props.groupId,
                        is_suggestion: '1',
                        search_source: 'student_task',
                    })];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, (data || []).map(function (item) {
                            return {
                                id: item.id,
                                label: Object(_components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_8__["getLabelElement"])(__assign(__assign({}, item), { avatar: item.avatar || _components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_8__["iconImgMap"][item.account_type] })),
                                type: item.account_type,
                                account: item.account,
                                umu_id: item.umu_id,
                            };
                        })];
            }
        });
    }); };
    var onTaskStatusChange = function (status) {
        setSelectedTaskStatus(status);
    };
    var onSearchInputChange = function (data) {
        setMemberList(data);
    };
    // 条件查询
    var onSearch = function () {
        var accounts = memberList.map(function (item) {
            var obj = {
                account: item.account,
                account_type: item.type,
            };
            if (obj.account_type === common_interface__WEBPACK_IMPORTED_MODULE_7__["MEMBER_TYPE"].GROUP) {
                obj.user_group_id = item.id;
            }
            else if (obj.account_type === common_interface__WEBPACK_IMPORTED_MODULE_7__["MEMBER_TYPE"].USER) {
                obj.student_id = item.id;
                obj.umu_id = item.umu_id;
            }
            else {
                obj.id = item.id;
            }
            return obj;
        });
        var accountsStr = accounts.length === 0 ? '' : JSON.stringify(accounts);
        setSelectedAccounts(accountsStr);
        fetchData(true, {
            accounts: accountsStr,
        });
    };
    var onPageChange = function (page) {
        setPageInfo(__assign(__assign({}, pageInfo), { current_page: page }));
    };
    var onAssignClassClick = function () {
        window.location.href = '/class/index#/classEdit/new';
    };
    var renderShow = function () {
        var _a;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "course-study-task-group-detail-wrap" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_8__["SearchInput"], { list: memberList, onUpdateList: onSearchInputChange, onSearchSuggestions: onSearchSuggestions, onSearch: onSearch, placeholder: placeholder }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-group" },
                sourceData && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_12__["TaskStatusRadio"], { current: selectedTaskStatus, customStyle: { marginRight: 24 }, completeCount: +sourceData.data_count.complete_num, uncompleteCount: +sourceData.data_count.uncomplete_num, onSelect: onTaskStatusChange })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex-1" }),
                dataList.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "download-table", onClick: reportDownload }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('下载表格')))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_4__["SplitLine"], { customStyle: { marginTop: 14 } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "study-task-status-bar-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                    Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：'), "".concat(Math.floor((((_a = sourceData === null || sourceData === void 0 ? void 0 : sourceData.data_count) === null || _a === void 0 ? void 0 : _a.complete_rate) || 0) * 10000) / 100, "%")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], { customClass: "study-task-status-bar", customStyle: { marginTop: 14 } })),
            (isLoading || sourceData === undefined) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null),
            !isLoading && sourceData !== undefined && dataList.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmptyTable__WEBPACK_IMPORTED_MODULE_14__["EmptyTable"], { isSearch: !!memberList.length || !!sourceData.data_count.exist_learning_task, onAssignClassClick: onAssignClassClick, onAssignTaskClick: props.onAssignEmitted })),
            !isLoading && sourceData !== undefined && dataList.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_courseTaskTable__WEBPACK_IMPORTED_MODULE_5__["CourseTaskTable"], { groupId: props.groupId, pageInfo: pageInfo, headList: headList, dataList: dataList, sourceData: sourceData, fetchData: fetchData, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }),
                pageInfo.total_page_num > 1 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_4__["Pagination"], { forceShow: false, currentPage: pageInfo.current_page, showSizeChanger: true, maxPage: pageInfo.total_page_num || 1, onPageChange: onPageChange }))))));
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderShow());
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/Breadcrum/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/Breadcrum/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrum", function() { return Breadcrum; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/Breadcrum/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




var Breadcrum = function (_a) {
    var firstNavTitle = _a.firstNavTitle, secondNavTitle = _a.secondNavTitle, thirdNavTitle = _a.thirdNavTitle, onFirstNavLinkClick = _a.onFirstNavLinkClick, onSecondNavLinkClick = _a.onSecondNavLinkClick, tabIndex = _a.tabIndex, onAssignClick = _a.onAssignClick, onRevokeAll = _a.onRevokeAll;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "breadcrum-wrap my-task-study-task-detail-breadcrum" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: onFirstNavLinkClick, className: "breadcrum-text" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('我管理的') || firstNavTitle),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Iconfont"], { type: "SmallMore", style: { margin: '0 4px' } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: onSecondNavLinkClick, className: "breadcrum-text" }, secondNavTitle),
        tabIndex === 3 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Iconfont"], { type: "SmallMore", style: { margin: '0 4px' } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, thirdNavTitle))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex-1" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: onAssignClick, className: "assign-btn" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Iconfont"], { type: "Assign", className: "btn-icon" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('分配'))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: onRevokeAll, className: "revoke-btn" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Iconfont"], { type: "Back", className: "btn-icon" }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('全部撤回')))));
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/CoursePage.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/CoursePage.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePage", function() { return CoursePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _CourseStudyTaskGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroup/index.tsx");
/* harmony import */ var _CourseStudyTaskGroupDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroupDetail/index.tsx");
/* harmony import */ var _CourseStudyTaskStudents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskStudents/index.tsx");
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _learningManage_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@learningManage/index.tsx");
/* harmony import */ var _service_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/index.ts");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/index.ts");
/* harmony import */ var _Breadcrum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/Breadcrum/index.tsx");
/* harmony import */ var _myTask_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _CoursePage_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/CoursePage.scss");
/* harmony import */ var _CoursePage_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_CoursePage_scss__WEBPACK_IMPORTED_MODULE_13__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};














var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_3__["Modal"].confirm;
var DEFAULT_QUERY = { status: '0', accounts: '' };
var CoursePage = function (props) {
    var data = props.data, isShowNotification = props.isShowNotification, placeholder = props.placeholder, placeholderAllStudent = props.placeholderAllStudent, onPageChange = props.onPageChange, onNotification = props.onNotification;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1), tabIndex = _a[0], setTabIndex = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({ name: '', type: '', id: '' }), detailData = _b[0], setDetailData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(DEFAULT_QUERY), query = _c[0], setQuery = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLearningTaskEmpty = _d[0], setLearningTaskEmpty = _d[1];
    var isToB = Object(_myTask_utils__WEBPACK_IMPORTED_MODULE_12__["isEnterpriseAccount"])();
    var resetQuery = function () {
        setQuery(DEFAULT_QUERY);
    };
    var onQueryChange = function (searchObj) {
        setQuery(__assign(__assign({}, query), searchObj));
    };
    var onNotificationClick = function (param) {
        var queryObj = param || query;
        onNotification &&
            onNotification(__assign(__assign({}, queryObj), { id: data.obj_id, emailType: 'group', memberList: queryObj.accounts ? JSON.parse(queryObj.accounts) : [] }));
    };
    var goToDetailPage = function (_route, type, id, name) {
        setDetailData({
            name: name,
            type: type,
            id: id,
        });
        setTabIndex(3);
        resetQuery();
    };
    var goToGroupListPage = function () {
        setDetailData({
            name: '',
            type: '',
            id: '',
        });
        setTabIndex(1);
        resetQuery();
    };
    var onTabsChange = function (key) {
        setTabIndex(parseInt(key));
        resetQuery();
    };
    var renderTabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var list = [
            {
                key: '1',
                text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('所有学员'),
            },
            {
                key: '2',
                text: Object(_util_index__WEBPACK_IMPORTED_MODULE_10__["getTabLabel"])(),
            },
        ];
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_7__["TaskTabs"], { list: list, currentTab: (tabIndex === 3 ? 2 : tabIndex).toString(), onChange: onTabsChange });
    }, [tabIndex]);
    /* assignProgram 分配学习项目;
    assignGroup 分配课程;
    assignSession 分配小节; */
    var onAssignClick = function () {
        if (props.communicationCallback) {
            // 第二个参数传值为课程信息、第三个参数可以不传
            props.communicationCallback(isToB ? 'assignGroup' : 'assignGroupToClass', {
                groupInfo: {
                    id: data.obj_id,
                    groupId: data.obj_id,
                },
            }, function () {
                console.log('分配课程回调函数');
            });
        }
    };
    var onAssignEmittedTaskSetting = function () {
        if (props.communicationCallback) {
            props.communicationCallback('assignGroup', {
                groupInfo: {
                    id: data.obj_id,
                    groupId: data.obj_id,
                },
                option: {
                    isShowRuleSetting: true,
                    isOnlyShowRuleSetting: true,
                    currentDialogType: 'notification-rule-setting',
                },
            }, function () {
                console.log('任务通知高级设置回调函数');
            });
        }
    };
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isBatchModifying = _e[0], setIsBatchModifying = _e[1];
    var onRevokeAll = function () {
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('确认撤回'),
            centered: true,
            content: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('确认撤回全部学习任务？点击“撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示'),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('撤回'),
            onOk: function () {
                Object(_service_index__WEBPACK_IMPORTED_MODULE_9__["revokeGroupAssignments"])({
                    group_id: data.obj_id,
                }).then(function (res) {
                    if (res.status) {
                    }
                });
            },
        });
    };
    var onBatchModify = function () {
        setIsBatchModifying(true);
    };
    var onBatchModifyComplete = function () {
        setIsBatchModifying(false);
    };
    var onDataChange = function (type, data) {
        setLearningTaskEmpty(type === 'updateEmptyData' && data && +data.exist_learning_task === 0);
    };
    var isShowNotificationBtn = function () {
        return isShowNotification && !isBatchModifying;
    };
    var renderBreadcrum = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrum__WEBPACK_IMPORTED_MODULE_11__["Breadcrum"], { firstNavTitle: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('我管理的'), secondNavTitle: data.task_name, thirdNavTitle: detailData.name, tabIndex: tabIndex, onFirstNavLinkClick: function () {
                onPageChange(_learningManage_index__WEBPACK_IMPORTED_MODULE_8__["CURRENT_PAGE"].TASK_LIST);
            }, onSecondNavLinkClick: goToGroupListPage, onAssignClick: onAssignClick, onRevokeAll: onRevokeAll }));
    };
    var renderStudyTaskStudents = function () {
        return isBatchModifying ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseStudyTaskGroup__WEBPACK_IMPORTED_MODULE_4__["CourseStudyTaskGroup"], { type: 1, currentPage: 'studentsRate', groupId: "".concat(data === null || data === void 0 ? void 0 : data.obj_id), placeholder: placeholder, isBatchModifying: isBatchModifying, go: goToDetailPage, onQueryChange: onQueryChange, onAssignEmitted: onAssignClick, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseStudyTaskStudents__WEBPACK_IMPORTED_MODULE_6__["CourseStudyTaskStudents"], { type: 1, data: data, currentPage: 'studentsRate', placeholder: placeholderAllStudent, groupId: "".concat(data.obj_id), isBatchModifying: isBatchModifying, go: goToDetailPage, onQueryChange: onQueryChange, onAssignEmitted: onAssignClick, onDataChange: onDataChange, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting }));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-task-manage-course-page-wrap" },
        renderBreadcrum(),
        tabIndex !== 3 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "mentor-tabs course-learning-task-tabs" },
            renderTabs,
            !isBatchModifying && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: onBatchModify, type: "ghost", disabled: isLearningTaskEmpty, style: { marginRight: '24px' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('批量修改任务规则')))),
            isShowNotificationBtn() && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: function () {
                    onNotificationClick();
                }, disabled: isLearningTaskEmpty, type: "primary", style: { marginRight: '24px', textTransform: 'uppercase' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('发送通知'))),
            isBatchModifying && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_1__["Button"], { onClick: onBatchModifyComplete, style: { marginRight: '24px' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_2__["lang"])('完成')))))),
        tabIndex === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderStudyTaskStudents()),
        tabIndex === 2 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseStudyTaskGroup__WEBPACK_IMPORTED_MODULE_4__["CourseStudyTaskGroup"], { type: 1, currentPage: 'group', groupId: "".concat(data.obj_id), placeholder: placeholder, isBatchModifying: isBatchModifying, go: goToDetailPage, onQueryChange: onQueryChange, onAssignEmitted: onAssignClick, onDataChange: onDataChange, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting }))),
        tabIndex === 3 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CourseStudyTaskGroupDetail__WEBPACK_IMPORTED_MODULE_5__["CourseStudyTaskGroupDetail"], { pageType: 1, currentPage: 'groupInfo', groupId: "".concat(data.obj_id), type: detailData.type, isBatchModifying: isBatchModifying, placeholder: placeholderAllStudent, isShowNotification: isShowNotification, onNotificationClick: onNotificationClick, id: detailData.id, onAssignEmitted: onAssignClick, onDataChange: onDataChange, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting })))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/ProgramPage.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/ProgramPage.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPage", function() { return ProgramPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _ProgramStudyTaskStudents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskStudents/index.tsx");
/* harmony import */ var _ProgramStudyTaskGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroup/index.tsx");
/* harmony import */ var _ProgramStudyTaskGroupDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroupDetail/index.tsx");
/* harmony import */ var _myTask_components_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/components/index.ts");
/* harmony import */ var _learningManage_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@learningManage/index.tsx");
/* harmony import */ var _service_program__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/program.ts");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/index.ts");
/* harmony import */ var _Breadcrum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/Breadcrum/index.tsx");
/* harmony import */ var _ProgramPage_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/ProgramPage.scss");
/* harmony import */ var _ProgramPage_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ProgramPage_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _myTask_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/@myTask/utils/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};














var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_3__["Modal"].confirm;
var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
var DEFAULT_QUERY = { status: '0', accounts: '' };
var ProgramPage = function (props) {
    var data = props.data, isShowNotification = props.isShowNotification, placeholder = props.placeholder, placeholderAllStudent = props.placeholderAllStudent, onNotification = props.onNotification, onPageChange = props.onPageChange;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1), tabIndex = _a[0], setTabIndex = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({ name: '', type: '', id: '' }), detailData = _b[0], setDetailData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(DEFAULT_QUERY), query = _c[0], setQuery = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLearningTaskEmpty = _d[0], setLearningTaskEmpty = _d[1];
    var isToB = Object(_myTask_utils__WEBPACK_IMPORTED_MODULE_13__["isEnterpriseAccount"])();
    var resetQuery = function () {
        setQuery(DEFAULT_QUERY);
    };
    var onQueryChange = function (searchObj) {
        setQuery(__assign(__assign({}, query), searchObj));
    };
    var onNotificationClick = function (param) {
        var queryObj = param || query;
        onNotification &&
            onNotification(__assign(__assign({}, queryObj), { id: data.obj_id, emailType: 'program', memberList: queryObj.accounts ? JSON.parse(queryObj.accounts) : [] }));
    };
    var goToDetailPage = function (_route, type, id, name) {
        setDetailData({
            name: name,
            type: type,
            id: id,
        });
        setTabIndex(3);
        resetQuery();
    };
    var goToGroupListPage = function () {
        setDetailData({
            name: '',
            type: '',
            id: '',
        });
        setTabIndex(1);
        resetQuery();
    };
    var onTabsChange = function (key) {
        setTabIndex(parseInt(key));
        resetQuery();
    };
    var renderTabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var list = [
            {
                key: '1',
                text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('所有学员'),
            },
            {
                key: '2',
                text: Object(_util_index__WEBPACK_IMPORTED_MODULE_10__["getTabLabel"])(),
            },
        ];
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_index__WEBPACK_IMPORTED_MODULE_7__["TaskTabs"], { list: list, currentTab: (tabIndex === 3 ? 2 : tabIndex).toString(), onChange: onTabsChange });
    }, [tabIndex]);
    var onAssignClick = function () {
        if (props.communicationCallback) {
            props.communicationCallback(isToB ? 'assignProgram' : 'assignProgramToClass', {
                programInfo: {
                    id: data.obj_id,
                    programId: data.obj_id,
                    obj_id: data.obj_id,
                    obj_type: 'program',
                    program_id: data.obj_id,
                },
            }, function () {
                console.log('分配学习项目回调函数');
            });
        }
    };
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isBatchModifying = _e[0], setIsBatchModifying = _e[1];
    var onRevokeAll = function () {
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回'),
            centered: true,
            content: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回全部学习任务？点击“撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示'),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回'),
            onOk: function () {
                Object(_service_program__WEBPACK_IMPORTED_MODULE_9__["revokeProgramAssignments"])({
                    program_id: data.obj_id,
                }).then(function (res) {
                    if (res.status) {
                    }
                });
            },
        });
    };
    var onBatchModify = function () {
        setIsBatchModifying(true);
    };
    var onBatchModifyCompleta = function () {
        setIsBatchModifying(false);
    };
    var onDataChange = function (type, data) {
        setLearningTaskEmpty(type === 'updateEmptyData' && data && +data.exist_learning_task === 0);
    };
    var onAssignEmittedTaskSetting = function () {
        if (props.communicationCallback) {
            props.communicationCallback('assignProgram', {
                programInfo: {
                    id: data.obj_id,
                    programId: data.obj_id,
                    obj_id: data.obj_id,
                    obj_type: 'program',
                    program_id: data.obj_id,
                },
                option: {
                    isShowRuleSetting: true,
                    isOnlyShowRuleSetting: true,
                    currentDialogType: 'notification-rule-setting',
                },
            }, function () {
                console.log('任务通知高级设置回调函数');
            });
        }
    };
    var isShowNotificationBtn = function () {
        return isShowNotification && !isBatchModifying;
    };
    var renderBreadcrum = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrum__WEBPACK_IMPORTED_MODULE_11__["Breadcrum"], { firstNavTitle: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('我管理的'), secondNavTitle: data.task_name, thirdNavTitle: detailData.name, tabIndex: tabIndex, onFirstNavLinkClick: function () {
                onPageChange(_learningManage_index__WEBPACK_IMPORTED_MODULE_8__["CURRENT_PAGE"].TASK_LIST);
            }, onSecondNavLinkClick: goToGroupListPage, onAssignClick: onAssignClick, onRevokeAll: onRevokeAll }));
    };
    var renderStudyTaskStudents = function () {
        return isBatchModifying ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgramStudyTaskGroup__WEBPACK_IMPORTED_MODULE_5__["ProgramStudyTaskGroup"], { type: 3, currentPage: 'studentsRate', placeholder: placeholder, programId: "".concat(data === null || data === void 0 ? void 0 : data.obj_id), isBatchModifying: isBatchModifying, go: goToDetailPage, onQueryChange: onQueryChange, onAssignEmitted: onAssignClick, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgramStudyTaskStudents__WEBPACK_IMPORTED_MODULE_4__["ProgramStudyTaskStudents"], { type: 3, data: data, currentPage: 'studentsRate', isBatchModifying: isBatchModifying, placeholder: placeholderAllStudent, programId: "".concat(data.obj_id), go: goToDetailPage, onQueryChange: onQueryChange, onAssignEmitted: onAssignClick, onDataChange: onDataChange, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting }));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-task-manage-course-page-wrap" },
        renderBreadcrum(),
        tabIndex !== 3 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "mentor-tabs program-learning-task-tabs" },
            renderTabs,
            !isBatchModifying && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: onBatchModify, type: "ghost", disabled: isLearningTaskEmpty, style: { marginRight: '24px' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('批量修改任务规则')))),
            isShowNotificationBtn() && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: function () {
                    onNotificationClick();
                }, disabled: isLearningTaskEmpty, type: "primary", style: { marginRight: '24px', textTransform: 'uppercase' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('发送通知'))),
            isBatchModifying && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Button"], { onClick: onBatchModifyCompleta, style: { marginRight: '24px' } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成')))))),
        tabIndex === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderStudyTaskStudents()),
        tabIndex === 2 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgramStudyTaskGroup__WEBPACK_IMPORTED_MODULE_5__["ProgramStudyTaskGroup"], { type: 3, currentPage: 'group', placeholder: placeholder, programId: "".concat(data.obj_id), isBatchModifying: isBatchModifying, changePage: goToDetailPage, onQueryChange: onQueryChange, onAssignEmitted: onAssignClick, onDataChange: onDataChange, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting }))),
        tabIndex === 3 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgramStudyTaskGroupDetail__WEBPACK_IMPORTED_MODULE_6__["ProgramStudyTaskGroupDetail"], { pageType: 3, currentPage: 'groupInfo', placeholder: placeholderAllStudent, programId: "".concat(data.obj_id), type: detailData.type, isShowNotification: isShowNotification, onNotificationClick: onNotificationClick, id: detailData.id, onAssignEmitted: onAssignClick, onDataChange: onDataChange, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting })))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTaskStudyTaskDetail", function() { return MyTaskStudyTaskDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CoursePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/CoursePage.tsx");
/* harmony import */ var _ProgramPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/ProgramPage.tsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);




/**
 * 主组件
 * @returns ReactComponent
 */
var MyTaskStudyTaskDetail = function (props) {
    var data = props.data, placeholder = props.placeholder, placeholderAllStudent = props.placeholderAllStudent, isShowNotification = props.isShowNotification, onPageChange = props.onPageChange, communicationCallback = props.communicationCallback, onNotification = props.onNotification;
    var obj_type = data.obj_type;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-task-study-task-wrap" },
        obj_type === 1 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CoursePage__WEBPACK_IMPORTED_MODULE_1__["CoursePage"], { data: data, placeholder: placeholder, placeholderAllStudent: placeholderAllStudent, isShowNotification: isShowNotification, onNotification: onNotification, onPageChange: onPageChange, communicationCallback: communicationCallback })) : null,
        obj_type === 2 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgramPage__WEBPACK_IMPORTED_MODULE_2__["ProgramPage"], { data: data, placeholder: placeholder, placeholderAllStudent: placeholderAllStudent, isShowNotification: isShowNotification, onNotification: onNotification, onPageChange: onPageChange, communicationCallback: communicationCallback })) : null));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroup/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroup/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramStudyTaskGroup", function() { return ProgramStudyTaskGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Checkbox/index.tsx");
/* harmony import */ var _common_components_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/Switch/index.tsx");
/* harmony import */ var _common_components_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/index.ts");
/* harmony import */ var _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts");
/* harmony import */ var _components_basic_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var _interface_program__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/program.ts");
/* harmony import */ var _components_basic_SearchInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.tsx");
/* harmony import */ var _service_program__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/program.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroup/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_OrganizationInfoCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/OrganizationInfoCell/index.tsx");
/* harmony import */ var common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/common/components/taskStatusRadio/index.tsx");
/* harmony import */ var _components_EmptyTable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/EmptyTable/index.tsx");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _myTask_components_avatar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/@myTask/components/avatar/index.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
























var Loading = common__WEBPACK_IMPORTED_MODULE_2__["components"].Loading;
var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["Modal"].confirm;
var downloadFileByOpenWindow = businessCommon__WEBPACK_IMPORTED_MODULE_20__["bizServices"].downloadFileByOpenWindow;
var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
var UpdateType;
(function (UpdateType) {
    UpdateType["autoAssign"] = "auto_assign";
    UpdateType["assignElective"] = "assign_elective";
    UpdateType["studentNotifySwitch"] = "student_notify_switch";
    UpdateType["departmentManagerNotifySwitch"] = "department_manager_notify_switch";
})(UpdateType || (UpdateType = {}));
var UpdateMsgType = {
    student_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启学员通知'),
    student_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭学员通知'),
    department_manager_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启直属部门负责人通知'),
    department_manager_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭直属部门负责人通知'),
};
var getUpdateMsgByType = function (type, value) {
    var key = type + (value ? '_open' : '_close');
    return UpdateMsgType[key];
};
var ColumnLabelMap = {
    assign_member_cnt: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('人数'),
    student_complete_rate: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率'),
    task_complete_rate: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务完成率'),
};
var ETableStatus;
(function (ETableStatus) {
    ETableStatus["DEFAULT"] = "default";
    ETableStatus["BATCH_MODIFY"] = "batchModify";
    ETableStatus["BatchModifyStudyRateColumns"] = "batchModifyStudyRateColumns";
})(ETableStatus || (ETableStatus = {}));
/**
 * 主组件
 * @returns ReactComponent
 */
var ProgramStudyTaskGroup = function (props) {
    var _a;
    var onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), sourceData = _b[0], setSourceData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), headList = _c[0], setHeadList = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), dataList = _d[0], setDataList = _d[1];
    // ITableBodyDataItem
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), selectedRow = _f[0], setSelectedRow = _f[1];
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(ETableStatus.DEFAULT), tableStatus = _g[0], setTableStatus = _g[1]; // 表头信息
    // 分页信息
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__assign({}, _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_PAGE_INFO"])), pageInfo = _h[0], setPageInfo = _h[1];
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), selectedAccounts = _j[0], setSelectedAccounts = _j[1]; // 筛选条件：搜索框搜索内容
    var _k = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_interface_program__WEBPACK_IMPORTED_MODULE_13__["ITaskStatus"].ALL), selectedTaskStatus = _k[0], setSelectedTaskStatus = _k[1]; // 筛选条件：全部、已完成、未完成
    var _l = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([
        _interface_program__WEBPACK_IMPORTED_MODULE_13__["ITaskDisplayType"].CLASS,
        _interface_program__WEBPACK_IMPORTED_MODULE_13__["ITaskDisplayType"].DEPARTMENT,
        _interface_program__WEBPACK_IMPORTED_MODULE_13__["ITaskDisplayType"].GROUP,
    ]), selectedParentType = _l[0], setSelectedParentType = _l[1];
    var _m = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), memberList = _m[0], setMemberList = _m[1];
    var _o = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isShowMoreOperation = _o[0], setIsShowMoreOperation = _o[1];
    var isToB = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__["isEnterpriseAccount"])();
    var getColumnHead = function (item) {
        return ColumnLabelMap[item.field_name] || item.title || item.field_name;
    };
    // 自动分配
    var onSwitchAutoAssign = function (isOpen, data) {
        var accounts = data.map(function (item) {
            var obj = {
                account: item.name,
                account_type: _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_6__["ACCOUNT_TYPE_MAP"][item.parent_type] || '',
            };
            if (obj.account_type === _interface_program__WEBPACK_IMPORTED_MODULE_13__["MEMBER_TYPE"].GROUP) {
                obj.user_group_id = item.parent_id;
            }
            else {
                obj.id = item.parent_id;
            }
            return obj;
        });
        var param = {
            obj_id: props.programId,
            obj_type: 3,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify({ auto_assign: isOpen ? 1 : 0 }),
        };
        return Object(_service_program__WEBPACK_IMPORTED_MODULE_15__["updateConfig"])(param).then(function (res) {
            if (res.status) {
                _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["SnackBar"].show({
                    message: isOpen ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启自动分配新成员') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭自动分配新成员'),
                });
                fetchData(false);
                return true;
            }
            else {
                return false;
            }
        });
    };
    var onSwitchAutoAssignSelections = function (isOpen) {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        onSwitchAutoAssign(isOpen, data);
    };
    // 分配选修小节
    var onSwitchAssignElective = function (isOpen, data) {
        var accounts = data.map(function (item) {
            var obj = {
                account: item.name,
                account_type: _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_6__["ACCOUNT_TYPE_MAP"][item.parent_type] || '',
            };
            if (obj.account_type === _interface_program__WEBPACK_IMPORTED_MODULE_13__["MEMBER_TYPE"].GROUP) {
                obj.user_group_id = item.parent_id;
            }
            else {
                obj.id = item.parent_id;
            }
            return obj;
        });
        var param = {
            obj_id: props.programId,
            obj_type: 3,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify({ assign_elective: isOpen ? 1 : 0 }),
        };
        return Object(_service_program__WEBPACK_IMPORTED_MODULE_15__["updateConfig"])(param).then(function (res) {
            if (res.status) {
                _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["SnackBar"].show({
                    message: isOpen ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启分配选修小节') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭分配选修小节'),
                });
                fetchData(false);
                return true;
            }
            else {
                return false;
            }
        });
    };
    var buildParams = function (updateType, accounts, _value) {
        var _a;
        var type = props.type;
        return {
            obj_id: props.programId,
            obj_type: type || 1,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify((_a = {}, _a[updateType] = _value ? 1 : 0, _a)),
        };
    };
    var onUpdateConfig = function (updateType, _value, _data) {
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__["onTransFormAccount"])(_data);
        var param = buildParams(updateType, accounts, _value);
        return new Promise(function (resolve) {
            Object(_service_program__WEBPACK_IMPORTED_MODULE_15__["updateConfig"])(param).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["SnackBar"].show({
                        message: getUpdateMsgByType(updateType, _value),
                    });
                    fetchData(false);
                    resolve(true);
                    return true;
                }
                else {
                    resolve(false);
                    return false;
                }
            });
        });
    };
    var onSwitchSingleStudentNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.studentNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var onSwitchMultiStudentNotifySwitch = function (_value) {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        if (!data.length) {
            return;
        }
        onSwitchSingleStudentNotifySwitch(_value, data);
    };
    var onSwitchSingleDepartmentManagerNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.departmentManagerNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var onSwitchMultiDepartmentManagerNotifySwitch = function (_value) {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        if (!data.length) {
            return;
        }
        onSwitchSingleDepartmentManagerNotifySwitch(_value, data);
    };
    var defaultColumns = headList.map(function (item, index) {
        // 被固定的列数
        var fixed_column_num = sourceData ? sourceData.table_head.fixed_column_num || -1 : -1;
        var obj = {
            name: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "two-row-limited" }, getColumnHead(item)),
            dataIndex: item.field_name,
            className: 'center table-head',
            width: 120,
            fixed: index < fixed_column_num ? _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_11__["FixedDirection"].left : undefined,
        };
        // 部门信息
        if (item.field_name === 'organization_info') {
            obj.name = '';
            obj.width = 270;
            obj.render = function (data, rowIndex) {
                if (rowIndex === void 0) { rowIndex = 0; }
                var currentPage = pageInfo.current_page;
                var size = pageInfo.size;
                var countIndex = (currentPage - 1) * size + rowIndex + 1;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OrganizationInfoCell__WEBPACK_IMPORTED_MODULE_17__["OrganizationInfoCell"], { index: countIndex, data: data, onNameClick: function () {
                        if (props.changePage) {
                            Object(_common_components_index__WEBPACK_IMPORTED_MODULE_10__["removeElementsByClass"])('study-task-tooltip-container', false);
                            props.changePage('GROUP_DETAIL', data.parent_type, data.parent_id, data.name);
                        }
                    }, onSwitchAutoAssign: onSwitchAutoAssign, onSwitchAssignElective: onSwitchAssignElective, onRevoke: onRevoke, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }));
            };
            return obj;
        }
        // 人数
        if (item.field_name === 'assign_member_cnt') {
            obj.width = 100;
            obj.dataIndex = 'total_assign_user_num';
            obj.render = function (data) { return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.total_assign_user_num || '0'); };
            return obj;
        }
        // 学员完成率
        if (item.field_name === 'student_complete_rate') {
            obj.width = 120;
            obj.name = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                getColumnHead(item),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：部门、分组和班级内完成任务的学员数/部门内已经分配任务的学员数'), arrow: true, width: 270, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "tips", className: "tip-icon", style: { width: 16, height: 16, color: '#999999', top: 2 } }))));
            obj.render = function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: data.student_complete_rate });
            };
            return obj;
        }
        if (item.field_name === 'field_enroll') {
            obj.width = 120;
            obj.render = function (data) {
                return data.field_enroll && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: Number(data.field_enroll.enroll_pass_rate) });
            };
            return obj;
        }
        if (/^(field_)/.test(item.field_name)) {
            obj.render = function (data) {
                var fieldObj = data[item.field_name];
                if (!fieldObj) {
                    return '';
                }
                var is_overdue = fieldObj.is_overdue, status = fieldObj.status, task_complete_rate = fieldObj.task_complete_rate;
                // status  同学习任务所有学员列表，0为未参与，1为学习中，2为已完成 3预分配
                // is_overdue   1为逾期，0为未逾期
                // is_task      1为任务，0为非任务
                // 按时完成
                if (status === 2 && is_overdue === 0) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Complete", style: { color: '#4EAA64' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "100%")));
                }
                // 预分配：按时完成
                if (status === 3 && is_overdue === 0 && task_complete_rate === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Complete", style: { color: '#4EAA64' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "100%")));
                }
                // 预分配：未完成，未到期
                if (status === 3 && is_overdue === 0 && task_complete_rate !== 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'incomplete': true,
                            'not-overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Line", style: { color: '#FBC333' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "".concat(Math.floor(task_complete_rate * 10000) / 100, "%"))));
                }
                // 预分配：逾期未完成
                if (status === 3 && is_overdue === 1 && task_complete_rate !== 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'incomplete': true,
                            'overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Line", style: { color: '#DD4E40' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期未完成'))));
                }
                // 预分配：逾期完成
                if (status === 3 && is_overdue === 1 && task_complete_rate === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                            'overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Complete", style: { color: '#FAB400' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期完成'))));
                }
                // 预分配特殊处理
                if (status === 3 && is_overdue === 0 && task_complete_rate === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Complete", style: { color: '#4EAA64' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "100%")));
                }
                // 未完成，未到期
                if (status !== 2 && is_overdue === 0) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'incomplete': true,
                            'not-overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Line", style: { color: '#FBC333' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "".concat(Math.floor(task_complete_rate * 10000) / 100, "%"))));
                }
                // 逾期未完成
                if (status !== 2 && is_overdue === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'incomplete': true,
                            'overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Line", style: { color: '#DD4E40' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期未完成'))));
                }
                // 逾期完成
                if (status === 2 && is_overdue === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                            'overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Complete", style: { color: '#FAB400' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期完成'))));
                }
                return '';
            };
            return obj;
        }
        // 学习阶段
        if (item.type === 'module') {
            obj.isRowSpan = true;
        }
        return obj;
    });
    var onSelectAll = function (isCheck) {
        if (isCheck) {
            setSelectedRow(dataList.map(function (item) { return item.key; }));
        }
        else {
            setSelectedRow([]);
        }
    };
    var onSelectSingle = function (isCheck, key) {
        if (isCheck) {
            setSelectedRow(__spreadArray(__spreadArray([], selectedRow, true), [key], false));
        }
        else {
            var data = __spreadArray([], selectedRow, true);
            var index = data.indexOf(key);
            index !== -1 && data.splice(index, 1);
            setSelectedRow(data);
        }
    };
    var buildRevokeParams = function (data) {
        var currentPage = props.currentPage, programId = props.programId;
        if (currentPage === PageType.STUDENTS) {
            var params = {
                obj_id: programId,
                obj_type: 3, // 1：课程；2：课程小节；3：学习项目
            };
            if (Array.isArray(data)) {
                params.student_ids = data.reduce(function (prev, curr) { return prev + ',' + curr.student_id; }, '').slice(1);
            }
            else {
                params.student_id = data.student_id;
            }
            return params;
        }
        else {
            data = data instanceof Array ? data : [data];
            return {
                obj_id: programId,
                obj_type: 3,
                accounts: JSON.stringify(data.map(function (item) {
                    var obj = {
                        account_type: _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_6__["ACCOUNT_TYPE_MAP"][item.parent_type],
                        umu_ids: [],
                    };
                    if (item.parent_type === _interface_program__WEBPACK_IMPORTED_MODULE_13__["ITaskDisplayType"].GROUP) {
                        obj.user_group_id = item.parent_id;
                    }
                    else {
                        obj.id = item.parent_id;
                    }
                    return obj;
                })),
            };
        }
    };
    var requestRevokeTask = function (data) {
        var currentPage = props.currentPage;
        var params = buildRevokeParams(data);
        if (currentPage === PageType.STUDENTS) {
            Object(_service_program__WEBPACK_IMPORTED_MODULE_15__["revokeStudentTask"])(params).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["SnackBar"].show({
                        message: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务'),
                    });
                    fetchData(false);
                    Object(_common_components_index__WEBPACK_IMPORTED_MODULE_10__["removeElementsByClass"])('study-task-tooltip-container', false);
                }
            });
        }
        else {
            Object(_service_program__WEBPACK_IMPORTED_MODULE_15__["revokeTask"])(params).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["SnackBar"].show({
                        message: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务'),
                    });
                    fetchData(false);
                    Object(_common_components_index__WEBPACK_IMPORTED_MODULE_10__["removeElementsByClass"])('study-task-tooltip-container', false);
                }
            });
        }
    };
    var onRevoke = function (data) {
        data = data instanceof Array ? data : [data];
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回'),
            centered: true,
            content: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回全部学习任务？点击“撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示'),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回'),
            onOk: function () {
                requestRevokeTask(data);
            },
        });
    };
    var onRevokeSelections = function () {
        var data = dataList.filter(function (item) { return selectedRow.includes(item.key); });
        onRevoke(data);
    };
    // 批量修改规则表头
    var batchModifyColumns = [
        {
            name: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modify-head-organization-info-cell-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "number" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], { unknownIconType: "sub", isChecked: selectedRow.length === dataList.length
                        ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                        : !!selectedRow.length
                            ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].UNKNOWN_CHECK
                            : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: onSelectAll },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "un-select-table" },
                        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('全选'),
                        " ",
                        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已选择 {$0{0= 个,1= 个}}', selectedRow.length))))),
            dataIndex: 'organization_info',
            className: 'table-head',
            width: 350,
            fixed: _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_11__["FixedDirection"].left,
            render: function (data, index) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modify-organization-info-cell-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "number" }, index + 1),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], { isChecked: selectedRow.includes(data.key)
                            ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                            : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: function (isCheck) {
                            onSelectSingle(isCheck, data.key);
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { className: "org-logo", src: _myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_6__["ICON_IMAGE_MAP"][data.parent_type] }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "org-name" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: data.name, arrow: true, theme: "dark" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-blue" }, data.name)))));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('分配人数'),
            dataIndex: 'total_assign_user_num',
            className: 'center table-head',
            width: 90,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { textAlign: 'right', paddingRight: 18 } }, data.total_assign_user_num || '0');
            },
        },
        {
            name: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                ColumnLabelMap['student_complete_rate'],
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { text: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：部门、分组和班级内完成任务的学员数/部门内已经分配任务的学员数'), arrow: true, width: 270, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "tips", className: "tip-icon", style: { width: 16, height: 16, color: '#999999', top: 2 } })))),
            dataIndex: 'student_complete_rate',
            className: 'center table-head',
            width: 120,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: data['student_complete_rate'] });
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('自动分配新学员'),
            dataIndex: 'auto_assign',
            className: 'center table-head',
            width: 120,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__["Switch"], { value: data.auto_assign === 1, onSwitch: function (isOpen) {
                        onSwitchAutoAssign(isOpen, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给学员发送任务通知'),
            dataIndex: 'student_notify_switch',
            className: 'center table-head',
            width: 160,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__["Switch"], { value: Number(data.student_notify_switch) === 1, onSwitch: function (value) {
                        onSwitchSingleStudentNotifySwitch(value, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给直属部门负责人发送通知'),
            dataIndex: 'department_manager_notify_switch',
            className: 'center table-head',
            width: 200,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__["Switch"], { value: Number(data.department_manager_notify_switch) === 1, onSwitch: function (value) {
                        onSwitchSingleDepartmentManagerNotifySwitch(value, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('操作'),
            dataIndex: 'operation',
            className: 'center table-head',
            width: 100,
            fixed: _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_11__["FixedDirection"].right,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "operation", onClick: function () {
                        onRevoke(data);
                    } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回')));
            },
        },
    ];
    var batchModifyStudyRateColumns = [
        {
            name: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modify-head-organization-info-cell-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "number" }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], { unknownIconType: "sub", isChecked: selectedRow.length === dataList.length
                        ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                        : !!selectedRow.length
                            ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].UNKNOWN_CHECK
                            : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: onSelectAll },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "un-select-table" },
                        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('全选'),
                        " ",
                        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已选择 {$0{0= 个,1= 个}}', selectedRow.length))))),
            dataIndex: 'organization_info',
            className: 'table-head',
            width: 300,
            fixed: _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_11__["FixedDirection"].left,
            render: function (data, index) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "modify-organization-info-cell-wrap" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "number" }, index + 1),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], { isChecked: selectedRow.includes(data.key)
                            ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                            : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: function (isCheck) {
                            onSelectSingle(isCheck, data.key);
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "avatar-wrap" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_components_avatar__WEBPACK_IMPORTED_MODULE_21__["default"], { userInfo: data }))));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成任务数'),
            dataIndex: 'complete_num',
            className: 'center table-head',
            width: 90,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { textAlign: 'right', paddingRight: 18 } }, data.complete_num);
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成率'),
            dataIndex: 'complete_rate',
            className: 'center table-head',
            width: 120,
            render: function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["RateCircle"], { ratio: data['complete_rate'] });
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给学员发送任务通知'),
            dataIndex: 'student_notify_switch',
            className: 'center table-head',
            width: 160,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__["Switch"], { value: Number(data.student_notify_switch) === 1, onSwitch: function (value) {
                        onSwitchSingleStudentNotifySwitch(value, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('给直属部门负责人发送通知'),
            dataIndex: 'department_manager_notify_switch',
            className: 'center table-head',
            width: 200,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Switch__WEBPACK_IMPORTED_MODULE_9__["Switch"], { value: Number(data.department_manager_notify_switch) === 1, onSwitch: function (value) {
                        onSwitchSingleDepartmentManagerNotifySwitch(value, [data]);
                    } }));
            },
        },
        {
            name: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('操作'),
            dataIndex: 'operation',
            className: 'center table-head',
            width: 100,
            fixed: _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_11__["FixedDirection"].right,
            render: function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "operation", onClick: function () {
                        onRevoke(data);
                    } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回')));
            },
        },
    ];
    var columnObj = (_a = {},
        _a[ETableStatus.DEFAULT] = defaultColumns,
        _a[ETableStatus.BATCH_MODIFY] = batchModifyColumns,
        _a[ETableStatus.BatchModifyStudyRateColumns] = batchModifyStudyRateColumns,
        _a);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var currentPage = props.currentPage, isBatchModifying = props.isBatchModifying;
        if (!currentPage) {
            return;
        }
        switch (currentPage) {
            case PageType.STUDENTS:
                setTableStatus(ETableStatus.BatchModifyStudyRateColumns);
                break;
            case PageType.GROUP_VIEW:
                setTableStatus(isBatchModifying ? ETableStatus.BATCH_MODIFY : ETableStatus.DEFAULT);
                break;
        }
    }, [props.isBatchModifying, props.currentPage]);
    var onUpdateSelectedRow = function (list) {
        var newSelected = [];
        list.forEach(function (item) {
            if (selectedRow.indexOf(item.key) !== -1) {
                newSelected.push(item.key);
            }
        });
        setSelectedRow(newSelected);
    };
    var buildDataListKey = function (list) {
        var currentPage = props.currentPage;
        if (currentPage === PageType.STUDENTS) {
            return list.map(function (item) {
                var obj = Object.assign(item, { key: item.umu_id });
                return obj;
            });
        }
        return list;
    };
    var fetchData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (isLoad, param) {
        var _a;
        if (param === void 0) { param = {}; }
        if (isLoad) {
            setIsLoading(true);
        }
        var currentPage = props.currentPage, programId = props.programId;
        var requestType = (_a = {},
            _a[PageType.STUDENTS] = {
                params: {
                    program_id: programId,
                    page: pageInfo.current_page,
                    accounts: selectedAccounts,
                    size: pageInfo.size,
                    type: selectedTaskStatus, // 0为全部，1为已完成，2为未完成
                },
                method: _service_program__WEBPACK_IMPORTED_MODULE_15__["getStudentTaskList"],
            },
            _a[PageType.GROUP_VIEW] = {
                params: {
                    program_id: programId,
                    parent_types: selectedParentType.join(','),
                    accounts: selectedAccounts,
                    type: selectedTaskStatus,
                    page: pageInfo.current_page,
                    size: pageInfo.size,
                },
                method: _service_program__WEBPACK_IMPORTED_MODULE_15__["fetchTaskList"],
            },
            _a);
        var params = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__["filterParams"])(__assign(__assign({}, requestType[currentPage].params), param));
        requestType[currentPage]
            .method(params)
            .then(function (result) {
            var pageInfo = result.data.table_body.page_info;
            var list = result.data.table_body.list || [];
            if (!!Number(pageInfo.total_page_num) && !list.length && pageInfo.current_page > 1) {
                fetchData(isLoad, __assign(__assign({}, param), { page: pageInfo.current_page - 1 }));
                return;
            }
            setSourceData(result.data);
            setHeadList(result.data.table_head.list);
            if (currentPage === PageType.STUDENTS) {
                setDataList(buildDataListKey(list));
            }
            else {
                setDataList(list);
            }
            setPageInfo(pageInfo);
            onUpdateSelectedRow(list);
            props.onQueryChange && props.onQueryChange(params);
            if (props.onDataChange) {
                props.onDataChange('updateEmptyData', result.data.data_count);
            }
        })
            .finally(function () {
            setIsLoading(false);
        });
    }, [props.programId, selectedParentType, selectedTaskStatus, pageInfo.current_page]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchData(true);
    }, [props.programId, selectedParentType, selectedTaskStatus, pageInfo.current_page]);
    var buildSearchSuggestionsParams = function (keyword) {
        var currentPage = props.currentPage, programId = props.programId;
        var params = {
            accounts: keyword,
            program_id: programId,
            is_suggestion: '1',
            search_source: '',
        };
        if (currentPage === PageType.STUDENTS) {
            params.search_source = 'student_task';
        }
        else {
            params.search_source = 'organization_task';
        }
        return params;
    };
    var onSearchSuggestions = function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
        var params, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = buildSearchSuggestionsParams(keyword);
                    return [4 /*yield*/, Object(_service_program__WEBPACK_IMPORTED_MODULE_15__["searchTask"])(params)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, (data || []).map(function (item) {
                            return {
                                id: item.id,
                                label: Object(_components_basic_SearchInput__WEBPACK_IMPORTED_MODULE_14__["getLabelElement"])(__assign(__assign({}, item), { avatar: item.avatar || _components_basic_SearchInput__WEBPACK_IMPORTED_MODULE_14__["iconImgMap"][item.account_type] })),
                                type: item.account_type,
                                account: item.account,
                            };
                        })];
            }
        });
    }); };
    var onTaskStatusChange = function (status) {
        setSelectedTaskStatus(status);
    };
    var onDisplayTypeChange = function (type, isCheck) {
        var arr = Array.from(selectedParentType);
        if (isCheck) {
            arr.push(type);
        }
        else {
            arr.splice(arr.indexOf(type), 1);
        }
        setSelectedParentType(arr);
    };
    // 搜索框搜索条件变更
    var onSearchInputChange = function (data) {
        setMemberList(data);
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__["onTransFormAccount"])(data);
        setSelectedAccounts(accounts.length ? JSON.stringify(accounts) : '');
    };
    // 条件查询
    var onSearch = function () {
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_7__["onTransFormAccount"])(memberList);
        var accountsStr = accounts.length === 0 ? '' : JSON.stringify(accounts);
        setSelectedAccounts(accounts.length ? JSON.stringify(accounts) : '');
        fetchData(true, {
            accounts: accountsStr,
        });
    };
    var buildDownloadParams = function () {
        var currentPage = props.currentPage, programId = props.programId;
        switch (currentPage) {
            case PageType.STUDENTS:
                return {
                    class: 'ProgramTaskUserList',
                    params: JSON.stringify({
                        program_id: programId,
                        accounts: selectedAccounts,
                        type: selectedTaskStatus,
                        output: 'excel',
                        page: pageInfo.current_page,
                        size: pageInfo.size,
                    }),
                };
            case PageType.GROUP_VIEW:
                return {
                    class: 'OrganizingProgramTaskList',
                    params: JSON.stringify({
                        program_id: props.programId,
                        parent_types: selectedParentType.join(','),
                        accounts: selectedAccounts,
                        type: selectedTaskStatus,
                        output: 'excel',
                    }),
                };
            default:
                return {
                    class: '',
                    params: '',
                };
        }
    };
    var reportDownload = function () {
        var params = buildDownloadParams();
        downloadFileByOpenWindow(params.class, params.params);
    };
    var onMoreOperationMouseEnter = function () {
        setIsShowMoreOperation(true);
    };
    var onMoreOperationMouseLeave = function () {
        setIsShowMoreOperation(false);
    };
    var onPageChange = function (page) {
        setPageInfo(__assign(__assign({}, pageInfo), { current_page: page }));
    };
    var onAssignClassClick = function () {
        window.location.href = '/class/index#/classEdit/new';
    };
    var onAssignTaskClick = function () {
        var onAssignEmitted = props.onAssignEmitted;
        onAssignEmitted && onAssignEmitted();
    };
    var renderTabs = function () {
        var currentPage = props.currentPage;
        switch (currentPage) {
            case PageType.STUDENTS:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-group studentsRage" },
                    sourceData && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_18__["TaskStatusRadio"], { current: selectedTaskStatus, customStyle: { marginRight: 24 }, completeCount: +sourceData.data_count.complete_num, uncompleteCount: +sourceData.data_count.uncomplete_num, onSelect: onTaskStatusChange })),
                    dataList.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "download-table", onClick: reportDownload }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('下载表格')))));
            case PageType.GROUP_VIEW:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-group" },
                    sourceData && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_18__["TaskStatusRadio"], { current: selectedTaskStatus, customStyle: { marginRight: 24 }, completeCount: +sourceData.data_count.complete_num, uncompleteCount: +sourceData.data_count.uncomplete_num, onSelect: onTaskStatusChange })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-display-checkbox-group" }, renderCheckList()),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex-1" }),
                    dataList.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "download-table", onClick: reportDownload }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('下载表格')))));
            case PageType.GROUP_INFO:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
            default:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        }
    };
    var renderBatchModify = function () {
        var currentPage = props.currentPage;
        switch (currentPage) {
            case PageType.STUDENTS:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'batch-modify-tools-wrap student-rate': true,
                            'disabled': selectedRow.length === 0,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                if (selectedRow.length === 0) {
                                    return;
                                }
                                onSwitchMultiStudentNotifySwitch(true);
                            } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启学员通知')),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                if (selectedRow.length === 0) {
                                    return;
                                }
                                onSwitchMultiStudentNotifySwitch(false);
                            } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭学员通知')),
                        isToB && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                    if (selectedRow.length === 0) {
                                        return;
                                    }
                                    onSwitchMultiDepartmentManagerNotifySwitch(true);
                                } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启直属部门负责人通知')),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                    if (selectedRow.length === 0) {
                                        return;
                                    }
                                    onSwitchMultiDepartmentManagerNotifySwitch(false);
                                } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭直属部门负责人通知')))),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                                if (selectedRow.length === 0) {
                                    return;
                                }
                                onRevokeSelections();
                            } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回任务')))));
            case PageType.GROUP_VIEW:
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tableStatus === ETableStatus.BATCH_MODIFY && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                        'batch-modify-tools-wrap': true,
                        'disabled': selectedRow.length === 0,
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                            if (selectedRow.length === 0) {
                                return;
                            }
                            onSwitchAutoAssignSelections(true);
                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启自动分配新成员')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                            if (selectedRow.length === 0) {
                                return;
                            }
                            onSwitchAutoAssignSelections(false);
                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭自动分配新成员')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "tool-btn", onClick: function () {
                            if (selectedRow.length === 0) {
                                return;
                            }
                            onRevokeSelections();
                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回任务')),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-wrap ".concat(selectedRow.length === 0 ? '' : 'active'), onMouseEnter: onMoreOperationMouseEnter, onMouseLeave: onMoreOperationMouseLeave },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-text" }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('更多操作')),
                            isShowMoreOperation ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "triangleBottom" })) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "triangleTop" }))),
                        isShowMoreOperation && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-list-wrap" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-list" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-item ".concat(selectedRow.length === 0 ? 'disabled' : ''), onClick: function () { return onSwitchMultiStudentNotifySwitch(true); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启学员通知')),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-item ".concat(selectedRow.length === 0 ? 'disabled' : ''), onClick: function () { return onSwitchMultiStudentNotifySwitch(false); } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭学员通知')),
                                isToB && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-item ".concat(selectedRow.length === 0 ? 'disabled' : ''), onClick: function () {
                                            return onSwitchMultiDepartmentManagerNotifySwitch(true);
                                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('开启直属部门负责人通知')),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "more-operation-item ".concat(selectedRow.length === 0 ? 'disabled' : ''), onClick: function () {
                                            return onSwitchMultiDepartmentManagerNotifySwitch(false);
                                        } }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('关闭直属部门负责人通知'))))))))))));
            default:
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
        }
    };
    var renderCheckList = function () {
        return Object(_myTask_routePages_studyTask_util_const__WEBPACK_IMPORTED_MODULE_6__["onGetSearchCheckList"])().map(function (item) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], { key: "checkbox-item-".concat(item.key), isChecked: selectedParentType.includes(item.key)
                    ? _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].IS_CHECK
                    : _common_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__["CHECKBOX_CHECK_TYPE"].UN_CHECK, onChange: function (isCheck) { return onDisplayTypeChange(item.key, isCheck); } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "un-select-table" }, item.label)));
        });
    };
    var handleColumns = function (columns) {
        var toCExcludeColumns = [UpdateType.departmentManagerNotifySwitch];
        return columns.filter(function (item) {
            if (!isToB && toCExcludeColumns.includes(item.dataIndex)) {
                return false;
            }
            return true;
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "program-study-task-group-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_SearchInput__WEBPACK_IMPORTED_MODULE_14__["SearchInput"], { list: memberList, onUpdateList: onSearchInputChange, onSearchSuggestions: onSearchSuggestions, onSearch: onSearch, placeholder: props.placeholder }),
        renderTabs(),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["SplitLine"], { customStyle: { marginTop: 14 } }),
        tableStatus === ETableStatus.DEFAULT && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["ProgramStatusBar"], { customClass: "program-study-task-status-bar", customStyle: { marginTop: 14 } })),
        renderBatchModify(),
        (isLoading || sourceData === undefined) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null),
        !isLoading && sourceData !== undefined && dataList.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmptyTable__WEBPACK_IMPORTED_MODULE_19__["EmptyTable"], { isSearch: !!memberList.length || !!sourceData.data_count.exist_learning_task, onAssignClassClick: onAssignClassClick, onAssignTaskClick: onAssignTaskClick })),
        !isLoading && sourceData !== undefined && dataList.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["CustomTable"], { miniNumTdWidth: 200, columns: handleColumns(columnObj[tableStatus]), data: dataList, customClass: "group-list-wrap" }),
            pageInfo.total_page_num > 1 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_12__["Pagination"], { forceShow: false, currentPage: pageInfo.current_page, showSizeChanger: true, maxPage: pageInfo.total_page_num || 1, onPageChange: onPageChange }))))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroupDetail/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroupDetail/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramStudyTaskGroupDetail", function() { return ProgramStudyTaskGroupDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var _common_components_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/index.ts");
/* harmony import */ var _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts");
/* harmony import */ var _components_basic_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var _interface_program__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/program.ts");
/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.tsx");
/* harmony import */ var _service_program__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/program.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroupDetail/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_DetailOrganizationInfoCell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/DetailOrganizationInfoCell/index.tsx");
/* harmony import */ var common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/common/components/taskStatusRadio/index.tsx");
/* harmony import */ var _components_EmptyTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/EmptyTable/index.tsx");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



















// import { StudentDetailDialog } from '../../components/StudentDetailDialog';
var Loading = common__WEBPACK_IMPORTED_MODULE_2__["components"].Loading;
var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["Modal"].confirm;

var downloadFileByOpenWindow = businessCommon__WEBPACK_IMPORTED_MODULE_18__["bizServices"].downloadFileByOpenWindow;
var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
var UpdateType;
(function (UpdateType) {
    UpdateType["autoAssign"] = "auto_assign";
    UpdateType["assignElective"] = "assign_elective";
    UpdateType["studentNotifySwitch"] = "student_notify_switch";
    UpdateType["departmentManagerNotifySwitch"] = "department_manager_notify_switch";
})(UpdateType || (UpdateType = {}));
var UpdateMsgType = {
    student_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启学员通知'),
    student_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭学员通知'),
    department_manager_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启直属部门负责人通知'),
    department_manager_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭直属部门负责人通知'),
};
var getUpdateMsgByType = function (type, value) {
    var key = type + (value ? '_open' : '_close');
    return UpdateMsgType[key];
};
var ColumnLabelMap = {
    assign_member_cnt: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('人数'),
    complete_num: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成任务数'),
    complete_rate: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成率'),
    due_date: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务到期时间'),
};
/**
 * 主组件
 * @returns ReactComponent
 */
var ProgramStudyTaskGroupDetail = function (props) {
    var _a;
    var placeholder = props.placeholder, onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting;
    var isShowNotification = props.isShowNotification, onNotificationClick = props.onNotificationClick;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), sourceData = _b[0], setSourceData = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), headList = _c[0], setHeadList = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), dataList = _d[0], setDataList = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _e[0], setIsLoading = _e[1];
    // 分页信息
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__assign({}, _util_const__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_PAGE_INFO"])), pageInfo = _f[0], setPageInfo = _f[1];
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), selectedAccounts = _g[0], setSelectedAccounts = _g[1]; // 筛选条件：搜索框搜索内容
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_interface_program__WEBPACK_IMPORTED_MODULE_10__["ITaskStatus"].ALL), selectedTaskStatus = _h[0], setSelectedTaskStatus = _h[1]; // 筛选条件：全部、已完成、未完成
    var _j = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), memberList = _j[0], setMemberList = _j[1];
    var getColumnHead = function (item) {
        return ColumnLabelMap[item.field_name] || item.title || item.field_name;
    };
    var buildParams = function (updateType, accounts, _value) {
        var _a;
        var pageType = props.pageType;
        return {
            obj_id: props.programId,
            obj_type: pageType || 1,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify((_a = {}, _a[updateType] = _value ? 1 : 0, _a)),
        };
    };
    var onUpdateConfig = function (updateType, _value, _data) {
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_6__["onTransFormAccount"])(_data);
        var param = buildParams(updateType, accounts, _value);
        return new Promise(function (resolve) {
            Object(_service_program__WEBPACK_IMPORTED_MODULE_13__["updateConfig"])(param).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["SnackBar"].show({
                        message: getUpdateMsgByType(updateType, _value),
                    });
                    fetchData(false);
                    resolve(true);
                    return true;
                }
                else {
                    resolve(false);
                    return false;
                }
            });
        });
    };
    var onSwitchSingleStudentNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.studentNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var onSwitchSingleDepartmentManagerNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.departmentManagerNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var columns = headList
        .filter(function (item) { return item.id !== 'due_date'; })
        .map(function (item, index) {
        // 被固定的列数
        var fixed_column_num = sourceData ? sourceData.table_head.fixed_column_num || -1 : -1;
        var obj = {
            name: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "two-row-limited" }, getColumnHead(item)),
            dataIndex: item.field_name,
            className: 'center table-head',
            width: 120,
            fixed: index < fixed_column_num ? _components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_8__["FixedDirection"].left : undefined,
        };
        // 部门信息
        if (item.field_name === 'user_info') {
            obj.name = '';
            obj.width = 270;
            obj.render = function (data, rowIndex) {
                if (rowIndex === void 0) { rowIndex = 0; }
                var currentPage = pageInfo.current_page;
                var size = pageInfo.size;
                var countIndex = (currentPage - 1) * size + rowIndex + 1;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DetailOrganizationInfoCell__WEBPACK_IMPORTED_MODULE_15__["DetailOrganizationInfoCell"], { index: countIndex, data: data, onRevoke: onRevoke, noPreassignClockIcon: true, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }));
            };
            return obj;
        }
        // 完成任务数
        if (item.field_name === 'complete_num') {
            obj.width = 100;
            obj.render = function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.complete_num);
            };
            return obj;
        }
        // 完成率
        if (item.field_name === 'complete_rate') {
            obj.width = 120;
            obj.name = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, getColumnHead(item));
            obj.render = function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["RateCircle"], { ratio: data.complete_rate });
            };
            return obj;
        }
        if (item.field_name === 'field_enroll') {
            obj.width = 120;
            obj.render = function (data) {
                return data.field_enroll && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["RateCircle"], { ratio: Number(data.field_enroll.enroll_pass_rate) });
            };
            return obj;
        }
        // 小节
        if (/^(field_)/.test(item.field_name)) {
            obj.render = function (data) {
                var fieldObj = data[item.field_name];
                if (!fieldObj) {
                    return '';
                }
                var is_overdue = fieldObj.is_overdue, _a = fieldObj.complete_rate, complete_rate = _a === void 0 ? 0 : _a;
                // is_overdue   1为逾期，0为未逾期
                // is_task      1为任务，0为非任务
                // 按时完成
                if (complete_rate === 1 && is_overdue === 0) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Complete", style: { color: '#4EAA64' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "100%")));
                }
                // 未完成，未到期
                if (complete_rate !== 1 && is_overdue === 0) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'incomplete': true,
                            'not-overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Line", style: { color: '#FBC333' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "".concat(Math.floor(complete_rate * 10000) / 100, "%"))));
                }
                // 逾期未完成
                if (complete_rate !== 1 && is_overdue === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'incomplete': true,
                            'overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Line", style: { color: '#DD4E40' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期未完成'))));
                }
                // 逾期完成
                if (complete_rate === 1 && is_overdue === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_5__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                            'overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Iconfont"], { type: "Complete", style: { color: '#FAB400' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期完成'))));
                }
                return '';
            };
            return obj;
        }
        // 学习阶段
        if (item.type === 'module') {
            obj.isRowSpan = true;
        }
        return obj;
    });
    var onRevoke = function (data) {
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回'),
            centered: true,
            content: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回全部学习任务？点击“撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示'),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回'),
            onOk: function () {
                var param = {
                    obj_id: props.programId,
                    obj_type: 3,
                    student_id: data.student_id,
                    parent_id: props.id,
                    parent_type: props.type,
                };
                Object(_service_program__WEBPACK_IMPORTED_MODULE_13__["revokeStudentTask"])(param).then(function (res) {
                    if (res.status) {
                        _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_4__["SnackBar"].show({
                            message: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务'),
                        });
                        fetchData(false);
                        Object(_common_components_index__WEBPACK_IMPORTED_MODULE_7__["removeElementsByClass"])('study-task-tooltip-container', false);
                    }
                });
            },
        });
    };
    var fetchData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (isLoad, param) {
        if (param === void 0) { param = {}; }
        if (isLoad) {
            setIsLoading(true);
        }
        var defaultParam = {
            program_id: props.programId,
            type: selectedTaskStatus,
            accounts: selectedAccounts,
            page: pageInfo.current_page,
            size: pageInfo.size,
            parent_id: props.id,
            parent_type: props.type,
        };
        var newParam = __assign(__assign({}, defaultParam), param);
        if (!newParam.accounts) {
            delete newParam.accounts;
        }
        Object(_service_program__WEBPACK_IMPORTED_MODULE_13__["getStudentTaskList"])(newParam)
            .then(function (result) {
            var pageInfo = result.data.table_body.page_info;
            var list = result.data.table_body.list || [];
            if (!!Number(pageInfo.total_page_num) && !list.length && pageInfo.current_page > 1) {
                fetchData(isLoad, __assign(__assign({}, param), { page: pageInfo.current_page - 1 }));
                return;
            }
            setSourceData(result.data);
            setHeadList(result.data.table_head.list);
            setDataList(list);
            setPageInfo(pageInfo);
            props.onQueryChange && props.onQueryChange(newParam);
            if (props.onDataChange) {
                props.onDataChange('updateEmptyData', result.data.data_count);
            }
        })
            .finally(function () {
            setIsLoading(false);
        });
    }, [props.programId, selectedTaskStatus, pageInfo.current_page, selectedAccounts]);
    var reportDownload = function () {
        var param = {
            class: 'ProgramTaskUserList',
            params: JSON.stringify({
                program_id: props.programId,
                parent_id: props.id,
                parent_type: props.type,
                accounts: selectedAccounts,
                type: selectedTaskStatus,
                output: 'excel',
            }),
        };
        downloadFileByOpenWindow(param.class, param.params);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchData(true);
    }, [props.programId, selectedTaskStatus, pageInfo.current_page]);
    var onSearchSuggestions = function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_service_program__WEBPACK_IMPORTED_MODULE_13__["searchTask"])({
                        accounts: keyword,
                        program_id: props.programId,
                        is_suggestion: '1',
                        parent_id: props.id,
                        parent_type: props.type,
                        search_source: 'organization_student_task',
                    })];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, (data || []).map(function (item) {
                            return {
                                id: item.id,
                                label: Object(_components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_12__["getLabelElement"])(__assign(__assign({}, item), { avatar: item.avatar || _components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_12__["iconImgMap"][item.account_type] })),
                                type: item.account_type,
                                account: item.account,
                                umu_id: item.umu_id,
                            };
                        })];
            }
        });
    }); };
    var onTaskStatusChange = function (status) {
        setSelectedTaskStatus(status);
    };
    var onSearchInputChange = function (data) {
        setMemberList(data);
    };
    // 条件查询
    var onSearch = function () {
        var accounts = memberList.map(function (item) {
            var obj = {
                account: item.account,
                account_type: item.type,
            };
            if (obj.account_type === _interface_program__WEBPACK_IMPORTED_MODULE_10__["MEMBER_TYPE"].GROUP) {
                obj.user_group_id = item.id;
            }
            else if (obj.account_type === _interface_program__WEBPACK_IMPORTED_MODULE_10__["MEMBER_TYPE"].USER) {
                obj.student_id = item.id;
                obj.umu_id = item.umu_id;
            }
            else {
                obj.id = item.id;
            }
            return obj;
        });
        setSelectedAccounts(accounts.length === 0 ? '' : JSON.stringify(accounts));
        fetchData(true, {
            accounts: accounts.length === 0 ? '' : JSON.stringify(accounts),
        });
    };
    var onPageChange = function (page) {
        setPageInfo(__assign(__assign({}, pageInfo), { current_page: page }));
    };
    var onAssignClassClick = function () {
        window.location.href = '/class/index#/classEdit/new';
    };
    var onSendNotification = function () {
        onNotificationClick &&
            onNotificationClick({
                type: selectedTaskStatus,
                accounts: selectedAccounts,
            });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "program-study-task-group-detail-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "course-toolbar" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_12__["SearchInput"], { list: memberList, onUpdateList: onSearchInputChange, onSearchSuggestions: onSearchSuggestions, onSearch: onSearch, placeholder: placeholder }),
            isShowNotification && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_3__["Button"], { className: "toolbar-notification", onClick: onSendNotification, type: "primary", style: { textTransform: 'uppercase' }, disabled: !!sourceData && !sourceData.data_count.exist_learning_task }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('发送通知')))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-group" },
            sourceData && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_16__["TaskStatusRadio"], { current: selectedTaskStatus, customStyle: { marginRight: 24 }, completeCount: +sourceData.data_count.complete_num, uncompleteCount: +sourceData.data_count.uncomplete_num, onSelect: onTaskStatusChange })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex-1" }),
            dataList.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "download-table", onClick: reportDownload }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('下载表格')))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["SplitLine"], { customStyle: { marginTop: 14 } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "study-task-status-bar-wrap" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：'), "".concat(Math.floor((((_a = sourceData === null || sourceData === void 0 ? void 0 : sourceData.data_count) === null || _a === void 0 ? void 0 : _a.complete_rate) || 0) * 10000) / 100, "%")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["ProgramStatusBar"], { customClass: "study-task-status-bar" })),
        (isLoading || sourceData === undefined) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null),
        !isLoading && sourceData !== undefined && dataList.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmptyTable__WEBPACK_IMPORTED_MODULE_17__["EmptyTable"], { isSearch: !!memberList.length || !!sourceData.data_count.exist_learning_task, onAssignClassClick: onAssignClassClick, onAssignTaskClick: props.onAssignEmitted })),
        !isLoading && sourceData !== undefined && dataList.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["CustomTable"], { miniNumTdWidth: 200, columns: columns, data: dataList, customClass: "group-list-wrap" }),
            pageInfo.total_page_num > 1 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_9__["Pagination"], { forceShow: false, currentPage: pageInfo.current_page, showSizeChanger: true, maxPage: pageInfo.total_page_num || 1, onPageChange: onPageChange }))))));
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskStudents/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskStudents/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramStudyTaskStudents", function() { return ProgramStudyTaskStudents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/common/dist/index.ts");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony import */ var common_components_programTaskTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/common/components/programTaskTable.tsx");
/* harmony import */ var _components_basic_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var _interface_program__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/program.ts");
/* harmony import */ var _components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/SearchInput/index.tsx");
/* harmony import */ var _service_program__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/program.ts");
/* harmony import */ var _util_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskStudents/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/common/components/taskStatusRadio/index.tsx");
/* harmony import */ var _components_EmptyTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/EmptyTable/index.tsx");
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var common_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/common/util.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var Loading = common__WEBPACK_IMPORTED_MODULE_2__["components"].Loading;

var downloadFileByOpenWindow = businessCommon__WEBPACK_IMPORTED_MODULE_14__["bizServices"].downloadFileByOpenWindow;

var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
var UpdateType;
(function (UpdateType) {
    UpdateType["autoAssign"] = "auto_assign";
    UpdateType["assignElective"] = "assign_elective";
    UpdateType["studentNotifySwitch"] = "student_notify_switch";
    UpdateType["departmentManagerNotifySwitch"] = "department_manager_notify_switch";
})(UpdateType || (UpdateType = {}));
var UpdateMsgType = {
    student_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启学员通知'),
    student_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭学员通知'),
    department_manager_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启直属部门负责人通知'),
    department_manager_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭直属部门负责人通知'),
};
var getUpdateMsgByType = function (type, value) {
    var key = type + (value ? '_open' : '_close');
    return UpdateMsgType[key];
};
/**
 * 主组件
 * @returns ReactComponent
 */
var ProgramStudyTaskStudents = function (props) {
    var placeholder = props.placeholder, onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined), sourceData = _a[0], setSourceData = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), headList = _b[0], setHeadList = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), dataList = _c[0], setDataList = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__assign({}, _util_const__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_PAGE_INFO"])), pageInfo = _e[0], setPageInfo = _e[1]; // 分页信息
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), selectedAccounts = _f[0], setSelectedAccounts = _f[1]; // 筛选条件：搜索框搜索内容
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_interface_program__WEBPACK_IMPORTED_MODULE_7__["ITaskStatus"].ALL), selectedTaskStatus = _g[0], setSelectedTaskStatus = _g[1]; // 筛选条件：全部、已完成、未完成
    var _h = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), memberList = _h[0], setMemberList = _h[1];
    var buildParams = function (updateType, accounts, _value) {
        var _a;
        var type = props.type;
        return {
            obj_id: props.programId,
            obj_type: type || 1,
            accounts: JSON.stringify(accounts),
            config: JSON.stringify((_a = {}, _a[updateType] = _value ? 1 : 0, _a)),
        };
    };
    var onUpdateConfig = function (updateType, _value, _data) {
        var accounts = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__["onTransFormAccount"])(_data);
        var param = buildParams(updateType, accounts, _value);
        return new Promise(function (resolve) {
            Object(_service_program__WEBPACK_IMPORTED_MODULE_9__["updateConfig"])(param).then(function (res) {
                if (res.status) {
                    _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_3__["SnackBar"].show({
                        message: getUpdateMsgByType(updateType, _value),
                    });
                    fetchData(false);
                    resolve(true);
                    return true;
                }
                else {
                    resolve(false);
                    return false;
                }
            });
        });
    };
    var onSwitchSingleStudentNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.studentNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var onSwitchSingleDepartmentManagerNotifySwitch = function (_value, _data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onUpdateConfig(UpdateType.departmentManagerNotifySwitch, _value, _data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var fetchData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (isLoad, param) {
        if (param === void 0) { param = {}; }
        if (isLoad) {
            setIsLoading(true);
        }
        var defaultParam = {
            program_id: props.programId,
            type: selectedTaskStatus,
            accounts: selectedAccounts,
            page: pageInfo.current_page,
            size: pageInfo.size,
        };
        var newParam = __assign(__assign({}, defaultParam), param);
        if (!newParam.accounts) {
            delete newParam.accounts;
        }
        Object(_service_program__WEBPACK_IMPORTED_MODULE_9__["getStudentTaskList"])(newParam)
            .then(function (result) {
            var pageInfo = result.data.table_body.page_info;
            var list = result.data.table_body.list || [];
            if (!!Number(pageInfo.total_page_num) && !list.length && pageInfo.current_page > 1) {
                fetchData(isLoad, __assign(__assign({}, param), { page: pageInfo.current_page - 1 }));
                return;
            }
            setSourceData(result.data);
            setHeadList(result.data.table_head.list);
            setDataList(list);
            setPageInfo(pageInfo);
            props.onQueryChange && props.onQueryChange(newParam);
            if (props.onDataChange) {
                props.onDataChange('updateEmptyData', result.data.data_count);
            }
        })
            .finally(function () {
            setIsLoading(false);
        });
    }, [props.programId, selectedTaskStatus, selectedAccounts, pageInfo.current_page]);
    var reportDownload = function () {
        var param = {
            class: 'ProgramTaskUserList',
            params: JSON.stringify({
                program_id: props.programId,
                accounts: selectedAccounts,
                type: selectedTaskStatus,
                output: 'excel',
            }),
        };
        downloadFileByOpenWindow(param.class, param.params);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        fetchData(true);
    }, [props.programId, selectedTaskStatus, pageInfo.current_page]);
    var onSearchSuggestions = function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_service_program__WEBPACK_IMPORTED_MODULE_9__["searchTask"])({
                        accounts: keyword,
                        program_id: props.programId,
                        is_suggestion: '1',
                        search_source: 'student_task',
                    })];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, (data || []).map(function (item) {
                            return {
                                id: item.id,
                                label: Object(_components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_8__["getLabelElement"])(__assign(__assign({}, item), { avatar: item.avatar || _components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_8__["iconImgMap"][item.account_type] })),
                                type: item.account_type,
                                account: item.account,
                                umu_id: item.umu_id,
                            };
                        })];
            }
        });
    }); };
    var onTaskStatusChange = function (status) {
        setSelectedTaskStatus(status);
    };
    var onSearchInputChange = function (data) {
        setMemberList(data);
    };
    // 条件查询
    var onSearch = function () {
        var accountsStr = Object(common_util__WEBPACK_IMPORTED_MODULE_15__["getSearchAccountsStr"])(memberList);
        setSelectedAccounts(accountsStr);
        fetchData(true, {
            accounts: accountsStr,
        });
    };
    var onPageChange = function (page) {
        setPageInfo(__assign(__assign({}, pageInfo), { current_page: page }));
    };
    var onAssignClassClick = function () {
        window.location.href = '/class/index#/classEdit/new';
    };
    var renderShow = function () {
        var _a;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "program-study-task-group-detail-wrap program-study-task-students" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_SearchInput_index__WEBPACK_IMPORTED_MODULE_8__["SearchInput"], { list: memberList, onUpdateList: onSearchInputChange, onSearchSuggestions: onSearchSuggestions, onSearch: onSearch, placeholder: placeholder }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "search-group" },
                sourceData && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_taskStatusRadio__WEBPACK_IMPORTED_MODULE_12__["TaskStatusRadio"], { current: selectedTaskStatus, customStyle: { marginRight: 24 }, completeCount: +sourceData.data_count.complete_num, uncompleteCount: +sourceData.data_count.uncomplete_num, onSelect: onTaskStatusChange })),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex-1" }),
                dataList.length !== 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "download-table", onClick: reportDownload }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('下载表格')))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_6__["SplitLine"], { customStyle: { marginTop: 14 } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "study-task-status-bar-wrap" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                    Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('学员完成率：'), "".concat(Math.floor((((_a = sourceData === null || sourceData === void 0 ? void 0 : sourceData.data_count) === null || _a === void 0 ? void 0 : _a.complete_rate) || 0) * 10000) / 100, "%")),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_6__["ProgramStatusBar"], { customClass: "study-task-status-bar" })),
            (isLoading || sourceData === undefined) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, null),
            !isLoading && sourceData !== undefined && dataList.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmptyTable__WEBPACK_IMPORTED_MODULE_13__["EmptyTable"], { isSearch: !!memberList.length || !!sourceData.data_count.exist_learning_task, onAssignClassClick: onAssignClassClick, onAssignTaskClick: props.onAssignEmitted })),
            !isLoading && sourceData !== undefined && dataList.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_components_programTaskTable__WEBPACK_IMPORTED_MODULE_5__["ProgramTaskTable"], { programId: props.programId, pageInfo: pageInfo, headList: headList, dataList: dataList, sourceData: sourceData, fetchData: fetchData, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }),
                pageInfo.total_page_num > 1 && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_index__WEBPACK_IMPORTED_MODULE_6__["Pagination"], { forceShow: false, currentPage: pageInfo.current_page, showSizeChanger: true, maxPage: pageInfo.total_page_num || 1, onPageChange: onPageChange }))))));
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        " ",
        renderShow());
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/routePages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseStudyTaskGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroup/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseStudyTaskGroup", function() { return _CourseStudyTaskGroup__WEBPACK_IMPORTED_MODULE_0__["CourseStudyTaskGroup"]; });

/* harmony import */ var _CourseStudyTaskGroupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/CourseStudyTaskGroupDetail/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseStudyTaskGroupDetail", function() { return _CourseStudyTaskGroupDetail__WEBPACK_IMPORTED_MODULE_1__["CourseStudyTaskGroupDetail"]; });

/* harmony import */ var _ProgramStudyTaskGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroup/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramStudyTaskGroup", function() { return _ProgramStudyTaskGroup__WEBPACK_IMPORTED_MODULE_2__["ProgramStudyTaskGroup"]; });

/* harmony import */ var _ProgramStudyTaskGroupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/ProgramStudyTaskGroupDetail/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramStudyTaskGroupDetail", function() { return _ProgramStudyTaskGroupDetail__WEBPACK_IMPORTED_MODULE_3__["ProgramStudyTaskGroupDetail"]; });

/* harmony import */ var _MyTaskStudyTaskDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/routePages/MyTaskStudyTaskDetail/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyTaskStudyTaskDetail", function() { return _MyTaskStudyTaskDetail__WEBPACK_IMPORTED_MODULE_4__["MyTaskStudyTaskDetail"]; });









/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTaskList", function() { return fetchTaskList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTask", function() { return searchTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfig", function() { return updateConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeTask", function() { return revokeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeStudentTask", function() { return revokeStudentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeGroupAssignments", function() { return revokeGroupAssignments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "departmentRevokeGroupAssignments", function() { return departmentRevokeGroupAssignments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudentTaskList", function() { return getStudentTaskList; });
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/api/index.ts");
/* harmony import */ var common_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/common/interface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITaskStatus", function() { return common_interface__WEBPACK_IMPORTED_MODULE_2__["ITaskStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEMBER_TYPE", function() { return common_interface__WEBPACK_IMPORTED_MODULE_2__["MEMBER_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FROM", function() { return common_interface__WEBPACK_IMPORTED_MODULE_2__["FROM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateType", function() { return common_interface__WEBPACK_IMPORTED_MODULE_2__["UpdateType"]; });




var fetchTaskList = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].GET_ORGANIZING_COURSE_TASK_LIST, params, { silent: true }).then(function (res) {
        return res;
    }, function () {
        return [];
    });
};
var searchTask = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].GET_MEMBER_SEARCH, params, { silent: true }).then(function (res) {
        return res.data ? res.data : [];
    }, function () {
        return [];
    });
};
// 批量更新自动分配新成员/分配选修小节配置
var updateConfig = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].SET_UPDATE_CONFIG, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};
/**
 * @desc 撤回学习任务
 * @param {int} obj_id:  int, 必填，对象ID，program_id/group_id/session_id
 * @param {int} obj_type:  必填，对象类型 1：课程；2：课程小节；3：学习项目
 * @param {string} accounts:  选填
 */
var revokeTask = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].REVOKE_TASK, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};
/**
 * @desc 撤回学生的学习任务
 * @param {int} obj_id:  int, 必填，对象ID，program_id/group_id/session_id
 * @param {int} obj_type:  必填，对象类型 1：课程；2：课程小节；3：学习项目
 * @param {string} accounts:  选填
 */
var revokeStudentTask = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].REVOKE_STUDENT_TASK, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};
/**
 * @desc 全部撤回
 */
var revokeGroupAssignments = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].REVOKE_GROUP_ASSIGNMENTS, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};
var departmentRevokeGroupAssignments = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].DEPARTMENT_REVOKE_ASSIGNMENTS, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};
// 课程学习任务所有学员列表
var getStudentTaskList = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].GET_STUDENT_TASK_LIST, params, { silent: true }).then(function (res) {
        return res;
    }, function () {
        return [];
    });
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/service/program.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTaskList", function() { return fetchTaskList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTask", function() { return searchTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfig", function() { return updateConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeTask", function() { return revokeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudentTaskList", function() { return getStudentTaskList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeStudentTask", function() { return revokeStudentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeProgramAssignments", function() { return revokeProgramAssignments; });
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/api/program.ts");


var fetchTaskList = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_program__WEBPACK_IMPORTED_MODULE_1__["API"].GET_ORGANIZING_PROGRAM_TASK_LIST, params, { silent: true }).then(function (res) {
        return res;
    }, function () {
        return [];
    });
};
var searchTask = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_program__WEBPACK_IMPORTED_MODULE_1__["API"].GET_MEMBER_SEARCH, params, { silent: true }).then(function (res) {
        return res.data ? res.data : [];
    }, function () {
        return [];
    });
};
// 批量更新自动分配新成员/分配选修小节配置
var updateConfig = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_program__WEBPACK_IMPORTED_MODULE_1__["API"].SET_UPDATE_CONFIG, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};
/**
 * @desc 撤回学习任务
 * @param {int} obj_id:  int, 必填，对象ID，program_id/group_id/session_id
 * @param {int} obj_type:  必填，对象类型 1：课程；2：课程小节；3：学习项目
 * @param {string} accounts:  选填
 */
// [{ account_type: 'department', id: '98087', umu_ids: [111, 222] }];
var revokeTask = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_program__WEBPACK_IMPORTED_MODULE_1__["API"].REVOKE_TASK, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};
// 课程学习任务所有学员列表
var getStudentTaskList = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_program__WEBPACK_IMPORTED_MODULE_1__["API"].GET_STUDENT_TASK_LIST, params, { silent: true }).then(function (res) {
        return res;
    }, function () {
        return [];
    });
};
/**
 * @desc 撤回学生的学习任务
 * @param {int} obj_id:  int, 必填，对象ID，program_id/group_id/session_id
 * @param {int} obj_type:  必填，对象类型 1：课程；2：课程小节；3：学习项目
 * @param {string} accounts:  选填
 */
var revokeStudentTask = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_program__WEBPACK_IMPORTED_MODULE_1__["API"].REVOKE_STUDENT_TASK, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};
/**
 * @desc 全部撤回
 */
var revokeProgramAssignments = function (params) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_api_program__WEBPACK_IMPORTED_MODULE_1__["API"].REVOKE_PROGRAM_ASSIGNMENTS, params, { silent: true }).then(function (res) {
        return res.data ? res.data : {};
    }, function () {
        return [];
    });
};


/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/util/const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_TYPE_MAP", function() { return SESSION_TYPE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_TYPE_MAP", function() { return ACCOUNT_TYPE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVATAR_LIST", function() { return AVATAR_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PAGE_INFO", function() { return DEFAULT_PAGE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_IMAGE_MAP", function() { return ICON_IMAGE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionLabel", function() { return getSessionLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetSearchCheckList", function() { return onGetSearchCheckList; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interface_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/interface/index.ts");
/* harmony import */ var _common_images_icons_icon_class_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/icons/icon-class.png");
/* harmony import */ var _common_images_icons_icon_class_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_images_icons_icon_class_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_images_icons_icon_group_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/icons/icon-group.png");
/* harmony import */ var _common_images_icons_icon_group_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_images_icons_icon_group_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetRole", function() { return _myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__["onGetRole"]; });

/* harmony import */ var _common_images_icons_icon_department_yellow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/images/icons/icon-department-yellow.png");
/* harmony import */ var _common_images_icons_icon_department_yellow_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_images_icons_icon_department_yellow_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/common/dist/index.ts");
var _a;







var SESSION_TYPE_MAP = common__WEBPACK_IMPORTED_MODULE_6__["config"].SESSION_TYPE_NAMES;
var ICON_IMAGE_MAP = {
    2: _common_images_icons_icon_group_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    3: _common_images_icons_icon_class_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    4: _common_images_icons_icon_department_yellow_png__WEBPACK_IMPORTED_MODULE_5___default.a,
};
var ACCOUNT_TYPE_MAP = (_a = {},
    _a[_interface_index__WEBPACK_IMPORTED_MODULE_1__["ITaskDisplayType"].GROUP] = _interface_index__WEBPACK_IMPORTED_MODULE_1__["MEMBER_TYPE"].GROUP,
    _a[_interface_index__WEBPACK_IMPORTED_MODULE_1__["ITaskDisplayType"].CLASS] = _interface_index__WEBPACK_IMPORTED_MODULE_1__["MEMBER_TYPE"].CLASS,
    _a[_interface_index__WEBPACK_IMPORTED_MODULE_1__["ITaskDisplayType"].DEPARTMENT] = _interface_index__WEBPACK_IMPORTED_MODULE_1__["MEMBER_TYPE"].DEPARTMENT,
    _a);
var AVATAR_LIST = [
    __webpack_require__("./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_1.png"),
    __webpack_require__("./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_2.png"),
    __webpack_require__("./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_3.png"),
    __webpack_require__("./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_4.png"),
    __webpack_require__("./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_5.png"),
    __webpack_require__("./src/@myTask/routePages/@studyTask/images/signIn_avatar/signIn_avatar_6.png"),
];
/* 分页组件默认配置项 */
var DEFAULT_PAGE_INFO = {
    list_total_num: 0,
    total_page_num: 0,
    current_page: 1,
    size: 20,
};
var getSessionLabel = function (sessionType) {
    if (String(sessionType) === 'field_enroll') {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('报名');
    }
    return SESSION_TYPE_MAP[Number(sessionType)] || '';
};
var onGetSearchCheckList = function () {
    var checkList = [];
    var roleMap = Object(_myTask_utils_index__WEBPACK_IMPORTED_MODULE_4__["onGetRole"])();
    if (roleMap.isDepartment || roleMap.isAdmin || roleMap.isManage || roleMap.isSubAdmin) {
        checkList.push({
            key: _interface_index__WEBPACK_IMPORTED_MODULE_1__["ITaskDisplayType"].DEPARTMENT,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('显示部门'),
        });
    }
    if (roleMap.isAdmin || roleMap.isManage || roleMap.isSubAdmin) {
        checkList.push({
            key: _interface_index__WEBPACK_IMPORTED_MODULE_1__["ITaskDisplayType"].GROUP,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('显示分组'),
        });
    }
    if (roleMap.isEnterMember) {
        checkList.push({
            key: _interface_index__WEBPACK_IMPORTED_MODULE_1__["ITaskDisplayType"].CLASS,
            label: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('显示班级'),
        });
    }
    return checkList;
};



/***/ }),

/***/ "./src/@myTask/routePages/@studyTask/util/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformData", function() { return transformData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultAvatar", function() { return getDefaultAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabLabel", function() { return getTabLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullSizeTimerstamp", function() { return getFullSizeTimerstamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPreAssigned", function() { return checkPreAssigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMedalIcon", function() { return getMedalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@studyTask/util/const.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);




var transformData = function (data) {
    return data;
};
var getDefaultAvatar = function () {
    var index = Math.floor(Math.random() * 6);
    return _const__WEBPACK_IMPORTED_MODULE_1__["AVATAR_LIST"][index];
};
function getTabLabel() {
    var role = Object(_const__WEBPACK_IMPORTED_MODULE_1__["onGetRole"])();
    var label = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('部门、分组和班级');
    // C端用户
    if (!role.isEnterMember) {
        label = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('班级完成率');
        return label;
    }
    // 讲师
    if (role.isTeacher) {
        // 是否是部门负责人
        label = role.isDepartment ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('部门和班级') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('班级完成率');
    }
    return label;
}
/**
 * 返回完整13位的时间戳，不足13位为不加'0'
 */
var getFullSizeTimerstamp = function (time) {
    var timestamp = "".concat(time);
    // 时间戳满足13位字符
    while (timestamp.length < 13) {
        timestamp += '0';
    }
    return timestamp;
};
/**
 * 判断是否为预分配
 * @param time 时间戳/时间字符串 如：2022-12-19 23:02:00
 * @returns boolean
 */
var checkPreAssigned = function (time) {
    var isPreAssigned = false;
    if (time) {
        try {
            var timestamp = new Date(Number(time) * 1000).getTime();
            var currentTimestamp = Date.now();
            timestamp > currentTimestamp && (isPreAssigned = true);
        }
        catch (e) { }
    }
    return isPreAssigned;
};
/**
 * 获取勋章 icon 的 cdn 地址
 */
var getMedalIcon = function (type, rank, size) {
    function getBaseUrl() {
        var system = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["getCurrentSystem"])().toLowerCase();
        var url = '//com.umustatic.com/cdn/image/achievement/global';
        if (system === 'cn') {
            url = '//statics-umu-cn.umucdn.cn/cdn/image/achievement';
        }
        else if (system === 'em') {
            url = '//dmks9efzatfsk.cloudfront.net/cdn/image/achievement/global';
        }
        else if (system === 'jp') {
            url = '//co.umustatic.com/cdn/image/achievement/global';
        }
        else if (system === 'tw') {
            url = '//tw.umustatic.com/cdn/image/achievement/global';
        }
        return url;
    }
    // 默认返回大尺寸
    size = size || 'L';
    if (!type || !rank) {
        return;
    }
    var ret = '';
    ret = '/medal_' + size + '/' + type + '_' + rank;
    ret = getBaseUrl() + ret + '.png';
    // 勋章图的版本号。如果有更新，需要修改版本号清缓存
    var MEDAL_ICON_VERSION = '3';
    // 添加版本信息
    if (MEDAL_ICON_VERSION) {
        ret += '?' + MEDAL_ICON_VERSION;
    }
    return ret;
};
var textMap = {
    1: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('无'),
    2: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('未开始'),
    3: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["lang"])('未完成'), // 未完成
};
function formatTime(value, text) {
    if (text === void 0) { text = 1; }
    return !value || Number(value) === 0 ? textMap[text] : dayjs__WEBPACK_IMPORTED_MODULE_2___default()(Number(value) * 1000).format('YYYY-MM-DD HH:mm:ss');
}



/***/ }),

/***/ "./src/@myTask/routePages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _learningTask_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/routePages/@learningTask/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LearningTask", function() { return _learningTask_index__WEBPACK_IMPORTED_MODULE_0__["LearningTask"]; });

/* harmony import */ var _mentorshipTask_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/routePages/@mentorshipTask/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MentorshipTask", function() { return _mentorshipTask_index__WEBPACK_IMPORTED_MODULE_1__["MentorshipTask"]; });

/* harmony import */ var _learningManage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/routePages/@learningManage/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LearningManage", function() { return _learningManage__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),

/***/ "./src/@myTask/service/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppData", function() { return getAppData; });
/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/common/dist/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Application = common__WEBPACK_IMPORTED_MODULE_0__["services"].Application;
var AppService = /** @class */ (function (_super) {
    __extends(AppService, _super);
    function AppService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppService;
}(Application));
var templateData = window.pageData; // Application.getTemplateData();
var data = templateData.data;
var config = templateData.config;
var pageData = {
    Lang: config.lang,
    SYSTEM: config.system,
    siteHost: config.site_host,
    userInfo: data.user_info,
    teacherInfo: data.teacher_info,
    creatorInfo: data.creator_info,
    contextInfo: data.context_info,
    isTeacherInfo: data.is_teacher,
};
// tslint:disable-next-line:no-console
console.log('AssignmentPageData: ', pageData);
var appService = new AppService(pageData);
var getAppData = appService.getData;
/* harmony default export */ __webpack_exports__["default"] = (appService);



/***/ }),

/***/ "./src/@myTask/service/learn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMyAssignmentList", function() { return getMyAssignmentList; });
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myTask_api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/api/index.ts");


/*
 * 获取学习任务列表
 */
var getMyAssignmentList = function (data) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_myTask_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].GET_LEARNING_TASK_LIST, data, { silent: true }).then(function (res) {
        return res.data;
    });
};



/***/ }),

/***/ "./src/@myTask/service/manage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManageList", function() { return getManageList; });
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myTask_api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/api/index.ts");


/**
 * 获取带教任务列表
 */
var getManageList = function (data) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_myTask_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].GET_MANAGE_LIST, data, { silent: true }).then(function (res) {
        return res.data;
    });
};



/***/ }),

/***/ "./src/@myTask/service/mentor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMentorList", function() { return getMentorList; });
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myTask_api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/api/index.ts");


/**
 * 获取带教任务列表
 */
var getMentorList = function (data) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_0__["fetchData"])(_myTask_api_index__WEBPACK_IMPORTED_MODULE_1__["API"].GET_MENTOR_LIST, data, { silent: true }).then(function (res) {
        return res.data.data;
    });
};



/***/ }),

/***/ "./src/@myTask/service/userSearch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUserList", function() { return searchUserList; });
/* harmony import */ var _myTask_api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/@myTask/api/index.ts");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/umu-fetch/lib/index.js");
/* harmony import */ var _umu_umu_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @file 保存
 */


// import { IAssessmentUser } from '../interface';
var MEMBER_TYPE;
(function (MEMBER_TYPE) {
    MEMBER_TYPE["USER"] = "user";
    MEMBER_TYPE["GROUP"] = "group";
    MEMBER_TYPE["DEPARTMENT"] = "department";
})(MEMBER_TYPE || (MEMBER_TYPE = {}));
var searchUserList = function (param) {
    return Object(_umu_umu_fetch__WEBPACK_IMPORTED_MODULE_1__["fetchData"])(_myTask_api_index__WEBPACK_IMPORTED_MODULE_0__["API"].ACCOUNT_SEARCH, param, { silent: true }).then(function (res) {
        return res.error_code === 0 ? res.data : [];
    });
};



/***/ }),

/***/ "./src/@myTask/utils/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBER_TYPE", function() { return MEMBER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchPlaceholder", function() { return getSearchPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayPoint", function() { return getDayPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastItemByUrls", function() { return getLastItemByUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsShowOjt", function() { return getIsShowOjt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openWithNewTab", function() { return openWithNewTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterParams", function() { return filterParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetRole", function() { return onGetRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnterpriseAccount", function() { return isEnterpriseAccount; });
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-util/dist/index.js");
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _myTask_service_mentor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/@myTask/service/mentor.ts");
/* harmony import */ var _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/@myTask/context/mentorTask.ts");
/* harmony import */ var _umu_umu_ua__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@umu/umu-ua/dist/index.js");
/* harmony import */ var _umu_umu_ua__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_ua__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/lodash/omitBy.js");
/* harmony import */ var lodash_omitBy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_omitBy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/common/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transTime", function() { return common_util__WEBPACK_IMPORTED_MODULE_7__["transTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProgramCardCount", function() { return common_util__WEBPACK_IMPORTED_MODULE_7__["getProgramCardCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCardColor", function() { return common_util__WEBPACK_IMPORTED_MODULE_7__["getCardColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateMsgByType", function() { return common_util__WEBPACK_IMPORTED_MODULE_7__["getUpdateMsgByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ITaskDisplayType", function() { return common_util__WEBPACK_IMPORTED_MODULE_7__["ITaskDisplayType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onTransFormAccount", function() { return common_util__WEBPACK_IMPORTED_MODULE_7__["onTransFormAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSearchAccountsStr", function() { return common_util__WEBPACK_IMPORTED_MODULE_7__["getSearchAccountsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendUrl", function() { return common_util__WEBPACK_IMPORTED_MODULE_7__["appendUrl"]; });

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var SECOND_BASE = 1000;
var getDayPoint = function (time) {
    time.setMinutes(0);
    time.setSeconds(0);
    time.setMilliseconds(0);
    time.setHours(0);
    var todayStart = time.getTime();
    return todayStart;
};
var onGetRole = function () {
    var pageData = window.pageData.data;
    var userInfo = pageData.teacher_info;
    var roleType = userInfo.enterpriseInfo ? Number(userInfo.enterpriseInfo.role_type) : -1;
    return {
        isEnterMember: !!userInfo.enterpriseInfo && !!userInfo.enterpriseInfo.enterpriseId,
        isDepartment: userInfo && !!Number(userInfo.is_department_manager),
        isCAdmin: roleType === 9,
        isSubAdmin: roleType === 5,
        isAdmin: roleType === 4,
        isManage: roleType === 3,
        isTeacher: roleType === 2,
        isLearner: roleType === 1, // 学员
    };
};
/*
 * 获取请求路径最后一个参数
 */
var getLastItemByUrls = function (urls) {
    return urls.substring(urls.lastIndexOf('/') + 1);
};
var getTime = function (time) {
    time = Number(time);
    return time > 0 ? Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_0__["customFormatDateTime"])(time * SECOND_BASE, 'yyyy-MM-dd hh:mm') : '';
};
var getIsShowOjt = function (teacherInfo) { return __awaiter(void 0, void 0, void 0, function () {
    var ojt_quota, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ojt_quota = teacherInfo.ojt_quota;
                return [4 /*yield*/, Object(_myTask_service_mentor__WEBPACK_IMPORTED_MODULE_1__["getMentorList"])({
                        complete_status: _myTask_context_mentorTask__WEBPACK_IMPORTED_MODULE_2__["TASK_STATUS"].ALL,
                        accounts: JSON.stringify([]),
                        page: 1,
                        size: 20,
                    })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, ojt_quota && !!Number(ojt_quota.can_use) && !!data.data_count.total_num];
        }
    });
}); };
var openWithNewTab = function (url, openType) {
    if (_umu_umu_ua__WEBPACK_IMPORTED_MODULE_3__["isIosQQ"]) {
        var a = document.createElement('a');
        a.href = url;
        a.dispatchEvent(new Event('click'));
    }
    else {
        openType ? _umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__["$window"].open(url, openType) : (_umu_umu_dom__WEBPACK_IMPORTED_MODULE_4__["$window"].location.href = url);
    }
};
var filterParams = function () {
    var paramList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paramList[_i] = arguments[_i];
    }
    var result = {};
    paramList.forEach(function (param) {
        Object.assign(result, lodash_omitBy__WEBPACK_IMPORTED_MODULE_5___default()(param, function (value) {
            if (typeof value === 'number') {
                return value === 0;
            }
            if (typeof value === 'string') {
                return value === '';
            }
            return true;
        }));
    });
    return result;
};
var getSearchPlaceholder = function () {
    var roleMap = onGetRole();
    var placeholder = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_6__["lang"])('请输入学习任务名、班级名');
    if (roleMap.isEnterMember) {
        placeholder = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_6__["lang"])('请输入学习任务名');
    }
    if (roleMap.isDepartment || roleMap.isAdmin || roleMap.isManage || roleMap.isSubAdmin) {
        placeholder = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_6__["lang"])('请输入学习任务名、部门名、班级名或分组名');
    }
    if (roleMap.isTeacher) {
        placeholder = roleMap.isDepartment
            ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_6__["lang"])('请输入学习任务名、部门名、班级名')
            : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_6__["lang"])('请输入学习任务名、班级名');
    }
    return placeholder;
};
var get = function (obj, path, defaultValue) {
    var pathCopy = Array.isArray(path) ? path : path.replace(/\[(\d+)\]g/, '.$1').split('.');
    var result = obj;
    for (var _i = 0, pathCopy_1 = pathCopy; _i < pathCopy_1.length; _i++) {
        var p = pathCopy_1[_i];
        result = Object(result)[p];
        if (result === undefined) {
            return defaultValue;
        }
    }
    return result;
};
var isEnterpriseAccount = function () {
    var enterpriseInfo = get(window.pageData, 'data.teacher_info.enterpriseInfo');
    return !!enterpriseInfo;
};
var MEMBER_TYPE;
(function (MEMBER_TYPE) {
    MEMBER_TYPE["USER"] = "user";
    MEMBER_TYPE["GROUP"] = "group";
    MEMBER_TYPE["CLASS"] = "class";
    MEMBER_TYPE["DEPARTMENT"] = "department";
})(MEMBER_TYPE || (MEMBER_TYPE = {}));
/* . 暂时保留
const buildAccounts = (_data: UniteInfo[]) => {
        const { currentPage } = props;
        return _data.map((item) => {
            let obj: any = {};
            if (currentPage === PageType.STUDENTS) {
                obj = {
                    account: item.user_name || item.account,
                    account_type: item.type || 'user',
                    umu_id: item.umu_id || item.id,
                };
            } else if (currentPage === PageType.GROUP_VIEW) {
                obj = {
                    account: item.name,
                    account_type: ACCOUNT_TYPE_MAP[item.parent_type as ITaskDisplayType] || '',
                };
                if (obj.account_type === MEMBER_TYPE.GROUP) {
                    obj.user_group_id = item.parent_id;
                } else {
                    obj.id = item.parent_id;
                }
            }
            return obj;
        });
    };

*/



/***/ }),

/***/ "./src/common/components/courseTaskTable.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseTaskTable", function() { return CourseTaskTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/common/interface.ts");
/* harmony import */ var _myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var _myTask_routePages_studyTask_components_StudentDetailDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/StudentDetailDialog/index.tsx");
/* harmony import */ var _myTask_routePages_studyTask_components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts");
/* harmony import */ var _myTask_routePages_studyTask_components_DetailOrganizationInfoCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/DetailOrganizationInfoCell/index.tsx");
/* harmony import */ var _myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/@myTask/components/taskLabel/index.tsx");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _myTask_routePages_studyTask_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/index.ts");
/* harmony import */ var _myTask_routePages_studyTask_common_components_customDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/customDialog/index.tsx");











var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_8__["Modal"].confirm;
var getIconType = function (type) {
    var colType = type;
    if (colType == '101') {
        colType = '9';
    }
    else if (colType == '102') {
        colType = 'learning-group';
    }
    return colType;
};
var ColumnLabelMap = {
    assign_member_cnt: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('人数'),
    complete_num: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成任务数'),
    complete_rate: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成率'),
};
var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
var getEnrollElement = function (data) {
    var isShowCircle = data.field_enroll && data.field_enroll.hasOwnProperty('enroll_pass_rate');
    return isShowCircle ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_3__["RateCircle"], { ratio: Number(data.field_enroll.enroll_pass_rate) })) : (Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_7__["getEnrollStatus"])(data.field_enroll));
};
var CourseTaskTable = function (props) {
    var SESSION_TYPE_NAMES = {
        1: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('问卷'),
        2: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('提问'),
        3: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('讨论'),
        4: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('拍照'),
        5: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('游戏'),
        6: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('签到'),
        7: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('微课'),
        8: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('抽奖'),
        9: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('报名'),
        10: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('考试'),
        11: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('视频'),
        12: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('直播'),
        13: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('文章'),
        14: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('文档'),
        15: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('图文'),
        16: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('作业'),
        17: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('会议'),
        18: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('直播'),
        19: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('AI微课'),
        20: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('阶段点评'),
    };
    var getSessionLabel = function (sessionType) {
        if (String(sessionType) === 'field_enroll') {
            return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('报名');
        }
        return SESSION_TYPE_NAMES[Number(sessionType)] || '';
    };
    var dataList = props.dataList, groupId = props.groupId, headList = props.headList, sourceData = props.sourceData, pageInfo = props.pageInfo, _a = props.hideSetting, hideSetting = _a === void 0 ? false : _a, _b = props.from, from = _b === void 0 ? common_interface__WEBPACK_IMPORTED_MODULE_2__["FROM"].TASK_MANAGE : _b, _c = props.showPrivateEntry, showPrivateEntry = _c === void 0 ? false : _c, fetchData = props.fetchData, onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting, onSwitchSingleStudentNotifySwitch = props.onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch = props.onSwitchSingleDepartmentManagerNotifySwitch;
    var onRevoke = function (data) {
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回'),
            centered: true,
            content: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回全部学习任务？点击“撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示'),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回'),
            onOk: function () {
                var param = {
                    obj_id: props.groupId,
                    obj_type: 1,
                    student_id: data.student_id,
                    from: from,
                };
                Object(_myTask_routePages_studyTask_service__WEBPACK_IMPORTED_MODULE_9__["revokeStudentTask"])(param).then(function (res) {
                    if (res.status) {
                        _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_8__["SnackBar"].show({
                            message: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务'),
                        });
                        fetchData(false);
                        Object(_myTask_routePages_studyTask_common_components_customDialog__WEBPACK_IMPORTED_MODULE_10__["removeElementsByClass"])('study-task-tooltip-container', false);
                    }
                });
            },
        });
    };
    var getColumnHead = function (item) {
        var isEnroll = item.field_name === 'field_enroll';
        if (!item.hasOwnProperty('type_name') && !isEnroll) {
            return ColumnLabelMap[item.field_name] || item.field_name;
        }
        else {
            // 小节
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "table-head-col-session" },
                item.session_index && "".concat(item.session_index, "."),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "icon iconfont icon-course-type-".concat(getIconType(item.type)) }),
                getSessionLabel(isEnroll ? 'field_enroll' : item.type)));
        }
    };
    var columns = headList.map(function (item, index) {
        // 被固定的列数
        var fixed_column_num = sourceData ? sourceData.table_head.fixed_column_num || -1 : -1;
        var obj = {
            name: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "two-row-limited" }, getColumnHead(item)),
            dataIndex: item.field_name,
            className: 'center table-head',
            width: 120,
            fixed: index < fixed_column_num ? _myTask_routePages_studyTask_components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_5__["FixedDirection"].left : undefined,
        };
        // 部门信息
        if (item.field_name === 'user_info') {
            obj.name = '';
            obj.width = 270;
            obj.render = function (data, rowIndex) {
                if (rowIndex === void 0) { rowIndex = 0; }
                var currentPage = pageInfo.current_page;
                var size = pageInfo.size;
                var countIndex = (currentPage - 1) * size + rowIndex + 1;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_DetailOrganizationInfoCell__WEBPACK_IMPORTED_MODULE_6__["DetailOrganizationInfoCell"], { index: countIndex, data: data, hideSetting: hideSetting, onRevoke: onRevoke, noPreassignTime: true, showPrivateEntry: showPrivateEntry, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }));
            };
            return obj;
        }
        // 完成任务数
        if (item.field_name === 'complete_num') {
            obj.width = 100;
            obj.render = function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.complete_num);
            };
            return obj;
        }
        // 完成率
        if (item.field_name === 'complete_rate') {
            obj.width = 120;
            obj.name = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, getColumnHead(item));
            obj.render = function (data) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], { text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_StudentDetailDialog__WEBPACK_IMPORTED_MODULE_4__["StudentDetailDialog"], { data: data, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch }), arrow: true, width: 300, customStyle: { marginLeft: 4 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_3__["RateCircle"], { ratio: data.complete_rate })));
            };
            return obj;
        }
        if (item.field_name === 'field_enroll') {
            obj.width = 120;
            obj.render = getEnrollElement;
            return obj;
        }
        // 小节
        if (/^(field_)/.test(item.field_name)) {
            obj.name = Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_7__["getSessionTitle"])(obj.name, groupId, item, function () { return fetchData(false); });
            obj.className = "center table-body-session";
            obj.render = function (data) { return Object(_myTask_components_taskLabel_index__WEBPACK_IMPORTED_MODULE_7__["getTaskLabel"])(data, item.field_name); };
            return obj;
        }
        return obj;
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_3__["CustomTable"], { miniNumTdWidth: 200, columns: columns, data: dataList, customClass: "group-list-wrap" }));
};


/***/ }),

/***/ "./src/common/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony import */ var _taskCard_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/common/components/taskCard/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskCard", function() { return _taskCard_index__WEBPACK_IMPORTED_MODULE_0__["TaskCard"]; });

/* harmony import */ var _taskTag_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/common/components/taskTag/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskTag", function() { return _taskTag_index__WEBPACK_IMPORTED_MODULE_1__["TaskTag"]; });

/* harmony import */ var _taskProgress_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/common/components/taskProgress/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskProgress", function() { return _taskProgress_index__WEBPACK_IMPORTED_MODULE_2__["TaskProgress"]; });

/* harmony import */ var _taskContentMsg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/common/components/taskContentMsg/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskContentMsg", function() { return _taskContentMsg__WEBPACK_IMPORTED_MODULE_3__["TaskContentMsg"]; });

/* harmony import */ var common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/common/dist/index.ts");





var If = common__WEBPACK_IMPORTED_MODULE_4__["components"].If;



/***/ }),

/***/ "./src/common/components/programTaskTable.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramTaskTable", function() { return ProgramTaskTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-design/es/index.js");
/* harmony import */ var common_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/common/interface.ts");
/* harmony import */ var _myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/index.ts");
/* harmony import */ var _myTask_routePages_studyTask_components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/basic/CustomTable/interface.ts");
/* harmony import */ var _myTask_routePages_studyTask_components_DetailOrganizationInfoCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/@myTask/routePages/@studyTask/components/DetailOrganizationInfoCell/index.tsx");
/* harmony import */ var _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@umu/umu-design-beta/es/index.js");
/* harmony import */ var _myTask_routePages_studyTask_service_program__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/@myTask/routePages/@studyTask/service/program.ts");
/* harmony import */ var _myTask_routePages_studyTask_common_components_customDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/@myTask/routePages/@studyTask/@common/@components/customDialog/index.tsx");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_10__);










var confirm = _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["Modal"].confirm;

var PageType;
(function (PageType) {
    PageType["STUDENTS"] = "studentsRate";
    PageType["GROUP_VIEW"] = "group";
    PageType["GROUP_INFO"] = "groupInfo";
})(PageType || (PageType = {}));
var ColumnLabelMap = {
    assign_member_cnt: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('人数'),
    complete_num: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成任务数'),
    complete_rate: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('完成率'),
    due_date: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('任务到期时间'),
};
var ProgramTaskTable = function (props) {
    var dataList = props.dataList, programId = props.programId, headList = props.headList, sourceData = props.sourceData, pageInfo = props.pageInfo, _a = props.from, from = _a === void 0 ? common_interface__WEBPACK_IMPORTED_MODULE_3__["FROM"].TASK_MANAGE : _a, fetchData = props.fetchData, onAssignEmittedTaskSetting = props.onAssignEmittedTaskSetting, onSwitchSingleStudentNotifySwitch = props.onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch = props.onSwitchSingleDepartmentManagerNotifySwitch;
    var onRevoke = function (data) {
        confirm({
            title: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回'),
            centered: true,
            content: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('确认撤回全部学习任务？点击“撤回”，所有的学习任务将被撤回，学员将不再收到任务提醒，当前学习任务的统计数据将不再展示'),
            cancelText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('取消'),
            okText: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('撤回'),
            onOk: function () {
                var param = {
                    from: from,
                    obj_id: programId,
                    obj_type: 3,
                    student_id: data.student_id,
                };
                Object(_myTask_routePages_studyTask_service_program__WEBPACK_IMPORTED_MODULE_8__["revokeStudentTask"])(param).then(function (res) {
                    if (res.status) {
                        _umu_umu_design_beta__WEBPACK_IMPORTED_MODULE_7__["SnackBar"].show({
                            message: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已撤回学习任务'),
                        });
                        fetchData(false);
                        Object(_myTask_routePages_studyTask_common_components_customDialog__WEBPACK_IMPORTED_MODULE_9__["removeElementsByClass"])('study-task-tooltip-container', false);
                    }
                });
            },
        });
    };
    var getColumnHead = function (item) {
        return ColumnLabelMap[item.field_name] || item.title || item.field_name;
    };
    var columns = headList
        .filter(function (item) { return item.id !== 'due_date'; })
        .map(function (item, index) {
        // 被固定的列数
        var fixed_column_num = sourceData ? sourceData.table_head.fixed_column_num || -1 : -1;
        var head = getColumnHead(item);
        var isModule = item.type === 'module';
        var obj = {
            name: isModule ? head : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "two-row-limited" }, head),
            dataIndex: item.field_name,
            className: 'center table-head',
            width: 120,
            fixed: index < fixed_column_num ? _myTask_routePages_studyTask_components_basic_CustomTable_interface__WEBPACK_IMPORTED_MODULE_5__["FixedDirection"].left : undefined,
            isRowSpan: isModule,
        };
        // 部门信息
        if (item.field_name === 'user_info') {
            obj.name = '';
            obj.width = 270;
            obj.render = function (data, rowIndex) {
                if (rowIndex === void 0) { rowIndex = 0; }
                var currentPage = pageInfo.current_page;
                var size = pageInfo.size;
                var countIndex = (currentPage - 1) * size + rowIndex + 1;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_DetailOrganizationInfoCell__WEBPACK_IMPORTED_MODULE_6__["DetailOrganizationInfoCell"], { index: countIndex, data: data, onRevoke: onRevoke, noPreassignClockIcon: true, showPrivateEntry: props.showPrivateEntry, onSwitchSingleStudentNotifySwitch: onSwitchSingleStudentNotifySwitch, onSwitchSingleDepartmentManagerNotifySwitch: onSwitchSingleDepartmentManagerNotifySwitch, onAssignEmittedTaskSetting: onAssignEmittedTaskSetting }));
            };
            return obj;
        }
        // 完成任务数
        if (item.field_name === 'complete_num') {
            obj.width = 100;
            obj.render = function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.complete_num);
            };
            return obj;
        }
        // 完成率
        if (item.field_name === 'complete_rate') {
            obj.width = 120;
            obj.name = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, getColumnHead(item));
            obj.render = function (data) {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_4__["RateCircle"], { ratio: data.complete_rate });
            };
            return obj;
        }
        if (item.field_name === 'field_enroll') {
            obj.width = 120;
            obj.render = function (data) {
                return data.field_enroll && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_4__["RateCircle"], { ratio: Number(data.field_enroll.enroll_pass_rate) });
            };
            return obj;
        }
        // 小节
        if (/^(field_)/.test(item.field_name)) {
            obj.render = function (data) {
                var fieldObj = data[item.field_name];
                if (!fieldObj) {
                    return '';
                }
                var is_overdue = fieldObj.is_overdue, _a = fieldObj.complete_rate, complete_rate = _a === void 0 ? 0 : _a;
                // status       0为未参与，1为学习中，2为已完成，3预分配
                // is_overdue   1为逾期，0为未逾期
                // is_task      1为任务，0为非任务
                // 按时完成
                if (complete_rate === 1 && is_overdue === 0) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_10__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Complete", style: { color: '#4EAA64' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "100%")));
                }
                // 未完成，未到期
                if (complete_rate !== 1 && is_overdue === 0) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_10__["classSet"])({
                            'session-status-wrap': true,
                            'incomplete': true,
                            'not-overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Line", style: { color: '#FBC333' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "".concat(Math.floor(complete_rate * 10000) / 100, "%"))));
                }
                // 逾期未完成
                if (complete_rate !== 1 && is_overdue === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_10__["classSet"])({
                            'session-status-wrap': true,
                            'incomplete': true,
                            'overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Line", style: { color: '#DD4E40' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期未完成'))));
                }
                // 逾期完成
                if (complete_rate === 1 && is_overdue === 1) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_10__["classSet"])({
                            'session-status-wrap': true,
                            'complete': true,
                            'overdue': true,
                        }) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_umu_umu_design__WEBPACK_IMPORTED_MODULE_2__["Iconfont"], { type: "Complete", style: { color: '#FAB400' } }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('逾期完成'))));
                }
                return '';
            };
            return obj;
        }
        return obj;
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_myTask_routePages_studyTask_components_basic__WEBPACK_IMPORTED_MODULE_4__["CustomTable"], { miniNumTdWidth: 200, columns: columns, data: dataList, customClass: "group-list-wrap" }));
};


/***/ }),

/***/ "./src/common/components/taskCard/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/components/taskCard/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCard", function() { return TaskCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarList", function() { return UserAvatarList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var businessCommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/businessCommon/dist/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/common/components/taskCard/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);


var UserAvatar = businessCommon__WEBPACK_IMPORTED_MODULE_1__["bizComponents"].UserAvatar;

var UserAvatarList = function (props) {
    var list = props.list;
    var count = list.length;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, list.map(function (item, index) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: "avatar-".concat(index), style: { zIndex: count-- } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAvatar, { className: "", src: item, width: 36, userMedalWidth: 16 })));
    })));
};
var TaskCard = function (props) {
    var option = props.option, style = props.style;
    var onClick = function () {
        if (props.onClick) {
            props.onClick();
        }
    };
    var onContentClick = function () {
        if (props.onContentClick) {
            props.onContentClick();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "my-task-card" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-heard", style: style, onClick: onClick },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "title" }, option.title),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "sub-title" }, option.subTitle),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "user-info" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "account" }, option.userInfo.account),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "avatar-info" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAvatarList, { list: option.userInfo.avatarList })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-content", onClick: onContentClick }, option.contentMsg)));
};



/***/ }),

/***/ "./src/common/components/taskCardSubTitle/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCardSubTitle", function() { return TaskCardSubTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOption", function() { return getOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/common/util.ts");
/* harmony import */ var common_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/common/enum.ts");




var TaskCardSubTitle = function (props) {
    var data = props.data;
    return +data.task_type === common_enum__WEBPACK_IMPORTED_MODULE_3__["TASK_TYPE"].PROGRAM ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(common_util__WEBPACK_IMPORTED_MODULE_2__["getProgramCardCount"])(data.stage_num, data.group_num, data.session_num, data.open_module).join(' '))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null,
        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('{$0{0=个小节,1=个小节}}', data.session_num),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null),
        Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('{$0{0=人参与,1=人参与}}', data.participate)));
};
function getOption(data, getContentMsg) {
    return {
        title: data.title,
        subTitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TaskCardSubTitle, { data: data }),
        userInfo: {
            account: String(data.teacher_name),
            avatarList: data.teacher_avatar_arr,
        },
        contentMsg: getContentMsg(data),
    };
}


/***/ }),

/***/ "./src/common/components/taskContentMsg/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskContentMsg", function() { return TaskContentMsg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/common/enum.ts");
/* harmony import */ var _taskTimeLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/common/components/taskTimeLabel/index.tsx");
/* harmony import */ var _taskTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/common/components/taskTag/index.tsx");
/* harmony import */ var _taskProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/common/components/taskProgress/index.tsx");
var _a;






var TaskTypeOption = (_a = {},
    _a[common_enum__WEBPACK_IMPORTED_MODULE_2__["TASK_TYPE"].COURSE] = '#1e6ee6',
    _a[common_enum__WEBPACK_IMPORTED_MODULE_2__["TASK_TYPE"].PROGRAM] = '#23a565',
    _a[common_enum__WEBPACK_IMPORTED_MODULE_2__["TASK_TYPE"].SESSION] = '#1e6ee6',
    _a);
var checkIsOJTTask = function (task_type, group_type) {
    return task_type === common_enum__WEBPACK_IMPORTED_MODULE_2__["TASK_TYPE"].COURSE && group_type === common_enum__WEBPACK_IMPORTED_MODULE_2__["COURSE_TYPE"].OJT;
};
var checkIsEnterpriseCertificateCourseTask = function (taskType, item) {
    return taskType === common_enum__WEBPACK_IMPORTED_MODULE_2__["TASK_TYPE"].COURSE && Number(item.is_enterprise_certificate_task) === 1;
};
var checkIsEnterpriseCertificateCourseTaskInvalid = function (taskType, item) {
    return (checkIsEnterpriseCertificateCourseTask(taskType, item) &&
        Number(item.is_enterprise_certificate_task_invalid) === 1);
};
var getLearnLabelByStatus = function (learnStatus, finishRatio) {
    if (learnStatus === common_enum__WEBPACK_IMPORTED_MODULE_2__["LEARN_STATUS"].LEARNED) {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('查看');
    }
    if (!!finishRatio) {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('继续学习');
    }
    return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('开始学习');
};
var getCourseLabel = function (taskType, item) {
    var isEnterpriseCertificateCourse = checkIsEnterpriseCertificateCourseTask(taskType, item);
    if (isEnterpriseCertificateCourse) {
        return Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('企业证书课程');
    }
    return common_enum__WEBPACK_IMPORTED_MODULE_2__["TaskTypeMap"][taskType];
};
var getTagStyle = function (taskType) {
    return {
        borderColor: TaskTypeOption[taskType],
        color: TaskTypeOption[taskType],
    };
};
var enterpriseCertificateCourseTaskInvalidStyle = {
    borderColor: '#999',
    color: '#999',
};
var TaskContentMsg = function (_a) {
    var item = _a.item, onClick = _a.onClick;
    var tagStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return getTagStyle(item.task_type); }, [item.task_type]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-list-item" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_taskTimeLabel__WEBPACK_IMPORTED_MODULE_3__["default"], { dueTime: item.due_time, overDue: item.over_due, learnStatus: item.learn_status, finishTime: item.finish_time }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_taskTag__WEBPACK_IMPORTED_MODULE_4__["TaskTag"], { style: tagStyle }, getCourseLabel(item.task_type, item)),
        checkIsEnterpriseCertificateCourseTaskInvalid(item.task_type, item) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_taskTag__WEBPACK_IMPORTED_MODULE_4__["TaskTag"], { style: enterpriseCertificateCourseTaskInvalidStyle }, Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('已失效'))),
        checkIsOJTTask(item.task_type, item.group_type) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_taskTag__WEBPACK_IMPORTED_MODULE_4__["TaskTag"], { style: tagStyle }, "OJT"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_taskProgress__WEBPACK_IMPORTED_MODULE_5__["TaskProgress"], { ratio: item.finish_ratio, className: "task-list-progress" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { onClick: function (evt) { return onClick(evt); } }, getLearnLabelByStatus(item.learn_status, item.finish_ratio)))));
};


/***/ }),

/***/ "./src/common/components/taskProgress/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/components/taskProgress/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskProgress", function() { return TaskProgress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/common/components/taskProgress/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var TaskProgress = function (props) {
    var children = props.children, ratio = props.ratio, style = props.style, _a = props.isShowLabel, isShowLabel = _a === void 0 ? true : _a, _b = props.className, className = _b === void 0 ? '' : _b;
    var progressStyle = __assign({ width: "".concat(ratio, "%") }, style);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-progress ".concat(className) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-left" },
            isShowLabel ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-label" }, "".concat(ratio, " %")) : null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "progress-div" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "progress", style: progressStyle }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "sub-right" }, children)));
};



/***/ }),

/***/ "./src/common/components/taskStatusRadio/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/components/taskStatusRadio/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusRadio", function() { return TaskStatusRadio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/common/interface.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/common/components/taskStatusRadio/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);





var TaskStatusRadio = function (props) {
    var current = props.current, customStyle = props.customStyle, _a = props.completeCount, completeCount = _a === void 0 ? 0 : _a, _b = props.uncompleteCount, uncompleteCount = _b === void 0 ? 0 : _b, onSelect = props.onSelect;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-status-radio-wrap", style: customStyle },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["classSet"])({
                'radio-item': true,
                'selected': current === common_interface__WEBPACK_IMPORTED_MODULE_3__["ITaskStatus"].ALL,
            }), onClick: function () {
                onSelect(common_interface__WEBPACK_IMPORTED_MODULE_3__["ITaskStatus"].ALL);
            } }, "".concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('全部'), " (").concat(completeCount + uncompleteCount, ")")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["classSet"])({
                'radio-item': true,
                'selected': current === common_interface__WEBPACK_IMPORTED_MODULE_3__["ITaskStatus"].COMPLETED,
            }), onClick: function () {
                onSelect(common_interface__WEBPACK_IMPORTED_MODULE_3__["ITaskStatus"].COMPLETED);
            } }, "".concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已完成'), " (").concat(completeCount, ")")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["classSet"])({
                'radio-item': true,
                'selected': current === common_interface__WEBPACK_IMPORTED_MODULE_3__["ITaskStatus"].UNCOMPLETED,
            }), onClick: function () {
                onSelect(common_interface__WEBPACK_IMPORTED_MODULE_3__["ITaskStatus"].UNCOMPLETED);
            } }, "".concat(Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('未完成'), " (").concat(uncompleteCount, ")"))));
};


/***/ }),

/***/ "./src/common/components/taskTag/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/components/taskTag/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTag", function() { return TaskTag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/common/components/taskTag/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);


var TaskTag = function (props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, style = props.style;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "task-tag ".concat(className), style: style }, props.children));
};



/***/ }),

/***/ "./src/common/components/taskTimeLabel/index.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/components/taskTimeLabel/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@umu/umu-dom/dist/index.js");
/* harmony import */ var _umu_umu_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/common/util.ts");
/* harmony import */ var common_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/common/enum.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/common/components/taskTimeLabel/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);






var TaskTimeLabel = function (_a) {
    var dueTime = _a.dueTime, learnStatus = _a.learnStatus, overDue = _a.overDue, finishTime = _a.finishTime;
    var time = learnStatus === common_enum__WEBPACK_IMPORTED_MODULE_4__["LEARN_STATUS"].LEARNED ? Number(finishTime) : dueTime;
    if (!time) {
        return null;
    }
    var label = learnStatus === common_enum__WEBPACK_IMPORTED_MODULE_4__["LEARN_STATUS"].LEARNED ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('已完成') : !!overDue ? Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已过期') : Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('到期');
    var cls = Object(_umu_umu_dom__WEBPACK_IMPORTED_MODULE_2__["classSet"])({
        'task-list-time': true,
        // 只有“逾期未完成“状态下 任务卡片上的“XXXX 已过期” 的字体展示成红色
        'over-due': !!overDue && learnStatus !== common_enum__WEBPACK_IMPORTED_MODULE_4__["LEARN_STATUS"].LEARNED,
    });
    var isSystemENOrEM = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["isSystem"])('EN') || Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["isSystem"])('EM');
    var timeString = Object(common_util__WEBPACK_IMPORTED_MODULE_3__["transTime"])(time * 1000);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: cls },
        isSystemENOrEM ? label : timeString,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null),
        isSystemENOrEM ? timeString : label));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TaskTimeLabel));


/***/ }),

/***/ "./src/common/enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSE_TYPE", function() { return COURSE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_TYPE", function() { return TASK_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTypeMap", function() { return TaskTypeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEARN_STATUS", function() { return LEARN_STATUS; });
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__);
var _a;

var COURSE_TYPE;
(function (COURSE_TYPE) {
    COURSE_TYPE["CUSTOM"] = "1";
    COURSE_TYPE["OJT"] = "2";
})(COURSE_TYPE || (COURSE_TYPE = {}));
var TASK_TYPE;
(function (TASK_TYPE) {
    TASK_TYPE[TASK_TYPE["COURSE"] = 0] = "COURSE";
    TASK_TYPE[TASK_TYPE["PROGRAM"] = 1] = "PROGRAM";
    TASK_TYPE[TASK_TYPE["SESSION"] = 2] = "SESSION";
})(TASK_TYPE || (TASK_TYPE = {}));
var TaskTypeMap = (_a = {},
    _a[TASK_TYPE.COURSE] = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["commonLang"])('课程'),
    _a[TASK_TYPE.PROGRAM] = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["commonLang"])('学习项目'),
    _a[TASK_TYPE.SESSION] = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_0__["commonLang"])('小节'),
    _a);
var LEARN_STATUS;
(function (LEARN_STATUS) {
    LEARN_STATUS[LEARN_STATUS["LEARNED"] = 1] = "LEARNED";
    LEARN_STATUS[LEARN_STATUS["TO_LEARNER"] = 2] = "TO_LEARNER";
})(LEARN_STATUS || (LEARN_STATUS = {}));


/***/ }),

/***/ "./src/common/interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITaskStatus", function() { return ITaskStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBER_TYPE", function() { return MEMBER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FROM", function() { return FROM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateType", function() { return UpdateType; });
var ITaskStatus;
(function (ITaskStatus) {
    ITaskStatus["ALL"] = "0";
    ITaskStatus["COMPLETED"] = "1";
    ITaskStatus["UNCOMPLETED"] = "2";
})(ITaskStatus || (ITaskStatus = {}));
var MEMBER_TYPE;
(function (MEMBER_TYPE) {
    MEMBER_TYPE["USER"] = "user";
    MEMBER_TYPE["GROUP"] = "group";
    MEMBER_TYPE["CLASS"] = "class";
    MEMBER_TYPE["DEPARTMENT"] = "department";
})(MEMBER_TYPE || (MEMBER_TYPE = {}));
var FROM;
(function (FROM) {
    FROM[FROM["TASK_MANAGE"] = 1] = "TASK_MANAGE";
    FROM[FROM["DEPARTMENT"] = 2] = "DEPARTMENT";
})(FROM || (FROM = {}));
var UpdateType;
(function (UpdateType) {
    UpdateType["autoAssign"] = "auto_assign";
    UpdateType["assignElective"] = "assign_elective";
    UpdateType["studentNotifySwitch"] = "student_notify_switch";
    UpdateType["departmentManagerNotifySwitch"] = "department_manager_notify_switch";
})(UpdateType || (UpdateType = {}));


/***/ }),

/***/ "./src/common/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transTime", function() { return transTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgramCardCount", function() { return getProgramCardCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardColor", function() { return getCardColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateMsgByType", function() { return getUpdateMsgByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITaskDisplayType", function() { return ITaskDisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTransFormAccount", function() { return onTransFormAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchAccountsStr", function() { return getSearchAccountsStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendUrl", function() { return appendUrl; });
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@umu/umu-util/dist/index.js");
/* harmony import */ var _umu_umu_util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_umu_umu_util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@umu/ukit-lang/lib/index.js");
/* harmony import */ var _umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/common/enum.ts");
/* harmony import */ var common_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/common/interface.ts");
var _a;




var transTime = function (time) {
    return Object(_umu_umu_util__WEBPACK_IMPORTED_MODULE_0__["customFormatDateTime"])(time, 'yyyy-MM-dd hh:mm');
};
var getProgramCardCount = function (moduleNum, groupNum, sessionNum, openModule) {
    moduleNum = moduleNum || '0';
    groupNum = groupNum || '0';
    sessionNum = sessionNum || '0';
    openModule = openModule || '1';
    // 4个学习阶段，14门课程
    // 4门课程，14个小节
    var moduleStr = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('{$0{0=个学习阶段,1=个学习阶段}}', moduleNum);
    var groupStr = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('{$0{0=门课程,1=门课程}}', groupNum);
    var sessionStr = Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["commonLang"])('{$0{0=个小节,1=个小节}}', sessionNum);
    var list = [moduleStr, groupStr];
    if (openModule === '0') {
        list = [groupStr, sessionStr];
    }
    return list;
};
var getCardColor = function (item) {
    if (item.learn_status === common_enum__WEBPACK_IMPORTED_MODULE_2__["LEARN_STATUS"].TO_LEARNER) {
        return !!item.over_due ? '#E86B2C' : '#FFAB00';
    }
    return '#4EAA64';
};
var getUpdateMsgByType = function (type, value) {
    var UpdateMsgType = {
        student_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启学员通知'),
        student_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭学员通知'),
        department_manager_notify_switch_open: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已开启直属部门负责人通知'),
        department_manager_notify_switch_close: Object(_umu_ukit_lang__WEBPACK_IMPORTED_MODULE_1__["lang"])('已关闭直属部门负责人通知'),
    };
    var key = type + (value ? '_open' : '_close');
    return UpdateMsgType[key];
};
var ITaskDisplayType;
(function (ITaskDisplayType) {
    ITaskDisplayType[ITaskDisplayType["GROUP"] = 2] = "GROUP";
    ITaskDisplayType[ITaskDisplayType["CLASS"] = 3] = "CLASS";
    ITaskDisplayType[ITaskDisplayType["DEPARTMENT"] = 4] = "DEPARTMENT";
})(ITaskDisplayType || (ITaskDisplayType = {}));
var ACCOUNT_TYPE_MAP = (_a = {},
    _a[ITaskDisplayType.GROUP] = common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].GROUP,
    _a[ITaskDisplayType.CLASS] = common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].CLASS,
    _a[ITaskDisplayType.DEPARTMENT] = common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].DEPARTMENT,
    _a);
var onTransFormAccount = function (list) {
    return (list || []).map(function (item) {
        if (!item.type) {
            item.type = item.parent_type ? ACCOUNT_TYPE_MAP[item.parent_type] : common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].USER;
        }
        if (!item.id) {
            item.id = item.parent_id || item.umu_id;
        }
        var params = {
            account: item.account,
            account_type: item.type,
        };
        if (item.type === common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].GROUP) {
            params['user_group_id'] = item.id;
        }
        if (item.type === common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].USER) {
            params['umu_id'] = item.id;
        }
        if (item.type === common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].DEPARTMENT) {
            params['id'] = item.id;
        }
        if (item.type === common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].CLASS) {
            params['id'] = item.id;
        }
        return params;
    });
};
var getSearchAccountsStr = function (memberList) {
    var accounts = memberList.map(function (item) {
        var obj = {
            account: item.account,
            account_type: item.type,
        };
        if (obj.account_type === common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].GROUP) {
            obj.user_group_id = item.id;
        }
        else if (obj.account_type === common_interface__WEBPACK_IMPORTED_MODULE_3__["MEMBER_TYPE"].USER) {
            obj.student_id = item.id;
            obj.umu_id = item.umu_id;
        }
        else {
            obj.id = item.id;
        }
        return obj;
    });
    return accounts.length === 0 ? '' : JSON.stringify(accounts);
};
var appendUrl = function (url, params, overwrite) {
    if (overwrite === void 0) { overwrite = false; }
    var urlInstance = new URL(url);
    Object.keys(params).forEach(function (key) {
        if (overwrite) {
            urlInstance.searchParams.set(key, params[key]);
        }
        else {
            urlInstance.searchParams.append(key, params[key]);
        }
    });
    return urlInstance.toString();
};


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/@myTask/myTask.tsx");


/***/ })

/******/ });
//# sourceMappingURL=myTask.bundle.js.map