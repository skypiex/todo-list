/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/bg-desktop-light.jpg */ \"./src/images/bg-desktop-light.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --primary: #2EC4B6;\n  --dark: #011627;\n  --light: #EEEEEE;\n  --danger: #E71D36;\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"montserrat\", sans-serif;\n}\n\n.app {\n  display: flex;\n  flex-direction: column;\n}\n.app .hero {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\ninput:not([type=radio]):not([type=checkbox]), button {\n  appearance: none;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: initial;\n}\n\nbody {\n  background: var(--light);\n  color: var(--dark);\n}\n\nsection {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\nh2 {\n  color: var(--light);\n}\n\nh3 {\n  color: var(--light);\n  font-size: 1rem;\n  font-weight: 400;\n}\n\nh4 {\n  color: var(--light);\n  font-size: 0.875rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n\n.create-todo {\n  display: flex;\n  flex-direction: column;\n}\n.create-todo input[type=text] {\n  display: block;\n  width: 100%;\n  font-size: 1.125rem;\n  padding: 1rem 1.5rem;\n  color: var(--dark);\n  background-color: #fff;\n  border-radius: 0.5rem;\n  box-shadow: var(--shadow);\n  margin-bottom: 0.75rem;\n}\n.create-todo input[type=submit] {\n  display: block;\n  width: 100%;\n  font-size: 1.125rem;\n  padding: 1rem 1.5rem;\n  color: #fff;\n  background-color: var(--primary);\n  border-radius: 0.5rem;\n  box-shadow: var(--shadow);\n  cursor: pointer;\n  transition: 0.2 ease-in-out;\n}\n.create-todo input[type=submit]:hover {\n  opacity: 0.75;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n}\n.todo-list .list-heading {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 0.9rem;\n}\n.todo-list .list-heading h3 {\n  color: var(--dark);\n  font-size: 1rem;\n  font-weight: 400;\n  flex: 1;\n}\n.todo-list .list-heading button {\n  cursor: pointer;\n}\n.todo-list .list-heading button:hover {\n  color: var(--danger);\n}\n.todo-list .done .todo-content input {\n  text-decoration: line-through;\n  color: gray !important;\n}\n.todo-list .list {\n  margin: 1rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n}\n.todo-list .list .todo-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background-color: #fff;\n  padding: 1rem;\n  border-bottom: 1px solid #d3d3d3;\n  box-shadow: var(--shadow);\n}\n.todo-list .list .todo-item label {\n  cursor: pointer;\n}\n.todo-list .list .todo-item .todo-content {\n  flex: 1;\n}\n.todo-list .list .todo-item .todo-content input {\n  color: var(--dark);\n  font-size: 1.125rem;\n  width: 100%;\n}\n.todo-list .list .todo-item .actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.todo-list .list .todo-item .actions button {\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.todo-list .list .todo-item .actions button:hover {\n  opacity: 0.75;\n}\n.todo-list .list .todo-item .actions .edit {\n  background-color: var(--primary);\n}\n.todo-list .list .todo-item .actions .delete {\n  background-color: var(--danger);\n}\n.todo-list input[type=radio],\n.todo-list input[type=checkbox] {\n  display: none;\n}\n.todo-list .bubble {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid var(--dark);\n}\n.todo-list .bubble::after {\n  content: \"\";\n  opacity: 0;\n  width: 0;\n  height: 0;\n  background-color: var(--primary);\n  border-radius: 50%;\n  transition: 0.2 ease-in-out;\n}\n.todo-list input:checked ~ .bubble::after {\n  width: 10px;\n  height: 10px;\n  opacity: 1;\n}\n\n@media (min-width: 1200px) {\n  body {\n    display: flex;\n    justify-content: center;\n    width: 100vw;\n  }\n  body .app {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n  body .app .hero {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n  body .app .hero .greeting, body .app .hero .create-todo {\n    width: 50%;\n  }\n  body .app .todo-list {\n    width: 50%;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header)\n/* harmony export */ });\nconst header = (() => {\n\n    const init = () => {\n\n        const container = document.createElement('section');\n        container.classList.add('greeting');\n\n        const h2 = document.createElement('h2');\n        h2.classList.add('title');\n        h2.textContent = 'HABIT - A simple todo app';\n\n        container.appendChild(h2);\n\n        return container;\n    };\n\n    return { init };\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/header.js?");

/***/ }),

/***/ "./src/components/todoForm.js":
/*!************************************!*\
  !*** ./src/components/todoForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoForm: () => (/* binding */ todoForm)\n/* harmony export */ });\n/* harmony import */ var _lib_handleFormSubmit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/handleFormSubmit */ \"./src/lib/handleFormSubmit.js\");\n\n\nconst todoForm = (() => {\n\n    const init = () => {\n\n        const container = document.createElement('section');\n        container.classList.add('create-todo');\n\n        const h3 = document.createElement('h3');\n        h3.textContent = 'CREATE A TODO';\n\n        const todoForm = document.createElement('form');\n        todoForm.classList.add('new-todo-form');\n\n        const h4 = document.createElement('h4');\n        h4.textContent = `What's on your todo list?`;\n\n        const inputText = document.createElement('input');\n        inputText.type = 'text';\n        inputText.name = 'content';\n        inputText.id = 'content';\n        inputText.placeholder = 'e.g. Buy groceries';\n\n        const inputSubmit = document.createElement('input');\n        inputSubmit.type = 'submit';\n        inputSubmit.value = 'Add todo';\n        inputSubmit.addEventListener('click', _lib_handleFormSubmit__WEBPACK_IMPORTED_MODULE_0__.handleFormSubmit);\n\n        todoForm.appendChild(h4);\n        todoForm.appendChild(inputText);\n        todoForm.appendChild(inputSubmit);\n\n        container.appendChild(h3);\n        container.appendChild(todoForm);\n\n        return container;\n    };\n\n    return { init };\n\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/todoForm.js?");

/***/ }),

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countUpdateChangeStatus: () => (/* binding */ countUpdateChangeStatus),\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _lib_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Observable */ \"./src/lib/Observable.js\");\n/* harmony import */ var _lib_handleItemDeleted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/handleItemDeleted */ \"./src/lib/handleItemDeleted.js\");\n/* harmony import */ var _lib_handleInputChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/handleInputChange */ \"./src/lib/handleInputChange.js\");\n/* harmony import */ var _lib_handleChangeStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/handleChangeStatus */ \"./src/lib/handleChangeStatus.js\");\n/* harmony import */ var _lib_handleClearCompletedItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/handleClearCompletedItems */ \"./src/lib/handleClearCompletedItems.js\");\n\n\n\n\n\n\nconst todoList = (() => {\n    const LOCAL_STORAGE_LIST_KEY = 'todo.items';\n    let items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\n\n    const init = () => {\n\n        const container = document.createElement('section');\n        container.classList.add('todo-list');\n\n        const listHeading = document.createElement('div');\n        listHeading.classList.add('list-heading');\n\n        const h3 = document.createElement('h3');\n        h3.textContent = 'TODO LIST';\n\n        const itemCounter = document.createElement('p');\n        itemCounter.id = 'item-counter';\n\n        const clearCompletedBtn = document.createElement('button');\n        clearCompletedBtn.textContent = 'Clear Completed';\n        clearCompletedBtn.addEventListener('click', () => (0,_lib_handleClearCompletedItems__WEBPACK_IMPORTED_MODULE_4__.handleClearCompletedItems)(todoList.items));\n\n        const list = document.createElement('div');\n        list.classList.add('list');\n        list.id = 'todo-list';\n\n        listHeading.appendChild(h3);\n        listHeading.appendChild(itemCounter);\n        listHeading.appendChild(clearCompletedBtn);\n\n        container.appendChild(listHeading);\n        container.appendChild(list);\n\n        return container;\n    };\n\n    const updateList = () => {\n        let container = document.getElementById('todo-list');\n    \n        while(container.firstChild) {\n            container.removeChild(container.lastChild);\n        }\n    \n        todoList.items.forEach((item, index) => {\n            let todoItem = document.createElement('div');\n            if(item.status === false) {\n                todoItem.classList.add('todo-item');\n            } else {\n                todoItem.classList.add('todo-item', 'done');\n            }\n            \n            let label = document.createElement('label');\n    \n            let checkbox = document.createElement('input');\n            checkbox.type = 'checkbox';\n            checkbox.checked = item.status;\n            checkbox.addEventListener('change', ev => {\n                (0,_lib_handleChangeStatus__WEBPACK_IMPORTED_MODULE_3__.handleChangeStatus)(ev, index);\n            });\n    \n            let bubble = document.createElement('span');\n            bubble.classList.add('bubble');\n    \n            let todoContent = document.createElement('div');\n            todoContent.classList.add('todo-content');\n    \n            let inputText = document.createElement('input');\n            inputText.type = 'text';\n            inputText.disabled = 'disabled';\n            inputText.value = `${item.item}`;\n            inputText.addEventListener('change', ev => {\n                (0,_lib_handleInputChange__WEBPACK_IMPORTED_MODULE_2__.handleInputChange)(ev, index);\n            });\n    \n            let actions = document.createElement('div');\n            actions.classList.add('actions');\n    \n            let editBtn = document.createElement('button');\n            editBtn.classList.add('edit');\n            editBtn.textContent = 'Edit';\n            editBtn.addEventListener('click', () => {\n                inputText.disabled = false;\n                inputText.focus();\n            });\n    \n            let deleteBtn = document.createElement('button');\n            deleteBtn.classList.add('delete');\n            deleteBtn.textContent = 'Delete';\n            deleteBtn.addEventListener('click', () => (0,_lib_handleItemDeleted__WEBPACK_IMPORTED_MODULE_1__.handleItemDeleted)(index));\n    \n            label.appendChild(checkbox);\n            label.appendChild(bubble);\n    \n            todoContent.appendChild(inputText);\n    \n            actions.appendChild(editBtn);\n            actions.appendChild(deleteBtn);\n            \n            todoItem.appendChild(label);\n            todoItem.appendChild(todoContent);\n            todoItem.appendChild(actions);\n    \n            container.appendChild(todoItem);\n        });\n    };\n\n    const updateCounter = () => {\n        const itemsCounter = document.getElementById('item-counter');\n        itemsCounter.textContent = `${todoList.items.length} items left`;\n    };\n\n    const saveList = () => {\n        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(todoList.items));\n    };\n\n    const saveAndRender = () => {\n        updateList();\n        updateCounter();\n        saveList();\n    };\n    \n    return { init, updateList, saveAndRender, items };\n})();\n\nconst itemAdded = item => {\n    todoList.items.push({\n        item,\n        status: false\n    });\n\n    todoList.saveAndRender();\n};\n\nconst itemDeleted = index => {\n    todoList.items.splice(index, 1);\n    todoList.saveAndRender();\n};\n\nconst itemEdited = todo => {\n    let editedItemIndex = todo.index;\n    let newItemValue = todo.newInputValue;\n\n    todoList.items[editedItemIndex].item = newItemValue;\n    todoList.saveAndRender();\n};\n\nconst itemChangeStatus = todo => {\n    let editedItemIndex = todo.index;\n    let newItemStatus = todo.status;\n\n    todoList.items[editedItemIndex].status = newItemStatus;\n    todoList.saveAndRender();\n};\n\nconst clearCompletedItems = filteredTodo => {\n    todoList.items = filteredTodo;\n    todoList.saveAndRender();\n}\n\nconst countUpdateChangeStatus = () => {\n    const itemsCounter = document.getElementById('item-counter');\n    let ongoingItemsLength = todoList.items.filter(item => item.status === false).length;\n\n    itemsCounter.textContent = `${ongoingItemsLength} items left`;\n};\n\n_lib_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('itemAdded', itemAdded);\n_lib_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('itemDeleted', itemDeleted);\n_lib_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('itemEdited', itemEdited);\n_lib_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('itemStatusChange', itemChangeStatus);\n_lib_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('clearCompletedItems', clearCompletedItems);\n_lib_Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe('itemStatusChange', countUpdateChangeStatus);\n\n\n\n//# sourceURL=webpack://todo-list/./src/components/todoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _lib_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/App */ \"./src/lib/App.js\");\n/* harmony import */ var _components_todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todoList */ \"./src/components/todoList.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const rootElement = document.querySelector('body');\n    rootElement.appendChild((0,_lib_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    _components_todoList__WEBPACK_IMPORTED_MODULE_2__.todoList.saveAndRender();\n    (0,_components_todoList__WEBPACK_IMPORTED_MODULE_2__.countUpdateChangeStatus)();\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/lib/App.js":
/*!************************!*\
  !*** ./src/lib/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_todoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/todoForm */ \"./src/components/todoForm.js\");\n/* harmony import */ var _components_todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/todoList */ \"./src/components/todoList.js\");\n\n\n\n\nconst App = () => {\n    const app = document.createElement('div');\n    app.classList.add('app');\n\n    const hero = document.createElement('div');\n    hero.classList.add('hero');\n\n    hero.appendChild(_components_header__WEBPACK_IMPORTED_MODULE_0__.header.init());\n    hero.appendChild(_components_todoForm__WEBPACK_IMPORTED_MODULE_1__.todoForm.init());\n\n    app.appendChild(hero);\n    app.appendChild(_components_todoList__WEBPACK_IMPORTED_MODULE_2__.todoList.init());\n\n    return app;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://todo-list/./src/lib/App.js?");

/***/ }),

/***/ "./src/lib/Observable.js":
/*!*******************************!*\
  !*** ./src/lib/Observable.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Observable {\n    constructor() {\n        this.observers = {};\n    }\n\n    subscribe(event, fn) {\n        if(!this.observers.hasOwnProperty(event)) {\n            this.observers[event] = [];\n        }\n\n        this.observers[event].push(fn);\n    }\n\n    notify(event, data) {\n        if(!this.observers.hasOwnProperty(event)) return [];\n\n        this.observers[event].map(fn => fn(data));\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Observable());\n\n//# sourceURL=webpack://todo-list/./src/lib/Observable.js?");

/***/ }),

/***/ "./src/lib/handleChangeStatus.js":
/*!***************************************!*\
  !*** ./src/lib/handleChangeStatus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleChangeStatus: () => (/* binding */ handleChangeStatus)\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./src/lib/Observable.js\");\n\n\nconst handleChangeStatus = (ev, index) => {\n    if(ev.target.checked === true) {\n        _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify('itemStatusChange', {\n            index,\n            status: true\n        });\n    } else {\n        _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify('itemStatusChange', {\n            index,\n            status: false\n        });\n    }\n};\n\n//# sourceURL=webpack://todo-list/./src/lib/handleChangeStatus.js?");

/***/ }),

/***/ "./src/lib/handleClearCompletedItems.js":
/*!**********************************************!*\
  !*** ./src/lib/handleClearCompletedItems.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleClearCompletedItems: () => (/* binding */ handleClearCompletedItems)\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./src/lib/Observable.js\");\n\n\nconst handleClearCompletedItems = items => {\n    let filteredItems = items.filter(item => item.status === false);\n    _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify('clearCompletedItems', filteredItems);\n};\n\n//# sourceURL=webpack://todo-list/./src/lib/handleClearCompletedItems.js?");

/***/ }),

/***/ "./src/lib/handleFormSubmit.js":
/*!*************************************!*\
  !*** ./src/lib/handleFormSubmit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./src/lib/Observable.js\");\n\n\nconst handleFormSubmit = event => {\n    event.preventDefault();\n    let input = document.getElementById('content');\n    let newItem = input.value;\n    if(newItem === '') return;\n    input.value = '';\n\n    _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify('itemAdded', newItem);\n};\n\n//# sourceURL=webpack://todo-list/./src/lib/handleFormSubmit.js?");

/***/ }),

/***/ "./src/lib/handleInputChange.js":
/*!**************************************!*\
  !*** ./src/lib/handleInputChange.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleInputChange: () => (/* binding */ handleInputChange)\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./src/lib/Observable.js\");\n\n\nconst handleInputChange = (ev, index) => {\n    const newInputValue = ev.target.value;\n    _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify('itemEdited', {\n        index,\n        newInputValue\n    });\n};\n\n//# sourceURL=webpack://todo-list/./src/lib/handleInputChange.js?");

/***/ }),

/***/ "./src/lib/handleItemDeleted.js":
/*!**************************************!*\
  !*** ./src/lib/handleItemDeleted.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleItemDeleted: () => (/* binding */ handleItemDeleted)\n/* harmony export */ });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./src/lib/Observable.js\");\n\n\nconst handleItemDeleted = index => {\n    _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notify('itemDeleted', index);\n};\n\n//# sourceURL=webpack://todo-list/./src/lib/handleItemDeleted.js?");

/***/ }),

/***/ "./src/images/bg-desktop-light.jpg":
/*!*****************************************!*\
  !*** ./src/images/bg-desktop-light.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3508d620efd5a52bb4ce.jpg\";\n\n//# sourceURL=webpack://todo-list/./src/images/bg-desktop-light.jpg?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
