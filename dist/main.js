/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div {\n\tbox-sizing: border-box;\n}\n\n#app {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n\tflex-wrap: wrap;\n\talign-items: center;\n}\n\n.display {\n\twidth: 20rem;\n\theight: 5rem;\n\tmargin-bottom: 0.1rem;\n\tpadding: 0.2rem;\n\tbackground: #4a4a4a;\n\tborder-radius: 10px;\n\tcolor: white;\n\tfont-family: monospace;\n\tfont-size: 4.5rem;\n\ttext-align: right;\n\tline-height: 1;\n}\n\n.flicker {\n\tanimation: flickerAnimation .2s;\n\tanimation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n\n@keyframes flickerAnimation {\n\n    0%{\n\t\topacity: 0;\n    }\n\t20% {\n\t\topacity: 0;\n\t}\n\t21%{\n\t\topacity: 1;\n\t}\n    \n    \n}\n\nbutton {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\tflex: 1;\n\tdisplay: inline-block;\n\tborder: 1px solid white;\n\tborder-radius: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\nbutton:active {\n\tbox-shadow: inset 3px 3px 3px rgb(71 71 71 / 25%);\n\tborder: 1;\n}\n\n.btn-function {\n\tfont-size: 1.5rem;\n\tfont-weight: 600;\n\tbackground-color: #bbbbbb;\n}\n\n.btn-operator,\n.btn-result {\n\tbackground-color: #ffd978;\n}\n\n.btn-number,\n.btn-dot,\n.btn-operator,\n.btn-result {\n\tfont-size: 2.25rem;\n\tfont-weight: 500;\n}\n\n.btn-number[data-number='0'] {\n\tflex-basis: 50%;\n\tmax-width: 50%;\n}\n\n.controllers-row {\n\tdisplay: flex;\n\twidth: calc(5rem * 4);\n\theight: 5rem;\n\tjustify-content: space-between;\n}\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,qBAAqB;CACrB,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,qBAAqB;CACrB,eAAe;CACf,mBAAmB;CACnB,mBAAmB;CACnB,YAAY;CACZ,sBAAsB;CACtB,iBAAiB;CACjB,iBAAiB;CACjB,cAAc;AACf;;AAEA;CACC,+BAA+B;CAC/B,+DAA+D;AAChE;;AAEA;;IAEI;EACF,UAAU;IACR;CACH;EACC,UAAU;CACX;CACA;EACC,UAAU;CACX;;;AAGD;;AAEA;CACC,wBAAwB;CACxB,qBAAqB;CACrB,gBAAgB;CAChB,OAAO;CACP,qBAAqB;CACrB,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,iDAAiD;CACjD,SAAS;AACV;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,yBAAyB;AAC1B;;AAEA;;CAEC,yBAAyB;AAC1B;;AAEA;;;;CAIC,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,cAAc;AACf;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,YAAY;CACZ,8BAA8B;AAC/B","sourcesContent":["div {\n\tbox-sizing: border-box;\n}\n\n#app {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n\tflex-wrap: wrap;\n\talign-items: center;\n}\n\n.display {\n\twidth: 20rem;\n\theight: 5rem;\n\tmargin-bottom: 0.1rem;\n\tpadding: 0.2rem;\n\tbackground: #4a4a4a;\n\tborder-radius: 10px;\n\tcolor: white;\n\tfont-family: monospace;\n\tfont-size: 4.5rem;\n\ttext-align: right;\n\tline-height: 1;\n}\n\n.flicker {\n\tanimation: flickerAnimation .2s;\n\tanimation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n\n@keyframes flickerAnimation {\n\n    0%{\n\t\topacity: 0;\n    }\n\t20% {\n\t\topacity: 0;\n\t}\n\t21%{\n\t\topacity: 1;\n\t}\n    \n    \n}\n\nbutton {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\tflex: 1;\n\tdisplay: inline-block;\n\tborder: 1px solid white;\n\tborder-radius: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\nbutton:active {\n\tbox-shadow: inset 3px 3px 3px rgb(71 71 71 / 25%);\n\tborder: 1;\n}\n\n.btn-function {\n\tfont-size: 1.5rem;\n\tfont-weight: 600;\n\tbackground-color: #bbbbbb;\n}\n\n.btn-operator,\n.btn-result {\n\tbackground-color: #ffd978;\n}\n\n.btn-number,\n.btn-dot,\n.btn-operator,\n.btn-result {\n\tfont-size: 2.25rem;\n\tfont-weight: 500;\n}\n\n.btn-number[data-number='0'] {\n\tflex-basis: 50%;\n\tmax-width: 50%;\n}\n\n.controllers-row {\n\tdisplay: flex;\n\twidth: calc(5rem * 4);\n\theight: 5rem;\n\tjustify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Component.js */ "./src/js/core/Component.js");
/* harmony import */ var _components_Display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Display.js */ "./src/js/components/Display.js");
/* harmony import */ var _components_Controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Controller.js */ "./src/js/components/Controller.js");




class App extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	setup() {
		this.state = {
			displayedNumber: 0,
			firstOperand: undefined,
			secondOperand: undefined,
			recentOperand: 0,
			operator: undefined,
			isDot: false,
			clearButtonText: 'AC',
		};
	}

	template() {
		return `
      <header><h1>Calculator</h1></header>
      <main>
        <div data-component="display" class="display"></div>
        <div data-component="controller"></div>
      </main>
      <footer>
        <h5>Made with ☕️ by <a href="https://github.com/srngch">srngch</a></h5>
      </footer>
    `;
	}

	mount() {
		const {
			displayNumber,
			handleNumberButton,
			handleDotButton,
			handleOperatorButton,
			handleResultButton,
			handleClearButton,
			toggleSignButton,
			handlePercentButton,
		} = this;
		const { displayedNumber, clearButtonText } = this.state;
		const display = this.target.querySelector('[data-component="display"]');
		const controller = this.target.querySelector(
			'[data-component="controller"]'
		);

		new _components_Display_js__WEBPACK_IMPORTED_MODULE_1__["default"](display, {
			displayedNumber,
			displayNumber: displayNumber.bind(this),
		});

		new _components_Controller_js__WEBPACK_IMPORTED_MODULE_2__["default"](controller, {
			clearButtonText,
			handleClearButton: handleClearButton.bind(this),
			toggleSignButton: toggleSignButton.bind(this),
			handlePercentButton: handlePercentButton.bind(this),
			handleNumberButton: handleNumberButton.bind(this),
			handleDotButton: handleDotButton.bind(this),
			handleOperatorButton: handleOperatorButton.bind(this),
			handleResultButton: handleResultButton.bind(this),
		});
		console.table(this.state);
	}

	setEvent() {
		const _isInvalidKey = (key) => {
			const valid = ['Escape', 'Enter', '+', '-', '*', '/', '%', ',', '.'];
			const isFunctionKey = valid.includes(key);
			const isNumkey = Number.isInteger(Number(key)) && key !== ' ';
			return !(isFunctionKey || isNumkey);
		};

		document.addEventListener('keydown', (e) => {
			if (_isInvalidKey(e.key)) return;

			const {
				handleClearButton,
				toggleSignButton,
				handlePercentButton,
				handleNumberButton,
				handleDotButton,
				handleOperatorButton,
				handleResultButton,
			} = this;

			if (isNaN(e.key)) {
				const executes = {
					Escape: handleClearButton.bind(this),
					Enter: handleResultButton.bind(this),
					'+': handleOperatorButton.bind(this),
					'-': handleOperatorButton.bind(this),
					'*': handleOperatorButton.bind(this),
					'/': handleOperatorButton.bind(this),
					'%': handlePercentButton.bind(this),
					',': toggleSignButton.bind(this),
					'.': handleDotButton.bind(this),
				};
				const params = {
					'+': 'plus',
					'-': 'minus',
					'*': 'multiply',
					'/': 'divide',
				};
				executes[e.key](params[e.key]);
				return;
			}
			handleNumberButton.bind(this)(Number(e.key));
		});
	}

	displayNumber(newNumber) {
		this.setState({
			displayedNumber: newNumber,
		});
	}

	handleNumberButton(selectedNumber) {
		const { firstOperand, secondOperand, recentOperand, operator, isDot } =
			this.state;
		const prevNumber =
			operator && secondOperand === undefined ? 0 : recentOperand;
		const newDisplayedNumber = isDot
			? parseFloat(`${prevNumber.toString()}.${selectedNumber.toString()}`)
			: parseFloat(`${prevNumber.toString()}${selectedNumber.toString()}`);

		this.setState({
			displayedNumber: newDisplayedNumber,
			firstOperand: operator ? firstOperand : newDisplayedNumber,
			secondOperand: operator ? newDisplayedNumber : secondOperand,
			recentOperand: newDisplayedNumber,
			isDot: false,
			clearButtonText: 'C',
		});
	}

	handleDotButton() {
		this.setState({
			displayedNumber: `${this.state.displayedNumber}.`,
			isDot: true,
		});
	}

	handleOperatorButton(selectedOperator) {
		const { firstOperand, secondOperand } = this.state;

		this.setState({
			operator: selectedOperator,
			isDot: false,
		});
		if (firstOperand && secondOperand) {
			this.handleResultButton();
		}
	}

	handleResultButton() {
		this.setState({
			displayedNumber: this.#getResult(),
			firstOperand: this.#getResult(),
			secondOperand: undefined,
		});
	}

	#getResult() {
		const { firstOperand, secondOperand, recentOperand, operator } = this.state;
		const first = firstOperand ? firstOperand : 0;
		const second = secondOperand ? secondOperand : recentOperand;
		let result = undefined;

		switch (operator) {
			case 'plus':
				result = first + second;
				break;
			case 'minus':
				result = first - second;
				break;
			case 'multiply':
				result = first * second;
				break;
			case 'divide':
				result = first / second;
				break;
			default:
				result = first;
				break;
		}
		return result;
	}

	// TODO: Add a operation after After getting the results
	handleClearButton() {
		let newState;
		const clearSecondOperand = {
			displayedNumber: 0,
			secondOperand: undefined,
		};
		const clearOperator = { operator: undefined };
		const clearFirstOperand = {
			displayedNumber: 0,
			firstOperand: undefined,
		};
		const { firstOperand, secondOperand, operator } = this.state;

		if (firstOperand && operator && secondOperand) 
			newState = clearSecondOperand;
		else if (firstOperand && operator && !secondOperand) 
			newState = clearOperator;
		else if (firstOperand && !operator && !secondOperand) 
			newState = clearFirstOperand;

		this.setState({
			...newState,
			recentOperand: 0,
			isDot: false,
			clearButtonText: 'AC',
		});
	}

	toggleSignButton() {
		const { displayedNumber, firstOperand } = this.state;
		this.setState({
			firstOperand: firstOperand ? -firstOperand : 0,
			displayedNumber: displayedNumber === 0 ? 0 : -displayedNumber,
		});
	}

	handlePercentButton() {
		let newState;
		const { displayedNumber, firstOperand, operator } = this.state;
		if (operator) {
			newState = {
				displayedNumber: (displayedNumber * firstOperand) / 100,
				secondOperand: (displayedNumber * displayedNumber) / 100,
			};
		} else {
			newState = {
				displayedNumber: (displayedNumber * 1) / 100,
			};
		}
		this.setState(newState);
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/js/components/Controller.js":
/*!*****************************************!*\
  !*** ./src/js/components/Controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Component.js */ "./src/js/core/Component.js");


class Controller extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	template() {
		const { clearButtonText } = this.props;
		return `
			<div class="controllers">
        <div class="controllers-row">
          <button class="btn-function clear">${clearButtonText}</button>
          <button class="btn-function sign">+/-</button>
          <button class="btn-function percent">%</button>  
          <button class="btn-operator" data-operator="divide">÷</button>  
        </div>
        <div class="controllers-row">
        	<button class="btn-number" data-number="7">7</button>
					<button class="btn-number" data-number="8">8</button>
					<button class="btn-number" data-number="9">9</button>
          <button class="btn-operator" data-operator="multiply">×</button>
        </div>
        <div class="controllers-row">
        	<button class="btn-number" data-number="4">4</button>
					<button class="btn-number" data-number="5">5</button>
					<button class="btn-number" data-number="6">6</button>
          <button class="btn-operator" data-operator="minus">-</button>
        </div>
        <div class="controllers-row">
          <button class="btn-number" data-number="1">1</button>
					<button class="btn-number" data-number="2">2</button>
					<button class="btn-number" data-number="3">3</button>
          <button class="btn-operator" data-operator="plus">+</button>
        </div>
        <div class="controllers-row">
          <button class="btn-number" data-number="0">0</button>
          <button class="btn-dot">.</button>
          <button class="btn-result" data-operator="equal">=</button>
        </div>
			</div>
		`;
	}

	setEvent() {
		const {
			handleClearButton,
			handleNumberButton,
			handleDotButton,
			handleOperatorButton,
			handleResultButton,
			toggleSignButton,
			handlePercentButton,
		} = this.props;

		this.addEvent('click', '.clear', (e) => {
			handleClearButton();
      this.#addFlickerAnimation();
		});
		this.addEvent('click', '.btn-number', (e) => {
			handleNumberButton(Number(e.target.dataset.number));
		});
		this.addEvent('click', '.btn-dot', (e) => {
			handleDotButton();
		});
		this.addEvent('click', '.btn-operator', (e) => {
			handleOperatorButton(e.target.dataset.operator);
      this.#addFlickerAnimation();
		});
		this.addEvent('click', '[data-operator="equal"]', (e) => {
			handleResultButton();
      this.#addFlickerAnimation();
		});
		this.addEvent('click', '.sign', (e) => {
			toggleSignButton();
      this.#addFlickerAnimation();
		});
		this.addEvent('click', '.percent', (e) => {
			handlePercentButton();
      this.#addFlickerAnimation();
		});
	}

	#addFlickerAnimation() {
		const displayNumber = document.querySelector('.display-number');
		displayNumber.classList.add('flicker');
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);


/***/ }),

/***/ "./src/js/components/Display.js":
/*!**************************************!*\
  !*** ./src/js/components/Display.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Component.js */ "./src/js/core/Component.js");


class Display extends _core_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	template() {
		const { displayedNumber } = this.props;
		return `
      <span class="display-number">${displayedNumber}</span>
		`;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);


/***/ }),

/***/ "./src/js/core/Component.js":
/*!**********************************!*\
  !*** ./src/js/core/Component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Component {
	constructor(target, props) {
		this.target = target;
		this.props = props;
		this.setup();
		this.setEvent();
		this.render();
	}

	setup() {}

	template() {
		return '';
	}

	mount() {}

	render() {
		this.target.innerHTML = this.template();
		this.mount();
	}

	setState(newState) {
		this.state = { ...this.state, ...newState };
		this.render();
	}

	setEvent() {}

	addEvent(eventType, selector, callback) {
		const children = [...this.target.querySelectorAll(selector)];
		const isTarget = (target) =>
			children.includes(target) || target.closest(selector);
		this.target.addEventListener(eventType, (event) => {
			if (!isTarget(event.target)) return false;
			callback(event);
		});
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/js/app.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");



new _app_js__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('#app'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQ0Q7O0FBRTFCLElBQUksK0NBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9qcy9jb21wb25lbnRzL0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci8uL3NyYy9qcy9jb3JlL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNhcHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5IHtcXG5cXHR3aWR0aDogMjByZW07XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxuXFx0YmFja2dyb3VuZDogIzRhNGE0YTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlO1xcblxcdGZvbnQtc2l6ZTogNC41cmVtO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uZmxpY2tlciB7XFxuXFx0YW5pbWF0aW9uOiBmbGlja2VyQW5pbWF0aW9uIC4ycztcXG5cXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NiwgMC4wMywgMC41MiwgMC45Nik7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XFxuXFxuICAgIDAle1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuICAgIH1cXG5cXHQyMCUge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcblxcdDIxJXtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG4gICAgXFxuICAgIFxcbn1cXG5cXG5idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG5cXHRib3gtc2hhZG93OiBpbnNldCAzcHggM3B4IDNweCByZ2IoNzEgNzEgNzEgLyAyNSUpO1xcblxcdGJvcmRlcjogMTtcXG59XFxuXFxuLmJ0bi1mdW5jdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiYmJiO1xcbn1cXG5cXG4uYnRuLW9wZXJhdG9yLFxcbi5idG4tcmVzdWx0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOTc4O1xcbn1cXG5cXG4uYnRuLW51bWJlcixcXG4uYnRuLWRvdCxcXG4uYnRuLW9wZXJhdG9yLFxcbi5idG4tcmVzdWx0IHtcXG5cXHRmb250LXNpemU6IDIuMjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmJ0bi1udW1iZXJbZGF0YS1udW1iZXI9JzAnXSB7XFxuXFx0ZmxleC1iYXNpczogNTAlO1xcblxcdG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uY29udHJvbGxlcnMtcm93IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiBjYWxjKDVyZW0gKiA0KTtcXG5cXHRoZWlnaHQ6IDVyZW07XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLCtCQUErQjtDQUMvQiwrREFBK0Q7QUFDaEU7O0FBRUE7O0lBRUk7RUFDRixVQUFVO0lBQ1I7Q0FDSDtFQUNDLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsVUFBVTtDQUNYOzs7QUFHRDs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLE9BQU87Q0FDUCxxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpREFBaUQ7Q0FDakQsU0FBUztBQUNWOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix5QkFBeUI7QUFDMUI7O0FBRUE7O0NBRUMseUJBQXlCO0FBQzFCOztBQUVBOzs7O0NBSUMsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWiw4QkFBOEI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2IHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jYXBwIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24tY29udGVudDogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuXFx0d2lkdGg6IDIwcmVtO1xcblxcdGhlaWdodDogNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxuXFx0cGFkZGluZzogMC4ycmVtO1xcblxcdGJhY2tncm91bmQ6ICM0YTRhNGE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG5cXHRmb250LXNpemU6IDQuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmZsaWNrZXIge1xcblxcdGFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiAuMnM7XFxuXFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDYsIDAuMDMsIDAuNTIsIDAuOTYpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xcblxcbiAgICAwJXtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcbiAgICB9XFxuXFx0MjAlIHtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHQyMSV7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuICAgIFxcbiAgICBcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0ZmxleDogMTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuXFx0Ym94LXNoYWRvdzogaW5zZXQgM3B4IDNweCAzcHggcmdiKDcxIDcxIDcxIC8gMjUlKTtcXG5cXHRib3JkZXI6IDE7XFxufVxcblxcbi5idG4tZnVuY3Rpb24ge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcXG59XFxuXFxuLmJ0bi1vcGVyYXRvcixcXG4uYnRuLXJlc3VsdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZDk3ODtcXG59XFxuXFxuLmJ0bi1udW1iZXIsXFxuLmJ0bi1kb3QsXFxuLmJ0bi1vcGVyYXRvcixcXG4uYnRuLXJlc3VsdCB7XFxuXFx0Zm9udC1zaXplOiAyLjI1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5idG4tbnVtYmVyW2RhdGEtbnVtYmVyPScwJ10ge1xcblxcdGZsZXgtYmFzaXM6IDUwJTtcXG5cXHRtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbnRyb2xsZXJzLXJvdyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogY2FsYyg1cmVtICogNCk7XFxuXFx0aGVpZ2h0OiA1cmVtO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb3JlL0NvbXBvbmVudC5qcyc7XG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL2NvbXBvbmVudHMvRGlzcGxheS5qcyc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbGxlci5qcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHNldHVwKCkge1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkaXNwbGF5ZWROdW1iZXI6IDAsXG5cdFx0XHRmaXJzdE9wZXJhbmQ6IHVuZGVmaW5lZCxcblx0XHRcdHNlY29uZE9wZXJhbmQ6IHVuZGVmaW5lZCxcblx0XHRcdHJlY2VudE9wZXJhbmQ6IDAsXG5cdFx0XHRvcGVyYXRvcjogdW5kZWZpbmVkLFxuXHRcdFx0aXNEb3Q6IGZhbHNlLFxuXHRcdFx0Y2xlYXJCdXR0b25UZXh0OiAnQUMnLFxuXHRcdH07XG5cdH1cblxuXHR0ZW1wbGF0ZSgpIHtcblx0XHRyZXR1cm4gYFxuICAgICAgPGhlYWRlcj48aDE+Q2FsY3VsYXRvcjwvaDE+PC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBkYXRhLWNvbXBvbmVudD1cImRpc3BsYXlcIiBjbGFzcz1cImRpc3BsYXlcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWNvbXBvbmVudD1cImNvbnRyb2xsZXJcIj48L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxoNT5NYWRlIHdpdGgg4piV77iPIGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3JuZ2NoXCI+c3JuZ2NoPC9hPjwvaDU+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICBgO1xuXHR9XG5cblx0bW91bnQoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzcGxheU51bWJlcixcblx0XHRcdGhhbmRsZU51bWJlckJ1dHRvbixcblx0XHRcdGhhbmRsZURvdEJ1dHRvbixcblx0XHRcdGhhbmRsZU9wZXJhdG9yQnV0dG9uLFxuXHRcdFx0aGFuZGxlUmVzdWx0QnV0dG9uLFxuXHRcdFx0aGFuZGxlQ2xlYXJCdXR0b24sXG5cdFx0XHR0b2dnbGVTaWduQnV0dG9uLFxuXHRcdFx0aGFuZGxlUGVyY2VudEJ1dHRvbixcblx0XHR9ID0gdGhpcztcblx0XHRjb25zdCB7IGRpc3BsYXllZE51bWJlciwgY2xlYXJCdXR0b25UZXh0IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IGRpc3BsYXkgPSB0aGlzLnRhcmdldC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb21wb25lbnQ9XCJkaXNwbGF5XCJdJyk7XG5cdFx0Y29uc3QgY29udHJvbGxlciA9IHRoaXMudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnW2RhdGEtY29tcG9uZW50PVwiY29udHJvbGxlclwiXSdcblx0XHQpO1xuXG5cdFx0bmV3IERpc3BsYXkoZGlzcGxheSwge1xuXHRcdFx0ZGlzcGxheWVkTnVtYmVyLFxuXHRcdFx0ZGlzcGxheU51bWJlcjogZGlzcGxheU51bWJlci5iaW5kKHRoaXMpLFxuXHRcdH0pO1xuXG5cdFx0bmV3IENvbnRyb2xsZXIoY29udHJvbGxlciwge1xuXHRcdFx0Y2xlYXJCdXR0b25UZXh0LFxuXHRcdFx0aGFuZGxlQ2xlYXJCdXR0b246IGhhbmRsZUNsZWFyQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHR0b2dnbGVTaWduQnV0dG9uOiB0b2dnbGVTaWduQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRoYW5kbGVQZXJjZW50QnV0dG9uOiBoYW5kbGVQZXJjZW50QnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRoYW5kbGVOdW1iZXJCdXR0b246IGhhbmRsZU51bWJlckJ1dHRvbi5iaW5kKHRoaXMpLFxuXHRcdFx0aGFuZGxlRG90QnV0dG9uOiBoYW5kbGVEb3RCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdGhhbmRsZU9wZXJhdG9yQnV0dG9uOiBoYW5kbGVPcGVyYXRvckJ1dHRvbi5iaW5kKHRoaXMpLFxuXHRcdFx0aGFuZGxlUmVzdWx0QnV0dG9uOiBoYW5kbGVSZXN1bHRCdXR0b24uYmluZCh0aGlzKSxcblx0XHR9KTtcblx0XHRjb25zb2xlLnRhYmxlKHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0c2V0RXZlbnQoKSB7XG5cdFx0Y29uc3QgX2lzSW52YWxpZEtleSA9IChrZXkpID0+IHtcblx0XHRcdGNvbnN0IHZhbGlkID0gWydFc2NhcGUnLCAnRW50ZXInLCAnKycsICctJywgJyonLCAnLycsICclJywgJywnLCAnLiddO1xuXHRcdFx0Y29uc3QgaXNGdW5jdGlvbktleSA9IHZhbGlkLmluY2x1ZGVzKGtleSk7XG5cdFx0XHRjb25zdCBpc051bWtleSA9IE51bWJlci5pc0ludGVnZXIoTnVtYmVyKGtleSkpICYmIGtleSAhPT0gJyAnO1xuXHRcdFx0cmV0dXJuICEoaXNGdW5jdGlvbktleSB8fCBpc051bWtleSk7XG5cdFx0fTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKF9pc0ludmFsaWRLZXkoZS5rZXkpKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IHtcblx0XHRcdFx0aGFuZGxlQ2xlYXJCdXR0b24sXG5cdFx0XHRcdHRvZ2dsZVNpZ25CdXR0b24sXG5cdFx0XHRcdGhhbmRsZVBlcmNlbnRCdXR0b24sXG5cdFx0XHRcdGhhbmRsZU51bWJlckJ1dHRvbixcblx0XHRcdFx0aGFuZGxlRG90QnV0dG9uLFxuXHRcdFx0XHRoYW5kbGVPcGVyYXRvckJ1dHRvbixcblx0XHRcdFx0aGFuZGxlUmVzdWx0QnV0dG9uLFxuXHRcdFx0fSA9IHRoaXM7XG5cblx0XHRcdGlmIChpc05hTihlLmtleSkpIHtcblx0XHRcdFx0Y29uc3QgZXhlY3V0ZXMgPSB7XG5cdFx0XHRcdFx0RXNjYXBlOiBoYW5kbGVDbGVhckJ1dHRvbi5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdEVudGVyOiBoYW5kbGVSZXN1bHRCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdFx0XHQnKyc6IGhhbmRsZU9wZXJhdG9yQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0Jy0nOiBoYW5kbGVPcGVyYXRvckJ1dHRvbi5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdCcqJzogaGFuZGxlT3BlcmF0b3JCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdFx0XHQnLyc6IGhhbmRsZU9wZXJhdG9yQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0JyUnOiBoYW5kbGVQZXJjZW50QnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0JywnOiB0b2dnbGVTaWduQnV0dG9uLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0Jy4nOiBoYW5kbGVEb3RCdXR0b24uYmluZCh0aGlzKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRcdCcrJzogJ3BsdXMnLFxuXHRcdFx0XHRcdCctJzogJ21pbnVzJyxcblx0XHRcdFx0XHQnKic6ICdtdWx0aXBseScsXG5cdFx0XHRcdFx0Jy8nOiAnZGl2aWRlJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0ZXhlY3V0ZXNbZS5rZXldKHBhcmFtc1tlLmtleV0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRoYW5kbGVOdW1iZXJCdXR0b24uYmluZCh0aGlzKShOdW1iZXIoZS5rZXkpKTtcblx0XHR9KTtcblx0fVxuXG5cdGRpc3BsYXlOdW1iZXIobmV3TnVtYmVyKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkaXNwbGF5ZWROdW1iZXI6IG5ld051bWJlcixcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZU51bWJlckJ1dHRvbihzZWxlY3RlZE51bWJlcikge1xuXHRcdGNvbnN0IHsgZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kLCByZWNlbnRPcGVyYW5kLCBvcGVyYXRvciwgaXNEb3QgfSA9XG5cdFx0XHR0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHByZXZOdW1iZXIgPVxuXHRcdFx0b3BlcmF0b3IgJiYgc2Vjb25kT3BlcmFuZCA9PT0gdW5kZWZpbmVkID8gMCA6IHJlY2VudE9wZXJhbmQ7XG5cdFx0Y29uc3QgbmV3RGlzcGxheWVkTnVtYmVyID0gaXNEb3Rcblx0XHRcdD8gcGFyc2VGbG9hdChgJHtwcmV2TnVtYmVyLnRvU3RyaW5nKCl9LiR7c2VsZWN0ZWROdW1iZXIudG9TdHJpbmcoKX1gKVxuXHRcdFx0OiBwYXJzZUZsb2F0KGAke3ByZXZOdW1iZXIudG9TdHJpbmcoKX0ke3NlbGVjdGVkTnVtYmVyLnRvU3RyaW5nKCl9YCk7XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRpc3BsYXllZE51bWJlcjogbmV3RGlzcGxheWVkTnVtYmVyLFxuXHRcdFx0Zmlyc3RPcGVyYW5kOiBvcGVyYXRvciA/IGZpcnN0T3BlcmFuZCA6IG5ld0Rpc3BsYXllZE51bWJlcixcblx0XHRcdHNlY29uZE9wZXJhbmQ6IG9wZXJhdG9yID8gbmV3RGlzcGxheWVkTnVtYmVyIDogc2Vjb25kT3BlcmFuZCxcblx0XHRcdHJlY2VudE9wZXJhbmQ6IG5ld0Rpc3BsYXllZE51bWJlcixcblx0XHRcdGlzRG90OiBmYWxzZSxcblx0XHRcdGNsZWFyQnV0dG9uVGV4dDogJ0MnLFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlRG90QnV0dG9uKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGlzcGxheWVkTnVtYmVyOiBgJHt0aGlzLnN0YXRlLmRpc3BsYXllZE51bWJlcn0uYCxcblx0XHRcdGlzRG90OiB0cnVlLFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlT3BlcmF0b3JCdXR0b24oc2VsZWN0ZWRPcGVyYXRvcikge1xuXHRcdGNvbnN0IHsgZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRvcGVyYXRvcjogc2VsZWN0ZWRPcGVyYXRvcixcblx0XHRcdGlzRG90OiBmYWxzZSxcblx0XHR9KTtcblx0XHRpZiAoZmlyc3RPcGVyYW5kICYmIHNlY29uZE9wZXJhbmQpIHtcblx0XHRcdHRoaXMuaGFuZGxlUmVzdWx0QnV0dG9uKCk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlUmVzdWx0QnV0dG9uKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGlzcGxheWVkTnVtYmVyOiB0aGlzLiNnZXRSZXN1bHQoKSxcblx0XHRcdGZpcnN0T3BlcmFuZDogdGhpcy4jZ2V0UmVzdWx0KCksXG5cdFx0XHRzZWNvbmRPcGVyYW5kOiB1bmRlZmluZWQsXG5cdFx0fSk7XG5cdH1cblxuXHQjZ2V0UmVzdWx0KCkge1xuXHRcdGNvbnN0IHsgZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kLCByZWNlbnRPcGVyYW5kLCBvcGVyYXRvciB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBmaXJzdCA9IGZpcnN0T3BlcmFuZCA/IGZpcnN0T3BlcmFuZCA6IDA7XG5cdFx0Y29uc3Qgc2Vjb25kID0gc2Vjb25kT3BlcmFuZCA/IHNlY29uZE9wZXJhbmQgOiByZWNlbnRPcGVyYW5kO1xuXHRcdGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XG5cblx0XHRzd2l0Y2ggKG9wZXJhdG9yKSB7XG5cdFx0XHRjYXNlICdwbHVzJzpcblx0XHRcdFx0cmVzdWx0ID0gZmlyc3QgKyBzZWNvbmQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbWludXMnOlxuXHRcdFx0XHRyZXN1bHQgPSBmaXJzdCAtIHNlY29uZDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdtdWx0aXBseSc6XG5cdFx0XHRcdHJlc3VsdCA9IGZpcnN0ICogc2Vjb25kO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2RpdmlkZSc6XG5cdFx0XHRcdHJlc3VsdCA9IGZpcnN0IC8gc2Vjb25kO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlc3VsdCA9IGZpcnN0O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8vIFRPRE86IEFkZCBhIG9wZXJhdGlvbiBhZnRlciBBZnRlciBnZXR0aW5nIHRoZSByZXN1bHRzXG5cdGhhbmRsZUNsZWFyQnV0dG9uKCkge1xuXHRcdGxldCBuZXdTdGF0ZTtcblx0XHRjb25zdCBjbGVhclNlY29uZE9wZXJhbmQgPSB7XG5cdFx0XHRkaXNwbGF5ZWROdW1iZXI6IDAsXG5cdFx0XHRzZWNvbmRPcGVyYW5kOiB1bmRlZmluZWQsXG5cdFx0fTtcblx0XHRjb25zdCBjbGVhck9wZXJhdG9yID0geyBvcGVyYXRvcjogdW5kZWZpbmVkIH07XG5cdFx0Y29uc3QgY2xlYXJGaXJzdE9wZXJhbmQgPSB7XG5cdFx0XHRkaXNwbGF5ZWROdW1iZXI6IDAsXG5cdFx0XHRmaXJzdE9wZXJhbmQ6IHVuZGVmaW5lZCxcblx0XHR9O1xuXHRcdGNvbnN0IHsgZmlyc3RPcGVyYW5kLCBzZWNvbmRPcGVyYW5kLCBvcGVyYXRvciB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGlmIChmaXJzdE9wZXJhbmQgJiYgb3BlcmF0b3IgJiYgc2Vjb25kT3BlcmFuZCkgXG5cdFx0XHRuZXdTdGF0ZSA9IGNsZWFyU2Vjb25kT3BlcmFuZDtcblx0XHRlbHNlIGlmIChmaXJzdE9wZXJhbmQgJiYgb3BlcmF0b3IgJiYgIXNlY29uZE9wZXJhbmQpIFxuXHRcdFx0bmV3U3RhdGUgPSBjbGVhck9wZXJhdG9yO1xuXHRcdGVsc2UgaWYgKGZpcnN0T3BlcmFuZCAmJiAhb3BlcmF0b3IgJiYgIXNlY29uZE9wZXJhbmQpIFxuXHRcdFx0bmV3U3RhdGUgPSBjbGVhckZpcnN0T3BlcmFuZDtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Li4ubmV3U3RhdGUsXG5cdFx0XHRyZWNlbnRPcGVyYW5kOiAwLFxuXHRcdFx0aXNEb3Q6IGZhbHNlLFxuXHRcdFx0Y2xlYXJCdXR0b25UZXh0OiAnQUMnLFxuXHRcdH0pO1xuXHR9XG5cblx0dG9nZ2xlU2lnbkJ1dHRvbigpIHtcblx0XHRjb25zdCB7IGRpc3BsYXllZE51bWJlciwgZmlyc3RPcGVyYW5kIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Zmlyc3RPcGVyYW5kOiBmaXJzdE9wZXJhbmQgPyAtZmlyc3RPcGVyYW5kIDogMCxcblx0XHRcdGRpc3BsYXllZE51bWJlcjogZGlzcGxheWVkTnVtYmVyID09PSAwID8gMCA6IC1kaXNwbGF5ZWROdW1iZXIsXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVQZXJjZW50QnV0dG9uKCkge1xuXHRcdGxldCBuZXdTdGF0ZTtcblx0XHRjb25zdCB7IGRpc3BsYXllZE51bWJlciwgZmlyc3RPcGVyYW5kLCBvcGVyYXRvciB9ID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAob3BlcmF0b3IpIHtcblx0XHRcdG5ld1N0YXRlID0ge1xuXHRcdFx0XHRkaXNwbGF5ZWROdW1iZXI6IChkaXNwbGF5ZWROdW1iZXIgKiBmaXJzdE9wZXJhbmQpIC8gMTAwLFxuXHRcdFx0XHRzZWNvbmRPcGVyYW5kOiAoZGlzcGxheWVkTnVtYmVyICogZGlzcGxheWVkTnVtYmVyKSAvIDEwMCxcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5ld1N0YXRlID0ge1xuXHRcdFx0XHRkaXNwbGF5ZWROdW1iZXI6IChkaXNwbGF5ZWROdW1iZXIgKiAxKSAvIDEwMCxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29yZS9Db21wb25lbnQuanMnO1xuXG5jbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0dGVtcGxhdGUoKSB7XG5cdFx0Y29uc3QgeyBjbGVhckJ1dHRvblRleHQgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250cm9sbGVyc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbGxlcnMtcm93XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1mdW5jdGlvbiBjbGVhclwiPiR7Y2xlYXJCdXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tZnVuY3Rpb24gc2lnblwiPisvLTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tZnVuY3Rpb24gcGVyY2VudFwiPiU8L2J1dHRvbj4gIFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3BlcmF0b3JcIiBkYXRhLW9wZXJhdG9yPVwiZGl2aWRlXCI+w7c8L2J1dHRvbj4gIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xsZXJzLXJvd1wiPlxuICAgICAgICBcdDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCI3XCI+NzwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCI4XCI+ODwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCI5XCI+OTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3BlcmF0b3JcIiBkYXRhLW9wZXJhdG9yPVwibXVsdGlwbHlcIj7DlzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xsZXJzLXJvd1wiPlxuICAgICAgICBcdDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCI0XCI+NDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCI1XCI+NTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCI2XCI+NjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tb3BlcmF0b3JcIiBkYXRhLW9wZXJhdG9yPVwibWludXNcIj4tPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbGxlcnMtcm93XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1udW1iZXJcIiBkYXRhLW51bWJlcj1cIjFcIj4xPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1udW1iZXJcIiBkYXRhLW51bWJlcj1cIjJcIj4yPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1udW1iZXJcIiBkYXRhLW51bWJlcj1cIjNcIj4zPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1vcGVyYXRvclwiIGRhdGEtb3BlcmF0b3I9XCJwbHVzXCI+KzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xsZXJzLXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tbnVtYmVyXCIgZGF0YS1udW1iZXI9XCIwXCI+MDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tZG90XCI+LjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVzdWx0XCIgZGF0YS1vcGVyYXRvcj1cImVxdWFsXCI+PTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cdH1cblxuXHRzZXRFdmVudCgpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRoYW5kbGVDbGVhckJ1dHRvbixcblx0XHRcdGhhbmRsZU51bWJlckJ1dHRvbixcblx0XHRcdGhhbmRsZURvdEJ1dHRvbixcblx0XHRcdGhhbmRsZU9wZXJhdG9yQnV0dG9uLFxuXHRcdFx0aGFuZGxlUmVzdWx0QnV0dG9uLFxuXHRcdFx0dG9nZ2xlU2lnbkJ1dHRvbixcblx0XHRcdGhhbmRsZVBlcmNlbnRCdXR0b24sXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHR0aGlzLmFkZEV2ZW50KCdjbGljaycsICcuY2xlYXInLCAoZSkgPT4ge1xuXHRcdFx0aGFuZGxlQ2xlYXJCdXR0b24oKTtcbiAgICAgIHRoaXMuI2FkZEZsaWNrZXJBbmltYXRpb24oKTtcblx0XHR9KTtcblx0XHR0aGlzLmFkZEV2ZW50KCdjbGljaycsICcuYnRuLW51bWJlcicsIChlKSA9PiB7XG5cdFx0XHRoYW5kbGVOdW1iZXJCdXR0b24oTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQubnVtYmVyKSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRFdmVudCgnY2xpY2snLCAnLmJ0bi1kb3QnLCAoZSkgPT4ge1xuXHRcdFx0aGFuZGxlRG90QnV0dG9uKCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRFdmVudCgnY2xpY2snLCAnLmJ0bi1vcGVyYXRvcicsIChlKSA9PiB7XG5cdFx0XHRoYW5kbGVPcGVyYXRvckJ1dHRvbihlLnRhcmdldC5kYXRhc2V0Lm9wZXJhdG9yKTtcbiAgICAgIHRoaXMuI2FkZEZsaWNrZXJBbmltYXRpb24oKTtcblx0XHR9KTtcblx0XHR0aGlzLmFkZEV2ZW50KCdjbGljaycsICdbZGF0YS1vcGVyYXRvcj1cImVxdWFsXCJdJywgKGUpID0+IHtcblx0XHRcdGhhbmRsZVJlc3VsdEJ1dHRvbigpO1xuICAgICAgdGhpcy4jYWRkRmxpY2tlckFuaW1hdGlvbigpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWRkRXZlbnQoJ2NsaWNrJywgJy5zaWduJywgKGUpID0+IHtcblx0XHRcdHRvZ2dsZVNpZ25CdXR0b24oKTtcbiAgICAgIHRoaXMuI2FkZEZsaWNrZXJBbmltYXRpb24oKTtcblx0XHR9KTtcblx0XHR0aGlzLmFkZEV2ZW50KCdjbGljaycsICcucGVyY2VudCcsIChlKSA9PiB7XG5cdFx0XHRoYW5kbGVQZXJjZW50QnV0dG9uKCk7XG4gICAgICB0aGlzLiNhZGRGbGlja2VyQW5pbWF0aW9uKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQjYWRkRmxpY2tlckFuaW1hdGlvbigpIHtcblx0XHRjb25zdCBkaXNwbGF5TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktbnVtYmVyJyk7XG5cdFx0ZGlzcGxheU51bWJlci5jbGFzc0xpc3QuYWRkKCdmbGlja2VyJyk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29yZS9Db21wb25lbnQuanMnO1xuXG5jbGFzcyBEaXNwbGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0dGVtcGxhdGUoKSB7XG5cdFx0Y29uc3QgeyBkaXNwbGF5ZWROdW1iZXIgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZGlzcGxheS1udW1iZXJcIj4ke2Rpc3BsYXllZE51bWJlcn08L3NwYW4+XG5cdFx0YDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5O1xuIiwiY2xhc3MgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IodGFyZ2V0LCBwcm9wcykge1xuXHRcdHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdHRoaXMucHJvcHMgPSBwcm9wcztcblx0XHR0aGlzLnNldHVwKCk7XG5cdFx0dGhpcy5zZXRFdmVudCgpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRzZXR1cCgpIHt9XG5cblx0dGVtcGxhdGUoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0bW91bnQoKSB7fVxuXG5cdHJlbmRlcigpIHtcblx0XHR0aGlzLnRhcmdldC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG5cdFx0dGhpcy5tb3VudCgpO1xuXHR9XG5cblx0c2V0U3RhdGUobmV3U3RhdGUpIHtcblx0XHR0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5uZXdTdGF0ZSB9O1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRzZXRFdmVudCgpIHt9XG5cblx0YWRkRXZlbnQoZXZlbnRUeXBlLCBzZWxlY3RvciwgY2FsbGJhY2spIHtcblx0XHRjb25zdCBjaGlsZHJlbiA9IFsuLi50aGlzLnRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV07XG5cdFx0Y29uc3QgaXNUYXJnZXQgPSAodGFyZ2V0KSA9PlxuXHRcdFx0Y2hpbGRyZW4uaW5jbHVkZXModGFyZ2V0KSB8fCB0YXJnZXQuY2xvc2VzdChzZWxlY3Rvcik7XG5cdFx0dGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKCFpc1RhcmdldChldmVudC50YXJnZXQpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRjYWxsYmFjayhldmVudCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAuanMnO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcblxubmV3IEFwcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9